---
layout: page
weight: 40
title: Campaigns
navigation:
  show: true
seo:
  title: Create and Send Campaigns
  override: true
  description: 
---

{% info %}
Accounts are currently limited to 250 campaigns.
{% endinfo %}

When you are ready to send an email campaign, go to the campaigns page and click “Create Campaign.” From here you will be able to choose the template to use for this campaign, add content, and send the email.

{% anchor h2 %}
Choose Your Template
{% endanchor %}

We have provided you with two default templates to choose from.
If you decide to upload your own template, you can create it in our editor using HTML or plaintext.

![]({{root_url}}/images/templates_6.png "Choose a Template")


{% anchor h2 %}
Add Your Content and Set Your Settings
{% endanchor %}

{% info %}
The editor will autosave your changes every 3 seconds, so even if you close your browser window your changes will be saved.
{% endinfo %}

Once you choose your template, you will be taken to this page:

![]({{root_url}}/images/templates_7.png "Edit Your Campaign")


From here you can change the content in your email without affecting your template, meaning that any changes here will be saved for this campaign only and will not change your template. This allows you to use the same template multiple times without having to worry about changes from campaign to campaign.

You can also change:

* **Campaign Name:** This is the name of your campaign, so you can find it again from the campaigns page.
* **From Sender:** This is the person from whom this email will be sent. The user will see this name as the sender on their email.
* **Email Subject:** The subject line the user will see. Note: You can use substitution tags in order to personalize the email subject for your customers.
* **Lists/Segments to Send To:** You can choose which contacts will receive your email. You can choose more than one list or segment. A contact in multiple selected lists will only receive the email once.
* **Schedule:** You can set when this email will be sent to your contacts. “Send Immediately” is selected by default. Click the “On” button to toggle the custom schedule options. If you choose to schedule a send, the campaign will be scheduled only after you click “Send” in the upper right hand corner.
* **Categories:** This is a category that you can set for your emails, which will help you track delivery metrics in the SendGrid advanced statistics section based on your own classifications of the emails you are sending. To add a category, type the name and press enter.
* **Suppression Group:** This allows you to set the group that applies to this email, so that users who have already opted out of emails do not receive them again. In order to keep your sender rating high, it is important to make sure you don’t send emails to users who have unsubscribed in the past. In order to create a new suppression group, click the "manage" prompt by this field. You will then be taken to the [Advanced Suppression Manager]({{root_url}}/User_Guide/Email_Deliverability/Subscription_Tracking/advanced_suppression_manager.html) page to add a new suppression group.

{% anchor h2 %}
A/B Testing
{% endanchor %}

You may want to test the email that you are sending to your customers in order to optimize engagement from them. A/B testing in marketing campaigns works by sending versions of your emails to small subsets of your contacts. When your contacts interact with the emails according to the criteria you set, SendGrid will send the winning version of your campaign to the remainder of your contacts.

![]({{root_url}}/images/ab_testing_1.png "A/B Testing")

{% anchor h3 %}
Selecting A/B Testing Criteria
{% endanchor %}

{% info %}
You can test up to 6 variations of your campaign subject.
{% endinfo %}

The criteria you can set for your A/B tests are:

* Open Rate - This is the rate at which your customers <a href="{{root_url}}/Glossary/opens.html">open</a> your emails.
* Click Rate - This is the rate at which your customers <a href="{{root_url}}/Glossary/clicks.html">click</a> links in your emails.
* Test Size - The percentage of your list that should get each variation. Each variation will be sent to the same number of contacts.
* Duration - The time to test your variation.

It’s important to note that you can test your variations for up to 24 hours, but only the subset of emails you've chosen to test will be sent before that duration is up. This means that you
should be mindful of your test duration with respect to the timeliness of your campaign content. For example, if you have a one-day sale that happens the day of your campaign,
you should set the duration so that your customers get the campaign the same day as the sale.

When a variation wins, based on your criteria and duration, you will be notified that a winner was chosen and which variation won.
![]({{root_url}}/images/ab_testing_4.png "Manually choose a test winner")

You can also manually choose a winner at any time after you start the test.

![]({{root_url}}/images/ab_testing_2.png "Manually choose a test winner")

If you choose to manually pick a winner, (meaning SendGrid is not automatically choosing based on click or open rate), then you will be notified via email at the end of the duration you set, that your test is complete and that you need to choose a winner.

![]({{root_url}}/images/ab_testing_3.png "Choose a winner badge")

{% anchor h2 %}
Preview Your Campaign
{% endanchor %}

It is good practice to look at your campaign on a couple of different screen sizes. In order to expedite this process for you, we have provided a desktop and mobile preview for you. At the top of your screen you will notice three icons that look like the following:

![]({{root_url}}/images/templates_8.png "Desktop Preview") is the desktop preview option. It will show you what your users will see when looking at your email through their desktop email application.

![]({{root_url}}/images/templates_9.png "Mobile Preview") is the mobile preview option. It will show you what your users will see when looking at your email through a mobile email application.

![]({{root_url}}/images/templates_10.png "Text Preview") is the text preview option, also known as plain text. It will show you what text-only users and screen readers will see when they look at your email.

{% info %}
Note: While the preview functionality we provide will cover many use cases, it will not render the same as all mobile devices or desktop email clients. We recommend you use programs like [Litmus](https://litmus.com/) to check that your email renders appropriately across all devices and clients.
{% endinfo %}

{% anchor h2 %}
Save or Send Your Campaign
{% endanchor %}

You have the option to save your campaign, for editing later. Once you are ready to send, you can click the “send” button in the top right corner of this page. If you have chosen to schedule your campaign, it will be sent at the time specified. If you do not schedule your campaign, it will send immediately.

{% anchor h2 %}
View All of Your Campaigns
{% endanchor %}

From the campaigns page, you can view all the campaigns that you have built or sent. High level statistics about each campaign will be available in-line with the name, send date, and status of the campaign. You can also click the gear icon at the right to duplicate, view stats, or preview the campaign.

{% anchor h2 %}
Duplicating a Campaign
{% endanchor %}

To duplicate a campaign that you already have, just click the gear icon to the right of that campaign and choose "duplicate". You will be taken to the campaign builder where you can change the name from the default auto-generated and timestamped campaign name. This will automatically create this campaign in your list, even if you do not click the "save" button.


{% anchor h2 %}
Campaign Statistics
{% endanchor %}

Once you have sent a campaign, you can click the gear icon next to the campaign name and then choose “stats.” From here, you will get statistics specific to this campaign including bounces, clicks, opens, etc. and you can also export a CSV with the raw stats.

![]({{root_url}}/images/stats_1.jpg "Campaign Statistics")

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/templates.html">Email Templates</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/overview.html">Dashboard</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>