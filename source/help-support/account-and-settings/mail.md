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

Mail Settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s [Web API]({{root_url}}/API_Reference/Web_API/mail.html) or [SMTP Relay]({{root_url}}/Glossary/smtp-relay.html).

{% anchor h2 %}
Address Whitelist
{% endanchor %}

The Address Whitelist setting whitelists a specified email address or domain for which mail should never be suppressed. For example, you own the domain “example.com,” and one or more of your recipients use email@example.com addresses, by placing example.com in the Address Whitelist setting, all bounces, blocks, and unsubscribes logged for that domain will be ignored and sent as if under normal sending conditions.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Emails/Domains** - Either a single email or the domain, for which all emails belonging to this domain will be whitelisted.

{% anchor h2 %}
BCC
{% endanchor %}

{% warning %}
With this setting turned on, you will be charged an extra email for every email you send.
{% endwarning %}

Automatically sends a blind carbon copy (BCC) to an address for every email sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Email to BCC To** - Click “Edit” to add an email address to which all emails you send will be BCCd.

{% anchor h2 %}
Bounce Purge
{% endanchor %}

Allows you to set a schedule for SendGrid to automatically delete contacts from your soft and hard bounce suppression lists.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Soft Bounces** - The number of days, after which SendGrid will purge all contacts from your soft bounces suppression lists.

**Hard Bounces** - The number of days, after which SendGrid will purge all contacts from your hard bounces suppression lists.

{% anchor h2 %}
Event Notification
{% endanchor %}

The Event Notification setting controls webhook notifications for events, such as bounces, clicks, opens, and more. This setting allows these events to be POSTed to a URL of your choosing.

Please see our technical [Event Webhook API docs](/API_Reference/Webhooks/event.html) for more information about Event Webhook.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**HTTP Post URL** - The URL you would like us to send all event notifications.

**Select Actions** - Check the boxes for which events you would like sent to your webhook endpoint.

{% anchor h3 %}
Other features
{% endanchor %}

**Test Your Integration** - Once you have a valid URL entered, this button will be made active. When you click the button, we will attempt to send a test post to your webhook code. If we see any issues, we will notify you in a warning message at the top of your browser.

{% anchor h2 %}
Footer
{% endanchor %}

The Footer setting will insert a custom footer at the bottom of the text and HTML bodies. Use the embedded HTML editor and plain text entry fields to create the content of the footers to be inserted into your emails.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Footer** - HTML Body: Click “Edit” to add your custom footer content.

{% anchor h2 %}
Forward Bounce
{% endanchor %}

{% info %}
You will not be charged an email when these reports are forwarded to you.
{% endinfo %}

Activating this setting allows you to specify an email address to which bounce reports are forwarded. Insert the email address to which you would like to receive these bounce reports.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Email** - Click “Edit” to add an email address where you’d like bounce emails to be forwarded.

{% anchor h2 %}
Forward Spam
{% endanchor %}

{% info %}
You will not be charged an email when these reports are forwarded to you.
{% endinfo %}

Activating this setting allows you to specify an email address to which spam reports are forwarded. Insert the email address to which you would like to receive spam reports.

{% anchor h3 %}
Forwarding abuse@ and postmaster@ Emails
{% endanchor %}

The email address specified in the Forward Spam mail setting may also be used to receive emails sent to abuse@ and postmaster@ role addresses if you have [authenticated your domain]({{root_url}}/help-support/getting-started/how-to-set-up-domain-authentication.html).

For example, if you create a valid authenticated domain with a custom return path of `sub` and a root domain `example` *and* have turned on Forward Spam, any emails sent to abuse@sub.example.com or postmaster@sub.example.com will be forwarded to the email address you entered in the Forward Spam mail setting.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Email** - Click “Edit” to add an email address where you’d like spam to be forwarded.

{% anchor h2 %}
Legacy Email Template
{% endanchor %}

{% warning %}
This setting refers to our original Email Templates. We now support more full featured [transactional templates]({{root_url}}/help-support/sending-email/how-to-send-an-email-with-dynamic-transactional-templates.html), with support for multiple templates, versioning and more.
{% endwarning %}

This setting wraps an HTML template around your email content. This can be useful for sending out marketing email and/or other HTML formatted messages. Use the embedded, full-featured HTML editor to create a template that your emails will be wrapped in. Be sure to include a tag to place the content of your email.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Template** - Click “Edit” to define your HTML template within the WYSIWYG editor.

{% anchor h2 %}
Plain Content
{% endanchor %}

The Plain Content setting will automatically convert any plain text emails that you send to HTML before sending.

{% info %}
Please note: Large plain text files are sometimes unable to be converted to HTML. Instead, SendGrid will send only the plain text version. If HTML versions are essential, it is best practice to include the HTML portion of the email within your email requests. When SendGrid is unable to convert from plaintext to HTML, an alert is sent to the From address.
{% endinfo %}

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

{% anchor h2 %}
Spam Checker
{% endanchor %}

The Spam Checker setting, is useful when your web application allows your end users to create content that is then emailed through your SendGrid account. Since emailing user generated content is hard to monitor and can often be abused by spammers, the Spam Checker filter notifies you when emails are detected that exceed a predefined spam threshold.

{% warning %}
The default threshold is 5.0 and can range between 1 and 10. The lower the number, the more strict the filtering. For example, a value of 2 will drop all but the most flawless emails, whereas 9 will only drop the spammiest of spam emails.
{% endwarning %}

We use [SpamAssassin](http://spamassassin.apache.org/full/3.4.x/doc/Mail_SpamAssassin_Conf.html#scoring_options) to process the spam checks for this filter. The default threshold is 5.0, but you can set this to any value between 1 and 10. You must provide a URL, so we will post the message to that URL. If a message is flagged as spam using this filter, it will automatically be dropped by our system and will not be delivered to the recipient.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Spam Threshold** - Click **Edit** to change the threshold from 1-10 (**see the message above**)

**URL To Post Spam Messages To** - Click “Edit” to provide an Inbound Parse URL to send spam messages to, so you can inspect them. If you don't have an Inbound Parse URL, check out [Setting Up The Inbound Parse Webhook]({{root_url}}/for-developers/parsing-email/inbound-email.html).
