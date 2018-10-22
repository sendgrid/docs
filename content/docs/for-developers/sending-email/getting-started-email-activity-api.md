---
seo:
 title: Getting Started with the Email Activity Feed API
 description: Use the Email Activity Feed query language to get started with the Email Activity Feed API.
 keywords: email activity, query language, email stats, email events
title: Getting Started with the Email Activity Feed API
group: sending-email
weight: 0
layout: page
navigation:
 show: true
---
<call-out>

In order to gain access to the Email Activity Feed API, you must purchase [additional email activity history](https://app.sendgrid.com/settings/billing/addons/email_activity).

</call-out>

The API gives you access to query all of your stored messages, to query individual messages, and to download a CSV with data about the stored messages.

## 	Getting started

Start with this basic query to the Email Activity Feed API (replace `<<your API key>>` with an API key from your account):

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10' \
 --header 'authorization: Bearer <<your API key>>'
```

This returns a list of the 10 most recent emails you've sent. Next, check out some of the common use cases to narrow down your search.

 ### 	Encoding queries

All queries need to be [URL encoded](https://meyerweb.com/eric/tools/dencoder/), and have this format:

`query={query_type}="{query_content}"`

Encoded, this query would look like this:

`query=query_type%3D%22query_content%22`

## 	Queries for common use cases

Here are some queries for common use cases. For a full list of possible query types, see the [query reference](#query-reference).

 ### 	Filter by subject

Use this query to filter by email subject (replace `<<your API key>>` with an API key from your account, and replace <<subject>> with the subject you want to search):

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=subject%3D<<subject>>' \
 --header 'authorization: Bearer <<your API key>>'
```

Subject queries have this format:

`subject="This is a subject test"`

Encoded, this query would look like this:

`subject%3D%22This%20is%20a%20subject%20test%22`

 ### 	Filter by recipient email

Use this query to filter by a recipient's email: (replace `<<your API key>>` with an API key from your account, and replace <<email>> with the URL encoded recipients email):

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=to_email%3D%22<<email>>%22' \
 --header 'authorization: Bearer <<your API key>>'
```

Recipient email queries have this format:

`to_email="example@example.com"`

Encoded, this query would look like this:

`to_email%3D%22example%40example.com%22`

 ### 	Filter by bounced emails

Use this query to filter by all bounced emails: (replace `<<your API key>>` with an API key from your account):

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=status%3D%22bounced%22' \
 --header 'authorization: Bearer <<your API key>>'
```

Subject queries have this format:

`status="bounced"`

Encoded, this query would look like this:

`status%3D%22bounced%22`

## 	Creating compound queries

Use [operators and keywords](#keywords-and-operator-reference) to combine queries for a compound query. For example, you could filter for emails between a date range, or you could filter for when a specific recipients email is bounced. Here are some common use cases:

 ### 	Filter by a recipient email that was bounced

Use this query to filter by a recipient's email and by emails that are bounced: (replace `<<your API key>>` with an API key from your account, and replace <<email>> with the URL encoded recipients email):

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=status%3D%22bounced%22%20AND%20to_email%3D%22<<email>>%22' \
 --header 'authorization: Bearer <<your API key>>'
```

 ### 	Filter by date range

Use this query to filter to emails between specific dates: (replace `<<your API key>>` with an API key from your account, and replace {start_date} and {end_date} with a URL encoded UTC date string in this format: `YYYY-MM-DD HH:mm:SS`. Encoded, this looks like this: `2018-02-01T00%3A00%3A00.000Z`)

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=last_event_time%20BETWEEN%20TIMESTAMP%20%{start_date}%22%20AND%20TIMESTAMP%20%22{end_date}%22' \
 --header 'authorization: Bearer <<your API key>>'
```

 ### 	Filter by a recipient and a date range

Use this query to filter to emails by recipient and between specific dates: (replace `<<your API key>>` with an API key from your account, replace <<start_date>> and <<end_date>> with a URL encoded UTC date string in this format: `YYYY-MM-DD HH:mm:SS`, and replace <<email>> with the URL encoded recipient's email)

```
curl --request GET \
 --url 'https://api.sendgrid.com/v3/messages?limit=10&query=last_event_time%20BETWEEN%20TIMESTAMP%20%{start_date}%22%20AND%20TIMESTAMP%20%22{end_date}%22AND%20to_email%3D%22<<email>>%22' \
 --header 'authorization: Bearer <<your API key>>'
```

## 	Keywords and Operator reference

There are several operators and keywords that you can use to build [Compound queries](#creating-compound-queries). Use these operators between query statements. If the character used as the delimiter if it is found within the string. The escape character is `\`, which must be escaped with a preceding `\`. All queries need to be URL encoded.

*This is a full list of accepted operators and keywords:*

- `=`
- `!=`
- `<`
- `>`
- `<=`
- `>=`
- `-` - to
- `+`
- `/`
- `*`
- `-` - subtraction
- AND
- BETWEEN
- NOT BETWEEN
- DAY
- FALSE
- HOUR
- IN
- NOT IN
- INTERVAL
- IS
- IS NOT
- LIKE
- NOT LIKE
- MINUTE
- MONTH
- NOT
- NULL
- OR
- SECOND
- TIMESTAMP
- TRUE
- YEAR


## 	Query reference

This is a full list of basic query types and examples: (replace the data in quotes with the information you want to query, and then URL encode it)

<table class="table" style="table-layout:fixed">
 <tr>
   <th><b>Query</b></th>
   <th><b>Unencoded example</b></th>
 </tr>
 <tr>
   <td><code>msg_id</code></td>
   <td><code>msg_id="filter0307p1las1-16816-5A023E36-1.0"</code></td>
 </tr>
 <tr>
   <td><code>from_email</code></td>
   <td><code>from_email="testing@sendgrid.net"</code></td>
 </tr>
 <tr>
   <td><code>subject</code></td>
   <td><code>subject="This is a subject test"</code></td>
 </tr>
 <tr>
   <td><code>to_email</code></td>
   <td><code>to_email="example@example.com"</code></td>
 </tr>
 <tr>
   <td><code>status</code></td>
   <td><code>status="processed"</code></td>
 </tr>
 <tr>
   <td><code>template_id</code></td>
   <td><code>template_id="8f0d27bc-cf8f-42d3-b951-3990af7d0619"</code></td>
 </tr>
 <tr>
   <td><code>template_name</code></td>
   <td><code>template_name="example_template"</code></td>
 </tr>
 <tr>
   <td><code>campaign_name</code></td>
   <td><code>campaign_name="example_campaign"</code></td>
 </tr>
 <tr>
   <td><code>campaign_id</code></td>
   <td><code>campaign_id="1453849"</code></td>
 </tr>
 <tr>
   <td><code>api_key_id</code></td>
   <td><code>api_key_id="SG.xxxxxxxxxxxxxxxx"</code> (everything before the middle dot in the API key)</td>
 </tr>
 <tr>
   <td><code>api_key_name</code></td>
   <td><code>api_key_name="test_name"</code></td>
 </tr>
 <tr>
   <td><code>events</code></td>
   <td><code>status="processed"</code></td>
 </tr>
 <tr>
   <td><code>originating_ip</code> - this is the IP address of the person sending the message</td>
   <td><code>originating_ip="4.77.777.77"</code></td>
 <tr>
   <td><code>categories</code> - custom tags that you create</td>
   <td><code>categories="category_example"</code></td>
 </tr>
 <tr>
   <td><code>unique_args</code> - custom tracking arguments that you can attach to SMTP API calls</td>
   <td><code>unique_args="example argument"</code></td>
 </tr>
 <tr>
   <td><code>outbound_ip</code> - this is the SendGrid dedicated IP address used to send the email</td>
   <td><code>outbound_ip="4.77.777.77"</code></td>
 </tr>
 <tr>
   <td><code>last_event_time</code></td>
   <td><code>last_event_time="2017-11-07T23:13:58Z"</code></td>
 </tr>
 <tr>
   <td><code>clicks</code></td>
   <td><code>clicks="0"</code></td>
 </tr>
 <tr>
   <td><code>unsubscribe_group_name</code></td>
   <td><code>unsubscribe_group_name="Global Unsubscribes"</code></td>
 </tr>
 <tr>
   <td><code>unsubscribe_group_id</code></td>
   <td><code>unsubscribe_group_id="1041"</code></td>
 </tr>
 <tr>
   <td><code>teammate</code> - teammates username</td>
   <td><code>teammate="my_username"</code></td>
 </tr>
</table>

## 	Additional Resources

- [Email Activity Feed API Reference](https://sendgrid.api-docs.io/v3.0/email-activity/filter-all-messages)
- [Email Activity Feed UI]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/)
