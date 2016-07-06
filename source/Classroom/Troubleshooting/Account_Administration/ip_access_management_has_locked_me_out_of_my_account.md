---
seo:
  title: IP Access Management has locked me out of my account
  description: IP Access Management has locked me out of my account
  keywords: IP, access, management, locked, out, blocked, reactivate, login, can't
title: IP Access Management has locked me out of my account
weight: 0
layout: page
zendesk_id: 
navigation:
  show: true
---
 
![]({{root_url}}/images/IPAM_login_failure.png)

It's possible under some circumstances to accidentally lock yourself out of your Sendgrid account when using IP Access Management. This article aims to help you get access again, as well as provide tips for avoiding lock-out in the future. 

1. **Try accessing the account from the IP(s) you have previously whitelisted.** This may require you to log in from a different physical location, or enlist the help of a colleague who resides at one of those networks. 

2. If you have tried the above suggestion, and access is not possible, please create a Support ticket by emailing support@sendgrid.com. Please try to resolve access yourself before contacting support, as our agents will require that you attempt access from other IPs first before the process can move forward. 

3. Once you have created a ticket, one of our agents will work with you to verify ownership of the account in a number of ways. We reserve the right to be very thorough with this process, as we treat the account security of our customers with very high sensitivity.  

4. Once we can fully verify the ownership of your account to our satisfaction, we can provide access to your IP. After you are able to log back into your account, you can modify your IP access as needed or even disable the feature entirely.

![]({{root_url}}/images/IPAM_screengrab.png)

{% anchor h2 %}
Tips for not getting locked out:
{% endanchor %}

**Add yourself first:** When initially setting up IP Access for your Sendgrid account, it's a good idea to always add your current public address first, so you don't lock yourself out accidentally right away. You can always find the public IP address of your current network by visiting whatismyipaddress.com.

**Use caution with Residential Networks:** Keep in mind that if you are connecting from a residential network, it is not uncommon for ISPs to change the public IP addresses of their customers as they see fit and also without warning. This may result in a scenario where you suddenly cannot access your Sengrid account from your house, so use caution when whitelisting IPs from residential networks. 

**VPNs/VMs:** If you use a VPN to connect to your corporate network from home, or wish to connect from a virtual machine, ask your IT department for the correct IP that you should add to IP Access Management. 
