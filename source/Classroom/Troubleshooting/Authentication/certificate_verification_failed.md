---
seo:
  title: Certificate verification failed for smtp.sendgrid.net
  description: Certificate verification failed for smtp.sendgrid.net
  keywords: certificate, authority, bundle, godaddy
title: Certificate verification failed for smtp.sendgrid.net
weight: 0
layout: page
zendesk_id: 200182008
navigation:
  show: true
---

| 

If you receive this kind of error : "certificate verification failed for [smtp.sendgrid.net](http://smtp.sendgrid.net/)[198.37.144.225]:587: untrusted issuer /C=US/O=The Go Daddy Group, Inc./OU=Go Daddy Class 2 Certification Authority"

 

The connection is still encrypted, it's just that your server doesn't have the necessary CA (ceritificate authority) certs to confirm that our certificate is valid.

You can download the GoDaddy CA bundle from [https://certs.godaddy.com/anonymous/repository.pki](https://certs.godaddy.com/anonymous/repository.pki) (grab the one called "gd\_bundle-g2-g1.crt"). Save that somewhere on your server, for instance "/etc/postfix/ssl/gd\_bundle-g2-g1.crt". Finally, tell Postfix where to find it by adding or editing the following line in /etc/postfix/ [main.cf](http://main.cf/):

 

"smtp\_tls\_CAfile = /etc/postfix/ssl/gd\_bundle-g2-g1.crt"

 

Restart Postfix to make the change take effect.

 

If the mailserver communicates with more than just us, You'll want to add the above to your existing CA bundle (frequently called ca-bundle.crt).

 |

