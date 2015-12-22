---
seo:
  title: Sender Reputation
  description: A sender has a reputation score that helps identify whether they are a spammer.
  keywords: spam, reputation, email sender, sender reputation, reputation score
title: Sender Reputation
weight: 0
layout: page
navigation:
  show: false
---

![]({{root_url}}/images/reputation_1.png "Sender Reputation")

Your Reputation score is given in a range from 0-100 (100 being the best) and is a calculated based on information abour your sending habits, specifically how many requests are able to be delivered. This includes:

-	Low bounce rates, drop rates, unsubscribes
-	Few spam complaints
-	The ratio of invalid emails sent out
-	Consistent mailing volume

It is calculated by taking the percentage of requests that are able to be delivered.

To achieve the highest reputation possible, we recommend that you have an industry standard opt-in process, don't rent or buy email lists and always keep your lists clean.

{% anchor h2 %}
The Effect of Reputation on your Account
{% endanchor %}

Depending on your package level, your internal SendGrid Reputation can matter more or less. At all levels, if your Reputation is low enough, your account will come under review by our Compliance team and your account may be suspended for review.

If you have an account lower than Pro 100k, for the first month your account is in a "New" IP cluster while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together, and prevents the poorer senders from harming the good ones.

If you're on a Pro 100k package or higher, you have a dedicated IP, and our internal reputation metric may not have as much weight as external reputation metrics. Instead, you should keep a closer eye on your external reputation. Every receiving server has their own score of you, which they generally "forget" after a couple of weeks of no sending habits. Sites such as [SenderScore](https://www.senderscore.org/) are a good way to get an idea of your external reputation.

{% anchor h2 %}
SendGrid's Reputation Policy
{% endanchor %}

We regularly monitor our customers' account reputation for abuse and undesirable sending practices.

Our general guidelines for account reputation take into account the following reputation thresholds:

* **Reputation above 80%:** Congratulations, you have a good sending reputation and there are no issues at this time.
* **Reputation between 70% and 80%:** This is considered a poor reputation and actions should be taken immediately to identify and fix problems with your sending practices.
* **Reputation below 70%:** Accounts with reputations below 70% may be subject to immediate suspension or termination.
