---
seo:
  title: IP Access Management
  description: Control which IPs have access to your SendGrid account.
  keywords: mail settings, access management, IP Whitelisting, security
title: IP Access Management
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
What is IP access management?
{% endanchor %}

[IP Access Management]({{root_url}}http://app.sendgrid.com/settings/access) is a security feature that allows you to control who can access your SendGrid account based on their [IP address]({{root_url}}/Glossary/ip-address.html). After you whitelist an IP address, you can only access the SendGrid UI, API, and SMTP relay if you are connecting from a whitelisted IP address. Any other access attempts will be blocked. This is a powerful security tool that you can use to help prevent malicious activity on your account.

{% info %}
There is no limit on how many IP addresses you can whitelist.
{% endinfo %}

{% warning %}
It is possible to remove your own IP address from your whitelist, thus [blocking your own access to your account]({{root_url}}/Classroom/Troubleshooting/Account_Administration/ip_access_management_has_locked_me_out_of_my_account.html). While we are able to restore your access, we do require thorough proof of your identify and ownership of your account. We take the security of your account very seriously, and wish to prevent any "bad actors" from maliciously gaining access to your account.

Your current IP is clearly displayed to help prevent you from accidentally removing it from the whitelist.
{% endwarning %}

{% warning %}
If you do not access SendGrid via a static IP address (e.g. via VPN or from a business internet service), setting up IP Access Management may result in being locked out of your SendGrid account. If you do discover that you have locked yourself out of your account, please visit our [Classroom]({{root_url}}/Classroom/Troubleshooting/Account_Administration/ip_access_management_has_locked_me_out_of_my_account.html) for suggestions on how to regain access and tips on how to prevent this in the future.
{% endwarning %}

{% anchor h2 %}
Whitelisting an IP Address
{% endanchor %}

There are several different ways to whitelist an IP address. If you navigate to the IP Access Management page under Settings, you will see a list of any currently whitelisted IP addresses and a list of IPs that recently attempted to access your account.

![]({{root_url}}/images/ip_access_management.png)

{% anchor h3 %}
Recent Access Attempts
{% endanchor %}

Under Recent Access Attempts, you will see a list of recent IPs that attempted to connect to your account, regardless of whether or not they are whitelisted. You will also see some additional information about those IPs, such as the date of the first and most recent access attempt, the physical location of the IP, and the method by which they attempted to access your account.

You can whitelist one of these IPs by clicking the gear icon in the row of the IP you would like to whitelist, then clicking “Add To Whitelist”.

![]({{root_url}}/images/add_ip_from_recent_access_attempts.png)

{% anchor h3 %}
Adding IP Addresses Manually
{% endanchor %}

To manually whitelist one or more IP addresses, click the Add IP Addresses button.

![]({{root_url}}/images/add_ip_address_button.png)

You will see a dialogue box presenting you with a blank form in which you may enter a single IP address or multiple IP addresses separated by a space, comma, or on separate lines.

![]({{root_url}}/images/ip_access_management_add_ip.png)

It is possible for advanced users to use CIDR notation to whitelist a range of IP addresses. To do so, simply enter your routing prefix followed by a `/` and then the number of bits in your routing mask. For example: `192.168.100.14/24`. 

{% warning %}
Explaining CIDR notation is beyond the scope of this article, and we only recommend that advanced users use this notation when whitelisting IPs. If you are unfamiliar with CIDR notation, we recommend that you enter each IP individually when whitelisting a range of IPs.
{% endwarning %}

To enter a range of IP addresses using a “wildcard”, simply add an asterisk to the end of the IP. For example, `25.203.44.*` would include all IPs that begin with `25.203.44`.

After entering the IP addresses you would like to whitelist, click Save.

{% info %}
If you remove every IP address from your whitelist, you will again be able to log in to your account from any IP address.
{% endinfo %}

For additional information about using IP Access Management through our API, see our [API Reference]({{root_url}}/API_Reference/Web_API_v3/ip_access_management.html).
