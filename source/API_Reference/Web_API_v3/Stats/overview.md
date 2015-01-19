---
layout: page
title: Stats Overview
weight: 100
navigation:
  show: true
---

The stats APIs provide a read-only access to your SendGrid email statistics.  Email statistics consist of the following metrics:

* [blocks]({{root_url}}/Delivery_Metrics/metrics.html#-Blocks)
* [bounces]({{root_url}}/Delivery_Metrics/metrics.html#-Bounces-amp-Repeat-Bounces)
* [bounce_drops]({{root_url}}/User_Guide/Email_Deliverability/Undelivered_Email/drops.html)
* [clicks]({{root_url}}/Delivery_Metrics/metrics.html#-Clicks-amp-Unique-Clicks)
* [delivered]({{root_url}}/Delivery_Metrics/metrics.html#-Delivered)
* [deferred]({{root_url}}/Delivery_Metrics/metrics.html#-Deferrals)
* [drops]({{root_url}}/User_Guide/Email_Deliverability/Undelivered_Email/drops.html)
* [invalid\_emails]({{root_url}}/Delivery_Metrics/metrics.html#-Invalid-email)
* [opens]({{root_url}}/Delivery_Metrics/metrics.html#-Opens-amp-Unique-Opens)
* processed
* [received]({{root_url}}/API_Reference/Webhooks/parse.html)
* [requests]({{root_url}}/Delivery_Metrics/metrics.html#-Requests)
* [spam\_reports]({{root_url}}/Delivery_Metrics/metrics.html#-Spam-reports-amp-repeat-spam-reports)
* [unique\_clicks]({{root_url}}/Delivery_Metrics/metrics.html#-Clicks-amp-Unique-Clicks)
* [unique\_opens]({{root_url}}/Delivery_Metrics/metrics.html#-Opens-amp-Unique-Opens)
* [spam\_report\_drops]({{root_url}}/User_Guide/Email_Deliverability/Undelivered_Email/drops.html)
* [unsubscribe\_drops]({{root_url}}/User_Guide/Email_Deliverability/Undelivered_Email/drops.html)
* [unsubscribes]({{root_url}}/Delivery_Metrics/metrics.html#-Unsubscribes)

{% info %}
Note: Not all metrics are returned for all endpoints. For example, the browser endpoint only returns click metrics.
{% endinfo %}
