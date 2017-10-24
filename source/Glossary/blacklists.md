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

A Blacklist is a list of IP addresses that are known to send unsolicited and/or unwanted emails. ISPs and enterprises use blacklists to identify and filter illegitimate mail streams. Blacklisting can also occur for specific sending domains in addition to sending IPs.

You may have found in your Block List or Bounce list that your sending IP address and or domain have been blacklisted by an ISP. What this means is that this ISP has determined they have an issue with what you are sending or how often you are sending mail. This ISP will most likely not accept mail from you anymore until you request to be de-listed. If you are sending mail you will want to try your best to stay off of blacklists because certain ones can affect your deliverability. Our Compliance and Support Teams keep a close eye on which of our IP’s end up on a blacklist and we try as quickly as possible to resolve the issue however more often then not it will require the user sending the mail to contact the ISP.

A good practice is to make sure you are are not sending spam. You can check your spareness score here mail-tester.com and try to fix any issue that comes up in your score. Secondly, if you are on a Pro 100k plan or above account you have a dedicated IP address. We like to always recommend IP warmup when you are starting out. We have an [IP warmup process]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup_schedule.html) we can implement for you or you can limit your sending in the beginning to about 1000 per day and then just double your requests every other day.

Ending up on a [blacklist]({{site.support_url}}/hc/en-us/articles/200181968) can be detrimental to your domain’s email deliverability.  All major ISPs use some form of blacklisting service in order to protect their customers from malicious emails, although not all blacklisting services are actively being used. If a listing service ever asks you pay a fee for a delisting request, or if they say that they do not accept delisting requests, then you should not waste your time trying to get your domain/IP delisted because these services are rarely, if ever, used. However, if you find that your IP address has been blacklisted by one of the many legitimate services, then submitting a delisting request is the top priority.  Depending on the level of your account, you should approach a blacklisting in one of two ways:

{% anchor h2 %}
Shared IP Plans
{% endanchor %}

If you are on one of our shared IP plans and you notice a block message based on one of our IP addresses then please contact our Support team.  We will handle all delisting requests for our shared IP users.

{% anchor h2 %}
Dedicated IP Plans
{% endanchor %}

We ask that our dedicated IP plan users make the initial delisting request in the event that they discover their SendGrid IP on a blacklist. These IP addresses are only assigned to one account at a time, so we expect those users to take responsibility for all of the mail that is sent through their account.  SendGrid will still be happy to step in and assist with these delisting requests if the listing service requires the IP administrator to take action, or if the delisting form is too complicated.

*Please note:  in the event that a sending domain (and not the IP address) is blacklisted, that domain’s controller will be responsible for handling the delisting request.*

{% anchor h2 %}
Checking Your IP Address
{% endanchor %}

Here are two aggregation websites that anyone can use to check on the status of their IP:

* [http://multirbl.valli.org/](http://multirbl.valli.org/)
* [http://www.mxtoolbox.com/blacklists.aspx](http://www.mxtoolbox.com/blacklists.aspx)

{% anchor h2 %}
Delisting Request Forms
{% endanchor %}

Below are links to the delisting forms used by the more popular external blacklisting services:

* [AOL](http://postmaster.aol.com/SupportRequest.php)
* [AT&T](https://www.att.com/esupport/postmaster/index.jsp)
* [Barracuda](http://www.barracudacentral.org/rbl/removal-request)
* [Comcast](http://postmaster.comcast.net/block-removal-request.html)
* [Google](https://support.google.com/mail/contact/msgdelivery)
* [McAfee](https://secure.mcafee.com/apps/mcafee-labs/threat-feedback.aspx)
* [Microsoft/Outlook](https://support.live.com/eform.aspx?productKey=edfsmsbl3&ct=eformts)
* [Mimecast](http://www.mimecast.com/senderfeedback)
* [SpamCop](http://www.spamcop.net/bl.shtml)
* [Spam Rats](http://www.spamrats.com/removal.php)
* [Spamhaus](http://www.spamhaus.org/lookup/)
* [SURBL](http://www.surbl.org/surbl-analysis)
* [Trend Micro](https://ers.trendmicro.com/reputations)
* [URIBL](https://admin.uribl.com/)
* [Yahoo](http://help.yahoo.com/l/us/yahoo/mail/postmaster/bulkv2.html)
