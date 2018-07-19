---
layout: page
weight: 0
title: Peer-initiated Invitations Campaign
navigation:
  show: false
seo:
  title: Peer-initiated Invitations Campaign
  override: true
  description: Peer-initiated Invitations are a Marketing Email campaign where you get customers to invite their friends and family. There are some caveats to consider about this marketing method.
---

Peer-initiated invitations are a common way of launching a new business and gain awareness. If done right they can enable your subscribers spread the word about your service and grow your user base. An aggressive invitation system can backfire, and your invitations will be filtered or blocked. SendGrid customers who implement a peer-initiated invitation system must abide by the following requirements:

* Never allow your subscribers to send invitations to their entire address book. Address books can and often do contain old or stale addresses that ISPs use as [spam traps]({{root_url}}/glossary/spam-traps.html). If your invitations hit spam traps then your subsequent messages will be filtered by ISPs. To prevent this, design your invitation system so that your inviter must deliberately selects each individual invitee. By limiting the number of invitations each customer sends you are encouraging selective and quality invitations. When your customers are careful to invite only those who they think will appreciate your service, you reduce the risk of invitees reporting the invitations as spam. If enough people report your invitations as spam, your invitations will begin to be blocked or filtered by spam filters and Email Service Providers, which is not what you intended.
* Clearly display the inviter's name or email address in the invitation email, then the invitee will easily see who sent the invitation. Peer-initiated invitations are most effective when the invitee knows and trusts the inviter. A good way to think about how to build your email template is to consider, "If I got this email from my friend, would I click it?" or "What would I expect my mom to do with this email if she received it and I didn't work for this brand?"
* The From address on your invitation email should reflect your brand, especially if your system is sending this email. Don't use the inviter's email address for the invitation's From address.
* Clearly express the purpose of the invitation so that recipients easily understand what they are being invited to.
* After the initial invitation, don't send more than one follow-up (reminder) email to invitees that didn't respond to the first invitation.

<call-out> You increase the odds of your invitations reaching the recipient when you structure your systems and processes to send the right message, to the right person, at the right time, with the right frequency. If you don't, your messages will be marked as spam and your marketing results will suffer. </call-out>

SendGrid also strongly recommends:

* Ensure your invitation is relevant and valued by the recipient. You can allow your customers to add a personal text-only message to their invitation. Don't allow URLs to be added, as they may be used to exploit or infect the invitee.
* Include a conspicuous, functioning opt-out link as it's better for the recipient to remove themselves from future mailings than to report your message as spam.
* Beware of offering invitation incentives to your subscribers. Incentives may encourage them to invite people who aren't likely to want your service, which can lead to more spam reports.
* Monitor your spam complaints. Some inviters will trigger spam complaints by sending invitations to people who don't want them. If your system correlates spam complaints with the troublesome inviter, you can limit their invitation quota to minimize the adverse effect on your email sending reputation.
* Typos happen. Pre-screen the email addresses you collect before you send the invitation. Make sure that the addresses are syntactically correct and that the domain part of the address has a DNS MX record (which indicates that the domain accepts mail).
* Do not add invitees to your contact database until the invitee opts-into being on your list.

