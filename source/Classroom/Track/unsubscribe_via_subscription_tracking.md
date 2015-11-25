---
seo:
  title: Unsubscribe via Subscription Tracking
  description: Unsubscribe via Subscription Tracking
  keywords: subscription, page, landing, replacement, tag, text, unsubscribe, unsub, html, click_tracking, body, <% %>
title: Unsubscribe via Subscription Tracking
weight: 0
layout: page
zendesk_id: 200181498
navigation:
  show: true
---

# What does it do?

- Automatically add an unsubscribe link to the bottom of your emails.
- Customize the unsubscribe link that is added automatically
- Create a replacement tag that will allow you to put the unsubscribe link anywhere you would like using HTML.

## How do I enable Subscription Tracking? **&nbsp;**

From your Account Overview page, visit the sidebar menu and click “Settings”. From there, select "Tracking". Locate the Subscription Tracking option and click&nbsp;on the arrow on the right side and click on the "Off/On" button.

![]({{root_url}}/images/unsub_app.gif)&nbsp;

## How do I just&nbsp;add an unsubscribe link?

Just enable the setting. That will add the default unsubscribe link to the bottom of your emails.

## How do I change what the link says?

Assuming that you have the setting&nbsp;enabled already, go into the app’s settings. To add your own wording, edit the text within the “Unsubscribe Content” boxes.

### HTML Body Unsubscribe

The first box to edit is for HTML formatted emails.

Notice that the words “click here” are wrapped with a <% %> symbols. This tells our system to link the words within the symbols to the unsubscribe URL. These will be the words that will be “clickable” in order to unsubscribe.

In this example, people will click "click here" in order to unsubscribe.&nbsp;

![]({{root_url}}/images/Screen_Shot_2015-05-26_at_11.38.27_AM.png)

&nbsp;

### Plain Text Unsubscribe

Change the Plain Text content as well. There won’t be any clickable wording here though, since that is an HTML feature. The symbols <% %> will insert the unsubscribe URL. Users viewing the email in Plain Text will be able to click that URL in order to unsubscribe from your emails.&nbsp;

![]({{root_url}}/images/Screen_Shot_2015-05-26_at_11.38.37_AM.png)

&nbsp;Note: It is important to have the <% %> symbols in the plain text body version in order for the links to be added.

&nbsp;

## I don't want my unsubscribe links at the bottom!

This requires adding a HTML code snippet to the body of your email using the Replacement Tag field within the Subscription app’s settings.&nbsp; Set a replacement tag within the replacement tag field. {i.e. [unsubscribe]}

&nbsp; ![]({{root_url}}/images/Screen_Shot_2015-05-26_at_11.39.15_AM.png)

Doing this will allow you to use that tag within the html. This tag will get replaced with the unsubscribe URL. So, to create your unsubscribe link, just use some simple HTML.&nbsp;

### For example:

    <p>If you would like to stop receiving these emails <a href=”[unsubscribe]”>click here</a></p>

The HTML code above gives you the following results:

    If you would like to stop receiving these emails click here

## What is a landing page?

This section allows you to create a page that appears once the unsubscribe link is clicked. So, once a recipient clicks the unsubscribe link, they will get redirected to this landing page you have created.&nbsp;

![]({{root_url}}/images/Screen_Shot_2015-05-26_at_11.39.02_AM.png)

&nbsp;

## Anything else I should know?

Enabling our Subscription Tracking app also automatically incorporates the [list-unsubscribe](https://sendgrid.com/blog/list-unsubscribe/) header, which is great way to supplement and improve your email deliverability!

&nbsp;

