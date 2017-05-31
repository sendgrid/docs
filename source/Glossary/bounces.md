---
seo:
  title: Bounces
  description: Bounced emails are emails that are returned to the server that sent them.
  keywords: blocks, undelivered email
title: Bounces
weight: 0
layout: page
navigation:
  show: false
---

A message that is returned to the server that sent it. Bounced emails are either a permanent failure to deliver the email or a temporary failure to deliver the email, based on conditions with the recipient mail server.

Hard Bounces - A hard bounce is an e-mail message that has been returned to the sender because the recipient's address is invalid. A hard bounce might occur because the domain name doesn't exist or because the recipient is unknown. If a email is on the bounce list, we will auto drop any future requests to this email address.
Soft Bounces - A soft bounce is an e-mail message that gets as far as the recipient's mail server but is bounced back undelivered before it gets to the intended recipient. A soft bounce might occur because the recipient's inbox is full.

If you want to receive notification of bounces in your application, you can enable the Real-time Event Notification API and SendGrid will alert your application of any bounces, clicks, opens, or otherwise that happen to the emails you send. Alternatively, you can enable Bounce Forwarding within your account to receive an email each time a bounce occurs.

You can also [retrieve and edit your list of bounces]({{root_url}}/API_Reference/Web_API/bounces.html) through our Web API.

{% anchor h3 %}
Helpful Knowledge Base articles:
{% endanchor %}

* [Drop Reason: Bounced Address](https://sendgrid.zendesk.com/hc/en-us/articles/203790456)
* [Bounce Forwarding APP](https://sendgrid.zendesk.com/hc/en-us/articles/200181478)
* [Implementing Bounce Notification For Multiple From Addresses](https://sendgrid.zendesk.com/hc/en-us/articles/200185178)
* [Email Activity & Bounces](https://sendgrid.zendesk.com/hc/en-us/articles/200181728)
