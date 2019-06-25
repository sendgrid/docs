---
layout: page
weight: 70
title: Create and Manage Contacts
group: managing-contacts
navigation:
  show: true
seo:
  title: Create and Manage Contacts
  keywords:   
  override: true
  description:
---
## Manage Contacts

Adding contacts to a list that's designated as the entry criteria for an automation will trigger that automation. The Automation beta experience offers several ways to add contacts to lists, including CSV upload, using signup forms, or via the Contact Management APIs. 

<call-out type="warning">

During the beta, contacts you upload to Automation are distinct from your existing Marketing Campaigns contacts. An Automation contact will be treated as new even if they’ve been in your Marketing Campaigns contacts for some time.

</call-out>

### Add Contacts

Note that automations will only trigger to contacts who are added to an entry criteria list *after* the automation is set live. Contacts who you add to a list before the automation is set live will not receive any emails in the series.

#### Upload a CSV

You can add contacts to a list via CSV Upload or by creating a Signup Form to automatically send signups to a list. 

1. Use [this CSV template]({{root_url}}/assets/example.csv) to make sure your CSV is formatted correctly.
1. Click **Add Contacts** and then select **Upload CSV**.
1. Choose whether to add your contacts to All Contacts, to an existing list, or to a new list you create.
1. Upload your file by dragging it into or clicking the CSV upload area and then click **Next: Review CSV Upload**.
1. Map your CSV fields by selecting a corresponding field name or creating a new [custom field]({{root_url}}/ui/managing-contacts/custom-fields/). 

 Once the CSV has processed, you will receive a [notification]({{root_url}}/ui/account-and-settings/notifications/) email.


#### Create a signup form

Use Signup Forms with the SendGrid Automation beta to capture new contacts and add them directly to an Automation list. If the list you add them to is acting as the entry criteria for a live automation, the new contact will automatically receive any emails you’ve created as part of that automation. 

You can enable contacts to access your signup form either by sending them a link hosted by SendGrid or by embedding it directly into your website.

<call-out>

The number of signup forms you can create is limited to 15. 

</call-out>

*To create a new signup form:*

1. Navigate to Automations and select **Signup Forms**. 
1. Click **Create New Form**.
1. On the Settings tab, add a Form Name and then select the contact list you want to add new signups to. 
1. Next, add a confirmation message. This field contains the text that contacts will see once they’ve clicked submit on the form.
1. Navigate to the Build tab and add a header to the form. 
1. Add the intro copy to explain what the contact is signing up to receive. 
1. Select the checkboxes to add the fields you want on the form.

#### Manage signup forms

Using the action menu on the Signup Forms page you can edit, duplicate, or delete existing signup forms. 

![]({{root_url}}/img/action-menu-signup-form.png "Action menu for signup forms")

<call-out>

Because of the iframe technology used to create the signup form, the form dynamically updates on the page or pages where you have the form embedded anytime you edit a form and click **Save & Apply**.

</call-out>

#### Share Code to make your form accessible

To make your form accessible to new contacts, you can either send them a link hosted by SendGrid or you can embed code on your website that displays your form as an iframe. 

*To share the code for your signup form:*

1. Navigate to the signup form you want to share or embed.
1. Click the action menu and select **Share Code**.
1. On the *Integrate Form* modal, copy either the Landing Page or Direct Embed link. 

   * The Landing Page link can be pasted anywhere, including in an email or on a social media site.
   * The Direct Embed code can be pasted to the HTML of your website wherever you’d like the form to display.

You can also find the options to share the signup form in the form editor by clicking **Share Code** in the top-right corner of the editor. 

### Edit or Remove Contacts

To manage your contact lists more efficiently, you can edit and remove contact lists from the Contacts page. 

*To edit a contact:*

1. Navigate to the Contacts page and search for the contact you want to edit.
1. Click the contact you wish to edit. This takes you to the contact details page.
1. To edit any of the profile fields, click on the *Edit* icon to the right of the field.
1. Once you have finished making all of your changes, click **Save**. 

*To delete a contact from your account:*

1. Navigate to the Contacts page and search for the contact you want to edit.
1. To delete a contact from the contact list, you can click the delete icon in the action menu. To delete a contact from the contact details page, click the delete icon at the top-right of the page. 
1. If you are deleting the contact from a specific list, and not All Contacts, click **Remove Contact**. If you are deleting the contact from the account, select **Permanently delete this contact from my account**. 

*To remove a contact from a list:*

1. Navigate to the Contacts page and search for the contact you want to edit.
1. Click the email of the contact to view contact details. 
1. Click the Associated Lists tab from the contact details page.
1. Find the list you want to remove the contact from and click the delete icon.
1. When you see "Are you sure you want to remove this contact?" click **Remove Contact**. 

### Export contacts

To view the contents of a contact list, you can export the list to a CSV and download it to your computer.

*To export contacts:*

1. Navigate to the Contacts page within the Automation Beta experience.
1. Locate the contact list you want to export and click the action menu.
1. Select **Export**. The Export page appears with a list of all current and previous exports. 
1. From here you can find the exported contact list and select the action menu. 
1. Select the **Download CSV** icon next to the list to download the contact list to your computer. 

<call-out type="warning">

Exported CSV files are only available for download for 72 hours after the export is initialized. 

</call-out>

### Contact Management APIs

You can integrate with the Contact Management APIs to create and update lists, add contacts, manage reserved field data, export contact lists, and pull data about your contacts and lists. Learn more through the documentation for [Automation Contact APIs](https://sendgrid-automation.api-docs.io/v3/getting-started).

## Additional Resources

- [link text]({{root_url}}/ui/sending-email/editor/)
- [link text]({{root_url}}/ui/sending-email/editor/)
- [link text]({{root_url}}/ui/sending-email/editor/)