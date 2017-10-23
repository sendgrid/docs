---
seo:
  title: Peer-Initiated Email Invitation Requirements
  canonical: https://sendgrid.com/blog/best-practices-for-invite-a-friend-emails/
  description: Peer-Initiated Email Invitation Requirements
  keywords: spam, permission, list, best, practice, peer
title: Peer-Initiated Email Invitation Requirements
weight: 0
layout: page
zendesk_id: 200182848
navigation:
  show: true
---

A peer-initiated invitation system can help your subscribers spread the word about your service and grow your user base—if done well. An aggressive invitation system can backfire, and your invitations will be filtered or blocked. SendGrid customers who implement a peer-initiated invitation system _must_ abide by the following requirements:

1. **Never allow your subscribers to send invitations to their _entire_ address book.**  Address books contain old, stale addresses that ISPs use as spam traps. A spam trap is an address that doesn’t send mail, and marks the mail it does receive as spam. If your invitations hit spam traps, your subsequent messages will be filtered by ISPs. To prevent this, design your invitation system so that your inviter must deliberately select each individual invitee.
2. **Limit the number of invitations each customer can send to encourage selective, quality invitations. ** When your customers are careful to invite only those who they think will appreciate your service, you reduce the risk of invitees reporting the invitations as spam. If enough people report your invitations as spam, your invitations will be blocked or filtered—not what you intended.
3. **Clearly display the inviter’s name or email address** , so the invitee knows who sent the invitation. (Peer-initiated invitations are most effective when the invitee knows and trusts the inviter.)
4. **The invitation messages’ From address must reflect your brand.**  Don’t use the inviter’s email address for the invitation’s From address.
5. **Clearly express the purpose of the invitation.**  Recipients must understand what they are being invited to.
6. After the initial invitation, ** don’t send more than one follow-up**  (reminder) email to invitees that didn’t respond to the first invitation.

You increase the odds of your invitations reaching the recipient when you structure your systems and processes to send the right message, to the right person, at the right time, with the right frequency. If you don’t, your messages will be marked as spam and your marketing results will suffer. Avoid those pitfalls. 
  
SendGrid also strongly recommends:

1. Ensure your invitation is relevant and valued by the recipient.
2. Let your inviters add a personal text-only message to their invitation. (No URLs, as they may be used to exploit or infect the invitee.)
3. Include a conspicuous, functioning opt-out link—it’s better for the recipient to remove themselves from future mailings than to report your message as spam.
4. Beware of offering invitation incentives to your subscribers. Incentives may encourage them to invite people who aren’t likely to want your service, and this could lead to backlash.
5. Monitor your spam complaints. Some inviters will trigger spam complaints by sending invitations to people who don’t want them. If your system correlates spam complaints with the troublesome inviter, you can limit their invitation quota to minimize the adverse effect on _your_email sending reputation.
6. Typos happen. Pre-screen the email addresses you collect before you send the invitation. Ensure addresses are syntactically correct, and that the domain part of the address has a DNS MX record (which indicates that the domain accepts mail).
