---
st:
 published_at: 2016-07-25
 type: [integrate]
seo:
 title: WordPress Subscription Widget
 description: Learn how to send your WordPress email through SendGrid.
 keywords: WordPress, SendGrid, integrate, plugin, subscription widget
title: WordPress Subscription Widget
weight: 100
layout: page
navigation:
 show: true
---

{% anchor h2 %}
What is the Subscription Widget
{% endanchor %}

SendGrid’s WordPress Subscription Widget makes it easy for people visiting your WordPress site to subscribe to your marketing emails, such as any newsletters, announcements, or promotional offers you may send. Upon signup, they’ll automatically receive an opt-in email allowing them to confirm their desire to begin receiving your emails. This confirmation constitutes “double opt-in,” a deliverability best practice.

{% anchor h2 %}
Installing the Subscription Widget
{% endanchor %}

{% anchor h3 %}
Requirements
{% endanchor %}

* PHP version 5.3.0 or later.
* To send emails through SMTP you need to install the [Swift Mailer plugin](https://wordpress.org/plugins/swift-mailer/).
* If the wp_mail() function has been declared by another plugin that you have installed, you won't be able to use the SendGrid plugin.

{% anchor h3 %}
Automatically Install the SendGrid Plugin from the WordPress Admin Page
{% endanchor %}

1. After logging into your WordPress account, navigate to **Plugins** and click **Add New**.
2. Search for "SendGrid Plugin" and click **Install Now**
3. Activate the plugin from the **Plugins** menu in WordPress or from the plugin installation screen.
4. [Create a SendGrid account](http://sendgrid.com/partner/wordpress) on the WordPress Partner's Page
5. Navigate to **Settings**, select **SendGrid Settings**, and enter your SendGrid credentials.

{% anchor h3 %}
Manually Install the SendGrid Plugin by Uploading the SendGrid Plugin .ZIP File
{% endanchor %}

1. Upload the WordPress SendGrid Plugin to the /wp-contents/plugins/ folder.
2. Activate the plugin from the **Plugins** menu in WordPress.
4. [Create a SendGrid account](http://sendgrid.com/partner/wordpress) on the WordPress Partner's Page
4. Navigate to **Settings**, select **SendGrid Settings**, and enter your SendGrid credentials.

{% anchor h2 %}
Configuring the SendGrid Subscription Widget in WordPress
{% endanchor %}

To set up the subscription widget from the WordPress interface, open the SendGrid WordPress plugin page, navigate to **Settings**, and click on the tab labeled **Subscription Widget**.

{% anchor h3 %}
Configuring Your Credentials
{% endanchor %}

To enable the Subscription Widget, you’ll first need an API key to authenticate your access to SendGrid services. If you’ve already set up the General settings for the plugin, you may choose to use the same API key by checking the “Use same authentication as transactional” option.

Alternatively, you may create a separate API key specifically for uploading contacts from the Subscription Widget. We recommend creating this API Key dedicated to your WordPress plugin with only the [minimum permissions]() necessary to perform the plugin's tasks. This is a security best practice that prevents someone who might obtain your API Key from accessing all areas of your account. For a more detailed discussion of the benefits of API Key permissions, please visit our [Classroom]().

To create a dedicated API Key for your plugin, log into your SendGrid account, navigate to **Settings** in the lefthand sidebar, and click on **API Keys**. You can learn more about API Keys and how to create them [here]({{root_url}}/User_Guide/Settings/api_keys.html).

![]({{root_url}}/images/wp_subscription_widget_1.png)

{% anchor h3 %}
Choosing Your Marketing Campaigns Recipient List
{% endanchor %}

After you set up a valid API key you must choose a specific list where your new contacts will be stored.

![]({{root_url}}/images/wp_subscription_widget_2.png)

If you don't have a list set up for your signups from the Subscription Widget, open your SendGrid Dashboard, click on **Marketing Campaigns** in the sidebar, then select **Contacts** and [create a new list]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html).

![]({{root_url}}/images/wp_subscription_widget_2_1.png)

{% anchor h3 %}
Configuring Your Subscription Widget Form
{% endanchor %}

Once you have selected the contact list to which you would like your new signups to be uploaded, simply complete the form to reflect your preferences. You can decide whether you’ll include first and last names on your signup form and whether they’ll be required. You can also craft the subject line and content of the opt-in confirmation email. Lastly, you’ll be able to customize the page your new signups see upon clicking the confirmation link within the opt-in confirmation email.

![]({{root_url}}/images/wp_subscription_widget_3.png)

You can also configure the page that will be displayed to the user by selecting it from the drop down menu on the settings page.

{% anchor h3 %}
Testing Your Subscription Widget
{% endanchor %}

Once you have configured your credentials and have selected a valid list for your new contacts, a form to test the subscription widget will appear at the bottom of the page of the Subscription Widget settings tab. You can test the subscription process by entering an email address and clicking **Test**.

![]({{root_url}}/images/wp_subscription_widget_4.png)

The opt-in confirmation email you configured for the subscription widget will be sent to the test email address with a confirmation link. After clicking the confirmation link, your email address will be uploaded to your contacts within Marketing Campaigns and you will be redirected to the confirmation page that you specified in the subscription widget settings.

![]({{root_url}}/images/wp_subscription_widget_5.png)

{% anchor h3 %}
Using Your Subscription Widget
{% endanchor %}

To display the widget on your website, navigate to the widgets page in WordPress and, using drag and drop, add it to the section of your page where you would like it to be displayed. Remember that only the "email" field is required by default, but you may include the first and last name fields.

![]({{root_url}}/images/wp_subscription_widget_6.png)

If you would like to add the “First Name” and “Last Name” fields, and require users to fill these fields when subscribing to your emails, simply navigate to the Subscription Widget tab, and select **Settings**.

You may also configure your installation of the subscription widget by defining specific SendGrid settings as global variables within the wp-config.php file. See the next section for a list of specific settings and the corresponding PHP required to add those settings to the wp-config.php file.

{% anchor h2 %}
Manually Configuring Your Subscription Widget (For Advanced Users)
{% endanchor %}

You can manually configure your subscription widget by defining your settings within the wp-config.php file. **It is important to note that the information presented below refers to the same configuration steps previously described.** There is no added functionality that comes with manually editing your wp-config.php file, it is simply an alternative method of changing the same settings.

Continue reading below for examples of what PHP should be included in your wp-config.php file to configure your subscription widget.

{% anchor h3 %}
Manually Configuring Your Credentials In wp-config.php (Advanced)
{% endanchor %}

You can use an API key to authenticate when integrating with the SendGrid WordPress Subscription Widget

If you are using your login credentials, both your username and password will need to be set in order to retrieve credentials from variables and not from the database.

You must set the Mail Send permissions to FULL ACCESS, Stats to READ ACCESS and Template Engine to READ or FULL ACCESS when creating the API Key, so you can send emails and see statistics on wordpress. For more information about API Key Permissions, click [here]({{root_url}}/Classroom/Basics/API/api_key_permissions.html).

{% anchor h4 %}
Credentials Settings for the SendGrid WordPress Subscription Widget
{% endanchor %}

<table class="table">
  <tr><td>Authentication Method</td><td><code>define('SENDGRID_AUTH_METHOD', 'apikey');</code></td></tr>
  <tr><td>API Key</td><td><code>define('SENDGRID_API_KEY', 'sendgrid_api_key');</code></td></tr>
</table>

{% anchor h3 %}
Manually Configuring Your Email Settings (Advanced)
{% endanchor %}

{% anchor h4 %}
Email Settings for the SendGrid WordPress Subscription Widget
{% endanchor %}

<table class="table">
  <tr><td>Send method ('api' or 'smtp')</td><td><code>define('SENDGRID_SEND_METHOD', 'api');</code></td></tr>
  <tr><td>From name</td><td><code>define('SENDGRID_FROM_NAME', 'Example Name');</code></td></tr>
  <tr><td>From email</td><td><code>define('SENDGRID_FROM_EMAIL', 'from_email@example.com');</code></td></tr>
  <tr><td>Reply to email</td><td><code>define('SENDGRID_REPLY_TO', 'reply_to@example.com');</code></td></tr>
  <tr><td>Categories</td><td><code>define('SENDGRID_CATEGORIES', 'category_1,category_2');</code></td></tr>
  <tr><td>Template</td><td><code>define('SENDGRID_TEMPLATE', 'templateID');</code></td></tr>
  <tr><td>Content-type</td><td><code>define('SENDGRID_CONTENT_TYPE', 'html');</code></td></tr>
</table>

{% anchor h3 %}
Manually Configuring Your Widget Settings (Advanced)
{% endanchor %}

{% anchor h4 %}
Widget Settings
{% endanchor %}

<table class="table">
  <tr><td>Marketing Campaigns API Keys</td><td><code>define('SENDGRID_MC_API_KEY', 'sendgrid_mc_api_key');</code></td></tr>
  <tr><td>Use the same authentication as for sending emails ('true' or 'false')</td><td><code>define('SENDGRID_MC_OPT_USE_TRANSACTIONAL', 'false');</code></td></tr>
  <tr><td>Contact list ID</td><td><code>define('SENDGRID_MC_LIST_ID', 'listID');</code></td></tr>
  <tr><td>Display the first and last name fields ('true' or 'false')</td><td><code>define('SENDGRID_MC_OPT_INCL_FNAME_LNAME', 'true');</code></td></tr>
  <tr><td>First and last name fields are required ('true' or 'false')</td><td><code>define('SENDGRID_MC_OPT_REQ_FNAME_LNAME', 'true');</code></td></tr>
  <tr><td>Signup confirmation email subject</td><td><code>define('SENDGRID_MC_SIGNUP_EMAIL_SUBJECT', 'Confirm subscription');</code></td></tr>
  <tr><td>Signup confirmation email content</td><td><code>define('SENDGRID_MC_SIGNUP_EMAIL_CONTENT', '&lta href="%confirmation_link%"&gtclick here&lt/a&gt');</code></td></tr>
  <tr><td>Signup confirmation page ID</td><td><code>define('SENDGRID_MC_SIGNUP_CONFIRMATION_PAGE', 'page_id');</code></td></tr>
</table>

{% anchor h2 %}
Related Content
{% endanchor %}

* [SendGrid's WordPress Plugin]({{root_url}}/Integrate/Tutorials/WordPress/sendgrid_wordpress_plugin.html)
* [SendGrid's WordPress Integratino FAQ]({{root_url}}/Integrate/Tutorials/WordPress/wordpress_integration_faq.html)
