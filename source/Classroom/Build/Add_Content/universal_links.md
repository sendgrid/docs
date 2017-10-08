---
seo:
  title: Universal Links
  description: Learn how to set up universal links with click tracking in your emails.
  keywords: deep links, universal links, Google, android, Apple, iOS, app, click tracking
title: Universal Links
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [What are Universal Links?](#-What-are-universal-links)
* [Requirements](#-Requirements)
* [What are "apple-app-site-association" and "digital asset links" files?](#-What-are-appleappsiteassociation-and-digital-asset-links-files)
* [Setting Up Universal Links Using CloudFront](#-Setting-Up-Universal-Links-Using-CloudFront)
* [Setting Up Universal Links Using NGINX](#-Setting-Up-Universal-Links-Using-NGINX)
* [Flagging Your Universal Links](#-Flagging-Your-Universal-Links)
* [Resolving SendGrid Click Tracking Links](#-Resolving-SendGrid-Click-Tracking-Links)

{% anchor h2 %}
What are universal links?
{% endanchor %}

Mobile devices are increasingly becoming the preferred method of receiving, reading, and engaging with email. If you send an email containing a link to your website, but you also have a corresponding mobile application, it is possible to ensure that any recipients who click the link on their mobile device are taken directly to your app instead of their web browsers.

This is accomplished by using **universal links**. A universal link is a unique URL that can be configured to open a window in either the recipient's web browser, mobile browser, or mobile application depending on the device the recipient is using. SendGrid enables you to simply tag individual links that you would like to be converted to universal links, without sacrificing the ability to track clicks on those links.

{% info %}
These links are sometimes referred to as "deep links" in the context of Google's Android OS. Apple uses the term "universal links".

Regardless of the OS you are configuring your links for, we will use the term "universal links".
{% endinfo %}

When setting up universal links for your app, it is important to ensure that you maintain the ability to track when users click those links. After configuring your universal links, we will explain [how to ensure that your universal links are tracked](#-Resolving-SendGrid-Click-Tracking-Links).

{% warning %}
**Marketing Campaigns does not support universal links by default!** If you would like to include universal links in your campaign, you must ensure that you edit the HTML of your template to appropriately [flag your links as universal](#-Flagging-Your-Universal-Links).
{% endwarning %}

{% anchor h2 %}
Requirements
{% endanchor %}

There are several requirements that you must complete before you can begin using universal links in your email:

- Universal links for iOS require an "apple-app-site-association" JSON file. 
- Universal links for Android require that you set up an "digital asset links" JSON file, along with configuring intent filters in your Android app's manifest file.
- Your **apple-app-site-association** and **digital asset links** files must be hosted on an HTTPS web server or content delivery network (CDN).
- To ensure that your universal links register click tracking events, and to ensure that your recipient is taken to the correct page within your app, you must properly [resolve your links](#-Resolving-SendGrid-Click-Tracking-Links).
- You must complete the [link whitelabeling process]({{root_url}}/User_Guide/Settings/Whitelabel/links.html) for your account. When whitelabeling your links, you must use the same domain that will be used for your universal links. (e.g. links.example.com) 
- On iOS, you must include your email link whitelabel subdomain in the "Associated Domains" for your app. Using the example above, you'd need to add an entry for "applinks:links.example.com" like this:
![]({{root_url}}/images/universal_links_ios.png)

{% anchor h2 %}
What are "apple-app-site-association" and "digital asset links" files?
{% endanchor %}

To keep your app secure, Google and Apple want to restrict which resources or websites are allowed to link directly to different pages within your app. This prevents bad actors from using universal links to gain access to sensitive information within your app.

Your "apple-app-site-association" and "digital asset links" files serve as secure means of authenticating your universal links; they verify that your website is allowed to open up a page within your app.

{% info %}
You must create your own digital asset links and apple-app-site-association files, and you must upload these files to a secure server.
{% endinfo %}

Both "apple-app-site-association" and "digital asset links" files are comprised of a series of JSON key/value pairs that associate external URLs with pages within your application.

**For detailed instructions on how to configure an iOS "apple-app-site-association" file, please see [Apple's Developer Documentation](https://developer.apple.com/library/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).**

**For detailed instructions on how to configure an Android "digital asset links" file, please visit [Google's Developer Documentation](https://developers.google.com/digital-asset-links/v1/getting-started).**


{% anchor h3 %}
Example apple-app-site-association file:
{% endanchor %}

{% codeblock lang:json %}
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "[YOUR APP ID HERE]",
        "paths": [
          "/uni/*"
        ]
      }
    ]
  }
}
{% endcodeblock %}

{% info %}
**Do not** append the .json file extension to your apple-app-site-association file!
{% endinfo %}

{% anchor h3 %}
Example assetlinks.json file:
{% endanchor %}

{% codeblock lang:json %}
[
  {
    "target": {
      "namespace": "android_app",
      "package_name": "[YOUR APP’S PACKAGE NAME]",
      "sha256_cert_fingerprints": [
        "[YOUR APP FINGERPRINT HERE]"
      ]
    },
    "relation": [
      "delegate_permission/common.handle_all_urls"
    ]
  }
]
{% endcodeblock %}

{% info %}
When configuring your universal links for Android devices, you must specify which URLs should be handled by the app and which should not.

For iOS this is set in the "apple-app-site-association" file by including "paths": ["/uni/\*"], indicating that any URL containing the path "/uni/" should be opened in your app.

Android requires that you specify these paths inside your app, rather than the assetlinks.json file. This is accomplished by adding intent filters for specific hosts and paths. Please visit [Google's Developer Documentation](https://developer.android.com/training/app-indexing/deep-linking.html) to learn how to add an intent filter to your app manifest that can handle your universal links.
{% endinfo %}


Once you have created and configured your Android and iOS configuration files, you will have to host them on a secure HTTPS server. Keep reading below to learn how you can host these files on either [Amazon CloudFront](https://aws.amazon.com/cloudfront/) or [NGINX](https://www.nginx.com/).

{% anchor h2 %}
Setting Up Universal Links Using CloudFront
{% endanchor %}

After creating your iOS "apple-app-site-association" file and/or your Android "digital asset links" file, you need to host them on a secure content delivery network. The following instructions will guide you through setting up Amazon's CloudFront to host these files.

1. Navigate to [Amazon CloudFront](https://aws.amazon.com/cloudfront/). Once you have created an account or are logged into your existing account, create a new **S3 bucket** and give it a unique name (e.g. links-example-com)

2. Upload your "apple-app-site-association" file into the root of the new S3 bucket

3. Under **Permissions** on the uploaded file, add a permission for **Everyone** to **Open/Download** (or **Read** in the new S3 UI), then hit **Save**

4. Under **Metadata** on the uploaded file, change the **Content-Type** value to **application/json**, then hit **Save**

    ![]({{root_url}}/images/universal_links_1.png)
5. Create a new folder in the bucket called “.well-known”

6. Inside of the ".well-known" folder, upload the same "apple-app-site-association" file as in step 2

7. As above, add a permission for **Everyone** to **Open/Download** (or **Read** in the new S3 UI) and change the Content-Type to “application/json”

8. Inside of the “.well-known” folder, upload your “assetlinks.json”

9. Repeat step 7 for your "assetlinks.json" file: add a permission for **Everyone** to **Open/Download** (or **Read** in the new S3 UI) and change the Content-Type to “application/json”

10. Navigate to the **AWS Certificate Manager**

11. Request a new certificate for the domain your link whitelabel is configured for (e.g. links.example.com)

12. AWS will send an email to the appropriate domain owners, requesting them to approve the certificate

    ![]({{root_url}}/images/universal_links_2.png)
13. Ensure that the certificate is approved and issued

14. Navigate to AWS CloudFront

15. Create a new Distribution that is a Web delivery method

16. Under the **Origin Settings** section, set the fields as follows:

    ![]({{root_url}}/images/universal_links_3.png)

    * **Origin Domain Name:** sendgrid.net
    * **Origin ID:** sendgrid.net
    * **Origin SSL Protocols:** only TLSv1.2
    * **Origin Protocol Policy:** HTTPS Only
17. Under the **Default Cache Behavior Settings** section, set the fields as follows:

    ![]({{root_url}}/images/universal_links_4.png)

    * **Forward Headers:** Yes
    * **Forward Query Strings:** Forward all, cache based on all
18. Under the **Distribution Settings** section, set the fields as follows:

    ![]({{root_url}}/images/universal_links_5.png)

    * **Alternate Domain Names:** links.example.com
    * **SSL Certificate:** Custom SSL Certificate, pointing to the appropriate ACM certificate
19. Hit **Create Distribution**

20. Once the distribution is created, click into **Distribution Settings**

21. Under the **Origins** tab, create a new origin with the following details

    ![]({{root_url}}/images/universal_links_6.png)

    * **Origin Domain Name:** links-example-com.s3.amazonaws.com
    * **Origin ID:** s3
22. Click **Create**

23. Under the **Behaviors** tab, create a new behavior with the following details

    ![]({{root_url}}/images/universal_links_7.png)

    * **Path Pattern:** apple-app-site-association
    * **Origin:** s3
    * **Viewer Protocol Policy:** HTTPS Only
24. Click **Create**

25. Create another behavior with the following details

    * **Path Pattern:** .well-known/apple-app-site-association
    * **Origin:** s3
    * **Viewer Protocol Policy:** HTTPS Only
26. Click **Create**

27. Create a third behavior with the following details

    * **Path Pattern:** .well-known/assetlinks.json
    * **Origin:** s3
    * **Viewer Protocol Policy:** HTTPS Only
28. Hit **Create**

29. Ensure that the **Behaviors** are sorted so that the **Default** is the last onNewIntent

    ![]({{root_url}}/images/universal_links_8.png)
30. Wait for the distribution to deploy

31. Verify that the distribution serves up the expected files (do this without changing the real DNS to avoid causing any issues with existing links)

    * https://links.example.com/apple-app-site-association
    * https://links.example.com/.well-known/apple-app-site-association
    * https://links.example.com/.well-known/assetlinks.json
    * https://links.example.com/wf/click?upn=

32. Verify behavior using [https://branch.io/resources/universal-links/](https://branch.io/resources/universal-links/)

{% anchor h2 %}
Setting Up Universal Links Using NGINX
{% endanchor %}

After creating your iOS "apple-app-site-association" file and/or your Android "digital asset links" file, you need to host them on a secure content delivery network. The following instructions will guide you through setting up NGINX to host these files.

1. Request a new certificate for the domain your link whitelabel is configured for (e.g. links.example.com)

2. Place the certificate chain into the file named **/etc/pki/tls/certs/links.example.com.crt**

3. Place the private key into the file named **/etc/pki/tls/private/links.example.com.key**

4. Create the following directory **/var/www/links.example.com**

5. Create the file **/var/www/links.example.com/apple-app-site-association**, with the appropriate content for your apple-app-site-association file, as explained in [Apple's Developer Documentation](https://developer.apple.com/library/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).

6. Create the directory **/var/www/links.example.com/.well-known**

7. Create the file **/var/www/links.example.com/.well-known/apple-app-site-association**, with the appropriate content for your apple-app-site-association file

8. Create the file **/var/www/links.example.com/.well-known/assetlinks.json**, with the appropriate content for your digital asset links file, as explained in [Google's Developer Documentation](https://developers.google.com/digital-asset-links/v1/getting-started#key-terms).

9. Create the file **/etc/nginx/conf.d/links.example.com.conf**, with the following content:

{% codeblock %}

server {
  listen 80;
  listen 443 ssl;
  server_name 'links.example.com';
  ssl_certificate '/etc/pki/tls/certs/links.example.com.crt';
  ssl_certificate_key '/etc/pki/tls/private/links.example.com.key';
  location = /apple-app-site-association {
    root '/var/www/links.example.com';
    default_type 'application/json';
  }
  location = /.well-known/apple-app-site-association {
    root '/var/www/links.example.com';
    default_type 'application/json';
  }
  location = /.well-known/assetlinks.json {
    root '/var/www/links.example.com';
    default_type 'application/json';
  }
  location / {
    proxy_pass 'https://sendgrid.net';
    proxy_set_header 'Host' 'links.example.com';
  }
}

{% endcodeblock %}

{% anchor h2 %}
Flagging Your Universal Links
{% endanchor %}

{% info %}
It is important to make sure that only the links within your email that point to your app are flagged as universal links.
{% endinfo %}

It is not unusual to include links to pages outside of your app alongside links to your app in the same email. Not all of these links should be treated as universal links. For example, if you have Facebook or Twitter links tagged as universal links, users will be taken to your app when they click those links instead of being taken to your Facebook and Twitter pages.

**To flag links to your app as universal links, simply include the attribute `universal="true"` within the HTML link of your email.**

For example:

`<a href="links.example.com" universal="true">Link to your app!</a>`

If you exclude the `universal="true"` attribute, your links will still function, but they will take your recipient to their mobile browser.

{% anchor h2 %}
Resolving SendGrid Click Tracking Links
{% endanchor %}

{% anchor h3 %}
Handling Click Tracking Links In Your App
{% endanchor %}

Now that you've successfully set up your app to open SendGrid click tracking links, you'll want to ensure that your app handles them properly. The link your app receives will be the SendGrid encoded link, so you'll want to resolve the link in order to:

1. Trigger the "click" event in your SendGrid account for statistics.
2. Find the original URL to determine which part of your app the user should be taken to.

The following code examples help to illustrate what logic should be included within your own app to guarantee that your links are resolved, and tracked by SendGrid.

{% anchor h3 %}
Resolving Links in iOS
{% endanchor %}

If you have written your app for iOS, you can use `NSURLSession` resolve the link.

For example:

#### Using Swift

{% codeblock %}

func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([Any]?) -> Void) -> Bool {
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        guard let encodedURL = userActivity.webpageURL else {
            print("Unable to handle user activity: No URL provided")
            return false
        }
        let task = URLSession.shared.dataTask(with: encodedURL, completionHandler: { (data, response, error) in
            guard let resolvedURL = response?.url else {
                print("Unable to handle URL: \(encodedURL.absoluteString)")
                return
            }
            // Now you have the resolved URL that you can
            // use to navigate somewhere in the app.
            print(resolvedURL)
        })
        task.resume()
    }
    return true
}

{% endcodeblock %}

#### Using Objective-C

{% codeblock lang:m %}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
    if (userActivity.activityType == NSUserActivityTypeBrowsingWeb) {
        NSURL *encodedURL = userActivity.webpageURL;
        if (encodedURL == nil) {
            NSLog(@"Unable to handle user activity: No URL provided");
            return false;
        }
        NSURLSession *session = [NSURLSession sharedSession];
        NSURLSessionDataTask *task = [session dataTaskWithURL:encodedURL completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            if (response == nil || [response URL] == nil) {
                NSLog(@"Unable to handle URL: %@", encodedURL.absoluteString);
                return;
            }
            // Now you have the resolved URL that you can
            // use to navigate somewhere in the app.
            NSURL *resolvedURL = [response URL];
            NSLog(@"Original URL: %@", resolvedURL.absoluteString);
        }];
        [task resume];
    }
    return YES;
}

{% endcodeblock %}

{% anchor h3 %}
Resolving Links in Android
{% endanchor %}

If you have written your app for Android, you can use `HttpURLConnection` to resolve the URL by setting `setInstanceFollowRedirects` to `false`.

For example:

#### Using Java

{% codeblock lang:java %}

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    onNewIntent(getIntent());
}

protected void onNewIntent(Intent intent) {
    String action = intent.getAction();
    final String encodedURL = intent.getDataString();
    if (Intent.ACTION_VIEW.equals(action) && encodedURL != null) {
        Log.d("App Link", encodedURL);
        new Thread(new Runnable() {
            public void run() {
                try {
                    URL originalURL = new URL(encodedURL);
                    HttpURLConnection ucon = (HttpURLConnection) originalURL.openConnection();
                    ucon.setInstanceFollowRedirects(false);
                    URL resolvedURL = new URL(ucon.getHeaderField("Location"));
                    Log.d("App Link", resolvedURL.toString());
                }
                catch (MalformedURLException ex) {
                    Log.e("App Link",Log.getStackTraceString(ex));
                }
                catch (IOException ex) {
                    Log.e("App Link",Log.getStackTraceString(ex));
                }
            }
        }).start();
    }
}

{% endcodeblock %}
