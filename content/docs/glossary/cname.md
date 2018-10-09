---
layout: page
weight: 0
title: CNAME
seo:
  title: CNAME
  override: true
  description: The CNAME record creates an alias for subdomain.yourdomain.com and points it to another domain
navigation:
  show: false
---

The CNAME record (canonical name record) creates an alias for subdomain.yourdomain.com and points to sendgrid.net. The CNAME is needed for our click and open tracking features in order for those statistics to be routed back to your SendGrid account. This is also what your messages will be signed by, so your recipients will be able see your CNAME.

What it should look like:

```
subdomain.yourdomain.com. |  CNAME  |  sendgrid.net.
```

If your account has a dedicated IP and you are looking to set up [reverse DNS]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/) for your IP, you will need to add some records to your DNS host. In this group of records you will have 1 CNAME record.

If you are having trouble validating your CNAME record, please see our [sender authentication troubleshooting]({{root_url}}/ui/account-and-settings/troubleshooting-sender-authentication/).
