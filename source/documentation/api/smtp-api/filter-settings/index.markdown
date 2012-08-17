---
comments: false
date: 2011-06-28 14:43:10
layout: page
slug: filter-settings
title: Filter Settings
wordpress_id: 1538
following_users:
- brandon
---

Following are the filters that can be specified in the **filters** section of the X-SMTPAPI header. All filter and setting names must be lowercase.
Please note, that if a filter is not specified in the X-SMTPAPI header, it will default to the setting of the app in the "Apps" tab on the website (either Enabled or Disabled).
_For more information on the utility of these apps, please check out the [Apps](/documentation/apps/) section._  
  


**Filter - 'gravatar':** Inserts an img tag at the bottom of the html section of an e-mail to display the gravatar associated with the mail sender.








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App





**Filter - 'clicktrack':** Rewrites links in e-mail text and html bodies to go through our webservers, allowing for tracking when a link is clicked on.








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App





**Filter - 'subscriptiontrack':** Inserts a subscription management link at the bottom of the text and html bodies. Custom text is set in the settings, with the subscription management link being substituted into the text either as ‘% %’ for plain text bodies, and as a link where the text in between the ‘%’ and ‘%’ is the link text.








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






text/html


<html>...%Here%...</html>


String for HTML body. Example: "Unsubscribe <%Here%>", where "Here" would be linked.






text/plain


...<% %>...


String for text body. Example: Unsubscribe Here: <% %>






replace


string


a tag that can be added to the content that will be replaced by SendGrid with the subscription management link, e.g. [unsubscribe_tag]






url


http://www.example.com/landing.html


To go to your own subscription management landing page, instead of our default page.






landing


<HTML>...</HTML>


To make a custom subscription management landing page, still hosted on our server.





**Filter - 'opentrack':** Inserts an <img> tag at the bottom of the html section of an e-mail which will be used to track if an e-mail is opened








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App





**Filter - 'footer':** Inserts a footer at the bottom of the text and html bodies








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






text/html


<html>...</html>


String containing html body






text/plain


string


String containing text body





**Filter - 'spamcheck':** Tests message with SpamAssassin to determine if it is spam, and drop it if it is








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






maxscore


-10.0 to 10.0


Score after which the message will be dropped (default is 5.0)






url


http://www.example.com/spam_post.php


an optional url to post the email and a copy of the report to





**Filter - 'ganalytics':** Re-writes links to integrate with Google Analytics








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






utm_source


string


Value for the utm_source field






utm_medium


string


Value for the utm_medium field






utm_term


string


Value for the utm_term field






utm_content


string


Value for the utm_content field






utm_campaign


string


Value for the utm_campaign field





**Filter - 'domainkeys':** Allows you to specify the domain to use to sign messages with Domain Keys. This domain should match the domain in the From address of your e-mail. For more info, check out these [details on Domain Keys.](http://docs.sendgrid.com/documentation/apps/domain-keys/)







Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






domain


www.example.com


The domain to sign messages as






sender


0|1


1 - Insert a Sender header if the domain specified does not match the From address. 0 - never insert a Sender header





**Filter - 'dkim':** Allows you to specify the domain to use to sign messages with DKIM certification. This domain should match the domain in the From address of your e-mail. For more info, check out these [details on DKIM.](http://docs.sendgrid.com/documentation/apps/dkim/)








Parameter
Description
Example





domain


The domain you would like your DKIM certification signed with


example.com






use_from


If enabled, the domain in the From: header of the email will be used to sign your DKIM


0|1





**Filter - 'template':** Wraps a template around your email content. Useful for sending out newsletters and other nicely formatted messages








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App






text/html


<html>......</html>


String containing html content for the template (must contain tag)





**Filter - 'bcc':** sends a BCC copy of the email created in this transaction to the address specified








Parameter Name
Parameter Value
Parameter Description





email


name@domain.com


email address destination for the bcc message





**Filter - 'forwardspam':** Allows for a copy of spam reports to be forwarded to an email address








Parameter Name
Parameter Value
Parameter Description





email


name@domain.com


email address destination for the bcc message





**Filter - 'bypass_list_management':** Some e-mails are too important to do normal list management checks, such as password resets or critical alerts. Enabling this filter will bypass the normal unsubscribe / bounce / spam report checks and queue the e-mail for delivery.








Parameter Name
Parameter Value
Parameter Description





enable


0|1


Disable or enable this App




