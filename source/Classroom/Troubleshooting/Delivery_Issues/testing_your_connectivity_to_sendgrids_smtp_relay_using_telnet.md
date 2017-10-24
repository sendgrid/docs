---
seo:
  title: Testing your connectivity to SendGrid's SMTP relay using Telnet
  description: Testing your connectivity to SendGrid's SMTP relay using Telnet
  keywords: telnet, ports, connection, smtp
title: Testing your connectivity to SendGrid's SMTP relay using Telnet
weight: 0
layout: page
zendesk_id: 200182038
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/190122014" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


#Starting your Telnet connection:

To begin, choose one of the following options based on the type of computer you are using.

>**Windows:** Open your Windows menu, type **cmd* into the search function, and press enter. 

>**Mac/Unix:** launch the Terminal application. 

You should now be looking at a DOS-prompt style window with a blinking cursor in the top left-hand corner, you will use this window to input the commands to initiate a telnet connection. Use the progression below to walk you through the connection.

#Things to know before initiating the Telnet Authentication:

1. For the first command in the telnet authentication test, **the "#" symbol will need to be replaced with one of our recommended ports.** We accept unencrypted and TLS connections on ports **25**, **587**, & **2525**.

2. You will be required to enter a base 64 encoded version of your SendGrid username and password. To encode your username and password, please visit the following URL: https://www.base64encode.org/

#Telnet Authentication Walkthrough:
Below is a walkthrough of a basic telnet authentication. **Every line starting with ">" indicates that the text following it is a command you will need to type in followed by pressing the ENTER key afterwards.** 

    >telnet smtp.sendgrid.net # <enter>
    220 xxxx ESMTP service ready
    >EHLO <enter>
    250-xxxx250-8BITMIME250-SIZE 20480000250-AUTH=PLAIN LOGIN250-AUTH PLAIN LOGIN250 STARTTLS
    >auth login <enter>
    334 VXNlcm5hbWU6
    >Enter your BASE64 encoded SendGrid username here. <enter>
    334 UGFzc3dvcmQ6
    >Enter your BASE64 encoded SendGrid password here. <enter>
    235 Authentication successful. *

####* Getting this far indicates that your connection to smtp.sendgrid.net over the chosen port is open, and your username and password are valid!



#Sending a message using Telnet:
Below is a walkthrough of how to send a message via telnet. **Every line starting with ">" indicates that the text following it is a command you will need to type in followed by pressing the ENTER key afterwards.** 

    >mail from: fromexampleexampexample@example.com <enter>
    250 Sender address accepted
    >rcpt to: toexampleexampexample@example.com <enter>
    250 Recipient address accepted
    >data <enter>
    354 Continue
    >To:To Name <enter>
    >From: From Name <enter>
    >Subject:Testing <enter>
    > <enter> *You need to enter one blank line before you start the actual body of the message
    >This is where the body of the message you would like to send goes. <enter>
    >. <enter> *Typing a period(.) tells us you are finished, and to send the message.
    250 Delivery in progress
    >quit <enter>
    221 See you later 
    Connection to host lost.


>**Note**: If upon attempting 'telnet smtp.sendgrid.net #', you receive an error stating "'telnet' is not recognized as an internal or external command, operable program or batch file." this means that Telnet is not installed on your machine. This can be done by visiting your "Add and Remove Progams" section within your Control Panel, and installing the 'Telnet Client' and 'Telnet Server' packages within 'Turn Windows features on or off". 
