---
layout: page
weight: 0
title: Billing Settings
seo:
  title: Billing Settings
  description: Manage your SendGrid billing settings
  keywords: billing settings
navigation:
  show: true
---

- [Invoices]()
- [Payment methods]()
- [Marketing Campaigns Contacts](#-Marketing-Campaigns-Contacts)
- [Billing frozen and billing warned]()
- [Email credits]()
- [Overages]()
- [Requesting a refund]()
- [Changing Your Plan]()
- [Cancel Account]()

You can update your plan and billing details on the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the UI.

When you create or upgrade to a paid account, you add a credit card in for automatic payments. This will allow SendGrid to make the recurring package charges for your account without having to notify you each month of the bill. SendGrid relies on a PCI-DSS compliant 3rd party billing provider to store, process, and manage payment card processing.

{% anchor h2 %}
Invoices
{% endanchor %}

Your recent invoices are shown in this section in a list ordered by date. You are shown the date you were billed, how much you were billed, and the status of that invoice.

{% anchor h2 %}
Payment methods
{% endanchor %}

Currently the only methods of payment we accept are credit or check cards. We also charge accounts on a monthly basis, we do not offer pre-payment, quarterly billing, or annual billing at this time.

We don’t accept PayPal, wire transfer, checks, or any card requiring a PIN.

You can update your card information, retry a failed payment, and export past invoices for your business on the Plan and Billing Details page. It is also possible to change your package type and cancel your account from this page.

{% anchor h2 %}
Marketing Campaigns Contacts
{% endanchor %}

Each email sent using the UI or API costs one credit - this counts towards your monthly plan volume, just like the messages you already send. In addition to this normal charge, if you are using Marketing Campaigns to store contacts, you are charged for storing those contacts: 

**Your first 2,000 contacts are free. After 2,000, we charge $10.00 per 10,000 stored contacts per month.**

This amount is based on the highest number stored in the preceding month. Think of it as a high-water mark, so even if you reduce your contacts before your next bill rolls around (the 1st of each calendar month), you'll still be charged for whatever upper limit was reached.

{% anchor h3 %}
Subusers
{% endanchor %}

Each subuser may store up to 2,000 contacts for free before they are charged the same rate of $10.00 per 10,000 contacts each month. Any additional charges due for storing contacts on a subuser account will appear in the parent account's monthly invoice.

{% info %}
Your parent account will be billed for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, the parent account will be billed for all unique contacts stored on each account, even if the same contact is stored on multiple accounts.
{% endinfo %}

{% anchor h2 %}
Billing frozen and billing warned
{% endanchor %}

Billing warned - “You have unpaid invoices. Please update your payment details or retry payment.”

Did you receive a notification regarding an unpaid invoice? This is just a friendly warning that your service may be interrupted unless you settle any outstanding balance on your account. This may occur when the card on file for your account is declined when we attempted to process payment on the first of the month.

To please update your credit card or retry a payment by logging into your SendGrid account and visiting Plan and Billing Details. You can then either re-enter the credit card information and then click Save, or retry the payment. If you choose to update the card on file, the outstanding payment will process automatically.

Billing Frozen

If you find your account suddenly unable to send mail within the first week of the month, your account could be in a billing frozen state. This occurs when the card on file for your account is declined when we attempted to process payment on the first of the month.

To reactivate your account please [update your credit card]({{root_url}}/Classroom/Basics/Billing/update_your_credit_card_and_resubmit_payments.html) on file by logging into your SendGrid dashboard and going to [Settings > Plan and Billing Details > Change Billing Info](https://app.sendgrid.com/settings/billing). You can then change or re-enter the card information and then click Save. Once you update the card on file, the payment will process automatically and the account will be unfrozen.

{% anchor h2 %}
Email credits
{% endanchor %}

An email credit is used for Free, Essentials, Pro, and Premier accounts will see their email credits reset the 1st day of each month at 12:01 PST.

{% anchor h2 %}
Overages
{% endanchor %}

Depending on your package, you will be charged a small amount per-email for each email that you send beyond the credit limit of your current package. Any overage charges are added to the invoice of the month _after_ the over-limit sending occurred.

{% info %}
Upgrading your account does NOT absorb overage charges already incurred, so make sure you are using the right package for your usage case.
{% endinfo %}

{% anchor h2 %}
Requesting a refund
{% endanchor %}

You must meet both criteria below in order for a refund to be considered:

You have not used your account in the current calendar month

SendGrid packages operate off of a monthly subscription model, not direct usage. We will not issue a refund if you have used your account in the same calendar month as your request. Instead please cancel your account to avoid any future subscription charges.

EXAMPLE:

If you request a refund on the 5th of the month, but have used your account on any of the previous days in that month (1st - 5th), we cannot issue a refund.

Alternatively, if you request a refund on the 5th of the month, and we can see that your account was not used during the current month, we can begin the discussion of issuing a refund.

Please note; Refunds are only applicable to the subscription charge on your account, not for overages accrued during the prior month or contact storage charges.

Did you forget to downgrade or cancel your account? Click here for more info.

You have no overages and/or have no contacts stored in Marketing Campaigns

Refunds are only applicable to the subscription charge on your account, not for overage or contact storage charges from the prior month. We hold our customers responsible for managing their account credit limits and contact storage.

EXAMPLE:

If you request a refund on your $79.95/mo Pro account, and your monthly invoice totals $117.00 due to a combination of overages and contact storage, you are only eligible for a refund of up to 79.95.The remaining 37.05 cannot be refunded in this scenario.

For more information on how overages are calculated, please refer to the above graphic, or visit our pricing page.

For information on how contact storage in Marketing Campaigns is calculated, click here.

Did you forget to downgrade or cancel your account? Click here for more info.

If you meet all of above conditions, please respond directly to the invoice email you have received, or email billing@sendgrid.com to begin the discussion about a possible refund.

{% anchor h2 %}
Changing Your Plan
{% endanchor %}

To change your plan, click the “Change Plan” button next to your billing details. You will be shown the plan options that are available to you, whether you are upgrading or downgrading your SendGrid service. Simply click the plan you would like and follow the prompts.

{% anchor h2 %}
Cancel Account
{% endanchor %}

{% info %}
Canceled accounts are not deleted. Accounts are changed to our [free]({{site.site_url}}/free?mc=SendGrid%20Documentation) plan.
{% endinfo %}

We are truly sorry to see you go. Please don’t forget that [we have 24/7 support]({{site.support_url}}) and would love the opportunity to help and chat about why you’re leaving if we can.

To cancel, go the bottom of your billing details page, click **Cancel**, and follow the prompts.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [SendGrid Pricing]({{site.site_url}}/pricing/)
- [Subuser Impersonation]({{root_url}}/User_Guide/Settings/Subusers/impersonation.html)
- [Email Activity]({{root_url}}/User_Guide/email_activity.html)
- [SendGrid Support]({{site.support_url}})