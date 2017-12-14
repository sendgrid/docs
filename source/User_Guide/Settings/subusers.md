---
layout: page
weight: 100
title: Subusers
seo:
  title: Subusers
  description: Create and Manage your Subusers
  keywords: Subuser settings, create Subuser, manage Subuser, delete Subuser
navigation:
  show: true
---

{% info %}
If you have a **Pro plan or higher**, you may create up to 15 Subusers through your account. If you reach the maximum of 15 and require more Subusers, please use the form in the [Subuser Management]({{site.app_url}}/settings/Subusers) page to request more.
{% endinfo %}

Subusers are SendGrid accounts that belong to a parent account. They have their own permissions and credit limits, which you assign as you create the Subusers. Subusers are provided in order to help you segment your email sending and API activity. We suggest our customers create Subusers for each of the different types of emails they send. This often means one Subuser for transactional emails and one for marketing emails; however some of our customers will break up their sending across multiple Subusers in order to segment the statistics for each type or function of email they send.


- [Create a Subuser](#-Create-a-Subuser)
- [Manage Subusers](#-Manage-Subusers)
- [Optional Profile Information](#-Optional-Profile-Information)
- [Allocating or Removing Credits From a Subuser](#-Allocating-or-Removing-Credits-From-a-Subuser)
- [Adding a whitelabel domain to a Subuser account](#-Adding-a-whitelabel-domain-to-a-Subuser-account)
- [Monitoring Subuser email content](#-Monitoring-Subuser-email-content)
- [Impersonating a Subuser](#-Impersonating-a-Subuser)
- [Export Subuser Information](#-Export-Subuser-Information)
- [Disabling a Subuser account](#-Disabling-Subuser-account)
- [Deleting a Subuser account](#-Deleting-a-Subuser-account)

{% anchor h2 %}
Create a Subuser
{% endanchor %}

New SendGrid accounts do not come with Subusers and must be created by the parent account.

*To create a Subuser:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Click **Create New Subuser**. 
1. Enter the following required information into the corresponding fields:
  * Username - The username your Subuser will use to send email and access the API.
  * Email Address - The contact email address for this Subuser. This must be an active email account as SendGrid may contact a Subuser to provide support,  resolve sending and deliverability issues, or to enforce SendGrid's Terms of Service. Whenever we contact a Subuser, it is our policy to contact the    parent account email address at the same time.
  * Password - The password your Subuser will use to access SendGrid.com.
  * Avatar - A [gravatar](http://gravatar.com) will load when an email address is entered, making it easier to identify your Subusers in the Subuser list.

1. Select the IP Address you wish to associate with the Subuser account. 
   When you create a SendGrid account and select a Pro 100k plan or higher, your account is assigned to a dedicated IP address. All of your mail sent through SendGrid will show as originating from this IP address, unless you have purchased additional IPs and assigned IP addresses to them or set up [IP Pools]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_pools.html). You can see which other users are assigned to the same IP address, so you can keep similar senders together.
   
If you need more IP addresses, please contact [SendGrid support]({{site.support_url}}).

{% anchor h2 %}
Manage Subusers
{% endanchor %}

Subusers can be managed via [Subuser API](https://sendgrid.api-docs.io/v3.0/Subusers-api) or by using the SendGrid UI.

*To manage a Subuser from the SendGrid UI:*

1. Navigate to **Settings** and select **Subuser Management**.
1. Select the name of the Subuser. This takes you to the Subuser’s account and profile settings. From there, you can manage and update your Subuser Settings.

{% anchor h2 %}
Optional Profile Information
{% endanchor %}

We do not require this information for your Subusers, but we suggest that you fill out as much as possible to improve the deliverability for this Subuser, especially if the information does not match your parent account’s information. This will also allow SendGrid to contact your Subuser directly if we notice anything on their account.

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


{% anchor h2 %}
Allocating or removing credits from a Subuser
{% endanchor %}

{% warning %}
This feature only makes changes to a Subuser when the nonrecurring credit option is selected for this Subuser.
{% endwarning %}

If your Subuser has been allocated nonrecurring credits, then this feature will allow you to allocate credits to, or remove credits from this Subuser account. Simply click **Change Credit Rules** and then choose whether to add or subtract credits for this Subuser.

{% anchor h2 %}
Adding a whitelabel domain to a Subuser account
{% endanchor %}

Using a domain whitelabel allows you to better authenticate the email that you send by removing the “sent via sendgrid.net” message that your recipients see on un-whitelabeled emails. This has the added benefit of giving you complete control over your sending reputation.

{% info %}
In order to add a domain whitelabel or whitelabel link to a Subuser account, there must be one or more of these whitelabels set up in the parent account. 
{% endinfo %}

*To add a domain whitelabel to a Subuser account:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Locate the Subuser account you wish to delete and click on the name to view the account details. 
1. On the *Account Settings* page, navigate to the Whitelabel Domain section and then click **Change Sending**. 
1. From the drop-down menus that appear, select a whitelabel domain and/or a whitelabel link to associate with the Subuser account. 
1. Once you've made all of your selections, click **Save**. 

{% anchor h2 %}
Monitoring Subuser email content
{% endanchor %}

This feature allows you to recieve a sample of a Subuser's email content to help ensure that the content is not damaging your reputation. 
{% warning %}
One email credit will be charged for every monitor email that is sent
{% endwarning %}
The “Collect Sample Rate” is the frequency is the number of emails SendGrid will allow through before copying the email address you set on the next email sent. For example, if you set the collect sample rate at 100 then you will receive a copy of every 100th email this Subuser sends.

{% anchor h2 %}
Impersonating a Subuser
{% endanchor %}

When you set up Subusers, it may be useful to see what the Subuser’s settings are and to see what the Subuser can see in the SendGrid UI.
To make this easier, we’ve made it so you can impersonate a Subuser from your parent account and then manage the Subuser the same way as if you had logged in with that user’s credentials, without having to log out of your parent account.

*To impersonate a Subuser:*

1. Log into SendGrid. 
2. Go to the top left corner of the portal screen and click on your name just above the navigation menu.
3. Click **Switch User**. 
4. Choose the Subuser you want to impersonate by clicking that Subuser’s name

The page will refresh and you will notice a message at the top of the screen that says, “You're currently logged in as [Subuser name]”

If you have more than one Subuser you can also switch to another Subuser by clicking **Switch Subuser** in the top-right corner once you are impersonating any Subuser.

{% anchor h3 %}
Switching back to your parent account
{% endanchor %}

Click the link at the top left that says “<- Back to Parent Account”. This will log you out of the Subuser account and take you back to your parent account portal.


{% anchor h2 %}
Export Subuser Information
{% endanchor %}

If you would like to see how your Subusers are performing in comparison to each other, you can export Subuser data. 

*To export Subuser information:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Click **Export Data**. 
 <br>This downloads a CSV file that will have each Subuser’s reputation, number of requests each Subuser made this month, and the number of requests each Subuser made last month. 

 {% anchor h2 %}
Disabling a Subuser account 
{% endanchor %}

*To turn off a Subuser’s access to SendGrid temporarily:*

1. Navigate to **Settings** and select **Subuser Management**.  
1. Locate the Subuser account you wish to disable and click on the name to view the account details. 
click **Enable**.

To re-enable a Subuser’s account, simply click **Disabled**.

{% anchor h2 %}
Deleting a Subuser account
{% endanchor %}

{% warning %}
Deleting a Subuser account cannot be undone. Please make sure that you are ready to delete this account before you delete it. All access for this Subuser will immediately be revoked upon deletion.
{% endwarning %}

*To delete a Subuser account:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Locate the Subuser account you wish to delete and click on the name to view the account details. 
1. On the *Account Settings* page, click **Delete**. 
   A confirmation window appears. 
1. Click **Confirm** to delete the Subuser account.  

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Domain Whitelabel]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html)
- [Teammates]({{root_url}}/User_Guide/Settings/teammates.html)
