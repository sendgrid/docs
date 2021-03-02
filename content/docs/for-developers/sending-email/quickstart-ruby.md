---
layout: page
weight: 0
title: Email API Quickstart for Ruby
group: api-v3
navigation:
  show: true
seo:
  title: Email API Quickstart for Ruby
  description: Sending your first email using the SendGrid REST API and Ruby.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, Ruby.
---

In this quickstart, you'll learn how to send your first email using the [Twilio SendGrid Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) and [Ruby](https://www.ruby-lang.org/en/).

## Prerequisites

Be sure to perform the following prerequisites to complete this tutorial. You can skip ahead if you've already completed these tasks.

1. Sign up for a SendGrid account.
2. Enable Two-factor authentication.
3. Create and store a SendGrid API Key with **Mail Send** > **Full Access** permissions.
4. Complete Domain Authentication.
5. Install Ruby.

<a href="#starting-the-project" class="btn btn-primary">Skip the prerequisites</a>

### Sign up for a SendGrid account

When you sign up for a free [SendGrid account](https://signup.sendgrid.com/), you'll be able to send 100 emails per day forever. For more account options, see our [pricing page](https://sendgrid.com/pricing/).

### Enable Two-factor authentication

Twilio SendGrid requires customers to enable Two-factor authentication (2FA). You can enable 2FA with SMS or by using the [Authy](https://authy.com/) app. See the [2FA section of our authentication documentation]({{root_url}}/for-developers/sending-email/authentication/#two-factor-authentication) for instructions.

### Create and store a SendGrid API key

Unlike a username and password — credentials that allow access to your full account — an API key is authorized to perform a limited scope of actions. If your API key is compromised, you can also cycle it (delete and create another) without changing your other account credentials.

Visit our [API Key documentation]({{root_url}}/ui/account-and-settings/api-keys/) for instructions on creating an API key and [storing an API key in an environment variable]({{root_url}}/ui/account-and-settings/api-keys/#storing-an-api-key-in-an-environment-variable). To complete this tutorial, you can create a Restricted Access API key with **Mail Send** > **Full Access** permissions only, which will allow you to send email and schedule emails to be sent later. You can edit the permissions assigned to an API key later to work with additional services.

Once your API key is assigned to an environment variable — this quickstart uses `SENDGRID_API_KEY` — you can proceed to the next step.

```shell
export SENDGRID_API_KEY=<Your API Key>
```

### Verify your Sender Identity

To ensure our customers maintain the best possible sender reputations and to uphold legitimate sending behavior, we require customers to verify their [Sender Identities]({{root_url}}/for-developers/sending-email/sender-identity/) by completing [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). A Sender Identity represents your 'From' email address—the address your recipients see as the sender of your emails.

<call-out>

To get started quickly, you may be able to skip Domain Authentication and begin by completing [Single Sender Verification]({{root_url}}/ui/sending-email/sender-verification). Single Sender Verification is recommended for testing only. Some email providers have [DMARC]({{root_url}}/glossary/dmarc) policies that restrict email from being delivered using their domains. For the best experience, please complete Domain Authentication. Domain Authentication is also required to upgrade from a free account. To better understand why Domain Authentication is necessary, see our ["Spoofing"]({{root_url}}/glossary/spoofing/) and ["Everything about DMARC"]({{root_url}}/ui/sending-email/dmarc/) articles.

</call-out>

### Ruby

Before installing Ruby, you can see if you already have a version on your machine.

<call-out>

The Twilio SendGrid Ruby helper library requires Ruby version 2.4 or newer, [excluding version 2.6.0](https://github.com/sendgrid/sendgrid-ruby/blob/main/TROUBLESHOOTING.md#ruby-versions).

</call-out>

#### Ruby version check

Check your Ruby version by opening your terminal (also known as a command line or console) and typing the following command.

```shell
ruby -v
```

If you have Ruby installed, the terminal will print something like the following output.

```shell
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin19]
```

<call-out>

You may already have a version of Ruby included on your operating system. For example, MacOS includes a version of Ruby for its own system uses. It is not recommended to develop your application using the MacOS system installation of Ruby.

You can use a version manager such as rbenv or rvm to manage multiple versions of Ruby on one machine. See the [rbenv](https://github.com/rbenv/rbenv) and [RVM](https://rvm.io/) projects for more information.

</call-out>

#### Install Ruby

If you do not already have a version of Ruby installed, visit the [Ruby website](https://www.ruby-lang.org/en/documentation/installation/) to download and install a version appropriate for your operating system.

## Starting the project

Using a [Twilio SendGrid helper library](https://github.com/sendgrid/sendgrid-ruby) is the fastest way to deliver your first email.

Start by creating a project folder for this app. The following examples will use a folder called `send_mail`.

```shell
mkdir send_mail
```

Next, navigate into the send_mail directory where you will complete the rest of the tutorial.

```shell
cd send_mail
```

### Initialize your project

The [RubyGems](https://rubygems.org/) package manager is included when installing Ruby. You can use RubyGems to install the Twilio SendGrid helper library and save it as a project dependency. If you want to verify that RubyGems is installed, you can type the following into the terminal.

```shell
gem -v
```

The terminal should print something like the following output.

```shell
3.2.3
```

### Install the helper library

To install the Twilio SendGrid helper library, type the following command into the terminal.

```shell
gem install sendgrid-ruby
```

The terminal will output something like the following output.

```shell
Successfully installed sendgrid-ruby-6.4.0
Parsing documentation for sendgrid-ruby-6.4.0
Done installing documentation for sendgrid-ruby after 0 seconds
1 gem installed
```

## Send an email

You're now ready to write some code. First, create a `send_mail.rb` file in your project directory.

### Complete code block

The following Ruby block contains all the code needed in your `send_mail.rb` file to successfully deliver a message with the SendGrid Mail Send API. You can copy this code, modify the `to` and `from` variables, and run the code if you like. We'll break down each piece of this code in the following sections.

```ruby
require 'sendgrid-ruby'
include SendGrid

from = SendGrid::Email.new(email: 'test@example.com', name: "Test") # Change to your verified sender
to = SendGrid::Email.new(email: 'test@example.com', name: "Test") # Change to your recipient
subject = 'Sending with Twilio SendGrid is Fun'
content = SendGrid::Content.new(type: 'text/html', value: 'and easy to do anywhere, even with <strong>Ruby</strong>.')
mail = SendGrid::Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.parsed_body
puts response.headers
```

### Build your API call

Your API call must have the following components.

- A Host (the host for Web API v3 requests is always `https://api.sendgrid.com/v3/`)
- An Authorization Header
- An API Key passed in the Authorization Header
- A Request (when submitting data to a resource via `POST` or `PUT`, you must submit your request body in JSON format)

In your `send_mail.rb` file, require the SendGrid helper library, and include the SendGrid module. The library will handle setting the Host, `https://api.sendgrid.com/v3/`, for you.

```ruby
require 'sendgrid-ruby'
include SendGrid
```

Now you're ready to set up the `from`, `to`, `subject`, and message body `content`. These values are passed to the API in a [Personalizations]({{root_url}}/for-developers/sending-email/personalizations/) object when using the v3 Mail Send API. You can assign each of these values to variables, and the SendGrid library will handle creating a `personalizations` object for you.

The `subject` variable is a string. However, you will set the `from` and `to` variables using the helper library's `Email` method. The `Email` method takes two arguments, an optional `name` and an `email` address.

The `content` variable is set with the `Content` method. The `Content` method takes a `type`, which can be either `text/plain` or `text/html`, and a `value`, which is a string of the content you wish to send in the message body.

```ruby
from = SendGrid::Email.new(email: 'test@example.com', name: "Test") # Change to your verified sender
to = SendGrid::Email.new(email: 'test@example.com', name: "Test") # Change to your recipient
subject = 'Sending with Twilio SendGrid is Fun'
content = SendGrid::Content.new(type: 'text/html', value: 'and easy to do anywhere, even with <strong>Ruby</strong>.')
```

To properly construct the message, pass each of the previous variables into the SendGrid library's `Mail` method. You can assign this to a variable named `mail`.

```ruby
mail = SendGrid::Mail.new(from, subject, to, content)
```

Next, use the API key you set up earlier. Remember, the API key is stored in an environment variable, so you can use Ruby's `ENV` class to access it. Assign the key to a variable named `sg` using the helper library's `API` method. The helper library will pass your key to the v3 API in an Authorization header using Bearer token authentication.

```ruby
sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
```

Lastly, you need to make a request to the SendGrid Mail Send API to deliver your message.

The helper library uses SendGrid's [ruby-http-client](https://github.com/sendgrid/ruby-http-client) library to construct the request URL by chaining together portions of your desired path. The path to the SendGrid v3 Mail Send endpoint is `https://api.sendgrid.com/v3/mail/send`. The helper library sets the client for you, so the `https://api.sendgrid.com/v3` portion is taken care of by typing `sg.client`. The next parts of the path are `/mail` and `/send`. You can chain the words `mail` and `send` onto `client` to build the rest of the URL.

With the URL built, `ruby-http-client` then allows you to chain on the type of HTTP request you wish to make with a method matching the name of the HTTP verb appropriate for your desired endpoint. To send a message, you should make an HTTP `POST` request, so you can use `post()`. The `post()` method takes a `request_body`, which you should set to a JSON version of your message. You can assign this full call to a variable named `response`.

```ruby
# Send an HTTP POST request to /mail/send
response = sg.client.mail._('send').post(request_body: mail.to_json)
```

With all this code in place, you can run your `mail_send.rb` file in your terminal to send the email.

```shell
ruby mail_send.rb
```

You can also print the status code, body, and headers of the response if you wish.

```ruby
puts response.status_code
puts response.body
puts response.parsed_body
puts response.headers
```

If you receive a `202` status code printed to the console, your message was sent successfully. Check the inbox of the `to` address, and you will see your demo message.

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
- [Twilio SendGrid helper library for Ruby](https://github.com/sendgrid/sendgrid-ruby)
