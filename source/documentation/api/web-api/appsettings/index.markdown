---
comments: false
date: 2012-01-30 23:12:49
layout: page
published: false
slug: appsettings
title: App Settings
wordpress_id: 2487
---

BCC
Automatically BCC an address for every e-mail sent without adding to the header.
API Settings
App Name	Setting Field	Description
bcc	email	An email address that you would like to add to your BCC list.

Click Tracking
All links will be overwritten, shortened and pointed to our servers so we can track clicks. If you would like a custom name to appear in the links, create a CNAME that points to sendgrid.net and fill out the Whitelabel settings (only available in Silver or higher accounts) in your account with your new name.
API Settings
App Name	Setting Field	Description
clicktrack	enable	0 to disable
1 to enable


Email Templates
Wraps a HTML template around your email content. Useful for sending out newsletters and/or other HTML formatted messages.
API Settings
App Name	Setting Field	Description
template	enable	0 to disable
1 to enable
text/html	String that holds the template html body


Email to Phone Call
Send a voice phone message to any US phone number. We take the text portion of the email, convert it to voice and then feed it to a phone call.
To send a message, add 9998887766@phone to the To: field where 9998887766 is the 10 digit US phone number you want to call. The email must be plain text.
API Settings
Setting Field	Description
enable	0 to disable
1 to enable
text/html	String that holds the template html body

Event Notification
Controls notifications for events, such as bounces, clicks, opens, and more.
API Settings
Parameter	Setting	Description
processed	0 to disable | 1 to enable	Notify when email is processed.
dropped	0 to disable | 1 to enable	Notify when email is dropped
deferred	0 to disable | 1 to enable	Notify when email is deferred
delivered	0 to disable | 1 to enable	Notify when email is delivered
bounce	0 to disable | 1 to enable	Notify when email is bounced
click	0 to disable | 1 to enable	Notify when email is clicked
open	0 to disable | 1 to enable	Notify when email is openned
unsubscribe	0 to disable | 1 to enable	Notify when email is unsubscribed
spamreport	0 to disable | 1 to enable	Notify when email is being listed as spam
url	Ex: url=http://yourPostNotificationUrl.example.com	The post notification url to post these event messages to. This will override your default Post Event Notification Url if one is already set.

Footer
Inserts a footer at the bottom of the text and html bodies.
API Settings
App Name	Setting Field	Description
footer	enable	0 to disable
1 to enable
text/html	String that holds the html body
text/plain	String that holds the text body

Google Analytics
Re-writes links to integrate with Google Analytics.
API Settings
App Name	Setting Field	Required	Description
ganalytics	enable	YES	0 to disable
1 to enable
utm_source	YES	Name of the referrer source.
(e.g. Google, SomeDomain.com, NewsletterA)
utm_medium	YES	Name of the marketing medium. (e.g. Email)
utm_campaign	YES	Name of the campaign.
utm_term	NO	Identify paid keywords.
utm_content	NO	Use to differentiate ads.
Examples
How to track your emails using Google Analytics>>>http://blog.sendgrid.com/how-to-track-your-emails-using-google-analytics/

Gravatar
Inserts an  tag at the bottom of the HTML section of an e-mail to display the Gravatar associated with the e-mail sender.
API Settings
App Name	Setting Field	Required	Description
gravatar	enable	YES	0 to disable
1 to enable

Gravatar
Inserts an  tag at the bottom of the HTML section of an e-mail to display the Gravatar associated with the e-mail sender.
API Settings
App Name	Setting Field	Required	Description
gravatar	enable	YES	0 to disable
1 to enable

Open Tracking
Add an invisible image at the end of the email to track e-mail opens. If the email recipient has images enabled on the email client, a request to server for the invisible image is executed and an open is logged.
API Settings
App Name	Setting Field	Description
opentrack	enable	0 to disable
1 to enable

SPAM Filter Checker
The Spam Checker filter can provide notifications when e-mails are detected that exceed a predefined spam threshold.
If a message is flagged as spam using this filter, it will automatically be dropped by our system and will not be delivered to the recipient.
API Settings
App Name	Setting Field	Required	Description
spamcheck	enable	YES	0 to disable
1 to enable
maxscore	No	Emails with a spam score over this value will be considered spam and will not be delivered to the recipient. The default spam threshold is 5.0, but you can set this to any value you wish. We use SpamAssassin to process the spam checks for this filter, so you can base your maxscore setting on values typically used with SpamAssassin
url	No	URL to post the email and a copy of the detailed SpamAssassin report describing why the email was designated as spam

Subscription Tracking
Add automatic unsubscribe links to the bottom of emails.
SendGrid will keep track of these unsubscribes and ensure these users don't get future emails from the sender.
You can customize the unsubscribe text attached to emails and customize the landing page.
The links will look similar to sendgrid.net/unsubscribe/[encryptedString]. If you would like your custom name to appear in the links, create a CNAME that points to sendgrid.net and fill out the Whitelabel setting (available for Silver accounts and higher) in your account
API Settings
App Name	Setting Field	Required	Description
subscriptiontrack	enable	YES	0 to disable
1 to enable
text/html	YES	String for the HTML e-mail body
text/plain	YES	String for the plain text e-mail body
url	YES	
landing	YES	

Twitter
Update the status of a Twitter account or send a message to a Twitter follower.
The content of the email is what is sent to Twitter and it must be in plain text.
API Settings
App Name	Setting Field	Required	Description

username	YES	Your Twitter username
password	YES	Your Twitter password
