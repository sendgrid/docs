---
layout: page
weight: 0
title: Apple Mail
navigation:
  show: true
---

These instructions show how to add an SMTP server to an existing Mail account, but you can also add these settings at the account creation stage.

{% anchor h2 %}	Adding SMTP settings
{% endanchor %}	
Go to Mail -\> Preferences (⌘,). On the account you want to edit, click the tab that says **Server Settings**, then click the **Outgoing Mail Account** dropdown and select **Edit SMTP Server List...**.

![Mail, Preferences, Outgoing Mail Server (SMTP) dropdown, Edit SMTP Server List]({{root_url}}/images/NewAppleMail_Step_1.png "Edit SMTP Server List")

Next click the **+** under the list of SMTP servers, and add a new one.

![The plus button to click to add an SMTP server]({{root_url}}/images/NewAppleMail_Step_2.png "Add SMTP Server")

Then enter the server details:

-   **Description:** SendGrid
-   **User Name:** SendGrid account username
-   **Password:** SendGrid account password
-   **Host Name:** smtp.sendgrid.net
-   Uncheck **Automatically manage connection settings** if you want to specify Custom Ports, Encryption Type and       Authentication
-   **Port:** Specify port
-   **Encryption:** Check or uncheck Use TLS/SSL
-   **Authentication:** Password


</p>
![Settings for Mail to use SendGrid SMTP]({{root_url}}/images/NewAppleMail_Step_3.png "SendGrid SMTP server settings")

Now the SendGrid SMTP Server can be specified on the **Accounts** tab of the **Preferences** window in the **Outgoing Mail Account** dropdown. Once this is selected, mail sent out of Apple Mail going forward will use the SMTP server chosen until specified otherwise.

![The dropdown menu to select the SMTP server to use for this send.]({{root_url}}/images/NewAppleMail_Step_4.png "SMTP server dropdown")

<call-out>

Unfortunately, there is not an easy way to add SMTP API headers to a message in Mail.

</call-out>

{% anchor h2 %}	Attachment Compatibility
{% endanchor %}	
Mail will sometimes attach images in a way that is incompatible with other email readers.  However, this behavior can be be changed so that Mail will send more traditional non-inline attachments.

1. Open Terminal (found in Finder > Applications > Utilities).
1. In Terminal, paste the following: ```defaults write com.apple.mail DisableInlineAttachmentViewing -bool yes```.
1. Press return.
1. Restart the Mail app.

If you wish to restore the normal behavior of Mail, repeat the steps above while using the following command: ```defaults write com.apple.mail DisableInlineAttachmentViewing -bool yes```.
