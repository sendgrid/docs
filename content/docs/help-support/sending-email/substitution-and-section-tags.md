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

## 	Simple Name Substitution
 	
This example will show you how to create a name substitution for your emails. We will be using the tag {% raw %}{{name}}{% endraw %} in this example. In this example the tag {% raw %}{{name}}{% endraw %} will get replaced with the name of the recipient.

 ### 	Email Content
 	
 ### 	Text
 	
```
Hello {% raw %}{{name}}{% endraw %},
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{name}}{% endraw %},<br>
    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Hello John,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Hello Matt,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
```

## 	First Name and Last Name Substitutions
 	
This example will show you how to create a first name and last name substitution for your emails. We will be using the tags "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{last_name}}{% endraw %}" in this example. In this example the tag {% raw %}{{first_name}}{% endraw %} will get replaced with the first name of the recipient and the tag {% raw %}{{last_name}}{% endraw %} will get replaced with the last name of the recipient.

 ### 	Email Content
 	
 ### 	Text
 	
```
Hello {% raw %}{{first_name}}{% endraw %} {% raw %} {{last_name}}{% endraw %},
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},<br>
    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Hello John Smith,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane Williams,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Hello Matt Johnson,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
```

## 	Simple Greeting Section with Name Substitution
 	
This example will show you how to create a section as a greeting with a name substitution. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}" and "{% raw %}{{name}}{% endraw %}" in this example. In this example we have created a greeting using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with the {% raw %}{{greeting}}{% endraw %} substitution which calls the section "Hello {% raw %}{{name}}{% endraw %},". The {% raw %}{{name}}{% endraw %} tag in "Hello {% raw %}{{name}}{% endraw %}," is then replaced with the recipients name.

 ### 	Email Content
 	
 ### 	Text
 	
```
{% raw %}{{warm_welcome}}{% endraw %}	```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Hello John,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Hello Matt,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
```

## 	Greeting Section with First & Last Name Substitutions
 	
This example will show you how to create a section with first name and last name substitution for your emails. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting}}{% endraw %}", "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{{last_name}}{% endraw %}" in this example. In this example we have created a greeting using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with the {% raw %}{{greeting}}{% endraw %} substitution which calls the section "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %},". The {% raw %}{{first_name}}{% endraw %} and {% raw %}{{last_name}}{% endraw %} tags in "Hello {% raw %}{{first_name}}{% endraw %} {% raw %}{{last_name}}{% endraw %}," is then replaced with the recipients first and last names.

 ### 	Email Content
 	
 ### 	Text
 	
```
{% raw %}{{warm_welcome}}{% endraw %}	```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Hello John Smith,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane Williams,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Hello Matt Johnson,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
```

## 	Three Different Greeting Sections with First & Last Name Substitutions
 	
This example will show you how to create three different sections, each with first name and last name substitution for your emails. We will be using the tags "{% raw %}{{warm_welcome}}{% endraw %}", "{% raw %}{{greeting01}}{% endraw %}", "{% raw %}{{greeting02}}{% endraw %}", "{% raw %}{{greeting03}}{% endraw %}", "{% raw %}{{first_name}}{% endraw %}" and "{% raw %}{{last_name}}{% endraw %}" in this example. In this example we have created three different greetings using the section tag {% raw %}{{warm_welcome}}{% endraw %}. The {% raw %}{{warm_welcome}}{% endraw %} tag is replaced with either {% raw %}{{greeting01}}{% endraw %}, {% raw %}{{greeting02}}{% endraw %} or {% raw %}{{greeting03}}{% endraw %} substitution. This will call one of the three sections. In each of these sections there is the {% raw %}{{first_name}}{% endraw %} and {% raw %}{{last_name}}{% endraw %} tags which will get replaced with the recipients first and last names.

 ### 	Email Content
 	
 ### 	Text
 	
```
{% raw %}{{warm_welcome}}{% endraw %}	```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>{% raw %}{{warm_welcome}}{% endraw %}<br>
    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Welcome John Smith,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Welcome John Smith,<br>
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane Williams,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Dear Matt Johnson,
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Dear Matt Johnson,<br>
    </p>
  </body>
</html>
```

## 	Three Confirmation Sections and Substitutions
 	
This example will show you how to create three different sections for confirmation emails. We will be using the tags "{% raw %}{{name}}{% endraw %}", "{% raw %}{{confirmations}}{% endraw %}", "{% raw %}{{confirmation_001}}{% endraw %}", "{% raw %}{{confirmation_002}}{% endraw %}", "{% raw %}{{confirmation_003}}{% endraw %}" and "{% raw %}{{order_id}}{% endraw %}" in this example. In this example we have created three different confirmations using the section tag {% raw %}{{confirmations}}{% endraw %}. The {% raw %}{{confirmations}}{% endraw %} tag is replaced with either {% raw %}{{confirmation_001}}{% endraw %}, {% raw %}{{confirmation_002}}{% endraw %} or {% raw %}{{confirmation_003}}{% endraw %} substitution. This will call one of the three sections. In each of these sections there is the {% raw %}{{order_id}}{% endraw %} tag which will get replaced with the recipients order id.

 ### 	Email Content
 	
 ### 	Text
 	
```
Hello {% raw %}{{name}}{% endraw %},
{% raw %}{{confirmations}}{% endraw %}	```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello {% raw %}{{name}}{% endraw %},<br>
	    {% raw %}{{confirmations}}{% endraw %}	    </p>
  </body>
</html>
```

 ### 	X-SMTPAPI Header
 	
```json
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
```

 ### 	v3 Mail Send
 	
```json
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
```

 ### 	Example Outcome:
 	
 ### 	example01@domain.com
 	
 ### 	Text
 	
```
Welcome John,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Welcome John,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
    </p>
  </body>
</html>
```

 ### 	example02@domain.com
 	
 ### 	Text
 	
```
Hello Jane,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
    </p>
  </body>
</html>
```

 ### 	example03@domain.com
 	
 ### 	Text
 	
```
Dear Matt,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
```

 ### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Dear Matt,<br>
	    Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
    </p>
  </body>
</html>
```
