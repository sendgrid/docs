---
layout: page
weight: 0
seo:
  title: Multiple User Credentials
title: Multiple User Credentials
navigation:
  show: true
---

MultiAuth, or Multiple Authentication, is a feature that allows administrators to create and manage additional user access to SendGrid features and allows the ability to send messages without sharing access to the master account credentials.

{% info %}
Usernames must be unique. No two accounts, either primary or additional credentials, may have the same username.
{% endinfo %}

{% info %}
Multiple User Authentication only refers to how credentials are used to differentiate between different users of one SendGrid account. For the login security feature, please see [Multifactor Authentication]({{root_url}}/User_Guide/Settings/multifactor_authentication.html).
{% endinfo %}

As the primary account holder, you can assign one of three rights to each set of credentials. These functions are:

-   **Email** - Enabling this right allows the designated credentials to send email via SMTP Relay or using the [Send Mail function of the Web API v3]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html)
-   **API** - Enabling access to this function allows the designated credentials to utilize all of [SendGrid's APIs](http://support.sendgrid.com/entries/21197488-what-are-the-sendgrid-apis-and-what-do-they-do), with exception to any API call that sends email
-   **Web** - Enabling access to the web dashboard allows the specified credentials to administer the account using the web-based console.

{% info %}
Future updates to multiple user credentials will allow for more granular control over access rights granted to the specified credentials. At this time, granting access to one of the three available features is granting full access to that feature, with the following exceptions:

-   In order to allow credentials to send mail via an API call, you must also allow them Email access
-   Granting credentials access to Email will allow them to use the API calls that send messages
-   Granting access to Web will allow credentials to create marketing email, but they cannot send them unless they are also granted Email rights
-   Only the Master Account can create, modify, or delete [subusers]({{root_url}}/User_Guide/Settings/Subusers/index.html) and Credentials

{% endinfo %}

{% anchor h2 %}
Using the Multiple Credentials Dashboard
{% endanchor %}

In order to access the interface, you need to log in to your master account and click on “Settings” and then “[Credentials](https://sendgrid.com/credentials)." When you access MultiAuth's User Credentials management interface, you will see a list of any previously created credentials. As an example, if you have created any credentials using the Multiple User Credentials API, those user names will appear here and display their assigned permissions.

{% info %}
Credentials that have been granted access to the Web feature are not granted rights to access the Account Settings page. If they click on the link, they will receive a notification that their credentials do have have sufficient rights to do so.
{% endinfo %}


As you can see in the above sample image, there is a username called “admin” who has been granted all privileges. There are also options to “Edit” or “Destroy” the account.

To create new credentials click the “Add New Credential” button at the bottom left of the credentials list. This will open the New Credential page.

When creating a new set of credentials, follow these instructions:

1.  For Name, enter the username for the credential. We recommend using an email address to maintain uniqueness.
2.  For Password, please see the [SendGrid password requirements]({{root_url}}{{site.password_requirements}}).
3.  Select the boxes to activate the features you want the credentials to access.

When you click “Create Credential,” you are returned to the User Credentials page, where you will see the new credentials and their associated permissions. If you do not intend to create new credentials, you may click the “Cancel” button to cancel the action.

If you need to edit a set of credentials, you can click the “Edit” icon, and you will be redirected to the Settings page.

{% info %}
If you leave the password field empty then your modifications will only affect the permissions.
{% endinfo %}
