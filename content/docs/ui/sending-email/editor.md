---
layout: page
weight: 81
title: Design & Code Editor
group: building-email
navigation:
  show: true
seo:
  title: Design & Code Editor
  override: true
  description: Twilio SendGrid Marketing Campaigns' editing gives you complete control over your emails. Use a flexible drag-and-drop Design editor or a robust HTML code editor.
---

<iframe src="https://player.vimeo.com/video/388548001" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

This page is focused on the "Build" tag of the editor.

The new Marketing Campaigns experience is all about supporting your unique workflow, so you can get your work done more efficiently. You have complete control over the way that you create and edit each new email, thanks to 2 distinct editing experiences.

## Choosing The Right Editor

The [**Code Editor**](#the-code-editor) is perfect for users who are importing, creating, or editing custom HTML. It offers a robust environment to upload images, backed by a feature-packed editor – complete with split-screen preview, error flagging, scroll-syncing, syntax highlighting, and more. While other email editors may be notorious for adding excess code to your project, rest assured that our editor never modifies your carefully crafted HTML.

The [**Design Editor**](#the-design-editor), complete with HTML access to each content module, offers powerful “what you see is what you get” (WYSIWYG) editing. It features a diverse library of content blocks, allowing you to build beautiful emails quickly and intuitively. Once placed into your email, each module offers access to edit the HTML and a robust panel of settings – perfect for customizing content precisely to your needs.

<call-out>

The [Design Editor](#the-design-editor) features a number of convenient ways to edit the HTML content of your email –– including the ability to [edit the HTML of each drag-and-drop module](#editing-module-html), [edit the HTML `head` of your message](#editing-the-html-head), and even import complete code using our [Drag & Drop Markup](#importing-custom-html-with-drag--drop-markup).

</call-out>

<call-out type="warning">

Twilio SendGrid recommends only having one instance of a template or Marketing Campaign email open in one instance of the editor at a time.  Multiple instances in different browsers or computers will cause autosave to undo changes made and there is no recovery option.

</call-out>  

## The Code Editor

Twilio SendGrid’s marketer-friendly code editor features a powerful split-screen editing experience – perfect for building single send or automation emails with your own custom HTML. It offers a number of helpful features, often found in native editors.

### Code Editor Features

**Live Template Preview** -
See how your email looks in real-time as you write and edit code. No more tabbing between windows, refreshing, or re-rendering. Marketing Campaigns’ split-screen editing experience displays your code on the left and a pixel-perfect preview on the right.

**Error Flagging** -
If the code editor finds something that seems odd or inconsistent with best practices, instead of interrupting your workflow, it places a small red “x” in the margin of the line so you can come back and check when it’s convenient for you.

**Scroll Syncing** -
Easily pinpoint the HTML element you wish to edit. Click anywhere on the right-side preview of your email, and the code on the left automatically jumps to the corresponding line. Click somewhere on the left, and the preview on the right will jump along with you!

**Syntax Highlighting** -
As you edit, parts of your code highlights in various colors according to the type of syntax. This added dimension provides clarity and efficiency as you search for, locate, and edit code elements.


### Getting Started With The Code Editor

*To use the code editor for Single Sends:*

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends** 
1. Click **Create a Single Send**.
<br>To create a Single Send email using an existing (drafted or sent) email, find the Single Send you'd like to use and click the action menu next to the email.
1. Then, select **Edit** or **Duplicate**.
1. Select **Code Editor**, and then click **Continue**.

*To use the code editor for Automations:*

1. From the left-hand navigation, select **Marketing**, and then click **Automations** .
1. Click **Create an Automation**.
1. Under Custom Automation click **Select**.

<call-out>

The Welcome Series Automation can only be edited with the [design editor]({{root_url}}/ui/sending-email/editor/#the-design-editor)

</call-out>

1. Give the automation a name, entry criteria, exit criteria, and select an [Unsubscribe Group](https://sendgrid.com/docs/ui/sending-email/create-and-manage-unsubscribe-groups/).
1. Select the send time and then click the edit button next to *Email 1*. 
1. Select **Code Editor**, and then click **Continue**.

<call-out>

You can only edit unsent emails.

</call-out>

You can select a blank template, a custom template that you have already created, or one of Twilio SendGrid's pre-built templates. For more information, see [Working With Templates]({{root_url}}/ui/sending-email/working-with-marketing-templates/).

If you have already built the HTML that you want to use in another application, copy and paste that code directly into the content area of the Code Editor. You can also write the HTML for your email or template directly in the Code Editor.

The split-screen view of the Code Editor allows you to see a real-time preview of your email. You can toggle between a preview of how your email or template appears on a recipient’s desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area. You can also view a plain text version of your email or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your email or template by clicking the **Edit Plain Text** button.

<call-out type="warning">

Once you create a new single send or automation email in the Code Editor, it cannot be edited using the Design Editor unless you add our [Drag and Drop Markup]({{root_url}}/ui/sending-email/editor/#drag--drop-markup).

</call-out>

### Uploading Images

1. Select the **images** icon above the HTML code. A window opens where you can upload images to your library.
2. Select the image you want to add from your image library.
3. Select the **image details** tab and copy the URL in the **Image Source URL** tab by clicking **Copy URL**.
4. Paste this URL in an image source tag in your email or template's HTML.
Example: `<img src="your image URL here">`

### Using Substitution Tags

Substitution tags allow you to easily generate dynamic content for each recipient on your contact list. When you send to a list of recipients, you can specify substitution tags specific to each recipient.

**To add a substitution tag to your email:**

1. Click the **Settings** tab on the left side of the editor.
2. Click the **Tags** tab at the top of the Settings window.
3. Locate the tag you want to add to your email and click it to automatically copy it to your clipboard.
4. Paste the tag into the email.



<table class="table" style="table-layout:fixed">
 <tr>
   <th>Substitution Tag</th>
   <th>Description</th>
 </tr>
  <tr>
   <td><code class="language-text">{{first_name}}</code></td>
   <td>The first name of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{last_name}}</code></td>
   <td>The last name of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{email}}</code></td>
   <td>The email address of the recipient</td>
 </tr>
  <tr>
   <td><code class="language-text">{{alternate_emails}</code></td>
   <td>Alternate emails of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{address_line_1}}</code></td>
   <td>The first line of the address of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{address_line_2}}</code></td>
   <td>The second line of the address of the recipient</td>
   
 </tr>
  <tr>
   <td><code class="language-text">{{city}}</code></td>
   <td>The city of the recipient</td>
   
 </tr>
  <tr>
   <td><code class="language-text">{{state_province_region}}</code></td>
   <td>The region of the recipient</td>
   
 </tr>
  <tr>
   <td><code class="language-text">{{postal_code}}</code></td>
   <td>The postal code of the recipient</td>
   
 </tr>
  <tr>
   <td><code class="language-text">{{country}}</code></td>
   <td>The country of the recipient</td>
   
 </tr>
   <tr>
   <td><code class="language-text">{{phone_number}}</code></td>
   <td>The phone number of the recipient</td>
   
 </tr>
    <tr>
   <td><code class="language-text">{{whatsapp}}</code></td>
   <td>The whatsapp of the recipient</td>
   
 </tr>
   <tr>
   <td><code class="language-text">{{line}}</code></td>
   <td>The line of the recipient</td>
   
 </tr>
   <tr>
   <td><code class="language-text">{{facebook}}</code></td>
   <td>The facebook of the recipient</td>
   
 </tr>
   <tr>
   <td><code class="language-text">{{unique_name}}</code></td>
   <td>The unique name of the recipient</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_Name}}</code>* </td>
   <td>The name of the sender selected when sending your email</td>
   
 </tr>
  <tr>
   <td><code class="language-text">{{Sender_Email}}</code>* </td>
   <td>The email of the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_Address}}</code>* </td>
   <td>The address on record for the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_City}}</code>* </td>
   <td>The city on record for the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_State}}</code>* </td>
   <td>The state on record for the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_Zip}}</code>* </td>
   <td>The zip code on record for the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text">{{Sender_Country}}</code>* </td>
   <td>The country on record for the sender selected when sending your email</td>
   
 </tr>
 <tr>
   <td><code class="language-text"><%asm_group_unsubscribe_<br>raw_url%></code>* </td>
   <td>This tag is replaced with a link allowing your recipients to opt out of any emails you send using the chosen Unsubscribe Group</td>
   
 </tr>
 <tr>
   <td><code class="language-text"><%asm_global_unsubscribe_<br>raw_url%></code>
   * </td>
   <td>This tag is replaced with a link allowing your recipients to opt out of all email communication</td>
   
 </tr>
 <tr>
   <td><code class="language-text"><%asm_preferences_<br>raw_url%></code>
   * </td>   
   <td>This tag is replaced with a link allowing your recipients to opt out of any email unsubscribe groups you offer.</td>
   <td>Unsubscribe</td>
  
 </tr>
</table>


<call-out>


For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`{{first_name | Valued Customer}}`


</call-out>

### Adding Categories to Single Sends

Assigning categories to a single send allows you to track emails based on your own categorization system. By assigning your single send to a category, you can track statistics across multiple similar single sends and automations. Example categories may include: “Weekly Digest,” “Product Announcements.”

1. Click the *Settings* panel located on the left-hand side of the window to expand it.
1. Navigate to the *Settings* tab, and click **Single Send Settings** to expand the menu.
1. Locate the *Categories* field under *Single Send Settings*.
1. Select the *Add Categories* field. Type in the tag that you'd like to add, and press enter.

<call-out>

Currently, only 10 categories can be added to each single send. 

</call-out>

### Email Testing

Email testing offers robust, pre-send testing of your emails, including in-app spam testing, inbox rendering previews, and link validation right within your Marketing Campaigns workflow. It allows you to preview how an email is likely to perform across a wide range of inbox providers, devices and spam filters, before sending. For more information, [click here]({{root_url}}/ui/sending-email/email-testing/).

## The Design Editor

SendGrid’s flexible design editor allows you to build your templates and emails using intuitive, drag & drop tools. The “What you see is what you get” (WYSIWYG) editing experience features a library of modules for easily adding content to your email.

### Getting Started With the Design Editor

*To use the design editor for Single Sends:*

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends** 
1. Click **Create a Single Send**.
<br>To create a single send email using an existing (drafted or sent) email, find the single send you'd like to use and click the action menu next to the email.
1. Then, select **Edit** or **Duplicate**.
1. Select **Design Editor**, and then click **Continue**.

*To use the design editor for Automations:*

1. From the left-hand navigation, select **Marketing**, and then click **Automations** .
1. Click **Create an Automation**.
1. Determine whether you’d like to send a pre-made Welcome series or a custom automation and then click **Select**. 
1. Give the automation a name, entry criteria, exit criteria, and select an unsubscribe group.
1. Select the send time and then click the edit button next to *Email 1*. 
1. Select **Design Editor**, and then click **Continue**.
<br>The Design Editor opens.
7. Select the template that you want to use for your email.
<br>You can select a Blank Template, a custom template that you have already created, or one of Twilio SendGrid’s pre-built templates. For more information, see [Working With Marketing Templates]({{root_url}}/ui/sending-email/working-with-marketing-templates/)
8. Select **Design Editor** and then click **Continue**.
<br>The Design Editor opens.

### Using Drag & Drop Modules

Drag & drop editing helps you swiftly build your email, using pre-built content modules. You can easily edit individual modules in the left-hand sidebar and reorder modules in your email body with a simple click and drag of your mouse.

*To add a drag & drop module:*

1. Navigate to the **Build** tab and then click **Add Modules**.

  ![]({{root_url}}/img/design_editor_drag_drop.png "Drag and drop editor")

2. Find the module tile you want to add to your email. Then, drag and drop it into your content area.
3. Edit the module settings and add your custom content to build your email.

### Drag & Drop Module Descriptions and Styles

You can add the following drag & drop modules to your email:

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
    <td>This is a columns module with 2 columns - each can contain either an image or some text.</td>
    <td>Image, image position, image background, image margin, text background, text margin</td>
  </tr>
  <tr>
    <td>Spacer</td>
    <td>Allows you to insert spacing between other modules.To add spacing using this module, simply adjust the padding in the &lt;td&gt; tag. For example, the spacer module adds a spacing of 50 pixels.</td>
    <td>Background color, spacing (padding-bottom)</td>
  </tr>
  <tr>
    <td>Divider</td>
    <td>A visual divider, or horizontal rule, that can be placed between modules.</td>
    <td>Background color, line color, height, padding</td>
  </tr>
  <tr>
    <td>Social</td>
    <td>Icons that allow for social media integration within your emails.The module offers 5 different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. </td>
    <td>URL, size, border radius, and icon ( Facebook, Twitter, Instagram, Google+, and Pinterest).</td>
  </tr>
  <tr>
    <td>Unsubscribe</td>
    <td>This module is pre-populated with your sender information and a hyperlink to the `{{{unsubscribe}}}` tag which are required in order to be compliant with anti-spam laws. If you are using transactional templates, you need to include sender information the JSON array. For more information, see [How to Send Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/.</td>
    <td>Background color, padding, line height, font, font size, link color, alignment, Address Line, Unsubscribe Settings.</td>
  </tr>
</table>

### Using Global Styles

In addition to editing the styles for individual modules within your email/template, you may also make changes to the global styling of your entire email/template. This includes attributes such as the background color, text color, or font family.

The email body is the entire area that your email or template fills inside your recipient’s browser or email inbox.

Under the Global Styles dropdown menu in the left hand sidebar, click **Email Body**  or **Content Container** to view and edit the following styles:

<table class="table" style="table-layout:fixed">
<tr>
    <th>Global Style</th>
    <th>Style Options</th>
</tr>
  <tr>
    <td><b>Email Body</b></td>
    <td><p><b>Background Color</b> - This is the color for the background of your entire email/template.</p>
        <p><b>Text Color</b> - This is the color of all text in your email/template. </p>
        <p><b>Link Color</b> - This is the color of all links in your email/template.</p>
        <p><b>Font Family</b> - This is the font family to be used for all text in your email/template.</p>
        <p><b>Font Size</b> - This is the default font size to be used for all text in your email/template.</p>
    </td>
  </tr>
  <tr>
    <td><b>Content Container</b></td>
    <td><p><b>Width</b> - This is the width of the container for your entire email/template. Your modules are all contained within these dimensions.</p>
        <p><b>Background Color</b> - This is the color of the area containing your modules.</p>
        <p><b>Padding</b> - This is the amount of space that you want between your modules and the boundaries of the content container.</p></td>
  </tr>
</table>

### Editing Module HTML

*To edit Module HTML:*

1. Select the module in the design editor and click the **&lt; &gt;** icon.
<br>A window opens where you can edit the module HTML.
1. When you are finished editing the HTML, click **Update**.

<call-out>

If you make any structural code changes, you need to convert the module to a code module.

</call-out>

### Code Modules

The code module is a unique drag & drop module that allows you to insert any custom HTML in your email as a single module which can be relocated and edited.

<call-out type="warning">

The Design Editor does not modify or validate any HTML inserted via a code module. Please be careful when using custom HTML.  Always preview your email before sending it.

</call-out>

### Adding Images

*To upload an image:*

1. Navigate to the **Build** tab and then click **Add Modules**.
1. Select the Images module and drag and drop it into your content area.
<br>This opens a window where you can upload images to your image library.
1. Drag and drop the image you want to use from your files or select **Choose images** to upload.

*To insert an image:*

1. Navigate to the **Build** tab and then click **Add Modules**.
1. Drag and drop the **Images** module into your content area.
   <br>A window opens where you can select images from the image library.
1. Select the image you want to add to your email.
   <br>The Image Details tab opens.
1. Insert your image in the email by clicking **Save Image**.

### Using Substitution Tags

Substitution tags allow you to use any custom field data you've added to Marketing Campaigns to dynamically generate unique content for each recipient of your email. A common example is to add a recipient's first name to the body (or even the subject line) of your email.

*To add a substitution tag to your email:*

1. Navigate to the **Tags** tab.
1. Locate the tag you want to add to your email and click the **copy** icon.
1. Paste the tag into the module.

Any custom fields you've created appear in the **Tags** tab of the Marketing Campaigns editor. Email is available by default.

You'll also see a number of System Fields that you can place in the body of your email to populate with your data. These include:

<table class="table" style="table-layout:fixed">
 <tr>
   <th>Substitution Tag</th>
   <th>Description</th>
   <th>Type</th>
 </tr>
 <tr>
   <td><code class="language-text">{{email}}</code></td>
   <td>The email address of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{first_name}}</code></td>
   <td>The first name of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{last_name}}</code></td>
   <td>The last name of the recipient</td>
 </tr>
 <tr>
   <td><code class="language-text">{{sender_name}}</code>* </td>
   <td>The name of the sender selected when sending your email</td>
 </tr>
 <tr>
   <td><code class="language-text">{{sender_city}}</code>* </td>
   <td>The city on record for the sender selected when sending your email</td>
 </tr>
 <tr>
   <td><code class="language-text">{{sender_state}}</code>* </td>
   <td>The state on record for the sender selected when sending your email</td>
 </tr>
 <tr>
   <td><code class="language-text">{{sender_zip}}</code>* </td>
   <td>The zip code on record for the sender selected when sending your email</td>
 </tr>
 <tr>
   <td><code class="language-text">{{unsubscribe}}</code>* </td>
   <td>This tag is replaced with a link allowing your recipients opt out of any emails you send using the chosen Unsubscribe Group.</td>
 </tr>
 <tr>
   <td><code class="language-text">{{unsubscribe_</br>preferences}}</code>
   * </td>
   <td>This tag is replaced with a link allowing your recipients to opt out of any email unsubscribe groups you offer.</td>
 </tr>
</table>


&ast; For your convenience, these substitution tags are included by default in the Unsubscribe Module found on the Tags tab of the Design Editor.

<call-out type="warning">

The `<%asm_group_unsubscribe_raw_url%>`, `<%asm_preferences_raw_url%>`, and `<%asm_global_unsubscribe
_raw_url%>` tags are reserved for use in Transactional Templates and should not be used in Marketing Campaigns.

</call-out>

<call-out>

For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`{{first_name | Valued Customer}}`

</call-out>

### Previewing Your Email

To preview your email or template, click the **Preview** button in the upper-left corner.

You can toggle between a mobile and desktop preview mode by clicking either the desktop or mobile phone icons above the content area.

To view a plain-text version of your email or template, click the **T** icon. When in this preview mode, you can edit the plain text content of your email or template by clicking the **Edit Plain Text** button.

When previewing an email, you also see a preview of the From name, the Subject, and the preheader text that you have selected.

### Editing the HTML Head

The HTML `<head>` element is where you can define any metadata you would like to include with your email or template. For example, you can use the `<head>` element to define any custom fonts or CSS styles you would like to use.

*To edit the HTML head of your email or template:*

1. Navigate to the **Build** tab in the left-hand toolbar and scroll to the **Advanced** menu.
1. Expand the option titled **Edit HTML Head**.
1. Click  **Edit** to begin editing your HTML head.
   <br>A window appears where you can insert your custom HTML.
1. Once you've finished making your changes, click the **Update** button.


#### Adding Custom Fonts Using the HTML Head

Most commonly, users add custom fonts by using the <link> tag to reference a web font hosted somewhere on the internet. For example, [Google Fonts](https://fonts.google.com).

<call-out type="warning">

Make sure that you define a web-safe font to use as a fallback if one of your recipient’s clients does not support your custom font.

</call-out>

While some inbox providers do not support web fonts, the following popular clients do provide web font support:

* Apple Mail
* Outlook.com app
* Outlook 2000
* Default Android Mail app (not the Android Gmail app)
* iOS Mail

This list may change and we cannot guarantee 100% support from any of these clients.

*To add a custom font using the HTML head:*

1. Open the HTML Head by navigating to the **Build** tab in the design editor.
1. Scroll down to the **Advanced** drop-down menu and select **Edit HTML Head**.
1. Click **Edit** to begin making your changes.
1. Insert a `<link>` tag containing an href attribute pointing to your web font.

For example:
```html
<link href="https://fonts.google.com/specimen/Oswald" rel="stylesheet">
```

Next, you’ll have to add a `<style>` to specify that you want to use this new font family:

```html
<style>
    body {
        font-family: 'Oswald',
        sans-serif;
    }
</style>
```

### Importing Custom HTML With Drag & Drop Markup

If you are writing your own custom HTML that you plan on importing into the design editor, refer to the [drag & drop code examples](#drag--drop-code-examples) to ensure that any modules you create are compatible with our drag & drop functionality. If you do not specify a data type that matches one of our drag & drop modules, your code is imported as a text module.

*To import custom HTML:*

1. Navigate to the **Build** tab in the left-hand navigation.
2. Scroll down and select the **Advanced** drop-down menu.
3. Expand the option titled **Import Drag & Drop HTML**.
4. Click **Import**.
   <br>A window opens where you can paste in your own HTML.

  ![]({{root_url}}/img/import_custom_html.png "Import custom HTML")

5. Paste or enter the HTML you want to use and then click **Import**.

<call-out type="warning">

Any HTML that you import replaces all existing content in your email or template. If you want to import only a section of HTML, use a [code module](#code-modules).

</call-out>

### Drag & Drop Markup

Twilio SendGrid parses your custom HTML, looking for any [drag & drop compatible modules](#drag--drop-code-examples).

  * First, we look for any HTML elements that contain the attribute `role="modules-container"`.
  * Next, we look for all HTML elements with the attribute `role="module"` that are descendants of the "modules-container" element.

The `role="modules-container"` attribute is required so that we know where your drag and drop modules are located. All of the Twilio SendGrid pre-built templates include the `role="modules-container"` by default. You are only required to include this attribute when creating an email or template from scratch that you want to be compatible with the design editor.

<call-out type="warning">


Any HTML outside an element with the "modules-container" attribute is discarded. Only [supported styling options and attributes](#drag--drop-module-descriptions-and-styles) are included.

If you don't include the "modules-container" attribute in any of your custom HTML, then all of your HTML is imported as a single text module.


</call-out>

Following is an example of how you should structure and organize your custom HTML, where [module content] represents the content of your modules.

### Drag & Drop Code Examples

<code-group langs="Image,Image & Text,text,code,columns,button,divider,spacer,social">

```image
<table class="wrapper" role="module" data-type="image">
  <tr>
    <td [styles go here] align=['left' or 'right']>
      [MODULE CONTENT]
    </td>
  </tr>
</table>
```

```image & text
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
```

```text
  <table class="module" role="module" data-type="text">
    <tr>
      <td [styles go here] bgcolor=[some color]>
        [MODULE CONTENT]
      </td>
    </tr>
  </table>
```
```code
  <table class="module" role="module" data-type="code">
    <tr>
      <td>
        [MODULE CONTENT]
      </td>
    </tr>
  </table>
```

```columns
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
```

```button
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
```

```divider
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
```
```spacer
  <table class="module" role="module" data-type="spacer">
    <tr>
      <td style="padding: 50px 0 0 0" bgcolor=[some color]>
      </td>
    </tr>
  </table>
```
```social
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
```
</code-group>


### Exporting HTML From the Design Editor

*To export template HTML from the design editor:*

1. Navigate to the **Build** tab in the left-hand navigation.
1. Scroll down and select the **Advanced** drop-down menu.
1. Expand the option titled **Import/Export**.
   <br>This starts the raw HTML download of the template, excluding images.

SendGrid hosts the images included in the pre-built templates and any images you have uploaded to the image library, so when you export a template’s HTML from the design editor, the embedded URLs in each `<img>` tag remains valid.

*To open exported HTML in the code editor using Single Sends:*

1. From the left-hand navigation, select **Marketing** and then click **Single Sends**.
1. Click **New Campaign** and then select **Blank Template**.
1. Select **Code Editor**.
1. Paste the raw SendGrid template HTML into the code editor.

*To open exported HTML in the code editor using Automations:*

1. From the left-hand navigation, select **Marketing** and then click **Automations**.
1. Click **Create an Automation** and then navigate to *Custom Automation* and click **Select**.
1. Navigate to the first email in the Automation series and click **Edit Email Content**.
1. Locate the blank template and click **Select**.  
1. Select **Code Editor**.
1. Paste the raw SendGrid template HTML into the code editor.

### Adding Categories to Single Sends

Assigning categories to a single send allows you to track emails based on your own categorization system. By assigning your single send to a category, you can track statistics across multiple similar single sends and automations. Example categories: “Weekly Digest,” “Product Announcements.”

*To add a category:*

1. Navigate to the *Settings* tab and click **Single Send Settings** to expand the menu.
1. Find the *Categories* field.
1. Enter the name of a new category or select a previously used category from the drop-down menu.

### Email Testing

Email testing offers robust, pre-send testing of your emails, including in-app spam testing, inbox rendering previews, and link validation right within your Marketing Campaigns workflow. It allows you to preview how an email is likely to perform across a wide range of inbox providers, devices and spam filters, before sending. For more information, [click here]({{root_url}}/ui/sending-email/email-testing/).

## Additional Resources

* [Sending an Email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
* [A/B Testing]({{root_url}}/ui/sending-email/a-b-testing/)
* [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
* [Marketing Templates]({{root_url}}/ui/sending-email/working-with-marketing-templates/)


