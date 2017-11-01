---
seo:
  title: Teammates FAQ
  description: Frequently Asked Questions about SendGrid Teammates
  keywords: faq, frequently, asked, questions, teammates, help
title: Teammates FAQ
weight: 0
layout: page
navigation:
  show: true
---

* [Is Teammates available for all SendGrid pricing plans?](#-Is-Teammates-available-for-all-SendGrid-pricing-plans)
* [Is there an additional fee to use Teammates?](#-Is-there-an-additional-fee-to-use-Teammates)
* [How are teammates different from subusers?](#-How-are-teammates-different-from-subusers)
* [How are teammates different from Multiple User Credentials?](#-How-are-teammates-different-from-Multiple-User-Credentials)
* [What will happen to my Multiple User Credentials?](#-What-will-happen-to-my-Multiple-User-Credentials)
* [Why can't my teammate impersonate a subuser?](#-Why-cant-my-teammate-impersonate-a-subuser)
* [Can I manage my teammates via API?](#-Can-I-manage-my-teammates-via-API)
* [Is there a difference between managing teammates in the API versus the Customer Portal?](#-Is-there-a-difference-between-managing-teammates-in-the-API-versus-the-Customer-Portal)
* [Can I recover a deleted teammate?](#-Can-I-recover-a-deleted-teammate)
* [How do I request access to a SendGrid feature?](#-How-do-I-request-access-to-a-SendGrid-feature)
* [How do I grant access to a SendGrid feature?](#-How-do-I-grant-access-to-a-SendGrid-feature)
* [How do I set up Two-Factor Authentication for a teammate?](#-How-do-I-set-up-TwoFactor-Authentication-for-a-teammate)

{% anchor h2 %}
Is Teammates available for all SendGrid pricing plans?
{% endanchor %}

**Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), and Free Trial users may create up to one teammate per account. There is not a teammate limit for Pro and higher plans.**

If you have an Essentials, [Legacy Lite]({{root_url}}/Classroom/Basics/Billing/legacy_lite_plan.html), or Free Trial plan and have created more than one multiple credentialed user, all of those credentialed users [will be migrated to Teammates]({{root_url}}/Classroom/Basics/Account/teammates_faq.html#-What-will-happen-to-my-Multiple-User-Credentials). However you will not be able to create any additional teammates unless you [upgrade to the Pro plan or higher](https://sendgrid.com/pricing/).

{% anchor h2 %}
Is there an additional fee to use Teammates?
{% endanchor %}

There is no additional fee required to use Teammates. All you need is a SendGrid account.

{% anchor h2 %}
How are teammates different from subusers?
{% endanchor %}

While [subusers]({{root_url}}/User_Guide/Settings/Subusers/index.html) and [teammates]({{root_url}}/User_Guide/Settings/teammates.html) might immediately seem quite similar, there are a few notable differences.

Most importantly, subusers have full access to all SendGrid features, except for billing. Teammates may have full access, but can be configured to have limited access.

While teammates are available on all pricing plans, subusers are only available to Pro 100K accounts and up. For more information, please see our [Pricing Page](https://sendgrid.com/pricing/).

Subusers are considered "child accounts" of a main SendGrid account. This means that while they share the overall credit pool, they have their own settings, statistics, and can be whitelabeled. For more information about subusers, please visit our [Classroom]({{root_url}}/Classroom/Basics/Account/what_are_subusers.html).

On the other hand, teammates cannot be whitelabeled, they do contribute to the account's overall statistics, and they do share the same settings as the parent or subuser account under which they were created.

Teammates is intended to be used by multiple members of the same team who belong to the same company, where each team member, or teammate, serves a specific role. Subusers are more commonly used by [OEM]({{root_url}}/Classroom/Basics/Misc/sendgrid_oem_process.html) companies, who provide email delivery as a service.

{% info %}
Subusers can create and manage teammates. The parent account will have complete access to the settings of all subuser created teammates.
{% endinfo %}

{% anchor h2 %}
How are teammates different from Multiple User Credentials?
{% endanchor %}

Teammates is an updated and expanded feature set based on [Multiple User Credentials]({{root_url}}/User_Guide/Settings/credentials.html).

Your multiple credentialed users can be edited and managed via Teammates.

As with Multiple User Credentials, Teammates allows you to create and manage multiple users of a single account, with the ability to specify what areas of the account those users can access.

Multiple User Credentials allows the account owner to set two different permissions:

* **UI/API** - allowed the user to access the dashboard and make API calls
* **Mail** - allowed the user to send email

On the other hand, Teammates provides much more granular control over the permissions that each individual teammate has. Teammates provides several preconfigured levels of [permissions]({{root_url}}/User_Guide/Settings/teammates.html#-Teammate-Permissions), based on common roles, or personas. When creating a teammate, you may either choose from one of these presets ("Developer", "Marketer", or "Accountant") or you can customize your own set of permissions for a teammate.

{% anchor h2 %}
What will happen to my Multiple User Credentials?
{% endanchor %}

Teammates is an updated and expanded feature set based on [Multiple User Credentials]({{root_url}}/User_Guide/Settings/credentials.html). If you have one or more multiple credentialed users on your account, they will be migrated to Teammates with their original permissions. However, once migrated, you will have much more granular control over those teammates' permissions.

The process by which multiple user credentials are converted to teammates is as follows:

* Credentialed users with **UI/API** and **Mail** permissions will be converted to admin teammates.
* Credentialed users with **Mail** permissions only will be converted to teammates with only the ability to send mail.
* Credentialed users with **UI/API** permissions only will be converted to teammates with the ability access the dashboard and the ability to make the same API calls they previously had access to.

{% warning %}
Once a credentialed user with only **UI/API** access has been converted to a teammate, that user will no longer automatically get access to new features. However, they will still be able to request access to new features.
{% endwarning %}

{% anchor h2 %}
Why can't my teammate impersonate a subuser?
{% endanchor %}

Only **parent SendGrid accounts** and **administrator teammates** may impersonate subusers. A teammate with restricted permissions can not impersonate a subuser, and subusers cannot impersonate other subusers.

Any Multiple User Credentials that have been migrated to teammates will have to be updated to possess full administrator permissions before they will be able to impersonate subusers. Any Multiple User Credentials that had only **UI/API** permissions will be unable to impersonate subusers as teammates until you update their permissions.

{% anchor h2 %}
Can I manage my teammates via API?
{% endanchor %}

Yes, there is an API that you can use to create and manage Teammates. For more information, please visit our [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html).

{% anchor h2 %}
Is there a difference between managing teammates in the API versus the Customer Portal?
{% endanchor %}

There is no inherent difference between creating or managing teammates via the API and the UI, with one exception. When you create a teammate with the API, you have more granular control over a teammate's permissions.

This is due to the fact that the Teammates API makes use of [API Key permissions]({{root_url}}/Classroom/Basics/API/api_key_permissions.html), or scopes, when setting teammate permissions. **There is not a 1:1 relationship between the set of teammate permissions configurable via the UI and the set of API Key permissions.**

For example, one permission displayed in the UI might be comprised of several API Key scopes. This list of scopes is much more detailed than the high level list of Teammate permissions presented in the UI, hence the increased granularity when editing a teammate's permissions via the API.

{% anchor h2 %}
Can I recover a deleted teammate?
{% endanchor %}

Deleted teammates may not be recovered. Once a teammate has been deleted, that teammate and its settings can never be restored. Assets created by the teammate, such as any templates, campaigns, contacts, or API keys, will **not** be deleted.

{% anchor h2 %}
How do I request access to a SendGrid feature?
{% endanchor %}

If you are a teammate with restricted access to a SendGrid account but feel that there is a feature you should have access to, simply navigate to that feature in the Customer Portal and click **Request Access**. You will receive an email when an account administrator either grants or denies you access.

{% anchor h2 %}
How do I grant access to a SendGrid feature?
{% endanchor %}

As an administrator, you can grant access to a feature several ways. If a teammate has requested access to a feature, simply log in to your account, navigate to **Settings** in the left hand sidebar, and click **Teammates**. You will see three tabs labeled **All**, **Requesting Access**, and **Invited**. Click **Requesting Access** to view a list of all Teammates who have requested access along with the name of the feature they requested access to. Select either **Deny** or **Approve**.

You also can give feature access to a teammate by editing that Teammate's permissions settings. Simply navigate to the teammates overview, and find the teammate under the **All** tab. Click the action menu next to that teammate and click **Edit**. This will open a window allowing you to change that teammate's various permissions. For more information, please visit our [User Guide]({{root_url}}/User_Guide/Settings/teammates.html).

{% anchor h2 %}
How do I set up Two-Factor Authentication for a teammate?
{% endanchor %}

Each individual teammate is responsible for setting up Two-Factor Authentication on their account. The process of setting up Two-Factor Authentication as a Teammate is no different from the process for a regular account owner. For detailed instructions on how to configure Two-Factor Authentication, [click here]({{root_url}}/User_Guide/Settings/two_factor_authentication.html).

{% anchor h2 %}
Related Resources
{% endanchor %}

* [User Guide]({{root_url}}/User_Guide/Settings/teammates.html)
* [API Reference]({{root_url}}/API_Reference/Web_API_v3/teammates.html)
