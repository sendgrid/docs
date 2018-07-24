---
layout: page
weight: 0
title: How to set up reverse DNS
navigation:
  show: true
seo:
  title: How to set up reverse DNS
  override: true
  description: Set up reverse DNS to improve your deliverability and security of your emails.
  keywords: reverse DNS, rDNS, whitelabel, IP whitelabel
---

<iframe src="https://player.vimeo.com/video/265831363" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<call-out>

You can only set up reverse DNS if you have a dedicated IP.

</call-out>

- [What is reverse DNS?](#-What-is-reverse-DNS)
- [Key terminology](#-Key terminology)
    - [IP Address](#-IP-Address)
    - [DNS](#-DNS)
    - [A Record](#-A-Record)
    - [Subdomain](#-Subdomain)
- [Setting up reverse DNS](#-Setting-up-reverse-DNS)
    - [Before you begin](#-Before-you-begin)
    - [Verifying](#-Verifying)
- [Reverse DNS for a subuser](#-Reverse-DNS-for-a-subuser)
- [What do I do if I have more than 10 IPs](#-What-do-I-do-if-I-have-more-than-10-IPs)

{% anchor h2 %}	What is reverse DNS?
{% endanchor %}	
Setting up reverse DNS on an IP address allows mailbox providers to verify the sender when they do a reverse DNS lookup upon receipt of the emails you send. When you update your DNS provider with a DNS record provided by SendGrid, and then send mail over your IP, the recipient's email service provider performs a reverse DNS lookup (rDNS) using an A Record (address record). An A Record maps your domain to your IP address. When a mailbox provider looks up your A Record, they see your SendGrid IP address. When they look at your IP address, they see the rDNS that matches your A Record. This circular checking proves your SendGrid IP association with your domain and your domain association with your SendGrid IP.

{% anchor h2 %}	Key terminology
{% endanchor %}	
{% anchor h3 %}	IP Address
{% endanchor %}	
An Internet Protocol (IP) Address is a unique numerical address that defines an internet location. These addresses have 4 sets of numbers separated by periods. For example, 127.0.0.1 is an IP address. At SendGrid, you can be on a shared IP address, or you can have a dedicated IP address. We recommend a dedicated IP address for people sending high volumes of email or for people who want control over the quality of mail sent on the same IP as theirs. The aggregate performance of all the senders who use the IP determines its reputation.

{% anchor h3 %}	DNS
{% endanchor %}	
DNS stands for Domain Name System. This is a naming system for domains on the internet. When SendGrid refers to your DNS, we are talking about your domain name that you want to send emails from. When we talk about your DNS provider, we are talking about the service that hosts your domain name. For example, GoDaddy, Rackspace, or Cloudflare. For more information about DNS, see our [DNS glossary page]({{root_url}}/glossary/dns.html).

{% anchor h3 %}	A Record
{% endanchor %}	
The A Record (address record) links your dedicated IP address to your chosen domain. It does this by mapping your domain to your IP address through records that you export from SendGrid and upload into your DNS host.

If your domain+subdomain is `marketing.example.com`, and your dedicated IP address is `101.10.10.101`, setting up the SendGrid A Record links your domain with your dedicated IP address - so anything sent over your domain associates with your dedicated IP, and anything sent over your dedicated IP associates with your domain.

{% anchor h3 %}	Subdomain
{% endanchor %}	
A subdomain is a prefix appended to your domain and used for tracking and reporting on your validated IP. Your subdomain cannot be the same as your other IP subdomains. It's a good idea to check your current DNS settings with your DNS provider to confirm that the subdomain you would like to use is available. Try to pick a name for this subdomain that represents the type of email you will send using this new domain whitelabel. For example, "marketing" or "billing". Do not use underscores in your subdomain. We create your DNS records based on the subdomain, and DNS providers do not accept DNS records that contain underscores.

<call-out type="warning">
 Your sending reputation is determined by the reputation of your root, or top-level, domain. This is true even if you have several different subdomains with the same authenticate domain. For example, both `billing.example.com` and `marketing.example.com` will share the reputation of `example.com`.
</call-out>

{% anchor h3 %}	Before you begin
{% endanchor %}	
To set up reverse DNS, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up reverse DNS.

*To set up and verify reverse DNS:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/sender_auth).
1. In the reverse DNS section, click **Get Started**.
1. Next, select the IP to set up reverse DNS.
1. Add a subdomain. For more information about picking a subdomain, see [Subdomains](#-Subdomain).
1. Select or enter a domain you want to associate with the IP. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your from address on the emails you are sending out. For example, if I am setting up the domain `example.sendgrid.com`, I would set my domain to be `sendgrid.com`. Click **Save** and then **Confirm**. An individual IP address can only have one reverse DNS set up.
1. Next, you need to add all of the A Records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your A Records to some popular DNS service providers, check out these [videos](https://sendgrid.com/docs/help-support/getting-started/dns-providers.html).

<call-out>

If you plan to send from multiple domains, you should set up reverse DNS for at least one IP address per domain.

</call-out>

It can take up to 48 hours for the records to verify after you upload them to your DNS host, so you will likely have to come back later to verify.

{% anchor h3 %}	Verifying
{% endanchor %}	
Once you add the A Records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/sender_auth) and click **Verify**.

<call-out>

If you click verify, and only half of your A name records verify, this usually means that you need to wait a bit longer. It's also possible that you entered one of your records in incorrectly. For other troubleshooting information, see [Sender authentication troubleshooting]({{root_url}}/help-support/getting-started/troubleshooting-sender-authentication.html).

</call-out>

Now your dedicated sending IP is associated with your domain. You only need to update your reverse DNS if you add additional dedicated IPs to your account.

{% anchor h2 %}	Reverse DNS for a subuser
{% endanchor %}	
Only a parent account can set up reverse DNS for an IP address. For a subuser account to have an IP that has reverse DNS set up, the parent account needs to buy the IP, set up reverse DNS and then [assign the IP to the subuser]({{root_url}}/help-support/account-and-settings/dedicated-ip-addresses.html#-Assigning-a-Dedicated-IP-address-to-a-subuser).

{% anchor h2 %}	What do I do if I have more than 10 IPs?
{% endanchor %}	
There is a character limit in SPF (sender policy framework) records that means that if you have more than 10 IP addresses, they will not fit in the record. When this is true, we will provide you with the generic SendGrid SPF record which includes all IPs at SendGrid, not just yours. If you would like to secure your SPF record only to include your IPs, you can chain multiple SPF records together manually. For more information see Open SPF’s [website](http://www.openspf.org/).

{% anchor h2 %}	Additional resources
{% endanchor %}	
- [How to set up domain authentication]({{root_url}}/help-support/getting-started/how-to-set-up-domain-authentication.html)
- [How to set up link branding]({{root_url}}/help-support/getting-started/how-to-set-up-link-branding.html)
- [Troubleshooting]({{root_url}}/help-support/getting-started/troubleshooting-sender-authentication.html)
