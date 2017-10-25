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
{% endanchor h2 %}

1. Open the transactional templates page and click **Create Template**.
1. Add a unique template name in the dialogue box and then click **Save**. 

![](/images/templates_create_edit_2.png "Template Name")

1.Open the **Actions** dropdown menu to create a new version.

![](/images/templates_create_edit_4.png "Create Template Version")

1. Click **Add Version**. 
<br></br>The editor opens. From here, you can change the subject and the body of your email template.

The easiest way to get started with a new template is to use one of your previous email templates or a free template from the internet, and then modify it to fit your needs.

{% anchor h2 %}
Editing Your HTML Template
{% endanchor h2 %}

{% info %}
Email templates are table-based HTML with inline or header styles, because some well-known email applications will only read table-based HTML.
{% endinfo %}

*To add a template:*

1. Open a new template in the [Code Editor](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/code_editor.html)or [Design Editor](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/design_editor.html)by clicking **Actions** and selecting **New Version**. 

1. If you selected the Code Editor, copy and paste your HTML code into the code editor. 
<br></br>If you paste in an email template, it is likely that you will overwrite the default and very basic email HTML that is provided in the code editor. If you selected the Design Editor, use the WYSIWYG editor with drag & drop modules to create your email template. 

1. When you’re done editing, click **Save**. <br></br>Please double check that the content is formatted correctly before you send an email using this template.

{% anchor h2 %}
Preview and Test Your Template
{% endanchor h2 %}

SendGrid suggests previewing and testing your template once you have created it to ensure that the format and layout look the way you expect.

*To preview your template:*
 
1. Select **Preview**.  <br></br>A window pops out with a preview of the email that you’re going to test, with the option to view the template formatted for both mobile and desktop platforms.

![](/images/template_engine_12.png "Preview option")

1. Click **Send Test** to send a test email using your new template. 
1. Fill in the *recipient* and *subject line* fields and then click **Send**.  

![](/images/templates_create_edit_8.png "Preview and Test")

![](/images/templates_create_edit_9.png "Send Test")

Any Substitution tags will not be populated in this test, but you will be able to confirm the layout and format of your template.

{% anchor h2 %}
Activate Your Template
{% endanchor h2 %}

*To activate your template:*

1. Navigate to the template you wish to use and select the action menu.
1. Select **Make Active**.  

(% info %)
A template can only have one active version at a time. If you’ve created a new version with different HTML that you want your customers to start receiving, you’ll need to make that Version “Active.”
(% endinfo %)

{% anchor h2 %}
Duplicate a Template
{% endanchor h2 %}

*To duplicate a template:*

1. Navigate to the template you wish to use and select the action menu.
1. Select **Duplicate**.  

This creates a clone, giving it a name that includes the original version name, the word “copy,” and today’s date. This duplicate version will not be active until you activate it.


{% anchor h2 %}
Unsubscribe Substitution Tags
{% endanchor h2 %}

You can use [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html) to add links to your email to allow recipients to unsubscribe from only these emails, from all of your emails, and to manage their unsubscribe settings for your emails.

{% warning %}
When using the group unsubscribe substitution tag, you must specify which unsubscribe group you would like to use. If you are sending your email via our SMTP API, please add the group ID into the X-SMTPAPI header. If you are sending via our Web API, please enter the group ID into the x-smtpapi parameter of the mail.send API call.

You must also specify which unsubscribe groups to include on the Manage Preferences page if you are using the Manage Email Preferences substitution tag. For more detailed information, please visit our [API Reference]({{root_url}}/API_Reference/SMTP_API/suppressions.html).
{% endwarning %}

{% info %}
You can find your group IDs by looking at the Group ID column in the [Unsubscribe Groups UI]({{site.app_url}}/suppressions/advanced_suppression_manager), or by calling the [GET method]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/groups.html#-GET) of the groups resource.
{% endinfo %}

{% anchor h3 %}
Unsubscribe From This List
{% endanchor h3 %}

When you add the ```<%asm_group_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From This List," wherever the tag is found in your email. This link will allow your recipients to unsubscribe from the [unsubscribe group]({{root_url}}/User_Guide/Suppressions/group_unsubscribes.html) that you attached to this email.

{% anchor h3 %}
Unsubscribe From All Emails
{% endanchor h3 %}

When you add the ```<%asm_global_unsubscribe_url%>``` tag to your email, we will replace that tag with the text "Unsubscribe From All Emails," wherever the tag is found in your email. This will allow your recipient to be [globally unsubscribed]({{root_url}}/User_Guide/Suppressions/global_unsubscribes.html) from all of your emails.

{% anchor h3 %}
Manage Email Preferences
{% endanchor h3 %}

When you add the ```<%asm_preferences_url%>``` tag to your email, we will replace that tag with the text "Manage Email Preferences," wherever the tag is found in your email. This will allow your recipients to see your Unsubscribe Groups in a [Subscription Preference page]({{root_url}}/User_Guide/Suppressions/recipient_subscription_preferences.html) and then choose which groups they are interested in.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [SendGrid for Mobile](https://sendgrid.com/docs/User_Guide/SendGrid_for_Mobile/index.html)
- [Transactional Templates Overview](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html)
- [Manage Templates](https://sendgrid.com/docs/User_Guide/Transactional_Templates/manage.html)
