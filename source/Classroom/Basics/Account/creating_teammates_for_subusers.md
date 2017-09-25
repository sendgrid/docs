---
seo:
  title: Creating Teammates for Subusers
  description: Learn how to create teammates for subusers!
  keywords: subuser, permission, teammates
title: Creating Teammates for Subusers
weight: 0
layout: page
zendesk_id: 205360047
navigation:
  show: true
---

## What is a teammate?

Teammates is an account administrator and security tool that allows admins to grant access to a SendGrid account to individual "teammates". These teammates may be granted access to all of an account's features and information, or the administrator may choose to only grant a teammate limited access specific to that teammate's role and responsibilities. For additional general information about Teammates, please see our [User Guide]({{root_url}}/User_Guide/Settings/teammates.html).

## Creating Teammates for Subusers

The process of creating teammates is no different for subusers than for parent users. However, it is important to note that while subusers have complete control over their teammates, the parent account is able to create, manage, and delete any teammate created by, or for, a subuser.

{% info %}
Subuser teammates will only have access to the subuser account!
{% endinfo %}

Teammates can be created and managed both via the user interface and the v3 Web API. If you are creating a teammate via the v3 Web API, you can use one of our 7 libraries, or you may make a cURL request.

### Using the User Interface

In order to create a teammate, you must first send out a teammate invitation, since the individual who will be using the teammate account is ultimately responsible for setting up the teammate account. Parent and subuser admins are only able to send teammate invitations, they are not able to create a teammate.

{% info %}
Teammate invitations are valid for up to 7 days.
{% endinfo %}

To send a teammate invitation, navigate to **Settings** in the left hand sidebar and click on **Teamamtes**. Click the **Add Teammate** button.

A window will appear titled "Invite Teammate". Enter the email address for the individual you want to create a teammate for, and select the teammate permissions.

Teammate permissions may be either:

* **"Admin"** - administrator teammates have full access to all of the subuser's account features and settings.
* **"Read-Only Access"** - teammates with read-only permissions will be able to view all of the subuser's account features and settings, but they won't be able to make any changes.
* **"Restricted Access"** - teamamtes with restricted access will have access to only the features you specify. There are three presets: "Developer Access", "Marketer Access", and "Accountant Access". The specific permissions for each preset are displayed under **Access Details**.

You may also customize any of these presets. You can make your own set of permissions by selecting "Custom Access" and using the sliders next to each permission under **Access Details**.

Once you have entered the teammate's email address and have decided on the permissions you want to give that teammate, click **Invite**.

All pending teammate invitations can be found under the tab labeled "Invited".

### Using the v3 Web API

To invite a teammate using the v3 Web API, please see our [Library Documentation]() or our [Web API v3 Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html).

### Using cURL

Example cURL request to invite a teammate:

{% codeblock lang:bash %}
curl --request POST \
  --url https://api.sendgrid.com/v3/teammates \
  --header 'content-type: application/json' \
  --data '{"email":"example@example.com","scopes":["billing.delete", "billing.read", "billing.update"],"is_admin":false}'
{% endcodeblock %}

The various teammate permissions are specified within the `scopes` array. The example shown here includes the billing scopes that would be useful for a teammate primarily responsible for accounting.


## Related Articles

* [User Guide]({{root_url}}/User_Guide/Settings/teammates.html)
* [Frequently Asked Questions]()
* [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)
