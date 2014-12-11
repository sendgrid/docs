---
seo:
  title: IP Whitelabeling
  description: IP whitelabeling allows you to improve your email deliverability by changing the domains referenced in email headers and links.
  keywords: ip whitelabeling, ip address
title: IP Whitelabeling
weight: 0
layout: page
navigation:
  show: true
---

IP whitelabeling allows you to improve your [email deliverability]({{root_url}}/Glossary/email_deliverability.html) by changing the domains referenced in email headers and links. Once an account has been properly whitelabeled, SendGrid is completely masked from the sending process, and emails appear to have been sent directly from you.

IP whitelabeling is the process of re-naming the domain name system (DNS) in your registrar or web-hosting provider so that messages reference your domain rather than SendGrid’s. IP whitelabeling effectively masks that SendGrid is sending your email messages on your behalf.

For SendGrid customers with dedicated IP addresses, the Whitelabel Wizard is a powerful tool that allows you to take advantage of IP whitelabeling and improve the deliverability of your emails.

{% anchor h2 %}
What IP Whitelabeling Affects
{% endanchor %}

Depending on the set of apps you have chosen to use, when you send an email via SendGrid, links can either be altered or added to the message. These links include:

* Unsubscribe Links
* Click Tracking
* Open Tracking

In addition to these links, SendGrid adds email headers to messages so that remote servers can make sure the email is genuine and legitimate. For non-whitelabeled accounts, these headers and links reference SendGrid’s sendgrid.me or sendgrid.com domain.

{% anchor h2 %}
The Whitelabel Wizard
{% endanchor %}

IP whitelabeling uses the [Whitelabel Wizard]({{root_url}}/User_Guide/Setting_Up_Your_Server/Whitelabeling/whitelabel_wizard.html) to generate DNS records that you can take and add to your domain’s DNS zone file. Once completed, the IP address will then resolve back to your domain, masking SendGrid in the sending process. Emails that have gone through IP whitelabeling will appear to have been sent from you and your domain.

As an example, if an email is sent from a non-whitelabeled account, Gmail will identify the message as being sent “via sendgrid.com.” However, with an account that has used IP whitelabeling, the message only references your domain. By whitelabeling your IP address, you can improve deliverability and increase your IP reputation.

IP whitelabeling is only available to customers with [Silver, Gold, or Platinum packages](https://sendgrid.com/transactional-email/pricing). If you want to improve your email deliverability as much as possible, we suggest upgrading your account so that you have a dedicated IP address that you can then whitelabel.

[Contact SendGrid’s support team](https://sendgrid.zendesk.com/hc/en-us) today to learn more about IP whitelabeling, or watch our [Whitelabel Wizard video]({{root_url}}/VidGrid/whitelabel.html) to learn about whitelabeling and why you should use it.