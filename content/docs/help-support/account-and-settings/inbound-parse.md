---
seo:
  title: Inbound Parse Webhook
  description: Manage your Inbound parse settings
  keywords: inbound parse, inbound parse webhook, parse settings, inbound parse settings
title: Inbound Parse
weight: 0
group: account-management
layout: page
navigation:
  show: true
---

SendGrid’s Inbound Parse Webhook allows you to receive emails that get automatically broken apart by SendGrid and then sent to a URL of your choosing. SendGrid will grab the content, attachments, and the headers from any email it receives for your specified hostname. Please see our [Inbound Parse Webhook]({{root_url}}/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/) technical docs for more information about how to handle the information coming to you from SendGrid’s Inbound Parse.

## 	Manage inbound parse
 	
You can see all of your hostname and URL pairs that you have set up in the table on the main [Inbound Parse page](https://app.sendgrid.com/settings/parse). From there, you can use the gear icon on the right side of each pair to remove and edit the Inbound Parse Webhook settings.

## 	Add host and URL
 	
The Inbound Parse Webhook requires a hostname, where the emails will be sent, and the URL where SendGrid will POST the data it builds from every incoming email.

**Host Name** - The domain where you have pointed an MX Record so addresses at this hostname can receive email. For example: parse.yourdomain.com

When entering your host name (also referred to as the receiving domain), the subdomain-domain combination must be globally unique, and the domain must be one of your whitelabeled domains.

**URL** - The URL for the Inbound Parse Webhook to POST all parsed email information.

**Spam Check** - Inbound Parse will check incoming emails for spam, then assign them a spam score and report. This will be reflected under `spam_score` and `spam_report` in your Parse Webhook post. The user can then determine how this score is interpreted and the severity.

**Send Raw** - Select this option if you would prefer to receive the full MIME message.

## 	Using the API
 	
If you're interested in how to use the Inbound Parse Webhook, please check out our [Inbound Parse Webhook API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Webhooks/parse/).
