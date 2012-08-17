---
comments: false
date: 2011-08-08 14:09:06
layout: page
slug: filtersettings
title: Filter Settings
wordpress_id: 2542
following_users:
- brandon
tags:
- api
- apps
- filter
- filters
- Web API
---

For a more detailed description of each of the Apps below, please visit the [Apps](/documentation/apps) page.  
  




## Address Whitelist

[API App Name:  "addresswhitelist"]



> ## TIP >>
> 
> When using this call, you must define all emails & domains here. Using this call will overwrite any current settings for this filter. This would also be how you remove an entry, by excluding if from the call.









Parameter
Description
Example





list


A list of email addresses or domains.


Ex: list[]=support@example.com&list;[]=sale@example.com}










## BCC "Blind Carbon Copy"

[API app name: "bcc"]







Parameter
Description
Example





bcc


An email address to be the BCC recipient.


email@example.com










## Click Tracking

[API app name: "clicktrack"]







Parameter
Description
Example





enable_text


Enable click tracking in plain text emails.


0|1









## Domain Keys

[API app name:"domainkeys"]







Parameter
Description
Example


domain


The domain to sign messages as


example.com



sender


1 to insert a sender header if the domain specified does not match the from address
0 to never insert a Sender header


0|1



use_from


1 to use the domain in the From address of the email for signing. If this is set, the domain setting must not be set. If the domain setting is present it will overwrite the use_from setting.
0 to use the domain setting.


0|1









## DKIM

[API app name:"dkim"]







Parameter
Description
Example


domain


The domain you would like your DKIM certification signed with


example.com



use_from


If enabled, the domain in the From: header of the email will be used to sign your DKIM


0|1









## Email Templates

[API app name:"template"]







Parameter
Description
Example


text_html


A string that holds the template html body


<html>Content</html>










## Event Notification

[API app name:"eventnotify"]



> **NOTE >> **All fields are required for each call.









Parameter
Description
Example





processed


Notify when email is processed


0|1






dropped


Notify when email is dropped


0|1






deferred


Notify when email is deferred


0|1






delivered


Notify when email is delivered


0|1






bounce


Notify when email is bounced


0|1






click


Notify when email is clicked


0|1






open


Notify when email is opened


0|1






unsubscribe


Notify when email is unsubscribed


0|1






spamreport


Notify when email is marked as spam


0|1






url


The post notification url to post these event messages to


url=http://yourPostNotificationUrl.example.com









## Footer

[API app name:"footer"]







Parameter
Description
Example





text_html


String that holds the html body


<html>Content</html>






text_plain


String that holds the text body


Content









## Google Analytics

[API app name:"ganalytics"]







Parameter
Description
Example





utm_source


Name of the referrer source


Google, SomeDomain.com, or NewsletterA






utm_medium


Name of the marketing medium


Email, Affiliate, or MobileApp






utm_campaign


Name of the campaign


Quarter1, FallShoeSale






utm_term


Identify paid keywords


Poultry, Health






utm_content


Use to differentiate ads


PageA, PageB









## Gravatar

[API app name:"gravatar"]




Parameter
Description
Example





None


N/A


N/A










## Open Tracking

[API app name:"opentrack"]




Parameter
Description
Example





None


N/A


N/A










## Return Path Seedlist

[API app name:"seedlist"]




Parameter
Description
Example





seedlist_option








frequency


The number of times per day the Seedlist should be used








keyword_frequency










keywords










type










list


The addresses in the Seedlist


www.example.com/mylist.csv










## SPAM Filter Checker

[API app name:"spamcheck"]




Parameter
Description
Example





maxscore


Emails with a spam score over this value will be considered spam and will not be delivered to the recipient. The default spam threshold is 5.0, but you can set this to any value you wish. We use SpamAssassin to process the spam checks for this filter, so you can base your maxscore setting on values typically used with SpamAssassin


1.2






url


URL to post the email and a copy of the detailed SpamAssassin report describing why the email was designated as spam


www.example.com/spamcheck.php










## Subscription Tracking

[API app name:"subscriptiontrack"]




Parameter
Description
Example





text/html


String for the HTML e-mail body


If you would like to unsubscribe and stop receiving these emails &lt;% click here %&gt;






text/plain


String for the plain text e-mail body


If you would like to unsubscribe and stop receiving these emails click here: <% %>.






url


a URL the customer will be redirected to on clicking the subscription management link


www.example.com/UnsubscribeLandingPage






landing


HTML content for a landing page that will be displayed by SendGrid


<html>Content</html>






replace


a tag that can be added to the content that will be replaced by SendGrid with the subscription management link


[unsubscribe_tag]









## Twitter

[API app name:"twitter"]







Parameter
Description
Example





username


Your Twitter username


username






password


Your Twitter password


password



