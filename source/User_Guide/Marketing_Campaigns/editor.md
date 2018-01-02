---
layout: page
weight: 81
title: Design & Code Editor
navigation:
  show: true
seo:
  title: Design & Code Editor
  override: true
  description: SendGrid Marketing Campaigns' editing gives you complete control over your emails. Use a flexible, drag-and-drop Design editor, or a robust HTML code editor.
---

<iframe src="https://player.vimeo.com/video/249110555" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Marketing Campaigns is all about supporting your unique workflow, so you can get your work done more efficiently. You have complete control over the way that you create and edit each new campaign, thanks to two distinct editing experiences.

Whether you choose to use our powerful, marketer-friendly Code Editor, or our flexible, drag-and-drop Design Editor, Marketing Campaigns empowers you to get the most value out of your email editing experience – allowing you to spend your time focused on building pixel-perfect campaigns.

* **[Choosing The Right Editor](#-Choosing-The-Right-Editor)**
* **[The Code Editor](#-The-Code-Editor)**
  * [Code Editor Features](#-Code-Editor-Features)
  * [Getting Started with the Code Editor](#-Getting-Started-with-the-Code-Editor)
  * [Uploading Images](#-Uploading-Images)
  * [Using Substitution Tags](#-Using-Substitution-Tags)
  * [Adding Categories](#-Adding-Categories)
* **[The Design Editor](#-The-Design-Editor)**
  * [Getting Started With the Design Editor](#-Getting-Started-With-the-Design-Editor)
  * [Using Drag & Drop Modules](#-Using-Drag--Drop-Modules)
  * [Drag & Drop Module Descriptions and Styles](#-Drag--Drop-Module-Descriptions-and-Styles)
  * [Using Global Styles](#-Using-Global-Styles)
  * [Editing Module HTML](#-Editing-Module-HTML)
  * [Code Modules](#-Code-Modules)
  * [Adding Images](#-Adding-Images)
  * [Personalize With Substitution Tags](#-Personalize-With-Substitution-Tags)
  * [Previewing Your Campaign](#-Previewing-Your-Campaign)
  * [Editing the HTML Head](#-Editing-the-HTML-Head)
  * [Importing Custom HTML With Drag & Drop Markup](#-Importing-Custom-HTML-With-Drag--Drop-Markup)
    * [Drag & Drop Markup](#-Drag--Drop-Markup)
    * [Drag & Drop Code Examples](#-Drag--Drop-Code-Examples)
  * [Exporting HTML From the Design Editor](#-Exporting-HTML-From-the-Design-Editor)
  * [Creating Categories](#-Creating-Categories)
* **[Frequently Asked Questions](#-Frequently-Asked-Questions)**

{% anchor h2 %}
Choosing The Right Editor
{% endanchor %}

The [**Code Editor**](#-The-Code-Editor) is perfect for users who are importing, creating or editing custom HTML. It offers a robust environment to upload images, backed by a feature-packed editor – complete with split-screen preview, error flagging, scroll-syncing, syntax highlighting and more. While other email editors may be notorious for adding excess code to your project, rest assured that our editor will never modify your carefully crafted HTML.

The [**Design Editor**](#-The-Design-Editor), complete with HTML access to each content module, offers powerful “what you see is what you get” (WYSIWYG) editing. It features a diverse library of content blocks, allowing you to build beautiful emails quickly and intuitively. Once placed into your campaign, each module offers access to edit the HTML and a robust panel of settings – perfect for customizing content precisely to your needs.

{% info %}
**Looking for Design + HTML?**
The [Design Editor](#-The-Design-Editor) features a number of convenient ways to edit the HTML content of your email –– including the ability to [edit the HTML of each drag-and-drop module](#-Editing-Module-HTML), [edit the HTML `head` of your message](#-Editing-the-HTML-Head), and even import complete code using our [Drag & Drop Markup](#-Importing-Custom-HTML-With-Drag--Drop-Markup).
{% endinfo %}

{% anchor h2 %}
The Code Editor
{% endanchor %}

SendGrid’s marketer-friendly code editor features a powerful, split screen editing experience – perfect for building campaigns with your own custom HTML. It offers a number of helpful features, often found in native editors.

* [Code Editor Features](#-Code-Editor-Features)
* [Getting Started with the Code Editor](#-Getting-Started-with-the-Code-Editor)
* [Uploading Images](#-Uploading-Images)
* [Using Substitution Tags](#-Using-Substitution-Tags)
* [Adding Categories](#-Adding-Categories)

{% anchor h3 %}
Code Editor Features
{% endanchor %}

**Live Template Preview**
See how your email looks in real-time, as you write and edit code. No more tabbing between windows, refreshing or re-rendering. Marketing Campaigns’ split-screen editing experience displays your code on the left, and a pixel-perfect preview on the right.

**Code & Tag Completion**
As you type, the editor automatically makes common suggestions. You can accept them by tapping tab or return –– or, simply continue typing to ignore.  Additionally, as you open a tag of any kind, our code editor automatically places a closing tag.

**Error Flagging**
If our code editor finds something that seems odd or inconsistent with best practices, instead of interrupting your workflow, it places a small red “x” in the margin of the line so you can come back and check when it’s convenient for you.

**Scroll Syncing**
Easily pinpoint the HTML element you wish to edit. Click anywhere on the right-side preview of your email, and the code on the left will automatically jump to the corresponding line.

**Syntax Highlighting**
As you edit, parts of your code will highlight in various colors according to the type of syntax. This added dimension provides clarity and efficiency as you search for, locate and edit code elements.

{% anchor h3 %}
Getting Started With The Code Editor
{% endanchor %}

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.
2. Click **Create Campaign**.
To create a campaign from one that has not yet been sent, find the version you want to use and click the **action menu** next to the campaign. Then, select **Edit** or **Duplicate**. To create a campaign from one that has already been sent, **Duplicate** will be the only option.
3. Select the template that you want to use for your campaign.
You can select a Blank Template, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Working With Templates]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html).
4. Select **Code Editor**, and then click **Continue**.
If you have already built the HTML that you want to use in another application, copy and paste that code directly into the content area of the code editor. You can also write the HTML for your campaign or template directly in the code editor. The code editor has predictive text completion, color-coded syntax highlighting, and detailed error messages.
5. The Code Editor features a **Live Preview** in the content area. The preview will show changes to the HTML as they are made in real time. The default preview mode is in desktop format.
You can toggle between a preview of how your campaign or template will appear on a recipient’s desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area. You can also view a plain-text version of your campaign or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

{% warning %}
Once you create a new campaign or template in the Code Editor, it cannot be edited using the Design Editor.
{% endwarning %}

{% anchor h3 %}
Uploading Images
{% endanchor %}

1. Select the **images** icon above the HTML code. A window opens where you can upload images to your library.
2. Select the image that you'd like, from your image library.
3. Select the **image details** tab and copy the URL in the **Image Source URL** tab by clicking **Copy URL**.
4. Paste this URL in the image source tag in your campaign or template's HTML.
Example: `<img src="your image URL here">`

{% anchor h3 %}
Using Substitution Tags
{% endanchor %}

Substitution tags allow you to easily generate dynamic content for each recipient on your contact list. When you send to a list of recipients, you can specify substitution tags specific to each recipient.

**To add a substitution tag to your campaign:**

1. Click the **Settings** tab on the left side of the editor
2. Click the **Tags** tab at the top of the Settings window.
3. Locate the tag you want to add to your campaign and click it to automatically copy it to your clipboard.
4. Paste the tag into the module.

<table class="table" style="table-layout:fixed">
 <tr>
   <th>Substitution Tag</th>
   <th>Description</th>
   <th>Type</th>
 </tr>
 <tr>
   <td><code>[%email%]</code></td>
   <td>The email address of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[%first_name%]</code></td>
   <td>The first name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[%last_name%]</code></td>
   <td>The last name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[Sender_Name]</code>* </td>
   <td>The name of the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_City]</code>* </td>
   <td>The city on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_State]</code>* </td>
   <td>The state on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_Zip]</code>* </td>
   <td>The zip code on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Unsubscribe]</code>* </td>
   <td>This tag will be replaced with a link allowing your recipients opt out of any emails you send using the chosen Unsubscribe Group.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td><code>[Unsubscribe_Preferences]</code>* </td>
   <td>This tag will be replaced with a link allowing your recipients to opt out of any email unsubscribe groups you offer.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td><code>[Weblink]</code></td>
   <td>This tag will be replaced with a link allowing your recipients to view your campaign content directly within their web browser.</td>
   <td>Weblink</td>
 </tr>
</table>
&ast; For your convenience, these substitution tags are included by default in the Unsubscribe Module found on the Build tab of the Design Editor.

{% info %}
For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`[%first_name | Valued Customer%]`
{% endinfo %}

{% anchor h3 %}
Adding Categories
{% endanchor %}

Assigning categories to a campaign allows you to track emails based on your own categorization system. By assigning your campaign to a category, you can track statistics across multiple similar campaigns. Example categories may include: “Weekly Digest,” “Product Announcements.”

1. Click the *Settings* panel located on the left-hand side of the window to expand it.
2. Navigate to the *Settings* tab, and click **Campaign Settings** to expand the menu.
3. Locate the *Categories* field under *Campaign Settings*.
4. Select the *Add Categories* field. Type in the tag that you'd like to add, and press enter/return.

{% info %}
Currently, only 10 categories can be added to each campaign.
{% endinfo %}

{% anchor h2 %}
The Design Editor
{% endanchor %}

<iframe src="https://player.vimeo.com/video/221496251" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

SendGrid’s flexible design editor allows you to build your templates and campaigns using intuitive, drag and drop tools. The “What you see is what you get” (WYSIWYG) editing experience features a library of modules for easily adding content to your campaign.

* [Getting Started With the Design Editor](#-Getting-Started-With-the-Design-Editor)
* [Using Drag & Drop Modules](#-Using-Drag--Drop-Modules)
* [Drag & Drop Module Descriptions and Styles](#-Drag--Drop-Module-Descriptions-and-Styles)
* [Using Global Styles](#-Using-Global-Styles)
* [Editing Module HTML](#-Editing-Module-HTML)
* [Code Modules](#-Code-Modules)
* [Adding Images](#-Adding-Images)
* [Using Substitution Tags](#-Using-Substitution-Tags)
* [Previewing Your Campaign](#-Previewing-Your-Campaign)
* [Editing the HTML Head](#-Editing-the-HTML-Head)
* [Importing Custom HTML With Drag & Drop Markup](#-Importing-Custom-HTML-With-Drag--Drop-Markup)
    * [Drag & Drop Markup](#-Drag--Drop-Markup)
    * [Drag & Drop Code Examples](#-Drag--Drop-Code-Examples)
* [Exporting HTML From the Design Editor](#-Exporting-HTML-From-the-Design-Editor)
* [Creating Categories](#-Creating-Categories)

{% anchor h3 %}
Getting Started With the Design Editor
{% endanchor %}

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.
2. Click **Create Campaign**.
To create a campaign using an existing campaign, find the campaign you want to use and click the action menu next to the campaign. Then, select Edit or Duplicate.

![]({{root_url}}/images/campaigns_dashboard_categories_search.png)

3. Select the template that you want to use for your campaign.
You can select a Blank Template, a custom template that you have already created, or one of SendGrid’s pre-built templates. For more information, see [Working With Templates]({{root_url}}/docs/User_Guide/Marketing_Campaigns/templates.html).
4. Select **Design Editor**, and then click **Continue**.
The Design Editor opens.

{% anchor h3 %}
Using Drag & Drop Modules
{% endanchor %}

Drag & drop editing helps you swiftly build your campaign, using pre-built content modules. You can easily edit individual modules in the left-hand sidebar and reorder modules in your campaign body with a simple click and drag of your mouse.

*To add a drag & drop module:*

1. Navigate to the **Build** tab, and then click **Add Modules**.

   ![]({{root_url}}/images/design_editor_drag_drop.png)

2. Find the module tile you want to add to your campaign and drag and drop it into your content area.
3. Edit the module settings and add your custom content to build your campaign.

{% anchor h3 %}
Drag & Drop Module Descriptions and Styles
{% endanchor h3 %}
<iframe src="https://player.vimeo.com/video/233699442" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/233699948" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/233700782" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

You can add the following drag & drop modules to your campaign:

<table class="table" style="table-layout:fixed">
  <tr>
    <th>Module</th>
    <th>Description</th>
    <th>Unique Style Options</th>
  </tr>
  <tr>
    <td>Button</td>
    <td>A clickable button that links to a URL.</td>
    <td>button color, border color, font color, width, height, padding, border radius, font size, button text, button URL, alignment,container background, container padding</td>
  </tr>
  <tr>
    <td>Columns</td>
    <td>This module contains multiple drop zones for other non-column modules.</td>
    <td>container background, container padding, cell padding, columns</td>
  </tr>
  <tr>
    <td>Code</td>
    <td>This is an "anything goes" module where you can enter your own custom HTML.</td>
    <td>Module styles are not available for code modules.</td>
  </tr>
  <tr>
    <td>Text</td>
    <td>Can contain text, tables, and images.</td>
    <td>Background color, padding, line height</td>
  </tr>
  <tr>
    <td>Image</td>
    <td>Can contain a single image. Data attributes can be inserted directly in the &lt;img&gt; tag.</td>
    <td>Image background, image margin, link url, alt text, alignment, responsive, height, width</td>
  </tr>
  <tr>
    <td>Image and Text</td>
    <td>This is a columns module with two columns - each can contain either an image or some text.</td>
    <td>Image, image position, image background, image margin, text background, text margin</td>
  </tr>
  <tr>
    <td>Spacer</td>
    <td>Allows you to insert spacing between other modules.To add spacing using this module, simply adjust the padding in the &lt;td&gt; tag. For example, the spacer module will add a spacing of 50 pixels.</td>
    <td>Background color, spacing (padding-bottom)</td>
  </tr>
  <tr>
    <td>Divider</td>
    <td>A visual divider, or horizontal rule, that can be placed between modules.</td>
    <td>Background color, line color, height, padding</td>
  </tr>
  <tr>
    <td>Social</td>
    <td>Icons that allow for social media integration within your campaigns.The module offers five different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. </td>
    <td>URL, size, border radius, and icon ( Facebook, Twitter, Instagram, Google+, and Pinterest).</td>
  </tr>
  <tr>
    <td>Unsubscribe</td>
    <td>This module is pre-populated with your sender information and unsubscribe links which are required in order to be compliant with anti-spam laws.</td>
    <td>Background color, padding, line height, font, font size, link color, alignment, Address Line, Unsubscribe Settings.</td>
  </tr>
</table>

{% anchor h3 %}
Using Global Styles
{% endanchor h3 %}

In addition to editing the styles for individual modules within your campaign/template, you may also make changes to the global styling of your entire campaign/template. This includes attributes such as the background color, text color, or font family.

The email body is the entire area that your campaign or template fills inside your recipient’s browser or email inbox.

Under the Global Styles dropdown menu in the left hand sidebar, click **Email Body**  or **Content Container** to view and edit the following styles:

<table class="table" style="table-layout:fixed">
<tr>
    <th>Global Style</th>
    <th>Style Options</th>
</tr>
  <tr>
    <td><b>Email Body</b></td>
    <td><p><b>Background Color</b> - This is the color for the background of your entire campaign/template.</p>
        <p><b>Text Color</b> - This is the color of all text in your campaign/template. </p>
        <p><b>Link Color</b> - This is the color of all links in your campaign/template.</p>
        <p><b>Font Family</b> - This is the font family to be used for all text in your campaign/template.</p>
        <p><b>Font Size</b> - This is the default font size to be used for all text in your campaign/template.</p>
    </td>
  </tr>
  <tr>
    <td><b>Content Container</b></td>
    <td><p><b>Width</b> - This is the width of the container for your entire campaign/template. Your modules will all be contained within these dimensions.</p>
        <p><b>Background Color</b> - This is the color of the area containing your modules.</p>
        <p><b>Padding</b> - This is the amount of space that you want between your modules and the boundaries of the content container.</p></td>
  </tr>
</table>

{% anchor h3 %}
Editing Module HTML
{% endanchor h3 %}

*To edit Module HTML:*

1. Select the module in the design editor and click the **&lt; &gt;** icon.
<br>A window opens where you can edit the module HTML.
1. When you are finished editing the HTML, click **Update**.

{% info %}
If you make any structural code changes, you need to convert the module to a code module.
{% endinfo %}

{% anchor h3 %}
Code Modules
{% endanchor h3 %}

The code module is a unique drag & drop module that allows you to insert any custom HTML in your campaign as a single module which can be relocated and edited.

{% warning %}
The Design Editor does not modify or validate any HTML inserted via a code module. Please be careful when using custom HTML, and always preview your campaign before sending it.
{% endwarning %}

{% anchor h3 %}
Adding Images
{% endanchor h3 %}

*To upload an image:*

1. Navigate to the **Build** tab, and then click **Add Modules**.
1. Select the Images module, and drag and drop it into your content area.
<br>This opens a window where you can upload images to your image library.
1. Drag and drop the image you want to use from your files or select **Choose images** to upload.

*To insert an image:*

1. Navigate to the **Build** tab, and then click **Add Modules**.
1. Drag and drop the **Images** module into your content area.
   <br>A window opens where you can select images from the image library.
1. Select the image you want to add to your campaign.
   <br>The Image Details tab opens.
1. Insert your image in the campaign by clicking **Save Image**.

{% anchor h3 %}
Personalize With Substitution Tags
{% endanchor h3 %}

Substitution tags allow you to use any custom field data you've added to Marketing Campaigns to dynamically generate unique content for each recipient of your campaign. A common example is to add a recipient's first name to the body (or even the subject line) of your campaign.

*To add a substitution tag to your campaign:*

1. Navigate to the **Tags** tab.
1. Locate the tag you want to add to your campaign and click the **copy** icon.
1. Paste the tag into the module.

Any custom fields you've created will appear in the **Tags** tab of the Marketing Campaigns editor. Email is available by default.

You'll also see a number of System Fields that you can place in the body of your campaign to populate with your data. These include:

<table class="table" style="table-layout:fixed">
 <tr>
   <th>Substitution Tag</th>
   <th>Description</th>
   <th>Type</th>
 </tr>
 <tr>
   <td><code>[%email%]</code></td>
   <td>The email address of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[%first_name%]</code></td>
   <td>The first name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[%last_name%]</code></td>
   <td>The last name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td><code>[Sender_Name]</code>* </td>
   <td>The name of the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_City]</code>* </td>
   <td>The city on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_State]</code>* </td>
   <td>The state on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Sender_Zip]</code>* </td>
   <td>The zip code on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td><code>[Unsubscribe]</code>* </td>
   <td>This tag will be replaced with a link allowing your recipients opt out of any emails you send using the chosen Unsubscribe Group.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td><code>[Unsubscribe_Preferences]</code>
   * </td>
   <td>This tag will be replaced with a link allowing your recipients to opt out of any email unsubscribe groups you offer.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td><code>[Weblink]</code></td>
   <td>This tag will be replaced with a link allowing your recipients to view your campaign content directly within their web browser.</td>
   <td>Weblink</td>
 </tr>
</table>
&ast; For your convenience, these substitution tags are included by default in the Unsubscribe Module found on the Build tab of the Design Editor.

For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`[%first_name | Valued Customer%]`

{% anchor h3 %}
Previewing Your Campaign
{% endanchor h3 %}

To preview your campaign or template, click the **Preview** button in the upper-left corner.

You can toggle between a mobile and desktop preview mode by clicking either the desktop or mobile phone icons above the content area.

To view a plain-text version of your campaign or template, click the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

When previewing a campaign, you will also see a preview of the From name, the Subject, and the preheader text that you have selected.

{% anchor h3 %}
Editing the HTML Head
{% endanchor %}

The HTML `<head>` element is where you can define any metadata you would like to include with your campaign or template. For example, you can use the `<head>` element to define any custom fonts or CSS styles you would like to use.

*To edit the HTML head of your campaign or template:*

1. Navigate to the **Build** tab in the left-hand toolbar and scroll to the **Advanced** menu.
1. Expand the option titled **Edit HTML Head**.
1. Click  **Edit** to begin editing your HTML head.
   <br>A window appears where you can insert your custom HTML.
1. Once you've finished making your changes, click the **Update** button.

{% anchor h4 %}
Adding Custom Fonts Using the HTML Head
{% endanchor %}

Most commonly, users add custom fonts by using the <link> tag to reference a web font hosted somewhere on the internet. For example, [Google Fonts](https://fonts.google.com).

{% warning %}
Make sure that you define a web-safe font to use as a fallback if one of your recipient’s clients does not support your custom font.
{% endwarning %}

While some inbox providers do not support web fonts, the following popular clients do provide web font support:

* Apple Mail
* Outlook.com app
* Outlook 2000
* Default Android Mail app (not the Android Gmail app)
* iOS Mail

This list may change, and we cannot guarantee 100% support from any of these clients.

*To add a custom font using the HTML head:*

1. Open the HTML Head by navigating to the **Build** tab in the design editor.
1. Scroll down to the **Advanced** drop-down menu and select **Edit HTML Head**.
1. Click **Edit** to begin making your changes.
1. Insert a `<link>` tag containing an href attribute pointing to your web font.

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

{% anchor h3 %}
Importing Custom HTML With Drag & Drop Markup
{% endanchor h3 %}

If you are writing your own custom HTML that you plan on importing into the design editor, refer to the [drag & drop code examples](#-Drag--Drop-Code-Examples) to ensure that any modules you create are compatible with our drag & drop functionality. If you do not specify a data type that matches one of our drag & drop modules your code will be imported as a text module.

*To import custom HTML:*

1. Navigate to the **Build** tab in the left-hand navigation.
2. Scroll down and select the **Advanced** drop-down menu.
3. Expand the option titled **Import/Export**.
4. Click **Import**.
   <br>A window opens where you can paste in your own HTML.

   ![]({{root_url}}/images/import_custom_html.png)

5. Paste or enter the HTML you want to use, and then click **Import**.

{% warning %}
Any HTML that you import replaces all existing content in your campaign or template. If you want to import only a section of HTML, use a [code module](#-Code-Modules).
{% endwarning %}

{% anchor h3 %}
Drag & Drop Markup
{% endanchor h3 %}

SendGrid parses your custom HTML, looking for any [drag & drop compatible modules](#-Drag--Drop-Code-Examples).

  * First, we look for any HTML elements that contain the attribute `role="modules-container"`.
  * Next, we look for all HTML elements with the attribute `role="module"` that are descendants of the "modules-container" element.

The `role="modules-container"` attribute is required so that we know where your drag and drop modules are located. All of the SendGrid pre-built templates include the `role="modules-container"` by default. You are only required to include this attribute when creating a campaign or template from scratch that you want to be compatible with the design editor.

{% warning %}
Any HTML outside an element with the "modules-container" attribute will be discarded. Only [supported styling options and attributes](#-Drag-&-Drop-Module-Descriptions-and-Styles) will be included.

If you don't include the "modules-container" attribute in any of your custom HTML, then all of your HTML will be imported as a single text module.
{% endwarning %}

If your HTML does contain drag & drop modules, then these modules will be imported into your campaign or template. This allows you to move and edit them as you normally would.

However, if your custom HTML is not compatible with drag & drop  then your imported HTML will be imported as a text module.

Following is an example of how you should structure and organize your custom HTML, where [module content] represents the content of your modules.

{% codeblock lang:html %}
<div role=”modules-container”>
  <table role=”module” data-type=”button”>
    [ module content ]
  </table>
  <table role=”module” data-type=”text”>
    [ module content ]
  </table>
  <table role=”module” data-type=”image”>
    [ module content ]
  </table>
</div>
{% endcodeblock %}

{% anchor h3 %}
Drag & Drop Code Examples
{% endanchor h3 %}

<table class="table" style="table-layout:fixed">
  <tr>
    <th>Module</th>
    <th>Custom Module Code Examples</th>
  </tr>
  <tr>
   <td>Image</td>
    <td>{% codeblock lang:html %}
<table class="wrapper" role="module" data-type="image">
  <tr>
    <td [styles go here] align=['left' or 'right']>
      [MODULE CONTENT]
    </td>
  </tr>
{% endcodeblock %}
</td>
  </tr>
  <tr>
    <td>Image &amp; Text</td>
    <td>{% codeblock lang:html %}
<table role="module" data-type="imagetext">
  <tr>
    <td>
      <table>
        <tr role="module-content">
          <td class="templateColumnContainer" >
            <table>
              <tr>
                <td class="leftColumnContent" role="column-one">
                  <table role="module" data-type="image">
                    <tr>
                      <td role="module-content">
                        [MODULE CONTENT]
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td class="templateColumnContainer" >
            <table>
              <tr>
                <td class="rightColumnContent" role="column-two">
                  <table role="module" data-type="text">
                    <tr>
                      <td role="module-content">
                        [MODULE CONTENT]
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Text</td>
    <td>{% codeblock lang:html %}
    <table class="module" role="module" data-type="text">
  <tr>
    <td [styles go here] bgcolor=[some color]>
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Code</td>
    <td>{% codeblock lang:html %}
    <table class="module" role="module" data-type="code">
  <tr>
    <td>
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Columns</td>
    <td>{% codeblock lang:html %}
    <table role="module" data-type="columns">
  <tr>
    <td [styles go here] bgcolor=[some color]>
      <table>
        <tr>
          <td class="templateColumnContainer column-drop-area">
          [MODULE CONTENT]
          </td>
          <td class="templateColumnContainer column-drop-area">
          [ANOTHER MODULE CONTENT]
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Button</td>
    <td>{% codeblock lang:html %}
 <table class="module" role="module" data-type="button">
  <tr>
    <td [styles go here] bgcolor=[some color] align=['left' or 'right']>
      <table class="wrapper-mobile">
        <tr>
          <td [styles go here too] bgcolor=[some color]>
            [MODULE CONTENT]
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Divider</td>
    <td>{% codeblock lang:html %}
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
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Spacer</td>
    <td >{% codeblock lang:html %}
    <table class="module" role="module" data-type="spacer">
  <tr>
    <td style="padding: 50px 0 0 0" bgcolor=[some color]>
    </td>
  </tr>
</table>
{% endcodeblock %}</td>
  </tr>
  <tr>
    <td>Social</td>
    <td>{% codeblock lang:html %}
    <table class="module" role="module" data-type="social">
 <tbody>
  <tr>
   <td [styles go here] data-align=['left', 'right', or 'center']>
    <table>
     <tbody>
      <tr>
       [MODULE CONTENT]
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
 </tbody>
</table>

{% endcodeblock %}</td>
  </tr>
</table>

{% anchor h3 %}
Exporting HTML From the Design Editor
{% endanchor h3 %}

*To export the HTML of a template from the design editor:*

1. Navigate to the **Build** tab in the left-hand navigation.
1. Scroll down and select the **Advanced** drop-down menu.
1. Expand the option titled **Import/Export**.
   <br>This starts the raw HTML download of the template, excluding images.

SendGrid hosts the images included in the pre-built templates and any images you have uploaded to the image library, so when you export a template’s HTML from the design editor, the embedded URLs in each `<img>` tag will remain valid.

*To open exported HTML in the code editor:*

1. From the left-hand navigation, select **Marketing** and then click **Campaigns**.
1. Click **New Campaign**, and then select **Blank Template**.
1. Select **Code Editor**.
1. Paste the raw SendGrid template HTML into the code editor.

{% anchor h3 %}
Creating Categories
{% endanchor h3 %}

Assigning categories to a campaign allows you to track emails based on your own categorization system. By assigning your campaign to a category, you can track statistics across multiple similar campaigns. Example categories: “Weekly Digest,” “Product Announcements.”

*To add a category:*

1. Navigate to the *Settings* tab, and click **Campaign Settings** to expand the menu.
1. Find the *Categories* field.
1. Enter the name of a new category or select a previously used category from the drop-down menu.


{% anchor h2 %}
Frequently Asked Questions
{% endanchor %}

{% anchor h3 %}
How do I use the templates I created in the previous editor?
{% endanchor %}

When you open one of your existing campaigns or templates in the new editor, SendGrid creates a duplicate of the original campaign or template. You may always open the original campaign or template in the previous editor.

{% anchor h3 %}
What happens to my existing campaigns and templates?
{% endanchor %}

For now, you can continue to open your campaigns and templates in the previous editor. When you open a campaign or template you created in the previous editor in the new editor, it makes a duplicate of that campaign or template and opens it in the editor. You can't open the duplicate in the previous editor, but you can open your originals in the previous editor.

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

{% anchor h2 %}
Additional Resources
{% endanchor %}
For more information on getting started with SendGrid's editors, check out:

* [Sending an Email]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html)
* [A/B Testing]({{root_url}}/User_Guide/Marketing_Campaigns/a_b_testing.html)
* [Campaign Statistics]({{root_url}}/User_Guide/Marketing_Campaigns/campaign_stats.html)
* [Marketing Templates]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html)
    * [Creating a New Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Creating-a-New-Template)
    * [Editing an Existing Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Editing-an-Existing-Template)
    * [Duplicating a SendGrid Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Duplicating-a-SendGrid-Template)
    * [Duplicating a Custom Template]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Duplicating-a-Custom-Template)
    * [Creating a Template from a Campaign]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Creating-a-Template-from-a-Campaign)
* [Frequently Asked Questions](#-Frequently-Asked-Questions)
