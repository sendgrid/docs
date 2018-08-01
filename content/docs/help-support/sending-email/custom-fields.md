---
layout: page
weight: 55
title: Using Custom Fields
group: building-email
navigation:
  show: true
seo:
  title: Using Custom Fields
  keywords: Custom Fields, Personalization, customized email
  override: true
  description: Custom fields help you segment your lists dynamically based on your user information.
---

- [Creating Custom Fields](#-Creating-Custom-Fields)
- [Reserved Fields](#-Reserved-Fields)
- [Deleting a Custom Field](#-Deleting-a-Custom-Field)
- [Troubleshooting](#-Troubleshooting)

<iframe src="https://player.vimeo.com/video/120709155" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Custom fields allow you to add extra information about a contact to your contact database when you upload a CSV. With custom fields, you can create custom segments from your individual contacts or from your contact database that dynamically update your content with the values for the individual contact receiving the email. Your custom fields are completely customizable to the use cases and user information that you need.

<call-out>

You can create up to 120 custom fields.

</call-out>

## 	Creating Custom Fields
 	
*To add a custom field:*

1. Navigate to the [Custom Fields page]({{site.marketing_campaigns_url}}/custom_fields).
1. Click **Create New Field**.
1. Add a _Field Name_ and _Field Type_.
1. Click **Save**.

You can also add custom fields when you [upload]({{root_url}}/help-support/managing-contacts/adding-contacts/#-Uploading-a-CSV) a CSV to the contacts database.

The field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores “_”. The field type can be date, text, or number fields. The *field type* is important for creating [segments](https://sendgrid.com/docs/API_Reference/help-support/managing-contacts/segmenting-your-contacts/) from your contact
database.

You can query your list in different ways, based on the data type:

* **Date** - allows you to select contacts before, after, or on a specific date. *Example: 1/1/2014*
* **Text** - allows you to select contacts who match the specific text. *Example: Pet field that says "Dog"*
* **Number** - allows you to do things like “greater than,” “less than,” or “equals.” Both decimal and integer values are accepted. *Example: The age of your recipient: 27*

<call-out type="warning">

Text custom fields are limited to a size of 32,766 bytes.

</call-out>

 ### 	Reserved Fields
 	
Your account comes preloaded with reserved fields that cannot be removed. The following field names are all reserved:

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


Except for first_name, last_name, and email these fields are auto-populated by SendGrid and correspond to data for each contact in the app. Reserved fields are used to track useful metrics for your contacts by default.

## 	Deleting a Custom Field
 	
*To delete a custom field:*

1. Navigate to **Marketing Campaigns** and select **Custom Fields**.
1. Locate the field you wish to remove.
1. Hover over the action menu to the right of the field name entry.
1. Select the delete icon.
1. Click **Confirm**.

<call-out type="warning">

Deleting a custom field deletes all values for that field across your contact database. If you have any campaigns using the data in this field with a substitution tag, those values do NOT get replaced when you send the campaign. You cannot delete a custom field that a segment is currently using. This deletion process may take several minutes--you continue to see the custom field on this page until the process has completed.

</call-out>

## 	Troubleshooting
 	

If a Custom Field value does not appear in the corresponding [Substitution Tag]({{root_url}}/help-support/sending-email/editor/#-Using-Substitution-Tags), make sure that there is a value for that custom field associated with the contact in your contact database. If there is no value for a particular custom field, a space will be substituted instead.

If you do find that the custom field has an associated value on the contact’s profile page, check the spelling of the substitution tag in the content of your campaign.

 ### 	Additional Resources
  	
- [Substitution Tags](https://sendgrid.com/docs/API_Reference/help-support/sending-email/editor/#-Using-Substitution-Tags)
- [Contacts](https://sendgrid.com/docs/API_Reference/help-support/managing-contacts/adding-contacts/)
- [Creating and exporting segments](https://sendgrid.com/docs/API_Reference/help-support/manging-contacts/segmenting-your-contacts/)
