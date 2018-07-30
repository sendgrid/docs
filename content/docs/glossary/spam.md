---
seo:
  title: Spam
title: Spam
weight: 0
layout: page
navigation:
  show: false
---

The most simple way to define spam in the Email world is by using these two words: ```unwanted email```.

Since it’s so easy for a message to fall in this category, as a Sender you may want to know how and why emails can get marked as spam.

These are some of the most common reasons for which an email may end up in the Spam Folder and ways to avoid this:

1. **Improper authentication**. Authentication is extremely important as it helps ISPs identify you as a sender. Think of it as you'd be knocking at someone’s door. You want to inspire trust in order to get invited in their home. In the email world you can do so by making sure your email server supports these protocols ([DKIM, Domain Keys]({{root_url}}/glossary/dkim.html), [SPF]({{root_url}}/glossary/spf.html), and [Sender ID]({{root_url}}/glossary/sender-id.html)) and that they are properly implemented. SendGrid ensures authentication by setting up DKIM and SPF records automatically for you. For Pro 100k or above packages, we offer dedicated IPs which can be [whitelabeled]({{root_url}}/help-support/getting-started/how-to-set-up-domain-authentication.html) with your sending domain and therefore strengthening the authentication.

2. **High complaint rate**. If too many people are flagging your mail as spam, ISPs will take action and will first start sending your mail to the Spam Folder, then they may start throttling your messages or even block them. Keeping an eye on the complaint rate is critical if you want to reach the Inbox.

3. **Lack of an Unsubscribe Link**. It is important to give the customers the choice to opt out of a service. By not adding an Unsubscribe link to the emails will only force a subscriber to hit the Spam button in order to stop receiving emails from a Sender. Avoid this by adding an opt-out link to your emails. Some studies have shown that you can lower the complaint rates by simply placing the Unsubscribe link at the top of your emails and making it visible, easy to find.

4. **High Frequency**. This is the number one reason subscribers either hit the Spam Button or Unsubscribe from an email stream. ISPs want to make sure that their users’ mailboxes don’t get crowded and in order to protect their users from email fatigue they can start junking the messages. To avoid this, the best way to go about it is to simply include a link to your [Email Preference Center](https://sendgrid.com/blog/need-email-preference-center/) in your emails. This way you let your subscribers tell you how often they want to hear from you.

5. **Sending to inactive users**. People’s interests change all the time and so it happens with emails. Subscribers can lose their interest and stop opening the emails. The most common tendency is to send emails to even more users. However, this will only hurt your deliverability even more because ISPs have ways of monitoring the activity of the users. They can check whether users open the emails, click on links, delete or mark emails as spam or not spam, basically they monitor the users’ level of responsiveness or engagement. Based on these metrics ISPs decide folder placement - whether the email goes to the Inbox or if it gets Junked. The only way to avoid hitting the Spam Folder is by tracking [user engagement](https://sendgrid.com/blog/email-reputation-and-email-engagement-metrics/) as well. For all users SendGrid offers the [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) to help with that. [Here](https://sendgrid.com/blog/infer-engagement-with-the-event-api/) is our recommendation on how to use the Event Webhook in tracking your customers' responsiveness to your emails. The key part in tracking user engagement is an appropriate [sunset policy](https://sendgrid.com/blog/putting-engagement-data-use-sunset-policies/) for your business. Before removing the inactive users from your distribution lists it is worth trying re-engaging them. One great way to do that is by sending them [reconfirmation campaigns]({{root_url}}/glossary/reconfirmation.html).

6. **Inadequate content**. It is well known that the ISPs are protecting their users with the help of spam filters. Using the wrong words or even characters in your email can trigger the spam filters and therefore throw your email in the Spam Folder. The key thing to remember, is that a spam filter is trying to remove commercial advertisements and promotions. So generally, words that are common in such emails should be avoided or used sparingly. That said, take a look at these [100 Spam Trigger Words & Phrases to Avoid](http://blog.hubspot.com/blog/tabid/6307/bid/30684/The-Ultimate-List-of-Email-SPAM-Trigger-Words.aspx).

To find out more about what you can do to ensure your email is being received by your recipients, you may also want to check out our [Tips and Tricks to Stay Out of the Spam Folder](https://sendgrid.com/blog/tips-tricks-stay-spam-folder-qa/).
