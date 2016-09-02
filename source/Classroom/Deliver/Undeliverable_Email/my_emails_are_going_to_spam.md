---
st:
  published_at: 2016-07-26
  type: Classroom
seo:
  title: My emails are going to Spam
  description: Learn how to prevent your messages from ending up in spam by following best practices...
  keywords: spam, bulk, box, emails, going, to, messages
title: My Emails Are Going to Spam
weight: 0
layout: page
zendesk_id: 200181698
navigation:
  show: true
---



It can definitely be frustrating when email your customers want to receive ends up anywhere other than their inbox. There are a number of reasons why mail might be sent to the spam folder.

Unfortunately, many ISPs will automatically send messages from IPs they do not know about (cold IPs) directly to spam; they usually operate along the lines of *no reputation = bad reputation*, especially for low email volume senders, since the volume is too low to trigger their spam filters so they would find this suspicious.

_Spam folder delivery is not caused by just one factor;_ the ISPs associate bits of reputation to everything you send. Please see below explained all the important things to take into account in order for an email to reach inbox.

#Sending Domain Reputation

ISPs will check for the reputation your sending domain has. If the recipients have reacted well to these messages, then even with not-so-good content, the email will have a higher chance of landing in the inbox. This goes the other way as well: a good, well-constructed email sent from a domain with an uncertain reputation could land in spam.

The ISPs expect a gradual increase in the email volume sent towards them. If the sender is sending a low email volume, let's say 1K-2K messages, then this email volume is not high enough to see how the recipients generally respond to them. As mentioned above, *no reputation = bad reputation* so the message will likely land in spam (this applies for new domains as well). On the other hand, if a sender just starts sending a high email volume through an IP or ESP they have not used before, receiving ISPs will think they are under attack and would try to block the messages.

Not changing the [ESP]({{root_url}}/Glossary/email_service_provider.html) is also an important factor: If you have created a reputation for your domain while sending through one ESP, then the ISP is used to receive messages from you from that ESP only. Changing the ESP would be a change in your sending pattern and the ESP will be skeptical when seeing your email coming from some place else. Just like trying to authenticate yourself with a new home address in a place where you initially were registered with your old one - something doesn't match.

Creating a new domain is frowned upon as spammy behavior, and this wouldn't help this situation.

#Quality Content

It is strongly recommended to separate marketing content from transactional content. In doing so, you would avoid any possibility that your recipients mistake the nature of your transactional email and mark them as spam.

Please note that Spam filters cannot read images; this implies that if you are sending an email with just images they wouldn't be able to see what's going on there so they will just deliver it to spam. This is why it is a best practice to have a ration of ~50% text and 50% images (approximately one paragraph of text for each image you insert in your messages).

The content reputation is also determined by the links you have in the email; they should all belong to your domain and not be blacklisted. The unsubscribe link should always be working and visible. The ISPs never look at the unsubscribe rate, but they are alarmed whenever they see Spam Reports.

If you have used a template that generated a very bad feedback from the users, then the ISPs would automatically associate your domain this reputation, although your content is OK at that moment. Please note, that spam filters may be triggered by certain words used in the email & subject .

#Sending IP Reputation

As you are aware, the IP should be clean, properly warmed up and whitelabeled for your sending domain. Again, it is highly recommended not to mix marketing with transactional messages, as marketing messages generally trigger a higher spam report rate.

#Frequency and User Engagement

ISPs will always check how your recipients react to your messages (click, open, delete, mark them as spam). If you are sending too many messages to a recipient, then this may be a factor causing bad feedback from the recipient and the messages will go to spam. On the other hand, if a recipient opens messages in a timely manner and engages with them, it can lead to better future delivery! 

#Whitelabeling

In order to show the ISPs that you are the sender and that you meant to send these messages, the authentication needs to be properly done.

The sending domain needs to be [whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html) (so that the SPF and DKIM would pass). We highly recommend whitelabeling the email links - as mentioned above, the links should be from your own domain and they shouldn't be blacklisted.

If the above guidelines are met (the sending domain matches the whitelabeled domain and the authentication is properly done - SPF, DKIM, rDNS, from domain - , the content is relevant and not using spam triggering words, the IP is clean and warmed-up) the messages should start going to inbox.

This does not happen overnight, however. It usually takes the ISPs up to 30 days to change/assign a reputation for the sending IP or for a new domain and up to 12 months to change the reputation of a domain that they know it has bad sending practices.

Afterwards, you'll want to whitelabel your dedicated IPs and separate Marketing from Transactional, by using this format when whitelabeling the domain:

`em.marketing.domain.com` and `em.transactional.domain.com` and use in the from address `email@marketing.domain.com` rather than the root domain.

This will associate marketing reputation to the marketing subdomain and transactional reputation to the transactional one. As mentioned, this will take time, and would need constant work, but this is the safest way to get your messages in the inbox.

#Other Resources

- Check out our [Deliverability 101]({{root_url}}/Classroom/Deliver/Delivery_Introduction/email_deliverability_101.html) guide to get started with general guidelines on email ettiquite and sending practices.

- After reading our Deliverability 101 guide, take a deep dive into advanced email delivery with [Sendgrid's Official Email Deliverability Guide](https://go.sendgrid.com/Deliverability-Guide-V2.html)

- If you require personalized delivery assistance, get in touch with our Deliverability Consulting team - [you can reach out to them directly here.](https://sendgrid.com/marketing/delivery-consult)
