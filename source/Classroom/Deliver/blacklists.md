---
seo:
  title: Blacklists
  description: Blacklists
  keywords: spam, reputation, blacklist, spam report, spam traps
title: Blacklists
weight: 0
layout: page
zendesk_id: 200182888
navigation:
  show: true
---

Blacklists should be on the radar of every sender. The presence of your domain or IP on a blacklist places a black mark on your reputation and can cause many problems for your deliverability. Many ESPs use blacklists as a way to protect their users from spam. &nbsp;They are likely to turn away a sender’s email if their ip or domain is listed on a blacklist. Your presence on a blacklist means your email is viewed as spam or contains malicious content. &nbsp;

&nbsp;

Different blacklists gather their information through different methods. Spam messages often contain links. A URI blacklist scans emails for links. If the links are associated with spam or malicious intent, then the email may be flagged as spam resulting in delivery problems and ultimately ruining your reputation as a sender and as a company. Commonly referenced URI blacklists are SURBL and Invaluement. Other sources, such as Spamhaus, provide IP blocklists that almost guarantee that none of the mail sent from that IP is delivered.

&nbsp;

Blacklists use a multitude of tools to discover spammers. They identify spam through spam traps, personal complaints, different programs such as Spamassassin or jwSpamSpy, evaluation of content and other secret forms of detecting spam.

&nbsp;

Unfortunately, these blacklists are only external. Some ESPs use internal blacklists to identify unwanted senders.

&nbsp;

Here are two links you can use to quickly look up your IP on a number of different blacklists:

[http://multirbl.valli.org](http://multirbl.valli.org)

[http://www.mxtoolbox.com/blacklists.aspx](http://www.mxtoolbox.com/blacklists.aspx)

&nbsp;

Below is an example from a sender that had their IP put on one blacklist. You can see how much just one blacklisting had affected this sender’s traffic when they were listed on May 29th (dark blue line is requests, light blue line is deliveries):

![blacklist.png](https://sendgrid.zendesk.com/attachments/token/0ktdpnoccilzfb2/?name=blacklist.png)

