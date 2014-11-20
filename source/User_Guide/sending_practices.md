---
layout: page
weight: 0
title: Sending Practices and Limitations
seo:
  title: Sending Best Practices and Limitations
  description: A guide to sending practices and SendGrid Usage limits. Learn how to best use SendGrid today.
navigation:
  show: true
---

As you begin to use your SendGrid account there are some important things to remember. For example, Lite and Free packages have limitations in the amount of email that can be sent each day. Free accounts are simply limited to 200 emails per day. Below you will find a breakdown of the Lite package and it's limitations.

Additionally, there are limitations to delivery rates imposed by recipient mail servers. Exceeding these limitations results in a practice referred to as throttling. Throttling in terms of email means that a recipient mail server has accepted all the mail it is willing to accept from your IP for a certain period of time.

If you have a Silver or higher package, you may want to [read how to warm up your IP address to avoid having your outbound messaging throttled]({{root_url}}/User_Guide/warming_up.html).

{% anchor h2 %}
Lite Plan Volume Restrictions 
{% endanchor %}

Our Lite package has a bandwidth restriction to keep spammers from abusing our system. For the first 7 days you will be limited to 1,000 emails per day. After the 7th day we look into how many emails you have sent, how many days your account has been active, and check your reputation status. As the value of each of these parameters increases, your volume limitations will decrease.

As you achieve each guideline after the 7-day period, your account limit will be raised incrementally. You must achieve all guidelines in one row before you can achieve any guideline on the next row. The below table lists the limitation factors, and how they affect your total.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Account Age</th>
         <th>Email Requests</th>
         <th>Send Reputation</th>
         <th>Daily Send Limit</th>
      </tr>
      <tr>
         <td>0 days</td>
         <td>--</td>
         <td>--</td>
         <td>1,000</td>
      </tr>
      <tr>
         <td>7 days *Adds 3,000*</td>
         <td>50,000 *Adds 3,000*</td>
         <td>80% *Adds 3,000*</td>
         <td>10,000</td>
      </tr>
      <tr>
         <td>14 days *Adds 30,000*</td>
         <td>500,000 *Adds 30,000*</td>
         <td>90% *Adds 30,000*</td>
         <td>100,000</td>
      </tr>
      <tr>
         <td>28 days *Adds 300,000*</td>
         <td>5,000,000 *Adds 300,000*</td>
         <td>95% *Adds 300,000*</td>
         <td>1,000,000</td>
      </tr>
   </tbody>
</table>

For example:

-   If you have a 10 day old account (+3,000), have sent 10,000 messages (+0), and have a reputation of 91% (+3,000), you would have a Daily Send Limit of 7,000.
-   If you have a 15 day old account, have sent 49,000 messages, and have a reputation of 99%, you would have a Daily Send Limit of 7,000, because you can't achieve the 14-day guideline until you achieve the 50,000-messages guideline.

Please note that if your reputation declines, your limit will decrease accordingly. All these values are checked overnight, so they won't update the moment you reach the next increment of any given parameter.
