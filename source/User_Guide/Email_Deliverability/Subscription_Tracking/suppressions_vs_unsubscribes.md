---
seo:
  title: Group Unsubscribes vs Global Unsubscribes
title: Group Suppressions vs Global Unsubscribes
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
If you are not using ASM, it is the default functionality to unsubscribe a user at the global level when they click unsubscribe links
{% endinfo %}

When using ASM, a recipient clicking an unsubscribe link can choose which groups to unsubscribe from, called a "group suppression", or may choose to opt out of all emails, called a "global unsubscribe".

You can manage your global unsubscribes via [Email Reports > Unsubscribes](https://sendgrid.com/unsubscribes) in the SendGrid portal.

{% info %}
Group Suppressions do not currently trigger [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) events.
{% endinfo %}