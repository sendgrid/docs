---
comments: false
date: 2011-05-23 15:52:42
layout: page
slug: domain-keys
title: Domain Keys
wordpress_id: 750
---

Some ISPs, most notably Yahoo!, authenticate e-mail that is signed using Domain Keys. Domain Keys work by having a company sign an e-mail with their private key which has been published as a public key in their DNS record and is subsequently used to verify the e-mail signature.
The domain that is checked for the public key is based on one of two e-mail headers; Sender and From.
If a Sender header is specified, its domain will be the first one checked. Otherwise, the domain of the From header will be used. Most e-mail clients do not insert a Sender header, so typically the From address would be used.
By default, SendGrid signs all e-mail with Domain Keys to improve its deliverability. However for accounts that do not have Whitelabeling enabled the domain in the From field will not have the proper DNS record to authenticate the e-mail. Because of this, SendGrid inserts a Sender header, and the e-mail can then be properly authenticated.
Some ISPs and e-mail clients (such as Hotmail or Outlook) display a message with the Sender header set to "on behalf of" followed by the address that is in the Sender header. Some customers might not like this, so here is how to get rid of the "on behalf of" message: 
1.Disable the Domain Keys filter in the filters section of your account
2.Upgrade to a package (Silver or higher) that provides Whitelabel support and set up the Domain Keys record in your DNS
