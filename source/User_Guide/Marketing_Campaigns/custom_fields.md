---
layout: page
weight: 80
title: Custom Fields
navigation:
  show: true
seo:
  title: Custom Fields
  override: true
  description: Custom fields help you segment your lists dynamically based on your user information.
---

<iframe src="//player.vimeo.com/video/120709155" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Custom fields allow you to add extra information about your contacts to your contact database. With custom fields, you can create custom segments from your individual contacts or from your contact database that will dynamically update your content with the values for the individual contact receiving the email. Your custom fields are completely customizable to the use cases and user information that you need.

You will need to set up custom fields before you upload your CSV, so that we know what data to expect with your contacts.

To add custom fields, simply navigate to the [custom fields page](https://sendgrid.com/marketing_campaigns/custom_fields), where you can create and manage your custom fields. You will notice that we have preloaded your account with email, first_name, and last_name custom fields.

![]({{root_url}}/images/custom_fields_3.png "See Your New Custom Field")

To create a new custom field, simply click the “create new field” button at the top of the page. You will then see the “add new custom field” form, where you can add in the data about your custom field.

![]({{root_url}}/images/custom_fields_2.png "Add New Custom Field")

The field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores “_”.  The field type can
be date, text, or number fields. We ask for the field type so that we can help you make segments from your contact
database. You will be able to query your list in different ways, based on the data type.

* **Date** - will allow you to select contacts before, after, or on a specific date.
* **Text** - will allow you to select contacts who match specific text.
* **Number** - will allow you to do things like “greater than,” “less than,” or “equals.” Both decimal and integer values are accepted.

{% info %}
The number of custom fields that you can have at the moment is 20.  This is means you can have 23 fields total.  (first_name, last_name, email, and 20 custom fields)
{% endinfo %}

If you need to delete a custom field, you can do so by clicking the ![]({{root_url}}/images/terms_5.png "Default Custom Fields") in
the same row as your field. When you delete the custom field, you will see a warning that all data associated with this field will
be removed as well.

![]({{root_url}}/images/custom_fields_1.png "Default Custom Fields")

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/senders.html">Sender Identities</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/contacts.html">Contacts</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
