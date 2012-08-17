---
comments: false
date: 2011-05-25 14:36:40
layout: post
slug: help-my-emails-arent-being-delivered
title: 'Help! My emails aren''t being delivered! '
wordpress_id: 856
categories:
- Email Deliverability
tags:
- block
- bounce
- spam report
- unsubscribe
---

If you find that your email recipients are complaining that they are not receiving your emails, here are some common situations that may be used to help you diagnose the problem:




**1. You recently created a new account with SendGrid**




If you have recently signed up for a new account with SendGrid, it is possible that you account may not be **active** or **provisioned**. Be sure you have responded to the activation email sent to the email address you provided upon signup. If you have responded to this email and still are unable to use the service, it is most likely due to the fact your account has not been **provisioned** yet. Provisioning usually takes about 1-3 hours depending on load.




SendGrid screens all new accounts that signup to ensure that only legitimate customers use our service for legitimate purposes. While we typically are able to provision new accounts quickly, there are times when this process is delayed. **To expedite the provisioning process, make sure you provide valid contact information, and a website that is accessible and whose purpose can easily be understood. **Providing a URL that leads to a parked domain, a "coming soon" splash page, or a 404 page will almost always end up delaying your account provisioning.







**2. You are having trouble sending email to one or more email addresses, or your Requests statistic is much higher than your Delivered  
**




If you repeatably have difficulty sending email to specific email addresses, it often indicates that the email address in question is on one of your account's Email Lists. Currently SendGrid maintains the following email lists on a per-account basis:






  * Bounce List


  * Unsubscribe List


  * Spam Report List


  * Invalid Email List







Each of these lists is accessible from the **EMAIL LISTS** section of the website navigation bar.




![Email_Lists.png](/wp-content/uploads/2011/05/Email_Lists.png)




**When an email address lands in any of these lists, future emails for this email address are automatically discarded by SendGrid.** This is done to protect your sending reputation as many ISPs frown on repeated bounces, and deliveries to addresses that have unsubscribed or have issued spam reports are certain to cause problems.




If you do find that a valid email has landed in any of these Email Lists, you have the option to remove that email address from the list by hovering over the row you want to delete and choosing the **delete** action on the right hand column of the table. The following image displays the SendGrid unsubscribe list with some demonstration data:







![Unsubscribe_List.png](/wp-content/uploads/2011/05/Unsubscribe_List.png)
