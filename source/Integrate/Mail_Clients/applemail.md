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

To define the server you want to use, select the drop-down menu beneath the Subject field. This functionality allows you to send individual SMTP messages in addition to the messages you usually send through SendGrid.

{% info %}
The server you select will remain the default outgoing server unless manually changed.
{% endinfo %}

![The dropdown menu to select the SMTP server to use for this send.]({{root_url}}/images/apple_mail_4.png "SMTP server dropdown")

{% info %}
Unfortunately, there is not an easy way to add SMTP API headers to a message in Mail. 
{% endinfo %}

{% info %}
Mail can attach images in a way that is incompatible with certain email readers. Test your messages with multiple email clients to avoid this issue.
{% endinfo %}
