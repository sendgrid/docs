---
seo:
  title: "You have used a reserved field name for your custom field"
  description: "You have used a reserved field name for your custom field"
  keywords: failed, create, upload, name, custom, created_at, updated_at, last_emailed, last_clicked, last_opened, field, reserved, unique, first_name, last_name
title: "You have used a reserved field name for your custom field"
weight: 0
layout: page
zendesk_id: 206923947
navigation:
  show: true
---

When creating Custom Fields, or uploading a list with customized headers in our Marketing Campaigns features, you may encounter the following error:

![]({{root_url}}/images/Cursor_and_customfeilduniqueerror_png.png)

**This is because you are attempting to use a Custom Field that is already reserved by Sendgrid for internal purposes.**

**These fields, with the exceptions of email, first\_name, and last\_name, can NOT be edited.**

Reserved fields are used to track useful metrics for your contacts by default. Trying to pass additional data into some of these field names can cause inaccuracies in your Contacts.

 

Here is a short list of the Reserved Custom Fields:

| **Field Name** | **Field Type** |
| **id** | **text** |
| **first\_name** | **text** |
| **last\_name** | **text** |
| **email** | **text** |
| **created\_at** | **date** |
| **updated\_at** | **date ** |
| **last\_emailed** | **date ** |
| **last\_clicked** | **date ** |
| **last\_opened** | **date ** |

![]({{root_url}}/images/SendGrid_Marketing_Campaigns.png)

