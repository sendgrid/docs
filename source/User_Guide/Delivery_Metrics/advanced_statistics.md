---
layout: page
weight: 0
title: Advanced Delivery Metrics
seo:
  title: Advanced Delivery Metrics
  description: SendGrid provides customers with advanced statistics about their email delivery.
navigation:
  show: true
---

SendGrid provides customers with advanced statistics about their email delivery. The statistics give deeper information
about customers who are reading your emails. SendGrid also provides more [traditional email statistics]({{root_url}}/User_Guide/Delivery_Metrics/metrics.html).

{% info %}
Data may be delayed by up to 10 hours. The top of these reports will indicate the last time the data was updated.
{% endinfo %}

{% anchor h2 %}
ISP
{% endanchor %}

<p>The <a href="https://sendgrid.com/statistics/isp">ISP report</a> highlights how your mail performs across all the major
ISPs, such as Hotmail, Yahoo, Gmail, etc.</p>

{% anchor h2 %}
Geography
{% endanchor %}

<p><a href="https://sendgrid.com/statistics/geo">The geographical
  report</a> shows a map of where your emails are being opened and
clicked around the world.</p>

{% anchor h2 %}
Clients (Devices)
{% endanchor %}

<p><a href="https://sendgrid.com/statistics/clients">The clients
  report</a> breaks down which devices and clients are most frequently used to
open the mail you send. </p>

<p>Available devices:</p>

<table class="table table-striped">
  <tr>
    <th>Device</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Desktop</td>
    <td>Email software on desktop computer I.E. Outlook, Sparrow, or
      Apple Mail.</td>
  </tr>
  <tr>
    <td>Webmail</td>
    <td>A web-based email client I.E. Yahoo, Google, AOL, or
      Outlook.com.</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>A smart phone; iPhone, Android, Blackberry, etc.</td>
  </tr>
  <tr>
    <td>Tablet</td>
    <td>A tablet computer: iPad, android based tablet, etc.</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>An unrecognized Device.</td>
  </tr>
</table>

{% anchor h2 %}
Browser
{% endanchor %}

<p><a href="https://sendgrid.com/statistics/browsers">The browser
  report</a> shows which browsers are most frequently clicking links in
your mail.</p>

{% info %}
There are similarities between Device and Browser statistics and we are
working on ways to consolidate the data. The current reasoning for two
separate reports is that in some cases an open from a device can result
with a click from a browser that represents the device (e.g. Open on an
Iphone -> Click on an Iphone), in other cases an open from one device
can result in a click from a different browser (e.g. an Open on a desktop computer -> Click on FireFox).
{% endinfo %}