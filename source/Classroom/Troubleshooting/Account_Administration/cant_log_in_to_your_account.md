---
seo:
  title: Can't log in to your account?
  description: Can't log in to your account?
  keywords: password, log, can't, authentication, username, reset, get, failed, user, invalid, account, deactivated, banned, in, terminated, bad username/password, name, won't, 535, 535 Authentication failed&#58; Bad username / password, login, access, denied
title: Can't log in to your account?
weight: 0
layout: page
zendesk_id: 204192663
navigation:
  show: true
---

There are a number of reasons why you may find yourself unable to log into your account, this article aims to explain these reasons as well as offer steps to get you back in action.

 

 

**![]({{root_url}}/images/invalidusername.png)**

 

**Invalid username and/or password **

Usually this is as simple a retyping one or both fields (you're only human after all), but could be something else. Check out to following for some possible reasons.

**You haven't confirmed your email address yet**. - Did you just sign up? If you don't verify your email address we never create your account, so be sure to check your registration email and click on the link we send!

**Check with other users**  - You may have at some point shared your credentials with someone else/another department, check with them to make sure they haven't changed anything. Consider implementing [Multiple User Credentials](https://sendgrid.com/docs/User_Guide/multiple_credentials.html) to set different levels of permissions. 

**Reset your password** - Sometimes passwords just vanish from memory, it happens to the best of us. Use the reset password link from the login screen to start the reset process via an email we'll send you. **_Be careful_** though, changing your password can break existing API and SMTP integrations you have going, so be sure to update your password wherever else it is used after resetting.

**Usernames can be anything** - We don't have a strict username syntax policy, so it may be something you wouldn't normally use. If you get stuck or can't remember your username, get in contact with Support and we can help you find it.

 

**Bad username/password **

Usually received via the API, this error means we don't recognize one or both of the **api\_user** and **api\_key** parameters that you've passed in your call.

Usually this can be solved with one of the action points listed above.

 

**Billing Terminated**

On the last week of each month, we terminate accounts with outstanding unpaid balances from the previous bill run. _Terminated accounts cannot be accessed._

We will send out several warning emails in the course of a month if an account fails to pay on time, so you should have ample warning before Termination. However, if you believe your account has been terminated due to non-payment, please get in touch with Support and we can help get you out of the red and sending again.

 

**Account Banned**

When an account is banned, it is permanently cancelled. Access to the account is blocked and no further requests to our system will be accepted. A banned account is not allowed back on SendGrid in the future. If the account had dedicated IPs they will be removed. Related sub-users will also be banned.

 

We don't make a habit of letting banned accounts back on, but if you would like to discuss it, _please respond to the email you received from our Compliance department._ Support cannot assist in reactivation of Banned accounts. 
