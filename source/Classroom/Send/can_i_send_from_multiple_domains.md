---
seo:
  title: Can I send from multiple domains? 
  description: Can I send from multiple domains? 
  keywords: spf, dkim, whitelabel, domain, multiple, seconds, another
title: Can I send from multiple domains? 
weight: 0
layout: page
zendesk_id: 205748227
navigation:
  show: true
---

 **Yes, you can!** &nbsp;Although sending mail for multiple domains over a single account isn't&nbsp;an ideal scenario since some of your emails will come out from the IP address associated with your main account/domain. This can potentially cause deliverability issues because of a&nbsp;mismatch in&nbsp;domains that are used in the email signature headers.&nbsp;

That said, it's still acceptable&nbsp;to send "on behalf" of other domains, but it's not best practice.&nbsp;

Our recommendation would is to create a [subuser account](/hc/en-us/articles/200181918-What-are-Subusers-), purchase&nbsp;an [additional IP](/hc/en-us/articles/200181948-Adding-an-additional-dedicated-IP-to-your-account), and [whitelabel your new subuser](/hc/en-us/articles/200181928-Creating-Whitelabeling-A-Subuser-To-A-New-Sending-Domain) with each&nbsp;new domain you want to use.

The general rule of thumb is to have one specific account and one specific IP for each domain you'd like to send from.&nbsp;

