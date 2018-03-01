---
seo:
  title: Getting Started with the Email Activity API (beta)
  description: Use the Email Activity query language to get started with the Email Activity API.
  keywords: email activity, query language, email stats, email events
title: Getting Started with the Email Activity API (beta)
weight: 0
layout: page
navigation:
  show: true
---
{% warning %}
Email Activity is in beta and you may not have access - we are currently in the process of rolling out access. For more information, see the [Release Notes]({{root_url}}/release_notes.html#-Email-Activity-Feed-Beta). The feature may also change at any time without notice.
{% endwarning %}

- [Getting started](#-Getting-started)
    - [Encoding queries](#-Encoding-queries)
- [Queries for common use cases](#-Queries-for-common-use-cases)
- [Query reference](#-Query-reference)

The API gives you access to query all of your stored messages, to query individual messages, and to download a CSV with data about the stored messages.

{% anchor h2 %}
Getting started
{% endanchor %}

Start with this basic query to the Email Activity API (replace `<<your API key>>` with an API key from your account):

{% codeblock %}
curl --request GET \
  --url 'http://api.sendgrid.com/v3/messages?limit=10' \
  --header 'authorization: Bearer <<your API key>>'
{% endcodeblock %}

This returns a list of the 10 most recent emails you've sent. Next, check out some of the common use cases to narrow down your search.

{% anchor h3 %}
Encoding queries
{% endanchor %}

All queries need to be [URL encoded](https://meyerweb.com/eric/tools/dencoder/), and have this format:

`query={query_type}="{query_content}"`

Encoded, this query would look like this:

`query=type%3D%22query_content%22`

{% anchor h2 %}
Queries for common use cases
{% endanchor %}

Here are some queries for common use cases. For a full list of possible query types, see the [query reference](#-Query-reference).

{% anchor h3 %}
Filter by subject
{% endanchor %}

Use this query to filter by email subject (replace `<<your API key>>` with an API key from your account, and replace <<subject>> with the subject you want to search):

{% codeblock %}
curl --request GET \
  --url 'http://api.sendgrid.com/v3/messages?limit=10&query=subject%3D<<subject>>' \
  --header 'authorization: Bearer <<your API key>>'
{% endcodeblock %}

Subject queries have this format:

`subject="This is a subject test"`

Encoded, this query would look like this:

`subject%3D%22This%20is%20a%20subject%20test%22`

{% anchor h3 %}
Filter by reciepeint email
{% endanchor %}

Use this query to filter by a recipents email: (replace `<<your API key>>` with an API key from your account, and replace <<email>> with the recepients email):

{% codeblock %}
curl --request GET \
  --url 'http://api.sendgrid.com/v3/messages?limit=10&query=to_email%3D<<email>>' \
  --header 'authorization: Bearer <<your API key>>'
{% endcodeblock %}

Subject queries have this format:

`to_email="example@example.com"`

Encoded, this query would look like this:

`to_email%3D%22example%40example.com%22`

{% anchor h3 %}
Filter by bounced emails
{% endanchor %}

Use this query to filter by a recipents email: (replace `<<your API key>>` with an API key from your account):

{% codeblock %}
curl --request GET \
  --url 'http://api.sendgrid.com/v3/messages?limit=10&query=status%3D%22bouced%22' \
  --header 'authorization: Bearer <<your API key>>'
{% endcodeblock %}

Subject queries have this format:

`status="bounced"`

Encoded, this query would look like this:

`status%3D%22bouced%22`

{% anchor h2 %}
Query reference
{% endanchor %}

<table>
  <tr>
    <th><b>Query</b></th>
    <th><b>Unencoded example</b> (put this one into the try it out query - it'll automatically encode it for you)</th>
    <th><b>Encoded example</b> (use this one in your code)</th>
  </tr>
  <tr>
    <td><code>msg_id</code></td>
    <td><code>msg_id=“filter0307p1las1-16816-5A023E36-1.0”</code></td>
    <td><code>msg_id%3D%22filter0307p1las1-16816-5A023E36-1.0%22</code></td>
  </tr>
  <tr>
    <td><code>from_email</code></td>
    <td><code>from_email=“testing@sendgrid.net”</code></td>
    <td><code>from_email%3D%22testing%40sendgrid.net%22</code></td>
  </tr>
  <tr>
    <td><code>subject</code></td>
    <td><code>subject="This is a subject test"</code></td>
    <td><code>subject%22This%20is%20a%20subject%20test%22</code></td>
  </tr>
  <tr>
    <td><code>to_email</code></td>
    <td><code>to_email="example@example.com"</code></td>
    <td><code>to_email%3D%22example%40example.com%22</code></td>
  </tr>
  <tr>
    <td><code>status</code></td>
    <td><code>status="processed"</code></td>
    <td><code>status%22processed%22</code></td>
  </tr>
  <tr>
    <td><code>template_id</code></td>
    <td><code>template_id="8f0d27bc-cf8f-42d3-b951-3990af7d0619"</code></td>
    <td><code>template_id%3D%228f0d27bc-cf8f-42d3-b951-3990af7d0619%22</code></td>
  </tr>
  <tr>
    <td><code>template_name</code></td>
    <td><code>template_name="example_template"</code></td>
    <td><code>template_name%3D%22example_template%22</code></td>
  </tr>
  <tr>
    <td><code>campaign_name</code></td>
    <td><code>campaign_name="example_campaign"</code></td>
    <td><code>campaign_name%3D%22example_campaign%22</code></td>
  </tr>
  <tr>
    <td><code>campaign_id</code></td>
    <td><code>campaign_id="1453849"</code></td>
    <td><code>campaign_id%3D%221453849%22</code></td>
  </tr>
  <tr>
    <td><code>api_key_id</code></td>
    <td><code>api_key_id="-hVjtoFgGUNPq3DPPPkJN3mCIDIwrl3qdFZcqYKnlq94"</code> (everything after the middle dot in the API key)</td>
    <td><code>api_key_id%3D%22-hVjtoFgGUNPq3DPPPkJN3mCIDIwrl3qdFZcqYKnlq94%22</code></td>
  </tr>
  <tr>
    <td><code>api_key_name</code></td>
    <td><code>api_key_name="test_name"</code></td>
    <td><code>api_key_name%3D%22test_name%22</code></td>
  </tr>
  <tr>
    <td><code>events</code></td>
    <td><code>status="processed"</code></td>
    <td><code>status%3D%22processed%22</code></td>
  </tr>
  <tr>
    <td><code>originating_ip</code> - this is the IP address of the person sending the message</td>
    <td><code>originating_ip="4.77.777.77"</code></td>
    <td><code>originating_ip%3D%224.77.777.77%22</code></td>
  </tr>
  <tr>
    <td><code>categories</code> - custom tags that you create</td>
    <td><code>categories="category_example"</code></td>
    <td><code>categories="category_example"</code></td>
  </tr>
  <tr>
    <td><code>unique_args</code> - custom tracking arguments that you can attach to SMTP API calls</td>
    <td><code>unique_args="example argument"</code></td>
    <td><code>unique_args%3D%22example%20argument%22</code></td>
  </tr>
  <tr>
    <td><code>outbound_ip</code> - this is the SendGrid dedicated IP address used to send the email</td>
    <td><code>outbound_ip="4.77.777.77"</code></td>
    <td><code>outbound_ip%3D%224.77.777.77%22</code></td>
  </tr>
  <tr>
    <td><code>last_event_time</code></td>
    <td><code>last_event_time=“2017-11-07T23:13:58Z”</code></td>
    <td><code>last_event_time%3D%E2%80%9C2017-11-07T23%3A13%3A58Z%E2%80%9D</code></td>
  </tr>
  <tr>
    <td><code>clicks</code></td>
    <td><code>clicks="0"</code></td>
    <td><code>clicks%3D%220%22</code></td>
  </tr>
  <tr>
    <td><code>unsubscribe_group_name</code></td>
    <td><code>unsubscribe_group_name="Global Unsubscribes"</code></td>
    <td><code>unsubscribe_group_name%3D%22Global%20Unsubscribes%22</code></td>
  </tr>
  <tr>
    <td><code>unsubscribe_group_id</code></td>
    <td><code>unsubscribe_group_id="1041"</code></td>
    <td><code>unsubscribe_group_id%3D%221041%22</code></td>
  </tr>
  <tr>
    <td><code>teammate</code> - teamates username</td>
    <td><code>teammate="my_username"</code></td>
    <td><code>teammate%3D%22my_username%22</code></td>
  </tr>
</table>

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Email Activity API](https://sendgrid.api-docs.io/v3.0/email-activity/filter-all-messages)
- [Email Activity - Non Beta](https://sendgrid.com/docs/User_Guide/email_activity.html)
- [Email Activity - Beta](https://sendgrid.com/docs/User_Guide/email_activity_beta.html)

