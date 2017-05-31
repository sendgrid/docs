---
seo:
  title: Purchasing Dedicated IP Addresses
  description: Purchase dedicated IP addresses
  keywords: sendgrid ip address, ips, ip addresses, purchase IPs
title: Purchase IP Addresses
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Setup/Configuration
{% endanchor %}

You can purchase a dedicated IP address from the Dedicated IP Addresses Settings page or from your Plan & Billing Details page.

To purchase a dedicated IP:

* Navigate to Settings in the left hand navigation menu, select Dedicated IP Addresses
* Here you'll see a list of your current dedicated IPs. Your IPs in warmup will have a 'warmup' label
* Click 'Add an IP Address'
* Select the number of IP addresses you would like to purchase.

Under "Additional Options" you will find the following options:

  * *Use automated IP warmup:* when checked, SendGrid will gradually increase the amount of email sent over this IP. Note: It is best practice to [warm an IP address]({{root_url}}/Classroom/Deliver/Delivery_Introduction/warming_up_ips.html) over time before sending fully over that IP address. When using automated warm up, you must have at least one other warm IP that can handle the overflow traffic from the IP in warmup.
  * *Allow my parent account to send mail using these IP addresses:* check this if you want your parent account to be able to send over this IP. If you are assigning this IP to a subuser and only want that subuser to have permission to send on this IP, leave this box unchecked.
  * *Allow my subusers to send mail using these IP addresses:* check this to select which subusers can send on this IP address

After purchasing your IP, we strongly encourage you to whitelabel it. [Click here for a step-by-step tutorial explaining how to whitelabel your new IP address.]({{root_url}}/Classroom/Basics/Whitelabel/setup_ip_whitelabel.html)

{% anchor h2 %}
Frequently Asked Questions
{% endanchor %}

{% anchor h3 %}
What are dedicated IP addresses?
{% endanchor %}

An Internet Protocol (IP) address is a unique numerical address that defines a location. At SendGrid, you can purchase IP addresses that dedicated to your account. Since you are the only one sending email over this IP, the sender reputation associated with this IP is determined purely by your sending practices.

{% anchor h3 %}
Why would I want to buy my own IP address?
{% endanchor %}

If you are sending any significant amount of email, we typically suggest sending your marketing and transactional emails to from separate IP addresses. You can learn more from our comprehensive blog post on [whitelabeling and subusers best practices](https://sendgrid.com/blog/whitelabeling-and-subusers-best-practices/).

We also suggest having at least two promotional IP addresses when your volume reaches 200-300K/month.

{% anchor h3 %}
How many IPs should I have?
{% endanchor %}

Please see our document on [suggested IP allocation based on volume](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).

{% anchor h3 %}
Can I purchase an IP from any pricing plan?
{% endanchor %}

This feature is only available for [Pro plans and higher](https://sendgrid.com/pricing).

{% anchor h3 %}
How is my account's pricing affected by this feature?
{% endanchor %}

For Pro plans, your first IP address is included in your plan's pricing. Each additional IP address is $20/month.

{% anchor h3 %}
Are there limitations on usage?
{% endanchor %}

You may purchase up to 3 IP addresses per month. If you need more than 3 IPs, then you should [contact support](https://support.sendgrid.com).

{% anchor h3 %}
What if this is my first dedicated IP address?
{% endanchor %}

If you have only 1 dedicated IP address, you will not be able to use automated warmup for this IP address. You will need to manually warm up the IP according to the schedule we recommend [here](https://sendgrid.com/docs/assets/IPWarmupSchedule.pdf).

In order to use automated warmup, you must have at least one already warm IP so that overflow emails from your new IPs in warm up can be sent from an already warm IP.
