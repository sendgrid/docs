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
The Email Activity API is beta and you may not have access. The API might change at any time without notice.
{% endwarning %}

- [Getting started](#-Getting-started)
    - [Encoding queries](#-Encoding-queries)
- [Queries for common use cases](#-Queries-for-common-use-cases)
<!-- - [Complex queries]() -->

**You have access to the Email Activity API if you've purchased additional storage for the Email Activity page.** The API gives you access to query all of your stored messages, to query individual messages, and to download a CSV with data about the stored messages.

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

Here are some queries for common use cases. For a full list of possible query types, see the [query reference]({{root_url}}/API_Reference/Email_Activity/query_reference.html).

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

<!-- 
{% anchor h2 %}
Complex queries
{% endanchor %}
-->