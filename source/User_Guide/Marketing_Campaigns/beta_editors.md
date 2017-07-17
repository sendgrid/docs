---
layout: page
weight: 99
title: New Beta Editors
navigation:
  show: true
seo:
  title: New Beta Editors
  override: true
  description: With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment--you can choose between an optimized visual design editor and a pure HTML code editor.
---

{% warning %}
The new Marketing Campaigns code and design editors are currently in beta.
{% endwarning %}

<iframe src="https://player.vimeo.com/video/216023771" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
What is the new campaign and template editing experience?
{% endanchor %}

With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment: you can choose between an optimized visual design editor and a pure HTML code editor.

The **code editor** provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from HTML generating WYSIWYG tools.

The **design editor** offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

For more information on getting started with the new editing experience, check out:

* [Designing and Sending an Email]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html)
* [Using the Design Editor]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html)
    * [Getting Started]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Getting-Started-with-the-Design-Editor)
* [Using the Code Editor]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html)
    * [Getting Started]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html#-Getting-Started-with-the-Code-Editor)
    * [Using Substitution Tags]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html#-Using-Substitution-Tags)
    * [Previewing your campaign]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html#-Previewing-your-campaign)
* [Marketing Templates]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html)
    * [Creating a New Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Creating-a-New-Template)
    * [Editing an Existing Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Editing-an-Existing-Template)
    * [Duplicating a SendGrid Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Duplicating-a-SendGrid-Template)
    * [Duplicating a Custom Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Duplicating-a-Custom-Template)
    * [Creating a Template from a Campaign]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Creating-a-Template-from-a-Campaign)
* [Frequently Asked Questions](#-Frequently-Asked-Questions)

{% anchor h2 %}
Frequently Asked Questions
{% endanchor %}

{% anchor h3 %}
How do I opt out of the beta?
{% endanchor %}

When you open one of your old campaigns or templates in the beta editor, SendGrid creates a duplicate of the original campaign/template which is opened in the beta editor. You may always open the original campaign or template in the old editor.

{% anchor h3 %}
What will happen to my old campaigns and templates?
{% endanchor %}

For the duration of the beta, you will continue to have the option of opening your old campaigns and templates in the old editor. Whenever you open an old campaign or template in a beta editor, a duplicate is created. While you may not open the duplicate in the old editor, your originals may always be opened in the old editor.

{% anchor h3 %}
Can I use both editors?
{% endanchor %}

When opening a pre-existing campaign or template you will be given the option of opening the duplicate of that campaign/template in either the design editor or the code editor. Once you have made your selection, you will not be able to switch between the design and code editors when editing _that specific campaign/template_.

However, for the duration of the beta, you will be able to open your original, old campaigns and templates in the old editor.

{% anchor h3 %}
Can I move a campaign or template created in the beta editor to the old editor?
{% endanchor %}

You cannot move a campaign/template from the beta editor to the old editor. Any new campaigns/templates created in the beta editor will only be accessible from the beta editor. However, you can still open your old campaigns/templates in the old editor.

{% anchor h3 %}
Why did I get the error "We were unable to detect any drag & drop modules?"
{% endanchor %}

If you want to import HTML containing drag & drop compatible modules, it is important that you structure your content according to the [format explained here](#-Import-HTML).

If you receive the error “We were unable to detect any drag & drop modules”, first ensure that you include the following attributes in your HTML:

* The attribute `role=“modules-container”` must be included in all elements containing drag & drop modules
* Every drag & drop module must include the attribute `role=module`

If you continue to receive an error, please refer to our [example HTML for building your own drag & drop modules](#-Example-HTML).
