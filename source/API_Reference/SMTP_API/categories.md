---
layout: page
weight: 0
title: Categories
navigation:
  show: true
---

You can add [categories]({{root_url}}/User_Guide/Email_Settings/categories.html) to the X-SMTPAPI header of the emails you send via SendGrid. This will allow you to track emails based on your own categorization system.

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

You can use SendGrid's [SMTP API]({{root_url}}/API_Reference/SMTP_API/building_an_smtp_email.html) to add these categories to your email. The following should be added to the email's header:

<h4>Example Category Header</h4>
{% codeblock lang:json %}
{
  "category": "Example Category"
}
{% endcodeblock %}

In this example, SendGrid would associate statistics for the email containing that header with the category **Example Category**.

{% anchor h2%}
Limitations
{% endanchor %}

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
