---
layout: page
weight: 90
title: Amazon Marketplace
group: platform-partners
navigation:
  show: true
---
SendGrid has partnered with Amazon to offer our email services on the [Amazon Marketplace](https://aws.amazon.com/marketplace/pp/B074CQY6KB). Built by developers for developers, SendGrid offers developers simple SMTP and API integrations to start sending in minutes. Non-technical users can leverage Marketing Campaign's intuitive interface to create, send, and analyze marketing emails.

Once you have an AWS account, you can to [subscribe to SendGrid](https://aws.amazon.com/marketplace/pp/B074CQY6KB) and access it directly from the [AWS Management Console](https://console.aws.amazon.com/). Once you’ve subscribed to SendGrid, you have access to the [SendGrid application](https://app.sendgrid.com/) and the APIs. Use the AWS Management Console if you want to reset your password, cancel your account, or manage bills.

## 	Getting started

*To quickly get started with SendGrid:*

- See [Getting Started With Marketing Campaigns]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/) for all of the tools you need to get started sending with the SendGrid application.
- Look at the [API Reference]({{root_url}}/api-reference/) for all of the API endpoints as well as information about using SMTP and the Webhooks.
- See the [API Libraries]({{root_url}}/for-developers/sending-email/libraries/) page for information about using the SendGrid code libraries in C#, Go, Java, Node.js, PHP, Python, and Ruby.

<call-out>

If you are using SendGrid through AWS, you cannot change your SendGrid username.

</call-out>

<call-out>

**Warm up your sending** - Since ISP spam filters look at volume as a significant factor when determining whether or not you are sending spam, we recommend that you begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and the way your customers treat the emails they receive from you.

</call-out>

### Pricing

There are two plans: AWS Basic and AWS Pro. These plans are billed on your AWS invoice. For more information, check out our[ AWS Marketplace page](https://aws.amazon.com/marketplace/pp/B074CQY6KB). Here's a monthly view of cost:

![]({{root_url}}/images/aws_pricing.png "AWS pricing")

### Adding a dedicated IP address

You can purchase IP addresses dedicated to your account. Since you are the only one sending email over this IP, your sending practices determine the sender reputation associated with this IP. You can purchase up to 3 IP addresses per month. If you need more than 3 IPs, then you should [contact support](https://support.sendgrid.com/hc/en-us).

You can only add a Dedicated IP Address if you are on an AWS Pro plan. To upgrade your plan, see [Upgrading or Downgrading Your Account](#upgrading-or-downgrading-your-account).

*To add a dedicated IP Address*:

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the SendGrid UI.
2. Click **Add a Dedicated IP**.
   ![]({{root_url}}/images/dedicated_ip_button.png "Dedicated IP button")
   This takes you to the Dedicated IP Addresses page
3. Next, click **Add an IP Address**.
4. Select the number of IP Addresses to add, and select whether you want to warm up your IP automatically. Warming up an IP gradually increases the amount of email sent over this IP over time to improve your email deliverability. For more information, see [Warming Up IPs]({{root_url}}/ui/sending-email/warming-up-an-ip-address/).
5. Click **Add**.

### Adding domain authentication and link branding

Sender authentication shows email providers that SendGrid has your permission to send emails on your behalf. Domain authentication works by pointing DNS entries from your domain registrar to SendGrid, which drastically increases your ability to deliver email and allows you to begin building a sender reputation for your domain and for your IP addresses. For more information on domain authentication, see [How to Set Up Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/).

### Adding subusers

You can only add Subusers if you are on an AWS Pro plan. To upgrade your plan, see [Upgrading or Downgrading Your Account](#upgrading-or-downgrading-your-account). Subusers are SendGrid accounts that belong to a parent account. They have their permissions and credit limits, which you assign as you create the Subusers. Subusers help you segment your email sending and API activity.

To get started with using Subusers, see the [Subusers overview]({{root_url}}/ui/account-and-settings/subusers/).

### Upgrading or downgrading your account

You can upgrade or downgrade your account from the [SendGrid UI](https://app.sendgrid.com/settings/billing).

*To change your account plan:*

1. Navigate to the [Plan & Billing Details page](https://app.sendgrid.com/settings/billing) in the SendGrid UI.
1. Select Upgrade to AWS Pro, or Downgrade to AWS Basic.

![]({{root_url}}/images/aws_upgrade.png "AWS upgrading or downgrading")

### Managing billing options

Manage your billing options from the [AWS Billing & Cost Management Dashboard](https://console.aws.amazon.com/billing/).

### Canceling your SendGrid subscription

*To remove SendGrid from your AWS account:*

1. Navigate to your [Software Subscriptions page](https://aws.amazon.com/marketplace/library?productType=saas&ref_=lbr_tab_saas) on AWS.
1. Click **Cancel Subscription** in the SendGrid section.

![]({{root_url}}/images/aws_cancel.png "AWS cancel button")

### Troubleshooting

If you run into issues with your AWS SendGrid account, you can contact our support team by [logging in here](https://support.sendgrid.com) and opening a support ticket.
