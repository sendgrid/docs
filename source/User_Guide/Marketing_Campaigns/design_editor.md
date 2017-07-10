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

<div class="row">
  <div class="col-md-8">
  <p>
    The design editor is where you build your templates and campaigns using drag & drop and WYSIWYG tools. To get started with the design editor, simply navigate to <strong>Marketing Campaigns</strong> from the left hand navigation menu and select either <strong>Campaigns</strong> or <strong>Templates</strong>. Whenever you open one of your campaigns or templates you will be taken to the design editor.
  </p>
  <p>
    You can use the design editor to make changes to the various modules like text, images, buttons, links, and custom code that make up the content you include in your campaigns.
  </p>
  </div>
  <div class="col-md-4">
    <img src="{{root_url}}/images/design_editor_1.png" class="img-responsive pull-right"/>
  </div>
  <br>
</div>

In addition to the general WYSIWYG controls, you can also toggle on the drag & drop editor which makes it easy to click and drag various pre-built modules into your campaign.

The design editor can be reached either by creating or editing a template from the [Templates page](https://sendgrid.com/marketing_campaigns/ui/marketing_templates), or by creating or editing a campaign from the [Campaigns page](https://sendgrid.com/marketing_campaigns/ui/campaigns).

{% anchor h2 %}
Design / Code
{% endanchor %}

Upon first opening the design editor, you will see a toggle allowing you to switch between the design and code editing experiences. Switching to the code editor will allow you to import, edit, and preview your campaign's raw HTML.

![]({{root_url}}/images/design_editor_2.png)

{% warning %}
Warning: toggling between the Design and Code editors, may cause your underlying HTML to be altered if the editor detects potentially faulty HTML.
{% endwarning %}

{% anchor h2 %}
Preview
{% endanchor %}

<div class="row">
  <div class="col-md-9">
  <p>
    You can easily open a preview of your campaign to see how it will appear on a desktop platform, a mobile platform, or as a plain-text email by clicking one of the preview icons.
  </p>
  </div>
  <div class="col-md-3">
    <img src="{{root_url}}/images/design_editor_3.png" class="img-responsive pull-right style="vertical-align:center"/>
  </div>
  <br>
</div>

{% anchor h2 %}
Save your work!
{% endanchor %}

To save your template or campaign when using the design editor, simply click the <strong>Save Draft/Save Template</strong> button.

<div class="row">
  <div class="col-md-6">
    <img src="{{root_url}}/images/design_editor_4.png" style="margin:auto"/>
  </div>
  <div class="col-md-6">
    <img src="{{root_url}}/images/design_editor_5.png" style="margin:auto"/>
  </div>
</div>

{% info %}
The design editor will automatically save your changes every 2 minutes.
{% endinfo %}

{% anchor h2 %}
Settings
{% endanchor %}

{% anchor h3 %}
Template or Campaign Settings
{% endanchor %}

You can name your template or campaign under the Settings tab in the left hand sidebar in the **Template Name** or **Campaign Name** text field.

{% anchor h2 %}
Drag & drop editor
{% endanchor %}

Under the name field, you will find a toggle switch allowing you to turn on the drag & drop editor. Enabling the drag & drop editor adds a new tab to the left-hand sidebar titled **Build** where you can add and edit different pre-built content modules.

For more details, [please refer to our drag & drop editor documentation]({{root_url}}/User_Guide/Marketing_Campaigns/drag_drop.html).

{% anchor h2 %}
Tags
{% endanchor %}

{% anchor h3 %}
Substitution Tags
{% endanchor %}

The **Tags** tab lists the various substitution tags that you can add to your campaign or template. Click the copy icon to easily copy a substitution tag, then paste the tag anywhere you want the substituted value to be placed in your content.

![]({{root_url}}/images/design_editor_6.png)

The following tags are available under the Tags tab in addition to any custom fields you've already added.

{% anchor h3 %}
Default Values
{% endanchor %}

You can choose a default value for a substitution tag to be displayed in the event that there is no unique replacement value. For example, users often write “Hello [%first_name%]” with the intent of replacing the substitution tag with each recipient’s name. However, if there is no name on file for a particular recipient, the email will read “Hello [%first_name%]” instead of “Hello John”.

This can be avoided by assigning a default value to a substitution tag using the syntax:

`[%first_name|Valued Customer%]`

Now, if no name is on record for a particular recipient, the email will read “Hello Valued Customer” instead of “Hello [%first_name%]”. You may choose any value to set as the default.

{% anchor h3 %}
Substitution Tags for Personalization
{% endanchor %}

The following substitution tags are very useful when personalizing your content for each of your recipients.

* **[%email%]** - The email address of the recipient
* **[%first_name%]** - The first name of the recipient
* **[%last_name%]** - The last name of the recipient

{% anchor h3 %}
Sender Identity, Unsubscribe Links, and Weblink Tags
{% endanchor %}

The sender identity, unsubscribe, and weblink substitution tags are very useful when building the footer for your campaign. Providing a quick and easy way for your recipients to unsubscribe from your marketing email along with being open about your identity and location not only ensures that you are [CAN-SPAM]({{root_url}}/Glossary/can_spam.html) compliant, but also builds trust with your recipients.

* **[Sender_Name]** - The name of the sender selected when sending your campaign
* **[Sender_City]** - The city on record for the sender selected when sending your campaign
* **[Sender_State]** - The state on record for the sender selected when sending your campaign
* **[Sender_Zip]** - The zip code on record for the sender selected when sending your campaign
* **[Unsubscribe]** - This tag will be replaced with a link allowing your recipient to be added to the [unsubscribe group selected when sending your campaign]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).
* **[Unsubscribe_Preferences]** - This tag will be replaced with a link allowing your recipients to opt into or out of the various email [unsubscribe groups]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html) you offer.
* **[Weblink]** - This tag will be replaced with a link allowing your recipients to view your campaign content directly within their web browser.

{% info %}
You can use substitution tags for both web links and unsubscribe links.
{% endinfo %}

For a more detailed discussion of the various fields SendGrid provides, please read _[What is the difference between custom fields, reserved fields, and system fields?]({{root_url}}/Classroom/Basics/Marketing_Campaigns/contact_fields.html)_

For help understanding the unsubscribe, sender ID, and weblink system tags, [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/default_mc_tags.html#-Miscellaneous-Substitution-Tags).

{% anchor h2 %}
WYSIWYG Toolbar
{% endanchor %}

When editing the text, text+image, or WYSIWYG modules you will have access to a general toolbar presenting some basic formatting and styling options.

![]({{root_url}}/images/design_editor_7.png)

<ul>
  <li><p><img src="{{root_url}}/images/design_editor_8.png" style="display:inline"/> Clicking this icon will insert a table.</p></li>
  <li><p><img src="{{root_url}}/images/design_editor_9.png" style="display:inline"/> Clicking this icon will open the image uploader.</p></li>
  <li><p><img src="{{root_url}}/images/design_editor_10.png" style="display:inline"/> Clicking this icon will insert either a web link or an email link.</p></li>
  <li><p><img src="{{root_url}}/images/design_editor_11.png" style="display:inline"/> Clicking this icon inserts a horizontal line or rule.</p></li>
</ul>

{% anchor h3 %}
Uploading Images
{% endanchor %}

To upload an image, click the big plus icon or the upload button after clicking the image icon described above. Then drag your image to the upload box. SendGrid will show you the status of your upload and then show a thumbnail of your image in your image library.

![]({{root_url}}/images/design_editor_12.png)

{% info %}
You can store up to 1,000 images in the image library. The max file size for each individual image is 10MB.
{% endinfo %}

{% anchor h3 %}
Inserting an Image Into Your Template or Campaign
{% endanchor %}

To insert an image into your template, just click the image thumbnail in the library and you will see a form that will let you set how the image will be inserted.

From here, you can add alt text, change the default height and width, and even set a default alignment for your images.

![]({{root_url}}/images/design_editor_13.png)

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/templates.html">Marketing Templates</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/drag_drop.html">Drag & Drop</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
