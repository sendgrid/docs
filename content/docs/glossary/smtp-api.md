---
seo:
  title: SMTP API
  description: SMTP API is an API that allows you to tag your emails and provide customized email handling instructions on a per email basis.
  keywords: smtp api
title: SMTP API
weight: 0
layout: page
navigation:
  show: false
---

[SMTP]({{root_url}}/glossary/smtp.html) stands for Simple Mail Transfer Protocol. SMTP allows software to transfer email over the internet. The term API stands for Application Programming Interface, which allows software to talk to each other. Therefore the SMTP API allows two or more software platforms to talk to each other over the internet, based on a set of defined parameters and rules between systems.

The SendGrid SMTP API gives developers the ability to customize email handling instructions using an X-SMTPAPI header. This JSON header is placed in each email message providing specific instructions on what to do with the email message. The customized header can be added to any SMTP message sent to SendGrid for interpretation by the receiver.

There are two prime benefits to using the SMTP API. Since there are so many languages, frameworks, and mail clients, the SMTP API is the most flexible and simplest solution for delivering email. Secondly, SMTP API gives you advanced control over your email messages. You can tag or label your emails and set filters to define the type data you want to receive. You can create dynamic emails, automatically customize emails and add unique arguments using templates to make it easier to deliver your email efficiently.

SendGrid makes it easy for customers to integrate their existing application with SendGrid in a few simple steps using SMTP. By changing your username, password, server host name and port connections, you can start sending email in a just a few minutes.

The power of SMTP can be extended using our SMTP API which enables advanced functionality to take email management to the next level. You can use SendGrid’s SMTP API to perform tasks such as list management, open and click tracking, authentication, analytics integration, subscription management, and more. This is just one more way that SendGrid makes email delivery simpler and faster for developers.

For more information about the SendGrid SMTP API, you can visit our [Documentation page]({{root_url}}/for-developers/sending-email/building-an-smtp-email/). There, you’ll be able to learn how to use the API and implement the right headers to gain the statistics you need.

In addition to our SMTP API, we also provide customers a Web API. Unlike the SMTP API, our [Web API]({{root_url}}/API_Reference/Web_API/index.html) allows customers to retrieve information about their account and the messages they send to their recipient list. The Web API allows customers to see what messages are bounced back, what are reported as spam, and how many recipients unsubscribed from their email program.

Finally, SendGrid also offers custom webhooks and other tools to give customers even more insight into their email programs. Some of our most versatile tools and apps include:

* [Event Webhook]({{root_url}}/for-developers/tracking-events/event/) – This webhook allows customers to automatically receive information about the performance of their email program through JSON posts to a url of their choosing. Event Webhook provides an easy way to track the status of messages and whether they have been delivered to specific email addresses.
* [Parse Webhook]({{root_url}}/API_Reference/Webhooks/parse.html) – Rather than sending email from an address that doesn’t allow responses, customers can use the Parse Webhook to receive emails and even parse out the content and attachments.
* [IP Whitelabeling]({{root_url}}/glossary/reverse-dns.html) – If you’re sending email through SendGrid, IP whitelabeling allows you to remove the “sent via SendGrid” address in your messages, giving you a better sending reputation and removing SendGrid from the entire message.
* [Transactional templates](https://sendgrid.com/dynamic_templates) – We created transactional templates to make creating different versions of templates easier for marketers and developers. With transactional templates, marketers can create and send email without the assistance of a technical person.
