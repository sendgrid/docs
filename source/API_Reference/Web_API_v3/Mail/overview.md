---
layout: page
seo:
  title: Overview
title: Overview
description: Send Email Using the v3 Mail Send Endpoint
weight: 100
navigation:
  show: true
---

{% warning %}
**This endpoint is currently in beta!**

Since this is not a general release, we do not recommend POSTing production level traffic through this endpoint or integrating your production servers with this endpoint.

*When this endpoint is ready for general release, your code will require an update in order to use the official URI.*

By using this endpoint, you accept that you may encounter bugs and that the endpoint may be taken down for maintenance at any time. We cannot guarantee the continued availability of this beta endpoint. We hope that you like this new endpoint and we appreciate any [feedback](mailto:dx+mail-beta@sendgrid.com) that you can send our way.
{% endwarning %}

This endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API.

If you are looking for documentation about the v2 Mail Send endpoint, please see our [v2 API Reference]({{root_url}}/API_Reference/Web_API/mail.html).

{% info %}
SendGrid provides libraries to help you quickly and easily integrate with the v3 Web API in 7 different languages: [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), [Java](https://github.com/sendgrid/sendgrid-java), [NodeJS](https://github.com/sendgrid/sendgrid-nodejs), [PHP](https://github.com/sendgrid/sendgrid-php), [Python](https://github.com/sendgrid/sendgrid-python), and [Ruby](https://github.com/sendgrid/sendgrid-ruby).
{% endinfo %}

{% apiv3example post POST https://api.sendgrid.com/v3/mail/send/beta %}
{% apiv3requestbody %}
{
  "personalizations": [
    {
    "to": [
    {
    "email": "john@example.com"
    }
    ],
    "subject": "Hello, World!"
  }],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [{
    "type": "text",
    "value": "Hello, World!"
  }]
}
{% endapiv3requestbody %}


{% endapiv3example %}

For general information about how to use SendGrid's Web API v3, please visit our [API Overview]({{root_url}}/API_Reference/Web_API_v3/index.html)

You may send mail via the v3 Mail Send endpoint via one of two ways:

* You can make a [cURL request].
* You can make an HTTP Post request through one of our [7 libraries]({{root_url}}/Integrate/libraries.html).

{% anchor h2 %}
Authentication
{% endanchor %}

{% codeblock lang:bash %}
curl =X "POST" "https://api.sendgrid.com/v3/mail/send/beta" -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d "[YOUR DATA HERE]"
{% endcodeblock %}

You must authenticate every API request to send mail by including an `Authorization` header. This header should include the authorization type of `Bearer`, followed by your API Key that has already been assigned the necessary permissions. Click [here](https://sendgrid.com/docs/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/authentication.html) for more information.

{% anchor h2 %}
Limitations
{% endanchor %}

* The total size of your email, including attachments, must be less than 30MB.
* The total number of recipients must be less than 100.
* 3000 requests/sec is the maximum rate at which you may call v3 Mail endpoint.
* The total length of custom arguments must be less than 10000 bytes.

For more specific, parameter level requirements and limitations, see the [Request Body Parameters documentation](#-Request-Body-Parameters).

{% anchor h2 %}
Validation
{% endanchor %}

Whenever you make a request to the v3 Mail Send endpoint, your JSON payload is validated before your email is sent.

If there are any errors, SendGrid will attempt to identify and return as many issues as possible for each request. For more information, please read our [error documentation]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html).

{% anchor h2 %}
Request Body Parameters
{% endanchor %}

Every request made to /v3/mail/send/beta will require a request body formatted in JSON containing the your email’s content and metadata. This may include information such as the recipient’s email address, the return address, and the subject.

{% apitable %}
  {% api_table_param personalization "array of objects" Yes "100 Max" "An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled. For more information, please see our documentation on Personalizations. Parameters in personalizations will override the parameters of the same name from the message level." 0 %}
    {% api_table_param to "array of email objects" Yes "" "An array of recipients. Each email object within this array may contain the recipient’s name, but must always contain the recipient’s email." 1 %}
      {% api_table_param email string Yes "" "The email address of the recipient." 2 %}
      {% api_table_param name string No "" "The name of the recipient." 2 %}
    {% api_table_param cc "array of email objects" No "" "An array of recipients who will receive a copy of your email. Each email object within this array may contain the recipient’s name, but must always contain the recipient’s email." 1 %}
      {% api_table_param email string Yes "" "The email address of the recipient." 2 %}
      {% api_table_param name string No "" "The name of the recipient." 2 %}
    {% api_table_param bcc "array of email objects" No "" "An array of recipients who will receive a blind carbon copy of your email. Each email object within this array may contain the recipient’s name, but must always contain the recipient’s email." 1 %}
      {% api_table_param email string Yes "" "The email address of the recipient." 2 %}
      {% api_table_param name string No "" "The name of the recipient." 2 %}
    {% api_table_param subject string No "" "The subject line of your email." 1 %}
    {% api_table_param headers "object" No "" "An object allowing you to specify specific handling instructions for your email." 1 %}
    {% api_table_param substitutions "object" No "" "An object following the pattern "substitution_tag":"value to substitute". All are assumed to be strings. These substitutions will apply to the content of your email, in addition to the `subject` and `reply-to` parameters." 1 %}
    {% api_table_param custom_args "object" No "" "These are values that are specific to this personalization that will be carried along with the email, activity data, and links. Substitutions will not be made on custom arguments. personalizations[x].custom_args will be merged with message level custom_args, overriding any conflicting keys. The combined total size of the resulting custom arguments, after merging, for each personalization may not exceed 10,000 bytes." 1 %}
    {% api_table_param send_at integer No "" "A unix timestamp allowing you to specify when you want your email to be sent from SendGrid. **This is not necessary if you want the email to be sent at the time of your API request.**" 1 %}
  {% api_table_param from "array of email objects" No "" "An email object containing the email address and name of the sender." 0 %}
    {% api_table_param email string Yes "" "The email address of the sender." 1 %}
    {% api_table_param name string No "" "The name of the sender." 1 %}
  {% api_table_param reply_to "array of email objects" No "" "An email object containing the email address and name of the individual who should receive responses to your email." 0 %}
    {% api_table_param email string Yes "" "The email address to which responses will be sent." 1 %}
    {% api_table_param name string No "" "The name of the individual who will receive responses to the email." 1 %}
  {% api_table_param subject string Yes "" "The subject of your email. This may be overridden by `personalizations[x].subject`." 0 %}
  {% api_table_param content "array of objects" Yes "" "An array in which you may specify the content of your email. You can include multiple mime types of content, but you must specify at least one. To include more than one mime type, simply add another object to the array containing the `type` and `value` parameters. If included, text/plain and text/html must be the first indices of the array in this order. **If you choose to include the text/plain or text/html mime types, they must be the first indices of the `content` array in the order text/plain, text/html.**" 0 %}
    {% api_table_param type string Yes "1 Min" "The mime type of the content you are including in your email. For example, text/plain or text/html." %}
    {% api_table_param value string Yes "1 Min" "The actual content of the specified mime type that you are including in your email." %}
  {% api_table_param attachments "array of objects" No "An array of objects in which you can specify any attachments you want to include." 0 %}
    {% api_table_param content string Yes "" "The Base64 encoded content of the attachment." 1 %}
    {% api_table_param type string No "" "The mime type of the content you are attaching. For example, application/pdf or image/jpeg." 1 %}
    {% api_table_param filename string Yes "" "The filename of the attachment." 1 %}
    {% api_table_param disposition string No "" "The content-disposition of the attachment specifying how you would like the attachment to be displayed. For example, `inline` results in the attached file being displayed automatically within the message while `attachment` results in the attached file requiring some action to be taken before it is displayed (e.g. opening or downloading the file). Defaults to `attachment`. Can be either `attachment` or `inline`." 1 %}
    {% api_table_param content_id string No "" "A unique id that you specify for the attachment. This is used when the disposition is set to `inline` and the attachment is an image, allowing the file to be displayed within the body of your email. Ex: `<img src="cid:ii_139db99fdb5c3704"></img>`" 1 %}
  {% api_table_param template_id string no "description" %}

{% endapitable %}
