---
layout: page
weight: 0
title: Supression Groups
navigation:
  show: true
---

{% anchor h2 %}
Defining an ASM Group When Sending
{% endanchor %}

To specify a group when sending an email, add the group's ID to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html).

{% warning %}
You may only specify one group per send, and you should wait one minute after creating the group before sending with it.
{% endwarning %}

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

{% anchor h2 %}
Defining ASM Groups to display on the Manage Preferences page
{% endanchor %}

To specify which groups to display on the Manage Preferences page of an email, add the group IDs to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html).
If the asm_groups_to_display header is omitted, your default groups will be shown on the Manage Preferences page instead.

{% warning %}
You can specify up to 25 groups to display.
{% endwarning %}

{% codeblock lang:json %}
{
  "asm_groups_to_display": [1, 2, 3]
}
{% endcodeblock %}

{% anchor h2 %}
Groups
{% endanchor %}

You can find your group IDs by looking at the Group ID column in the Advanced Suppression Manager UI, or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html#-GET) of the groups resource.

Related Articles:

* You can create ASM groups via the [API V3 > ASM Endpoint]({{root_url}}/API_Reference/Web_API_v3/Unsubscribe_Manager/groups.html#-POST).
