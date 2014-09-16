---
title: Advanced Suppression Manager Guide
weight: 50
layout: page
navigation:
  show: false
---

{% info %}
ASM is in Beta and is not currently available for use with our [Marketing Email]({{root_url}}/Marketing_Emails/index.html) tool. 
{% endinfo %}

{% anchor h2 %}
Overview
{% endanchor %}

Advanced Suppression Manager (ASM) gives you the ability to create
groups that represent types of email that you regularly send to your
recipients, for example _receipts_, _social notifications_, and _account
alerts_. You can then give your recipients more control over the types of
emails they want to receive by letting them opt out of messages from a
certain group. This means getting the right messages to your recipient's inbox, resulting in a stronger relationship with your recipients and a better sending reputation.

{% anchor h2 %}
Getting Started
{% endanchor %}

After logging in to your SendGrid account, click on the beta invitation banner at the top of the page. Once in the beta SendGrid Customer Portal, click on the clipboard icon on the left navigation bar and select "Advanced Suppression Manager."

From here you can begin creating suppression groups to define the types
of emails for which you would like your recipients to be able to opt
out.

{% info %}
All of your groups will be visible on the Email Preferences page, along
with the descriptions.
{% endinfo %}

And of course there's [Advanced Suppression Manager API endpoints]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/index.html) for managing your groups and suppressions.

{% anchor h2 %}
Defining an ASM Group When Sending
{% endanchor %}

To specify a group when sending an email, add the group's ID to the X-SMTPAPI header of an SMTP message, or in the x-smtpapi parameter of a [mail.send API
call]({{root_url}}/API_Reference/Web_API/mail.html). You may only
specify one group per send, and you should wait one minute after
creating the group before sending with it.

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

You can find your group IDs by looking at the Group ID column in the Advanced Suppression Manager UI, or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html#-GET) of the groups resource.

{% anchor h2 %}
Active and Inactive Groups
{% endanchor %}

A group is active if email has been sent using that suppression group in
the last 60 days. Active groups may not be deleted.

{% anchor h2 %}
Unsubscribe and Email Preferences Links
{% endanchor %}

Emails that are sent with an ASM group specified with will have two links at
the bottom of the email: an "Email Preferences" link, and an
"Unsubscribe" link.

Via Email Preferences, recipients can select which groups of email they
would like to receive. With the Unsubscribe link, recipients will be added to
the Global Suppression list once they've confirmed their choice.

{% anchor h2 %}
Email Preferences
{% endanchor %}

From the Email Preferences page, recipients will be able to see all your
groups and their descriptions, and choose whether or not they want to
receive those types of emails. The Email Preferences page looks like
this:

![Email Preferences]({{root_url}}/images/asm_user_guide1.png)

{% anchor h2 %}
Group Suppressions vs. Global Unsubscribes
{% endanchor %}

Before ASM, when a recipient unsubscribed from emails, it was a global
unsubscribe, meaning that recipient would no longer get any emails at
all, including potentially important emails like password resets. This
is still the default behavior if you do not specify a suppression group
when sending an email.

When using ASM, a recipient clicking an unsubscribe link can choose which groups to unsubscribe from (group suppression) or may choose to opt out of all emails (global unsubscribe).

You can manage your global unsubscribes via the UI under "Global Unsubscribes."

{% info %}
Group Suppressions do not currently trigger [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) events.
{% endinfo %}

{% anchor h2 %}
Uploading a CSV
{% endanchor %}

You can upload a CSV of email addresses that you would like to add to a
suppression group.

The CSV must meet the following criteria:

* Email addresses must be in the first column of the CSV

*  The first row may be an optional header row

*  If there is more than one column in the CSV, the extra columns are ignored

*  Columns must comma-separated, without any formatting (e.g. quotation marks) around each of the cells.

{% anchor h2 %}
Suppression Groups and Categories
{% endanchor %}

While both suppression groups and [categories]({{root_url}}/API_Reference/SMTP_API/categories.html) can represent types of email, they are used for different but complementary purposes. Categories are used to organize emails together for analytics, while suppression groups organize emails together for the purpose of allowing recipients to opt out of receiving those types of emails.


