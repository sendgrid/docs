---
layout: page
weight: 0
title: Multifactor Authentication
seo:
  title: Multifactor Authentication
  keywords: multi factor authentication, two factor authentication, Multifactor, multi-factor
  description: Setup multifactor authentication for your SendGrid login.
navigation:
  show: true
---

{% info %}
Multifactor authentication applies to website logins. It does not change how your credentials are used to send email.
{% endinfo %}

{% info %}
If you have multifactor authentication enabled on your account, [multiple user credentials]({{root_url}}/User_Guide/Settings/credentials.html) logins will trigger a notification to the main credential’s phone number.
{% endinfo %}

Multifactor authentication allows you to make your SendGrid account more secure by requiring more than one way to verify that it is in fact you who is logging into your account. Currently, SendGrid’s multifactor authentication can send a text to your cell phone, which you will enter into the login form.

To set up multifactor authentication, enter your phone number and then SendGrid will send an SMS message to your phone. Non-USA phone numbers will require your country code. i.e. +447812345678

Check your phone. You will have received a test message with a 6-digit code. Now enter it in the “Verify Authentication Code” window.

From this point on, whenever you log into SendGrid, you’ll be prompted to enter a verification code that is sent to your phone.

Your cell phone service may charge you to receive these text messages.

If for some reason you would like to remove multifactor authentication from your SendGrid account, please contact support.

{% anchor h2 %}
Other Resources:
{% endanchor %}

* [SendGrid Knowledgebase 2FA article](http://support.sendgrid.com/hc/en-us/articles/203891718)
