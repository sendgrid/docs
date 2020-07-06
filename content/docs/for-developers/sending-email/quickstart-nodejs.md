---
layout: page
weight: 0
title: Email API Quickstart for Node.js
group: api-v3
navigation:
  show: true
seo:
  title: Email API Quickstart for Node.js
  description: Sending your first email using the SendGrid REST API and Node.js.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, Node.js, JavaScript
---

In this quickstart, you'll learn how to send your first email using the [Twilio SendGrid v3 Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) and [Node.js](https://nodejs.org/).

## Prerequisites

There are several prerequisites required to complete this tutorial. You can skip ahead if you've already completed these tasks.

1. Sign up for a [SendGrid account](https://signup.sendgrid.com/)
2. Create and store a SendGrid [API Key](https://app.sendgrid.com/settings/api_keys) with full access "Mail Send" permissions.
3. Verify your [Sender Identity]({{root_url}}/for-developers/sending-email/sender-identity/)
4. Install [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

<a href="#starting-the-project" class="btn btn-primary">Skip the prerequisites</a>

### Sign up for a SendGrid account

When you sign up for a free [SendGrid account](https://signup.sendgrid.com/), you'll be able to send 40,000 emails for 30 days and 100 emails per day forever. For more account options, see our [pricing page](https://sendgrid.com/pricing/).

### Verify your Sender Identity

To ensure our customers maintain the best possible sender reputations and to uphold legitimate sending behavior, we require customers to verify their [Sender Identities](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/) by completing either Single [Sender Verification]({{root_url}}/ui/sending-email/sender-verification) or [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). A Sender Identity represents your _From_ email address—the address your recipients see as the sender of your emails.

### Create and and store a SendGrid API key

Unlike a username and password—credentials that allow access to your full account—an API key is authorized to perform a limited scope of actions. If your API key is compromised, you can also cycle it (delete and create another) without changing your other account credentials.

Visit our [API Key documentation]({{root_url}}/ui/account-and-settings/api-keys/) for instructions on [creating an API key]({{root_url}}/ui/account-and-settings/api-keys/#creating-an-api-key) and [storing an API key in an environment variable]({{root_url}}/ui/account-and-settings/api-keys/#storing-an-api-key-in-an-environment-variable).
To complete this tutorial, your API key will need full access "Mail Send" permissions only.

![The SendGrid App UI displaying the Mail Send API key permissions set to full access]({{root_url}}/img/api_key_scopes.png 'API key mail send permissions')

Once your API key is assigned to an environment variable—we use `SENDGRID_API_KEY` in this quickstart—you can proceed to the next step.

<call-out>

For information about environment variables and Node.js specifically, see [Working with Environment Variables in Node.js](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html) on the [Twilio blog](https://www.twilio.com/blog).

</call-out>

### Node.js

Before installing Node.js, you can see if you already have a version on your machine.

<call-out>

The Twilio SendGrid Node.js helper library supports the current LTS version of Node.js (12) and versions 6, 7, 8, and 10.

</call-out>

#### Node.js version check

Check your Node.js version by opening your terminal (also known as a shell, command line, or console) and typing the following command:

```shell
node --version
```

If you have Node.js installed, the terminal should print something like the following output:

```shell
$ node --version
v12.16.1
```

Though the SendGrid helper library supports Node.js back to version 6, we recommend using the latest version (12).

#### Install Node.js

If you do not already have a version of Node.js installed, visit the [Node.js website](https://nodejs.org/en/) for instructions on downloading and installing a version appropriate for your operating system. The npm package manager also has a helpful [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Starting the project

Using a Twilio SendGrid helper library is the fastest way to deliver your first email.

Start by creating a project folder for this app. You can name the project anything you like. We'll use `sgQuickstart`.

```shell
mkdir sgQuickstart
```

### Initialize your project

To install the Twilio SendGrid helper library and save it as a project dependency, use the [npm](https://www.npmjs.com/) package manager, which was included when you installed Node.js. If you want to verify that npm is installed, you can type the following into the terminal:

```shell
npm --version
```

The shell should print something like the following output:

```shell
$ npm --version
6.13.4
```

<call-out>

You can install the helper library using [yarn](https://yarnpkg.com/) if you prefer.

</call-out>

Before installing the package, you should first initialize your project with the following command:

```shell
npm init
```

This command will print a chain of questions that help you create a `package.json` file. The `package.json` file stores a list of project dependencies. You can hit **Enter** or **Return** to skip any of the questions and use the default values.

Once you complete the initialization process, your package.json will contain a `“main”` key. This key stores the application entry point, which is `"index.js"`. The application entry point is the main file Node.js will look for when running your application code. This will be important later. You can use any file name you want, but we’ll use the default `"index.js"` in this quickstart.

### Install the helper library

To install the Twilio SendGrid helper library, type the following command into the shell.

```shell
npm install --save @sendgrid/mail
```

The shell should print something like:

```shell
$npm install --save @sendgrid/mail
+ @sendgrid/mail@7.2.1
added 15 packages from 19 contributors and audited 15 packages in 1.625s
found 0 vulnerabilities
```

<call-out>

If you see errors printed above the message, they are likely related to missing information in your package.json file. You can ignore these errors for this quickstart.

</call-out>

## How to send an API email

You're now ready to write some code. First, create a file in your project directory. Again, we’ll use `index.js` because that's the name of our `"main"` entry point file in our `package.json` file.

```shell
touch index.js
```

### Build your API call

Your API call must have the following components:

- A Host (the host for Web API v3 requests is always `https://api.sendgrid.com/v3/`)
- An Authorization Header
- An API Key passed in the Authorization Header
- A Request (when submitting data to a resource via POST or PUT, you must submit your request body in JSON format)

In your `index.js` file, require the Node.js helper library. The library will handle setting the Host, `https://api.sendgrid.com/v3/`, for you.

```javascript
const sgMail = require('@sendgrid/mail')
```

Next, use the API key we set up earlier. Remember, we stored this in an environment variable, so we'll use the `process.env()` method to access and assign it using the helper library's `setApiKey()` method. The helper library will pass our key to the API in an Authorization header using Bearer token authentication.

```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
```

Now we're ready to set up our `sender`, `recipient`, `subject`, and message body `text`. The helper library allows us to store all this data in a single JavaScript object. Assign the object to a variable named `msg`.

Change the `“to”` argument to a valid email address you can access. This is where your message will be delivered. Change the `“from”` parameter’s value to the address you verified during the Sender Identity set up.

```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
```

Next, you can pass the `msg` object as an argument to the `sgMail.send()` method to send your email. The complete `index.js` file should now look like the following example.

```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail.send(msg)
```

This is all the code needed to successfully deliver a message with the SendGrid Mail Send API. Run the following command in your terminal:

```shell
node index.js
```

If you receive no output printed to the console, congratulations! Check the inbox of the `“to”` address, and you should see your demo message.

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

- [API Reference](http://localhost:8000/api-reference/)
- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/)
- [The Email Activity Feed]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
