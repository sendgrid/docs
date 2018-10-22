---
seo:
  title: Statistics Overview
  description: View and filter all of your SendGrid account email statistics.
  keywords: analytics-and-reporting, SendGrid analytics-and-reporting, analytics-and-reporting Overview, analytics-and-reporting UI
title: Statistics Overview
group: statistics
weight: 100
layout: page
navigation:
  show: true
---

<call-out>

Parent accounts will see aggregated statistics for their account and all subuser accounts. Subuser accounts will only see their own statistics.

</call-out>

<p>
Tracking your emails is an important part of being a good sender and learning about how your users interact with your email. This includes everything from basics of clicks and opens to looking at which browsers and mailbox providers your customers use.
</p>
<p>
We have broken up statistics in specific ways so that you can get at-a-glance data, as well as allowing you to get into the details of how your email is being used.
</p>

## 	Available Email Reports

<call-out>

The timezone for statistics pages is set in your [account settings]({{root_url}}/ui/account-and-settings/account/).

</call-out>

**Overview** - The overview is your at-a-glance statistics. We give you the highlight reel so that you can keep an eye out for any issues and make sure you’re on the right track.

**[Global Statistics]({{root_url}}/ui/analytics-and-reporting/global/)** - All of your statistics, aggregated in one place so you can see the high level view of everything.

**[Category Statistics]({{root_url}}/ui/analytics-and-reporting/categories/)** -You can define your categories when you send, so that you can view your email performance by category later.

**[Category Comparison]({{root_url}}/ui/analytics-and-reporting/category-comparison/)** - Compare the performance of emails from up to 10 categories against each other.

**[Subuser Statistics]({{root_url}}/ui/analytics-and-reporting/subuser/)** - You can segment your email to be sent by different subusers, which allows you to compare how each type or subset of your email is performing.

**[Subuser Comparison]({{root_url}}/ui/analytics-and-reporting/subuser-comparison/)**  - Compare the performance of emails from up to 10 subusers against each other.

**[Geographical]({{root_url}}/ui/analytics-and-reporting/geographic/)** - See where you get the best engagement and compare engagement by geographical region.

**[Email Clients and Devices]({{root_url}}/ui/analytics-and-reporting/device/)** - Find out which applications and devices your recipients use to view your mail and see the statistics for each.

**Mailbox Provider Statistics** - See all the statistics for the mailbox providers your recipients use.

**[Mailbox Provider Comparison]({{root_url}}/ui/analytics-and-reporting/mailbox-provider-comparison/)** - Compare the performance of emails by statistic and provider.

**[Browser Statistics]({{root_url}}/ui/analytics-and-reporting/browser/)** - See all the statistics for the web browsers your users view your emails from.

**[Browser Comparison]({{root_url}}/ui/analytics-and-reporting/browser-comparison/)** - Compare the performance of your emails by statistic and browser.

**[Parse Webhook]({{root_url}}/for-developers/parsing-email/inbound-email/)** - View the number of requests you have received via the Parse Webhook.


## 	Metrics
 	<p>
On the available statistics reports, you will find that your deliverability is broken down by the following metrics. Each one gives you a different piece of information about how SendGrid or your recipients interact with your email.
</p>
<p>

**[Blocks]({{root_url}}/glossary/blocks/)** - The number of emails that were not allowed to be delivered by ISPs.

**[Bounces]({{root_url}}/glossary/bounces/)** - The number of emails that bounced instead of being delivered.

**[Clicks]({{root_url}}/glossary/clicks/)** - The number of links that were clicked in your emails.

**[Delivered]({{root_url}}/glossary/deliveries/)** - The number of emails SendGrid was able to confirm were actually delivered to a recipient.

**Invalid Emails** - The number of recipients that you sent emails to, who had malformed email addresses or whose mail provider reported the address as invalid.

**[Opens]({{root_url}}/glossary/opens/)** - The total number of times your emails were opened by recipients.

**[Requests]({{root_url}}/glossary/request/)** - The number of emails you requested to send via SendGrid.

**[Spam Reports]({{root_url}}/glossary/spam-reports/)** - The number of recipients who marked your email as spam.

**[Unique Opens]({{root_url}}/glossary/opens/)** - The number of unique recipients who opened your emails.

**[Unique Clicks]({{root_url}}/glossary/clicks/)** - The number of unique recipients who clicked links in your emails.

**Unsubscribes** - The number of recipients who unsubscribed from your emails.

**Unsubscribe Drops** - The number of emails dropped by SendGrid because the recipient unsubscribed from your emails.


## Filters

These filters are available on most of the statistics pages. They will help you see your statistics in more or less details, depending on your needs.


**Metric Filters** - You can select all of the metrics or only some of them.

**Date Filters** - To display statistics between specific dates, choose your date range.

**Grouping Filter** - Display statistics grouped by day, week, or month.


## 	Top 5 Categories

  The Top 5 Categories report allows you to see your top 5 most used categories by number of requests. Switch your view by actual number of emails or percentage using the toggle at the top right of this section.


## 	Additional Resources

* [API Statistics Overview]({{root_url}}/API_Reference/Web_API_v3/Stats/index.html)

* [Advanced Analytics and Reporting]({{root_url}}/API_Reference/Web_API/Statistics/statistics_advanced.html)
