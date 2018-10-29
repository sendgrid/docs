---
seo:
 title: Using SendGrid with BriteVerify
 description: Verify your SendGrid email list with Briteverify
 keywords: SendGrid email list, SendGrid integrate, Briteverify, Tutorial
title: Using SendGrid with BriteVerify
group: plugins
weight: 90
layout: page
navigation:
 show: true
---

## Creating a new API Key

Use BriteVerify to verify your SendGrid list. First, you will need to generate an API Key within SendGrid.

<call-out type="warning">

Once you generate the SendGrid Key, copy the API Key somewhere safe for future reference—this will only be visible once.

</call-out>

<call-out>

We hid API Keys in this tutorial for security purposes.

</call-out>

To get started, open the BriteVerify app and click **Verify New List** and then select **SendGrid**.
![]({{root_url}}/images/briteverify_verify_new_list.jpg)
![]({{root_url}}/images/briteverify_choose_list.jpg)

The app triggers the prompt to input the SendGrid API key. The app requires this authentication only once to link the 2 applications.

![]({{root_url}}/images/briteverify_auth_sg.jpg)

To generate the SendGrid API key, log into your SendGrid account. On the left side of the screen, click **Settings** and then click **API Keys**.

![]({{root_url}}/images/briteverify_navbar.jpg)

On the API Keys page, click **Create API Key**.

![]({{root_url}}/images/briteverify_createapikey.jpg)

Here you will be able to name your API Key and set up the relevant permissions.
Select **Restricted Access** to customize permissions.

![]({{root_url}}/images/briteverify_create_api_key_sidebar.jpg)

To allow BriteVerify to work with your SendGrid list, make the following changes to your permissions:

- Email Activity – should have “read” access
- Stats – should have “read” access
- Suppressions – should have “full” access
- Marketing Campaigns – should have “full” access

![]({{root_url}}/images/briteverify_access_levels.jpg)

When finished, click **Create & View** to generate your API Key.

<call-out type="warning">
 
Remember to store this key somewhere safe because you will not be able to retrieve or restore it once you navigate away from this page.

</call-out>

![]({{root_url}}/images/briteverify_apikey_created.jpg)

Copy the key then paste it in the textbox in the Briteverify app. Make sure that there are no extra spaces when pasting the key. If you enter the key incorrectly, an error requesting you to review the info displays.

![]({{root_url}}/images/briteverify_enter_api_key.jpg)

Once you provide the correct API Key, the applications sync, and you may now verify your SendGrid data.

Choose the list you would like to verify and an estimated cost will display.

![]({{root_url}}/images/briteverify_sgimport1.jpg)

Risky emails include Unknown and Accept_all category emails. Remove these to prevent diluting a marketing campaign’s overall performance. Enable the radio button to eliminate risky emails from the final list.

![]({{root_url}}/images/briteverify_sgimport2.jpg)

Next choose **File** as your Export Destination. Once the verification is complete, BriteVerify transfers the cleaned list directly to your SendGrid account.

Click **Verify List** to begin the verification.

![]({{root_url}}/images/briteverify_sgimport3.jpg)

<call-out>

For more information or support, contact [BriteVerify](https://support.briteverify.com/)

</call-out>
