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

* [What is Teammates?](#-What-is-Teammates)
* [Where can I find Teammates?](#-Where-can-I-find-Teammates)
* [Who can use Teammates?](#-Who-can-use-Teammates)
* [Setting Up Teammates](#-Setting-Up-Teammates)
* [Teammate Permissions](#-Teammate-Permissions)
* [Managing Teammates](#-Managing-Teammates)
* [Teammates and API Keys](#-Teammates-and-API-Keys)

{% anchor h2 %}
What is Teammates?
{% endanchor %}

Teammates is an account administration and security tool designed to help manage multiple users, or teammates, on a single SendGrid account. Teammates is targeted toward groups of users who all share a single account, where each of these users has a different role and thus requires access to different SendGrid features.

There are several benefits to using Teammates. The first and foremost is security: by giving your individual team members access only to the features that they need to do their jobs, you can limit access to sensitive areas of your account. Second, Teammates helps to streamline not only your team members' jobs, but also the job of the admin. Teammates makes it incredibly easy to add, remove, and manage different users.

For example, a marketer and accountant are going to require access to two very different areas of your account: Marketing Campaigns and Billing. The accountant has no need to create and send marketing email, and the marketer has no need to manage your billing information. By assigning each teammate access only to the pages they need to complete their work, you are able to protect the sensitive financial information contained in the Billing settings, and safeguard the possibility of accidentally sending a campaign.

{% info %}
Teammates with admin permissions have as much control over an account as the original account owner. This can be useful in the event of an account owner or admin leaving the company. By ensuring that two members of your team have admin access, you can prevent your team from losing access to your SendGrid account.
{% endinfo %}

{% anchor h3 %}
Where can I find Teammates?
{% endanchor %}

To get started using Teammates, simply navigate to **Settings** in the sidebar and select **Teammates**. Continue reading below to learn how to send your first Teammate invitation!

{% anchor h2 %}
Who can use Teammates?
{% endanchor %}

{% info %}
Teammates is an improved and expanded version of what was previously referred to as Multiple User Credentials. If you had one or more Multiple User Credentials configured for your account, then those credentials will automatically be migrated to the Teammates platform.
{% endinfo %}

Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. Pro plans and higher have a limit of 1000 teammates per account/subuser. If you need more please [contact support]({{root_url}}/Classroom/Basics/Misc/support.html).

If you have an Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), or Free Trial plan and have created more than one multiple credentialed user, all of those credentialed users [will be migrated to Teammates]({{root_url}}/Classroom/Basics/Account/teammates_faq.html#-What-will-happen-to-my-Multiple-User-Credentials). However you will not be able to create any additional teammates unless you [upgrade to the Pro plan or higher](https://sendgrid.com/pricing/).

Only account administrators and teammates with admin access are able to create and manage teammates. Subuser accounts also have access to Teammates, but they will be unable to manage teammates on the parent account level.

{% info %}
While only administrators can create teammates, it is possible for one administrator to create another teammate with administrator permissions. This new teammate would then be able to create and manage other teammates, along with having access to the account's billing settings. **Please be very careful about who you assign administrator permissions!**
{% endinfo %}

{% anchor h2 %}
Setting Up Teammates
{% endanchor %}

{% anchor h3 %}
Adding a Teammate as an Administrator
{% endanchor %}

{% info %}
Only administrator teammates may impersonate subusers!
{% endinfo %}

To invite a teammate to your account, navigate to **Settings**, and click on **Teammates** in the sidebar.

This is where you can see the list of all of your current teammates with their details: username, email address, first name, and last name. By clicking the action menu under **Actions** you can either delete the teammate, or edit that teammate.

If you have already sent a teammate invitation, you will see a list titled **Pending Invites**. Under this list you will see the email address the invite was sent to along with the invitation expiration date.

{% warning %}
Teammate invitations are valid for 7 days.
{% endwarning %}

Click **Add Teammate** to open the modal window allowing you to specify the email address and permissions of your new teammate.

![Teammates]({{root_url}}/images/teammates_1.png)

{% info %}
Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. Pro and higher plans may create up to a limit of 1000 teammates.
{% endinfo %}

You should now see a modal window titled "New Teammate." Here you will enter your teammate's email address and select the type of teammate you would like to add. The teammate type dictates what permissions your new teammate will have.

![Adding a new teammate]({{root_url}}/images/teammates_2.png)

{% anchor h2 %}
Teammate Permissions
{% endanchor %}

By selecting a type, you can choose from several pre-defined permission levels to fit a variety of common roles: **Developer Access**, **Marketer Access**, and **Accountant Access** or you can customize access for the teammate.

The three different permission levels are:

* **NO ACCESS -** Teammates with no access to a feature not only will be prevented from changing that feature’s settings, but they will also be unable to even view that feature within the SendGrid UI. However, they may still [request access to that feature](#-Requesting-Access-to-a-SendGrid-Feature).
* **READ ACCESS -** Teammates with read only access will not be able to change or configure a feature. However, they will be able to view any information provided by that feature.
* **FULL ACCESS -** Teammates with full access to a feature can view and make any changes.

![Teammate Permissions]({{root_url}}/images/teammates_3.png)

{% info %}
Only administrator teammates may impersonate subusers!
{% endinfo %}

Once you select a teammate type and have entered a valid email address, you may either click **Create** to send the teammate invitation, or you can further customize the permissions levels for your teammate.

After you have sent the teammate invitation, you will see a new entry underneath **Pending Invites** on the Teammates page under **Settings**. Teammate invitations expire after 7 days. You can delete an invitation, or resend the invitation, by clicking the action menu under Actions.

{% anchor h3 %}
Accepting a Teammate Invitation
{% endanchor %}

If someone has invited you to join their SendGrid account as a teammate, you should receive an email with the subject line "You're invited to join John Doe's team on SendGrid!" where John Doe is the administrator who invited you.

To accept the invitation, simply open the email and click **Set up your Profile**. This will take you to the SendGrid website displaying a modal window asking for your first name, last name, desired username, and password.

![Teammate Invitation Email]({{root_url}}/images/teammates_5.png)

Once you've filled out these fields, click **Sign In**.

{% info %}
Teammate invitations are valid for 7 days. If you click the link to **Set up your Profile** in the invitation and discover that your invitation has expired, you must reach out to your account administrator to request a new invitation.
{% endinfo %}

![Teammate Account Created Successfully]({{root_url}}/images/teammates_6.png)

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

To modify an existing teammate's permissions, navigate to the **Teammates Page** under **Settings**. Under the list of current teammates, click the action menu next to the teammate you would like to edit.

Click **Edit** to open a modal window presenting the teammate's current permissions. Make your desired changes and click **Update**.

To delete a teammate, navigate to the **Teammates Page** under **Settings**. Click the action menu next to the teammate you want to delete and click **Delete**.

![Deleting a Teammate]({{root_url}}/images/teammates_10.png)

{% warning %}
You cannot recover a deleted teammate! Please be certain before deleting one of your teammates.
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

To learn how to create and manage Teammates via our Web API v3, please visit our [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)

{% anchor h2 %}
Related Resources
{% endanchor %}

* [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)
* [Frequently Asked Questions]({{root_url}}/Classroom/Basics/Account/teammates_faq.html)
