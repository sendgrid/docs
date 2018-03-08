---
seo:
  title: Teammates
  description: Manage your Teammates
  keywords: teammates, teammate
title: Teammates
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [Adding Teammates](#-Adding-Teammates)
* [Managing Teammates](#-Managing-Teammates)
  * [Configuring permissions](#-Configuring-permisisons)
  * [Removing Teammates](#-Removing-Teammates)
  *[Requesting feature access](#-Requesting-feature-access)
  * [Granting feature access](#-Granting-feature-access)
* [Troubleshooting](#-Troubleshooting)
* [Teammates and API Keys](#-Teammates-and-API-Keys)


Teammates allows multiple users, or teammates, to send email from a single SendGrid account. Teammates is targeted toward groups of users who all share a single account, where each of these users has a different role and thus requires access to different SendGrid features. By only giving your individual team members access to the features that they need to do their jobs,you can limit access to sensitive areas of your account. Teammates makes it incredibly easy to add, remove, and manage different users.

{% info %}
Only administrator teammates may impersonate subusers!
{% endinfo %}

{% anchor h2 %}
Adding Teammates
{% endanchor %}

_To invite a Teammate to your account:_

1. Navigate to **Settings**, and click on **Teammates** in the sidebar.
<br>This is where you can see the list of all of your current teammates with their details: username, email address, first name, and last name. By clicking the action menu under **Actions** you can either delete the teammate, or edit that teammate.
2. To add a new Teammate, click **Add Teammate**. 
3. Enter the Teammate's email address and then select their permission level. 
4. Click **Invite**. 
<br>If you have already sent a teammate invitation, you will see a list titled **Pending Invites**. This list contains the email address the invite was sent to along with the invitation expiration date.

{% warning %}
Teammate invitations are valid for 7 days.
{% endwarning %}

{% info %}
While only administrators can create teammates, it is possible for one administrator to create another teammate with administrator permissions. This new teammate would then be able to create and manage other teammates and have access to the account's billing settings. **Please be very careful about who you assign administrator permissions!**
{% endinfo %}

{% anchor h2 %}
Configuring permissions
{% endanchor %}

The three different permission levels are:

* **Restricted Access -** Teammates with no access to a feature not only will be prevented from changing that feature’s settings, but they will also be unable to even view that feature within the SendGrid UI. However, you can still [grant them access to specific features](#-Granting-feature-access).
* **Read-only Access -** Teammates with read only access will not be able to change or configure a feature. However, they will be able to view any information provided by that feature.
* **Admin -** Teammates with full access to a feature can view and make any changes.

If you select **Invite with Restricted Access** when inviting a Teammate, you will need to select a preset access level or create your own by selecting **Custom Access**.  You can choose from several pre-defined permission levels to fit a variety of common roles: Developer Access, Marketer Access, and Accountant Access or you can customize access for the teammate.

{% info %}
Only administrator teammates may impersonate subusers.
{% endinfo %}

{% anchor h3 %}
Requesting Access to a SendGrid Feature
{% endanchor %}

If you are already signed into a SendGrid account as a teammate, but do not have access to a certain page or feature, you may request access to that page simply by clicking **Request Access**.

This will send a notification to the account administrator who can grant you access. If there is more than one administrator, each administrator will be notified.

![Requesting Access to a Feature]({{root_url}}/images/teammates_7.png)

{% anchor h3 %}
Granting Access to a SendGrid Feature (Administrators)
{% endanchor %}

You can find any access requests listed under **Pending Requests** on the **Teammates** page in your Settings. The request will list the username of the teammate, their email address, their first and last names, along with the feature that they requested access to.

To grant that teammate access to the feature, click **Approve**.

{% warning %}
**By clicking "Approve", you are giving that teammate full access to the feature!** If you only want to give them limited access to the feature, you must navigate back to their teammate settings to make adjustments to their granular permissions.
{% endwarning %}

If you do not want to grant them access, simply click **Deny**.

![Granting Access to a Feature]({{root_url}}/images/teammates_9.png)

{% info %}
A notification email will be sent to the teammate when they are either granted or denied access. This email will be delivered by SendGrid, but the "reply to" address will be the email address on file for the account owner.
{% endinfo %}

![Access Granted Notification]({{root_url}}/images/teammates_11.png)

{% anchor h2 %}
Managing Teammates
{% endanchor %}

_To modify an existing teammate's permissions:_ 

1. Navigate to the **Teammates Page** under **Settings**. 
1. Under the list of current teammates, click the action menu next to the teammate you would like to edit.
1. Click **Edit** to open a modal window presenting the teammate's current permissions. 
1. Make your desired changes and click **Update**.

_To delete a teammate:_
1. Navigate to the **Teammates Page** under **Settings**. 
1. Click the action menu next to the teammate you want to delete and click **Delete**.

![Deleting a Teammate]({{root_url}}/images/teammates_10.png)

{% warning %}
You cannot recover deleted teammates. Once a teammate has been deleted, that teammate and its settings can never be restored. Assets created by the teammate, such as any templates, campaigns, contacts, or API keys, will not be deleted.
{% endwarning %}

{% anchor h2 %}
Teammates and API Keys
{% endanchor %}

There are many similarities between Teammates and API Keys that are worth discussing as the interaction between these two features may lead to some confusion.

API Keys are used to authenticate API calls. Just as a teammate can be given specific permissions, API keys can be assigned specific [permissions]({{root_url}}/Classroom/Basics/API/api_key_permissions.html) to restrict which API calls they can authenticate.

{% info %}
API Keys and Teammates can be used as two different methods of restricting access to the same SendGrid features.

However, a teammate cannot change their own permissions via API key. For example, a teammate with restricted access to features in the SendGrid user interface but full access to API Keys cannot make an API call to modify their permissions in the user interface.
{% endinfo %}


{% anchor h2 %}
Related Resources
{% endanchor %}

* [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)
* [Frequently Asked Questions]({{root_url}}/Classroom/Basics/Account/teammates_faq.html)
