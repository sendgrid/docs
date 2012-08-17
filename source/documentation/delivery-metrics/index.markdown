---
comments: false
date: 2011-06-14 09:40:56
layout: page
slug: delivery-metrics
title: Delivery Metrics
wordpress_id: 1135
---

Effective and efficient email delivery is a challenge. In a simple email environment, once an email leaves your application, server, or mail client you no longer know what exactly what happens to that message. It's out of your hands and in the hands of other mail servers and, if delivered, the recipient. SendGrid is different in that we offer real, usable delivery metrics. If you use these metrics for message tracking you will gain useful insight into your messaging trends and develop data essential to making educated business decisions. **>>** [Jump over to your Statistics tab.](http://sendgrid.com/statistics/email#graph)  
  


![](/wp-content/uploads/2011/06/Example-Statistics-Graph2.png)



## Requests


A request is an email sent and is reported in your SendGrid dashboard every time our servers get a request from your application or server to send an email to one of your customers.  
  




## Delivered


Delivered seems pretty obvious, right? At a fundamental level, a delivery is recorded when a request to send an email results in an email being delivered to the end recipient. However, there is a little more to it. You could consider an email classified as delivered to mean that an ISP has accepted the email and said “OK, I’ll take this email off your hands.” However, delivered _does not necessarily mean that your email is in the recipient’s inbox_, and it could even mean that it was delivered to the spam box or junk folder.  




> **NOTE >> **If an email is indicated as delivered you can be certain that it was not deferred by the ISP.





## Clicks & Unique Clicks


The “Clicks” statistic represents the total number of times your users have clicked on the various links within your emails. “Unique clicks” represents the number of unique individuals that have clicked the links in your emails. So, if a certain customer clicks the same link more than once, it will only be reported _once_ in the “unique clicks” count.  
  




## Opens & Unique Opens


The concept explained above regarding clicks also applies to opens. Specifically related to Opens, SendGrid inserts a small, transparent image into all messages that are being tracked for Opens. When the client application loads images, it pulls the image data from SendGrid servers and registers an Open event. Not all email clients load images by default. Microsoft's Outlook, Apple's Mail.app, Mozilla's Thunderbird, and Google's Gmail do not load images.  
  


This is clearly not an ideal arrangement, but many users view the blocking of remote images as a form of protection from viruses and malicious activity. It remains important to note that some users may choose to never load images in email, even from trusted sources. As such, there may be many occasions where recipients will have received a message, opened it, and even clicked on a link, and it will never be counted as opened. As our tracking mechanisms become more advanced, though, we should be able to gain more accuracy in these metrics.  
  




## Unsubscribes


In order to maintain compliance with [CAN-SPAM laws](http://business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business), any email that is sent in bulk to a mass audience must include a subscription management link. SendGrid provides a “Subscription Tracking” app that automatically adds this link to your emails. When someone clicks that link within their email, they are added to your “unsubscribe” list. Any recipients that are added to this list will be excluded from future mailings.  
  


It's no surprise that sending messages to addresses that have explicitly unsubscribed from any of your email messages is detrimental to your reputation as an honorable entity. While this functionally only applies to one-to-many message formats (i.e., newsletters) and not to transactional email messages, make sure to include subscription management functionality in your marketing newsletters and other mass messaging. **>>** [View your list of unsubscribes](http://sendgrid.com/unsubscribes)  
  


![](/wp-content/uploads/2011/06/stats-apps.png)



> **NOTE >> **You can enable Click, Open, and Subscription Tracking in the [Apps](http://sendgrid.com/app/) section of your SendGrid account.





## Bounces & Repeat Bounces


A **bounce** occurs when a sent message is rejected by the receiving mail server. The most common causes for bounced email messages include a misspelled email address, a nonexistent email address, or a full recipient inbox. A **repeat bounce** is when an address has bounced, then bounced a second time and logged to the Bounce List, but you ask us to send to it again. Our system does not attempt to deliver the message, because the system 'knows' that address is bad. This shows up on the Email Activity tab as a **drop** with the reason "bounced address", and as a "repeat bounce" on the Statistics tab. **>>** [View your Bounces](http://sendgrid.com/bounces)



## Hard Bounce


This type of **bounce** occurs when the receiving server returns a 500-class error, communicating no additional attempts to deliver to that server or email address are needed. An common reason for a hard bounce is “no mailbox for user.”  
  




## Soft Bounce


A **soft bounce** results from an e-mail message that gets as far as the recipient’s mail server, but is returned as temporarily undeliverable before it gets to the intended recipient. This type of bounce might occur as a result of a full recipient inbox, or due to [throttling.](/docs/email-deliverability/what-is-throttling/)  
  




## Spam reports & repeat spam reports


This one is easy. If a recipient of your email feels that they received it in error, or simply did not wish to get the email from you, they may click the “report spam” or “junk” button. **Spam reports** can negatively affect your reputation and deliverability, so it is very important to make sure you send to people who really want your messages. Also, you should always include a clear, easy way to opt out of future messages from your organization, by way of a subscription management link. Finally, a clear and fair initial opt-in process will mitigate potential spam reports down the road. If you’re ever wondering what is “the right thing to do” in the realm of opt-ins & opt-outs, just put yourself in the shoes of the consumer and ask, “what would I expect in this situation?” **>>** [View your Spam Reports](http://sendgrid.com/spamReports)



## Invalid email


An **invalid emai**l result occurs when you attempt to send to an email address that is formatted in a manner that does not meet internet email format standards. Examples include addresses without the “@” sign, addresses that include certain special charaters, or spaces in an address. This response comes from our own server, since an invalid email is impossible to even attempt to send to its [non-existent] destination. **>>** [View your list of Invalid Emails](http://sendgrid.com/invalidEmail)



## Blocks


If you receive a block notification, this means that the IP address from which you are sending has been placed on a black list of some sort. ISPs and organizations work from various blacklists, some of which are reputable and valid. Unfortunately for all senders, some blacklists out there are less reputable and, quite frankly, questionable in their intentions. In the event that you are placed on a blacklist, SendGrid will contact the ISP in question on your behalf and submit your IP for removal, once we’ve determined that your email are in fact legitimate and appropriate. **>>** [View your list of Blocks](http://sendgrid.com/blocks)



## Deferrals


A deferral occurs when an ISP is for some reason not ready to accept email from your IP address. Instead of blocking or bouncing the message, the ISP will defer receiving the message and wait for the email to be resent. An ISP may do this because it does not recognize the IP from which a message originates; or it could just be that their system is operating in such a way that they cannot accept the email at that specific time. If, upon your resending, the ISP determines that it is ready to trust you as a sender or their system operations are back to normal, the email will be accepted as normal. SendGrid software is intelligent enough to retry delivery of a deferred email on behalf of our customers. Sendgrid will continue to attempt re-delivery for 72 hours from the time of the first deferral, after which time the email address is placed on the Hard Bounce list. If you have built your own email solution, you will want to build this intelligence into your code in order to avoid having to retry deliveries manually.


## Drops


In certain cases, SendGrid will “Drop” a message to a specific email address in order to protect your sender reputation. SendGrid keeps [Email Lists](http://sendgrid.com/bounces/) to track bounces, spam reports, and unsubscribes for each of our users. If a user sends a message to an email address that exists on one of these lists within their account, SendGrid will automatically drop the message (i.e., not send to the address). *Note: SendGrid users can always delete entries from these lists if an email address is erroneously placed on one or more of these lists, you can accomplish this by mousing over the entry and clicking the "Delete" button.



> **TIP >> **For a detail list of common error message reasons, please visit our [Email Error Messages](/documentation/delivery-metrics/email-error-messages/) page.





> **TIP >> **All of the metrics we track for you are available from our web interface or through our [Event API](/documentation/api/event-api/).
