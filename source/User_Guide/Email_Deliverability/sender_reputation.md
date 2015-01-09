On the Account Overview page of the SendGrid website, you can find your SendGrid account reputation. This reputation is a indicator of how we view your email sending practices.

Reputation.png

How is Reputation Computed?

The SendGrid account reputation is computed based on a calculation of:

The percentage of requests that are able to be Delivered (Delivered / Requests). This takes into account Bounces, Invalid Emails, and Drops (Repeat bounces, unsubscribes, etc.) Please review our Delivery Metrics article for more detail on these terms.
Spam Reports. Each spam report is a user actively rejecting your mail, and has a strong negative affect
 

The Effect of Reputation on your Account

Depending on your package level, your Reputation can matter more or less. At all levels, if your Reputation is low enough, your account will come under review by our Compliance team, and you may be contacted, and your account may be suspended for review.

If you're on a Bronze or Lite package, for the first month your account is in a "New" IP cluster while we learn your sending habits. After that, you're placed in an IP cluster with other customers with the same reputation range as you. This keeps the good senders together, and prevents the poorer senders from harming the good ones.

If you're a Silver package or higher, you have a dedicated IP, and our internal Reputation metric does not have as much weight. Instead, you should keep a closer eye on your external reputation. Every receiving server has their own score of you, which they generally "forget" after a couple of weeks of no sending habits. Sites such as SenderScore are a good way to get an idea of your external reputation.


SendGrid's Reputation Policy:

We regularly monitor our customers' account reputation for abuse and undesirable sending practices. Our general guidelines for account reputation take into account the following reputation thresholds:

Reputation above 80%: Congratulations, you have a good sending reputation and there are no issues at this time.
Reputation between 70% and 80%: This is considered a poor reputation and actions should be taken immediately to identify and fix problems with your sending practices.
Reputation below 70%: Accounts with reputations below 70% may be subject to immediate suspension or termination.
