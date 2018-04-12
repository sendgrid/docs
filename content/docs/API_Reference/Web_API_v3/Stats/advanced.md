---
layout: page
title: Advanced Stats
weight: 96
navigation:
  show: true
---

{% info %}
We store 7 days of email activity in our database and the default is 500 items returned per request via these API endpoints.
{% endinfo %}

Advanced Stats provide a more in-depth view of your statistics and the actions of the recipients segmented by geography, browser type, and more. You can read more about them in the [Statistics]({{root_url}}/User_Guide/Statistics/index.html) section of our User Guide.

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics by country and state/province.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter country No 'US|CA' 'See statistics for a given country. Only supported for US and CA.' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/geo/stats?start_date=2015-01-01&end_date=2015-01-02 %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "opens": 1,
          "unique_clicks": 0,
          "unique_opens": 1
        },
        "name": "US",
        "type": "country"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        },
        "name": "US",
        "type": "country"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics by device type.

Available device types:

<table class="table table-striped">
  <tr>
    <th>Device</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Desktop</td>
    <td>Email software on desktop computer I.E. Outlook, Sparrow, or
      Apple Mail.</td>
  </tr>
  <tr>
    <td>Webmail</td>
    <td>A web-based email client I.E. Yahoo, Google, AOL, or
      Outlook.com.</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>A smart phone; iPhone, Android, Blackberry, etc.</td>
  </tr>
  <tr>
    <td>Tablet</td>
    <td>A tablet computer: iPad, android based tablet, etc.</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>An unrecognized Device.</td>
  </tr>
</table>

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/devices/stats?start_date=2015-01-01&end_date=2015-01-02&aggregated_by=week %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        },
        "name": "Webmail",
        "type": "device"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        },
        "name": "Webmail",
        "type": "device"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics by client type.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/clients/stats?start_date=2015-01-01&end_date=2015-01-02&aggregated_by=week %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics for a single client type.

{% parameters get %}
 {% parameter client_type Yes 'phone|tablet|webmail|desktop' 'Specifies the type of client to retrieve stats for.' %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/clients/:client_type/stats?start_date=2015-01-01&end_date=2015-01-02&aggregated_by=week %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics by mailbox provider.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter mailbox_providers No 'Array of strings' 'The mailbox providers to get statistics for, up to 10' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/mailbox_providers/stats?start_date=2015-01-01&end_date=2015-01-02 %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "blocks": 1,
          "bounces": 0,
          "clicks": 0,
          "deferred": 1,
          "delivered": 1,
          "drops": 0,
          "opens": 1,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 1
        },
        "name": "Gmail",
        "type": "esp"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        },
        "name": "Gmail",
        "type": "esp"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>

Gets email statistics by browser. You can add multiple browsers to the URL, by using the `browsers` parameter multiple times.

{% parameters get %}
 {% parameter start_date Yes 'Date formatted as YYYY-MM-DD' 'The starting date of the statistics to retrieve' %}
 {% parameter end_date No 'Date formatted as YYYY-MM-DD' 'The end date of the statistics to retrieve. Defaults to today.' %}
 {% parameter aggregated_by No 'Must be day|week|month' 'How to group the statistics' %}
 {% parameter browsers No 'Array of strings' 'The browsers to get statistics for, up to 10' %}
{% endparameters %}

{% apiv3example get GET https://api.sendgrid.com/v3/browsers/stats?start_date=2015-01-01&end_date=2015-01-02&aggregated_by=week %}
{% v3response %}
HTTP/1.1 200
[
  {
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "unique_clicks": 0
        },
        "name": "Chrome",
        "type": "browser"
      },
      {
        "metrics": {
          "clicks": 1,
          "unique_clicks": 1
        },
        "name": "Firefox",
        "type": "browser"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "unique_clicks": 0
        },
        "name": "Chrome",
        "type": "browser"
      },
      {
        "metrics": {
          "clicks": 1,
          "unique_clicks": 1
        },
        "name": "Firefox",
        "type": "browser"
      }
    ]
  }
]
{% endv3response %}
{% endapiv3example %}
