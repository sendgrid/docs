---
st:
  published_at: 2017-01-25
  type: Classroom
seo:
  title: What is the difference between custom fields, reserved fields, and system fields?
  description: There are several different fields you can use to store and organize information about your contacts.
  keywords: custom fields, reserved fields, fields, substitution tags, substitution, tags, system field, contacts, segmentation
title: What is the difference between custom fields, reserved fields, and system fields?
weight: 0
layout: page
navigation:
  show: true
---

Every contact in Marketing Campaigns starts with a unique email address. From there, you can enrich each of your contact profiles by adding additional descriptive data in the form of custom fields and reserved fields. SendGrid will also provide engagement data for each contact you upload and deliver email to.

These various customer data points are extremely useful when creating [dynamic segments]({{root_url}}/User_Guide/Marketing_Campaigns/Managing_Contacts/lists.html#-Createing-a-Segment) of your recipients or customizing campaign content with substitution tags.

{% anchor h2 %}
Reserved Fields
{% endanchor %}

When creating or uploading a new contact in Marketing Campaigns, you must always include that contact's email address. This is the only required contact field, and is reserved for your contact's email address.

There are two reserved fields representing your contacts' names: **first_name** and **last_name**. The values of the reserved custom fields **first_name** and **last_name** can be edited at any time, but the types of these fields cannot be changed.

The **lists** custom field represents the various lists that a contact belongs to. This field excludes any segments. While this field cannot be edited directly, it is updated whenever you add or remove your contact from a list.

{% info %}
Reserved fields do **not** count towards your allotment of 120 custom fields.
{% endinfo %}

<table class="table">
  <tr><th>Field Name</th><th>Description</th><th>Field Type</th><th>Can be edited?</th><th>Substitution tag in campaign builder?</th></tr>
  <tr><td>email</td><td>The contact's email address.</td><td>text</td><td>yes</td><td>yes</td></tr>
  <tr><td>first_name</td><td>The contact's first name.</td><td>text</td><td>yes</td><td>yes</td></tr>
  <tr><td>last_name</td><td>The contact's last name.</td><td>text</td><td>yes</td><td>yes</td></tr>
  <tr><td>lists</td><td>This field contains all of the lists that this contact belongs to.</td><td>text</td><td>Yes. By changing the associated lists for this contact.</td><td>no</td></tr>
</table>

{% anchor h2 %}
Custom Fields
{% endanchor %}

You can create and edit custom fields that are particularly relevant to your email strategy, such as city, gender, age, or even plan type.

{% info %}
You can create up to 120 custom fields.
{% endinfo %}

The following options may be configured when creating a new custom field:

* **Field Name -** Any name of your choice, but cannot contain one of the reserved field names listed above. For more info, [click here]({{root_url}}/Classroom/Troubleshooting/Authentication/you_have_used_a_reserved_field_name_for_your_custom_field.html"). Only use alphanumeric characters (letters A-Z, numbers 0-9). Spaces are not permitted, but you may use underscores.
* **Field Type -** Can be **date**, **text**, or **number**

Custom fields are a great way to segment your recipient list into more targeted, smaller groups, such as “women in Chicago.” Custom fields also allow you to personalize the content of your campaigns for individual contacts using substitution tags.

{% info %}
Spaces are not permitted when creating a custom field in the Marketing Campaigns application. However, if you are uploading a CSV of contacts with custom fields, SendGrid will automatically replace the spaces with underscores when importing your contacts.
{% endinfo %}

{% anchor h2 %}
Segmentation
{% endanchor %}

If you have different demographics (or just groups of contacts with similar traits) that you want to send a targeted campaign to, custom fields can be a great way to achieve this segmentation.

As you add contacts to your list, make sure to record any data relevant to your campaign strategy in a custom field. Then when you're ready to send your campaign, select a segment that you have created based on your desired custom fields. We recommend creating these segments before it is time to deliver your campaign.

![]({{root_url}}/images/contact_fields_1.png)

{% anchor h3 %}
Content Personalization
{% endanchor %}

Custom fields also allow you to customize the content of your campaigns so that it is specifically relevant to each of your recipients by means of **substitution tags**. Every custom field you create also populates as a substitution tag.

From the “Tags” tab of the editor, simply copy the substitution tag you wish to insert and paste it where you would like its value to be inserted in your email. When your email is sent the substitution tags will automatically be replaced (or "substituted") with each contact's corresponding custom field value. [Having trouble getting a custom field to substitute?]({{root_url}}/Classroom/Troubleshooting/Authentication/a_custom_field_value_did_not_substitute_during_a_send.html)

{% anchor h2 %}
Engagement Data
{% endanchor %}

After you first create a new contact, Marketing Campaigns begins building a history of this contact over time, tracking key dates and engagement that can be very useful when creating dynamic segments of your contacts.

The fields that make up this engagement data include things like the date that you originally uploaded your contact to Marketing Campaigns, the date that you last changed or updated your contact, and the dates when you last sent a campaign to your contact, when your contact last opened one of your campaigns, and when your contact last clicked a link in one of your campaigns.

These various fields enable you to identify which contacts are most engaged with your campaigns, thus allowing you to better target your content. As an example, you may wish to send a follow-up email to everyone who opened a particular campaign, since these recipients have demonstrated interest in the topic.

![]({{root_url}}/images/contact_fields_2.png)

<table class="table">
  <tr><th>Field Name</th><th>Description</th><th>Field Type</th><th>Can be edited?</th><th>Substitution tag in campaign builder?</th></tr>
  <tr><td>Date Added</td><td>The date that the contact was uploaded to SendGrid.</td><td>date</td><td>no</td><td>no</td></tr>
  <tr><td>Last Updated</td><td>The date that the contact was most recently updated.</td><td>date</td><td>no</td><td>no</td></tr>
  <tr><td>Last Emailed</td><td>The date that the contact was last emailed.</td><td>date</td><td>no</td><td>no</td></tr>
  <tr><td>Last Clicked</td><td>The date that the contact last clicked on a link in your email.</td><td>date</td><td>no</td><td>no</td></tr>
  <tr><td>Last Opened</td><td>The date that the contact last opened one of your emails.</td><td>date</td><td>no</td><td>no</td></tr>
</table>

{% anchor h3 %}
System Substitution Tags
{% endanchor %}

There are some substitution tags available in the campaign builder that allow you to dynamically insert specific content into your campaign, such as web links, unsubscribe links, or links to your campaign's subscription preferences page. _These system substitution tags are not related to your contact data_ and should not be confused with reserved or custom fields.

For a more detailed discussion of these tags with information on how to use them, see our Classroom article titled [Unsubscribe, Sender ID, and Weblink System Tags]({{root_url}}/Classroom/Basics/Marketing_Campaigns/default_mc_tags.html).
