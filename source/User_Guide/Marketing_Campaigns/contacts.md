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

<iframe src="https://player.vimeo.com/video/121404093" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Managing contacts is an integral part of your marketing campaigns lifecycle. From our [contacts]({{site.marketing_campaigns_url}}/contacts) page, you can add, upload, and delete your contacts.

{% info %}
Your first 2,000 contacts are free.
{% endinfo %}

To add your contacts, just click the "Add List" or "Segment" button and then select your upload method. For information about how many contacts come with your package, please refer to our [pricing page]({{site.pricing_url}}).

![]({{root_url}}/images/add_list_or_segment_button.png)

{% info %}
SendGrid requires that your contacts have given you explicit permission to email them. We do not allow purchased or rented lists. Please see our [email policy](https://sendgrid.com/email_policy) for more details.
{% endinfo %}

{% anchor h2 %}
Manually Add a Contact
{% endanchor %}

In order to manually add a single contact straight to your contact database, just click the “manual” tab on the upload window. You will then be able to add the information for your contact.

{% anchor h2 %}
Uploading Contacts
{% endanchor %}

Contacts can be added to your contacts database via the API or using a CSV file through the SendGrid Customer Portal. If you have any issues, please see our Troubleshooting Guide.

{% warning %}
Email is the unique identifier for your Contacts Database. This means you cannot add the same email to your user's contacts database twice, doing so will cause the original record to update all fields passed to the information in the most recent update. Updates to your contacts cannot be rolled back.
{% endwarning %}

{% anchor h3 %}
Prepare Contacts for Upload
{% endanchor %}

{% warning %}
Your CSV file MUST be in UTF-8 format.
{% endwarning %}

You can easily add contacts to your contact database by uploading a CSV of your contacts to SendGrid. If you have your
contacts in a spreadsheet, simply save that sheet as a .csv file using a spreadsheet application like Microsoft Excel or
Google Spreadsheets. You can also export your contacts from most database systems as a .csv file.

Your CSV should have the contacts you want to upload into the Marketing Campaigns app, as well as their respective custom fields. For example: email, first_name, last_name, country, city, age - where “country,” “city,” and “age” are your custom fields.

The first row of your CSV must always be a header row which will identify the columns of your contacts. We have provided [an example CSV file]({{root_url}}/assets/example.csv) for you to look at. The first row of the file is the header row. All headers must only use letters, numbers, and underscores. If you add custom field data to your CSV, while it’s not a requirement to do so, you can save yourself some time on upload by naming the columns the same as the custom fields you have previously defined in the Marketing Campaigns customer portal.

{% info %}
You must include ```email``` as one of your CSV headers because that is how we identify individual contacts. If you do not include the email column, we will not add any information to your contact database or list. Also, it should be noted that any rows in your CSV without an email address in the email column will automatically fail, but will not cause the entire upload to fail.
{% endinfo %}

{% anchor h3 %}
Upload Your Contacts
{% endanchor %}

You can add contacts by uploading the CSV you prepared in a previous step. If you happen to upload the same contact more than once, we will append or update any data, assuming the most recent upload has the correct and most up to date information.

{% info %}
We will never create a duplicate contact in your contact database or add a contact more than once to any list or segment.
{% endinfo %}

{% anchor h3 %}
Add Contacts From a CSV
{% endanchor %}

To add new contacts, select “Add Contacts” and then select “Upload CSV.” Select your file by dragging a file into or clicking the CSV upload area which says “Drag and drop your CSV here or select it from your computer.”

{% warning %}
The maximum uploadable file size of your CSV is 2GB.
{% endwarning %}

{% anchor h3 %}
Create a New List from a CSV
{% endanchor %}

To create a new list from your CSV choose “Add List or Segment” and then select “Upload CSV.” Add the name of the list you would like to create and then choose your file.

{% anchor h3 %}
Add Contacts to a List
{% endanchor %}

You can manually add a contact or upload a CSV of contacts directly to a list that already exists by going to your contacts page and clicking the gear icon in line with your list name and then selecting “Edit”.  From the window that pops out, the normal upload or manual add functionality will be available.

{% anchor h3 %}
Select Your Custom Fields
{% endanchor %}

Once your file uploads, you will see a new window pop out that has inspected the header row from your CSV file. It will automatically show each column header from your header row.

{% info %}
If you have a CSV that contains data you do not wish to upload, you may choose to skip certain column headers. All column headers other than "Email" may be skipped by selecting the "Skip Column" checkbox to the right of the column header. Skipped column headers will not be uploaded and will not appear as custom fields within an individual contact's profile.
{% endinfo %}

For each header you can select which custom field to associate to the data in the column. If the header matches a custom field name, the two will automatically be connected. You can also add a custom field if you need to.

You will see the progress as your file uploads to SendGrid. This simply shows that we have the information. If your list is quite large, we will start the process of storing and automatically segmenting your contacts if you have already set up segments on your account. For smaller lists, you will see your contacts in your new list quickly.

![]({{root_url}}/images/contacts_2.png "Upload Contact Status")

Once we have completed processing your new contacts, you will receive a summary notification email with:

* Total processed contacts
* Number of new contacts
* Number of updated contacts
* Number of errors
* Error messages for each errored row

If there are any errors, there will be a link to download a CSV containing the errored rows so that you can reformat and re-upload those contacts. If you’re watching in the UI, every time you refresh the page your contact # should change as we’re processing your contacts.

{% info %}
The download link to your CSV of errored rows will be available for 24 hours.
{% endinfo %}

![]({{root_url}}/images/contacts_3.png "Upload Contact Status Email")

{% info %}
If you [create a segment]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment) before you
upload a list, any contact that fits the segment criteria you've defined will be added to that segment.
{% endinfo %}

{% anchor h3 %}
Viewing a Contact Profile
{% endanchor %}

{% info %}
Searches are case-insensitive but must be done using a whole email address that includes an "@" and any TLD like ".com" or ".io"
{% endinfo %}

To view a specific contact profile, find the contact in one of your lists or by searching your contact database. Then click the contact’s email address. You will then be able to view the email, reserved fields that SendGrid provides, and list associations for this contact.

![]({{root_url}}/images/contact_profile_page_details.png)

To view any custom fields you have assigned to this contact, or to view any lists that you have added this contact to, you may flip through the tabs beneath the Contact Details. You may either view all custom fields at once, or you can filter them by the following types: “Text”, “Date”, and “Number”.

![]({{root_url}}/images/contact_profile_page_tabs.png)

{% anchor h3 %}
Editing a Contact Profile
{% endanchor %}

When you are viewing a contact, click any of the "Edit" buttons to edit the contact's information within that section. This includes the SendGrid provided reserved fields (except email), any custom fields you’ve added for this contact, and any lists the contact is associated with.

![]({{root_url}}/images/editing_contact_custom_fields.png)

To edit the associated lists for your contact, simply click on the Associated Lists tab, enter or select the list you would like to use, and click Add.

![]({{root_url}}/images/editing_associated_lists.png)

{% anchor h3 %}
Delete a Specific Contact
{% endanchor %}

To remove one or more contacts from a list, find the contact and click the "Remove from list" option in the gear icon ![]({{root_url}}/images/terms_5.png "Contact Options") in
the same row. You will also see an option to delete the contact, which deletes them from your contact database.

![]({{root_url}}/images/contacts_4.png "Delete a contact")

{% anchor h3 %}
Delete All Contacts
{% endanchor %}

If you would like to delete all of your contacts at once, navigate to your [Contacts page](https://sendgrid.com/marketing_campaigns/contacts) and click on the Action Cog next to All Contacts. Select Delete All Contacts.

This will delete all of your Marketing Campaigns contacts, without deactivating your account.

![]({{root_url}}/images/delete_all_contacts.png)


{% anchor h2 %}
Troubleshooting Contacts Upload
{% endanchor %}

{% anchor h3 %}
My upload file is not accepted
{% endanchor %}

**Character Encoding**

If your contacts list has non-English characters, please make sure that your file is a CSV file with UTF-8 formatting.

**Text that looks like a number**

Make sure that you don't have text fields that look like numbers. This excludes whole numbers (1,2,3,4) or decimals/floats (3.1415). Text that look like numbers are those that contain punctuation characters like a dash, underscore, parenthesis, or multiple dots.

Some examples:

* US Zip Code: 80202-1713
* Phone numbers: “(555) 555-5555” or “555.555.5555”
* Monetary Values with the currency indicator such as $3.50 or €5.73

**Data formatting**

Make sure that your dates are properly formatted in your CSV. If you created your CSV with Excel, you may need to force the date format before exporting to CSV. Years must be represented as 4-digit numbers. 1999 not 99. Day and month fields may be represented as single numbers.

The date format must be one of the following: MM/DD/YYYY, MM/D/YYYY, M/D/YYYY, or M/DD/YYYY

**Missing Header**

Your CSV should always have a header row. The rules for this are:

1. You must have an “email” column.
1. Capitalization doesn’t matter.
1. The other columns can be blank.

{% anchor h3 %}
I have more than one of the same email in my database
{% endanchor %}

With SendGrid's Marketing Campaigns feature, the unique identifier is the email address. So, if you upload the same email address multiple times, the custom field data associated with that email will be updated with each upload to the most recently uploaded/updated information.  This feature helps prevent you from accidentally emailing the user after they have unsubscribed.

What you may want to do is add logic to set a custom field, based on the reason why you have duplicate emails in your system (for example multiple product lines) and then segment your user to be in lists based on those custom fields.

