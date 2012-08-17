---
comments: false
date: 2011-06-27 15:56:46
layout: post
slug: how-to-eliminate-the-on-behalf-of-message
title: 'How To: Eliminate the On Behalf Of Message'
wordpress_id: 1514
categories:
- Delivery Terms
- Email Deliverability
- Tips &amp; Tricks
tags:
- dkim
- domain keys
- hotmail
- on behalf of
- outlook
---

When you check your messages in some readers, are they showing up as "Sent by You, on Behalf of SendGrid"? Or does it look even messier than that? Well, it's really quite an easy fix!

Some ISPs or mail readers, such as Hotmail or Outlook, will display a message with the Sender header set as “on behalf of” and then the address that is in the Sender header. This is caused by the **DomainKeys** configuration of your account.

By default, SendGrid signs all e-mail with DomainKeys to improve deliverability with some smaller domains. However, with accounts that do not have whitelabeling, this means that the domain in the From field will not have the proper DNS record to authenticate the e-mail. Because of this, SendGrid inserts a Sender header, and the e-mail can then be properly authenticated.

However, the vast majority of recipient servers now check authenticity using DKIM, which is the evolution of Domain Keys. All emails sent out by SendGrid are signed with DKIM, whether your account is whitelabeled or not. So if you're having this problem, feel free to disable DomainKeys, and it should not have any impact on your deliverability. You can disable them by going to your Apps, [here](http://sendgrid.com/app).
