---
seo:
  title: Teammates
  description: Adding and managing Teammates using the SendGrid UI
  keywords: teammates, teammate, permissions
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
  * [Requesting feature access](#-Requesting-feature-access)
  * [Granting feature access](#-Granting-feature-access)
* [Teammates and API Keys](#-Teammates-and-API-Keys)

Teammates allows multiple users, or teammates, to send email from a single SendGrid account. It enables groups of users to with different roles and responsibilities to share one account, where each of these users has access to varying SendGrid features depending on their needs. By only giving your individual team members access to the features that they need to do their jobs, you can limit access to sensitive areas of your account. Teammates makes it incredibly easy to add, remove, and manage different users.

{% anchor h2 %}
Adding Teammates
{% endanchor %}

_To invite a Teammate to your account:_

1. Navigate to **Settings**, and click on **Teammates** in the sidebar.
<br>This is where you can see the list of all of your current teammates with their details: username, email address, first name, and last name. 
2. To add a new Teammate, click **Add Teammate**. 
3. Enter the Teammate's email address and then select their permission level. 
<br>Depending on the selected permission level, you may need to do some additional permission [configuration](#-Configuring-permissions). 
4. Click **Invite**. 
<br>If you have already sent a teammate invitation, you will see a list titled **Pending Invites**. This list contains the email address of the invitee and the invitation expiration date.

{% warning %}
Teammate invitations are valid for seven days.
{% endwarning %}

{% info %}
While only administrators can create teammates, it is possible for one administrator to create another teammate with administrator permissions. This new teammate would then be able to create and manage other teammates and have access to the account's billing settings. **Please be very careful about who you assign administrator permissions!**
{% endinfo %}

{% info %}
Only administrator teammates may impersonate subusers.
{% endinfo %}

{% anchor h2 %}
Managing Teammates
{% endanchor %}

{% info %}
Only administrator teammates may impersonate subusers.
{% endinfo %}

{% anchor h3 %}
Configuring permissions
{% endanchor %}

The three different permission levels are:

* **Restricted Access -** Teammates with no access to a feature cannot change that feature’s settings or view it within the SendGrid UI.. However, you can still [grant them access to specific features](#-Granting-feature-access).
* **Read-only Access -** Teammates with read-only access will not be able to change or configure a feature. However, they will be able to view any information provided by that feature.
* **Admin -** Teammates with full access that can view and make any changes.

If you select **Invite with Restricted Access** when inviting a Teammate, you need to select a preset access level or create your own by selecting **Custom Access**.  You can choose from several pre-defined permission levels to fit a variety of roles: Developer Access, Marketer Access, and Accountant Access or you can customize access for the teammate.

_To modify an existing teammate's permissions:_ 

1. Navigate to the **Teammates Page** under **Settings**. 
1. Under the list of current teammates, click the action menu next to the teammate you would like to edit.
1. Click **Edit** to open a modal window presenting the teammate's current permissions. 
1. Make your desired changes and click **Update**.

{% anchor h3 %}
Removing Teammates
{% anchor %}

_To delete a teammate:_

1. Navigate to the **Teammates Page** under **Settings**. 
1. Click the action menu next to the teammate you want to delete and click **Delete**.

{% warning %}
You cannot recover deleted teammates. Once a teammate has been deleted, it can never be restored. SendGrid will not remove any templates, campaigns, contacts, or API keys created by the teammate.
{% endwarning %}

{% anchor h2 %}
Requesting feature access
{% endanchor %}

If you are already signed into a SendGrid account as a teammate, but do not have access to a page or feature, you may request access to that page by clicking **Request Access**.

Once a request is made, all account administrators recieve a notification via email that a request is pending approval. 

{% anchor h3 %}
Granting feature access
{% endanchor %}

You can find any access requests listed under **Pending Requests** on the **Teammates** page in your Settings. The request will list the username of the teammate, their email address, their first and last names, along with the feature that they requested access to.

To grant that teammate access to the feature, click **Approve**.

{% warning %}
**By clicking "Approve" you are giving that teammate full access to the feature!** If you only want to give them limited access to the feature, you must navigate back to their teammate settings to make adjustments to their granular permissions.
{% endwarning %}

If you do not want to grant them access, click **Deny**.

{% info %}
The teammate receives a notification email when they are either granted or denied access. SendGrid delivers these emails, but the "reply to" address is the email address on file for the account owner.
{% endinfo %}

{% anchor h2 %}
Managing Teammates
{% endanchor %}



{% anchor h2 %}
Teammates and API Keys
{% endanchor %}

API Keys are used to authenticate API calls. Just as a teammate can be given specific permissions, API keys can be assigned specific [permissions]({{root_url}}/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) to restrict which API calls they can authenticate.

{% info %}
API Keys and Teammates can be used as two different methods of restricting access to the same SendGrid features.

However, a teammate cannot change their own permissions via API key. For example, a teammate with restricted access to features in the SendGrid user interface but full access to API Keys cannot make an API call to modify their permissions in the user interface.
{% endinfo %}


{% anchor h2 %}
Related Resources
{% endanchor %}

* [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)
* [Glossary](https://sendgrid.com/docs/Glossary/teammates.html)

