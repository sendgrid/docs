---
comments: false
date: 2012-07-17 11:31:43
layout: page
published: false
slug: delivery-metrics-replacement
title: Delivery Metrics Replacement
wordpress_id: 4369
ef_editorial_meta:
- Description
---

Effective and efficient email delivery is a challenge. In a simple email environment, once an email leaves your application, server, or mail client you no longer know what exactly what happens to that message. It's out of your hands and in the hands of other mail servers and, if delivered, the recipient. SendGrid is different in that we offer real, usable delivery metrics. If you use these metrics for message tracking you will gain useful insight into your messaging trends and develop data essential to making educated business decisions.



> **TIP >> **[Jump over to your Statistics. You must be logged in.](http://sendgrid.com/statistics/email#graph)



![](http://docs.sendgrid.com/wp-content/uploads/2012/07/newstatsui_dashboard1.png)



## Requests


A request is an email sent and is reported in your SendGrid dashboard every time our servers get a request from your application or server to send an email to one of your customers.  
  




## Delivered


Delivered seems pretty obvious, right? At a fundamental level, a delivery is recorded when a request to send an email results in an email being delivered to the end recipient. However, there is a little more to it. You could consider an email classified as delivered to mean that an ISP has accepted the message and will deliver it to a mailbox. However, delivered does not guarantee that your email is in the recipient’s inbox, and it could even mean that it was delivered to the spam box or junk folder. It might not even be in the user's mailbox at all.



> **NOTE >> **If an email is indicated as delivered you can be certain that it was not deferred by the ISP.





## Clicks


The Clicks statistic represents the total number of times your users have clicked on the various links within your emails. “Unique clicks” represents the number of unique individuals that have clicked the links in your emails. So, if a certain customer clicks the same link more than once, it will only be reported _once_ in the “unique clicks” count.



> **NOTE >> **You can find the Unique Clicks statistical data in the Global Stats page.





## Opens


The concept explained above regarding clicks also applies to opens. Specifically related to Opens, SendGrid inserts a small, transparent image into all messages that are being tracked for Opens. When the client application loads images, it pulls the image data from SendGrid servers that registers an Open event. Not all email clients load images by default. Microsoft's Outlook, Mozilla's Thunderbird, and Google's Gmail do not load images.



> **NOTE >> **You can find the Unique Opens statistical data in the Global Stats page.





> **WARNING >> **While not ideal circumstances from the perspective of collecting statistical data, many users view the blocking of remote images as a form of protection from viruses and malicious activity. It remains important to note that some users may choose to never load images in email, even from trusted sources. As such, there may be many occasions where recipients will have received a message, opened it, and even clicked on a link, and it will never be counted as opened.





> **TIP >> **Apple's Mail.app client for Mac OS X and iOS devices like the iPhone and iPad load images by default, as does IBM's Lotus Notes, but everyone else's idea of security is to block image loading from untrusted sources. You can help your users trust you by helping them add your domain to their trusted senders list. Include instructions on your site about how to do just that and include a short and sweet note with a link to the page in messages. [You might even get some help from a Jedi](http://www.emaildeliveryjedi.com/email-whitelist.php).





## Unsubscribes


In order to maintain compliance with CAN-SPAM laws, any email that is sent in bulk to a mass audience must include an unsubscribe link. SendGrid provides a “Subscription Tracking” app that automatically adds this link to your emails. When someone clicks that link within their email, they are added to your “unsubscribe” list. Any recipients that are added to this list will be excluded from future mailings.



> **TIP >> **[You can find more details regarding the CAN-SPAM Act at the Bureau of Consumer Protection's Business Center.](http://business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business)



It's no surprise that sending messages to addresses that have explicitly unsubscribed from any of your email messages is detrimental to establishing and maintaining your honest and reliable reputation. While this functionally only applies to one-to-many message formats (i.e., newsletters) and not to transactional email messages, make sure to include unsubscribe functionality in your marketing newsletters and other mass messaging.  
  


![](/wp-content/uploads/2011/06/stats-apps.png)



> **NOTE >> **You can enable Click, Open, and Subscription Tracking in the [Apps](http://sendgrid.com/app/) section of your SendGrid account.





## Bounces & Repeat Bounces


A **bounce** occurs when a sent message is rejected by the receiving mail server. The most common causes for bounced email messages include a misspelled email address, a nonexistent email address, or a full recipient inbox. A **repeat bounce** is when an address has bounced, then bounced a second time and logged to the Bounce List, but you ask us to send to it again. Our system does not attempt to deliver the message, because the system 'knows' that address is bad. This shows up on the Email Activity tab as a **drop** with the reason "bounced address", and as a "repeat bounce" on the Statistics tab.  
  




## Hard Bounce


This type of **bounce** occurs when the receiving server returns a 500-class error, communicating no additional attempts to deliver to that server or email address are needed. An common reason for a hard bounce is “no mailbox for user.”  
  




## Soft Bounce


A **soft bounce** results from an e-mail message that gets as far as the recipient’s mail server, but is returned as temporarily undeliverable before it gets to the intended recipient. This type of bounce might occur as a result of a full recipient inbox, or due to throttling.



> **TIP >> **[Read more about message throttling.](/docs/email-deliverability/what-is-throttling/)





## Spam reports & repeat spam reports


If a recipient of your email feels that they received it in error, or simply did not wish to get the email from you, they may click the “report spam” or “junk” button. **Spam reports** can negatively affect your reputation and deliverability whether they are deserved or not, so it is very important to make sure you send to people who really want your messages.  
  


You should always include a clear, easy way to opt out of future messages from your organization, by way of an Unsubscribe link. Finally, a clear and fair initial opt-in process will mitigate potential spam reports down the road. If you’re ever wondering what is “the right thing to do” in the realm of opt-ins & opt-outs, just put yourself in the shoes of the consumer and ask, “what would I expect in this situation?”  
  




## Invalid Email


An **invalid email**l result occurs when you attempt to send to an email address that is formatted in a manner that does not meet internet email format standards. Examples include addresses without the “@” sign, addresses that include certain special charaters, or spaces in an address. This response comes from our own server, since an invalid email is impossible to even attempt to send to its [non-existent] destination.  
  




## Blocks


If you receive a block notification, this means that the IP address from which you are sending has been placed on a black list of some sort. ISPs and organizations work from various blacklists, some of which are reputable and valid. Unfortunately for all senders, some blacklists out there are less reputable and, quite frankly, questionable in their intentions. In the event that you are placed on a blacklist, SendGrid will contact the ISP in question on your behalf and submit your IP for removal, once we’ve determined that your email are in fact legitimate and appropriate.  
  




## Deferrals


A deferral occurs when an ISP is for some reason not ready to accept email from your IP address. Instead of blocking or bouncing the message, the ISP will defer receiving the message and wait for the email to be resent. An ISP may do this because it does not recognize the IP from which a message originates; or it could just be that their system is operating in such a way that they cannot accept the email at that specific time. If, upon your resending, the ISP determines that it is ready to trust you as a sender or their system operations are back to normal, the email will be accepted as normal. SendGrid software is intelligent enough to retry delivery of a deferred email on behalf of our customers. Sendgrid will continue to attempt re-delivery for 72 hours from the time of the first deferral, after which time the email address is placed on the Hard Bounce list. If you have built your own email solution, you will want to build this intelligence into your code in order to avoid having to retry deliveries manually.  
  




## Drops


In certain cases, SendGrid will “Drop” a message to a specific email address in order to protect your sender reputation. SendGrid keeps [Email Lists](http://sendgrid.com/bounces/) to track bounces, spam reports, and unsubscribes for each of our users. If a user sends a message to an email address that exists on one of these lists within their account, SendGrid will automatically drop the message (i.e., not send to the address). *Note: SendGrid users can always delete entries from these lists if an email address is erroneously placed on one or more of these lists, you can accomplish this by mousing over the entry and clicking the "Delete" button.



> **TIP >> **For a detail list of common error message reasons, please visit our [Email Error Messages](/documentation/delivery-metrics/email-error-messages/) page.





> **TIP >> **All of the metrics we track for you are available from our web interface or through our [Event API](/documentation/api/event-api/).
