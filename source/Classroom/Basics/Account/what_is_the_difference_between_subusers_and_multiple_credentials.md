---
st:
  published_at: 2016-06-03
  type: Classroom
seo:
  title: What is the difference between subusers, teammates, and multiple credentials?
  description: Learn the difference between subusers, teammates and multiple credentials...
  keywords: subuser, multiple, credentials, team, mate, teammates
title: What is the difference between subusers and multiple credentials?
weight: 0
layout: page
navigation:
  show: true
---

## What is the difference between subusers and multiple credentials?

If you are on a Pro plan or higher, you have access to create [subusers]({{root_url}}/Classroom/Basics/Account/what_are_subusers.html). Subusers act as standalone accounts that share the parent account’s credits. This allows for stats tracking that is specific to those subusers as well as unique credentials to access each subuser. This is useful for multiple integrations and is a great option to keep your transactional and marketing emails separate. To setup a subuser, navigate to the [Subuser Management](https://app.sendgrid.com/settings/subusers) page to get started.

{% info %}
Each parent account is limited to 15 subusers. If you need to add more subusers, you can learn more about it [here]({{root_url}}/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html).
{% endinfo %}

Before the release of Teammates, **multiple credentials** made it possible to give others access to your primary account without having to disclose your primary credentials. This option was located under [Credentials](https://app.sendgrid.com/settings/credentials) within your Settings. Multiple credentials allowed the parent account to grant access to another team member or department for the the purposes of reading stats, accessing the UI, and/or sending mail using the primary account. **Multiple credentials has since been improved and updated, and is now referred to as Teammates.**

## What is the difference between multiple credentials and teammates?

As of February 2017, all multiple user credentials have been migrated to [teammmates]({{root_url}}/User_Guide/Settings/teammates.html). Teammates is simply an expanded and improved iteration of the multiple user credentials feature. Teammates allows for more granular control over individual teammates' permissions, in addition to improving the process of inviting teammates and requesting/granting access to various SendGrid features. To learn more about teammates, please read our [Teammates FAQ]() and [User Guide]({{root_url}}/User_Guide/Settings/teammates.html)

## What is the difference between teammates and subusers?

While [subusers]({{root_url}}/User_Guide/Settings/Subusers/index.html) and [teammates]({{root_url}}/User_Guide/Settings/teammates.html) might immediately seem quite similar, there are a few notable differences.

Most importantly, subusers have full access to all SendGrid features, except for billing. Teammates may have full access, but can be configured to have limited access.

While teammates are available on all pricing plans, subusers are only available to Pro 100K accounts and up. For more information, please see our [Pricing Page](https://sendgrid.com/pricing/).

Subusers are considered "child accounts" of a main SendGrid account. This means that while they share the overall credit pool, they have their own settings,  statistics, and can be whitelabeled. For more information about subusers, please visit our [Classroom]({{root_url}}/Classroom/Basics/Account/what_are_subusers.html).

On the other hand, teammates cannot be whitelabeled, they do contribute to the account's overall statistics, and they do share the same settings as the parent or subuser account under which they were created.

Teammates is intended to be used by multiple members of the same team who belong to the same company, where each team member, or teammate, serves a specific role. Subusers are more commonly used by [OEM]({{root_url}}/Classroom/Basics/Misc/sendgrid_oem_process.html) companies, who provide email delivery as a service.

{% info %}
Subusers can create and manage teammates. The parent account will have complete access to the settings of all subuser created teammates.
{% endinfo %}
