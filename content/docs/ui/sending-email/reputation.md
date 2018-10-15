---
seo:
  title: Understanding and protecting your sender reputation
  description: Learn more about what the SendGrid reputation score means, and how it differs from your Domain Reputation...
  keywords: reputation, domain, sender, IP, bounces
title: Understanding and protecting your sender reputation
weight: 0
group: delivery-optimization
layout: page
navigation:
  show: true
---

Once logged in, you will notice on your [Account Overview](https://app.sendgrid.com) page you will see your IP reputation score, which will be somewhere from 0% to 100%.

![Reputation Monitoring]({{root_url}}/images/reputation_monitoring_1.png)

<call-out>

Please note that the SendGrid Reputation does not represent your inboxing percentage at mailbox providers.

</call-out>

**How is the SendGrid Reputation Calculated?**

The SendGrid account reputation is computed based on a calculation of:

- The percentage of requests that are able to be delivered out of the total amount requested (delivered / requests). This takes into account bounces, invalid emails, and drops (repeat bounces, unsubscribes, etc.) Please review our [Statistics]({{root_url}}/docs/ui/analytics-and-reporting/stats-overview/) article for more detail on these terms.

- Spam Reports. Each spam report is a user actively rejecting your mail and has a strong negative effect.

<call-out>

You can increase the SendGrid reputation score by removing unengaged users and [dropped addresses]({{root_url}}/glossary/drops/) from your lists before sending. Also be sure you are only sending to users who have opted in to receive your email to help prevent spam reports.

</call-out>

**The Effect of Reputation on your Account**

The significance of your reputation depends on the plan you chose when creating your SendGrid account. For all plans, if your reputation becomes low enough, your account may come under review by our Compliance team, you may be contacted, and your account may be suspended for review.

If you're using a Free or Essentials plan, we will put your account in a "New" IP cluster initially while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together and prevents the poorer senders from harming the good ones.

If you're a Pro plan or higher, you instead send from a dedicated IP, and our internal reputation metric does not have as much weight. Instead, you should keep a closer eye on your _domain reputation_. Domain Reputation is an important part of how mailbox providers decide whether or not your email lands in the spam folder or the inbox.

<call-out>

Learn more about [Domain Reputation, and why it's important.](https://sendgrid.com/blog/what-is-a-domain-reputation/)

</call-out>

**SendGrid's Reputation Policy**

We regularly monitor our customers' account reputation for abuse and undesirable sending practices. Our general guidelines for account reputation take into account the following reputation thresholds:

- **Reputation above 80%:** Nice! This is a good sending reputation and there are no issues at this time.
- **Reputation between 70% and 80%:** This is considered a poor reputation and you should consider taking action to identify and fix problems with your sending practices.
- **Reputation below 70%:** Accounts with reputations below 70% may be subject to immediate suspension or termination.

It is important to monitor your global statistics on a daily basis to make sure you keep your IP reputation score high to avoid getting on [blacklists]({{root_url}}/glossary/blacklists/).
