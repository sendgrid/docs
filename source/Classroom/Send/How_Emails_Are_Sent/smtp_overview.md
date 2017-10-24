---
seo:
  title: SMTP Overview
  description: Learn how to send email via SendGrid's SMTP service.
  keywords: smtp, smtpapi, x-smtpapi, headers, filters, send, email
title: SMTP Overview
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [What is SMTP?](#-What-is-SMTP)
* [How to Send Email via SMTP](#-How-to-Send-Email-via-SMTP)
* [Customizing Your Send](#-Customizing-Your-Send)
* [Filters](#-Filters)
* [Scheduling Your Send](#-Scheduling-Your-Send)
* [Substitution Tags](#-Substitution-Tags)
* [Section Tags](#-Section-Tags)
* [Suppression Groups](#-Suppression-Groups)
* [Categories](#-Categories)
* [Unique Arguments](#-Unique-Arguments)

{% anchor h2 %}
What is SMTP?
{% endanchor %}

[SMTP]({{root_url}}/Glossary/smtp.html), or _simple mail transfer protocol_, is a quick and easy way to send email from one server to another. SendGrid provides a 3rd party SMTP service that allows you to deliver your email via our server instead of your own client or server.

For a deeper dive into what SMTP is, what the benefits of sending email via SMTP are, and how SendGrid can help, see the [SMTP Service Crash Course](https://sendgrid.com/blog/smtp-service-crash-course/) on our blog.

{% anchor h2 %}
How to Send Email via SMTP
{% endanchor %}

1. [Create an API Key](https://app.sendgrid.com/settings/api_keys) with at least "Mail" permissions.
2. Set the server host in your email client or application to `smtp.sendgrid.net`.
    * This setting is sometimes referred to as the _external SMTP server_ or the _SMTP relay_.
3. Set your username to `apikey`.
4. Set your password to the API key generated in step 1.
5. Set the port to `587`.
    * For unencrypted or [TLS connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `25`, `2525`, or `587`.
    * For [SSL connections]({{root_url}}/Classroom/Basics/Email_Infrastructure/ssl_vs_tls.html), use port `465`.

{% anchor h3 %}
Rate Limits
{% endanchor %}

* You may send up to **100 messages per SMTP connection**.
* You may open up to **10 concurrent connections from a single server**.

{% anchor h3 %}
Related Articles
{% endanchor %}

* [SMTP Ports]({{root_url}}/Classroom/Basics/Email_Infrastructure/smtp_ports.html)
* [Recommended SMTP Settings]({{root_url}}/Classroom/Basics/Email_Infrastructure/recommended_smtp_settings.html)
* [Integrate With SendGrid]({{root_url}}/Integrate/index.html)

{% anchor h2 %}
Customizing Your Send
{% endanchor %}

{% anchor h3 %}
Filters
{% endanchor %}

You can customize the emails you send via SMTP by using different settings (also referred to as filters). These settings are specified within the **X-SMTPAPI header**.

For example, to send a blind carbon copy (BCC) of your email to the address example@example.com, include the following in your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "filters" : {
    "bcc" : {
      "settings" : {
        "enable" : 1,
        "email" : "example@example.com"
      }
    }
  }
}
{% endcodeblock %}

For a complete list of settings that can be enabled via the X-SMTPAPI header, see our [SMTP documentation]({{root_url}}/API_Reference/SMTP_API/apps.html).

{% anchor h3 %}
Scheduling Your Send
{% endanchor %}

You can easily schedule when your email will be sent by using the `send_at` parameter within your X-SMTPAPI header. Set the value of `send_at` to a [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) representing the time that you want your email to be sent.

{% codeblock lang:json %}
{
  "send_at": 1409348513
}
{% endcodeblock %}

For more information, see our [scheduling parameters documentation]({{root_url}}/API_Reference/SMTP_API/scheduling_parameters.html).

{% anchor h3 %}
Substitution Tags
{% endanchor %}

Substitution tags allow you to dynamically insert specific content relevant to each of your recipients, such as their first and last names.

For example, to use a substitution tag to replace the first name of your recipient, insert the tag `-name-` in the HTML of your message:

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
        The body of your email would go here...
    </p>
  </body>
</html>
{% endcodeblock %}

To define the value that will replace the `-name-` tag, define the following in your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "to": [
    "john.doeexampexample@example.com",
    "example@example.com"
  ],
  "sub": {
    "-name-": [
      "John",
      "Jane"
    ]
  }
}
{% endcodeblock %}

For more information, see our [substitution tags documentation]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html).

{% anchor h3 %}
Section Tags
{% endanchor %}

Section tags are similar to substitution tags, but rather than replace tags with content for each individual recipient, section tags allow you to replace a tag with more generic content— like a salutation.

For more information, see our [section tags documentation]({{root_url}}/API_Reference/SMTP_API/section_tags.html).

{% anchor h3 %}
Suppression Groups
{% endanchor %}

You can easily specify an unsubscribe group for an email sent via SMTP by including the `asm_group_id` parameter in your X-SMTPAPI header. Simply set the value of `asm_group_id` to the numerical ID of the group you would like to use.

{% codeblock lang:json %}
{
  "asm_group_id": 1
}
{% endcodeblock %}

For more information, see our [suppression groups documentation]({{root_url}}/API_Reference/SMTP_API/suppressions.html).

{% anchor h3 %}
Categories
{% endanchor %}

Categories allow you to track your emails according to broad topics that you define, like "Weekly Newsletter" or "Confirmation Email". Simply define the category by using the `category` parameter within your X-SMTPAPI header:

{% codeblock lang:json %}
{
  "category": "Example Category"
}
{% endcodeblock %}

For more information, see our categories documentation.

{% info %}
Categories should only be used for broad topics. To attach unique identifiers, please use [unique arguments]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html).
{% endinfo %}

{% anchor h3 %}
Unique Arguments
{% endanchor %}

Unique arguments are a very useful way for you to track your emails based on specific identifiers unique to individual messages. Unique arguments can be retrieved via SendGrid's [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) or your [email activity page]({{root_url}}/User_Guide/email_activity.html).

For more information, see our [unique arguments documentation]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html).
