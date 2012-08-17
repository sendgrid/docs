---
comments: false
date: 2011-07-07 15:42:52
layout: page
slug: outlook
title: Outlook 2007
wordpress_id: 1884
following_users:
- support_docs
---

To send email using Microsoft Outlook 2007 you will have to modify your outgoing server settings in the application accordingly. The following page will walk you through how to add an SMTP server to an existing Outlook setup, but you can also add these settings at the account creation stage.



### First, go to: 'Tools' > 'Account Settings'


[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/Tools_Acctsettings.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/Tools_Acctsettings.png)  


The 'Account Settings' window should appear as below; please select the account you receive e-mail through and click the 'Change' button.
![](http://docs.sendgrid.com/wp-content/uploads/2011/07/AcctSetEmAccts.png)  


The following 'Change E-mail Account' window will appear.
This setting (in the red rectangle below) needs to be set for our SMTP address.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail3_Settings.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail_Settings.png)  


After you are finished, click the 'More Settings' button.
The following 'Internet E-mail Settings' window will appear.
Click on the  'Outgoing Server' tab and input the settings shown (username and password are your Sendgrid credentials). 
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail_Settings_2.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail_Settings_2.png)  


Next, click on the 'Advanced' tab and enter the information as shown below.
(Keep in mind you can also use port 25 with no security or 587 with TLS security.)
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail_Settings_3.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/IntMail_Settings_3.png)  


Click 'OK' and you should return to the 'Change E-mail Account' window.
Click the 'Test Account Settings' to verify you are able to receive and send mail successfully.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/TestSettings.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/TestSettings.png)  


You should see the results below; if you do not, verify your settings are correct.
Click the 'Close' button.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/CloseTest.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/CloseTest.png)  


Click 'Next' and then 'Finish' to complete the setup.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/WizFinish.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/WizFinish.png)  

You are all set to send mail through us.

Unfortunately, it is not possible to add [SMTP API](/documentation/api/smtp-api/) headers to the message in Outlook. We suggest [Thunderbird](/documentation/get-started/integrate/examples/thunderbird/) if you want that level of control.
