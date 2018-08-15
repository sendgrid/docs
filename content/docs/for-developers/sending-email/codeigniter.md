---
layout: page
weight: 0
group: frameworks
title: CodeIgniter
seo:
  title: Send Email with CodeIgniter & SendGrid
  description: View instructions on how to easily send email with CodeIgniter using SendGrid, by setting up setting up CodeIgniter's built in mail library.
navigation:
  show: true
---

CodeIgniter comes with an email sending library built in. See more information on how to [use CodeIgniter with SendGrid](http://ellislab.com/codeigniter/user-guide/libraries/email.html).

<call-out>

It is important to use the correct end of lines using "crlf" =\> "\\r\\n" and "newline" =\> "\\r\\n". 

</call-out>

``` php
<?php
$this->load->library('email');

$this->email->initialize(array(
  'protocol' => 'smtp',
  'smtp_host' => 'smtp.sendgrid.net',
  'smtp_user' => 'sendgridusername',
  'smtp_pass' => 'sendgridpassword',
  'smtp_port' => 587,
  'crlf' => "\r\n",
  'newline' => "\r\n"
));

$this->email->from('your@example.com', 'Your Name');
$this->email->to('someoneexampexample@example.com');
$this->email->cc('another@another-example.com');
$this->email->bcc('them@their-example.com');
$this->email->subject('Email Test');
$this->email->message('Testing the email class.');
$this->email->send();

echo $this->email->print_debugger();
?>
```