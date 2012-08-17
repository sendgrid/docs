---
comments: false
date: 2011-07-01 10:42:06
layout: page
slug: thunderbird
title: Thunderbird Integration
wordpress_id: 1773
---

To send email using Thunderbird you will have to modify your outgoing server settings in Thunderbird accordingly. Additionally you can modify settings in Thunderbird that will allow you to include an [SMTP API](/documentation/api/smtp-api/) header in your emails if you wish to leverage [categories](/documentation/delivery-metrics/categories/) or other features of the SMTP API when sending mail via the Thunderbird client. 



### You can start by going to: 'Tools' -> 'Account Settings'



The following image shows where to begin.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_add.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_add.png)
  



### The Settings that need to be entered include:






  * **Description - ** SendGrid Connection


  * **Server Name - ** smtp.sendgrid.net


  * **Port - ** 465


  * **Connection security - ** SSL/TLS


  * **Authentication method - ** Normal password


  * **User Name - ** sendgrid_username


[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_settings1.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_settings1.png)
  



### Incorporating SMTP API headers requires the following.






  * Select Tools | Options (Win) or Thunderbird | Preferences (Mac) from the menu in Thunderbird.


  * Open the “Advanced” category.


  * Go to the “General” tab.


  * Click “Config Editor”. 



[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_advanced.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_advanced.png)

  





  * Enter "mail.compose.other.header" under “Filter:”


  * Double-click mail.compose.other.header.


  * Enter “X-SMTPAPI”


  * Click OK.


  * Close the configuration editor and preferences dialog.


[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_header.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_header.png)

  





  * Restart Thunderbird


  * Create a mail message and just like you would add a CC or BCC to your email, click the drop down option that will now allow you to add a header of the type “X-SMTPAPI” in addition to “To”


[![](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_compose.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/thunderbird_compose.png)
