---
layout: page
weight: 0
group: account-management
title: Verifying your Account
seo:
  title: Verifying your Account
  description: Signed up with SendGrid? Learn more about the steps to complete first...
  keywords: sign, up, signup, account, verification, 2fa, mfa, two, factor, authentication, auth, getting, started, paid, credits, unlock, verify, 100
navigation:
  show: true
---

When you sign up for a SendGrid account, there are a few steps that our users must complete before they can start using their accounts fully. Once you complete the steps presented, your credit usage limits will be unlocked. We require these steps for your security, as well as to help you get started more quickly!

## Access your Upgrade Options

The time it takes to completely unlock your account can vary based on how quickly you complete the required steps. The faster you complete the steps, the faster you can start sending!

### Unlock your Free Account

In order to send email with your free Twilio SendGrid account, you must create and verify a Single Sender. Adding a Sender Identity will help protect your sending reputation and legitimize your account in the eyes of the inbox providers for better deliverability. For more information, see [Single Sender Verification]({{root_url}}/ui/sending-email/sender-verification/).

### Upgrading your Account

1. Confirm your email address. If you need to resend the verification email, click **Resend account verification**. If you entered your email address incorrectly in the initial signup form, you can correct the email address and resend the verification email to the correct address.
2. Set up [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). Authenticating your domain shows email providers that Twilio SendGrid has your permission to send emails on your behalf.

<call-out>

If you don't have access to your domain's DNS records, you can use the **Send To A Coworker** feature. This feature allows you to enter a colleague's email address so Twilio SendGrid can send them all the information they need to complete domain authentication on your behalf.

![Send to a coworker tab]({{root_url}}/img/domain-auth-send-to-coworker.png 'Send to a coworker tab')

</call-out>

3. Set up [two-factor authentication]({{root_url}}/ui/account-and-settings/two-factor-authentication/#setting-up-two-factor-authentication). Two-factor authentication allows you to make your SendGrid account more secure by requiring authentication beyond a simple username and password when logging in.
4. Add a [payment method]({{root_url}}/ui/account-and-settings/billing/#payment-methods). Your card will not be charged at this time.

You will need to complete all of these steps to completely verify your account. You cannot skip any of the verification steps, or your account won't be unlocked.

<call-out type="warning">

In some instances our compliance team will need to manually verify your account information before you can start sending. In these cases your account should be unlocked within 72 hours of completing the last account verification step.

</call-out>
