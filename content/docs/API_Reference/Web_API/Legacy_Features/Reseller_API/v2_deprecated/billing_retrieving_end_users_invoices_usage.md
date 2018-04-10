---
layout: page
weight: 0
title: Retrieving Invoice Usage deprecated
navigation:
   show: true
---

{% warning %}
This endpoint has been deprecated. Please do not use it in new development.
{% endwarning %}

Retrieve invoices/usages from customers.

{% parameters get %}
{% parameter 'task' 'Yes' 'Must be set to <em>usage</em> .' %}
{% parameter 'number' 'Yes' 'Must be the invoice number you received from SendGrid.' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.billing api_user=your_sendgrid_username&api_key=your_sendgrid_password&number=2010010001&task=usage %}
{% response json %}
{
"number": "2010010001",
"invoices": [
{
"number": "201001000100",
"credits": 123456,
"date_invoiced": "2010-09-0100:00:00",
"status": "Unpaid",
"amount": 1001,
"overage": 6.95,
"type": "Recurring Bill",
"prorated": 0,
"start_date": "2010-08-01",
"end_date": "2010-08-31",
"username": "example@example.com",
"package": "Example Package",
"additional_charges": 0,
"final_amount": 1007.95
},
{
"number": "201001000200",
"credits": "1333",
"date_invoiced": "2010-09-05 00:00:00",
"status": "Unpaid",
"amount": 13.95,
"overage": 0,
"type": "Recurring Bill",
"prorated": 0,
"start_date": "2010-08-01",
"end_date": "2010-08-31",
"username": "user5@example.com",
"package": "Example Package",
"additional_charges": 0,
"final_amount": 13.95
}
]
}
{% endresponse %}
{% response xml %}
<usage>
<number>2010010001</number>
<invoices>
<invoice>
<number>201001000100</number>
<credits>123456</credits>
<date_invoiced>2010-09-01 00:00:00</date_invoiced>
<status>Unpaid</status>
<amount>1001</amount>
<overage>6.95</overage>
<type>Recurring Bill</type>
<prorated>0</prorated>
<start_date>2010-08-01</start_date>
<end_date>2010-08-31</end_date>
<username>example@example.com</username>
<package>Example Package</package>
<additional_charges>0</additional_charges>
<final_amount>1007.95</final_amount>
</invoice>
<invoice>
<number>201001000200</number>
<credits>1333</credits>
<date_invoiced>2010-09-05 00:00:00</date_invoiced>
<status>Unpaid</status>
<amount>13.95</amount>
<overage>0</overage>
<type>Recurring Bill</type>
<prorated>0</prorated>
<start_date>2010-08-01</start_date>
<end_date>2010-08-31</end_date>
<username>user5@example.com</username>
<package>Example Package</package>
<additional_charges>0</additional_charges>
<final_amount>13.95</final_amount>
</invoice>
</invoices>
</usage>

{% endresponse %}
{% endapiexample %}
