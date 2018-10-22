---
layout: page
weight: 90
group: marketing-campaigns
title: Create and Manage Unsubscribe Groups
seo:
  title: Create and Manage Unsubscribe Groups
  description: Suppression Manager helps you to define and manage unsubscribe groups to keep you out of the spam folder.
  keywords: unsubscribe groups, suppressions, manage unsubscribe groups, delete unsubscribe groups
navigation:
  show: true
---
<iframe src="https://player.vimeo.com/video/221494705" width="500" height="312" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
Adding Unsubscribe Groups to your emails makes it easy to honor your recipients' email preferences and protects your sender reputation by complying with anti-spam legislation.

## Create an Unsubscribe Group

*To create an Unsubscribe Group:*

1. Select **Marketing** and then click **Unsubscribe Groups**.
1. Click **Add Unsubscribe Groups**.
1. Add a *Group Name* and *Group Description*.


<call-out>

Make sure your Group Names and Group Descriptions are customer-friendly. This is what your recipients will see.


</call-out>

4. Select the checkbox if you want the Unsubscribe Group to display on the unsubscribe preferences page.
5. Click **Save Unsubscribe Group**.


<call-out>

To view the unsubscribe preferences page, select the action menu next to an Unsubscribe Group and then click **Preview**. Toggle to the Unsubscribe Preferences tab to view all of the options listed.

</call-out>

## Adding an Unsubscribe Group to your Email

*Using the Design Editor:*

1. Select your preferred Unsubscribe Group by clicking **Settings** and selecting the group from **Recipients**.
1. From the **Build** tab, drag the **Unsubscribe** module to insert Sender Information and a link to the [unsubscribe] tag.
1. To manually hyperlink to the [unsubscribe] tag, enter the text you would like to link.
1. Highlight the text then select the link icon from the top toolbar.
1. In the URL field enter [unsubscribe], then click **Save**.

*Using the Code Editor:*

1. Select your preferred Unsubscribe Group from the **Settings** > **Recipients**.
1. Enter the following code styling to the HTML window where you would like your unsubscribe content placed:

```
<a href="[unsubscribe]">Click here to unsubscribe.</a>
```

If you are participating in the Automation closed beta, you will add the unsubscribe tag using the following format:  ``{{[unsubscribe]}}``

For more information on the Automation beta, see our [Email Marketing Automation](https://sendgrid.com/solutions/marketing-automation/) page.

## Add recipients to an Unsubscribe Group

*To upload a CSV:*

1. Find the group you want to add recipients to and click the action menu.

![]({{root_url}}/img/unsub_action_menu.png "Unsubcribe Group action menu")

2. Select **Upload a CSV**.
3. Drag the CSV you want to upload into the field, or click **select a CSV file to upload** and locate the file you want to upload from your files.
4. Click **Upload CSV**.

*To manually add recipients to an Unsubscribe Group:*

1. Find the group you want to add recipients to and click the action menu.
1. Select **Manually Add**.
1. Enter a recipient email address and then click **Save**.

## Managing Unsubscribe Groups

From the UI, you can edit Unsubscribe Groups or download a list of recipients that have unsubscribed from your emails. For more information on managing unsubscribes, see the SendGrid [Suppressions Overview]({{root_url}}/ui/sending-email/index-suppressions/#managing-unsubscribes)


### Exporting an Unsubscribe Group List


*To export an Unsubscribe Group List:*

1. Navigate to the Unsubscribe Group you want to export.
1. Click the action menu.
1. Select **Export**. A CSV file begins downloading.

### Editing an Unsubscribe Group

*To edit an Unsubscribe Group:*

1. Navigate to the Unsubuscribe Group you want to edit.
1. Click the action menu.
1. Select **Edit**.
From the Edit Group page, you can change the Group Name, Group Description, and display preferences.

### Deleting an Unsubscribe Group

*To delete an Unsubscribe Group:*

1. Navigate to the Unsubuscribe Group you want to delete.
1. Click the action menu.
1. Select **Edit**. The Edit Group page opens.
1. Click **Delete Group**.
1. Confirm that you want to delete the selected group and then click **Delete**.

![]({{root_url}}/img/confirm_unsub_group_delete.png "Confirm Unsubscribe Group Delete")

## Additional Resources

- [Suppressions Overview]({{root_url}}/ui/sending-email/index-suppressions/)
- [Group Unsubscribes]({{root_url}}/ui/sending-email/group-unsubscribes/)
- [Global Unsubscribes]({{root_url}}/ui/sending-email/global-unsubscribes/)
