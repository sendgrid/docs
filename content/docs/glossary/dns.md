---
layout: page
weight: 0
title: DNS
navigation:
  show: false
seo:
  title: Domain Name System (DNS)
  override: true
---

Domain Name System (DNS) translates a domain name into an IP address to find the owner’s site.

Let's say that you type the URL www.sendgrid.com into your browser. The browser contacts a DNS server to get the IP
address. A DNS server would start its search for an IP address by contacting one of the root DNS servers. The root servers
know the IP addresses for all of the DNS servers that handle the top-level domains (.COM, .NET, .ORG, etc.). Your DNS
server would ask the root for www.sendgrid.com, and the root would say, "I don't know the IP address for www.sendgrid.com,
but here's the IP address for the .COM DNS server.”

Your name server then sends a query to the .COM DNS server asking it if it knows the IP address for www.sendgrid.com. The
DNS server for the COM domain knows the IP addresses for the name servers handling the www.sendgrid.com domain, so it returns those.

Your name server then contacts the DNS server for www.sendgrid.com and asks if it knows the IP address for www.sendgrid.com.
It actually does, so it returns the IP address to your DNS server, which returns it to the browser, which can then contact the
server for www.sendgrid.com to get a Web page.

For more information:

* [CNAMES]({{root_url}}/glossary/cname/)
* The SendGrid [Email Infrastructure Guide](https://go.sendgrid.com/SendGrid-Infrastructure-Guide.html?mc=Direct&mcd=https://sendgrid.com/docs/)
