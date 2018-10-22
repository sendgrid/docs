---
seo:
  title: Warming Up an IP Address
  description: Learn how to warmup your new dedicated IP address and why it's important.
  keywords: warm, up, warmup, auto, automatic, manual API, v3, ip, pool, warmup, pools
title: Warming Up an IP Address
group: delivery-optimization
weight: 0
layout: page
navigation:
  show: true
---
<iframe src="https://player.vimeo.com/video/80755248" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


When you add a new dedicated IP address to your account, you need to warm it up. You also need to warmup your IP if you haven't sent on it in more than 30 days. [Warming up your IP]({{root_url}}/glossary/ip-warmup/) allows you to gradually send more emails over your new IP to establish a good [sender reputation]({{root_url}}/glossary/reputation-monitoring/).

IP warming is the practice of gradually increasing the volume of mail sent with a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with ISPs (Internet Service Providers) as a legitimate email sender. 

When an ISP observes email suddenly coming from a new or "cold" IP address, they will take notice and immediately begin evaluating the traffic coming from that IP. Since ISPs treat email volume as a key determining factor when detecting spam, it is best to begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and record how your recipients engage with your email.

A gradual warmup does not always guarantee a perfect sending reputation. It is still important to follow sending [best practices](https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/).

<call-out>

It is much easier to establish a positive reputation as a new sender, than it is to repair an existing reputation.

</call-out>

## 	Warmup types

There are 2 ways to warmup your IP. If your dedicated IP is relatively new, or you've never had one before, you need to warmup your IP manually. If you are adding new dedicated IPs to existing warm IPs, you can automatically warmup your IP with the UI or the API. When your IP is being warmed up, this is your hourly sending limit:

 ### 	Manually warmup your IP

To manually warmup your IP, you need to gradually send more and more email over your IP address at the rate in our suggested [IP Warmup Schedule]({{root_url}}/assets/IPWarmupSchedule.pdf).

<call-out>

The goal of warming up is to ramp up your sending volume to your anticipated “normal” levels. For example, if you have a Pro 100k account, you don't need to warmup to 2 million emails as that will exceed your account limits and is unnecessary if you're only sending 100,000 emails a month.

</call-out>

 ### 	Automated IP warmup

*To set up automated IP warmup in the UI:*

1. Go to [Settings > IP Addresses](https://app.sendgrid.com/settings/ip_addresses).
2. Click the action menu for the IP you want to warmup. This brings up the **Edit Your Dedicated IP Address** screen.
3. Select **Use Automated IP warmup**.
4. Save the **Edit Your Dedicated IP Address** screen.

 ### 	Automated IP warmup API

You can also put your IP address into warmup mode with our [Automated Warmup API]({{root_url}}/ui/sending-email/warming-up-an-ip-address/) - this automatically throttles traffic sent through your new IP according to our [warmup schedule]({{root_url}}/assets/IPWarmupSchedule.pdf).

<call-out type="warning">

When automatically warming up an IP, SendGrid limits the amount of email sent through that IP per hour. Any email requests that exceed this hourly limit will overflow to any other existing warm IPs on your account. If you do not have any other warm IPs, you should warmup your IP manually.

</call-out>

 ### 	Automated IP warmup hourly send schedule

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


## 	Why don't other ESPs require IP warmup?

Many other email service providers do not offer dedicated IP addresses to their customers - they place all of their customers on shared IP groups by default. Warming up is not required for a shared IP group - SendGrid handles this automatically.

Having a dedicated IP allows you to control your own reputation completely, and prevents your sending from being impacted by the reputations of other SendGrid users.

## 	Additional Resources

- [Adding a dedicated IP]({{root_url}}/ui/account-and-settings/dedicated-ip-addresses/)
- [API IP Access Management]({{root_url}}/ui/account-and-settings/ip-access-management/)
- [SendGrid billing information]({{root_url}}/ui/account-and-settings/billing/)
