---
seo:
  title: Your Reputation... What is it?
  description: Learn more about what the SendGrid reputation score means, and how it differs from your Domain Reputation...
  keywords: reputation, domain, sender, IP, bounces
title: Your Reputation... What is it?
weight: 0
layout: page
zendesk_id: 200181658
navigation:
  show: true
---

Once logged in to your account, on the left side of your [SendGrid.com](https://sendgrid.com) dashboard, you can find your  **SendGrid account reputation**. This reputation is an indicator of how we view your email sending practices.

[]({{root_url}}/images/Screen_Shot_2015-05-20_at_3.32.24_PM.png)

<call-out>
Please note that the SendGrid Reputation does not represent your inboxing percentage at mailbox providers.
</call-out>

**How is the SendGrid Reputation Calculated?**

The SendGrid account reputation is computed based on a calculation of:

- The percentage of requests that are able to be delivered out of the total amount requested (delivered / requests). This takes into account bounces, invalid emails, and drops (repeat bounces, unsubscribes, etc.) Please review our [Statistics](https://sendgrid.com/docs/User_Guide/Statistics/index.html) article for more detail on these terms.

- Spam Reports. Each spam report is a user actively rejecting your mail, and has a strong negative affect.

<call-out>
You can increase the SendGrid reputation score by removing unengaged users and [dropped addresses](https://sendgrid.com/docs/Classroom/Deliver/Undeliverable_Email/my_emails_are_being_dropped.html) from your lists before sending. Also be sure you are only sending to users who have opted in to receive your email to help prevent spam reports.
</call-out>

**The Effect of Reputation on your Account**

The significance of your reputation depends on the plan you chose when creating your SendGrid account. For all plans, if your reputation becomes low enough, your account may come under review by our Compliance team, you may be contacted, and your account may be suspended for review.

If you're using a Free or Essentials plan, we will put your account in a "New" IP cluster initially while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together, and prevents the poorer senders from harming the good ones.

If you're a Pro plan or higher, you instead send from a dedicated IP, and our internal reputation metric does not have as much weight. Instead, you should keep a closer eye on your _domain reputation_. Domain Reputation is an important part of how mailbox providers decide whether or not your email lands in the spam folder, or the inbox.

<call-out>
Learn more about [Domain Reputation, and why it's important.](https://sendgrid.com/blog/what-is-a-domain-reputation/)
</call-out>

**SendGrid's Reputation Policy**

We regularly monitor our customers' account reputation for abuse and undesirable sending practices. Our general guidelines for account reputation take into account the following reputation thresholds:

- **Reputation above 80%:** Nice! This is a good sending reputation and there are no issues at this time.
- **Reputation between 70% and 80%:** This is considered a poor reputation and you should consider taking action to identify and fix problems with your sending practices.
- **Reputation below 70%:** Accounts with reputations below 70% may be subject to immediate suspension or termination.
