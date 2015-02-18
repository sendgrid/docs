---
layout: page
weight: 0
navigation:
  show: true
title: Sender Reputation
seo:
  title: Sender Reputation
  description: Sender Reputation is an indicator of how we view your email sending practices.
---

On the [Account Overview](https://sendgrid.com/account/overview) page of the SendGrid website, you can find your SendGrid account reputation. This reputation is an indicator of how we view your email sending practices.

![]({{root_url}}/images/reputation_2.png "SendGrid Sender Reputation")

{% anchor h2 %}
How is Reputation Computed?
{% endanchor %}

Your SendGrid account reputation is computed based on a calculation of:

The percentage of requests that are able to be Delivered. This takes into account [Bounces]({{root_url}}/Glossary/bounces.html), Invalid Emails, and Drops (Repeat bounces, unsubscribes, etc.) Please review our [Delivery Metrics]({{root_url}}/User_Guide/Delivery_Metrics/index.html) documentation for more detail on these terms.
Spam Reports. Each spam report is a user actively rejecting your mail, and has a strong negative affect
 
{% anchor h2 %}
The Effect of Reputation on your Account
{% endanchor %}

Depending on your package level, your internal SendGrid Reputation can matter more or less. At all levels, if your Reputation is low enough, your account will come under review by our Compliance team and your account may be suspended for review.

If you're on a Bronze or Lite package, for the first month your account is in a "New" IP cluster while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together, and prevents the poorer senders from harming the good ones.

If you're a Silver package or higher, you have a dedicated IP, and our internal reputation metric may not have as much weight as external reputation metrics. Instead, you should keep a closer eye on your external reputation. Every receiving server has their own score of you, which they generally "forget" after a couple of weeks of no sending habits. Sites such as [SenderScore](https://www.senderscore.org/) are a good way to get an idea of your external reputation.

{% anchor h2 %}
SendGrid's Reputation Policy
{% endanchor %}

We regularly monitor our customers' account reputation for abuse and undesirable sending practices.

Our general guidelines for account reputation take into account the following reputation thresholds:

* **Reputation above 80%:** Congratulations, you have a good sending reputation and there are no issues at this time.
* **Reputation between 70% and 80%:** This is considered a poor reputation and actions should be taken immediately to identify and fix problems with your sending practices.
* **Reputation below 70%:** Accounts with reputations below 70% may be subject to immediate suspension or termination.
