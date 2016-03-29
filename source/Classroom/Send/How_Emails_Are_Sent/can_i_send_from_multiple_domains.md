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

 **Yes, you can!**  Although sending mail for multiple domains over a single account isn't an ideal scenario since some of your emails will come out from the IP address associated with your main account/domain. This can potentially cause deliverability issues because of a mismatch in domains that are used in the email signature headers. 

That said, it's still acceptable to send "on behalf" of other domains, but it's not best practice. 

Our recommendation would is to create a [subuser account]({{root_url}}/Classroom/Basics/Account/what_are_subusers.html), purchase an [additional IP]({{root_url}}/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html), and [whitelabel your new subuser](http://support.sendgrid.com/hc/en-us/articles/200181928-Creating-Whitelabeling-A-Subuser-To-A-New-Sending-Domain) with each new domain you want to use.

The general rule of thumb is to have one specific account and one specific IP for each domain you'd like to send from. 
