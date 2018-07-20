---
layout: page
weight: 0
title: Microsoft IIS 7.5
navigation:
  show: true
---

<call-out>

This document was written using Windows Server 2008 R2 running IIS version 7.5 and ASP.NET scripting technology for sending email. If you require SSL/TLS, you will need to configure those elements separately.

</call-out>

{% anchor h2 %}
IIS 7.5 Configuration
{% endanchor %}

Before you get going, you'll need to set up IIS in order to support SendGrid integration. This tutorial assumes that you have set up a working site and that the root directory tests as valid.

1. Open IIS 7.0/7.5 Manager in Windows
2. Click on your site (see image below, noting that your configuration will look different), and the main configuration options page will be displayed to the right
3. Double-click on the "SMTP E-mail" under the ASP.NET section (to get the below screen)
4. In the email address field: type the email address that will be the "sender"
5. Click on the "Deliver e-mail to SMTP server" radio button if not already enabled
6. In the SMTP Server field: type localhost
7. In the Port field: type 25
8. In Authentication Settings click the "Not required" option.
9. On the right side "Actions" pane: click Apply

<center>

![]({{root_url}}/images/iis_mgr_site.png "IIS Manager")

</center>

<call-out>

If you want to configure additional security to the localhost IIS 6.0 server you would set it here and match the same authentication in the IIS 6.0 GUI.

</call-out>

{% anchor h2 %}
Enable SMTP Service:
{% endanchor %}

1. Go to Start \> All Programs \> Administrative Tools \> Server Manager
2. Click on the Features item in the navigation pane
3. Click the Add Features link to start the wizard
4. Scroll down the list to the SMTP Server, and check the box. The Required Role Services dialog will appear, listing all of the dependencies that the SMTP server depends on to operate. Click Add Require Role Services.
5. Click Next twice
6. Review the list of available IIS Role Services and check any that you would like to add
7. Click Next then click Install

Once the SMTP Server service is installed, the IIS 6.0 virtual server technology is activated, and the IIS 6.0 administration snap-in will now be active.

{% anchor h2 %}
Configure IIS 6.0 to Relay Outbound Email to SendGrid
{% endanchor %}

1. Go to Start \> All Programs \> Administrative Tools \> IIS 6.0 Manager
2. Right click on the SMTP Virtual Server \#1 and select the Properties option
3. Click the box to enable logging section to assist you in configuring the server
4. Click on Properties and check the box to activate Use Local Time For File Naming And Rollover option
5. Click on the Advanced tab and check the following items: Date, Time, Client IP Address, User Name, Service Name, Server Name, Server IP Address, Server Port, Method, Protocol Status, Bytes Sent, Protocol Version, and Host.
6. Click OK
7. Click on the Access tab the click the Relay button in the Relay Restrictions section
8. Click Add, enter 127.0.0.1, and click OK. The IP will appear in the list with Access Granted
9. Click OK Only The List Below radio button and enter 127.0.0.1 in the IP address field.
10. Click on OK to return to the Access tab as shown in the previous screenshots.
11. Select the Delivery tab and click the Outbound Security button
12. Click on Basic Authentication where the Username will be your SendGrid.com username and the password will be your SendGrid.com password
13. Click OK
14. Click the Advanced button
15. In the Smart host field: enter smtp.sendgrid.net
16. Click on OK twice and you can close the IIS 6.0 admin MMC

{% anchor h2 %}
Configure Domains
{% endanchor %}
At this point you will need to configure an SMTP domain that relays messages to SendGrid. Please follow [Microsoft's instructions](http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/e2156172-7118-4ff2-9a6a-1b7dd52580fa.mspx?mfr=true).
{% anchor h2 %}
Testing Your New Configuration
{% endanchor %}

First, let's test using Telnet. Open up a telnet client within Windows. You do that in the Command Prompt by entering the following:

```
telnet localhost 25
```

<p>Now, with telnet running, enter the following commands just as you see them, pressing ENTER for each new line (if configured correctly, the server won't do anything until you enter the period):</p>

```
EHLO yourdomain.com
MAIL FROM: test@yourdomain.com
RCPT TO: recipient@anotherdomain.com
DATA
This is a test email for SendGrid operations.
.
```

The **EHLO** command with your domain inserted tells the mail server which domain it will be sending from. The **MAIL FROM:** command is a standard MIME entry for that inserts the email address of the sender. The **RCPT TO:** command tells the server to which address to send the message. The **DATA** command tells the server that the next incoming information is the body of the message. Finally, after the data is entered, the period (.) tells the server you are done. When you press Enter, it will send the message. It's quite nice to have servers to handle all this mess, isn't it!

If these manually entered commands work, then you should have the following success code returned:

``` 250….Queued mail for delivery ```

You can also test using the logging feature we had you activate earlier. You can view the logs by navigating to and opening the IIS 6.0 7.5 log files with a text editor. It will probably be under the C:\\Windows\\System32\\LogFiles directory unless you changed the log file location during installation.

Notice, highlighted in blue below, that the server sent an email and that it went through various OutboundConnectionCommand and Outbound ConnectionResponse steps. These along with the information of the various stages of EHLO, AUTH, MAIL, RCPT, DATA and quit that the email was sent successfully.

Finally, you can confirm that your configuration is working by logging into our site. Login into our web UI using your SendGrid credentials. On the main Dashboard tab you will see a list of messages that were recently sent through our service. This number should increment by one each time you either use telnet to send an email or you use a ASP.NET test script.
