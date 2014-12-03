---
seo:
  title: SPF
  description: SPF is an email authentication standard that helps ISPs better identify legitimate email senders.
  keywords: spf, sender policy framework
title: SPF
weight: 0
layout: page
navigation:
  show: true
---
**SPF** stands for Sender Policy Framework. It is an email authentication standard developed by AOL that compares the email sender’s actual IP address to a list of IP addresses authorized to send mail from that domain. The IP list is published in the domain’s DNS record.

The DNS record should look like this:  
`yourdomain.com.  |  TXT  |  v=spf1 a mx include:sendgrid.net ~all`
 
If SendGrid is not included in your SPF record then we will not be able to send on your behalf and you will probably receive bounces pertaining to authentication issues.  If you already have an existing SPF record for your domain then you will just need to append “include:sendgrid.net” to that current record at the end, but before the “all” mechanism.
 
Please note:  We recommend configuring your “all” mechanism to be a soft fail, which is expressed as “~all” at the end of your SPF record.

[This article in our Support Help Center offers even more detail.](https://sendgrid.zendesk.com/hc/en-us/articles/202517236)

[To get even more information please check out our Email Infrastructure Guide.](http://resources.sendgrid.com/email-infrastructure-guide/?mc=SendGrid%20Documentation)
