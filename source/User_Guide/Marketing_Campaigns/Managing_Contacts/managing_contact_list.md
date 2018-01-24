---
layout: page
weight: 80
title: Managing Contact Lists
navigation:
  show: true
seo:
  title: Managing Contact Lists
  override: true
  description: Directions on how to manage contact lists using Marketing Campaigns
---

  * [Viewing a Contact](#-Viewing-a-Contact)
  * [Editing a Contact](#-Editing-a-Contact)
  * [Managing Your List](#-Managing-Your-List)
  * [Organizing Your List](#-Organizing-Your-List)
  * [Delete a Specific Contact](#-Delete-a-Specific-Contact)
  * [Delete All Contacts](#-Delete-All-Contacts)


Managing contacts is an integral part of your marketing campaigns lifecycle. You can create lists for contacts, as well as view and edit each individual contact within your contact database

{% anchor h3 %}
Viewing a Contact
{% endanchor %}

To view a specific contact profile, find the contact in one of your lists or segments by searching your contact database. Then click the contact’s email address. You will then be able to view the email, engagement data, profile information, custom fields, and list associations for this contact.

{% info %}
Searches are case agnostic but must be done using a whole email address that includes an "@" and any top-level domain like ".com" or ".io".
{% endinfo %}

To view any custom fields you have assigned to this contact, or to view any lists that you have added this contact to, you may flip through the tabs beneath the Contact Details. You may either view all custom fields at once, or you can filter them by the following types: “Text”, “Date”, and “Number”.


{% anchor h3 %}
Editing a Contact
{% endanchor %}

When you are viewing a contact, click any of the Edit buttons to edit the contact's information within that section. This includes the SendGrid provided reserved fields, except email, any custom fields you’ve added for this contact, and any lists the contact is associated with.

*To edit the associated lists for your contact:*

1. Select the **Associated Lists** tab.
1. Enter or select the list you would like to use.
1. Click **Add**.

{% anchor h3 %}
Managing Your List
{% endanchor %}

Sending to a well-managed address list can drastically help improve your delivery. We have put together some simple steps and guidelines that will improve any senders list.

In your SendGrid Account there are different [Suppressions]({{root_url}}/User_Guide/Suppressions/index.html) lists. 

**Global Unsubscribes** - Addresses on this list are opted out of all mailing 
**Bounces** - Addresses that have failed to deliver to the recipient's inbox. Once an address has been added to this list, we do not attempt to deliver further messages to it, we will instead Drop them to protect your external reputation.
**Spam Reports** - Addresses that have marked your mail as spam
**Blocks** - Addresses that have blocked your mail temporarily, usually due to factors like a blacklisted IP address. You can attempt to resend to these addresses. 
**Invalid** - Addresses on this list are malformed and do not have a valid email address structure. (Ex. info.sendgrid.com, info@sendgridcom, info @ sendgrid.com)

Sending to email addresses listed in the Bounce, invalid, Spam, and Unsubscribe list will be automatically dropped by SendGrid. Feel free to remove these addresses from your lists to save money and time.

To avoid damaging your sender reputation, SendGrid recommends taking the following action:

**Remove Repeat Addresses** 
Sending the same message to the same address twice greatly increases their chance of submitting a spam complaint. Spam complaints will negatively impact your reputation and deliverability.

**Seek out the dead domains**
Many times these are used as spam traps and sending to them will ruin a sender’s deliverability. Write a script or make a list of the domains you are sending to and do an mx lookup via the command line or a service like http://mxtoolbox.com to find defunct domains, some of which may now be turned into spam traps.

**Remove Toxic and Role Email Addresses**
Find email addresses that are commonly used as spam traps or used to determine if you are sending spam. This means all role addresses (info@, sales@, help@, etc.) as well as common spam trap names (junk@, test@, asdf@, spam@, etc.).

Role Addresses email addresses are those that represent either a group of people within a company or the entire organization itself. These addresses are generally designed with a specific function in mind and are only intended to receive messages pertaining to that particular function. The majority of role addresses notify multiple people at once, and the person(s) in charge of monitoring these email accounts can change unexpectedly.

When someone signs up to receive emails at a role address they are also signing up everyone else with access to that address, so the chances of your messages being marked as spam rise significantly.

**Implement a Sunset Policy**
Making sure that you are continually reducing frequency and removing those addresses that are not engaging with your emails is critical to getting to, and staying in the inbox. We typically suggest removing addresses from your list who haven’t clicked/opened an email from you in the past 3-6 months. The sunset period can vary depending on your specific content and sending cadence.

We understand that is it hard for a business to forfeit potential customers but sending to an old address list has the potential to trash your deliverability and completely ruin your brand name.

What problems can arise:

**Spam trap hits** - Old addresses (or even entire domains) that have been abandoned may be recycled into spam traps. Once recycled, spam traps never opt in to receive email. So while an address may have opted in years ago, the spam trap will see your emails as unsolicited, determining that you are sending spam. You don’t want old addresses that are no longer interested in receiving your emails ruin your reputation so that new, engaged addresses don’t get them.

**Bounces** - Old addresses that have been taken out of commision will likely result in a bounce. Receiving mailboxes monitor how many bounces you have on their system and will reject your email if this volume is too high.

**Spam Complaints** - A recipient who is no longer interested in your email (and may not even remember opting in) is much more likely to report your email as spam. 

All of the above are key factors that influence how ESPs, ISPs, Reputation Monitors and Blacklists base their decisions to accept or deny mail.

{% anchor h2 %}
Organizing Your List
{% endanchor %}

**Segmentation**
List segmentation refers to the practice of customizing a larger master address list into smaller sub-lists categorized based on certain criteria with the goal of enhancing the level of email customization for your recipients. This allows you to gain more analytical insight to a specific campaign’s performance or isolate the deliverability impact among different campaigns.


**Segmenting by Type of Email**
You might like to segment your address list based on the campaigns you are running. This is a good practice if you are sending a mix of transactional/confirmation, notification, and newsletter emails to your users. Some of your users may want to opt-out of notifications or newsletters while still receiving more important transactional/confirmation emails.

**Segmenting by Acquisition Time and Engagement**
Another criteria for list segmentation is segregation by address acquisition time. Segmenting your list in this manner is helpful in personalizing your email campaigns. It can be helpful to have a list regarding recipients that you have not interacted with in a while (4 months or more). This list can be used for “win back” campaigns.

For help with segmenting by engagement, you can enable click and open tracking in your SendGrid account.

**Segmenting by IP Address**
It is wise to segregate these sublists so that each is sending on different IPs. For example, it is common to set up transactional/confirmation emails on a separate IP than your marketing emails as these are more prone to being responded to as spam. This will help protect the deliverability of your important emails from the potential harm due to the complaints from your more potentially risky marketing campaigns 

Also, separating your “win back” campaigns from your other email with a separate IP protects your other IP's reputation and deliverability. 

List segmentation is a great tool that can be used to power your email campaigns as well as protect your reputation as a sender. Happy sending!

{% anchor h3 %}
Delete a Specific Contact
{% endanchor %}

*To remove one or more contacts from a list:*

1. Navigate to the contact you wish to modify and click the Action Menu.
1. Click **Remove From List**.
   This option removes the contact from the list. To remove the contact completely, select **delete**.

{% anchor h3 %}
Delete All Contacts
{% endanchor %}

*To delete all of your contacts at once:*

 1. Navigate to your [Contacts page](https://sendgrid.com/marketing_campaigns/contacts) and hover over the Action Menu next to All Contacts.
 1. Click the trash can icon.
 1. Select the check box to confirm that you want to delete all contacts and then click **Delete**.

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Lists and Segmentation](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html)
- [Unsubscribe Groups](https://sendgrid.com/docs/User_Guide/Suppressions/advanced_suppression_manager.html)
- [Custom Fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)
