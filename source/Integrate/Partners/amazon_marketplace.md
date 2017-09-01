---
layout: page
weight: 90
title: Amazon Marketplace
navigation:
  show: true
---

{% anchor h2 %}
Amazon Marketplace
{% endanchor %}

SendGrid has partnered with Amazon to offer our email services on the [Amazon Marketplace](https://console.aws.amazon.com/). Built for developers and designed for marketers, SendGrid offers developers simple SMTP and API integrations while non-technical users can leverage an intuitive interface to create, send, and analyze marketing emails.

Once you have an AWS account, you can to [subscribe to SendGrid](https://aws.amazon.com/marketplace/pp/B074CQY6KB) and access it directly from the [AWS Management Console](https://console.aws.amazon.com/). Once you’ve subscribed to SendGrid, you have access to the [SendGrid application](https://app.sendgrid.com/), and the APIs. However, use the AWS Management Console if you want to reset your password, cancel your account, or manage billing.

{% anchor h3 %}
Pricing
{% endanchor %}

There are two plans: AWS Basic, and AWS Pro. For more information, check out our[ AWS Marketplace page](https://aws.amazon.com/marketplace/pp/B074CQY6KB).

A price unit….

{% anchor h3 %}
Getting Started
{% endanchor %}

*To quickly get started with SendGrid:*
* Check out [Getting Started With Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html) for all of the tools you need to get started sending with the SendGrid application.
* Look at the [API Reference]({{root_url}}/API_Reference/api_v3.html) for all of the API endpoints as well as information about using SMTP and the Webhooks.
* See the [API Libraries](({{root_url}}/Integrate/libraries.html) page for information about using the SendGrid code libraries in C#, Go, Java, Node.js, PHP, Python, and Ruby.

{% info %}
**Tip: Warm up your sending**
Since ISP spam filters look at volume as a significant factor when determining whether or not you are sending spam, we recommend that you begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you.
{% endinfo %}

{% anchor h3 %}
Managing your account
{% endanchor %}

- [Adding a Dedicated IP Address](#-Adding-a-Dedicated-IP-Address)
- [Adding Subusers](#-Adding-Subusers)
- [Adding Domain and Link Whitelabels](#-Adding-Domain-and-Link-Whitelabels)
- [Upgrading or Downgrading Your Account](#-Upgrading-or-Downgrading-Your-Account)
- [Managing Billing Options](#-Managing-Billing-Options)
- [Canceling Your SendGrid Subscription](#-Canceling-Your-SendGrid-Subscription)
- [Troubleshooting](#-Troubleshooting)

{% anchor h3 %}
Adding a Dedicated IP Address
{% endanchor %}

You can purchase IP addresses that are dedicated to your account. Since you are the only one sending email over this IP, your sending practices determines the sender reputation associated with this IP. You can purchase up to 3 IP addresses per month. If you need more than 3 IPs, then you should [contact support](https://support.sendgrid.com/hc/en-us).

You can only add a Dedicated IP Address if you are on an AWS Pro plan. To upgrade your plan, see [Upgrading or Downgrading Your Account](#-Upgrading-or-Downgrading-Your-Account).

*To add a dedicated IP Address*:

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the SendGrid UI.
1. Click **Add a Dedicated IP**. 
   ![]({{root_url}}/images/dedicated_ip_button.png "Dedicated IP button")
   This takes you to the Dedicated IP Addresses page 
1. Next, click **Add an IP Address**.
1. Select the number of IP Addresses to add, and select whether you want to warm up your IP automatically. Warming up an IP gradually increases the amount of email sent over this IP over time to improve your email deliverability. For more information, see [Warming Up IPs]({{root_url}}/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html).
1. Click **Add**.

{% anchor h3 %}
Adding Domain and Link Whitelabels 
{% endanchor %}

Whitelabeling shows ISPs that SendGrid has your permission to send emails on your behalf. Whitelabeling works by pointing DNS entries from your domain registrar to SendGrid, which drastically increases your ability to deliver email and allows you to begin building a sender reputation for your domain and for your IP addresses. For more information, see [our guides on setting up Domain and Link whitelabels]({{root_url}}/User_Guide/Settings/Whitelabel/index.html)

{% anchor h3 %}
Adding Subusers
{% endanchor %}

You can only add Subusers if you are on an AWS Pro plan. To upgrade your plan, see [Upgrading or Downgrading Your Account](#-Upgrading-or-Downgrading-Your-Account). Subusers are SendGrid accounts that belong to a parent account. They have their permissions and credit limits, which you assign as you create the subusers. Subusers help you segment your email sending and API activity.

To get started with using Subusers, see the [Subusers overview]({{root_url}}/User_Guide/Settings/Subusers/index.html).

{% anchor h3 %}
Upgrading or Downgrading Your Account
{% endanchor %}

You can upgrade or downgrade your account from the [SendGrid UI](https://app.sendgrid.com/settings/billing).

*To change your account plan:*

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing)in the SendGrid Customer Portal.
1. Select Upgrade to AWS Pro, or Downgrade to AWS Basic. 

{% anchor h3 %}
Managing Billing Options
{% endanchor %}

Manage your billing options from the [AWS Billing & Cost Management Dashboard](https://console.aws.amazon.com/billing/).

{% anchor h3 %}
Canceling your SendGrid Subscription
{% endanchor %}

*To remove SendGrid from your AWS account:*

1. Navigate to the your [Software Subscriptions page](https://aws.amazon.com/marketplace/library?productType=saas&ref_=lbr_tab_saas) on AWS.
1. Click *Cancel Subscription* in the SendGrid section.
            
![]({{root_url}}/images/aws_cancel.png "AWS cancel button")

{% anchor h3 %}
Troubleshooting
{% endanchor %}