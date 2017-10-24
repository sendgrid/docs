---
seo:
  title: Building and Managing Your Contact List
  description: Building and Managing Your Contact List
  keywords: spam, role, address, unsolicited, cleaning, clean, scrubbing, suppress, unsubscribe, bad, bogus, old, invalid, unsubscribed, spam traps, lists, list, contact, scrub, manage, opt-in, optin, affiliate, sharing, invitation, purchased, trap, toxic, sunset, policy, segment, segmentation, engagement, permission, reminder, unsubscribe, preference
title: Building and Managing Your Contact List
weight: 0
layout: page
navigation:
  show: true
---
- [Opt-In Email](#-Opt-In Email)
- [Affiliate Lists & List Sharing](#-Affiliate Lists & List Sharing)
- [Peer-Initiated Email Invitation Requirements](#-Peer-Initiated Email Invitation Requirements)
- [Purchased Lists](#-Purchased Lists)
- [Managing Your List](#-Managing Your List)
- [Organizing Your List](#-Organizing Your List)
- [Permission Reminders - Where Did You Get My Address?](#-Permission Reminders - Where Did You Get My Address?)
- [Preference Centers: Giving Subscribers Control](#-Preference Centers: Giving Subscribers Control)

{% anchor h2 %}
Opt-In Email
{% endanchor %}

Opt-in email refers to bulk email, such as a newsletter or advertisement, that is sent out to a mailing list where every member of that list has actively given you permission to send them email. Without obtaining this permission, your email is likely unwanted or unsolicited, and is liable to be marked as spam by the recipient or be “bulked” by the receiving mailbox provider (i.e. delivered directly to the spam folder).

***Types of opt-in email:***
- **Single Opt-in** refers to the practice of requesting your recipient’s permission to send them email during, and only during, registration.
- **Double Opt-in** refers to the practice of requesting your recipient’s permission to send them email twice. For example, you could ask them if they want to receive your email at registration, and then send another email asking them to confirm their permission again.
- **Confirmed Opt-in** refers to the practice of sending confirmation emails to your recipients asking them to confirm their continued interest in receiving your future emails.

![]({{root_url}}/images/confirmed_optin.png "Confirmed Opt-in Screen")

**Confirm New Addresses are Entered Correctly**
This can be misspelling the domain (@ homail.com, @ gmal.com, etc.) or any piece of the address (@ gmail.cm, @ gmailcom, etc.). Have the recipient input their address twice to ensure it is correct during the registration/sign-up process. Then to make sure the address is real, do a double opt-in (link to opt-in form)

{% anchor h2 %}
Affiliate Lists & List Sharing
{% endanchor %}

List sharing is one of the most common ways to run into trouble within the email marketing world. List sharing can be an effective way to expand your marketing base, however it is essential to use extra caution in how this is done in order to preserve your reputation as a sender over the long run.

While you think your recipients may be interested in other related offers, it is bad practice to give your recipient list to other senders. When a sender shares their list, the recipient begins receiving mail they did not solicit. If the recipient is able to trace it back to the original opted in sender, they may feel that their personal information has been compromised. This will harm the original sender’s business severely because they have opened up the recipient’s address to spam. In turn, the recipient will no longer trust this sender.

How do you get recipients that you believe would be interested in your product or service to know you exist? 

1. Place a “shout out” about your partner in your email. 
1. Have a clause or checkbox that would indicate the possibility of receiving email from affiliated senders. Checkboxes should be unchecked by default so the recipient is taking action to opt into receiving other email. 
1. If affiliated senders are going to be utilizing your list, it must be in your Terms and Conditions. Your Terms and Conditions should be very visible and clearly stated on the opt in page, not as a link or different location within the site. Keep in mind that your affiliate senders should be sending content very similar and related to the content the recipient has opted in to receive.

{% info %}
Remember: the most clear opt-in process will always return better recipient satisfaction.
{% endinfo %}

{% anchor h2 %}
Peer-Initiated Email Invitation Requirements
{% endanchor %}

A peer-initiated invitation system can help your subscribers spread the word about your service and grow your user base—if done well. An aggressive invitation system can backfire, and your invitations will be filtered or blocked. SendGrid customers who implement a peer-initiated invitation system must abide by the following requirements:

1. Never allow your subscribers to send invitations to their entire address book. Address books contain old, stale addresses that ISPs use as spam traps. To prevent this, design your invitation system so that your inviter must deliberately select each individual invitee.
1. Limit the number of invitations each customer can send to encourage selective, quality invitations. When your customers are careful to invite only those who they think will appreciate your service, you reduce the risk of invitees reporting the invitations as spam. If enough people report your invitations as spam, your invitations will be blocked or filtered—not what you intended.
1. Clearly display the inviter’s name or email address , so the invitee knows who sent the invitation. (Peer-initiated invitations are most effective when the invitee knows and trusts the inviter.)
1. The invitation messages’ From address must reflect your brand. Don’t use the inviter’s email address for the invitation emails From address.
1. Clearly express the purpose of the invitation. Recipients must understand what they are being invited to.
1. After the initial invitation, don’t send more than one follow-up (reminder) email to invitees that didn’t respond to the first invitation.

You increase the odds of your invitations reaching the recipient when you structure your systems and processes to send the right message, to the right person, at the right time, with the right frequency. If you don’t, your messages will be marked as spam and your marketing results will suffer. Avoid those pitfalls.

SendGrid also strongly recommends:

Ensure your invitation is relevant and valued by the recipient.

Let your inviters add a personal text-only message to their invitation. (No URLs, as they may be used to exploit or infect the invitee.)

Include a visible, functioning opt-out link—it’s better for the recipient to remove themselves from future mailings than to report your message as spam.

Beware of offering invitation incentives to your subscribers. Incentives may encourage them to invite people who aren’t likely to want your service, and this could backfire.

Monitor your spam complaints. Some inviters will trigger spam complaints by sending invitations to people who don’t want them. If your system correlates spam complaints with the troublesome inviter, you can limit their invitation quota to minimize the adverse effect on _your_email sending reputation.

Typos happen. Pre-screen the email addresses you collect before you send the invitation. Ensure addresses are syntactically correct, and that the domain part of the address has a DNS MX record (which indicates that the domain accepts mail).

{% anchor h2 %}
Purchased Lists
{% endanchor %}

**Sending to a purchased list gives your company a bad reputation.** 

As an email service provider striving to provide our customers the highest level of email deliverability possible, SendGrid does not allow sending to email lists that are purchased, rented, or acquired from 3rd party sources without the explicit consent of every recipient on that list. This policy is intended to protect both our business and your own. Purchased lists are almost always of poor quality, plagued with old addresses, and often contain spam traps or honeypots. In addition to the short term impacts of purchased recipient lists, sending email to purchased lists that contain spam traps and honey pots can have a long term negative impact on your sender reputation. It may take months, even years, to rebuild a positive sending reputation.

{% anchor h2 %}
Managing Your List
{% endanchor %}

Sending to a well managed list of addresses can drastically help improve your delivery. We have put together some simple steps and guidelines that will improve any senders list.

In your SendGrid Account there are different [Suppressions]({{root_url}}/User_Guide/Suppressions/index.html) lists. 

**Global Unsubscribes** - Addresses on this list are opted out of all mailing 
**Bounces** - Addresses that 
**Spam Reports** - Addresses that have marked your mail as spam
**Blocks** - Addresses that have blocked your mail temporarily, usually due to factors like a blacklisted IP address. You can attempt to resend to these addresses. 
**Invalid** - Addresses on this list are malformed and do not have a valid email address structure. (Ex. info.sendgrid.com, info@sendgridcom, info @ sendgrid.com)

https://screencast.com/t/7jP6h45qu

Sending to email addresses listed in the Bounce, invalid, Spam, and Unsubscribe list will be automatically dropped by SendGrid. Feel free to remove these addresses from your lists to save money and time.

**Remove Repeat Addresses** 
Sending the same message to the same address twice greatly increases their chance of submitting a spam complaint. Spam complaints will negatively impact your reputation and deliverability.

**Seek out the dead domains**
Many times these are used as spam traps and sending to them will ruin a sender’s deliverability. Write a script or make a list of the domains you are sending to and do an mx lookup via the command line or a service like http://mxtoolbox.com to find defunct domains, some of which may now be turned into spam traps.

**Remove Toxic and Role Email Addresses**
Find email addresses that are commonly used as spam traps or used to determine if you are sending spam. This means all role addresses (info@, sales@, help@, etc.) as well as common spam trap names (junk@, test@, asdf@, spam@, etc.).

Role Addresses email addresses are those that represent either a group of people within a company or the entire organization itself. These addresses are generally designed with a specific function in mind and are only intended to receive messages pertaining to that particular function. The majority of role addresses notify multiple people at once, and the person(s) in charge of monitoring these email accounts can change unexpectedly.

When someone signs up to receive emails at a role address they are also signing up everyone else with access to that address, so the chances of your messages being marked as spam rise significantly.


**Implement a Sunset Policy**
Making sure that you are continually reducing frequency and removing those addresses that are not engaging with your emails is critical to getting to, and staying in the inbox. We typically suggest removing addresses from your list who haven’t clicked/opened an email from you in the past 3-6 months. The sunset period can vary depending on your specific content and sending cadence.


We understand that is it hard for a business to forfeit potential customers but sending to an old address list has the potential to trash your deliverability and completely ruin your brand name.

What problems can arise:

**Spam trap hits** - Old addresses (or even entire domains) that have been abandoned may be recycled into spam traps. Once recycled, spam traps never opt in to receive email. So while an address may have opted in years ago, the spam trap will see your emails as unsolicited, determining that you are sending spam. You don’t want old addresses that are no longer interested in receiving your emails ruin your reputation so that new, engaged addresses don’t get them.

**Bounces** - Old addresses that have been taken out of commision will likely result in a bounce. Receiving mailboxes monitor how many bounces you have on their system and will reject your email if this volume is too high.

**Spam Complaints** - A recipient who is no longer interested in your email (and may not even remember opting in) is much more likely to report your email as spam. 

All of the above are key factors that influence how ESPs, ISPs, Reputation Monitors and Blacklists base their decisions to accept or deny mail.

{% anchor h2 %}
Organizing Your List
{% endanchor %}

**Segmentation**
List segmentation refers to the practice of customizing a larger master address list into smaller sub-lists categorized based on certain criteria with the goal of enhancing the level of email customization for your recipients. This allows you to gain more analytical insight to a specific campaign’s performance or isolate the deliverability impact among different campaigns.


**Segmenting by Type of Email**
You might like to segment your address list based on the campaigns you are running. This is a good practice if you are sending a mix of transactional/confirmation, notification, and newsletter emails to your users. Some of your users may want to opt-out of notifications or newsletters while still receiving more important transactional/confirmation emails.

**Segmenting by Acquisition Time and Engagement**
Another criteria for list segmentation is segregation by address acquisition time. Segmenting your list in this manner is helpful in personalizing your email campaigns. It can be helpful to have a list regarding recipients that you have not interacted with in a while (4 months or more). This list can be used for “win back” campaigns.

For help with segmenting by engagement, you can enable click and open tracking in your SendGrid account.

**Segmenting by IP Address**
It is wise to segregate these sublists so that each are sending on different IPs. For example, it is common to set up transactional/confirmation emails on a separate IP than your marketing emails as these are more prone to being responded to as spam. This will help protect the deliverability of your important emails from the potential harm due to the complaints from your more potentially risky marketing campaigns 

Also, separating your “win back” campaigns from your other email with a separate IP protects your other IPs reputation and deliverability. 

List segmentation is a great tool that can be used to power your email campaigns as well as protect your reputation as a sender. Happy sending!

{% anchor h2 %}
Permission Reminders - Where Did You Get My Address?
{% endanchor %} 

People often sign up to receive email and then simply forget about it. It begins with a customer giving you their email address so they can get that free appetizer, awesome coupon, or to create a free account for your service. Unfortunately, by the time your message reaches your customer’s inbox, the appetizer is long gone and the recipient is left wondering how on earth you got their address.

This is where permission reminders come in super handy. You’ve probably seen them before, but in case you haven’t, they are usually at the top of the email. Here are some examples: 

- “You are receiving this message because you signed up to be a member of the beer of the month club at Downtown Brewery"
- “Because you dined at our restaurant and signed up for our newsletter with a server…”
- “Because you visited our website and signed up to receive daily deals…”
- “Because you support public radio and signed up on our website to receive notifications of volunteer opportunities in your area…”

This little block of text provides your recipients with a gentle reminder that they did give you their address and it’s ok that you are sending them messages. The huge benefit of using permission reminders is the potential for increased deliverability, because recipients are much less likely to flag your content as spam when they remember they signed up to receive your messages.

There are a few things to keep in mind as you craft your own permission reminder. 

1) Make sure your reminders are specific as to where and what the customer signed up to receive when their address was first collected. 

2) Avoid vague phrases such as “because you are a customer”, “because you expressed interest”, or “because of your relationship with X”. 

3) The more information you provide your customer, the more they will trust you.

{% note %}
Bottom line: if you aren’t including a well written permission reminder in your messages, you are leaving increased deliverability on the table. Use a specific, detailed permission reminder to combat forgetfulness and spam complaints, while helping recipients remember your brand and stay engaged!
{% endnote %}

Lastly, permission reminders can also include an unsubscribe link and a request to add your address to the recipient’s address book. Remember, recipients that can easily locate your unsubscribe link are much less likely to report your message as spam.

{% anchor h2 %}
Preference Centers: Giving Subscribers Control
{% endanchor %}

Every subscriber is different. Giving subscribers the control over what they want to receive with preferences, will keep your recipients interested and continuously engaged. Some recipients may find weekly coupons conducive while others may only wish to receive a monthly newsletter. 

Examples of preference center parameters include:

- How often a subscriber is sent mail
- Which mail streams they wish to receive
- Whether or not they wish to receive website notifications

Preference centers also give you valuable information about your subscribers that you can use to better target them with future messages. Having a preference center is essential to creating a great email program and improves your ISP reputation

You can begin implementing these features by using SendGrid’s Unsubscribe Groups functionality. Unsubscribe Groups allow your recipients to specify which specific types of emails they would like to stop receiving. 

{% warning %}
CAN-SPAM requires an opt-out option in all commercial emails, but it’s good practice to provide it in any email to your recipients. CAN-SPAM requires all senders to immediately honor an opt-out request submitted by a recipient.
{% endwarning %}