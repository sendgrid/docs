---
layout: page
weight: 0
title: Invoice Retrieval
navigation:
   show: true
---

Retrieve your invoice information.

* * * * *

{% anchor h2 %}
Retrieve Invoice Numbers 
{% endanchor %}

Return an array of invoice numbers to your account.


{% parameters get %}
 {% parameter 'start_date' 'No' 'Must be in YYYY-mm-dd format. This is the start date to begin your invoice search from.' %}
 {% parameter 'end_date' 'No' 'Must be in YYYY-mm-dd format and also include a start_date in the API call. This is the end date you wish to end your invoice search from.' %}
 {% parameter 'status' 'No' 'Must be either paid, unpaid, refunded, deferred, canceled. This is used to specify what kind of invoice you would like returned.' %}
{% endparameters %}

{% info %}
These are Reseller Only APIs. For more information, see [Reseller Overview](https://sendgrid.com/docs/API_Reference/Web_API/Reseller_API/index.html).
{% endinfo %}

{% apiexample get POST https://api.sendgrid.com/api/billing.list api_user=your_sendgrid_username&api_key=your_sendgrid_password&status=pai %}
  {% response json %}
[
  {
    "number": "2010010001"
  },
  {
    "number": "2010010002"
  }
]
  {% endresponse %}
  {% response xml %}
<invoices>
   <invoice>
      <number>2010010001</number>
   </invoice>
   <invoice>
      <number>2010010002</number>
   </invoice>
</invoices>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Retrieve Invoices 
{% endanchor %}

Return an array of invoices.


{% parameters invoices %}
 {% parameter 'start_date' 'No' 'Must be in YYYY-mm-dd format. This is the start date to begin your invoice search from.' %}
 {% parameter 'end_date' 'No' 'Must be in YYYY-mm-dd format and also include a start_date in the API call. This is the end date you wish to end your invoice search from.' %}
 {% parameter 'status' 'No' 'Must be either paid, unpaid, refunded, deferred, canceled. This is used to specify what kind of invoice you would like returned.' %}
{% endparameters %}


{% apiexample invoices POST https://api.sendgrid.com/api/billing.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&status=pai %}
  {% response json %}
{
  "number": "2010010001",
  "package": "Basic Package",
  "credits": 10000000,
  "date_invoiced": "2010-01-01 00:00:00",
  "status": "Paid",
  "amount": 100,
  "additional_charges": 0,
  "overage": 10,
  "type": "Recurring Bill",
  "prorated": 0,
  "start_date": "2009-12-01",
  "end_date": "2009-12-31",
  "final_amount": 110
}
  {% endresponse %}
  {% response xml %}
<invoices>
   <invoice>
      <number>2010010001</number>
      <package>Basic Package</package>
      <credits>10000000</credits>
      <date_invoiced>2010-01-01 00:00:00</date_invoiced>
      <status>Paid</status>
      <amount>100</amount>
      <additional_charges>0</additional_charges>
      <overage>10</overage>
      <type>Recurring Bill</type>
      <prorated>0</prorated>
      <start_date>2009-12-01</start_date>
      <end_date>2009-12-31</end_date>
      <final_amount>110</final_amount>
   </invoice>
</invoices>

  {% endresponse %}
{% endapiexample %}
