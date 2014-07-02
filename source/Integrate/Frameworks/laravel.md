---
layout: page
weight: 0
title: Laravel
seo:
  title: Send Email with Laravel & SendGrid
  description: View instructions on how to easily send email with Laravel using SendGrid, by setting up setting up Laravel's built in mailer.
navigation:
  show: true
---

Laravel comes with an email sending library built in, so we just need to set it to use SendGrid over SMTP. Check out the docs for [Laravel's mailer](http://laravel.com/docs/mail) for details.

In `app/config/mail.php` you need to configure these settings: 

{% codeblock lang:php %}
<?php

return array(
	'driver' => 'smtp',
	'host' => 'smtp.sendgrid.net',
	'port' => 587,
	'from' => array('address' => 'from@example.com', 'name' => 'John Smith'),
	'encryption' => 'tls',
	'username' => 'sendgrid_username',
	'password' => 'sendgrid_password',
);

?>
{% endcodeblock %}

You can use Laravel's Mail class just like you normally would, but all email will be sent through SendGrid!

{% codeblock lang:php %}
<?php

Mail::send('emails.demo', $data, function($message)
{
    $message->to('jane@example.com', 'Jane Doe')->subject('This is a demo!');
});

?>
{% endcodeblock %}
