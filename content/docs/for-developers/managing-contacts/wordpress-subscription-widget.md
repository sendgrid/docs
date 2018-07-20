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

* PHP version >= 5.6 and <= 7.1. Installing this plugin on PHP versions 5.3 and earlier will cause your website to break. Installation on PHP versions 5.4 and 5.5 will work but it is not recommended.
* To send emails through SMTP you need to install the [Swift Mailer plugin](https://wordpress.org/plugins/swift-mailer/).
* If the `wp_mail()` function has been declared by another plugin that you have installed, you won't be able to use the SendGrid plugin.

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

1. Upload the WordPress SendGrid Plugin to the **/wp-contents/plugins/** folder.
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

Alternatively, you may create a separate API key specifically for uploading contacts from the Subscription Widget. We recommend creating this API Key dedicated to your WordPress plugin with only the [minimum permissions]({{root_url}}/for-developers/sending-email/wordpress-faq.html) necessary to perform the plugin's tasks. This is a security best practice that prevents someone who might obtain your API Key from accessing all areas of your account. For a more detailed discussion of the benefits of API Key permissions, please see our documentation on [API Keys]({{root_url}}/help-support/account-and-settings/api-keys.html).

To create a dedicated API Key for your plugin, log into your SendGrid account, navigate to **Settings** in the lefthand sidebar, and click on **API Keys**. You can learn more about API Keys and how to create them [here]({{root_url}}/help-support/account-and-settings/api-keys.html).

![]({{root_url}}/images/wp_subscription_widget_1.png)

{% anchor h3 %}
Choosing Your Marketing Campaigns Recipient List
{% endanchor %}

After you set up a valid API key you must choose a specific list where your new contacts will be stored.

![]({{root_url}}/images/wp_subscription_widget_2.png)

If you don't have a list set up for your signups from the Subscription Widget, open your SendGrid Dashboard, click on **Marketing Campaigns** in the sidebar, then select **Contacts** and [create a new list]({{root_url}}/help-support/managing-contacts/segmenting-your-contacts.html).

![]({{root_url}}/images/wp_subscription_widget_2_1.png)

{% anchor h3 %}
Configuring Your Subscription Widget Form
{% endanchor %}

Once you have selected the contact list to which you would like your new signups to be uploaded, simply complete the form to reflect your preferences. You can decide whether you’ll include first and last names on your signup form and whether they’ll be required. You can also craft the subject line and content of the opt-in confirmation email. Lastly, you’ll be able to choose the page your new signups see upon clicking the confirmation link within the opt-in confirmation email.

<call-out>

Note: The default text [my site name] is **not** a substitution tag. You should replace the text within the "Signup email subject" field with your entire desired subject text.

</call-out>

![]({{root_url}}/images/wp_subscription_widget_3.png)

When writing the content for your signup confirmation email, you can choose between either HTML or Plain Text.

![]({{root_url}}/images/signup_email_html_text.png)

Finally, select the WordPress page that will be displayed to the user by selecting it from the drop down menu on the settings page.

{% anchor h3 %}
Configuring Your Subscription Opt-In Confirmation Page
{% endanchor %}

If you would like to create your own custom opt-in confirmation page, simply create a static WordPress page as you would for any other area of your site (for example, your "About" or "Contact" page).

![]({{root_url}}/images/wp_plugin_confirmation_page.png)

You may use the following substitution tags when building your confirmation page:

* **[sendgridSubscriptionFirstName]** - the first name of your new subscriber
* **[sendgridSubscriptionLastName]** - the last name of your new subscriber
* **[sendgridSubscriptionEmail]** - the email address for your new subscriber

Once you have created and saved this new page, it will appear in the dropdown menu alongside the "Default Confirmation Page" option.

![]({{root_url}}/images/sign_up_confirmation_page_option.png)

For more information on how to create a new WordPress page, please visit the [WordPress documentation](https://codex.wordpress.org/Pages).

{% anchor h3 %}
Form Customization
{% endanchor %}

If you want to customize your subscription form, you can do so from the settings page. You can set labels for the "First Name", "Last Name", and "Email" fields in addition to the "Subscribe" button.

You can also adjust the padding surrounding the input fields and buttons.

![]({{root_url}}/images/form_customization.png)

If you want additional or advanced configuration options (for example, CSS styles), you can use the following .css classes:

* `sendgrid_mc_label` for the labels
* `sendgrid_mc_input` for the input fields
* `sendgrid_mc_button` for the subscribe button

For example, if you want your form to look like the following:

![]({{root_url}}/images/example_form.png)

You would need to add the following to your .css file:

```css
.sendgrid_mc_label{
  color: #ff0000;
}
.sendgrid_mc_input {
  border: 3px solid #000000 !important;
}
.sendgrid_mc_button {
  background-color: #0000ff !important;
}
```

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

![]({{root_url}}/images/wp_sub_widget_example.png)

You may also configure your installation of the subscription widget by defining specific SendGrid settings as global variables within the wp-config.php file. See the next section for a list of specific settings and the corresponding PHP required to add those settings to the wp-config.php file.

{% anchor h2 %}
Manually Configuring Your Subscription Widget (Advanced)
{% endanchor %}

You can manually configure your subscription widget by defining your settings within the wp-config.php file. **It is important to note that the information presented below refers to the same configuration steps previously described.** There is no added functionality that comes with manually editing your wp-config.php file, it is simply an alternative method of changing the same settings.

Continue reading below for examples of what PHP should be included in your wp-config.php file to configure your subscription widget.

{% anchor h3 %}
Manually Configuring Your Credentials In wp-config.php (Advanced)
{% endanchor %}

You can use an API key to authenticate when integrating with the SendGrid WordPress Subscription Widget

If you are using your login credentials, both your username and password will need to be set in order to retrieve credentials from variables and not from the database.

You must set the Mail Send permissions to FULL ACCESS, Stats to READ ACCESS and Template Engine to READ or FULL ACCESS when creating the API Key, so you can send emails and see statistics on wordpress. For more information about API Key Permissions, click [here]({{root_url}}/help-support/account-and-settings/api-keys.html).

{% anchor h4 %}
Credentials Settings for the SendGrid WordPress Subscription Widget
{% endanchor %}

- **API Key**: `define('SENDGRID_API_KEY', 'sendgrid_api_key');`

  Your SendGrid API Key.

{% anchor h3 %}
Manually Configuring Your Email Settings (Advanced)
{% endanchor %}

{% anchor h4 %}
Email Settings for the SendGrid WordPress Subscription Widget
{% endanchor %}

- **Send Method**: `define('SENDGRID_SEND_METHOD', 'api');`

  The method used to deliver email. Can be either SMTP or the Web API. SMTP can only be used if the Swift Mailer plugin is installed.
*****
- **From name**: `define('SENDGRID_FROM_NAME', 'Example Name');`

  The name of the sender.
*****
- **From email**: `define('SENDGRID_FROM_EMAIL', 'from_email@example.com');`

  The email address of the sender.
*****
- **Reply to email**: `define('SENDGRID_REPLY_TO', 'reply_to@example.com');`

  The email address that will populate the "reply to" field when recipients click the "reply" button.
*****
- **Categories**: `define('SENDGRID_CATEGORIES', 'category_1,category_2');`

  Any [categories]({{root_url}}/help-support/analytics-and-reporting/categories.html) that you would like to tag your WordPress emails with.
*****
- **Template**: `define('SENDGRID_TEMPLATE', 'templateID');`

  The template that you would like to apply to your WordPress emails.
*****
- **Content**: `define('SENDGRID_CONTENT_TYPE', 'html');`

  Denotes the type of data included in your email. Can be "plaintext" or "html".

{% anchor h3 %}
Manually Configuring Your Widget Settings (Advanced)
{% endanchor %}

{% anchor h4 %}
Widget Settings
{% endanchor %}

- **Marketing Campaigns API Keys**: `define('SENDGRID_MC_API_KEY', 'sendgrid_mc_api_key');`

  Your API Key generated to authenticate use of the Marketing Campaigns API.
*****
- **Use the same authentication as for sending emails ('true' or 'false':)**: `define('SENDGRID_MC_OPT_USE_TRANSACTIONAL', 'false');`

  Indicates if your API Key used to authenticate sending emails should also be used when adding new contacts via the subscription widget.
*****
- **Contact list ID**: `define('SENDGRID_MC_LIST_ID', 'listID');`

  The ID of the contact list that you would like your new subscribers to be added to.

  To find your list ID, navigate to **Marketing Campaigns**, then click **Contacts**. Click on the list you would like to use. When viewing the list, the last 6 digits of the URL make up the list ID.
*****
- **Display the first and last name fields ('true' or 'false')**: `define('SENDGRID_MC_OPT_INCL_FNAME_LNAME', 'true');`

  Indicates if you want to display fields for your subscribers to enter both their first and last names on the subscription form.
****
- **First and last name fields are required ('true' or 'false')**: `define('SENDGRID_MC_OPT_REQ_FNAME_LNAME', 'true');`

  Indicates if you want to require your subscribers to submit both their first and last names on the subscription form.
*****
- **Signup confirmation email subject**: `define('SENDGRID_MC_SIGNUP_EMAIL_SUBJECT', 'Confirm subscription');`

  The subject line of your signup confirmation emails.
*****
- **Signup confirmation email content**: `define('SENDGRID_MC_SIGNUP_EMAIL_CONTENT', '&lta href="%confirmation_link%"&gtclick here&lt/a&gt');`

  The content of the body of your signup confirmation email.
*****
- **Signup confirmation page ID**: `define('SENDGRID_MC_SIGNUP_CONFIRMATION_PAGE', 'page_id');`

  The WordPress page ID of the page you would like to link users to when confirming their subscription.

  To find your page ID, log into your WordPress account and click **Pages** in the left hand nav of your dashboard. Select your confirmation page. In the URL you will see the text "post=XX" where XX represents your page ID.
*****
- **First Name Label**: `define('SENDGRID_MC_FIRST_NAME_LABEL', 'First Name');`

  First Name Label
*****
- **Last Name Label**: `define('SENDGRID_MC_LAST_NAME_LABEL', 'Last Name');`

  Last Name Label
*****
- **Email Label**: `define('SENDGRID_MC_EMAIL_LABEL', ‘Email’);`

  Email Label
*****
- **Subscribe Label**: `define('SENDGRID_MC_SUBSCRIBE_LABEL', 'Subscribe');`

  Subscribe Button Label

{% anchor h2 %}
Related Content
{% endanchor %}

* [SendGrid's WordPress Plugin]({{root_url}}/for-developers/sending-email/wordpress-plugin.html)
* [SendGrid's WordPress Integration FAQ]({{root_url}}/for-developers/sending-email/wordpress-faq.html)
