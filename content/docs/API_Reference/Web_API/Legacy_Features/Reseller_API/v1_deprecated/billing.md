---
layout: page
weight: 0
title: Billing
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

{% warning %}
"This feature is deprecated, please go to the [Version 2]({{root_url}}/API_Reference/Web_API/Reseller_API/apps.html) Reseller Apps page”.
{% endwarning %}

You can retrieve invoices and usage data about your users through the website or via the Distributor API.

Whenever you create a user under your account, they immediately begin their billing cycle from that day forward. The billing cycle is one month, and they will be invoiced the same day the account was created the following month.

If a user decides to close their account during their billing period, we will prorate the amount left on the next bill.

Following are brief descriptions of the various API calls needed to manage billing issues, click the API call name for further details:

## <a href="{{root_url}}/API_Reference/Web_API/Legacy_Features/Reseller_API/v1_(deprecated)/billing_retrieving_end_users_invoices_usage.html">Retrieving End Users Invoices / Usage</a>

Retrieve invoices and usage information.

## <a href="{{root_url}}/API_Reference/Web_API/Legacy_Features/Reseller_API/v1_(deprecated)/billing_retrieving_as_you_go_usage.html">Retrieving As You Go Usage</a>

Retrieve usage information between billing periods for intermediate billing.
