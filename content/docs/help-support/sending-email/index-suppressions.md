---
layout: page
weight: 100
title: Suppressions Overview
group: tracking
seo:
  title: SendGrid Suppressions Overview
  description: SendGrid will suppress emails that your recipients unsubscribe from or that recipient email servers reject.
  keywords: suppressions, unsubscribes, email suppressions, email unsubscribes
navigation:
  show: true
---

## 	Suppressions vs. Unsubscribes

An unsubscribe is the action an email recipient takes when they opt-out of an email list. Typically, this is done by clicking the unsubscribe link in the email.

A suppression is the action the sender takes when a recipient has opted out of an email list or when the recipient’s email server or provider has rejected emails sent to that address.

This is an important distinction, because from the point of view of your recipients, you as the SendGrid customer are the sender. We have made this distinction in order to clearly define the difference between an action a recipient takes and an action SendGrid takes on your behalf.


<call-out type="warning">

Each email you send to a suppressed address will consume one email from your account.

</call-out>

## 	Managing Unsubscribes

Managing unsubscribes is key to getting maximum email delivery. If your customers have an easy way to tell you that they’d like to stop receiving your email, instead of using the spam button, it will give you valuable insights without affecting your reputation.

SendGrid has two different ways of processing unsubscribes depending on how you’re sending mail. If you use [Subscription Tracking]({{root_url}}/help-support/sending-email/subscription-tracking/), recipients can unsubscribe from all of the emails you’re sending. If you’re using the marketing email tool, recipients can unsubscribe from specific types of emails that they’d rather not receive anymore.

If you are sending email through SendGrid and have the Subscription Tracking setting turned on, an unsubscribe option will be added to the footer of every email that gets sent through your account. A user who clicks the unsubscribe link will be added to your global unsubscribe list and **any** future attempts to send email to those users will be suppressed, unless they’re removed. You can also manage this list manually, adding and removing addresses via the UI or with the use of API calls.

The Subscription Tracking setting also has a number of options for customization, such as a replacement tag that allows you to place the unsubscribe text somewhere in the body of the email, the ability to reword the unsubscribe message, and the ability to add a custom landing page.

## 	Different Types of Suppressions

SendGrid automatically suppresses emails sent to users for a variety of reasons in order to aid our customers in having the best possible reputation they can have by attempting to prevent unwanted mail.

**[Blocks]({{root_url}}/help-support/sending-email/blocks/)** - The recipient's email server rejects the message for a reason related to the message, not the recipient address. This may be due to your Sending IP, or the message content. Since these are message-specific issues, future messages to these addresses are *not* suppressed.

**[Bounces]({{root_url}}/help-support/sending-email/bounces/)** - The recipient’s email server rejects the message, or sends the message back to SendGrid, due to an issue with the recipient address.

**[Invalid Emails]({{root_url}}/help-support/sending-email/invalid-emails/)** - The recipient address does not exist at the mail server you sent to.

**[Spam Reports]({{root_url}}/help-support/analytics-and-reporting/spam-reports/)** -  The recipient marks your email as spam.

**[Global Unsubscribes]({{root_url}}//help-support/sending-email/global-unsubscribes/)** - When a user unsubscribes from everything you might email them.

**[Group Unsubscribes]({{root_url}}/help-support/sending-email/group-unsubscribes/)** - When a user unsubscribes from a specific group of your emails.


## 	Additional resources
 	
- [Unsubscribe Groups]({{root_url}}/help-support/sending-email/unsubscribe-groups/)
- [Create and Manage Unsubscribe Groups]({{root_url}}/help-support/sending-email/create-and-manage-unsubscribe-groups/)
