---
layout: page
weight: 0
title: Categories
group: smtp
navigation:
  show: true
---

You can add [categories]({{root_url}}/User_Guide/Email_Settings/categories.html) to the X-SMTPAPI header of the emails you send via SendGrid. This will allow you to track emails based on your own categorization system.

<call-out type="warning">

Categories must be in 7bit encoding using the US-ASCII character set.

</call-out>

<call-out>

Currently, there is no limit to the number of categories you can track. However, we recommend *no more than ~100 total unique categories* as this will increase your ease of use in the Statistics area. Additionally, a high rate of unique categories on your account can negatively impact the rate at which we process the messages you send.

</call-out>

<call-out type="warning">

Categories should be used to group messages together by broad topic. If you need to attach unique data or identifiers to a message, use [Unique Arguments]({{root_url}}/for-developers/sending-email/unique-arguments.html) instead.

</call-out>

## 	Example
 	
You can use SendGrid's [SMTP API]({{root_url}}/API_Reference/SMTP_API/) to add these categories to your email. The following should be added to the email's header:

<h4>Example Category Header</h4>
```json
{
  "category": "Example Category"
}
```

In this example, SendGrid would associate statistics for the email containing that header with the category **Example Category**.

  ## 	Limitations
 	
You can assign up to 10 categories per message:

```json
{
  "category": [
    "dogs",
    "animals",
    "pets",
    "mammals"
  ]
}
```
