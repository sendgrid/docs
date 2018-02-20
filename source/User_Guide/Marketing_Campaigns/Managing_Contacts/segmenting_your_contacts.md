---
layout: page
weight: 70
title: Segmenting your Contacts
navigation:
  show: true
seo: 
  title: Segmenting your Contacts
  keywords: Segmentation, email segmentation, targeted marketing, email, marketing campaigns
  override: true
  description:
---
- [Creating a Segment](#-Creating-a-Segment)
- [Exporting a Segment](#-Exporting-a-Segment)


You can filter the information stored in your [contact lists](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html) to create segments. Segmenting contacts using different conditions allows you to create marketing campaigns that directly addresses the wants and needs of a particular audience. You can create a segment that pulls from ALL CONTACTS or a specific existing list. [Custom fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html) allow you to use unique information to identify contacts for different segments.
Segments are dynamically updated over time as you add contacts who meet the criteria of your segment, or as the traits of your contacts change. For example, a segment with the criteria ”opened an email within 30 days” will evolve as contacts engage (or don’t engage) with your email. 

{% anchor h2 %}
Creating a Segment
{% endanchor %}

You can create a new segment with multiple conditions based on the information you have stored about your contacts. This
includes email, first_name, last_name, and all of the custom fields you have created before making this segment.

{% info %}
You can create up to 200 segments.
{% endinfo %}

*To create a segment:*

1. Navigate to **Marketing** and then select **Contacts**.
1. Click **Create Segment**. 
1. Choose **Segment all contacts** or **Segment an existing list**.
1. Enter a *Segment Name*.
1. To segment an existing list, select a list from the *Select List to Segment* drop-down. 
1. From the *Condition* drop-down, choose the desired condition or custom field.
1. From the *Criteria* drop-down, choose from a list of available operators based on the chosen condition.


For example, to create a segment of recipients that have clicked on a link in a specific marketing campaign:

1. Navigate to **Marketing** and then select **Contacts**.
1. Click **Create Segment**. 
1. Choose **Segment all contacts** or **Segment an existing list**.
1. Enter a *Segment Name*. 
1. From the *Condition* drop-down, select **Engagement:Clicks**. 
1. From the *Criteria* drop-down. select **clicked**. 
1. From the last drop-down, select the name of the campaign you want to use for the segment. 

{% info %}
The *Criteria* drop-down contains operators that tell the segment *how* to apply the condition.
{% endinfo %}

Depending on which condition is selected, the criteria you can choose from differ. The criteria available to assign to conditions will depend on the field type (Text, Date, or Number).  For example, a condition labeled "Number” will show `GREATER THAN`, `LESS THAN`, and `EQUALS` as options whereas a “Text” field will show `IS` and `IS NOT` as options.


<table class="table" style="table-layout:fixed">
  <tr>
    <th> Criteria</th>
    <th> Description</th>
  </tr>
  <tr>
    <td>is</td>
    <td>data matches the text input exactly</td>
  </tr>
  <tr>
    <td>is not</td>
    <td>the data does not match the text input exactly</td>
  </tr>
  <tr>
    <td>contains word</td>
    <td>data includes the text input</td>
  </tr>
  <tr>
    <td>is before</td>
    <td>the date of the event is before the date selected</td>
  </tr>
  <tr>
    <td>is after</td>
    <td>the date of the event is after the date selected</td>
  </tr>
  <tr>
    <td>is within</td>
    <td>the date of the event is within a selected date range</td>
  </tr>
  <tr>
    <td>opened</td>
    <td>the contact opened an email from a campaign</td>
  </tr>
  <tr>
    <td>not opened</td>
    <td>the contact did not open an email from a campaign</td>
  </tr>
  <tr>
    <td>clicked</td>
    <td>the contact clicked a link within a campaign</td>
  </tr>
  <tr>
    <td>not clicked</td>
    <td>the contact did not click a link within a campaign</td>
  </tr>
</table>

<br/>
You can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true. Once you’ve selected the Condition and the Operator, you can layer additional conditions in the segment to narrow the results to a more targeted audience. 
 
{% info %}
You can add up to 15 different conditions per segment.
{% endinfo %}


{% anchor h3 %}
Exporting a Segment
{% endanchor %}

*To export a Segment:*

1. Click the Action Menu next to the name of the segment you wish to export.
1. Select **Export**. 

This triggers SendGrid to send an email to the primary email address on the account that includes a link to
download the CSV of all the contacts in the list and their associated custom field values.

{% info %}
The download link for your CSV export will be valid for 24 hours.
{% endinfo %}


{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/Managing_Contacts/contacts.html) 
- [Custom Fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)
- [Tips on Segmenting Your Active Subscribers](https://sendgrid.com/blog/tips-on-segmenting-your-active-subscribers/)
