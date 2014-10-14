---
layout: page
weight: 0
title: Categories
navigation:
  show: true
---

Categories help organize your email analytics by enabling you to tag emails by topic.

Just as you can view the statistics on all your activity under the '[Statistics]({{root_url}}/Delivery_Metrics/)' tab, you can go a step further and view the statistics broken down to a particular category.

The events that can be associated with category include:

-   Emails sent
-   Clicks
-   Opens
-   Bounces
-   Spam Reports
-   Unsubscribes

The actual statistics included vary depending upon the set of enabled [Apps]({{root_url}}/Apps/). Emails sent, bounces and spam reports will always get tracked. [Unsubscribes]({{root_url}}/Apps/subscription_tracking.html), [Clicks]({{root_url}}/Apps/click_tracking.html), and [Opens]({{root_url}}/Apps/open_tracking.html) require that the associated App is enabled. Check out the [Apps tab](https://sendgrid.com/app) to see which apps you have enabled.

{% warning %}
Categories must be in 7bit encoding using the US-ASCII character set. 
{% endwarning %}

{% info %}
Currently, there is no limit to the number of categories you can track. However, we recommend *no more than ~100 total unique categories* as this will increase your ease of use in the Statistics area. Additionally, a high rate of unique categories on your account can negatively impact the rate at which we process the messages you send.
{% endinfo %}

{% warning %}
Categories should be used to group messages together by broad topic. If you need to attach unique data or identifiers to a message, use [Unique Arguments]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html) instead. 
{% endwarning %}

{% anchor h2 %}
Example 
{% endanchor %}

You can use SendGrid's [SMTP API]({{root_url}}/API_Reference/SMTP_API/) to add these categories to your email. The following should be added to the email's header:

<h4>Example Category Header</h4>
{% codeblock lang:json %}
{
  "category": "Example Category"
}
{% endcodeblock %}

In this example, SendGrid would associate statistics for the email containing that header with the category **Example Category**.

You can assign up to 10 categories per message:

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
