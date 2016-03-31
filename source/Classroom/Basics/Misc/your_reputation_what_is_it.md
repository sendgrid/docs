---
seo:
  title: Your Reputation... What is it?
  description: Your Reputation... What is it?
  keywords: spam, rep, reputation, bounces, reports
title: Your Reputation... What is it?
weight: 0
layout: page
zendesk_id: 200181658
navigation:
  show: true
---

Once logged in to your account, on the left side of the [SendGrid website](https://sendgrid.com), you can find your  **SendGrid account reputation**. This reputation is a indicator of how we view your email sending practices.

[]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.32.24_PM.png)



**How is Reputation Calculated?**

The SendGrid account reputation is computed based on a calculation of:

- The percentage of requests that are able to be delivered (delivered / requests). This takes into account bounces, invalid emails, and drops (repeat bounces, unsubscribes, etc.) Please review our [Delivery Metrics](http://sendgrid.com/docs/Delivery_Metrics/index.html) article for more detail on these terms.
- Spam Reports. Each spam report is a user actively rejecting your mail, and has a strong negative affect

** **

**The Effect of Reputation on your Account**

Depending on your package level, your reputation can matter more or less. At all levels, if your reputation is low enough, your account will come under review by our Compliance team, you may be contacted, and your account may be suspended for review.

If you're on a Essentials or [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html) package, for the first month your account is in a "New" IP cluster while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together, and prevents the poorer senders from harming the good ones.

If you're a Pro package or higher, you have a dedicated IP, and our internal reputation metric does not have as much weight. Instead, you should keep a closer eye on your external reputation. Every receiving server has their own score of you, which they generally "forget" after a couple of weeks of no sending habits. Sites such as [SenderScore](https://www.senderscore.org/) are a good way to get an idea of your external reputation.

**SendGrid's Reputation Policy:**

We regularly monitor our customers' account reputation for abuse and undesirable sending practices. Our general guidelines for account reputation take into account the following reputation thresholds:

- **Reputation above 80%:** Congratulations, you have a good sending reputation and there are no issues at this time.
- **Reputation between 70% and 80%:** This is considered a poor reputation and actions should be taken immediately to identify and fix problems with your sending practices.
- **Reputation below 70%:** Accounts with reputations below 70% may be subject to immediate suspension or termination.
