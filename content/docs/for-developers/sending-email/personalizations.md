---
seo:
  title: Personalizations
  description: Learn how to use personalizations to customize your messages sent over the Web API v3.
  keywords: personalizations, v3 mail send
title: Personalizations
group: api-v3
weight: 0
layout: page
navigation:
  show: true
---

When sending an email with the v3 Mail Send endpoint, you define the various metadata about your message, such as the recipients, sender, subject, and send time, at the root level of a JSON request body. Personalizations allow you to override these various metadata for each email in an API request.

Personalizations is an array of objects. Think of the personalizations array like the envelope of a letter: the fields defined within personalizations apply to each email, not the recipient. Like an envelope, personalizations are used to identify who should receive the email as well as details about how you would like the email to be handled. For example, you can define when you would like it to be sent, what headers you would like to include, and any substitutions or custom arguments you would like to be included with the email.

Personalizations allow you to define:

- "to", "cc", "bcc" - The recipients of your email.
- "from" - The sender or _return path_ address of your email.
- "subject" - The subject of your email.
- "headers" - Any headers you would like to include in your email.
- "substitutions" - Any substitutions you would like to be made for your email.
- "custom_args" - Any custom arguments you would like to include in your email.
- "send_at" - A specific time that you would like your email to be sent.

<call-out>

You must include at least one `to` object within the personalizations array.

</call-out>

Since the `personalizations` property is an array, you may include multiple objects allowing you to specify different handling instructions for different copies of your email. For example, you could send the same email to both `john@example.com` and `jane@example.com` but set each email to be delivered at different times.

```json
{
  "from": "sender@yourdomain.com",
  "template_id": "YOUR TEMPLATE ID",
  "personalizations": [
    {
      "to": [
        {
          "email": "john@example.com"
        }
      ],
      "send_at": 1600188812
    },
    {
      "to": [
        {
          "email": "jane@example.com"
        }
      ],
      "send_at": 1600275471
    }
  ]
}
```

<call-out>

You may not include more than 1000 personalizations per API request. If you need to include more than 1000 personalizations, please divide these across multiple API requests.

</call-out>

Some properties can be defined both at the root level of the request body (message level) and at the personalizations level.

For example, the `from`, `subject`, `headers`, `custom_arg`, and `send_at` properties can all be defined at the message level or at the personalizations level. Individual fields within the `personalizations` array will override any message level properties that are defined outside of personalizations. For example, the email subject defined within personalizations will override the subject defined at the message level in the JSON payload.

Keys within objects such as `custom_args` will be merged. If any of the keys conflict, the keys in the `personalizations` object will replace the message level object’s keys.

<call-out>

All of the recipients in a single personalization object (specified in the `to`, `cc`, or `bcc` fields) will see the same email, as defined by the data in that personalization. Because of this, SendGrid does not allow duplicate email addresses among these three recipient arrays in a single personalization.

</call-out>

Below are some examples of how you can use personalizations for various use cases.

## Personalization Examples

- [Sending a single email to a single recipient](#sending-a-single-email-to-a-single-recipient)
- [Sending a single email to a single recipient with substitutions](#sending-a-single-email-to-a-single-recipient-with-substitutions)
- [Sending a single email to a single recipient with a CC](#sending-a-single-email-to-a-single-recipient-with-a-cc)
- [Sending a single email to a single recipient with a CC and a BCC](#sending-a-single-email-to-a-single-recipient-with-a-cc-and-a-bcc)
- [Sending a single email from a single sender to multiple recipients](#sending-the-same-email-to-multiple-recipients)
- [Sending a single email from a single sender to a single recipient with multiple CCs/BCCs](#sending-a-single-email-to-a-single-recipient-with-multiple-ccs/bccs)
- [Sending two different emails to two different groups of recipients](#sending-two-different-emails-to-two-different-groups-of-recipients)
- [Sending multiple emails from multiple senders to multiple recipients](#sending-multiple-emails-from-multiple-senders-to-multiple-recipients)

### Sending a single email to a single recipient

The following example shows you what the personalization property would look like if you wanted to send a single email to a single recipient.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending a single email to a single recipient with substitutions

The following example shows you what the personalization property would look like if you wanted to send a single email to a single recipient with substitutions.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient@example.com"
        }
      ],
      "substitutions": {
        "%fname%": "recipient",
        "%CustomerID%": "CUSTOMER ID GOES HERE"
      },
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending a single email to a single recipient with a CC

The following example shows how to send one email to `recipient1@example.com` with a carbon copy sent to `recipient2@example@com`. Both emails will have the same headers.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient1@example.com"
        }
      ],
      "cc": [
        {
          "email": "recipient2@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending a single email to a single recipient with a CC and a BCC

The following example shows how to send one email to `recipient1@example.com` with a CC sent to `recipient2@example.com` and a BCC sent to `recipient3@example.com`.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient1@example.com"
        }
      ],
      "cc": [
        {
          "email": "recipient2@example.com"
        }
      ],
      "bcc": [
        {
          "email": "recipient3@example.com"
        }
      ]
    }
  ]
}
```

### Sending the same email to multiple recipients

The following shows how to send one email to three different recipients: `recipient1@example.com`, `recipient2@example.com`, and `recipient3@example.com`. These recipients will all be able to see each other on the email.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient1@example.com"
        },
        {
          "email": "recipient2@example.com"
        },
        {
          "email": "recipient3@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending a single email to a single recipient with multiple CCs and BCCs

The following shows what personalizations are required to send the same email to one recipient, with multiple CCs and BCCs.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient1@example.com"
        }
      ],
      "cc": [
        {
          "email": "recipient2@example.com"
        },
        {
          "email": "recipient3@example.com"
        },
        {
          "email": "recipient4@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending two different emails to two different groups of recipients

The following shows how to send two different emails to two different groups of recipients.

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "recipient1@example.com"
        }
      ],
      "cc": [
        {
          "email": "recipient2@example.com"
        },
        {
          "email": "recipient3@example.com"
        },
        {
          "email": "recipient4@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    },
    {
      "to": [
        {
          "email": "recipient5@example.com"
        }
      ],
      "cc": [
        {
          "email": "recipient6@example.com"
        },
        {
          "email": "recipient7@example.com"
        },
        {
          "email": "recipient8@example.com"
        }
      ],
      "subject": "YOUR SUBJECT LINE GOES HERE"
    }
  ]
}
```

### Sending multiple emails from multiple senders to multiple recipients

It is possible to specify multiple From addresses using personalizations. If a personalization object does not contain a `from` object, SendGrid will use the `email` address in the `from` object defined at the root level of the request body.

To successfully deliver email using multiple From addresses, the following conditions must be met.

- A `from` object with an `email` property must be specified at the root level of the request body.
- The domain of the `from` `email` property specified in any personalization must match the domain of the `from` `email` property specified at root level of the request body—SendGrid will reject requests if these domains do not match.

```json
// This is valid
{
  "from": {
    "email": "support@example.com"
  },
  "personalizations": [
    {
      "from": {
        "email": "noreply@example.com"
      }
    }
  ]
}

// This is invalid
{
  "from": {
    "email": "support@example.com"
  },
  "personalizations": [
    {
      "from": {
        "email": "noreply@differentexample.com"
      }
    }
  ]
}
```

The following shows how to send multiple emails using three different `from` addresses on the same domain.

<call-out type="warning">

You must complete [domain authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) to send email from multiple addresses. SendGrid will reject requests from a sending domain that has not been authenticated.

</call-out>

```json
{
  "from": {
    "email": "default@samedomain.com"
  },
  "personalization": [
    {
      "subject": "YOUR SUBJECT LINE GOES HERE",
      "to": [
        {
          "email": "recipient1@example1.com"
        }
      ],
      "from": {
        "email": "sender1@samedomain.com"
      }
    },
    {
      "subject": "YOUR SUBJECT LINE GOES HERE",
      "to": [
        {
          "email": "recipient2@example2.com"
        }
      ],
      "from": {
        "email": "sender2@samedomain.com"
      }
    },
    {
      "subject": "YOUR SUBJECT LINE GOES HERE",
      "to": [
        {
          "email": "recipient3@example3.com"
        }
      ],
      "from": {
        "email": "sender3@samedomain.com"
      }
    }
  ]
}
```
