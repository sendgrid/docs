---
seo:
  title: Let Old Addresses Sleep in Peace!
  description: Let Old Addresses Sleep in Peace!
  keywords: address, double, opt-in, notification, old, best, spam traps, lists, practices
title: Let Old Addresses Sleep in Peace!
weight: 0
layout: page
zendesk_id: 200182948
navigation:
  show: true
---

The majority of problems that arise with senders joining SendGrid are the result of sending to old, unengaged address lists. We understand that is it hard for a business to forfeit potential customers but sending to an old address list has the potential to trash your deliverability and completely ruin your brand name. 

What problems can arise:  

- Spam trap hits - Old addresses (or even entire domains) that have been abandoned may be recycled into [spam traps]({{root_url}}/Classroom/Deliver/Undeliverable_Email/spam_trapped.html). Once recycled, spam traps never opt in to receive email. So while an address may have opted in years ago, the spam trap will see your emails as unsolicited, determining that you are sending spam. Play it safe and remove addresses that haven’t engaged with your emails in six months. You don’t want old addresses that are no longer interested in receiving your emails ruin your reputation so that new, engaged addresses don’t get them.   

- Bounces - Old addresses that have been taken out of commission will likely result in a bounce. Receiving mailboxes monitor how many bounces you have on their system and will reject your email if this volume is too high.  

- Spam Complaints - A recipient who is no longer interested in your email (and may not even remember opting in) is much more likely to report your email as spam. What difference is it to the recipient when they are cleaning out their inbox:  reporting as spam or unsubscribing?  They have virtually the same outcome for the recipient and reporting email as spam is often times easier.   

All of the above are key factors that influence how ESPs, ISPs, Reputation Monitors and Blacklists base their decisions to accept or deny mail. 

How can you prevent this from happening:  

- If an address has **not engaged with your emails in over six months** , they are probably not interested in or expecting to receive your emails.  **Remove these addresses**. They are doing you more harm than good at this point. 

- The best way to make sure your recipients are engaged is to **make sure they have explicitly opted in**. Seems obvious?  Well, we hope so :)   [Double opt in]({{root_url}}/Glossary/opt_in_email.html) is preferable as it verifies you are sending to a legitimate address, and confirms that your subscriber wants to receive your email. 

- **Re-opt in**. Don’t rely on them to unsubscribe. Using our [Event API](http://sendgrid.com/docs/API_Reference/Webhooks/event.html), check to see if they are clicking or opening your mail. If not, send them a winback email and follow these [best practices]({{root_url}}/Glossary/reconfirmation.html) regarding your reconfirmation campaign.  

- Address turnover rates are around 30% per year. **Put a form in place** that makes it easy for subscribers to notify you that they have changed their address.   

- **Keep contact**. Continue engaging with your subscribers, keep them updated, find clever ways to keep them interested. This way they won’t forget about you and mark your email as unsolicited spam.  

- Make sure your **unsubscribe link** is always very visible and easy to use. Remember that you are competing with the “Report Spam” button for ease of use... 

- Ensure that **bad addresses are suppressed**. SendGrid automatically suppresses all previously bounced, blocked, spam reported, unsubscribed, and invalid emails under your “Email Reports”. Be safe and remove these addresses from your master list.  


When it comes to list housekeeping, a little effort in the short term can go a ways in the long run and will save you a lot of headache. After employing these methods, you will have a great reputation with receiving mailboxes giving you better deliverability and higher engagement rates. Besides, nobody wants to be known for sending spam.
