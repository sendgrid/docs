---
layout: page
seo:
  title: Errors
title: Errors
description: v3 Mail Send Errors and Troubleshooting Reference
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

{% api_error_table personalizations "" message.personalizations %}
  {% api_error_table_row 400 %}
  {% api_error_table_message "The personalization block is limited to [top end] personalizations per API request. You have provided [this many] personalizations. Please consider splitting this into multiple requests and resending your request." "Description." %}

  {% api_error_table_message "You must have at least one personalization." "Description." %}
{% endapi_error_table %}

{% api_error_table personalizations.to "" message.personalizations.to %}
  {% api_error_table_row 400 %}
  {% api_error_table_message "The to array must at least have an 'email' parameter with a valid email address and it may also contain a 'name' parameter. e.g. {'email' : 'example@example.com'}  or {'email' : 'example@example.com', 'name' : 'Example Recipient'}" "Description." %}
{% endapi_error_table %}

{% api_error_table "Recipient Errors" "Description goes here!" message.recipient-errors %}
  {% api_error_table_row 400 %}
  {% api_error_table_message "There is a limit of 1000 total recipients (to + cc + bcc) per mail/send request." "Description." %}
  {% api_error_table_message "Each to object must at least have an email address and may also contain a name. e.g. {'email' : 'example@example.com'}  or {'email' : 'example@example.com', 'name' : 'Example Recipient'}" "Description." %}
  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email] more than once." "Description." %}
{% endapi_error_table %}

{% api_error_table personalizations.cc "" message.personalizations.cc %}
  {% api_error_table_row 400 %}
  {% api_error_table_message "The cc array, when used, must at least have an 'email' parameter with a valid email address and it may also contain a 'name' parameter. e.g. {"email" : "example@example.com"} or {"email" : "example@example.com", "name" : "Example Recipient"}" "Description." %}

  {% api_error_table_message "Each recipient object must at least have an email address and may also contain a name. e.g. {'email' : 'example@example.com'}  or {'email' : 'example@example.com', 'name' : 'Example Recipient'}" "Description." %}

  {% api_error_table_message "Each unique email address in the personalization block should only be included once. You have included [email] more than once." "Description." %}
{% endapi_error_table %}

{% api_error_table personalizations.bcc "" message.personalizations.bcc %}
  {% api_error_table_row 400 %}
  {% api_error_table_message "The bcc array, when used, must at least have an 'email' parameter with a valid email address and it may also contain a 'name' parameter. e.g. {'email' : 'example@example.com'}  or {'email' : 'example@example.com', 'name' : 'Example Recipient'}" "Description." %}
{% endapi_error_table %}

{% api_error_table personalizations.categories "" message.personalizations.categories %}

{% endapi_error_table %}

{% api_error_table personalizations.custom_args "" message.personalizations.custom_args %}

{% endapi_error_table %}

{% api_error_table personalizations.headers "" message.personalizations.headers %}

{% endapi_error_table %}

{% api_error_table personalizations.substitutions "" message.personalizations.substitutions %}

{% endapi_error_table %}

{% api_error_table from "" message.from %}

{% endapi_error_table %}

{% api_error_table reply_to "" message.reply_to %}

{% endapi_error_table %}

{% api_error_table subject "" message.subject %}

{% endapi_error_table %}

{% api_error_table content "" message.content %}

{% endapi_error_table %}

{% api_error_table content.type "" message.content.type %}

{% endapi_error_table %}

{% api_error_table content.value "" message.content.value %}

{% endapi_error_table %}

{% api_error_table attachments.content "" message.attachments.content %}

{% endapi_error_table %}

{% api_error_table attachments.type "" message.attachments.type %}

{% endapi_error_table %}

{% api_error_table attachments.filename "" message.attachments.filename %}

{% endapi_error_table %}

{% api_error_table attachments.disposition "" message.attachments.disposition %}

{% endapi_error_table %}

{% api_error_table attachments.content_id "" message.attached.content_id %}

{% endapi_error_table %}

{% api_error_table template_id "" message.template_id %}

{% endapi_error_table %}

{% api_error_table sections "" message.sections %}

{% endapi_error_table %}

{% api_error_table headers "" message.headers %}

{% endapi_error_table %}

{% api_error_table categories "" message.categories %}

{% endapi_error_table %}

{% api_error_table send_at "" message.send_at %}

{% endapi_error_table %}

{% api_error_table batch_id "" message.batch_id %}

{% endapi_error_table %}

{% api_error_table asm.group_id "" message.asm.group_id %}

{% endapi_error_table %}

{% api_error_table asm.groups_to_display "" message.asm.groups_to_display %}

{% endapi_error_table %}

{% api_error_table ip_pool_name "" message.ip_pool_name %}

{% endapi_error_table %}

{% api_error_table mail_settings.bcc.enable "" message.mail_settings.bcc.enable %}

{% endapi_error_table %}

{% api_error_table mail_settings.bcc.email "" message.mail_settings.bcc.email %}

{% endapi_error_table %}

{% api_error_table mail_settings.bypass_list_management.enable "" message.mail_settings.bypass_list_management.enable %}

{% endapi_error_table %}

{% api_error_table mail_settings.footer.enable "" message.mail_settings.footer.enable %}

{% endapi_error_table %}

{% api_error_table mail_settings.footer.text "" message.mail_settings.footer.text %}

{% endapi_error_table %}

{% api_error_table mail_settings.footer.html "" message.mail_settings.footer.html %}

{% endapi_error_table %}

{% api_error_table mail_settings.sandbox_mode.enable "" message.mail_settings.sandbox_mode.enable %}

{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.enable "" message.mail_settings.spam_check.enable %}

{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.threshold "" message.spam_check.threshold %}

{% endapi_error_table %}

{% api_error_table mail_settings.spam_check.post_to_url "" message.mail_settings.spam_check.post_to_url %}

{% endapi_error_table %}

{% api_error_table tracking_settings.click_tracking.enable "" message.tracking_settings.click_tracking.enable %}

{% endapi_error_table %}

{% api_error_table tracking_settings.click_tracking.enable_text "" message.tracking_settings.click_tracking.enable_text %}

{% endapi_error_table %}

{% api_error_table tracking_settings.open_tracking.enable "" message.tracking_settings.open_tracking.enable %}

{% endapi_error_table %}

{% api_error_table tracking_settings.open_tracking.substitution_tag "" message.tracking_settings.open_tracking.substitution_tag %}

{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.enable "" message.tracking_settings.subscription_tracking.enable %}

{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.text "" message.tracking_settings.subscription_tracking.text %}

{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.html "" message.tracking_settings.subscription_tracking.html %}

{% endapi_error_table %}

{% api_error_table tracking_settings.subscription_tracking.substitution_tag "" message.tracking_settings.subscription_tracking.substitution_tag %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.enable "" message.tracking_settings.ganalytics.enable %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_source "" message.tracking_settings.ganalytics.utm_source %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_medium "" message.tracking_settings.ganalytics.utm_medium %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_term "" message.tracking_settings.ganalytics.utm_term %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_content "" message.tracking_settings.ganalytics.utm_content %}

{% endapi_error_table %}

{% api_error_table tracking_settings.ganalytics.utm_campaign "" message.tracking_settings.ganalytics.utm_campaign %}

{% endapi_error_table %}
