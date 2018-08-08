---
seo:
  title: Segmentation
  description: The practice of separating different types of email traffic.
  keywords: segmentation, email traffic, whitelabel, IP pooling
title: Segmentation
weight: 0
layout: page
navigation:
  show: false
---

Segmentation refers to the practice of separating the different types of email that you send, such as marketing email and transactional email. By segmenting your email traffic you can both obtain more useful engagement statistics and improve your deliverability.

Segmentation can be achieved by either creating and sending mail through a new subuser, or by creating a new subuser and purchasing a separate dedicated IP address to send that subuser's mail through.

SendGrid's [IP Pooling feature](https://sendgrid.com/docs/API_Reference/Web_API_v3/IP_Management/ip_pools.html) is a powerful tool that allows you to set up separate IP pools that you can use to organize your dedicated IPs. When sending different types of email you can specify which IP Pool to associate your message with, and the IP Pooling feature will automatically **segment** your traffic by sending it through the corresponding dedicated IP address.

<call-out>

For more information about how you can segment your email traffic, please see [Segmenting Your Contacts]({{root_url}}/user-interface/managing-contacts/segmenting-your-contacts/).

</call-out>
