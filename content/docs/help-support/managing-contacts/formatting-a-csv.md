---
layout: page
weight: 80
title: Formatting a CSV
group: managing-contacts
navigation:
  show: true
seo: 
  title: Formatting a CSV
  keywords: Marketing Campaigns Contacts, CSV, Contact Information, Contacts
  override: true
  description: Directions on how to format a CSV for upload using SendGrid Marketing Campaigns
---

You can easily add contacts to your contact database by uploading a CSV into Marketing Campaigns. If you have your contacts in a spreadsheet, simply save that sheet as a CSV file using a spreadsheet application like Microsoft Excel or Google Sheets. You can also export your contacts from most database systems as a CSV file.

##  
General Formatting Rules
 	
Here are some rules to follow when formatting a CSV to upload into Marketing Campaigns.

 ###  
Contact Info 
 	
Your CSV should contain the following information about each contact:

* email (required)
* first_name
* last_name
You can also include [custom fields]({{root_url}}/docs/help-support/sending-email/custom-fields/) with additional identifying information for each contact in the CSV. For example, you can specify “country,” “city,” and “age” as the custom fields. The data in the custom fields are critical for both segmentation and content personalization.

 ###  
Header Row 
 	
The first row of your CSV must be a header row containing labels identifying each column. Headers must only use letters, numbers, and underscores. If you add custom field data to your CSV, you can save some time when uploading by naming the columns the same as the custom fields you have previously defined.

SendGrid identifies individual contacts by their email address, so "email" must be one of the CSV headers. If you do not include the email column, SendGrid will not add any information to your contact database or list. Rows in your CSV without an email address in the email column will automatically fail, but will not cause the entire upload to fail.

 ###  
Character Encoding 
 	
If your contacts list has non-English characters, please make sure that you're using a CSV file that is UTF-8 encoded.

 ###  Not all addresses populate in UI  	
SendGrid removes duplicate and invalid email addresses (including email addresses with special characters) from your list during upload, so the number of contacts can potentially change between your CSV and your Marketing Campaigns list.

 ###  Numbers and Text  	
Make sure that you don’t have text fields that look like numbers. Text that look like numbers are those that contain punctuation characters like a dash, underscore, parenthesis, or multiple dots.

```
- US Zip Code: 80202-1713
- Phone numbers: “(555) 555-5555” or “555.555.5555”
- Monetary Values with the currency indicator such as $3.50 or €5.73
```
 ###  CSV Header  	
- Header fields can be blank in your CSV, but must be named and have their type defined later during the upload process.

 ### 	Date Formatting 
 	
Properly format any dates in your CSV. If you created your CSV with Excel and it is not displaying properly, force the date format before exporting to CSV. Use one of the following date formats: `MM/DD/YYYY, MM/D/YYYY, M/D/YYYY, or M/DD/YYYY`

**I have more than one of the same email in my database**

Marketing Campaigns uses email as the unique identifier for each contact. So, if you upload the same email address multiple times, the [custom field]({{root_url}}/docs/help-support/sending-email/custom-fields/) data associated with that email will be updated with each upload to the most recently uploaded/updated information. This feature helps prevent you from accidentally emailing the user after they have unsubscribed.

If it's necessary to have a duplicate entry in your contacts database What you may want to do is add logic to set a custom field, based on the reason why you have duplicate emails in your system (for example multiple product lines) and then [segment]({{root_url}}/docs/help-support/managing-contacts/managing-contact-list/) your user to be in lists based on those custom fields.

## 	Troubleshooting
 	
Listed below are a few errors you may encounter when uploading a CSV to Marketing Campaigns, along with tips to correct the root issue. 

**We were unable to detect an email column in the CSV file headers. The email column must always have a header of "email"**

- If there is a header labeled “email”, try moving it to the column A, so it is the first header in your list.
- Your CSV _must_ include an email header.

![Move email header to colmn A]({{root_url}}/img/listupload_1.png)

**Some of your custom fields have not been selected**

- Look for hidden characters in your CSV file if you have worked with the file multiple times and made some adjustments to the data.
- A common fix for this error would be to select all and copy your data to a new CSV spreadsheet. This should remove any hidden characters.

![]({{root_url}}/img/listupload_2.png)

**Each custom field can only be applied to a column once. Please check your columns and try again**

- Check your CSV for duplicate fields, especially fields that have matching information as your “email”, “first_name” and “last_name” fields. You cannot edit these field names as they are reserved. 
- For example, if you have a “Name” field, it may conflict with your “first_name” reserved field.

![]({{root_url}}/img/listupload_3.png)

**We were unable to detect any headers in your CSV file**

- Include headers at the top of each column. All CSV uploads must contain the "email" header. Header fields can be blank in your CSV, but must be defined later during the upload process.

![]({{root_url}}/img/listupload_4.png)

**Float type conversion error**

- Categorize dashes or decimal places that are past the hundredth place as text_fields (-100, 123.123 are text fields, 100, 12.12 can be number fields).
Number fields can include monetary values without the currency symbols. For example, 19.95 would be a number field, and $19.95 including the ($) would be a text field.
- As you are uploading your CSV, make sure you select the correct fields for your Field type.

![]({{root_url}}/img/listupload_table.png)

 ### 	Additional Resources
 	
- [Contacts API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb/)
- [Segmenting your Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists/)
- [Building your Contact list](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/Managing_Contacts/build_contact_list/)
