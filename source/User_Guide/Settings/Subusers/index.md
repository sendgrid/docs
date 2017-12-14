---
layout: page
weight: 100
title: Subusers Overview
seo:
  title: Create and Manage Subusers
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
- [Export Subuser Information](#-Export-Subuser-Information)

{% anchor h2 %}
Create a Subuser
{% endanchor %}

New SendGrid accounts do not come with subusers and must be created by the parent account.

{% info %}
An account can have up to 15 subusers. If you need more, please contact [SendGrid support]({{site.support_url}}).
{% endinfo %}

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
Export Subuser Information
{% endanchor %}

If you would like to see how your subusers are performing in comparison to each other, you can export subuser data. 

*To export subuser information:*

1. Navigate to **Settings** and select **Subuser Management**. 
1. Click **Export Data**. 

 <br>This downloads a CSV file that will have each subuser’s reputation, number of requests each subuser made this month, and the number of requests each subuser made last month. 

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Subuser Settings]({{root_url}}/User_Guide/Settings/Subusers/settings.html)
- [Subuser Profile]({{root_url}}/User_Guide/Settings/Subusers/profile.html)
- [Subuser Impersonation]({{root_url}}/User_Guide/Settings/Subusers/impersonation.html)