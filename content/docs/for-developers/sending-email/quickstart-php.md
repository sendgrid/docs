---
layout: page
weight: 0
title: Email API Quickstart for PHP
group: api-v3
navigation:
  show: true
seo:
  title: Email API Quickstart for PHP
  description: Sending your first email using the SendGrid REST API and PHP.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, PHP
---

In this quickstart, you'll learn how to send your first email using [PHP](https://www.php.net/) and the [Twilio SendGrid Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send).

## Prerequisites

Be sure to perform the following prerequisites to complete this tutorial. You can skip ahead if you've already completed these tasks.

1. Sign up for a SendGrid account.
2. Enable Two-factor authentication.
3. Create and store a SendGrid API key.
4. Complete Domain Authentication.
5. Install PHP.
6. Install Composer.

<a href="#starting-the-project" class="btn btn-primary">Skip the prerequisites</a>

### Sign up for a SendGrid account

When you sign up for a free [Twilio SendGrid account](https://signup.sendgrid.com/), you'll be able to send 100 emails per day forever. For more account options, see our [pricing page](https://sendgrid.com/pricing/).

### Enable Two-factor authentication

Twilio SendGrid requires customers to enable Two-factor authentication (2FA) on their accounts. You can do this either with SMS or by using the [Authy](https://authy.com/) app. See the [2FA section of our authentication documentation]({{root_url}}/for-developers/sending-email/authentication/#two-factor-authentication) for instructions.

### Create and store a SendGrid API key

Unlike a username and password — credentials that allow access to your full account — an API key is authorized to perform a limited scope of actions. If your API key is compromised, you can cycle it (delete it and create another one) without changing your other account credentials.

Visit our [API Key documentation]({{root_url}}/ui/account-and-settings/api-keys/) for instructions on creating an API key and [storing an API key in an environment variable]({{root_url}}/ui/account-and-settings/api-keys/#storing-an-api-key-in-an-environment-variable). To complete this tutorial, you can create a **Restricted Access** API key with **Mail Send** > **Full Access** permissions only, which will allow you to send email and schedule emails to be sent later. You can edit the permissions assigned to an API key later to work with additional services.

Once your API key is assigned to an environment variable — this quickstart uses `SENDGRID_API_KEY` — you can proceed to the next step.

```shell
export SENDGRID_API_KEY=<Your API Key>
```

### Verify your Sender Identity with Domain Authentication

To ensure our customers maintain the best possible sender reputations, and to uphold legitimate sending behavior, Twilio SendGrid requires customers to verify their [Sender Identities]({{root_url}}/for-developers/sending-email/sender-identity/) by completing [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). A Sender Identity represents your 'From' email address — the address your recipients see as the sender of your emails.

<call-out>

To get started quickly, you may be able to skip Domain Authentication and begin by completing [Single Sender Verification]({{root_url}}/ui/sending-email/sender-verification). Single Sender Verification is recommended for testing only. Some email providers have [DMARC]({{root_url}}/glossary/dmarc) policies that restrict email from being delivered using their domains.

For the best experience, please complete Domain Authentication. Domain Authentication is also required to upgrade from a free account. To better understand why Domain Authentication is necessary, see our ["Spoofing"]({{root_url}}/glossary/spoofing/) and ["Everything about DMARC"]({{root_url}}/ui/sending-email/dmarc/) articles.

</call-out>

### PHP

Before installing PHP, you can see if you already have a version on your machine.

<call-out>

The Twilio SendGrid PHP helper library requires PHP version 5.6, 7.0, 7.1, 7.2, 7.3, or 7.4. However, we strongly encourage you to use the latest, stable version, 7.4.

</call-out>

#### PHP version check

Check if you already have a version installed on your machine by opening your terminal (also known as a command line or console) and typing the following command.

```shell
php -v
```

If you have PHP installed, the terminal will print something like the following output.

```shell
PHP 8.0.3 (cli) (built: Mar  4 2021 20:42:56) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.3, Copyright (c) Zend Technologies
    with Zend OPcache v8.0.3, Copyright (c), by Zend Technologies
```

<call-out>

You may already have a version of PHP included by your operating system. For example, macOS includes a version of PHP; however, you will often want to build your applications with a different version. You can install and manage different versions of PHP on macOS using [Homebrew](https://formulae.brew.sh/formula/php).

</call-out>

#### Install PHP

If you do not already have a version of PHP installed, visit the [PHP website](https://www.php.net/manual/en/install.php) to download and install a version appropriate for your operating system. Alternatively, use your operating system's package manager (such as APT, Yum, Pacman, Ports, or Homebrew) to install the latest supported version of PHP.

#### Install Composer

See the [Composer installation documentation](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) for download and installation instructions. We recommend installing Composer globally, so that you don't have to install each time you create a new project.

To check if you already have it installed, run the following command.

```shell
composer --version
```

## Starting the project

With the prerequisites completed, create a project folder for this app by running the following command.

```shell
mkdir send_mail
```

Next, navigate into the `send_mail` directory to complete the rest of the tutorial.

```shell
cd send_mail
```

### Initialize your project

While you could use an HTTP helper library such as Guzzle or cURL to interact with the Mail Send API, it is far more efficient to use the [SendGrid helper library for PHP](https://github.com/sendgrid/sendgrid-php) instead.

To install the SendGrid helper library, run the following Composer command. It will create a `composer.json` file at the root of your project, and install the SendGrid helper library for PHP, along with its dependencies in a new directory named `vendor`.

```shell
composer require sendgrid/sendgrid
```

As the command runs, the terminal will print output something like the following example.

```shell
Using version ^7.9 for sendgrid/sendgrid
./composer.json has been created
Running composer update sendgrid/sendgrid
Loading composer repositories with package information
Updating dependencies
Lock file operations: 3 installs, 0 updates, 0 removals
  - Locking sendgrid/php-http-client (3.14.0)
  - Locking sendgrid/sendgrid (7.9.2)
  - Locking starkbank/ecdsa (0.0.4)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 3 installs, 0 updates, 0 removals
  - Downloading sendgrid/php-http-client (3.14.0)
  - Installing starkbank/ecdsa (0.0.4): Extracting archive
  - Installing sendgrid/php-http-client (3.14.0): Extracting archive
  - Installing sendgrid/sendgrid (7.9.2): Extracting archive
1 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating autoload files
```

## Send an email

You're now ready to write some code to send your first email. Start by creating a new PHP file named `send_mail.php` in the root of your project directory.

### Complete code block

The following PHP block contains all the code needed in your `send_mail.php` file to successfully deliver a message with the Twilio SendGrid Mail Send API. You can copy this code to the `send_mail.php` file, modify the values passed to the `setFrom` and `addTo` methods, and run the code to see what happens. We'll break down each piece of this code in the following sections.

```php
<?php

declare(strict_types=1);

require 'vendor/autoload.php';

use \SendGrid\Mail\Mail;

$email = new Mail();
// Replace the email address and name with your verified sender
$email->setFrom(
    'test@example.com',
    'Example Recipient'
);
$email->setSubject('Sending with Twilio SendGrid is Fun');
// Replace the email address and name with your recipient
$email->addTo(
    'test@example.com',
    'Example Sender'
);
$email->addContent(
    'text/html',
    '<strong>and easy to do anywhere, even with PHP</strong>'
);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    printf("Response status: %d\n\n", $response->statusCode());

	$headers = array_filter($response->headers());
	echo "Response Headers\n\n";
	foreach ($headers as $header) {
    	echo '- ' . $header . "\n";
    }
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}
```

### Build your API call

Your API call must have the following components. The helper library abstracts this away, reducing the code you must write.

- A host (the host for Web API v3 requests is always `https://api.sendgrid.com/v3/`)
- An API key passed in an Authorization Header
- A request (when submitting data to a resource via `POST` or `PUT`, you must submit your request body in JSON format)

The code starts by loading [Composer's autoloader](https://medium.com/tech-tajawal/php-composer-the-autoloader-d676a2f103aa), which makes all of the required classes available to our code.

```php
require 'vendor/autoload.php'
```

It then initializes a new variable, `$email`, as an instance of the library's `Mail` class.

```php
$email = new Mail();
```

The code then sets the message's sender, subject, recipient, and content using the `setFrom`, `setSubject`, `addTo`, and `addContent` methods. The values passed to these methods are formatted and sent to the API in a [Personalizations]({{root_url}}/for-developers/sending-email/personalizations/) object when using the v3 Mail Send API.

The `setSubject` method accepts a string. The `setFrom` and `addTo` methods accept an email address and an optional sender name as strings. Be sure to assign `addTo` an address with an inbox that you can access.

The `addContent` method takes the message's type, which can be either `text/plain` or `text/html`, and a string value, which is the content you wish to send in the message body.

```php
// Replace with your verified sender
$email->setFrom(
    'test@example.com',
    'Example Recipient'
);
$email->setSubject(
    'Sending with Twilio SendGrid is Fun'
);
// Replace with your recipient
$email->addTo(
    'test@example.com',
    'Example Sender'
);
$email->addContent(
    'text/html',
    '<strong>and easy to do anywhere, even with PHP</strong>'
);
```

With the message object initialized, a new variable, `$sendgrid`, is initialized, which provides the ability to send the message. This variable is a `SendGrid` object. The `SendGrid` class accepts two arguments: your API key and an options array. You need to pass in your API key only, which the code does using [PHP's `getenv` method](https://www.php.net/manual/en/function.getenv.php). The helper library will handle setting the host, constructing your personalizations object, and formatting the message for you.

```php
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
```

Lastly, the code calls the `$sendgrid` `send` method, to which you pass your `$email`. This method makes a request to the Mail Send API to deliver the email message, assigning the response to a variable, aptly, named `$response`.

```php
$response = $sendgrid->send($email);
```

With all the code in place, run the `send_mail.php` file in your terminal to send the email using the command below.

```php
php send_mail.php
```

You can also wrap your API call in a try block to print the status code and headers of the response or log exceptions in the try block's corresponding catch block.

```php
try {
  $response = $sendgrid->send($email);
  print $response->statusCode() . "\n";
  print_r($response->headers());
} catch (Exception $e) {
  echo 'Caught exception: '. $e->getMessage() ."\n";
}
```

If a [`202` status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202) is printed to the console, your message was sent successfully. Check the inbox of the `addTo` address, and you will see your demo message. If you don’t see the email, check your spam folder.

### Troubleshooting

If you receive an error message, you can reference our [response message documentation](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes) for clues about what may have gone wrong.

#### API Response messages

All responses are returned in JSON format. We specify this by sending the Content-Type Header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes), [content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

<call-out>

Get additional onboarding support. Save time, increase the quality of your sending, and feel confident you are set up for long-term success with [SendGrid Onboarding Services](https://sendgrid.com/marketing/onboarding-services-request/?utm_source=docs).

</call-out>

## Next Steps

This is just the beginning of what you can do with our APIs. To learn more, check the resources below.

- [API Reference]({{root_url}}/api-reference/)
- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/)
- [The Email Activity Feed]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Twilio SendGrid helper library for PHP](https://github.com/sendgrid/sendgrid-php)
