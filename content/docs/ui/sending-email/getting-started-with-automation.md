---
layout: page
weight: 0
group: sending-email
title: Getting Started with Automation
seo:
  title: Getting Started with Automation
  description: Use Automation to create a series of campaigns targeted towards a specific audience. 
  keywords: automation, triggered email, automated email, welcome series
navigation:
  show: true
---
SendGrid’s Automation beta allows you to send a series of emails to contacts automatically when you add them to a list you’ve specified. Automations are simple to set up, and once created, you can trigger them to new recipients simply by adding them to your chosen list, saving you time.

With the Automation beta, you could build campaigns to: 
* Welcome new contacts when they join your list with a warm welcome and introductory tips.
* Engage contacts who’ve downloaded an asset from you with follow-up content. 
* Promote an upcoming event to a list of invitees with a series of reasons to attend.

## Beta Considerations

For beta participants who also use Marketing Campaigns, it’s important to know that during the beta, there is little connection between Marketing Campaigns and Automation. Specifically, the following items are **not shared** across the two offerings: 
* Contacts and associated data (such as custom fields or engagement data) 
* Templates
* Account activity notifications (for example, the email you receive when a CSV export is complete)

Unsubscribe Groups and Senders **are shared** between Marketing Campaigns and Automation.

Additionally, during this phase of the  beta, some Marketing Campaigns features will not be available in Automation. For easy reference,the primary feature gaps include: 
* Ability to view Automation contact list details
* Ability to Search, edit, or export Automation contacts
* Create or use custom fields
* Segmentation
* A/B testing
* A few modules including the columns module and xxxx
* Link tracking
* API compatibility

We’ll be working iteratively to close these feature gaps as quickly as possible. For more information on future releases, please see our [Coming Soon] page. (Links to page approved by legal)

## Getting Started

Before you start building automations, you need to complete the following:

* Upload contacts (link to section)
* Add an Automation notification email (link to section)
* Create Unsubscribe Groups (link to new MC unsubscribe flow documentation) (link to section)
* Add a Sender (optional) (link to current Sender docs)

### Upload contacts

<call-out type="warning">

During the beta period, contacts you upload to Automation are distinct from your existing Marketing Campaigns contacts. An automation contact will be treated as new even if they’ve been in your Marketing Campaigns contacts for some time. 

</call-out>

<call-out>

During beta, automations will only trigger to contacts *the first time* they’re added to a list. To ensure contacts receive your series,add them to your entry criteria list *after* you set your automation live.

</call-out>

*To add new contacts:*

1.  Use this CSV template to make sure your CSV is formatted correctly.
1. Click **Add Contacts** and then select **Upload CSV**.
1. Choose an existing list or create a new list.

<call-out>

At this phase of the beta, custom fields are not supported. You can import reserved fields, including email, first_name, and last_name, among others.

</call-out>

<call-out>

If you choose to add contacts without assigning them to a list, they'll be added to All Contacts.

</call-out>



4. Upload your file by dragging it into or clicking the CSV upload area.

## Notifications

<call-out>
If you have existing notification emails added to Marketing Campaigns notifications, they will not be notified for any Automation activity.  
</call-out>

### Create Automation notifications

If you would like to have notifications sent to an email other than your parent account address, you can opt in to receive email notifications from SendGrid about your account's Automation activity.
To add an email address to notifications:
Click **Add New Email**.
Enter the name of the person or account you are setting up the notification for.
Enter the email address of the person or account you are setting up the notification for.
Click **Save**.
Email notifications about CSV upload summaries, sender verifications, and list/segment exports can be sent to up to 10 different email addresses.


### Create Unsubscribe Groups

<call-out>
Automation shares Unsubscribe Groups with the rest of SendGrid. If a contact unsubscribes from an email you send via Automation, they’ll be unsubscribed from any emails you send using that Unsubscribe Group in Marketing Campaigns as well. Consider whether you want to create new Unsubscribe Groups for use with the Automation, especially as you’re running test automations during beta.
</call-out>

Create (and or review) Unsubscribe Groups (link to new MC unsubscribe flow documentation)

### Add a Sender  

<call-out>
Automation shares Senders with Marketing Campaigns. You can use the same senders(s), or you can create new ones for use with Automation. 
</call-out>

Add (and or review) Senders (link to Sender docs)

## Create an Automation

### Create a Welcome Series

The Welcome Series Automation has preset entry criteria and sending schedules so all you have to do is plug in existing or new emailscampaigns and set the automation to live. 

*To create a Welcome Series:*

1. Navigate to **Automations** and then click **Create an Automation**. 
1. Under Welcome, click **Select**. 
1. Give the series a name (this is for your reference and will not be visible to your contacts).
1. Select the first entry criteria. The default entry criteria is “The first time a contact is added to All Contacts”. (Do we need some kind of note about “all contacts” versus using a list to help users keep track of new contacts?)
1. Select the exit criteria for this series.

<call-out>

During the beta, the default exit criteria is “Contacts will be removed from the automation when they’ve received all of the emails”.

</call-out>


6. Select an Unsubscribe Group to add to the Welcome series.
7. Add a category (link to categories documentation) to the automation (optional).
8. Select the send time for the first email.
9. To add a campaign to the first email, click **Edit Email Content**. 
10. Select a template or click **Blank Template** to begin creating your own campaign from scratch.
11. Select either the Design or Code editor (link to documentation) to design or edit your campaign. 
12. Once you have selected all of your campaigns for the welcome series, click **Set Live**. 

### Create a Custom Automation

*To create a Custom Automation:*

1. Navigate to **Automations** and then click **Create an Automation**. 
1. Under Custom, click **Select**. 
1. Give the series a name (this is for your reference and will not be visible to your contacts).
1. Select the entry criteria. You can choose an existing list, or you can create a new list here.

<call-out>

Contacts will only receive your automation if they are added to the list you select for entry criteria *after* you set the automation live. 

</call-out> 

Select the exit criteria for this series.

<call-out>

During the beta, the default exit criteria is contacts will be removed from the automation “when they’ve received all of the emails”.

</call-out>

5. Select an Unsubscribe Group (link to unsubscribe group docs).
6. Add a category (link to categories documentation) to the automation (optional).
7. Select the send time for the first email. You can choose to send the first email instantly, or you can set a delay from the time they are added to your entry criteria list.
8. To design your first email in the series, click **Edit Email Content**.
9. From the “Select Template” modal that opens, choose Blank Template or one of the SendGrid templates provided. 

<call-out>

During beta, templates from Marketing Campaigns are not available in Automation. However, you can export a template from Marketing Campaigns and import it as a Blank Template into Automation.

<call-out>


10. Next, choose which editor you’d like to work in: Design Editor or Code Editor (link to documentation). 

<call-out>

During beta, there are some features of the Marketing Campaigns editor that aren’t supported in the Automation editor. (can we link to the beta considerations section?).

<call-out>


11. If you did not do so within the editor, you can add a subject line and select a sender from the Edit Automation page.
12. To add more emails to this automated series, click **Add an Email**.
13. Repeat steps 7-12 for each additional email you add to this custom automation.

### Duplicate an Automation

*To duplicate an automation:*

1. Navigate to Automations.
1. Find the Automation you want to duplicate.
1. Select the Action Menu to the right of the automation.
1. Click **Duplicate**. 
1. Once the duplicate is created, the automation will open to the edit page. From here, you can change any or all of the settings within the automation.

## Manage Automations

### Edit an Automation - I’m not entirely sure our audience needs this information. The UI seems pretty intuitive. Let me know what you think. 

<call-out>

During the beta, you are only able to edit the content, subject line, and sender for each email in your series.

</call-out>

Edit the entry criteria (coming soon)
Edit send time (coming soon)
Edit email content


### Disable an Automation

*To disable an automation:*

1. Navigate to **Automations** and select the series you want to stop.
1. Select the Action Menu to the right of the Automation.I
1. Click **Disable Automation** in the upper right corner.
1. 

*To re-enable a disabled automation:*

1. Navigate to **Automations** and select the series you want to re-enable.
1. Select the Action Menu to the right of the Automation.
1. Click **Set Live** in the upper right corner.

<call-out>

When you re-enable the automation, contacts who were already entered into the series will continue where they left off. Contacts who met your entry criteria during the disabled period will not be added to the automation. For this reason, do not add users to lists that are used as the entry criteria for automations in a disabled state.

</call-out>

### Delete an Automation 

*To delete an automation:*

1. 
1. 

### Migrating from Marketing Campaigns -
-how to export a list and import it
-how to export a segment and import it (and use cases for doing so!)
-how to export email content and import it

## Measuring Automation Performance

I think I need some help here with an overview. This section might need to be added after the internal beta starts so the functionality is there for me to play around with. 




Per automation analytics
Per campaign analytics