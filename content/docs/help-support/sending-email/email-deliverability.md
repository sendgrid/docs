---
seo:
  title: Email Deliverability Overview
  description: Email Deliverability Overview
  keywords: spam, bulk, box, segmentation, folder, inbox, list, deliverability, best, practice, engagement, blocked, not, delivered, delivery, spammy, can, can-spam, deliver
title: Email Deliverability Overview
group: delivery-optimization
weight: 0
layout: page
navigation:
  show: true
---

Below are some email deliverability tips and tricks from leading industry experts. While none of these are required, they all come highly recommended from SendGrid.

Satisfying each of the below conditions is a great step toward resolving current or potential issues with email deliverability such as spam folder delivery or blacklisting.

 ### 	Who, What, When, Where, Why.
 	
First and foremost, ask yourself this question:

**Am I sending the right message to the right person at the right time with the right frequency?**

Overall email deliverability is influenced by how your recipients interact with your messages. If your messages are opened in a timely manner, images are displayed, and links are clicked, then mail providers will see you as a sender whose messages their recipients want to receive. If messages pile up, remain unopened, or get marked as spam, mail providers won't be as comfortable placing your messages in the inbox, or accepting them at all!

## 	Adhere to Standards
 	
The second biggest factor in inbox delivery is the actual content you send in your messages. It's very important to ensure your emails meet every CAN-SPAM requirement.

Some key takeaways from [CAN-SPAM](https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business):

- Don't deceive your recipients. Be up front with who you are, and what kind of messages you are sending.
- Provide your recipients with a way to opt-out of messages.

[Read the full CAN-SPAM Act here!](http://business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business) This is required reading for any aspiring email acolyte.

 ### 	"No, thank you."
 	
One of the most important parts of CAN-SPAM is this line:

**"Tell recipients how to opt out of receiving future email from you."**

All email providers look for an unsubscribe method (or links) in all emails. Even though it may not make sense for transactional mail, it can make the difference in messages arriving in the inbox or the spam folder. [Subscription tracking]({{root_url}}/help-support/sending-email/subscription-tracking/) automatically inserts an unsubscribe link into all your emails and maintains the Unsubscribe list.

Think of it this way: would you rather a recipient politely decline future emails from you, or mark your messages as spam because they have no other option?

 ### 	Who are you?
 	
Maximum company visibility helps as well. Placing your company name in the subject line of your emails and including your physical mailing address and phone number in your email footers helps mail providers recognize you as a legitimate company and sender of email. This also helps your recipients know that this message is indeed from you!

We've all ignored phone calls from numbers we don't recognize, the same goes for email!

 ### 	Segment your traffic
 	
Keeping your mail streams separated can make a huge difference in the long run. Specifically, [segmenting]({{root_url}}/help-support/managing-contacts/segmenting-your-contacts/) your marketing email from your transactional email is a great way to keep legitimate mail out of trouble.

Say for example you are sending your Daily Knitting Update emails on the same account and the same IP address as your receipts, invoices, and password resets.

The day then comes where one of your recipients simply can't take it any more, and marks every single Daily Knitting email they've ever received from you as spam. Knitting overload!

The potential fallback from this is that not only will that recipient no longer receive their important receipts, invoices, and password resets, but it then becomes possible that ALL recipients at the same domain or ISP may also run afoul of the same problem. Yikes!

Consider setting up a [new subuser account]({{root_url}}/help-support/account-and-settings/subusers/) with an [additional dedicated IP address]({{root_url}}/help-support/account-and-settings/dedicated-ip-addresses/) specifically for your marketing email, for example:

* Parent account | IP 1 | Receipts, invoices, and password resets
* Subuser account | IP 2 | Marketing/Promotional emails

This simple division will keep your important email in the clear, even if one stream runs into trouble. Remember, don't cross the streams!

 ### 	Encourage recipients to trust you
 	
With email, things don't happen overnight, and magic wands are few and far between. So for the most part, the actions of your recipients are the highest voice of authority.

Encouraging your recipients to do certain things can help bolster the trust ISPs have for you and your messages. Some examples can include:

- "Add us to your address book!" - Having a recipient add your from address you their address book or trusted senders list can go a long way. More often than not, if one of an ISPs recipients trust a sender, they will be more lenient to similar messages to different recipients!
- Star or Mark as important - A simple inbox action like this is just another way your recipients can tell their mail providers that "Hey, I want these messages".
- IP Whitelist - Some ISPs or mail admins can add rules to always allow _all_ incoming mail from specific IP addresses! Consider reaching out to the postmaster(usually example@example.com) of problematic mail domains to see if they can whitelist [your dedicated IP address]({{root_url}}/help-support/account-and-settings/ip-access-management/).
- "If you don't receive an email right away, please check your spam folder and mark "not spam"" - Adding this simple sentence to your sign-up form area can solve a lot of potential heartache. If a message you sent ends up in the Spam folder, and the recipient manually goes in and pulls it out, that's fantastic! This not only helps an ISPs incoming mail filters in avoiding false positives, but also improves your standing with that ISP.

 ### 	Nuts and Bolts
 	
 ### 	Tips for Click Tracked links
 	
Our click tracking application can sometimes trip up spam filters. If you have click tracking enabled, we'll replace any links within HTML `<a>` tags with unique links that redirect through our service. As such if you use the original link as the clickable link text in your `<a>` tag, when the click tracking link is replaced it creates irregularity between where the link appears to go and where it actually goes. For example the original link:

`<a href="http://www.sendgrid.com">http://www.sendgrid.com</a>`

Gets replaced with a much longer link with click tracking:

`<a href="http://beertemp.sendgrid.net/wf/click?upn=a2quqXSHnxzJyDEtVGmF4w3cWg6voxuzvZ4oDr9WeNk-3D\_4MHh">http://www.sendgrid.com</a>`

This is may look very similar to phishing emails, placing these messages in the spam folder rather than the inbox. To get around this, use something descriptive for the link text rather than the link itself in your messages:

`<a href="http://www.sendgrid.com">Click to visit SendGrid</a>`

 ### 	Images and Attachments
 	
Also consider how you include images and attachments in your messages. As it is impossible to know how a receiving server treats attachments, we recommend using the HTML `<img>` tag to include images in your messages and we also recommend linking to hosted files rather than including them as attachments. Images must be hosted on your own or on a public facing server to be included via the HTML `<img>` tag. Secure site logins or credentials can be used to track who is coming to your site to download files. This helps ensure that your message gets to the recipient regardless of any attachment restrictions on the receiving mail server.

## 	Tools of the Trade
 	
Finally, there are some great 3rd party services you can use to get an idea of how mail providers analyze your emails:

* [http://isnotspam.com](http://isnotspam.com/)
* [http://www.mail-tester.com/](http://www.mail-tester.com/)

You can send emails to a capture address at one of these services and they will reply with a breakdown of all the positive and negative factors of your emails. This helps you isolate and fix specific issues that may be sending your email to the Spam folder rather than the inbox. These services are _HIGHLY recommended_ for troubleshooting **spam folder delivery.**

[Senderscore](https://senderscore.org/) is another great resource you can use to get a good idea of how the internet email community ranks the [IP address you send mail from]({{root_url}}/help-support/account-and-settings/ip-access-management/).

SendGrid has also released the article [Everything You Need To Know About Email Delivery](http://go.sendgrid.com/DeliverabilityGuide.html) highlighting these and more deliverability tips.
