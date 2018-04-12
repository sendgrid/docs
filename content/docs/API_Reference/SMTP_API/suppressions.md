---
seo:
  title: Suppression Groups
  description: Suppression groups allow you to set up unsubscribe lists and options
  keywords: SMTP, suppression groups, unsubscribe lists
title: Suppression Groups
weight: 10
layout: page
navigation:
  show: true
---

<page-anchor el="h2">
Defining an Unsubscribe Group When Sending
</page-anchor>

The method used to specify an unsubscribe group for an email depends on how you will be sending that email:

* When sending an SMTP message, add the group's ID to the X-SMTPAPI header.
* When sending an email via the [Web API v2]({{root_url}}/API_Reference/Web_API/mail.html), add the group's ID in the `x-smtpapi` parameter.
* When sending an email via the [Web API v3]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html), define the group's ID in the `asm.group_id` parameter.

{% warning %}
You may only specify one group per send, and you should wait one minute after creating the group before sending with it.
{% endwarning %}

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

<page-anchor el="h2">
Defining Unsubscribe Groups to display on the Manage Preferences page
</page-anchor>

To specify which groups to display on the Manage Preferences page of an email, add the group IDs to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html).
If you omit the asm_groups_to_display header, your default groups is shown on the Manage Preferences page instead.

{% warning %}
You can specify up to 25 groups to display.
{% endwarning %}

{% codeblock lang:json %}
{
  "asm_groups_to_display": [1, 2, 3]
}
{% endcodeblock %}

<page-anchor el="h2">
Groups
</page-anchor>

You can find your group IDs by looking at the Group ID column in the Unsubscribe Groups UI, or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html#-GET) of the groups resource.

Related Articles:

* You can create Unsubscribe groups via the [API V3 > Unsubscribe Groups Endpoint]({{root_url}}/API_Reference/Web_API_v3/Unsubscribe_Manager/groups.html#-POST).

<page-anchor el="h2">
Additional Resources
{% endanchor h2 %}

- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/API_Reference/SMTP_API/getting_started_smtp.html)
- [Integrating with SMTP]({{root_url}}/API_Reference/SMTP_API/integrating_with_the_smtp_api.html)
- [Building an SMTP Email]({{root_url}}/API_Reference/SMTP_API/building_an_smtp_email.html)