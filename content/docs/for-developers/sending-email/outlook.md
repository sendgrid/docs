---
layout: page
weight: 0
title: Outlook 2007
group: mail-clients
navigation:
  show: true
---

These instructions will walk you through how to add an SMTP server to an existing Outlook setup, but you can also add these settings at the account creation stage.

Click **Tools** and then select **Account Settings**.

![]({{root_url}}/images/outlook_2007_1.png "Tools_Acctsettings")

The 'Account Settings' window appears. Select the account you receive Email through and click **Change**.

![]({{root_url}}/images/outlook_2007_2.png "AcctSetEmAccts")

The following 'Change E-mail Account' window appears. This setting (in the red rectangle below) needs to be set for our SMTP address.

![]({{root_url}}/images/outlook_2007_3.png "IntMail_Settings")

After you are finished, click  **More Settings**. The following 'Internet E-mail Settings' window appears. Click **Outgoing Server** and input the settings shown (username and password are your SendGrid credentials).

<call-out>

Your SendGrid username may not necessarily be an email address. If your SendGrid username is example_user, enter example_user in the User Name field, not example_user@sendgrid.com.

</call-out>

![]({{root_url}}/images/outlook_2007_4.png "IntMail_Settings_2")

Next, click **Advanced** and enter the information as shown below. (Keep in mind you can also use port 25 with no security or 587 with TLS security.)

![]({{root_url}}/images/outlook_2007_5.png "IntMail_Settings_3")

Click **OK**. You should return to the 'Change E-mail Account' window. Click **Test Account Settings** to verify you are able to receive and send mail successfully.

![]({{root_url}}/images/outlook_2007_6.png "TestSettings")

You should see the results below; if you do not, verify your settings are correct. Click **Close** button.

![]({{root_url}}/images/outlook_2007_7.png "CloseTest")

Click **Next** and then **Finish** to complete the setup.

![]({{root_url}}/images/outlook_2007_8.png "WizFinish")

You are all set to send mail through us.

<call-out>

Unfortunately, there is not an easy way to add SMTP API headers to a message in Outlook 2007.

</call-out>
