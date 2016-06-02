---
st:
 published_at: 2016-06-02
 type: [integrate]

seo:
 title: Using SendGrid with Briteverify
 description: Verify your SendGrid email list with Briteverify
 keywords: SendGrid email list, SendGrid integrate, Briteverify, Tutorial
title: Using SendGrid with Briteverify
weight: 90
layout: page
navigation:
 show: true
---
#Using SendGrid with Briteverify
##Creating a new API Key

In order for BriteVerify to be able to verify your SendGrid list, you will need to generate an API key within SendGrid. 

{% warning %}
Before proceeding it is important to note that the Sendgrid generated key is generated and visible only once, so please ensure that the correct settings are applied and that you copy the API key to your ‘handy-dandy list of things to remember’ for future reference. 
{% endwarning %}

To get started, please open the BriteVerify app and select **Import List** from **Sendgrid**. The app triggers the prompt to input the Sendgrid API key. This authentication is required only once to link the two applications. 

![]({{root_url}}/images/Briteverify_Picture_01.jpeg) ![]({{root_url}}/images/Briteverify_Picture_02.jpeg)

So to generate the Sendgrid API key, please log into your SendGrid account and click Settings on the left side of the screen to open and select "API Keys" from the list.

![]({{root_url}}/images/Briteverify_Picture_03.jpeg)

In the API Keys page, click "Create API Key" and then select "General API Key" from the dropdown menu. 

![]({{root_url}}/images/Briteverify_Picture_04.jpeg)
<sub>*NOTE: API KEYS COVERED FOR SECURITY PURPOSES*</sub>

Here you will be able to name your API Key and set up the relevant permissions.

![]({{root_url}}/images/Briteverify_Picture_05.jpeg)

In order for BriteVerify to work with your SendGrid list, you will need to make these changes to your permissions:

![]({{root_url}}/images/Briteverify_Picture_06.jpg)

![]({{root_url}}/images/Briteverify_Picture_07.jpeg)
<sub>*THE API PERMISSION SETTINGS*</sub>

When you are finished, click Save to generate your API Key. At this point, please store this key somewhere safe because as soon as you navigate away from this page, you will not be able to retrieve or restore the token.

![]({{root_url}}/images/Briteverify_Picture_08.jpeg)
<sub>*NOTE: API KEY COVERED FOR SECURITY PURPOSES*</sub>

Also copy the key over to the Briteverify app and paste it in the text box. Please ensure there are no additional spaces when pasting it in. If the key is incorrectly inputted, an error will be displayed requesting you to review the info.

![]({{root_url}}/images/Briteverify_Picture_09.jpeg)
<sub>*NOTE: API KEY COVERED FOR SECURITY PURPOSES*</sub>

Once the correct API key is provided, the applications are synced up and you may now verify your Sendgrid data. For more details on different ways to verify Sendgrid data, please refer to the video on “Verify emails with Sendgrid”.

![]({{root_url}}/images/Briteverify_Picture_10.jpeg)
<sub>*THE IMPORT SCREEN AFTER API KEY HAS BEEN VERIFIED*</sub>
