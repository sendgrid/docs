---
comments: false
date: 2011-05-31 14:31:03
layout: page
slug: categories
title: Categories
wordpress_id: 961
---

Categories can help organize your email analytics by enabling you to "tag" emails by type.

Just as you can view the statistics on all your activity under the '[Statistics](/documentation/delivery-metrics/)' tab, you can go a step further and view the statistics on a particular category.

The events that can be associated with category include:



	
  * Emails sent

	
  * Clicks

	
  * Opens

	
  * Bounces

	
  * Spam Reports

	
  * Unsubscribes


The actual statistics included vary depending upon the set of enabled [Apps](/documentation/apps/). Emails sent, bounces and spam reports will always get tracked. Unsubscribes, Clicks, and Opens require that the associated App is enabled.

_**IMPORTANT: Currently, there is no limit to the number of categories you can track, but there is a limit of ten (10) categories that can be applied to each email you send.**_


## Examples


You can use SendGrid's [SMTPAPI](/documentation/api/smtp-api/) to add these categories to your email. The following should be added to the email's header:

`X-SMTPAPI: {"category": "Category Name"}`

In this example, SendGrid would associate statistics for the email containing that header with the category **Category Name**.
