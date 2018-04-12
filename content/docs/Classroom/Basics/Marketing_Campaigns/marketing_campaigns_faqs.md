---
seo:
  title: Marketing Campaigns FAQs
  description: Marketing Campaigns FAQs
  keywords: marketing, campaign, getting, started, faq, campaigns, faqs
title: Marketing Campaigns FAQs
weight: 0
layout: page
zendesk_id: 204820697
navigation:
  show: true
---

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [**A/B Testing**](#-AB-Testing)
  - [Where can I manually select the winner of an A/B test campaign?](#-When-can-I-manually-select-the-winner-of-an-AB-test-campaign)
  - [When can I manually select the winner of an A/B test campaign?](#-When-can-I-manually-select-the-winner-of-an-AB-test-campaign)
  - [Can I change the winning criteria after sending an A/B test campaign?](#-Can-I-change-the-winning-criteria-after-sending-an-AB-test-campaign)
  - [Can I see which A/B test variation was sent to each recipient?](#-Can-I-see-which-AB-test-variation-was-sent-to-each-recipient)
  - [Can I export raw stats for each of my A/B test variations?](#-Can-I-export-raw-stats-for-each-of-my-AB-test-variations)
* [**Billing & Pricing**](#-Billing--Pricing)
  - [Where can I find my monthly invoice?](#-Where-can-I-find-my-monthly-invoice)
  - [Which contacts am I charged for?](#-Which-contacts-am-I-charged-for)
  - [How much does Marketing Campaigns cost?](#-How-much-does-Marketing-Campaigns-cost)
  - [Can I pay a prorated rate if I don't store my contacts for an entire month?](#-Can-I-pay-a-prorated-rate-if-I-dont-store-my-contacts-for-an-entire-month)
* [**Campaigns & Campaign Editor**](#-Campaigns--Campaign-Editor)
  - [How come I can't select a sender ID in the campaign editor after creating it?](#-How-come-I-cant-select-a-sender-ID-in-the-campaign-editor-after-creating-it)
  - [If I send a campaign to multiple lists or segments, will contacts on each list receive a duplicate email?](#-If-I-send-a-campaign-to-multiple-lists-or-segments-will-contacts-on-each-list-receive-a-duplicate-email)
  - [When scheduling a campaign, why do I get the error: "Please choose a future date and time for sending your campaign"?](#-When-scheduling-a-campaign-why-do-I-get-the-error-Please-choose-a-future-date-and-time-for-sending-your-campaign)
  - [How do I edit a scheduled campaign?](#-How-do-I-edit-a-scheduled-campaign)
  - [Can I restore a deleted campaign?](#-Can-I-restore-a-deleted-campaign)
  - [Where can I get a list of all of my substitution tags to insert into my campaign?](#-Where-can-I-get-a-list-of-all-of-my-substitution-tags-to-insert-into-my-campaign)
  - [Can I use substitution tags in my subject line?](#-Can-I-use-substitution-tags-in-my-subject-line)
  - [Where are uploaded images stored and how do I access them?](#-Where-are-uploaded-images-stored-and-how-do-I-access-them)
  - [Are unsubscribe links automatically added to my campaign?](#-Are-unsubscribe-links-automatically-added-to-my-campaign)
  - [Why is my unsubscribe tag not being replaced with an unsubscribe link?](#-Why-is-my-unsubscribe-tag-not-being-replaced-with-an-unsubscribe-link)
  - [What is a suppression group?](#-What-is-a-suppression-group)
  - [What is the difference between suppression groups and unsubscribe groups?](#-What-is-the-difference-between-suppression-groups-and-unsubscribe-groups)
  - [Where can I find a list of contacts who have marked one of my campaigns as spam?](#-Where-can-I-find-a-list-of-contacts-who-have-marked-one-of-my-campaigns-as-spam)
  - [How many campaigns can I create?](#-How-many-campaigns-can-I-create)
* [**Sending Campaigns**](#-Sending-Campaigns)
  - [How come one of my substitution tags wasn't replaced during a send?](#-How-come-one-of-my-substitution-tags-wasnt-replaced-during-a-send)
  - [Why aren't my substitution tags replaced in my test send?](#-Why-arent-my-substitution-tags-replaced-in-my-test-send)
  - [Why isn't my unsubscribed contact appearing in an unsubscribe group?](#-Why-isnt-my-unsubscribed-contact-appearing-in-an-unsubscribe-group)
  - [How do I unschedule a campaign that I don't want to send?](#-How-do-I-unschedule-a-campaign-that-I-dont-want-to-send)
  - [How do I stop a campaign send?](#-How-do-I-stop-a-campaign-send)
  - [Can I retrieve Marketing Campaigns events via the Event Webhook?](#-Can-I-retrieve-Marketing-Campaigns-events-via-the-Event-Webhook)
  - [Can I turn off open/click tracking?](#-Can-I-turn-off-openclick-tracking)
  - [When a recipient clicks the unsubscribe link in my campaign, are they unsubscribed from all of my emails?](#-When-a-recipient-clicks-the-unsubscribe-link-in-my-campaign-are-they-unsubscribed-from-all-of-my-emails)
  - [Why am I required to select an unsubscribe group when sending a campaign?](#-Why-am-I-required-to-select-an-unsubscribe-group-when-sending-a-campaign)
* [**Sender Verification**](#-Sender-Verification)
  - [Why didn't I receive a sender ID verification email?](#-Why-didnt-I-receive-a-sender-ID-verification-email)
  - [Why isn't my sender ID verified after clicking the verification link?](#-Why-isnt-my-sender-ID-verified-after-clicking-the-verification-link)
  - [How long is the sender ID verification link valid?](#-How-long-is-the-sender-ID-verification-link-valid)
* [**Stats**](#-Stats)
  - [Are stats included for email I send via SMTP and the Web API?](#-Are-stats-included-for-email-I-send-via-SMTP-and-the-Web-API)
  - [How do I find stats for a specific campaign?](#-How-do-I-find-stats-for-a-specific-campaign)
  - [Is there a way for me to get more stats than are shown on the UI?](#-Is-there-a-way-for-me-to-get-more-stats-than-are-shown-on-the-UI)
  - [What unit of time is used for my dashboard statistics?](#-What-unit-of-time-is-used-for-my-dashboard-statistics)
  - [How do I view statistics for a specific campaign?](#-How-do-I-view-statistics-for-a-specific-campaign)

<page-anchor el="h2">
A/B Testing
</page-anchor>

<page-anchor el="h3">
Where can I manually select the winner of an A/B test campaign?
</page-anchor>

You can navigate to the campaign's stats to select a winner.

![]({{root_url}}/images/mc_faq_1.gif)

<page-anchor el="h3">
When can I manually pick the winner of an A/B test campaign?
</page-anchor>

You will receive an email reminding you to manually select a winner when your A/B test has completed. However, you may manually select a winner at any time immediately after beginning an A/B test campaign— you do not have to let the test finish before selecting a winner.

<page-anchor el="h3">
Can I change the winning criteria after sending an A/B test campaign?
</page-anchor>

No, you cannot change the winning criteria after starting an A/B test.

<page-anchor el="h3">
Can I see which A/B test variation was sent to each recipient?
</page-anchor>

No, currently you cannot see which recipient received which version.

<page-anchor el="h3">
Can I export raw stats for each of my A/B test variations?
</page-anchor>

Yes! Simply click the "Export CSV" button on the campaign stats page. The exported CSV will contain a line of stats for each individual variation you sent.

![]({{root_url}}/images/mc_faq_2.png)

<page-anchor el="h3">
Can I see which links were clicked within each of my A/B test versions?
</page-anchor>

Yes! The link tracking tab on your campaign's stats page displays your link click tracking stats for each version of your test.

![]({{root_url}}/images/mc_faq_3.png)

To see these stats, click **Campaigns** under **Marketing Campaigns** in the left hand side bar. Click the gear icon next to your A/B test campaign and select **Stats**. Scroll down until you see the section titled **Link Tracking**. Here you will find your click tracking stats for all of the links in each of your test versions.

<page-anchor el="h2">
Billing & Pricing
</page-anchor>

<page-anchor el="h3">
Where can I find my monthly invoice?
</page-anchor>

You can find your invoice in your [SendGrid Billing Settings](https://app.sendgrid.com/settings/billing). From your SendGrid dashboard, click **Settings** then **Plan & Billing Details**. Here you can find how much you are being billed for stored contacts (e.g. how much you are charged per 10,000 contacts) as well as the total you owe.

Contacts stored on any subusers of your account will be included in your total.

<page-anchor el="h3">
Which contacts am I charged for?
</page-anchor>

You will be charged to store all of your contacts, regardless of whether or not some contacts have unsubscribed from one or more campaigns. You are also charged to store any contacts on your subusers' accounts. As with your parent account, each subuser can store up to 2,000 contacts for free.

{% info %}
Your parent account will be billed for each unique contact, regardless of how many lists or segments that contact appears on. However, if there are one or more subusers under a parent account, the parent account will be billed for all unique contacts stored on each account, even if the same contact is stored on multiple accounts.
{% endinfo %}

For example, if a SendGrid parent account uploads a contact with the address `johndoeexampexample@example.com` and a single subuser of that parent account also uploads a contact for `johndoeexampexample@example.com`, then the parent account will be billed twice for that contact.

Unsubscribed contacts will not consume email credits when you send via Marketing Campaigns, even if those unsubscribed contacts are included in the list or segment you are sending to.

However, sending campaigns to invalid email addresses, recipients who have marked your emails as spam, or addresses that bounce will still consume email credits from your monthly balance.

<page-anchor el="h3">
How much does Marketing Campaigns cost?
</page-anchor>

You will be charged $10.00 for every 10,000 contacts you store. Your first 2,000 contacts are free. For a detailed discussion of Marketing Campaigns pricing, please see our [pricing page](https://sendgrid.com/pricing/).

<page-anchor el="h3">
Can I pay a prorated rate if I don't store my contacts for an entire month?
</page-anchor>

There is no monthly proration for contact storage. You will be charged for the maximum size that your contact list reaches each month. For example, if you upload your contacts on the last day of the month, you will still be charged the full amount to store those contacts that month.

<page-anchor el="h2">
Campaigns & Campaign Editor
</page-anchor>

<page-anchor el="h3">
How come I can't select a sender ID in the campaign editor after creating it?
</page-anchor>

Make sure that you have verified the sender ID you are trying to select. You can only select a verified sender ID when sending a campaign. You can resend a sender ID verification email from the sender ID's details page. Any sender you create using a domain you have already [whitelabeled]({{root_url}}/Classroom/Basics/Whitelabel/index.html) will automatically be verified.

![]({{root_url}}/images/mc_faq_4.gif)

<page-anchor el="h3">
If I send a campaign to multiple lists or segments, will contacts on each list receive a duplicate email?
</page-anchor>

No, each recipient will only receive a campaign once regardless of how many times they appear on a list or segment.

<page-anchor el="h3">
When scheduling a campaign, why do I get the error: "Please choose a future date and time for sending your campaign"?
</page-anchor>

This error occurs if you enter a time in the past to deliver a campaign. Make sure that your timezone is set correctly in your [Account Details](https://app.sendgrid.com/settings/account).

<page-anchor el="h3">
How do I edit a scheduled campaign?
</page-anchor>

First, unschedule the campaign that you want to edit— this will return your campaign to "draft" status. When finished editing your campaign, simply reschedule your desired send time.

![]({{root_url}}/images/mc_faq_5.gif)

<page-anchor el="h3">
Can I restore a deleted campaign?
</page-anchor>

Deleted campaigns cannot be restored. When deleting a campaign the application will ask you to confirm your choice to delete. Please be careful when deleting campaigns.

<page-anchor el="h3">
Where can I get a list of all of my substitution tags to insert into my campaign?
</page-anchor>

When in the Campaign Editor, click the **Tags** tab in the left hand sidebar. Here you will see a full list of your substitution tags, along with icons you can click to easily copy a tag.

![]({{root_url}}/images/mc_faq_6.gif)

<page-anchor el="h3">
Can I use substitution tags in my subject line?
</page-anchor>

Yes, using substitution tags in your subject line is a great way to further customize your emails for each of your recipients. It's worth noting you can use emoji here as well.

<page-anchor el="h3">
Where are uploaded images stored and how do I access them?
</page-anchor>

All images uploaded are stored in your image library and are shared between transactional templates and Marketing Campaigns. To access your images, simply open a campaign in the Campaign Editor (or a transactional template) and click the small image icon in the toolbar.

<page-anchor el="h3">
Are unsubscribe links automatically added to my campaign?
</page-anchor>

Every campaign is required to have the [unsubscribe] tag, and the [unsubscribe] tag will automatically be appended in every SendGrid template.

However, you can specify the exact location in your email that you would like the unsubscribe link to appear by inserting the [unsubscribe] tag at a location of your choice. For more information on adding unsubscribe links to your campaigns, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h3">
Why is my [unsubscribe] tag not being replaced with an unsubscribe link?
</page-anchor>

Make sure that you have inserted the [unsubscribe] tag in the body of your campaign _and_ have selected an unsubscribe group for your campaign. You must specify an unsubscribe group or include a [custom unsubscribe URL]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html#-Using-a-Custom-Unsubscribe-Link) in order for the unsubscribe link to be added and for your campaign to be sent. For more information on adding unsubscribe links to your campaigns, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h3">
What is an unsubscribe group?
</page-anchor>

An _unsubscribe group_ is a group of recipients that we will not send emails to. Unsubscribe groups allow your readers to opt out of certain types or groups of emails instead of globally unsubscribing from _all_ of your emails. A common example, would be to have one group for “Account” messages like password resets and shipping notifications, and another group for “Marketing” messages, so that users unsubscribing from marketing email don’t mistakenly miss password reminder emails. For more information on using unsubscribe links in your campaigns, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h3">
What is the difference between suppression groups and unsubscribe groups?
</page-anchor>

Suppression groups and unsubscribe groups are the same. We refer to suppression groups as unsubscribe groups. For more information on using unsubscribe links in your campaigns, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h3">
Where can I find a list of contacts who have marked one of my campaigns as spam?
</page-anchor>

You can find a list of contacts who have marked one of your campaigns as spam by clicking [Stats](https://app.sendgrid.com/statistics) from the left hand navigation menu then filtering the results by "Spam Reports". You can apply a category to a campaign or series of campaigns to further filter these stats.

{% warning %}
You will not be able to see which specific campaign was marked as spam unless you assign a unique category for every campaign.
{% endwarning %}

<page-anchor el="h3">
How many campaigns can I create?
</page-anchor>

You can create up to 2500 different campaigns.

<page-anchor el="h2">
Sending Campaigns
</page-anchor>

<page-anchor el="h3">
How come one of my substitution tags wasn't replaced during a send?
</page-anchor>

If one of your substitution tags wasn't replaced during a send, make sure that there is a value associated with that substitution tag. Search for the email address of the recipient that received the faulty email and double check the value of a custom field you may have used. You should also make sure that you spelled the substitution tag correctly when building the campaign.

<page-anchor el="h3">
Why aren't my substitution tags replaced in my test send?
</page-anchor>

The Send Test feature doesn't replace any substitution tags - it is only intended to show you how your campaign will be rendered in different email inboxes.

<page-anchor el="h3">
Why isn't my unsubscribed contact appearing in an unsubscribe group?
</page-anchor>

It can take up to 5 minutes before an unsubscribed contact will appear in an unsubscribe group.

<page-anchor el="h3">
How do I unschedule a campaign that I don't want to send?
</page-anchor>

You can unschedule a campaign by navigating to your list of campaigns, clicking the action menu next to the campaign you want to stop and clicking **Unschedule**. This returns the campaign to "draft" form. Also see _[How do I edit a scheduled campaign?](#-How-do-I-edit-a-scheduled-campaign)_ for additional detail.

<page-anchor el="h3">
How do I stop a campaign send?
</page-anchor>

When a campaign is in progress, a red X will appear next to that campaign on your campaigns page. Click this X to cancel your campaign. **NOTE: you cannot resume a cancelled campaign.** For more information on stopping sends in progress, see _[Can I stop a send in progress?]({{root_url}}/Classroom/Send/When_Emails_Are_Sent/can_i_stop_a_send_in_progress.html)_

<page-anchor el="h3">
Can I retrieve Marketing Campaigns events via the Event Webhook?
</page-anchor>

Yes! We send events from Marketing Campaigns to the Event Webhook, including A/B test campaign events.

<page-anchor el="h3">
Can I turn off open/click tracking?
</page-anchor>

No, click tracking is permanently enabled for all links included in your campaigns. Even if you disable click tracking under your general SendGrid settings, links clicked in your campaigns are still included in your link click tracking totals.

However, by adding the attribute `"clicktracking=off"` to the `<a>` tag of a link in one of your campaigns **before the href attribute**, you can prevent that link from being included in the link click tracking table for that campaign.

Clicks on this link are still recorded under your general SendGrid stats and the aggregate Campaign stats. To learn more about click tracking in Marketing Campaigns, [click here]({{root_url}}/User_Guide/Marketing_Campaigns/campaigns.html#-Link-Tracking).

For example, the link:

`<a clicktracking="off" href="www.example.com">Example Link</a>`

would not be included in the link click tracking table, but it would still be counted in your overall SendGrid stats and the aggregate click tracking stats for the campaign.

<page-anchor el="h3">
When a recipient clicks the unsubscribe link in my campaign, are they unsubscribed from all of my emails?
</page-anchor>

No, Marketing Campaigns uses unsubscribe groups that allow you to specify which groups of marketing email your recipients subscribe to. For more information on how to use unsubscribe groups, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h3">
Why am I required to select an unsubscribe group when sending a campaign?
</page-anchor>

All email sent through Marketing Campaigns is required to have an unsubscribe link allowing recipients to quickly and easily unsubscribe from your emails.

The [unsubscribe] tag must always be present, and you must always either select an unsubscribe group or include a custom unsubscribe URL. For detailed instructions on adding unsubscribe links to your campaigns, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

<page-anchor el="h2">
Sender Verification
</page-anchor>

<page-anchor el="h3">
Why didn't I receive a sender ID verification email?
</page-anchor>

If you didn't receive a sender ID verification email, try requesting the verification email to be resent. Simply navigate to Marketing Campaigns in the left hand navigation menu and click on **Senders**. Next to the sender you need to verify, click the action menu and select **Resend Verification**.

![]({{root_url}}/images/mc_faq_4.gif)

<page-anchor el="h3">
Why isn't my sender ID verified after clicking the verification link?
</page-anchor>

If you clicked the link in your sender ID verification email, but had to sign into SendGrid again, then your sender ID wasn't verified. You must be signed into SendGrid _before_ clicking the verification link in your email.

<page-anchor el="h3">
How long is the sender ID verification link valid?
</page-anchor>

The URL in your sender ID verification email is valid for 48 hours. After 48 hours you will have to request a new verification email to be delivered. To resend your verification email, navigate to Marketing Campaigns in the left hand navigation menu and click **Senders**. Next to the sender you need to verify, click the action menu and select **Resend Verification**.

<page-anchor el="h2">
Stats
</page-anchor>

<page-anchor el="h3">
Are stats included for email I send via SMTP and the SendGrid API?
</page-anchor>

No, these stats are specific to the email you send over Marketing Campaigns only.

<page-anchor el="h3">
How do I find stats for a specific campaign?
</page-anchor>

You can go into the settings menu after your campaign has started sending, and there will be a link for “Stats”.

<page-anchor el="h3">
Is there a way for me to get more stats than are shown on the UI?
</page-anchor>

You can always export a CSV of raw stats for any of your campaigns. That will include stats like CTR, total open rates, spam report rate, and more. To learn more about stats from Marketing Campaigns, [click here]({{root_url}}/User_Guide/Marketing_Campaigns/campaigns.html#-Campaign-Statistics).

Additionally, you can use [SendGrid's Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) to collect and store your Marketing Campaigns statistics.

<page-anchor el="h3">
What unit of time is used for my dashboard statistics?
</page-anchor>

Currently, you can see your aggregate stats over all time, and the graph displayed on the Marketing Campaigns Overview page displays stats for the previous 7 days.

<page-anchor el="h3">
How do I view statistics for a specific campaign?
</page-anchor>

Under **Marketing Campaigns** in the left hand navigation menu, select **Campaigns**. Find the campaign you want to see stats for in the list and click the action menu on the right. Click **Stats** to view statistics for that specific campaign.

![]({{root_url}}/images/mc_faq_9.gif)
