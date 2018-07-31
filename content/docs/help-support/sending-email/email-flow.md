---
layout: page
weight: 0
title: Email Flow
group: delivery-optimization
navigation:
  show: true
seo:
  title: Email Message Flow Explained
  description: A basic diagram and description of how each email message flows in general and through SendGrid
  keywords: Email flowchart, email delivery flow, email delivery diagram, basic email flow
---

SendGrid has helped thousands of customers send their email messages since 2009. We help our customers build their email content, send their messages, and view the success of each campaign sent.

We also realize that the actual journey of an email message from sender to the inbox  is complicated. Sometimes this process may not be fully understood by all senders. This post shows the basics of the email path, along with where SendGrid is helping to make that journey less complicated.

In the email flowchart below, you can see the main components that all email messages pass through. Granted, there are many other finer details involved within each step, but for the sake of this post, we’re keeping it to the basics.

![]({{root_url}}/img/MailFlow.png "Email Flow")

First, a sender puts together the content that their recipients will love. Then it’s time for the “SMTP conversation” to take place. SMTP stands for Simple Mail Transfer Protocol, and this conversation is what makes email messages get from the sender to the recipient. It’s easiest to think of an SMTP conversation as a “handshake.”

Imagine that a sender is a host at a party and all of the other guests are the recipients of the message. The host will then shake every guest’s hand and during that “handshake” they will have this SMTP conversation. In the end, the guest (i.e. recipient and its recipient server) will determine if they will accept the message or not. In this scenario, you can think of SendGrid as a person at the party grabbing both the host’s and guest’s hands and making the handshake and discussion actually happen.

## 	The “Handshake” Details and Results

The sender connects to the SMTP server through SendGrid and tells the server the final destination it would like its message to go to. Let’s say it is example@example.com. The SMTP server recognizes the domain portion (the part after the @ sign) of “customer.com” and contacts the receiving server responsible for accepting messages for that domain. During this connection the two servers exchange multiple pieces of information. The receiving server typically then says one of the following:

* “Yes, I know who ‘person’ is and all is in order to deliver it to their inbox.”
* “Yes, I know who ‘person’ is and all is in order to deliver the message but not to the inbox.”
* “Yes, I know who ‘person’ is and there are still some items I have to identify so I am not going to delivery the message at this time but I am not sending it back to the sender.” (aka a deferred message)
* “No, I do not know who ‘person’ is and will be sending the message back to the sender.” (aka a bounced message)

## 	Determining Factors of Delivery

As mentioned before, there are many pieces of information exchanged between the sending and receiving mail servers. As you can see from the email flow diagram, the other two places SendGrid assists in the message path (along with the Outbound Mail Server) are the DNS (Domain Name System) and Authentication portions. The receiving server wants to trust the mail that is being exchanged in order to accept it. DNS and Authentication assists with this decision.

 ### 	DNS
 	This stands for “Domain Name System” and it is thought of as the “phone book for the internet.” It houses many pieces of information for the sending domain of a message. The receiving server checks this phone book to see if it can determine who the sender is and if they are trusted.

 ### 	Authentication
 	The receiving server will check to see if there is an SPF (Sender Policy Framework) record in place (to see if the mail is coming from an IP authorized by that domain's administrators) if there is a DKIM (DomainKeys Identified Mail) record in place (to see if the message was tampered with in transit by someone other than the sender) and if there is a DMARC (Domain-based Mail Authentication Reporting and Conformance) record in place (this tells the receiving server where to place the mail based on the results of the SPF and DKIM authentication). SendGrid’s sender authentication feature assists with setting up both SPF and DKIM properly. This assists the the host (Sender) in being more recognizable and for the guest (recipient) and their mailbox provider to more easily trust the content attempting to be shared during the conversation.

 ### 	Reputation
 	When reviewing the sending IP and domain, the receiving server will factor in both of the following items:

The reaction of its other recipients to mail sent by that same IP and domain (i.e. marked as spam or not).
Where the receiving server previously decided to place any mail from the same IP and domain.

<call-out>

The reputation of the domains included in the links within the body content will also factor into delivery.

</call-out>

 ### 	User Level Filtering

Along with these items listed above, some recipients may also have their own individual rules within their inbox of where certain mail will go. This placement is harder to change, aside from making sure that your content is desired by the recipient and they won’t be creating any custom filters to have your messages delivered anywhere but the inbox.

## 	Reacting to Opinions of the “Guests”

### 	Feedback for the Guests to Give the Host

Within email, there is a function known as a Feedback Loop. These are created by the mailbox providers and a Sender can get set up to receive notification through them to inform them when a recipient complains about the Sender’s message (aka, marking a message as junk or spam). This should help the host (Sender) to be aware of when certain guests didn’t prefer the content included in their interaction and the host (Sender) should not try to have another conversation (aka send a message) to this guest in the future.
