---
seo:
  title: API Key
  description: API Keys are a way of authenticating users and providing additional security for customer accounts. 
  keywords: API Key, authentication 
title: API Key
weight: 0
layout: page
navigation:
  show: false
---
API Keys are needed to authenticate a user in order to allow them to make API calls. There are two types of API Keys:

1. General API Keys
2. Billing API Keys

SendGrid requires a dedicated API Key for billing related API calls that is distinct from keys used for general API calls. This separation prevents a user from gaining too much access to your account and potentially abusing that access.

By assigning specific [permissions]({{root_url}}/User_Guide/Settings/api-keys.html#-API-key-permissions) to an API Key, you can limit exactly which calls an API Key is able to authenticate, very similar to the way in which a computer administrator can assign file "read" or "write" access to certain users.

For example, if you create an API Key for authenticating calls that result in creating, reading, or sending email, you want to assign the `mail.send` permission to that key to allow it to send email. However, you would not want to assign it the `billing.update` permission, since that would be outside the scope of its intended use.