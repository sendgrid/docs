---
seo:
  title: Can I stop a send in progress?
  description: Can I stop a send in progress?
  keywords: pause, halt, delete, queue, stop, interrupt
title: Can I stop a send in progress?
group: api-v3
weight: 0
layout: page
zendesk_id: 204117516
navigation:
  show: true
---

Oops! You accidentally sent a whole pile of mail you didn't mean to send... No worries, take a deep breath and read on. Be it a misspelled subject line or a rogue script, we can help!

<call-out type="warning">

If you are looking for information on how to cancel a scheduled email or campaign, [click here]({{root_url}}/for-developers/sending-email/stopping-a-scheduled-send/)!

</call-out>

## 	Stopping Transactional Email

Stopping an ongoing send that is using SMTP or the Web API can be tricky, because we strive to accept and send email requests as quickly as possible. Sometimes stopping an accidental send is just not possible. However, following are several suggestions for how to halt a send in progress, or a send that you have scheduled.

 ### 	1. Change Your Password

The simple act of [changing your password](https://app.sendgrid.com/settings/account) can break your existing email integration by causing a mismatch between what your app is trying to authenticate with and what we have on record.

This method is great if you have a runaway script or have just started a send accidentally. Be sure to verify that the credentials your app is using belong either to the parent account or a [teammate](https://app.sendgrid.com/settings/teammates) so you can change the proper one.

<call-out type="warning">

We cannot guarantee that changing your password will prevent 100% of your email requests from being delivered. We only recommend this method as a last resort that may allow you to stop at least some of your emails from begin sent.

</call-out>

 ### 	2. Contact Support

Support has the ability to clear any emails currently pending delivery from your account. To be more clear, there is a very small window of opportunity between when we accept an email request and when we actually attempt delivery to the recipient. Emails can build up in this queue, and upon request, we can delete them entirely.

## 	Stopping a Marketing Campaign

You have several options for canceling or unscheduling a campaign.

 ### 	Using the User Interface

If you have **Send Immediately** under the **Scheduling** dropdown menu in the campaign builder set to OFF then you only have a very brief window of opportunity to cancel the campaign after clicking **Send Campaign**. You have two options:

1. **Deleting the Campaign**

    Navigate to your [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns). Find the campaign you want to stop, click the gear icon and select **Delete**.

2. **Canceling the Campaign**

    Navigate to your [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns). Find the campaign you want to stop and click the little red X next to the campaign name to cancel the campaign. Click **Confirm** in the confirmation window that appears. You'll see the status of your campaign change to "Canceled".

    ![]({{root_url}}/images/cancel_campaign_1.png)

    *****

    ![]({{root_url}}/images/cancel_campaign_2.png)

    *****

    ![]({{root_url}}/images/cancel_campaign_3.png)

 ### 	Using the SendGrid API

You can delete a campaign by making a call to [/v3/campaigns/{campaign_id}]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/campaigns.html#Delete-a-Campaign-DELETE) where `{campaign_id}` is the ID of the campaign you want to stop. A successful deletion will return a 204.

`DELETE https://api.sendgrid.com/v3/campaigns/{campaign_id}`

`HTTP/1.1 204`