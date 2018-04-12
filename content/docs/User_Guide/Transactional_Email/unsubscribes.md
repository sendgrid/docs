---
seo:
  title: Transactional Email Unsubscribes
title: Transactional Email Unsubscribes
weight: 0
layout: page
navigation:
  show: true
---

If you are sending email through SendGrid and have the [Subscription Tracking Setting]({{root_url}}/User_Guide/Settings/tracking.html) turned on, an unsubscribe option will be added to the footer of every email that gets sent through your account. A user who clicks the unsubscribe link will be added to your [global unsubscribe list]({{site.app_url}}/suppressions/global_unsubscribes) and **any** future attempts to send email to those users will be suppressed unless they’re removed. You can also manage this list manually, adding and removing addresses via the UI or with the use of [API calls]({{root_url}}/API_Reference/Web_API/unsubscribes.html).

The [Subscription Tracking Setting]({{root_url}}/User_Guide/Settings/tracking.html) also has a number of options for customization, such as a replacement tag that allows you to place the unsubscribe text somewhere in the body of the email, the ability to reword the unsubscribe message, and the ability to add a custom landing page.

<page-anchor el="h2">
Additional Resources
{% endanchor h2 %}

- [Transactional Email](https://sendgrid.com/docs/User_Guide/Transactional_Email/index.html)
- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Tracking](https://sendgrid.com/docs/User_Guide/Settings/tracking.html)