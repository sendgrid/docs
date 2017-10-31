---
seo:
  title: Sending
  description: Sending
  keywords:
title: Sending
weight: 0
layout: page
zendesk_id: 204130318
navigation:
  show: false
---

-

I saw that a substitution tag value didn’t substitute during a send. What’s going on?

  -

A: Is there a value associated with the contact in your contact database? You can search for a specific email address and go to their contact profile to check the value of a custom field. Otherwise, check the spelling of the substitution tag in the campaign.

-

I sent a test and the substitution tag values didn’t substitute. Why?

  -

A: The Send Test feature does not replace any of the substitution tags. It is just a way for you to check how your campaign renders in your email tool.

-

One of my contacts didn’t receive my ‘Top 100 Hipster Mustaches’ campaign. Why?

  -

Do: Standard troubleshooting tips. If fails, go through regular channels to check Splunk / etc to see if the recipient received the campaign

-

One of my unsubscribed contacts doesn’t appear in my suppression group.

  -

A: It can take up to 5 minute for an unsubscribe action to appear in your suppression group.

-

I accidentally scheduled a campaign I didn’t want to send.

  -

A: You can Unschedule the campaign from the action menu menu and it will return to a Draft form. Whew!

-

I accidentally sent a campaign I didn’t mean to send!

  -

A: Unfortunately once you click Send, you cannot stop the send. We are working on a Cancel feature for this case.

-

I want to see events go to the Event Webhook. Lemme do it!

  -

A: Yes, we send events from NLVX through to the webhook. If you sent an A/B test campaign, you’ll be able to see which variation each recipient received. You got it!

-

Is there any way to turn off open/click tracking?

  -

A: At this time we enforce open and click tracking so all users get the benefits of this feature.

-

Does the unsubscribe functionality use the global unsubscribe from SendGrid?

  -

A: No, we are using a finer-grained feature called Suppression groups, which allow you to assign a specific unsubscribe group to each of your campaigns, based on how you categorize that campaign.

-

Why does NLVX require me to select a Suppression group?

  -

A: At the moment it appears that NLVX requires that all users assign an ASM to their outbound campaign, but new users and less-advanced users of our system will not be able to create and activate an ASM unless they’re familiar with utilizing an SMTPAPI header.
