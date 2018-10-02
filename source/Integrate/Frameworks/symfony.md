---
layout: page
weight: 0
title: Symfony
seo:
  title: Send Email with Symfony & SendGrid
  description: View instructions on how to easily send email with Symfony using SendGrid, by setting up setting up or extending SwiftMailer.
navigation:
  show: true
---

Symfony uses SwiftMailer to send email. Read more about sending emails from Symfony [3.x](https://symfony.com/doc/3.4/email.html) and [4.x](https://symfony.com/doc/current/email.html).

For Symfony 3.x, to get started you need to modify config.yml and add the following: 

{% codeblock %}
swiftmailer:
transport: '%mailer_transport%'
host: smtp.sendgrid.net
username: sendgridusername
password: sendgridpassword
{% endcodeblock %}

For Symfony 4.x, you need to provide your mail server connection details by modifying the MAILER_URL environment variable in the .env file as follows:

{% codeblock %}
MAILER_URL=smtp://localhost:25?encryption=ssl&auth_mode=login&username=sendgridusername&password=sendgridpassword
{% endcodeblock %}

After that you should be able to send emails. The following shows an example:
{% codeblock lang:php %}
<?php
public function index(Swift_Mailer $mailer)
{
  $message = (new Swift_Message())
    ->setFrom('from@example.com')
    ->setTo('to@example.com')
    ->setSubject('Subject')
    ->setBody('Body');

  $mailer->send($message);
}
?>
{% endcodeblock %}

 
{% anchor h3 %}
Another Option 
{% endanchor %}
If you want more flexibility, you can use partials to define the content of the emails. Add a new class such as **lib/myEmail.class.php**. 

{% codeblock lang:php %}
<?php
class myEmail
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
        if (!sfconfig::has('app_sendgrid_username') or !sfconfig::has('app_sendgrid_password')) {
            throw new sfException('SMTP username/password is required to send email out');
        }
        $text = null;
        $html = null;
        if (is_array($partials)) {
            // load libraries
            sfContext::getInstance()->getConfiguration()->loadHelpers('Partial');
            if (isset($partials['text'])) {
                $text = get_partial($partials['text'], $parameters);
            }
            if (isset($partials['html'])) {
                $html = get_partial($partials['html'], $parameters);
            }
        }
        if ($text === null &amp;&amp; $html === null) {
            throw new sfException('A text and/or HTML partial must be given');
        }
        
        try {
            /*
             * Load connection for mailer
             */
            $connection = Swift_SmtpTransport::newInstance('smtp.sendgrid.net', 465, 'ssl')->setUsername(sfconfig::get('app_sendgrid_username'))->setPassword(sfconfig::get('app_sendgrid_password'));
            
            // setup connection/content
            $mailer  = Swift_Mailer::newInstance($connection);
            $message = Swift_Message::newInstance()->setSubject($subject)->setTo($mailTo);
            
            if ($text &amp;&amp; $html) {
                $message->setBody($html, 'text/html');
                $message->addPart($text, 'text/plain');
            } else if ($text) {
                $message->setBody($text, 'text/plain');
            } else {
                $message->setBody($html, 'text/html');
            }
            
            // if contains SMTPAPI header add it
            if (null !== $sgHeaders) {
                $message->getHeaders()->addTextHeader('X-SMTPAPI', json_encode($sgHeaders));
            }
            
            // update the from address line to include an actual name
            if (is_array($mailFrom) and count($mailFrom) == 2) {
                $mailFrom = array(
                    $mailFrom['email'] => $mailFrom['name']
                );
            }
            
            // add attachments to email
            if ($attachments !== null and is_array($attachments)) {
                foreach ($attachments as $attachment) {
                    $attach = Swift_Attachment::fromPath($attachment['file'], $attachment['mime'])->setFilename($attachment['filename']);
                    $message->attach($attach);
                }
            }
            
            // Send
            $message->setFrom($mailFrom);
            $mailer->send($message);
        }
        catch (Exception $e) {
            throw new sfException('Error sending email out - ' . $e->getMessage());
        }
    }
}
?>
{% endcodeblock %}

 Then configure your credentials on **apps/frontend/app.yml** 

{% codeblock %}
prod:
sendgrid:
username: sendgridusername
password: sendgridpassword
{% endcodeblock %}

Now can put your partials in a module such as <strong>apps/frontend/modules/mail</strong>. For example, to send a registration email in both text and HTML, we would have the following structure
{% codeblock %}
apps/
frontend/
modules/
mail/
_registrationHTML.php
_registrationTEXT.php
{% endcodeblock %}

 Add this to **apps/frontend/modules/mail/_registrationTEXT.php** 

{% codeblock lang:php %}
Dear <!--?php echo $name ?-->,
Thank you for registering. Please go to http://domain.com to finish your registration.
{% endcodeblock %}

 Add this to **apps/frontend/modules/mail/_registrationHTML.php** 

{% codeblock lang:php %}
Dear <!--?php echo $name ?-->,
Thank you for registering. Please go to <a href="http://domain.com">here</a> to finish your registration.
{% endcodeblock %}

 And send the message as follows: 

{% codeblock lang:php %}
<?php
myEmail::sendEmail(array('text'=>'mail/registrationTEXT', 'html'=>'mail/registrationHTML'), array('name'=>'Recipient Name'), 'youremail@domain.com', 'recipient@example.com', 'Registration Information');
?>
{% endcodeblock %}
