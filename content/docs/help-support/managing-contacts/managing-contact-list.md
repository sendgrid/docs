---
layout: page
weight: 80
title: Managing Contact Lists
navigation:
  show: true
seo:
  title: Managing Contact Lists
  override: true
  keywords: Marketing Campaigns Contacts, delete contacts, organize contacts
  description: Directions on how to manage contact lists using Marketing Campaigns
---
  * [Viewing a contact](#-Viewing-a-contact)
  * [Editing a contact](#-Editing-a-contact)
  * [Managing your list](#-Managing-Your-List)
   * [Delete unusable contacts](#-Delete-unusable-contacts)
   * [Delete a specific contact](#-Delete-a-specific-contact)
   * [Delete all contacts](#-Delete-all-contacts)

<iframe src="https://player.vimeo.com/video/227937591" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Managing contacts is an integral part of your marketing campaigns lifecycle. You can create lists for contacts, as well as view and edit each individual contact within your contact database

{% anchor h2 %}
Viewing a contact
{% endanchor %}

To view a specific contact profile, find the contact in one of your lists or segments by searching your contact database. Then click the contact’s email address. You will then be able to view the email, engagement data, profile information, custom fields, and list associations for this contact.

<call-out>

Searches are case agnostic but must be done using a whole email address that includes an "@" and any top-level domain like ".com" or ".io".

</call-out>

To view any custom fields you have assigned to this contact, or to view any lists that you have added this contact to, you may flip through the tabs beneath the Contact Details. You may either view all custom fields at once, or you can filter them by the following types: “Text”, “Date”, and “Number”.

{% anchor h2 %}
Editing a contact
{% endanchor %}

When you are viewing a contact, click any of the Edit buttons to edit the contact's information within that section. This includes the SendGrid provided reserved fields, except email, any custom fields you’ve added for this contact, and any lists the contact is associated with.

*To edit the associated lists for your contact:*

1. Select the **Associated Lists** tab.
1. Enter or select the list you would like to use.
1. Click **Add**.

{% anchor h2 %}
Managing your list
{% endanchor %}

Sending to a well-managed address list can drastically help improve your delivery. We have put together some simple steps and guidelines that will improve any senders list.

* [Suppressions](#-Identifying-Suppressions)
* [Delete unusable contacts](#-Delete-unusable-contacts)
* [Delete a specific contact](#-Delete-a-specific-contact)
* [Delete all contacts](#-Delete-all-contacts)

{% anchor h3 %}
Identifying Suppressions
{% endanchor %}

In your SendGrid Account there are different [Suppressions]({{root_url}}/help-support/sending-email/index-suppressions.html) lists.

**Global Unsubscribes** - Addresses on this list are opted out of all mailing
**Bounces** - Addresses that have failed to deliver to the recipient's inbox. Once an address has been added to this list, we do not attempt to deliver further messages to it, we will instead Drop them to protect your external reputation.
**Spam Reports** - Addresses that have marked your mail as spam
**Blocks** - Addresses that have blocked your mail temporarily, usually due to factors like a blacklisted IP address. You can attempt to resend to these addresses.
**Invalid** - Addresses on this list are malformed and do not have a valid email address structure. (Ex. info.sendgrid.com, info@sendgridcom, info @ sendgrid.com)

Emails sent to addresses listed in the Bounce, invalid, Spam, and Unsubscribe list are automatically dropped by SendGrid. Feel free to remove these addresses from your lists to save money and time.

{% anchor h3 %}
Delete unusable contacts
{% endanchor %}

It is common to have contacts that result in a group unsubscribe, block, bounce, invalid email address, or spam report. Attempting to send email to these contacts can negatively impact your reputation since these contacts do not want to (and will not) receive your marketing emails.

*To remove all of your unusable Marketing Campaigns contacts:*

1. When viewing your dashboard, navigate to the left-hand menu and click **Suppressions**.
1. Open a specific group, such as Bounces or Spam Reports, click the action menu in the upper right corner, then select **Download as CSV**.
1. Repeat step 2 for each of the groups that you want to remove (unsubscribes, spam reports, etc.) and merge each of those lists into a single CSV file.
1. Return to your dashboard, navigate to the left-hand menu and select **Marketing**, then **Contacts**.
1. In the upper right corner click **Add Contacts** and select **Upload CSV**.
1. Select **Create New List** and name it something obvious, like "Remove Invalid Emails."
1. Once uploaded, click the action menu to the right of that new list and select **Delete**.
1. Check the box indicating to delete "all contacts associated with this list."

{% anchor h3 %}
Delete a specific contact
{% endanchor %}

*To remove one or more contacts from a list:*

1. Navigate to the {All Contacts list](https://sendgrid.com/marketing_campaigns/ui/all_contacts).
1. Search for the contact you want to delete.
1. Click **delete** to remove the contact permanently.

<call-out type="warning">

Use this to permanently delete your recipients from all of your contact lists and all segments if required by applicable law.

</call-out>

{% anchor h3 %}
Delete all contacts
{% endanchor %}

*To delete all of your contacts at once:*

 1. Navigate to your [Contacts page](https://sendgrid.com/marketing_campaigns/contacts) and hover over the Action Menu next to All Contacts.
 1. Click the trash can icon.
 1. Select the check box to confirm that you want to delete all contacts and then click **Delete**.

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Segmentation](https://sendgrid.com/docs/help-support/managing-contacts/segmenting-your-contacts.html)
- [Unsubscribe Groups](https://sendgrid.com/docs/help-support/sending-email/index-suppressions.html)
- [Custom Fields](https://sendgrid.com/docs/help-support/sending-email/custom-fields.html)
