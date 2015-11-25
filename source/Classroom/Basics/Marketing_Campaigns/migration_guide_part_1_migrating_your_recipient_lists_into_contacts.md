---
seo:
  title: Migration Guide Part 1 Migrating your Recipient Lists into Contacts
  description: Migration Guide Part 1 Migrating your Recipient Lists into Contacts
  keywords: segmentation, marketing, newsletter, list, export, recipient, import, client, lists, migrate, customer, contacts, segment, move
title: Migration Guide Part 1 Migrating your Recipient Lists into Contacts
weight: 0
layout: page
zendesk_id: 206300138
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/136621131" width="700" height="513" frameborder="0" allowfullscreen=""></iframe>

It's important that your existing lists make it over into our new Marketing Campaigns interface. While **there is no option to automatically migrate your lists over** , this article aims to walk you through this&nbsp;simple 3-step process:

1. Export your old Recipient List &nbsp;
2. Edit your Exported&nbsp;.CSV
3. Upload your .CSV into the new Marketing Campaigns interface.&nbsp;

You'll need to perform this process for **each list** you want to migrate over, there is not a process to bring more than 1 list over at a time unless you develop something using&nbsp;our API:&nbsp; [Get List names](https://sendgrid.com/docs/API_Reference/Marketing_Emails_API/lists.html#-get) >&nbsp; [Get Recipients From List](https://sendgrid.com/docs/API_Reference/Marketing_Emails_API/emails.html#-get)&nbsp;>&nbsp; [Create a new List](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/api.html#-Lists) >&nbsp; [Add Recipients to the new List](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/api.html#Add-Multiple-Recipients-to-a-List-POST)

&nbsp;

**1. Export your old Recipient List**

First, head over you the [old Recipient List dashboard](https://sendgrid.com/newsletter/lists)&nbsp;in the&nbsp;Legacy Newsletter&nbsp;service, and **Export** the Recipient List you want to migrate&nbsp;over.&nbsp;

Be sure to only select " **Usable Emails**" in the Export modal. &nbsp;&nbsp;

![]({{root_url}}/images/oldlistexport.gif)

&nbsp;

&nbsp;

**2. Edit your Exported&nbsp;.CSV**

You'll want to make sure a few new formatting restrictions&nbsp;are being honored in your .CSV export before you upload it into the new interface.

[Use this guide to format and prepare your .CSV for upload.&nbsp;](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html#-Prepare-Contacts-for-Upload)

You'll also have another chance to update Custom Field names when you upload the list, but we recommend reviewing this formatting guide beforehand and making any&nbsp;changes directly in your .CSV.

&nbsp;

&nbsp;

**3. Upload your .CSV into Marketing Campaigns&nbsp;**

Take your newly formatted .CSV and head over to the [Contacts](https://sendgrid.com/marketing_campaigns/contacts) page. From here, click " **Add List or Segment**" and choose " **Upload CSV**".

![]({{root_url}}/images/uploadcsv.gif)

&nbsp;

Next,&nbsp;click " **Add to New List**" option and give your list a Name.&nbsp;

![]({{root_url}}/images/addnewlist.gif)

&nbsp;

When you're satisfied, click **Save** to start the upload.

If&nbsp;you encounter errors while uploading your new list, be sure to check out our [List Upload Troubleshooting guide](http://support.sendgrid.com/hc/en-us/articles/206317698-List-Upload-Troubleshooting). If all goes well, you will see the following message:&nbsp;

&nbsp; ![]({{root_url}}/images/uploadcsvsuccess.png)

&nbsp;

&nbsp;

**Success**! Once you receive the upload confirmation email, your&nbsp;Contact List will be available when building new Marketing Campaigns and segments.

&nbsp;

**(Optional)Migrate using the API&nbsp;**

You can also use our API methods to pull out your old contacts out of our Legacy Newsletter service and add them to a new Marketing Campaigns List. This of course requires some development on your side, but can be useful for moving multiple lists.

1. [Get old List names](https://sendgrid.com/docs/API_Reference/Marketing_Emails_API/lists.html#-get)
2. [Get Recipients From old List](https://sendgrid.com/docs/API_Reference/Marketing_Emails_API/emails.html#-get)&nbsp;
3. [Create a new List](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/api.html#-Lists)&nbsp;
4. [Add Recipients to the new List](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/api.html#Add-Multiple-Recipients-to-a-List-POST)

&nbsp;

&nbsp;

&nbsp;

&nbsp;
