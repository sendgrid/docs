---
layout: page
weight: 0
title: Settings
seo:
  title: Subusers Settings
  description: Create and Manage your Subusers
  keywords: subuser settings, create subuser, manage subuser, delete subuser
navigation:
  show: true
---

When you create a subuser, you are given the basic options for setting up that subuser. Immediately upon saving, you will be taken to the subuser settings page. You can also get to this page by clicking the subuser’s name from the main subuser list.
From this page, you get a quick overview of the subuser’s sending behavior and you can change everything about your subuser, restricting or allowing the mail sending capabilities of this subuser.

{% anchor h2 %}
Subuser Behavior
{% endanchor %}

The top block of information on your settings page is designed to give you at-a-glance information about your subuser’s sending behavior within SendGrid. It is important to keep an eye on your subuser’s behavior, because you are responsible for all the subusers you create.

**Requests** - The number of API requests that this subuser made during the current month. This is not necessarily individual email sent since one request can be used to send multiple emails.

**Reputation** - If a subuser’s [reputation]({{root_url}}/Glossary/reputation_monitoring.html) goes down, it is likely that subuser will no longer be able to send emails through SendGrid.

**Opens** - The number of times this subuser’s emails were opened this month.

**Clicks** - The number of times links from this subuer’s emails were clicked this month.


{% anchor h2 %}
Credit Allocation
{% endanchor %}

Each subuser will be automatically configured to have access to Unlimited email credits from your parent account. This is so that your subusers can send emails from the moment you create them. It is up to you to set how these credits are allocated once you’ve create the subuser’s account and we give you a couple of options.

**Unlimited Credits** - The default credit allocation setting for all new subusers. This allows your subuser to send as many emails as they need, up to and through the limitations on your parent account.

**Recurring Credits** - Allows a certain number of email credits to be allocated to this user per day, week, or month - use it or lose it. Once the limit is reached, the user’s requests to send emails will be denied by SendGrid.

**Nonrecurrent Credits** - The number of credits this subuser has will not change on a schedule, the credits you give are the credits this subuser has, unless you allocate more credits either manually or via the API.

{% anchor h2 %}
Allocating or Removing Credits From a Subuser
{% endanchor %}

{% warning %}
This feature only makes changes to a subuser when the nonrecurring credit option is selected for this subuser.
{% endwarning %}

If your subuser has been allocated nonrecurring credits, then this feature will allow you to allocate credits to, or remove credits from this subuser account. Simply click the “Change Credit Rules” button and then choose whether to add or subtract credits for this subuser.

{% anchor h2 %}
Select Whitelabel
{% endanchor %}

Just as your parent account will send from a specific IP address, so will your subuser accounts. This allows you flexibility with your subusers so that you can segment them by email type, usage, or any number of other categories to protect the reputation of the IP addresses you have from each other.

When you create your subuser, you are given the option to select which IP address they should send from, but if you ever need to change the IP address, you can do it from here. If you choose multiple IPs, SendGrid will alternate between the IP addresses to send emails for this subuser.

{% anchor h2 %}
Email Monitor
{% endanchor %}

{% warning %}
One email credit will be charged for every monitor email that is sent
{% endwarning %}

This feature is also turned off by default. When you turn this feature is on, by clicking the “off” button, you will be shown a form that allows you to set the frequency SendGrid will test emails and the address to which these emails will be forwarded.

The “Collect Sample Rate” is the frequency is the number of emails SendGrid will allow through before copying the email address you set on the next email sent. For example, if you set the collect sample rate at 100 then you will receive a copy of every 100th email this subuser sends.

{% anchor h2 %}
Disable Subuser Account
{% endanchor %}

To turn off a subuser’s access to SendGrid temporarily, click the “Enabled” button. The button will switch to a yellow “Disabled” button.

To re-enable a subuser’s account, simply click the “Disabled” button and it will switch back to a green “Enabled” button.

{% anchor h2 %}
Delete Account
{% endanchor %}

{% warning %}
Deleting a subuser account cannot be undone. Please make sure that you are ready to delete this account before you delete it. All access for this subuser will immediately be revoked upon deletion.
{% endwarning %}

To delete a subuser account, click the red "Delete" button and click the “Confirm” button in the confirmation window that pops up. This cannot be undone, so be sure that you actually want to delete this account!

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Subusers Overview]({{root_url}}/User_Guide/Settings/Subusers/index.html)
- [Subuser Profile]({{root_url}}/User_Guide/Settings/Subusers/profile.html)
- [Subuser Impersonation]({{root_url}}/User_Guide/Settings/Subusers/impersonation.html)
- [Email Activity]({{root_url}}/User_Guide/email_activity.html)
- [Billing Settings]({{root_url}}/User_Guide/Settings/billing.html)
