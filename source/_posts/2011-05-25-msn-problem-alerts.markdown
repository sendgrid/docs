---
comments: false
date: 2011-05-25 15:54:40
layout: post
slug: msn-problem-alerts
title: MSN Problem Alerts
wordpress_id: 897
categories:
- Email Deliverability
- Reseller
tags:
- alert
- msn
- reseller
---

For users who have a reseller enabled account you will receive daily notifications about the status of your IPs reputation to Hotmail if we detect that there is a problem. This problem can be anything from being partially filtered by Hotmail to being completely blocked. In the email alert we send you the data that Hotmail has made available to us for the last 24 hours. The data represents factual information about              what actually transpired, it's effectively built from the  log files of the              inbound mail machines and other servers at Hotmail and  Microsoft.




The email will look similar to this image below.




![](/wp-content/uploads/2011/05/msnproblem.png)




**IP **




This is your dedicated IP which is having the problem.




**Usernames**




These are the usernames which are associated with that IP.




**UserIDs**




These is the ID that corresponds to each username.




**Status**  
Displayed here are the aggregate results of the spam  filtering applied to all messages              sent by the IP during the given activity period. No spam  filter is perfect and, in              particular, this information is meant to be only one data  point that helps              paint a picture, not be a final judgment that the traffic  was truly spam or              not. The following table defines the colors in terms of the  percent of              time that a "spam" verdict is rendered on a message. Please  note that              one message to ten recipients counts as ten spam/not  spam verdicts,              not one.  











Result


Example


Verdict percentage






Green


  



Spam < 10%






Yellow


  



10% < spam < 90%






Red


  



Spam > 90%






  
The percentage range for the yellow designation may seem  large but is actually              fairly small in terms of the number of IPs that fall into  this              range relative to the other two. Unfortunately, since SNDS  is              available to anyone who can prove they own an IP range, this  is a case where we              must be careful not to provide too much data that might  assist spammers.              One trick however, when viewing data for a number of IPs, is  that it can often              be enlightening to consider the non-yellow IPs: if they're  green, the yellow              results are most likely very close to the 10% end.  Similarly, if the              majority of the other IPs are red, the yellows probably  represent results near              90%. The same technique can be applied when looking             at one IP's history.  
  
Please keep in mind that this result doesn't directly  represent deliveries to              users' inboxes or "Junk e-mail" folders. Settings  controlled by each user might rescue             some legitimate traffic from being put in the "Junk e-mail"  folder,              or conversely, might treat other messages more harshly. It  doesn't take              into account messages that might have been caught but  weren't because they were              on a user's safelist, for example.







**Trap hits**  
Displays the number of messages sent to "trap accounts".  Trap              accounts are accounts maintained by Windows Live Hotmail  that don't solicit any mail.              Thus any messages sent to trap accounts are very likely to  be spam.              Well-behaved senders will hit very few such accounts because  they're generally              sending to people who give them their address and because  they collect and              process their NDRs. Spammers have a much harder time  avoiding them              because, in general, they can't and don't do either of those  good practices.




**RCPT**  
This is the number of RCPT commands sent by the IP during  the time period in              question. RCPT commands are part of the SMTP protocol used to send mail, specifically that which  specifies              one's intent to send mail to the provided recipient. That  is, the command              "RCPT TO:<example@hotmail.com>" requests Windows Live  Hotmail's servers to respond              with whether it will accept mail for example@hotmail.com,  information which is              invaluable to spammers trying to compile recipient lists for  future              spamming. For reference, more than a third of IPs sending  mail to Windows Live Hotmail              keep the fraction of RCPT commands that don't result in  message recipients              under 10% and that is a good benchmark to             measure against.




**Blocked**




IPs which are blocked from sending mail into Hotmail.                 Attempts to send mail to Hotmail's mail servers from  these IPs will result in consistent refusal,                  however use of the Hotmail web user interface may not be  affected--it is                     controlled separately. The reason or source                  of the block is provided, along with more specific  information about it. To                 see about unblocking an IP address, please go to the main Postmaster site[](https://postmaster.live.com/) and follow                 the instructions there.




**Block reason **




The reason why the IP was blocked by Hotmail.







More information can be found [here](https://postmaster.live.com/snds/FAQ.aspx).
