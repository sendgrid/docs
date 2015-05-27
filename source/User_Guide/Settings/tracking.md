---
seo:
  title: Tracking Settings
  description: Track clicks, opens, and subscriptions with SendGrid
  keywords: click tracking, clicks, open tracking, opens, google analytics, tracking with analytics, subscription tracking
title: Tracking
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Click tracking
{% endanchor %}

Enabling Click Tracking causes all the links and URLs in your emails to be overwritten and pointed to either SendGrid’s servers or your Whitelabeled link domain so that any time a customer clicks a link, SendGrid can track those [clicks]({{root_url}}/Glossary/clicks.html). 

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

{% anchor h2 %}
Google Analytics
{% endanchor %}

For more information about using this app, please refer to Google’s URL Builder and their Blog post on Campaign Tracking.

We default the settings to Google’s recommendations. Anything you enter into those fields in the App Settings or via API will take precedence.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Campaign Source** - Name of the referrer source. (e.g. Google, SomeDomain.com, Marketing EmailA)

**Campaign Medium** - Name of the marketing medium. (e.g. Email)

**Campaign Term** - Identify paid keywords.

**Campaign Content** - Use to differentiate ads.

**Campaign Name** - Name of the campaign.

{% anchor h2 %}
Open Tracking
{% endanchor %}

{% info %}
If you are using domain whitelabeling, then your open tracking image will be served from your whitelabel domain instead of from SendGrid.net.
{% endinfo %}

Open Tracking adds an invisible image at the end of the email which can track email [opens]({{root_url}}/Glossary/opens.html). If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged. These Events are logged in your Statistics portal, the Email Activity interface, and are reported by the Event Webhook. 

When using this service customers often ask the difference between a unique open versus an open. A unique open is logged only the first time a given recipient opens the email whereas normal opens are logged for all opens of the email in question.

{% anchor h3 %}
Settings
{% endanchor %}

**Status** - On or Off

**Related Information** - [How Google’s Image Caching effects your opens](https://sendgrid.com/blog/googles-new-image-caching-5-things-need-know/)

{% anchor h2 %}
Subscription Tracking
{% endanchor %}

Add automatic subscription management links to the bottom of emails. SendGrid will keep track of these unsubscribes and ensure these users don’t get future emails from you.

You can customize the text attached to emails and customize the landing page. The links can be configured in whatever fashion suits your needs. 

{% anchor h3 %}
Settings
{% endanchor %}

**Replacement Tag** - Your custom defined tag for your templates. Use this to place your unsubscribe content wherever you want in your template. If you don’t provide this, your unsubscribe link will be automatically added to the bottom of your email.

**HTML Unsubscribe Content** - The Information and HTML for your unsubscribe link. In this HTML, you should include the link text you would like displayed in your email within the tag, like so: 

{% codeblock lang:html %}
<% Unsubscribe Here %>
{% endcodeblock %}

**Text Unsubscribe Content** - The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing.

**Custom Landing Page URL** - The URL where you would like your users sent to unsubscribe. This must be a valid URL. 

**SendGrid Landing Page (HTML)** - The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server.