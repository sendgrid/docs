---
layout: page
weight: 0
title: Exchange 2010
navigation:
  show: true
---

If your organization is using Microsoft's Exchange 2010 for email services, this document outlines the basics required in order to use SendGrid for SMTP. This requires the configuration of a send connector in the Exchange Management Console.

{% warning %}
This documentation assumes that you already have a working installation of Exchange 2010 that is configured for client access and is able to send messages to the public internet. **If you do not configure this connector correctly it may result in the unintended delivery of messages through your SendGrid account, resulting in the consumption of account emails.** 
{% endwarning %}

{% info %}
[For more information regarding Send Connectors, check out this swank TechNet documentation on the subject](http://technet.microsoft.com/en-us/library/aa998662.aspx).
{% endinfo %}

The configuration of a new send connector is straight forward. It is the associated configurations that you may require in order to properly control access to the connector that may be complicated. Let's start with just sending email through SendGrid:

1. Login to your Exchange server or a server that has the Exchange Management Console installed for administrative purposes.
2. Go to **Start \> All Programs \> Microsoft Exchange Server 2010** and click on the **Exchange Management Console** item.
3. Roll open the **Organization Configuration** list and select **Hub Transport**.
4. Click on **New Send Connector** in the Actions sidebar.
5. Name the Send Connector whatever you like and select Internet for the Intended Use pull-down. This allows for the integration with an authenticated SmartHost and adds the default send permissions required by Exchange 2010 to route messages through an external host that is not a part of the domain forest.
6. Click **Next**.
7. Click Add and specify the allowed address space to which the connector can send messages. If you want to send to anyone on the internet, then you would insert an "\*" in the Address field. If you want to send only to a specific domain, enter that domain. If you want to allow all sub-domains you can check the box, but I prefer to notate that literally like so: \*.SAMPLEDOMAIN.COM. Insert a high cost (100 is the top, so choose wisely) so that the connector is not used inadvertently.
8. Click **Next**.
9. On the Network Settings page, select the **Route mail through the following smart hosts** item.
10. Click **Add**.
11. Select the **Fully qualified domain name (FQDN)** item, and enter: *smtp.sendgrid.net*
12. Click **Next**.
13. In the **Configure smart host authentication settings** page, select the **Basic Authentication** option and check the **Basic Authentication over TLS** checkbox, then ***enter your SendGrid username and password***.
14. Click **Next**.
15. If you only have one Exchange server, it should automatically appear. If you want to use another server(s) in your domain click Add to locate the servers you want to allocate to this connector.
16. Click **Next**.
17. Verify your settings and, when satisfied, click **New**.
18. If the configuration completes correctly, you will receive positive notification. You can then click on **Finish**.

Once you have completed installation of the connector, you will need to configure your server(s) to allow limited access to the new send connector. You can read more about [Send Connector permissions][send-connector-permissions].

[send-connector-permissions]: http://technet.microsoft.com/en-us/library/aa998662(v=exchg.141).aspx
