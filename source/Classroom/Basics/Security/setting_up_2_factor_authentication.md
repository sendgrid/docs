---
seo:
  title: Setting up 2-factor Authentication
  description: Setting up 2-factor Authentication
  keywords: security, authentication, 2-factor, multifactor, 2, login, 2fa, two, factor, auth
title: Setting up 2-factor Authentication
weight: 0
layout: page
zendesk_id: 203891718
navigation:
  show: true
---

To setup 2-Factor Authentication, simply log in to your account and visit the  [Setup Multifactor Authentication](https://sendgrid.com/multifactor/configure) page. From here, simply enter in your cell phone number and SendGrid will send a code to your phone. Once you verify the code you will be all set! 

![]({{root_url}}/images/2famaco.png)

A few things to note;

- [To turn off 2FA, you will need to contact us,]({{root_url}}/Classroom/Troubleshooting/Account_Administration/how_can_i_turn_off_2_factor_authentication.html) there is not a way via the UI.
- 2- Factor can only go to 1 phone so multiple credential users will need to have access to the main phone. 
- Enabling this feature will require you to verify a 6 digit code SMSed to your phone each time you log in to Sendgrid.com. This does not effect API access.

**Please note that enabling 2FA will also require any Multiple Credentials associated with the main account to use a verification code when logging in as well. **
