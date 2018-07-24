---
seo:
  title: SMTP
  description: SMTP is an acronym for Simple Mail Transfer Protocol. SMTP is a process and set of guidelines for sending email.
  keywords: smtp, simple mail transfer protocol, smtp email
title: SMTP
weight: 0
layout: page
navigation:
  show: false
---

For most people, sending an email is as simple as entering an email address, writing a message, and hitting “send;” a few minutes later, the same message arrives in the recipient’s inbox. What you may not know, however, is that there is an entire process a message needs to go through for this to happen.

SMTP is an acronym for Simple Mail Transfer Protocol. SMTP is a process and set of guidelines that almost every email needs to go through in order to leave one outbox and arrive at another person’s inbox.

{% anchor h2 %}	How SMTP Works
{% endanchor %}	
Once you’ve composed and sent an email, it no longer appears as the sleek interface you see when you look at Gmail, Yahoo!, or Outlook. After hitting “send,” your email is transformed into a long string of plain text that contains information like timestamp, sender, recipient, heading, and message body. This string of code is sent to an SMTP server.

An [SMTP server]({{root_url}}/glossary/smtp-server.html) is a constantly-running application that speaks SMTP. The server decodes your email, determines which server the message must be sent to for your recipient to retrieve it, and relays the message there.

After the message has been relayed to the next server, the recipient’s email provider, like Yahoo! or Gmail, downloads the message and delivers it to the appropriate inbox.

{% anchor h2 %}	Why is SMTP Important?
{% endanchor %}	
SMTP is important because it provides a common set of guidelines for messages to be transferred from one email host to another. Essentially, SMTP is the only way any email can be sent from one provider to another without losing any of the content or functionality.

While sending one email is fairly simple, for larger organizations that send thousands or millions of [marketing]({{site.site_url}}/email-marketing) or [transactional email]({{site.site_url}}/transactional-email), the SMTP process can get much more complicated, requiring [SMTP relay service]({{site.blog_url}}/smtp-relay-service-basics/) and custom headers for multiple recipients.

If you have any SMTP questions, or if you want to know more about how SendGrid uses SMTP to send billions of email every month, contact the [SendGrid support]({{site.support_url}}/hc/en-us) team today.
