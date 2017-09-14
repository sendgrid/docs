---
st:
  published_at: 2016-05-16
  type: Classroom
seo:
  title: What is Automated Security in the Whitelabel settings?
  description: What is Automated Security in the Whitelabel settings?
  keywords: automated, security, spf, whitelabel, domain, dkim
title: What is Automated Security in the Whitelabel settings?
weight: 0
layout: page
zendesk_id: 202517236
navigation:
  show: true
---

#Automated Security

![]({{root_url}}/images/automate_security_on.png)

By enabling Automatic Security on your [domain whitelabels]({{root_url}}/User_Guide/Settings/Whitelabel/domains.html), SendGrid can manage your [DKIM]({{root_url}}/Glossary/dkim.html) and [SPF]({{root_url}}/Glossary/spf.html) records for you.

Setting up three custom [CNAME records]({{root_url}}/Glossary/cname.html) displayed during whitelabel setup will grant SendGrid the ability to manage custom DKIM keys for your domain. In the future this may be used for periodic DKIM key rotation without requiring you to make additional updates to [DNS]({{root_url}}/Glossary/dns.html). We will also generate a custom SPF that includes only the IPs that you'll be sending from (as opposed to ~all sendgrid.net).

To clarify, you will still need to create some DNS records initially to allow us to take over this process. The DNS records you'll need to create will depend on whether you chose automated or manual security, the IP addresses on your account, and the domain you are whitelabeling.



#Manual Security

![]({{root_url}}/images/automated_security_off.png)

If you choose not to have SendGrid manage your DNS records for DKIM, then you’ll be shown all of the manual DNS records that you need to enter at your registrar or host. You will be responsible for making any updates to your DNS for any changes on your account when selecting this options.

The records you are given will be MX, DKIM, and SPF records to enter at your registrar, hosting company, or DNS manager. This will also mean that your SPF record will include all of SendGrid’s IP addresses.

For more information about whitelabeling, please read [All You Need to Know About Whitelabeling]({{root_url}}/Classroom/Deliver/Delivery_Introduction/all_you_need_to_know_about_whitelabeling.html), or visit our [User Guide]({{root_url}}/User_Guide/Settings/Whitelabel/index.html).
