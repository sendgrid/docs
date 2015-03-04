---
seo:
  title: Group Suppressions vs Global Suppressions
title: Group Suppressions vs Global Suppressions
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
If you are not using ASM, it is the default functionality to suppress a user at the global level when they click unsubscribe links
{% endinfo %}

When using ASM, a recipient clicking an unsubscribe link can choose which groups to unsubscribe from, called a "group suppression", or may choose to opt out of all emails, called a "global suppression".

You can manage your global suppressions via [Email Reports > Unsubscribes](https://sendgrid.com/unsubscribes) in the SendGrid portal.

{% info %}
Group Suppressions do not currently trigger [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) events.
{% endinfo %}