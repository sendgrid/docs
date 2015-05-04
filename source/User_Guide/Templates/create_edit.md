---
title: Create and Edit Templates
seo:
  title: Create and Edit Templates
weight: 0
layout: page
navigation:
  show: true
---


Creating email templates involves a mix of content writing, HTML, and CSS expertise. Email templates should look good on 
different email clients and be responsive for mobile devices. Many non-technical customers will hire a front end or email 
template developer to build your templates. We also suggest testing your templates with rendering applications like [Litmus](http://litmus.com) 
before sending them to your customers. 

{% info %}
There is currently a limit of 300 templates and 300 versions that may be created per account.
{% endinfo %}

{% info %}
Templates created in Template Engine are account and subuser specific. Templates created on a parent account will not be accessible from the subuser accounts.
{% endinfo %}

{% anchor h2 %}
Create a Template
{% endanchor %}

When you first visit the Template Engine, you will be asked to create your first template. 

<a href="https://sendgrid.com/templates/new">![](/images/template_engine_17.png "Add a Template")</a>

Click “Create Template” and you’ll be asked to add a Template Name. 

![](/images/template_engine_7.png "Template Name")

When you hit save, you will be taken to the editor. From here, you can change the subject and the body of your email template. 

The easiest way to get started with a new template is to use one of your previous email templates or a free template from the internet, and then modify it to fit your needs.

{% anchor h2 %}
Editing Your Template
{% endanchor %}

{% info %}
Email templates are table-based HTML with inline or header styles, because some well-known email applications will only read table-based HTML.
{% endinfo %}

To add a template, click the “Code” button in the header. Copy and paste your HTML code into the dark-background code editor, like so:

![](/images/template_engine_8.png "Editing your Template")

{% warning %}
You MUST have a <%subject%> tag in the subject and a <%body%> tag in your template.
{% endwarning %}

If you paste in an email template, it is likely that you will overwrite the default and very basic email HTML that is provided in the code editor. When you do this, you will remove the body placeholder tag <%body%>. When you do this, the editor will show the following notification.

![](/images/template_engine_4.png "required tags for templates")

As soon as you add <%body%> back into the content, the warning will go away.

![](/images/template_engine_15.png "The Code Editor for Template Engine")

When you’re done editing, just hit the save button to keep all your changes. If you have not manually entered your content into the plain text editor, then you will get a notification from Template Engine offering to pull this content from your HTML code. Please double check that the content is formatted the way you want it before you send an email using this template.

To get the to the plain text editor, find the text icon in the editor header bar.

![](/images/template_engine_10.png "Design/Code Switch")

{% anchor h2 %}
Send a Test
{% endanchor %}

We suggest that when you’re done making changes with your template and before you activate your template, you should send a test. 

![](/images/template_engine_12.png "Send a Test Menu")

When you select the “Send a Test” option, a sidebar window will pop out with a preview of the email that you’re going to test. The test email will be sent to the admin email on your account.  Your substitution tags will not be replaced in this test, but you will be able to see the layout and format of your template email in your own email program.

{% anchor h2 %}
Activate Your Template
{% endanchor %}

![](/images/template_engine_11.png "Make Your Template Active")

A template can only have one active version at a time. If you’ve created a new version with different HTML that you want your customers to start receiving, you’ll need to make that Version “Active.”
Select the “Make Active” option from the gear icon menu next to the save button.

{% anchor h2 %}
Duplicate a Template
{% endanchor %}

![](/images/template_engine_13.png "Duplicate your template")

When you’re ready to create a new version of your template, you can select the “Duplicate” option from the gear icon menu near the save button. Template Engine will clone this version, giving it a name that includes the original version name, the word “clone,” and today’s date. This duplicate version will not be active until you activate it.