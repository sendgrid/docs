---
seo:
  title: Group Unsubscribes vs Global Unsubscribes
title: Group Unsubscribes vs Global Unsubscribes
weight: 0
layout: page
navigation:
  show: true
---

{% info %}
If you are not using suppression management with Unsubscribe Groups, it is the default functionality to unsubscribe a user at the global level when they click unsubscribe links.
{% endinfo %}

When using Unsubscribe Groups, a recipient clicking an unsubscribe link can choose which groups to unsubscribe from, called a "group unsubscribe", or may choose to opt out of all emails, called a "global unsubscribe".

You can manage your global unsubscribes via [Email Reports > Unsubscribes]({{site.app_url}}/suppressions/global_unsubscribes) in the SendGrid UI.

{% info %}
Group Unsubscribes will trigger [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) events.
{% endinfo %}
