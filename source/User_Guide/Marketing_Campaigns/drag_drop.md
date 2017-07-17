---
layout: page
weight: 79
title: Drag & Drop
navigation:
  show: true
seo:
  title: Drag and Drop Template Editor
  override: true
  description: Use our Drag and Drop editor to swiftly build out your campaign content with predefined modules. Edit individual modules easily in the style sidebar, and reorder modules with a simple drag of your mouse.
---

<div class="row">

  <div class="col-md-6">
    <p>
      Drag & drop editing helps you swiftly build your campaign using pre-built content modules. You can easily edit individual modules in the lefthand sidebar and reorder modules in your campaign body with a simple click and drag of your mouse.
    </p>
    <p>
      To enter the drag & drop editor from the design editor when editing either a template or a campaign, click the Drag & Drop toggle switch.
    </p>
  </div>
  <div class="col-md-6">
    <img src="{{root_url}}/images/drag_drop_editor_1.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

{% anchor h2 %}
Build Tab
{% endanchor %}

After toggling on the drag & drop editor, you will see a new tab appear in the left hand sidebar titled **Build**. Clicking this will display the various modules and module settings you may use when building your campaign or template.

{% anchor h3 %}
Module Styles
{% endanchor %}

To access the style settings for a particular module, simply click anywhere inside that module as it appears in your template/campaign. You'll see that the module is highlighted and you have access to the styling options for that module in the left hand side bar.

![]({{root_url}}/images/drag_drop_editor_2.png)

The styling settings displayed will automatically change depending on which modules you select in the content area of the editor.

{% anchor h3 %}
Add Modules
{% endanchor %}

To add a new module to your campaign/template, simply expand the **Add Module** dropdown menu in the left hand sidebar and click and drag your desired module into your campaign/template.

{% anchor h4 %}
Available Modules
{% endanchor %}

<table class="table">
  <tr><th>Module Type</th><th>Description</th><th>Unique Styling Options</th></tr>
  <tr><td>Image</td><td>A module containing a single image.</td><td>image background, image margin</td><tr>
  <tr><td>Image & Text</td><td>A module allowing an image to be aligned to the left or right of a body of text.</td><td>Image position, image background, image margin, text background, text margin</td><tr>
  <tr><td>Text</td><td>A module containing a single text body.</td><td>Background color, padding</td><tr>
  <tr><td>WYSIWYG</td><td>A generic "what you see is what you get" module that can contain both text and images. </td><td>Background color, padding</td><tr>
  <tr><td>Button</td><td>A button that you can turn into a link by adding a URL.</td><td>Button color, border color, font color, width, height, padding, border radius, font size, button text, button URL, alignment, container background, container padding</td><tr>
  <tr><td>Space</td><td>A module that simply adds physical space between other modules.</td><td>Background color, spacing (padding-bottom)</td><tr>
  <tr><td>Divider</td><td>A visual divider, or horizontal rule, to help differentiate other modules.</td><td>Background color, line color, height, padding</td><tr>
  <tr><td>Columns</td><td>A module with multiple drop zones to contain other non-column modules.</td><td>Container background, container padding, cell padding, columns</td><tr>
  <tr><td>Social</td><td>A module containing icons that allow for social media integration within your campaigns.</td><td>Icon (Facebook, Twitter, Instagram, Google+, Pinterest), size, border radius</td><tr>
</table>

![]({{root_url}}/images/drag_drop_editor_3.gif)

{% info %}
By default, every campaign is automatically populated with a footer module containing your sender identity information along with "Unsubscribe" and "Update Preferences" links. [CAN-SPAM]({{root_url}}/Glossary/can_spam.html) requires that you include this information in all of your campaigns.
{% endinfo %}

Footers are very important components of any marketing campaign; they include information like sender identity details and links allowing your recipients to unsubscribe from your emails. Individual styling settings for footers in Marketing Campaigns include background color, padding, and margin spacing.

For a detailed list of the other available modules, continue reading below.

{% anchor h3 %}
Global Styles
{% endanchor %}

In addition to editing the styles for individual modules within your campaign/template, you may also make changes to the global styling of your entire campaign/template. This includes attributes such as the background color, text color, or font family.

{% anchor h4 %}
Email Body
{% endanchor %}

The email body is the **entire** area that your campaign or template fills inside your recipient's browser or email inbox.

Under the **Global Styles** dropdown menu in the left hand sidebar, click **Email Body** to view and edit the following styles:

* **Background Color -** the color for the background of your entire campaign/template.
* **Text Color -** the color of all text in your campaign/template
* **Link Color -** the color of all links in your campaign/template
* **Font Family -** the font family to be used for all text in your campaign/template
* **Font Size -** the default font size to be used for all text in your campaign/template

{% anchor h4 %}
Content Container
{% endanchor %}

The content container is the only area of your campaign or template that contains your images, text, buttons, etc. The content container is _smaller_ than the entire email body.

Under the **Global Styles** dropdown menu in the left hand sidebar, click **Content Container** to view and edit the following styles:

* **Width -** This is the width of the container for your entire campaign/template. Your modules will all be contained within these dimensions.
* **Background Color -** This is the color of the area containing your modules.
* **Padding -** Amount of space that you want between your modules and the boundaries of the content container.

{% anchor h2 %}
HTML Markup for Modules
{% endanchor %}

If you would like to import your own custom HTML to use in your template or campaign but wish to continue editing using drag & drop functionality, please refer to the following guidelines when writing your HTML. By ensuring that your HTML modules match the following guidelines, you will be able to drag & drop your imported modules.

{% anchor h3 %}
HTML for Drag & Drop
{% endanchor %}

To start, you will first need to add an attribute to your opening <html> tag: `data-dnd="true"`. This will turn on the drag & drop editor mode (and flip the toggle in the Settings tab to “On”).

The generic template for all Drag & Drop modules is a table whose data-type varies per the type of module you are using. Some modules may have content that can be placed in the table’s column (like text for a Text module) while others may have none (such as a Spacer module).

{% anchor h4 %}
Generic Drag & Drop Module Example
{% endanchor %}

{% codeblock lang:html %}
<table role="module" data-type=[MODULE TYPE]>
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Button
{% endanchor %}

The button module is built using a multitude of unique attributes. Because of this, though the template for the button is very simple, assigning attributes like a URL or button text is designed to be built in the style sidebar.

If you are converting HTML to use our drag and drop modules, we suggest replacing any button instances with the following template, then switching to the Style tab to populate the text and URL fields, as well as the button’s CSS.

**Button example:**

{% codeblock lang:html %}
<table role="module" data-type="button"></table>
{% endcodeblock %}

{% anchor h4 %}
Spacer
{% endanchor %}

The spacer module contains no content, only background color and spacing attributes that can be edited in the sidebar.

**Spacer example:**

{% codeblock lang:html %}
<table role="module" data-type=”spacer”></table>
{% endcodeblock %}

{% anchor h4 %}
Text
{% endanchor %}

You can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see the how it will look with the default attributes. Or, you can replace it with any valid HTML text:

**Text example:**

{% codeblock lang:html %}
<table role="module" data-type=”text”>
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Image
{% endanchor %}

You may leave the variables blank and switch views to get a placeholder image icon, using the image library to populate, or you can immediately use your own image by:

Replacing `[DATA ATTRS]` with

{% codeblock lang:html %}
data-attributes=' { "width": X, "height": Y, "url": "an_image_url", "alt_text": "TEXT", "link": "valid_url" } '
{% endcodeblock %}

Replacing `[MODULE CONTENT]` with

{% codeblock lang:html %}
<a href="valid_url" target="\_blank"><img width="X" height="Y" src="an_image_url" alt="TEXT" />
{% endcodeblock %}

**Image example:**

{% codeblock lang:html %}
<table role="module" data-type="image" [DATA ATTRS]>
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Image & Text
{% endanchor %}

![]({{root_url}}/images/drag_drop_editor_4.png)

This module includes a nested image and text module. This module is a little larger than the others, but the conventions remain the same: you can leave the template blank and switch views to see the default attributes and build from there, or put content in following the corresponding template descriptions above.

**Image & Text example:**

{% codeblock lang:html %}
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
{% endcodeblock %}

{% anchor h4 %}
Columns
{% endanchor %}

The columns module acts as a container, with between 1 - 4 column drop zones for you to drag and drop other modules into.

{% info %}
A column module cannot be dropped inside another column module.
{% endinfo %}

By default, a column header always has 2 drop zones. As with other templates, you can leave the section marked [MODULE] empty to render the default empty columns, or you may replace it below with any valid module HTML.

**Columns example:**

{% codeblock lang:html %}
<table role="module" data-type="columns">
  <tr>
    <td>
      <table class="columns--container-table">
        <tr role="module-content">
          <td role="column-0">
            [MODULE]
          </td>
          <td role="column-1">
            [MODULE]
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

The divider module contains no content and functions only as a static design element. Much like a horizontal rule, the divider provides visual separation between other modules in your template. The divider module possesses background color, line color, line height, and padding attributes, which you can set.

As with the other modules, you can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see how it will look with the default attributes.

**Divider example:**

{% codeblock lang:html %}
<table class="module" role="module" data-type="divider">
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
WYSIWYG
{% endanchor %}

The “what you see is what you get” (/ˈwɪziwɪɡ/ WIZ-ee-wig) module is effectively a full editor made available in one moveable container. Use this module if you wish to import existing HTML content as a whole instead of converting pieces to individual modules.

The WYSIWYG module follows the generic template. You can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see the how it will look with the default attributes. Or, you can replace it with any valid HTML:

**WYSIWYG example:**

{% codeblock lang:html %}
<table role="module" data-type=wysiwyg>
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h4 %}
Social
{% endanchor %}

The social icons module allows for simple social media integration when creating or editing templates or campaigns. The module offers five different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. The module displays when an icon link has been updated to point to a social media destination, providing a visual indicator that links have been properly configured.

To turn a social media option on or off, simply check or uncheck its corresponding checkbox. Once you have selected your desired icons, you can adjust the size, color, and border radius of the icons to match a template or campaign theme.

If you are converting HTML to use our Drag & Drop modules, please add the following code snippet to your template. Once pasted in the code view, switch back to the design editor, select the new social icons module and then modify the social icon styles in the module styles panel on the left side of the screen.

**Social example:**

{% codeblock lang:html %}
<table class=“module” role="module" data-type="social">
  <tr>
    <td role=“module-content”>
    </td>
  </tr>
</table>
{% endcodeblock %}


<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html">Design Editor</a>
    </div>

    <div class="col-md-6 text-right">
        <a href="{{root_url}}/User_Guide/Marketing_Campaigns/senders.html">Sender Identites</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
