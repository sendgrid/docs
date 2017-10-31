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
Simple Name Substitution
{% endanchor %}

This example will show you how to create a name substitution for your emails. We will be using the tag "-name-" in this example. In this example the tag -name- will get replaced with the name of the recipient.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
Hello -name-,
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example0eexampexample@example.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"-name-": ["John", "Jane", "Matt"]
	}
}
{% endcodeblock %}

{% anchor h3 %}
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
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

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello John,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Matt,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
First Name and Last Name Substitutions
{% endanchor %}

This example will show you how to create a first name and last name substitution for your emails. We will be using the tags "-first_name-" and "-last_name-" in this example. In this example the tag -first_name- will get replaced with the first name of the recipient and the tag -last_name- will get replaced with the last name of the recipient.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
Hello -first_name- -last_name-,
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -first_name- -last_name-,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example0eexampexample@example.com",
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
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
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

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello John Smith,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Matt Johnson,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
Simple Greeting Section with Name Substitution
{% endanchor %}

This example will show you how to create a section as a greeting with a name substitution. We will be using the tags "-warm_welcome-", "-greeting-" and "-name-" in this example. In this example we have created a greeting using the section tag -warm_welcome-. The -warm_welcome- tag is replaced with the -greeting- substitution which calls the section "Hello -name-,". The -name- tag in "Hello -name-," is then replaced with the recipients name.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example0eexampexample@example.com",
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
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
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

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello John,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Matt,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
Greeting Section with First & Last Name Substitutions
{% endanchor %}

This example will show you how to create a section with first name and last name substitution for your emails. We will be using the tags "-warm_welcome-", "-greeting-", "-first_name-" and "-last_name-" in this example. In this example we have created a greeting using the section tag -warm_welcome-. The -warm_welcome- tag is replaced with the -greeting- substitution which calls the section "Hello -first_name- -last_name-,". The -first_name- and -last_name- tags in "Hello -first_name- -last_name-," is then replaced with the recipients first and last names.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example0eexampexample@example.com",
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
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
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

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello John Smith,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Matt Johnson,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
Three Different Greeting Sections with First & Last Name Substitutions
{% endanchor %}

This example will show you how to create three different sections, each with first name and last name substitution for your emails. We will be using the tags "-warm_welcome-", "-greeting01-", "-greeting02-", "-greeting03-", "-first_name-" and "-last_name-" in this example. In this example we have created three different greetings using the section tag -warm_welcome-. The -warm_welcome- tag is replaced with either -greeting01-, -greeting02- or -greeting03- substitution. This will call one of the three sections. In each of these sections there is the -first_name- and -last_name- tags which will get replaced with the recipients first and last names.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
-warm_welcome-
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": [
		"example0eexampexample@example.com",
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
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
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

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Welcome John Smith,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Welcome John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Dear Matt Johnson,
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Dear Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
Three Confirmation Sections and Substitutions
{% endanchor %}

This example will show you how to create three different sections for confirmation emails. We will be using the tags "-name-", "-confirmations-", "-confirmation_001-", "-confirmation_002-", "-confirmation_003-" and "-order_id-" in this example. In this example we have created three different confirmations using the section tag -confirmations-. The -confirmations- tag is replaced with either -confirmation_001-, -confirmation_002- or -confirmation_003- substitution. This will call one of the three sections. In each of these sections there is the -order_id- tag which will get replaced with the recipients order id.

{% anchor h3 %}
Email Content
{% endanchor %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock %}
Hello -name-,
-confirmations-
{% endcodeblock %}

{% anchor h4 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
	    -confirmations-
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
X-SMTPAPI Header
{% endanchor %}

{% codeblock lang:json %}
{
	"to": ["example0eexampexample@example.com", "example02@domain.com", "example03@domain.com"],
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
v3 Mail Send
{% endanchor %}

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example0eexampexample@example.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John",
			"-order_id-": "12345",
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
			"-order_id-": "23456",
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
			"-order_id-": "34567",
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
		"value": "<p>Hello -name-,<br>-confirmations-"
	}],
	"sections": {
		"-confirmation_001-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-.",
		"-confirmation_002-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"-confirmation_003-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. You can download your invoice as a PDF for your records."
	}
}
{% endcodeblock %}

{% anchor h3 %}
Example Outcome:
{% endanchor %}

{% anchor h4 %}
example0eexampexample@example.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Welcome John,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Welcome John,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example02@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Hello Jane,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h4 %}
example03@domain.com
{% endanchor %}

{% anchor h5 %}
Text
{% endanchor %}

{% codeblock %}
Dear Matt,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
{% endcodeblock %}

{% anchor h5 %}
HTML
{% endanchor %}

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Dear Matt,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
    </p>
  </body>
</html>
{% endcodeblock %}
