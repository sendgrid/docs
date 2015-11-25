---
seo:
  title: Can I stop a send in progress?
  description: Can I stop a send in progress?
  keywords: pause, halt, flush, delete, queue, stop
title: Can I stop a send in progress?
weight: 0
layout: page
zendesk_id: 204117516
navigation:
  show: true
---

Oops! You accidentally sent a whole pile&nbsp;of mail you didn't mean to send... No worries, take a deep breath and read on. Be it a misspelled subject line, to a rogue script, we can help!

**Transactional email&nbsp;**

Stopping an ongoing send that is using SMTP or the Web API can be tricky, because we strive to accept and send emails requests as quickly as possible, sometimes halting&nbsp;an accidental send is just&nbsp;not possible. This&nbsp;is a list of things that you can do to attempt to halt an ongoing send:

&nbsp;

**1.**  **Change your password** - The simply act of [changing your password](https://sendgrid.com/user/account) can break your existing email integration by causing a mismatch between what your app is trying to authenticate with&nbsp;and what we have on record. &nbsp;

This method is great if you have a runaway&nbsp;script or have just started a job accidentally. Be sure to verify that the credentials your app is using are either the primary account ones, or a [Multiple Credential](https://sendgrid.com/credentials) so you can change the proper one.

**2. Contact Support** - Support has the ability to clear any emails currently pending delivery from your account. To be more clear, there is a very small window of opportunity between when we accept an email request and when we actually attempt delivery to the recipient. Emails can build up in this queue, and upon request, we can delete&nbsp;them entirely.&nbsp;

&nbsp;

**Marketing email**

**1. &nbsp;In Progress** - Simply deleting a marketing email that is in progress will halt any progress of the send made thus far, and keep further emails from that send from going out. Be sure to clone the email first, so you don't lose your work! This method has a small window of opportunity, but if you get to it within a minute or so of clicking "Finish" you'll be able to catch it.&nbsp;

![]({{root_url}}/images/inprogressmarketing.png)

&nbsp;

2. **Newsletter API** - There is not a way to stop Marketing emails via the API, you will either need to log into the UI and delete the send, or use the delete API method.&nbsp;

