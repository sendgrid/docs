---
layout: page
weight: 0
title: Outlook 2010
navigation:
  show: true
---

These instructions will walk you through how to add an SMTP server to an existing Outlook 2013 setup, but you can also add these settings at the account creation stage.

First, go to: 'File’ and then 'Account and Social Network Settings’ and click on 'Account Settings'.

![]({{root_url}}/images/outlook_2010_1.png "Account Settings")

The 'Account Settings’ window should appear as below; please select the account you receive e-mail through and click the 'Change’ button.

![]({{root_url}}/images/outlook_2010_2.png "Change Email")

The following 'Change E-mail Account’ window will appear. This setting (in the red rectangle below) needs to be set for our SMTP address. Outgoing Mail Server smtp.sendgrid.net
Under Login Information, please enter your SendGrid username and password.

{% info %}
Your SendGrid username may not necessarily be an email address. If your SendGrid username is example_user, enter example_user in the User Name field, not your email address.
{% endinfo %}

![]({{root_url}}/images/outlook_2010_3.png "Change Account")

Next, click on the 'More Settings’ button and enter the information as shown below. (Keep in mind you can also use port 25 with no security or 587 with TLS security.)

Under the “Outgoing Server Tab”, check mark “My outgoing server (SMTP) requires authentication. Click “Log on using” and enter your SendGrid Username and Password. Click 'OK’ and you should return to the 'Change E-mail Account’ window.

![]({{root_url}}/images/outlook_2010_4.png "Internet Email Settings")

Once you are back on the Change Account screen, click “Next >” to test that everything is setup correctly.

![]({{root_url}}/images/outlook_2010_5.png "Click Next")

If everything checks out correct then you should see this.

![]({{root_url}}/images/outlook_2010_6.png "All tests completed successfully")

You should be all set at this point. If you need more support please contact support@sendgrid.com .

![]({{root_url}}/images/outlook_2010_7.png "Congratulations")