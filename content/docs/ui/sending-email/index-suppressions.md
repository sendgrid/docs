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

## Suppressions vs. Unsubscribes

An unsubscribe is the action an email recipient takes when they opt-out of an email list. Typically, this is done by clicking the unsubscribe link in the email.

A suppression is the action the sender takes by no longer sending to an email address when a recipient has opted out of an email list or when the recipient’s email server or provider has rejected emails sent to that address.

This is an important distinction, because from the point of view of your recipients, you as the SendGrid customer are the sender. We have made this distinction in order to clearly define the difference between an action a recipient takes and an action SendGrid takes on your behalf.

<call-out type="warning">

Each email you attempt to send to a suppressed address will consume one email from your account.

</call-out>

## Managing Unsubscribes

Managing unsubscribes is key to getting maximum email delivery. If your recipients have an easy way to tell you that they’d like to stop receiving your email, instead of using the spam button, it will give you valuable insights without affecting your reputation.

SendGrid has three different ways of processing unsubscribes depending on how you’re sending mail. If you use [Subscription Tracking]({{root_url}}/ui/sending-email/subscription-tracking/), recipients can unsubscribe from all of the emails you’re sending. As a transactional mail user, you also have the option to create unsubscribe groups for your transactional templates using Advanced Suppression Management. Alternatively, if you’re sending Marketing Campaigns, recipients can unsubscribe from specific types of emails that they’d rather not receive anymore, also known as [Unsubscribe Groups]({{root_url}}/ui/sending-email/unsubscribe-groups/).

If you are sending Transactional email through the SendGrid API or SMTP and have the Subscription Tracking setting turned on, an unsubscribe option will be added to the footer of every email that gets sent through your account. A user who clicks the unsubscribe link will be added to your global unsubscribe list and **any** future attempts to send email to those users will be suppressed, unless they’re removed. You can also manage this list manually, adding and removing addresses via the UI or with the use of API calls.

The Subscription Tracking setting also has a number of options for customization, such as a replacement tag that allows you to place the unsubscribe text somewhere in the body of the email, the ability to reword the unsubscribe message, and the ability to add a custom landing page.

If using Advanced Suppression Management in place of Subscription Tracking, an ASM tag must be included in the template.

- We will replace the tag with the text "Unsubscribe From All Emails" if you include `<%asm_global_unsubscribe_url%>`
- We will replace the tag with the unsubscribe URL but **without** the hyperlinked tag if you include  
  `<%asm_global_unsubscribe_raw_url%>`
- We will replace the tag with the text "Unsubscribe from this list" if you include `<%asm_group_unsubscribe_url%>`
- We will replace the tag with only the group unsubscribe URL **without** the hyperlinked text if you include
  `<%asm_group_unsubscribe_raw_url%>`

## Different Types of Suppressions

SendGrid automatically suppresses emails sent to users for a variety of reasons in order to aid our customers in having the best possible reputation they can have by attempting to prevent unwanted mail.

**[Blocks]({{root_url}}/ui/sending-email/blocks/)** - The recipient's email server rejects the message for a reason related to the message, not the recipient address. This may be due to your Sending IP, or the message content. Since these are message-specific issues, future messages to these addresses are _not_ suppressed.

**[Bounces]({{root_url}}/ui/sending-email/bounces/)** - The recipient’s email server rejects the message, or sends the message back to SendGrid, due to an issue with the recipient address.

**[Invalid Emails]({{root_url}}/ui/sending-email/invalid-emails/)** - The recipient address does not exist at the mail server you sent to.

**[Spam Reports]({{root_url}}/glossary/spam-reports/)** - The recipient marks your email as spam.

**[Global Unsubscribes]({{root_url}}/ui/sending-email/global-unsubscribes/)** - When a user unsubscribes from everything you might email them.

**[Group Unsubscribes]({{root_url}}/ui/sending-email/group-unsubscribes/)** - When a user unsubscribes from a specific group of your emails.

## Bypass suppressions

Bypass filters allow you to disregard unsubscribe groups and suppressions to ensure that an email is delivered to all recipients, whether or not they are on a suppression or unsubscribe list. It is important to respect unsubscribes, and these filters should be used only when it is absolutely necessary to deliver a message to recipients who have unsubscribed from your emails. For example, you may use these filters to deliver messages that you are legally required to send to all recipients or important security messages like a password reset.

### Bypass list management

Both the [X-SMTPAPI header]({{root_url}}/for-developers/sending-email/smtp-filters/#filter-bypass_list_management) and the [v3 Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) accept the `bypass_list_management` filter. By setting the `bypass_list_management` filter to `true`, your message will bypass all unsubscribes and suppressions in **all** lists.

### Bypass filters and v3 Mail Send

The v3 Mail Send API provides three filters in addition to `bypass_list_management`. These additional filters allow you to bypass a single list. You can also pass multiple bypass filters to the v3 Mail Send API to target a combination of lists; however, the `bypass_list_management` filter cannot be combined with any other bypass lists. When using the `bypass_list_management` filter, you are disregarding all lists, and any more granular bypass settings will be ignored.

Each filter should be sent via the `mail_settings` field as an object with a single boolean field called `"enable"`. When a filter is set to `true`, Twilio SendGrid will disregard or _bypass_ the unsubscribe or suppression status of the addresses in the list, delivering the message to the recipients. See the [v3 Mail Send API reference](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) for examples.

- Bypass spam management
  - By setting the `bypass_spam_management` filter to `true`, your message will bypass the spam report list. The bounce and global unsubscribe lists will be checked and respected.
- Bypass bounce management
  - By setting the `bypass_bounce_management` filter to `true`, your message will bypass the bounce list. The spam report and global unsubscribe lists will be checked and respected.
- Bypass unsubscribe management
  - By setting the `bypass_unsubscribe_management` filter to `true`, your message will bypass the global unsubscribe list. The spam report and bounce lists will be checked and respected. Note that this bypass filter is applied to global unsubscribes only; group unsubscribes will be checked and respected.

## Additional resources

- [Unsubscribe Groups]({{root_url}}/ui/sending-email/unsubscribe-groups/)
- [Create and Manage Unsubscribe Groups]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/)
