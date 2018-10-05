---
layout: page
weight: 0
group: platform-partners
title: Building an iOS App on Windows Azure
navigation:
  show: true
---

## 	Point and Click Setup in Windows Azure

You can control a website, mobile backend and SendGrid all from within the Windows Azure management portal. We will cover all 3 of these in this tutorial.

To start, create a SendGrid account from the management portal:

1.	Click **New** at the bottom left.


![]({{root_url}}/images/azure_1.png)


2.	Click **Store** to load up the list of Add-ons.

3.	Select **SendGrid**.

![]({{root_url}}/images/azure_2.png)

4.	Then click the arrow at the lower right to go to step 2.
5.	Choose the Free plan for now for 25,000 free emails per month.

![]({{root_url}}/images/azure_3.png)

6.	Proceed to step 3 and click **Purchase**.

*To create a Windows Azure Website:*

1.	Click **New** at the bottom left.
2.	Select **Website**, then **Quick Create**.


![]({{root_url}}/images/azure_4.png)

3.	Set the URL, such as `website.azurewebsites.net`.
4.	Click **Create Web Site** on the bottom right.

That’s it! You now have a website running on Azure. Now let’s create something cool.

## 	Connect to the SendGrid Inbound Parse API
 	
SendGrid can both send and receive email for your domain name. The playlist app uses incoming mail, which means setting up DNS at your domain registrar or host. The process to do this is going to be different depending on who controls your DNS. This tutorial will walk through the Azure and SendGrid part of this process, but you may need to ask for help on changing DNS in your system.

It’s a good idea to choose a subdomain like playlist.example.com, rather than a domain itself. That’s because the Inbound Parse API must collect all mail and you don’t want to interrupt other email for your domain. To use custom domains in Windows Azure, your website will need to run in either Shared mode or the Standard tier; however, Shared mode is currently not available.

Find your IP address and note the further instructions in the management portal:

1.	Select your website from the list and then click SCALE on the top menu bar.

![Select]({{root_url}}/images/azure_5.png)

2.	Change the Web Site Mode to Shared, click **Save**, then select **Yes**.
3.	Click **Configure** at the top menu bar, then scroll down to click **Manage Domains**.
4.	Add your full subdomain plus domain, like playlist.example.com and click the check mark

![Add]({{root_url}}/images/azure_6.png)

5.	Note the IP address and the instructions on this page. You’ll use these at your host or registrar when you modify your DNS settings.

Now you need to update your own DNS settings outside of the Windows Azure interface. This points your domain’s web traffic to Windows Azure and your email to SendGrid. How you change your DNS depends on where your DNS is administered, which could be your host or domain registrar.

You’ll need to make 3 updates to your DNS:

1.	Create an A record for playlist.example.com that points to the IP noted above
2.	Create a CNAME record according to the instructions on the screen where you obtained the IP Address
3.	Create an MX record pointing to mx.sendgrid.net.

DNS changes can take an hour or more to propagate. Back at Windows Azure’s domain management page, wait for the red exclamation point to become a green checkmark.

While you're waiting for DNS to be ready, you can prepare your SendGrid Incoming Parse API webhook. From the Windows Azure interface:

1.	Click the **SendGrid App Service** from your all items list.
2.	In the management section, select  **Go to the SendGrid website for next steps**.

![Click]({{root_url}}/images/azure_7.png)

3.	Now you’re looking at the SendGrid interface--click **Developers** at the top.
4.	Click PARSE INCOMING EMAILS on the right and you’ll see some fields to fill out
![Click]({{root_url}}/images/azure_8.png)
5.	Fill in the values you’ve used for your hostname and URL. For example:

	* Hostname: `playlist.example.com`

	* URL: `http://website.azurewebsites.net/email`
6.	Click **Add Host & URL**.

Once the DNS has propagated, you’ll be able to receive email to any email address `@playlist.example.com`. In the next step, we’ll make sure your website on Windows Azure is ready to accept those emails.

## 	Prepare the Code to Run on Windows Azure
 	
Before you can put the code in place, you need to prepare your source control system, which will be Git in this case. Make sure you have Git installed on your local machine before proceeding. There are downloads for Windows, Mac, Linux and Solaris.
Now set up your repository within the Windows Azure interface:

1.	Click the website name from your all items list.
2.	Under quick glance, click **Set up deployment from source control**.
3.	Choose **local git repository**.
4.	Copy the Git URL to your clipboard--you will need it later, and it should look similar to `https://username@subdomain.scm.azurewebsites.net/playlist.git`

Now you need to set some environment variables, so you don’t expose these credentials in your code. Follow these steps to find those credentials:

*To find your SendGrid credentials within the Windows Azure management portal:*

1.	Click **SendGrid** from the all items list.
2.	In the bar on the bottom, click **Connection Info**.

![In]({{root_url}}/images/azure_9.png)

3.	A screen will pop up with your password, SMTP server, and username

To get your Rdio API Key, which you'll use to create your playlist, follow the “How to get started” instructions here: [http://developer.rdio.com](http://developer.rdio.com).

With the credentials in hand, it’s time to add them as environment variables within the Windows Azure management portal:

1.	Choose your web site from the all items list, then click **Configure**.
2.	Under “app settings” set the following KEY VALUE pairs

	* `SENDGRID_USER = username`

	* `SENDGRID_PASS = password`

	* `DOMAIN = playlist.example.com`

	* `RDIO_KEY = your_key`

	* `RDIO_SECRET = your_secret`

	* `XHR_POLLING_ONLY = 1`
3.	Click SAVE at the bottom

With your source control and environment variables set, it’s time to download the code that makes this app run. You will then upload that code to your Azure account.

Open up your command line on your local machine and prepare it for code:

1.	Create a local folder to house the code (e.g. `mkdir playlist`)
2.	Clone the code into that directory by executing this command:
`git clone git://github.com/theycallmeswift/playlist.sendgriddemos.com.git`
3.	`cd playlist.sendgriddemos.com`
4.	`git remote add azure git_url`

	* This is the long URL you saved from Windows Azure after
setting up source control.
5.	`git push azure master`

	* This is the command that pushes the code to Azure cloud

One last thing, you need to update the receiving email address:

1.	Open up `public/index.html`
2.	Change the email in `index.html` (line 25) to the email address you want to use. Something like `play@playlist.example.com`
3.	`git add .`

	* This adds the modified file for upload
4.	`git commit -m "Updating email address"`
5.	`git push azure master`

	* Again, this pushes the code to Azure cloud

With your changes pushed to Azure, you can restart the server with the button at the bottom of the web server’s dashboard. Then click the BROWSE button within the same menu to see your website live. At this point, people can send in their song requests, assuming that the DNS has propagated.

## 	Add a Backend Using Windows Mobile Services
 	
Windows Azure can also run a backend-as-a-service for your app, which allows you to store data, authenticate users, send push notifications, and do other common mobile tasks. This backend can also be used for non-mobile applications.

Follow these steps to enable Mobile Services from the Windows Azure interface:

1.	Click NEW at the bottom left, select MOBILE SERVICE, then click **Create**.
2.	Choose a URL -- this is up to you, it will be internal to your app

![Choose]({{root_url}}/images/azure_10.png)

3.	Click **Next**.
4.	Choose a Server Login Name and Password
5.	Choose **Configure advanced database settings**.

![Choose]({{root_url}}/images/azure_11.png)

6.	Click **Next**, then review and click **Complete**.

*To add a table to the database:*

1.	Click on the name of your mobile service to access its settings
2.	Click **Data**, then Add a Table
3.	Choose a table name, update permissions and click **Complete**.

![Choose]({{root_url}}/images/azure_12.png)

In your index.html file add the following code near the closing body tag to add the Windows Mobile Services library to your app:

``` html
<script src="https://website.azure-mobile.net/client/MobileServices.Web-1.0.0.min.js"></script>
```
![Mobile Services]({{root_url}}/images/azure_13.png)

In the `js/app.js` file, after the `$("#queue").append…` line, add the following code:

``` javascript
var client = new WindowsAzure.MobileServiceClient("https://website.azure-mobile.net/",  "<Password>");
var item = { request: data.name, song: data.track, user: data.user };
client.getTable("playlist_songs").insert(item);
```

To allow for your app to have access to the DB, add your URL to the cross origin resource sharing (cors) setting.

![cors]({{root_url}}/images/azure_14.png)

Add your changes via git and push to Azure.

Now your website, mobile service, and SendGrid account are all in harmony on Windows Azure. You could stop here, but to see the real power of Mobile Services, you’ll want to create a native mobile application.

## 	Connect Windows Azure Mobile Services to iOS
 	
The Windows Azure Mobile Services SDK simplifies the process of standing up a backend for your app in Windows Azure. The Windows Azure team also has SDKs for Android, HTML, Windows Store, and Windows Phone. For this example we’re going to use iOS.

We can download a pre-packaged mobile app from within the Windows Azure interface:

1.	Click the name of your mobile service from the all items menu.
2.	You should see the quickstart tab. Click iOS then Create a new iOS app.
3.	Click **Download** to grab the source code.

![Download]({{root_url}}/images/azure_15.png)

To create a native iPhone app, you’ll need to have XCode installed on a Mac. It’s a big download (over 1 GB), so find something to do while you wait.

Now you’ll want to edit the sample app you downloaded from Windows Azure:

1.	Expand the files on your computer and open the project file using XCode.
2.	Update the credentials and table name in `QSTodoService.m` with the ones you used when you created your mobile service.

![Credentials]({{root_url}}/images/azure_17.png)

3.	Update the function refreshDataOnSuccess in `QSTodoService.m` to return all from the queue. Remove the existing code there and replace it with:

``` objc
// Return all song request titles from the table
// items: An NSArray of the records that matched your query.
// totalCount: The total count of items in all pages of the query, not just those returned in the current page. This value is set to -1, unless you explicitly request the total count in your request. For more info, see Return data in pages.
// error: Any error that occurred; otherwise nil.
[self.table readWithCompletion:^(NSArray *results, NSInteger totalCount, NSError *error) {
[self logErrorIfNotNil:error];
items = [results mutableCopy];
// Let the caller know that we finished
completion();
}];
```
![Code]({{root_url}}/images/azure_18.png)
4.	Now, go to the file QSToDoListViewController.m, and replace the onAdd function’s contents with:

``` objc
// Populate the parameters for the SendGrid Web API Call
// Find more details about the [Web API here]({{root_url}}/api-reference/).
NSString *username = @"<Your SendGrid Username>";
NSString *apikey = @"<Your SendGrid Password>";
NSString *to = @"<Email to Playlist Service from Appendix A>";
NSString *from = @"<From Email Address>";
NSString *fromname = @"<Your Name>";
NSString *text = @"%20";

// Make sure the data received from the text field is formatted properly
NSString *subject = [itemText.text stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];

// Generate the Web API call
NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"https://api.sendgrid.com/api/mail.send.json?to=%@&from=%@&fromname=%@&subject=%@&text=%@&api_user=%@&api_key=%@",to, from, fromname, subject, text, username, apikey]];

// This writes the composed URL in the XCode console for debugging purposes
NSLog(@"URL %@",url);

// Create a request object using the URL
NSURLRequest *request = [NSURLRequest requestWithURL:url];

// Prepare for the response back from the server
NSHTTPURLResponse *response = nil;
NSError *error = nil;

// Send a synchronous request to the server
NSData *responseData = [NSURLConnection sendSynchronousRequest:request returningResponse:&response error:&error];

// Error handling
if (error != nil) {
NSLog(@"%@", [error localizedDescription]);
UIAlertView *message = [[UIAlertView alloc] initWithTitle:@"Error"
                                             message:@""
                                            delegate:nil
                                   cancelButtonTitle:@"OK"
                                   otherButtonTitles:nil];
[message show];
}
itemText.text = @"";
```
5.	In the same file, replace this line:
```label.text = [item objectForKey:@"text"];```
with this line:
```label.text = [item objectForKey:@"request"];```

Now you can make some adjustments to the interface:

1.	Click on the storyboard, then the **Text Input** field.

![Click]({{root_url}}/images/azure_19.png)

2.	On the right, change the placeholder text to read: “Enter your song request”
3.	Next, double click on the button and rename it to “Send”. You will have to adjust the size of the text box and button by single clicking and adjusting.

![Buttons]({{root_url}}/images/azure_20.png)

Your project in XCode should look like the above screenshot. When you run the iPhone app, you should be able to see requested songs and add your own songs to the shared playlist.

The code for this tutorial is available at our [GitHub page](https://github.com/sendgrid/sendgrid-azure-ios/). Enjoy!
