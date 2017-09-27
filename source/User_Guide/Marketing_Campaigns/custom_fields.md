---
layout: page
weight: 55
title: Custom Fields
navigation:
  show: true
seo:
  title: Custom Fields
  override: true
  description: Custom fields help you segment your lists dynamically based on your user information.
---

<iframe src="https://player.vimeo.com/video/120709155" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Custom fields allow you to add extra information about your contacts to your contact database. With custom fields, you can create custom segments from your individual contacts or from your contact database that will dynamically update your content with the values for the individual contact receiving the email. Your custom fields are completely customizable to the use cases and user information that you need.

To add custom fields, simply navigate to the [custom fields page]({{site.marketing_campaigns_url}}/custom_fields), where you can create and manage your custom fields. You’ll notice that we have preloaded your account with the custom fields: email, first_name, and last_name. These are reserved fields and cannot be removed. See our [full list of reserved fields]({{root_url}}/Classroom/Troubleshooting/Authentication/you_have_used_a_reserved_field_name_for_your_custom_field.html).

![]({{root_url}}/images/custom_fields_3.png "See Your New Custom Field")

To create a new custom field, simply click the “create new field” button at the top of the page. You will then see the “add new custom field” form, where you can add in the data about your custom field.

![]({{root_url}}/images/custom_fields_2.png "Add New Custom Field")

The field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores “_”.  The field type can
be date, text, or number fields. We ask for the field type so that we can help you make segments from your contact
database. You will be able to query your list in different ways, based on the data type:

* **Date** - will allow you to select contacts before, after, or on a specific date. *Example: 1/1/2014*
* **Text** - will allow you to select contacts who match specific text. *Example: Pet field that says "Dog"*
* **Number** - will allow you to do things like “greater than,” “less than,” or “equals.” Both decimal and integer values are accepted. *Example: The age of your recipient: 27*

{% info %}
You can create up to 20 custom fields for each data type: date, text, and number.
{% endinfo %}

{% warning %}
Text custom fields are limited to a size of 32,766 bytes.
{% endwarning %}

![]({{root_url}}/images/custom_fields_1.png "Default Custom Fields")

{% anchor h2 %}
Delete a Custom Field
{% endanchor %}

{% warning %}
Deleting this custom field will delete all values for that field across your contact database. If you have any campaigns using this field's substitution tag, those will NOT get replaced when the campaign is sent. You will not be allowed to delete this custom field if it is currently being used in a segment. This deletion process may take several minutes--you will continue to see the custom field on this page until the process has completed.
{% endwarning %}

If you need to delete a custom field, you can do so by clicking the ![]({{root_url}}/images/terms_5.png "Default Custom Fields") in
the same row as your field. When you delete the custom field, you will see a warning that all data associated with this field will be removed as well.

