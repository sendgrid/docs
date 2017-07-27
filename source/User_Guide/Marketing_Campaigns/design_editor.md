---
layout: page
weight: 80
title: Design Editor
navigation:
  show: true
seo:
  title: Design Editor
  override: true
  description:
---

The design editor is where you build your templates and campaigns using drag & drop WYSIWYG tools. You can use the design editor to make changes to the various modules like text, images, buttons, links, columns, or custom code that make up the content you include in your campaigns.

{% anchor h3 %}
Getting Started with the Design Editor
{% endanchor h3 %}

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.  
1. Click **Create Campaign**.  

   To create a campaign using an existing campaign, find the campaign you want to use and click the action menu next to the campaign and then select Edit or Duplicate.
   ![]({{root_url}}/images/duplicate_campaign.png)

1. Select the template that you want to use for your campaign. You can select a Blank Template, a custom template that you have already created, or one of SendGrid's pre-built templates.

   For more information, see [Working With Templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html).

1. Select **Design Editor**, and then click **Continue**.
The Design Editor opens.

{% anchor h3 %}
Using Drag & Drop Modules
{% endanchor h3 %}

Drag & drop editing helps you swiftly build your campaign using pre-built content modules. You can easily edit individual modules in the left-hand sidebar and reorder modules in your campaign body with a simple click and drag of your mouse.

*To add a drag & drop module:*

1. Navigate to the **Build** tab, and then click **Add Modules**.
   ![]({{root_url}}/images/design_editor_drag_drop.png)
2. Find the module tile you want to add to your campaign and drag and drop it into your content area.  
3. Edit the module settings and add your custom content to build your campaign.   

{% anchor h3 %}
Drag & Drop Module Descriptions and Styles
{% endanchor h3 %}

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
    <td>Can contain a single image.Data attributes can be inserted directly in the &lt;img&gt; tag.</td>
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
    <td>Icons that allow for social media integration within your campaigns.The module offers five different social media icon options (Facebook, Twitter, Instagram, Google+, and Pinterest) all of which can be toggled on or off as well as fully customized to match individual branding and design standards. The module displays when an icon link has been updated to point to a social media destination, providing a visual indicator that links have been properly configured. Once you have selected your desired icons, you can adjust the size, color, and border radius of the icons to match a template or campaign theme. You must specify the URL for each icon. Any icons without a URL in the link field will not appear in the campaign preview, or your delivered campaign.</td>
    <td>URL, size, border radius, and icon ( Facebook, Twitter, Instagram, Google+, and Pinterest).</td>
  </tr>
</table>

{% anchor h3 %}
Editing Module HTML
{% endanchor h3 %}

*To edit Module HTML:*

1. Select the module in the design editor and click the **&lt; &gt;** icon.
A window opens where you can edit the module’s HTML.

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
Building a Custom Drag & Drop Module
{% endanchor h3 %}

If you are writing your own custom HTML that you plan on importing into the design editor, refer to the [custom module code examples](https://docs.google.com/document/d/1JEVcouSkFmHJSP-2mI6h63S6sxfdW8mWRhQNIUG39eg/edit#bookmark=id.spsaxe487t3d) to ensure that any modules you create are compatible with our drag & drop functionality. If you do not specify a data type that matches one of our drag & drop modules, then your code will be imported as a text module.

*To import your own custom HTML:*

1. Navigate to the **Build** tab in the left-hand navigation.
1. Scroll down and select the **Advanced** drop-down menu.  
1. Expand the option titled **Import/Export**.  
1. Click **Import**.
   A window opens where you can paste in your own HTML.

   ![]({{root_url}}/images/import_custom_html.png)

1. Paste or enter the HTML you want to use, and then click **Import**.

{% warning %}
Any HTML that you import replaces all existing content in your campaign or template. If you want to import only a section of HTML, use a [code module](code_editor.html).
{% endwarning %}

SendGrid parses your custom HTML, looking for any [drag & drop compatible modules](drag_drop.html).

  * First, we look for any HTML elements that contain the attribute role="modules-container".  
  * Next, we look for all HTML elements with the attribute role="module" that are descendants of the "modules-container" element.

The `role="modules-container"` attribute is required so that we know where your drag and drop modules are located. All of the SendGrid pre-built templates include the `role="modules-container"` by default. You are only required to include this attribute when creating a campaign or template from scratch that you want to be compatible with the design editor.

{% warning %}
Any HTML outside an element with the "modules-container" attribute will be discarded. Only [supported styling options and attributes](https://docs.google.com/document/d/1CDiBMn8ZHNZxf_lF6suV1jjX_ij5h3Gideskt1gV3Rg/edit#heading=h.fyr366oz0yxo) will be included.

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
Using Global Styles
{% endanchor h3 %}

In addition to editing the styles for individual modules within your campaign/template, you may also make changes to the global styling of your entire campaign/template. This includes attributes such as the background color, text color, or font family.



The email body is the entire area that your campaign or template fills inside your recipient’s browser or email inbox.

Under the Global Styles dropdown menu in the left hand sidebar, click **Email Body**  or **Content Container** to view and edit the following styles:

<table class="table" style="table-layout:fixed">
<tr>
    <th>Global Style</th>
    <th>Style Options</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Email Body</td>
    <td>Background Color</td>
    <td>This is the color for the background of your entire campaign/template.</td>
  </tr>
  <tr>
    <td></td>
    <td>Text Color</td>
    <td>This is the color of all text in your campaign/template.</td>
  </tr>
  <tr>
    <td></td>
    <td>Link Color</td>
    <td>This is the color of all links in your campaign/template.</td>
  </tr>
  <tr>
    <td></td>
    <td>Font Family</td>
    <td>This is the font family to be used for all text in your campaign/template.</td>
  </tr>
  <tr>
    <td></td>
    <td>Font Size</td>
    <td>This is the default font size to be used for all text in your campaign/template.</td>
  </tr>
  <tr>
    <td>Content Container</td>
    <td>Width</td>
    <td>This is the width of the container for your entire campaign/template. Your modules will all be contained within these dimensions.</td>
  </tr>
  <tr>
    <td>Background Color</td>
    <td>This is the color of the area containing your modules.</td>
  </tr>
  <tr>
    <td>Padding</td>
    <td>This is the amount of space that you want between your modules and the boundaries of the content container.</td>
  </tr>
</table>

{% anchor h3 %}
Adding Images
{% endanchor h3 %}

*To upload an image:*

1. Navigate to the **Build** tab, and then click **Add Modules**.
1. Select the Images module, and drag and drop it into your content area. This opens a modal window where you can upload images to your image library.  
1. Drag and drop the image you want to use from your files or select **Choose images** to upload.

*To insert an image:*

1. Navigate to the **Build** tab, and then click **Add Modules**.
1. Drag and drop the **Images** module into your content area.  
A window opens where you can select images from the image library.  
1. Select the image you want to add to your campaign.
The Image Details tab opens.  
1. Insert your image in the campaign by clicking **Save Image**.

{% anchor h3 %}
Using Custom HTML
{% endanchor h3 %}

You can add your own drag & drop HTML to a template in the design editor using the Import/Export menu. When importing HTML into the design editor, we recommend that you use [Marketing Campaigns drag & drop markup](https://docs.google.com/document/d/1JEVcouSkFmHJSP-2mI6h63S6sxfdW8mWRhQNIUG39eg/edit#heading=h.90bira86kq6j), otherwise your code will be imported as a single text module and you will not be able to leverage our drag & drop functionality.

{% anchor h3 %}
Importing HTML
{% endanchor h3 %}

*To import your own custom HTML:*

1. Navigate to the **Build** tab in the left-hand navigation.
1. Scroll down and select the **Advanced** drop-down menu.  
1. Expand the option titled **Import/Export**.  
1. Click **Import**.
   A window opens where you can paste in your own HTML.

   ![]({{root_url}}/images/import_custom_html.png)

1. Paste or enter the HTML you want to use, and then click **Import**.

{% warning %}
Any HTML that you import replaces all existing content in your campaign or template. If you want to import only a section of HTML, use a [code module](code_editor.html).
{% endwarning %}

SendGrid parses your custom HTML, looking for any [drag & drop compatible modules](drag_drop.html).

  * First, we look for any HTML elements that contain the attribute role="modules-container".  
  * Next, we look for all HTML elements with the attribute role="module" that are descendants of the "modules-container" element.

The `role="modules-container"` attribute is required so that we know where your drag and drop modules are located. All of the SendGrid pre-built templates include the `role="modules-container"` by default. You are only required to include this attribute when creating a campaign or template from scratch that you want to be compatible with the design editor.

{% warning %}
Any HTML outside an element with the "modules-container" attribute will be discarded. Only [supported styling options and attributes](https://docs.google.com/document/d/1CDiBMn8ZHNZxf_lF6suV1jjX_ij5h3Gideskt1gV3Rg/edit#heading=h.fyr366oz0yxo) will be included.

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
Using Substitution Tags
{% endanchor h3 %}

Substitution tags allow you to easily generate dynamic content for each recipient on your contact list. When you send to a list of recipients you can specify substitution tags specific to each recipient.

*To add a substitution tag to your campaign:*

1. Navigate to the **Tags** tab.  
1. Locate the tag you want to add to your campaign and click the **copy** icon.
1. Paste the tag into the module.

You can add the following substitution tags to your marketing campaign:

<table class="table" style="table-layout:fixed">
 <tr>
   <th>Substitution Tag</th>
   <th>Description</th>
   <th>Type</th>
 </tr>
 <tr>
   <td>`[%email%]`</td>
   <td>The email address of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td>`[%first_name%]`</td>
   <td>The first name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td>`[%last_name%]`</td>
   <td>The last name of the recipient</td>
   <td>Personalization</td>
 </tr>
 <tr>
   <td>`[Sender_Name]`</td>
   <td>The name of the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td>`[Sender_City]`</td>
   <td>The city on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td>`[Sender_State]`</td>
   <td>The state on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td>`[Sender_Zip]`</td>
   <td>The zip code on record for the sender selected when sending your campaign</td>
   <td>Sender Identity</td>
 </tr>
 <tr>
   <td>`[Unsubscribe]`</td>
   <td>This tag will be replaced with a link allowing your recipient to be added to the unsubscribe group selected when sending your campaign.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td>`[Unsubscribe_Preferences]`</td>
   <td>This tag will be replaced with a link allowing your recipients to opt into or out of the various email unsubscribe groups you offer.</td>
   <td>Unsubscribe</td>
 </tr>
 <tr>
   <td>`[Weblink]`</td>
   <td>This tag will be replaced with a link allowing your recipients to view your campaign content directly within their web browser.</td>
   <td>Weblink</td>
 </tr>
</table>


{% anchor h3 %}
Previewing your campaign
{% endanchor h3 %}

To preview your campaign or template, click the **Preview** button in the upper-left corner.

You can toggle between a mobile and desktop preview mode by clicking either the desktop or mobile phone icons above the content area.

To view a plain-text version of your campaign or template, click the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

When previewing a campaign, you will also see a preview of the From name, the Subject, and the preheader text that you have selected.
