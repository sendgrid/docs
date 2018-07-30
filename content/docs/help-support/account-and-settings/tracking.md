---
seo:
  title: Tracking Settings
  description: Track clicks, opens, and subscriptions with SendGrid
  keywords: click tracking, clicks, open tracking, opens, google analytics, tracking with analytics, subscription tracking
title: Tracking
weight: 0
group: account-management
layout: page
navigation:
  show: true
---

## 	Click tracking

Enabling Click Tracking causes all the links and URLs in your emails to be overwritten and pointed to either SendGrid’s servers or the domain you branded your link with so that any time a customer clicks a link, SendGrid can track those [clicks]({{root_url}}/glossary/clicks/). SendGrid can track up to 1000 links per email.

 ### 	Settings

**Status** - On or Off

## 	Google Analytics

For more information about using this app, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on "[Best Practices for Campaign Building](https://support.google.com/analytics/answer/1037445)".

We default the settings to Google’s recommendations. Anything you enter into those fields in the app settings or via API will take precedence. For more information see [Google Analytics]({{root_url}}/help-support/analytics-and-reporting/google-analytics/html).

 ### 	Settings

**Status** - On or Off

**Campaign Source** - Name of the referrer source. (e.g. Google, SomeDomain.com, Marketing Email)

**Campaign Medium** - Name of the marketing medium. (e.g. Email)

**Campaign Term** - Identify paid keywords.

**Campaign Content** - Use to differentiate ads.

**Campaign Name** - Name of the campaign.

## 	Open Tracking

<call-out>

If you are using email link branding, then your open tracking image will be served from your branded domain instead of from SendGrid.net.

</call-out>

Open Tracking adds an invisible, one pixel image at the end of the email which can track email [opens]({{root_url}}/glossary/opens/). If the email recipient has images enabled on their email client and a request to SendGrid’s server for the invisible image is executed, then an open event is logged. These events are logged in the Statistics UI, Email Activity interface, and are reported by the Event Webhook.

When using this service customers often ask the difference between a unique open versus an open. A unique open is logged only the first time a given recipient opens the email whereas normal opens are logged for all opens of the email in question.

 ### 	Settings

**Status** - On or Off

**Replacement Tag** - If you do not want the open tracking image to be inserted at the end of your email, it is possible to specify an alternative location by using a replacement tag and the open tracking [SMTP API header]({{root_url}}/for-developers/sending-email/smtp-filters/#opentrack).

If you are sending email through our [v3 Web API]({{root_url}}/API_Reference/Web_API_v3/Mail/index/), you may also enable the `open_tracking` parameter, and set the `substitution_tag` parameter to a value of your choice. You may insert that substitution tag anywhere in your email, and it will be replaced with the open tracking image.

**Related Information** - [How Google’s Image Caching effects your opens](https://sendgrid.com/blog/googles-new-image-caching-5-things-need-know/)

## 	Subscription Tracking

Add automatic subscription management links to the bottom of emails. SendGrid will keep track of these unsubscribes and ensure these users don’t get future emails from you.

You can customize the text attached to emails and customize the landing page. The links can be configured in whatever fashion suits your needs.

 ### 	Settings

**Replacement Tag** - Your custom defined tag for your templates. Use this to place your unsubscribe URL wherever you want in your template. If you provide this, make sure you put it within an `<a href=` tag. If you don’t provide this, your default unsubscribe content will be automatically added to the bottom of your email.

**HTML Unsubscribe Content** - The information and HTML for your unsubscribe link. In this HTML, you should include the link text you would like displayed in your email within the tag, like so:

```html
<% Unsubscribe Here %>
```

**Text Unsubscribe Content** - The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing.

**Custom Landing Page URL** - The URL where you would like your users sent to unsubscribe. This must be a valid URL.

**SendGrid Landing Page (HTML)** - The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server.
