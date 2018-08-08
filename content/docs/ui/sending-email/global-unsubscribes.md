---
layout: page
weight: 0
title: Global Unsubscribes
group: tracking
seo:
  title: Global Unsubscribes
  description: Recipients can unsubscribe from everything you send, rather than just a single group.
  keywords: Global suppressions, global unsubscribes, global email unsubscribe, global email suppression
navigation:
  show: true
---

Global unsubscribes happen when a recipient indicates that they would like to opt out from any email that you send by clicking on the [Unsubscribe From All Emails link](#global-unsubscribe-substitution-tags) within your emails. The list provided here can be filtered by email address or date.

## 	Searching Global Unsubscribes by Date

In the top right corner, you will see a calendar icon. Click this and choose the unsubscribe dates you would like to search between. Your recipient list will refresh, showing the recipients who unsubscribed between these dates.

## 	Removing Recipients From The List

When you select the checkboxes next to the recipient names or select all, using the checkbox next to the search box, you will see a new button at the top of the page. From this list, you can choose to remove the selected recipients from the list.

## 	Download Global Unsubscribes as CSV

*To download your Global Unsubscribe list as a CSV:*

1. Navigate to the Unsubscribe Groups page and locate the list you want to download.
1. Click the action menu next to the list.
1. Select **Export**. The file will download in your browser right away.

 ### 	Global Unsubscribe Substitution Tag

When you add the `<%asm_global_unsubscribe_url%>` tag to your email, we will replace that tag with the text "Unsubscribe From All Emails", wherever the tag is found in your email. This will allow your recipient to be globally unsubscribed from all of your emails.

Alternatively, you can use the `<%asm_global_unsubscribe_raw_url%>` tag, which will be replaced with only the global unsubscribe URL without the hyperlinked text "Unsubscribe From All Emails".

## 	Using the API

You can manage your Global Unsubscribes via the [Global Suppressions API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/global_suppressions.html).

## 	Additional Resources

- [Global unsubscribes vs. Group Unsubscribes]({{root_url}}/ui/analytics-and-reporting/subscription-tracking/)
- [Group Unsubscribes]({{root_url}}/ui/sending-email/group-unsubscribes/)
- [Invalid Emails]({{root_url}}/ui/sending-email/index-suppressions/)
