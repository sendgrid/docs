---
title: Create and Edit Templates
seo:
  title: Create and Edit Templates
weight: 10
layout: page
navigation:
  show: true
---

Creating email templates involves a mix of content writing, HTML, and CSS expertise. Email templates should look good on different email clients and be responsive for mobile devices. Many non-technical customers will hire a front end or email template developer to build their templates. We also suggest testing your templates with rendering applications like [Litmus](http://litmus.com) before sending them to your customers.

{% info %}
There is currently a limit of 300 templates and 300 versions that may be created per account.
{% endinfo %}

{% info %}
Transactional templates are account and subuser specific. Templates created on a parent account will not be accessible from the subuser accounts.
{% endinfo %}

{% anchor h2 %}
Create a Template
{% endanchor %}

When you first visit the transactional templates page, you will be asked to create your first template.

<a href="{{site.app_url}}/templates/new">![](/images/templates_create_edit_1.png "Add a Template")</a>

Click “Create Template” and you’ll be asked to add a Template Name.

![](/images/templates_create_edit_2.png "Template Name")

When you hit save, your new template group will be created.

![](/images/templates_create_edit_3.png "Template Group")

You can then open the actions dropdown menu to create a new version.

![](/images/templates_create_edit_4.png "Create Template Version")

When you click Add Version, you will be taken to the editor.  From here, you can change the subject and the body of your email template.

The easiest way to get started with a new template is to use one of your previous email templates or a free template from the internet, and then modify it to fit your needs.

{% anchor h2 %}
Editing Your HTML Template
{% endanchor %}

{% info %}
Email templates are table-based HTML with inline or header styles, because some well-known email applications will only read table-based HTML.
{% endinfo %}

To add a template, open a new template in the Code Editor. Copy and paste your HTML code into the dark-background code editor.

If you paste in an email template, it is likely that you will overwrite the default and very basic email HTML that is provided in the code editor.

When you’re done editing, hit the save button to keep all your changes. Please double check that the content is formatted correctly before you send an email using this template.

{% info %}
You can also use the Design Editor to create and edit templates.
{% endinfo %}

{% anchor h2 %}
Preview and Test Your Template
{% endanchor %}

We suggest that when you’re done making changes to your template, you preview and test it to ensure that the format and layout look the way you expect. We recommend that you always test your template before activating it.

<div class="row">

  <div class="clearfix col-md-6">  
    When you select the “Preview” option, a sidebar window will pop out with a preview of the email that you’re going to test, with the option to view the template formatted for both mobile and desktop platforms.
    <br>
    <br>
    You may send a test email using your new template from this window.
  </div>
  <div class="col-md-6">
    <img src="{{root_url}}/images/template_engine_12.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

![](/images/templates_create_edit_8.png "Preview and Test")

If you click the Send Test button, you will be given the option of specifying the recipient, and subject line, of your test email.

![](/images/templates_create_edit_9.png "Send Test")

Your substitution tags will not be replaced in this test, but you will be able to confirm the layout and format of your template.

{% anchor h2 %}
Activate Your Template
{% endanchor %}

<div class="row">

  <div class="clearfix col-md-6">  
  A template can only have one active version at a time. If you’ve created a new version with different HTML that you want your customers to start receiving, you’ll need to make that Version “Active.”
  <br>
  <br>
  Select the “Make Active” option from the gear icon menu.
  </div>
  <div class="col-md-6">
    <img src="{{root_url}}/images/template_make_active.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

{% anchor h2 %}
Duplicate a Template
{% endanchor %}

<div class="row">

  <div class="col-md-6">
    <img src="{{root_url}}/images/templates_duplicate_version.png" class="img-responsive pull-left"/>
  </div>

  <div class="clearfix col-md-6">  
  When you’re ready to create a new version of your template, you can select the “Duplicate” option from the gear icon menu near the save button.
  <br>
  <br>
  This creates a clone, giving it a name including the original version name, the word “clone,” and today’s date. This duplicate version will not be active until you activate it.
  </div>

<br>
</div>

{% anchor h2 %}
Unsubscribe Substitution Tags
{% endanchor %}

You can use [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html) to add links to your email to allow recipients to unsubscribe from only these emails, from all of your emails, and to manage their unsubscribe settings for your emails.

{% warning %}
When using the group unsubscribe substitution tag, you must specify which unsubscribe group you would like to use. If you are sending your email via our SMTP API, please add the group ID into the X-SMTPAPI header. If you are sending via our Web API, please enter the group ID into the x-smtpapi parameter of the mail.send API call.

You must also specify which unsubscribe groups to include on the Manage Preference page if you are using the Manage Email Preferences substitution tag. For more detailed information, please visit our [API Reference]({{root_url}}/API_Reference/SMTP_API/suppressions.html).
{% endwarning %}

{% info %}
You can find your group IDs by looking at the Group ID column in the [Unsubscribe Groups UI]({{site.app_url}}/suppressions/advanced_suppression_manager), or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html#-GET) of the groups resource.
{% endinfo %}

{% anchor h3 %}
Unsubscribe From This List
{% endanchor %}

When you add the ```<%asm_group_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From This List," wherever the tag is found in your email. This link will allow your recipients to unsubscribe from the [unsubscribe group]({{root_url}}/User_Guide/Suppressions/group_unsubscribes.html) that you attached to this email.

{% anchor h3 %}
Unsubscribe From All Emails
{% endanchor %}

When you add the ```<%asm_global_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From All Emails," wherever the tag is found in your email. This will allow your recipient to be [globally unsubscribed]({{root_url}}/User_Guide/Suppressions/global_unsubscribes.html) from all of your emails.

{% anchor h3 %}
Manage Email Preferences
{% endanchor %}

When you add the ```<%asm_preferences_url%>``` tag to your email, we will replace that tag with the text "Manage Email Preferences," wherever the tag is found in your email. This will allow your recipients to see your Unsubscribe Groups in a [Subscription Preference page]({{root_url}}/User_Guide/Suppressions/recipient_subscription_preferences.html) and then choose which groups they are interested in.
