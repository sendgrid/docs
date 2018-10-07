---
seo:
  title: Canceling a scheduled send
  description: Can I stop a scheduled email or campaign?
  keywords: pause, halt, delete, queue, stop, cancel, reschedule, unschedule
title: Canceling a scheduled send
group: api-v3
weight: 0
layout: page
navigation:
  show: true
---

If you have scheduled an email or a campaign to be sent, but decided to cancel or reschedule the email then you have several options.

<call-out type="warning">

If you are looking for information on how to stop a send that is currently in progress, [click here]({{root_url}}/for-developers/sending-email/stopping-an-in-progress-send/ )!

</call-out>

## 	Canceling Transactional Email

 ### 	Cancel Scheduled Sends

There is a [group of endpoints]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html) in the SendGrid API v3 that makes it possible to batch transactional email together and to schedule a time for that batch to be delivered. You can also pause or cancel the delivery of one of these batches.

<call-out>

You can have no more than 10 different batches (10 different groups of emails with each group identified by a unique `batch_id`) in a 'paused' or 'pending cancellation' state at one time.

</call-out>

To create a batch ID, assign that ID to an email or group of emails, and cancel the send, refer to the following steps:

 ### 	1. Generate a Batch ID

First, generate a batch id by calling the [v3/mail/batch endpoint]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html#-Batch-IDs). When successful, you should receive a 201 response along with your batch ID.

`POST https://api.sendgrid.com/v3/mail/batch`
``` json
HTTP/1.1 201
  {
    "batch_id": "YOUR_BATCH_ID"
  }
```

 ### 	2. Assign Batch ID to an Email

The batch ID generated in step 1 can now be used when scheduling an email via the SendGrid API v3 by setting the value of `batch_id` to your new batch ID in a [v3/mail/send]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) request and setting the value of `send_at` to a UNIX timestamp representing the time you want your email sent. For example:

`POST https://api.sendgrid.com/v3/mail/send`

``` json
{
  "personalizations": [
    {
    "to": [
    {
    "email": "john@example.com"
    }
    ],
    "subject": "Hello, World!"
  }],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [{
    "type": "text/plain",
    "value": "Hello, World!"
  }],
  "send_at": 1484913600,
  "batch_id": "YOUR_BATCH_ID"
}
```
``` json
{
  HTTP/1.1 202
}
```

<call-out>

If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.

</call-out>

 ### 	3. Cancel or Pause Your Send

Now that your email has been scheduled and has a batch ID assigned, you can [pause or cancel the send]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html#-Cancel-Scheduled-Sends) at any time up to 10 minutes before the scheduled send time.

<call-out type="warning">

Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

</call-out>

To only pause your scheduled send, simply set the `status` parameter in your request to "pause". To completely cancel your request, set `status` to "cancel".

When a Batch is **cancelled**, all messages associated with that batch will stay in your sending queue, but when their `send_at` value is reached, they will be discarded instead of attempting delivery.

When a Batch is **paused**, all messages associated with that batch will stay in your sending queue, even past their `send_at` value. Any messages that are more than 72 hours old will be discarded as Expired.

`POST https://api.sendgrid.com/v3/user/scheduled_sends`
``` json
{
  "batch_id": "YOUR_BATCH_ID",
  "status": "pause"
  }
```

``` json
HTTP/1.1 201
```

For more details, please see our [Cancel Scheduled Sends API Reference]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html).

## 	Canceling a Marketing Campaign

 ### 	Using the User Interface

If you scheduled a specific time to send your campaign, it's easy to unschedule this campaign to make changes or reschedule it. Simply navigate to your [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns) by clicking **Marketing Campaigns** in the left hand navigation menu and selecting **Campaigns**. Next to the campaign you want to unschedule, click the action menu and select **Unschedule**.

![]({{root_url}}/images/unschedule_campaign.gif)

 ### 	Using the API

You can unschedule a campaign by making a call to [/v3/campaigns/{campaign_id}/schedules]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html#Unschedule-a-Scheduled-Campaign-DELETE) where `{campaign_id}` is the ID of the campaign you want to unschedule. A successful unschedule will return a 204. **You cannot unschedule campaigns that are already in the process of being sent. You should instead cancel or delete the campaign.**

`DELETE https://api.sendgrid.com/v3/campaigns/{campaign_id}/schedules`

`HTTP/1.1 204`