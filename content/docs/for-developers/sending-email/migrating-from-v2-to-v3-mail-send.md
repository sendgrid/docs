---
seo:
  title: How To Migrate From v2 to v3 Mail Send
  description:
  keywords: migration, v2 mail send, v3 mail send, upgrade
title: How To Migrate From v2 to v3 Mail Send
group: v2
weight: 0
layout: page
navigation:
  show: true
---

## 	Why should you migrate?
 	
<call-out>

If you are currently using the [Web API v2 mail send endpoint]({{root_url}}/API_Reference/Web_API/mail.html), we recommend that you upgrade to the [latest version]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).

</call-out>

With a few quick changes you will be able to take advantage of the improvements and added features provided by the v3 mail send endpoint, such as:

* Simple, intuitive, and consistent request body format.
* Sandbox Mode allows you to test and validate your email.
* Improved error reporting and documentation.
* Extensive code examples in each of our [libraries]({{root_url}}/Integrate/libraries.html) to help you integrate quickly.

<iframe src="https://player.vimeo.com/video/168940206" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## 	What do you need to migrate?
 	
All you need to migrate from the v2 to v3 mail send endpoint is a SendGrid account.

If you are a new SendGrid user and haven’t begun sending email yet, please go straight to our [v3 Mail Send documentation]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html) to get started.

## 	JSON Schema
 	
Some of the biggest improvements made to the mail send endpoint reside in the JSON schema used to format and submit the data payload for your email. While the v2 mail send endpoint relies on a combination of JSON and SendGrid’s x-smtpapi headers, all content and metadata sent via the v3 mail send endpoint is defined using JSON within a single request body.

Below you will find a visual comparison of the v2 and v3 JSON schemas that highlights equivalent parameters between the two versions and any parameters that have been added or removed. Significant additions include the "personalizations", "sandbox_mode", and "bypass_list_management" parameters.

For a more detailed discussion of these new parameters, please visit the [v3 Mail Send Overview]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html).

![]({{root_url}}/images/v2_vs_v3_mail_send_ga.png)

One of the more prominent changes you may notice, is that many of the settings that were previously handled by SendGrid’s [x-smtpapi]({{root_url}}/API_Reference/SMTP_API/index.html) are now defined explicitly within the JSON schema of the request body to the mail send endpoint.

Previously, the only way to specify custom handling instructions for your email was to include individual blocks of JSON for each "setting" or "app" that you wanted to use according to the [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html).

For example, if you wanted to schedule an email to be sent at a certain time using the v2 mail send endpoint, your request body would look like:

```
api_user=YOUR_USER_NAME&
api_key=YOUR_PASSWORD&
to=john.doeexampexample@example.com&
toname=John&
subject=Hello, World!&
text=Hello, World!&
from=from_address@example.com
x-smtpapi={"send_at":1459728000}
```

However, the equivalent API call for the the v3 mail send endpoint would look like:

```json
{
	"personalizations": [{
		"to": [{
			"email": "john.doeexampexample@example.com"
		}],
		"subject": "Hello, World!",
		"send_at": 1459728000
	}],
	"from": {
		"email": "from_address@example.com"
	},
	"content": {
		"type": "text/plain",
		"value": "Hello, World!"
	}
}
```

Notice that while the call to the v2 Mail Send endpoint does include JSON, it is only defined from within the x-smtpapi parameter, whereas the entire payload for the v3 Mail Send API Call is formatted in JSON.

## 	Requirements and Limitations
 	
There are few limitations and requirements differences between the v2 and v3 mail send endpoints, making it even easier to migrate your integration to the latest version.

## 	Attachments
 	
Attachments are handled differently between the v2 and v3 Mail Send endpoints. When attaching files in an email sent over the v2 Mail Send endpoint, you simply needed to attach your file to the transport and specify the file names and content IDs of those files in your API call. Essentially, you specified which files you were attaching in the API call, but the files were actually sent differently.

When attaching files to an email sent over the v3 Mail Send endpoint, you must include the BASE64 encoded content of your file, file type, filename, disposition, and content_id for each file you are attaching. These are all defined as separate objects within the `attachments` array.

For example, when attaching a single file named "example_file.jpg", the `attachments` object would look like:

```json
{
  "attachments": [
    {
    "content": "[BASE64 encoded content block here]",
    "type": "jpg",
    "name": "example_file",
    "filename": "example_file.jpg",
    "disposition": "inline",
    "content_id": "[THE CONTENT ID OF YOUR FILE]"
    }
  ]
}
```

More Resources
For additional resources on the v3 Mail Send endpoint, please first visit our other documentation on the v3 Mail Send endpoint:

* [V3 Mail Send Overview]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html)
* [SandBox Mode]({{root_url}}/Classroom/Send/v3_Mail_Send/sandbox_mode.html)
* [Errors]({{root_url}}/API_Reference/Web_API_v3/Mail/errors.html)
* [Personalizations]({{root_url}}/Classroom/Send/v3_Mail_Send/personalizations.html)
* [cURL Examples for Common Use Cases]({{root_url}}/for-developers/getting-started/curl-examples.html)

You may also visit our [Support page](https://support.sendgrid.com/hc/en-us).
