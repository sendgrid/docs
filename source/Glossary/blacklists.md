---
st:
  published_at: 2016-09-02
  type: Classroom
seo:
  title: Blacklist
  description: A list of IP addresses that are known to send unsolicited or unwanted emails
  keywords: email blacklist, blacklist, spam, unsolicited emails, unwanted emails
title: Blacklist
weight: 0
layout: page
navigation:
  show: false
---
- [Delisting Shared IP Plans](#-Delisting-Shared-IP-Plans)
- [Delisting Dedicated IP Plans](#-Delisting-Dedicated-IP-Plans)
- [Checking Your IP Address](#-Checking-Your-IP-Address)
- [Delisting Request Forms](#-Delisting-Request-Forms)

A Blacklist is a list of IP addresses that have been detected sending unsolicited and unwanted emails. Inbox service providers (like Gmail, Microsoft, Yahoo, and AOL) and enterprises use blacklists to identify and filter illegitimate mail streams. Blacklisting can also occur for specific sending domains in addition to sending IPs.

All major ISPs use some form of blacklisting service to protect their customers from malicious emails, although the deliverability impact can vary depending on the blacklisting service that lists the IP. If you find that your IP address is on the blacklist of one the many legitimate services, then submit a delisting request.

SendGrid keeps a close eye on our IP’s, and we try as quickly as possible to resolve any issues with blacklists. However, getting your IP off the blacklist often requires the user sending the mail to contact the ISP.  

{% anchor h2 %}
Delisting Shared IP Plans
{% endanchor %}

When on a Free or Essentials plan, your account is using shared IP pools - you are sharing IP addresses with many other customers, and there is the potential of being adversely affected by senders in the same pool. 
When one of the shared IP pools gets blacklisted, SendGrid receives an automatic notification and handles the delisting request on behalf of our customers. Removal time varies depending on the blacklist.

{% info %}
SendGrid is unable to move your account to a new IP pool. The best way to not be impacted by other senders is to get a dedicated IP on a Pro or higher plan. 
{% endinfo %}

{% anchor h2 %}
Delisting Dedicated IP Plans
{% endanchor %}

We ask that our dedicated IP plan users make the initial delisting request if they discover their 
SendGrid IP on a blacklist. SendGrid is happy to step in and assist with these delisting requests if the listing service requires the IP administrator to take action, or if the delisting form is too complicated.

{% info %}
Please note:  If a sending domain (and not the IP address) is blacklisted, that domain’s controller is responsible for handling the delisting request.
{% endinfo %}

{% anchor h2 %}
Checking Your IP Address
{% endanchor %}

Here are 2 aggregation websites that anyone can use to check on the status of their IP:
- [MulitRBL](http://multirbl.valli.org/)
- [MXToolbox](http://www.mxtoolbox.com/blacklists.aspx)

{% anchor h2 %}
Delisting Request Forms
{% endanchor %}

Below are links to the delisting forms used by the more popular external blacklisting services:
- [AOL](https://postmaster.aol.com/sa-ticket)
- AT&T - *email abuse_rbl@abuse-att.net*
- [Barracuda](http://www.barracudacentral.org/rbl/removal-request)
- [CASA](http://www.anti-spam.org.cn/?Locale=en_US)
- [Comcast](http://postmaster.comcast.net/block-removal-request.html)
- [Google](https://support.google.com/mail/contact/msgdelivery)
- [Invalument](http://www.invaluement.com/removal/)
- [Manitu](http://www.dnsbl.manitu.net/index.php?language=en)
- [McAfee](https://secure.mcafee.com/apps/mcafee-labs/threat-feedback.aspx)
- [Mimecast](http://www.mimecast.com/senderfeedback)
- [Office 365](https://sender.office.com/)
- [SORBS](http://www.sorbs.net/)
- [SpamCop](https://www.spamcop.net/bl.shtml)
- [Spam Rats](http://www.spamrats.com/removal.php)
- [Spamhaus](https://www.spamhaus.org/lookup/)
- [SURBL](http://www.surbl.org/surbl-analysis)
- [Trend Micro](https://www.ers.trendmicro.com/)
- [URIBL](https://admin.uribl.com/)
- [Yahoo](http://help.yahoo.com/l/us/yahoo/mail/postmaster/bulkv2.html)

{% anchor h2 %}
Gmail, Yahoo, Hotmail and AOL Bulk Email Sender Guidelines
{% endanchor %}

- [Gmail Email Sender Guidelines](https://support.google.com/mail/answer/81126)
- [Yahoo Email Sender Guidelines](https://help.yahoo.com/kb/mail-for-desktop/SLN3435.html?impressions=true)
- [Hotmail/Outlook/Live Bulk Email Sender Guidelines](https://mail.live.com/mail/policies.aspx)
- [AOL Bulk Email Sender Guidelines](https://postmaster.aol.com/best-practices)

If you are sending mail using these guidelines and still have problems to deliver email to those email providers, you can contact the ISP support by the following URL:

- [Gmail Bulk Sender Contact Form](https://support.google.com/mail/contact/bulk_send_new?visit_id=1-636427436775630765-3555263264&rd=1)
- [Yahoo Bulk Sender Contact Form](http://help.yahoo.com/l/us/yahoo/mail/postmaster/bulkv2.html)
- [Hotmail Deliverability Issue Submission](https://mail.live.com/mail/services.aspx)
- [AOL Whitelisting Process](https://postmaster.aol.com/whitelist-request)

{% warning %}
If a listing service ever asks you pay a fee for a delisting request, or if they say that they do not accept delisting requests, then you should not waste your time or money trying to get your domain/IP delisted because these services are rarely, if ever, used by ISPs. 
{% endwarning %}
