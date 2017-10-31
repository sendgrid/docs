---
st:
  published_at: 2016-06-22
  type: Classroom
seo:
  title: Heroku Users - Find your SendGrid Credentials
  description: Learn how to find and recover your username/password as a SendGrid add-on user...
  keywords: heroku, password, reset, recover, username
title: Heroku Users - Find your SendGrid Credentials
weight: 0
layout: page
zendesk_id: 200181998
navigation:
  show: true
---

#Find your existing username/password through the Heroku portal :

If you are a Heroku user using [the SendGrid add-on](https://addons.heroku.com/sendgrid), and would like to access the SendGrid web interface, or would just like to know your SendGrid account credentials; you can find them by doing the following from the Heroku interface:

>1. Go to your Apps, choose your SendGrid app

;i![]({{root_url}}/images/HerokuPW1.png "Heroku SendGrid App Screenshot"

>2. Click on "Settings" and then click “Reveal Config Vars”

;i![]({{root_url}}/images/HerokuPW2.png "Heroku Config Vars Screenshot"

{% info %}
Editing your username or password here will not have an effect on your SendGrid account credentials.
{% endinfo %}

#Reset your SendGrid add-on password:

Go to the [SendGrid Password Reset page](https://sendgrid.com/user/forgotPassword) and enter your SendGrid username, and click submit. An email will be sent to the email address on file with instructions on how to reset your password. If you don't know your SendGrid username, use the steps detailed above to find your username through the Heroku portal. 

{% info %}
Resetting your password will not update the Config Vars of your SendGrid add-on in the Heroku portal. To update this please follow the directions above to pull up your add-on Settings/Config Vars. Then click the “edit” button to manually input your new password:

;i![]({{root_url}}/images/HerokuPW3.png "Heroku Config Vars Edit Screenshot"

;i![]({{root_url}}/images/HerokuPW4.png "Heroku Config Vars Password Edit Screenshot"

{% endinfo %}

{% warning %}
Resetting your SendGrid password may break any integrations you have that are currently using the existing credentials for authentication.
{% endwarning %}

Alternatively, you can contact [Heroku Support](https://www.heroku.com/support) directly to request a password reset for the SendGrid add-on.  
