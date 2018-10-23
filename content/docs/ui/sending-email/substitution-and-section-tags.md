---
seo:
  title: Substitution and Section Tags
  description: Substitution and Section Tags
  keywords: substitution, section
title: Substitution and Section Tags
group: building-email
weight: 0
layout: page
zendesk_id: 204382358
navigation:
  show: true
---

## 	Simple Name Substitution
 	
This example will show you how to create a name substitution for your emails. We will be using the tag `-name-` in this example. In this example, the tag `-name-` will get replaced with the name of the recipient.

 #### 	Email Content
 	
 	
```
Hello -name-,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
    </p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": [
		"john@domain.com",
		"jane@domain.com",
		"matt@domain.com"
	],
	"sub": {
		"-name-": ["John", "Jane", "Matt"]
	}
}
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john@domain.com",
			"name": "John"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John"
		}
	}, {
		"to": [{
			"email": "jane@domain.com",
			"name": "Jane"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane"
		}
	}, {
		"to": [{
			"email": "matt@domain.com",
			"name": "Matt"
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
```

 ####	Example Outcome:
 	
  	john@domain.com
 	
 #### 	Text
 	
```
Hello John,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
```
 #### 	Example Outcome:
  	jane@domain.com
 	
 #### 	Text
 	
```
Hello Jane,
```

 ####	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
```

 #### 	Example Outcome:
 	matt@domain.com
 	
 #### 	Text
 	
```
Hello Matt,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br>
    </p>
  </body>
</html>
```

##	First Name and Last Name Substitutions
 	
This example will show you how to create a first name and last name substitution for your emails. We will be using the tags `-first_name-` and `-last_name-` in this example. In this example the tag `-first_name-` will get replaced with the first name of the recipient and the tag `-last_name-` will get replaced with the last name of the recipient.
 	
 #### 	Text
 	
```
Hello -first_name-  -last_name-,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello -first_name- -last_name-,<br>
    </p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": [
		"john.smith@domain.com",
		"jane.williams@domain.com",
		"matt.johnson@domain.com"
	],
	"sub": {
		"-first_name-": ["John", "Jane", "Matt"],
		"-last_name-": ["Smith", "Williams", "Johnson"]
	}
}
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john.smith@domain.com",
			"name": "John Smith"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith"
		}
	}, {
		"to": [{
			"email": "jane.williams@domain.com",
			"name": "Jane Williams"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams"
		}
	}, {
		"to": [{
			"email": "matt.johnson@domain.com",
			"name": "Matt Johnson"
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
```

 #### 	Example Outcome:
 	
  	john.smith@domain.com
 	
 #### 	Text
 	
```
Hello John Smith,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
```
 #### 	Example Outcome:
 	jane.williams@domain.com
 	
 #### 	Text
 	
```
Hello Jane Williams,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```

 #### 	Example Outcome:
 	matt.johnson@domain.com
 	
 #### 	Text
 	
```
Hello Matt Johnson,
```

 #### 	HTML
 	
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
 	
This example will show you how to create a section as a greeting with a name substitution. We will be using the tags `-warm_welcome-`, `-greeting-` and `-name-` in this example. In this example, we have created a greeting using the section tag `-warm_welcome-`. The `-warm_welcome-` tag is replaced with the `-greeting-` substitution which calls the section `"Hello -name-,"`. The `-name-` tag in `"Hello -name-,"` is then replaced with the recipient's name.
 	
 #### 	Text
 	
```
-warm_welcome-
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": [
		"john@domain.com",
		"jane@domain.com",
		"matt@domain.com"
	],
	"sub": {
		"-name-": ["John", "Jane", "Matt"],
		"-warm_welcome-": ["-greeting-", "-greeting-", "-greeting-"]
	},
	"section": {
		"-greeting-": "Hello -name-,"
	}
}
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john@domain.com",
			"name": "John"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "jane@domain.com",
			"name": "Jane"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "matt@domain.com",
			"name": "Matt"
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
		"value": "<html>\n  <head></head>\n  <body>\n    <p>-warm_welcome-<br>\n    </p>\n   </body>\n</html>"
	}],
	"sections": {
		"-greeting-": "Welcome -name-,"
	}
}
```

 #### 	Example Outcome:
 	
	john@domain.com
 	
 #### 	Text
 	
```
Hello John,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
    </p>
  </body>
</html>
```
 #### 	Example Outcome:
 	jane@domain.com
 	
 #### 	Text
 	
```
Hello Jane,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
    </p>
  </body>
</html>
```
 #### 	Example Outcome:
  	matt@domain.com
 	
 #### 	Text
 	
```
Hello Matt,
```

 #### 	HTML
 	
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
 	
This example will show you how to create a section with first name and last name substitution for your emails. We will be using the tags `-warm_welcome-`, `-greeting-`, `-first_name-` and `-last_name-` in this example. In this example, we have created a greeting using the section tag `-warm_welcome-`. The `-warm_welcome-` tag is replaced with the `-greeting-` substitution which calls the section `"Hello -first_name- -last_name-,"`. The `-first_name-` and `-last_name-` tags in `"Hello -first_name- -last_name-,"` is then replaced with the recipients first and last names.

 	
 #### 	Text
 	
```
-warm_welcome-	
```

#### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": [
		"john.smith@domain.com",
		"jane.williams@domain.com",
		"matt.johnson@domain.com"
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
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john.smith@domain.com",
			"name": "John Smith"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "jane.williams@domain.com",
			"name": "Jane Williams"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams",
			"-warm_welcome-": "-greeting-"
		}
	}, {
		"to": [{
			"email": "matt.johnson@domain.com",
			"name": "Matt Johnson"
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
		"value": "<html>\n  <head></head>\n  <body>\n    <p>-warm_welcome-<br>\n    </p>\n   </body>\n</html>"
	}],
	"sections": {
		"-greeting-": "Welcome -first_name- -last_name-,"
	}
}
```

 #### 	Example Outcome:
 	
	john.smith@domain.com
 	
 #### 	Text
 	
```
Hello John Smith,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br>
    </p>
  </body>
</html>
```
#### 	Example Outcome:
 	jane.williams@domain.com
 	
 #### 	Text
 	
```
Hello Jane Williams,
```

#### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```
#### 	Example Outcome:
 	matt.johnson@domain.com
 	
#### 	Text
 	
```
Hello Matt Johnson,
```

#### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br>
    </p>
  </body>
</html>
```

##	Three Different Greeting Sections with First & Last Name Substitutions
 	
This example will show you how to create three different sections, each with first name and last name substitution for your emails. We will be using the tags `-warm_welcome-`, `-greeting01-`, `-greeting02-`, `-greeting03-`, `-first_name-` and `-last_name-` in this example. In this example, we have created three different greetings using the section tag `-warm_welcome-`. The `-warm_welcome-` tag is replaced with either `-greeting01-`, `-greeting02-` or `-greeting03-` substitution. This will call one of the three sections. In each of these sections, there is the `-first_name-` and `-last_name-` tags which will get replaced with the recipients first and last names.
 	
 #### 	Text
 	
```
-warm_welcome-	
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>-warm_welcome-<br>
    </p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": [
		"john.smith@domain.com",
		"jane.williams@domain.com",
		"matt.johnson@domain.com"
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
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john.smith@domain.com",
			"name": "John Smith"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-first_name-": "John",
			"-last_name-": "Smith",
			"-warm_welcome-": "-greeting01-"
		}
	}, {
		"to": [{
			"email": "jane.williams@domain.com",
			"name": "Jane Williams"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-first_name-": "Jane",
			"-last_name-": "Williams",
			"-warm_welcome-": "-greeting02-"
		}
	}, {
		"to": [{
			"email": "matt.johnson@domain.com",
			"name": "Matt Johnson"
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
		"value": "<html>\n  <head></head>\n  <body>\n    <p>-warm_welcome-<br>\n    </p>\n   </body>\n</html>"
	}],
	"sections": {
		"-greeting01-": "Welcome -first_name- -last_name-,",
		"-greeting02-": "Hello -first_name- -last_name-,",
		"-greeting03-": "Dear -first_name- -last_name-,"
	}
}
```

 #### 	Example Outcome:
 	
  	john.smith@domain.com
 	
 #### 	Text
 	
```
Welcome John Smith,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Welcome John Smith,<br>
    </p>
  </body>
</html>
```
#### 	Example Outcome:
  	jane.williams@domain.com
 	
 #### 	Text
 	
```
Hello Jane Williams,
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br>
    </p>
  </body>
</html>
```
#### 	Example Outcome:
  	matt.johnson@domain.com
 	
 #### 	Text
 	
```
Dear Matt Johnson,
```

 #### 	HTML
 	
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
 	
This example will show you how to create three different sections for confirmation emails. We will be using the tags `-name-`, `-confirmations-`, `-confirmation_001-`, `-confirmation_002-`, `-confirmation_003-` and `-order_id-` in this example. In this example, we have created three different confirmations using the section tag `-confirmations-`. The `-confirmations-` tag is replaced with either `-confirmation_001-`, `-confirmation_002-` or `-confirmation_003-` substitution. This will call one of the three sections. In each of these sections, there is the `-order_id-` tag which will get replaced with the recipient's order id.
 	
 #### 	Text
 	
```
Hello -name-,
-confirmations-
```

 #### 	HTML
 	
```html
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
	    -confirmations-</p>
  </body>
</html>
```

 #### 	X-SMTPAPI Header
 	
```json
{
	"to": ["john@domain.com", "jane@domain.com", "matt@domain.com"],
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
```

 #### 	v3 Mail Send
 	
```json
{
	"personalizations": [{
		"to": [{
			"email": "john@domain.com",
			"name": "John"
		}],
		"subject": "Example 01",
		"substitutions": {
			"-name-": "John",
			"-order_id-": "12345",
			"-confirmations-": "-confirmation_001-"
		}
	}, {
		"to": [{
			"email": "jane@domain.com",
			"name": "Jane"
		}],
		"subject": "Example 02",
		"substitutions": {
			"-name-": "Jane",
			"-order_id-": "23456",
			"-confirmations-": "-confirmation_002-"
		}
	}, {
		"to": [{
			"email": "matt@domain.com",
			"name": "Matt"
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
		"value": "Hello -name-,\n-confirmations-"
	}, {
		"type": "text/html",
		"value": "<html>\n  <head></head>\n  <body>\n    <p>Hello -name-,<br>\n	    -confirmations-</p>\n  </body>\n</html>"
	}],
	"sections": {
		"-confirmation_001-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-.",
		"-confirmation_002-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
		"-confirmation_003-": "Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order_id-. You can download your invoice as a PDF for your records."
	}
}
```

 #### 	Example Outcome:
 	
 	john@domain.com
 	
 #### 	Text
 	
```
Welcome John,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 12345.
```

 #### 	HTML
 	
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
 #### 	Example Outcome:
	jane@domain.com
 	
 #### 	Text
 	
```
Hello Jane,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 23456. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.
```

 #### 	HTML
 	
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
 #### 	Example Outcome:
 	matt@domain.com
 	
 #### 	Text
 	
```
Dear Matt,
Thanks for choosing SendGrid. This email is to confirm that we have processed your order 34567. You can download your invoice as a PDF for your records.
```

 #### 	HTML
 	
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
