---
layout: page
weight: 0
title: Retrieving As-You-Go Usage (deprecated)
navigation:
   show: true
---

{% warning %}
This endpoint has been deprecated. Please do not use it in new development.
{% endwarning %}

Retrieve invoices/usages from end users before your scheduled billing date.


{% parameters get %}
 {% parameter 'task' 'Yes' 'Must be set to <em>current</em> .' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/apiv2/reseller.billing api_user=your_sendgrid_username&api_key=your_sendgrid_password&number=2010010001&task=current %}
  {% response json %}
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
}
  {% endresponse %}
  {% response xml %}
<usage>
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
   </invoices>
</usage>

  {% endresponse %}
{% endapiexample %}
