---
seo:
  title: v3 Mail Send FAQ
  description:
  keywords: v2 mail send, v3 mail send, faq, frequently asked questions
title: v3 Mail Send FAQ
weight: 0
layout: page
navigation:
  show: true
---

* [What is the v3 Mail Send endpoint?](#-What-is-the-v3-Mail-Send-endpoint)
* [Do I have to have a certain type of account to use the v3 Mail Send endpoint?](#-Do-I-have-to-have-a-certain-type-of-account-to-use-the-v3-Mail-Send-endpoint)
* [I’m currently using the v2 Mail Send endpoint. Should I switch to v3?](#-Im-currently-using-the-v2-Mail-Send-endpoint-Should-I-switch-to-v3)
* [How do I migrate from V2 to V3?](#-How-do-I-migrate-from-V2-to-V3)
* [What’s the difference between sending mail via SMTP and the Web API?](#-Whats-the-difference-between-sending-mail-via-SMTP-and-the-Web-API)
* [Can I send marketing email over the v3 Mail Send endpoint?](#-Can-I-send-marketing-email-over-the-v3-Mail-Send-endpoint)
* [Are there limits on how often I can send email and how many recipients I can send to?](#-Are-there-limits-on-how-often-I-can-send-email-and-how-many-recipients-I-can-send-to)
* [Why did you remove the x-smtpapi parameter? Can I still change my mail settings, tracking settings, and unique arguments?](#-Why-did-you-remove-the-xsmtpapi-parameter-Can-I-still-change-my-mail-settings-tracking-settings-and-unique-arguments)
* [Where can I find more information about the v3 Mail Send endpoint?](#-Where-can-I-find-more-information-about-the-v3-Mail-Send-endpoint)

{% anchor h2 %}
What is the v3 Mail Send endpoint?
{% endanchor %}

The [v3 Mail Send endpoint]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) is the latest version of SendGrid’s Web API endpoint that allows you to send email by making a simple HTTP request. The introduction of the v3 Mail Send endpoint signifies the completion of our RESTful Web API v3.

If you’re looking for one of the other methods that you can use to send mail through SendGrid, please see our [SMTP-Relay](https://sendgrid.com/docs/Integrate/index.html#-SMTP-Relay), [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html) feature, or [Web API v2](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

{% anchor h2 %}
Do I have to have a certain type of account to use the v3 Mail Send endpoint?
{% endanchor %}

The v3 Mail Send endpoint is available on all SendGrid pricing plans. The same plan based limitations on the volume of email you may send still apply to the v3 Mail Send endpoint. For more information, please visit our [Pricing Page](https://sendgrid.com/pricing).

{% anchor h2 %}
I’m currently using the v2 Mail Send endpoint. Should I switch to v3?
{% endanchor %}

The v3 Mail Send endpoint offers many improvements over the v2 endpoint, and we highly encourage all users to migrate their email programs from the v2 to the v3 endpoint. While you may not notice any significant changes in the functionality offered by the v3 mail send endpoint, you will find it to be significantly easier to use. The v3 Mail Send endpoint offers a more comprehensive and consistent [JSON schema]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html#-Request-Body-Parameters), intuitive validation with more in depth [error messages]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html), and complete coverage across all [7 of our supported libraries]({{root_url}}/Integrate/libraries.html).

{% anchor h2 %}
How do I migrate from V2 to V3?
{% endanchor %}

If you are currently using the v2 Mail Send endpoint, we have provided some [helpful instructions]({{root_url}}/Classroom/Send/v3_Mail_Send/how_to_migrate_from_v2_to_v3_mail_send.html) on how to migrate from sending mail over the Web API v2 to the Web API v3.

{% anchor h2 %}
What’s the difference between sending mail via SMTP and the Web API?
{% endanchor %}

Sending email via the [SMTP-Relay]({{root_url}}/Integrate/index.html#-SMTP-Relay) is a quick and simple way to integrate your existing SMTP code with SendGrid’s email functionality. All you have to do is modify your SMTP configuration to point to SendGrid’s SMTP server and your email will be routed through SendGrid’s SMTP-Relay. You may then specify special instructions for how you would like SendGrid to handle your email by means of the [X-SMTPAPI header]({{root_url}}/API_Reference/SMTP_API/index.html).

The Web API, on the other hand, requires you to make an HTTP request to an endpoint in SendGrid’s API. Previously, SendGrid has only offered a mail sending endpoint in the Web API v2, but now you can use the RESTful Web API v3 to send your email. Simply make an `HTTP POST` request to `https://api.sendgrid.com/v3/mail/send` with the data for your email included in a JSON payload. For more information, please visit our [v3 Mail Send documentation]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).

{% anchor h2 %}
Can I send marketing email over the v3 Mail Send endpoint?
{% endanchor %}

You can send any type of email (transactional or marketing) over the v3 Mail Send endpoint. However, we recommend you take a look at our [Marketing Campaigns API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Marketing_Campaigns/index.html) for a more robust marketing feature set (including segmentation and templates).

{% anchor h2 %}
Are there limits on how often I can send email and how many recipients I can send to?
{% endanchor %}

There are rate limits on how frequently you can call the v3 Mail Send endpoint. Currently, you may make up to 10,000 requests per second to our endpoint. Each email you send may include up to 1000 recipients. For more information on other limitations, and how this may impact your integration, please visit our [v3 Mail Send overview]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).

{% anchor h2 %}
Why did you remove the x-smtpapi parameter? Can I still change my mail settings, tracking settings, and unique arguments?
{% endanchor %}

Everything that could be accomplished by using the x-smtpapi parameter in the v2 Mail Send endpoint can still be done with the v3 endpoint. While the v2 Mail Send endpoint required you to include a separate block of JSON for various mail settings within the single x-smtpapi parameter, the v3 endpoint payload structure includes each setting as a separate parameter. This allows for a quicker and more consistent integration and helps with validation and debugging.

{% anchor h2 %}
Where can I find more information about the v3 Mail Send endpoint?
{% endanchor %}

For more general information about the v3 Mail Send endpoint, please visit the [v3 Mail Send Overview]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html). Below, you will find links to more in depth information about the endpoint.

Related Resources:

* [v3 Mail Send Overview]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html)
* [SandBox Mode]({{root_url}}/Classroom/Send/v3_Mail_Send/sandbox_mode.html)
* [Errors]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html)
* [Personalizations]({{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html)
* [Examples for Common Use Cases]({{root_url}}/Classroom/Send/v3_Mail_Send/curl_examples.html)
* [How to Migrate from V2 to V3 Mail Send]({{root_url}}/Classroom/Send/v3_Mail_Send/how_to_migrate_from_v2_to_v3_mail_send.html)
