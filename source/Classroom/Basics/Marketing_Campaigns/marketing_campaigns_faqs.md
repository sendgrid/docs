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

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [A/B Testing]()
* [Billing & Pricing]()
* [Campaigns & Campaign Editor]()
* [Contacts & CSV Uploading]()
* [Segmentation]()
* [Sending Campaigns]()
* [Sender Verification]()
* [Stats]()

{% anchor h2 %}
A/B Testing
{% endanchor %}

{% anchor h3 %}
Where can I manually select the winner of an A/B test campaign?
{% endanchor %}

You can navigate to the campaign's stats to select a winner.

{% anchor h3 %}
When can I manually pick the winner of an A/B test campaign?
{% endanchor %}

You will receive an email when your A/B test has completed reminding you to manually select a winner. You may manually select a winner at any time immediately after beginning an A/B test campaign— you do not have to let the test finish before selecting a winner.

{% anchor h3 %}
Can I change the winning criteria after sending an A/B test campaign?
{% endanchor %}

No, you cannot change the winning criteria after starting an A/B test.

{% anchor h3 %}
Can I see which A/B test variation was sent to each recipient?
{% endanchor %}

No, currently you cannot see which recipient received which version.

{% anchor h3 %}
Can I export raw stats for each of my A/B test variations?
{% endanchor %}

Yes! Simply click "Export CSV" button on the campaign stats page. The exported CSV will contain a line of stats for each individual variation you sent.

**********

{% anchor h2 %}
Billing & Pricing
{% endanchor %}

{% anchor h3 %}
Where can I find my monthly invoice?
{% endanchor %}

You can find your invoice from your SendGrid Billing Settings. From your SendGrid dashboard, click Settings then Plan & Billing Details. Here you can find how much you are being billed for stored contacts (e.g. how much you are charged per 10,000 contacts) as well as the total you owe.

Contacts stored on any subusers of your account will be included in your total.

{% anchor h3 %}
Which contacts am I charged for?
{% endanchor %}

You will be charged to store all of your contacts, regardless of whether or not some contacts have unsubscribed from one or more campaigns.

You are not charged when sending a campaign to a contact that has been added to the unsubscribe group associated with that campaign.

You are charged when sending emails to address that are invalid, report your campaign as spam, or bounce.

{% anchor h3 %}
How much does Marketing Campaigns cost?
{% endanchor %}

You will be charged $10.00 for every 10,000 contacts you store. Your first 2,000 contacts are free. For a detailed discussion of Marketing Campaigns pricing, please see our pricing page.

{% anchor h3 %}
Can I pay a prorated rate if I don't store my contacts for an entire month?
{% endanchor %}

There is no monthly proration for contact storage. You will be charged for the maximum size that your contact list reaches each month. For example, if you upload your contacts on the last day of the month, you will still be charged the full amount to store those contacts that month.

**********

{% anchor h2 %}
Campaigns & Campaign Editor
{% endanchor %}

{% anchor h3 %}
How come I can't select a sender ID in the campaign editor after creating it?
{% endanchor %}

Make sure that you have verified all of your sender IDs. You can only select a valid sender ID when sending a campaign. You can resend a sender ID verification email from the sender ID's details page.

{% anchor h3 %}
If I send a campaign to multiple lists or segments, will contacts on each list receive a duplicate email?
{% endanchor %}

No, each recipient will only receive a campaign once regardless how many times they appear on a list or segment.

{% anchor h3 %}
When scheduling a camping, why do I get the error: "Please choose a future date and time for sending your campaign"?
{% endanchor %}

This error often occurs if you enter a time in the past to deliver a campaign. Make sure that your timezone is set correctly in your Account Details.

{% anchor h3 %}
How do I edit a schedule campaign?
{% endanchor %}

First, unschedule the campaign that you want to edit— this will return your campaign to "draft form". When finished editing your campaign, simply reschedule your desired send time.

{% anchor h3 %}
Can I restore a deleted campaign?
{% endanchor %}

Deleted campaigns cannot be restored. Please be careful when deleting a campaign!

{% anchor h3 %}
Where can I get a list of all of my substitution tags to insert into my campaign?
{% endanchor %}

When in the Campaign Editor, click the Build tab in the left hand sidebar. Here you will see a full list of your substitution tags, along with icons you can click to easily copy a tag.

{% anchor h3 %}
Can I use substitution tags in my subject line?
{% endanchor %}

Yes, using substitution tags in your subject line is a great way to further customize your emails for each of your recipients.

{% anchor h3 %}
Where are uploaded images stored and how do I access them?
{% endanchor %}

All images uploaded are stored in your Image Library and are shared between transactional templates and Marketing Campaigns. To access your images, simply open a campaign in the Campaign Editor (or a transactional template) and click the small image icon in the toolbar.

{% anchor h3 %}
Are unsubscribe links automatically added to my campaign?
{% endanchor %}

If you specify a location within the body of your campaign by adding the [unsubscribe] tag, we will insert an unsubscribe link there. If you do not include the [unsubscribe] tag anywhere in your body, we will append the unsubscribe link at the end of your email. For more information on adding unsubscribe links to your campaigns, click here.

{% anchor h3 %}
Why is my [unsubscribe] tag not being replaced with an unsubscribe link?
{% endanchor %}

Make sure that you have inserted the [unsubscribe] tag in the body of your campaign and have selected an unsubscribe group for your campaign. You must specify an unsubscribe group in order for the unsubscribe link to be added. For more information on adding unsubscribe links to your campaigns, click here.

{% anchor h3 %}
What is a suppression group?
{% endanchor %}

A suppression group, referred to as an unsubscribe group is a group of recipients that we will not send emails to. Unsubscribe groups allow your readers to opt out of certain types, or groups, of emails instead of globally unsubscribing from all of your emails. They are especially useful if you send several very different types of email to the same recipients. For more information on using unsubscribe links in your campaigns, click here.

{% anchor h3 %}
What is the difference between suppression groups and unsubscribe groups?
{% endanchor %}

Suppression groups and unsubscribe groups are the same. We refer to suppression groups as unsubscribe groups. For more information on using unsubscribe links in your campaigns, click here.

{% anchor h3 %}
Where can I find a list of contacts who have marked one of my campaigns as spam?
{% endanchor %}

You can find a list of contacts who have marked one of your campaigns as spam by clicking Stats from the left hand sidebar then filtering the results by "Spam Reports".

{% anchor h3 %}
How many campaigns can I create?
{% endanchor %}

You can create up to 2500 different campaigns.

**********

{% anchor h2 %}
Contacts & CSV Uploading
{% endanchor %}

{% anchor h3 %}
How come my list and segment counts aren't updated after adding new contacts?
{% endanchor %}

It is normal to see a slight delay between uploading contacts and seeing your list counts get updated, but if you still don't see your list counts updated after 30 minutes please reach out to Support or your Customer Success Manager.

{% anchor h3 %}
How do I add an existing contact to an existing list?
{% endanchor %}

Navigate to your contacts page and search for the contact that you want to add. Click on that contact and scroll down until you see the Associated Lists tab. On this tab you'll find a drop down menu allowing you to select a preexisting list to add this contact to.

{% anchor h3 %}
How do I update the custom fields for one of my contacts?
{% endanchor %}

You can either re-upload a CSV containing your new custom fields. You can also manually edit the custom fields for an individual contact by navigating to your Contacts page in Marketing Campaigns, searching for and selecting the contact that you want to update, and scrolling down to the Custom Fields tab. Finally, click Edit to begin updating your contact's custom fields.

{% anchor h3 %}
How do I updating an existing contact list?
{% endanchor %}

You can either upload a CSV of contacts to an existing list or you can manually add contacts to a list.

To upload a CSV to an existing list, navigate to the Contacts page and click Add List or Segment. Click Upload CSV. Under the dropdown menu titled Add to an existing list select the list you want to add your new contacts to. Continue with the CSV upload process as described here.

To manually add a contact to an existing list, navigate to the Contacts page and click Add List or Segment. Click Manual Add. Under the dropdown menu titled Add to an existing list select the list you want to add your new contact to. Continue adding your contact as described here.

{% anchor h3 %}
Why am I receiving errors when uploading a CSV?
{% endanchor %}

The most common reason users receive errors when uploading CSVs is that there are incorrectly formatted dates in the CSV file. Make sure that your dates all have 4 year digits and are in MM/DD/YYYY format. If you are still having problems, double check the CSV upload steps described here.

{% anchor h3 %}
Why does my contact upload summary video show a smaller total than the number of contacts I uploaded?
{% endanchor %}

You have probably uploaded duplicate contacts. Double check your CSV for duplicates, and if you are certain there are none, please reach out to your Customer Success Manager or contact Support.

{% anchor h3 %}
What is the file size limit when uploading CSVs?
{% endanchor %}

You can upload CSV files up to 2GB in size.

{% anchor h3 %}
How long will it take to upload a CSV?
{% endanchor %}

With a relatively simple CSV containing only the email, first_name, and last_name fields you should expect to see 8 million contacts uploaded in 6 hours (or about 2.7 seconds per 1,000 contacts). As you increase the number of custom fields included in your CSV, the amount of time required will increase.

**********

{% anchor h2 %}
Segmentation
{% endanchor %}

{% anchor h3 %}
Why can't I search for partial words of custom fields when creating a segment?
{% endanchor %}

We currently only allow full word searches when searching for custom field values. The only exception is email addresses: you may search for parts of a word or address when looking up email addresses. For example, a search for "gmail" might return gmail.com, gmail.cn, x.gmail.com, etc.

{% anchor h3 %}
How do I view which specific recipients have opened or clicked within one of my campaigns?
{% endanchor %}

You can view which recipients have opened or click in your campaigns by creating a segment based on your campaign's engagement statistics. For detailed instructions on how to use your engagement stats, visit our User Guide. For other ideas on how to leverage these engagement stats, checkout this classroom article.

{% anchor h3 %}
What is the maximum number of lists and segments that I can create?
{% endanchor %}

You can create up to 100 lists and 100 segments.

**********

{% anchor h2 %}
Sending Campaigns
{% endanchor %}

{% anchor h3 %}
How come one of my substitution tags wasn't replaced during a send?
{% endanchor %}

If one of your substitution tags wasn't replaced during a send, make sure that there is a value associated with that substitution tag. Search for the email address of the recipient that received the faulty email and double check the value of a custom field you may have used. You should also make sure that you spelled the substitution tag correctly when building the campaign.

{% anchor h3 %}
Why aren't my substitution tags weren't replaced in my test send?
{% endanchor %}

The Send Test feature doesn't replace any substitution tags - it is only intended to show you how your campaign will be rendered in different email inboxes.

{% anchor h3 %}
Why isn't my unsubscribed contact appearing in an unsubscribe group?
{% endanchor %}

It can take up to 5 minutes before an unsubscribed contact will appear in an unsubscribe group.

{% anchor h3 %}
How do I unschedule a campaign that I don't want to send?
{% endanchor %}

You can unschedule a campaign by navigating to your list of campaigns, clicking the action cog next to the campaign you want to stop and clicking Unschedule. This returns the campaign to "draft" form.

{% anchor h3 %}
How do I stop a campaign send?
{% endanchor %}

When a campaign is in progress, a red X will appear next to that campaign on your campaigns page. Click this X to cancel your campaign. NOTE: you cannot resume a cancelled campaign.

{% anchor h3 %}
Can I retrieve Marketing Campaigns events via the Event Webhook?
{% endanchor %}

Yes! We send events from Marketing Campaigns to the Event Webhook, including A/B test campaign events.

{% anchor h3 %}
Can I turn off open/click tracking?
{% endanchor %}

From the internal wiki: "At this time we enforce open and click tracking so all users get the benefits of this feature."

{% anchor h3 %}
When a recipient clicks the unsubscribe link in my campaign, are they unsubscribed from all of my emails?
{% endanchor %}

No, Marketing Campaigns uses unsubscribe groups that allow you to specify which groups of marketing email your recipients subscribe to. For more information on how to use unsubscribe groups, click here.

{% anchor h3 %}
Why am I required to select an unsubscribe group when sending a campaign?
{% endanchor %}

All email sent through Marketing Campaigns is required to have an unsubscribe link allowing recipients to quickly and easily unsubscribe from your emails.
**********

{% anchor h2 %}
Sender Verification
{% endanchor %}

{% anchor h3 %}
Why didn't I receive a sender ID verification email?
{% endanchor %}

If you didn't receive a sender ID verification email, try requesting the verification email to be resent. Simply navigate to Marketing Campaigns in the left hand sidebar and click on Senders. Next to the sender you need to verify, click the action cog and select Resend Verification.

{% anchor h3 %}
Why isn't my sender ID verified after clicking the verification link?
{% endanchor %}

If you clicked the link in your sender ID verification email, but had to sign into SendGrid again, then your sender ID wasn't verified. You must be signed into SendGrid before clicking the verification link in your email.

{% anchor h3 %}
How long is the sender ID verification link valid?
{% endanchor %}

The URL in your sender ID verification email is valid for 48 hours. After 48 hours you will have to request a new verification email to be delivered. To resend your verification email, navigate to Marketing Campaigns in the left hand sidebar and click Senders. Next to the sender you need to verify, click the action cog and select Resend Verification.

**********

{% anchor h2 %}
Stats
{% endanchor %}

{% anchor h3 %}
Are stats included for email I send via SMTPAPI and the Web API?
{% endanchor %}

No, these stats are specific to the email you send over Marketing Campaigns only.

{% anchor h3 %}
How do I find stats for a specific campaign?
{% endanchor %}

You can go into the settings menu after your campaign has started sending, and there will be a link for “Stats”.

{% anchor h3 %}
Is there a way for me to get more stats than are shown on the UI?
{% endanchor %}

You can always export a CSV of raw stats for any of your campaigns. That will include stats like CTR, total open rates, spam report rate, and more.

{% anchor h3 %}
What unit of time is used for my dashboard statistics?
{% endanchor %}

Currently, you can see your aggregate stats over all time, and the graph displayed on the Marketing Campaigns Overview page displays stats for the previous 7 days.

{% anchor h3 %}
Do the stats displayed on my Marketing Campaigns overview page include email sent via SMTP or the Web API?
{% endanchor %}

No, the stats displayed on the Marketing Campaigns Overview page are specific to email sent via Marketing Campaigns.

{% anchor h3 %}
How do I view statistics for a specific campaign?
{% endanchor %}

Under Marketing Campaigns in the left hand sidebar, select Campaigns. Find the campaign you want to see stats for in the list and click the action cog on the right. Click Stats to view statistics for that specific campaign.

{% anchor h3 %}
Are there more stats available than are shown in the UI?
{% endanchor %}

Yes, you can export a CSV of raw stats for any of your campaigns. This CSV will include stats like click-through rate, total open rate, spam report rate, and more. To learn more about stats from Marketing Campaigns, click here.
