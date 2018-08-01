---
layout: page
weight: 90
title: Unsubscribe Groups
group: troubleshooting
seo:
  title: Unsubscribe Groups
  description: Suppression Manager helps you to define and manage unsubscribe groups to keep you out of the spam folder.
  keywords: subscription manager, suppression manager, unsubscribe manager, unsubscribe manager
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/221494705" width="500" height="312" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

When a user unsubscribes from a type of email being sent to them at the sender account level, SendGrid will suppress all of your attempts at sending this type of email to that user. This means that the contact information is still in your contact database or you can send this contact’s email via the API. Regardless, emails will not be sent to this contact’s email.

For example, if you had an outdated email list (not something we recommend by the way) and sent an email to that list, but a user on that list had previously unsubscribed from that type of email from you, they would not get the email because the email would never leave SendGrid. It would be suppressed from being sent. A contact’s emails will only be suppressed if they unsubscribe from that sender’s emails, unsubscribing from one sender’s list will have no effect on suppression lists owned by other senders.

## 	Overview

Suppression Management gives you the ability to create unsubscribe groups that represent types of email that you regularly send to your recipients.

*For example: receipts, social notifications, and account alerts.*

You can then give your recipients more control over the types of emails they want to receive by letting them opt out of messages from a certain group. This means getting the right messages to your recipient’s inbox, resulting in a stronger relationship with your recipients and a better sending reputation.

<call-out>

Make sure your group names and descriptions are customer friendly! Your customers will see these group names and descriptions when they unsubscribe from your emails.

</call-out>

All of your groups will be visible on the [Suppression Management]({{site.app_url}}/suppressions/advanced_suppression_manager) page, along with the descriptions you defined when you created the groups. There are also [Suppression Management API]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/index.html) endpoints for managing your groups and suppressions.

## 	Add An Unsubscribe Group

<call-out>
 There is a limit of 25 groups per user.
</call-out>

To add a new group, click the “Create New Group” button at the top right of the page. Then, you will be asked to name your Unsubscribe Group and add the description. Click “Done” and you will see your new group in the list of all of your unsubscribe groups.

 ### 	Default Groups

Default groups are those that are shown by default when a recipient chooses to unsubscribe from your emails. SendGrid will always show all of the default groups, so if you don’t want one of those groups to be displayed all the time, make sure that it is not set as a default group.

You can also specify which groups to display at send time, but using the [asm_groups_to_display feature]({{root_url}}/for-developers/sending-email/suppressions#defining-asm-groups-to-display-on-the-manage-preferences-page) of the SMTP API.

## 	Add Recipients to an Unsubscribe Group

You may want to preload an unsubscribe group or add recipients to an unsubscribe group if you are moving from another email provider or have customers request to be removed from a specific list. We provide two ways to do this, via CSV file or manually.

 ### 	Upload a CSV To Add Unsubscribe Group Recipients

<call-out type="warning">

The emails should not be enclosed in quotes and should be NOT be formatted like `fname lname <email@example.com>`

</call-out>

<call-out>

This CSV should have a list of email addresses in the first column. It can include a header row or extra columns but this ancillary information will be ignored.

</call-out>

To upload a CSV of recipients who should not receive this group’s emails, click the gear icon at the right of the Unsubscribe Group name. When you select “upload CSV” a window will pop out. Drag your CSV and click “Done”. SendGrid will consume your CSV file and add the emails it finds to your group. From that point on, any emails sent with this group will not go to the recipients in this list. To view which group a recipient is in, go to the [Group Unsubscribes]({{site.app_url}}/suppressions/group_unsubscribes) page and search by that recipient’s email address.

 ### 	Manually Add Unsubscribe Group Recipients

To manually add a recipient who should not receive this group’s emails, click the gear icon at the right of the unsubscribe group name. When you select “manual add” a window will pop out with a form where you can enter a valid email address. Once you click “Done”, any emails sent with this unsubscribe group will not go to this recipient. To view which group a recipient is in, go to the [Group Unsubscribes]({{site.app_url}}/suppressions/group_unsubscribes) page and search by that recipient’s email address.

## 	Export an Unsubscribe Group List

If you would like to see which recipients email addresses are in a group or if you would like to migrate one group to another, click the gear icon next to your group name and select “Export”. This will cause a CSV file to download to your browser.

## 	Edit an Unsubscribe Group

To Edit an unsubscribe group, you can either choose “Edit Details” from the gear icon in your unsubscribe group list or you can click the name of your group and click the “Edit Details” button at the top of the screen. From there, you will be able to change the name and description of the group. Click “Save” to keep your changes.

## 	Delete an Unsubscribe Group

<call-out type="warning">

Deleting a group is permanent. It cannot be undone.

</call-out>

To delete an unsubscribe group, select “Delete” and then “confirm” from the gear icon to the right of your group in the group list or click the name of your group and then click the “Delete” and then “Confirm” buttons.

## 	Using the API

When you use the [SendGrid API with unsubscribe groups]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/index.html), you can include the unsubscribe group ID with your mail send calls. To get the ID, go to your unsubscribe group list and you will find the ID in the “Group ID” column.

## 	Additional Resources

- [Bounces]({{root_url}}/help-support/sending-email/bounces/)
- [Group Unsubscribes]({{site.app_url}}/suppressions/group_unsubscribes)
- [SendGrid API with unsubscribe groups]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/index.html)
