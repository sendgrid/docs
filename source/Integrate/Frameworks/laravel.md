---
layout: page
weight: 0
title: Laravel
seo:
  title: Send Email with Laravel & SendGrid
  description: View instructions on how to easily send email with Laravel using SendGrid, by setting up setting up Laravel's  Mailables Class.
navigation:
  show: true
---

Laravel provides a clean API over the popular SwiftMailer library with drivers for SMTP, PHP's `mail`, `sendmail` and more. For this example, we'll be sending an email with SendGrid using the SMTP Driver. For more information, check out the docs for [Laravel's Mail interface](http://laravel.com/docs/mail).

Laravel 5.5 LTS uses Mailable classes. Mailables in Laravel abstracts building emails with a mailable class. Mailables are responsible for collating data and passing them to views.

{% anchor h2 %}
Before you begin
{% endanchor %}

In `.env` you need to find and configure these variables: 

{% codeblock %}
MAIL_DRIVER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587
MAIL_USERNAME=sendgrid_username
MAIL_PASSWORD=sendgrid_password
MAIL_ENCRYPTION=tls
MAIL_FROM_NAME="John Smith"
MAIL_FROM_ADDRESS=from@example.com
{% endcodeblock %}

{% info %}
The `MAIL_FROM_NAME` field requires double quotes because there is a space in the string.
{% endinfo %}

{% info %}
You can send `100 messages per SMTP connection` at a time, and open up to `10 concurrent connections` from a single server at a time.
{% endinfo %}

{% anchor h2 %}
Creating a Mailable
{% endanchor %}

Next you need to create a Mailable class, Laravel's CLI tool called Artisan makes that a simple feat.
Open CLI, go to the project directory and type:

`php artisan make:mail TestEmail`

This command will create a new file under `app/Mail/TestEmail.php` and it should look something like this:

{% codeblock lang:php %}
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $address = 'janeexampexample@example.com';
        $subject = 'This is a demo!';
        $name = 'Jane Doe';
        
        return $this->view('emails.test')
                    ->from($address, $name)
                    ->cc($address, $name)
                    ->bcc($address, $name)
                    ->replyTo($address, $name)
                    ->subject($subject)
                    ->with([ 'content' => $this->data['message'] ]);
    }
}
{% endcodeblock %}

In Laravel `Views` are used as 'templates' when sending an email. Let's create a file under `app/resources/views/emails/test.blade.php` and insert this code:

{% codeblock lang:html %}
<!DOCTYPE html>
    <html lang="en-US">
    	<head>
    		<meta charset="utf-8">
    	</head>
    	<body>
    		<h2>Test Email</h2>
		<p>{{ $content }}</p>
    	</body>
    </html>
{% endcodeblock %}

{% anchor h2 %}
Sending an email
{% endanchor %}

Now that we have our Mailable Class created, all we need to do is run this code:

{% codeblock lang:php %}
<?php
    use App\Mail\TestEmail;

    $data = ['message' => 'This is a test!'];

    Mail::to('john@example.com')->send(new TestEmail($data));
{% endcodeblock %}

{% anchor h2 %}
Adding a category or custom field
{% endanchor %}

Categories in SendGrid allow you to split your statistics into sections. For example, if you have a Whitelabeled service, you can split your statistics by the user login.

Another useful tool is event notifications. If you want to complete the feedback loop for your product you can pass identifiers as a header which relate to a record in your database which you can then parse the notifications against that record to track deliveries/opens/clicks/bounces.

The `withSwiftMessage` method of the `Mailable` base class allows you to register the callback that is invoked with the raw SwiftMailer message instance before sending the message. This knowledge allows you to customize the message before delivery. To customize your message, use something similar to this:

{% codeblock lang:php %}
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $address = 'janeexampexample@example.com';
        $subject = 'This is a demo!';
        $name = 'Jane Doe';

        $headerData = [
            'category' => 'category',
            'unique_args' => [
                'variable_1' => 'abc'
            ]
        ];

        $header = $this->asString($headerData);
        
        $this->withSwiftMessage(function ($message) use ($header) {
            $message->getHeaders()
                    ->addTextHeader('X-SMTPAPI', $header);
        });
        
        return $this->view('emails.test')
                    ->from($address, $name)
                    ->cc($address, $name)
                    ->bcc($address, $name)
                    ->replyTo($address, $name)
                    ->subject($subject)
                    ->with([ 'data' => $this->data ]);
    }

    private function asJSON($data)
    {
        $json = json_encode($data);
        $json = preg_replace('/(["\]}])([,:])(["\[{])/', '$1$2 $3', $json);

        return $json;
    }


    private function asString($data)
    {
        $json = $this->asJSON($data);
        
        return wordwrap($json, 76, "\n   ");
    }
}
{% endcodeblock %}
