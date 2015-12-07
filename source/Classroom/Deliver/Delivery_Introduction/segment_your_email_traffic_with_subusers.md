---
seo:
  title: Segment Your Email Traffic with Subusers
  description: Segment Your Email Traffic with Subusers
  keywords: segmentation, subuser, silver, subaccount, account
title: Segment Your Email Traffic with Subusers
weight: 0
layout: page
zendesk_id: 202395168
navigation:
  show: true
---

If you have a Pro plan or higher at SendGrid then you have the ability to segment your email traffic with us through a combination of subuser accounts and whitelabels. Account segmentation is usually done to keep [marketing](http://sendgrid.com/docs/VidGrid/Marketing_Emails/Design/newsletter_basics.html) and [transactional](http://sendgrid.com/mkt/assets/pdfs/SendGrid_Leveraging_Email.pdf) email traffic separate. This allows for more organized and useful statistics, and an easier understanding of account reputations. It also allows for individualized application and feature management on a per account basis. Segmentation can even be established at the IP level, which, when combined with subusers, can fully separate email traffic so that they are separate entities all together.

## Basic Subuser Segmentation

The first way to segment your email traffic involves creating a subuser. Let's say you have both marketing and transactional emails going out of the same account. By creating a subuser you can choose to move either your marketing or transactional traffic and send it separately through this new subuser account. This would allow you to keep the two types of email traffic separated for the most part; separate statistics for marketing and transactional email traffic, separate account-based features and application management, and separate credentials in order to control each account's traffic flow.

- Allows for separation of email traffic
- Separation of applications and features
- Separation of statistics

## Subuser Segmentation with an Additional IP Address

If you have the ability to create subusers then you also have the ability to purchase additional dedicated IP addresses for $20 each per month. The more reliable way to segment your email traffic involves creating a new subuser and purchasing a new IP address through which to send this subuser's traffic. This type of segmentation allows for complete separation of your email traffic. By adding a new, dedicated IP address to this new subuser you are not only able to keep separate stats, application settings, and traffic, but you also have separate IP reputations, as well as the ability to create separate [whitelabel](https://sendgrid.zendesk.com/hc/en-us/articles/200548228) settings for each account. This is a very crucial aspect of segmentation for users who want to ensure that their marketing emails do not negatively affect their other streams of traffic.

- Allows for complete separation of email traffic
- Separation of application and features per account
- Easier statistics separation
- Account individual IP reputation
- Control individual domain reputation

{% info %}
You can also use our [IP Pooling feature]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_pools.html) to help you segment your traffic. More information can be found [here]({{root_url}}/Classroom/Send/Who_You_Can_Send_To/segmenting_traffic.html).
{% endinfo %}
