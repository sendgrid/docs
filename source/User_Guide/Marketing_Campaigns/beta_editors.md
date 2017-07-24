---
layout: page
weight: 99
title: New Editing Experience
navigation:
  show: true
seo:
  title: New Editing Experience
  override: true
  description: With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment--you can choose between an optimized visual design editor and a pure HTML code editor.
---



<iframe src="https://player.vimeo.com/video/225867784" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
What is the new campaign and template editing experience?
{% endanchor %}

With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment: you can choose between an optimized visual design editor and a pure HTML code editor.

The **code editor** provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from HTML generating WYSIWYG tools.

The **design editor** offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

For more information on getting started with the new editing experience, check out:

* [Sending an Email]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html)
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
How do I use the templates I created in the previous editor?
{% endanchor %}

When you open one of your existing campaigns or templates in the new editor, SendGrid creates a duplicate of the original campaign or template. You may always open the original campaign or template in the previous editor.

{% anchor h3 %}
What happens to my exisiting campaigns and templates?
{% endanchor %}

For now, you can continue to open your campaigns and templates in the previous editor. When you open a campaign or template you created in the previous editor in the new editor, it makes a duplicate of that campaign or template and opens it in the editor. You can't open the duplicate in the previous editor, but you can open your originals in the prvious editor.

{% anchor h3 %}
Can I use both editors?
{% endanchor %}

When opening a pre-existing campaign or template, you are given the option of opening the duplicate of that campaign or template in either the design editor or the code editor. Once you have made your selection, you will not be able to switch between the design and code editors when editing _that specific campaign or template_.


{% anchor h3 %}
Can I open a campaign or template created in the new editor with the previous editor?
{% endanchor %}

You cannot open a campaign/template created in the new editor with the previous editor. Any new campaigns/templates created in the new editor will only be accessible from the new editor. However, you can still open your existing campaigns/templates in the previous editor.

{% anchor h3 %}
Why did I get the error "We were unable to detect any drag & drop modules?"
{% endanchor %}

If you want to import HTML containing drag & drop compatible modules, it is important that you structure your content according to the [format explained here]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML).

If you receive the error “We were unable to detect any drag & drop modules”, first ensure that you include the following attributes in your HTML:

* The attribute `role=“modules-container”` must be included in all elements containing drag & drop modules
* Every drag & drop module must include the attribute `role=module`

If you continue to receive an error, please refer to our [example HTML for building a drag & drop module]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML).
