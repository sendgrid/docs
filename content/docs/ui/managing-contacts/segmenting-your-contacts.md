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

<call-out>

The content on this page describes the experience in the latest version of Marketing Campaigns. If you’re using the legacy version of Marketing Campaigns, your experience may be different. To explore Marketing Campaigns plans and upgrade, click [here](https://sendgrid.com/pricing).

</call-out>

You can use the information stored on your contacts from [custom fields]({{root_url}}/ui/managing-contacts/custom-fields/), reserved fields or engagement data (how recipients have engaged with your prior emails) to create segments. Segments are similar to contact lists, except they update over time when a contact’s data matches the criteria that you set. Segments can pull from *All Contacts* or any of your Contact lists. 

When you segment your audience, you are able to create personalized Automation emails and Single Sends that directly address the wants and needs of your particular audience. [Custom fields]({{root_url}}/ui/managing-contacts/custom-fields/) and data about how recipients have interacted with your emails allow you to use unique information to identify contacts for different segments. As the traits of your contacts change and you add more contacts that meet the criteria of your segment over time, your segments will dynamically update to reflect these updates. For example, a segment with the criteria “lives in Denver” or “is under 30 years old” will evolve as a contact’s address changes and they grow older. 

<call-out type="warning">
Currently, you can only create a segment based on engagement with any Single Send (or a specific Single Send) that occurred after August 31, 2019. Soon, this will be enhanced to allow segmentation based on all-time Single Send engagement.
</call-out>


## Creating a Segment

You can create a new segment with multiple conditions based on the information you have stored about your contacts as well as how these contacts have engaged with (opened or clicked) your emails in the past.

*To create a segment:*

1. Navigate to **Marketing** and then select **Contacts**.
2. Click on the **Create** dropdown button, and then the **Create Segment** option.
3. Enter a *Segment Name*.
4. Choose **Segment all contacts** or **Segment an existing list**.
5. To segment an existing list, select a list from the *Existing List* drop-down.
6. In the *targeting* section, start building your condition by choosing a *field* from the drop-down.
7. Choose from a list of available *operators* based on the chosen field.
8. Enter the desired *value*.
9. You can add multiple conditions, and choose to join them with **AND** or **OR**.
10. Once you are finished adding conditions, click **Save Segment**.

*For example, to create a segment of recipients that live in Denver:*
 
1. Navigate to **Marketing** and then select **Contacts**.
1. Select the **Create** drop-down.
1. Click **New Segment**.
1. Enter a Segment Name.
1. Choose **Segment all contacts** or **Segment an existing list**.
1. From the targeting drop-down, select **City**. 
1. Select the operator **is**. 
1. In the date field, type **Denver** and then click **Save Segment**.  

Depending on which field is selected, the operator you can choose from differ. The operator available to assign to fields will depend on the field type (Text, Date, or Number). For example, a "Number” field will show `IS`, `IS NOT`, `IS GREATER THAN`, `IS LESS THAN`, `IS EQUAL OR GREATER THAN`, and `IS EQUAL OR LESS THAN` as options whereas a “Text” field will show `CONTAINS`, `DOES NOT CONTAIN`, `IS` and `IS NOT` as options.
When using more than one condition to segment your contacts, you can select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true. Once you’ve selected the Field, Operator, and Value, you can layer additional conditions in the segment to narrow the results to a more targeted audience.

 ### Exporting a Segment

*To export a Segment:*

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


