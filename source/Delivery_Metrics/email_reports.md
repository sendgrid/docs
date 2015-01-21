---
layout: page
weight: 0
title: Email Reports
navigation:
  show: true
---

The Email Reports tab of the website allows you to view logs of all your bounced emails, as well as your unsubscribed customers. In addition to viewing these logs on the web, you can save these lists as either .csv or .txt files, or print the list. These logs are divided into the following categories.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Category</th>
         <th>Description</th>
      </tr>
      <tr>
         <td><a href="{{root_url}}/Glossary/bounces.html">Bounces</a></td>
         <td>When your email has not been successfully delivered and the reason reported back to us is that the email was bounced, that email appears on this list.</td>
      </tr>
      <tr>
         <td><a href="{{root_url}}/Glossary/blocks.html">Blocks</a></td>
         <td>When your IP address has been added to a blacklist or has been blocked by an ISP or messaging organization, the effected email shows up on this list. Typically it is possible to have your IP address removed from a black list, and some lists automatically do this after a period of time.</td>
      </tr>
      <tr>
         <td><a href="{{root_url}}/Glossary/spam_reports.html">Spam Reports</a></td>
         <td>If a person who has received your email reports that email as spam, we are notified by the ISP and we add that email to a spam report.</td>
      </tr>
      <tr>
         <td><a href="{{root_url}}/User_Guide/Email_Deliverability/Undelivered_Email/index.html">Invalid Emails</a></td>
         <td>If an ISP reports back to us that the email supplied is invalid or we discover with our own algorithm that the email you are sending to is invalid, it will appear on this list.</td>
      </tr>
      <tr>
         <td><a href="{{root_url}}/User_Guide/Email_Deliverability/Subscription_Tracking/index.html">Unsubscribes</a></td>
         <td>Note that SendGrid will not attempt delivery to any email on this list in future mailings.</td>
      </tr>
   </tbody>
</table>

With the exception of the Block list, any email contained in these lists will be dropped from any future attempts for delivery, because redelivering emails to these addresses will most likely be unsuccessful, and will definitely impact your Sender Reputation negatively. 

You can also control the way that bounces are dealt with for your account via a settings button available on the [Bounce List page](https://sendgrid.com/bounces).

![]({{root_url}}/images/email_reports.png)

These settings allow you to purge either hard or soft bounces after a certain number of days. Additionally, you may specify whether or not you would like <a href="https://sendgrid.zendesk.com/hc/en-us/articles/200181478">Bounce Notifcations</a> from recipient servers to be forwarded via email, and if so, you may specify an address which these messages to be forwarded to. (As opposed to the from address on the bounced email.)
