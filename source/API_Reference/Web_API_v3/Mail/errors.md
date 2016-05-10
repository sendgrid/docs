---
layout: page
seo:
  title: Errors
title: Errors
description: v3 Mail Send Errors and Troubleshooting Reference
weight: 98
navigation:
  show: true
---

{% warning %}
**This endpoint is currently in beta!**

Since this is not a general release, we do not recommend POSTing production level traffic through this endpoint or integrating your production servers with this endpoint.

*When this endpoint is ready for general release, your code will require an update in order to use the official URI.*

By using this endpoint, you accept that you may encounter bugs and that the endpoint may be taken down for maintenance at any time. We cannot guarantee the continued availability of this beta endpoint. We hope that you like this new endpoint and we appreciate any [feedback](mailto:dx+mail-beta@sendgrid.com) that you can send our way.
{% endwarning %}

Failed requests will always return an error response, including a response code, a message explaining the reason for the error, and a link to any relevant documentation that may help you troubleshoot the problem.

| Response Code | Reason | Description |
|---|---|---|
| 2xx | 2xx responses indicate a successful request | The request that you made is valid and successful. |
| 200 | OK | Your message is valid, but it is not queued to be delivered. |
| 202 | ACCEPTED | Your message is both valid, and queued to be delivered. |
| 4xx | 4xx responses indicate an error with the request | There was a problem with your request. |
| 400 | BAD REQUEST |  |
| 401 | UNAUTHORIZED | You do not have authorization to make the request. |
| 403 | FORBIDDEN |  |
| 404 | NOT FOUND | The resource you tried to locate could not be found or does not exist. |
| 405 | METHOD NOT ALLOWED |  |
| 413 | PAYLOAD TOO LARGE | The JSON payload you have included in your request is too large. |
| 429 | TOO MANY REQUESTS | The number of requests you have made exceeds SendGrid's [rate limitations]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/rate_limits.html) |
| 5xx | 5xx respones indicate an error made by SendGrid | An error occurred when SendGrid attempted to processes it. |
| 500 | SERVER UNAVAILABLE | An error occurred on a SendGrid server. |
| 503 | SERVICE NOT AVAILABLE | The SendGrid v3 Web API is not available. |

Following is a complete list of the possible parameter level errors that you may receive when making a request to the v3 Mail Send endpoint. Each error will include the field that caused the error (e.g. "personalizations" or "personalizations.to"), a brief message explaining the cause of the error, and a link to the error in the table below. Here you will find links to relevant documentation for each error.

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [Personalizations Errors](#-Personalizations-Errors)
* [Message Level Errors](#-Message-Level-Errors)
* [Content Errors](#-Content-Errors)
* [Attachment Errors](#-Attachment-Errors)
* [ASM Errors](#-ASM-Errors)
* [Mail Settings Errors](#-Mail-Settings-Errors)
* [Tracking Settings Errors](#-Tracking-Settings-Errors)

{% anchor h2 %}
Personalizations Errors
{% endanchor %}

{% api_error_table personalizations "" message.personalizations %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The personalization block is limited to 100 personalizations per API request. You have provided X personalizations. Please consider splitting this into multiple requests and resending your request." "The v3 Mail Send endpoint is only capable of processing 100 individual <code>personalizations</code> objects per request. If you need to send your email to more than 100 different recipients, we recommend that you simply make more than once call. For more information about the <code>personalizations</code> array, and how you can use it to define who you would like you send your email to, and how you would like your email to be processed, please visit our <a href ={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}

  {% api_error_table_message "You must have at least one personalization." "Every email you send must have at least one recipient email address included. Recipients are defined in the <code>personalizations</code> array. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.to "" message.personalizations.to %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The to array must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every email you send must have at least one, valid recipient email address included. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table "Recipient Errors" "The following error messages relate to general email recipient problems." message.recipient-errors %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "There is a limit of 100 total recipients (to + cc + bcc) per request." "The combined, total number of email recipients may never exceed 100. This includes recipients defined within the <code>to</code>, <code>cc</code>, and <code>bcc</code> parameters. For more information on how you may specify your recipients, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}

  {% api_error_table_message "Each &#34;to&#34; object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every recipient that you define within a <code>personalizations.to</code> parameter, you must include one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the <code>personalizations</code> array should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}

  {% api_error_table_message "The to parameter is required for all personalization objects." "For every single object that you include within the <code>personalizations</code> array, you must include at least one <code>to</code> email object with a valid email address. For more information on how you may specify your recipients, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.cc "" message.personalizations.cc %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The cc array, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}

  {% api_error_table_message "Each recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every recipient that you define within the <code>personalizations.cc</code> array must be in the form of an email object including one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.bcc "" message.personalizations.bcc %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc array, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every blind carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}

  {% api_error_table_message "Each recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every recipient that you define within the <code>personalizations.cc</code> array must be in the form of an email object including one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.categories "" message.personalizations.categories %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "You are limited to 10 categories per personalization. You provided X categories." "For more information on how you can use categories to organize your email analytics, please visit our <a href={{root_url}}/User_Guide/Statistics/categories.html>User Guide</a>." %}

  {% api_error_table_message "Categories must be an array of strings." "For more information on how you can use categories to organize your email analytics, please visit our <a href={{root_url}}/User_Guide/Statistics/categories.html>User Guide</a>." %}

  {% api_error_table_message "Each category must not be longer than 255 characters. [YOUR CATEGORY] exceeds this limit" "For more information on how you can use categories to organize your email analytics, please visit our <a href={{root_url}}/User_Guide/Statistics/categories.html>User Guide</a>." %}

  {% api_error_table_message "The categories must be a unique list, and you have included [YOUR CATEGORY] more than once." "For more information on how you can use categories to organize your email analytics, please visit our <a href={{root_url}}/User_Guide/Statistics/categories.html>User Guide</a>." %}

  {% api_error_table_message "Categories can not contain non-ascii characters" "For more information on how you can use categories to organize your email analytics, please visit our <a href={{root_url}}/User_Guide/Statistics/categories.html>User Guide</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.custom_args "" message.personalizations.custom_args %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "All values of custom arguments object must be strings" "Click <a href={{root_url}}/API_Reference/SMTP_API/unique_arguments.html>here</a> more information about how to use custom arguments." %}

  {% api_error_table_message "<code>custom_args</code> cannot be empty." "Click <a href={{root_url}}/API_Reference/SMTP_API/unique_arguments.html>here</a> more information about how to use custom arguments." %}

  {% api_error_table_message "The combined size of both global and personalization custom arguments may not exceed 10,000 bytes per personalization." "Click <a href={{root_url}}/API_Reference/SMTP_API/unique_arguments.html>here</a> more information about how to use custom arguments." %}
{% endapi_error_table %}

{% api_error_table personalizations.headers "" message.personalizations.headers %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "All values of the headers object must be strings." "" %}

  {% api_error_table_message "The headers cannot contain duplicate keys." "" %}

  {% api_error_table_message "Header keys cannot contain non-ASCII characters or empty spaces." "" %}

  {% api_error_table_message "Header cannot be one of the reserved keys." "You may not include any of the following reserved headers: <code>x-sg-id</code>, <code>x-sg-eid</code>, <code>received</code>, <code>dkim-signature</code>, <code>Content-Type</code>, <code>Content-Transfer-Encoding</code>, <code>To</code>, <code>From</code>, <code>Subject</code>, <code>Reply-To</code>, <code>CC</code>, <code>BCC</code>." %}

  {% api_error_table_message "The subject of your email should not be longer than 100 characters." "" %}
{% endapi_error_table %}

{% api_error_table personalizations.substitutions "" message.personalizations.substitutions %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The substitution values must be an object of key/value pairs, where the values are all strings." "" %}

  {% api_error_table_message "You are limited to 10,000 substitutions." "" %}
{% endapi_error_table %}

{% anchor h2 %}
Message Level Errors
{% endanchor %}

{% api_error_table from "" message.from %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The from object must at least have an <code>email</code> parameter with a valid email address and may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}" "" %}

  {% api_error_table_message "The <code>from</code> object must be provided for every email send. It is an object that requires the <code>email</code> parameter, but may also contain a <code>name</code> parameter.  e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}" "" %}
{% endapi_error_table %}

{% api_error_table reply_to "" message.reply_to %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The <code>reply_to</code> object, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href={{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html>Classroom</a>." "" %}
{% endapi_error_table %}

{% api_error_table subject "" message.subject %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subject of your email must be a string at least one character in length." "" %}

  {% api_error_table_message "The subject is required. You can get around this requirement if you use a template with a subject defined or if every personalization has a subject defined." "" %}

  {% api_error_table_message "The subject of your email should not be longer than 100 characters." "" %}
{% endapi_error_table %}

{% anchor h2 %}
Content Errors
{% endanchor %}

{% api_error_table content "" message.content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The content param is required. " "" %}

  {% api_error_table_message "There must be at least one defined content block. We typically suggest both text/plain and text/html blocks are included, but only one block is required." "" %}
{% endapi_error_table %}

{% api_error_table content.type "" message.content.type %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "A content type is required, this tells email clients how to display the email." "" %}

  {% api_error_table_message "The content value must be a string at least one character in length." "" %}

  {% api_error_table_message "Your content type must be a string with length of at least one character." "" %}

  {% api_error_table_message "Cannot contain ';', or CRLF characters." "" %}
{% endapi_error_table %}

{% api_error_table content.value "" message.content.value %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "A content value is required, this is the content of the email you are sending." "" %}

  {% api_error_table_message "The content value must be a string at least one character in length." "" %}

  {% api_error_table_message "Following RFC 1341, section 7.2, if either text/html or text/plain are to be sent in your email: text/plain needs to be first, followed by text/html, followed by any other content." "" %}
{% endapi_error_table %}

{% anchor h2 %}
Attachment Errors
{% endanchor %}

{% api_error_table attachments.content "" message.attachments.content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The attachment content must be base64 encoded." "" %}

  {% api_error_table_message "The attachment content must be a string at least one character in length." "" %}
{% endapi_error_table %}

{% api_error_table attachments.type "" message.attachments.type %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The attachment type must be a string and at least one character in length." "" %}

  {% api_error_table_message "The type cannot contain ';', or CRLF characters." "" %}
{% endapi_error_table %}

{% api_error_table attachments.filename "" message.attachments.filename %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The filename of your attachment must be a string." "" %}

  {% api_error_table_message "The filename of your attachment cannot contain CRLF characters." "" %}

  {% api_error_table_message "filename is required." "" %}
{% endapi_error_table %}

{% api_error_table attachments.disposition "" message.attachments.disposition %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The disposition of your attachment can be either &#34;inline&#34; or &#34;attachment&#34;. You provided [YOUR DISPOSITION]." "" %}
{% endapi_error_table %}

{% api_error_table attachments.content_id "" message.attached.content_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The content ID of your attachment must be a string. You provided [YOUR CONTENT ID]." "" %}

  {% api_error_table_message "The content ID of your attachment cannot contain CRLF characters." "" %}
{% endapi_error_table %}

{% api_error_table template_id "" message.template_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The template ID must be a string, you provided [YOUR TEMPLATE ID]." "" %}

  {% api_error_table_message "The Template ID must be a valid template id for your account. You provided [YOUR TEMPLATE ID]." "" %}
{% endapi_error_table %}

{% api_error_table sections "" message.sections %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The section values must be strings." "" %}

  {% api_error_table_message "Must be a valid template." "" %}
{% endapi_error_table %}

{% api_error_table headers "" message.headers %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The header values must be strings." "" %}

  {% api_error_table_message "The headers cannot contain duplicate keys." "" %}

  {% api_error_table_message "Header keys cannot contain non-ASCII characters and empty spaces." "" %}

  {% api_error_table_message "Header can not be one of the reserved keys." "You may not include any of the following reserved headers: <code>x-sg-id</code>, <code>x-sg-eid</code>, <code>received</code>, <code>dkim-signature</code>, <code>Content-Type</code>, <code>Content-Transfer-Encoding</code>, <code>To</code>, <code>From</code>, <code>Subject</code>, <code>Reply-To</code>, <code>CC</code>, <code>BCC</code>." %}
{% endapi_error_table %}

{% api_error_table categories "" message.categories %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "There is a limit of 10 categories for each email that is sent. You provided X categories." "" %}

  {% api_error_table_message "Categories must be an array of strings." "" %}

  {% api_error_table_message "Each category must not be longer than 255 characters. [YOUR CATEGORY] exceeds this limit" "" %}

  {% api_error_table_message "The categories must be a unique list, and you have included [YOUR CATEGORY] more than once. " "" %}

  {% api_error_table_message "Categories can not contain non-ASCII characters." "" %}
{% endapi_error_table %}

{% api_error_table send_at "" message.send_at %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The <code>send_at</code> parameter is expecting a Unix timestamp as an integer. We will send immediately if you include a <code>send_at</code> timestamp that is in the past." "" %}

  {% api_error_table_message "Scheduling more than 72 hours in advance is forbidden." "" %}
{% endapi_error_table %}

{% api_error_table batch_id "" message.batch_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The batch_id must be a string." "" %}
{% endapi_error_table %}

{% anchor h2 %}
ASM Errors
{% endanchor %}

{% api_error_table asm.group_id "" message.asm.group_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The ASM group ID must be an integer." "" %}

  {% api_error_table_message "The ASM group ID must be a valid Group ID on your account. You provided [YOUR ASM GROUP ID]." "" %}
{% endapi_error_table %}

{% api_error_table asm.groups_to_display "" message.asm.groups_to_display %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The ASM Group IDs to display must be an array of integers." "" %}

  {% api_error_table_message "All ASM groups to display must be valid ASM groups IDs on your account. You provided {invalid IDs}." "" %}

  {% api_error_table_message "There is a limit of 25 unsubscribe groups that can be displayed to a user at a time." "" %}
{% endapi_error_table %}

{% api_error_table ip_pool_name "" message.ip_pool_name %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The name of your IP pool must be a string." "" %}

  {% api_error_table_message "The IP Pool name must be a valid pool name for your account. You provided [YOUR IP POOL NAME]." "" %}
{% endapi_error_table %}

{% anchor h2 %}
Mail Settings Errors
{% endanchor %}

{% api_error_table mail_settings.bcc.enable "" message.mail_settings.bcc.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.bcc.email "" message.mail_settings.bcc.email %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc email recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "" %}

  {% api_error_table_message "You must include a recipient object when using the bcc mail setting." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.bypass_list_management.enable "" message.mail_settings.bypass_list_management.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bypass list management enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.enable "" message.mail_settings.footer.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The footer enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.text "" message.mail_settings.footer.text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The text/plain version of your footer should be a string." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.html "" message.mail_settings.footer.html %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The text/html version of your footer should be a string." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.sandbox_mode.enable "" message.mail_settings.sandbox_mode.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The sandbox mode enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.enable "" message.mail_settings.spam_check.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.threshold "" message.spam_check.threshold %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check threshold is between 1 and 10, with the lower numbers being the most strict filtering. " "" %}

  {% api_error_table_message "You must include the spam check threshold  when using the spam check mail setting." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.post_to_url "" message.mail_settings.spam_check.post_to_url %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check url must be a string." "" %}

  {% api_error_table_message "You must include the url to post to when using the spam check mail setting." "" %}
{% endapi_error_table %}

{% anchor h2 %}
Tracking Settings Errors
{% endanchor %}

{% api_error_table tracking_settings.click_tracking.enable "" message.tracking_settings.click_tracking.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The click tracking enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.click_tracking.enable_text "" message.tracking_settings.click_tracking.enable_text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The click tracking enable text must be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.open_tracking.enable "" message.tracking_settings.open_tracking.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The open tracking enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.open_tracking.substitution_tag "" message.tracking_settings.open_tracking.substitution_tag %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The open tracking substitution tag must be a string." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.enable "" message.tracking_settings.subscription_tracking.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.text "" message.tracking_settings.subscription_tracking.text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking unsubscribe content for text/plain messages must be a string. " "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.html "" message.tracking_settings.subscription_tracking.html %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking unsubscribe content for text/html messages must be a string." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.substitution_tag "" message.tracking_settings.subscription_tracking.substitution_tag %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking substitution tag must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.enable "" message.tracking_settings.ganalytics.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics enable param must be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_source "" message.tracking_settings.ganalytics.utm_source %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_source must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_medium "" message.tracking_settings.ganalytics.utm_medium %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_medium must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_term "" message.tracking_settings.ganalytics.utm_term %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_term must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_content "" message.tracking_settings.ganalytics.utm_content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_content must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_campaign "" message.tracking_settings.ganalytics.utm_campaign %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_campaign must be a string value." "" %}
{% endapi_error_table %}
