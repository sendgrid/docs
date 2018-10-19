---
seo:
  title: Email Reputation Monitoring
  description: We base your email monitoring reputation on your bounces, blocks, spam, invalid email, and successfully delivered emails.
  keywords: reputation, email sender reputation, email reputation monitoring
title: Reputation Monitoring
weight: 0
layout: page
navigation:
  show: false
---

Once logged in to your account, on the left side of your [SendGrid.com](https://sendgrid.com) dashboard, you can find your **SendGrid account reputation**. It's your IP reputation score, which will be somewhere from 0% to 100%. This score will go up or down based on your [bounce]({{root_url}}/glossary/bounces/), [block]({{root_url}}/glossary/blocks/), [spam]({{root_url}}/glossary/spam-reports/) and invalid rates. In other words, this reputation is an indicator of how we view your email sending practices.

![Reputation Monitoring]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.32.24_PM.png "Reputation indicator")

It is important to monitor your global statistics on a daily basis to make sure you keep your IP reputation score high to avoid getting on [blacklists]({{root_url}}/glossary/blacklists/).

<call-out>

Please note that the SendGrid Reputation does not represent your inboxing percentage at mailbox providers.

</call-out>

**How is the SendGrid Reputation Calculated?**

The SendGrid account reputation is computed based on a calculation of:

- The percentage of delivered requests out of the total amount requested (delivered / requests). This number takes into account bounces, invalid emails, and drops (repeat bounces, unsubscribes, etc.) Please review our [Statistics]({{root_url}}/ui/analytics-and-reporting/stats-overview/) article for more detail on these terms.

- Spam Reports. Each spam report is a user actively rejecting your mail and has a strong negative effect.

<call-out>

You can increase the SendGrid reputation score by removing unengaged users and [dropped addresses]({{root_url}}/glossary/drops/) from your lists before sending. Also be sure you are only sending to users who have opted in to receive your email to help prevent spam reports.

</call-out>

**The Effect of Reputation on your Account**

The significance of your reputation depends on the plan you chose when creating your SendGrid account. For all plans, if your reputation becomes low enough, our Compliance team may mark your account as "under review" and contact you. 

If you're using a Free or Essentials plan, we will put your account in a "New" IP cluster initially while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. IP clusters keep the good senders together and prevents the poorer senders from harming the good ones.

If you're a Pro plan or higher, you instead send from a dedicated IP, and our internal reputation metric does not have as much weight. Alternatively, you should keep a closer eye on your _domain reputation_. Domain Reputation is an essential part of how mailbox providers decide whether or not your email lands in the spam folder or the inbox.

<call-out>

Learn more about [Domain Reputation, and why it's important.](https://sendgrid.com/blog/what-is-a-domain-reputation/)

</call-out>

**SendGrid's Reputation Policy**

We regularly monitor our customers' account reputation for abuse and undesirable sending practices. Our general guidelines for account reputation take into account the following reputation thresholds:

- **Reputation above 80%:** Nice! This percentage indicates a good sending reputation, and there are no issues at this time.
- **Reputation between 70% and 80%:** This is considered a poor reputation and you should consider taking action to identify and fix problems with your sending practices.
- **Reputation below 70%:** Accounts with a reputation below 70% may be subject to immediate suspension or termination.
