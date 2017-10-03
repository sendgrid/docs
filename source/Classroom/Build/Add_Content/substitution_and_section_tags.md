---
seo:		
  title: Substitution and Section Tags
  description: Substitution and Section Tags
  keywords:
title: Substitution and Section Tags
weight: 0
layout: page
zendesk_id: 204382358
navigation:
  show: true
---

{% anchor h2 %}
Simple Substitution
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-name-": ["John", "Jane", "Matt"]
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
Hello -name-,
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-name-": "Matt"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "Hello -name-,"
	}, {
		"type": "text/html",
		"value": "Hello -name-,"
	}]

}
{% endcodeblock %}

{% anchor h2 %}
Double Substitution
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-first_name-": ["John", "Jane", "Matt"],
		"-last_name-": ["Smith", "Williams", "Johnson"]
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
Hello -first_name- -last_name-,
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-first_name-": "Matt",
			"-last_name-": "Johnson"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "Hello -first_name- -last_name-,"
	}, {
		"type": "text/html",
		"value": "Hello -first_name- -last_name-,"
	}]

}
{% endcodeblock %}

{% anchor h2 %}
Simple Section and Substitution
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-name-": ["John", "Jane", "Matt"],
		"-warm_welcome-": ["-greeting-", "-greeting-", "-greeting-"]
	},
	"section": {
		"-greeting-": "Hello -name-,"
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-name-": "Matt",
			"-warm_welcome-": "-greeting-"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "-warm_welcome-"
	}, {
		"type": "text/html",
		"value": "-warm_welcome-"
	}],
	"sections": {
		"-greeting-": "Welcome -name-,"
	}
}
{% endcodeblock %}

{% anchor h2 %}
Double Substitution with Section
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-first_name-": ["John", "Jane", "Matt"],
		"-last_name-": ["Smith", "Williams", "Johnson"],
		"-warm_welcome-": ["-greeting-", "-greeting-", "-greeting-"]
	},
	"section": {
		"-greeting-": "Hello -first_name- -last_name-,"
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-first_name-": "Matt",
			"-last_name-": "Johnson",
			"-warm_welcome-": "-greeting-"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "-warm_welcome-"
	}, {
		"type": "text/html",
		"value": "-warm_welcome-"
	}],
	"sections": {
		"-greeting-": "Welcome -first_name- -last_name-,"
	}
}
{% endcodeblock %}

{% anchor h2 %}
Complex Section and Substitution (01)
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-first_name-": ["John", "Jane", "Matt"],
		"-last_name-": ["Smith", "Williams", "Johnson"],
		"-warm_welcome-": ["-greeting01-", "-greeting02-", "-greeting03-"]
	},
	"section": {
		"-greeting01-": "Welcome -first_name- -last_name-,",
		"-greeting02-": "Hello -first_name- -last_name-,",
		"-greeting03-": "Dear -first_name- -last_name-,"
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith",
			"-warm_welcome-": "-greeting01-"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams",
			"-warm_welcome-": "-greeting02-"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-first_name-": "Matt",
			"-last_name-": "Johnson",
			"-warm_welcome-": "-greeting03-"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "-warm_welcome-"
	}, {
		"type": "text/html",
		"value": "-warm_welcome-"
	}],
	"sections": {
		"-greeting01-": "Welcome -first_name- -last_name-,",
		"-greeting02-": "Hello -first_name- -last_name-,",
		"-greeting03-": "Dear -first_name- -last_name-,"
	}
}
{% endcodeblock %}

{% anchor h2 %}
Complex Section and Substitution (02)
{% endanchor %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": ["example01@domain.com", "example02@domain.com", "example03@domain.com"],
	"sub": {
		"-name-": ["John", "Jane", "Matt"],
		"-confirmations-": ["-confirmation_001-", "-confirmation_002-", "-confirmation_003-"],
		"-order_id-": ["12345", "23456", "34567"]
	},
	"section": {
		"-confirmation_001-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-.",
		"-confirmation_002-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"-confirmation_003-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. You can download your invoice as a PDF for your records."
	}
}
{% endcodeblock %}

{% anchor h3 %}
Email Content
{% endanchor %}

{% codeblock %}
Hello -name-,

-confirmations-
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John",
			"-confirmations-": "-confirmation_001-"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane",
			"-confirmations-": "-confirmation_002-"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"-name-": "Matt",
			"-confirmations-": "-confirmation_003-"
		}
	}],
	"from": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"reply_to": {
		"email": "sender@senddomain.com",
		"name": "Sender"
	},
	"subject": "Example",
	"content": [{
		"type": "text/plain",
		"value": "Hello -name-,\r\n-confirmations-"
	}, {
		"type": "text/html",
		"value": "<p>Hello -name-,</p><br><p>-confirmations-</p>"
	}],
	"sections": {
		"-confirmation_001-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-.",
		"-confirmation_002-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"-confirmation_003-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. You can download your invoice as a PDF for your records."
	}
}
{% endcodeblock %}
