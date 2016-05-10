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

{% v3response %}
{
  HTTP/1.1 202
}
{% endv3response %}

{% endapiv3example %}

For general information about how to use SendGrid's Web API v3, please visit our [API Overview]({{root_url}}/API_Reference/Web_API_v3/index.html)

You may send mail via the v3 Mail Send endpoint via one of two ways:

* You can make a [cURL request]({{root_url}}/Classroom/Send/v3_Mail_Send/curl_examples.html).
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
* The total number of recipients must be less than 100. This includes all recipients defied within the `to`, `cc`, and `bcc` parameters, across each object that you include in the `personalizations` array.
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

Every request made to /v3/mail/send/beta will require a request body formatted in JSON containing your email’s content and metadata. This may include information such as the recipient’s email address, the return address, and the subject.

{% api_table %}
  {% api_table_param personalizations "array of objects" Yes "Min 1, Max 100" "An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled. For more information, please see our documentation on Personalizations. Parameters in personalizations will override the parameters of the same name from the message level." 0 %}
    {% api_table_param to "array of email objects" Yes "Min 1" "An array of recipients. Each email object within this array may contain the recipient’s name, but must always contain the recipient’s email." 1 %}
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
    {% api_table_param custom_args "object" No "May not exceed 10,000 bytes" "These are values that are specific to this personalization that will be carried along with the email, activity data, and links. Substitutions will not be made on custom arguments. personalizations[x].custom_args will be merged with message level custom_args, overriding any conflicting keys. The combined total size of the resulting custom arguments, after merging, for each personalization may not exceed 10,000 bytes." 1 %}
    {% api_table_param send_at integer No "" "A unix timestamp allowing you to specify when you want your email to be sent from SendGrid. <b>This is not necessary if you want the email to be sent at the time of your API request.</b>" 1 %}
  {% api_table_param from "array of email objects" No "" "An email object containing the email address and name of the sender." 0 %}
    {% api_table_param email string Yes "" "The email address of the sender." 1 %}
    {% api_table_param name string No "" "The name of the sender." 1 %}
  {% api_table_param reply_to "array of email objects" No "" "An email object containing the email address and name of the individual who should receive responses to your email." 0 %}
    {% api_table_param email string Yes "" "The email address to which responses will be sent." 1 %}
    {% api_table_param name string No "" "The name of the individual who will receive responses to the email." 1 %}
  {% api_table_param subject string Yes "" "The subject of your email. This may be overridden by `personalizations[x].subject`." 0 %}
  {% api_table_param content "array of objects" Yes "Min 1" "An array in which you may specify the content of your email. You can include multiple mime types of content, but you must specify at least one. To include more than one mime type, simply add another object to the array containing the `type` and `value` parameters. If included, text/plain and text/html must be the first indices of the array in this order. **If you choose to include the text/plain or text/html mime types, they must be the first indices of the `content` array in the order text/plain, text/html.**" 0 %}
    {% api_table_param type string Yes "Min 1" "The mime type of the content you are including in your email. For example, text/plain or text/html." %}
    {% api_table_param value string Yes "Min 1" "The actual content of the specified mime type that you are including in your email." %}
  {% api_table_param attachments "array of objects" No "" "An array of objects in which you can specify any attachments you want to include." 0 %}
    {% api_table_param content string Yes "" "The Base64 encoded content of the attachment." 1 %}
    {% api_table_param type string No "" "The mime type of the content you are attaching. For example, application/pdf or image/jpeg." 1 %}
    {% api_table_param filename string Yes "" "The filename of the attachment." 1 %}
    {% api_table_param disposition string No "" "The content-disposition of the attachment specifying how you would like the attachment to be displayed. For example, `inline` results in the attached file being displayed automatically within the message while `attachment` results in the attached file requiring some action to be taken before it is displayed (e.g. opening or downloading the file). Defaults to `attachment`. Can be either `attachment` or `inline`." 1 %}
    {% api_table_param content_id string No "" "A unique id that you specify for the attachment. This is used when the disposition is set to `inline` and the attachment is an image, allowing the file to be displayed within the body of your email. Ex: `<img src="cid:ii_139db99fdb5c3704"></img>`" 1 %}
  {% api_table_param template_id string No "" "The id of a template that you would like to use. If you use a template that contains content and a subject (either text or html), you do not need to specify those in the respective personalizations or message level parameters." 0 %}
  {% api_table_param sections "custom object" No "" "An object of key/value pairs that define large blocks of content that can be inserted into your emails  using substitution tags." 0 %}
  {% api_table_param headers "custom object" No "" "An object containing key/value pairs of header names and the value to substitute for them. You must ensure these are properly encoded if they contain unicode characters. Must not be any of the following reserved headers: x-sg-id, x-sg-eid, received, dkim-signature, Content-Type, Content-Transfer-Encoding, To, From, Subject, Reply-To, CC, BCC" 0 %}
  {% api_table_param categories "array of integers" No "Max 255" "An array of category names for this message. Each category name may not exceed 255 characters. You cannot have more than 10 categories per request." 0 %}
  {% api_table_param custom_args "custom object" No "" "Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This parameter is overridden by  any conflicting personalizations[x].custom_args if that parameter has been defined. If personalizations[x].custom_args has been defined but does not conflict with the values defined within this parameter, the two will be merged. The combined total size of these custom arguments may not exceed 10,000 bytes." 0 %}
  {% api_table_param send_at integer No "" "A unix timestamp allowing you to specify when you want your email to be sent from SendGrid. This is not necessary if you want the email to be sent at the time of your API request." 0 %}
  {% api_table_param batch_id string No "" "This ID represents a batch of emails (AKA multiple sends of the same email) to be associated to each other for scheduling. Including a batch_id in your request allows you to include this email in that batch, and also enables you to cancel or pause the delivery of that entire batch. For more information, please read about [Cancel Scheduled Sends]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html)." 0 %}
  {% api_table_param asm "object" No "" "An object allowing you to specify how to handle unsubscribes." 0 %}
    {% api_table_param group_id integer Yes "" "The unsubscribe group to associate with this email." 1 %}
    {% api_table_param groups_to_display "array of integers" No "Max 25" "An array containing the unsubscribe groups that you would like to be displayed on the [unsubscribe preferences page]({{root_url}}/User_Guide/Suppressions/recipient_subscription_preferences.html)." 1 %}
  {% api_table_param ip_pool_name string No "Min 2, Max 64" "The IP Pool that you would like to send this email from." 0 %}
  {% api_table_param mail_settings "object" No "" "A collection of different mail settings that you can use to specify how you would like this email to be handled." 0 %}
    {% api_table_param bcc "object" No "" "This allows you to have a blind carbon copy automatically sent to the specified email address for every email that is sent." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param email string No "" "The email address that you would like to receive the BCC." 2 %}
    {% api_table_param bypass_list_management object No "" "Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email. Ex: outage emails, or forgot password emails." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
    {% api_table_param footer "object" No "" "The default footer that you would like appended to the bottom of every email." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param text string No "" "The plain text content of your footer." 2 %}
      {% api_table_param html string No "" "The HTML content of your footer." 2 %}
    {% api_table_param sandbox_mode object No "" "This allows you to send a test email to ensure that your request body is valid and formatted correctly. For more information, please see Sandbox Mode." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
    {% api_table_param spam_check object No "" "This allows you to test the content of your email for spam." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param threshold integer No "Max 10" "The threshold used to determine if your content qualifies as spam on a scale from 1 to 10, with 10 being most strict, or most likely to be considered as spam." 2 %}
      {% api_table_param post_to_url string No "" "An Inbound Parse URL that you would like a copy of your email along with the spam report to be sent to." 2 %}
  {% api_table_param tracking_settings object No "" "Settings to determine how you would like to track the metrics of how your recipients interact with your email." 0 %}
    {% api_table_param click_tracking object No "" "Allows you to track whether a recipient clicked a link in your email." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param enable_text boolean No "true or false" "Indicates if this setting should be included in the text/plain portion of your email." 2 %}
    {% api_table_param open_tracking object No "" "Allows you to track whether the email was opened or not, but including a single pixel image in the body of the content. When the pixel is loaded, we can log that the email was opened." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param substitution_tag string No "" "Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel." 2 %}
    {% api_table_param subscription_tracking object No "" "Allows you to insert a subscription management link at the bottom of the text and html bodies of your email. If you would like to specify the location of the link within your email, you may use the substitution_tag." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param text string No "" "Text to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag `<% %>`" 2 %}
      {% api_table_param html string No "" "HTML to be appended to the email, with the subscription tracking link. You may control where the link is by using the tag `<% %>`" 2 %}
      {% api_table_param substitution_tag string No "" "A tag that will be replaced with the unsubscribe URL. for example: [unsubscribe_url]. If this parameter is used, it will override both the `text` and `html` parameters. The URL of the link will be placed at the substitution tag’s location, with no additional formatting." 2 %}
    {% api_table_param ganalytics object No "" "Allows you to enable tracking provided by Google Analytics." 1 %}
      {% api_table_param enable boolean No "true or false" "Indicates if this setting is enabled." 2 %}
      {% api_table_param utm_source string No "" "Name of the referrer source. (e.g. Google, SomeDomain.com, or Marketing Email)" 2 %}
      {% api_table_param utm_medium string No "" "Name of the marketing medium. (e.g. Email)" 2 %}
      {% api_table_param utm_term string No "" "Used to identify any paid keywords." 2 %}
      {% api_table_param utm_content string No "" "Used to differentiate your campaign from advertisements." 2 %}
      {% api_table_param utm_campaign string No "" "The name of the campaign." 2 %}
{% endapi_table %}
