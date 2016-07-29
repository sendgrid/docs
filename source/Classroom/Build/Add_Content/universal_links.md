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
What are universal links?
{% endanchor %}

Mobile devices are increasingly becoming the preferred method of receiving, reading, and engaging with email. If you send an email containing a link to your website, but you also have a corresponding mobile application, it is possible to ensure that any recipients who click the link on their mobile device are taken directly to your app instead of their web browsers.

This is accomplished by using **universal links**. A universal link is a unique URL that can be configured to open a window in either the recipient's web browser, mobile browser, or mobile application depending on the device the recipient is using.

{% info %}
These links are sometimes referred to as "deep links" in the context of Google's Android OS. Apple uses the term "universal links".

Regardless of the OS you are configuring your links for, we will use the term "universal links".
{% endinfo %}

Furthermore, if the user opens the link on a mobile device, but they don't have your app installed, it is possible to link them to your app's page on the app store (either Apple's App Store or Google Play). These are called **deferred universal** links.

{% anchor h2 %}
Requirements
{% endanchor %}

There are several requirements that you must complete before you can begin using universal links in your email:

- Universal links for iOS require an "apple-app-site-association" file.
- Universal links for Android require that you set up an "app manifest" file.
- Your apple-app-site-association and app manifest files must be hosted on an HTTPS web server or content delivery network (CDN).
- To ensure that your universal links register click tracking events, and to ensure that your recipient is taken to the correct page within your app, you must resolve your links.

{% anchor h2 %}
What are "apple-app-site-association" and "app manifest" files?
{% endanchor %}

To keep your app secure, Google and Apple want to restrict which resources or websites are allowed to link directly to different pages within your app. This prevents bad actors from using universal links to gain access to sensitive information within your app.

"Apple-app-site" and "app manifest" files serve as secure means of authenticating your universal links; they verify that your website is allowed to open up a page within your app.

{% info %}
You must create your own manifest and association files, and you must upload these files to a secure server.
{% endinfo %}

{% anchor h2 %}
Setting Up Universal Links Using CloudFront
{% endanchor %}

[SEE INSTRUCTIONS FROM COLLIN M]

{% anchor h2 %}
Setting Up Universal Links Using NGINX
{% endanchor %}

[SEE INSTRUCTIONS FROM COLLIN M]

{% anchor h2 %}
Resolving SendGrid Click Tracking Links
{% endanchor %}

{% anchor h3 %}
Handling Click Tracking Links In Your App
{% endanchor %}

Now that you've successfully set up your app to open SendGrid click tracking links, you'll want to ensure that your app handles them properly. The link your app receives will be the SendGrid encoded link, so you'll want to resolve the link in order to:

1. Trigger the "click" event in your SendGrid account for statistics.
2. Find the original URL to determine which part of your app the user should be taken to.

{% anchor h3 %}
Resolving Links in iOS
{% endanchor %}

In iOS, you can use `NSURLSession` resolve the link.

For example:

{% codeblock %}

func application(application: UIApplication, continueUserActivity userActivity: NSUserActivity, restorationHandler: ([AnyObject]?) -> Void) -> Bool {
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        guard let encodedURL = userActivity.webpageURL else {
            print("Unable to handle user activity: No URL provided")
            return false
        }
        let session = NSURLSession(configuration: NSURLSessionConfiguration.defaultSessionConfiguration())
        let task = session.dataTaskWithURL(encodedURL, completionHandler: { (data, response, error) -> Void in
            guard let resolvedURL = response?.URL else {
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

{% codeblock lang:m %}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
    if (userActivity.activityType == NSUserActivityTypeBrowsingWeb) {
        NSURL *encodedURL = userActivity.webpageURL;
        if (encodedURL == nil) {
            NSLog(@"Unable to handle user activity: No URL provided");
            return false;
        }
        NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
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

For Android, you can use `HttpURLConnection` to resolve the URL by setting `setInstanceFollowRedirects` to `false`.

For example:

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
                    URL orginalURL = new URL(encodedURL);
                    HttpURLConnection ucon = (HttpURLConnection) orginalURL.openConnection();
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
