---
layout: page
weight: 0
title: Advanced Statistics
navigation:
  show: true
---

{% warning %}
This endpoint is being deprecated by the addition of the [v3 Advanced Statistics API]({{root_url}}/API_Reference/Web_API_v3/Stats/advanced.html).
{% endwarning %}

Advanced Statistics methods provide metrics on the browsers and devices that are opening emails, as well as providing statistics based on geographic location or ISP. 
{% anchor h2 %}
Get Statistics for: Browsers, Clients, Devices, Geo, Global, Isp 
{% endanchor %}


{% parameters get %}
 {% parameter 'data_type' 'Yes' 'One of the following:- *browsers*: Browser data obtained from click events- *clients*: Email client data obtained from open events- *devices*: Device data obtained from open events- *geo*: Geographical data obtained from multiple events- *global*: Global account data obtained from multiple events- *isps*: ISP data obtained from multiple events' %}
 {% parameter 'start_date' 'Yes' 'Date format is based on aggregated_by value (default is yyyy-mm-dd):- *yyyy-mm-dd* (i.e 2012-12-13) if aggregated_by=day (default)- *yyyy-ww* (i.e 2012-43) if aggregated_by=week- *yyyy-mm* (i.e 2012-11) if aggregated_by=month' %}
 {% parameter 'end_date' 'No' 'Date format is based on aggregated_by value (default is yyyy-mm-dd):- *yyyy-mm-dd* (i.e 2012-12-13) if aggregated_by=day (default)- *yyyy-ww* (i.e 2012-43) if aggregated_by=week- *yyyy-mm* (i.e 2012-11) if aggregated_by=month' %}
 {% parameter 'metric' 'No' 'One of the following (default is *all*):- *open*: Opens- *click*: Clicks- *unique_open*: Unique opens- *unique_click*: Unique clicks- *processed*: Processed emails- *delivered*: Delivered emails- *drop*: Dropped emails- *bounce*: Bounced emails- *deferred*: Deferred email tries- *spamreport*: Emails marked as spam- *blocked*: Emails that have been blocked- *all*: All metrics are returned' %}
 {% parameter 'category' 'No' 'Return stats for the given category' %}
 {% parameter 'aggregated_by' 'No' 'Aggregate the data by the given period (default is *day*):- *day*: Keys are returned in the format yyyy-mm-dd (i.e 2012-12-13)- *week*: Keys are return in the format yyyy-ww (i.e 2012-43)- *month*: Keys are return in the format yyyy-mm (i.e 2012-11)' %}
 {% parameter 'country' 'No' 'Get stats for each region/state for the given country. Only *US* (United States) and *CA* (Canada) is supported at this time. Country code is two letter characters based on [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) <p>This parameter is only used for when *data_type=geo*</p>' %}
{% endparameters %}


{% apiexample get POST https://api.sendgrid.com/api/stats.getAdvanced api_user=your_sendgrid_username&api_key=your_sendgrid_password&start_date=2013-01-01&end_date=2013-01-02&data_type=global %}
  {% response json %}
[
  {
    "delivered": 41,
    "request": 41,
    "unique_open": 1,
    "unique_click": 1,
    "processed": 41,
    "date": "2013-01-01",
    "open": 2,
    "click": 1
  },
  {
    "delivered": 224,
    "unique_open": 1,
    "request": 224,
    "processed": 224,
    "date": "2013-01-02",
    "open": 3
  }
]
  {% endresponse %}
  {% response xml %}
<stats>
   <day>
      <delivered>41</delivered>
      <request>41</request>
      <unique_open>1</unique_open>
      <unique_click>1</unique_click>
      <processed>41</processed>
      <date>2013-01-01</date>
      <open>2</open>
      <click>1</click>
   </day>
   <day>
      <delivered>224</delivered>
      <unique_open>1</unique_open>
      <request>224</request>
      <processed>224</processed>
      <date>2013-01-02</date>
      <open>3</open>
   </day>
</stats>

  {% endresponse %}
{% endapiexample %}
