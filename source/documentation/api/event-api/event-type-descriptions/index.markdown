---
comments: false
date: 2012-01-30 23:12:49
layout: page
published: false
slug: event-type-descriptions
title: Event Type Descriptions
wordpress_id: 1095
---

A request is when you request us to send a message for you. It's a count of the messages you've sent to us.
A bounce is when we attempt to deliver a message, and it's refused by the receiving server. There are two types: soft bounces, and hard bounces. A soft bounce is also called a "throttle" or "deferral", and is when the receiving server recognizes you're sending to a valid address, but refuses anyway, usually because the users mailbox is full, or because you're trying to send to many messages to that domain. A hard bounce is when the receiving server refuses the message because they don't recognize the address, or if a message has soft bounced for 72 concurrent hours. Once it's hard bounced, it's added to our Hard Bounce Suppression List.
A click is when a user clicks a link in your email. We only note this if you have Click Tracking turned on. We note total clicks and unique clicks. Unique clicks are only noted once per recipient, while clicks notes every click, no matter who it's from.
An open is when a user opens an email from you. We only note this is you have Open Tracking turned on. We note total opens and unique opens. Unique opens are only noted once per recipient, while opens notes every open, no matter who it's from.
Spam reports are when a recipient click "this is spam", or the associated report on their EUA. Their server then tells our server this has happened, and we add that address to your Spam Report Suppression List.
A block is when the receiving server is not allowing any connection from your IP. This is normally due to previous spam reports, or the receiving server has been informed your IP is blacklisted by a blacklist service. We can mitigate these upon request.
