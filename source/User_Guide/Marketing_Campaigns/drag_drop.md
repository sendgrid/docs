---
layout: page
weight: 45
title: Drag & Drop
navigation:
  show: true
seo:
  title: Drag and Drop Template Editor
  override: true
  description: Use our Drag and Drop editor to swiftly build out your campaign content with predefined modules. Edit individual modules easily in the style sidebar, and reorder modules with a simple drag of your mouse.
---

The Drag & Drop editor helps you swiftly build your campaign with predefined content modules. Easily edit individual modules in the sidebar, and reorder modules with a simple drag of your mouse.

![]({{root_url}}/images/DnD_toggle_off.png) <br />
![]({{root_url}}/images/DnD_toggle_on.png) <br />
![]({{root_url}}/images/module_options_thumb.png)

{% anchor h2 %}
Getting Started
{% endanchor %}

To get started, click on the Drag & Drop toggle in the Settings tab, located below the campaign name field. A modal will display asking if you’re sure you want to change editor modes. Clicking “continue” will turn on the Drag & Drop Editor, which will wrap any existing content with HTML needed for the new editor features to work.

{% info %}
For information on how to convert your existing template content for compatibility with corresponding Drag & Drop modules, see the section [HTML Markup](#-HTML-Markup-for-Modules) for Modules below. Any content that is not converted for use in the Drag & Drop Editor will be grouped together inside a WYSIWYG module.
{% endinfo %}

Turning on the Drag & Drop Editor will also open a new tab called “Build” which contains the available modules and style groups.

The “Global Styles” group has two subgroups: “Email Body,” with style options for background color, text, and link color and font family and size, and “Content Container” with style options for width, background color, and padding.

The “Module Styles” group is where unique styling options exist for the modules used in building your campaign. Dragging and dropping a module into the editor, or selecting an existing one, will reveal the styling options for that module.

You can duplicate a module by clicking the Duplicate Module icon in the upper right corner of the currently selected module. The duplicate will be placed directly beneath the original module.


{% anchor h2 %}
Available Modules
{% endanchor %}

{% info %}
We populate every campaign with footer modules.
{% endinfo %}

{% warning %}
<strong>Footer</strong> modules are locked modules and cannot be removed.
{% endwarning %}

Footers are important pieces of any email campaign, where information like sender details and unsubscribe links are included. Individual settings for these include background color and padding or margin spacing.

<table id="dragdrop-modules" class="table table-bordered table-striped">
  <thead>
    <tr>
      <th><strong>Module Type</strong></th>
      <th><strong>Description</strong></th>
      <th><strong>Unique Style Options</strong></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Text</td>
      <td>A module for text</td>
      <td>background color, padding</td>
    </tr>

    <tr>
      <td>Image</td>
      <td>A module to house a single image</td>
      <td>image background, image margin</td>
    </tr>

    <tr>
      <td> Image & Text </td>
      <td>A module allowing for an image to be aligned to the left or right of text</td>
      <td>image position, image background, image margin, text background, text margin</td>
    </tr>

    <tr>
      <td>Columns</td>
      <td>A module with multiple drop zones for other non-column modules</td>
      <td>container background, container padding, cell padding, columns</td>
    </tr>

    <tr>
      <td>Button</td>
      <td>An external link</td>
      <td>button color, border color, Font color, width, height, padding, border radius, font size, button text, button URL, alignment,container background, container padding</td>
    </tr>

    <tr>
      <td>Spacer</td>
      <td>Extra spacing between modules</td>
      <td>background color, spacing (padding-bottom)</td>
    </tr>

    <tr>
      <td>WYSIWYG</td>
      <td>"What You See Is What You Get" – an all-purpose module that can contain text and images</td>
      <td>background color, padding</td>
    </tr>

    <tr>
      <td>Divider</td>
      <td>A visual divider, or horizontal rule, between modules</td>
      <td>background color, line color, height, padding</td>
    </tr>

    <tr>
      <td>Social</td>
      <td>Icons that allow for social media integration within your campaigns.</td>
      <td>icon (Facebook, Twitter, Instagram, Google+, and Pinterest), size, border radius</td>
    </tr>
</tbody></table>

![]({{root_url}}/images/drag_drop_button_short.gif)

Dragging and dropping a module, or selecting an existing one in the editor or from the sidebar, will reveal that module’s unique style options and highlights the module so you know precisely which one is being worked on.

{% anchor h2 %}
HTML Markup for Modules
{% endanchor %}

To build a module from scratch in the code editor, or to convert existing html elements into Drag and Drop modules, there are simple templates to follow.

{% anchor h3 %}
HTML For Drag & Drop
{% endanchor %}

To start, you will first need to add an attribute to your opening &lt;html&gt; tag: ```data-dnd="true"```. This will turn on the Drag & Drop editor mode (and flip the toggle in the Settings tab to “On”).

The generic template for all Drag & Drop modules is a table whose data-type varies per the type of module you are using. Some modules may have content that can be placed in the table’s column (like text for a Text module) while others may have none (such as a Spacer module).

<strong>Generic Drag & Drop Module Example</strong>

{% codeblock lang:html %}
<table role="module" data-type=[MODULE TYPE]>
  <tr>
    <td role="module-content">
[MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h3 %}
Button
{% endanchor %}

The button module is built using a multitude of unique attributes. Because of this, though the template for the button is very simple, assigning attributes like a URL or button text is designed to be built in the Style sidebar.

If you are converting HTML to use our Drag and Drop modules, we suggest replacing any button instances with the following template, then switching to the Style tab to populate the text and URL fields, as well as the button’s CSS.

<strong>Button example:</strong>

{% codeblock lang:html %}
<table role="module" data-type="button"></table>
{% endcodeblock %}

{% anchor h3 %}
Spacer
{% endanchor %}

The spacer module contains no content, only background color and spacing attributes that can be edited in the Style sidebar. Thus, the template is also very simple:

<strong>Spacer example:</strong>

{% codeblock lang:html %}
<table role="module" data-type=”spacer”></table>
{% endcodeblock %}

{% anchor h3 %}
Text
{% endanchor %}

The text module follows the generic template. You can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see the how it will look with the default attributes. Or, you can replace it with any valid HTML text:

{% codeblock lang:html %}
<div>This is an example of normal text content in a text module.</div>
{% endcodeblock %}

<strong>Text example:</strong>
{% codeblock lang:html %}
<table role="module" data-type=”text”>
  <tr>
    <td role="module-content">
[MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h3 %}
Image
{% endanchor %}

Once again you can leave the variables blank and switch views to get a placeholder image icon, using the image library to populate, or you can immediately use your own image by:

Replacing ```[DATA ATTRS]``` with

{% codeblock lang:html %}
  data-attributes=' { "width": X, "height": Y, "url": "an_image_url", "alt_text": "TEXT", "link": "valid_url" } '
{% endcodeblock %}

Replacing ```[MODULE CONTENT]``` with

{% codeblock lang:html %}
  <a href="valid_url" target="_blank"><img width="X" height="Y" src="an_image_url" alt="TEXT" />
{% endcodeblock %}

<strong>Image example:</strong>
{% codeblock lang:html %}
<table role="module" data-type="image" [DATA ATTRS]>
  <tr>
    <td role="module-content">
     	[MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}


{% anchor h3 %}
Image & Text
{% endanchor %}

![]({{root_url}}/images/image_text_module.png)

As the name implies, this module has nested within it two individual image and text modules. The template is thus a bit larger, but the convention is the same (you can leave the template blank and switch views to see the default attributes and build from there, or put content in following the corresponding template descriptions above).

<strong>Image and Text Example:</strong>

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

{% anchor h3 %}
Columns
{% endanchor %}

The Columns module acts as a container, with between 1 - 4 column drop zones for you to drag and drop other modules into.

{% info %}
A column module cannot be dropped inside another column module.
{% endinfo %}

By default, a column module has 2 column drop zones. As with other templates, you can leave the section of the template marked [MODULE] empty to render the default empty columns, or you may replace it below with any valid module HTML.

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

{% anchor h3 %}
Divider
{% endanchor %}

The divider module contains no content and functions only as a static design element. Much like a horizontal rule, the divider provides visual separation between other modules in your template. The divider module possesses background color, line color, line height, and padding attributes, which you can set.

As with the other modules, you can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see how it will look with the default attributes.

<strong>Divider example:</strong>
{% codeblock lang:html %}
<table class="module" role="module" data-type="divider">
  <tr>
    <td role="module-content">
      [MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h3 %}
WYSIWYG
{% endanchor %}

The “What You See Is What You Get” (/ˈwɪziwɪɡ/ WIZ-ee-wig) module is effectively a full editor made available in one moveable container. Use this module if you wish to import existing HTML content as a whole instead of converting pieces to individual modules.

The WYSIWYG module follows the generic template. You can leave the section marked [MODULE CONTENT] blank and switch from the code editor to the visual editor to see the how it will look with the default attributes. Or, you can replace it with any valid HTML:

<strong>WYSIWYG example:</strong>
{% codeblock lang:html %}
<table role="module" data-type=wysiwyg>
  <tr>
    <td role="module-content">
[MODULE CONTENT]
    </td>
  </tr>
</table>
{% endcodeblock %}

{% anchor h3 %}
Social
{% endanchor %}

The social icons module allows for simple social media integration when creating or editing templates or campaigns. The module offers five different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. The module displays when an icon link has been updated to point to a social media destination, providing a visual indicator that links have been properly configured.

To turn a social media option on or off, simply check or uncheck its corresponding checkbox. Once you have selected your desired icons, you can adjust the size, color, and border radius of the icons to match a template or campaign theme.

If you are converting HTML to use our Drag & Drop modules, please add the following code snippet to your template. Once pasted in the code view, switch back to the design editor, select the new social icons module and then modify the social icon styles in the module styles panel on the left side of the screen.

<strong>Social example:</strong>
{% codeblock %}
<table class=“module” role="module" data-type="social">
  <tr>
    <td role=“module-content”>
    </td>
  </tr>
</table>
{% endcodeblock %}

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/Campaigns/a_b_testing.html">A/B Testing</a>
    </div>

    <div class="col-md-6 text-right">
        <a href="{{root_url}}/User_Guide/Marketing_Campaigns/overview.html">Dashboard</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
