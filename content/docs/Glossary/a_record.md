---
seo:
  title: A Record
  description: The A record links an IP address to a domain
  keywords: A record, DNS, domain, IP address, Domain Name Service
title: A Record
weight: 0
layout: page
navigation:
  show: false
---

The A record is what links your dedicated IP address to your chosen subdomain. Creating this record will, for example, point traffic for o1.subdomain.yourdomain.com back to your dedicated IP, and vice versa.

You can create multiple A records for a domain with as many IP addresses as you wish, however you can only [whitelabel]({{root_url}}/User_Guide/Setting_Up_Your_Server/Whitelabeling/index.html) one IP to one domain at a time.

{% anchor h2%}
Example A Record
</page-anchor>

What it should look like:
`em.yourdomain.com. | A | 192.168.250.1`
