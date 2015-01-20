---
layout: page
title: Global Stats
weight: 99
navigation:
  show: true
---

Global Stats provide all of your user's email statistics for a given date range.

{% anchor h2 %}
GET
{% endanchor %}

Gets email statistics.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/stats?start_date=2015-01-01&end_date=2015-01-02 %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2015-01-01",
    "stats": [
      {
        "metrics": {
          "blocks": 1,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 1,
          "delivered": 1,
          "invalid_emails": 1,
          "opens": 1,
          "processed": 2,
          "requests": 3,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 1,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-01-02",
    "stats": [
      {
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}
