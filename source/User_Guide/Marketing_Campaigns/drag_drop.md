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

The Drag and Drop editor helps you swiftly build your campaign content with predefined modules. Edit individual modules easily in the style sidebar, and reorder modules with a simple drag of your mouse.

![]({{root_url}}/images/DnD_toggle_off.png) <br />
![]({{root_url}}/images/DnD_toggle_on.png) <br />
![]({{root_url}}/images/module_options_thumb.png)

{% anchor h2 %}
Getting Started
{% endanchor %}

To get started, turn on the Drag & Drop toggle in the Settings tab, located below the campaign name field. This will add a modules group to the Build tab, and turn on a fourth tab option called “Style” which houses the Drag & Drop modules.

Modules are blocks of content that can be dragged into the main editor and dropped above or below other moveable modules.

There are a number of modules available for use in building your campaign, each with unique styling options located in the “Style” section of the editor sidebar.

{% anchor h2 %}
Available Modules
{% endanchor %}

{% info %}
We populate every campaign with both pre-header and footer modules.
{% endinfo %}

{% warning %}
Pre-header and footer modules are locked modules and cannot be removed.
{% endwarning %}

Pre-header and footer are important pieces of any email campaign, where information like sender details and unsubscribe links are included. Individual settings for these include background color and padding or margin spacing.

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
      <td>Container background, Padding</td>
    </tr>

    <tr>
      <td>Image</td>
      <td>A module to house a single image</td>
      <td>Link URL, Alt text, Width, Height, Padding, Alignment</td>
    </tr>

    <tr>
      <td> Image & Text </td>
      <td>A module allowing for an image to be aligned to the left or right of text</td>
      <td>Image Link URL, Image position, Image background, Image margin, Text background, Text margin</td>
    </tr>

    <tr>
      <td>Button</td>
      <td>An external link</td>
      <td>Alignment, Button text, Button color, Padding, Border radius, Border color, Text color, Font size, Height, Width, URL, Container background, Padding.</td>
    </tr>

    <tr>
      <td>Spacer</td>
      <td>Extra spacing between modules</td>
      <td>Container background, Spacing (padding-bottom)</td>
    </tr>

    <tr>
      <td>WYSIWYG</td>
      <td>“What You See Is What You Get” – an all-purpose module that can contain text and images</td>
      <td>Container background, Padding</td>
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

<p>This is an example of normal text content in a Text module.</p>

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
