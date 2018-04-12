---
layout: page
seo:
  title: Status Codes & Errors for SendGrid Mail API
title: Status Codes & Errors
description: v3 Mail Send Errors and Troubleshooting Reference
weight: 98
navigation:
  show: true
---

Failed requests will always return an error response, including a response code, a message explaining the reason for the error, and a link to any relevant documentation that may help you troubleshoot the problem.

<table class="table">
  <tr>
    <th>Response Code</th>
    <th>Reason</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>2xx</td>
    <td>2xx responses indicate a successful request</td>
    <td>The request that you made is valid and successful.</td>
  </tr>
  <tr>
    <td>200</td>
    <td>OK</td>
    <td>Your message is valid, but it is not queued to be delivered. †</td>
  </tr>
  <tr>
    <td>202</td>
    <td>ACCEPTED</td>
    <td>Your message is both valid, and queued to be delivered.</td>
  </tr>
  <tr>
    <td>4xx</td>
    <td>4xx responses indicate an error with the request</td>
    <td>There was a problem with your request.</td>
  </tr>
  <tr>
    <td>400</td>
    <td>BAD REQUEST</td>
    <td></td>
  </tr>
  <tr>
    <td>401</td>
    <td>UNAUTHORIZED</td>
    <td>You do not have authorization to make the request.</td>
  </tr>
  <tr>
    <td>403</td>
    <td>FORBIDDEN</td>
    <td></td>
  </tr>
  <tr>
    <td>404</td>
    <td>NOT FOUND</td>
    <td>The resource you tried to locate could not be found or does not exist.</td>
  </tr>
  <tr>
    <td>405</td>
    <td>METHOD NOT ALLOWED</td>
    <td></td>
  </tr>
  <tr>
    <td>413</td>
    <td>PAYLOAD TOO LARGE</td>
    <td>The JSON payload you have included in your request is too large.</td>
  </tr>
  <tr>
    <td>415</td>
    <td>UNSUPPORTED MEDIA TYPE</td>
    <td></td>
  <tr>
    <td>429</td>
    <td>TOO MANY REQUESTS</td>
    <td>The number of requests you have made exceeds SendGrid's <a href="{{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/rate_limits.html">rate limitations</a></td>
  </tr>
  <tr>
    <td>5xx</td>
    <td>5xx responses indicate an error made by SendGrid</td>
    <td>An error occurred when SendGrid attempted to processes it.</td>
  </tr>
  <tr>
    <td>500</td>
    <td>SERVER UNAVAILABLE</td>
    <td>An error occurred on a SendGrid server.</td>
  </tr>
  <tr>
    <td>503</td>
    <td>SERVICE NOT AVAILABLE</td>
    <td>The SendGrid v3 Web API is not available.</td>
  </tr>
</table>
† Sandbox mode only.

Following is a complete list of the possible parameter level errors that you may receive when making a request to the v3 Mail Send endpoint. Each error will include the field that caused the error (e.g. "personalizations" or "personalizations.to"), a brief message explaining the cause of the error, and a link to the error in the table below. Here you will find links to relevant documentation for each error.

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [Personalizations Errors](#-Personalizations-Errors)
* [ASM Errors](#-ASM-Errors)
* [Attachment Errors](#-Attachment-Errors)
* [Batch ID Errors](#-Batch-ID-Errors)
* [Categories Errors](#-Categories-Errors)
* [Content Errors](#-Content-Errors)
* [Encoding Errors](#-Encoding-Errors)
* [From Address Errors](#-From-Address-Errors)
* [Headers Errors](#-Headers-Errors)
* [IP Pool Errors](#-IP-Pool-Errors)
* [Reply To Errors](#-Reply-To-Errors)
* [Sections Errors](#-Sections-Errors)
* [Send At Errors](#-Send-At-Errors)
* [Subject Line Errors](#-Subject-Line-Errors)
* [Template Errors](#-Template-Errors)
* [Mail Settings Errors](#-Mail-Settings-Errors)
* [Tracking Settings Errors](#-Tracking-Settings-Errors)

<page-anchor el="h2">
Personalizations Errors
</page-anchor>

{% api_error_table personalizations "" message.personalizations %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The personalization block is limited to 1000 personalizations per API request. You have provided X personalizations. Please consider splitting this into multiple requests and resending your request." "The v3 Mail Send endpoint is only capable of processing 1000 individual <code>personalizations</code> objects per request. If you need to send your email to more than 1000 different recipients, we recommend that you simply make more than once call. For more information about the <code>personalizations</code> array, and how you can use it to define who you would like you send your email to, and how you would like your email to be processed, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "You must have at least one personalization." "Every email you send must have at least one recipient email address included. Recipients are defined in the <code>personalizations</code> array. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "There is a limit of 1000 total recipients (to + cc + bcc) per request." "The combined, total number of email recipients may never exceed 1000. This includes recipients defined within the <code>to</code>, <code>cc</code>, and <code>bcc</code> parameters. For more information on how you may specify your recipients, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "Each &#34;to&#34; object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every recipient that you define within a <code>personalizations.to</code> parameter, you must include one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the <code>personalizations</code> array should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "The to parameter is required for all personalization objects." "For every single object that you include within the <code>personalizations</code> array, you must include at least one <code>to</code> email object with a valid email address. For more information on how you may specify your recipients, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.bcc "" message.personalizations.bcc %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc array, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every blind carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "Each recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every recipient that you define within the <code>personalizations.cc</code> array must be in the form of an email object including one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}
    {% api_error_table_message "The BCC email exceeds the maximum total length of 320 characters" "We only allow the total email length to be 320 characters including the local address, the `@`, and the domain." %}

{% endapi_error_table %}

{% api_error_table personalizations.cc "" message.personalizations.cc %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The cc array, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "Each recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every recipient that you define within the <code>personalizations.cc</code> array must be in the form of an email object including one, valid email address. You are not required to include a name." %}

  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email address] more than once." "To prevent the same email from being delivered to one recipient multiple times, SendGrid will confirm that you do not duplicate an email address in your request. For more information on how you may specify your recipients, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}
      {% api_error_table_message "The CC email exceeds the maximum total length of 320 characters" "We only allow the total email length to be 320 characters including the local address, the `@`, and the domain." %}

{% endapi_error_table %}

{% api_error_table personalizations.custom_args "" message.personalizations.custom_args %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "All values of custom arguments object must be strings" "Custom argument values must always be strings. You cannot define arrays, integers, or booleans as custom argument values. Click <a href=\"{{root_url}}/API_Reference/SMTP_API/unique_arguments.html\">here</a> more information about how to use custom arguments." %}

  {% api_error_table_message "<code>custom_args</code> cannot be empty." "If you include the <code>custom_args</code> parameter, you must include at least one value. If you do not want to use any custom arguments, simply omit the <code>custom_arg</code> param from your request. Click <a href=\"{{root_url}}/API_Reference/SMTP_API/unique_arguments.html\">here</a> more information about how to use custom arguments." %}

  {% api_error_table_message "The combined size of both global and personalization custom arguments may not exceed 10,000 bytes per personalization." "<code>personalizations[x].custom_args</code> will be merged with message level <code>custom_args</code>, overriding any conflicting keys. The combined total size of the resulting custom arguments, after merging, for each personalization may not exceed 10,000 bytes. Click <a href=\"{{root_url}}/API_Reference/SMTP_API/unique_arguments.html\">here</a> more information about how to use custom arguments." %}
{% endapi_error_table %}

{% api_error_table personalizations.headers "" message.personalizations.headers %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "All values of the headers object must be strings." "The object type of every header that you include must be a string. You cannot include headers that are integers, booleans, or arrays." %}

  {% api_error_table_message "The headers cannot contain duplicate keys." "You may not include the same header more than once." %}

  {% api_error_table_message "Header keys cannot contain non-ASCII characters or empty spaces." "When defining the headers that you would like to use, you must make sure that the string contains only ASCII characters." %}

  {% api_error_table_message "Header cannot be one of the reserved keys." "Some header keys are reserved. You may not include any of the following reserved keys: <code>x-sg-id</code>, <code>x-sg-eid</code>, <code>received</code>, <code>dkim-signature</code>, <code>Content-Type</code>, <code>Content-Transfer-Encoding</code>, <code>To</code>, <code>From</code>, <code>Subject</code>, <code>Reply-To</code>, <code>CC</code>, <code>BCC</code>." %}
{% endapi_error_table %}

{% api_error_table personalizations.send_at "" message.personalizations.send_at %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The <code>send_at</code> parameter is expecting a Unix timestamp as an integer. We will send immediately if you include a <code>send_at</code> timestamp that is in the past." "<code>send_at</code> accepts a unix timestamp representing when you want your email to be sent from SendGrid. If you want the email to be sent at the time of your API request, simply omit the <code>send_at</code> parameter." %}

  {% api_error_table_message "Scheduling more than 72 hours in advance is forbidden." "The <code>send_at</code> parameter allows you to schedule your email to be sent up to 72 hours in advance, but due to our constraints, we cannot schedule emails more than 72 hours in the future. For more information on scheduling parameters, please see our <a href=\"{{root_url}}/API_Reference/SMTP_API/scheduling_parameters.html\">API Reference</a>." %}
{% endapi_error_table %}

{% api_error_table personalizations.subject "" message.personalizations.subject %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subject of your email must be a string at least one character in length." "You are required to include a subject for every email you send, and you may not include an empty subject. The minimum length of your subject is one character." %}

  {% api_error_table_message "The subject is required. You can get around this requirement if you use a template with a subject defined." "Every email must have a subject. This can be accomplished 3 ways: you include a template that has a subject, you define a global subject, or every single personalizations object has a subject." %}
{% endapi_error_table %}

{% api_error_table personalizations.substitutions "" message.personalizations.substitutions %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The substitution values must be an object of key/value pairs, where the values are all strings." "Substitutions must always follow the pattern <code>&#34;substitution_tag&#34;: &#34;value to substitute&#34;</code>. The value to substitute for the &#34;substitution_tag&#34; must always be a string." %}

  {% api_error_table_message "You are limited to 10,000 substitutions." "You may not make more than 10,000 substitutions per request. Substitutions will apply to the content of your email, in addition to the <code>subject</code> and <code>reply_to</code> parameters" %}
{% endapi_error_table %}

{% api_error_table personalizations.to "" message.personalizations.to %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The to array must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "Every email you send must have at least one, valid recipient email address included. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." %}

  {% api_error_table_message "The To email exceeds the maximum total length of 320 characters" "We only allow the total email length to be 320 characters including the local address, the `@`, and the domain." %}

{% endapi_error_table %}

<page-anchor el="h2">
ASM Errors
</page-anchor>

{% api_error_table asm.group_id "" message.asm.group_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The ASM group ID must be an integer." "Suppression Groups, or unsubscribe groups, are a great way to record which emails your recipients want to receive. Including the <code>asm.group_id</code> in your request allows you to group your email with other, similar sends. However, these group IDs are always generated as integers, and so you must ensure that <code>asm.group_id</code> is defined as an integer. For more information please read our <a href=\"{{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html\">Unsubscribe Groups</a> documentation." %}

  {% api_error_table_message "The ASM group ID must be a valid Group ID on your account. You provided [YOUR ASM GROUP ID]." "" %}
{% endapi_error_table %}

{% api_error_table asm.groups_to_display "" message.asm.groups_to_display %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The ASM Group IDs to display must be an array of integers." "" %}

  {% api_error_table_message "All ASM groups to display must be valid ASM groups IDs on your account. You provided {invalid IDs}." "" %}

  {% api_error_table_message "There is a limit of 25 unsubscribe groups that can be displayed to a user at a time." "" %}
{% endapi_error_table %}

<page-anchor el="h2">
Attachment Errors
</page-anchor>

{% api_error_table attachments.content "" message.attachments.content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The attachment content must be base64 encoded." "" %}

  {% api_error_table_message "The attachment content must be a string at least one character in length." "" %}
{% endapi_error_table %}

{% api_error_table attachments.content_id "" message.attachments.content_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The content ID of your attachment must be a string. You provided [YOUR CONTENT ID]." "The <code>content_id</code> is a unique id that you specify for the attachment. This is used when the disposition is set to &#34;inline&#34; and the attachment is an image, allowing the file to be displayed within the body of your email. For example, <code>&lt;img src=&#34;cid:ii_139db99fdb5c3704&#34;&gt;&lt;/img&gt;</code>" %}

  {% api_error_table_message "The content ID of your attachment cannot contain CRLF characters." "When defining your <code>content_id</code>, you may not include the characters <code>;</code>, <code>,</code>, <code>\n</code>, or <code>\r</code>." %}
{% endapi_error_table %}

{% api_error_table attachments.disposition "" message.attachments.disposition %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The disposition of your attachment can be either &#34;inline&#34; or &#34;attachment&#34;. You provided [YOUR DISPOSITION]." "The content-disposition of your attachment defines how you would like the attachment to be displayed. For example, &#34;inline&#34; results in the attached file being displayed automatically within the message while &#34;attachment&#34; results in the attached file requiring some action to be taken before it is displayed (e.g. opening or downloading the file). <code>attachments.disposition</code> always defaults to &#34;attachment&#34;. Can be either &#34;attachment&#34; or &#34;inline&#34;." %}
{% endapi_error_table %}

{% api_error_table attachments.filename "" message.attachments.filename %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The filename of your attachment must be a string." "" %}

  {% api_error_table_message "The filename of your attachment cannot contain CRLF characters." "When defining the filename of your attachment, you may not include the characters <code>;</code>, <code>,</code>, <code>\n</code>, or <code>\r</code>." %}

  {% api_error_table_message "filename is required." "You must always include a filename for your attachment." %}
{% endapi_error_table %}

{% api_error_table attachments.type "" message.attachments.type %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The attachment type must be a string and at least one character in length." "" %}

  {% api_error_table_message "The type cannot contain ';', or CRLF characters." "When defining the type of your attachment content, you may not include the characters <code>;</code>, <code>,</code>, <code>\n</code>, or <code>\r</code>." %}
{% endapi_error_table %}

<page-anchor el="h2">
Batch ID Errors
</page-anchor>

{% api_error_table batch_id "" message.batch_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The batch_id must be a string." "Batch IDs are always generated as strings, so when you choose to include a batch ID in your send, you must make sure that <code>batch_id</code> is defined as a string. For more information about batch IDs, and how you can use them to group sends together, please visit our <a href=\"{{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html\">API Reference</a>." %}
{% endapi_error_table %}

<page-anchor el="h2">
Categories Errors
</page-anchor>

{% api_error_table categories "" message.categories %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "There is a limit of 10 categories for each email that is sent. You provided X categories." "For more information on how you can use categories to organize your email analytics, please visit our <a href=\"{{root_url}}/User_Guide/Statistics/categories.html\">User Guide</a>." %}

  {% api_error_table_message "Categories must be an array of strings." "Every object that you include within the categories array must be a string. For more information on how you can use categories to organize your email analytics, please visit our <a href=\"{{root_url}}/User_Guide/Statistics/categories.html\">User Guide</a>." %}

  {% api_error_table_message "Each category must not be longer than 255 characters. [YOUR CATEGORY] exceeds this limit" "he maximum length of a category is 255 characters. For more information on how you can use categories to organize your email analytics, please visit our <a href=\"{{root_url}}/User_Guide/Statistics/categories.html\">User Guide</a>." %}

  {% api_error_table_message "The categories must be a unique list, and you have included [YOUR CATEGORY] more than once. " "You cannot include the same category more than once within the categories array. For more information on how you can use categories to organize your email analytics, please visit our <a href=\"{{root_url}}/User_Guide/Statistics/categories.html\">User Guide</a>." %}

  {% api_error_table_message "Categories can not contain non-ASCII characters." "Each category name must only be comprised of ASCII characters. For more information on how you can use categories to organize your email analytics, please visit our <a href=\"{{root_url}}/User_Guide/Statistics/categories.html\">User Guide</a>." %}
{% endapi_error_table %}

<page-anchor el="h2">
Content Errors
</page-anchor>

{% api_error_table content "" message.content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The content param is required unless you are using a transactional template and have defined a template_ID." "You may not send an email without the content parameter unless you are using a transactional template. This is to prevent you from sending an empty email to your recipients." %}

  {% api_error_table_message "There must be at least one defined content block. We typically suggest both text/plain and text/html blocks are included, but only one block is required." "You must specify at least one content type and value for every email you send. We recommend that you include both text/plain and text/html to ensure that all of your recipients are able to read your email, but you are only required to define one type of content." %}
{% endapi_error_table %}

{% api_error_table content.type "" message.content.type %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "A content type is required, this tells email clients how to display the email." "You must always specify the MIME type of content you are including in your email, and if you are including the text/plain type, it must be specified first, followed by text/html, and then any other MIME types you would like to specify." %}

  {% api_error_table_message "The content value must be a string at least one character in length." "You may not send an email with no content." %}

  {% api_error_table_message "Your content type must be a string with length of at least one character." "The content of your email must always be contained within a string when you make your request." %}

  {% api_error_table_message "Cannot contain ';', or CRLF characters." "When defining the type of your content, you may not include the characters <code>;</code>, <code>,</code>, <code>\n</code>, or <code>\r</code>." %}
{% endapi_error_table %}

{% api_error_table content.value "" message.content.value %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "A content value is required, this is the content of the email you are sending." "We do not allow you to send an empty email to your recipients. You must always include a value for your content." %}

  {% api_error_table_message "The content value must be a string at least one character in length." "We do not allow you to send an empty email to your recipients. Even if you include the <code>content.value</code> parameter, it must include at least one character." %}

  {% api_error_table_message "Following RFC 1341, section 7.2, if either text/html or text/plain are to be sent in your email: text/plain needs to be first, followed by text/html, followed by any other content." "The order in which you specify the MIME types of your content must always be text/plain first, if you choose to include it, followed by text/html, and then any other MIME types you wish to include." %}
{% endapi_error_table %}

<page-anchor el="h2">
Encoding Errors
</page-anchor>

{% api_error_table Encoding "" "" %}
  {% api_error_table_row 415 %}

  {% api_error_table_message "Invalid UTF8 in request" "Your payload must be encoded in UTF-8. This includes any attachments." %}
{% endapi_error_table %}

<page-anchor el="h2">
From Address Errors
</page-anchor>

{% api_error_table from "" message.from %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The from object must at least have an <code>email</code> parameter with a valid email address and may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}" "While every <code>from</code> parameter must include a valid email address, you are not required to include a name." %}

  {% api_error_table_message "The <code>from</code> object must be provided for every email send. It is an object that requires the <code>email</code> parameter, but may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}" "You are required to provide a from address whenever you send an email through SendGrid. This is used for authentication purposes and helps to build a positive sending reputation with your recipients' ISPs. You are not required to include a name within the <code>from</code> parameter." %}

  {% api_error_table_message "The From email exceeds the maximum total length of 320 characters" "We only allow the total email length to be 320 characters including the local address, the `@`, and the domain." %}

{% endapi_error_table %}

<page-anchor el="h2">
Headers Errors
</page-anchor>

{% api_error_table headers "" message.headers %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The header values must be strings." "The object type of every header that you include must be a string. You cannot include headers that are integers, booleans, or arrays." %}

  {% api_error_table_message "The headers cannot contain duplicate keys." "You may not include the same header more than once." %}

  {% api_error_table_message "Header keys cannot contain non-ASCII characters and empty spaces." "When defining the headers that you would like to use, you must make sure that the string contains only ASCII characters." %}

  {% api_error_table_message "Header can not be one of the reserved keys." "Some header keys are reserved. You may not include any of the following reserved headers: <code>x-sg-id</code>, <code>x-sg-eid</code>, <code>received</code>, <code>dkim-signature</code>, <code>Content-Type</code>, <code>Content-Transfer-Encoding</code>, <code>To</code>, <code>From</code>, <code>Subject</code>, <code>Reply-To</code>, <code>CC</code>, <code>BCC</code>." %}
{% endapi_error_table %}

<page-anchor el="h2">
IP Pool Errors
</page-anchor>

{% api_error_table ip_pool_name "" message.ip_pool_name %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The name of your IP pool must be a string." "" %}

  {% api_error_table_message "The IP Pool name must be a valid pool name for your account. You provided [YOUR IP POOL NAME]." "" %}
{% endapi_error_table %}

<page-anchor el="h2">
Reply To Errors
</page-anchor>

{% api_error_table reply_to "" message.reply_to %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The <code>reply_to</code> object, when used, must at least have an <code>email</code> parameter with a valid email address and it may also contain a <code>name</code> parameter. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "For every carbon copy of your email, you must include one, valid recipient email address. However, you are not required to include a corresponding name with the recipient email address. For more information on how to use <code>personalizations</code> to define who you want to send your email to, please visit our <a href=\"{{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html\">Classroom</a>." "" %}
{% endapi_error_table %}

  {% api_error_table_message "The Reply-To email exceeds the maximum total length of 320 characters" "We only allow the total email length to be 320 characters including the local address, the `@`, and the domain." %}


<page-anchor el="h2">
Sections Errors
</page-anchor>

{% api_error_table sections "" message.sections %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The section values must be strings." "The values of your <code>sections</code> parameter will be substituted into the content of your email. We will only perform substitutions using strings, so please make sure that your section values are always defined as strings." %}
{% endapi_error_table %}

<page-anchor el="h2">
Send At Errors
</page-anchor>

{% api_error_table send_at "" message.send_at %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The <code>send_at</code> parameter is expecting a Unix timestamp as an integer. We will send immediately if you include a <code>send_at</code> timestamp that is in the past." "<code>send_at</code> accepts a unix timestamp representing when you want your email to be sent from SendGrid. If you want the email to be sent at the time of your API request, simply omit the <code>send_at</code> parameter." %}

  {% api_error_table_message "Scheduling more than 72 hours in advance is forbidden." "The <code>send_at</code> parameter allows you to schedule your email to be sent up to 72 hours in advance, but due to our constraints, we cannot schedule emails more than 72 hours in the future. For more information on scheduling parameters, please see our <a href=\"{{root_url}}/API_Reference/SMTP_API/scheduling_parameters.html\">API Reference</a>." %}
{% endapi_error_table %}

<page-anchor el="h2">
Subject Line Errors
</page-anchor>

{% api_error_table subject "" message.subject %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subject of your email must be a string at least one character in length." "You are required to include a subject for every email you send, and you may not include an empty subject. The minimum length of your subject is one character." %}

  {% api_error_table_message "The subject is required. You can get around this requirement if you use a template with a subject defined or if every personalization has a subject defined." "Every email must have a subject. This can be accomplished 3 ways: you include a template that has a subject, you define a global subject, or every single personalizations object has a subject." %}
{% endapi_error_table %}

<page-anchor el="h2">
Template Errors
</page-anchor>

{% api_error_table template_id "" message.template_id %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The template ID must be a string, you provided [YOUR TEMPLATE ID]." "Template IDs are always strings." %}

  {% api_error_table_message "The Template ID must be a valid template id for your account. You provided [YOUR TEMPLATE ID]." "We do not allow you to send an empty email, so in the event that the only content of your email is contained within your template, we want to make sure that the included template exists, and is valid." %}

  {% api_error_table_message "Must be a valid template." "We do not allow you to send an empty email, so in the event that the only content of your email is contained within your template, we want to make sure that the included template exists, and is valid." %}
{% endapi_error_table %}

<page-anchor el="h2">
Mail Settings Errors
</page-anchor>

{% api_error_table mail_settings.bcc.email "" message.mail_settings.bcc.email %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc email recipient object must at least have an email address and may also contain a name. e.g. <code>{&#34;email&#34;: &#34;example@example.com&#34;}</code> or <code>{&#34;email&#34;: &#34;example@example.com&#34;, &#34;name&#34;: &#34;Example Recipient&#34;}</code>" "" %}

  {% api_error_table_message "You must include a recipient object when using the bcc mail setting." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.bcc.enable "" message.mail_settings.bcc.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bcc enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.bypass_list_management.enable "" message.mail_settings.bypass_list_management.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The bypass list management enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.enable "" message.mail_settings.footer.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The footer enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.html "" message.mail_settings.footer.html %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The text/html version of your footer should be a string." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.footer.text "" message.mail_settings.footer.text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The text/plain version of your footer should be a string." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.sandbox_mode.enable "" message.mail_settings.sandbox_mode.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The sandbox mode enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.enable "" message.mail_settings.spam_check.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.post_to_url "" message.mail_settings.spam_check.post_to_url %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check url must be a string." "" %}

  {% api_error_table_message "You must include the url to post to when using the spam check mail setting." "" %}

  {% api_error_table_message "The `post_to_url` parameter must start with `http://` or `https://`." "" %}
{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.threshold "" message.mail_settings.spam_check.threshold %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The spam check threshold is between 1 and 10, with the lower numbers being the most strict filtering. " "" %}

  {% api_error_table_message "You must include the spam check threshold  when using the spam check mail setting." "" %}
{% endapi_error_table %}

<page-anchor el="h2">
Tracking Settings Errors
</page-anchor>

{% api_error_table tracking_settings.click_tracking.enable "" message.tracking_settings.click_tracking.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The click tracking enable param should be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.click_tracking.enable_text "" message.tracking_settings.click_tracking.enable_text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The click tracking enable text must be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.enable "" message.tracking_settings.ganalytics.enable %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics enable param must be a boolean value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_campaign "" message.tracking_settings.ganalytics.utm_campaign %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_campaign must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_content "" message.tracking_settings.ganalytics.utm_content %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_content must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_medium "" message.tracking_settings.ganalytics.utm_medium %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_medium must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_source "" message.tracking_settings.ganalytics.utm_source %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_source must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_term "" message.tracking_settings.ganalytics.utm_term %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The Google Analytics utm_term must be a string value." "" %}
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

{% api_error_table tracking_settings.subscription_tracking.html "" message.tracking_settings.subscription_tracking.html %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking unsubscribe content for text/html messages must be a string." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.substitution_tag "" message.tracking_settings.subscription_tracking.substitution_tag %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking substitution tag must be a string value." "" %}
{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.text "" message.tracking_settings.subscription_tracking.text %}
  {% api_error_table_row 400 %}

  {% api_error_table_message "The subscription tracking unsubscribe content for text/plain messages must be a string. " "" %}
{% endapi_error_table %}
