---
layout: page
weight: 0
title: Group Unsubscribes
group: tracking
seo:
  title: Group Unsubscribes
  description: Allow recipients to unsubscribe from specific types of email you send, rather than everything you send, and stay out of the spam folder.
  keywords: Group suppressions, Group unsubscribes, Group email unsubscribe, Group email suppression
navigation:
  show: true
---

A group unsubscribe happens when a recipient indicates that they would like to opt out from a specific type of email that you send via the [Unsubscribe Groups link](#-Group-Unsubscribe-Substitution-Tag) from within your email. The list provided here can be filtered by email address or date.

## 	Searching Group Unsubscribes by Date
 	
In the top right corner, you will see a calendar icon. Click this and choose the unsubscribe dates you would like to search between. Your recipient list will refresh, showing the recipients who unsubscribed between these dates.

## 	Download Group Unsubscribes as CSV
 	
You can download your Group Unsubscribe list as a CSV by clicking the gear icon at the top of the page and selecting “Download CSV”. The file will download in your browser right away.

## 	Removing Recipients From The List
 	
When you select the checkboxes next to the recipient names or select all, using the checkbox next to the search box, you will see a new button at the top of the page. From this list, you can choose to remove the selected recipients from the list.

 ### 	Group Unsubscribe Substitution Tag
 	
When you add the `<%asm_group_unsubscribe_url%>` tag to your email, we will replace that tag with the text "Unsubscribe From This List", wherever the tag is found in your email. This link will allow your recipients to unsubscribe from the unsubscribe group that you attached to this email.

Alternatively, you can use the `<%asm_group_unsubscribe_raw_url%>` tag which will be replaced with only the group unsubscribe URL without the hyperlinked text "Unsubscribe From This List".

For more substitution tags, please see our [transactional templates]({{root_url}}/help-support/sending-email/create-and-edit-transactional-templates/#-Adding-unsubscribe-links-to-a-template).

## 	Using the API
 	
You can manage your Global Unsubscribes via the [Group Suppressions API]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html).

## 	Additional Resources
 	
- [Global unsubscribes vs. Group Unsubscribes]({{root_url}}/help-support/sending-email/index-suppressions/#-Suppressions-vs--Unsubscribes)
- [Global Unsubscribes]({{root_url}}/help-support/sending-email/global-unsubscribes/)
- [Invalid Emails]({{root_url}}/help-support/sending-email/invalid-emails/)
