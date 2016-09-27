---
st:
 published_at: 2016-07-25
 type: [integrate]
seo:
 title: FAQ
 description: Learn how to send your WordPress email through SendGrid.
 keywords: WordPress, SendGrid, integrate, plugin, subscription widget
title: FAQ
weight: 100
layout: page
navigation:
 show: true
---

* [What credentials do I need to add on the settings page?](#-What-credentials-do-I-need-to-add-on-the-settings-page)
* [How can I define a plugin setting to be used for all sites?](#-How-can-I-define-a-plugin-setting-to-be-used-for-all-sites)
* [How do I use SendGrid with the WP Better Emails plugin?](#-How-do-I-use-SendGrid-with-the-WP-Better-Emails-plugin)
* [Why are my emails sent as HTML instead of plain text?](#-Why-are-my-emails-sent-as-HTML-instead-of-plain-text)
* [Will contacts from the widget be uploaded to Marketing Campaigns or Legacy Newsletter?](#-Will-contacts-from-the-widget-be-uploaded-to-Marketing-Campaigns-or-Legacy-Newsletter)
* [What permissions should my API keys have?](#-What-permissions-should-my-API-keys-have)
* [Can I disable the opt-in email?](#-Can-I-disable-the-optin-email)
* [Can I change the content of the emails before they are sent?](#-Can-I-change-the-content-of-the-emails-before-they-are-sent)
* [Can the SendGrid Plugin be used on a multisite network?](#-Can-the-SendGrid-Plugin-be-used-on-a-multisite-network)

{% anchor h2 %}
What credentials do I need to add on the settings page?
{% endanchor %}

If you do not already have one, simply [create a SendGrid account](https://sendgrid.com/partner/wordpress) and [generate a new API Key](https://app.sendgrid.com/settings/api_keys).

{% anchor h2 %}
How can I define a plugin setting to be used for all sites?
{% endanchor %}

To define a plugin setting that you want to use on all of your WordPress sites, simply add it into your wp-config.php file. For example, the following API Key setting would be applicable across each of your WordPress sites:

{% codeblock lang:php %}
define('SENDGRID_API_KEY', 'your_api_key');
{% endcodeblock %}

{% anchor h2 %}
How do I use SendGrid with the WP Better Emails plugin?
{% endanchor %}

If you have the [WP Better Emails plugin](https://wordpress.org/plugins/wp-better-emails/) installed and you want to use the template defined here instead of the SendGrid template, you can add the following code in your functions.php file from your theme:

{% codeblock lang:php %}
function use_wpbe_template( $message, $content_type ) {   
    global $wp_better_emails;
    if ( 'text/plain' == $content_type ) {
      $message = $wp_better_emails->process_email_text( $message );
    } else {
      $message = $wp_better_emails->process_email_html( $message );
    }

    return $message;
}

add_filter( 'sendgrid_override_template', 'use_wpbe_template', 10, 2 );
{% endcodeblock %}

Using the default templates from WP Better Emails will cause all emails to be sent as HTML (i.e.  content-type of text/html). In order to send emails as plain text (i.e. a content-type of text/plain) you should remove the HTML Template from WP Better Emails settings page. This is can be done by removing the `%content%` tag from the HTML template.

{% anchor h2 %}
Why are my emails sent as HTML instead of plain text?
{% endanchor %}

For a detailed explanation of why your emails might be converted to HTML instead of plain text, please see this [helpful article in our Classroom]({{root_url}}/Classroom/Build/Format_Content/plain_text_emails_converted_to_html.html).

{% anchor h2 %}
Will contacts from the widget be uploaded to Marketing Campaigns or Legacy Newsletter?
{% endanchor %}

The contacts will only be uploaded to Marketing Campaigns.

{% anchor h2 %}
What permissions should my API keys have?
{% endanchor %}

The API Key used to authenticate sending email that you entered on the General tab should have **Full Access** to **Mail Send** and **Read Access** to **Stats**.

The API Key used when uploading contacts that you entered on the Subscription Widget tab should have **Full Access** to **Marketings Campaigns**.

{% anchor h2 %}
Can I disable the opt-in email?
{% endanchor %}

No. SendGrid’s Email Policy requires that all email addresses sent to by SendGrid customers be confirmed via an opt-in email. In other words, every recipient of an email sent via SendGrid must actively confirm their desire to receive that email by means of an opt-in confirmation.

{% anchor h2 %}
Can I change the content of the emails before they are sent?
{% endanchor %}

Yes, you can change the content by adding a filter. You need to declare a function that takes the content of the email as an argument and then call `add_filter()` with the name "sendgrid_mail_text" or "sendgrid_mail_html", depending on what part of the email you want to change.

If you want to change the _text content_ of all emails before they are delivered, add the following to the functions.php file of your WordPress installation.

{% codeblock lang:php %}
function change_sendgrid_text_email( $message ) {
    return $message . ' changed by way of text filter ';
}

add_filter( 'sendgrid_mail_text', 'change_sendgrid_text_email' );
{% endcodeblock %}

If you want to change the _HTML content_ of all emails before they are delivered, simply add the following to the **functions.php** file of your WordPress installation.

{% codeblock lang:php %}
function change_sendgrid_html_email( $message ) {
    return $message . ' changed by way of html filter ';
}

add_filter( 'sendgrid_mail_html', 'change_sendgrid_html_email' );
{% endcodeblock %}

{% info %}
**Please note:** what is changed in your emails depends on the content-type that you have set in the settings page or overwritten in a filter.

For "text/plain," only the text part is overwritten by the filter. For "text/html," both the text and the HTML filters are called.
{% endinfo %}

The code snippets above are usually added in the functions.php file of your theme.

{% anchor h2 %}
Can the SendGrid Plugin be used on a multisite network?
{% endanchor %}

Yes. This plugin has basic multisite network support.

To use the SendGrid plugin on your multisite network, navigate to your WordPress dashboard and click **My Sites**, select **Network Admin**, and click on **Plugins**. Under the SendGrid WordPress plugin, click **Network Enable**.

The settings for all sites in the network can only be configured by the network admin in the Network Admin dashboard.

{% info %}
**Please note:** you may not specify different plugin settings for each site in your network. The same settings will be used across your entire multisite network.
{% endinfo %}

{% anchor h2 %}
Related Content
{% endanchor %}

* [SendGrid’s WordPress Plugin]({{root_url}}/Integrate/Tutorials/WordPress/sendgrid_wordpress_plugin.html)
* [SendGrid’s WordPress Subscription Widget]({{root_url}}/Integrate/Tutorials/WordPress/subscription_widget.html)
