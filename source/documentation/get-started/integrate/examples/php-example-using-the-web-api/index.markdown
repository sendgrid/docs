---
comments: false
date: 2011-05-24 17:28:05
layout: page
slug: php-example-using-the-web-api
title: PHP Example Using The Web API
wordpress_id: 782
---

## A Single Email Request





> **NOTE >> **SendGrid requires the use of PHP 5.3 or higher.



This example uses cURL with PHP through our web API to send an email.  
  

`
$user,
    'api_key'   => $pass,
    'to'        => 'example3@sendgrid.com',
    'subject'   => 'testing from curl',
    'html'      => 'testing body',
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
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
 
// obtain response
$response = curl_exec($session);
curl_close($session);
 
// print everything out
print_r($response);

`



## An Email Sent Using the SMTPAPI Header



This example takes the previous example a step further by adding our SMTPAPI header to set a category and send out to multiple recipients.  The category is called test_category, and the email will go out to both example1@sendgrid.com and example2@sendgrid.com.  The normal to address, example3@sendgrid.com, will not receive an email.  
  


` array(
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
    'html'      => 'testing body',
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
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
 
// obtain response
$response = curl_exec($session);
curl_close($session);
 
// print everything out
print_r($response);

`



## An Email Sent Including a File Attachment



This example adds the additional attachment parameter to attach a file called myfile.  This example assumes the file is in the same directory as your code otherwise you need to specify the full path of the file in the $filePath variable.  
  


`

$user,
    'api_key'   => $pass,
    'to'        => 'example@sendgrid.com',
    'subject'   => 'test of file sends',
    'html'      => '

the HTML 

',
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
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out
print_r($response);

`
