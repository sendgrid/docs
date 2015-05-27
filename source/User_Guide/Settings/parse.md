---
seo:
  title: Inbound Parse
  description: Manage your Inbound parse settings
  keywords: inbound parse, inbound parse webhook, parse settings, inbound parse settings
title: Inbound Parse
weight: 0
layout: page
navigation:
  show: true
---

SendGrid’s Inbound Parse is a webhook that allows you to receive emails that get automatically broken apart by SendGrid and then sent to the location of your choosing. SendGrid will grab the content, attachments, and the headers from any email it receives via your specified hostname. Please see our [Inbound Parse Webhook]({{root_url}}/API_Reference/Webhooks/parse.html) technical docs for more information about how to handle the information coming to you from SendGrid’s Inbound Parse.

{% anchor h2 %}
Manage Inbound Parse
{% endanchor %}

You will see all of your individual host and URL pairs that you have set up in the table on the main Inbound Parse page. From there, you can use the gear icon on the right side of each pair to remove and edit this Inbound Parse Webhook.

{% anchor h2 %}
Add Host & URL
{% endanchor %}

Inbound parse requires a hostname, where the emails will be sent, and the URL where SendGrid will send the data it builds from every email.

**Host Name** - The domain where you have pointed an MX Record, so that email can be sent to and received by addresses at this hostname. For example: sgparse.example.com

**URL** - The URL for Inbound Parse to send all parsed email information.

**Spam Check** - Inbound Parse will check incoming emails for spam and reject the emails that are obviously spam.

**Send Raw** - If you would prefer to receive the full MIME message, select this option. 

