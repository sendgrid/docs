---
st:
 published_at: 2016-07-25
 type: [integrate]
seo:
 title: SendGrid's WordPress Plugin
 description: Learn how to send your WordPress email through SendGrid.
 keywords: WordPress, SendGrid, integrate, plugin, subscription widget
title: SendGrid's WordPress Plugin
group: plugins
weight: 100
layout: page
navigation:
 show: true
---
## 	What is the SendGrid WordPress Plugin?

SendGrid's cloud-based email infrastructure relieves businesses of the cost and complexity of maintaining custom email systems. SendGrid provides reliable deliverability, scalability, and real-time analytics along with flexible APIs that make custom integration with your application a breeze.

SendGrid’s [WordPress plugin](https://wordpress.org/plugins/sendgrid-email-delivery-simplified/) replaces WordPress’s default **wp_mail()** function by using either an SMTP or API integration with SendGrid to send outgoing email from your WordPress installation. It also allows you to upload contacts directly to your SendGrid Marketing Campaigns account via a [subscription widget]({{root_url}}/for-developers/managing-contacts/wordpress-subscription-widget/).

By using the SendGrid plugin, you will be able to take advantage of improved deliverability and an expanded feature set, including tracking and analytics, to enhance user engagement on your WordPress installation. SendGrid also provides world class customer support, should you run into any issues.

## 	Installing SendGrid’s WordPress Plugin

In order to send emails through SMTP, you first need to install the [Swift Mailer](https://wordpress.org/plugins/swift-mailer/) plugin.

To get the SendGrid plugin running after you have activated Swift Mailer, navigate to Settings and enter your SendGrid credentials. Finally, select how you want your email to be delivered: either via SMTP or API.

You can also set default values for the "Name," "Sending Address," and the "Reply Address” headers so that you don’t have to define these headers every time you want to send an email.

If you would like to use [templates]({{root_url}}/help-support/sending-email/how-to-send-email-with-dynamic-transactional-templates/), you can set the template ID to be used in all of your emails on the settings page or you can set it individually for each email in the headers.

You can have an individual email sent to each recipient by specifying the x-smtpapi-to header. For example:

```php
x-smtpapi-to: example@example.com, example2@example.com
```

<call-out>

When using the SMTP method you must also define the `To` address. It does not matter what address you set in the `To` field since it will be overwritten by `x-smtpapi-to`.

</call-out>

Emails are automatically tracked, allowing you to retrieve delivery and engagement statistics from within the SendGrid Dashboard. You can also specify certain [categories](#how-to-use-categories) for any of your emails to help you organize them by type.

## 	Configuring SendGrid’s WordPress Plugin

While it is possible to simply install and configure the SendGrid plugin for WordPress as described above to immediately begin sending your emails through SendGrid, you may take steps to further customize the SendGrid WordPress plugin.

The following explanations and examples show how you can use SendGrid to adjust WordPress’s `wp_mail()` function.

 ### 	The wp_mail() Function

The SendGrid plugin makes adjustments to the `wp_mail()` function so that all emails sent from WordPress are delivered by SendGrid.

You can send emails using the following function:

```php
wp_mail($to, $subject, $message, $headers ="", $attachments = array())
```

<table class="table">
  <tr><th>Variable</th><th>Description</th></tr>
  <tr><td><code>$to</code></td><td>An array, or comma-separated list (CSV), of email addresses to send message.</td></tr>
  <tr><td><code>$subject</code></td><td>The subject of your email.</td></tr>
  <tr><td><code>$message</code></td><td>The contents of your email.</td></tr>
  <tr><td><code>$headers</code></td><td>An optional array or SendGrid\Email() object.</td></tr>
  <tr><td><code>$attachments</code></td><td>An optional array, a comma separated list (", "), or a new line separated list ("\n") of files to attach.</td></tr>
</table>

If you want to send an email with HTML content, set the content type to 'text/html' by running the following function before `wp_mail()`:

```php
add_filter('wp_mail_content_type', 'set_html_content_type');
```

<call-out type="warning">

After you’ve run wp_mail(), you must remove the ‘text/html’ filter in order to return to your initial settings.

</call-out>

```php
remove_filter('wp_mail_content_type', 'set_html_content_type');
```

## 	Sending HTML In Your Email Using Different Headers

 ### 	Using an Array to Set Your Headers

```php
$subject = 'Test SendGrid plugin';
$message = 'testing WordPress plugin';
$to = array('address1@sendgrid.com', 'Address2 <address2@sendgrid.com>', 'address3@sendgrid.com');

$headers = array();
$headers[] = 'From: Me Myself <me@example.net>';
$headers[] = 'Cc: address4@sendgrid.com';
$headers[] = 'Bcc: address5@sendgrid.com';
$headers[] = 'unique-args:customer=mycustomer;location=mylocation';
$headers[] = 'categories: category1, category2';
$headers[] = 'template: templateID';
$headers[] = 'x-smtpapi-to: address1@sendgrid.com,address2@sendgrid.com';

$attachments = array('/tmp/img1.jpg', '/tmp/img2.jpg');

add_filter('wp_mail_content_type', 'set_html_content_type');
$mail = wp_mail($to, $subject, $message, $headers, $attachments);

remove_filter('wp_mail_content_type', 'set_html_content_type');
```

 ### 	Using SendGrid\Email() to Set Your Headers

```php
$subject = 'Test SendGrid plugin';
$message = 'testing WordPress plugin';
$to = array('address1@sendgrid.com', 'Address2 <address2@sendgrid.com>', 'address3@sendgrid.com');

$headers = new SendGrid\Email();
$headers->setFromName("John Doe")
        ->setFrom("example@example.net")
        ->setCc("example2@example.com")
        ->setBcc("example3@example.com")
        ->setUniqueArgs(array('customer' => 'mycustomer', 'location' => 'mylocation'))
        ->addCategory('category1')
        ->addCategory('category2')
        ->setTemplateId('templateID');

$attachments = array('/tmp/img1.jpg', '/tmp/img2.jpg');

add_filter('wp_mail_content_type', 'set_html_content_type');
$mail = wp_mail($to, $subject, $message, $headers, $attachments);

remove_filter('wp_mail_content_type', 'set_html_content_type');
```

## 	Substitution Tags and Sections

```php
$subject = 'Hey %name%, you work at %place%';
$message = 'testing WordPress plugin';
$to = array('address1@sendgrid.com');

$headers = new SendGrid\Email();
$headers
    ->addSmtpapiTo("john@somewhere.com")
    ->addSmtpapiTo("harry@somewhere.com")
    ->addSmtpapiTo("Bob@somewhere.com")
    ->addSubstitution("%name%", array("John", "Harry", "Bob"))
    ->addSubstitution("%place%", array("%office%", "%office%", "%home%"))
    ->addSection("%office%", "an office")
    ->addSection("%home%", "your house");

$mail = wp_mail($to, $subject, $message, $headers);
```

For more examples of how you can use SendGrid SMTPAPI headers, please visit the [SendGrid PHP Library on GitHub](https://github.com/sendgrid/sendgrid-php#smtpapi).

## 	How to Use Categories

You can use [categories]({{root_url}}/help-support/analytics-and-reporting/categories/) to help organize and track the emails sent from WordPress via the SendGrid plugin.

Categories used for emails can be set either globally, or on an email-by-email basis.

To set categories globally, thus applying a category to every email sent, simply define the value for the 'Categories' field in the 'Mail settings' section

You can also assign a specific category to an email by using the headers array. Use the following format when assigning specific categories to an email:

```php
$headers[] = 'categories: category1, category2';
```

If you would like to configure categories for statistics tracking, simply set your desired category as the value of the 'Categories' field in the 'Statistics settings' section.

## 	Multisite

If you are using the SendGrid plugin in a multisite environment, you need to enable it for use across your multisite network.

Simply navigate to **My Sites**, click on **Network Admin**, and select **Plugins**.

Here you can either enable or disable your SendGrid plugin for use across your multisite network.

Once you have enabled SendGrid for use across your multisite network, you will be able to access the settings page from the network dashboard.

You can enable access for SendGrid settings to each subsite in the Multisite Settings tab. If the checkbox is unchecked then that site will not see the SendGrid settings page and it will use the settings set on the network.

<call-out>

**Please note!** When you activate SendGrid management for a subsite, that site will not be able to send emails until the admin updates the SendGrid settings on that subsite.

</call-out>

If you have already installed the SendGrid plugin in a multisite environment and you update to any version **after** 1.9.0 you may need to re-configure your plugin.

## 	Related content
 	* [SendGrid's WordPress Subscription Widget]({{root_url}}/for-developers/managing-contacts/wordpress-subscription-widget/)
* [SendGrid's WordPress Integration FAQ]({{root_url}}/for-developers/sending-email/wordpress-faq/)
