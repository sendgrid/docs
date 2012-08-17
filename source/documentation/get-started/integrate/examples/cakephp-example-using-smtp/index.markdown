---
comments: false
date: 2011-03-25 15:46:20
layout: page
slug: cakephp-example-using-smtp
title: CakePHP Example Using SMTP
wordpress_id: 236
following_users:
- brandon
---

CakePHP comes with an email library that already supports SMTP. [For more information check out the CakePHP documentation page](http://book.cakephp.org/view/1286/Sending-a-basic-message). This example shows how to send an email with both HTML and text bodies.



> **NOTE >> **SendGrid requires the use of PHP 5.3 or higher.



In the **app/views/layouts/** you need to define the layout of your text and HTML emails  
  

`
email/
html/
default.ctp
text/
default.ctp
`

In **app/views/layouts/email/text/default.ctp** add:  
  

`

`

and in **app/views/layouts/email/html/default.ctp** add:  
  

`

`

Then create the template for your emails. In this example we created templates for a registration email with the following structure:  
  

`
app/
views/
elements/
email/
text/
registration.ctp
html/
registration.ctp
`

In **app/views/elements/email/text/registration.ctp** add:  
  

`
Dear ,
Thank you for registering. Please go to http://domain.com to finish your registration.
`

and in **app/views/layouts/email/html/default.ctp** add:  
  

`
Dear ,
Thank you for registering. Please go to [here](http://domain.com) to finish your registration.
`

In your controller enable the email component:  
  

`
var $components = array('Email');
?>
`

Then anywhere in your controller you can do something like the following to send an email:  
  

`
$this->Email->smtpOptions = array(
'port'=>'587',
'timeout'=>'30',
'host' => 'smtp.sendgrid.net',
'username'=>'sendgrid_username',
'password'=>'sendgrid_password',
'client' => 'yourdomain.com'
);
$this->Email->delivery = 'smtp';
$this->Email->from = 'Your Name ';
$this->Email->to = 'Recipient Name ';
$this->set('name', 'Recipient Name');
$this->Email->subject = 'This is a subject';
$this->Email->template = 'registration';
$this->Email->sendAs = 'both';
$this->Email->send();
`
