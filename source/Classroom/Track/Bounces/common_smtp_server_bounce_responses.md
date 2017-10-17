---
seo:
  title: Common SMTP Server Bounce Responses
  description: Common SMTP Server Bounce Responses
  keywords: policy, address, form, NDR, bounce, block, 250, 450, 451, 452, 550, 551, 552, 553, 554, delayed, Unable to Parse Server Reason, invalid, response, delay, queued, delivery, deferred
title: Common SMTP Server Bounce Responses
weight: 0
layout: page
zendesk_id: 200181758
navigation:
  show: true
---

Email, at it's core, is essentially two or more computers talking to each other in short codes to relay simple text messages. Being able to interpret these codes when something goes wrong is a skill that doesn't always come naturally, so we've assembled a collection of common responses you're likely to see come back from recipient mail servers, as well as some guidance on what to do with them.

This is only a small handful of example codes that can get sent back. Every receiving mail server out there is unique, so the responses you see may differ from those below. Always refer to the human-readable portion of the response code to get more info if you get stuck, or check out our new [Deliverability Center](https://sendgrid.com/deliverabilitycenter/#/) to see if an explanation of your response code has been listed!

## **250**  

The best mail server response code you can get. When you see this, everything has gone according to plan! This response is what results in a 'Delivered' event within your Sendgrid stats, and indicates that the recipient server has accepted the message.

### Examples:

- 250 2.0.0 OK 1376056636 i3si9508927obz.16 - gsmtp
- 250 ok dirdel
- 250 &lt;4798911130a2069f3483fda756b8e81c@www.example.com&gt; Queued mail for delivery

**_ What to do with this response_** _:_ Nothing, all is well with the cosmos. If you want, you could always print it out and frame it. Do keep in mind that messages that contain things like "Queued mail for delivery" is still indicative of a successful handoff to the recipient server, but there may still be internal queueing on the far end .
<br></br>

#Temporary Failures - _“If at first you don’t succeed..."_

A 400-style message is usually returned when some sort of transient error is encountered during the message transaction. These types of responses are usually not a cause for alarm as most of these will iron themselves out given a little time.

## **421**  

Messages are temporarily deferred because of recipient server policy reasons. Usually because of too many messages or connections in too short a timeframe.

### Examples:

- 421 4.7.0 [GL01] Message from (X.X.X.X) temporarily deferred
- 421 4.7.1 : (DYN:T1) http://postmaster.info.aol.com/errors/421dynt1.html (throttled)
- 421 4.7.0 [GL01] Message from (X.X.X.X) temporarily deferred - 4.16.50. Please refer to http://postmaster.yahoo.com/errors/postmaster-21.html

**_What to do with this response_**: We’ll continue to retry deferred messages for up to 72 hours for a response like this, but you may consider temporarily easing off the throttle when sending messages to a domain that is returning this code, just so you don’t further delay your messages currently being tried. 

## **450**  

The message failed because the user's mailbox was unavailable, perhaps because it was locked or was not routable at the time.

### Examples:

- 450 4.2.1 The user you are trying to contact is receiving mail too quickly. Please resend your message at a later time. If the user is able to receive mail at that time, your message will be delivered.
- 450 too frequent connects from 198.37.147.135, please try again later. (throttled)

  **_What to do with this response_**: We’ll continue to retry deferred messages for up to 72 hours for a response like this. Generally this is based on a large influx of messages that you send, or if you've sent at a rate that the recipient server deems worthy of slowing down.

## **451**  

The message simply failed, usually due to a far-end server error. This is unlikely anything you’ve done, remember we’ll keep retrying for 72 hours, so just keep an eye on it.

### Examples:

- 451 mta1012.mail.gq1.yahoo.com Resources temporarily unavailable. Please try again later [#4.16.1].
- 451 Temporary local problem - please try later

**_What to do with this response_** : We’ll continue to retry deferred messages for up to 72 hours for a response like this. Just keep your eyes peeled to see if the response to our retry attempts change.

## **452**  

The message has been deferred due to insufficient system storage. Not your fault, they'll probably accept the mail later on once there's more space.

### Examples:

- 452 Too many recipients received this hour (throttled)
- 452. 4.3.1 Insufficient system storage (throttled)
- 452 4.2.2 Over Quota

**_What to do with this response_** :  We’ll continue to retry deferred messages for up to 72 hours for a response like this. Just keep your eyes peeled to see if the response to our retry attempts change.
<br></br>
#Hard Failures -  _"Return to Sender..."_

A Hard, or Immediate, failure is anything that gets 500-style message as the result of trying to hand off a message. This typically indicates that some sort of permanent error occurred, this can range from systemic errors on the far-end server that just flat out prevents mail from coming in, all the way to policy-related blocks pertaining to content or other such factors. The examples below will give a taste of some of the myriad reasons a 500-style NDR(non-delivery response) can get returned for.

## **550**

The user's mailbox was unavailable. Usually because it could not be found, or because of incoming policy reasons.

### Examples:

- 550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces.
- 550 Requested action not taken: mailbox unavailable
- 550 5.1.1 &lt;address@aol.com&gt;: Recipient address rejected: aol.com

**_ What to do with this response_** : It's probably a good idea to take addresses that throw this response off of your main list, as it's likely a bogus address or one that was mistyped.

## **551**

The intended mailbox does not exist on this recipient server. This response will sometimes include a forward address to try if the server knows where the intended mailbox is.

### Examples:

- 551 not our customer
- 551 user does not exist

**_ What to do with this response_** : Don’t bother re-sending, the recipient server does not recognize the recipient address as being one of it’s own. Keep any eye on the human readable portion of the response, as it may include a forwarding address. 

## **552**  

The intended mailbox has exceeded its storage limits.

###  Examples:

- 552 5.2.2 This message is larger than the current system limit or the recipient's mailbox is full. Create a shorter message body or remove attachments and try sending it again.

**_What to do with this response_**: It’s at your discretion if you want to try re-sending, but there's a pretty good chance that it's a defunct address. We don't resend messages with this error code, so refer to the human readable portion for more guidance. 

## **553**

The message was refused because the mailbox name is either malformed or does not exist.

### Examples:

  - 553 sorry, that domain isn't in my list of allowed rcpthosts (#5.7.1)
  - 553 Invalid/inactive user.

_**What to do with this response_: Don’t retry sending to this address, it’s fairly likely that it’s a bogus or mistyped address.

## **554**

The message failed. This response is a ‘default’ of sorts, but can be attributed to anything from planetary alignment, tides of the moon, or just plain bad luck. Generally a very vague NDR, but refer to the human-readable portion of the message for further instruction. 

### Examples:

  - 554 5.7.1 - ERROR: Mail refused
  - 554 5.7.1 [P4] Message blocked due to spam content in the message.

**_ What to do with this response_** _:_ Use the human readable portion of the message for further guidance, if you’re not sure what to do, just consider the address “bad” unless the recipient contacts you.

## **Other**

Sendgrid will also display a code when the recipient server has responded with a literally blank reason code. Rather than leave you to ponder what a blank field might mean, the below message is displayed instead, letting you know that the far end was not able to respond intelligently to our request.

Delayed Bounce - Unable to Parse Server Reason

**_What to do with this response_** _:_ Your best bet is to contact the mail administrator for the intended recipient's mail domain to see if they have any more info on what may have happened.  
