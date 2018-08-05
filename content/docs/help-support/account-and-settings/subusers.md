---
layout: page
weight: 0
group: teammates-subusers
title: Subusers
seo:
  title: Subusers
  description: Create and Manage Subusers
  keywords: Subuser settings, create Subuser, manage Subuser, delete Subuser
navigation:
  show: true
---

<call-out>

If you have a **Pro plan or higher**, you may create up to 15 Subusers through your account. If you reach the maximum of 15 and require more Subusers, please use the form in the [Subuser Management]({{site.app_url}}/settings/subusers) page to request more.

</call-out>

Subusers help you segment your email sending and API activity. You assign permissions and credit limits when you create the Subusers. We recommend creating Subusers for each of the different types of emails you send - so one Subuser for transactional emails, and another for marketing emails. Breaking your sending up this way allows you to get separate statistics for each type of email you send.

## 	Create a Subuser
 	
New SendGrid accounts do not come with Subusers and must be created by the parent account.

*To create a Subuser:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Click **Create New Subuser**.
1. Enter the following required information into the corresponding fields:
  * Username - The username your Subuser will use to send emails and access the API.
  * Email Address - The contact email address for this Subuser. This must be an active email account as SendGrid may contact a Subuser to provide support,  resolve sending and deliverability issues, or to enforce SendGrid's Terms of Service. Whenever we contact a Subuser, it is our policy to contact the parent account email address at the same time.
  * Password - The password your Subuser will use to access SendGrid.com.
  * Avatar - If you have [gravatar](http://gravatar.com), or globally recognized avatar, that you use for other applications, it is automatically associated with this Subuser when you enter an email address. This makes it easier to identify all of the Subusers attached to your account.

1. Assign an IP Address to the Subuser account.
  You are assigned a dedicated IP address when you create a Pro 100k plan or higher. If you send at a high volume, and you're using Subusers to separate out your sending traffic, it's best practice to purchase a separate IP for each sending type.

## 	Manage Subusers
 	
Subusers can be managed via [Subuser API](https://sendgrid.api-docs.io/v3.0/Subusers-api) or by using the SendGrid UI.

*To manage a Subuser from the SendGrid UI:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Select the name of the Subuser. This takes you to the Subuser’s account and profile settings. From there, you can manage and update your Subuser Settings.

## 	Optional Profile Information
 	
We do not require this information for your Subusers, but we suggest that you fill out as much as possible to improve the deliverability for this Subuser, especially if the information does not match your parent account’s information. This will also allow SendGrid to contact your Subuser directly if we notice anything on their account.

The following fields in the Subuser profile are optional:

**First Name** - The first name of the person responsible for this Subuser.

**Last Name** - The last name of the person responsible for this Subuser.

**Company** - The name of your Subuser’s company.

**Address 1** - The first line of your Subuser’s address.

**Address 2** - The second line of your Subuser’s address.

**City** - The city in which your Subuser operates.

**State** - The state or province in which your Subuser operates.

**Country** - The country in which your Subuser operates.

**Zip** - The zip code in which your Subuser operates.

**Company Phone Number** - The phone number for your Subuser’s business.

**Company Website** - The website for your Subuser’s business.

## 	Allocating or removing credits from a Subuser
 	
<call-out type="warning">

You can only allocate credits by selecting the nonrecurring credit option.

</call-out>

If your Subuser account has nonrecurring credits, you can allocate credits to, or remove credits from this Subuser account. On the Subuser's profile, click **Change Credit Rules** and then choose the appropriate credit amount for the Subuser.

## 	Monitoring Subuser email content
 	
This feature allows you to receive a sample of a Subuser's email content to help ensure that the content is not damaging your reputation.
<call-out type="warning">

Each monitor email costs one email credit.

</call-out>

The “Collect Sample Rate” is the frequency is the number of emails SendGrid will allow through before copying the email address you set on the next email sent. For example, if you set the collect sample rate at 100 then you will receive a copy of every 100th email this Subuser sends.

## 	Impersonating a Subuser
 	
When you set up Subusers, it may be useful to see what the Subuser’s settings are and to see what the Subuser can see in the SendGrid UI.
To make this easier, we’ve made it so you can impersonate a Subuser from your parent account and then manage the Subuser the same way as if you had logged in with that user’s credentials, without having to log out of your parent account.

*To impersonate a Subuser:*

1. Log into SendGrid.
2. Go to the top left corner of the portal screen and click on your name just above the navigation menu.
3. Click **Switch User**.
4. Choose the Subuser you want to impersonate by clicking that Subuser’s name.

The page will refresh, and you will notice a message at the top of the screen that says, “You're currently logged in as [Subuser name]”.

If you have more than one Subuser, you can also switch to another Subuser by clicking **Switch Subuser** in the top-right corner once you are impersonating any Subuser.

 ### 	Switching back to your parent account
 	
Click the link at the top left that says “Back to Parent Account”. This will log you out of the Subuser account and take you back to your parent account portal.


## 	Export Subuser Information
 	
If you would like to see how your Subusers are performing in comparison to each other, you can export Subuser data.

*To export Subuser information:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Click **Export Data**.
 <br>This downloads a CSV file with each Subuser’s reputation, the number of requests they made this month, and the number of requests they made last month.

 ## 	Disabling a Subuser account
 	
*To turn off a Subuser’s access to SendGrid temporarily:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Locate the Subuser account you wish to disable and click on the name to view the account details.
1. Click **Enable**.

To re-enable a Subuser’s account, click **Disable**.

## 	Deleting a Subuser account
 	
<call-out type="warning">

Deleting a Subuser account cannot be undone. Please make sure that you are ready to delete this account before you delete it. All access for this Subuser will immediately be revoked upon deletion.

</call-out>

*To delete a Subuser account:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Locate the Subuser account you wish to delete and click on the name to view the account details.
1. On the *Account Settings* page, click **Delete**.
   A confirmation window appears.
1. Click **Confirm** to delete the Subuser account.

## 	Additional Resources
 	
- [Assigning a Domain Whitelabel to a subuser]({{root_url}}/help-support/sending-email/how-to-set-up-domain-authentication/#assigning-a-subuser/)
- [Teammates]({{root_url}}/help-spport/account-and-settings/teammates/)
