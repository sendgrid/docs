---
layout: page
title: Advanced Suppression Manager Overview
weight: 100
navigation:
  show: true
---

SendGrid's Advanced Suppression Manager (ASM) lets you define suppression groups
based on the types of emails you are sending (e.g. social notifications, daily digests,
and alerts). Using these groups, you can allow your recipients to choose
which types of emails they'd like to receive.

To prevent a recipient from getting social notifications
emails, add a [suppression]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/suppressions.html) to the [suppression group]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html) for social
notifications.

You can also add [global suppressions]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/global_suppressions.html) to suppress a recipient from receiving all emails regardless of group.

To specify a group when sending an email, add the group's ID to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html).

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

You can find your group IDs by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html#-GET) of the groups resource.
