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
         <td>Bounces</td>
         <td>When your email has not been successfully delivered and the reason reported back to us is that the email was bounced, that email appears on this list.</td>
      </tr>
      <tr>
         <td>Blocks</td>
         <td>When your IP address has been added to a blacklist, has been blocked by an ISP or messaging organization, the effected email shows up on this list. Typically it is possible to have your IP address removed from a block list, and some lists automatically do this after a period of time.</td>
      </tr>
      <tr>
         <td>Spam Reports</td>
         <td>If a person whom has received your email has reported that received email as spam, we are notified by the ISP and we place the email that originated the spam report here.</td>
      </tr>
      <tr>
         <td>Invalid Emails</td>
         <td>If an ISP reports back to us that the email supplied is invalid or we discover with our own algorithm that the email you are sending to is invalid, it will appear on this list.</td>
      </tr>
      <tr>
         <td>Unsubscribes</td>
         <td>Note that any email on this list will not be delivered to by SendGrid in any future mailings.</td>
      </tr>
   </tbody>
</table>

With the exception of the Block list, all emails listed on these lists will be dropped from any future attempts for delivery, this is because redelivering emails to these addresses will most likely be unsuccessful, and definitely negatively impact your Sender Reputation.

You can also control the way bounces are dealt with for your account via a settings button available from the [Bounce List page](https://sendgrid.com/bounces).

![]({{root_url}}/images/email_reports.png)

These settings allow you to purge either hard or soft bounces after a certain number of days. Additionally, you may specify whether or not you would like bounce messages from recipient servers to be forwarded via email, and if so, you may specify an address which these messages to be forwarded to. (As opposed to the from address on the bounced email.)
