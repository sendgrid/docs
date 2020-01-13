---
layout: page
weight: 70
title: Underused Mail Setting Retirement
group: account-management
navigation:
  show: false
seo:
  title: Underused Mail Setting Retirement
  keywords:   
  override: 
  description: This page explains the changes to Twilio SendGrid mail settings coming in Q1 2020
---

As we continuously modernize our email delivery infrastructure, we have sunset some sparsely used features in order to improve efficiency. 

<table>
  <tr>
    <th>Mail Setting</th>
    <th>Recommended Action</th>
  </tr>
  <tr>
    <td><span style="font-weight:bold">Plain Content</span> is an option within SendGrid Mail Settings that disables the automatic conversion of plain text emails to HTML.</td>
    <td>If you would like to maintain open and click tracking, you must send HTML. Otherwise, you can continue sending plain text emails without open and click tracking.</td>
  </tr>
  <tr>
    <td><span style="font-weight:bold"><a href="http://en.gravatar.com/">Gravatar</a></span> third party integration.</td>
    <td>Due to low adoption among customers we decided to sunset this feature.</td>
  </tr>
  <tr>
    <td><span style="font-weight:bold">Sections</span> is a form of mail merge where sections of an email content can be customized by recipient.</td>
    <td>We recommend using Twilio SendGrid <a href="https://sendgrid.com/docs/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/">transactional templates</a> with handlebars syntax through our v3 API.</td>
  </tr>
  <tr>
    <td><span style="font-weight:bold">BCC </span>automatically BCCs an email address for every email sent.</td>
    <td>We recommend identifying bcc as a <a href="https://sendgrid.com/docs/for-developers/sending-email/personalizations/#sending-a-single-email-to-a-single-recipient-with-a-cc-and-a-bcc">personalization</a> in each API call.</td>
  </tr>
  <tr>
    <td><span style="font-weight:bold">Spam Checker </span>is an option within SendGrid Mail Settings that checks outbound messages for spam content.</td>
    <td>We recommend using  <a href="https://sendgrid.com/docs/ui/sending-email/email-testing/">Email Testing</a> to maximize your deliverability.</td>
  </tr>
  <tr>
    <td><span style="font-weight:bold">Drop feature</span> is a test feature that goes through the processing of mail, but just drops it without delivering in the end.</td>
    <td>We have a <a href="https://sendgrid.com/docs/for-developers/sending-email/sandbox-mode/">Sandbox Mode</a> feature which allows you to send a test email to ensure that your request body is formatted correctly without delivering the email to any of your recipients.</td> h
  </tr>
  <tr>
    <td><span style="font-weight:bold">Sendwithus</span> third party Integration</td>
    <td>We recommend using Twilio SendGrid Marketing Campaigns.</td>
  </tr>
   <td><span style="font-weight:bold">DomainKey</span> is an old feature for signing emails which has been deprecated by email industry. </td>
<td>Users should utilize <a href="https://sendgrid.com/docs/glossary/dkim/">DKIM</a> which is the new standard for signing emails. </td>
</table>
