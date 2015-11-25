---
seo:
  title: Bounce Forwarding and Gmail
  description: Bounce Forwarding and Gmail
  keywords: spam, forwarding, forward, gmail, bounce, google, filter
title: Bounce Forwarding and Gmail
weight: 0
layout: page
zendesk_id: 204336633
navigation:
  show: true
---

If you have [Bounce Forwarding](https://app.sendgrid.com/settings/mail_settings) enabled within your account, you may have experienced some or all of the bounce messages we send going to the spam folder of your&nbsp;Gmail account.&nbsp;

![]({{root_url}}/images/bounce_forward.gif)

Why is that? When Gmail receives one of our bounce forward messages, it has the tendency to get confused. Specifically, it doesn't see a corresponding message in the sent folder that relates to&nbsp;that bounce message. It may then decide that the bounce message isn't valid and send it to spam.&nbsp;

You can get around this by following the instructions below to create a filter that&nbsp;teaches Gmail to behave differently when receiving bounce forward messages from Sendgrid.&nbsp;

&nbsp;

**Step 1**

In Gmail, go to **Settings** > **Filters** > **Create a new filter**

![]({{root_url}}/images/gmailsettings.gif)

&nbsp;

**Step 2**

![]({{root_url}}/images/Step1.png)

&nbsp;

**Step 3**

![]({{root_url}}/images/Step2.png)

&nbsp;

And that's it! You should now start to see bounce forward messages arrive in your Gmail inbox.&nbsp;

