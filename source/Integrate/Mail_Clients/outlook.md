---
layout: page
weight: 0
title: Outlook 2007
navigation:
  show: true
---

These instructions will walk you through how to add an SMTP server to an existing Outlook setup, but you can also add these settings at the account creation stage.

First, go to: 'Tools' \> 'Account Settings'

![]({{root_url}}/images/outlook_2007_1.png "Tools_Acctsettings")

The 'Account Settings' window should appear as below; please select the account you receive email through and click the 'Change' button.

![]({{root_url}}/images/outlook_2007_2.png "AcctSetEmAccts")  

The following 'Change E-mail Account' window will appear. This setting (in the red rectangle below) needs to be set for our SMTP address.

![]({{root_url}}/images/outlook_2007_3.png "IntMail_Settings")

After you are finished, click the 'More Settings' button. The following 'Internet E-mail Settings' window will appear. Click on the  'Outgoing Server' tab and input the settings shown (username and password are your SendGrid credentials).

{% info %}
Your SendGrid username may not necessarily be an email address. If your SendGrid username is example_user, enter example_user in the User Name field, not example_user@sendgrid.com. 
{% endinfo %}

![]({{root_url}}/images/outlook_2007_4.png "IntMail_Settings_2")

Next, click on the 'Advanced' tab and enter the information as shown below. (Keep in mind you can also use port 25 with no security or 587 with TLS security.)

![]({{root_url}}/images/outlook_2007_5.png "IntMail_Settings_3")

Click 'OK' and you should return to the 'Change E-mail Account' window. Click the 'Test Account Settings' to verify you are able to receive and send mail successfully.

![]({{root_url}}/images/outlook_2007_6.png "TestSettings")

You should see the results below; if you do not, verify your settings are correct. Click the 'Close' button.

![]({{root_url}}/images/outlook_2007_7.png "CloseTest")

Click 'Next' and then 'Finish' to complete the setup.

![]({{root_url}}/images/outlook_2007_8.png "WizFinish")

You are all set to send mail through us.

{% info %}
Unfortunately, there is not an easy way to add SMTP API headers to a message in Outlook 2007. 
{% endinfo %}
