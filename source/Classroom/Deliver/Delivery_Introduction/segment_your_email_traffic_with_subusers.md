---
seo:
  title: Segment Your Email Traffic with Subusers
  description: Use subusers to segments your mail streams more precisely...
  keywords: segmentation, subuser, silver, subaccount, account
title: Segment Your Email Traffic with Subusers
weight: 0
layout: page
navigation:
  show: true
---

If you have a Pro or Premier account at SendGrid then you have the ability to segment your email traffic with us through a combination of subuser accounts and whitelabels. Account segmentation is usually done to keep [marketing]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html) and [transactional]({{root_url}}/Glossary/transactional_email.html) email traffic separate. This allows for more organized and useful statistics, and an easier understanding of account performance. It also allows for individualized settings and feature management on a per account basis. Segmentation can even be established at the IP level, which, when combined with subusers, can fully separate email traffic so that they are separate entities all together.

## Basic Subuser Segmentation
The first way to segment your email traffic involves creating a subuser. Let's say you have both marketing and transactional emails going out of the same account. By creating a subuser you can choose to move either your marketing or transactional traffic and send it separately through this new subuser account. This would allow you to keep the two types of email traffic separated for the most part; separate statistics for marketing and transactional email traffic, separate account-based features and application management, and separate credentials in order to control each account's traffic flow.
{}
- Allows for separation of email traffic
- Separation of features and settings
- Separation of statistics

## Subuser Segmentation with an Additional IP Address

If you have the ability to create subusers then you also have the ability to [purchase additional dedicated IP addresses]({{root_url}}/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html) for $20 each per month. The more reliable way to segment your email traffic involves creating a new subuser and purchasing a new IP address through which to send this subuser's traffic. This type of segmentation allows for complete separation of your email traffic. By adding a new, dedicated IP address to this new subuser you are not only able to keep separate stats, settings, and traffic, but you also have separate IP reputations, as well as the ability to create separate [whitelabel]({{root_url}}/Classroom/Basics/Whitelabel/index.html) settings for each account. This is a very crucial aspect of segmentation for users who want to ensure that their marketing emails do not negatively affect their other streams of traffic.

- Allows for complete separation of email traffic
- Separation of application and features per account
- Easier statistics separation
- Account individual IP reputation
- Control individual domain reputation

{% info %}
You can also use our [IP Pooling feature]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_pools.html) to help you segment your traffic. More information can be found [here]({{root_url}}/Classroom/Send/Who_You_Can_Send_To/segmenting_traffic.html).
{% endinfo %}
