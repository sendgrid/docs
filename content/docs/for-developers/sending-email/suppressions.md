---
seo:
  title: Suppression Groups
  description: Suppression groups allow you to set up unsubscribe lists and options
  keywords: SMTP, suppression groups, unsubscribe lists
title: Suppression Groups
group: x-smtpapi
weight: 10
layout: page
navigation:
  show: true
---

## Defining an Unsubscribe Group When Sending

The method used to specify an unsubscribe group for an email depends on how you will be sending that email:

- When sending an SMTP message, add the group's ID to the X-SMTPAPI header.
- When sending an email via the [Web API v2](https://www.twilio.com/docs/sendgrid/api/v2/mail), add the group's ID in the `x-smtpapi` parameter.
- When sending an email via the [Web API v3](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send), define the group's ID in the `asm.group_id` parameter.

<call-out type="warning">

You may only specify one group per send, and you should wait one minute after creating the group before sending with it.

</call-out>

<call-out type="warning">

When passing `asm_group_id` please make sure to only use integers as shown in our examples. Any other type could result in unintended behavior.

</call-out>

```json
{
  "asm_group_id": 1
}
```

## Defining Unsubscribe Groups to display on the Manage Preferences page

To specify which groups to display on the Manage Preferences page of an email, add the group IDs to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API call](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send).
If you omit the `asm_groups_to_display` header, your default groups is shown on the Manage Preferences page instead.

<call-out type="warning">

You can specify up to 25 groups to display.

</call-out>

```json
{
  "asm_groups_to_display": [1, 2, 3]
}
```

## Groups

You can find your group IDs by looking at the Group ID column in the Unsubscribe Groups UI, or by calling the [GET method](https://sendgrid.api-docs.io/v3.0/suppressions-unsubscribe-groups/retrieve-all-suppression-groups-associated-with-the-user) of the groups resource.

Related Articles:

- You can create Unsubscribe groups via the [API V3 > Unsubscribe Groups Endpoint](https://sendgrid.api-docs.io/v3.0/suppressions-unsubscribe-groups/create-a-new-suppression-group).

## Additional Resources

- [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/)
- [Getting Started with the SMTP API]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
- [Integrating with SMTP]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
- [Building an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-smtp-email/)
