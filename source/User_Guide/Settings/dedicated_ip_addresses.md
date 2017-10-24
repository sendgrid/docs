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

{% anchor h2 %}
What are Dedicated IP Addresses?
{% endanchor %}

An Internet Protocol (IP) address is a unique numerical address that defines a location. At SendGrid, you can purchase IP addresses that dedicated to your account. Since you are the only one sending email over this IP, the sender reputation associated with this IP is determined purely by your sending practices.


{% anchor h2 %}
Why would I want a Dedicated IP Address?
{% endanchor %}

If you are sending any significant amount of email, we typically suggest sending your marketing and transactional emails to from separate IP addresses. You can learn more from our comprehensive blog post on [whitelabeling and subusers best practices](https://sendgrid.com/blog/whitelabeling-and-subusers-best-practices/).

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

{% anchor h3 %}
Setup/Configuration
{% endanchor %}

To add an additional Dedicated IP Address:

* Navigate to Settings in the left hand navigation menu, select IP Addresses
* Here you'll see a list of your current Dedicated IPs. Your IPs in warmup will have a 'warmup' label
* Click 'Add an IP Address'
* Select the number of IP addresses you would like to purchase.

Under "Additional Options" you will find the following options:

  * *Use automated IP warmup:* when checked, SendGrid will gradually increase the amount of email sent over this IP. Note: It is best practice to [warm an IP address]({{root_url}}/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html) over time before sending fully over that IP address. When using automated warm up, you must have at least one other warm IP that can handle the overflow traffic from the IP in warmup.
  * *Allow my parent account to send mail using these IP addresses:* check this if you want your parent account to be able to send over this IP. If you are assigning this IP to a subuser and only want that subuser to have permission to send on this IP, leave this box unchecked.
  * *Allow my subusers to send mail using these IP addresses:* check this to select which subusers can send on this IP address

After purchasing your IP, we strongly encourage you to whitelabel it. [Click here for a step-by-step tutorial explaining how to whitelabel your new IP address.]({{root_url}}/Classroom/Basics/Whitelabel/setup_ip_whitelabel.html)

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

Whether you are new to the email game or are an accomplished vet, you have probably run across the idea of warming up an [IP address]({{root_url}}/Glossary/ip_address.html) to improve delivery performance. [Warming up your IP]({{root_url}}/Glossary/ip_warmup.html) allows you to gradually establish a good [sender reputation]({{root_url}}/Classroom/Basics/Misc/your_reputation_what_is_it.html), and is a critical step for new SendGrid users or users who are adding a new dedicated IP address to their account.

{% info %}
If you are looking for a suggested IP Warmup Schedule, [please download our IP Warmup Schedule PDF](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).
{% endinfo %}

{% anchor h3 %}
Automatic IP Warmup Schedule
{% endanchor %}

The following schedule shows the automatic hourly warmup schedule and email limits that SendGrid will use to
warmup your IP addresses when used with [IP warmup feature]({{root_url}}/API_Reference/Web_API_v3/IP_Management/ip_warmup.html).

Any email traffic exceeding these hourly message limits will be sent through your other warm dedicated IP Addresses. If you don't have any other warm dedicated IP Addresses, you will need to manually warmup following the [IP Warmup Guide](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).

<table class="table table-striped table-bordered">
  <tr>
    <td>
      Warmup Age (Days)
    </td>
    <td>
      Hourly Email Limit
    </td>
  </tr>

  <tr>
    <td>
      0
    </td>
    <td>
      20
    </td>
  </tr>

  <tr>
    <td>
      1
    </td>
    <td>
      28
    </td>
  </tr>

  <tr>
    <td>
      2
    </td>
    <td>
      39
    </td>
  </tr>

  <tr>
    <td>
      3
    </td>
    <td>
      55
    </td>
  </tr>

  <tr>
    <td>
      4
    </td>
    <td>
      77
    </td>
  </tr>

  <tr>
    <td>
      5
    </td>
    <td>
      108
    </td>
  </tr>

  <tr>
    <td>
      6
    </td>
    <td>
      151
    </td>
  </tr>

  <tr>
    <td>
      7
    </td>
    <td>
      211
    </td>
  </tr>

  <tr>
    <td>
      8
    </td>
    <td>
      295
    </td>
  </tr>

  <tr>
    <td>
      9
    </td>
    <td>
      413
    </td>
  </tr>

  <tr>
    <td>
      10
    </td>
    <td>
      579
    </td>
  </tr>

  <tr>
    <td>
      11
    </td>
    <td>
      810
    </td>
  </tr>

  <tr>
    <td>
      12
    </td>
    <td>
      1,000
    </td>
  </tr>

  <tr>
    <td>
      13
    </td>
    <td>
      1,587
    </td>
  </tr>

  <tr>
    <td>
      14
    </td>
    <td>
      2,222
    </td>
  </tr>

  <tr>
    <td>
      15
    </td>
    <td>
      3,111
    </td>
  </tr>

  <tr>
    <td>
      16
    </td>
    <td>
      4,356
    </td>
  </tr>

  <tr>
    <td>
      17
    </td>
    <td>
      6,098
    </td>
  </tr>

  <tr>
    <td>
      18
    </td>
    <td>
      8,583
    </td>
  </tr>

  <tr>
    <td>
      19
    </td>
    <td>
      11,953
    </td>
  </tr>

  <tr>
    <td>
      20
    </td>
    <td>
      16,734
    </td>
  </tr>

  <tr>
    <td>
      21
    </td>
    <td>
      23,427
    </td>
  </tr>

  <tr>
    <td>
      22
    </td>
    <td>
      32,798
    </td>
  </tr>

  <tr>
    <td>
      23
    </td>
    <td>
      45,917
    </td>
  </tr>

  <tr>
    <td>
      24
    </td>
    <td>
      64,284
    </td>
  </tr>

  <tr>
    <td>
      25
    </td>
    <td>
      89,998
    </td>
  </tr>

  <tr>
    <td>
      26
    </td>
    <td>
      125,997
    </td>
  </tr>

  <tr>
    <td>
      27
    </td>
    <td>
      176,395
    </td>
  </tr>

  <tr>
    <td>
      28
    </td>
    <td>
      246,953
    </td>
  </tr>

  <tr>
    <td>
      29
    </td>
    <td>
      345,735
    </td>
  </tr>

  <tr>
    <td>
      30
    </td>
    <td>
      484,029
    </td>
  </tr>

  <tr>
    <td>
      31
    </td>
    <td>
      677,640
    </td>
  </tr>

  <tr>
    <td>
      32
    </td>
    <td>
      948,696
    </td>
  </tr>

  <tr>
    <td>
      33
    </td>
    <td>
      1,328,175
    </td>
  </tr>

  <tr>
    <td>
      34
    </td>
    <td>
      1,859,444
    </td>
  </tr>

  <tr>
    <td>
      35
    </td>
    <td>
      2,603,222
    </td>
  </tr>

  <tr>
    <td>
      36
    </td>
    <td>
      3,644,511
    </td>
  </tr>

  <tr>
    <td>
      37
    </td>
    <td>
      5,102,316
    </td>
  </tr>

  <tr>
    <td>
      38
    </td>
    <td>
      7,143,242
    </td>
  </tr>

  <tr>
    <td>
      39
    </td>
    <td>
      10,000,539
    </td>
  </tr>

  <tr>
    <td>
      40
    </td>
    <td>
      14,000,754
    </td>
  </tr>

  <tr>
    <td>
      41
    </td>
    <td>
      19,601,056
    </td>
  </tr>
</table>

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- IP Access Management(https://sendgrid.com/docs/User_Guide/Settings/ip_access_management.html)
- Billing Settings(https://sendgrid.com/docs/User_Guide/Settings/billing.html)
- Mail(https://sendgrid.com/docs/User_Guide/Settings/mail.html)
