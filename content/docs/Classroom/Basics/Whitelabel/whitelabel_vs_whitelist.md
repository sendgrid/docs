---
st:
  published_at: 2017-03-02
  type: Classroom
seo:
  title: Whitelabel vs. Whitelist
  description: What is the difference between whitelabeling and whitelisting?
  keywords: whitelabel, whitelist, IP, DNS
title: Whitelabel vs. Whitelist
weight: 0
layout: page
navigation:
  show: true
---

The terms _whitelabel_ and _whitelist_ are often mistakenly interchanged, but they have two very different definitions and are associated with two very different uses.

Whitelabeling refers to the process of showing ISPs that SendGrid has your permission to send emails on your behalf. This is achieved by adding DNS records to your hosting service. These DNS records associate your sending domain with SendGrid— when an inbox provider processes your email, they will see your domain instead of `sendgrid.net`. This process can also be performed for the links in your email as well as dedicated IP addresses associated with your account (available with Pro level or higher accounts). You can learn more about whitelabeling, and how to set it up, by checking out our [whitelabel documentation]({{root_url}}/User_Guide/Settings/Whitelabel/index.html).

[Whitelisting]({{root_url}}/Glossary/whitelist.html) refers to the process of granting a particular IP address access to a server or system. SendGrid's IP Access Management is one example of whitelisting. IP Access Management is a security feature that allows you to control who can access your SendGrid account based on their IP address.

You can learn more about IP Access Management Documentation [here]({{root_url}}/User_Guide/Settings/ip_access_management.html).

You may also hear the term whitelist when referring to a list of IP addresses that receive special treatment when sending mail to a specific inbox provider. Email whitelists are becoming less and less common. These days, the best way to ensure your messages land in the inbox is to send mail that you know your recipients will love.

{% info %}
IP Access Management has very specific use cases and we strongly recommended that you read through our [documentation]({{root_url}}/User_Guide/Settings/ip_access_management.html).
{% endinfo %}
