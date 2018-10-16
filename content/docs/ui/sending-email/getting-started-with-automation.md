---
layout: page
weight: 0
group: marketing-campaigns
title: Getting Started with Automation
seo:
  title: Getting Started with Automation
  description: Use Automation to create an automated email series or drip campaign targeted towards a specific audience. 
  keywords: automation, triggered email, automated email, welcome series
navigation:
  show: false
---

<call-out type="warning">

**Automation is currently in closed beta**. During beta, only approved participants have access to the feature and we reserve the right to change the functionality at any time without warning. For more information on the Automation beta, or to join the beta waitlist, see our [Email Marketing Automation](https://sendgrid.com/solutions/marketing-automation/) page. 

</call-out>

SendGrid’s Automation beta allows you to send a series of emails to contacts automatically at a cadence you define. Automations are simple to set up, and once created, you can trigger them to send automatically by adding new recipients to a chosen list, saving you time.

<iframe src="https://player.vimeo.com/video/289518438" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

With the Automation beta, you could build email campaigns to: 

* Welcome new contacts when they join your list with a warm message and introductory tips.
* Engage contacts who’ve downloaded an asset from you with follow-up content. 
* Promote an upcoming event to a list of invitees with a series of reasons to attend.

## Beta Considerations

For beta participants who also use Marketing Campaigns, it’s important to know that during the beta, there is little connection between Marketing Campaigns and Automation. Specifically, the following items are **not shared** across the two offerings: 
* Contacts and associated data (such as custom fields or engagement data) 
* Templates
* Account activity notifications (for example, the email you receive when a CSV export is complete)

Unsubscribe Groups and Senders **are shared** between Marketing Campaigns and Automation.

Additionally, during this phase of the beta, some Marketing Campaigns features will not be available in Automation. For easy reference, the primary feature gaps include: 
* Ability to view Automation contact list details
* Ability to search, edit, or export Automation contacts
* Create or use custom fields
* Create or use segments
* A/B testing of email content and subject lines
* Some non-essential editor functionality
* Link click tracking
* API compatibility

We’ll be working iteratively to close these feature gaps as quickly as possible.

## Getting Started

Before you start building automations, you need to complete the following:

* Add an Automation [notification]({{root_url}}#notifications) email
* Create [Unsubscribe Groups]({{root_url}}#create-unsubscribe-groups)
* Add a [sender]({{root_url}}/ui/sending-email/senders/) (optional) 


### Notifications

<call-out>
Notification emails added in Marketing Campaigns won't receive any notifications regarding Automation activity. 
</call-out>

If you would like to have notifications about your account's Automation activity sent to an email other than your parent account address, simply add them in Notifications.

*To add a notification email address:*

1. Navigate to Notifications and then click **Add New Email**.
1. Enter the name of the person or account you want to receive the notification email.
1. Enter the email address of the person or account want to receive the notification email.
1. Click **Save**.

<call-out>

You can add up to 10 email addresses to Automation notifications. 

</call-out>

### Create Unsubscribe Groups

Automation shares Unsubscribe Groups with the rest of SendGrid. If a contact unsubscribes from an email you send via Automation, they're unsubscribing from any emails you send using that Unsubscribe Group in Marketing Campaigns as well. 

A great reason to create an Unsubscribe Group specific to the automations you're setting live is that at this stage of the beta, you cannot remove a contact from an Automation once they've entered it (exit criteria is limited to contacts receiving all emails in the series). However, if you create an Unsubscribe Group specific to your automation, you can remove contacts from an automation by [adding them to that Unsubscribe Group]({{root_url}}/ui/sending-email/unsubscribe-groups/#upload-a-csv-to-add-unsubscribe-group-recipients). 

For information on creating Unsubscribe Groups, see [Create and Manage Unsubscribe Groups]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/).

### Add a Sender  

<call-out>
Automation shares senders with Marketing Campaigns. You can use the same senders(s), or you can create new ones for use with Automation. 
</call-out>

For more information, see [Senders]({{root_url}}/ui/sending-email/senders/).

## Create an Automation

Once you've completed the prerequisites, you can go ahead and create an automation. You'll find you have two options: start with a pre-built Welcome Series and make it your own, or start from scratch by selecting **Custom Automation**.

### Create a Custom Automation

*To create a Custom Automation:*

1. Navigate to **Automations** and then click **Create an Automation**. 
1. Under Custom, click **Select**. 
1. Give the series a name (this is for your reference and will not be visible to your contacts).
1. Select the entry criteria. Today, your entry critiera will be the first time a contact is added to a list. You can choose an existing list, or you can create a new one here.

<call-out>

Contacts will only receive your automation if you add them to the list you select for entry criteria *after* you set the automation live. 

</call-out> 

1. Select the exit criteria for this series.
1. Select an [Unsubscribe Group]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/#create-an-unsubscribe-group).
1. Add a [category]({{root_url}}/glossary/categories/) to the automation (optional).
1. Select the send time for the first email. You can choose to send the first email instantly, or you can set a delay of days or hours from the time meet the entry criteria.
1. To design your email, click **Edit Email Content**.
1. From the Select Template modal that opens, choose Blank Template or one of the SendGrid templates provided. 

<call-out>

During beta, templates from Marketing Campaigns are not available in Automation. However, you can [export]({{root_url}}/#migrating-campaign-html) the template HTML from Marketing Campaigns and import it as a blank template into Automation using the code editor.

</call-out>


7. Next, select either the [Design]({{root_url}}/ui/sending-email/editor/#the-design-editor) or [Code]({{root_url}}/ui/sending-email/editor/#the-code-editor) editor to design or edit your email. Save and click the arrow in the top left corner of the page to return to the Edit Automation page.

8. If you did not do so within the editor, you can add a subject line and select a sender from the Edit Automation page.
9. To add more emails to this automated series, click **Add an Email**.
10. Choose how long to wait before sending the next email. This time will be relative to the preceding email.
11. Repeat steps 5-9 for each additional email you add to this custom automation.
12. Once you have created all of your emails for the automation, click **Set Live**. 


### Duplicate an Automation

*To duplicate an automation:*

1. Navigate to Automations.
1. Find the Automation you want to duplicate.
1. Select the Action Menu to the right of the automation.
1. Click **Duplicate**. 
1. Once you create the duplicate, the automation will open to the edit page. From here, you can change any or all of the settings within the automation.

### Create a Welcome Series

The pre-built Welcome Series automation provides a jumping off point to inspire you to create your own tailored welcome series. 

*To create a Welcome Series:*

1. Navigate to **Automations** and then click **Create an Automation**. 
1. Under Welcome, click **Select**. 
1. Give the series a name (this is for your reference and will not be visible to your contacts).
1. Select the first entry criteria. The default entry criteria is “The first time a contact is added to All Contacts”.

<call-out type="warning">

If you keep the entry criteria as "All Contacts" it's important to remember that any recipient you add to your Automation contacts after you set the welcome series live will be entered into the automation. Use "All Contacts" with caution to avoid sending a welcome series to contacts that aren't actually new to you.

</call-out>

1. Repeat steps 5-16 from creating a custom automation. 

## Upload contacts

<call-out type="warning">

During the beta, contacts you upload to Automation are distinct from your existing Marketing Campaigns contacts. An Automation contact will be treated as new even if they’ve been in your Marketing Campaigns contacts for some time. 

</call-out>

First, it's important to note that automations will only trigger to contacts who are added to an entry criteria list *after* the automation is set live. Contacts who you add to a list before the automation is set live will not receive any emails in the series.

### Add New Contacts

1. Use [this CSV template]({{root_url}}/assets/example.csv) to make sure your CSV is formatted correctly.
1. Click **Add Contacts** and then select **Upload CSV**.
1. Choose whether to add your contacts to All Contacts, to an existing list, or to a new list you create.

<call-out>

At this phase of the beta, custom fields are not supported. You can import [reserved fields]({{root_url}}/ui/managing-contacts/custom-fields/#reserved-fields), including ``email``, ``first_name``, ``last_name``, and address fields.

</call-out>

4. Upload your file by dragging it into or clicking the CSV upload area.
   Once the CSV has processed, you will receive a [notification]({{root_url}}/ui/sending-email/getting-started-with-automation/#notifications) email.

## Managing Contacts

### Edit or Remove Contacts   

During this early phase of beta, you cannot search, edit, or delete contacts.

## Manage Automations

During the beta, you are only able to edit the content, subject line, and sender for each email in your series.

### Disable an Automation

*To disable an automation:*

When you disable an automation, all emails in your automation will stop sending unless you set it live again. No new contacts will be entered into your automation while it's disabled. If you set the automation live again, contacts who entered the automation before it was disabled will continue receiving emails again according to where they left off.

1. Navigate to **Automations** and select the series you want to stop.
1. Select the Action Menu to the right of the Automation.
1. Click **Disable Automation** in the upper right corner.


*To set a disabled automation live again:* 

1. Navigate to **Automations** and select the series you want to re-enable.
1. Select the Action Menu to the right of the Automation.
1. Click **Set Live** in the upper right corner.

<call-out>

When you re-enable the automation, contacts who previously entered the series will continue receiving emails where they left off in the series. Contacts who met your entry criteria during the disabled period will not be added to the automation. For this reason, do not add users to lists that are used as the entry criteria for automations in a disabled state.

</call-out>

### Delete an Automation 

*To delete an automation:*

1. On the automation dashboard, find the automation you want to delete.
1. Hover over the action menu and select the delete icon. 
1. To delete the automation, click **Confirm**.

## Migrating from Marketing Campaigns

### Migrating Campaign HTML

*To migrate HTML from a Marketing Campaigns template or email:*

1. Navigate to [Marketing Campaigns](https://sendgrid.com/marketing_campaigns/ui/campaigns) and locate the campaign you wish to migrate.
1. Hover over the action menu until the icons appear.
1. Select the **Export HTML** icon.
   The campaign HTML downloads to the folder specified on your computer
1. Navigate to the Automation dashboard.
1. Locate the automation you want to add the exported email to and hover over the action menu.  
1. Select **Edit**.
1. Within the automation, find the email you want to add the content to and click **Edit**.
![]({{root_url}}/img/edit-email-automation.png "Edit email content")

8. Select **Blank Template**.
9. Select the code editor.
10. Paste the HTML you copied from the downloaded file into the code editor and then click **Preview**. 

### Migrating Contact Lists

*To migrate a contact list from Marketing Campaigns:*

1. Navigate to [Marketing Campaigns](https://sendgrid.com/marketing_campaigns/ui/campaigns) and then select **Contacts**. 
1. Find the list you want to export and hover over the action menu. 
1. Click **Export**. 
   The contact list begins downloading, and you will receive a notification email to the email address specified in Marketing Campaigns Notifications. Go to your inbox to download the file.
1. Once you download the file, navigate back to Automation. 
1. Select **Contacts**.
1. To add the contacts, click **Upload Contacts**. 
1. Follow the instructions outlined in [Upload contacts]({{root_url}}#upload-contacts) to complete the process. 

*To migrate a segment from Marketing Campaigns:*

During beta, segmentation is not enabled in Automation. You can build a segment in Marketing Campaigns, export it, and import it as a list to Marketing Campaigns. 

1. Navigate to [Marketing Campaigns](https://sendgrid.com/marketing_campaigns/ui/campaigns) and then select **Contacts**. 
1. Find the segment you want to export and hover over the action menu. 
1. Click **Export**. 
   The contact list begins downloading, and you will receive a notification email to the email address specified in Marketing Campaigns Notifications. Go to your inbox to download the file.
1. Once you download the file, navigate back to Automation. 
1. Select **Contacts**.
1. To add the contacts, click **Upload Contacts**. 
1. Follow the instructions outlined in [Upload contacts]({{root_url}}#upload-contacts) to complete the process. 
