---
st:
  published_at: 2016-06-20
  type: Classroom
seo:
  title: How do I whitelist emails to keep them from dropping?
  description: How do I keep emails from dropping?
  keywords: address, drop, suppress, list, dropped, apps, domain, reason, ignore, bypass, safe, whitelist, bounced address
title: How do I whitelist emails to keep them from dropping?
weight: 0
layout: page
zendesk_id: 204113606
navigation:
  show: true
---

If you send purely transactional emails, you may run into a situation where important messages get [Dropped because of a prior Bounce or Unsubscribe event]({{root_url}}/Classroom/Deliver/Undeliverable_Email/my_emails_are_being_dropped.html).

So, how do you keep mail to important addresses and domains flowing without having to go in and clear your suppression lists each time this happens?

Easy, check out Address Whitelist! The [Address Whitelist](https://app.sendgrid.com/settings/mail_settings) is a setting where you can define specific addresses, and even whole domains that you never want us to Drop messages to! 

![]({{root_url}}/images/address_whitelist_example.png)

After adding an address or domain to Address Whitelist, you are free to retry attempts to previously dropped addresses. Adding an address here does not automatically re-attempt dropped messages, however. 

_Please note_: You should only use this option when you know the address or domain closely, it is NOT recommended that you add major mail domains such as Gmail or Yahoo, as you can potentially encounter deliverability problems by sending too many messages. _It should also be noted that this app does not guarantee delivery to an address or domain, it simply ensures that Sendgrid never directly interferes with a message attempt._
