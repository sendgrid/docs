---
layout: page
weight: 100
title: Building your Contact list
navigation:
  show: true
seo:
  title: Building your Contact list
  keywords: Marketing Campaigns, Contacts, Contact lists, opt-in email
  override: true
  description: Directions on how to effectively build your Marketing Campaigns Contact list.
---
* [Opt-In Email](#-Opt--In-Email)
  * [Email opt-in types](#-Email-opt--in-types)
* [Peer-Initiated Email Invitation Requirements](#-Peer--Initiated-Email-Invitation-Requirements)

The best way to protect your sending reputation and get more messages in the inbox is by building your contact list organically. Here are a few ways SendGrid recommends building your contact list.

{% anchor h2 %}
Opt-In Email
{% endanchor %}

Opt-in email refers to bulk email, such as a newsletter or advertisement, that is sent out to a mailing list where every member of that list has actively requested email from the sender. Without obtaining this permission, your email is likely unwanted or unsolicited and is liable to be marked as spam by the recipient or the receiving mailbox provider.

{% anchor h3 %}
Email opt-in types
{% endanchor %}

- **Single Opt-in** refers to the practice of requesting permission to send a recipient email during, and only during, registration.
- **Double Opt-in** refers to the practice of requesting permission twice from a recipient. For example, you could ask them if they want to receive email at registration, and then send another email asking them to verify their confirmation.
- **Confirmed Opt-in** refers to the practice of sending emails to your recipients asking them to confirm their continued interest in receiving your future emails.

<call-out>
To avoid blocked emails, double check the spelling of the emails on your list. SendGrid recommends having the recipient input their address twice to ensure it is correct during the registration/sign-up process.
</call-out>

{% anchor h2 %}
Peer-Initiated Email Invitation Requirements
{% endanchor %}

A peer-initiated invitation system can help your subscribers spread the word about your service and grow your user base—if done well. An aggressive invitation system can backfire, and your invitations will be filtered or blocked. SendGrid customers who implement a peer-initiated invitation system must abide by the following requirements:

* Never allow your subscribers to send invitations to their entire address book. Address books contain old, stale addresses that ISPs use as spam traps. To prevent this, design your invitation system so that your subscriber must deliberately select each invitee.
* Limit the number of invitations each customer can send to encourage selective, quality invitations. When your customers are careful to invite only those who they think will appreciate your service, you reduce the risk of recipients reporting the invitations as spam. If enough people mark your invites as spam, they will be blocked or filtered—not what you intended.
* Clearly display the inviter’s name or email address, so the invitee knows who sent the invitation. (Peer-initiated invitations are most effective when the invitee knows and trusts the inviter.)
* use the inviter’s email address for the invitation emails From address.
* Clearly express the purpose of the invitation. Recipients must understand what they are being invited to.
*  After the initial invitation, don’t send more than one follow-up (reminder) email to invitees that didn’t respond to the first invitation.

SendGrid strongly recommends:

* Ensuring your invitation is relevant and valued by the recipient.
* Allowing inviters add a personal text-only message to their invitation. (No URLs, as they may be used to exploit or infect the invitee.)
* Including a visible, functioning opt-out link to allow the recipient to remove themselves from future mailings instead of reporting your message as spam.
* Being aware of offering invitation incentives to your subscribers. Incentives may encourage them to invite people who aren’t likely to want your service, and this could backfire.
* Monitoring your spam complaints. Some inviters will trigger spam complaints by sending invitations to people who don’t want them. If your system correlates spam complaints with the troublesome inviter, you can limit their invitation quota to minimize the adverse effect on your email sending reputation.
* Pre-screening the email addresses you collect before you send the invitation. Ensure addresses are syntactically correct, and that the domain part of the address has a DNS MX record (which indicates that the domain accepts mail).

{% anchor h3 %}
Additional Resources
{% endanchor %}

- [Lists and Segmentation]({{root_url}}/help-support/managing-contacts/segmenting-your-contacts.html)
- [Unsubscribe Groups]({{root_url}}//docs/help-support/sending-email/index-suppressions.html)
- [Custom Fields]({{root_url}}//help-support/sending-email/custom-fields.html)
