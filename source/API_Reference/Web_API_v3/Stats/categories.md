---
layout: page
title: Category Stats
weight: 98
navigation:
  show: true
---

Category Stats provide all of your user's email statistics for your categories. Category Stats (and all statistics) are only available for the last 3 years.

{% anchor h2 %}
GET statistics
{% endanchor %}

Gets email statistics for the given categories. If you don't pass any parameters, the endpoint will return a sum for each category 10 at a time.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter categories Yes 'String' 'The categories to get statistics for, up to 10' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/categories/stats?start_date=2015-01-01&end_date=2015-01-02&categories=cat1&categories=cat2 %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2015-01-01",
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
        },
        "name": "cat1",
        "type": "category"
      },
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
        },
        "name": "cat2",
        "type": "category"
      }
    ]
  },
  {
    "date": "2015-01-02",
    "stats": [
      {
        "metrics": {
          "blocks": 10,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 10,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        },
        "name": "cat1",
        "type": "category"
      },
      {
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 6,
          "deferred": 0,
          "delivered": 5,
          "invalid_emails": 0,
          "opens": 6,
          "processed": 0,
          "requests": 5,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 5,
          "unique_opens": 5,
          "unsubscribe_drops": 0,
          "unsubscribes": 6
        },
        "name": "cat2",
        "type": "category"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET Sums
{% endanchor %}

Gets the total sums of each email statistic metric for all categories over the given date range.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregate_by No 'Must be day|week|month' 'How to group the statistics' %}
  {% parameter sort_by_metric No 'A single metric' 'The metric that you want to sort by. Defaults to delivered.' %}
 {% parameter sort_by_direction No '[desc|asc]' 'The direction you want to sort. Defaults to desc.' %}
 {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned. Defaults to 5.' %}
 {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from. Defaults to 0.' %}
{% endparameters %}

{% apiv3example get GET /v3/categories/stats/sums?start_date={start_date}&end_date={end_date}&aggregated_by={aggregated_by}&sort_by_metric={sort_by_metric}&sort_by_direction={sort_by_direction}&limit={limit}&offset={offset} %}
{% v3response %}
HTTP/1.1 200
{
  "date": "2015-01-01",
  "stats": [
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 20,
        "deferred": 0,
        "delivered": 20,
        "invalid_emails": 0,
        "opens": 20,
        "processed": 0,
        "requests": 20,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 20,
        "unique_opens": 20,
        "unsubscribe_drops": 0,
        "unsubscribes": 20
      },
      "name": "cat1",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 1,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 19,
        "deferred": 0,
        "delivered": 19,
        "invalid_emails": 0,
        "opens": 19,
        "processed": 0,
        "requests": 20,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 19,
        "unique_opens": 19,
        "unsubscribe_drops": 0,
        "unsubscribes": 19
      },
      "name": "cat2",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 5,
        "deferred": 0,
        "delivered": 5,
        "invalid_emails": 0,
        "opens": 5,
        "processed": 0,
        "requests": 5,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 5,
        "unique_opens": 5,
        "unsubscribe_drops": 0,
        "unsubscribes": 5
      },
      "name": "cat3",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 6,
        "deferred": 0,
        "delivered": 5,
        "invalid_emails": 0,
        "opens": 6,
        "processed": 0,
        "requests": 5,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 5,
        "unique_opens": 5,
        "unsubscribe_drops": 0,
        "unsubscribes": 6
      },
      "name": "cat4",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 10,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 0,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 0,
        "processed": 0,
        "requests": 10,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "cat5",
      "type": "category"
    }
  ]
}
{% endv3response %}
{% endapiv3example %}
