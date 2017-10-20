---
layout: page
weight: 60
title: Creating and exporting segments
navigation:
  show: true
seo:
  title: Creating and exporting segments
  override: true
  description:
---
- [Creating a Segment](#-Creating-a-Segment)
- [Exporting a Segment](#-Exporting-a-Segment)

Using the information stored in your [contact lists](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html), you can filter the data to create segments. Segmenting contacts using different conditions allows you to create marketing campaigns that directly addresses the wants and needs of a particular audience. You can create a segment that pulls from ALL CONTACTS or a specific existing list. [Custom fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html) allow you to use unique information to identify contacts for different segments.

Segments are dynamically updated over time as you add contacts who meet the criteria of your segment, or as the traits of your contacts change. For example, a segment with the criteria ”opened an email within 30 days” will evolve as contacts engage (or don’t engage) with your email. 

{% anchor h2 %}
Creating a Segment
{% endanchor %}

You can create a new segment with multiple conditions based on the information you have stored about your contacts. This
includes email, first_name, last_name, and all of the custom fields you have created before making this segment.

{% info %}
You can create up to 400 segments.
{% endinfo %}

*To create a segment:*

1. Navigate to **Marketing** and then select **Contacts**.
1. Click **Create Segment**. 
1. Choose **Segment all contacts** or **Segment an existing list**.
1. Enter a *Segment Name*.
1. To segment an existing list, select a list from the *Select List to Segment* drop-down. 
1. From the *Select Condition* drop-down, choose the desired condition or custom field.
1. From *Select Criteria* drop-dwn choose from a list of available operators based on the chosen condition.

{% info %}
The operator tells the segment *how* to apply the condition.
{% endinfo %}

Depending on which condition is selected, the operators you can choose from differ. The operators assigned to custom fields will depend on the field type (Text, Date, or Number).  For example, a condition labeled "Number” will show `GREATER THAN`, `LESS THAN`, and `EQUALS` as options whereas a “Text” field will show `IS` and `IS NOT` as options.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-s6z2{text-align:center}
.tg .tg-e3zv{font-weight:bold}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-e3zv">Operator</th>
    <th class="tg-e3zv">Description</th>
  </tr>
  <tr>
    <td class="tg-s6z2">is</td>
    <td class="tg-031e">data matches the text input exactly</td>
  </tr>
  <tr>
    <td class="tg-031e">is not</td>
    <td class="tg-031e">the data does not match the text input exactly</td>
  </tr>
  <tr>
    <td class="tg-031e">contains word</td>
    <td class="tg-031e">data includes the text input</td>
  </tr>
  <tr>
    <td class="tg-031e">is before</td>
    <td class="tg-031e">the date of the event is before the date selected</td>
  </tr>
  <tr>
    <td class="tg-yw4l">is after</td>
    <td class="tg-yw4l">the date of the event is after the date selected</td>
  </tr>
  <tr>
    <td class="tg-yw4l">is within</td>
    <td class="tg-yw4l">the date of the event is within a selected date range</td>
  </tr>
  <tr>
    <td class="tg-yw4l">opened</td>
    <td class="tg-yw4l">the contact opened an email from a campaign</td>
  </tr>
  <tr>
    <td class="tg-yw4l">not opened</td>
    <td class="tg-yw4l">the contact did not open an email from a campaign</td>
  </tr>
  <tr>
    <td class="tg-yw4l">clicked</td>
    <td class="tg-yw4l">the contact clicked a link within a campaign</td>
  </tr>
  <tr>
    <td class="tg-yw4l">not clicked</td>
    <td class="tg-yw4l">the contact did not click a link within a campaign</td>
  </tr>
</table>

You can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true.

Once you’ve selected the Condition and the Operator, you can layer additional conditions in the segment to narrow the results to a more targeted audience. 
 
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

- [Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html) 
- [Custom Fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- Contacts(https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html)
- Custom fields(https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)
