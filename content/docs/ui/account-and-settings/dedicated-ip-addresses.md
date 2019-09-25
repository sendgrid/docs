---
seo:
  title: Dedicated IP addresses
  description: Dedicated IP addresses
  keywords: sendgrid ip address, ips, ip addresses, purchase IPs, add, additional, more, new, IP, address, purchase, dedicated, account, another, need, IPs, warmup, sending, originating, originate, plan, reputation, monitoring, monitor
title: Dedicated IP addresses
weight: 0
group: ip-management
layout: page
navigation:
  show: true
---

##     What are dedicated IP Addresses?

An Internet Protocol (IP) address is a unique numerical address that defines a location. At Twilio SendGrid, you'll receive a dedicated IP address with either a Pro Email API plan or an Advanced Marketing Campaigns plan. If you have one of these accounts, you can purchase additional IP addresses dedicated to your account. For more information, see our [pricing](https://sendgrid.com/pricing/) page. Since you are the only one sending email over this IP, the sender reputation associated with this IP is determined purely by your sending practices.


##     Why would I want a dedicated IP address?

If you are sending any significant amount of email, we typically suggest sending your marketing and transactional emails from separate IP addresses. In order to do this, you'll need to set up [IP Pools]({{root_url}}/ui/account-and-settings/ip-pools/). In addition, it is strongly recommended to associate your sending domain with your new outbound IP address (provided to you by SendGrid). This is available at no extra cost and can be accomplished by [completing an rDNS setup for your dedicated IP]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/).

We also suggest having at least 2 promotional IP addresses when your volume reaches 200-300K/month.


##     Do I have a dedicated IP address?

Depending on the plan you have chosen, you either have a dedicated sending IP address or you are using a shared sending IP address.

- All Pro or Premier Email API and Advanced Marketing Campaigns customers get one dedicated sending IP by default. You can view any IPs attached to your account [here](https://app.sendgrid.com/settings/ip_addresses).
- Free and Essential customers send from groups of shared IP addresses, where they group with senders of similar reputation and deliverability. Shared IPs addresses that these accounts send from can change without notice as your reputation changes, or as we make changes to IP groups to improve deliverability. In these cases, you will not be able to view your shared sending IP addresses from within your account.


##     How many dedicated IPs should I have?

Please see our document on [suggested IP allocation based on volume]({{root_url}}/assets/IPWarmupSchedule.pdf).


##     Adding an additional dedicated IP address

You can purchase an additional dedicated IP Address from the IP Addresses Settings page or from your [Plan & Billing Details](https://app.sendgrid.com/settings/billing) page.

*To add an additional dedicated IP Address:*

1. In the left navigation, select **Settings** and then click **IP Addresses**.
   Here you'll see a list of your current d IPs. Your IPs in warmup will have a 'warmup' label.
1. Click **Add an IP Address**.
1. Select the number of IP addresses you would like to purchase.

Under "Additional Options" you will find the following options:

  - **Use automated IP warmup**: SendGrid will gradually increase the amount of email sent over this IP. Note: It is best practice to [warm an IP address]({{root_url}}/ui/sending-email/ip-warmup-for-the-new-marketing-campaigns-experience/) over time before sending fully over that IP address. When using automated warmup, you must have at least one other warm IP that can handle the overflow traffic from the IP in warmup.
  - **Allow my parent account to send mail using these IP addresses**: You want your parent account to be able to send over this IP. If you are assigning this IP to a subuser and only want that subuser to have permission to send on this IP, leave this box unchecked.
  - **Allow my subusers to send mail using these IP addresses**: Select any subusers you would like to send on this IP address.


After purchasing your IP, we strongly encourage you to set up reverse DNS. For more information about setting up reverse DNS, see [How to set up reverse DNS]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/).

<call-out>

Only the Parent account or Teammates with either Billing or Admin permissions can purchase and add dedicated IPs.

</call-out>

<call-out>

Additional IPs cost an extra $30 per additional IP per month. You may only add up to 3 new IP addresses to your account per month.

</call-out>

##     Reputation Monitoring for dedicated IP Accounts

Twilio SendGrid does not offer dedicated IP address reputation monitoring as a service. We do not manage the reputation of your dedicated IP address since your mail only sends via your dedicated IP. This means that you have ultimate control over the content that is being sent out and therefore are responsible for monitoring and maintaining its reputation and listing status. However, many services can help you maintain your IP’s reputation.

The following are some third party tools available to assist you in maintaining your reputation:

* [250ok](https://250ok.com/tools/blacklists/)
* [Return Path](https://returnpath.com/request-a-demo-social/?sfdc=701000000006Za6&gclid=CIO88sevkcwCFRSPfgod6u8AXA)
* [Sender Score](https://www.senderscore.org/blacklistlookup/)


In addition, SendGrid offers [Expert Services](https://sendgrid.com/solutions/expert-services/) services to Pro and Premier accounts that can help with deliverability and onboarding. Services include how to maintain/improve domain and IP reputation, reviewing message content, dedicated IP configuration, and creating a custom IP warmup plan to name a few.

##     Warming Up a dedicated IP Address

For more information on warming up an IP Address, see [Warming up a dedicated IP]({{root_url}}/ui/sending-email/ip-warmup-for-the-new-marketing-campaigns-experience/).

##     Assigning a dedicated IP address to a subuser

Subusers cannot set up and add reverse DNS to their own dedicated IPs, but you can set it up for them and assign it to them. You can add a dedicated IP to a subuser when you [create the subuser]({{root_url}}/ui/account-and-settings/subusers/#create-a-subuser), or in the [subuser management](https://app.sendgrid.com/settings/subusers) page.

 ###     Before you begin

You need to have a [subuser]({{root_url}}/ui/account-and-settings/subusers/#create-a-subuser), and a [dedicated IP address]({{root_url}}/ui/account-and-settings/dedicated-ip-addresses/#adding-an-additional-dedicated-ip-address) you want to assign the subuser.

*To assign a dedicated IP to a pre-existing subuser:*

1. Navigate to **Settings** and select **IP Addresses**.
1. Find and select the IP address you wish to add any of your subusers to, and then hover over the action menu. Click the pencil icon that says **Edit**.
1. Select the **Choose the Subusers** field and then click on any of the subusers you want to add from the dropdown menu to add them to the specified IP address.
1. Select **Save**.

##     Additional Resources

- [Warming up a dedicated IP]({{root_url}}/ui/sending-email/ip-warmup-for-the-new-marketing-campaigns-experience/)
- [API IP Access Management]({{root_url}}/ui/account-and-settings/ip-access-management/)
- [SendGrid billing information]({{root_url}}/ui/account-and-settings/billing/)


<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">


### Do you want expert help to get your email program started on the right foot?

Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.


</call-out-link>
