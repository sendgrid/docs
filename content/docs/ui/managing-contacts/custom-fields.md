---
layout: page
weight: 55
title: Using Custom Fields
group: managing-contacts
navigation:
  show: true
seo:
  title: Using Custom Fields
  keywords: Custom Fields, Personalization, customized email
  override: true
  description: Custom fields help you segment your lists dynamically based on your user information.
---

<call-out>

This page is describing the functionality of the new Marketing Campaigns experience, if you're using legacy Marketing Campaigns, your workflow and screens may be a little different. For more information on the new Marketing Campaigns experience click [here](https://sendgrid.com/pricing).

</call-out>

<iframe src="https://player.vimeo.com/video/375994906" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Custom Fields allow you to add extra information about a contact within your contact database when you upload a CSV. You can use custom fields to create dynamic [segments]({{root_url}}/ui/managing-contacts/segmenting-your-contacts/) or to personalize the subject lines or content of Marketing Campaigns emails you send. Your custom fields are completely customizable to the use cases and user information that you need.

<call-out>

You can create up to 120 custom fields. 

</call-out>

##  Creating Custom Fields

*To add a custom field:*

The most common way to add custom fields is by including each custom field you’d like to add as a column in your CSV [upload]({{root_url}}/ui/managing-contacts/create-and-manage-contacts/#uploading-a-csv). If you’d like to add custom fields programmatically, see our [API documentation]( https://sendgrid.api-docs.io/v3.0/custom-fields/create-custom-field-definition)

You can also add custom fields manually from the Custom Fields page. 

1. Navigate to the Custom Fields page and click **New Custom Field**.
1. Add a _Field Name_ and select a _Field Type_.
1. Click **Create Field**.

The field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores(**_**). The **field type** can be date, text, or number fields. The **field type** is important for creating [segments]({{root_url}}/ui/managing-contacts/segmenting-your-contacts/) from your contact
database.

You can create three different types of custom fields, based on the data type. Each data type will allow you to use different queries for segmentation:

* **Date** - allows you to select contacts before, after, or on a specific date. *Example: 1/1/2014*
* **Text** - allows you to select contacts who match the specific text. *Example: Pet field that says "Dog"*
* **Number** - allows you to do things like “greater than,” “less than,” or “equals” a specific number. Both decimal and integer values are accepted. *Example: The age of your recipient: 27*

<call-out type="warning">

Text custom fields are limited to 1,000 characters.

</call-out>

 ### Reserved Fields

Your account comes preloaded with unremovable reserved fields.  The following field names are all reserved:

<table class="table">
  <tr><th>Field Name</th><th>Field Type</th></tr>
  <tr><td>first_name</td><td>text</td></tr>
  <tr><td>last_name</td><td>text</td></tr>
  <tr><td>email</td><td>text</td></tr>
  <tr><td>alternate_emails</td><td>text</td></tr>
  <tr><td>address_line_1</td><td>text</td></tr>
  <tr><td>address_line_2</td><td>text</td></tr>
  <tr><td>city</td><td>text</td></tr>
  <tr><td>state_province_region</td><td>text</td></tr>
  <tr><td>postal_code</td><td>text</td></tr>
  <tr><td>country</td><td>text</td></tr>
  <tr><td>alternate_emails</td><td>text</td></tr>
  <tr><td>phone_number</td><td>text</td></tr>
  <tr><td>whatsapp</td><td>text</td></tr>
  <tr><td>line</td><td>text</td></tr>
  <tr><td>facebook</td><td>text</td></tr>
  <tr><td>unique_name</td><td>text</td></tr>
</table>


SendGrid auto-populates 6 reserved fields: 

``lists``

``created_at``

``updated_at``

``last_emailed``

``last_clicked``

``last_opened``

Reserved fields are used by default to track useful metrics for your contacts.

## Deleting a Custom Field

*To delete a custom field:*

1. Navigate to **Marketing** and select **Custom Fields**.
1. Locate the field you wish to remove.
1. Hover over the action menu to the right of the field name entry.
1. Select the delete icon.
1. Click **Delete Field**.

<call-out type="warning">

Deleting a custom field deletes all values for that field across your contact database. If you have any campaigns using the data in this field with a substitution tag, those values do NOT get replaced when you send the campaign. You cannot delete a custom field that a segment is using in legacy Marketing Campaigns. Currently, in the new Marketing Campaigns experience, you are able to delete custom fields that are currently in use, so be extra cautious when you delete any existing custom fields. 

This deletion process may take several minutes, and you will continue to see the custom field on this page until the process completes

</call-out>

##  Troubleshooting

If a custom field value does not appear in the corresponding [Substitution Tag]({{root_url}}/ui/sending-email/editor/#using-substitution-tags), make sure that there is a value for that custom field associated with the contact in your contact database. If there is no value for a particular custom field, a space will be substituted instead.

If you do find that the custom field has an associated value on the contact’s profile page, check the spelling of the substitution tag in the content of your campaign.


 ## 	Additional Resources

- [Substitution Tags]({{root_url}}/ui/sending-email/editor/#using-substitution-tags)
- [Contacts]({{root_url}}/ui/managing-contacts/create-and-manage-contacts/)
- [Segmenting your Contacts]({{root_url}}/ui/managing-contacts/segmenting-your-contacts/)
