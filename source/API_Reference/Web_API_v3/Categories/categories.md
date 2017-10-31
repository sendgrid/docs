---
layout: page
title: Categories
weight: 100
navigation:
  show: true
---

Categories API lets you manage your [categories]({{root_url}}/User_Guide/Email_Settings/categories.html).

{% anchor h2 %}
GET
{% endanchor %}

Retrieve a list of your categories.

{% parameters get %}
 {% parameter category No 'A string' 'Performs a prefix search on this value.' %}
 {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned. Defaults to 50.' %}
 {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from. Defaults to 0.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/categories %}
{% v3response %}
HTTP/1.1 200
[
  {"category": "cat1"},
  {"category": "cat2"},
  {"category": "cat3"},
  {"category": "cat4"},
  {"category": "cat5"}
]
{% endv3response %}
{% endapiv3example %}
