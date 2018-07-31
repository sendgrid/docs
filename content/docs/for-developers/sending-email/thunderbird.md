---
layout: page
weight: 0
title: Thunderbird
group: mail-clients
navigation:
  show: true
---

To send email using Thunderbird you will have to modify your outgoing server settings in Thunderbird accordingly. Additionally you can modify settings in Thunderbird that will allow you to include an [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html) header in your emails if you wish to leverage [categories]({{root_url}}/User_Guide/Statistics/categories.html) or other features of the SMTP API when sending mail via the Thunderbird client.

## Start by going to: 'Tools' -\> 'Account Settings'

![]({{root_url}}/images/thunderbird_1.png "thunderbird_add")

## The Settings that need to be entered include:

* **Description -** SendGrid Connection
* **Server Name -** smtp.sendgrid.net
* **Port -** 465
* **Connection security -** SSL/TLS
* **Authentication method -** Normal password
* **User Name -** your sendgrid.com username

![]({{root_url}}/images/thunderbird_2.png "thunderbird_settings")


## Incorporating SMTP API headers requires the following.

-   Select Tools | Options (Win) or Thunderbird | Preferences (Mac) from the menu in Thunderbird.
-   Open the "Advanced" category.
-   Go to the "General" tab.
-   Click "Config Editor".

![]({{root_url}}/images/thunderbird_3.png "thunderbird_advanced")

-   Enter "mail.compose.other.header" under "Filter:"
-   Double-click mail.compose.other.header.
-   Enter "X-SMTPAPI"
-   Click OK.
-   Close the configuration editor and preferences dialog.

![]({{root_url}}/images/thunderbird_4.png "thunderbird_header")

-   Restart Thunderbird
-   Create a mail message and just like you would add a CC or BCC to your email, click the drop down option that will now allow you to add a header of the type "X-SMTPAPI" in addition to "To"

![]({{root_url}}/images/thunderbird_5.png "thunderbird_compose")
