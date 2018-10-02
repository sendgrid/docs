---
layout: page
title: Subuser Stats
weight: 97
navigation:
  show: true
---

Subuser Stats provide all of your user's email statistics for your subuser accounts.

{% anchor h2 %}
GET
{% endanchor %}

Gets email statistics for the given subusers. You can add up to 10 `subusers` parameters, one for each subuser you want statistics for.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter subusers Yes 'Array of strings' 'The subusers to get statistics for, up to 10' %}
{% endparameters %}

{% apiv3example get GET /v3/subusers/stats?subusers={subusers}&subusers={subusers}&start_date={start_date}&end_date={end_date}&aggregated_by={aggregated_by} %}
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
        "name": "user1",
        "type": "subuser"
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
        "name": "user2",
        "type": "subuser"
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
        "name": "user1",
        "type": "subuser"
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
        "name": "user2",
        "type": "subuser"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}

Gets the total sums of each email statistic metric for all subusers over the given date range.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter sort_by_metric No 'A single metric' 'The metric that you want to sort by. Defaults to delivered.' %}
 {% parameter sort_by_direction No '[desc|asc]' 'The direction you want to sort. Defaults to desc.' %}
 {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned. Defaults to 5.' %}
 {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from. Defaults to 0.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/subusers/stats/sums?start_date=2015-01-01&end_date=2015-01-02 %}
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
      "name": "user1",
      "type": "subuser"
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
      "name": "user2",
      "type": "subuser"
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
      "name": "user3",
      "type": "subuser"
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
      "name": "user4",
      "type": "subuser"
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
      "name": "user5",
      "type": "subuser"
    }
  ]
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
GET
{% endanchor %}

Retrieve the monthly email statistics for all subusers over the given date range.

When using the `sort_by_metric` to sort your statistics by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

{% parameters get %}
 {% parameter date Yes 'Date formatted as YYYY-MM-DD' 'The date of the month to retrieve statistics.' %}
 {% parameter subuser No String 'A substring search of your subusers.' %}
 {% parameter sort_by_metric No 'A single metric' 'The metric that you want to sort by. Defaults to delivered. Other metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.' %}
 {% parameter sort_by_direction No '[desc|asc]' 'The direction you want to sort. Defaults to desc.' %}
 {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned. Defaults to 5.' %}
 {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from. Defaults to 0.' %}
{% endparameters %}

{% apiv3example get GET /subusers/stats/monthly?date={date}&subuser={subuser}&sort_by_metric={sort_by_metric}&sort_by_direction={sort_by_direction}&limit={limit}&offset={offset} %}
{% v3response %}
HTTP/1.1 200

{
  "date": "2016-02-01",
  "stats": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 1,
          "processed": 0,
          "requests": 100,
          "spam_report_drops": 0,
          "spam_reports": 99,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
      },
      "name": "user1",
      "type": "subuser"
    },
    {
      "first_name": "Jane",
      "last_name": "Doe",
      "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 5,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 10,
          "processed": 10,
          "requests": 10,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
      },
      "name": "user2",
      "type": "subuser"
    }
  ]
}

{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
GET
{% endanchor %}

Retrieve the monthly email statistics for a single subuser.

When using the `sort_by_metric` to sort your statistics by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

{% parameters get %}
 {% parameter date Yes 'Date formatted as YYYY-MM-DD' 'The date of the month to retrieve statistics.' %}
 {% parameter sort_by_metric No 'A single metric' 'The metric that you want to sort by. Defaults to delivered. Other metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.' %}
 {% parameter sort_by_direction No '[desc|asc]' 'The direction you want to sort. Defaults to desc.' %}
 {% parameter limit No 'Some integer.' 'Optional field to limit the number of results returned. Defaults to 5.' %}
 {% parameter offset No 'Some integer.' 'Optional beginning point in the list to retrieve from. Defaults to 0.' %}
{% endparameters %}

{% apiv3example get GET /subusers/:subuser_name/stats/monthly?date={date}&subuser={subuser}&sort_by_metric={sort_by_metric}&sort_by_direction={sort_by_direction}&limit={limit}&offset={offset} %}
{% v3response %}
HTTP/1.1 200

{
  "date": "2016-02-01",
  "stats": [
      {
        "first_name": "John",
        "last_name": "Doe",
        "metrics": {
            "blocks": 0,
            "bounce_drops": 0,
            "bounces": 0,
            "clicks": 5,
            "deferred": 0,
            "delivered": 0,
            "invalid_emails": 0,
            "opens": 10,
            "processed": 10,
            "requests": 10,
            "spam_report_drops": 0,
            "spam_reports": 0,
            "unique_clicks": 0,
            "unique_opens": 0,
            "unsubscribe_drops": 0,
            "unsubscribes": 0
        },
        "name": "user1",
        "type": "subuser"
      }
  ]
}

{% endv3response %}
{% endapiv3example %}
