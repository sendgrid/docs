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

**This is because you are attempting to use a Custom Field that is already reserved by SendGrid for internal purposes.**

**These fields, with the exceptions of email, first\_name, and last\_name, can NOT be edited.**

Reserved fields are used to track useful metrics for your contacts by default. Trying to pass additional data into some of these field names can cause inaccuracies in your Contacts.



Here is a short list of the Reserved Custom Fields:

<table class="table">
  <tr><th>Field Name</th><th>Field Type</th></tr>
  <tr><td>id</td><td>text</td></tr>
  <tr><td>first_name</td><td>text</td></tr>
  <tr><td>last_name</td><td>text</td></tr>
  <tr><td>email</td><td>text</td></tr>
  <tr><td>lists</td><td>text</td></tr>
  <tr><td>created_at</td><td>date</td></tr>
  <tr><td>updated_at</td><td>date</td></tr>
  <tr><td>last_emailed</td><td>date</td></tr>
  <tr><td>last_clicked</td><td>date</td></tr>
  <tr><td>last_opened</td><td>date</td></tr>
</table>

![]({{root_url}}/images/SendGrid_Marketing_Campaigns.png)
