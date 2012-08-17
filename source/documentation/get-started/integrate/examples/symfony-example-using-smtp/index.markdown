---
comments: false
date: 2011-03-25 15:44:48
layout: page
slug: symfony-example-using-smtp
title: Symfony Example Using SMTP
wordpress_id: 231
---

Symfony uses SwiftMailer to send email, the [details of which you can find on the Symfony site](http://www.symfony-project.org/gentle-introduction/1_4/en/11-Emails).

To get started you need to modify factories.yml and add the following:
`
mailer:
class: sfMailer
param:
logging: %SF_LOGGING_ENABLED%
charset: %SF_CHARSET%
delivery_strategy: realtime
transport:
class: Swift_SmtpTransport
param:
host: smtp.sendgrid.net
port: 587
encryption: ~
username: sendgridusername
password: sendgridpassword
`

After that you should be able to send emails. The following shows an example:
`
$message = Swift_Message::newInstance()
->setFrom('from@example.com')
->setTo('to@example.com')
->setSubject('Subject')
->setBody('Body');
$this->getMailer()->send($message);
`


### Another Option


If you want more flexibility, we've created a class that allows you to use partials to define the content of the emails. To do so please add the create a class on **lib/myEmail.class.php**.

`
`

`class myEmail
{
/**
* Library to facilitate email messages being sent out, sendMail deprecated in symfony 1.2
*
* @param string $partial - Array with html and text partials ie array('text'=>'textPartial', 'html'=>'htmlPartial')
* @param array $parameters - Array we will pass into the partials
* @param string $mailFrom - Email source
* @param string $mailTo - Email destination
* @param string $subject - The subject of the email message
* @param array $sgHeaders - What we will be placing in the SMTPAPI header. Must be null or a non-empty array
* @param array $attachments - Email contains the attachments
*/
public static function sendEmail($partials, $parameters, $mailFrom, $mailTo, $subject, $sgHeaders = null, $attachments = null)
{
// verify we have username/password to send out emails - IMPORTANT
if (!sfconfig::has('app_sendgrid_username') or !sfconfig::has('app_sendgrid_password'))
{
throw new sfException('SMTP username/password is required to send email out');
}
$text = null;
$html = null;
if (is_array($partials))
{
// load libraries
sfContext::getInstance()->getConfiguration()->loadHelpers('Partial');
if (isset($partials['text']))
{
$text = get_partial($partials['text'], $parameters);
}
if (isset($partials['html']))
{
$html = get_partial($partials['html'], $parameters);
}
}
if ($text === null && $html === null)
{
throw new sfException('A text and/or HTML partial must be given');
}

try
{
/*
* Load connection for mailer
*/
$connection = Swift_SmtpTransport::newInstance('smtp.sendgrid.net', 465, 'ssl')
->setUsername(sfconfig::get('app_sendgrid_username'))
->setPassword(sfconfig::get('app_sendgrid_password'));

// setup connection/content
$mailer = Swift_Mailer::newInstance($connection);
$message = Swift_Message::newInstance()->setSubject($subject)->setTo($mailTo);

if ($text && $html)
{
$message->setBody($html, 'text/html');
$message->addPart($text, 'text/plain');
}
else if ($text)
{
$message->setBody($text, 'text/plain');
}
else
{
$message->setBody($html, 'text/html');
}

// if contains SMTPAPI header add it
if (null !== $sgHeaders)
{
$message->getHeaders()->addTextHeader('X-SMTPAPI', json_encode($sgHeaders));
}

// update the from address line to include an actual name
if (is_array($mailFrom) and count($mailFrom) == 2)
{
$mailFrom = array($mailFrom['email'] => $mailFrom['name']);
}

// add attachments to email
if ($attachments !== null and is_array($attachments))
{
foreach ($attachments as $attachment)
{
$attach = Swift_Attachment::fromPath($attachment['file'], $attachment['mime'])->setFilename($attachment['filename']);
$message->attach($attach);
}
}

// Send
$message->setFrom($mailFrom);
$mailer->send($message);
}
catch (Exception $e)
{
throw new sfException('Error sending email out - ' . $e->getMessage());
}
}
}
`

Then configure your credentials on **apps/frontend/app.yml**
`
prod:
sendgrid:
username: sendgridusername
password: sendgridpassword
`

Now can put your partials in a module such as **apps/frontend/modules/mail**. For example, to send a registration email in both text and HTML, we would have the following structure
`
apps/
frontend/
modules/
mail/
_registrationHTML.php
_registrationTEXT.php
`

Add this to **apps/frontend/modules/mail/_registrationTEXT.php**
`
Dear ,
Thank you for registering. Please go to http://domain.com to finish your registration.
`

Add this to **apps/frontend/modules/mail/_registrationHTML.php**
`
Dear ,
Thank you for registering. Please go to [here](http://domain.com) to finish your registration.
`

You are not ready to send the registration email you can do it as follows
`
myEmail::sendEmail(array('text'=>'mail/registrationTEXT', 'html'=>'mail/registrationHTML'), array('name'=>'Recipient Name'), 'youremail@domain.com', 'recipient@example.com', 'Registration Information');
`
