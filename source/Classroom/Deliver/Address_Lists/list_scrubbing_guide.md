---
seo:
  title: List Scrubbing Guide
  description: List Scrubbing Guide
  keywords: spam, role, address, unsolicited, cleaning, scrubbing, suppress, unsubscribe, bad, bogus, old, invalid, unsubscribed, spam traps, lists
title: List Scrubbing Guide
weight: 0
layout: page
zendesk_id: 200183028
navigation:
  show: true
---

It’s springtime here in the United States and nothing brings in the spirit like a good spring cleaning. At SendGrid, this means scrubbing your list. For senders, a scrubbed list sent by SendGrid can be the ticket to delivery heaven. Unfortunately, scrubbing your list can be intimidating. Senders don’t know where to start and resort to using list cleaning services. What senders might not know is that cleaning your list can be done for free and much, much more effectively.

We have put together simple steps that will improve any senders list. A bad list is fraught with problems and if left unbrushed, can lead to removing all of a senders teeth which requires a lot of resources to replace. Please go through these; we promise it will save you a trip to the dentist in the long run.

** **

1. SendGrid automatically suppresses hard bounces if you try to send to them again. Let me make this clear - don’t waste your credits; remove these addresses from your list. Keeping your list up to date will save you money and time should you try to send somewhere else with your list.
2. This may seem obvious but when people unsubscribe, remove them from your list! If you are keeping unsubscribed addresses around, they have broken up with you and it is best to move on. Delete their addresses.
3. Remove repeat addresses. Sending to the same address twice greatly increases their chance of submitting a spam complaint. In fact, they will probably send two spam complaints. Spam complaints will cause the death of a senders deliverability.
4. Typos. Mistakes can happen in the process of acquiring addresses. This can be misspelling the domain (@ [homail.com](http://homail.com/), @ [gmal.com](http://gmal.com/), etc.) or any piece of the address (@ [gmail.cm](http://gmail.cm/), @gmailcom,  etc.). A great way to avoid this is in the registration form process. Have the recipient input their address twice to ensure it is correct. Then to make sure the address is real, do a [double opt-in]({{root_url}}/Glossary/opt_in_email.html).
5. Seek out the dead domains. Many times these are used as [spam traps]({{root_url}}/Classroom/Deliver/Undeliverable_Email/spam_trapped.html) and sending to them will ruin a sender’s deliverability. Write a script or make a list of the domains you are sending to and do an mx lookup via the command line or a service like http://mxtoolbox.com to find defunct domains,  some of which may now be turned into spam traps. 
6. Find email addresses that are commonly used as spam traps or used to determine if you are sending spam. This means all role addresses (abuse@, sales@, help@, etc.) as well as common spam trap names (junk@, test@, asdf@, spam@, etc.).
7. Keep track of date of opt-in. This provides great opportunity for scrubbing out stale addresses. [Deal with old addresses appropriately]({{root_url}}/Classroom/Deliver/Address_Lists/let_old_addresses_sleep_in_peace.html) as they often lead to sending to spam traps or recipients likely to spam complain. Remember the best way to keep your addresses current is to [maintain engagement]({{root_url}}/Classroom/Deliver/Delivery_Introduction/keep_in_touch_the_importance_of_engagement.html) giving the recipient an opportunity to unsubscribe as well as ensuring that they remember your relationship.  

Remember, brush often and make periodical appointments for a deep cleaning.
