---
title: Create and Edit Transactional Templates
seo:
  title: Create and Edit Templates
  description: Transactional email templates are pre-coded email layouts that anyone can use to easily create and send transactional emails.
  keywords: transactional email templates, email template, create templates
weight: 80
layout: page
navigation:
  show: true
---

- [Creating a template](#-Create-a-template)
- [Editing your HTML template](#-Editing-your-HTML-template)
- [Preview and test your template](#-Preview-and-test-your-template)
- [Managing templates](#-Managing-templates)
  - [Activate your template](#-Activate-your-template)
  - [Duplicate a template](#-Duplicate-a-template)
- [Adding unsubscribe links to a template](#-Adding-unsubscribe-links-to-a-template)

Creating email templates involves a mix of content writing, HTML, and CSS expertise. Email templates should look good on different email clients and be responsive for mobile devices. Many non-technical customers will hire a front-end or email template developer to build their templates. We also suggest testing your templates with rendering applications like [Litmus](http://litmus.com) before sending them to your customers.

{% info %}
The maximum number of transactional templates and versions per user ID is limited to 300. This means you can have 300 templates with 1 version each, or fewer templates with more versions of each template. 
{% endinfo %}

{% info %}
Transactional templates are account and subuser specific. Templates created on a parent account will not be accessible from the subuser accounts.
{% endinfo %}

{% anchor h2 %}
Creating a template
{% endanchor h2 %}

1. Open the transactional templates page and then click **Create Template**.
1. Add a unique template name in the dialogue box and then click **Save**. 
1. Open the **Actions** drop-down menu to create a new version.
1. Click **Add Version**. 
<br></br>The editor opens. From here, you can change the subject and the body of your email template.

The easiest way to get started with a new template is to use one of your previous email templates or a free template from the internet, and then modify it to fit your needs.

{% anchor h2 %}
Editing your HTML template
{% endanchor h2 %}

{% info %}
Email templates are table-based HTML with inline or header styles, because some well known email applications will only read table-based HTML.
{% endinfo %}

*To add a template:*

1. Open a new template in the Code Editor or [Design Editor]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html) by clicking **Actions** and selecting **New Version**. 

1. If you selected the Code Editor, copy and paste your HTML code into the code editor. 
<br></br>If you paste in an email template, it is likely that you will overwrite the default basic HTML provided in the code editor. If you selected the Design Editor, use the WYSIWYG editor with drag & drop modules to create your email template. 

1. When you’re done editing, click **Save**. <br></br>Please double check that the content is formatted correctly before you send an email using this template.

{% anchor h2 %}
Preview and test your template
{% endanchor h2 %}

SendGrid suggests previewing and testing your template once you have created it to ensure that the format and layout look the way you expect.

*To preview your template:*
 
1. Select **Preview**.  <br></br>A window pops out with a preview of the email that you’re going to test, with the option to view the template formatted for both mobile and desktop platforms.

1. Click **Send Test** to send a test email using your new template. 
1. Fill in the *recipient* and *subject line* fields and then click **Send**.  

Any Substitution tags will not be populated in this test, but you will be able to confirm the layout and format of your template.

{% anchor h2 %}
Managing templates
{% endanchor %}

From the main template view on each template group, you will see an actions menu. From this menu, you can choose to edit the name of your template, add a version, preview and test, or delete the template. You will also see a gear icon for each template version. Clicking this presents a menu that allows you to preview and test, edit, duplicate, and delete the template version. You can also use the preview function to send a test.

{% info %}
To delete a template, you must first delete all the versions of your template.
{% endinfo %}

{% anchor h3 %}
Activate your template
{% endanchor h2 %}

*To activate your template:*

1. Navigate to the template you wish to use and select the action menu.
1. Select **Make Active**.  

{% info %}
A template can only have one active version at a time. If you’ve created a new version with different HTML that you want your customers to start receiving, you’ll need to make that version “Active.”
{% endinfo %}

{% anchor h3 %}
Duplicate a Template
{% endanchor h2 %}

*To duplicate a template:*

1. Navigate to the template you wish to use and select the action menu.
1. Select **Add Version**.  

The app creates a clone, giving it a name that starts with "untitled". You can give the template a unique name by selecting the action menu next to that version and clicking **Edit**. Once the editor has opened, enter a unique name in the *Template Name* field. This duplicate version will not be active until you activate it.


{% anchor h2 %}
Adding unsubscribe links to a template
{% endanchor h2 %}

You can use [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html) to add links to your email to allow recipients to unsubscribe from only these emails, from all of your emails, and to manage their unsubscribe settings for your emails.

{% warning %}
When using the group unsubscribe substitution tag, you must specify which unsubscribe group you would like to use. If you are sending your email via our SMTP API, please add the group ID into the X-SMTPAPI header. If you are sending via our Web API, please enter the group ID into the x-smtpapi parameter of the mail. Send API call.

You must also specify which unsubscribe groups to include on the Manage Preferences page if you are using the Manage Email Preferences substitution tag. For more detailed information, please visit our [API Reference]({{root_url}}/API_Reference/SMTP_API/suppressions.html).
{% endwarning %}

{% info %}
You can find your group IDs by looking at the Group ID column in the [Unsubscribe Groups UI]({{site.app_url}}/suppressions/advanced_suppression_manager), or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html#-GET) of the groups resource.
{% endinfo %}

{% anchor h3 %}
Unsubscribe From This List
{% endanchor h3 %}

When you add the ```<%asm_group_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From This List," in your email. This link allows your recipients to unsubscribe from the [unsubscribe group]({{root_url}}/User_Guide/Suppressions/group_unsubscribes.html) that you attached to this email.

{% anchor h3 %}
Unsubscribe From All Emails
{% endanchor h3 %}

When you add the ```<%asm_global_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From All Emails," in your email. This allows your recipient to be [globally unsubscribed]({{root_url}}/User_Guide/Suppressions/global_unsubscribes.html) from all of your emails.

{% anchor h3 %}
Manage Email Preferences
{% endanchor h3 %}

When you add the ```<%asm_preferences_url%>``` tag to your email, we will replace that tag with the text "Manage Email Preferences," in your email. This allows your recipients to see your Unsubscribe Groups in a [Subscription Preference page]({{root_url}}/User_Guide/Suppressions/recipient_subscription_preferences.html) and then choose which groups they are interested in.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Manage Templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/manage.html)
- [Transactional Email Unsubscribes]({{root_url}}/User_Guide/Transactional_Email/unsubscribes.html)
