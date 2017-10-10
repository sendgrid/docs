---
st:
  published_at: 2016-06-07
  type: Classroom
seo:
  title: Why am I seeing “Credential Resource Already Exists” when I am creating a subuser or credential?
  description: Having trouble creating a username...
  keywords: username, credential, subuser, exists, resource
title: Why am I seeing “Credential Resource Already Exists” when I am creating a subuser or credential?
weight: 0
layout: page
navigation:
  show: true
---

If you are seeing a message that states "Credential Resource Already Exists" when trying to create a new subuser or credential it is because the chosen username is already in use in the SendGrid user database. As it turns out, every username must be unique and not in use by any other SendGrid account. In order to successfully create a new subuser or credential after receiving this message, you will need to change the chosen username slightly by adding additional characters or choosing a new username.
