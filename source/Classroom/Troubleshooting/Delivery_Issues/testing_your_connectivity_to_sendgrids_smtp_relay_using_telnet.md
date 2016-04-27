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

#Starting your Telnet connection:

To begin, choose one of the following options based on the type of computer you are using.

>**Windows:** Open your Windows menu, type **cmd* into the search function, and press enter. 

>**Mac/Unix:** launch the Terminal application. 

You should now be looking at a DOS-prompt style window with a blinking cursor in the top left-hand corner, you will use this window to input the commands to initiate a telnet connection. Use the progression below to walk you through the connection, **every line starting with > is a command you will type and then press the ENTER key afterwards.** 

##Recommended Ports

We accept unencrypted and TLS connections on ports **25**, **587**, & **2525** and SSL encryption on **465**.  
>**In the below example, substitute _#_ for a valid port number port number:**

    >telnet smtp.sendgrid.net #

 
#Telnet Response:

    >telnet smtp.sendgrid.net # <enter>
    220 xxxx ESMTP service ready
    >EHLO <enter>
    250-xxxx250-8BITMIME250-SIZE 20480000250-AUTH=PLAIN LOGIN250-AUTH PLAIN LOGIN250 STARTTLS
    >auth login <enter>
    334 VXNlcm5hbWU6
    >Enter your BASE64 encoded SG username here. Encode your username to BASE64 using this tool: https://www.base64encode.org/ <enter>
    334 UGFzc3dvcmQ6
    >Enter your BASE64 encoded SG password here. Encode your password to BASE64 using this tool: https://www.base64encode.org/ <enter>
    235 Authentication successful. *

####* Getting this far indicates that your connection to smtp.sendgrid.net over the chosen port is open, and your username and password are valid!



#Sending a message using Telnet:

    >mail from: fromaddress@domain.com <enter>
    250 Sender address accepted
    >rcpt to: toaddress@domain.com <enter>
    250 Recipient address accepted
    >data <enter>
    354 Continue
    >To:To Name <enter>
    >From: From Name <enter>
    >Subject:Testing <enter>
    > <enter> *You need to enter one blank line before you start the actual body of the message
    >This is the body of the message you would like to send. <enter>
    >. <enter> *Typing a period(.) tells us you are finished, and to send the message.
    250 Delivery in progress
    >quit <enter>
    221 See you later 
    Connection to host lost.


>**Note**: If upon attempting 'telnet smtp.sendgrid.net #', you receive an error stating "'telnet' is not recognized as an internal or external command, operable program or batch file." this means that Telnet is not installed on your machine. This can be done by visiting your "Add and Remove Progams" section within your Control Panel, and installing the 'Telnet Client' and 'Telnet Server' packages within 'Turn Windows features on or off". 
