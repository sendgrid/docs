---
seo:
  title: Dedicated IP Addresses
  description: Dedicated IP Addresses
  keywords: sendgrid ip address, ips, ip addresses, purchase IPs, add, additional, more, new, IP, address, purchase, dedicated, account, another, need, IPs, warmup, sending, originating, originate, plan, reputation, monitoring, monitor
title: Dedicated IP Addresses
weight: 0
layout: page
navigation:
  show: true
---

- [What are Dedicated IP Addresses?](#-What-are-Dedicated-IP-Addresses)
- [Why would I want a Dedicated IP Address?](#-Why-would-I-want-a-Dedicated-IP-Address)
- [Do I have a Dedicated IP Address?](#-Do-I-have-a-Dedicated-IP-Address)
- [How many Dedicated IPs should I have?](#-How-many-Dedicated-IPs-should-I-have)
- [Adding an additional Dedicated IP Address](#-Adding-an-additional-Dedicated-IP-Address)
- [Reputation Monitoring for Dedicated IP Accounts](#-Reputation-Monitoring-for-Dedicated-IP-Accounts)
- [Warming up a Dedicated IP Address](#-Warming-up-a-Dedicated-IP-Address)
- [Automatic IP Warmup Schedule](#-Automatic-IP-Warmup-Schedule)
- [Assigning a Dedicated IP address to a subuser](#-Assigning-a-Dedicated-IP-address-to-a-subuser)

{% anchor h2 %}
What are Dedicated IP Addresses?
{% endanchor %}

An Internet Protocol (IP) address is a unique numerical address that defines a location. At SendGrid, you can purchase IP addresses dedicated to your account. Since you are the only one sending email over this IP, the sender reputation associated with this IP is determined purely by your sending practices.


{% anchor h2 %}
Why would I want a Dedicated IP Address?
{% endanchor %}

If you are sending any significant amount of email, we typically suggest sending your marketing and transactional emails to from separate IP addresses. In addition, it is strongly recommended to associate your sending domain with your new outbound IP address (provided to you by SendGrid).  This is available at no extra cost and can be accomplished by [completing an rDNS setup for your dedicated IP (here's a video tutorial and documentation help)](https://sendgrid.com/docs/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html).

We also suggest having at least two promotional IP addresses when your volume reaches 200-300K/month.


{% anchor h2 %}
Do I have a Dedicated IP Address?
{% endanchor %}

Depending on the plan you have chosen, you either have a dedicated sending IP address or you are using a shared sending IP address.

- All Pro and Premier customers are given at least one dedicated sending IP by default. You can view any IPs attached to your account [here](https://app.sendgrid.com/settings/ip_addresses).
- Free and Essential customers send from groups of shared IP addresses, where they are grouped with senders of similar reputation and deliverability. Shared IPs addresses that these accounts send from can change without notice as your reputation changes, or as we make changes to IP groups to improve deliverability. In theses cases, you will not be able to view your shared sending IP addresses from within your account.


{% anchor h2 %}
How many Dedicated IPs should I have?
{% endanchor %}

Please see our document on [suggested IP allocation based on volume](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).


{% anchor h2 %}
Adding an additional Dedicated IP Address
{% endanchor %}

You can purchase an additional Dedicated IP Address from the IP Addresses Settings page or from your [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page.

*To add an additional Dedicated IP Address:*

1. In the left navigation, select **Settings** and then click **IP Addresses**.  
   Here you'll see a list of your current Dedicated IPs. Your IPs in warmup will have a 'warmup' label
1. Click **Add an IP Address**. 
1. Select the number of IP addresses you would like to purchase.

Under "Additional Options" you will find the following options:

  * *Use automated IP warmup:* when checked, SendGrid will gradually increase the amount of email sent over this IP. Note: It is best practice to [warm an IP address]({{root_url}}/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html) over time before sending fully over that IP address. When using automated warm up, you must have at least one other warm IP that can handle the overflow traffic from the IP in warmup.
  * *Allow my parent account to send mail using these IP addresses:* check this if you want your parent account to be able to send over this IP. If you are assigning this IP to a subuser and only want that subuser to have permission to send on this IP, leave this box unchecked.
  * *Allow my subusers to send mail using these IP addresses:* check this to select which subusers can send on this IP address

After purchasing your IP, we strongly encourage you to set up reverse DNS. For more information about setting up reverse DNS, see [link text]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html).

{% info %} Purchasing and adding dedicated IPs can only be performed by the Parent account, or Teammates with either Billing or Admin permissions. {% endinfo %}

{% info %} Additional IPs cost an extra $30 per additional IP per month. You may only add up to 3 new IP addresses to your account per month. {% endinfo %}


{% anchor h2 %}
Reputation Monitoring for Dedicated IP Accounts
{% endanchor %}

SendGrid does not offer dedicated IP address reputation monitoring as a service.  We do not manage the reputation of your dedicated IP address since only your mail is being sent via your dedicated IP. This means that you have ultimate control over the content that is being sent out and therefore are responsible for monitoring and maintaining its reputation and listing status. However, there are many services that can help you maintain your IP’s reputation.

The following are some third party tools available to assist you in maintaining your reputation:

* [250ok](https://250ok.com/tools/blacklists/)
* [Return Path](https://returnpath.com/request-a-demo-social/?sfdc=701000000006Za6&gclid=CIO88sevkcwCFRSPfgod6u8AXA)
* [Sender Score](https://www.senderscore.org/blacklistlookup/)

In addition, SendGrid does offer [Delivery Consultation](https://sendgrid.com/marketing/delivery-consult/) services to Pro and Premier accounts that can help with deliverability and on-boarding. Services include how to maintain/improve domain and IP reputation, reviewing message content, dedicated IP configuration, and creating a custom IP warm-up plan just to name a few.

{% anchor h2 %}
Warming Up a Dedicated IP Address
{% endanchor %}

For more information on warming up an IP Address, see [Warming up a dedicated IP]({{root_url}}/User_Guide/Settings/ip_warmup.html).

{% anchor h2 %}
Assigning a Dedicated IP address to a subuser
{% endanchor %}

Subusers cannot set up and add reverse DNS to their own dedicated IPs, but you can set it up for them and assign it to them. You can add a dedicated IP to a subuser when you [create the subuser]({{root_url}}/User_Guide/Settings/subusers.html#-Create-a-Subuser), or in the [Subuser management](https://app.sendgrid.com/settings/subusers) page.

{% anchor h3 %}
Before you begin
{% endanchor %}

You need to have a [subuser]({{root_url}}/User_Guide/Settings/subusers.html#-Create-a-Subuser), and a [dedicated IP address](https://sendgrid.com/docs/User_Guide/Settings/dedicated_ip_addresses.html#-Adding-an-additional-Dedicated-IP-Address) you want to assign the subuser.

*To assign a Dedicated IP to a subuser after the subuser is already created:*

1. Navigate to **Settings** and select [Subuser Management](https://app.sendgrid.com/settings/subusers).
1. Select the Subuser to assign the dedicated IP.
1. Select **Change Sending**.
1. Under I.P. Addresses, select an IP address to assign to the subuser.
1. Select **Save**

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Warming up a dedicated IP]({{root_url}}/User_Guide/Settings/ip_warmup.html)
- [API IP Access Management]({{root_url}}/User_Guide/Settings/ip_access_management.html)
- [SendGrid billing information]({{root_url}}/User_Guide/Settings/billing.html)
