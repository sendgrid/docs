---
seo:
  title: How SendGrid handles "550 Requested action not taken&#58; mailbox unavailable" bounces
  description: How SendGrid handles 550 Requested action not taken&#58; mailbox unavailable bounces
  keywords: drop, bounce, not, 500, unavailable, transactional, delivery, 550 Requested action not taken&#58; mailbox unavailable, requested, taken, mailbox
title: How SendGrid handles "550 Requested action not taken&#58; mailbox unavailable" bounces
weight: 0
layout: page
zendesk_id: 207907288
navigation:
  show: true
---

Senders may have noticed a rise in hard bounces within the last week. This is due to a recent change in the way our systems are treating the specific response code “ **550 Requested action not taken: mailbox unavailable** ”.

Despite the fact that a very small percentage of addresses that return this bounce will occasionally log successful delivery events, or even opens and clicks. _**We have decided that these responses should be treated as hard bounces, and sending should not be reattempted.**_

We have found that over 99% of email addresses returning this bounce reason never have a successful delivery.

**Because sending to previously bounced&nbsp;addresses can negatively impact sending reputation, it is in our sender’s best interest to treat this response as a hard bounce and [drop subsequent&nbsp;sending](http://support.sendgrid.com/hc/en-us/articles/200181728-My-emails-are-being-dropped-). The increase in hard bounces, particularly at Microsoft domains, may last for some time yet this is an important step to maximize deliverability and protect the reputation of our senders.**
