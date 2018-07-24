---
st:
 published_at: 2016-06-02
 type: [integrate]

seo:
 title: Using SendGrid with BriteVerify
 description: Verify your SendGrid email list with Briteverify
 keywords: SendGrid email list, SendGrid integrate, Briteverify, Tutorial
title: Using SendGrid with BriteVerify
weight: 90
layout: page
navigation:
 show: true
---
##Creating a new API Key

To use BriteVerify to verify your SendGrid list, you will need to generate an API Key within SendGrid.

<call-out type="warning">

The Sendgrid-generated key is generated and visible only once, so be sure to copy the API Key somewhere safe for future reference.

</call-out>

To get started, open the BriteVerify app and click **Import List** and then click **Sendgrid**. The app triggers the prompt to input the Sendgrid API key. This authentication is required only once to link the two applications.

![]({{root_url}}/images/Briteverify_Picture_01.jpeg) ![]({{root_url}}/images/Briteverify_Picture_02.jpeg)

To generate the Sendgrid API key, log into your SendGrid account. On the left side of the screen, click **Settings** and then click **API Keys**.

![]({{root_url}}/images/Briteverify_Picture_03.jpeg)

On the API Keys page, click **Create API Key** and then click **General API Key**.

![]({{root_url}}/images/Briteverify_Picture_04.jpeg)
<sub>*NOTE: API KEYS COVERED FOR SECURITY PURPOSES*</sub>

Here you will be able to name your API Key and set up the relevant permissions.

![]({{root_url}}/images/Briteverify_Picture_05.jpeg)

To allow BriteVerify to work with your SendGrid list, make the following changes to your permissions:
+ Email Activity – should have “read” access
+ Stats – should have “read” access
+ Suppressions – should have “full” access
+ Marketing Campaigns – should have “full” access

![]({{root_url}}/images/Briteverify_Picture_06.jpg)

![]({{root_url}}/images/Briteverify_Picture_07.jpeg)
<sub>*THE API PERMISSION SETTINGS*</sub>

When you are finished, click **Save** to generate your API Key.

<call-out type="warning">
Remember to store this key somewhere safe because you will not be able to retrieve or restore it once you navigate away from this page.
</call-out>

![]({{root_url}}/images/Briteverify_Picture_08.jpeg)
<sub>*NOTE: API KEY COVERED FOR SECURITY PURPOSES*</sub>

Copy the key then paste it in the textbox in the Briteverify app. Make sure that there are no additional spaces when pasting the key. If the key is entered incorrectly, an error requesting you to review the info displays.

![]({{root_url}}/images/Briteverify_Picture_09.jpeg)
<sub>*NOTE: API KEY COVERED FOR SECURITY PURPOSES*</sub>

Once the correct API Key is provided, the applications sync, and you may now verify your Sendgrid data.

![]({{root_url}}/images/Briteverify_Picture_10.jpeg)
<sub>*THE IMPORT SCREEN AFTER API KEY HAS BEEN VERIFIED*</sub>

<call-out>

For more information or support contact [BriteVerify](http://www.briteverify.com/)
 	