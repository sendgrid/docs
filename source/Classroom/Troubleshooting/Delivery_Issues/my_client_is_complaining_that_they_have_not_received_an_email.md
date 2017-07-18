---
seo:
  title: My client is complaining that they have not received an email.
  description: My client is complaining that they have not received an email.
  keywords: spam, bounces, email, block, invalid, deliverability, delivery
title: My client is complaining that they have not received an email.
weight: 0
layout: page
zendesk_id: 203929428
navigation:
  show: true
---

{% info %} Subscriber reporting non-delivery or delays? Check our _[Status Page](http://status.sendgrid.com/)_ for the current state of all SendGrid Services. {% endinfo %}

If a subscriber is complaining that they have not received your email there are a few things you can check. 

1. Search for the email in [Email Activity](https://app.sendgrid.com/email_activity?). If we successfully delivered the message you will see a _delivered_ event with the time of delivery. If you do not see the email come up, you can click on search options and make sure processed and deferred are checked. A _processed_ event indicates that we actually got the request from you. _Deferred_ events show if there are issues or delays with the receiving server accepting the message. 

2. If you do see a delivered event for the message in Email Activity, you can expand it and look at the reason code. You should see a message with 250 OK. Often times the receiving server will "queue the message" and it will say "Queued" right after 250 OK. This means the receiving server accepted the message but is holding it. 

3. If you see deferred events in Email Activity, then expand the event and look at the deferral reason. Is it a problem with connection? Is the user's inbox full? SendGrid will try and deliver deferred messages for up to 72hrs before the users email will end up on the [bounce list]({{root_url}}/User_Guide/Suppressions/bounces.html).

4. Have the user check their SPAM folder. 

5. Check your suppression lists; [bounces]({{root_url}}/User_Guide/Suppressions/bounces.html), [blocks]({{root_url}}/User_Guide/Suppressions/blocks.html), [spam reports]({{root_url}}/User_Guide/Suppressions/spam_reports.html), [invalid email]({{root_url}}/User_Guide/Suppressions/invalid_emails.html). 

If you still have no luck tracking down the email after all of the above, [contact support](http://support.sendgrid.com/hc/en-us). 
