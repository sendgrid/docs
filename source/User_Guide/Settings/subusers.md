---
layout: page
weight: 100
title: Subusers
seo:
  title: Subusers
  description: Create and Manage your Subusers
  keywords: subuser settings, create subuser, manage subuser, delete subuser
navigation:
  show: true
---

{% info %}
If you have a **Pro plan or higher**, you may create up to 15 subusers through your account. If you reach the maximum of 15 and require more subusers, please use the form in the [Subuser Management]({{site.app_url}}/settings/subusers) page to request more.
{% endinfo %}

Subusers are SendGrid accounts that belong to a parent account. They have their own permissions and credit limits, which you assign as you create the subusers. Subusers are provided in order to help you segment your email sending and API activity. We suggest our customers create subusers for each of the different types of emails they send. This often means one subuser for transactional emails and one for marketing emails; however some of our customers will break up their sending across multiple subusers in order to segment the statistics for each type or function of email they send.


- [Create a Subuser](#-Create-a-Subuser)
- [Manage Subusers](#-Manage-Subusers)
- [Optional Profile Information](#-Optional-Profile-Information)
- [Allocating or Removing Credits From a Subuser](#-Allocating-or-Removing-Credits-From-a-Subuser)
- [Adding a whitelabel domain to a subuser account](#-Adding-a-whitelabel-domain-to-a-subuser-account)
- [Monitoring subuser email content](#-Monitoring-subuser-email-content)
- [Impersonating a subuser](#-Impersonating-a-subuser)
- [Export Subuser Information](#-Export-Subuser-Information)
- [Disabling a subuser account](#-Disabling-subuser-account)
- [Deleting a subuser account](#-Deleting-a-subuser-account)

{% anchor h2 %}
Create a Subuser
{% endanchor %}

New SendGrid accounts do not come with subusers and must be created by the parent account.

*To create a subuser:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Click **Create New Subuser**. 
1. Enter the following required information into the corresponding fields:

    * Username - The username your subuser will use to send email and access the API.
    * Email Address - The contact email address for this subuser. This must be an active email account as SendGrid may contact a subuser to provide support,  resolve sending and deliverability issues, or to enforce SendGrid's Terms of Service. Whenever we contact a subuser, it is our policy to contact the    parent account email address at the same time.
    * Password - The password your subuser will use to access SendGrid.com.
    * Avatar - A [gravatar](http://gravatar.com) will load when an email address is entered, making it easier to identify your subusers in the subuser list.

1. Select the IP Address you wish to associate with the Subuser account. 
   When you create a SendGrid account and select a Pro plan or higher, your account is assigned to a dedicated IP address. All of your mail sent through SendGrid will show as originating from this IP address, unless you have purchased additional IPs and assigned IP addresses to them or set up [IP Pools]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_pools.html). You can see which other users are assigned to the same IP address, so you can keep similar senders together.
   
   {% info %}
   Keep in mind that the subusers assigned to an IP address will effect the sending reputation of that IP address. This can include both the parent account and other subuser accounts assigned to that IP. All account plans below Pro 100k share an IP address with other users on the same account level. Upgrading to Pro 100k plan or higher includes a dedicated IP address. This means that your account and subusers sending practices alone effect the sending reputation of the IP addresses assigned to your account.
   {% endinfo %}

If you need more IP addresses, please contact [SendGrid support]({{site.support_url}}).

{% anchor h2 %}
Manage Subusers
{% endanchor %}

Subusers can be managed via [Subuser API](https://sendgrid.api-docs.io/v3.0/subusers-api) or by using the SendGrid app.

*To manage a Subuser from the SendGrid app:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Select the name of the Subuser. This takes you to the Subuser’s account and profile settings. From there, you can manage and update your Subuser Settings.

{% anchor h2 %}
Optional Profile Information
{% endanchor %}

We do not require this information for your subusers, but we suggest that you fill out as much as possible to improve the deliverability for this subuser, especially if the information does not match your parent account’s information. This will also allow SendGrid to contact your subuser directly if we notice anything on their account.

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

{% anchor h2 %}
Allocating or Removing Credits From a Subuser
{% endanchor %}

{% warning %}
This feature only makes changes to a subuser when the nonrecurring credit option is selected for this subuser.
{% endwarning %}

If your subuser has been allocated nonrecurring credits, then this feature will allow you to allocate credits to, or remove credits from this subuser account. Simply click **Change Credit Rules** and then choose whether to add or subtract credits for this subuser.

{% anchor h2 %}
Adding a whitelabel domain to a subuser account
{% endanchor %}

Using a domain whitelabel allows you to better authenticate the email that you send by removing the “sent via sendgrid.net” message that your recipients see on un-whitelabeled emails. This has the added benefit of giving you complete control over your sending reputation.

{% info %}
In order to add a domain whitelabel or whitelabel link to a subuser account, there must be one or more of these whitelabels set up in the parent account. 
{% endinfo %}

*To add a domain whitelabel to a subuser account:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Locate the subuser account you wish to delete and click on the name to view the account details. 
1. On the *Account Settings* page, navigate to the Whitelabel Domain section and then click **Change Sending**. 
1. From the drop-down menus that appear, select a whitelabel domain and/or a whitelabel link to associate with the subuser account. 
1. Once you've made all of your selections, click **Save**. 

{% anchor h2 %}
Monitoring subuser email content
{% endanchor %}

This feature allows you to recieve a sample of a subuser's email content to help ensure that the content is not damaging your reputation. 

{% warning %}
One email credit will be charged for every monitor email that is sent
{% endwarning %}

The “Collect Sample Rate” is the frequency is the number of emails SendGrid will allow through before copying the email address you set on the next email sent. For example, if you set the collect sample rate at 100 then you will receive a copy of every 100th email this subuser sends.

{% anchor h2 %}
Impersonating a subuser
{% endanchor %}

When you set up subusers, it may be useful to see what the subuser’s settings are and to see what the subuser can see in the SendGrid UI.
To make this easier, we’ve made it so you can impersonate a subuser from your parent account and then manage the subuser the same way as if you had logged in with that user’s credentials, without having to log out of your parent account.

*To impersonate a subuser:*

1. Log into SendGrid. 
2. Go to the top left corner of the portal screen and click on your name just above the navigation menu.
3. Click **Switch User**. 
4. Choose the subuser you want to impersonate by clicking that subuser’s name

The page will refresh and you will notice a message at the top of the screen that says, “You're currently logged in as [subuser name]”

If you have more than one subuser you can also switch to another subuser by clicking **Switch Subuser** in the top-right corner once you are impersonating any subuser.

{% anchor h3 %}
Switching back to your parent account
{% endanchor %}

Click the link at the top left that says “<- Back to Parent Account”. This will log you out of the subuser account and take you back to your parent account portal.


{% anchor h2 %}
Export Subuser Information
{% endanchor %}

If you would like to see how your subusers are performing in comparison to each other, you can export subuser data. 

*To export subuser information:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Click **Export Data**. 

 <br>This downloads a CSV file that will have each subuser’s reputation, number of requests each subuser made this month, and the number of requests each subuser made last month. 

 {% anchor h2 %}
Disabling a subuser account 
{% endanchor %}

*To turn off a subuser’s access to SendGrid temporarily:*

1. Navigate to **Settings** and select **Subuser Management**.  
1. Locate the subuser account you wish to disable and click on the name to view the account details. 
click **Enable**.

To re-enable a subuser’s account, simply click **Disabled**.

{% anchor h2 %}
Deleting a subuser account
{% endanchor %}

{% warning %}
Deleting a subuser account cannot be undone. Please make sure that you are ready to delete this account before you delete it. All access for this subuser will immediately be revoked upon deletion.
{% endwarning %}

*To delete a subuser account:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Locate the subuser account you wish to delete and click on the name to view the account details. 
1. On the *Account Settings* page, click **Delete**. 
   A confirmation window appears. 
1. Click **Confirm** to delete the subuser account.  

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Subuser Settings]({{root_url}}/User_Guide/Settings/Subusers/settings.html)
- [Subuser Profile]({{root_url}}/User_Guide/Settings/Subusers/profile.html)
- [Subuser Impersonation]({{root_url}}/User_Guide/Settings/Subusers/impersonation.html)