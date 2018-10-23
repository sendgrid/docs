---
seo:
  title: Sending a Legacy Transactional Template Email over SMTP or v2
  description: Learn how to send a legacy transactional template with the SMTP API.
  keywords: SMTP, send email, integrate, building, filters, scheduling, substitution, suppression groups, unique arguments, recipients, legacy template, transactional template
title: Sending a Legacy Transactional Template Email over SMTP
group: x-smtpapi
weight: 949
layout: page
navigation:
  show: true
---

<call-out>

### Who should consider using the X-SMTPAPI?

For customers who are unable to use the Web API v3, SMTP or v2 is an acceptable option.

</call-out>

<call-out type="warning">

The X-SMTPAPI does not support Dynamic Transactional Templates. For sending Dynamic Transactional Templates you need to use v3 Mail Send.

* [How to send an email with Dynamic Transactional Templates]({{root_url}}/for-developers/sending-email/how-to-send-an-email-with-dynamic-transactional-templates)
- [Getting Started with the v3 Mail Send API]({{root_url}}/for-developers/sending-email/api-getting-started/)
  
</call-out>

## 	Before you begin

Before you create and send a legacy transactional template email over SMTP you need to do the following:

* [Integrate with the SendGrid SMTP API]({{root_url}}/for-developers/sending-email/integrating-with-the-smtp-api/)
* [Send a test email over SMTP]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
* [Build an SMTP Email]({{root_url}}/for-developers/sending-email/building-an-smtp-email/)
* [Create a Legacy Transactional Template](https://sendgrid.com/templates)

## 	Sending a test Email

### Sending a test SMTP email with Telnet

[Sending a test SMTP email with Telnet](/ui/sending-email/getting-started-smtp/#sending-a-test-smtp-email-with-telnet) is one of the most basic tests you can do. This test is useful in checking the connection and determining if the most basic of problems:

* Is the server up?
* Is there a firewall blocking communication?
* Does the mail server allow for relaying of a particular domain/email address?
* What SMTP commands does the mail server support?
* Does the server respond with the correct hostname?
* Does the connection work outside any third party software or APIs?

## Sending an Email

### Code Examples with different clients for SMTP

* [SMTP Go Code Example]({{root_url}}/for-developers/sending-email/smtp-go-code-example/)
* [SMTP Node.js Code Example]({{root_url}}/for-developers/sending-email/smtp-nodejs-code-example/)
* [SMTP PHP Code Example]({{root_url}}/for-developers/sending-email/smtp-php-code-example/)
* [SMTP Perl Code Example]({{root_url}}/for-developers/sending-email/smtp-perl-code-example/)
* [SMTP Python Code Example]({{root_url}}/for-developers/sending-email/smtp-python-code-example/)
* [SMTP Ruby Code Example]({{root_url}}/for-developers/sending-email/smtp-ruby-code-example/)

### Sending via v2 mail send

* [Go Code Example]({{root_url}}/for-developers/sending-email/v2-go-code-example/)
* [Node.js Code Example]({{root_url}}/for-developers/sending-email/v2-nodejs-code-example/)
* [PHP Code Example]({{root_url}}/for-developers/sending-email/v2-php-code-example/)
* [Perl Code Example]({{root_url}}/for-developers/sending-email/v2-perl-code-example/)
* [Python Code Example]({{root_url}}/for-developers/sending-email/v2-python-code-example/)
* [Ruby Code Example]({{root_url}}/for-developers/sending-email/v2-ruby-code-example/)
* [C# Code Example]({{root_url}}/for-developers/sending-email/v2-csharp-code-example/)
* [Java Code Example]({{root_url}}/for-developers/sending-email/v2-java-code-example/)

### Enabling a Template

<call-out>

Make sure that the version of the template you want to use is set to active by using:

- The [Activate a transactional template version endpoint](https://sendgrid.com/docs/api-reference/)
  ```/templates/{template_id}/versions/{version_id}/activate```
  
- Or by [activating the template version in the UI](https://sendgrid.com/templates)

</call-out>

To use a legacy template when you send, configure the `X-SMTPAPI` header of an SMTP message:
* Enable the `templates` filter
* Set the `template_id` to one of your legacy transactional templates


**Example**
```json
{
  "filters": {
    "templates": {
      "settings": {
        "enable": 1,
        "template_id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f"
      }
    }
  }
}
```

### Set the Body and Subject Tags

The `<%subject%>` property is used for both Text and HTML templates.

The ```text``` property is substituted into the `<%body%>` of the text template and ```html``` is substituted into the `<%body%>` of the HTML template.

**Text or HTML Templates?**

<call-out>

It is best practice to provide content for both the ```html``` and the ```text``` properties in all of your emails.

If the ```text``` property is present, but not ```html```, then the resulting email will only contain the text version of the template, not the HTML version.

</call-out>


Enabling a legacy template means that the `subject` and `body`
content of your message will behave differently.

* If you want only the message's content to be displayed, populate only the token in the template's field.
* If you want only the template's content to be displayed, leave the message field (subject or body) empty, and the template will populate.

## Advanced options

You can use X-SMTPAPI [substitution]({{root_url}}/for-developers/sending-email/substitution-tags/) and [section]({{root_url}}/for-developers/sending-email/section-tags/) tags in your template's subject and body content, and they will be replaced with the values specified when you send the message.

### Substitution Tags

[Substitution tags]({{root_url}}/for-developers/sending-email/substitution-tags/) allow you to generate dynamic content for each recipient on your list. When you send to a list of recipients over SMTP API, you can specify substitution tags specific to each recipient.

### Section Tags

[Section tags]({{root_url}}/for-developers/sending-email/section-tags/) allow you to substitute in content in an SMTP message. Section tags are similar to substitution tags but are specific to the message, and not the recipient. Section tags have to be contained within a Substitution tag since SendGrid needs to know which data to populate for the recipient.
