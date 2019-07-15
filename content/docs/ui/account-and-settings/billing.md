---
layout: page
weight: 0
group: billing
title: Billing
seo:
  title: Billing
  description: Manage your SendGrid billing settings
  keywords: billing, contacts, email credits, refund, plans, cancel, upgrade, downgrade
navigation:
  show: true
---

You can update your billing details on the on the Billing tab of the [Account Details page](https://app.sendgrid.com/account/billing) in the UI. You can update your plan details on the Products tab of the [Account Details page](https://app.sendgrid.com/account/products).

For more information about understanding your bill, see [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/).

When you create or upgrade to a paid account, you add a credit card in for automatic payments. This will allow SendGrid to make the recurring package charges for your account without having to notify you each month of the bill. SendGrid relies on a PCI-DSS compliant 3rd party billing provider to store, process, and manage payment card processing.

##     Payment methods

SendGrid accepts credit or check cards. We charge accounts on a monthly basis; we do not offer pre-payment, quarterly billing, or annual billing at this time. We do not accept PayPal, wire transfer, checks, or any card requiring a PIN.

You can update your card information, retry a failed payment, and export past invoices for your business on the Billing tab of your [Account Details]( https://app.sendgrid.com/account/billing) page. It is also possible to change your package type and cancel your account from this page.


 ###     Subusers

Subusers under a free Marketing Campaigns plan will only be able to upload 2,000 contacts. Subusers under an Advanced Marketing Campaigns plan will be able to continue uploading contacts, and the parent account will pay for any overages this subuser may cause by going over the overall limit on the paid plan.



<call-out type="warning">

If you are still on the **legacy Marketing Campaigns plan**, each subuser may store up to 2,000 contacts for free before we charge the same rate of $10.00 per 10,000 contacts each month. Any additional charges due for storing contacts on a subuser account will appear in the parent account's monthly invoice.

</call-out>


<call-out>

We bill the parent account for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, we bill the parent account for all unique contacts stored on each account, even for the same contacts stored on multiple subuser accounts.

</call-out>

##    Account Warning States

If your account payments aren’t up-to-date you may see one of the following warning states in displayed in your account. 

**Billing warned** - “You have unpaid invoices. Please update your payment details or retry your payment.”

This warns you that your service may be interrupted unless you settle any outstanding balance on your account. This warning may occur if the card on file for your account gets declined when we attempt to process your payment on the first of the month.

To update your account, please update your credit card on file by logging into the SendGrid app and going to the Billing tab on your [Account Details page]( https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.

**Billing Frozen**

If you find your account suddenly unable to send mail within the first week of the month, your account could be in a billing frozen state. This frozen state occurs when we attempt to process your payment on the first day of the month, but the card on file for your account gets declined.

To reactivate your account, please update your credit card on file by logging into the SendGrid UI and going to the **Billing** tab on your [Account Details page]( https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.


## Plans

### Marketing Campaigns

Each [Marketing Campaigns](https://sendgrid.com/pricing/) package will cover both contact storage and email sends that you use via Single Sends or Automation within Marketing Campaigns. Emails you send via [Email API](#email-api) will not be deducted from your Marketing Campaigns plan.

**Free**

*Features include:*

* Automation
* Single Sends for one-time campaigns
* Ticket Support
* 3 Email Testing Credits per month
* 1 Signup Form

*Limits:*

* 6,000 emails/month - Emails sent via Single Sends or Automation count towards your allotment. Any Single Sends you attempt to send that exceed your 6,000 limit will send partially up to that limit. 

<call-out>
  
For example, if you have 400 emails remaining and attempt to send a Single Send to an audience of 1,000, 600 of the emails will be dropped. Similarly, Automations will cease sending once you’ve hit 6,000 email sends via Marketing Campaigns in a month. If a contact meets the entry criteria of an Automation after you’ve reached your send limit, they will not receive any emails, and will not be “caught up” once you upgrade your plan or a new month allotment increases. 

</call-out>

* 2,000 contacts - Contacts you attempt to upload via CSV, or that are added via Signup Forms or the Contacts API will be dropped if you exceed 2,000 total contacts. 

*What to do if you’ve reached your limit*:

You will be alerted when you have reached your limit each month. To keep your Automations and Signup Forms active, upgrade to Basic or Advanced. Once you upgrade, your account will never be blocked due to limits, you’ll simply pay overages for any usage that exceeds your Basic or Advanced tier allotment.

<call-out type="warning">

If you’re on the Free package and hit your contact allotment limit, any active Signup Forms will no longer add new contacts to your account. You will **not** be be able to recover these signups. When you upgrade, signups from Signup Forms will resume adding to your contacts.

</call-out>

**Basic**

*Features include:*

* Single Sends for one-time campaigns
* Ticket, chat, and phone support
* 10 Email Testing Credits per month with the option to purchase more
* 5 Signup Forms
* 1 Teammate
* Access to Expert Services

*Limits:*

* 5,000 - 15,000 emails/month depending on the plan you purchase. Emails sent via Single Sends count towards your allotment. 
* Up to 100,000 contacts


**Advanced**

*Features include:*

* Automation 
* Single Sends for one-time campaigns
* Ticket, chat, and phone support
* 60 Email Testing Credits per month with the option to purchase more
* 15 Signup Forms
* 1,000 Teammates
* Access to Expert Services
* Subuser Management
* Dedicated IP Included

*Limits:*

* 200,000+ emails/month depending on the plan you purchase. Emails sent via Single Sends or Automation count towards your allotment.
* 1 million+ contacts

If you exceed your plan allotment of contacts or overages you will be charged a [small amount]({{root_url}}/ui/account-and-settings/billing/#limits-and-overage-rates) per email sent and per contact stored, above the limits of your current Marketing package. Any overage charges will appear on the invoice of the month _after_ any over-limit sending and contact storage occurs.

### Email API

This [package](https://sendgrid.com/pricing/) includes charges for any emails you send over the Twilio SendGrid Email API.  Sending emails through the API with this package will not deduct from your Marketing Campaigns plan.

 **Free**

*Features include:*

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Ticket Support

*Limits:*

* 40,000 emails/day for your first 30 days
* 100 emails/day indefinitely after your first 30 days are over


**Essentials**

*Features include:* 

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Ticket, chat, and phone support

*Limits:*

* Up to 100,000+ emails/month depending on the package you purchase. 

**Pro**

*Features include:*

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Ticket, chat, and phone support
* Dedicated IP Included
* Subuser Management

*Limits:*

* Up to 1.5 million+ emails/month depending on the package you purchase.

**Premier** 

*Features include:*

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Ticket, chat, and phone support
* Dedicated IP Included
* Subuser Management

## Limits and Overage Rates

*What to do if you’ve reached your limit*:

You will be charged a small amount per-email for each email that you send beyond the limit of your current plan. Any overage charges will appear on the invoice of the month _after_ any over-limit sending and contact storage occurs.

<call-out>

Upgrading your account does NOT absorb already incurred overage charges, so make sure you are using the right package for your use case.

</call-out>

### Marketing Campaigns Overage Costs

<table>
 <tr>
   <th colspan="3">Marketing Campaigns Overage Costs</th>
 </tr>
 <tr>
   <td colspan="3">The exact amount you pay will vary month-to-month if you exceed your plan allotment of email sends or contact storage.   <br>If you go over your plan limits, here’s a breakdown of the overage costs you’ll incur:</td>
 </tr>
 <tr>
   <td>Plan Information</td>
   <td>Monthly Plan Limits</td>
   <td>Cost per Extra Email or Contact*</td>
 </tr>
 <tr>
   <td>Free</td>
   <td>6,000 contacts and 2,000 emails</td>
   <td>-</td>
 </tr>
 <tr>
   <td>Basic 5K</td>
   <td>5,000 contacts and 15,000 emails</td>
   <td>$0.0040</td>
 </tr>
 <tr>
   <td>Basic 10K</td>
   <td>10,000 contacts and 30,000 emails</td>
   <td>$0.0030</td>
 </tr>
 <tr>
   <td>Basic 20K</td>
   <td>20,000 contacts and 60,000 emails</td>
   <td>$0.0030</td>
 </tr>
 <tr>
   <td>Basic 50K</td>
   <td>50,000 contacts and 150,000 emails</td>
   <td>$0.0028</td>
 </tr>
 <tr>
   <td>Basic 100K</td>
   <td>100,000 contacts and 300,000 emails</td>
   <td>$0.0023</td>
 </tr>
 <tr>
   <td>Advanced 10K</td>
   <td>10,000 contacts and 50,000 emails</td>
   <td>$0.0075</td>
 </tr>
 <tr>
   <td>Advanced 20K</td>
   <td>20,000 contacts and 100,000 emails</td>
   <td>$0.0060</td>
 </tr>
 <tr>
   <td>Advanced 50K</td>
   <td>50,000 contacts and 250,000 emails</td>
   <td>$0.0060</td>
 </tr>
 <tr>
   <td>Advanced 100K</td>
   <td>100,000 contacts and 500,000 emails</td>
   <td>$0.0050</td>
 </tr>
 <tr>
   <td>Advanced 200K</td>
   <td>200,000 contacts and 1,000,000 emails</td>
   <td>$0.0050</td>
 </tr>
 <tr>
   <td colspan="3">*Taxes may apply.</td>
 </tr>
</table>

### API Plans Overage Costs

<table>
 <tr>
   <th colspan="3">API Plans Overage Costs</th>
 </tr>
 <tr>
   <td colspan="3">The exact amount you pay will vary month-to-month based on how many emails you send over your limits.<br>If you go over your plan limits, here’s a breakdown of the overage costs you’ll incur:</td>
 </tr>
 <tr>
   <td>Plan Information</td>
   <td>Monthly Plan Limits</td>
   <td>Cost per Extra Email*</td>
 </tr>
 <tr>
   <td>Free</td>
   <td>40,000 emails</td>
   <td>-</td>
 </tr>
 <tr>
   <td>Essentials 40K</td>
   <td>40,000 emails</td>
   <td>$0.00100</td>
 </tr>
 <tr>
   <td>Essentials 100K</td>
   <td>100,000 emails</td>
   <td>$0.00075</td>
 </tr>
 <tr>
   <td>Pro 100K</td>
   <td>100,000 emails</td>
   <td>$0.00085</td>
 </tr>
 <tr>
   <td>Pro 300K</td>
   <td>300,000 emails</td>
   <td>$0.00050</td>
 </tr>
 <tr>
   <td>Pro 700K</td>
   <td>700,000 emails</td>
   <td>$0.00045</td>
 </tr>
 <tr>
   <td>Pro 1.5M</td>
   <td>1,500,000 emails</td>
   <td>$0.00045</td>
 </tr>
 <tr>
   <td>Premier</td>
   <td>Custom</td>
   <td>-</td>
 </tr>
 <tr>
   <td colspan="3">*Taxes may apply.</td>
 </tr>
</table>


##     Requesting a refund

You must meet both criteria below for a refund to be considered:

- You have not used your account in the current calendar month.
- You have no overages, and you have no contacts stored in Marketing Campaigns.

SendGrid packages operate off of a monthly subscription model, not direct usage. We will not issue a refund if you have used your account in the same calendar month as your request. Instead, please cancel your account to avoid any future subscription charges.

Refunds are only applicable to the current subscription charge on your account, not for overage or contact storage charges from the prior month. We hold our customers responsible for managing their account credit limits and contact storage.

If you meet these conditions, please respond directly to the invoice email you have received, or email billing@sendgrid.com to begin the discussion about a possible refund.

##     Changing your plan

You can change your plan under the Email API or Marketing Campaigns sections on the Your Products tab of the [Account Details page](https://app.sendgrid.com/account/products).

##     Cancelling your account

To cancel your account, go to the bottom of the Your Products tab of the [Account Details page]( https://app.sendgrid.com/account/products), click **Cancel Account**, and follow the prompts.

<call-out>

When you cancel an account, it changes to a [free](https://sendgrid.com/free?mc=SendGrid%20Documentation) plan.

</call-out>

##     Additional Resources

- [SendGrid Pricing](https://sendgrid.com/pricing/)
- [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/)
