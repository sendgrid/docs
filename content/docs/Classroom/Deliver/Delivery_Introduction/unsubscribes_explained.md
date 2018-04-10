---
seo:
  title: Unsubscribes Explained
  description: Unsubscribes Explained
  keywords: reports, marketing, drop, unsubscribe, list, email, unsubscribes, unsub, [unsubscribe], resubscribe, re-subscribe, link, dropped, unsubscribed, transactional, remove, custom, footer
title: Unsubscribes Explained
weight: 0
layout: page
zendesk_id: 203295137
navigation:
  show: true
---

Managing your subscriber base is a vital component of sending emails successfully. At SendGrid we provide you with a variety of tools to help you trim down your recipient lists and remove uninterested users, thereby leading to campaigns with higher engagement rates. Unsubscribes are controlled through one of two ways:

 

**Global Unsubscribes**

When you enable the [subscription tracking setting](https://app.sendgrid.com/settings/tracking) an unsubscribe footer is automatically appended to every email sent through your account. When a user clicks on the unsubscribe link in your message they are added to the [global unsubscribe list](https://app.sendgrid.com/suppressions/global_unsubscribes) within your account. Once an address has been added to this suppression list all future attempts to send a message to the recipient (including marketing emails) will be [dropped](https://sendgrid.zendesk.com/hc/en-us/articles/200181728-My-emails-are-being-dropped-) as an "Unsubscribed Address."

 

**Group Unsubscribes**

Whenever you send an email using our [Advanced Suppression Manager](https://sendgrid.com/docs/User_Guide/Email_Deliverability/Subscription_Tracking/advanced_suppression_manager.html), or "ASM", an unsubscribe link is always added to the bottom of the message. Recipients who opt-out from their mailing group (or any other group they select) will be added to the [Group Unsubscribes Suppression List](https://app.sendgrid.com/suppressions/group_unsubscribes). Further attempts to send to this address when using this Group will be dropped by our system.

 

<iframe src="https://player.vimeo.com/video/130486946" width="500" height="312" frameborder="0" allowfullscreen=""></iframe>

And that's all it takes! These two unsubscribe methods are the core of managing and optimizing your recipient list.

**Downloading Unsubscribes**

Global Unsubscribes can be exported as a .CSV from the [Global Unsubscribes Suppression List](https://app.sendgrid.com/suppressions/global_unsubscribes) page by clicking the gear in the top-right.

**Custom HTML Unsubscribes**

Subscription Tracking is fully customizable. Users can customize the unsubscribe message provided to recipients to personalize communication. You and your business can even specify a custom landing page for opt-outs.

![](http://g.recordit.co/iD7xMWHhts.gif)

**Resubscribing a Recipient**

If a recipient has opted out of your mailings in the past but now wishes to re-open communications, then you will need to remove their email address from the appropriate unsubscribe list.

To remove an unsubscribe, all you need to do is locate the address in question on your global or group unsubscribe list, select the corresponding check box, and click the "Remove Unsubscribe" button in the top-right drop-down menu.

**Removing Unsubscribes is Risky Business...**

Be careful when removing recipients from your unsubscribe lists in order to send to them again. In order to be [CAN-SPAM](http://www.business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business) compliant recipients must be able to opt out of any emails that they desire. Deleting unsubscribed addresses so that you can send to them again without the recipient's knowledge could result in you, the sender, being penalized for violating the CAN-SPAM Act. This is also in direct violation of SendGrid's email sending policies.

**Would You Like to Know More?**

Still a little unsure on the particulars? If so, please don't hesitate to [contact support](https://support.sendgrid.com) at your convenience and we will be happy to help!

