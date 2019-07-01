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

Subusers help you segment your email sending and API activity. You assign permissions and credit limits when you create the subuser. We recommend creating subusers for each of the different types of emails you send - one subuser for transactional emails, and another for marketing emails. Breaking your sending up this way allows you to get separate statistics for each type of email you send.

<call-out>

If you have a **Pro or Premier API plan** or an **Advanced Marketing Campaigns Plan**, you may create up to 15 subusers through your account. If you reach the maximum of 15 and require more subusers, please use the form in the [Subuser Management](https://app.sendgrid.com/settings/subusers) page to request more.

</call-out>

##     Create a subuser

New SendGrid accounts do not come with subusers; you must create them with the parent account.

*To create a subuser:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Click **Create New Subuser**.
1. Enter the following required information into the corresponding fields:
    * Username - The username your subuser will use to send emails and access the API.
    * Email Address - The contact email address for this subuser. This must be an active email account as SendGrid may contact a subuser to provide support, resolve sending and deliverability issues, or to enforce [SendGrid's Terms of Service](https://sendgrid.com/policies/tos/). Whenever we contact a subuser, it is our policy to contact the parent account email address at the same time.
    * Password - The password your subuser will use to access SendGrid.com.
    * Avatar - If you have [gravatar](http://gravatar.com), or globally recognized avatar, that you use for other applications, it is automatically associated with this subuser when you enter an email address. This makes it easier to identify all of the subusers attached to your account.


4. Assign an IP Address to the subuser account.
  You are assigned a dedicated IP address when you create a Pro 100k plan or higher. If you send at a high volume, and you're using subusers to separate out your sending traffic, it's best practice to purchase a separate IP for each sending type.

##     Manage subusers

Subusers can be managed via [Subuser API](https://sendgrid.api-docs.io/v3.0/Subusers-api) or by using the SendGrid UI.

*To manage a subuser from the SendGrid UI:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Select the name of the subuser. This takes you to the subuser’s account and profile settings. From there, you can manage and update your subuser Settings.

###     Optional Profile Information

We do not require this information for your subusers, but we suggest that you fill out as much as possible to improve the deliverability for this subuser, especially if the information does not match your parent account’s information. This will also allow SendGrid to contact your subuser directly if we notice anything on their account.

The following fields in the subuser profile are optional:

**First Name** - The first name of the person responsible for this subuser.

**Last Name** - The last name of the person responsible for this subuser.

**Company** - The name of your subuser’s company.

**Address 1** - The first line of your subuser’s address.

**Address 2** - The second line of your subuser’s address.

**City** - The city in which your subuser operates.

**State** - The state or province in which your subuser operates.

**Country** - The country in which your subuser operates.

**Zip** - The zip code in which your subuser operates.

**Company Phone Number** - The phone number for your subuser’s business.

**Company Website** - The website for your subuser’s business.

###     Allocating or removing credits from a subuser

<call-out type="warning">

You can only allocate credits by selecting the nonrecurring credit option.

</call-out>

If your Subuser account has nonrecurring credits, you can allocate credits to, or remove credits from this subuser account. On the subuser's profile, click **Change Credit Rules** and then choose the appropriate credit amount for the subuser.

###     Monitoring subuser email content

This feature allows you to receive a sample of a subuser's email content to help ensure that the content is not damaging your reputation.

<call-out type="warning">

Each monitor email costs one email credit.

</call-out>

The “Collect Sample Rate” is the number of emails SendGrid will allow through before copying the email address you set on the next email sent. For example, if you set the collect sample rate at 100, then you will receive a copy of every 100th email this subuser sends.

###     Disabling a subuser account

*To turn off a subuser’s access to SendGrid temporarily:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Locate the subuser account you wish to disable and click on the name to view the account details.
1. Click **Disable Account**.

To re-enable a subuser’s account, follow steps 1 and 2 above, then click **Enable Account**.

###     Deleting a subuser account

<call-out type="warning">

Deleting a subuser account cannot be undone. Please make sure that you are ready to delete this account before you delete it. Deleting this subuser will immediately revoke all access.

</call-out>

*To delete a subuser account:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Locate the subuser account you wish to delete and click on the name to view the account details.
1. On the *Account Settings* page, click **Delete**.
   A confirmation window appears.
1. Click **Confirm** to delete the subuser account.

## Adding subusers to Dedicated IP Addresses

You will need to have a dedicated IP address already. Adding subusers to dedicated IP addresses can help you separate your sending traffic, improving your deliverability rate. 

1. Navigate to **Settings** and select [Subuser Management](https://app.sendgrid.com/settings/subusers).
1. Select the subuser to assign the dedicated IP.
1. Select **Change Sending**.
1. Under IP Addresses, select an IP address to assign to the subuser.
1. Select **Save**.

##     Impersonating a Subuser

When you set up subusers, it may be useful to see what the subuser’s settings are and to see what the subuser can see in the SendGrid UI.
To make this easier, we’ve made it so you can impersonate a subuser from your parent account and then manage the subuser the same way as if you had logged in with that user’s credentials, without having to log out of your parent account.

*To impersonate a Subuser:*

1. Log into SendGrid.
2. Go to the top left corner of the portal screen and click on your name just above the navigation menu.
3. Click **Switch User**.
4. Choose the subuser you want to impersonate by clicking that subuser’s name.

The page will refresh, and you will notice a message at the top of the screen that says, “You're currently logged in as [subuser name]”.

If you have more than one subuser, you can also switch to another subuser by clicking **Switch Subuser** in the top-right corner once you are impersonating any subuser.

###     Switching back to your parent account

Click the link at the top left that says “Back to Parent Account”. This will log you out of the subuser account and take you back to your parent account portal.

##     Export subuser Information

If you would like to see how your subusers are performing in comparison to each other, you can export subuser data.

*To export subuser information:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Click **Export Data**.
 <br>This downloads a CSV file with each subuser’s reputation, the number of requests they made this month, and the number of requests they made last month.

##     Additional Resources

- [Assigning a Domain Whitelabel to a subuser]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/#assigning-a-subuser)
- [Teammates]({{root_url}}/ui/account-and-settings/teammates/)
