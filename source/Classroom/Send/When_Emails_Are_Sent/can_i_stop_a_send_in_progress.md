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

Oops! You accidentally sent a whole pile of mail you didn't mean to send... No worries, take a deep breath and read on. Be it a misspelled subject line, to a rogue script, we can help!

**Transactional email **

Stopping an ongoing send that is using SMTP or the Web API can be tricky, because we strive to accept and send email requests as quickly as possible, sometimes halting an accidental send is just not possible. This is a list of things that you can do to attempt to halt an ongoing send:

 

**1.**  **Change your password** - The simple act of [changing your password](https://sendgrid.com/user/account) can break your existing email integration by causing a mismatch between what your app is trying to authenticate with and what we have on record.  

This method is great if you have a runaway script or have just started a job accidentally. Be sure to verify that the credentials your app is using are either the primary account ones, or a [Multiple Credential](https://sendgrid.com/credentials) so you can change the proper one.

**2. Contact Support** - Support has the ability to clear any emails currently pending delivery from your account. To be more clear, there is a very small window of opportunity between when we accept an email request and when we actually attempt delivery to the recipient. Emails can build up in this queue, and upon request, we can delete them entirely. 

 

**Marketing email**

**1.  In Progress** - Simply deleting a marketing email that is in progress will halt any progress of the send made thus far, and keep further emails from that send from going out. Be sure to clone the email first, so you don't lose your work! This method has a small window of opportunity, but if you get to it within a minute or so of clicking "Finish" you'll be able to catch it. 

![]({{root_url}}/images/inprogressmarketing.png)

 

2. **Newsletter API** - There is not a way to stop Marketing emails via the API, you will either need to log into the UI and delete the send, or use the delete API method. 

