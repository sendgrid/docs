---
seo:
  title: Troubleshooting Delays and Latency
  description: Troubleshooting Delays and Latency
  keywords: down, outage, latency, header, intermittant, trace, ping, wireshark, traceroute, hop, node, slowness, having issues?, delivering, after, mins, minutes, seconds, ms, miliseconds, slow, delay, hours, delays
title: Troubleshooting Delays and Latency
weight: 0
layout: page
zendesk_id: 203884108
navigation:
  show: true
---

Is it us? Is it you? Check our [Status Page](http://status.sendgrid.com/) for more info on potential systemic email issues.&nbsp;

&nbsp;As you send emails, you may encounter scenarios where mail seems to take more time than it should to get to it's final destination. Mail delays can manifest in a slew of ways, so we've collected a comprehensive list of steps to try to track them down!&nbsp;

**1. Check these suggestions first:**

1. If you are integrated with Sendgrid using code, we _highly_&nbsp;recommend using&nbsp;the official Sendgrid libraries available on&nbsp;our [Github account](https://github.com/sendgrid). These are written&nbsp;with efficiency in mind. If you need help getting started with our libraries, check out our [Code Workshop](https://sendgrid.com/docs/Utilities/code_workshop.html) tool.
2. You can use our&nbsp; [SMTPAPI](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html)&nbsp;to greatly increase your message throughput. As with SMTP, 100 messages can be sent with each connection, but there can be 1000 [TO: recipients](https://sendgrid.com/docs/API_Reference/SMTP_API/using_the_smtp_api.html) for each message using the x-smtpapi header. You can use this option through [SMTP](/hc/en-us/articles/200328026-Recommended-SMTP-settings) sending&nbsp;as well as [HTTP](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)(API) sending.&nbsp;
3. Lastly, you can try to open additional&nbsp;connections from your end: Generally, we recommend a maximum of&nbsp;10 concurrent connections. However, please note that SendGrid can generally handle as much mail as you can throw at us. One thing to ensure is to make certain that the maximum amount of mail is passed before terminating each connection. We recommend using caution when incrementing your number of active connections.

**2. None of those helped, what else can I try?**

More often that not, one of the 3 suggestions above will resolve a&nbsp;latency problem. However, some latency issues are simply due to the quality of your connection or traffic shaping. There is always the possibility that network problem issue lies with either&nbsp;yours or your ISPs configuration.&nbsp;Below are a number of methods that will help you determine where a latency issue really&nbsp;is.&nbsp;

&nbsp;

**Ping**

1. We'll begin with the simplest&nbsp;method, Ping! You should always test ping to help determine response time and TTL (time to live) in milliseconds. In our troubleshooting scenario below, we'll&nbsp;run a&nbsp;ping command to our SMTP server at **smtp.sendgrid.net**
2. How to ping using _Mac_: Open “terminal” or “network utility”. Type “ping smtp.sendgrid.net” and you will see a ping occur continually. Notice that on Mac there is no need to specify a parameter for continuous ping as in Windows.
3. How to ping using _Windows_: Open your command prompt, usually by hitting the Windows key, typing "cmd" and hitting enter. Type “ping smtp.sendgrid.net” followed by the enter key. This will create a single ping to one of SendGrid’s IP addresses. Adding the parameter “-t” will allow for a continuous ping.

**Anything exceeding&nbsp;150.000 ms should be the first indication that something may be amiss regarding your&nbsp;network connection. Let your IT department know pronto.**

![]({{root_url}}/images/smtpPING.gif)&nbsp;

&nbsp;

**Traceroute**

1. A Traceroute is along the same lines as a ping, you can think of a traceroute as a deeper analysis in the sense that it allows you to see at which “hop” the latency may begin to occur. You are able to see every stop along the route that the packet travels from the customer’s network to SendGrid’s servers. At each stop, details are given as to the address it travels to, and the amount of time to get there also in milliseconds.
2. How to run a traceroute on _Mac_: Open “terminal” or “network utility” and type “traceroute smtp.sendgrid.net”
3. How to run&nbsp;a traceroute on _Windows_: Open your command prompt, and type ”tracert smtp.sendgrid.net”.

**As with the ping method, keep an eye out for&nbsp;any large times over 150.000 ms**. You'll also want to pay close attention to notice if there are any major increases from one hop to the next. This could&nbsp;indicate the inherent latency from when the packet leaves a server in France en route to a server in Canada. Another flag to watch out for are any of the increases early in the transit, as this could mean&nbsp;the latency lies within your local&nbsp;network, or at a certain ISP.&nbsp;

Keep in mind that many&nbsp;modern network nodes will de-prioritize ICMP packets, which traceroute sends, so&nbsp;timeouts&nbsp;at certain hops may not necessarily be indicative of a faulty connection. That said, a traceroute can still go along way in helping isolate where a network issue exists.

![]({{root_url}}/images/smtpTRACE.gif)

&nbsp;

&nbsp;

&nbsp;

**Google Header Analyzer**

Google provides a great free [header analyzer tool](https://toolbox.googleapps.com/apps/messageheader/analyzeheader) that you can use to analyze the headers of an email, and find out how long an email spent in a particular&nbsp;location. For more information on how to grab the original headers from an email, [check here.](http://support.sendgrid.com/hc/en-us/articles/203965613-How-do-I-check-the-headers-raw-source-of-an-email-)

1. Grab the headers of the message you want to analyze. Make sure you just grab the received headers, which is everything above the first content boundary.

![]({{root_url}}/images/headersnocontent.gif)

&nbsp;

2. Paste them into the header analyzer tool and hit&nbsp;the Analyze button.

&nbsp;

![]({{root_url}}/images/headeranalyzer.gif)

&nbsp;

The results provided should show the exact journey a message takes from one Mail Transfer Agent to the next, and how long it spent at each one! This tool can be invaluable for figuring out who to "blame" for email delays.&nbsp;

&nbsp;

&nbsp;

**Wireshark** &nbsp;&nbsp;

1. In cases the ping and traceroute fail to uncover any obvious lag, a TCP dump or packet capture (PCAP) can tell us a lot. One tool we recommend to help troubleshoot is [Wireshark](https://www.wireshark.org/download.html), as it will capture all packet data from network layers A-D as noted in the network OSI model (missing the physical layer of course). For this reason, it is an extremely thorough tool for analyzing traffic, filtering TCP streams, protocols, and even catching plain text within packets, and&nbsp;much more.
2. Support may ask you for a&nbsp;PCAP sometimes during issue troubleshooting, here is an excellent guide on how to perform the capture and begin using Wireshark&nbsp; [here](http://www.howtogeek.com/104278/how-to-use-wireshark-to-capture-filter-and-inspect-packets/). Make sure that you&nbsp;capture when attempting to send a single message to SMTP.sendgrid.net.&nbsp;Once we&nbsp;receive the PCAP file from the you, we can open it up in Wireshark on our side.&nbsp;The below steps are the same step[s we would take to analyze such a file, so feel free to follow along!
  1. <u>Filter on SMTP protocol</u>: First things first. Let’s go ahead and use the filter to peer through the rest of the noise of the capture, and find what we are really interested in. To apply the filter, type “smtp” into the filter box as shown below:  
 ![](http://content.screencast.com/users/Piaget/folders/Jing/media/c3e14bd2-6326-4a0f-a695-523cadf18cd0/00000016.png)&nbsp;
  2. <u>Change time view value</u>: Next thing you want to do is to change the time value.&nbsp; As per Wireshark default, it will be currently listed as Year:Month:Day - Hour:Minutes:Seconds:Milliseconds. To help troubleshoot the delay, go ahead and change this time display to show “seconds since previously displayed packet” and “milliseconds”  
 ![](http://content.screencast.com/users/Piaget/folders/Jing/media/3a457add-eff0-4150-a1cc-1cd82a730541/00000015.png)
  3. <u>Follow TCP stream</u>: This will allow you to see the transaction in a logical view. You can also see and verify the content of the message transmitted in plain text. To do so, go to “analyze->follow TCP Stream”  
 ![](http://content.screencast.com/users/Piaget/folders/Jing/media/c0ad0b7c-3213-4b96-ae03-9878cb4b4451/00000017.png)&nbsp;
  4. <u>Expert information tool</u>: This view can let you know right away if there are any red flags with which you should be concerned. To access the expert info, navigate to “analyze->expert info”. When viewing this information, pay attention to the “errors”, “notes”, and “chats” sections. From the errors section, you can see if there are any big errors such as a bad checksum as shown in the example.&nbsp; Keep in mind that It's usually OK to ignore checksum errors on outbound packets. When looking at the notes, it will inform you of suspected concerns. In the example, the notes section informs me of a suspected retransmission on packet 113. This is important, as we will determine later.&nbsp; In the chat section, you can see the sequences and protocols of interest with the summaries. So for example, you can see the connection established, the POST, and awaiting a response.  
 ![](http://content.screencast.com/users/Piaget/folders/Jing/media/84e0bbd6-f268-424a-b2b5-d8326d3f42c8/00000018.png)&nbsp;
  5. <u>Calculate Time</u>: Last but not least, it is time to apply a quantitative value to our latency we can see within the transaction. The best way to go about this is to change the time view settings once again. This time, you will want to change it to view to show “time of day” once again leaving the display in milliseconds. If you do the math you are able to determine the total round-trip time for the transaction.
