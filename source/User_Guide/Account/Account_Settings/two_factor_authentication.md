---
layout: page
weight: 0
title: Two Factor Authentication
seo:
  title: Two Factor Authentication
navigation:
  show: true
---

{% info %}
Multifactor authentication applies to website logins. It does not change
how credentials are used to send email.
{% endinfo %}

{% info %}
If you have 2FA enabled on your account, [Multiple User Credentials]({{root_url}}/User_Guide/Account/multiple_credentials.html) logins will trigger a 2FA notification to the main credential's phone number.
{% endinfo %}



{% anchor h2 %}
Set up 2FA
{% endanchor %}

* Log in to your SendGrid account like normal.

* On the Account Overview page, click on [Account Settings](https://sendgrid.com/user/account).

![Account Settings]({{root_url}}/images/account_settings.png)

* On the right-hand side of the screen, click on [Setup Multifactor Authentication](https://sendgrid.com/multifactor/configure)

* From the Multifactor Authentication page, enter your phone number, and click on “Send Text Message.”

* Please note, for non-USA phone numbers, please add your country code.  i.e.  +447812345678

* Check your phone.  You will have received a test message with a 6-digit code.  Now enter it in the “Verify Authentication Code” window.

![Configure Multifactor Authentication]({{root_url}}/images/configure_multifactor.png)

* Once you’ve entered the code and clicked “Verify,” you’ll get a message across the top of the screen that tells you “Code verification was successful.  Multifactor authentication has been enabled on your account.”

![Multifactor Confirmation]({{root_url}}/images/multifactor_confirmation.png)

* Now, whenever you log in to SendGrid, you’ll be prompted to enter a verification code that is sent to your phone at the time of login.


*To remove 2FA from your SendGrid account, please [contact support](https://support.sendgrid.com)*
