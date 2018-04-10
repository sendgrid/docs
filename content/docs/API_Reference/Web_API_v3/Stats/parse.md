---
layout: page
title: Parse Webhook Stats
weight: 95
navigation:
  show: true
---

Parse Webhook Stats provide statistics on your [Parse Webhook]({{root_url}}/API_Reference/Webhooks/parse.html) usage.

{% anchor h2 %}
GET
{% endanchor %}

Gets statistics for Parse Webhook usage.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/user/webhooks/parse/stats?start_date=2015-01-01&end_date=2015-01-02&aggregated_by=week %}
{% v3response %}
[
  {
    "date": "2015-01-01",
    "stats": [
      {
        "metrics": {
          "received": 10
        }
      }
    ]
  },
  {
    "date": "2015-01-02",
    "stats": [
      {
        "metrics": {
          "received": 5
        }
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}
