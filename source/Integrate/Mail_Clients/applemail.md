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

When writing a message, there is a dropdown beneath the Subject field, where you can define the outgoing server you wish to use. This way, you can send individual messages to your regular SMTP, and the messages you need to send through SendGrid can go through us. Please note that when you select this, it will be remembered until you change the selection.

![The dropdown menu to select the SMTP server to use for this send.]({{root_url}}/images/apple_mail_4.png "SMTP server dropdown")

{% info %}
Unfortunately, there is not an easy way to add SMTP API headers to a message in Mail. 
{% endinfo %}

{% anchor h2 %}
Attachment Compatibility
{% endanchor %}

Mail will sometimes attach images in a way that is incompatible with other email readers.  However, this behavior can be be changed so that Mail will send more traditional non-inline attachments.

1. Open Terminal (found in Finder > Applications > Utilities).
1. In Terminal, paste the following: ```defaults write com.apple.mail DisableInlineAttachmentViewing -bool yes```.
1. Press return.
1. Restart the Mail app.

If you wish to restore the normal behavior of Mail, repeat the steps above while using the following command: ```defaults write com.apple.mail DisableInlineAttachmentViewing -bool yes```.
