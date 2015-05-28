---
seo:
  title: Category Statistics
  description: View and filter your Category specific SendGrid email statistics.
  keywords: category statistics, SendGrid category statistics
title: Categories
weight: 100
layout: page
navigation:
  show: true
---

{% info %}
This page refers to our beta UI functionality. To find these features, please click the “Beta” button at the top of the SendGrid Customer Portal.
{% endinfo %}

{% info %}
Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.
{% endinfo %}

Categories can help organize your email analytics by enabling you to “tag” emails by type. Just as you can view the statistics on all your [email activity]({{root_url}}/User_Guide/email_activity.html), you can go a step further and view the statistics broken down to a particular category.

The actual statistics included vary depending upon your [account settings]({{root_url}}/User_Guide/Settings/index.html). Emails sent, bounces and spam reports will always get tracked. Unsubscribes, Clicks, and Opens require that the associated settings are enabled. 

In order to see statistics for a category, select the category and the page will show you both a graph and a table of your category’s email statistics.

You can change which metrics, date, or grouping by adjusting the [statistics filters]({{root_url}}/User_Guide/Statistics/index.html#-Statistics-Filters).

{% anchor h2 %}
Figures
{% endanchor %}

The figures table gives you all of the specific counts or percentages of each event, according to how you’ve grouped your stats (day, week, or month). For example, if you wanted to see what percentage of the emails you sent were actually opened on the 2nd week of April, this is a great place to check.

This table will refresh with new or adjusted data based on the various filters available at the top of the page. You can also choose to show actual counts or percentages, by clicking the corresponding button above and to the right of the table.

{% anchor h2 %}
Using the API
{% endanchor %}

[Using Categories with the SMTPAPI]({{root_url}}/API_Reference/SMTP_API/categories.html)