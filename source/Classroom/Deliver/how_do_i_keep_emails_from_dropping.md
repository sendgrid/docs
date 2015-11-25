---
seo:
  title: How do I keep emails from dropping? 
  description: How do I keep emails from dropping? 
  keywords: address, drop, suppress, list, dropped, apps, domain, reason, ignore, bypass, safe, whitelist, bounced address
title: How do I keep emails from dropping? 
weight: 0
layout: page
zendesk_id: 204113606
navigation:
  show: true
---

If you send purely transaction emails, you may run into a situation where important messages get Dropped because of a prior Bounce or Unsubscribe event.&nbsp;

So how do you keep mail to important addresses and domains flowing without having to go in and clear your suppression lists? Easy, check out the Address Whitelist App.

&nbsp;

The [Address Whitelist Setting](https://app.sendgrid.com/settings/mail_settings) is a a place where you can define specific addresses and even whole domains that you never want us to Drop messages to!&nbsp;

![]({{root_url}}/images/addresswhitelist.gif)

After adding an address or domain here, you are free to retry attempts to previously dropped addresses. Adding an address here does not automatically reattempt dropped messages, however.&nbsp;

&nbsp;

&nbsp;

_Please note_:&nbsp;You should only use this option when you know the address or domain closely, it is NOT recommended that you add major mail domains such as Gmail or Yahoo, as you can potentially encounter deliverability problems by sending too many messages. It should also be noted that this app does not guarantee&nbsp;delivery to an address or domain, it simply ensures&nbsp;that Sendgrid never directly interferes with a message attempt.

&nbsp;

&nbsp;

