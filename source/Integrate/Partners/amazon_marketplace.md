---
layout: page
weight: 90
title: Amazon Marketplace
navigation:
  show: true
---

SendGrid has partnered with Amazon to offer our email services [on the Amazon Marketplace](link to our marketplace page). Built for developers and designed for marketers, SendGrid offers developers simple SMTP and API integrations while non-technical users can leverage an intuitive interface to create, send, and analyze marketing emails. 

Once you have an AWS account, you can to subscribe to SendGrid and access it directly from the AWS Management Console. You have access to the SendGrid Marketing Campaigns Application, and the APIs. However use the AWS Management Console if you want to reset your password, cancel your account, or manage billing. 

{% anchor h2 %}
Pricing
{% endanchor %}

There are two plans: AWS Basic, and AWS Pro. For more information, check out our [AWS pricing page]().

{% anchor h2 %}
Getting Started
{% endanchor %}

*To quickly get started with SendGrid:*

* Check out [Getting Started With Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html) for all of the tools you need to get started sending with the SendGrid Customer Portal.
* Look at the [API Reference]({{root_url}}/API_Reference/api_v3.html) for all of the API endpoints as well as information about using SMTP and the Webhooks.
* See the [API Libraries]({{root_url}}/Integrate/libraries.html) page for information about using the SendGrid code libraries in C#, Go, Java, Node.js, PHP, Python, and Ruby.

{% anchor h2 %}
Managing your account
{% endanchor %}

* [Adding a Dedicated IP Address](#-Adding-a-Dedicated-IP-Address)
* [Upgrading or Downgrading Your Account](#-Upgrading-or-Downgrading-Your-Account)
* [Managing Billing Options](#-Managing-Billing-Options)
* [Canceling your SendGrid Subscription](#-Canceling-your-SendGrid-Subscription)

{% anchor h3 %}
Adding a Dedicated IP Address
{% endanchor %}

You can purchase IP addresses that are dedicated to your account. Since you are the only one sending email over this IP, your sending practices determines the sender reputation associated with this IP. 

You can only add a Dedicated IP Address if you are on an AWS Pro plan. To upgrade your plan, see [Upgrading or Downgrading Your Account](#-Upgrading-or-Downgrading-Your-Account).

*To add a dedicated IP Address:*

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the SendGrid Customer Portal.
1. Click **Add a Dedicated IP**.
   ![]({{root_url}}/images/dedicated_ip_button.png "Dedicated IP button")
   </br> This takes you to the Dedicated IP Addresses page
   </br>
1. Next, click **Add an IP Address**
1. Select the number of IP Addresses to add, and select whether you want to warm up your IP automatically. Warming up an IP gradually increases the amount of email sent over this IP over time to improve your email deliverability. To use automatic warm-up, you must have at least one other warm IP to handle the overflow traffic from the IP being warmed up.
1. Click **Add**.

{% anchor h3 %}
Upgrading or Downgrading Your Account
{% endanchor %}

You can upgrade or downgrade your account from the SendGrid Customer Portal.

*To change your account plan:*

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the SendGrid Customer Portal.
1. Select **Upgrade** to AWS Pro, or **Downgrade** to AWS Basic.

{% anchor h3 %}
Managing Billing Options
{% endanchor %}

Manage your billing options from the [AWS Billing & Cost Management Dashboard](https://console.aws.amazon.com/billing/home?source=awsmktplace#/).

On software subscription page?

{% anchor h3 %}
Canceling your SendGrid Subscription
{% endanchor %}

*To remove SendGrid from your AWS account:*

1. Navigate to the [Your Software Subscriptions](https://aws.amazon.com/marketplace/library?productType=saas&ref_=lbr_tab_saas) page on AWS.
1. Click **Cancel Subscription** in the SendGrid section.
   ![]({{root_url}}/images/aws_cancel.png "AWS cancel button")
