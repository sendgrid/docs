---
seo:
  title: Stopping an in-progress send
  description: Can I stop a send in progress?
  keywords: pause, halt, delete, queue, stop, interrupt
title: Stopping an in-progress send
group: api-v3
weight: 0
layout: page
zendesk_id: 204117516
navigation:
  show: true
---

<call-out type="warning">

If you are looking for information on how to cancel a scheduled email or campaign, [click here]({{root_url}}/for-developers/sending-email/stopping-a-scheduled-send/)!

</call-out>

## Stopping Transactional Email

Stopping an ongoing send that is using SMTP or the Web API can be tricky, because we strive to accept and send email requests as quickly as possible. Sometimes stopping an accidental send is just not possible. However, following are several suggestions for how to halt a send in progress or a send that you have scheduled.

### 1. Change Your API Key or Password

The simple act of changing your [API key](https://app.sendgrid.com/settings/api_keys) or [password](https://app.sendgrid.com/settings/account) can break your existing email integration by causing a mismatch between what your app is trying to authenticate with and what we have on record.

This method is great if you have a runaway script or have just started a send accidentally. Be sure to verify that the credentials your app is using belong either to the parent account or a [teammate](https://app.sendgrid.com/settings/teammates) so you can change the proper one.

Using an API key has the added benefit of breaking only the services for which it has permissions. In addition to enhanced security, the ease of change afforded by an API key is one reason we recommend using API keys to authenticate with our services.

<call-out type="warning">

We cannot guarantee that changing your API key or password will prevent 100% of your email requests from being delivered. We only recommend this method as a last resort that may allow you to stop at least some of your emails from being sent.

</call-out>

### 2. Contact Support

Support has the ability to clear any emails currently pending delivery from your account. To be more clear, there is a very small window of opportunity between when we accept an email request and when we actually attempt delivery to the recipient. Emails can build up in this queue, and upon request, we can delete them entirely.

## Stopping a Marketing Campaign

You have several options for canceling or unscheduling a campaign.

### Using the User Interface

If you have **Send Immediately** under the **Scheduling** dropdown menu in the campaign builder set to OFF, then you only have a very brief window of opportunity to cancel the campaign after clicking **Send Campaign**. You have 2 options:

1. **Deleting the Campaign**

   Navigate to your [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns). Find the campaign you want to stop, click the action menu and select **Delete**.

2. **Canceling the Campaign**

   Navigate to your [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns). Find the campaign you want to stop and click the little red X next to the campaign name to cancel the campaign. Click **Confirm** in the confirmation window that appears. You'll see the status of your campaign change to "Canceled".

   ![]({{root_url}}/images/cancel_campaign_1.png)

   ***

   ![]({{root_url}}/images/cancel_campaign_2.png)

   ***

   ![]({{root_url}}/images/cancel_campaign_3.png)

### Using the SendGrid API

#### New Marketing Campaigns

You can cancel a scheduled send by making a call to [/marketing/singlesends/{id}/schedule](https://sendgrid.api-docs.io/v3.0/single-sends/delete-single-send-schedule) where `{id}` is the ID of the Single Send you want to stop. A successful deletion will return a 200.

#### Legacy Marketing Campaigns

You can delete a campaign by making a call to [/v3/campaigns/{campaign_id}](https://sendgrid.api-docs.io/v3.0/campaigns-api/unschedule-a-scheduled-campaign) where `{campaign_id}` is the ID of the campaign you want to stop. A successful deletion will return a 204.

`DELETE https://api.sendgrid.com/v3/campaigns/{campaign_id}`

`HTTP/1.1 204`
