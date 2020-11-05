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

<iframe src="https://player.vimeo.com/video/385360784" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<call-out type="warning">

The content on this page describes the experience in the latest version of Marketing Campaigns. If you’re using the legacy version of Marketing Campaigns, your experience may be different. To explore Marketing Campaigns plans and upgrade, click [here](https://sendgrid.com/pricing).

</call-out>

[Segments]({{root_url}}/glossary/segmentation/) are similar to contact lists, except they update dynamically over time as information stored about your contacts changes. When you segment your audience, you are able to create personalized Automation emails and Single Sends that directly address the wants and needs of your particular audience.

<call-out>

Marketing Campaigns supports up to 200 segments per user.

</call-out>

[Custom fields]({{root_url}}/ui/managing-contacts/custom-fields/), [reserved fields]({{root_url}}/glossary/reserved-fields/), and engagement data like opens and clicks, provide unique information you can use to identify contacts for different segments. As your contacts' traits change or you add more contacts that meet the criteria of your segment, your segments will update to reflect these changes. For example, a segment populated using the criteria, “lives in Denver” or, “is under 30 years old” will change as your contacts age or their addresses change.

Segments can pull from _All Contacts_ or any of your more narrowly defined lists.

## How segments work

Segments are created by comparing your contacts against criteria you define. If a contact matches the specified criteria, they will be included in your segment. Engagement data such as "opened" or "clicked" will add contacts who have _engaged_ in this behavior with one of your messages. Whether or not a contact meets your defined criteria is evaluated using the combination of conditions you create. Each condition consists of three parts: fields, operators, and values.

The first part of the condition, the field, is the data _field_ you want to filter your contacts by. Fields include traits such as "First Name," "Email," or "City" and engagement data such as "Last Clicked." For a full list of available fields, see the [Segmentation fields and types tables](#segmentation-fields-and-types).

Operators are the second part of the expression, and they define how your contacts should be evaluated. All fields have a data type assigned to them (text, number, date, Single Send); this type will determine which operators are available. For example, "Last Clicked" is a date field, and it has date operators such as "is after" and "is before" available. For a full list of operators available by field type, see the [Operators available by field type section](#operators-available-by-field-type).

The last part of the expression is a value. The value is compared to the field using the operator. For example, you may select the field, "City." City is a text-type field, so you can then choose "is" from the available operators for that field type. You can then add the value, "Denver." This expression will check your contacts for entries who live in Denver and include all who do in your segment.

You can build precisely targeted segments by using multiple conditions to filter your contacts. The previous example is among the simplest segments possible using Marketing Campaigns.

## Creating a segment with Marketing Campaigns

To create a segment, login to the Twilio SendGrid App and complete the following steps.

1. Navigate to [**Marketing** and then select **Contacts**](https://mc.sendgrid.com/contacts).
2. Click on the **Create** dropdown button, and then the **New Segment** option.

![The SendGrid App with the Create dropdown extended and "New Segment" highlighted in the dropdown.]({{root_url}}/img/new_segment_dropdown.png 'Create dropdown')

3. Enter a _Segment Name_.
4. Choose **Segment all contacts** or **Segment an existing list**.

![The contacts menu inside the SendGrid App, displaying the segment name field and list from which a the segment should be built.]({{root_url}}/img/create_new_segment.png 'Create a new segment')

<call-out>

If you're segmenting an existing list, you can click the action menu to the right of the list name from the [Contacts page](https://mc.sendgrid.com/contacts) and select "Create Segment" directly.

</call-out>

5. To segment an existing list, select a list from the **Existing List** drop-down.
6. In the **Who are you targeting?** section, start building your first condition by choosing a _field_ from the drop-down.
7. Choose from the list of available _operators_.
8. Enter the desired _value_ you want to segment by.
9. You can [add multiple conditions](#adding-multiple-conditions-with-a-segment) and choose to join them with **AND** or **OR**. **AND** will require both conditions to be true; **OR** will qualify a contact for whom _either_ condition is true. This functionality allows you to further refine your segments to target your audience with precision.

<call-out type="warning">

Segments can have one Email Activity, Single Send, or Automation condition field each. These can be combined with custom field and reserved field conditions.

</call-out>

10. Once you are finished adding conditions, click **Save Segment**.

![The segment builder inside Marketing Campaigns, displaying a new segment with a City condition set to "Denver" and a State, Province, Region condition set to "Colorado".]({{root_url}}/img/create_new_segment_two_fields.png 'Create a new segment with two fields')

Once your segment is processed, you will see a count of all contacts who meet your segment conditions, as well as a sample of these 50 contacts. To see all contacts included in your segment, click "Export CSV" to download a complete file.

<call-out type="warning">

Segments built using engagement data such as "was sent" or "clicked" will take approximately 30 minutes to begin populating.

</call-out>

## Segment refresh cadence

Contacts will be added to or removed from your segment as they meet or no longer meet the conditions of your segment. This can be driven by:

- New contacts being added to or updated within Marketing Campaigns, whether via CSV upload, API integration, Signup Forms, or manual changes.
- Contact engagement behavior, such as opening or clicking an email in a way that’s relevant to your segment conditions.

Typically, contacts that meet your criteria will appear in your segment within 15 minutes. You can see all contacts who are included in the segment at any given time by clicking **Export CSV**. To check for a specific contact, you can search by the contact’s email address.

<call-out type="warning">

Segments built using engagement data such as "was sent" or "clicked" will take approximately 30 minutes to begin populating.

</call-out>

Segment samples and counts are refreshed approximately once per hour; they do not update immediately. If there are no changes to a segment since the last refresh, the sample and UI count displayed will be refreshed at increasing time intervals with a maximum sample and count refresh delay of 24 hours.

You can see an estimate of the next scheduled segment refresh on the [**Contacts**](https://mc.sendgrid.com/contacts) page as well as on the detail page of your segment.

![The Contacts landing page in the Marketing Campaigns App]({{root_url}}/img/mc-contacts-segments.png 'Marketing Campaigns Contacts Page')

![A segment detail page with a tool tip indicating the next estimated refresh time]({{root_url}}/img/mc-segment-refresh.png 'Marketing Campaigns segment detail page refresh estimate')

Automations with entry criteria of a contact entering a segment will be triggered according to the same schedule as the segment sample refresh cadence described above.

However, when you send a Single Send to a segment, Marketing Campaigns will pull the segment at the time of send, reflecting the near-real-time segment population.

## Segmentation fields and types

The following tables list the available reserved fields and the fields' data types. Reserved fields are present in your account by default. Your account will also include any Custom Fields you add. The operators available for each type are included in the [section following these field tables](#operators-available-for-contact-profile-and-custom-fields).

### Contact Profile fields

<table class="table auto">
  <tr>
    <th>Field Name</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>First Name</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Address Line 1</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Address Line 2</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>City</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>State Province Region</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Postal Code</td>
    <td>Text</td>
  </tr>
  <tr>
    <td>Country</td>
    <td>Text</td>
  </tr>
 <tr>
    <td>Date Added</td>
    <td>Date</td>
  </tr>
  <tr>
    <td>Last Updated</td>
    <td>Date</td>
  </tr>
</table>

### Email Activity fields

<table>
  <tr>
    <th>Field Name</a></th>
    <th>Field Type</a></th>
  </tr>
  <tr>
    <td>Last Clicked</td>
    <td>Email Activity*</td>
  </tr>
 <tr>
    <td>Last Opened</td>
    <td>Email Activity*</td>
  </tr>
  <tr>
    <td>Last Emailed</td>
    <td>Email Activity*</td>
  </tr>
</table>

### Single Send fields

<table>
  <tr>
    <th>Field Name</a></th>
    <th>Field Type</a></th>
  </tr>
  <tr>
    <td>Single Send Activity</td>
    <td>Single Send**</td>
  </tr>
</table>

### Automations fields

<table>
  <tr>
    <th>Field Name</a></th>
    <th>Field Type</a></th>
  </tr>
  <tr>
    <td>Automation Activity</td>
    <td>Automation**</td>
  </tr>
</table>

\* Email Activity fields have their own Email Activity type. After selecting one of [the operators available for this type](#operators-available-for-email-activity-fields), you'll define the time period in which the engagement occurred.

\*\* Single Send Activity and Automation Activity fields have their own Single Send and Automation types. After selecting one of [the operators available for these types](#operators-available-for-single-send-fields), you'll choose whether the operator applies to any Single Send or Automation or to a specific Single Send or Automation. You will then define the time period in which the engagement occurred.

### Operators available for Contact Profile and Custom Fields

The operators available on a field depend on the field type (Text, Date, Number).

#### Date Field Operators

Conditions using Date field operators will filter contacts based on the contact field compared with the datetime value provided in the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>is</td>
    <td>Matches contacts that have the datetime value for the field</td>
  </tr>
  <tr>
    <td>is not</td>
    <td>Matches contacts that do not have the datetime value for the field</td>
  </tr>
  <tr>
    <td>is blank</td>
    <td>No value is set for the field</td>
  </tr>
  <tr>
    <td>is not blank</td>
    <td>Any value is set for the field</td>
  </tr>
  <tr>
    <td>is after</td>
    <td>Matches the datetime value that occurs after the provided value for the field</td>
  </tr>
  <tr>
    <td>is at or after</td>
    <td>Matches the datetime value that matches or is after the provided value for the field</td>
  </tr>
  <tr>
    <td>is before</td>
    <td>Matches the datetime value that occurs before the provided value for the field</td>
  </tr>
  <tr>
    <td>is at or before</td>
    <td>Matches the datetime value that matches or is before the provided value for the field</td>
  </tr>
  <tr>
    <td>between</td>
    <td>Matches the datetime value that occurs on or after the start date and on or before the end date for the provided value for the field</td>
  </tr>
  <tr>
    <td>not between</td>
    <td>Matches the datetime value that occurs before the start date and after the end date for the provided value of that field</td>
  </tr>
  <tr>
    <td>is within</td>
    <td>Matches the datetime value that occurs between the date and time in the past based on the duration  and the current datetime</td>
  </tr>
  <tr>
    <td>is not within</td>
    <td>Matches the datetime value that occurs before the date and time in the past based on the duration  and the current datetime</td>
  </tr>
  <tr>
    <td>on</td>
    <td>Matches the datetime value that occurs at any time on the date provided</td>
  </tr>
  <tr>
    <td>not on</td>
    <td>Matches the datetime value that does not fall at any time on the date provided</td>
  </tr>
</table>

#### Number Field Operators

Conditions using Number Field operators will filter contacts based on the contact field compared with the numeric value provided in the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>is</td>
    <td>Matches contacts that have the numeric value for the field</td>
  </tr>
  <tr>
    <td>is not</td>
    <td>Matches contacts that do not have the numeric value for the field</td>
  </tr>
  <tr>
    <td>is blank</td>
    <td>No value is set for the field</td>
  </tr>
  <tr>
    <td>is not blank</td>
    <td>Any value is set for the field</td>
  </tr>
  <tr>
    <td>is greater than</td>
    <td>Matches any numeric value that is greater than the provided value for the field</td>
  </tr>
  <tr>
    <td>is less than</td>
    <td>Matches any numeric value that is less than the provided value for the field</td>
  </tr>
  <tr>
    <td>is equal or greater than</td>
    <td>Matches any numeric value that matches or is greater than the provided value for the field</td>
  </tr>
  <tr>
    <td>is equal or less than</td>
    <td>Matches any numeric value that matches or is less than the provided value for the field</td>
  </tr>
  <tr>
    <td>is between</td>
    <td>Matches any numeric value that matches or is greater than the minimum value and matches or is less than the maximum value for the field</td>
  </tr>
  <tr>
    <td>is not between</td>
    <td>Matches any numeric value that is less than the minimum value and is greater than the maximum value for the field</td>
  </tr>
</table>

#### Text Field Operators

Conditions using Text Field operators will filter contacts based on the contact field compared with the string value provided in the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>is</td>
    <td>Matches contacts that have the provided value for the field</td>
  </tr>
  <tr>
    <td>is not</td>
    <td>Matches contacts that do not have the provided value for the field</td>
  </tr>
  <tr>
    <td>is blank</td>
    <td>No value is set for the field</td>
  </tr>
  <tr>
    <td>is not blank</td>
    <td>Any value is set for the field</td>
  </tr>
  <tr>
    <td>contains</td>
    <td>Matches any value that may include other text as part of the value</td>
  </tr>
  <tr>
    <td>does not contain</td>
    <td>Matches any value that does not include the provided value</td>
  </tr>
  <tr>
    <td>starts with</td>
    <td>Matches any value that begins with the provided value</td>
  </tr>
  <tr>
    <td>does not start with</td>
    <td>Matches any value that does not begin with the provided value</td>
  </tr>
  <tr>
    <td>ends with</td>
    <td>Matches any value that ends with the provided value</td>
  </tr>
  <tr>
    <td>does not end with</td>
    <td>Matches any value that does not end with the provided value</td>
  </tr>
</table>

### Operators available for Email Activity Fields

Operators available on an Email Activity field are similar to Date fields with some exceptions—"is blank" and "is not blank" are not included on Email Activity fields. Email Activity conditions will filter contacts who have engaged with a Single Send or Automation based on the constraints of the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>is</td>
    <td>Matches contacts that have the datetime value for the field</td>
  </tr>
  <tr>
    <td>is not</td>
    <td>Matches contacts that do not have the datetime value for the field</td>
  </tr>
  <tr>
    <td>is after</td>
    <td>Matches the datetime value that occurs after the provided value for the field</td>
  </tr>
  <tr>
    <td>is at or after</td>
    <td>Matches the datetime value that matches or is after the provided value for the field</td>
  </tr>
  <tr>
    <td>is before</td>
    <td>Matches the datetime value that occurs before the provided value for the field</td>
  </tr>
  <tr>
    <td>is at or before</td>
    <td>Matches the datetime value that matches or is before the provided value for the field</td>
  </tr>
  <tr>
    <td>between</td>
    <td>Matches the datetime value that occurs on or after the start date and on or before the end date for the provided value for the field</td>
  </tr>
  <tr>
    <td>not between</td>
    <td>Matches the datetime value that occurs before the start date and after the end date for the provided value of that field</td>
  </tr>
  <tr>
    <td>is within</td>
    <td>Matches the datetime value that occurs between the date and time in the past based on the duration  and the current datetime</td>
  </tr>
  <tr>
    <td>is not within</td>
    <td>Matches the datetime value that occurs before the date and time in the past based on the duration  and the current datetime</td>
  </tr>
  <tr>
    <td>on</td>
    <td>Matches the datetime value that occurs at any time on the date provided</td>
  </tr>
  <tr>
    <td>not on</td>
    <td>Matches the datetime value that does not fall at any time on the date provided</td>
  </tr>
</table>

### Operators available for Single Send Fields

Single Send conditions will filter contacts who have engaged with a particular Single Send or any Single Send based on the constraints of the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>was sent</td>
    <td>Any contacts who were sent any Single Send or a specific Single Send in the specified time range</td>
  </tr>
  <tr>
    <td>has clicked</td>
    <td>Any contact who has clicked any Single Send or a specific Single Send in the specified time range</td>
  </tr>
  <tr>
    <td>has opened</td>
    <td>Any contact who has opened any Single Send or a specific Single Send in the specified time range</td>
  </tr>
</table>

### Operators available for Automation Fields

Automation conditions will filter contacts who have engaged with a particular Automation or any Automation based on the constraints of the condition.

<table>
  <tr>
    <th>Operator Name</a></th>
    <th>Description</a></th>
  </tr>
  <tr>
    <td>was sent</td>
    <td>Any contacts who were sent any Automation or a specific Automation in the specified time range</td>
  </tr>
    <td>has opened</td>
    <td>Any contacts who has opened any Automation or a specific Automation in the specified time range</td>
  </tr>
  <tr>
    <td>has clicked</td>
    <td>Any contacts who has clicked any Automation or a specific Automation in the specified time range</td>
  </tr>
</table>

## Adding Multiple Conditions with a Segment

When using more than one condition to segment your contacts, you can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true. Once you’ve selected the field, operator, and value, you can layer additional conditions in the segment to narrow the results to a more targeted audience.

<call-out type="warning">

At this time only one Email Activity, Single Send, or Automation condition may exist within a segment if combined using `AND`. Segments can combine more than one engagement activity condition using `OR.`

</call-out>

## Duplicating a Segment

Duplicating a segment eliminates the time and effort needed to recreate a complex segment from scratch in order to make a few changes or tweaks to reach a different audience. Follow these steps to create a copy of an existing segment.

_To duplicate a segment:_

1. From the Contact Lists page, click the Action Menu next to the name of the segment you wish to duplicate.
1. Select **Duplicate**.

## Exporting a Segment

_To export a segment from the Contact List Page:_

1. Click the Action Menu next to the name of the segment you wish to export.
1. Select **Export**.

![]({{root_url}}/img/duplicate-segment-contact-list-page.png 'Duplicate a segment from the contact list page')

_To export a segment from the segment details page:_

1. Click **Segment Options** to open the drop-down menu.
1. Select **Duplicate**.

![]({{root_url}}/img/duplicate-segment-details-page.png 'Duplicate a segment from the segment detail page')

This triggers SendGrid to send an email to the primary email address on the account. The email includes a link to download the CSV of all the contacts in the list and their associated custom field values.

<call-out>

The download link for your CSV export will be valid for 24 hours.

</call-out>

## Additional Resources

- [Contacts]({{root_url}}/ui/managing-contacts/adding-contacts/)
- [Custom Fields]({{root_url}}/ui/managing-contacts/custom-fields/)
- [Tips on Segmenting Your Active Subscribers](https://sendgrid.com/blog/tips-on-segmenting-your-active-subscribers/)
