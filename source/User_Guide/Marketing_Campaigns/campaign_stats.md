---
layout: page
weight: 40
title: Campaign Statistics
navigation:
  show: true
seo:
  title: Campaign Statistics
  override: true
  description:
---
* [Viewing Campaign Statistics] (#-Viewing-Campaign-Statistics)
   * [Exporting Campaign Statistics] (#-Exporting-Campaign-Statistics)
   * [Exporting Statistics for Multiple Campaigns] (#-Exporting-Statistics-for-Multiple-Campaigns)
* [Leveraging Engagement Statistics] (#-Leveraging-Engagement-Statistics)
   * [Viewing Campaign Clicks and Opens] (#-Viewing-Campaign-Clicks-and-Opens)
   * [Creating a Segment Based on Your Engagement Metrics] (#-Creating-a-Segment-Based-on-Your-Engagement-Metrics)
   * [Exporting a list of Engaged Recipients] (#-Exporting-a-list-of-Engaged-Recipients)

{% anchor h2 %}
Viewing Campaign Statistics
{% endanchor %}
Once you send a campaign, you can view statistics related to that campaign.

*To view campaign statistics from the Campaigns page:*

1. Navigate to the campaign you want to view the stats for.
1. Click the name of the campaign to view the statistics, or select the action menu next to the campaign.

From the campaign stats page, you will be able to see your bounces, clicks, opens, etc.

{% anchor h3 %}
Exporting Campaign Statistics
{% endanchor %}

*To export a CSV with raw stats:*

 1. From the Campaigns page, click on the name of the campaign you want to review.
    <br>The Campaign Statistics page opens.
 1. Download the raw data by clicking **Export CSV** in the right-hand corner.

{% anchor h3 %}
Exporting Statistics for Multiple Campaigns
{% endanchor %}

You can export a CSV containing the statistics for multiple campaigns. This exported CSV will closely resemble the CSV exported for a single campaign’s statistics, except for two additional columns containing the campaign name and ID for each row of statistics. These columns will be labeled “Campaign Name” and “Campaign ID”, respectively.

*To export statistics for multiple campaigns:*

1. Navigate to the Campaigns page within Marketing Campaigns.
1. Check the box next to each campaign that you want to include in your stats CSV.
1. Once you’ve selected the campaigns that you want to include in your CSV, click **Export CSV**.

{% info %}
Campaigns are ordered from most to least recent.
The CSV will include a row for each day that SendGrid has gathered statistics.
Every stats CSV that you export will contain a row containing the totals for each column.
{% endinfo %}

{% anchor h2 %}
Leveraging Engagement Statistics
{% endanchor %}

To learn how to leverage your engagement statistics, please visit our [Classroom]({{root_url}}/Classroom/Basics/Marketing_Campaigns/engagement_stats.html).

{% anchor h3 %}
Viewing Campaign Clicks and Opens
{% endanchor %}

Marketing Campaigns makes it very easy to view recipients who have either opened one of your campaigns or have clicked links within your campaign.

*To view campaign clicks and opens:*

1. From the Campaigns page or the individual campaign stats page, hover over the **Unique Opens** or **Unique Clicks** stats.
1. Click **View Details**.
   <br>A real-time list of all recipients who either opened your campaign or clicked a link within your campaign appears.

{% anchor h3 %}
Creating a Segment Based on Your Engagement Metrics
{% endanchor %}

*To create a segment of recipients based on who clicked within or opened one of your campaigns:*

1. From the Campaigns page or the individual campaign stats page, hover over the **Unique Opens** or **Unique Clicks** stats.
1. Click **View Details** and then select **Create Segment**.

   A window opens with segmentation options. By default, the segment will contain the conditions to capture all recipients who either opened your campaign or clicked within your campaign. The segment will be given the name _“Contacts who [clicked/opened] [your campaign name]”_. You can rename this segment or modify the conditions of the segment as you wish directly in this window. For more information on segmentation, [click here]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

1. Click **Save**. 
<br>You now have a dynamic segment that will continuously update as recipients engage with this campaign.

{% anchor h3 %}
Exporting a list of Engaged Recipients
{% endanchor %}

In addition to creating a dynamic segment based on campaign engagement as described above, you can also export a list of all contacts who have either opened your campaign or have clicked a link within your campaign (up until that moment).

*To export a list of engaged recipients:*

1. From the Campaigns page or the individual campaign stats page, hover over the **Unique Opens** or **Unique Clicks** stats.
1. Click **View Details**.
<br>A real-time list of all recipients who either opened your campaign, or clicked a link within your campaign appears.
1. Click **Export CSV**.
