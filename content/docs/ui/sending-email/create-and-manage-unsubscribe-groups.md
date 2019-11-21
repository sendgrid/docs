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

<iframe src="https://player.vimeo.com/video/373265768" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<call-out>

This page is describing the functionality of the new Marketing Campaigns experience. If you're using legacy Marketing Campaigns, your workflow and screens may be a little different. For more information on the new Marketing Campaigns experience click [here](https://sendgrid.com/pricing).

</call-out>

Adding Unsubscribe Groups to your emails makes it easy to honor your recipients' email preferences and protect your sender reputation by complying with anti-spam legislation.

## Create an Unsubscribe Group

*To create an Unsubscribe Group:*

1. Select **Marketing** and then click **Unsubscribe Groups**.
1. Click **Create New Group**.
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
1. From the **Build** tab, drag the **Unsubscribe** module to insert Sender Information and a link to the `{{{unsubscribe}}}` tag.
1. To manually hyperlink to the {{{unsubscribe}}} tag, enter the text you would like to link.
1. Highlight the text then select the link icon from the top toolbar.
1. In the URL field enter `{{{unsubscribe}}}`, then click **Save**.

*Using the Code Editor:*

1. Select your preferred Unsubscribe Group by navigating to **Settings** and then selecting **Recipients**.
1. Enter the following code styling to the HTML window where you would like your unsubscribe content placed:

```
<a href="{{{unsubscribe}}}">Click here to unsubscribe.</a>
```

## Using a Custom Unsubscribe Link

While Twilio SendGrid Unsubscribe Groups are a powerful way to manage unsubscribes and email preferences, we realize some senders may have their own subscription management tools. For these senders, Marketing Campaigns supports custom unsubscribe links as well.

If you would like to use a custom URL for your unsubscribe link, from the Editor, navigate to **Settings** in the left-hand sidebar and select the **Recipients** dropdown menu. Under **Unsubscribe Group**, select **Use Custom Link...**

This will expand a new field where you can insert a URL for one of your own pages where recipients can manage their subscription preferences.

To place your Custom Unsubscribe link into your email, highlight any text within the body of your email and click the small link icon to specify a hyperlink. In the URL field that appears, enter the tag `{{{Unsubscribe}}}`. Since you've specified your Custom Unsubscribe Link in the Settings panel, SendGrid will replace the Unsubscribe Tag with your custom URL.

## Add recipients to an Unsubscribe Group

You can add recipients to an unsubscribe group by uploading a CSV or adding them manually using the UI. To programmatically add recipients to an unsubscribe group, see our [API documentation](https://sendgrid.api-docs.io/v3.0/suppressions-unsubscribe-groups)

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
1. Select **Export**. Once the export is completed, a download link will be sent to the email(s) you either signed up with, or have set to receive [notifications]({{root_url}}/ui/account-and-settings/notifications/).

### Editing an Unsubscribe Group

*To edit an Unsubscribe Group:*

1. Navigate to the Unsubscribe Group you want to edit.
1. Click the action menu.
1. Select **Edit**.

From the Edit Group page, you can change the Group Name, Group Description, and display preferences.

### Deleting an Unsubscribe Group

*To delete an Unsubscribe Group:*

1. Navigate to the Unsubscribe Group you want to delete.
1. Click the action menu.
1. Select **Edit**. The Edit Group page opens.
1. Click **Delete Group**.
1. Confirm that you want to delete the selected group and then click **Delete**.

![]({{root_url}}/img/confirm_unsub_group_delete.png "Confirm Unsubscribe Group Delete")

## Additional Resources

- [Suppressions Overview]({{root_url}}/ui/sending-email/index-suppressions/)
- [Group Unsubscribes]({{root_url}}/ui/sending-email/group-unsubscribes/)
- [Global Unsubscribes]({{root_url}}/ui/sending-email/global-unsubscribes/)

