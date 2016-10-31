---
st:
  published_at: 2016-10-31
  type: Classroom
seo:
  title: 550 Unauthenticated Senders Not Allowed
  description: What does 550 Unauthenticated senders not allowed mean?
  keywords: sender, senders, unauthenticated, 550, error
title: 550 Unauthenticated Senders Not Allowed
weight: 0
layout: page
navigation:
  show: true
---

If you're getting an "Unauthenticated Senders Not Allowed" error, the problem usually lies in authenticating with our SMTP server. This error gets triggered when there was an attempt to hand over an email message through smtp.sendgrid.net before authenticating the connection with your SendGrid username and password.

To fix this issue, you'll want to make sure that you've configured your setup to connect to smtp.sendgrid.net using authentication, and that the credentials you're using are the same credentials you use to login to the SendGrid.

If you're using cPanel/Exim, you'll want to make sure it's configured to authenticate every time it connects to smtp.sendgrid.net.
