---
seo:
  title: Troubleshooting
  description: Tips and tricks to troubleshoot your SendGrid Event Webhook, including common issues.
  keywords: event webhook, troubleshooting, events, duplication, load handling, duplicate events
title: Troubleshooting
weight: 80
layout: page
navigation:
  show: true
---
- [General troubleshooting]()
- [Common issues]()
    - [Duplicate events]()
    - [Load handling]()

{% anchor h2 %}
General troubleshooting
{% endanchor %}

*Considerations for troubleshooting your Event Webhook instance:*

- Start by making sure your web server is returning a 2xx response to our servers. Any other response type will result in our server retrying a POST until we receive a 2xx response or the maximum time has expired. All events are retried at increasing intervals for up to 24 hours after the event occurs.
- Next, make sure you are not blocking our IPs that are trying to POST to your server. Our IPs change often since we constantly add more machines.
- You can use the **Test Your Integration** button on the [Settings > Mail Settings](https://app.sendgrid.com/settings/mail_settings) page in the [SendGrid UI](https://app.sendgrid.com) to send simulated events to your callback URL. You can also send a POST from a shell using cURL - this will give you the full response your server is returning including the HTTP headers:

{% codeblock lang:bash %}
curl -X POST -H "Content-Type: application/json" -d '[{"email":"john.doe@sendgrid.com","timestamp":1337197600,"smtp-id":"<4FB4041F.6080505@sendgrid.com>","event":"processed"},{"email":"john.doe@sendgrid.com","timestamp":1337966815,"category":"newuser","event":"click","url":"https://sendgrid.com"},{"email":"john.doe@sendgrid.com","timestamp":1337969592,"smtp-id":"<20120525181309.C1A9B40405B3@Example-Mac.local>","event":"processed"}]'
{% endcodeblock %}

- If you're not getting a response from your server, follow the steps in [Getting started with the Event Webhook]({{root_url}}/API_Reference/Event_Webhook/getting_started.html#-Getting-started) to test your SendGrid instance with RequestBin. You could also use tools like ngrok, or Runscope.

{% anchor h2 %}
Common issues
{% endanchor %}

{% anchor h3 %}
Duplicate events
{% endanchor %}

**It is possible to see duplicate events in the data posted by the Event Webhook.**

We recommend that you use some form of deduplication when processing or storing your Event Webhook data using the `sg_event_id` as a differentiator, since this ID is unique for every event where `sg_event_id` is present.
sg_event_id` comes in two different lengths. One that is 22 characters long and a second that is 48 characters long. `sg_event_id` is actually a `UUID`. A `UUID` is 128-bit number presented as text.

48 character `sg_event_id` is a `UUIDv4` encoded and `Base64` decoded string.
22 character `sg_event_id` is a `Base64url` encoded string.

{% anchor h3 %}
Load handling
{% endanchor %}
