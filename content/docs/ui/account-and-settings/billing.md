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

When you create or upgrade to a paid account, you add a credit card for automatic payments. This will allow Twilio SendGrid to make the recurring plan charges for your account without having to notify you each month of the bill. Twilio SendGrid relies on a PCI-DSS compliant 3rd party billing provider to store, process, and manage payment card processing.

## Payment methods

Twilio SendGrid accepts credit or check cards. We charge accounts on a monthly basis; we do not offer pre-payment, quarterly billing, or annual billing at this time. We do not accept PayPal, wire transfer, checks, or any card requiring a PIN.

You can update your card information, retry a failed payment, and export past invoices for your business on the Billing tab of your [Account Details](https://app.sendgrid.com/account/billing) page. It is also possible to change your package type and cancel your account from this page.

### Subusers

Subusers under a free Marketing Campaigns plan will be able to upload only 2,000 contacts. Subusers under an Advanced Marketing Campaigns plan will be able to continue uploading contacts, and the parent account will pay for any overages the subuser may cause by exceeding the overall limit on the paid plan.

<call-out type="warning">

If you are still on the **legacy Marketing Campaigns plan**, each subuser may store up to 2,000 contacts for free before we charge the same rate of $10.00 per 10,000 contacts each month. Any additional charges due for storing contacts on a subuser account will appear in the parent account's monthly invoice.

</call-out>

<call-out>

We bill the parent account for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, we bill the parent account for all unique contacts stored on each account, even for the same contacts stored on multiple subuser accounts.

</call-out>

## Account Warning States

If your account payments aren’t up-to-date, you may see one of the following warning states displayed in your account.

### Billing warned

> “You have unpaid invoices. Please update your payment details or retry your payment.”

This warns you that your service may be interrupted unless you settle any outstanding balance on your account. This warning may occur if the card on file for your account gets declined when we attempt to process your payment on the first of the month.

To update your account, please update your credit card on file by logging into the Twilio SendGrid app and going to the Billing tab on your [Account Details page](https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.

### Billing Frozen

If you find your account is suddenly unable to send mail within the first week of the month, your account could be in a billing frozen state. This frozen state occurs when we attempt to process your payment on the first day of the month, but the card on file for your account gets declined.

To reactivate your account, please update your credit card on file by logging into the Twilio SendGrid UI and going to the **Billing** tab on your [Account Details page](https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.

## Marketing Campaigns Plans

Each [Marketing Campaigns](https://sendgrid.com/pricing/) package will cover both contact storage and email sends that you use via Single Sends or Automation within Marketing Campaigns. Emails you send via the [Email API](#email-api-plans) will not be deducted from your Marketing Campaigns plan.

### Free Plan

#### Features include:

* Automation
* Single Sends for one-time campaigns
* Ticket Support
* 3 Email Testing Credits per month
* 1 Signup Form

#### Limits:

* 6,000 emails/month - Emails sent via Single Sends or Automation count toward your allotment. Any Single Sends you attempt to send that exceed your 6,000 email limit will send partially up to that limit.

<call-out>

For example, if you have 400 emails remaining and attempt to send a Single Send to an audience of 1,000, 600 of the emails will be dropped. Similarly, Automations will cease sending once you’ve hit 6,000 email sends via Marketing Campaigns in a month. If a contact meets the entry criteria of an Automation after you’ve reached your send limit, they will not receive any emails, and they will not be “caught up” once you upgrade your plan or a new month allotment increases.

</call-out>

* 2,000 contacts - Contacts, whether you attempt to upload them via CSV, or they are added via Signup Forms or the Contacts API, will be dropped if you exceed 2,000 total contacts.

*What to do if you’ve reached your limit:*

You will be alerted when you have reached your limit each month. To keep your Automations and Signup Forms active, upgrade to the Basic or Advanced plan. Once you upgrade, your account will never be blocked due to limits, you’ll simply pay overages for any usage that exceeds your Basic or Advanced tier allotment.

<call-out type="warning">

If you’re on the Free package and hit your contact allotment limit, any active Signup Forms will no longer add new contacts to your account. You will **not** be be able to recover these signups. When you upgrade, signups from Signup Forms will resume adding to your contacts.

</call-out>

### Basic Plan

#### Features include:

* Single Sends for one-time campaigns
* Ticket, chat, and phone support
* 10 Email Testing Credits per month with the option to purchase more
* 5 Signup Forms
* 1 Teammate
* Access to Expert Services

#### Limits:

* 5,000 - 15,000 emails/month depending on the plan you purchase. Emails sent via Single Sends count towards your allotment. 
* Up to 100,000 contacts


### Advanced Plan

#### Features include:

* Automation
* Single Sends for one-time campaigns
* Ticket, chat, and phone support
* 60 Email Testing Credits per month with the option to purchase more
* 15 Signup Forms
* 1,000 Teammates
* Access to Expert Services
* Subuser Management
* Dedicated IP Included

#### Limits:

* 200,000+ emails/month depending on the plan you purchase. Emails sent via Single Sends or Automation count towards your allotment.
* 1 million+ contacts

If you exceed your plan allotment of contacts or overages you will be charged a [small amount]({{root_url}}/ui/account-and-settings/billing/#limits-and-overage-rates) per email sent and per contact stored above the limits of your current Marketing package. Any overage charges will appear on the invoice of the month _after_ any over-limit sending and contact storage occurs.

### Understanding Contact Counts in Marketing Campaigns

#### Free Plan

You can add and store up to 2,000 contacts to your account each month. The number you can add depends on whether you already have contacts stored in your account. For example, if you have 500 contacts in your account, and you haven’t added any yet this month, you can add up to 1,500 more contacts.

If you *update or add new data about existing contacts* in your Marketing Campaigns account, it will not count against the number of contacts you can add.

If you *delete a contact and re-add them*, that is counted as a new add.

#### Basic & Advanced Plans

Your plan tier comes with an allotment of contacts that you can add to and store in your account each month. For example, if you’re on the Advanced 100K plan, you can add up to 100,000 contacts. 

The number you can add each month depends on whether you already have contacts stored in your account. For example, if you currently have 5,000 contacts in your account, and you haven’t added any yet this month, you can add up to 95,000 more contacts.

If you *update or add new data about existing contacts* in your Marketing Campaigns account, it does not count against the number of contacts you can add. 

If you *delete a contact and re-add them*, that is counted as a new add. 

If you exceed your allotment of contacts in a given month, you’ll be charged overages according to your chosen Marketing Campaigns package. 

## Email API Plans

<call-out type="warning">

Every email processed by SendGrid uses an email credit. Free, Essentials, Pro, and Premier accounts will see their email credits reset the 1st day of each month at 12:01 Pacific Time.

</call-out>

The [Email API package](https://sendgrid.com/pricing/) includes charges for any emails you send over the Twilio SendGrid Email API. Sending emails through the API with this package will not deduct from your Marketing Campaigns plan.

### Free

#### Features include:

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* 3 days of Email Activity History
* 3 Email Testing credits during the trial period
* Ticket Support

#### Limits:

* 40,000 emails/day for your first 30 days
* 100 emails/day indefinitely after your first 30 days are over
* No ability to purchase additional Email Testing credits

### Essentials

#### Features include:

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* 3 days of Email Activity History
* Ticket and chat

#### Limits:

* Up to 100,000+ emails/month depending on the package you purchase.
* No Email Testing access

### Pro

#### Features include:

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Dedicated IP Included
* Subuser Management
* 7 days of Email Activity History
* 60 Email Testing credits with the ability to purchase more
* Ticket, chat, and phone support

#### Limits:

* Up to 1.5 million+ emails/month depending on the package you purchase.

### Premier

#### Features include:

* APIs, SMTP Relay, and Webhooks
* Libraries and documentation
* Delivery Optimization Tools
* Transactional Template Editor
* Dedicated IP Included
* Subuser Management
* 7 Days of Email Activity History
* 500 Email Testing credits with the ability to purchase more
* Ticket, chat, and phone support

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
   <td colspan="3">The exact amount you pay will vary month-to-month if you exceed your plan allotment of email sends or contact storage.<br>If you go over your plan limits, here’s a breakdown of the overage costs you’ll incur:</td>
 </tr>
 <tr>
   <td>Plan Information</td>
   <td>Monthly Plan Limits</td>
   <td>Cost per Extra Email or Contact*</td>
 </tr>
 <tr>
   <td>Free</td>
   <td>2,000 contacts and 6,000 emails</td>
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
   <td>$0.00100</td>
 </tr>
 <tr>
   <td>Pro 300K</td>
   <td>300,000 emails</td>
   <td>$0.00063</td>
 </tr>
 <tr>
   <td>Pro 700K</td>
   <td>700,000 emails</td>
   <td>$0.00051</td>
 </tr>
 <tr>
   <td>Pro 1.5M</td>
   <td>1,500,000 emails</td>
   <td>$0.00048</td>
 </tr>
 <tr>
   <td>Pro 2.5M, Pro 2.5M Legacy</td>
   <td>2,500,000 emails</td>
   <td>$0.00047</td>
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

## Requesting a refund

You must meet both criteria below for a refund to be considered:

* You have not used your account in the current calendar month.
* You have no overages, and you have no contacts stored in Marketing Campaigns.

Twilio SendGrid packages operate off of a monthly subscription model, not direct usage. We will not issue a refund if you have used your account in the same calendar month as your request. Instead, please cancel your account to avoid any future subscription charges.

Refunds are only applicable to the current subscription charge on your account, not for overage or contact storage charges from the prior month. We hold our customers responsible for managing their account credit limits and contact storage.

If you meet these conditions, please respond directly to the invoice email you have received, or email billing@sendgrid.com to begin the discussion about a possible refund.

## Changing your plan

You can change your plan under the Email API or Marketing Campaigns sections on the "Your Products" tab of the [Account Details page](https://app.sendgrid.com/account/products).

<call-out type="warning">

**Please note:** Downgrading from a paid Basic or Advanced Marketing Campaigns plan to a Free account will permanently delete all contacts associated with that account. You will need to reimport any contacts that you would like to use with your Free account.

Other limits (like the number of Signup Forms or Email Testing credits available to you) will downgrade to the Free plan limits, keeping the most recently updated items when applicable. For example, if you have 10 Signup Forms and downgrade to a Free plan, we will keep your most recently updated Signup Form and remove the other 9.

</call-out>

## Cancelling your account

To cancel your account, go to the bottom of the "Your Products" tab of the [Account Details page](https://app.sendgrid.com/account/products), click **Cancel Account**, and follow the prompts.

<call-out>

When you cancel an account, it changes to a [free](https://sendgrid.com/free?mc=SendGrid%20Documentation) plan.

</call-out>

## Additional Resources

* [SendGrid Pricing](https://sendgrid.com/pricing/)
* [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/)
