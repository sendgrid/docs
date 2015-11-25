---
seo:
  title: What are Subusers?
  description: What are Subusers?
  keywords: segmentation, subuser, subaccount, account
title: What are Subusers?
weight: 0
layout: page
zendesk_id: 200181918
navigation:
  show: true
---

Subusers are child accounts available for all Pro&nbsp;level and higher customers. Subusers share the same overall credit pool but have their own unique SMTP credentials, settings, statistics, and site login. Subusers can be Whitelabeled to separate sending domains by purchasing additional sending IPs for $20 per IP per month, creating a new Subuser assigned to the IP, and then completing the Whitelabel&nbsp;via the subuser management area of your account settings.

There are three typical use cases for Subusers:

1. Internal Use - Using Subusers to separate statistics or create accounts with different settings.&nbsp;

2. External Use, Unwhitelabeled Sending - If you are creating a Subuser to send messages on behalf of a new domain, you can either send on behalf of your current Whitelabel or you can purchase a new IP to Whitelabel a new Subdomain. Creating a Subuser that uses the parent account IP and Whitelabel results in a&nbsp; ['via' or 'on behalf of' message](http://support.sendgrid.com/entries/21297991-my-emails-are-displaying-as-on-behalf-of-or-via-in-some-mail-clients)&nbsp;displaying in some email clients if you use a FROM domain that does not match the Whitelabeled domain.&nbsp;These settings can be adjusted in the Whitelabels section of your account settings.

3. External Use, Whitelabeled Sending - To send on behalf of a different domain and have the messages fully Whitelabeled, you need to purchase a new sending IP and Whitelabel that IP to the new sending IP. Please review our [Creating & Whitelabeling A New Subuser To A New Domain](http://support.sendgrid.com/entries/21758936-creating-whitelabeling-a-subuser-to-a-new-sending-domain) article for more information.

Subusers are created and managed in the Subuser Management section of your account settings.
