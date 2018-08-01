---
layout: page
weight: 0
title: Invalid Emails
group: delivery-optimization
seo:
  title: Invalid Emails
  description: When an email is malformed or a mailbox provider says the email is invalid, SendGrid will keep these reports for you.
  keywords: invalid emails, malformed emails
navigation:
  show: true
---

An invalid email occurs when you attempt to send email to an address that is formatted in a manner that does not meet internet email format standards or the email does not exist at the recipient's mail server. Examples include addresses without the “@” sign or addresses that include certain special characters and/or spaces. This response can come from our own server or the recipient mail server.

Before you send, SendGrid does a check against the format of the email address to attempt to verify its validity. If the recipient server checks the address and doesn't find it, they will send back a 550 bounce to say that this is an invalid email address.

The list provided here can be filtered by email address or date.

## 	Searching Invalid Emails by Date
 	
In the top right corner, you will see a calendar icon. Click this and choose the dates you would like to search between. Your recipient list will refresh, showing the invalid email address reports from between those dates.

## 	Removing Recipients From The List
 	
When you select the checkboxes next to the recipient names or select all, using the checkbox next to the search box, you will see a new button at the top of the page. From this list, you can choose to remove the selected recipients from the list.

## 	Download Invalid Emails as CSV
 	
You can download your list as a CSV by clicking the gear icon at the top of the page and selecting “Download CSV.” The file will download in your browser right away.

## 	Additional Resources
 	
- [Recipient Subscription Preferences]({{root_url}}/help-support/sending-email/recipient-subscription-preferences/)
- [Spam Reports]({{root_url}}/help-support/analytics-and-reporting/spam-reports/)
- [Invalid Emails API](https://sendgrid.com/docs/API_Reference/Web_API_v3/invalid_emails.html)
