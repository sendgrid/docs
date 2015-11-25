---
seo:
  title: Resetting your password without breaking current integrations
  description: Resetting your password without breaking current integrations
  keywords:
title: Resetting your password without breaking current integrations
weight: 0
layout: page
zendesk_id: 205440278
navigation:
  show: true
---

 **Step 1 - Setup A New Multiple Credential**

First, login to your account with your primary credentials and head over to the [Multiple User Credentials page](https://app.sendgrid.com/credentials). Create a new set of credentials that have (at minimum) access to send **Mail**.

If your current integration is using our [Web API](https://sendgrid.com/docs/API_Reference/Web_API/mail.html#-send) or one of our open sourced libraries to send mail, you'll also need to enable **API** access along with **Mail** access for the credentials.

![]({{root_url}}/images/manangemultiple.png)

&nbsp;

**Step 2 - Update Your Integration With The New Credentials**

**![]({{root_url}}/images/sucessfulcred.png)**

Now that you have a new set of credentials, go into your existing system and update your integration or code to use the new Multiple Credential username and password. Run a few tests to ensure that mail continues to flow as expected.

&nbsp;

**Step 3 - Deploy The Changes**

Now that your integration has the new credentials, go ahead and deploy your changes into production.

&nbsp;

**Step 4 - Update The Original Credentials**

Finally, once your integration is fully using your new credentials, you can go and [reset your password](http://support.sendgrid.com/hc/en-us/articles/203893828) for your original credentials without interrupting your mail flow.

&nbsp;

**Step 5 (Optional)**

If you'd like, once your original credentials have been changed, you can then go and update your integration again to use the primary&nbsp;username and new password. Once you deploy those changes, you can go back and delete the alternate credentials you created in Step 1.&nbsp;

&nbsp;

![]({{root_url}}/images/indycareful.gif)

Good luck, and don't hesitate to contact Support if you have any questions about the process!&nbsp;
