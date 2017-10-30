---
seo:
  title: Keeping Your Registration Form Secure
  description: Keeping Your Registration Form Secure
  keywords: double, opt-in, secure, sign, up, registration, form
title: Keeping Your Registration Form Secure
weight: 0
layout: page
zendesk_id: 200182928
navigation:
  show: true
---

Registration forms are a great way to follow up people’s interest in what you are offering on your website and with these tools you are able to make sure it is done right. Unfortunately, registration forms can be a large source of a sender acquiring bounced addresses and [Spam Traps]({{root_url}}/Classroom/Deliver/Undeliverable_Email/spam_trapped.html) which could cause your business to spam a host's mailbox without proper validation of addresses. This can reflect poorly in your SendGrid internal reputation as well as reflect poorly upon your business. Fortunately, there are many helpful techniques that can help a sender avoid many of the issue that can come up through their registration form.

Sometimes in the registration process, a person makes a mistake in entering their email such as example@example.com or person@@domain.com. By entering the email address twice and having a system in place that checks that the addresses match up, the person entering their email address has a much smaller chance of accidentally entering an invalid address.

A good technique in protecting your registration form from bots is placing a required Captcha in the form:

[http://en.wikipedia.org/wiki/CAPTCHA](http://en.wikipedia.org/wiki/CAPTCHA)

A Captcha is a test to ensure that form is filled out by a human being as opposed to a bot. The image is not replicable by a bot but easily replicated by a human being.

One common issue that arises with email registration forms is people registering false or fake addresses. To prevent this, the form can say that the service is not granted unless they confirm via email that they would like the service. This can be done with a [Double Opt-In Email]({{root_url}}/Glossary/opt_in_email.html), confirming that their address exists. A double opt-in email not only helps ensure that there is an actual human being registering but also validates that the recipient did indeed sign up for your registration.

There are many great techniques available to protect your registration form but a balance must be created between user friendliness and security. Some forms have many required fields in registering as well as checks to make sure that the form is filled out correctly. Too many fields can drive away potential interest in your site or product. One way to balance out the registration process is to have other information about the person be collected on a landing page after the registration form is done. This serves to be both user friendly as well as allow you to collect valuable information.

 

Feel free to view our [Security Check]({{root_url}}/Classroom/Basics/Security/security_checklist.html) list for more security tips.
