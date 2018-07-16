---
seo:
  title: Personalizations
  description: Learn how to use personalizations to customize your messages sent over the Web API v3.
  keywords: personalizations, v3 mail send
title: Personalizations
weight: 0
layout: page
navigation:
  show: true
---


When sending email via the v3 Mail Send endpoint, the various metadata about the message (such as the recipients, subject line, headers, substitutions, and custom arguments) are contained within an array called personalizations.

Think of the personalizations section of the request body like the envelope of a letter: the fields defined within personalizations apply to each individual email, not the recipient. Like an envelope, personalizations are used to identify who should receive the email as well as specifics about how you would like the email to be handled. For example, you can define when you would like it to be sent, what headers you would like to include, and any substitutions or custom arguments you would like to be included with the email.

`personalizations` allow you to define:

* "to", "cc", "bcc" - The recipients of your email.
* "subject" - The subject of your email.
* "headers" - Any headers you would like to include in your email.
* "substitutions" - Any substitutions you would like to be made for your email.
* "custom_args" - Any custom arguments you would like to include in your email.
* "send_at" - A specific time that you would like your email to be sent.

{% info %}
You must include at least one "to" object within the personalizations array.
{% endinfo %}

Since the `personalizations` parameter is an array, you may include multiple objects allowing you to specify different handling instructions for different copies of your email. For example, you could send the same email to both &lt;john@example.com&gt; and &lt;janeexampexample@example.com&gt;, but set each email to be delivered at different times.

{% info %}
You may not include more than 1000 personalizations per API request. If you need to include more than 1000 personalizations, please divide these across multiple API requests.
{% endinfo %}

There are certain parameters that can be defined both at the "message level" and at the "personalizations" level.

For example, the subject, headers, custom arguments, and send_at parameters can all be defined globally or at the personalizations level. When SendGrid processes and validates your request, it first looks at the globally defined parameters. Then the personalizations you have specified are applied, overriding any duplicates already specified globally.

Individual fields within the personalization array will override any other global, or "message level", parameters that are defined outside of personalizations. For example, the email subject defined within personalizations will override the subject defined at the message level in the JSON payload.

Keys within objects like custom_args will be merged. If any of the keys conflict, the keys in the personalizations object will replace the message level object’s keys.

{% info %}
All of the recipients in a single personalization object (either in the `to`, `cc`, or `bcc` fields), will see exactly the same email, as defined by the data in that personalization, as such we do not allow duplicate emails between these three arrays in a single personalization.
{% endinfo %}

Below are some examples of how you can use personalizations for various use cases.

Personalization Examples Index

* [Sending a Single Email to a Single Recipient](#-Sending-a-Single-Email-to-a-Single-Recipient)
* [Sending a Single Email to a Single Recipient with a CC](#-Sending-a-Single-Email-to-a-Single-Recipient-With-a-CC)
* [Sending a Single Email to a Single Recipient with a CC and a BCC](#-Sending-a-Single-Email-to-a-Single-Recipient-With-a-CC-and-a-BCC)
* [Sending a Single Email to Multiple Recipients](#-Sending-the-same-Email-to-Multiple-Recipients)
* [Sending a Single Email to a Single Recipient with Multiple CCs/BCCs](#-Sending-a-Single-Email-to-a-Single-Recipient-With-Multiple-CCs/BCCs)
* [Sending Two Different Emails to Two Different Groups of Recipients](#-Sending-Two-Different-Emails-to-Two-Different-Groups-of-Recipients)

{% anchor h2 %}
Sending a Single Email to a Single Recipient
{% endanchor %}

The following example shows you what the personalization parameter would look like if you wanted to send a single email to a single recipient.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}]
}
{% endcodeblock %}

{% anchor h2 %}
Sending a Single Email to a Single Recipient With a CC
{% endanchor %}

The following example shows how to send one email to recipient1&#064;example&period;com with a carbon copy sent to recipient2&#064;example&period;com. Both emails will have the same headers.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient1@example.com"
		}],
		"cc": [{
			"email": "recipient2@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}]
}
{% endcodeblock %}

{% anchor h2 %}
Sending a Single Email to a Single Recipient With a CC and a BCC
{% endanchor %}

The following example shows how to send one email to recipient1&#064;example&period;com with a CC sent to recipient2&#064;example&period;com and a BCC sent to recipient3&#064;example&period;com.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient1@example.com"
		}],
		"cc": [{
			"email": "recipient2@example.com"
		}],
		"bcc": [{
			"email": "recipient3@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		}
	}]
}
{% endcodeblock %}

{% anchor h2 %}
Sending the same Email to Multiple Recipients
{% endanchor %}

The following shows how to send one email to three different recipients: recipient1&#064;example&period;com, recipient2&#064;example&period;com, and recipient3&#064;example&period;com. These recipients will all be able to see each other on the email.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient1@example.com"
		}, {
			"email": "recipient2@example.com"
		}, {
			"email": "recipient3@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}]
}
{% endcodeblock %}

{% anchor h2 %}
Sending a Single Email to a Single Recipient With Multiple CCs/BCCs
{% endanchor %}

The following shows what personalizations are required to send the same email to one recipient, with multiple CCs and/or BCCs.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient1@example.com"
		}],
		"cc": [{
			"email": "recipient2@example.com"
		}, {
			"email": "recipient3@example.com"
		}, {
			"email": "recipient4@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}]
}
{% endcodeblock %}

{% anchor h2 %}
Sending Two Different Emails to Two Different Groups of Recipients
{% endanchor %}

The following shows how to send two different emails to two different groups of recipients.

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "recipient1@example.com"
		}],
		"cc": [{
			"email": "recipient2@example.com"
		}, {
			"email": "recipient3@example.com"
		}, {
			"email": "recipient4@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient",
			"%CustomerID%": "CUSTOMER ID GOES HERE"
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}, {
		"to": [{
			"email": "recipient5@example.com"
		}],
		"cc": [{
			"email": "recipient6@example.com"
		}, {
			"email": "recipient7@example.com"
		}, {
			"email": "recipient8@example.com"
		}],
		"substitutions": {
			"%fname%": "recipient2",
			"%CustomerID%": 55
		},
		"subject": "YOUR SUBJECT LINE GOES HERE"
	}]
}
{% endcodeblock %}
