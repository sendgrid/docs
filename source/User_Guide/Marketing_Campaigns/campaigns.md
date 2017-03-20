---
layout: page
weight: 90
title: Campaigns
navigation:
  show: true
seo:
  title: Create and Send Campaigns
  override: true
  description:
---

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [Create a Campaign](#-Create-a-New-Campaign)
* [Choose Your Template](#-Choose-your-template)
* [Add Your Content and Manage Your Settings](#-Add-your-content-and-manage-your-settings)
* [View All of Your Campaigns](#-View-All-of-Your-Campaigns)
* [Campaign Action Items](#-Campaign-Action-Items)
* [A/B Test Your Campaigns](#-AB-Test-Your-Campaigns)
* [Campaign Statistics](#-Campaign-Statistics)

The Campaigns page is the central hub for managing all of your email marketing campaigns. This is where you'll come to create new campaigns, store your campaign drafts, and monitor the performance of previous campaigns you've already sent.

{% anchor h2 %}
Create a New Campaign
{% endanchor %}

{% info %}
Accounts are currently limited to 2500 campaigns.
{% endinfo %}

When you’re ready to create an email campaign, you’ll start here on the Campaigns page. Simply click **Create Campaign** in the upper right. From here you will be able to choose a template or upload HTML to use for this campaign, add content, and send the email.

{% anchor h3 %}
Choose your template
{% endanchor %}

{% info %}
You can also create a campaign from your [templates list]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html)
{% endinfo %}

We have provided you with multiple pre-built, responsive templates to choose from.

You can also use your own design by creating a brand new template using our design editor or by uploading your own custom HTML.

{% warning %}
When uploading HTML via the importer in the design editor, your HTML will not be saved as a reusable template.
{% endwarning %}

We have also included the option for you to simply paste HTML into the design editor: just click the "Paste HTML" tab in the **Create a Campaign** modal and paste in your HTML for one-time use in your new campaign.

![]({{root_url}}/images/campaigns_1.png)

{% anchor h3 %}
Add your content and manage your settings
{% endanchor %}

{% info %}
Your changes are automatically saved every 2 minutes.
{% endinfo %}

Once you choose your template, you will be taken to the design editor. From here you can change the content in your email without affecting your template, meaning that any changes here will be saved for this campaign only and will not modify your template. This allows you to use the same template multiple times without having to worry about changes from campaign to campaign.

As you make changes to your campaign, you will notice the “Save” button change to “Saving…” as the editor autosaves your changes.

{% anchor h2 %}
View All of Your Campaigns
{% endanchor %}

From the campaigns page, you can view all of your campaigns that you’re working on or have sent. For each campaign you’ll see the campaign name, status, and when the campaign was last edited.

For campaigns you’ve sent, you’ll see the following high level statistics:

* **[Delivered rate]({{root_url}}/Glossary/deliveries.html)** - the number of emails delivered divided by the total number of delivery requests.
* **[Open rate]({{root_url}}/Glossary/open_rate.html)** - the number of emails opened divided by the total number of delivered emails.
* **[Click rate]({{root_url}}/Glossary/ctr.html)** - the number of clicks divided by the number of opens.
* **[Unsubscribe rate]** - the number of recipients who unsubscribed from your emails divided by the total number of delivered campaigns.

You can choose to see either raw numbers or percentages for these high level stats when looking at your campaign statistics by clicking the **#** or **%** toggle.

For additional information about SendGrid statistics, visit our [statistics User Guide]({{root_url}}/User_Guide/Statistics/index.html#-Metrics).

{% anchor h3 %}
Filter your campaign by status
{% endanchor %}

You may filter which campaigns are displayed on this list by status:

* **All** - all of your campaigns, regardless of status
* **Sent** - campaigns that you've sent to your recipients
* **Draft** - campaigns that you’ve begun building but have neither sent nor scheduled
* **In Progress** - campaigns that are currently being sent to recipients or have been scheduled for sending
* **Canceled** - any campaigns that you cancelled mid-send
* **Scheduled** - campaigns that have been scheduled for sending, but have not yet been sent

{% anchor h3 %}
Search your campaigns
{% endanchor %}

As you create and send more campaigns, you may wish to find older campaigns to reference their statistics or to reuse content for a new campaign.

To quickly search for a specific campaign on the campaigns page, simply type the name or a word or phrase included in the name into the search bar.

![]({{root_url}}/images/campaigns_2.png)

All campaigns with names containing the searched word or words will be returned, with up to 10 search results displayed per page.

{% anchor h2 %}
Campaign Action Items
{% endanchor %}

Next to each campaign, you will find a small action cog icon. Clicking this will present you with several actions that can be performed on the campaign, depending on its status. For example, a campaign that is scheduled to be delivered at a future date and time can be unscheduled from this menu, but a campaign that has already been sent will not display that option.

![]({{root_url}}/images/campaigns_3.png)

{% anchor h3 %}
Unschedule a campaign
{% endanchor %}

You can unschedule a campaign by clicking the action cog then clicking **Unschedule**. This will return your campaign to a “draft” status. Note, in order to edit or reschedule delivery time of a scheduled campaign you _must_ first unschedule it.

{% anchor h3 %}
Edit
{% endanchor %}

To edit a campaign that is in “draft” status, simply click the campaign name, or click the action cog and then **Edit**. This will open the design editor, allowing you to use the drag & drop modules or the code editor to modify your campaign. **Note: you can only edit a campaign that is in “draft” status.**

{% anchor h3 %}
Duplicating a campaign
{% endanchor %}

To duplicate an existing campaign, just click the action cog to the right of that campaign and choose **Duplicate**. A new campaign will be created and you’ll be taken to the campaign builder where you can begin working on this new, duplicated campaign. Note, the following items will be carried over; be sure to review these to make sure you address any duplicated elements you wish to update:

* **Campaign name** - This will auto-populate with the original campaign name plus an underscore and a series of numbers.
* **From Sender** - This will be set to the sender identity selected for the original campaign.
* **Email Subject** - This field will include the same subject used for the original campaign.
* **Categories** - Any categories that you specified in your original email will be carried over to your duplicate.
* **List/Segments to Send To** - This will be set to the list(s) or segment(s) of recipients that you specified on your original campaign.
* **Unsubscribe Group** - This will be set to the same unsubscribe group used in your original campaign.
* **Send Immediately** - This toggle will be set to the same setting as your original: if you scheduled your original campaign, the same schedule will be set for your duplicate. [Click here if you need to unschedule your campaign.]({{root_url}}/Classroom/Basics/Marketing_Campaigns/marketing_campaigns_faqs.html#-How-do-I-edit-a-scheduled-campaign)

{% info %}
Your duplicated campaign will automatically be added to your campaign list, even if you do not click the **Save** button within the editor.
{% endinfo %}

{% anchor h3 %}
Create template
{% endanchor %}

Clicking the action cog and selecting **Create Template** will open a duplicate of your campaign's template in the design editor. This is useful if you would like to leverage your campaign as a template that you can select when creating a new campaign. Make any modifications you would like, choose a new template name, and click **Save Template**. You’ll be able to find this new template in your template library when creating a new campaign.

Creating a template from a campaign, as opposed to _duplicating_ a campaign, is an easy way to save the content of your campaign without saving the campaign settings. When you duplicate a campaign, the campaign's settings are duplicated as well— make sure to review these settings before sending your campaign to avoid using the wrong subject, sender identity, categories, etc.

{% anchor h3 %}
Preview
{% endanchor %}

<div class="row">
  <div class="col-md-8">
  <p>
    Clicking the action cog and selecting <strong>Preview</strong> will open a modal window containing a mobile and desktop preview of your campaign. You can toggle between between the two previews by clicking the monitor/phone icons.
  </p>
  </div>
  <div class="col-md-4">
    <img src="{{root_url}}/images/campaigns_4.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

{% anchor h3 %}
Delete a campaign
{% endanchor %}

Clicking the action cog and selecting **Delete** allows you to delete the campaign. You will be presented with a confirmation window allowing you to either confirm or cancel your choice.

{% warning %}
Deleted campaigns cannot be recovered! Please be careful when deleting a campaign.
{% endwarning %}

{% anchor h3 %}
Settings
{% endanchor %}

{% anchor h4 %}
Campaign Settings
{% endanchor %}

**Campaign Name:** This is the name of your campaign, so you can find it again from the campaigns page. Newly created campaigns are named “Untitled” unless you specify a name. This name is only used internally within the SendGrid Marketing Campaigns interface— _it will not be visible to your recipients._

**From Sender:** This is where you select the sender identity from whom your campaign will be sent. The recipient will see the name associated with this sender identity, and the reply to and from addresses will be the email address associated with this sender identity.

{% warning %}
Your [sender identity]({{root_url}}/User_Guide/Marketing_Campaigns/senders.html) must be verified before you use it to send a campaign. After scheduling a campaign, the sender identity selected cannot be deleted.
{% endwarning %}

**Email Subject:** The subject line that the user will see. You can use substitution tags to further personalize the email subject for each of your recipients.

If you are using A/B testing and have chosen subject line as the selection criteria, then you will select the final subject line after your test is complete from the **Test** tab.

**Email Preheader:** A brief description of the content of your campaign. This description will appear directly after the subject line when a recipient previews your email in their inbox, and is one of the very first items that a recipient will see when viewing your campaign. This setting allows you to easily create a unique preheader that will quickly communicate the value of your content to the recipient.

![]({{root_url}}/images/campaigns_5.png)

**Categories:** Categories help you track delivery metrics in the SendGrid advanced statistics section based on how you classify your campaigns. To add a category, type the name and press enter.

{% info %}
You can assign up to 10 different categories to each campaign.
{% endinfo %}

{% anchor h4 %}
Recipients
{% endanchor %}

**List/Segments to Send To:** The recipients who will receive your campaign. You may enter one or more lists or segments. Any duplicate contacts across multiple selected lists or segments will still only receive one copy of the campaign. Note: you must create your lists or segments in the **Contacts** section before you’ll be able to select them here.

**Unsubscribe Group:** This allows you to select which unsubscribe group to apply to this campaign so that users who have already opted out of this group of emails are not included in your recipients list. Any recipients who click the unsubscribe link in your campaign will be added to this unsubscribe group and will not receive future emails of this type.

In order to remain [CAN-SPAM]({{root_url}}/Glossary/can_spam.html) compliant and to keep your sender reputation high, it is important to ensure you don't send emails to uninterested recipients who have already unsubscribed. You can create a new unsubscribe group from our [Unsubscribes Group page](https://app.sendgrid.com/suppressions/advanced_suppression_manager).

{% info %}
You must [create your unsubscribe group]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html) on the suppressions page before you'll be able to select that group from the campaigns page.
{% endinfo %}

**Send Test Email:** In order to review your campaign in real inboxes, simply enter your email address and/or the email addresses of others who you’d like to provide feedback and click Send. It’s best practice to send to a variety of inboxes (such as Gmail, Yahoo, Outlook, etc.) and open across a variety of devices.

To send a test email to more than one recipient, simply separate each address with a comma. You can send test emails to no more than 10 different addresses.

{% anchor h3 %}
Scheduling
{% endanchor %}

**Send Immediately:** You can set when this email will be sent to your contacts. **Send Immediately** toggled "On" by default. If you would like to schedule your campaign for a future date, toggle **Send Immediately** to "Off" and enter the date, timezone, and time that you want your campaign to be sent. Scheduled campaigns will be scheduled only after you click **Schedule** in the upper right hand corner. Your timezone is set in your [account settings]({{root_url}}/User_Guide/Settings/account.html).

[Click here if you've accidentally scheduled a campaign and want to unschedule it!]({{root_url}}/Classroom/Basics/Marketing_Campaigns/marketing_campaigns_faqs.html#-How-do-I-edit-a-scheduled-campaign)

{% anchor h2 %}
A/B Test Your Campaigns
{% endanchor %}

You can easily run A/B tests on your campaigns with up to 6 different versions differentiated either by subject line or email content. To learn more about A/B testing in Marketing Campaigns, [click here]({{root_url}}/User_Guide/Marketing_Campaigns/a_b_testing.html).

{% anchor h2 %}
Campaign Statistics
{% endanchor %}

Once you have sent a campaign, click the campaign name to view its statistics. Alternatively, you can click the gear icon next to the campaign and then choose **Stats**. From the campaign's stats page, you will be able to see your bounces, clicks, opens, etc. You can also export a CSV with the raw stats by clicking **Export CSV**.

![]({{root_url}}/images/campaigns_6.jpg)

{% anchor h3 %}
A/B Test Statistics
{% endanchor %}

If you ran an A/B test for your campaign, then you will find statistics for each version you sent from the campaign's stats page.

![]({{root_url}}/images/a_b_test_stats.png)

{% anchor h3 %}
Link tracking
{% endanchor %}

You can also view detailed statistics about the links you include in your campaigns. From your Campaign Statistics page you will see a table ranking your links according to the number of times they were clicked by your recipients. You will see the number of _total clicks_ for each link in addition to number of _unique clicks_ for each link. All of these stats can be displayed as raw numbers or percentages by clicking the **#/%** toggle switch.

{% info %}
You can view which specific recipients clicked links within your campaign by examining your _engagement statistics_. From the campaign page, hover over the **Unique Clicks** tile and click **View Details**.
{% endinfo %}

{% info %}
Click tracking stats will be displayed for the top 100 most frequently clicked links within your campaign.
{% endinfo %}

![]({{root_url}}/images/campaigns_7.png)

For more information about how to add links to your campaign to ensure that they are tracked, please visit our [Classroom]({{root_url}}/Classroom/Track/Clicks/click_tracking_links_with_substitution_tags.html).

{% anchor h3 %}
Exporting statistics for multiple campaigns
{% endanchor %}

You can export a CSV containing the statistics for multiple campaigns. This exported CSV will closely resemble the CSV exported for a single campaign’s statistics, with the exception of two additional columns containing the campaign name and ID for each row of statistics. These columns will be labeled “Campaign Name” and “Campaign ID”, respectively.

<div class="row">
  <div class="col-md-4">
    <img src="{{root_url}}/images/campaigns_8.png" class="img-responsive pull-left"/>
  </div>
  <div class="col-md-8">
    <p>
      To export statistics for multiple campaigns, navigate to your Campaigns page within Marketing Campaigns. Check the box next to each campaign that you want to include in your stats CSV. As you add campaigns, you will notice a number on the bulk dropdown menu in the upper right increase.
    </p>
  </div>
  <br>
</div>

<div class="row">
  <div class="col-md-8">
    <p>Once you’ve selected the campaigns that you want to include in your CSV, click this button and select Export CSV.</p>
    <ul>
      <li>Campaigns are ordered from most to least recent.</li>
      <li>The CSV will include a row for each day that SendGrid has gathered statistics.</li>
      <li>Every stats CSV that you export will contain a row containing the totals for each column.</li>
    </ul>
  </div>
  <div class="col-md-4">
    <img src="{{root_url}}/images/campaigns_9.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

![]({{root_url}}/images/campaigns_10.png)

{% anchor h2 %}
Engagement statistics
{% endanchor %}

{% info %}
To learn how to leverage your engagement statistics, please visit our [Classroom]({{root_url}}/Classroom/Basics/Marketing_Campaigns/engagement_stats.html)!
{% endinfo %}

{% anchor h3 %}
View who clicked or opened your campaigns
{% endanchor %}

Marketing Campaigns makes it very easy to create a dynamic segment of recipients who have either opened one of your campaigns or have clicked links within your campaign.

First, from either the **Campaigns page** or the individual **campaign stats page**, hover over the “Unique Opens” or “Unique Clicks” stats.

_From the campaigns list view:_

![]({{root_url}}/images/campaigns_11.png)

_From the individual campaign stats page:_

![]({{root_url}}/images/campaigns_12.png)

Click **View Details**.

This will present you with a real-time list of all recipients who either opened your campaign, or clicked a link within your campaign (depending on the particular metric you selected).

{% anchor h3 %}
Create a segment based on your engagement metrics
{% endanchor %}

To create a segment of recipients based on who clicked within or opened one of your campaigns, follow the steps described above to view who clicked or opened your campaigns, then click **Create Segment**.

This will open a segmentation window. By default, the segment will contain the conditions to capture all recipients who either opened your campaign or clicked within your campaign. The segment will be given the name _“Contacts who [clicked/opened] [your campaign name]”_.

You can rename this segment or modify the conditions of the segment as you wish directly in this window. For more information on segmentation, [click here]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

Once you’re done creating your segment, click **Save**. You now have a dynamic segment that will continuously update as recipients engage with this campaign.

{% anchor h3 %}
Export a list of engaged recipients
{% endanchor %}

In addition to creating a dynamic segment based on campaign engagement as described above, you can also export a list of all contacts who have either opened your campaign or have clicked a link within your campaign (up until that moment).

Simply hover over either the "Unique Opens" or "Unique Clicks" stats of the campaign that you're interested in. Then click **View Details**. Finally, click **Export CSV**.

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/overview.html">Dashboard</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/templates.html">Marketing Templates</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
