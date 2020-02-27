---
seo:
  title: Substitution Tags
  description: Substitution Tags
  keywords: substitution
title: Substitution Tags
group: building-email
weight: 0
layout: page
zendesk_id: 204382358
navigation:
  show: true
---

Substitution tags allow you to generate dynamic content for each recipient on your list. When you send to a list of recipients over SMTP API, you can specify substitution tags specific to each recipient. A few examples are provided below.

## Simple Name Substitution

This example will show you how to create a name substitution for your emails. We will be using the tag `-name-` in this example. In this example, the tag `-name-` will get replaced with the name of the recipient.

#### Email Content

```
Hello -name-,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br /></p>
  </body>
</html>
```

#### X-SMTPAPI Header

```json
{
  "to": ["john@domain.com", "jane@domain.com", "matt@domain.com"],
  "sub": {
    "-name-": ["John", "Jane", "Matt"]
  }
}
```

#### v3 Mail Send

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "john@domain.com",
          "name": "John"
        }
      ],
      "subject": "Example 01",
      "substitutions": {
        "-name-": "John"
      }
    },
    {
      "to": [
        {
          "email": "jane@domain.com",
          "name": "Jane"
        }
      ],
      "subject": "Example 02",
      "substitutions": {
        "-name-": "Jane"
      }
    },
    {
      "to": [
        {
          "email": "matt@domain.com",
          "name": "Matt"
        }
      ],
      "subject": "Example 03",
      "substitutions": {
        "-name-": "Matt"
      }
    }
  ],
  "from": {
    "email": "sender@senddomain.com",
    "name": "Sender"
  },
  "reply_to": {
    "email": "sender@senddomain.com",
    "name": "Sender"
  },
  "subject": "Example",
  "content": [
    {
      "type": "text/plain",
      "value": "Hello -name-,"
    },
    {
      "type": "text/html",
      "value": "Hello -name-,"
    }
  ]
}
```

#### Example Outcome:

john@domain.com

#### Text

```
Hello John,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello John,<br /></p>
  </body>
</html>
```

#### Example Outcome:

jane@domain.com

#### Text

```
Hello Jane,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br /></p>
  </body>
</html>
```

#### Example Outcome:

matt@domain.com

#### Text

```
Hello Matt,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello Matt,<br /></p>
  </body>
</html>
```

## First Name and Last Name Substitutions

This example will show you how to create a first name and last name substitution for your emails. We will be using the tags `-first_name-` and `-last_name-` in this example. In this example the tag `-first_name-` will get replaced with the first name of the recipient and the tag `-last_name-` will get replaced with the last name of the recipient.

#### Text

```
Hello -first_name-  -last_name-,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello -first_name- -last_name-,<br /></p>
  </body>
</html>
```

#### X-SMTPAPI Header

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

#### v3 Mail Send

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "john.smith@domain.com",
          "name": "John Smith"
        }
      ],
      "subject": "Example 01",
      "substitutions": {
        "-first_name-": "John",
        "-last_name-": "Smith"
      }
    },
    {
      "to": [
        {
          "email": "jane.williams@domain.com",
          "name": "Jane Williams"
        }
      ],
      "subject": "Example 02",
      "substitutions": {
        "-first_name-": "Jane",
        "-last_name-": "Williams"
      }
    },
    {
      "to": [
        {
          "email": "matt.johnson@domain.com",
          "name": "Matt Johnson"
        }
      ],
      "subject": "Example 03",
      "substitutions": {
        "-first_name-": "Matt",
        "-last_name-": "Johnson"
      }
    }
  ],
  "from": {
    "email": "sender@senddomain.com",
    "name": "Sender"
  },
  "reply_to": {
    "email": "sender@senddomain.com",
    "name": "Sender"
  },
  "subject": "Example",
  "content": [
    {
      "type": "text/plain",
      "value": "Hello -first_name- -last_name-,"
    },
    {
      "type": "text/html",
      "value": "Hello -first_name- -last_name-,"
    }
  ]
}
```

#### Example Outcome:

john.smith@domain.com

#### Text

```
Hello John Smith,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello John Smith,<br /></p>
  </body>
</html>
```

#### Example Outcome:

jane.williams@domain.com

#### Text

```
Hello Jane Williams,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello Jane Williams,<br /></p>
  </body>
</html>
```

#### Example Outcome:

matt.johnson@domain.com

#### Text

```
Hello Matt Johnson,
```

#### HTML

```html
<html>
  <head></head>
  <body>
    <p>Hello Matt Johnson,<br /></p>
  </body>
</html>
```
