---
comments: false
date: 2011-03-25 15:46:42
layout: page
slug: codeigniter-example-using-smtp
title: CodeIgniter Example Using SMTP
wordpress_id: 238
---

CodeIgniter already comes with an email library. For more information on how to [use CodeIgniter with SendGrid](http://codeigniter.com/user_guide/libraries/email.html), [check it out on their documentation page](http://codeigniter.com/user_guide/libraries/email.html).

**It is important to use the correct end of lines using "crlf" => "\r\n" and "newline" => "\r\n".**

`
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
$this->email->to('someone@example.com');
$this->email->cc('another@another-example.com');
$this->email->bcc('them@their-example.com');
$this->email->subject('Email Test');
$this->email->message('Testing the email class.');
$this->email->send();
echo $this->email->print_debugger();
`
