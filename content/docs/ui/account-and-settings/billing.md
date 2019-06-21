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

You can update your plan and billing details on the [Account Details page](https://app.sendgrid.com/account/billing) in the UI.

For more information about understanding your bill, see [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/).

When you create or upgrade to a paid account, you add a credit card in for automatic payments. This will allow SendGrid to make the recurring package charges for your account without having to notify you each month of the bill. SendGrid relies on a PCI-DSS compliant 3rd party billing provider to store, process, and manage payment card processing.

##     Payment methods

SendGrid accepts credit or check cards. We charge accounts on a monthly basis; we do not offer pre-payment, quarterly billing, or annual billing at this time. We do not accept PayPal, wire transfer, checks, or any card requiring a PIN.

You can update your card information, retry a failed payment, and export past invoices for your business on the Plan & Billing tab of your [Account Details]( https://app.sendgrid.com/account/billing) page. It is also possible to change your package type and cancel your account from this page.


 ###     Subusers

Each subuser may store up to 2,000 contacts for free before we charge the same rate of $10.00 per 10,000 contacts each month. Any additional charges due for storing contacts on a subuser account will appear in the parent account's monthly invoice.

<call-out>

We bill the parent account for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, we bill the parent account for all unique contacts stored on each account, even for the same contacts stored on multiple subuser accounts.

</call-out>

##     Billing frozen and billing warned

If your account payments aren’t up-to-date you may see one of the following warning states in displayed in your account. 

**Billing warned - “You have unpaid invoices. Please update your payment details or retry your payment.”**

This is a warning that your service may be interrupted unless you settle any outstanding balance on your account. This warning may occur if the card on file for your account gets declined when we attempt to process your payment on the first of the month.

To update your account, please update your credit card on file by logging into the SendGrid UI and going to the Plan & Billing tab on your [Account Details page]( https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.

**Billing Frozen**

If you find your account suddenly unable to send mail within the first week of the month, your account could be in a billing frozen state. This state occurs when the card on file for your account gets declined when we attempted to process your payment on the first of the month.

To reactivate your account, please update your credit card on file by logging into the SendGrid UI and going to the Plan & Billing tab on your [Account Details page]( https://app.sendgrid.com/account/billing). Update your card information and then click **Save**. Once you update the card on file, the payment processes automatically, and your account is unfrozen.


## Packages (Plans?)

### Marketing

This [package(plan?)](https://sendgrid.com/pricing/) will charge for any Single Sends, Automations, and both your contact storage and emails you send through Marketing. Sending emails with this package will not deduct from your Email API plan.

*Free*:
List features included (reference new pricing page)
Limits
6,000 emails/month
Emails sent via Single Sends or Automation count towards your allotment. 
You’ll be alerted when you’ve reached your limit each month. 
Any Single Sends you attempt to send that exceed your 6,000 limit will send partially up to that limit. For example,  if you have 400 emails left and attempt to send a Single Send to an audience of 1,000, 600 of the emails will be dropped. 
Similarly, Automations will cease sending once you’ve hit 6,000 emails via Marketing Campaigns in a month. If a contact meets the entry criteria of an Automation after you’ve reached your send limit, they will not receive any emails, and will not be “caught up” once you upgrade your plan or a new month allotment increases. 
2,000 contacts/month
You’ll be alerted when you’ve reached your limit each month
Contacts you attempt to upload via CSV or that are added via Signup Forms or the Contacts API will be dropped if you exceed 2,000 in a month. 
You will be receive a notification via emailalerted via your notification email when contacts are not successfully added via CSV upload or Contacts API.
You will not be alerted when new signups submit via your Signup Form but are not added due to having reached your contact limits. These signups are not recoverable. 
When you upgrade, signups from Signup Forms will resume adding to your contacts. 

*What to do if you’ve reached your limit*:

To keep your Automations and Signup Forms active, upgrade to Basic or Advanced. Once you upgrade, your account will never be blocked due to limits, you’ll simply pay overages for usage that exceeds your Basic or Advanced tier allotment.

*Basic*:
Features included (from pricing page)
Overage rates (from pricing page)
*Advanced*:
Features included (from pricing page)
Overage rates (from pricing page)

If you exceed your plan allotment of contacts or overages you will be charged a small amount per email sent and per contact stored, above the limits of your current Marketing package. Any overage charges get added to the invoice of the month  _after_ the over-limit sending and contact storage occurred.

### Email API

This [package(plan?)](https://sendgrid.com/pricing/) includes charges for any emails you send over the Twilio SendGrid Email API.  Sending emails through the API with this package will not deduct from your Marketing plan.

*Free*:
*Essentials*:
*Pro*:
*Premier*: 

## Limits and Overage Rates

*What to do if you’ve reached your limit*:

You will be charged a small amount per-email for each email that you send beyond the limit of your current package. Any overage charges get added to the invoice of the month _after_ the over-limit sending occurred.
##     Overage Rates

Depending on your package, you will be charged a small amount per-email for each email that you send beyond the credit limit of your current package. Any overage charges get added to the invoice of the month _after_ the over-limit sending occurred.

<call-out>

Upgrading your account does NOT absorb overage charges already incurred, so make sure you are using the right package for your use case.

</call-out>

<table>
 <tr>
   <th colspan="3">Marketing Campaigns Overage Costs</th>
 </tr>
 <tr>
   <td colspan="3">The exact amount you pay will vary month-to-month based on your sending habits and contact list size. <br>If you go over your plan limits, here’s a breakdown of the overage costs you’ll incur:</td>
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
   <td>100,000 contacts and 200,000 emails</td>
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

<table>
 <tr>
   <th colspan="3">API Plans Overage Costs</th>
 </tr>
 <tr>
   <td colspan="3">The exact amount you pay will vary month-to-month based on your sending habits.<br>If you go over your plan limits, here’s a breakdown of the overage costs you’ll incur:</td>
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

SendGrid packages operate off of a monthly subscription model, not direct usage. We will not issue a refund if you have used your account in the same calendar month as your request. Instead please cancel your account to avoid any future subscription charges.

Refunds are only applicable to the subscription charge on your account, not for overage or contact storage charges from the prior month. We hold our customers responsible for managing their account credit limits and contact storage.

If you meet these conditions, please respond directly to the invoice email you have received, or email billing@sendgrid.com to begin the discussion about a possible refund.

##     Changing your plan

You can change your plan under the Plan section on the Plan & Billing tab of the [Account Details page](https://app.sendgrid.com/account/billing).

##     Cancelling your account

To cancel your account, go to the bottom of the Plan & Billing section of your [Account Details page]( https://app.sendgrid.com/account/billing), click **Cancel Account**, and follow the prompts.

<call-out>

When you cancel an account, it changes to a [free](https://sendgrid.com/free?mc=SendGrid%20Documentation) plan.

</call-out>

##     Additional Resources

- [SendGrid Pricing](https://sendgrid.com/pricing/)
- [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/)






Ideas to incorporate package info, overages, and free limits into this doc. Focused on TNE packages, but would apply to Email API and Legacy MC (for contact storage) as well. 

## Packages, Overage Rates, and Limits

### Marketing Campaigns
Free
List features included (reference new pricing page)
Limits
6,000 emails/month
Emails sent via Single Sends or Automation count towards your allotment. 
You’ll be alerted when you’ve reached your limit each month. 
Any Single Sends you attempt to send that exceed your 6,000 limit will send partially up to that limit. Ie, if you have 400 emails left and attempt to send a Single Send to an audience of 1,000, 600 of the emails will be dropped. 
Similarly, Automations will cease sending once you’ve hit 6,000 emails via Marketing Campaigns in a month. If a contact qualifies into an Automation after you’ve reached your send limit, they will not receive any emails, and will not be “caught up” once you upgrade your plan or a new month allotment increases. 
2,000 contacts/month
You’ll be alerted when you’ve reached your limit each month
Contacts you attempt to upload via CSV or that are added via Signup Forms or the Contacts API will be dropped if you exceed 2,000 in a month. 
You will be alerted when contacts are not successfully added via CSV upload or Contacts API
You will not be alerted when new signups submit via your Signup Form but are not added due to having reached your contact limits. These signups are not recoverable. 
When you upgrade, signups from Signup Forms will resume adding to your contacts. 
What to do if you’ve reached your limit
To keep your Automations and Signup Forms active, upgrade to Basic or Advanced. 
Once you upgrade, your account will never be blocked due to limits, you’ll simply pay overages for usage that exceeds your Basic or Advanced tier allotment.
Basic
Features included (from pricing page)
Overage rates (from pricing page)
Advanced
Features included (from pricing page)
Overage rates (from pricing page)



### Email API
Free
Essentials
Pro
Premier 

