---
layout: page
weight: 0
title: Deploying a SendGrid App on Engine Yard
navigation:
  show: true
---

1. [Deploying a Ruby App With SendGrid and Engine Yard](#-Deploying-a-Ruby-App-With-SendGrid-and-Engine-Yard)
2. [Deploying a PHP App With SendGrid and Engine Yard](#-Deploying-a-PHP-App-With-SendGrid-and-Engine-Yard)

{% anchor h2 %}
Deploying a Ruby App With SendGrid and Engine Yard
{% endanchor %}

{% anchor h3 %}
Create/Modify Your Code for Engine Yard
{% endanchor %}

If you are using Ruby without a framework, please utilize [these instructions]({{root_url}}/Integrate/Code_Examples/ruby.html).

For email sending only, you can [utilize Action Mailer]({{root_url}}/Integrate/Frameworks/rubyonrails.html), or for more advanced functionality, you can use this [Ruby gem](https://github.com/stephenb/sendgrid).

We have a [sample app on Github](https://github.com/sendgrid/sendgrid-engine-yard-ruby) that demonstrates sending an email via SendGrid using ActionMailer and receiving an email using our <a href="{{root_url}}/API_Reference/Webhooks/parse.html">Inbound Parse</a> webhook.

{% anchor h3 %}
Create/Configure Your Engine Yard Instance
{% endanchor %}

<ol>
<li>Create a git repository or utilize our <a href="https://github.com/sendgrid/sendgrid-engine-yard-ruby">sample app</a>.</li>
<li>Create a new Engine Yard Cloud app, making sure you choose Ruby.</li>
<li>Configure the application.
	
<p><img alt="Configure the application" src="{{root_url}}/images/engineyard_7_create_application.png" /></p>
</li>
<li>Next you will setup your Git deploy keys.</li>
<li>Now, create your app's environment. I changed the Runtime to <code>Ruby</code> and the Database stack to <code>MySQL 5.5.x</code> for use with our sample app.</li>
<li>Setup your environment and click boot this configuration.
	
<p><img alt="Setup your environment" src="{{root_url}}/images/engineyard_8_environment.png" /></p>
</li>

<li>Scroll to the bottom, and click new Add-on.
	
<p><img alt="New Add-on" src="{{root_url}}/images/engineyard_3_addon.png" /></p>

<li>Select SendGrid. If this is your first time adding SendGrid to this account, you'll need to setup SendGrid. Follow the prompts and select your plan.
<ul><li>After configuring SendGrid, you'll need to go through the process of adding a new Add-on once again, in your environment, select "New Add-on"</li></ul></li>
<li>Select SendGrid. Once on the setup page, chose the environment you wish to add SendGrid.

<p><img alt="Select an Environment to Add SendGrid" src="{{root_url}}/images/engineyard_4_environmentselect.png" /></p></li>
<li>Configure ActionMailer as follows:
{% codeblock lang:ruby %}
config.action_mailer.delivery_method = :smtp
config.action_mailer.perform_deliveries = true
config.action_mailer.raise_delivery_errors = true
config.action_mailer.smtp_settings = {
     :authentication => :plain,
     :address => "smtp.sendgrid.net",
     :port => 587,
     :domain => EY::Config.get('base', 'domain_name'),
     :user_name => EY::Config.get(:sendgrid, 'SENDGRID_USERNAME'),
     :password => EY::Config.get(:sendgrid, 'SENDGRID_PASSWORD')
}
{% endcodeblock %}
</li>
<li>Now you are ready to start sending emails from your app using SendGrid!</li>
<li>If you are implementing our <a href="https://github.com/sendgrid/sendgrid-engine-yard-ruby">sample app</a>, which receives emails, you will need to setup your <a href="{{root_url}}/API_Reference/Webhooks/parse.html">Inbound Parse settings</a>.</li>
</ol>

{% anchor h2 %}
Deploying a PHP App With SendGrid and Engine Yard
{% endanchor %}

{% anchor h3 %}
Create/Modify Your Code for Engine Yard
{% endanchor %}

<ol>
<li>Engine Yard instances come with <a href="http://getcomposer.org/">Composer</a>, a tool for PHP Package Management, preinstalled. To take advantage of this create a file <code>composer.json</code> in the root of your project with the following JSON:
{% codeblock lang:json %}
{  
  "require": {
    "sendgrid/sendgrid": "~1.0.0"
  }
}
{% endcodeblock %}</li>
<li>On deploy, Composer will create a directory <code>vendor</code> with the file 	<code>autoload.php</code> in it. Require this in any script you wish to use SendGrid (or any other Composer package):
{% codeblock lang:php %}
require 'vendor/autoload.php';
{% endcodeblock %}</li>
<li>Once you've loaded the SendGrid library, you may initialize SendGrid. Engine Yard has a handy way to use environment variables, by accessing the <code>$_SERVER</code> superglobal in PHP. Take advantage of this so as not to add your SendGrid credentials to your code:
{% codeblock lang:php %}
$sendgrid = new SendGrid($_SERVER['SENDGRID_USERNAME'], $_SERVER['SENDGRID_PASSWORD']);
{% endcodeblock %}</li>
<li>Now you may use SendGrid as you would in any other environment.
{% codeblock lang:php %}
$mail     = new SendGrid\Mail();
$mail->addTo('foo@bar.com')->
       addTo('dude@bar.com')->
       setFrom('me@bar.com')->
       setSubject('Subject goes here')->
       setText('Hello World!')->
       setHtml('<strong>Hello World!</strong>');
$sendgrid->smtp->send($mail);
{% endcodeblock %}</li>
</ol>

{% anchor h3 %}
Create/Configure Your Engine Yard Instance
{% endanchor %}

<ol>
<li>Create a new application. Confirm the language is PHP. Engine Yard requires your Git repository to be hosted elsewhere. You can deploy using <a href="http://github.com/sendgrid/sendgrid-engine-yard-php">our sample app (on GitHub)</a> or your own.

<p><img alt="Creating an Engine Yard Application" src="{{root_url}}/images/engineyard_1_create.png" /></p></li>
<li>Next, create a new environment for your application. If you're using our sample app, ensure your database is set to MySQL.

<p><img alt="MySQL" src="{{root_url}}/images/engineyard_2_database.png" /></p></li>
<li>Choose your configuration and hit "Boot"</li>
<li>In the Add-ons section of the environment, click "New Add-on"

<p><img alt="New Add-on" src="{{root_url}}/images/engineyard_3_addon.png" /></p></li>
<li>Select SendGrid. If this is your first time adding SendGrid to this account, you'll need to setup SendGrid. Follow the prompts and select your plan.
<ul><li>After configuring SendGrid, you'll need to go through the process of adding a new Add-on once again, in your environment, select "New Add-on"</li></ul></li>
<li>Select SendGrid. Once on the setup page, chose the environment you wish to add SendGrid.

<p><img alt="Select an Environment to Add SendGrid" src="{{root_url}}/images/engineyard_4_environmentselect.png" /></p></li>
<li>Once you've added SendGrid to your environment, return to the Environment's dashboard. SendGrid should now be in the Add-ons Section, take note of the Keys/Variables (they may initially be hidden).</li>
<li>Under Application Instances, find your application instance, and click SSH. This will launch your SSH client. (For this to work, you must have provided Engine Yard with your public key, _before_ booting the instance, if you have not already, provide Engine Yard with your Public Key, edit your environment to include it, and hit apply.)</li>
<li>Now you must edit your environment variables, they're stored in a shared file. To edit them: <code>nano /data/YOUR_APP_NAME/shared/config/env.custom</code> add the lines:
{% codeblock %}
env[SENDGRID_USERNAME] = YOUR_SENDGRID_USERNAME
env[SENDGRID_PASSWORD] = YOUR_SENDGRID_PASSWORD
{% endcodeblock %}</li>
Hit <code>Control-X</code>, and confirm you wish to save changes by hitting <code>Y</code>, then confirm the file name by pressing <code>Return</code>. You may now logout of the SSH session.
<li>You can now navigate to the instance via HTTP and you should be good to go.</li>
</ol>
