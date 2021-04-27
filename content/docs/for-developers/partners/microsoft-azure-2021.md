---
seo:
  title: Sending Email with Microsoft Azure 2021
  description: Learn how to send email with Twilio SendGrid's newest Azure integration
  keywords: Microsoft, Azure, Integration
title: Sending Email with Microsoft Azure 2021
group: platform-partners
weight: 100
layout: page
navigation:
  show: true
---

<call-out>

This documentation applies to the most recent version of the Twilio SendGrid integration for Microsoft Azure. For documentation on the previous version, see the [SendGrid documentation]({{root_url}}/for-developers/partners/microsoft-azure/) or related [Azure documentation](https://docs.microsoft.com/en-us/azure/sendgrid-dotnet-how-to-send-email).

</call-out>

This guide will help you create and configure a Twilio SendGrid account using Microsoft Azure. Once your account is ready, you'll be on your way to delivering email at scale.

For more information, visit the [Twilio SendGrid website](https://sendgrid.com).

## Create an Azure Subscription

To get started with Twilio SendGrid and Azure, visit the [Azure Portal home page](https://portal.azure.com/#home). You will need to sign in or create a Microsoft account if you do not already have one.

Once logged in, select the **Subscriptions** icon under the **Azure services** menu.

![Azure services menu with the Subscriptions icon highlighted]({{root_url}}/img/sg_azure_portal_home_subscription.png 'Azure subscriptions')

A new page will load, listing your current subscriptions. You can add Twilio SendGrid to an existing Subscription or Select **+Add** to create a new subscription. For more information about Subscriptions and billing, see the Azure docs for how to [Create an additional Azure subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription).

For this guide, we will create a new Subscription.

![Azure Subscriptions with the +Add link highlighted]({{root_url}}/img/sg_azure_subscriptions_add.png 'Azure +Add Subscription')

If you already have an Azure account set up for billing, you will be taken to a page where you can create a subscription.

<call-out>

If you are creating your first Azure Subscription, you will first need to select a billing offer for your Subscription. You will be guided through the Azure offer signup process. You can return to this guide once your billing setup is complete.

</call-out>

A form will load with a **Subscription Name** field. You must add a name — we recommend something that clearly differentiates the subscription. All the other fields are already populated and cannot be edited. Click **Create**.

![Azure Subscriptions form with the Subscription Name populated]({{root_url}}/img/sg_azure_subscription_create.png 'Azure Subscription Name')

Once the Subscription is created, you will see it listed on the Subscriptions page. If you do not see the Subscription, try refreshing the list.

<call-out>

If you have multiple Azure Active Directory tenants, be sure you are viewing the tenant your subscription is assigned to. You can select **Switch directories** to view your additional tenants. For more on Azure AD, see "[Associate or add an Azure subscription to your Azure Active Directory tenant](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-subscriptions-associated-directory)."

</call-out>

![A list of all Azure Subscriptions for the account]({{root_url}}/img/sg_azure_subscriptions_listed.png 'Azure Subscriptions')

## Create a Twilio SendGrid account

From the Azure portal home page, select **Marketplace** under **Azure services**. If you do not see the **Marketplace** icon, you can search for it by selecting **More services**.

![The Azure portal home page with the Marketplace icon highlighted]({{root_url}}/img/sg_azure_home_marketplace.png 'Azure Marketplace')

The Azure Marketplace provides many services, including the Twilio SendGrid email service. You can find it by searching for "Twilio SendGrid." You will also find it under **Software as a Service (SaaS)**.

Click the Twilio SendGrid resource to load a page where you can select your account tier. You can start with a Free account and upgrade as your sending needs change. See the [Twilio SendGrid pricing page](https://sendgrid.com/pricing/) to understand what's included with each plan.

![The Twilio SendGrid integration listed in the Azure Marketplace]({{root_url}}/img/sg_azure_marketplace_listing.png 'Azure Marketplace Twilio SendGrid listing')

![The Twilio SendGrid integration detail page with a "Setup + Subscripe" link]({{root_url}}/img/sg_azure_listing_setup_subscribe.png 'Azure Marketplace Twilio SendGrid listing detail page')

Select **Set up + subscribe**. You will be taken to a page where you can assign your Twilio SendGrid account to an Azure Subscription and Resource Group. Once you have completed the required fields, select **Review + subscribe**.

![The Twilio SendGrid integration configuration basics]({{root_url}}/img/sg_azure_create_sg_account.png 'Azure Marketplace Twilio SendGrid configuration basics')

You will be asked to agree to Azure's term of services. You can now review your order and click **Subscribe**.

It takes a few moments to establish your account. You will be shown a progress screen. When the setup is complete, you will be able to click the **Configure account now** button to be taken to the Twilio SendGrid App. You will also receive an email when the subscription setup is complete.

![The Twilio SendGrid subscription in progress]({{root_url}}/img/sg_azure_subscription_in_progress.png 'Azure Marketplace Twilio SendGrid subscription in progress')

## Twilio SendGrid account setup

Before sending your first email, you will need to complete the following Twilio SendGrid account setup. These requirements help secure your account and keep your messages from landing in spam folders.

- Configure Two-factor authentication
- Create an API key
- Complete Sender Authentication

### Two-factor authentication

Twilio SendGrid uses Two-factor authentication (2FA) to help protect your account. To enable 2FA, Navigate to **Two-Factor Authentication** in the Twilio SendGrid **Settings** menu, and click **Add Two-Factor Authentication**.

![The Twilio SendGrid App's Two-factor authentication menu]({{root_url}}/img/sg_azure_2fa_page.png 'Two-factor authentication menu')

A modal will open where you can complete the 2FA setup. Click **Ok, Got it** to continue.

<call-out type="warning">

If you have previously configured services to authenticate with Twilio SendGrid APIs using Basic Authentication, enabling 2FA will break those integrations. You must use API keys to authenticate with Twilio SendGrid APIs.

</call-out>

![A modal asking to confirm 2FA setup]({{root_url}}/img/sg_azure_2fa_modal.png '2FA confirmation')

Twilio SendGrid supports 2FA using either SMS or the Authy App. Select your preferred 2FA method, and click **Next**.

You will need to enter a phone number to complete the 2FA process. SMS users will be sent a confirmation code at the number they entered. Authy users will be sent instructions for downloading and completing the 2FA setup using the Authy app.

### API keys

API Keys authenticate your application, mail client, or website with Twilio SendGrid services. Unlike a username and password, API keys are scoped to provide access only to the services you select. You can also delete and create API keys without impacting your other account credentials. For these reasons, Twilio SendGrid requires you to connect to its services using API keys.

#### Create an API key

In the Twilio SendGrid App, navigate to **API Keys** in the **Settings** menu, and select **Create API Key**.

![The Twilio SendGrid App's API keys page]({{root_url}}/img/sg_azure_api_keys_page.png 'API keys')

A modal will open where you can create your key. You must name the API key — we recommend something that will clearly differentiate the key from others you may create in the future.

![A modal where you can name configure and configure an API key]({{root_url}}/img/sg_azure_api_keys_modal.png 'Name and configure an API key')

You must also select the type of key you want to create. Twilio SendGrid provides three types of API key:

- Full Access
- Restricted Access
- Billing Access

To keep your account secure, you should give each key the [least privilege](https://www.twilio.com/blog/principle-of-least-privilege-details-best-practices) necessary. You can limit a key's capabilities by creating a **Restricted Access** key and selecting a subset of all the possible permissions. For more about managing Twilio SendGrid API keys, see the [Twilio SendGrid API keys documentation]({{root_url}}/ui/account-and-settings/api-keys/).

<call-out>

For security reasons, Twilio SendGrid API keys will be displayed to you at the time of creation only. Be sure to copy your key and store it somewhere secure like your Azure Key Vault. If you lose your key, you must create another — it's not possible to recover a lost key. The permissions assigned to a key can be modified after it's created.

</call-out>

#### Use an API key

Twilio SendGrid's v3 APIs expect an API key to be passed in an Authorization header as a Bearer Token. See the [Twilio SendGrid v3 API reference]({{root_url}}/api-reference/) for help using your key to send your first email.

The Twilio SendGrid helper libraries all provide a method to set your key, handling the authentication via Bearer Token for you. See the [Twilio SendGrid developer documentation]({{root_url}}/for-developers/) for helpful code examples and links to helper libraries in C#, Go, Java, Node.js, PHP, Python, and Ruby.

When using Twilio SendGrid’s SMTP integration, you will set your API key as a password via Basic Authentication. Your username must always be the string, “apikey.” Using the account credentials (username and password) you set up through Azure will fail, so be sure to set your password to the 14 digit API key provided by the Twilio SendGrid App. Your account credentials are separate from the credentials used to authenticate with Twilio SendGrid’s APIs and SMTP services.

```
username: "apikey"
password: <your-api-key>
```

### Sender Authentication

Twilio SendGrid requires customers to complete Sender Authentication. This requirement protects your domain's reputation as an email sender and helps uphold legitimate sending behavior by Twilio SendGrid customers.

Setup includes domain authentication. Twilio SendGrid will provide DNS records that you must add to your domain. For instructions on the domain authentication process, see "[How to Set Up Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)."

## Change, unsubscribe, reactivate your Twilio SendGrid plan

You can upgrade or downgrade your Twilio SendGrid plan to accommodate your email sending needs as they change. If you no longer need the Twilio SendGrid service, you will aslo unsubscribe through the Azure portal.

From your Azure portal's Subscription overview page, select **Resources** and click your Twilio SendGrid resource (it is labeled "Contoso" in the following examples).

![The Azure resources page with a Twilio SendGrid subscription highlighted]({{root_url}}/img/sg_azure_subscription_resources.png 'The Twilio SendGrid resource')

A detail page will load where you can modify your Twilio SendGrid subscription.

![The Twilio SendGrid subscription resource detail page]({{root_url}}/img/sg_azure_resource_detail.png 'The Twilio SendGrid resource detail')

### Upgrade or downgrade your plan

To upgrade or downgrade your plan, select **Change plan** from the Twilio SendGrid resource detail page. There are two locations where you can select **Change plan** — selecting **Change subscription** will allow you to modify your Azure subscription, not your Twilio SendGrid plan.

![The Twilio SendGrid Azure resource with the "Change Plan" link highlighted]({{root_url}}/img/sg_azure_change_plan_link.png 'Change plan')

A modal will open, displaying the available plans with your current plan selected. Select a new plan, and click **Change plan**. You will see a confirmation message on the page when your plan has been updated.

### Unsubscribe from Twilio SendGrid

To unsubscribe from Twilio SendGrid, select **Unsubscribe** from the Twilio SendGrid resource detail page.

![The Twilio SendGrid Azure resource with the "Unsubscribe" link highlighted]({{root_url}}/img/sg_azure_change_plan_unsubscribe.png 'Unsubscribe from Twilio SendGrid')

A modal will open asking you to select the reason for ending your subscription. Select an option that best describes your situation, and click **Unsubscribe**.

![The Twilio SendGrid Azure resource Unsubscribe confirmation page]({{root_url}}/img/sg_azure_unsubscribe_modal.png 'Unsubscribe from Twilio SendGrid')

You will receive a confirmation message when your subscription has been removed.

### Reactivate your Twilio SendGrid account

If you have unsubscribed from Twilio SendGrid and need the service again in the future, you will need to create a new subscription. If your account has been suspended, you can reactivate the service by paying any outstanding account balance. Once payment has been received, you'll be able to reactivate your account.
