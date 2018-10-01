---
seo:
  title: Form.io Integration
  description: How to integrate Form.io with SendGrid.
  keywords: Form.io, integrate
title: Building Serverless Apps with Form.io + SendGrid
weight: 100
layout: page
navigation:
  show: true
---
<a href="https://form.io" target="_blank">Form.io</a> is a combined form and data management API platform created for developers who are building "Serverless" form-based applications. Form.io provides an easy drag-and-drop form builder workflow allowing you to build complex forms for enterprise applications quickly and easily. These forms are then embedded directly into your application with a single line of code that dynamically renders the form (using Angular or React) in your app while at the very same time generating the RESTful API to support those forms. The Form.io platform also offers numerous 3rd-party services that are fully integrated into the form building process allowing you to extend the power and capability of your apps while saving time and effort.

Form.io has recently announced the integration of SendGrid’s API into their list of standard “Form Actions”, allowing you to extend your SendGrid email capabilities further into your apps, by automatically triggering emails through your SendGrid account when forms are submitted within your application.

![Form.io SendGrid integration]({{root_url}}/images/formio-sendgrid.png "Form.io SendGrid Integration")

This step-by-step guide will show how to set up a SendGrid integration within the Form.io platform.

{% anchor h2 %}
Create your first Form.io project
{% endanchor %}

To get started, you will first need to create an account at <a target="_blank" href="https://portal.form.io">Form.io</a>. Once you have an account, you can quickly bootstrap an already working application by clicking on one of the provided templates on the home screen. These are not simple form templates, but rather fully functional applications complete with Data Resources, Forms, Actions, and User Roles/Permissions. For more on how these items function within Form.io, feel free to read through our <a href="https://help.form.io/userguide/" target="_blank">User Guide</a> or view our <a href="https://help.form.io/tutorials/videos/#welcome" target="_blank">Video Tutorials</a>.

![Form.io Home Page]({{root_url}}/images/formio-home.png "Form.io Home Page")

Once you have a project created, you can now view the project live within the Preview tab of the project portal.

{% anchor h2 %}
Configure your project
{% endanchor %}

Once you have a Form.io project, the next step is to create an <strong>API Key</strong> within your SendGrid account (under <strong>Settings | API Keys</strong>). Ensure that the API Key you create has <strong>Full Access</strong> for the <strong>Mail Send</strong> permission. Once you have your API Key, go back to your Form.io project and follow these steps.

 - Click the <strong>Project Settings</strong> button located at the top right of your screen
 - Click the <strong>Email Providers</strong> tab on the left and then the <strong>SendGrid Settings</strong> tab
 - Input the <em>SendGrid API Key</em> provided to you when the API key was created.
 - <strong>Save</strong> your settings.

![Form.io SendGrid Settings]({{root_url}}/images/formio-settings.png "Form.io SendGrid Settings")

{% anchor h2 %}
Adding an email action
{% endanchor %}

Now that you have your project configured to send emails through SendGrid, the next step is to add an email action to any form within your project. A good use case for this would be to send an email anytime someone registers for your application. To achieve this capability, please follow the following steps.

 - Click on the <strong>Resources</strong> tab within your project.
 - Next, click on the <strong>Actions</strong> button on the <strong>User</strong> resource.
 - Now select the <strong>Email</strong> action, and then press the <strong>+ Add Action</strong> button.
   ![Add Email Action]({{root_url}}/images/formio-add-email.png "Form.io Add Email Action")
 - Now on the email settings page, select <strong>SendGrid</strong> for the <strong>Transport</strong> of the action.
 - Input a <strong>From</strong> email address you would like to send the email from.
 - Input a <strong>To</strong> email address you would like to send the email to. For this, you can use handlebar notation, such as ```{{ data.user }}```, to access the data from the submission as you see in the following image.
 - Input a <strong>Subject</strong> for the message being sent.
 - Input a <strong>Message</strong> for the message being sent.
   ![Email Action Settings]({{root_url}}/images/formio-email-action.png "Form.io Email Action Settings")
 - <strong>Save</strong> the action.

With this step complete, every user who registers for this application will receive your email which was sent through the SendGrid platform.

{% anchor h2 %}
Deploy your Serverless Application!
{% endanchor %}

Now that your project is configured for SendGrid, you can deploy it in a number of different ways including <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, <a href="https://cordova.apache.org/" target="_blank">Apache Cordova</a>, <a href="http://electron.atom.io/" target="_blank">Electron</a>, etc. You can also preview your application by clicking on the Preview tab of your project. Since this application is "serverless" it can be hosted in a wide range of places and immediately connect your forms with SendGrid!

![Form.io Launch]({{root_url}}/images/formio-launch.png "Form.io Launch")

If you have any questions on the Form.io integration, please feel free to <a href="https://form.io/#contact" target="_blank">Contact Form.io Support</a>.

Thanks and enjoy <strong>SendGrid</strong> and <strong>Form.io</strong>!
