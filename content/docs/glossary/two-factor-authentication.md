---
seo:
  title: Two Factor Authentication
  description: Multi-factor Authentication requires the user to have some information that only they could have to log into an account.
  keywords: 2FA, Two Factor Authentication, Multi-factor Authentication, two step verification
title: Two Factor Authentication
weight: 0
layout: page
navigation:
  show: false
---

Two-Factor Authentication (also known as Multi-factor authentication, 2FA, two step verification, or TFA) is an extra layer of security enforced during authentication that requires not only a password and username but also something that only that user has on them, that is a piece of information only they should know or have immediately at hand such as a physical token, a phone application, or a device.

<call-out>

 It is not possible to use basic authentication for users, subusers, or teammates that enable 2FA.
 
</call-out>

<call-out type="warning">

SendGrid no longer accepts Basic authentication (username and password) for API calls when two-factor authentication is enabled for a user. You can now only use two-factor authentication if you are authenticating with an API key. For more information, see [Authentication]({{root_url}}//for-developers/sending-email/authentication/).

</call-out>

With SendGrid, you can turn this security feature on in your [Account Settings]({{root_url}}/ui/account-and-settings/two-factor-authentication/).

## Additional Resources
* [Two-Factor Authentication FAQ]({{root_url}}/ui/account-and-settings/two-factor-authentication/)
