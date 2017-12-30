---
layout: page
weight: 
title: Email Activity Data Types
navigation:
  show: true
seo:
  title: Email Activity Data Types
  override: true
  description:
---



<table class="table" style="table-layout:fixed">
  <tr>
    <th class="tg-031e">Processed</th>
    <th class="tg-yw4l">Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed.</th>
  </tr>
  <tr>
    <td class="tg-031e">Clicks</td>
    <td class="tg-yw4l">Whenever a recipient clicks one of the Click Tracked links in your email.</td>
  </tr>
  <tr>
    <td class="tg-031e">Delivered</td>
    <td class="tg-yw4l">An email that was delivered to a recipient.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Opens</td>
    <td class="tg-yw4l">Whenever an email is opened by a recipient.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Unsubscribes</td>
    <td class="tg-yw4l">Whenever a recipient unsubscribes from your emails. </td>
  </tr>
  <tr>
    <td class="tg-yw4l">Group Unsubscribes</td>
    <td class="tg-yw4l">Whenever a recipient unsubscribes from a suppression group.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Group Resubscribes</td>
    <td class="tg-yw4l">When a recipient resubscribes themselves to a suppression group.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Deferred</td>
    <td class="tg-yw4l">The recipient mail server asked SendGrid to stop sending emails so fast.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Drops</td>
    <td class="tg-yw4l">SendGrid will drop an email when the contact on that email is in one of your suppression groups, the recipient email previously bounced, or that recipient has marked your email as spam.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Bounces </td>
    <td class="tg-yw4l">When an email is attempted to be delivered, but the recipient mail server rejects it.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Blocks</td>
    <td class="tg-yw4l">Blocks - When your IP address has been blacklisted or blocked by an ISP or messaging organization. Blocks are less severe than bounces and do not result in permanent suppressions: subsequent sends to blocked email addresses are not automatically suppressed.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Spam Reports</td>
    <td class="tg-yw4l">Spam Reports - Whenever a recipient marks your email as spam and their mail server tells us about it.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Parse</td>
    <td class="tg-yw4l">Whenever an incoming email is processed through the Inbound Parse Webhook.</td>
  </tr>
</table>