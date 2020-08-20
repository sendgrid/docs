---
seo:
  title: Marketing Campaigns Statistics Overview
  description: Understand each statistic available for Twilio SendGrid Marketing Campaigns.
  keywords: analytics-and-reporting, SendGrid analytics-and-reporting, analytics-and-reporting Overview, analytics-and-reporting UI, marketing campaigns
title: Marketing Campaigns Statistics Overview
group: statistics
layout: page
navigation:
  show: true
---

As a Marketing Campaigns customer, you can export statistics about your Single Sends and Automations. The following statistics are available for export in comma separated values (CSV) format.

Stats marked with an asterisk, \*, are also displayed within the SendGrid App's user interface (UI). Stats that are displayed in the UI for A/B Testing only are marked with a double asterisk, \*\*.

## Statistics

### Requests\*

The number of emails you asked Marketing Campaigns to deliver. Each attempt to send email to your customers via SendGrid is considered a [request]({{root_url}}/glossary/request/).

### Delivered\*

The number of emails that were accepted by the receiving inbox server. Delivered is calculated as the number of emails requested minus the number of emails that were [suppressed]({{root_url}}/ui/sending-email/index-suppressions/), [bounced]({{root_url}}/glossary/bounces/), or [blocked]({{root_url}}/glossary/blocks/). See our [delivery]({{root_url}}/glossary/deliveries/) glossary entry for more about email delivery and deliverability.

- Please note that delivered doesn’t necessarily mean your email hit the inbox, just that it was accepted by the receiving server and wasn’t bounced or rejected. Mailbox providers can accept “delivery” of a message and place it in the spam folder or other destinations outside of recipients’ main/primary inboxes.
- To view the cumulative Delivered Rate (Delivered/Requests) in the SendGrid App as a cumulative percentage to-date, click the action menu and choose “View stats as percentages.”

### Total Opens\*\*

The number of times that your email was opened, including multiple opens by the same recipient. See our [Total Opens]({{root_url}}/glossary/opens/) glossary entry for more about total opens and unique opens.

- In legacy Marketing Campaigns, this is called “Opens.”

### Daily Total Open Rate

Calculated by dividing the Total Opens by Delivered for each day in your CSV export.

- In legacy Marketing Campaigns, this is called “Daily Open Rate.”

### Cumulative Total Open Rate

Calculated by aggregating the number of Total Opens on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- In legacy Marketing Campaigns, this is called “Cumulative Open Rate.”

### Unique Opens\*

The number of unique recipients that opened your email, regardless of how many times an individual may have opened the email. Learn more about opens and unique opens in our [Unique Opens]({{root_url}}/glossary/opens/) glossary entry.

### Daily Unique Open Rate

Calculated by dividing the Unique Opens by Delivered for each day in your CSV export.

### Cumulative Unique Open Rate\*

Calculated by aggregating the number of Unique Opens on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- To view in the UI as a cumulative percentage to-date, click the action menu and choose “View stats as percentages”

### Total Clicks\*\*

The number of times that recipients clicked within your email, including multiple clicks by the same recipient on the same links.

- In legacy Marketing Campaigns, this is called “Clicks.”

### Daily Total Click Rate

Calculated by dividing the Total Clicks by Delivered for each day in your CSV export. This is also commonly referred to as the Click Through Rate.

- In the email marketing industry, Unique Click Rate is commonly referred to as Total Click Through Rate.
- In legacy Marketing Campaigns, this is called “Daily Click Rate.”

### Cumulative Total Click Rate

Calculated by aggregating the number of Total Clicks on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- In the email marketing industry, Unique Click Rate is commonly referred to as Total Click Through Rate.
- In legacy Marketing Campaigns, this is called “Cumulative Click Rate.”

### Unique Clicks\*

The number of unique recipients that clicked your email, regardless of how many times an individual may have clicked within the email.

### Daily Unique Click Rate

Calculated by dividing the Unique Clicks by Delivered for each day in your CSV export.

- In the email marketing industry, Unique Click Rate is commonly referred to as Click Through Rate.

### Cumulative Unique Click Rate\*

Calculated by aggregating the number of Unique Clicks on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- In the email marketing industry, Unique Click Rate is commonly referred to as Click Through Rate.
- To view in the UI as a cumulative percentage to-date, click the action menu and choose “View stats as percentages”

### Daily Unique Click-to-Open Rate\*\*

Calculated by dividing the Unique Clicks by Unique Opens for each day in your CSV export.

- In legacy Marketing Campaigns, this is called “CTR” or “Click Through Rate”

### Daily Total Click-to-Open Rate\*\*

Calculated by dividing the Total Clicks by Total Opens for each day in your CSV export.

- In legacy Marketing Campaigns, this is called “TCTR” or “Total Click Through Rate”

### Bounces\*

The number of emails that bounced instead of being delivered. Learn more about bounces in our [Bounces]({{root_url}}/glossary/bounces/) glossary entry.

### Daily Bounce Rate

Calculated by dividing the Bounces by Delivered for each day in your CSV export.

### Cumulative Bounce Rate\*

Calculated by aggregating the number of Bounces on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- To view in the UI as a cumulative percentage to-date, click the action menu and choose “View stats as percentages”

### Bounce Drops

The number of emails that Marketing Campaigns [dropped]({{root_url}}/glossary/drops/) or did not send to because the recipient is on your Bounced list.

### Spam Reports\*

The number of recipients who marked your email as spam.

### Daily Spam Reports Rate

Calculated by dividing the Spam Reports by Delivered for each day in your CSV export.

### Cumulative Spam Reports Rate\*

Calculated by aggregating the number of Bounces on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- To view in the UI as a cumulative percentage to-date, click the action menu and choose “View stats as percentages”

### Spam Report Drops

The number of emails that Marketing Campaigns [dropped]({{root_url}}/glossary/drops/) or did not send because the recipient is on your Spam Report list.

### Unsubscribes\*

The number of recipients who chose to unsubscribe from within the specific email.

### Daily Unsubscribe Rate

Calculated by dividing the Unsubscribes by Delivered for each day in your CSV export.

### Cumulative Unsubscribe Rate\*

Calculated by aggregating the number of Unsubscribes on a given day with the preceding days, and dividing that by the aggregate of Delivered emails for that day and preceding days.

- To view in the UI as a cumulative percentage to-date, click the action menu and choose “View stats as percentages.”

### Invalid Emails

The number of recipient email addresses you attempted to send to that were not formatted correctly. Learn more in our [Invalid Emails]({{root_url}}/glossary/invalid-email/) glossary entry.
