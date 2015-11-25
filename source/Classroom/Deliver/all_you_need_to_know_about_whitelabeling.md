---
seo:
  title: All You Need to Know About Whitelabeling
  description: All You Need to Know About Whitelabeling
  keywords: silver, cname, spf, dkim, on behalf, via, whitelabel, dns, IP, account, txt
title: All You Need to Know About Whitelabeling
weight: 0
layout: page
zendesk_id: 200548228
navigation:
  show: true
---

 **Overview**  
Have you ever noticed that email you send through your SendGrid account displays “sent on behalf of” or “via sendgrid.me” as the message signing entity and wondered how to get rid of it? &nbsp;Depending on your package type, you may have access to a very useful feature that we refer to as whitelabeling. &nbsp;So, what is it? &nbsp;Whitelabeling is a process that allows you to mask SendGrid as your relay point in all of your emails and replace it with your domain. &nbsp;This can be accomplished with the addition of a few new DNS records and can lead to a better sending reputation and more consistent inbox delivery.

**Who?**  
All users have access to Domain and Link whitelabeling. Pro plans and higher will have access to IP whitelabeling as well.&nbsp;

**How?**  
The whitelabeling process involves the creation of several new DNS records which establish a new subdomain in your domain registrar. When creating this new subdomain it is very important to choose one that has not yet been established within your DNS settings in order to avoid conflicting records. We also highly recommend that you do not choose “sendgrid” as your subdomain, since doing so would defeat the purpose of whitelabeling!

These records all work in tandem in order to remove SendGrid as the message signing entity and display your chosen subdomain as the authenticated sender. &nbsp;Please refer to our docs&nbsp;for more information on the process and required DNS records.

**The Records**  
To complete the whitelabeling process, you will need to create DNS records as stated in the article and video above.

**1.&nbsp; [SPF Record](http://en.wikipedia.org/wiki/Sender_Policy_Framework) (Sender Policy Framework)**

What it should look like:

> **TXT (yourdomain) v=spf1 include:uXXXXXX.wl.sendgrid.net -all**

A Sender Policy Framework record states what domains and IPs are allowed to send on your behalf. &nbsp;If SendGrid is not included in your SPF record then we will not be able to send on your behalf and you will probably receive bounces pertaining to authentication issues. &nbsp;If you already have an existing SPF record for your domain then you will just need to append “include:sendgrid.net” to that current record at the end, but before the “all” mechanism.

**2.&nbsp; [CNAME Record](http://en.wikipedia.org/wiki/CNAME) (Canonical Name)**

Several CNAME records are required in order to complete the Whitelabel process. Three CNAME records are required during the Domain Whitelabel process, all of which are used to provide a tight level of security to your outbound sending:

What it should look like:

> **CNAME (subdomain).(domain)&nbsp;(youruserid).wl.sendgrid.net**
> 
> **CNAME s1.\_domainkey.(domain)&nbsp;s1.domainkey.(youruserid).wl.sendgrid.net (data)**
> 
> **CNAME s2.domainkey.(domain) s2.domainkey.(youruserid).wl.sendgrid.net (data)**

&nbsp;

If you want to Whitelabel your Email Links as well for click-tracking and redirect purposes you will need to add two additional CNAME records. One is used to for security (ownership validation) while the other is responsible for the actual redirecting of mail traffic. Both are required to complete the Email Link validation.

You cannot use the same subdomain for your Email Links as that of your Domain. Whitelabel&nbsp;DNS prevents users from having a CNAME record with the same subdomain.rootdomain combo pointing to different locations, hence the necessity of utilizing a different subdomain for link tracking.

&nbsp;

> **CNAME (subdomain).(domain) --> sendgrid.net**
> 
> **CNAME (youruserid).(domain) --> sendgrid.net**

![]({{root_url}}/images/WhitelabelCNAME.png)

**3.&nbsp;**** A Record (Address)**

What it should look like:

> **o1.subdomain.yourdomain.com. &nbsp;| &nbsp;A &nbsp;| &nbsp;86.75.30.9**

What it does:  
The A record is what links your dedicated IP address back to your chosen subdomain. Creating this record will point traffic for o1.subdomain.yourdomain.com back to your dedicated IP, and vice versa. &nbsp;You can create multiple A records for a domain with as many IP addresses as you wish, however you can only whitelabel one IP to one domain at a time.&nbsp;

**Implementation**  
All of the DNS records are created within the Settings > Whitelabels within your SendGrid account. &nbsp;You will be presented with the tools to whitelabel domains, email links and also your dedicated sending IP addresses (Pro accounts and higher). Next, you will want to add these records to your DNS settings. &nbsp;Depending on your hosting provider, the time it takes for these new records to propagate publicly will vary between 10 minutes and up to 48 hours.

After those records have become public facing you will be able to verify them within the Whitelabel settings section of your SendGrid account.&nbsp;If you notice that any records are not validating after you have added them to your DNS settings then it means that either the record was improperly configured or it has not become public yet.&nbsp;

We understand that this process can be challenging, especially on the first attempt, so if you have any questions or concerns about whitelabeling then please feel free to contact our support team. &nbsp;We’re here to help!

