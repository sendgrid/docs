---
layout: page
weight: 0
title: Unsubscribes
navigation:
  show: true
---

Retrieve, delete and add entries in the Unsubscribes list.

<page-anchor el="h2">
get
</page-anchor>

Retrieve a list of Unsubscribes with addresses and optionally with dates.

{% parameters get %}
  {% parameter date No 'Must be set to 1.' 'Retrieve the timestamp of the unsubscribe records. It will return a date in a MySQL timestamp format - YYYY-MM-DD HH:MM:SS.' %}
  {% parameter days No 'If specified, must be an integer greater than 0.' 'Number of days in the past for which to retrieve unsubscribes (includes today).' %}
  {% parameter start_date No 'Date must be in YYYY-MM-DD format and be earlier than the end_date parameter.' 'The start of the date range for which to retrieve unsubscribes.' %}
  {% parameter end_date No 'Date must be in YYYY-MM-DD format and be later than the start_date parameter.' 'The end of the date range for which to retrieve unsubscribes.' %}
  {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned.' %}
  {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from.' %}
  {% parameter email No 'Email address eg testing@example.com.' 'Optional email addresses to search for.' %}
{% endparameters %}

{% apiexample get GET https://api.sendgrid.com/api/unsubscribes.get api_user=your_sendgrid_username&api_key=your_sendgrid_password&date=1 %}
  {% response json %}
[
  {
    "email": "example@example.com",
    "created": "2012-09-06 14:03:18"
  }
]
  {% endresponse %}
  {% response xml %}
<unsubscribes>
   <unsubscribe>
      <email>example@example.com</email>
      <created>2012-09-06 14:03:18</created>
   </unsubscribe>
</unsubscribes>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
delete
</page-anchor>

Delete an address from the Unsubscribe list. Use `delete_all=1` in order to delete all addresses from your unsubscribe list.

{% parameters delete %}
  {% parameter email No 'Must be a valid user account email.' 'Unsubscribed email address to remove.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/unsubscribes.delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=emailToDelete@domain.com %}
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
add
</page-anchor>

Add email addresses to the Unsubscribe list.

{% parameters add %}
  {% parameter email Yes 'Must be a valid email address.' 'Email address to add to unsubscribe list.' %}
{% endparameters %}

{% apiexample add POST https://api.sendgrid.com/api/unsubscribes.add api_user=your_sendgrid_username&api_key=your_sendgrid_password&email=email2@domain.com %}
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
