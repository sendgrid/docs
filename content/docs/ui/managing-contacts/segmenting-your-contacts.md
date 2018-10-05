---
layout: page
weight: 70
title: Segmenting your Contacts
group: managing-contacts
navigation:
  show: true
seo:
  title: Segmenting your Contacts
  keywords: Segmentation, email segmentation, targeted marketing, email, marketing campaigns
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/229916004" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

You can filter the information stored in your contact lists to create segments. Segmenting contacts using different conditions allows you to create marketing campaigns that directly addresses the wants and needs of a particular audience. You can create a segment that pulls from ALL CONTACTS or a specific existing list. [Custom fields]({{root_url}}/ui/managing-contacts/custom-fields/) allow you to use unique information to identify contacts for different segments.
Segments are dynamically updated over time as you add contacts who meet the criteria of your segment, or as the traits of your contacts change. For example, a segment with the criteria ”opened an email within 30 days” will evolve as contacts engage (or don’t engage) with your email.

## 	Creating a Segment

You can create a new segment with multiple conditions based on the information you have stored about your contacts, and based on some of the information SendGrid has stored about your Marketing Campaigns.

<call-out>

You can create up to 200 segments.

</call-out>

*To create a segment:*

1. Navigate to **Marketing** and then select **Contacts**.
2. Click **Create Segment**.
3. Choose **Segment all contacts** or **Segment an existing list**.
4. Enter a *Segment Name*.
5. To segment an existing list, select a list from the *Select List to Segment* drop-down.
6. From the *Condition* drop-down, choose the desired condition or custom field.
7. From the *Criteria* drop-down, choose from a list of available operators based on the chosen condition.


For example, to create a segment of recipients that have clicked on a link in a specific marketing campaign:

1. Navigate to **Marketing** and then select **Contacts**.
1. Click **Create Segment**.
1. Choose **Segment all contacts** or **Segment an existing list**.
1. Enter a *Segment Name*.
1. From the *Condition* drop-down, select **Engagement:Clicks**.
1. From the *Criteria* drop-down. select **clicked**.
1. From the last drop-down, select the name of the campaign you want to use for the segment.

<call-out>

The *Condition* drop-down contains required CSV fields, custom fields, and internal event data to help you get your email campaigns to the correct audience. The *Criteria* drop-down contains operators that tell the segment *how* to handle the data specified by the condition.

</call-out>

 Depending on which condition is selected, the criteria you can choose from differ. The criteria available to assign to conditions will depend on the field type (Text, Date, or Number).  For example, a condition labeled "Number” will show `GREATER THAN`, `LESS THAN`, and `EQUALS` as options whereas a “Text” field will show `IS` and `IS NOT` as options.

 ![]({{root_url}}/img/Segmentation.png "Segmentation conditions and criteria")

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
    <td>is empty</td>
    <td>the condition or field is empty in the database</td>
  </tr>
    <tr>
    <td>is not empty</td>
    <td>the condition or field is not empty in the database</td>
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
When using more than one condition to segment your contacts, you can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true. Once you’ve selected the Condition and the Criteria, you can layer additional conditions in the segment to narrow the results to a more targeted audience.

<call-out>

You can add up to 15 different conditions per segment.

</call-out>

 ### 	Exporting a Segment

*To export a Segment:*

1. Click the Action Menu next to the name of the segment you wish to export.
1. Select **Export**.

This triggers SendGrid to send an email to the primary email address on the account that includes a link to
download the CSV of all the contacts in the list and their associated custom field values.

<call-out>

The download link for your CSV export will be valid for 24 hours.

</call-out>


 ##	Additional Resources

- [Contacts]({{root_url}}/ui/managing-contacts/adding-contacts/)
- [Custom Fields]({{root_url}}/ui/managing-contacts/custom-fields/)
- [Tips on Segmenting Your Active Subscribers](https://sendgrid.com/blog/tips-on-segmenting-your-active-subscribers/)