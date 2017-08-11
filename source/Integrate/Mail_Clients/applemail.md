---
layout: page
weight: 0
title: Apple Mail
navigation:
  show: true
---

These instructions show how to add an SMTP server to an existing Mail account, but you can also add these settings at the account creation stage.

{% anchor h2 %}
Adding SMTP settings 
{% endanchor %}

Go to Mail -\> Preferences (⌘,). On the account you want to edit, click the dropdown that says **Outgoing Mail Server (SMTP):**, and select **Edit SMTP Server List...**.

![Mail, Preferences, Outgoing Mail Server (SMTP) dropdown, Edit SMTP Server List]({{root_url}}/images/apple_mail_1.png "Edit SMTP Server List")

Next click the **+** under the list of SMTP servers, and add a new one.

![The plus button to click to add an SMTP server]({{root_url}}/images/apple_mail_2.png "Add SMTP Server")

Then enter the server details:

-   **Server Name:** smtp.sendgrid.net
-   **Description:** SendGrid
-   **Ports:** Use default ports
-   **Encryption:**Use Secure Sockets Layer (SSL)
-   **Authentication:** Password
-   **User Name:** SendGrid account username
-   **Password:** SendGrid account password

</p>
![Settings for Mail to use SendGrid SMTP]({{root_url}}/images/apple_mail_3.png "SendGrid SMTP server settings")

When writing a message, there is a dropdown beneath the Subject field, where you can define the outgoing server you wish to use. By doing so, you can send individual messages to your regular SMTP and the messages you need to send through SendGrid can go through us. Please note that when you select the outgoing server, it will be remembered until you change the selection.

![The dropdown menu to select the SMTP server to use for this send.]({{root_url}}/images/apple_mail_4.png "SMTP server dropdown")

{% info %}
Unfortunately, there is not an easy way to add SMTP API headers to a message in Mail. 
{% endinfo %}

{% info %}
Mail sometimes attaches images in a way that is incompatible with other email readers, however there are external online resources to help you work around these incompatibilities.
{% endinfo %}
