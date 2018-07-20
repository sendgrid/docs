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

<call-out>

The maximum number of transactional templates and versions per user ID is limited to 300. This means you can have 300 templates with 1 version each, or fewer templates with more versions of each template.

</call-out>

<call-out>

Transactional templates are account and subuser specific. Templates created on a parent account will not be accessible from the subuser accounts.

</call-out>

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

<call-out>

Email templates are table-based HTML with inline or header styles, because some well known email applications will only read table-based HTML.

</call-out>

*To add a template:*

1. Open a new template in the Code Editor or [Design Editor]({{root_url}}/help-support/sending-email/editor.html#-The-Design_Editor) by clicking **Actions** and selecting **New Version**.

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

<call-out>

To delete a template, you must first delete all the versions of your template.

</call-out>

{% anchor h3 %}
Activate your template
{% endanchor h2 %}

*To activate your template:*

1. Navigate to the template you wish to use and select the action menu.
1. Select **Make Active**.

<call-out>

A template can only have one active version at a time. If you’ve created a new version with different HTML that you want your customers to start receiving, you’ll need to make that version “Active.”

</call-out>

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

For more information about unsubscribes, check out our [unsubscribe documentation]({{root_url}}/help-support/sending-email/index-suppressions.html).


