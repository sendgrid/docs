---
seo:
  title: What do I do if I'm blacklisted?
  description: What do I do if I'm blacklisted?
  keywords: dedicated, blacklist, list, delist, best, blocked, BL, black, RBL, DNSBL
title: What do I do if I'm blacklisted?
group: delivery-optimization
weight: 0
layout: page
zendesk_id: 200256676
navigation:
  show: true
---

Ending up on a blacklist can be detrimental to your domain’s email deliverability. These days, there are hundreds, maybe thousands of blacklists out there. Some, like the Spamhaus SBL, can bring your email program to a screeching halt. Others are little more than an annoyance. Many of the world's largest inbox providers use blacklists to help them make inboxing and filtering decisions. Others rely only their own internal metrics. Always remember: if a listing service ever asks you pay a fee for a delisting request, or if they say that they do not accept delisting requests, then you should not waste your time trying to get your domain/IP delisted because these services are rarely, if ever, used. However, if you find that your IP address has been blacklisted by one of the many legitimate services, then submitting a delisting request is the top priority. Depending on the level of your account, you should approach a blacklisting in one of 2 ways:

 

**Shared IP Plans (Free, Legacy Lite, and Essentials)**

 

If you are on one of our shared IP plans and you notice a block message based on one of our IP addresses then please [contact support](https://support.sendgrid.com). We will handle all delisting requests for our shared IP users.

 

**Dedicated IP Plans (Pro, and Premier)**

 

We ask that our dedicated IP plan users make the initial delisting request in the event that they discover their SendGrid IP on a blacklist. These IP addresses are only assigned to one account at a time, so we expect those users to take responsibility for all of the mail that is sent through their account. SendGrid will still be happy to step in and assist with these delisting requests if the listing service requires the IP administrator to take action, or if the delisting form is too complicated.

 

_Please note:  in the event that a sending domain (and not the IP address) is blacklisted, that domain’s controller will be responsible for handling the delisting request._

 

**Checking Your IP Address**

 

Here are 2 aggregation websites that anyone can use to check on the status of their IP:

- [http://multirbl.valli.org/](http://multirbl.valli.org/)
- [http://www.mxtoolbox.com/blacklists.aspx](http://www.mxtoolbox.com/blacklists.aspx "Link: http://www.mxtoolbox.com/blacklists.aspx")

 

**Delisting Request Forms**

 

Below are links to the delisting forms used by the more popular external blacklisting services:

- [AT&T](http://rbl.att.net/cgi-bin/rbl/block_admin.cgi "Link: http://rbl.att.net/end\_user\_request2.html")\*
- [Barracuda](http://www.barracudacentral.org/rbl/removal-request)
- [Cloudmark](https://csi.cloudmark.com/en/reset/)
- [Comcast](http://postmaster.comcast.net/block-removal-request.html)
- [Google](https://support.google.com/mail/contact/msgdelivery)
- [McAfee](https://secure.mcafee.com/apps/mcafee-labs/threat-feedback.aspx)
- [Microsoft/Outlook](https://support.live.com/eform.aspx?productKey=edfsmsbl3&ct=eformts)
- [Mimecast](http://www.mimecast.com/senderfeedback)
- [Office365](https://sender.office.com/)
- [ProofPoint](https://support.proofpoint.com/dnsbl-lookup.cgi)
- [SORBS](http://www.sorbs.net/overview.shtml)
- [SpamCop](http://www.spamcop.net/bl.shtml) **†**
- [Spam Rats](http://www.spamrats.com/removal.php)
- [Spamhaus](http://www.spamhaus.org/lookup/)
- [SURBL](http://www.surbl.org/surbl-analysis)
- [Trend Micro](https://ers.trendmicro.com/reputations)
- [URIBL](https://admin.uribl.com/)

<call-out>

If you request a delisting from a blacklisting service, and don't do anything to change the behavior that caused the listing in the first place, it is likely to occur again. Depending on the blacklist, it can be progressively harder to get delisted after the second or third listing. 

</call-out>


<call-out type="warning">

Don't delist from major blacklists without a plan in place to address the issue that caused the listing! [Learn more about how to avoid and mitigate risk of blacklisting here](https://sendgrid.com/blog/avoiding-email-blacklists/).

</call-out>


