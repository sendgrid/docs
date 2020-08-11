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

You can use the information stored on your contacts from [custom fields]({{root_url}}/ui/managing-contacts/custom-fields/), reserved fields or engagement data (how recipients have engaged with your prior emails) to create segments. Segments are similar to contact lists, except they update over time when a contact’s data matches the criteria that you set. Segments can pull from _All Contacts_ or any of your Contact lists.

When you segment your audience, you are able to create personalized Automation emails and Single Sends that directly address the wants and needs of your particular audience. [Custom fields]({{root_url}}/ui/managing-contacts/custom-fields/) and data about how recipients have interacted with your emails allow you to use unique information to identify contacts for different segments. As the traits of your contacts change and you add more contacts that meet the criteria of your segment over time, your segments will dynamically update to reflect these updates. For example, a segment with the criteria “lives in Denver” or “is under 30 years old” will evolve as a contact’s address changes and they grow older.

</call-out>

## Creating a Segment

You can create a new segment with multiple conditions based on the information you have stored about your contacts as well as how these contacts have engaged with (opened or clicked) your emails in the past.

_To create a segment:_

1. Navigate to **Marketing** and then select **Contacts**.
2. Click on the **Create** dropdown button, and then the **Create Segment** option.
3. Enter a _Segment Name_.
4. Choose **Segment all contacts** or **Segment an existing list**.

<call-out>

If you're segmenting an existing list, you can click the action menu to the right of the list name and select "Create Segment" directly.

</call-out>

5. To segment an existing list, select a list from the _Existing List_ drop-down.
6. In the _targeting_ section, start building your condition by choosing a _field_ from the drop-down.
7. Choose from a list of available _operators_ based on the chosen field.
8. Enter the desired _value_.
9. You can add multiple conditions, and choose to join them with **AND** or **OR**.
10. Once you are finished adding conditions, click **Save Segment**.

<call-out type="warning">

Segments built using engagement data like "was sent" or "clicked" will take approximately 30 minutes to begin populating.

</call-out>

### Example segment creation

The following steps would create a segment containing all contacts who live in Denver.

1. Navigate to **Marketing** and then select **Contacts**.
1. Select the **Create** drop-down.
1. Click **New Segment**.
1. Enter a Segment Name.
1. Choose **Segment all contacts** or **Segment an existing list**.
1. From the targeting drop-down, select **City**.
1. Select the operator **is**.
1. In the date field, type **Denver** and then click **Save Segment**.

### Operators available by field type

The logical operators available on a field depend on the field type (Text, Date, or Number).

Operators available on all fields include:

- `is`
- `is not`
- `is blank`
- `is not blank`

Operators available on a "Number” field include:

- `is greater than`
- `is less than`
- `is equal or greater than`
- `is equal or less than`
- `is between`
- `is not between`

Operators available on a “Text” field include:

- `contains`
- `does not contain`
- `starts with`
- `does not start with`
- `ends with`
- `does not end with`

Operators available on a “Date” field include:

- `is after`
- `is at or after`
- `is before`
- `is at or before`
- `starts with`
- `on`
- `not on`
- `is between`
- `is not between`
- `is within`
- `is not within`

When using more than one condition to segment your contacts, you can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true. Once you’ve selected the Field, Operator, and Value, you can layer additional conditions in the segment to narrow the results to a more targeted audience.

## Exporting a Segment

_To export a Segment:_

1. Click the Action Menu next to the name of the segment you wish to export.
1. Select **Export**.

This triggers SendGrid to send an email to the primary email address on the account. The email includes a link to download the CSV of all the contacts in the list and their associated custom field values.

<call-out>

The download link for your CSV export will be valid for 24 hours.

</call-out>

## Additional Resources

- [Contacts]({{root_url}}/ui/managing-contacts/adding-contacts/)
- [Custom Fields]({{root_url}}/ui/managing-contacts/custom-fields/)
- [Tips on Segmenting Your Active Subscribers](https://sendgrid.com/blog/tips-on-segmenting-your-active-subscribers/)
