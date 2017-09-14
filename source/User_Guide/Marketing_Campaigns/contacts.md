---
layout: page
weight: 65
title: Contacts
navigation:
  show: true
seo:
  title: Contacts
  override: true
  description:
---
* [Adding Contacts](#-Adding-Contacts)
  * [Formatting a CSV](#-Formatting-a-CSV)
  * [Uploading a CSV](#-Uploading-a-CSV)
  * [Manually Add a Contact](#-Manually-Add-a-Contact)
* [Managing Contacts](#-Managing-Contacts)
  * [Creating a New List](#-Creating-a-New-List)
  * [Add Contacts to a List](#-Add-Contacts-to-a-List)
  * [Viewing a Contact](#-Viewing-a-Contact)
  * [Editing a Contact](#-Editing-a-Contact)
  * [Delete a Specific Contact](#-Delete-a-Specific-Contact)
  * [Delete All Contacts](#-Delete-All-Contacts)

<iframe src="https://player.vimeo.com/video/121404093" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Adding Contacts
{% endanchor %}

From our [Contacts]({{site.marketing_campaigns_url}}/contacts) page, you can add, upload, modify, and delete your contacts. Contacts can be added to your contacts database using the [API](https://sendgrid.com/docs/API_Reference/api_v3.html), or by  manually adding or uploading a CSV file through the [SendGrid App](https://app.sendgrid.com/).

{% info %}
Your first 2,000 contacts are free. After 2,000 contacts, SendGrid charges $10 for every additional 10,000 contacts.
{% endinfo %}

{% anchor h3 %}
Formatting a CSV
{% endanchor %}

You can easily add contacts to your contact database by uploading a CSV of your contacts to SendGrid. If you have your contacts in a spreadsheet, simply save that sheet as a .csv file using a spreadsheet application like Microsoft Excel or Google Sheets. You can also export your contacts from most database systems as a .csv file.

{% warning %}
Your CSV file MUST be in UTF-8 format.
{% endwarning %}

Your CSV should contain the following information about each contact:

* email (required)
* first_name
* last_name

You can also include custom fields with additional identifying information for each contact in the CSV. For example, you can specify “country,” “city,” and “age” as the custom fields. The data in the custom fields are critical for both segmentation and content personalization.

The first row of your CSV must be a header row containing labels identifying each column. We have provided [an example CSV file]({{root_url}}/assets/example.csv) for you to look at. Headers must only use letters, numbers, and underscores. If you add custom field data to your CSV, you can save some time when uploading by naming the columns the same as the custom fields you have previously defined.

{% info %}
SendGrid identifies individual contacts by their email, so you must include ```email``` as one of the CSV headers. If you do not include the email column, SendGrid will not add any information to your contact database or list. Rows in your CSV without an email address in the email column will automatically fail, but will not cause the entire upload to fail.
{% endinfo %}

{% anchor h3 %}
Uploading a CSV
{% endanchor %}

*To add new contacts:*

1. Click **Add Contacts** and then select **Upload CSV**.
1. Choose an existing list or create a new list to add the contacts to.
1. Upload your file by dragging it into or clicking the CSV upload area.
{% warning %}
   The maximum CSV file size is 2GB.
{% endwarning %}
1. Once the CSV has populated, click **Next: Review CSV Upload**.

   A page appears displaying the data from the header row from of the CSV file. From the list you can select a custom field to associate with the data in the column. If there isn't a corresponding field, you can add one. Only the **Email** field is required to complete the upload. Skipped column headers are not uploaded and do not appear as custom fields within an individual contact's profile.

1. Select **Skip Column** to omit data from the contacts list.
1. Once you've gone through all of the headers, click **Save Contacts**.

Once we have completed processing your new contacts, you will receive an email to any addresses specified under [Notifications](https://sendgrid.com/marketing_campaigns/ui/notifications) with the following information:

* Total processed contacts
* Number of new contacts
* Number of updated contacts
* Number of errors
* Error messages for each errored row

If there are any errors, there will be a link to download a CSV containing the errored rows so that you can reformat and reupload those contacts. For more help resolving issues with uploading a CSV, see [List Upload Troubleshooting](https://sendgrid.com/docs/Classroom/Troubleshooting/Authentication/list_upload_troubleshooting.html).

{% info %}
The download link to your CSV of errored rows will be available for 24 hours.
{% endinfo %}

{% info %}
If you upload the same contact more than once, SendGrid updates the data, assuming the most recent upload has the most up-to-date information. Updates to your contacts cannot be rolled back. Multiples of the same contact (as identified by email) can be added to different lists or segments and count as one contact against your total contacts per account or subuser account.
{% endinfo %}

{% anchor h3 %}
Manually Add a Contact
{% endanchor %}

*To manually add a contact to your contact database:*

1. Navigate to **Marketing Campaigns** and then click **Contacts**.
1. In the top right-hand corner, click **Add Contacts**.
1. Click **Manual Add**.
1. Select the list you want to add the contact to from the drop-down, or select **Add to New List** and enter the name of the list.
1. Enter the information for the new contact.
1. Click **Save**.

{% info %}
To add Custom Field data to a manually imported contact, navigate to the Contact Details page of the new contact.  
{% endinfo %}

{% anchor h2 %}
Managing Contacts
{% endanchor %}

Managing contacts is an integral part of your marketing campaigns lifecycle. You can create lists for contacts based on custom fields, as well as view and edit each individual contact within your contact database.

{% anchor h3 %}
Creating a New List
{% endanchor %}

*To create a new list from your CSV:*

1. Click **Add Contacts** and then select **Upload CSV**.
1. Click **+Add to New List** and enter the name of the list you would like to create.
1. Choose a CSV file for upload and complete the steps listed in [Uploading a CSV ](#-Uploading-a-CSV).

{% anchor h3 %}
Add Contacts to a List
{% endanchor %}

*To manually add contacts to a list:*

1. Navigate to **Marketing Campaigns** and then click **Contacts**.
1. Locate the list you wish to edit and select the Action Menu next to the list name.
1. Select **Edit**.
1. Enter the information for the new contact.
1. Click **Save**.

{% info %}
If you [create a segment]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment) before you upload a list, any contact that fits the segment criteria you've defined will be added to that segment.
{% endinfo %}

{% anchor h3 %}
Viewing a Contact
{% endanchor %}

To view a specific contact profile, find the contact in one of your lists or segments by searching your contact database. Then click the contact’s email address. You will then be able to view the email, engagement data, profile information, custom fields, and list associations for this contact.

{% info %}
Searches are case agnostic but must be done using a whole email address that includes an "@" and any top-level domain like ".com" or ".io".
{% endinfo %}

To view any custom fields you have assigned to this contact, or to view any lists that you have added this contact to, you may flip through the tabs beneath the Contact Details. You may either view all custom fields at once, or you can filter them by the following types: “Text”, “Date”, and “Number”.


{% anchor h3 %}
Editing a Contact
{% endanchor %}

When you are viewing a contact, click any of the Edit buttons to edit the contact's information within that section. This includes the SendGrid provided reserved fields, except email, any custom fields you’ve added for this contact, and any lists the contact is associated with.

*To edit the associated lists for your contact:*

1. Select the **Associated Lists** tab.
1. Enter or select the list you would like to use.
1. Click **Add**.

{% anchor h3 %}
Delete a Specific Contact
{% endanchor %}

*To remove one or more contacts from a list:*

1. Navigate to the contact you wish to modify and click the Action Menu.
1. Click **Remove From List**.
   This option removes the contact from the list. To remove the contact completely, select **delete**.


{% anchor h3 %}
Delete All Contacts
{% endanchor %}

*To delete all of your contacts at once:*

 1. Navigate to your [Contacts page](https://sendgrid.com/marketing_campaigns/contacts) and hover over the Action Menu next to All Contacts.
 1. Click the trash can icon.
 1. Select the check box to confirm that you want to delete all contacts and then click **Delete**.

This will delete all of your Marketing Campaigns contacts without deactivating your account. For information on how to remove unusable contacts from a list or segment without purging your entire contacts database, see [How to Remove Unusable Contacts](https://sendgrid.com/docs/Classroom/Basics/Marketing_Campaigns/how_to_remove_unusable_contacts.html)
