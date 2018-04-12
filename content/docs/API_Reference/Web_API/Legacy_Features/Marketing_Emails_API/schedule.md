---
layout: page
weight: 0
title: Schedule
seo:
  title: Schedule Marketing Emails by API - SendGrid Documentation | SendGrid
  description: Schedule SendGrid marketing emails using the schedule endpoint of the SendGrid Marketing Email API.
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

This endpoint allows you to add, view, or remove scheduled delivery events for Marketing Emails.

{% info %}
If you wish to send a marketing email immediately, leave off the **at** and **after** parameters.
{% endinfo %}

<page-anchor el="h2">
add
</page-anchor>

Schedule a delivery time for an existing Marketing Email.


{% parameters add %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email.' 'Marketing Email to schedule delivery for. (If Marketing Email should be sent now, include no additional parameters.)' %}
 {% parameter 'at' 'No' 'Date / Time must be provided in ISO 8601 format (YYYY-MM-DDTHH:MM:SS+-HH:MM)' 'Date / Time to schedule marketing email Delivery.' %}
 {% parameter 'after' 'No' 'Must be a positive integer.' 'Number of minutes until delivery should occur.' %}
{% endparameters %}


{% apiexample add POST https://api.sendgrid.com/api/newsletter/schedule/add name=test&at=2013-12-20T11:55:00-05:00&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
get
</page-anchor>

Retrieve the scheduled delivery time for an existing Marketing Email.


{% parameters get %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email.' 'Retrieve the delivery time scheduled for this Marketing Email.' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/newsletter/schedule/get name=SendGrid_Test2&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "date": "2012-09-05 21:22:02"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Cancel a scheduled send for a Marketing Email.


{% parameters delete %}
 {% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'Remove the scheduled delivery time from an existing Marketing Email.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/api/newsletter/schedule/delete name=test&api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
