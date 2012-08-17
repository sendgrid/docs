---
comments: false
date: 2011-05-24 17:15:57
layout: post
slug: can-i-send-from-multiple-from-addresses-or-different-domains
title: Can I send from multiple FROM addresses or different domains?
wordpress_id: 773
categories:
- Apps
tags:
- different
- domain
- domain keys
- from
- multiple
---

Yes, it is OK to send email from different FROM addresses.

Be aware that you will want to turn off Domain Keys if you are sending from domains different from the domain provisioned with SendGrid as the foreign domains will cause Domain Keys to fail.

To fix this, you can add a Sender header, however this will cause an 'on behalf of' message to be shown in some mail readers. More information about Domain Keys and SendGrid can be found [here.](/documentation/apps/domain-keys/)

Alternatively you can use the [SMTP API](/documentation/api/smtp-api/) to override the domain in the Domain Keys filter. The [Developer's Guide](/documentation/api/smtp-api/developers-guide/) is a page that describes the "filters" that can be specified in the X-SMTPAPI header, this allows you to enable or disable Apps for the purpose of the SMTP API transaction.
