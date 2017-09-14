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

## Step 1 - Create a New Teammate

First, log in to your account with your primary login credentials and navigate to **Teammates** by clicking **Settings** then selecting **Teammates** in the left hand sidebar. Send yourself a new teammate invitation with at least administrator permissions, or "Full Access" to the **Mail Send** permission, at a bare minimum. Once you have received and accepted your new teammate invitation continue with Step 2.

If your current integration is using our [Web API v2]({{root_url}}/API_Reference/Web_API/mail.html#-send), [Web API v3]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html), or one of our open sourced libraries to send mail, you'll need to set the **API Keys** permission to "Full Access".

For more detailed instructions on creating teammates, please visit our [User Guide]({{root_url}}/User_Guide/Settings/teammates.html).

![]({{root_url}}/images/reset_password_teammtes.png)

## Step 2 - Update Your Integration with Your New Credentials

Now that you have a new set of credentials for your new teammate, go into your existing system and update your integration or code to use the new teammate's username and password. Run a few tests to ensure that mail continues to flow as expected.

## Step 3 - Deploy The Changes

Now that your integration has the new credentials, go ahead and deploy your changes into production.

## Step 4 - Update The Original Credentials

Finally, once your integration is fully using your new credentials, you can go and [reset your password]({{root_url}}/Classroom/Basics/Account/how_do_i_reset_my_password.html) for your original credentials without interrupting your mail flow.

## Step 5 (Optional)

If you'd like, once your original credentials have been changed, you can then go and update your integration again to use the primary username and new password. Once you deploy those changes, you can go back and delete the alternate credentials you created in Step 1.

![]({{root_url}}/images/indycareful.gif)

Good luck, and don't hesitate to contact Support if you have any questions about the process!
