---
layout: page
weight: 0
title: Sendwithus
navigation:
  show: false
---

Enable the Sendwithus app via the [SendGrid Apps page](https://sendgrid.com/app)

![]({{root_url}}/images/sendwithus.png)

* * * * *

{% anchor h2 %}
Settings 
{% endanchor %}

Step 1. Enter an API Key

On the settings page you need to input an API key from Sendwithus so that SendGrid can manage certain settings from the "App Settings" page. If you do not have a Sendwithus account, you can click the [If don't have one, create an account here](https://www.sendwithus.com/partners/sendgrid?campaignid=15785&mbsy=77nv3&src=sendgrid) link.

![]({{root_url}}/images/sendwithus_settings1.png)

You can obtain your Sendwithus API key here from the Sendwithus dashboard.

![]({{root_url}}/images/sendwithus_settings2.png)

Step 2. Create a SendGrid Instance (unless you already have one)

Note: If you enter a valid API key and you already have a SendGrid Instance added on Sendwithus, Step 3 options will appear.

If you do not have any SendGrid Instances on Sendwithus, there are 2 options:

![]({{root_url}}/images/sendwithus_settings3.png)

​1. Create an SendGrid Instance using the the main account. This is done by creating a credential on SendGrid that will permit Sendwithus to interact with the SendGrid API.

{% warning %}
Caution: This will change the Event URL, Clicktracking, and Opentracking so that Sendwithus can keep track of deliverability. If you do not want these to change, please consider using the second option. 
{% endwarning %}

​2. Create an SendGrid Instance using a subuser account. In order to use this option, you must have the ability to create subusers, (silver and higher accounts) and not have reached the subuser limit for your account. Using this option, all the Sendwithus settings will be created on the subuser account. Emails will be sent using the subuser account, thus to be able to see the email statistics, you must select the subuser account on the [Statistics Dashboard](https://sendgrid.com/statistics).

In each case, the SendGrid Instance created will be set as the default on Sendwithus.

On the SendGrid side, this is how you will see the SendGrid Instance(s) after creation:

![]({{root_url}}/images/sendwithus_settings4.png)

Here you can see the created account on theSendwithus Delivery Settings page:

![]({{root_url}}/images/sendwithus_settings5.png)

Step 3. Select default SendGrid instance and SSO on Sendwithus dashboard

If you have one or more SendGrid Instances, you can select which will be used as the default by Sendwithus.

![]({{root_url}}/images/sendwithus_settings6.png)

[Sendwithus Docs](https://www.sendwithus.com/docs)
