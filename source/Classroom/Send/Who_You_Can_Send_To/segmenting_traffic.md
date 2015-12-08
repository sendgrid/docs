---
layout: page
weight: 0
title: Segmenting Your Traffic
seo:
  title: Segmenting Your Traffic Overview
  description: Segmenting your traffic protects your deliverability and keeps your stats seperate by type of email.
navigation:
  show: true
---

If you are sending more than one type of email to your customers, such as marketing and transactional, it is
often a good idea to separate the IPs that you send these emails from in order to get better deliverability and
email engagement tracking.

{% anchor h2 %}
Segmenting by IP Address
{% endanchor %}

One way of segmenting your email sends is to use our <a href="{{site.blog_url}}/sendgrid-announces-new-feature-ip-pooling/">IP Pooling feature</a> to send your different email types through different IPs. These IPs can be Whitelabeled to your domain, so the receiving mail servers have no questions about who sent the emails.

{% anchor h2 %}
Segmenting by Subuser and IP
{% endanchor %}

You can also segment your email sending by subuser, which will allow you to share the same overall email credit pool but have unique SMTP credentials, settings, statistics, and site login. Subusers can also be Whitelabeled to separate sending domains by purchasing additional sending IPs and assigning a subuser to that IP. More information on segmentation via subusers can be found [here]({{root_url}}/Classroom/Deliver/Delivery_Introduction/segment_your_email_traffic_with_subusers.html).
