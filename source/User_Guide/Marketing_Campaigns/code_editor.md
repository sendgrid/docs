---
layout: page
weight: 75
title: Code Editor
navigation:
  show: true
seo:
  title: Code Editor
  override: true
  description:
---

Use the Code Editor to create a template, edit a SendGrid template, or build a campaign with your own custom HTML. With helpful features like preview, tag completion, and error flagging, you can confidently edit your HTML.

{% anchor h2 %}
Getting Started with the Code Editor
{% endanchor h2 %}

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.  

1. Click **Create Campaign**. To create a campaign from an existing one, find the version you want to use and click the **action menu** next to the campaign and then select **Edit** or **Duplicate**. 

![]({{root_url}}/images/duplicate_campaign.png)

1. Select the template that you want to use for your campaign. You can select a Blank Template, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Working With Templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). 

1. Select **Code Editor**, and then click **Continue**. 

1. If you have already built the HTML that you want to use in another application, copy and paste that code directly into the content area of the code editor. You can also write the HTML for your campaign or template directly in the code editor. The code editor has predictive text completion, color-coded syntax highlighting, and detailed error messages.

1. Preview your campaign or template by clicking the **Preview** button. You can toggle between a preview of how your campaign or template will appear on a recipient's desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area. You can also view a plain-text version of your campaign or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button. 

{% warning %}
Once you create a new campaign or template in the Code Editor, you cannot switch to the Design Editor.
{% endwarning %}

{% anchor h2 %}
Uploading Images
{% endanchor h2 %}

1. Select the **Images** tab, and click **Manage Image Library**. A window opens where you can upload images to your image library.  

1. Select the image you want from your image library. The Image Details tab appears.  

1. Copy the URL in the **Image Source URL** tab by clicking **Copy URL**.  

1. Paste this URL in the image source tag in your campaign or template's HTML. For example: `<img src="your image URL here">` 

{% anchor h2 %}
Using Substitution Tags
{% endanchor h2 %}

Substitution tags allow you to easily generate dynamic content for each recipient on your contact list. When you send to a list of recipients you can specify substitution tags specific to each recipient.

**To add a substitution tag to your campaign:** 

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

For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`[%first_name | Valued Customer%]`

{% anchor h2 %}
Previewing your campaign
{% endanchor h2 %}

To preview your campaign or template, click the **Preview** button in the upper-left corner.

You can toggle between a mobile and desktop preview mode by clicking either the desktop or mobile phone icons above the content area. 

To view a plain text version of your campaign or template, click the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

 

When previewing a campaign, you will also see a preview of the From name, the Subject, and the preheader text that you have selected.
