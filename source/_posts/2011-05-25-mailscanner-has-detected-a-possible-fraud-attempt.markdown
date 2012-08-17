---
comments: false
date: 2011-05-25 15:25:54
layout: post
slug: mailscanner-has-detected-a-possible-fraud-attempt
title: MailScanner has detected a possible fraud attempt
wordpress_id: 886
categories:
- Email Deliverability
tags:
- attempt
- fraud
- Interspire
- Mailscanner
---

## Problem




MailScanner, a popular spam filtering application will often complain of possible fraud when it receives emails that meet the following conditions:






  * Click tracking is enabled in your account, and link _hrefs_ are being rewritten so that SendGrid can track the clicks.


  * The Link Text of your anchor (<a>) link contains a website address (URL)




## Example:




When you have Click Tracking enabled in your SendGrid account, a link such as the following:



    
    <a href="www.example.com"><strong>Link_Text</strong></a>




is rewritten to something along the lines of:



    
    <a href="uxxxx.sendgrid.org/wf/click?c=ABUNCHOFENCODEDDATAFOLLOWS...><strong>Link_Text</strong></a>




If **Link_Tex**t is a URL such as www.example.com, Mailscanner will complain because www.example.com (or more specifically the domain example.com) does not match sendgrid.org specified in the _href_.




## Resolution:






  * Disable click tracking in your account


  * Or, since most customers will want link tracking turned on


  * Make sure your **Link_Text** does not contain a web address (URL)




[See this post](https://www.interspire.com/support/kb/questions/1104/Recipients+are+seeing+phrases+like+%22MailScanner+has+detected+a+possible+fraud+attempt+from...%22) for more information.
