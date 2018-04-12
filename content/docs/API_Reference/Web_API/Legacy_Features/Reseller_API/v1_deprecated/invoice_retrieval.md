---
layout: page
weight: 0
title: Invoice Retrieval
seo:
  robots: NOINDEX, FOLLOW
navigation:
   show: true
---

Retrieve your invoice information.

* * * * *

<page-anchor el="h2">
Retrieve Invoice Numbers
</page-anchor>

Return an array of invoice numbers to your account.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>start_date</td>
         <td>No</td>
         <td>Must be in YYYY-mm-dd format. This is the start date to begin your invoice search from.</td>
      </tr>
      <tr>
         <td>end_date</td>
         <td>No</td>
         <td>Must be in YYYY-mm-dd format and also include a start_date in the API call. This is the end date you wish to end your invoice search from.</td>
      </tr>
      <tr>
         <td>status</td>
         <td>No</td>
         <td>Must be either paid, unpaid, refunded, deferred, canceled. This is used to specify what kind of invoice you would like returned.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/billing.list.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&status=pai
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
invoices><invoice><number>2010010001</number></invoice><invoice><number>2010010002</number></invoice></invoices
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/billing.list.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;status=pai
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"number":"2010010001"},{"number":"2010010002"}
{% endcodeblock %}

* * * * *

<page-anchor el="h2">
Retrieve Invoices
</page-anchor>

Return an array of invoices.

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>start_date</td>
         <td>No</td>
         <td>Must be in YYYY-mm-dd format. This is the start date to begin your invoice search from.</td>
      </tr>
      <tr>
         <td>end_date</td>
         <td>No</td>
         <td>Must be in YYYY-mm-dd format and also include a start_date in the API call. This is the end date you wish to end your invoice search from.</td>
      </tr>
      <tr>
         <td>status</td>
         <td>No</td>
         <td>Must be either paid, unpaid, refunded, deferred, canceled. This is used to specify what kind of invoice you would like returned.</td>
      </tr>
   </tbody>
</table>

### XML Call

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/billing.get.xml
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&api_key=your_sendgrid_password&status=pai
  {% endrequestdata %}

{% endrequestblock %}

### Response

{% codeblock %}
invoices><invoice><number>2010010001</number><package>Basic Package</package><credits>10000000</credits><date_invoiced>2010-01-01 00:00:00</date_invoiced><status>Paid</status><amount>100</amount><additional_charges>0</additional_charges><overage>10</overage><type>Recurring Bill</type><prorated>0</prorated><start_date>2009-12-01</start_date><end_date>2009-12-31</end_date><final_amount>110</final_amount></invoice></invoices
{% endcodeblock %}
<h3>JSON Call</h3>

{% requestblock %}

  {% requesturl POST %}https://api.sendgrid.com/api/billing.get.json
  {% endrequesturl %}

  {% requestdata Data POST %}api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password&amp;status=pai
  {% endrequestdata %}

{% endrequestblock %}

<h3>Response</h3>
{% codeblock %}
{"number":"2010010001","package":"Basic Package","credits":10000000,"date_invoiced":"2010-01-01 00:00:00","status":"Paid","amount":100,"additional_charges":0,"overage":10,"type":"Recurring Bill","prorated":0,"start_date":"2009-12-01","end_date":"2009-12-31","final_amount":110}
{% endcodeblock %}
