---
seo:
  title: Managing Unsubscribes
title: Managing Unsubscribes
weight: 0
layout: page
navigation:
  show: true
---

SendGrid has two different way of processing unsubscribes depending on how you're sending mail. If you use the Subscription Tracking App, recipients can unsubscribe from all of the emails you’re sending. If you’re using the Marketing Email tool, recipients can unsubscribe from specific types of emails that they’d rather not receive anymore.

{% anchor h2 %}
Transactional Email and the Subscription Tracking App
{% endanchor %}

If you are sending email through SendGrid and have the [Subscription Tracking app](https://sendgrid.com/docs/Apps/subscription_tracking.html) turned on an unsubscribe option will be added to the footer of every email that gets sent through your account. A user who clicks the unsubscribe link will be added to your global unsubscribe list (this list can be found by going to the “Email Reports” tab and clicking on “Unsubscribes”) and _any _future attempts to send email to those users will be suppressed unless they’re removed. You can also manage this list manually, adding and removing addresses via the UI or with the use of [API calls](https://sendgrid.com/docs/API_Reference/Web_API/unsubscribes.html).

The [Subscription Tracking app](https://sendgrid.com/docs/Apps/subscription_tracking.html) also has a number of options for customization, such as a replacement tag that allows you to place the unsubscribe text somewhere in the body of the email, the ability to reword the unsubscribe message, and the ability to add a custom landing page.

{% anchor h2 %}
Marketing Email Unsubscribes
{% endanchor %}

Emails sent through our [Marketing Email tool](https://sendgrid.com/docs/Marketing_Emails/index.html) will contain an unsubscribe link regardless of whether or not the Subscription Tracking app is turned on. When users unsubscribe from a marketing email they do not end up on a global unsubscribe list. Each Marketing Email recipient list has it’s own unsubscribes. Recipients that unsubscribe from these emails are unsubscribing from future emails sent to that specific list. You can use separate lists to allow your recipients to unsubscribe from certain types of messages while still receiving others.

You can export your unsubscribes from each list by hovering over the recipient list in question, selecting “Export,” and then selecting the “Unsubscribes” checkbox.

To add the exported unsubscribe list to a different recipient list, select “Manage Unsubscribes” and then “Upload.” You can also [add emails to your global unsubscribe list using an API call](https://sendgrid.com/docs/API_Reference/Web_API/unsubscribes.html#-add).

To export the unsubscribes from all of your different lists by selecting the “Download as CSV from all lists” option under “Manage Unsubscribes.”
