---
seo:
  title: What do I do if I'm added to a deny list?
  description: What do I do if I'm added to a deny list?
  keywords: dedicated, deny list, list, delist, best, blocked, BL, RBL, DNSBL
title: What do I do if I'm added to a deny list?
group: delivery-optimization
weight: 0
layout: page
zendesk_id: 200256676
navigation:
  show: true
---

Ending up on a [deny list]({{root_url}}/glossary/deny-list/) can be detrimental to your domain’s email deliverability. These days, there are hundreds, maybe thousands of deny lists out there. Some, like the Spamhaus SBL, can have a great impact on your email deliverability, while others may not. Many of the world's largest inbox providers use deny lists to help them make inboxing and filtering decisions. Others rely only on their own internal metrics. No action should be taken with listing entities requesting a fee for delisting or stating they do not accept requests to delist. If you find that your IP address has been added to a deny list by a legitimate entity, then submitting a delisting request would be recommended. Depending on your plan, you should approach being added to a deny list in one of 2 ways:

## Shared IP Plans (Free, Legacy Lite, and Essentials)

### Spamhaus deny list

If you are on one of our shared IP plans and you notice a block message from Spamhaus based on one of our IP addresses, please know that we are already working with Spamhaus directly to address the issue. There is no need to make an additional request through our support team.

### Other deny lists

If you are on one of our shared IP plans and you notice a block message from any other deny list based on one of our IP addresses, please note that blocklists are a natural part of sending through shared IP Pools with multiple senders utilizing the same set of IPs. The large majority of these blocklists do not have an impact on your deliverability and often self-mitigate over time. We are actively monitoring these listings to ensure appropriate actions are taken for any that may impact our senders' deliverability.

## Dedicated IP Plans (Pro and Premier)

We ask that our dedicated IP plan users make the initial delisting request in the event that they discover their SendGrid IP on a deny list. These IP addresses are only assigned to one account at a time, so we expect those users to take responsibility for all of the mail that is sent through their account. SendGrid will still be happy to step in and assist with these delisting requests if the listing service requires the IP administrator to take action, or if the delisting form is too complicated.

<call-out>

In the event that a sending domain (and not the IP address) is added to a deny list, the domain’s controller will be responsible for handling the delisting request.

</call-out>

## Checking Your IP Address

Here are 2 aggregation websites that anyone can use to check on the status of their IP:

- [http://multirbl.valli.org/](http://multirbl.valli.org/)
- [http://www.mxtoolbox.com/blacklists.aspx](http://www.mxtoolbox.com/blacklists.aspx 'Link: http://www.mxtoolbox.com/blacklists.aspx')

## Delisting Request Forms

Below are links to the delisting forms used by the more popular external deny listing services:

- [AT&T](http://rbl.att.net/cgi-bin/rbl/block_admin.cgi 'Link: http://rbl.att.net/end_user_request2.html')\*
- [Barracuda](http://www.barracudacentral.org/rbl/removal-request)
- [Cloudmark](https://csi.cloudmark.com/en/reset/)
- [Comcast](http://postmaster.comcast.net/block-removal-request.html)
- [Google](https://support.google.com/mail/contact/msgdelivery)
- [McAfee](https://www.mcafee.com/enterprise/en-us/threat-center/threat-feedback.html)
- [Microsoft/Outlook](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635996265829568030&forceorigin=esmc)
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

If you request a delisting from a deny listing service, and don't do anything to change the behavior that caused the listing in the first place, it is likely to occur again. Depending on the list, it can be progressively harder to get delisted after the second or third listing.

</call-out>

<call-out type="warning">

Don't delist from major deny lists without a plan in place to address the issue that caused the listing! [Learn more about how to avoid and mitigate risk of being added to a deny list here](https://sendgrid.com/blog/avoiding-email-blacklists/).

</call-out>

<call-out-link linktext="EXPERT SERVICES" img="/img/expert-insights-promo3.png" link="https://sendgrid.com/solutions/expert-services/">

### Need a helping hand?

Getting into the inbox just so you can have the chance to engage with your customers often isn’t as easy as pressing “send.” Get customized advice from our team of email experts on how to optimize your email strategy.

</call-out-link>
