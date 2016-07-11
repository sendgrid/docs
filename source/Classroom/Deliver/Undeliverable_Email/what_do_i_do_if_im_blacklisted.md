---
st:
  published_at: 2016-06-07
  type: Classroom
seo:
  title: What do I do if I'm blacklisted?
  description: What do I do if I'm blacklisted?
  keywords: dedicated, blacklist, list, delist, best, blocked, BL, black, RBL, DNSBL
title: What do I do if I'm blacklisted?
weight: 0
layout: page
zendesk_id: 200256676
navigation:
  show: true
---

Ending up on a blacklist can be detrimental to your domain’s email deliverability.  All major ISPs use some form of blacklisting service in order to protect their customers from malicious emails, although not all blacklisting services are actively being used. If a listing service ever asks you pay a fee for a delisting request, or if they say that they do not accept delisting requests, then you should not waste your time trying to get your domain/IP delisted because these services are rarely, if ever, used. However, if you find that your IP address has been blacklisted by one of the many legitimate services, then submitting a delisting request is the top priority.  Depending on the level of your account, you should approach a blacklisting in one of two ways:

 

**Shared IP Plans (Free, Legacy Lite, and Essentials)**

 

If you are on one of our shared IP plans and you notice a block message based on one of our IP addresses then please contact our Support team.  We will handle all delisting requests for our shared IP users.

 

**Dedicated IP Plans (Pro, and Premier)**

 

We ask that our dedicated IP plan users make the initial delisting request in the event that they discover their SendGrid IP on a blacklist. These IP addresses are only assigned to one account at a time, so we expect those users to take responsibility for all of the mail that is sent through their account.  SendGrid will still be happy to step in and assist with these delisting requests if the listing service requires the IP administrator to take action, or if the delisting form is too complicated.

 

_Please note:  in the event that a sending domain (and not the IP address) is blacklisted, that domain’s controller will be responsible for handling the delisting request._

 

**Checking Your IP Address**

 

Here are two aggregation websites that anyone can use to check on the status of their IP:

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

**†** **July 2016** At the time of this writing, Spamcop has blacklisted a number of our shared IPs. This is a common issue when using an account utilizing shared IPs. You are sharing IP's with hundreds, if not thousands, of SendGrid users and 1 bad actor can affect everyone accessing the IP group. **Our Compliance team is working with Spamcop as much as possible to get these IPs delisted.** However, Spamcop does not accept manual delisting requests, they only automatically delist IPs on a rotating 24-48 hours schedule. 

Despite this, our Compliance team is doing everything they can to get shared IPs delisted with Spamcop, but at this point, we have to wait for them to automatically delist. In the interim, you may want to consider moving up to a Pro account with a dedicated IP to minimize any associated risk of poor sender on the same IP group. [Pro package pricing](https://sendgrid.com/pricing/) isn't based on volume, so much as it is priced for enhanced deliverability due to the dedicated IP.
<br />
<br />
<br />
*IMPORTANT NOTE:* If you request a delisting from a blacklisting service, and don't do anything to change the behavior that caused the listing in the first place, it is likely to occur again. Depending on the blacklist, it can be progressively harder to get delisted after the second or third listing.  

###TL;DR: Don't delist from major blacklists without a plan in place to address the issue that caused the listing! [Learn more about how to avoid and mitigate risk of blacklisting here](https://sendgrid.com/blog/avoiding-email-blacklists/).


