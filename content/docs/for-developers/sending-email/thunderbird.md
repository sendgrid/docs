---
layout: page
weight: 0
title: Thunderbird
group: mail-clients
navigation:
  show: true
---

To send email using Thunderbird you will have to modify your outgoing server settings in Thunderbird accordingly. Additionally you can modify settings in Thunderbird that will allow you to include an [SMTP API]({{root_url}}/for-developers/sending-email/building-an-smtp-email/) header in your emails if you wish to leverage [categories]({{root_url}}/ui/analytics-and-reporting/categories/) or other features of the SMTP API when sending mail via the Thunderbird client.

## Getting started

1. Navigate to **Tools** and select **Account Settings**.

![]({{root_url}}/images/thunderbird_1.png "thunderbird_add")

2. Enter the following settings:

   * **Description -** SendGrid Connection
   * **Server Name -** smtp.sendgrid.net
   * **Port -** 465
   * **Connection security -** SSL/TLS
   * **Authentication method -** Normal password
   * **User Name -** your sendgrid.com username

![]({{root_url}}/images/thunderbird_2.png "thunderbird_settings")


## Incorporating SMTP API headers

*To incorporate SMTP API headers:*

1. Select **Tools** > **Options** (Win) or **Thunderbird** > **Preferences** (Mac) from the menu in Thunderbird.
1. Click  **Advanced**.
1. Select **General** and click **Config Editor**.

![]({{root_url}}/images/thunderbird_3.png "thunderbird_advanced")

4. Enter "mail.compose.other.header" under "Filter:"
5. Double-click **mail.compose.other.header**.
6. Enter "X-SMTPAPI"
7.  Click **OK**.
8.  Close the configuration editor and preferences dialog.

![]({{root_url}}/images/thunderbird_4.png "thunderbird_header")

9. Restart Thunderbird

Create a mail message and just like you would add a CC or BCC to your email, click the drop down option that will now allow you to add a header of the type "X-SMTPAPI" in addition to "To".


![]({{root_url}}/images/thunderbird_5.png "thunderbird_compose")
