---
layout: page
weight: 0
title: Categories
navigation:
  show: true
---

Categories help organize your email analytics by enabling you to tag emails by type.

Just as you can view the statistics on all your activity under the '[Statistics]({{root_url}}/Delivery_Metrics/)' tab, you can go a step further and view the statistics on a particular category.

The events that can be associated with category include:

-   Emails sent
-   Clicks
-   Opens
-   Bounces
-   Spam Reports
-   Unsubscribes

The actual statistics included vary depending upon the set of enabled [Apps]({{root_url}}/Apps/). Emails sent, bounces and spam reports will always get tracked. Unsubscribes, Clicks, and Opens require that the associated App is enabled.

{% warning %}
Categories must be in 7bit encoding using the US-ASCII character set. 
{% endwarning %}

{% info %}
Currently, there is no limit to the number of categories you can track. 
{% endinfo %}

{% info %}
Categories should be used to group messages together. If you need to attach unique data or identifiers to a message, use Unique Arguments instead. 
{% endinfo %}

{% anchor h2 %}
Example 
{% endanchor %}

You can use SendGrid's [SMTPAPI]({{root_url}}/API_Reference/SMTP_API/) to add these categories to your email. The following should be added to the email's header:

{% codeblock lang:json %}
{
  "category": "Example Category"
}
{% endcodeblock %}

In this example, SendGrid would associate statistics for the email containing that header with the category **Example Category**.

You can assign multiple categories per message, up to 10:

{% codeblock lang:json %}
{
  "category": [
    "dogs",
    "animals",
    "pets",
    "mammals"
  ]
}
{% endcodeblock %}
