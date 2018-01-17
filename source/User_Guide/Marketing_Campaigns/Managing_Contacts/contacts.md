---
layout: page
weight: 90
title: Adding Contacts
navigation:
  show: true
seo:
  title: Adding Contacts
  override: true
  description: Directions on how to add and manage contacts using Marketing Campaigns
---
* [Formatting a CSV](#-Formatting-a-CSV)
* [Uploading a CSV](#-Uploading-a-CSV)
* [Manually Add a Contact](#-Manually-Add-a-Contact)
* [Creating a New List](#-Creating-a-New-List)  

<iframe src="https://player.vimeo.com/video/121404093" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


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

    If you choose to add the contacts without assigning them to a list, they are added to the contacts database without any additional context. All contact, regardless of whether or not they are added to a list exist in the contacts database once they have been uploaded. 

1. Upload your file by dragging it into or clicking the CSV upload area.
1. Once the CSV has populated, click **Next: Review CSV Upload**.

   A page appears displaying the data from the header row from of the CSV file. From the list you can select a custom field to associate with the data in the column. If there isn't a corresponding field, you can add one. Only the **Email** field is required to complete the upload. Skipped column headers are not uploaded and do not appear as custom fields within an individual contact's profile.

1. Select **Skip Column** to omit data from the contacts list.
1. Once you've gone through all of the headers, click **Save Contacts**.

{% info %}
After uploading contacts, you can define segments for individual contacts or lists based on specified criteria. For more information, see [Lists and Segmentation](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html).
{% endinfo %}

{% warning %}
   The maximum CSV file size is 2GB.
{% endwarning %}

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

Managing contacts is an integral part of your marketing campaigns lifecycle. You can create lists for contacts, as well as view and edit each individual contact within your contact database.

{% anchor h3 %}
Creating a New List
{% endanchor %}

*To create a new list:*

1. Click **Add Contacts** and then select **Upload CSV**.
1. Click **+Add to New List** and enter the name of the list you would like to create.
1. Choose a CSV file for upload and complete the steps listed in [Uploading a CSV ](#-Uploading-a-CSV).

{% info %}
If you [create a segment]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment) before you upload a list, any contact that fits the segment criteria you've defined will be added to that segment.
{% endinfo %}

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Contacts API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html)
- [Segmenting your Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html)
- [Building your Contact list](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/Managing_Contacts/build_contact_list.html)
