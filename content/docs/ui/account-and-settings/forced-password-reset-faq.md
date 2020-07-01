---
seo:
  title: Forced Password Reset FAQ
  description: Forced Password Reset FAQ
title: Forced Password Reset FAQ
weight: 0
group: security
layout: page
navigation:
  show: false
---

## What is a credential stuffing attack?

* Credential stuffing involves sourcing lists of previously compromised credentials that are traded and used by bad actors on the internet, to gain access to a given site or application. When a site is compromised, and credentials stolen, they’re often tested against other sites and applications because people often use the same email and password combination to log into multiple sites.

## Where can I look for evidence of bad activity in my account?

* Although available features may vary by subscription, and also what individuals have chosen to set up on their account, careful attention should be paid to the following pages to identify unauthorized activity Including:
  * account settings
  * api key console pages
  * payment methods page 
  * 2fa settings console page
  * Teammate management page
  * IP address (IPAM) management page
  * Webhooks management page
  * subusers management page

## What were the subject lines of the phishing emails?

* This can vary by account. We suggest you review all the emails sent from your account over the past 30 days and scrutinize any subject lines that you don’t immediately recognize.

## Could a user gain access with username and password and send mail if we have IP access management set up on our account?

* If you are using IP access management,you’ve taken extra precautions which would’ve prevented the attackers from accessing your account. IP access management effectively locks them out and prevents this kind of account takeover.

## How could a user gain access with username and password and send mail if we use API keys for V3 mail send? Did they create an API key?

* In some cases the attackers used the account credentials to gain access to the account and then created a new API key to allow them to gain access to the account’s functionality and send email. In these cases we have taken the additional step of invalidating some recently created API keys to revoke sending access to the attackers. You can check your API Key status by visiting the API Key page in your account.

## How do you know we were affected?

* Our team conducted a thorough investigation of the IP addresses accessing accounts and identified the IPs of bad actors accessing multiple accounts of which your account was one of them.

## I didn’t get an account reset email and when I click ‘Forgot Your Password’ I don’t receive an email. What happened?

* If you’re unable to generate an account reset email then please contact our support team for further assistance.

## Why was I not notified before you reset my account and/or invalidated my API token?

* It was important to reset the account passwords as soon as possible without alerting the bad actors. We’ve coordinated the timing of the notification with the reset to avoid alerting the bad actors.

## What services will be disrupted by a password reset?

* Any services which use basic authentication, including access to the UI and API calls will be disrupted.

## How can I better protect my account?

* In addition to 2FA we suggest all users take advantage of IP access management to lock down the IP addresses that can access a given account. If account owners work with a team of people we recommend the use of Teammates to restrict access and give the account admin greater flexibility to structure how their colleagues can or can not access the account.
