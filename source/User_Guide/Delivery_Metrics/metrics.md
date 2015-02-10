---
layout: page
weight: 0
title: The SendGrid Delivery Metrics
seo:
  title: The SendGrid Delivery Metrics
  description: SendGrid tracks specific metrics for your email campaigns, so that you can optimize your email deliverability to your customers.
navigation:
  show: true
---

{% info %}
 Most of the metrics we track for you are available from our web
interface or through our <a href="{{root_url}}/API_Reference/Webhooks/event.html">Event API</a>. We are working on
adding the new beta statistics.
{% endinfo %}

{% info %}
 For a detailed list of common error messages, please visit our <a href="{{root_url}}/Delivery_Metrics/email_error_messages.html">Email Error Messages</a> page.
{% endinfo %}

{% anchor h2 %}
Requests
{% endanchor %}
<p>A request is an email sent and is reported in your SendGrid dashboard every time our servers get a request from your application or server to send an email to one of your customers.</p>

{% anchor h2 %}
Delivered
{% endanchor %}
<p>A delivery is recorded when a request to send an email results in the delivery of that email to the end recipient. <strong>Delivered</strong> means the message was accepted by the receiving server, HOWEVER this does not necessarily mean that the message reached the recipient's inbox.</p>

{% info %}
If an email is indicated as delivered you can be certain that it was not deferred by the ISP.
{% endinfo %}

{% anchor h2 %}
Clicks &amp; Unique Clicks
{% endanchor %}
<p>The “Clicks” percentage is the total number of times your users have clicked on the various links within your emails, divided by the total number of Delivered messages.  The “Unique clicks” percentage is the number of unique individuals that have clicked the links in your emails, divided by the total number of Delivered messages. This requires that the Click Tracking app be enabled.</p>

{% info %}
 Users clicking a SendGrid Unsubscribe link will not count as a Click. However, if you use a third-party unsubscribe link, it will be tracked as a Click.
{% endinfo %}

{% anchor h2 %}
Opens &amp; Unique Opens
{% endanchor %}
<p>SendGrid inserts a small, transparent image into all messages that are being tracked for Opens. When the client application loads images, it pulls the image data from SendGrid servers and registers an Open event. Not all email clients load images by default. Microsoft's Outlook, Apple's Mail.app, Mozilla's Thunderbird, and Google's Gmail do not load images. As such, there may be many occasions where recipients will have received a message, opened it, and even clicked on a link, and it will never be counted as opened. The "Opens" percentage is the total number of times your users opened your emails, divided by the total number of Delivered messages.  The “Unique opens” percentage is the number of unique individuals that have opened your emails, divided by the total number of Delivered messages. This requires that the Open Tracking app be enabled.</p>

{% anchor h2 %}
Unsubscribes
{% endanchor %}
<p>In order to maintain compliance with <a title="CAN-SPAM" href="http://business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business">CAN-SPAM laws</a>, any email that is sent in bulk to a mass audience must include a subscription management link. SendGrid provides a "Subscription Tracking" app that automatically adds this link to your emails. When someone clicks that link within their email, they are added to your "unsubscribe" list. Any recipients that are added to this list will be excluded from future mailings.</p>

<p>It's no surprise that sending messages to addresses that have explicitly unsubscribed from any of your email messages is detrimental to your reputation as a sender. While this functionally only applies to one-to-many message formats (i.e., marketing emails) and not to transactional email messages, make sure to include subscription management functionality in your marketing emails and other mass messaging.</p>

<p><img src="{{root_url}}/images/delivery_metrics_apps.png" alt="" width="685" height="88"></p>

See Also: [Marketing Email Unsubscribes]({{root_url}}/Marketing_Emails/unsubscribes.html)

{% info %}
 you can enable Click, Open, and Subscription Tracking in the <a href="https://sendgrid.com/app/">Apps</a> section of your SendGrid account.
{% endinfo %}

{% anchor h2 %}
Bounces &amp; Repeat Bounces
{% endanchor %}
<p>A <strong>bounce</strong> occurs when a sent message is rejected by the receiving mail server. The most common causes for bounced email messages include a misspelled email address, a nonexistent email address, or a full recipient inbox. A <strong>repeat bounce</strong> is when an address has bounced, then bounced a second time and logged to the Bounce List, but you ask us to send to it again. Our system does not attempt to deliver the message, because the system 'knows' that address is bad. This shows up on the Email Activity tab as a <strong>drop</strong> with the reason "bounced address", and as a "repeat bounce" on the Statistics tab.</p>
<p><a href="https://sendgrid.com/bounces">View your Bounces</a></p>

{% anchor h2 %}
Hard Bounce
{% endanchor %}
<p>This type of <strong>bounce</strong> occurs when the receiving server returns a 500-class error, communicating no additional attempts to deliver to that server or email address are needed. An common reason for a hard bounce is "no mailbox for user."</p>

{% anchor h2 %}
Spam reports &amp; repeat spam reports
{% endanchor %}
<p>If a recipient of your email feels that they received it in error, or simply did not wish to get the email from you, they may click the "report spam" or "junk" button. <strong>Spam reports</strong> can negatively affect your reputation and deliverability, so it is very important to make sure you send to people who really want your messages. You should always include a clear, easy way to opt out of future messages from your organization, by way of a subscription management link. Finally, a clear and fair initial opt-in process will mitigate potential spam reports down the road.  <strong>Repeat Spam reports</strong> are the number of messages that were sent to addresses that had reported mail as spam, and were therefore dropped. Think of the number more as "number of emails suppressed because the address reported email as spam". </p>
<p><a title="Spam Reports" href="https://sendgrid.com/spamReports">View your Spam Reports</a></p>

{% anchor h2 %}
Invalid email
{% endanchor %}
<p>An <strong>invalid email</strong> occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards. Examples include addresses without the "@" sign or addresses that include certain special characters and/or spaces. This response comes from our own server, since an invalid email is impossible to even attempt to send to its [non-existent] destination.</p> <p><a title="Invalid Emails" href="https://sendgrid.com/invalidEmail">View your list of Invalid Emails</a></p>

{% anchor h2 %}
Blocks
{% endanchor %}
<p>If you receive a <strong>block</strong> notification, this means that the IP address from which you are sending has been placed on a black list of some sort. ISPs and organizations work from various blacklists, some of which are reputable and valid. In the event that you are placed on a blacklist, it is advised that you reach out to the ISP in question and submit your IP for removal. This process can take 1-4 weeks to complete and will require you to fill out de-list forms.</p> <p><a href="https://sendgrid.com/blocks">View your list of Blocks</a></p>

{% anchor h2 %}
Deferrals
{% endanchor %}
<p>A <strong>deferral</strong> occurs when an ISP is for some reason not ready to accept email from your IP address. Instead of blocking or bouncing the message, the ISP will defer receiving the message and wait for the email to be resent. An ISP may do this because it does not recognize the IP from which a message originates; or it could just be that their system is operating in such a way that they cannot accept the email at that specific time. If, upon your resending, the ISP determines that it is ready to trust you as a sender or their system operations are back to normal, the email will be accepted as normal. SendGrid will retry delivery of a deferred email on behalf of our customers for 72 hours from the time of the first deferral, after which time the email address is placed on the Hard Bounce list. If you have built your own email solution, you will want to build this intelligence into your code in order to avoid having to retry deliveries manually.</p>

{% anchor h2 %}
Drops
{% endanchor %}
<p>In certain cases, SendGrid will "Drop" a message to a specific email address in order to protect your sender reputation. SendGrid keeps <a href="https://sendgrid.com/bounces/">Email Lists</a> to track bounces, spam reports, and unsubscribes for each of our users. If a user sends a message to an email address that exists on one of these lists within their account, SendGrid will automatically drop the message (i.e., not send to the address). *Note: SendGrid users can always delete entries from these lists if an email address is erroneously placed on one or more of them. Users can accomplish this by mousing over the entry and clicking the "Delete" button.</p>