---
seo:
  title: Using Unsubscribe Groups
title: Using Suppression Groups
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Suppression Groups and Categories
{% endanchor %}

While both suppression groups and [categories]({{root_url}}/API_Reference/SMTP_API/categories.html) can represent types
of email, they are used for different but complementary purposes. Categories are used to organize emails together for
analytics, while suppression groups organize emails together for the purpose of allowing recipients to opt out of receiving
those types of emails.

{% anchor h2 %}
Uploading a CSV
{% endanchor %}

You can upload a CSV of email addresses that you would like to add to a suppression group.

{% warning %}
This CSV should be a list of emails, this is not names, addresses, or other information.  This is also not emails formatted like so: `FName LName <email@example.com>`
{% endwarning %}

The CSV must meet the following criteria:

* Email addresses, and only email addresses, must be in the first column of the CSV

* The first row may be an optional header row

* If there is more than one column in the CSV, the extra columns are ignored

* Columns must be comma-separated, without any formatting (e.g. quotation marks) around each of the cells.
