---
layout: page
weight: 50
title: Templates
navigation:
  show: true
seo:
  title: Templates
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/120738522" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

A template is the basic structure of the email you will be sending out to your contacts. You can import the HTML for an
email through the [SendGrid Marketing Campaigns template builder]({{site.marketing_campaigns_url}}/templates) or you can use one of the default templates we have provided.

From the main templates list: you can add a template, edit a template, or create a campaign using one of your templates. You can also duplicate one of the templates that we provide by clicking the gear icon on the template, then clicking "Duplicate".

{% info %}
You can easily create and edit templates using our [Drag & Drop Editor]({{root_url}}/User_Guide/Marketing_Campaigns/drag_drop.html)
{% endinfo %}

You can also create templates directly from a campaign by navigating to the campaign you would like to use as a model, clicking the gear icon, then clicking “Create Template”. This will create a new template with the content from the selected campaign. You will automatically be navigated to the Template Editor where you can view and make changes your new template.

{% info %}
You can create or add up to 300 different templates.
{% endinfo %}

![]({{root_url}}/images/templates_1.png "Templates Page")

{% anchor h2 %}
Uploading HTML
{% endanchor %}

{% info %}
The editor will autosave your changes every 2 minutes, so even if you close your browser window, your changes will be saved. As you make changes to your campaign, you will notice the “Save” button change to “Saving…” as the editor autosaves your changes.
{% endinfo %}

Apart from our default templates, we make it easy to upload your own HTML email template. To do this, go to “create new template.” You will notice that we show you the design view by default. To get to the code view, just click the code view icon: ![]({{root_url}}/images/templates_2.png "Code View Button")

Once you have done this, you can paste the code in like so:

![]({{root_url}}/images/templates_3.png "Paste in HTML Code")

Then, you can switch back to the design view by clicking the paintbrush icon.

![]({{root_url}}/images/templates_4.png "Design View Button")

Here, you will see that we render your template, so you can easily edit it:

![]({{root_url}}/images/templates_5.png "Design View")

Once your template is all set up, just click the “save” button. You can come back and make changes to your template whenever you need.

{% anchor h2 %}
Image Library
{% endanchor %}

If you want to add images to your templates, while in the editor, click the button that looks like ![]({{root_url}}/images/image_library_icon.png "Image Library Icon")  You will then be taken to your image library,
which makes all of your images available to all your templates.

![]({{root_url}}/images/image_library_2.png "Image Library")

From here you can see all of the images that you have uploaded to date, upload new images, and select an image to be added to your template.

{% anchor h3 %}
Uploading Images
{% endanchor %}

To upload an image, click the big plus icon or the upload button. Then drag your image to the upload box. SendGrid
will show you the status of your upload and then show a thumbnail of your image in your image library.

{% warning %}
The image library can store up to 400 images, but the file size for each image cannot exceed 10MB.
{% endwarning %}

![]({{root_url}}/images/image_library_3.png "Upload an image")

{% anchor h3 %}
Inserting an Image Into Your Template
{% endanchor %}

To insert an image into your template, just click the image thumbnail in the library and you will see a form that will let you set how the image will be inserted.

From here, you can add  alt text, change the default height and width, and even set a default alignment for your images.

![]({{root_url}}/images/image_library_1.png "Insert an Image into your Template")

{% anchor h2 %}
Substitution Tags
{% endanchor %}

{% anchor h3 %}
Unsubscribe Links
{% endanchor %}

You can add a custom unsubscribe link to your template by making use of the [unsubscribe] tag within an anchor tag, like so:

{% codeblock lang:html %}
<a href="[Unsubscribe]">Your Unsubscribe Text</a>
{% endcodeblock %}

You have two options for how you implement unsubscribe links in order to be CAN-SPAM compliant:

**Option 1** - Add the [unsubscribe] tag AND choose a suppression group from the list on the left side of your campaign
builder. If you don’t add the [unsubscribe] tag somewhere in your template, but you do choose an [Unsubscribe Group]({{root_url}}/User_Guide/Email_Deliverability/Subscription_Tracking/index.html), we will
add an unsubscribe link at the very end of your email.

**Option 2** - Add your own fully functional unsubscribe link to the email. For this option, please do not choose an Unsubscribe Group, otherwise SendGrid will add it’s own unsubscribe link at the bottom of the email.

{% warning %}
If you do not implement one of the two options above, there will be NO unsubscribe link added to your emails and you will
be in direct violation of CAN-SPAM.
{% endwarning %}

{% anchor h3 %}
Adding a Weblink
{% endanchor %}

You can give your campaign recipients the option to see their email online, by adding a ```[weblink]``` tag within your template. This tag only adds the URL, so you will need to add an HTML anchor tag around this substitution tag.

{% anchor h3 %}
Use Sender Identity Information In Your Campaigns
{% endanchor %}

You can insert your sender identity information into your campaigns using the following tags within your campaign or template content.

**[Sender_Name]** - The sender's name.

**[Sender_Address]** - The sender's street address.

**[Sender_City]** - The sender's city.

**[Sender_State]** - The sender's state.

**[Sender_Zip]** - The sender's zip.

{% anchor h3 %}
Substitution Tag Default Values
{% endanchor %}

You can also choose a default value for a substitution tag to be displayed in the event that there is no unique replacement value. For example, users often write "Dear `[%first_name%]`" with the intent of replacing the substitution tag with each recipient's name. However, if there is no name on file for a particular recipient, the email will read "Dear [%first_name%]" instead of "Dear John".

This can be avoided by assigning a default value to a substitution tag using the syntax: `[%first_name|Valued Customer%]`

Now, if no name is on record for a particular recipient, the email will read "Dear Valued Customer" instead of "Dear [%first_name%]". You may choose any value to set as the default.


<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/lists.html">Lists and Segments</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/Campaigns/index.html">Create and Send Your Campaign</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
