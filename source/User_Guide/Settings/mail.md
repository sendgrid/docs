---
seo:
  title: Mail Settings
  description: Manage your SendGrid mail settings
  keywords: sendgrid mail settings, email settings, sending settings
title: Mail
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
This page refers to our beta UI functionality. To find these features, please click the “Beta” button at the top of the SendGrid Customer Portal.
{% endinfo %}

Mail Settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API]({root_url}/API_Reference/Web_API/mail.html) or [SMTP Relay]({root_url}/Glossary/smtp_relay.html). 

{% anchor h2}
Address Whitelist
{% endanchor %}

The Address Whitelist App whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain example.com, and one or more of your recipients use email@example.com addresses, by placing example.com in the Address Whitelist App, all bounces, blocks and unsubscribes logged for that domain will be ignored and sent to as if under normal sending conditions.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Emails/Domains** - Either a single email or the domain, for which all emails belonging to this domain will be whitelisted.

{% anchor h2}
BCC
{% endanchor %}

{% warning %}
With this setting turned on, you will be charged an extra credit for every email you send. 
{% endwarning %}

Automatically sends a blind carbon copy to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Email to BCC To** - Click “edit” to add an email address to which all emails you send will be Blind Carbon Copied.

{% anchor h2}
Bounce Purge
{% endanchor %}

Allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists. 

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Soft Bounces** - The number of days, after which SendGrid will purge all contacts from your soft bounces suppression lists.
**Hard Bounces** - The number of days, after which SendGrid will purge all contacts from your hard bounces suppression lists.

{% anchor h2}
Event Notification

The Event Notification App controls webhook notifications for events, such as bounces, clicks, opens, and more. This App allows these events to be POSTed to a URL of your choosing.

Please see our technical [Event Webhook API docs](/API_Reference/Webhooks/event.html) for more information about Event Webhook.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**HTTP Post URL** - The URL you would like us to send all event notifications.
**Select Actions** - Check the boxes for which events you would like sent to your webhook endpoint.

{% anchor h3 %}
Other features
{% endanchor %}

**Test Your Integration** - Once you have a valid URL entered, this button will be made active. When you click the button, we will attempt to send a test post to your webhook code. If we see any issues, we will notify you in a warning message at the top of your browser.

{% anchor h2}
Footer
{% endanchor %}

The Footer App will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and Plain Text entry fields to create the content of the footers to be inserted into your emails.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Footer** - HTML Body: Click “edit” to add your custom footer content.

{% anchor h2}
Forward Bounce
{% endanchor %}

{% info %}
You will not be charged email credits when these reports are forwarded to you.
{% endinfo %}

Activating this App allows you to specify an email address to which bounce reports are forwarded. Insert the email address to which you would like to receive these bounce reports.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Email** - Click “edit” to add an email address where you’d like bounce emails to be forwarded. 

{% anchor h2}
Forward Spam
{% endanchor %}

{% info %}
You will not be charged email credits when these reports are forwarded to you.
{% endinfo %}

Activating this App allows you to specify an email address to which spam reports are forwarded. Insert the email address to which you would like to receive spam reports.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Email** - Click “edit” to add an email address where you’d like spam to be forwarded.

{% anchor h2}
Legacy Email Template
{% endanchor %}

{% warning %}
This setting is for our original Email Templates, today we have a more full featured [Template Engine]({root_url}/User_Guide/Templates/index.html), which supports multiple templates, versioning and more.
{% endwarning %}

This app wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages. Use the embedded, full-featured HTML editor to create a template that your emails will be wrapped in. Be sure to include a tag to place the content of your email.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Template** - Click “edit” to define your HTML template within the WYSIWYG editor. 

{% anchor h2}
Plain Content
{% endanchor %}

The Plain Content app will automatically convert any plain text emails that you send to HTML before sending.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off

{% anchor h2}
Spam Checker
{% endanchor %}

The Spam Checker app, is useful when your web application allows your end users to create content that is then emailed through your SendGrid account. Since emailing user generated content is hard to monitor and can often be abused by spammers, the Spam Checker filter notifies you when emails are detected that exceed a predefined spam threshold.

{% warning %}
The Default Value for this App is 5.0, and can be ranged between 1 and 10. The lower the number, the more strict the filtering. For example, a value of 2 will drop all but the most flawless emails, whereas 9 will only drop the spammiest of spam emails.
{% endwarning %}

We use [SpamAssassin](http://spamassassin.apache.org/full/3.4.x/doc/Mail_SpamAssassin_Conf.html#scoring_options) to process the spam checks for this filter. The default threshold is 5.0, but you can set this to any value between 1 and 10. If you provide a URL, we will post the message to that URL, but this field is optional. If a message is flagged as spam using this filter, it will automatically be dropped by our system and will not be delivered to the recipient.

{% anchor h3}
Settings
{% endanchor %}

**Status** - On or Off
**Spam Threshold** - Click “edit” to change the threshold from 1-10 (see above)
**URL To Post Spam Messages To** - Click “edit” to provide an Inbound Parse URL to send spam messages to, so you can inspect them.
