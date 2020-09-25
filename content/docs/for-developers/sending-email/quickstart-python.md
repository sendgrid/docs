---
layout: page
weight: 0
title: Email API Quickstart for Python
group: api-v3
navigation:
  show: true
seo:
  title: Email API Quickstart for Python
  description: Sending your first email using the SendGrid REST API and Python.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, Python, Python 3.
---

In this quickstart, you'll learn how to send your first email using the [Twilio SendGrid Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) and [Python](https://www.python.org/).

## Prerequisites

Be sure to perform the following prerequisites to complete this tutorial. You can skip ahead if you've already completed these tasks.

1. Sign up for a [SendGrid account](https://signup.sendgrid.com/)
2. Create and store a SendGrid [API Key](https://app.sendgrid.com/settings/api_keys) with full access "Mail Send" permissions.
3. Verify your [Sender Identity]({{root_url}}/for-developers/sending-email/sender-identity/)
4. Install [Python](https://www.python.org/downloads/)

<a href="#starting-the-project" class="btn btn-primary">Skip the prerequisites</a>

### Sign up for a SendGrid account

When you sign up for a free [SendGrid account](https://signup.sendgrid.com/), you'll be able to send 100 emails per day forever. For more account options, see our [pricing page](https://sendgrid.com/pricing/).

### Verify your Sender Identity

To ensure our customers maintain the best possible sender reputations and to uphold legitimate sending behavior, we require customers to verify their [Sender Identities](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/) by completing either Single [Sender Verification]({{root_url}}/ui/sending-email/sender-verification) or [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). A Sender Identity represents your "From" email address—the address your recipients see as the sender of your emails.

Please note that Single Sender Verification is recommended for testing only, and some email providers have [DMARC policies]({{root_url}}/glossary/dmarc/) that restrict email from being delivered using their domains. For the best experience, please complete [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). Domain Authentication is also required to upgrade from a free account. To better understand why Domain Authentication is necessary, see our [spoofing]({{root_url}}/glossary/spoofing) and [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/) articles.

### Create and store a SendGrid API key

Unlike a username and password—credentials that allow access to your full account—an API key is authorized to perform a limited scope of actions. If your API key is compromised, you can also cycle it (delete and create another) without changing your other account credentials.

Visit our [API Key documentation]({{root_url}}/ui/account-and-settings/api-keys/) for instructions on [creating an API key]({{root_url}}/ui/account-and-settings/api-keys/#creating-an-api-key) and [storing an API key in an environment variable]({{root_url}}/ui/account-and-settings/api-keys/#storing-an-api-key-in-an-environment-variable).
To complete this tutorial, your API key will need full access "Mail Send" permissions only. You can edit the permissions assigned to an API key later to work with additional services.

![The SendGrid App UI displaying the Mail Send API key permissions set to full access]({{root_url}}/img/api_key_scopes.png 'API key mail send permissions')

Once your API key is assigned to an environment variable—this quickstart uses `SENDGRID_API_KEY`—you can proceed to the next step.

### Python

Before installing Python, you can see if you already have a version on your machine.

<call-out>

The Twilio SendGrid Python helper library supports Python 2.7, 3.5, 3.6, 3.7, and 3.8.

</call-out>

#### Python version check

Check your Python version by opening your terminal (also known as a shell, command line, or console) and typing the following command:

```shell
python --version
```

If you have Python installed, the terminal should print something like the following output:

```shell
$ python --version
Python 3.8.5
```

<call-out>

Though the SendGrid helper library supports Python back to version 2.7, we recommend using a 3.x version now that Python 2 has reached end-of-life status.

It is possible to have multiple versions of Python on your computer. Some operating systems come with a version of Python already installed. If you run `python --version` and receive `Python 2.7.16` after installing Python 3, try running `python3 --version` to see which 3.x version of Python you have installed. This tutorial was written using Python 3.8.5.

</call-out>

#### Install Python

If you do not already have a version of Python installed, visit the [Python website](https://www.python.org/downloads) to download and install a version appropriate for your operating system.

## Starting the project

Using a [Twilio SendGrid helper library](https://github.com/sendgrid/sendgrid-python) is the fastest way to deliver your first email.

Start by creating a project folder for this app. You can name the project anything you like. We use `sg_quickstart` in the following examples.

```shell
mkdir sg_quickstart
```

### Initialize your project

The [pip](https://pypi.org/project/pip/) package manager was included when you installed Python. You can use pip to install the Twilio SendGrid helper library and save it as a project dependency. If you want to verify that pip is installed, you can type the following into the terminal:

```shell
pip --version
```

The shell should print something like the following output:

```shell
$ pip --version
pip 20.1.1 from /usr/locallib/python3.8/site-packages/pip (python 3.8)
```

<call-out>

If you do not see similar output, try typing `pip3 --version`. If you do not have a version of pip installed, you can download and install it using the [pip installation instructions on python.org](https://packaging.python.org/tutorials/installing-packages/).

</call-out>

### Install the helper library

To install the Twilio SendGrid helper library, type the following command into the shell.

```shell
pip install sendgrid

# python3
pip3 install sendgrid
```

The shell should print something like:

```shell
Collecting sendgrid
  Using cached sendgrid-6.4.6-py3-none-any.whl (73 kB)
Requirement already satisfied: python-http-client>=3.2.1 in /usr/local/lib/python3.8/site-packages (from sendgrid) (3.3.1)
Requirement already satisfied: starkbank-ecdsa>=1.0.0 in /usr/local/lib/python3.8/site-packages (from sendgrid) (1.0.0)
Installing collected packages: sendgrid
Successfully installed sendgrid-6.4.6
```

## How to send an API email

You're now ready to write some code. First, create a file in your project directory. You can use `app.py`.

```shell
touch app.py
```

### Complete code block

The following Python block contains all the code needed to successfully deliver a message with the SendGrid Mail Send API. We'll break down each piece of this code in the following sections.

```python
import sendgrid
import os
from sendgrid.helpers.mail import Mail, Email, To, Content

sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
from_email = Email("test@example.com")  # Change to your verified sender
to_email = To("test@example.com")  # Change to your recipient
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, to_email, subject, content)

# Get a JSON-ready representation of the Mail object
mail_json = mail.get()

# Send an HTTP POST request to /mail/send
response = sg.client.mail.send.post(request_body=mail_json)
```

### Build your API call

Your API call must have the following components:

- A Host (the host for Web API v3 requests is always `https://api.sendgrid.com/v3/`)
- An Authorization Header
- An API Key passed in the Authorization Header
- A Request (when submitting data to a resource via POST or PUT, you must submit your request body in JSON format)

In your `app.py` file, import the SendGrid helper library. The library will handle setting the Host, `https://api.sendgrid.com/v3/`, for you.

```python
import sendgrid
```

Next, use the API key you set up earlier. Remember, the API key is stored in an environment variable, so you can use the `os.environ.get()` method to access it. This means we also need to import Python's os library.

```python
import os
```

Assign the key to a variable named `sg` using the helper library's `SendGridAPIClient()` method. The helper library will pass your key to the v3 API in an Authorization header using Bearer token authentication.

```python
sg = sendgrid.SendGridAPIClient(api_key = os.environ.get('SENDGRID_API_KEY'))
```

Now you're ready to set up the `from_email`, `to_email`, `subject`, and message body `content`. These values are passed to the API in a ["personalizations"]({{root_url}}/for-developers/sending-email/personalizations/) object when using the v3 Mail Send API. You can assign each of these values to variables, and the SendGrid library will handle creating a personalizations object for you.

First, import the library's Mail, Email, To, and Content classes.

```python
from sendgrid.helpers.mail import Mail, Email, To, Content
```

With the helpers imported, define and assign values for `from_email`, `to_email`, `subject`, and `content` variables. Assigning an email address like `from_email = "sender@example.com"` will work. However, the constructors imported in the previous step allow you to pass data to them to be sure your final message is formatted properly.

Note that the `Content()` helper takes two arguments: the content type and the content itself. You have two options for the content type: `text/plain` or `text/html`. The second parameter will take the plain text or HTML content you wish to send.

```python
from_email = Email("test@example.com")  # Change to your verified sender
to_email = To("test@example.com")  # Change to your recipient
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python"
```

To properly construct the message, pass each of the previous variables into the SendGrid library's Mail constructor. You can assign this to a variable named `mail`. You can then use the the Mail constructor's `get()` method to get a JSON-ready representation of the Mail object.

```python
mail = Mail(from_email, to_email, subject, content)

# Get a JSON-ready representation of the Mail object
mail_json = mail.get()
```

Lastly, you need to make a request to the SendGrid Mail Send API to deliver your message.

The helper library uses SendGrid's [python-http-client](https://github.com/sendgrid/python-http-client) library to construct the request URL by chaining together portions of your desired path. The path to the SendGrid v3 Mail Send endpoint is `https://api.sendgrid.com/v3/mail/send`. The helper library sets the client for you, so the `https://api.sendgrid.com/v3` portion is taken care of by typing `sg.client`. The next parts of the path are `/mail` and `/send`. You can chain the the words `mail` and `send` onto `client` to build the rest of the URL.

With the URL built, python-http-client then allows you to chain on the type of HTTP request you wish to make with a method matching the name of the HTTP verb appropriate for your desired endpoint. To send a message, you should make an HTTP POST request, so you can use `post()`. The `post()` method takes a `request_body`, which you should set to the JSON version of your message (remember, this JSON-ready version is stored in the `mail_json` variable). You can assign this full call to a variable named `response`.

```python
# Send an HTTP POST request to /mail/send
response = sg.client.mail.send.post(request_body=mail_json)
```

With all this code in place, you can run your `app.py` file with Python to send the email. You can also print the status code, body, and headers of the response if you wish.

```shell
python app.py
print(response.status_code)
print(response.body)
print(response.headers)

# If needed
python3 app.py
print(response.status_code)
print(response.body)
print(response.headers)
```

If you receive a 202 status code printed to the console, your message was sent successfully. Check the inbox of the `“to_email”` address, and you should see your demo message.

If you don’t see the email, you may need to check your spam folder.

### Troubleshooting

If you receive an error message, you can reference our [response message documentation](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes) for clues about what may have gone wrong.

#### API Response messages

All responses are returned in JSON format. We specify this by sending the Content-Type header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes), [content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

<call-out>

Get additional onboarding support. Save time, increase the quality of your sending, and feel confident you are set up for long-term success with SendGrid Onboarding Services.

</call-out>

## Next Steps

This is just the beginning of what you can do with our APIs. To learn more, check the resources below.

- [API Reference]({{root_url}}/api-reference/)
- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/)
- [The Email Activity Feed]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Twilio SendGrid helper library for Python](https://github.com/sendgrid/sendgrid-python)
