---
layout: page
weight: 0
title: v2 API PHP Code Example
group: api-v2
seo:
  override: true
  title: Send Email with PHP and SendGrid - SendGrid Documentation | SendGrid
  description: View code examples showing how to easily send email with PHP using cURL and SendGrid. Further explore SendGrid's email sending PHP library.
navigation:
  show: true
---

<call-out>

 We recommend using SendGrid PHP, our client library, [available on GitHub](https://github.com/sendgrid/sendgrid-php), with full documentation.

 </call-out>

<call-out>

The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in PHP](https://github.com/sendgrid/sendgrid-php/blob/master/TROUBLESHOOTING.md#v2).

</call-out>

## Using SendGrid's PHP Library
```php
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
require 'vendor/autoload.php';
$sendgrid = new SendGrid("SENDGRID_APIKEY");
$email    = new SendGrid\Email();

$email->addTo("test@sendgrid.com")
      ->setFrom("you@youremail.com")
      ->setSubject("Sending with SendGrid is Fun")
      ->setHtml("<strong>and easy to do anywhere, even with PHP</strong>");

$sendgrid->send($email);
```

## 	Using PHP with cURL
 	If you choose not to use SendGrid's client library you may use PHP's cURL function to query the web API.

```php
<?php

require 'vendor/autoload.php';
Dotenv::load(__DIR__);
$sendgrid_apikey = getenv('YOUR_SENDGRID_APIKEY');
$sendgrid = new SendGrid($sendgrid_apikey);
$url = 'https://api.sendgrid.com/';
$pass = $sendgrid_apikey;
$template_id = '<your_template_id>';
$js = array(
  'sub' => array(':name' => array('Elmer')),
  'filters' => array('templates' => array('settings' => array('enable' => 1, 'template_id' => $template_id)))
);

$params = array(
    'to'        => "test@example.com",
    'toname'    => "Example User",
    'from'      => "you@youremail.com",
    'fromname'  => "Your Name",
    'subject'   => "PHP Test",
    'text'      => "I'm text!",
    'html'      => "<strong>I'm HTML!</strong>",
    'x-smtpapi' => json_encode($js),
  );

$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
// Tell PHP not to use SSLv3 (instead opting for TLS)
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $sendgrid_apikey));
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out
print_r($response);

?>
```

## An Email Sent Using the SMTPAPI Header

This example takes the previous example a step further by adding our SMTPAPI header to set a category and send out to multiple recipients. The category is called test_category, and the email will go out to both example1@sendgrid.com and example2@sendgrid.com. The normal to address, example3@sendgrid.com, will not receive an email.

```php
<?php

$url = 'https://api.sendgrid.com/';
$user = 'USERNAME';
$pass = 'PASSWORD';

$json_string = array(

  'to' => array(
    'example1@sendgrid.com', 'example2@sendgrid.com'
  ),
  'category' => 'test_category'
);


$params = array(
    'api_user'  => $user,
    'api_key'   => $pass,
    'x-smtpapi' => json_encode($json_string),
    'to'        => 'example3@sendgrid.com',
    'subject'   => 'testing from curl',
    'html'      => '<strong>testing body</strong>',
    'text'      => 'testing body',
    'from'      => 'example@sendgrid.com',
  );


$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
// Tell PHP not to use SSLv3 (instead opting for TLS)
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out
print_r($response);

?>
```

## An Email Sent Including a File Attachment

This example adds the additional attachment parameter to attach a file called myfile. This example assumes the file is in the same directory as your code otherwise you need to specify the full path of the file in the \$filePath variable.

```php
<?php

$url = 'https://api.sendgrid.com/';
$user = 'USERNAME';
$pass = 'PASSWORD';

$fileName = 'myfile';
$filePath = dirname(__FILE__);

$params = array(
    'api_user'  => $user,
    'api_key'   => $pass,
    'to'        => 'example@sendgrid.com',
    'subject'   => 'test of file sends',
    'html'      => '<p> the HTML </p>',
    'text'      => 'the plain text',
    'from'      => 'example@sendgrid.com',
    'files['.$fileName.']' => '@'.$filePath.'/'.$fileName
  );

print_r($params);

$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);

// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);

// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);

// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
// Tell PHP not to use SSLv3 (instead opting for TLS)
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out
print_r($response);

?>
```
