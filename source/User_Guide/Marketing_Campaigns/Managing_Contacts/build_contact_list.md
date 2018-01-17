---
layout: page
weight: 100
title: Building your Contact list
navigation:
  show: true
seo:
  title: Building your Contact list
  override: true
  description: Directions on how to effectively build your Marketing Campaigns Contact list.
---

{% anchor h2 %}
Opt-In Email
{% endanchor %}

Opt-in email refers to bulk email, such as a newsletter or advertisement, that is sent out to a mailing list where every member of that list has actively requested email from you. Without obtaining this permission, your email is likely unwanted or unsolicited and is liable to be marked as spam by the recipient or the receiving mailbox provider.

{% anchor h3 %}
Email opt-in types
{% endanchor %}

- **Single Opt-in** refers to the practice of requesting permission to send a recipient email during, and only during, registration.
- **Double Opt-in** refers to the practice of requesting permission twice from a recipient. For example, you could ask them if they want to receive email at registration, and then send another email asking them to verify their confirmation.
- **Confirmed Opt-in** refers to the practice of sending emails to your recipients asking them to confirm their continued interest in receiving your future emails.

{% info %}
To avoid blocked emails, double check the spelling of the email addresses on your list. Common misspellings include: the domain (@ homail.com, @ gmal.com, etc.) or any piece of the address (@ gmail.cm, @ gmailcom, etc.). It helps to have the recipient confirm their email to ensure it is correct during the registration/sign-up process. SendGrid recommends double opt-ins to make sure each email address on your list is real.
{% endinfo %}

{% anchor h2 %}
Peer-Initiated Email Invitation Requirements
{% endanchor %}

A peer-initiated invitation system can help your subscribers spread the word about your service and grow your user base—if done well. However, an aggressive invitation system can backfire, and your invitations will be filtered or blocked. SendGrid customers who implement a peer-initiated invitation system must abide by the following requirements:

1. Never allow your subscribers to send invitations to their entire address book. Address books contain old, stale addresses that ISPs use as spam traps. To prevent this, design your invitation system so that your subscriber must deliberately select each invitee.
1. Limit the number of invitations each customer can send to encourage selective, quality invitations. When your customers are careful to invite only those who they think will appreciate your service, you reduce the risk of recipients reporting the invitations as spam. If enough people mark your invites as spam, they will be blocked or filtered—not what you intended.
1. Clearly display the inviter’s name or email address, so the invitee knows who sent the invitation. (Peer-initiated invitations are most effective when the invitee knows and trusts the inviter.)
1. The From address on the invitation must reflect your brand. Don’t use the inviter’s email address for the invitation emails From address.
1. Clearly express the purpose of the invitation. Recipients must understand what they are being invited to.
1. After the initial invitation, don’t send more than one follow-up (reminder) email to invitees that didn’t respond to the first invitation.

You increase the odds of your invitations reaching the recipient when you structure your systems and processes to send the right message, to the right person, at the right time, with the right frequency. If you don’t, your messages will be marked as spam and your marketing results will suffer. Avoid those pitfalls.

SendGrid strongly recommends:

* Ensuring your invitation is relevant and valued by the recipient.
* Allowing your inviters add a personal text-only message to their invitation. (No URLs, as they may be used to exploit or infect the invitee.)
* Including a visible, functioning opt-out link—it’s better for the recipient to remove themselves from future mailings than to report your message as spam.
* Being cautious of offering invitation incentives to your subscribers. Incentives may encourage them to invite people who aren’t likely to want your service, and this could backfire.
* Monitoring your spam complaints. Some inviters will trigger spam complaints by sending invitations to people who don’t want them. If your system correlates spam complaints with the troublesome inviter, you can limit their invitation quota to minimize the adverse effect on your email sending reputation.
* Pre-screening the email addresses you collect before you send the invitation. Ensure addresses are syntactically correct, and that the domain part of the address has a DNS MX record (which indicates that the domain accepts mail).

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Lists and Segmentation](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html)
- [Unsubscribe Groups](https://sendgrid.com/docs/User_Guide/Suppressions/advanced_suppression_manager.html)
- [Custom Fields](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/custom_fields.html)
