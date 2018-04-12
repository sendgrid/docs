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

<page-anchor el="h2">
Simple Name Substitution
</page-anchor>

This example will show you how to create a name substitution for your emails. We will be using the tag {% raw %}{{name}}{% endraw %} in this example. In this example the tag {% raw %}{{name}}{% endraw %} will get replaced with the name of the recipient.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
Hello {% raw %}{{name}}{% endraw %},
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{name}}{% endraw %},<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"{% raw %}{{name}}{% endraw %}": ["John", "Jane", "Matt"]
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "John"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Jane"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Matt"
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
		"value": "Hello {% raw %}{{name}}{% endraw %},"
	}, {
		"type": "text/html",
		"value": "Hello {% raw %}{{name}}{% endraw %},"
	}]

}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello John,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Matt,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h2">
First Name and Last Name Substitutions
</page-anchor>

This example will show you how to create a first name and last name substitution for your emails. We will be using the tags "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{last_name}}{% endraw %}" in this example. In this example the tag {% raw %}{{first_name}}{% endraw %} will get replaced with the first name of the recipient and the tag {% raw %}{{last_name}}{% endraw %} will get replaced with the last name of the recipient.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
Hello {% raw %}{{first_name}}{% endraw %} {% raw %} {{last_name}}{% endraw %},
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"{% raw %}{{first_name}}{% endraw %}": ["John", "Jane", "Matt"],
		"{% raw %}{{last_name}}{% endraw %}": ["Smith", "Williams", "Johnson"]
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "John",
			"{% raw %}{{last_name}}{% endraw %}": "Smith"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Jane",
			"{% raw %}{{last_name}}{% endraw %}": "Williams"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Matt",
			"{% raw %}{{last_name}}{% endraw %}": "Johnson"
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
		"value": "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}, {
		"type": "text/html",
		"value": "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}]

}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello John Smith,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Matt Johnson,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h2">
Simple Greeting Section with Name Substitution
</page-anchor>

This example will show you how to create a section as a greeting with a name substitution. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}" and "{% raw %}{{name}}{% endraw %}" in this example. In this example we have created a greeting using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with the {% raw %}{{greeting}}{% endraw %} substitution which calls the section "Hello {% raw %}{{name}}{% endraw %},". The {% raw %}{{name}}{% endraw %} tag in "Hello {% raw %}{{name}}{% endraw %}," is then replaced with the recipients name.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
{% raw %}{{warm_welcome}}{% endraw %}
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"{% raw %}{{name}}{% endraw %}": ["John", "Jane", "Matt"],
		"{% raw %}{{warm_welcome}}{% endraw %}": ["{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}"]
	},
	"section": {
		"{% raw %}{{greeting}}{% endraw %}": "Hello {% raw %}{{name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "John",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Jane",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Matt",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
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
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}, {
		"type": "text/html",
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}],
	"sections": {
		"{% raw %}{{greeting}}{% endraw %}": "Welcome {% raw %}{{name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello John,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Matt,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h2">
Greeting Section with First & Last Name Substitutions
</page-anchor>

This example will show you how to create a section with first name and last name substitution for your emails. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{{last_name}}{% endraw %}" in this example. In this example we have created a greeting using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with the {% raw %}{{greeting}}{% endraw %} substitution which calls the section "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},". The {% raw %}{{first_name}}{% endraw %} and {% raw %}{{last_name}}{% endraw %} tags in "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %}," is then replaced with the recipients first and last names.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
{% raw %}{{warm_welcome}}{% endraw %}
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"{% raw %}{{first_name}}{% endraw %}": ["John", "Jane", "Matt"],
		"{% raw %}{{last_name}}{% endraw %}": ["Smith", "Williams", "Johnson"],
		"{% raw %}{{warm_welcome}}{% endraw %}": ["{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}"]
	},
	"section": {
		"{% raw %}{{greeting}}{% endraw %}": "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "John",
			"{% raw %}{{last_name}}{% endraw %}": "Smith",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Jane",
			"{% raw %}{{last_name}}{% endraw %}": "Williams",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Matt",
			"{% raw %}{{last_name}}{% endraw %}": "Johnson",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting}}{% endraw %}"
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
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}, {
		"type": "text/html",
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}],
	"sections": {
		"{% raw %}{{greeting}}{% endraw %}": "Welcome {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello John Smith,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Matt Johnson,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h2">
Three Different Greeting Sections with First & Last Name Substitutions
</page-anchor>

This example will show you how to create three different sections, each with first name and last name substitution for your emails. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting01}}{% endraw %}", "{% raw %}{{greeting02}}{% endraw %}", "{% raw %}{{greeting03}}{% endraw %}", "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{{last_name}}{% endraw %}" in this example. In this example we have created three different greetings using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with either {% raw %}{{greeting01}}{% endraw %}, {% raw %}{{greeting02}}{% endraw %} or {% raw %}{{greeting03}}{% endraw %} substitution. This will call one of the three sections. In each of these sections there is the {% raw %}{{first_name}}{% endraw %} and {% raw %}{{last_name}}{% endraw %} tags which will get replaced with the recipients first and last names.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
{% raw %}{{warm_welcome}}{% endraw %}
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": [
		"example01@domain.com",
		"example02@domain.com",
		"example03@domain.com"
	],
	"sub": {
		"{% raw %}{{first_name}}{% endraw %}": ["John", "Jane", "Matt"],
		"{% raw %}{{last_name}}{% endraw %}": ["Smith", "Williams", "Johnson"],
		"{% raw %}{{warm_welcome}}{% endraw %}": ["{% raw %}{{greeting01}}{% endraw %}", "{% raw %}{{greeting02}}{% endraw %}", "{% raw %}{{greeting03}}{% endraw %}"]
	},
	"section": {
		"{% raw %}{{greeting01}}{% endraw %}": "Welcome {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},",
		"{% raw %}{{greeting02}}{% endraw %}": "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},",
		"{% raw %}{{greeting03}}{% endraw %}": "Dear {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "John",
			"{% raw %}{{last_name}}{% endraw %}": "Smith",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting01}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Jane",
			"{% raw %}{{last_name}}{% endraw %}": "Williams",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting02}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{first_name}}{% endraw %}": "Matt",
			"{% raw %}{{last_name}}{% endraw %}": "Johnson",
			"{% raw %}{{warm_welcome}}{% endraw %}": "{% raw %}{{greeting03}}{% endraw %}"
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
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}, {
		"type": "text/html",
		"value": "{% raw %}{{warm_welcome}}{% endraw %}"
	}],
	"sections": {
		"{% raw %}{{greeting01}}{% endraw %}": "Welcome {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},",
		"{% raw %}{{greeting02}}{% endraw %}": "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},",
		"{% raw %}{{greeting03}}{% endraw %}": "Dear {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},"
	}
}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Welcome John Smith,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Welcome John Smith,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane Williams,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Dear Matt Johnson,
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Dear Matt Johnson,<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h2">
Three Confirmation Sections and Substitutions
</page-anchor>

This example will show you how to create three different sections for confirmation emails. We will be using the tags "{% raw %}{{name}}{% endraw %}", "{% raw %}{{confirmations}}{% endraw %}", "{% raw %}{{confirmation_001}}{% endraw %}", "{% raw %}{{confirmation_002}}{% endraw %}", "{% raw %}{{confirmation_003}}{% endraw %}" and "{% raw %}{{order_id}}{% endraw %}" in this example. In this example we have created three different confirmations using the section tag {% raw %}{{confirmations}}{% endraw %}. The {% raw %}{{confirmations}}{% endraw %} tag is replaced with either {% raw %}{{confirmation_001}}{% endraw %}, {% raw %}{{confirmation_002}}{% endraw %} or {% raw %}{{confirmation_003}}{% endraw %} substitution. This will call one of the three sections. In each of these sections there is the {% raw %}{{order_id}}{% endraw %} tag which will get replaced with the recipients order id.

<page-anchor el="h3">
Email Content
</page-anchor>

<page-anchor el="h4">
Text
</page-anchor>

{% codeblock %}
Hello {% raw %}{{name}}{% endraw %},
{% raw %}{{confirmations}}{% endraw %}
{% endcodeblock %}

<page-anchor el="h4">
HTML
</page-anchor>

{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{name}}{% endraw %},<br>
	    {% raw %}{{confirmations}}{% endraw %}
    </p>
  </body>
</html>
{% endcodeblock %}

<page-anchor el="h3">
X-SMTPAPI Header
</page-anchor>

{% codeblock lang:json %}
{
	"to": ["example01@domain.com", "example02@domain.com", "example03@domain.com"],
	"sub": {
		"{% raw %}{{name}}{% endraw %}": ["John", "Jane", "Matt"],
		"{% raw %}{{confirmations}}{% endraw %}": ["{% raw %}{{confirmation_001}}{% endraw %}", "{% raw %}{{confirmation_002}}{% endraw %}", "{% raw %}{{confirmation_003}}{% endraw %}"],
		"{% raw %}{{order_id}}{% endraw %}": ["12345", "23456", "34567"]
	},
	"section": {
		"{% raw %}{{confirmation_001}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}.",
		"{% raw %}{{confirmation_002}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"{% raw %}{{confirmation_003}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}. You can download your invoice as a PDF for your records."
	}
}
{% endcodeblock %}

<page-anchor el="h3">
v3 Mail Send
</page-anchor>

{% codeblock lang:json %}
{
	"personalizations": [{
		"to": [{
			"email": "example01@domain.com",
			"name": "Example 01"
		}],
		"subject": "Example 01",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "John",
			"{% raw %}{{order_id}}{% endraw %}": "12345",
			"{% raw %}{{confirmations}}{% endraw %}": "{% raw %}{{confirmation_001}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example02@domain.com",
			"name": "Example 02"
		}],
		"subject": "Example 02",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Jane",
			"{% raw %}{{order_id}}{% endraw %}": "23456",
			"{% raw %}{{confirmations}}{% endraw %}": "{% raw %}{{confirmation_002}}{% endraw %}"
		}
	}, {
		"to": [{
			"email": "example03@domain.com",
			"name": "Example 03"
		}],
		"subject": "Example 03",
		"substitutions": {
			"{% raw %}{{name}}{% endraw %}": "Matt",
			"{% raw %}{{order_id}}{% endraw %}": "34567",
			"{% raw %}{{confirmations}}{% endraw %}": "{% raw %}{{confirmation_003}}{% endraw %}"
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
		"value": "Hello {% raw %}{{name}}{% endraw %},\r\n{% raw %}{{confirmations}}{% endraw %}"
	}, {
		"type": "text/html",
		"value": "<p>Hello {% raw %}{{name}}{% endraw %},<br>{% raw %}{{confirmations}}{% endraw %}"
	}],
	"sections": {
		"{% raw %}{{confirmation_001}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}.",
		"{% raw %}{{confirmation_002}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"{% raw %}{{confirmation_003}}{% endraw %}": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order {% raw %}{{order_id}}{% endraw %}. You can download your invoice as a PDF for your records."
	}
}
{% endcodeblock %}

<page-anchor el="h3">
Example Outcome:
</page-anchor>

<page-anchor el="h4">
example01@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Welcome John,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

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

<page-anchor el="h4">
example02@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Hello Jane,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

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

<page-anchor el="h4">
example03@domain.com
</page-anchor>

<page-anchor el="h5">
Text
</page-anchor>

{% codeblock %}
Dear Matt,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
{% endcodeblock %}

<page-anchor el="h5">
HTML
</page-anchor>

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
