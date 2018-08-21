---
seo:
  title: SendGrid Extension for Magento 2.0
  description: The official SendGrid extension allows any Magento 2 store to quickly integrate and send mail from their SendGrid account.
  keywords: Magento, SendGrid, Extension, partner, e-commerse, transactional email
title: SendGrid Extension for Magento 2.0
weight: 0
group: platform-partners
layout: page
navigation:
  show: true
---

This extension allows you to configure Magento 2.0 to send all emails using SendGrid. To get started, [click here](https://marketplace.magento.com/sendgrid-email-delivery-simplified.html)!

## 	Description

The official SendGrid extension for Magento 2.0 makes it easy to ensure delivery of your most important transactional emails. Purchase receipts, shipping confirmations, and password reset emails are at the core of how you engage with your customers, helping to fuel your store’s growth. Email delivery is our passion. Entrust our industry-leading email delivery platform, including world-class deliverability tools and expertise to make sure your transactional emails get to the inbox.

Transactional email is an important component of any email communication strategy. SendGrid relieves businesses of the cost and complexity of maintaining custom email systems. SendGrid provides reliable delivery, scalability and real-time analytics along with flexible APIs that make custom integration a breeze. SendGrid for Magento 2.0 allows you to choose between the SMTP relay or the Email API to send outgoing emails from your Magento installation.

## 	SendGrid Pricing Plans

Plans start at $9.95/month. Please see our [pricing page](https://sendgrid.com/partners/magento/) for more information.

For a free trial, [click here](https://sendgrid.com/partners/magento/)!

## 	Main Features

 ### 	Proven Deliverability

Trusted email deliverability features including email authentication, reputation monitoring, dedicated IP addresses, and more.

 ### 	Scale with Confidence

Our world-class email platform delivers over 30 billion emails per month for our customers.

 ### 	Support

[24/7 support](https://support.sendgrid.com) available to answer your email needs. We also provide a full library of self-support materials here.

 ### 	Reporting

Learn more about your shoppers’ engagement with performance feedback and real-time analytics on requests, deliveries, opens, bounces, unsubscribes, clicks, and more.

## 	What’s the functionality of your extension?

* Our extension easily integrates with your SendGrid API key and allows you to send your Magento email with confidence through our world class infrastructure.
* In addition to reliable delivery and scalability, our extension allows you have access to real-time analytics and insights for quick, well-informed decision making about your customers to grow your e-commerce store.
* Integrate easily with your SendGrid API key

## 	What makes your extension unique?

* SendGrid pioneered the cloud-based email industry, and we are trusted by leading senders like Uber, AirBnB, and Spotify to achieve optimal deliverability at scale.
* Flexible API and SMTP setup for for easy transactional email Integration.
* Key email deliverability features including email authentication, reputation monitoring, dedicated IP addresses, and more.
* Real-time analytics and reporting including opens, clicks, bounces, unsubscribe tracking, and more.
* Leverage our step-by-step [documentation]({{root_url}}/api-reference/) or get quick help from our [24/7 Support Team](https://support.sendgrid.com).
* This official extension was built for M2 by SendGrid’s dedicated partner-focused teams for continued management and future development.

## 	Configuration

First, log in to your **Magento Dashboard**, then click  **System** in the left hand navigation bar. Select **SendGrid** and click **Settings**. Here, you can enter your SendGrid account settings.

1. To get the SendGrid plugin running after activation, navigate to the plugin's settings page and enter your **SendGrid API Key**. Next, choose how your email will be sent (SMTP Relay or Email API).

    ![]({{root_url}}/images/magento_1.jpg)

2. You can also set default values for the "From Name", "Sending Address" and the "Reply Address", so that you don't need to enter values for these headers every time you want to send an email from your application.

    ![]({{root_url}}/images/magento_2.png)

    ![]({{root_url}}/images/magento_3.jpg)


3. Emails are automatically tracked and tagged to provide you deliverability and engagement statistics viewable from the **SendGrid Dashboard**. You can also add other [categories]({{root_url}}/ui/analytics-and-reporting/categories/) for your emails in the field Categories.

    ![]({{root_url}}/images/magento_4.png)

4. Set the **template ID** to be used in all your emails on the settings page.

    ![]({{root_url}}/images/magento_5.png)


5. Next, select the [unsubscribe group]({{root_url}}/ui/sending-email/unsubscribe-groups/).

    ![]({{root_url}}/images/magento_6.png)

6. If you would like to [configure categories for statistics]({{root_url}}/ui/analytics-and-reporting/categories/), you can configure it by setting the **Categories** field under **Statistics Settings**.

    ![]({{root_url}}/images/magento_7.png)

 ### 	Statistics

Log into your **Magento Dashboard**, then click **System** in the left hand navigation bar. Select **SendGrid** and click **Statistics** to see your statistics.

  ![]({{root_url}}/images/magento_8.jpg)

 ### 	Requirements

* Magento Community Edition 2.x or Magento Enterprise Edition 2.x

## 	Frequently Asked Questions

 ### 	What credentials do I need to add on settings page?

[Create a SendGrid account](https://sendgrid.com/partners/magento/) and [generate a new API key](https://app.sendgrid.com/settings/api_keys). For more information about API Keys, [click here]({{root_url}}/ui/account-and-settings/create-and-manage-api-keys/).

 ### 	What permissions should my API keys have?

Your API Key must have  the following permissions:

<table class="table">
  <tr><td>Mail Send</td><td>Full Access</td></tr>
  <tr><td>Stats</td><td>Read Access</td></tr>
  <tr><td>Template Engine</td><td>Read Access</td></tr>
  <tr><td>Unsubscribe Groups</td><td>Read Access</td></tr>
</table>
