---
layout: page
weight: 60
title: Lists and Segmentation
navigation:
  show: true
seo:
  title: Lists and Segmentation
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/121404093" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
What are Lists and Segments?
{% endanchor %}

Lists are simply static collections of Marketing Campaigns contacts. By default, any new contacts you add are stored under ALL CONTACTS. You may create new lists when adding contacts either manually, or when uploading a CSV (comma separated values) file.

Segments are dynamic collections of Marketing Campaigns contacts grouped together, or segmented, based on criteria you define. This can include data you track about them, such as gender, location, or package type, or how they’ve engaged with your emails previously. You can create a segment that pulls from ALL CONTACTS or from a specific existing list.

Segments are dynamically updated over time as you add customers who meet the criteria of your segment, or as the traits of your contacts change. For example, a segment with the criteria ”opened an email within 30 days” will evolve as contacts engage (or don’t engage) with your email. Segmentation can be especially useful to ensure that you are targeting the best recipients for your campaign.

{% info %}
You must create at least one list or segment in order to send a campaign.
{% endinfo %}

{% anchor h2 %}
Managing Your Lists
{% endanchor %}

<iframe src="https://player.vimeo.com/video/227937591" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

All of your list management features can be reached through the gear icon on the main contacts page. Just click the icon on the right side of your list title to see Export, View List, Edit List, and Delete options.

![]({{root_url}}/images/lists_2.png "List Management Options")

{% anchor h3 %}
Change the List Name
{% endanchor %}

To change the name of a list, view the list and then click the pencil icon next to the name of the list at the top of the page. You will be able to edit the name and then hit your enter key to save the change.

![]({{root_url}}/images/lists_1.png "Change your list name")

{% anchor h3 %}
Edit a List
{% endanchor %}

When you select the “Edit List” option, you will be shown the upload contacts options that will allow you to add contacts directly to this list. You will also be able to create a segment of this list directly from this window.

{% anchor h3 %}
Delete a List
{% endanchor %}

If you would like to delete a list, go to [Contacts]({{site.marketing_campaigns_url}}/contacts) where you will see a list of your contacts, then click the gear icon in the same row as your list name and select “Delete”. Once you have confirmed that you do in fact want to delete this list, only the association of a contact to this list will be deleted. Your contact’s information will continue to exist in your contact database.

{% anchor h3 %}
Create a List
{% endanchor %}
You create lists when you upload contacts, please check out our information on [uploading contacts]({{root_url}}/User_Guide/Marketing_Campaigns/contacts.html#-Uploading-Contacts) for more information.

{% info %}
You can create up to 100 lists.
{% endinfo %}

{% anchor h3 %}
Add Contacts to a list
{% endanchor %}

To add contacts to a list, click the gear icon next to the list name and select “Edit List”. A window will pop out where you can upload a new CSV or manually add a contact.

{% anchor h3 %}
Remove Contacts From a List
{% endanchor %}

Click on the name of your list to view all the contacts on the list. Check the box next to the contacts you would like to remove. You will notice that a button at the top right corner will keep track of how many contacts you have selected. Click the button with the selected count and choose the option “Remove from this list” to take these contacts off the list.

{% info %}
Choosing “Delete” will permanently remove the contacts from your contact database. You cannot roll back this change through the UI without re-adding the contacts manually or via a CSV.
{% endinfo %}

If you would like to remove these contacts from your contact database, you can do that by selecting “Delete”.


{% anchor h2 %}
Create a Segment
{% endanchor %}

<iframe src="https://player.vimeo.com/video/229916004" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

You can create a new segment with multiple conditions based on the information you have stored about your contacts. This
includes email, first_name, last_name, and all of the custom fields you have created prior to making this segment.

The fields `Date Added` and `Last Updated` are system generated. `Date Added` refers to the date the contact record was first created on your account. `Last Updated` refers to the date the contact was last updated. This could have been any of the following: a manual field update, an import that updated several qualities of this record or an API call that automatically updated this record.

{% info %}
You can create up to 400 segments.
{% endinfo %}

*To create a Segment:*

1. Navigate to **Marketing** and then select **Contacts**.
1. Click **Create Segment**. 
1. Choose either **Segment all contacts** or **Segment an exisiting list**.
1. Enter a *Segment Name*.
1. If you chose to segment an existing list, select a list from the *Select List to Segment* drop-down. 

1. In **Select Condition** choose a desired condition or custom field.
1. In **Select Criteria** choose from a list of available operators based on the chosen condition. (`IS`, `IS NOT`, `IS BEFORE`, `IS AFTER`, `CONTAINS WORD`, etc.)

  Different operators will show up depending on the type of condition or custom field selected. e.g. a field that is a “number” will show `GREATER THAN`, `LESS THAN`, and `EQUALS` as options where instead a “text” field will
show `IS` and `IS NOT` as options.

1. Select **+** to add additional conditions.

 You will be able to select `AND` or `OR` as options, where `AND` requires both conditions to be true and `OR` requires either condition to be true.
 
{% info %}
You can add up to 15 different conditions per segment.
{% endinfo %}

![]({{root_url}}/images/lists_3.png "Example of a Segment requiring countries to be either U.S. or Canada")

You can also segment your users by their engagement with your email campaigns. You can then market to your users based on how
engaged they are with a specific campaign. This is especially useful for doing things like rewarding high engagement users.

*To create this Segment:*

1. Create a new Segment.
1. In **Select Condition** choose **Engagement: Opens** or **Engagement: Clicks**

![]({{root_url}}/images/lists_engagement_segment_1.png "User Engagement Segment")


{% anchor h3 %}
Export a Segment
{% endanchor %}

*To export a Segment:*

1. Click the gear icon in your Segment's row
1. Choose **Export**

  This will trigger SendGrid to send an email to the primary email address on the account that includes a link to
download the CSV of all the contacts in the list and their associated custom field values.
The CSV export email will look like:

![]({{root_url}}/images/lists_4.png "CSV Export Email")

{% info %}
The download link for your CSV export will be valid for 24 hours.
{% endinfo %}
