---
seo:
  title: Help, My emails aren't being delivered!
  description: Help, My emails aren't being delivered!
  keywords: spam, reputation, getting, provisioning, provision, drop, inbox, email, out, report, client, bounce, invalid, deliverability, not, delivered, today, problem, delivery, clarification, complain
title: Help, My emails aren't being delivered!
weight: 0
layout: page
zendesk_id: 200181648
navigation:
  show: true
---

If you find that your email recipients are complaining that they are not receiving your emails, here are some common situations that may be used to help you diagnose the problem:

**1. You recently created a new account with SendGrid**

If you have recently signed up for a new account with SendGrid, it is possible that you account may not be **active** or **provisioned**. Be sure you have responded to the activation email sent to the email address you provided upon signup. If you have responded to this email and still are unable to use the service, it is most likely due to the fact your account has **not been provisioned** yet.

SendGrid screens all new accounts that signup to ensure that only legitimate customers use our service for legitimate purposes. While we typically are able to provision new accounts quickly, there are times when this process is delayed. **To expedite the provisioning process, make sure you provide valid contact information, and a website that is accessible and whose purpose can easily be understood.** Providing a URL that leads to a parked domain, a "coming soon" splash page, or a 404 page will almost always end up delaying your account provisioning.

 

 

**2. You are having trouble sending email to one or more email addresses, or your Requests statistic is much higher than your Delivered**

If you repeatedly have difficulty sending email to specific email addresses, it often indicates that the email address in question is on one of your account's Email Lists. Currently SendGrid maintains the following email lists on a per-account basis:

- Global Unsubscribes
- Group Unsubscribes
- Bounces
- Spam Reports
- Blocks
- Invalid Emails

 

Each of these lists is accessible from the **SUPPRESSIONS**  section in the left-hand navigation bar.

![]({{root_url}}/images/supressions.png)

**When an email address lands in any of these lists, future emails for this email address are automatically _dropped_ by SendGrid.**  This is done to protect your sending reputation as many ISPs frown on repeated bounces, and deliveries to addresses that have unsubscribed or have issued spam reports are certain to cause problems.

If you do find that a valid email has landed in any of these Email Lists, you have the option to remove that email address from the list by hovering over the row you want to delete and choosing the **delete** action on the right hand column of the table. The following image displays the SendGrid unsubscribe list with some demonstration data:

![]({{root_url}}/images/Cursor_and_SendGrid.png)

Please note: Addresses appearing on the Blocks list are NOT dropped, they are just recorded here for reference.

