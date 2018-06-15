---
seo:
  title: Sending Attachments
title: Attachments
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Limitations
{% endanchor %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

The total message size of emails sent via the [v3 mail send endpoint]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) is limited to 30MB. This includes all headers, the body, and attachments. That means
that the maximum attachment size depends on the size of the rest of the
stuff in your message, but we do recommend that your attachments do not exceed 10MB.

{% anchor h3 %}
v2 Mail Send
{% endanchor %}

The total message size of emails sent via the [v2 mail send endpoint]({{root_url}}/API_Reference/Web_API/mail.html) is limited to 20,480,000 bytes, or approximately
19.5MB. This includes all headers, the body, and attachments. We recommend that your attachments do not exceed 7MB.

{% info %}
Keep in mind that the size of your file on disk or in memory may
not be the same as the size of the file once it is attached, as files must
be encoded as text to be sent. You can expect an increase in size of up
to 30%.
{% endinfo %}

{% anchor h2 %}
Best Practices
{% endanchor %}

Attachments are in and of themselves potential risks when sending email.
Email filters are more likely to prevent delivery of a message that has an attachment
due to the risk of viruses.

A good alternative to attaching a file to your message is to place it on a page of your website,
and then provide a link to that web page within your message body.

{% anchor h2 %}
Using Digioh
{% endanchor %}

SendGrid has partnered with Digioh, a digital download distribution service. This allows you to send
files up to 2GB in your SendGrid Marketing Emails. Digioh also allows you to track individual
downloads and prevent non-subscribers from downloading files.

Digioh is integrated with SendGrid's Marketing Email solution, so you can be up and running in no time.

[Sign Up for a Free Digioh + SendGrid
Account](https://digioh.com/sendgrid)

{% anchor h2 %}
Sending email with attachments via SendGrid
{% endanchor %}

To send emails with attachments via SendGrid, you can employ our [SMTP Relay]({{root_url}}/Integrate/index.html#-SMTP-Relay) or our [Web API v3]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).
