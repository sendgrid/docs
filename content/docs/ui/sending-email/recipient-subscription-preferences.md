---
layout: page
weight: 0
title: Recipient Subscription Preferences
group: tracking
seo:
  title: Recipient Subscription Preferences
  description: When your users unsubscribe they will see a very specific page where they can manage their subscriptions with your emails.
  keywords: unsubscribe page, suppression page, recipient unsubscribe
navigation:
  show: true
---

Emails that are sent with an unsubscribe group specified will have two links at the bottom of the email; an “Email Preferences” link, and an “Unsubscribe” link.

If you do not specify an unsubscribe group when sending an email, the unsubscribe link will act as a global unsubscribe. This means that the recipient will no longer get any emails at all, including potentially important emails like password resets. To avoid this, create unsubscribe groups.

## 	The Unsubscribe Link

When a recipient clicks the Unsubscribe link, they will be asked to confirm their choice and then will be added to the Global Unsubscribe list.

## 	The Email Preferences Link

If you choose not to use substitution tags, your emails will automatically have an Email Preferences link, which when clicked will show recipients their personalized Email Preferences page. From here, recipients will be able to see all of your Unsubscribe Groups and their descriptions. They will then be able to choose whether or not they want to receive those types of emails.

 ### 	Manage Email Preferences

You can also choose to manually add the `<%asm_preferences_url%>` tag to your email. We will automatically replace that tag with the text "Manage Email Preferences" wherever the tag is found in your email. This will allow your recipients to see your Unsubscribe Groups in a [Subscription Preference page]({{root_url}}/ui/sending-email/recipient-subscription-preferences/) and then choose which groups they are interested in.

Alternatively, you can use the `<%asm_preferences_raw_url%>` substitution tag. This will be replaced with just the URL pointing to your [Subscription Preference page]({{root_url}}/ui/sending-email/recipient-subscription-preferences/) without the hyperlinked text "Manage Email Preferences".

For more substitution tags, please see our [transactional templates]({{root_url}}/ui/sending-email/create-and-edit-transactional-templates/#adding-unsubscribe-links-to-a-template).

## 	Additional Resources

- [Spam Reports]({{root_url}}/ui/analytics-and-reporting/spam-reports/)
