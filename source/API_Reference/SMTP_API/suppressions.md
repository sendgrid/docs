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

You can find your group IDs by looking at the Group ID column in the Advanced Suppression Manager UI, or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html#-GET) of the groups resource.

Related Articles:

* You can create ASM groups via the [API V3 > ASM Endpoint]({{root_url}}/API_Reference/Web_API_v3/Unsubscribe_Manager/groups.html#-POST).