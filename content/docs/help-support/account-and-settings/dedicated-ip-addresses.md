---
seo:
  title: dedicated IP addresses
  description: dedicated IP addresses
  keywords: sendgrid ip address, ips, ip addresses, purchase IPs, add, additional, more, new, IP, address, purchase, dedicated, account, another, need, IPs, warmup, sending, originating, originate, plan, reputation, monitoring, monitor
title: Dedicated IP addresses
weight: 0
group: ip-management
layout: page
navigation:
  show: true
---

## 	What are dedicated IP Addresses?
 	
An Internet Protocol (IP) address is a unique numerical address that defines a location. At SendGrid, you can purchase IP addresses dedicated to your account. Since you are the only one sending email over this IP, the sender reputation associated with this IP is determined purely by your sending practices.


## 	Why would I want a dedicated IP address?
 	
If you are sending any significant amount of email, we typically suggest sending your marketing and transactional emails to from separate IP addresses. In addition, it is strongly recommended to associate your sending domain with your new outbound IP address (provided to you by SendGrid). This is available at no extra cost and can be accomplished by [completing an rDNS setup for your dedicated IP (here's a video tutorial and documentation help)]({{root_url}}/help-support/sending-email/how-to-set-up-reverse-dns/).

We also suggest having at least two promotional IP addresses when your volume reaches 200-300K/month.


## 	Do I have a dedicated IP address?
 	
Depending on the plan you have chosen, you either have a dedicated sending IP address or you are using a shared sending IP address.

- All Pro and Premier customers are given at least one dedicated sending IP by default. You can view any IPs attached to your account [here](https://app.sendgrid.com/settings/ip_addresses).
- Free and Essential customers send from groups of shared IP addresses, where they are grouped with senders of similar reputation and deliverability. Shared IPs addresses that these accounts send from can change without notice as your reputation changes, or as we make changes to IP groups to improve deliverability. In theses cases, you will not be able to view your shared sending IP addresses from within your account.


## 	How many dedicated IPs should I have?
 	
Please see our document on [suggested IP allocation based on volume](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).


## 	Adding an additional dedicated IP address
 	
You can purchase an additional dedicated IP Address from the IP Addresses Settings page or from your [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page.

*To add an additional dedicated IP Address:*

1. In the left navigation, select **Settings** and then click **IP Addresses**.
   Here you'll see a list of your current d IPs. Your IPs in warmup will have a 'warmup' label
1. Click **Add an IP Address**.
1. Select the number of IP addresses you would like to purchase.

Under "Additional Options" you will find the following options:

  - *Use automated IP warmup:* when checked, SendGrid will gradually increase the amount of email sent over this IP. Note: It is best practice to [warm an IP address]({{root_url}}/help-support/sending-email/warming-up-an-ip-address/) over time before sending fully over that IP address. When using automated warm up, you must have at least one other warm IP that can handle the overflow traffic from the IP in warmup.
  - *Allow my parent account to send mail using these IP addresses:* check this if you want your parent account to be able to send over this IP. If you are assigning this IP to a subuser and only want that subuser to have permission to send on this IP, leave this box unchecked.
  - *Allow my subusers to send mail using these IP addresses:* check this to select which subusers can send on this IP address


After purchasing your IP, we strongly encourage you to set up reverse DNS. For more information about setting up reverse DNS, see [How to set up reverse DNS]({{root_url}}/help-support/sending-email/how-to-set-up-reverse-dns/).

<call-out>

 Purchasing and adding dedicated IPs can only be performed by the Parent account, or Teammates with either Billing or Admin permissions.

</call-out>

<call-out>

 Additional IPs cost an extra $30 per additional IP per month. You may only add up to 3 new IP addresses to your account per month.
 
</call-out>

## 	Reputation Monitoring for dedicated IP Accounts
 	
SendGrid does not offer dedicated IP address reputation monitoring as a service.  We do not manage the reputation of your dedicated IP address since only your mail is being sent via your dedicated IP. This means that you have ultimate control over the content that is being sent out and therefore are responsible for monitoring and maintaining its reputation and listing status. However, there are many services that can help you maintain your IP’s reputation.

The following are some third party tools available to assist you in maintaining your reputation:

* [250ok](https://250ok.com/tools/blacklists/)
* [Return Path](https://returnpath.com/request-a-demo-social/?sfdc=701000000006Za6&gclid=CIO88sevkcwCFRSPfgod6u8AXA)
* [Sender Score](https://www.senderscore.org/blacklistlookup/)


In addition, SendGrid does offer [Delivery Consultation](https://sendgrid.com/marketing/delivery-consult/) services to Pro and Premier accounts that can help with deliverability and on-boarding. Services include how to maintain/improve domain and IP reputation, reviewing message content, dedicated IP configuration, and creating a custom IP warm-up plan just to name a few.

## 	Warming Up a dedicated IP Address
 	
For more information on warming up an IP Address, see [Warming up a dedicated IP]({{root_url}}/help-support/sending-email/warming-up-an-ip-address/).

## 	Assigning a Dedicated IP address to a subuser
 	
Subusers cannot set up and add reverse DNS to their own dedicated IPs, but you can set it up for them and assign it to them. You can add a dedicated IP to a subuser when you [create the subuser]({{root_url}}/help-support/account-and-settings/subusers/#create-a-subuser), or in the [Subuser management](https://app.sendgrid.com/settings/subusers) page.

 ### 	Before you begin
 	
You need to have a [subuser]({{root_url}}/help-support/account-and-settings/subusers/#create-a-subuser), and a [dedicated IP address]({{root_url}}/help-support/account-and-settings/dedicated-ip-addresses/#adding-an-additional-dedicated-ip-address) you want to assign the subuser.

*To assign a Dedicated IP to a subuser after the subuser is already created:*

1. Navigate to **Settings** and select [Subuser Management](https://app.sendgrid.com/settings/subusers).
1. Select the Subuser to assign the dedicated IP.
1. Select **Change Sending**.
1. Under I.P. Addresses, select an IP address to assign to the subuser.
1. Select **Save**

## 	Additional Resources
 	
- [Warming up a dedicated IP]({{root_url}}/help-support/sending-email/warming-up-an-ip-address/)
- [API IP Access Management]({{root_url}}/help-support/account-and-settings/ip-access-management/)
- [SendGrid billing information]({{root_url}}/help-support/account-and-settings/billing/)
