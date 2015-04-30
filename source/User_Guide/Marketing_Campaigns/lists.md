---
layout: page
weight: 60
title: Lists
navigation:
  show: true
seo:
  title: Lists
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/121404093" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Managing Your Lists
{% endanchor %}

All of your list management features can be reached through the gear icon on the main contacts page. Just click the icon on
the right side of your list title to see Export, View List, Edit List, and Delete options.

![]({{root_url}}/images/lists_2.png "List Management Options")

{% anchor h3 %}
Change the List Name
{% endanchor %}

To change the name of a list, view the list and then click the pencil icon next to the name of the list at the top of the
page. You will be able to edit the name and then hit your enter key to save the change.

![]({{root_url}}/images/lists_1.png "Change your list name")

{% anchor h3 %}
Edit a List
{% endanchor %}

When you select the "Edit List" option, you will be shown the upload contacts options that will allow you to add contacts directly to this list. You will
also be able to create a segment of this list directly from this window.

{% anchor h3 %}
Delete a List
{% endanchor %}

If you would like to delete a list, go to [Contacts](https://sendgrid.com/marketing_campaigns/contacts) where you will see
a list of our contacts, then click the gear icon in the same row as your list name and select "Delete". Once you have confirmed
that you do in fact want to delete this list, only the association of a contact to this list will be deleted. Your contact’s
information will continue to exist in your contact database.

{% anchor h3 %}
Create a List
{% endanchor %}
You create lists when you upload contacts, please check out our information on [uploading contacts]({{root_url}}/User_Guide/Marketing_Campaigns/contacts.html#-Uploading-Contacts) for more information.

{% anchor h2 %}
Create a Segment
{% endanchor %}

You can create a new segment with multiple conditions based on the information you have stored about your contacts. This
includes email, first_name, last_name, and all of the custom fields you have created prior to making this segment.

To set up a segment, click the “add list or Segment” button from [Contacts](https://sendgrid.com/marketing_campaigns/contacts).

![]({{root_url}}/images/lists_5.png "Delete a List")

Then select the “New Segmentation” option. You can then start managing the parameters for your segment including the name and the conditions that allow a
contact into this segment. This is where the type you set for your custom fields matters because different operators (```IS```,
```IS NOT```, ```IS BEFORE```, ```IS AFTER```, ```CONTAINS WORD```, etc.) will show up depending on the type of custom field you selected. For
example, a field that is a “number” will show greater than, less than, and equals as options where a “text” field will
show ```IS``` and ```IS NOT``` as options. As you add conditions you
will be able to select ```AND``` or ```OR``` as options, where ```AND``` indicates
both conditions are required and ```OR``` indicates either condition will work.

![]({{root_url}}/images/lists_3.png "Create a Segment")

You can also segment your users by their engagement with your email campaigns. To do this, create a new list and choose
the ```Engagement: Opens``` or ```Engagement: Clicks``` option from
the bottom of the conditions fields list. Based on the criteria you set, you can then market to your users based on how
engaged they are with a specific campaign. This is especially useful for doing things like rewarding high engagement users.

![]({{root_url}}/images/lists_engagement_segment_1.png "User Engagement Segment")


{% anchor h3 %}
Export a Segment List
{% endanchor %}

Export the contacts on a list by clicking the gear icon in the same row as your segment and then choosing the “export”
option. This will trigger SendGrid to send an email to the primary email address on the account that includes a link to
download the CSV of all the contacts in the list and their associated custom field values.
The CSV export email will look like:

![]({{root_url}}/images/lists_4.png "Export a Segment List")


<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/contacts.html">Contacts</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/templates.html">Templates</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>