---
layout: page
weight: 0
title: Blocks
seo:
  title: Blocks
  description: When your email has been blocked by an ISP or your IP is on a blacklist.
  keywords: blocks, bounces, hard bounces, blacklists, ISP Blocks, Mail provider blocks
navigation:
  show: true
---

[Blocks]({{root_url}}/glossary/blocks/) happen when your message was rejected for a reason related to the message, not the recipient address. This can happen when your mail server IP address has been added to a blacklist or blocked by an ISP, or if the message content is flagged by a filter on the receiving server.

The “Reason on the Block” will clarify what the exact reason is. Typically, it’s possible to have your IP address removed from a blacklist, and some lists automatically do this after a period of time. Message content can be modified to correct a filtered block.

<call-out>

Unlike addresses on our other suppression lists, new messages to blocked addresses will be attempted, as the message content is likely different, and may not be blocked.

</call-out>

The list provided here can be filtered by email address or date.

## 	Searching Blocks by Date

In the top right corner, you will see a calendar icon. Click this and choose the dates you would like to search between. Your recipient list will refresh, showing the email addresses that were blocked between these dates as well as the block reason.

## 	Removing Recipients from The List

When you select the checkboxes next to the recipient names or select all, using the checkbox next to the search box, you will see a new button at the top of the page. From this list, you can choose to remove the selected recipients from the list.

## 	Download Blocks as CSV

You can download your Global Unsubscribe list as a CSV by clicking the gear icon at the top of the page and selecting “Download CSV.” The file will download in your browser right away.

## 	Additional Resources

- [Bounces]({{root_url}}/help-support/sending-email/bounces/)
- [Global Unsubscribes]({{root_url}}/help-support/sending-email/global-unsubscribes/)
- [Web API and Blocks]({{root_url}}/API_Reference/Web_API/blocks.html)
