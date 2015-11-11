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

## Adding a category or custom field

Categories in sendgrid allow you to split your statistics into categories. An example would be if you have a white labeled service you can split your statistics by the user login.

Another useful feature of sendgrid is the notifications. If you want to complete the feedback loop for your product you can pass identifiers as a header which relate to a record in your database which you can then parse the notifications against that record to track deliveries/opens/clicks/bounces.


{% codeblock lang:php %}
<?php

   Mail::send('emails.view', $data, function ($message)
    {
        $data['category']                  = 'category';
        $data['unique_args']['variable_1'] = 'abc';

        $header = $this->asString($data);

        $message->getSwiftMessage()->getHeaders()->addTextHeader('X-SMTPAPI', $header);

        $message->to('jane@example.com', 'Jane Doe')->subject('This is a demo!');
    });


    private function asJSON($data) // set as private with the expectation of being a class method
    {
        $json = json_encode($data);

        $json = preg_replace('/(["\]}])([,:])(["\[{])/', '$1$2 $3', $json);

        return $json;
    }

    private function asString($data) // set as private with the expectation of being a class method
    {
        $json = $this->asJSON($data);
        $str  = wordwrap($json, 76, "\n   ");

        return $str;
    }
?>
{% endcodeblock %}

