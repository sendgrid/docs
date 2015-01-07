---
seo:
  title: Defining Unsubscribe Groups
title: Defining ASM Groups
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
To Create ASM Groups
{% endanchor %}

After logging in to your SendGrid account, click on the beta invitation banner at the top of the page. Once in the beta SendGrid Customer Portal, click on the clipboard icon on the left navigation bar and select "Advanced Suppression Manager."

From here you can begin creating suppression groups to define the types of emails for which you would like your recipients to be able to opt out.

You can also create ASM groups via the [API V3 > ASM Endpoint]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html#-POST).


{% anchor h2 %}
Active and Inactive Groups
{% endanchor %}

A group is active if email has been sent using that suppression group in the last 60 days. Active groups may not be deleted.


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

{% info %}
You can create ASM groups via the [API V3 > ASM Endpoint]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html#-POST).
{% endinfo %}
