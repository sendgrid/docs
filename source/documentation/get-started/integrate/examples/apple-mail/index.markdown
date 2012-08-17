---
comments: false
date: 2011-07-05 13:14:30
layout: page
slug: apple-mail
title: Apple Mail
wordpress_id: 1803
---

To send email using Apple's Mail program you will have to modify your outgoing server settings in the Mail application accordingly. The following page will walk you through how to add an SMTP server to an existing Mail setup, but you can also add these settings at the account creation stage.


## Adding SMTP settings


First things first, you have to set up Mail to be able to send to us. Go to Mail > Preferences (⌘,). On the account you want to edit, you're going to Click the dropdown where it says **Outgoing Mail Server (SMTP):**, and select **Edit SMTP Server List...**.
[![Mail, Preferences, Outgoing Mail Server (SMTP) dropdown, Edit SMTP Server List](http://docs.sendgrid.com/wp-content/uploads/2011/07/step11.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/step11.png)  


Next you will click the **+** under the list of SMTP servers, so that you can add a new one.
[![The plus button to click to add an SMTP server](http://docs.sendgrid.com/wp-content/uploads/2011/07/step21.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/step21.png)  


Then you'll enter the server details:



	
  * **Server Name:** smtp.sendgrid.net

	
  * **Description:** SendGrid

	
  * **Ports:** Use default ports

	
  * **Encryption:**Use Secure Sockets Layer (SSL)

	
  * **Authentication:** Password

	
  * **User Name:** SendGrid account username

	
  * **Password:** SendGrid account password


[![Settings for Mail to use SendGrid SMTP](http://docs.sendgrid.com/wp-content/uploads/2011/07/step3.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/step3.png)  


The last thing you need to do is on the Message screen. When writing a message, there is a dropdown beneath the Subject field, where you can define the outgoing server you wish to use. This way, you can send individual messages to your regular SMTP, and the messages you need to send through SendGrid can go through us. Please note that when you select this, it will be remembered until you change the selection.
[![The dropdown menu to select the SMTP server to use for this send.](http://docs.sendgrid.com/wp-content/uploads/2011/07/step4-e1309893166333.png)](http://docs.sendgrid.com/wp-content/uploads/2011/07/step4-e1309893166333.png)  


Unfortunately, there is not an easy way to add [SMTP API](/documentation/api/smtp-api/) headers to the message in Mail. We suggest [Thunderbird](/documentation/get-started/integrate/examples/thunderbird/) if you want that level of control.

_Note:_ Mac Mail sometimes attaches images in a way that in compatible with other email readers, but this is [correctible](http://micahgilman.com/play/disable-mac-mailapp-inline-image-attachments/).
