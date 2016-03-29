---
seo:
  title: List Upload Troubleshooting
  description: List Upload Troubleshooting
  keywords: format, list, header, upload, error, UTF-8
title: List Upload Troubleshooting
weight: 0
layout: page
zendesk_id: 206317698
navigation:
  show: true
---

 **My upload file is not accepted**

**Character Encoding**

If your contacts list has non-English characters, please make sure that your file is a CSV file with UTF-8 formatting.

**Text that looks like a number**

Make sure that you don’t have text fields that look like numbers. This excludes whole numbers (1,2,3,4) or decimals/floats (3.1415). Text that look like numbers are those that contain punctuation characters like a dash, underscore, parenthesis, or multiple dots.

Some examples:

- US Zip Code: 80202-1713
- Phone numbers: “(555) 555-5555” or “555.555.5555”
- Monetary Values with the currency indicator such as $3.50 or €5.73

**Data formatting**

Make sure that your dates are properly formatted in your CSV. If you created your CSV with Excel, you may need to force the date format before exporting to CSV. The date format needs to be one of the following: MM/DD/YYYY, MM/D/YYYY, M/D/YYYY, or M/DD/YYYY

**Missing Header**

Your CSV should always have a header row. The rules for this are:

1. You must have an “email” column.
2. Capitalization doesn’t matter.
3. The other columns can be blank.

**Custom fields in your CSV but not your account**

If you include a column in your CSV that is for a custom field not defined in your account, then the CSV will be rejected. We are currently working to add a feature that will let you set up custom fields as a step during the upload process.

**I have more than one of the same email in my database**

With SendGrid’s Marketing Campaigns feature, the unique identifier is the email address. So, if you upload the same email address multiple times, the custom field data associated with that email will be updated with each upload to the most recently uploaded/updated information. This feature helps prevent you from accidentally emailing the user after they have unsubscribed.

What you may want to do is add logic to set a custom field, based on the reason why you have duplicate emails in your system (for example multiple product lines) and then segment your user to be in lists based on those custom fields.

**‹ ** [Custom Fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)

