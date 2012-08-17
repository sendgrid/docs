---
comments: false
date: 2011-03-25 15:49:16
layout: page
slug: smtp-vs-rest
title: SMTP vs Web API
wordpress_id: 252
---

We get asked quite often why we recommend customers use SMTP to send email to SendGrid, as opposed to using our web API, and where one would be used over the other.

To start, the absolute best method to send email through SendGrid is to set up a local mail server, such as Postfix, that queues all email from your application, and then relays the messages through SendGrid as a smart host. This will have the least latency from your application’s perspective, and has the added benefit of handing your email off to a server that is fault tolerant. If something goes wrong with internet connectivity between your servers and ours, a local mail server can gracefully handle queuing and resending the email, as opposed to having to build that intelligence into your sending application. Local mail servers also have advantages at high volume of being able to use some of the more complex parts of the SMTP protocol, such as connection reuse and pipelining. With these techniques a mail server will be able to send significantly more traffic in a given time than if you have individual scripts making connections for each message.

That being said, many people want to use SendGrid for the purpose of getting away from the need to have a local mail server. At that point, SendGrid’s recommendation to use SMTP is based on the large number of libraries and documentation available to integrate using it. SendGrid is a big believer in open standards, and for sending email SMTP is the standard. On the other hand, there are some cases where the web API has some advantages. These include:



	
  * If your ISP is blocking all output mail ports, the web API could be your only option

	
  * If there is high latency between your site and ours, the **web API can be quicker** since it does not require as many client <-> server message / response interactions

	
  * If you do not control the environment that your application runs in, and it is difficult to install / configure an SMTP library

	
  * If you are developing a library from scratch to send email, developing against a web API is much easier than developing an SMTP library


I hope this has helped to clarify some of the technology based reasons we have for recommending the usage of SMTP compared to the web API. In the end, the final choice of what to use should be based on what works best for your company.
