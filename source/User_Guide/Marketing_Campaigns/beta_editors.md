---
layout: page
weight: 98
title: New Marketing Campaigns Beta Editors
navigation:
  show: true
seo:
  title: New Marketing Campaigns Beta Editors
  override: true
  description: With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment--you can choose between an optimized visual design editor and a pure HTML code editor.
---

{% warning %}
The new Marketing Campaigns code and design editors are currently in beta.
{% endwarning %}

<iframe src="https://player.vimeo.com/video/216023771" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [What is the new campaign and template editing experience?](#-What-is-the-new-campaign-and-template-editing-experience)
* [Creating new campaigns](#-Creating-New-Campaigns)
  * [Create a new campaign](#-Create-a-new-campaign)
  * [Duplicate a campaign](#-Duplicate-a-campaign)
* [Creating new templates](#-Creating-new-templates)
  * [Create a new template](#-Create-a-new-template)
  * [Duplicate a SendGrid template](#-Duplicate-a-SendGrid-template)
  * [Duplicate a custom template](#-Duplicate-a-custom-template)
  * [Create a template from a campaign](#-Create-a-template-from-a-campaign)
* [Editing existing campaigns or templates](#-Editing-Existing-Campaigns-or-Templates)
  * [Campaigns](#-Campaigns)
  * [Templates](#-Templates)
* [Design Editor](#-Design-Editor)
* [Editing module HTML](#-Editing-Module-HTML)
* [Previewing your campaign](#-Previewing-Your-Campaign)
* [Using Custom HTML](#-Using-Custom-HTML)
* [Code Editor](#-Code-Editor)
* [Frequently Asked Questions](#-Frequently-Asked-Questions)

{% anchor h2 %}
What is the new campaign and template editing experience?
{% endanchor %}

With SendGrid Marketing Campaign’s new editing experience you now have complete control over your editing environment: you can choose between an optimized visual design editor and a pure HTML code editor.

The **code editor** provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from HTML generating WYSIWYG tools.

The **design editor** offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

{% anchor h2 %}
Providing Feedback
{% endanchor %}

Thank you for participating in our Closed Beta.

Please go about your normal Marketing Campaigns activities, [using this form](https://docs.google.com/forms/d/e/1FAIpQLSf7g2FB7pWJ9YgIxD339nwja5jq44IUms0VziVRasNSVDlMEQ/viewform?c=0&w=1) to share any feedback you may have about the new editing experience. This may include:

* Positive feedback (e.g. something that was easier to do, or a new capability you liked).
* Negative feedback (e.g. something that was difficult to do, or functionality you miss from the old editing experience).
* General feedback (e.g. Anything that was unclear, questions you have, or general comments you'd like to share).

Submit to this form as frequently as you like, there's no such thing as too much feedback!

{% anchor h2 %}
Creating New Campaigns
{% endanchor %}

There are two ways to create a new campaign using the beta editor: create a net-new campaign or duplicate an existing campaign.

Following is an explanation of how to create a campaign, and which editor will be available to you.

{% anchor h3 %}
Create a new campaign
{% endanchor %}

To create a new campaign, navigate to **Marketing Campaigns** in the left hand navigation menu and click **Campaigns**. Click **Create Campaign** in the upper right corner.

{% anchor h4 %}
Select a template
{% endanchor %}

Next, you will select the template that you would like to use for your campaign. You can either select **Blank Template**, a custom template that you have already created, or one of SendGrid's pre-built templates.

{% anchor h4 %}
Select an editor
{% endanchor %}

Next, you can choose between the **design editor** and the **code editor**.

![Select Editor]({{root_url}}/images/select_editor.png)

{% anchor h3 %}
Duplicate a campaign
{% endanchor %}

You can also create a duplicate of a campaign that you would like to reuse. Navigate to the Campaigns page and find the campaign that you want to duplicate. Click the **action cog** and select **Duplicate**.

{% anchor h4 %}
Duplicating a campaign built in the old editor
{% endanchor %}

If the campaign you are duplicating has the label **Old Editor**, then it will  automatically be opened in the _old campaign editor_. You will see a banner at the top of the editor explaining that you are using the old campaign editor. To move your campaign to the beta editor click **Switch to Beta Editor**. After clicking the beta link, you will have the option of opening your campaign in either the design editor or the code editor.

{% info %}
During the beta, you will always be able to open your original campaign in the old editor.
{% endinfo %}

{% anchor h4 %}
Duplicating a campaign built in the beta editor
{% endanchor %}

If the campaign you are duplicating has either the label _Code Editor_ or _Design Editor_, then your duplicate will be opened in the indicated editor.

{% anchor h2 %}
Creating new templates
{% endanchor %}

There are several ways to create a new Marketing Campaigns template. Depending on how you create your template, you may be presented with a choice of editor experiences or you may be channeled into the optimal editor for your template.

Following is an explanation of how you can create a template, and which editor is available for each option.

{% anchor h3 %}
Create a new template
{% endanchor %}

To create a new template, navigate to **Marketing Campaigns** in the left hand navigation menu and select **Templates**. Click **Create New Template**.

{% anchor h4 %}
Select an editor
{% endanchor %}

When creating a brand new template, you may choose between either the design editor or the code editor.

{% anchor h3 %}
Duplicate a SendGrid template
{% endanchor %}

You can easily duplicate a pre-built template provided by SendGrid. Navigate to the **Marketing Templates** page and click **SendGrid Templates** under "Filter By".

Choose your template, click the action cog, and select **Duplicate**. Your duplicate will be automatically opened in the new design editor.

{% anchor h3 %}
Duplicate a custom template
{% endanchor %}

If you would like to duplicate one of your custom templates, simply navigate to the **Marketing Templates** page, find your custom template, click the action cog and select Duplicate.

If the template you are duplicating has the label **Old Editor**, then it will automatically be opened in the _old editor_. However, you will see a banner explaining that you are using the old editor. Click the link in this banner to move your template to the beta editor.

After clicking the beta link, you will have the option of opening your template in either the beta design editor or the beta code editor.

If the template has either the label **Code Editor** or **Design Editor**, your duplicate will be opened in the corresponding editor.

{% anchor h3 %}
Create a template from a campaign
{% endanchor %}

To create a new template from an existing campaign, navigate to the **Campaigns page**. Find the campaign you would like to use, click the action cog, and select **Create Template**. Campaigns labeled **Old Editor** will allow you to choose between opening the template in the code or design editors.

Campaigns labeled **Code Editor** or **Design Editor** will open the template in the corresponding editor.

{% anchor h2 %}
Editing Existing Campaigns or Templates
{% endanchor %}

{% anchor h3 %}
Campaigns
{% endanchor %}

To edit an existing campaign, navigate to the **Campaigns** page and find the campaign that you want to edit. Click the campaign title, or click the **Action Cog** and select **Edit**.

Note: you can only edit campaigns that are in "draft" status. Scheduled or sent campaigns cannot be edited. [To edit a scheduled campaign, simply unschedule it to return to draft status.]({{root_url}}/Classroom/Basics/Marketing_Campaigns/marketing_campaigns_faqs.html#-How-do-I-edit-a-scheduled-campaign)

If the existing campaign you selected includes the label **old campaign**, it will automatically be opened in the old campaign editor. You will see a banner explaining that you are using the old editor. To move your campaign to the beta editor, click **Switch to Beta Editor**.

If you switch to the beta editor, SendGrid will create a duplicate of this campaign and will open the duplicate in the beta editor.

You will still be able to return to the old editor by opening your original campaign in the old editor—it should have the label **Old Editor**—but you will be unable to revert the duplicate.

{% anchor h3 %}
Templates
{% endanchor %}

To edit a template, navigate to the **Marketing Templates** page and find the template you want to edit.

Hover over the template and click “Edit” or click the **Action Cog** and select **Edit**.

You can only edit custom templates, or templates that you have created yourself or duplicated from a SendGrid pre-built template.

As with campaigns, you will be taken to the editor originally used to create the campaign. You cannot switch between the design and code editors after the template has been created.

If you have selected a template with the label _old editor_, then you will be able to choose to switch to the beta editor. If you do so, you’ll have the option to use the code editor or the design editor. Once you switch, SendGrid will create a duplicate of this template and will open that duplicate in the beta editor.

You can return to the old editor by opening the original template—it will still have the _Old Editor_ label—however you will not be able to revert the duplicated template to the old editor.

{% anchor h2 %}
Design Editor
{% endanchor %}

The design editor is where you build your templates and campaigns using drag & drop WYSIWYG tools. You can use the design editor to make changes to the various modules like text, images, buttons, links, columns, or custom code that make up the content you include in your campaigns.

{% anchor h3 %}
Drag & drop modules
{% endanchor %}

<table class="table">

<tr><th>Module</th><th>Description</th><th>Unique Style Options</th></tr>
<tr><td>Image</td><td>Can contain a single line</td><td>Image background, image margin, link url, alt text, alignment, responsive, height, width</td></tr>
<tr><td>Image & Text
<i>Coming soon!</i></td><td>This is a columns module with two columns - each can contain either an image or some text.</br></br>
<i>While the pre-built Image & Text module is not yet released, you may always build your own by adding two column modules--one containing an image module and the other containing a text module.</i></td><td>Image, image position, image background, image margin, text background, text margin</td></tr>
<tr><td>Text</td><td>Can contain text, tables, and images.</td><td>Background color, padding, line height</td></tr>
<tr><td>Code</td><td>This is an "anything goes" module where you can enter your own custom HTML.</td><td>Module styles are not available for code modules.</td></tr>
<tr><td>Columns</td><td>This module contains multiple drop zones for other non-column modules.</td><td>container background, container padding, cell padding, columns</td></tr>
<tr><td>Button</td><td>A clickable button that links to a URL.</td><td>button color, border color, font color, width, height, padding, border radius, font size, button text, button URL, alignment,container background, container padding</td></tr>
<tr><td>Divider</td><td>A visual divider, or horizontal rule, that can be placed between modules.</td><td>Background color, line color, height, padding</td></tr>
<tr><td>Spacer</td><td>Allows you to insert spacing between other modules.</td><td>Background color, spacing (padding-bottom)</td></tr>
<tr><td>Social</td><td>Icons that allow for social media integration within your campaigns.</br></br>
<b>You must specify the URL for each icon. Any icons without a URL in the link field will not appear in the campaign preview, or your delivered campaign.</b></td><td>URL, size, border radius, and icon ( Facebook, Twitter, Instagram, Google+, and Pinterest).</td></tr>
</table>

{% anchor h2 %}
Editing Module HTML
{% endanchor %}

You can edit the HTML for any individual module by selecting that module within the design editor and clicking the **< >** icon. This opens a modal window in which you can modify the module's HTML.

![Edit module HTML]({{root_url}}/images/edit_module_html.png)

You can then make any non-structural changes to the content of the module such as updating text, styling, link sources, etc. However, if you do add or remove any HTML tags and click **Update**, you will see the message "Convert to a Code Module?." If you would like to keep your structural code changes, you will need to convert the module to a **code module**.

![Convert to code module]({{root_url}}/images/convert_to_code_module.png)

To return to the design editor after editing the HTML of a module, simply click **Update** to save your changes or click **Cancel** to discard any modifications.

{% anchor h3 %}
Code module
{% endanchor %}

The code module is a unique drag & drop module that allows you to insert any custom HTML in your campaign as a single module which can be relocated and edited at your leisure.

To add a code module when using the design editor, navigate to the **Build** tab, click **Add Modules**, and drag and drop the **Code** module tile into your content area. To make changes to your module after adding your code, simply double click the module (or click the **< >** icon) to begin editing.

This is an "anything goes" module. Unlike the other drag & drop modules, there are no specific styles listed under the **Module Styles** dropdown menu, and you can only edit the module from the code view.

{% info %}
We will not modify or validate any HTML inserted via a code module. Please be careful when using custom HTML, and always preview your campaign before sending it.
{% endinfo %}

{% anchor h2 %}
Previewing Your Campaign
{% endanchor %}

To preview your campaign or template, click the **Preview** button in the upper left corner.

You can toggle between a preview of how your campaign or template will appear on a recipient's desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area.

You can also view a plain text version of your campaign or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

{% info %}
When previewing a campaign, you will also see a preview of the From name, the Subject, and the preheader text that you have selected.
{% endinfo %}

{% anchor h2 %}
Using Custom HTML
{% endanchor %}

You can add your own drag & drop HTML to a template in the design editor using the Import/Export menu. When importing HTML into the design editor, we recommend that you use [Marketing Campaigns drag & drop markup](#-Custom-Modules), otherwise your code will be imported as a single **text module** and you will not be able to leverage our drag & drop functionality.

{% anchor h3 %}
Import HTML
{% endanchor %}

To import your own custom HTML, navigate to the **Build** tab in the left hand toolbar and scroll to the **Advanced** drop down menu. Expand the option titled **Import/Export**. Click the **Import** button.

![Import HTML]({{root_url}}/images/import_html.png)

This will open a window where you can paste in your own HTML that you would like to use within the design editor.

{% warning %}
Any HTML that you import will replace all existing content in your campaign or template. If you want to import only a section of HTML, we recommend that you use a [code module](#-Code-module).
{% endwarning %}

SendGrid will parse your custom HTML, looking for any [drag & drop compatible modules](#-Custom-Modules).

* First, we will look for any HTML elements that contain the attribute `role="modules-container"`.
* Next, we will look for all HTML elements with the attribute `role="module"` that are descendants of the `"modules-container" element`.

The `role="modules-container"` attribute is required so that we know where your drag and drop modules are located. All of the SendGrid pre-built templates include the `role="modules-container"` by default. You are only required to include this attribute when creating a campaign or template that from scratch that you want to be compatible with the design editor.

{% warning %}
Any HTML that lies outside an element with the `"modules-container"` attribute will be discarded. Only [supported styling options and attributes](#-Drag-drop-modules) will be included.

If you don't include the `"modules-container"` attribute in any of your custom HTML, then all of your HTML will be imported as a single text module.
{% endwarning %}

If your HTML does contain drag & drop modules, then these modules will be imported into your campaign or template— allowing you to move and edit them as you normally would.

However, if your custom HTML is not compatible with drag & drop, then your imported HTML will be imported as a text module.

{% anchor h3 %}
Example HTML
{% endanchor %}

Following is an example of how you should structure and organize your custom HTML, where `[module content]` represents the content of your modules.

{% codeblock lang:html %}
<div role=”modules-container”>
  <table role=”module” data-type=”button”>
    [module content]
  </table>
  <table role=”module” data-type=”text”>
    [module content]
  </table>
  <table role=”module” data-type=”image”>
    [module content]
  </table>
</div>
{% endcodeblock %}

{% anchor h3 %}
Custom Modules
{% endanchor %}

If you are writing your own custom HTML that you plan on importing into the design editor, refer to the following examples to ensure that any modules you create are compatible with our drag & drop functionality. If you do not specify a data-type that matches one of our drag & drop modules, then your code will be imported as a **text module**.

{% anchor h4 %}
General requirements
{% endanchor %}

* All units must be in pixels as `px`
* All colors must be entered as **hex values**
* Values such as 'margin', 'padding', and 'border' must include all four parameters.

{% anchor h4 %}
Incorrect:
{% endanchor %}

{% codeblock lang:html %}
style="padding-top: 50px"
{% endcodeblock %}

{% anchor h4 %}
Correct
{% endanchor %}

{% codeblock lang:html %}
style="padding: 50px 0 0 0"
{% endcodeblock %}

{% anchor h4 %}
Button
{% endanchor %}

{% codeblock lang:html %}
<table class="module" role="module" data-type="button">
  <tr>
    <td [styles go here] bgcolor=[some color] align=['left' or 'right']>
      <table class="wrapper-mobile">
        <tr>
          <td [styles go here too] bgcolor=[some color]>
            [module content]
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Space
{% endanchor %}

To add spacing using this module, simply adjust the padding in the <td> tag. For example, the following spacer module will add a spacing of 50 pixels.

{% codeblock lang:html %}
<table class="module" role="module" data-type="spacer">
  <tr>
    <td style="padding: 50px 0 0 0" bgcolor=[some color]>
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Text
{% endanchor %}

{% codeblock lang:html %}
<table class="module" role="module" data-type="text">
  <tr>
    <td [styles go here] bgcolor=[some color]>
      [module content]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Image
{% endanchor %}

Data attributes can be inserted directly in the `<img>` tag.

{% codeblock lang:html %}
<table class="wrapper" role="module" data-type="image">
  <tr>
    <td [styles go here] align=['left' or 'right']>
      [module content]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Columns
{% endanchor %}

{% codeblock lang:html %}
<table role="module" data-type="columns">
  <tr>
    <td [styles go here] bgcolor=[some color]>
      <table>
        <tr>
          <td class="templateColumnContainer column-drop-area">
          [module content]
          </td>
          <td class="templateColumnContainer column-drop-area">
          [module content]
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Divider
{% endanchor %}

{% codeblock lang:html %}
<table class="module" role="module" data-type="divider">
  <tr>
    <td [styles go here] bgcolor=[some color]>
      <table height=[some height]>
        <tr>
          <td bgcolor=[some color]></td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Code
{% endanchor %}

This is essentially an "anything goes" module where you can paste any custom HTML that you would like to be rendered within your campaign or template.

{% codeblock lang:html %}
<table class="module" role="module" data-type="code">
  <tr>
    <td>
      [module content]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Social
{% endanchor %}

The social module allows for simple social media integration when creating templates and campaigns. The module offers five different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. The module displays when an icon link has been updated to point to a social media destination, providing a visual indicator that links have been properly configured.

Once you have selected your desired icons, you can adjust the size, color, and border radius of the icons to match a template or campaign theme.

{% codeblock lang:html %}
<table class="module" role="module" data-type="social">
 <tbody>
  <tr>
   <td [styles go here] data-align=['left', 'right', or 'center']>
    <table>
     <tbody>
      <tr>
       [module content]           
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
 </tbody>
</table>
{% endcodeblock %}

{% anchor h3 %}
Exporting HTML from the design editor
{% endanchor %}

To export the HTML of a template from the design editor, navigate to the **Build** tab and scroll down to **Advanced** and select **Import/Export** in the left hand toolbar and then click **Export**. This will begin a download of the raw HTML of the template, not including images.

SendGrid hosts the images included in the pre-built templates and any images you have uploaded to the image library, so when you export a template's HTML from the design editor, the embedded URLs in each `<img>` tag will remain valid.

To open your exported HTML in the code editor, navigate to the **Campaigns** page and click **New Campaign**, select **Blank Template**, and choose **Code Editor**. Finally, simply paste the downloaded HTML for the SendGrid template into the code editor.

{% anchor h3 %}
Edit HTML Head
{% endanchor %}

The HTML `<head>` element is where you can define any metadata you would like to include with your campaign or template. For example, you can use the `<head>` element to define any custom fonts or CSS styles you would like to use.

To edit the HTML head of your campaign or template, navigate to the **Build** tab in the left hand toolbar and scroll to the **Advanced** menu. Expand the option titled **Edit HTML Head**. Click the **Edit** button to begin editing your HTML head.

![Edit HTML head]({{root_url}}/images/edit_html_head.png)

You will see a modal window appear where you can insert your own custom HTML. Once you've finished making your changes, click the **Update** button.

{% anchor h4 %}
Example: Adding custom fonts using the HTML head
{% endanchor %}

Most commonly, users add custom fonts by using the <link> tag to reference a web font hosted somewhere like [Google Fonts](https://fonts.google.com).

{% warning %}
Make sure that you also define a web safe font to use as a fallback if one of your recipient’s clients does not support your custom font.
{% endwarning %}

While some inbox providers do not support web fonts, the following popular clients do provide web font support:

* Apple Mail
* Outlook.com app
* Outlook 2000
* Default Android Mail app (not the Android Gmail app)
* iOS Mail

This list may change, and we cannot guarantee 100% support from any of these clients.

First, open the HTML Head by navigating to the **Build** tab in the design editor. Scroll down to the **Advanced** drop-down menu and select **Edit HTML Head**.

Click **Edit** to begin making your changes.

Insert a `<link>` tag containing an href attribute pointing to your web font.

For example:

{% codeblock lang:html %}
<link href="https://fonts.google.com/specimen/Oswald" rel="stylesheet">
{% endcodeblock %}

Next, you’ll have to add add a `<style>` to specify that you want to use this new font family:

{% codeblock lang:html %}
<style>
    body {
        font-family: 'Oswald',
        sans-serif;
    }
</style>
{% endcodeblock %}

{% anchor h2 %}
Code Editor
{% endanchor %}

If you want to create a template or campaign using only your own custom HTML, we recommend using SendGrid's code editor. The code editor provides the tools you need to successfully import, edit, preview, and of course send your campaign.

To get started with the code editor, either create a new blank campaign or template—or open one of your old campaigns or templates labeled Old Editor—and select **Code Editor** in the modal window that appears.

{% anchor h3 %}
Entering your code
{% endanchor %}

If you have already built the HTML that you want to use in another application, simply copy and paste that code directly into the content area of the code editor.

You can also write the HTML for your campaign or template directly in the code editor, which offers helpful features such as predictive text completion, color coded syntax highlighting, and detailed error messaging.

{% info %}
Once you create a new campaign or template in the code editor, your campaign/template will always be opened in the code editor.
{% endinfo %}

{% anchor h3 %}
Uploading Images
{% endanchor %}

To add images to your campaign or template when using the code editor, select the **Images** tab in the left hand toolbar and click **Manage Image Library**. This will open a modal window where you can upload images to your image library.

![Manage image library]({{root_url}}/images/manage_image_library.png)

To insert an image into your campaign or template, select the image you want from your image library. You will be taken to the Image Details tab. Copy the URL under the **Image Source URL** field by clicking **Copy URL**.

Paste this URL in the image source tag in your campaign or template's HTML.

For example: `<img src="your image url here">`

{% anchor h3 %}
Previewing your campaign
{% endanchor %}

As with the design editor, you can preview your campaign or template by clicking the **Preview** button in the upper left corner.

You can toggle between a preview of how your campaign or template will appear on a recipient's desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area.

You can also view a plain text version of your campaign or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

{% anchor h2 %}
Frequently Asked Questions
{% endanchor %}

{% anchor h3 %}
How do I opt out of the beta?
{% endanchor %}

For the duration of our closed beta, you may opt out of the new editing experience at any time by [contacting support](https://support.sendgrid.com/hc/en-us).

{% info %}
When you open one of your old campaigns or templates in a beta editor, SendGrid creates a duplicate of the original campaign/template which is opened in the beta editor. You may always open the original campaign or template in the old editor.
{% endinfo %}

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
