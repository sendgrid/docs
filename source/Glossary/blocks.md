---
seo:
  title: Blocks
  description: Blocked emails happen when your IP address has been added to a blacklist or has been blocked by an ISP or messaging organization.
  keywords: blocks, undelivered email
title: Blocks
weight: 0
layout: page
navigation:
  show: false
---

Blocked messages will appear under Email Reports under Blocks. When your IP address has been added to a blacklist, has been blocked by an ISP or messaging organization, the affected email shows up on this list. Typically it is possible to have your IP address removed from a block list, and some lists automatically do this after a period of time.

Blocks are less permanent than Bounces, it is a list of refused messages that were either blocked by an ISP or deferred longer than 72 hours. In addition, SendGrid does not treat the blocks list as a suppression list, subsequent sends to emails on this list will be sent like normal.

Having an entry on the SendGrid block list does not automatically drop email as it does for the bounce and unsubscribe list.

See the block reason column for more detail specific to the blocked email.

![Blocks](https://github.com/sendgrid/docs/blob/develop/source/images/blocks_1.png)

A few helpful links:

* [Web API & Blocks](https://github.com/sendgrid/docs/blob/develop/source/API_Reference/Web_API/blocks.md)
* [My Emails are being dropped](https://sendgrid.com/docs/Classroom/Deliver/Undeliverable_Email/my_emails_are_being_dropped.html)
* [My Emails are being dropped](https://sendgrid.com/docs/Classroom/Track/Drops/resend_dropped_messages.html)
