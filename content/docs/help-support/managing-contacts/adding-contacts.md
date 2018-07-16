---
layout: page
weight: 90
title: Adding Contacts
navigation:
  show: true
seo: 
  title: Adding Contacts
  keywords: Marketing Contacts, Adding Contacts, Contact Lists
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

You can easily add contacts to your contact database by uploading a CSV of your contacts to SendGrid. If you have your contacts in a spreadsheet, simply save that sheet as a .csv file using a spreadsheet application like Microsoft Excel or Google Sheets. You can also export your contacts from most database systems as a .csv file. For more information, see the documentation on [Formatting a CSV](https://sendgrid.com/docs/help-support/managing-contacts/formating-a-CSV.html).

{% anchor h3 %}
Uploading a CSV
{% endanchor %}

*To add new contacts:*

1. Click **Add Contacts** and then select **Upload CSV**.
1. Choose an existing list or create a new list.

    If you choose to add the contacts without assigning them to a list, they exist in the contacts database without any additional context. 

1. Upload your file by dragging it into or clicking the CSV upload area.
1. Once the CSV has populated, click **Next:Custom Fields**.

   A page appears displaying the data from the header row from of the CSV file. From the list, you can select a custom field to associate with the data in the column. If there isn't a corresponding field, you can add one. Only the **Email** field is required to complete the upload. Skipped column headers are not uploaded and do not appear as custom fields within an individual contact's profile.

1. Select **Skip Column** to omit data from the contacts list.
1. Once you've gone through all of the headers, click **Next:Add Contacts**.

{% info %}
After uploading contacts, you can define segments for individual contacts or lists based on specified criteria. For more information, see [Lists and Segmentation](https://sendgrid.com/docs/help-support/managing-contacts/segmenting-your-contacts.html).
{% endinfo %}

{% warning %}
   The maximum CSV file size is 2GB.
{% endwarning %}

Once we have completed processing your new contacts, you will receive an email to any addresses specified under [Notifications](https://sendgrid.com/marketing_campaigns/ui/notifications). If there is no email address specified for notifications, the report will go to the address associated with the account by default. To add an additional notification email address, click **Add Notification Email Address**  

![]({{root_url}}/img/add_notification_email_contacts.png "Add Notification Email Address")

The notification email contains the following information:

* Total processed contacts
* Number of new contacts
* Number of updated contacts
* Number of errors
* Error messages for each errored row

If there are any errors, there will be a link to download a CSV containing the errored rows so that you can reformat and reupload those contacts. For more help resolving issues with uploading a CSV, see [Formatting a CSV](https://sendgrid.com/docs/help-support/managing-contacts/formatting-a-csv.html).

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

{% anchor h3 %}
Creating a New List
{% endanchor %}

*To create a new list:*

1. Click **Add Contacts** and then select **Upload CSV**.
1. Click **+Add to New List** and enter the name of the list you would like to create.
1. Choose a CSV file for upload and complete the steps listed in [Uploading a CSV ](#-Uploading-a-CSV).

{% anchor h3 %}
Add Contacts to a List
{% endanchor %}

*To manually add contacts to an existing list:*

1. Navigate to **Marketing Campaigns** and then click **Contacts**.
1. In the top right-hand corner, click **Add Contacts**.
1. Click **Manual Add**.
1. Select the list you want to add the contact to from the drop-down.
1. Enter the information for the new contact.
1. Click **Save Contact**.

{% info %}
If you [create a segment]({{root_url}}/help-support/managing-contacts/segmenting-your-contacts.html#-Creating-a-Segment) before you upload a list, contacts that fit the segment criteria populate that segment when uploaded.
{% endinfo %}

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Contacts API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html)
- [Segmenting your Contacts](https://sendgrid.com/docs/help-support/managing-contacts/segmenting-your-contacts.html)
- [Building your Contact list](https://sendgrid.com/docs/help-support/managing-contacts/building-your-contact-list.html)
