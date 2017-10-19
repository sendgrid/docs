---
layout: page
weight: 55
title: Using Custom Fields
navigation:
  show: true
seo:
  title: Using Custom Fields
  override: true
  description: Custom fields help you segment your lists dynamically based on your user information.
---

<iframe src="https://player.vimeo.com/video/120709155" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Custom fields allow you to add extra information about a contact to your contact database when you upload a CSV. With custom fields, you can create custom segments from your individual contacts or from your contact database that will dynamically update your content with the values for the individual contact receiving the email. Your custom fields are completely customizable to the use cases and user information that you need.

{% info %}
You can create up to 60 custom fields; 20 of each type (text, date, or number).
{% endinfo %}

{% anchor h2 %}
Create a Custom Field
{% endanchor %}

**Prerequisites**
Before you can create a custom field in the SendGrid app, you need to [format](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html#-Formatting-a-CSV) and [upload](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html#-Uploading-a-CSV) a CSV to your contacts database. 

*To add custom a field:* 

1. Once you have successfully uploaded a CSV containing custom fields, navigate to the [custom fields page]({{site.marketing_campaigns_url}}/custom_fields).  
1. Click **Create New Field**. 
1. Add a *Field Name* and *Field Type*. 
1. Click **Save**. 

The field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores “_”. The field type can
be date, text, or number fields. The *field type* is important for creating [segments](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html) from your contact
database. 

You can query your list in different ways, based on the data type:

* **Date** - will allow you to select contacts before, after, or on a specific date. *Example: 1/1/2014*
* **Text** - will allow you to select contacts who match specific text. *Example: Pet field that says "Dog"*
* **Number** - will allow you to do things like “greater than,” “less than,” or “equals.” Both decimal and integer values are accepted. *Example: The age of your recipient: 27*

{% warning %}
Text custom fields are limited to a size of 32,766 bytes.
{% endwarning %}


{% anchor h2 %}
Reserved Fields
{% endanchor %}

Your account comes preloaded with reserved fields that cannot be removed. With the exception of first_name, last_name, and email, these fields are auto-populated by SendGrid. 

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

{% anchor h2 %}
Deleting a Custom Field
{% endanchor %}

*To delete a custom field:*

1. Navigate to **Marketing Campaigns** and select **Custom Fields**.
1. Locate the field you wish to remove.
1. Hover over the action menu to the right of the field name entry.
1. Select the delete icon. 
1. Clic **Confirm**.

{% warning %}
Deleting a custom field will delete all values for that field across your contact database. If you have any campaigns using the data in this field via a substitution tag, those values will NOT get replaced when the campaign is sent. You cannot delete a custom field that is currently being used in a segment. This deletion process may take several minutes--you will continue to see the custom field on this page until the process has completed.
{% endwarning %}


{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Substitution Tags](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Substitution-Tags)
- [Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html)
- [Creating and exporting segments](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html)