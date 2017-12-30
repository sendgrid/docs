---
layout: page
weight: 70
seo:
  title: Migrating Content
  description:
title: Migrating Content
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is now retired.
As a safety net, you may **retrieve** data for a short grace period. Please act now to download your data or migrate any assets to Marketing Campaigns.
{% endwarning %}

For assistance please [contact our support team](https://support.sendgrid.com/). Login to see your contact options.

<iframe src="https://player.vimeo.com/video/144756876" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Marketing Campaigns offers a library of responsive templates as well as an easy-to-use campaign builder. However, if you have templates in Legacy Newsletter that you’d like to reuse in Marketing Campaigns, here’s a step-by-step migration guide.

Begin by navigating to Legacy Newsletter.

Go to **Marketing Email** and click **Manage**.

First, we'll walk through the process of migrating content created using HTML in the Code Editor. Then, we will explain how to migrate content created using either the Drag & Drop Editor or Basic Templates.

{% anchor h2 %}
Migrating Content Created in the Code Editor
{% endanchor %}

Mouse over the email that you want to migrate content from and click **Edit**.

This will take you to the Design section of Legacy Newsletter where you normally create and edit your newsletters.

First, you want to download any images that you've included in your newsletter. To successfully migrate all of your content, you’ll need to begin by manually migrating your images:

Hover your mouse over the image you want to migrate, and click the pencil shaped edit button.

Right click on the image and select "Save image as…" to download the image to your computer.

Repeat this process for each image that you want to migrate into Marketing Campaigns.

Next, select all of the HTML for your newsletter and copy it to your clipboard or a plain text editor.

Navigate to **Marketing Campaigns** and click **Templates**. Click **Create a New Template**, give it a name, and click the **Code** toggle switch. Delete the example HTML that's displayed and paste in your copied HTML from Legacy Newsletter.

{% warning %}
After pasting your copied HTML into the Marketing Campaigns code editor, do not toggle into the design editor. Continue updating your tags and adding your images within the code editor to ensure that the formatting of your template remains consistent.
{% endwarning %}

Next, you need to update any tags that you used in your newsletter template to match the tags used by Marketing Campaigns.

<table class="table">

  <tr>
    <th>Legacy Newsletter Tag</th>
    <th>Marketing Campaigns Tag</th>
  </tr>

  <tr>
    <td>[%from_name%]</td>
    <td>[Sender_Name]</td>
  </tr>

  <tr>
    <td>[%address%]</td>
    <td>[Sender_Address]</td>
  </tr>

  <tr>
    <td>[%city%]</td>
    <td>[Sender_City]</td>
  </tr>

  <tr>
    <td>[%state%]</td>
    <td>[Sender_State]</td>
  </tr>

  <tr>
    <td>[%zip%]</td>
    <td>[Sender_Zip]</td>
  </tr>

  <tr>
    <td>[weblink]</td>
    <td>[Weblink]</td>
  </tr>

  <tr>
    <td>[unsubscribe]</td>
    <td>[Unsubscribe]</td>
  </tr>

  <tr>
    <td></td>
    <td>[Unsubscribe_Preferences]*</td>
  </tr>

</table>

\* _Unsubscribe preferences is only available in Marketing Campaigns and allows your recipients to opt into, or out of, specific types of content. For more info on the [unsubscribe_preferences] tag, click [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html#-Manage-Email-Preferences-Links). For more general information about all of these tags, click [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/default_mc_tags.html)._

Once you have updated any tags included in your campaign, you'll want to make sure that you upload the images that you downloaded from Legacy Newsletter into your Marketing Campaigns image library.

When viewing your new campaign, click the small image icon on the toolbar to open your image library.

![]({{root_url}}/images/tool_bar_images.png)

Click the large green plus button to begin uploading your saved images.

Once you've finished uploading all of your images, simply insert them into your campaign. We recommend previewing your campaign using the preview buttons at the top of the editor to ensure that your campaign displays properly for desktop, mobile, and text-only viewers.

Finally, click **Save**. Whenever you create a new campaign in Marketing Campaigns, this template will now be displayed as an option for you to use.

{% anchor h2 %}
Migrating Content Created Using Basic Templates or the Drag & Drop Editor
{% endanchor %}

There are three possible options for migrating content from Legacy Newsletter that was created using Basic Templates or the Drag & Drop Editor.

1. **Fresh Start:** Recreate your newsletter from scratch in Marketing Campaigns using the new Drag & Drop Editor.
2. **Quick and Dirty:** Send yourself a test newsletter, copy the source code of the newsletter, and paste that code into Marketing Campaigns.
3. **Technical:** Leverage the Legacy Newsletter and Marketing Campaigns API to retrieve your content from Legacy Newsletter and post that content to Marketing Campaigns.

{% anchor h3 %}
Fresh Start
{% endanchor %}

You might decide to take this opportunity to refresh your content by recreating it in the Marketing Campaigns Drag & Drop editor.

Navigate to **Marketing Campaigns**, select **Templates**, and click **Create New**.

After naming your new campaign, toggle the Drag & Drop editor to **On**. This will present you with a **Build** tab where you can view each of the modules needed to create a beautiful and engaging campaign. [Click here]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html) for more instructions on how to use the Drag & Drop editor.

{% anchor h3 %}
Quick and Dirty
{% endanchor %}

Navigate to **Legacy Newsletter** and click **Manage**. Find the newsletter that you want to migrate, hover over that newsletter and click **Edit**.

Since this newsletter was created using either Basic Templates or the Drag & Drop editor, we can't immediately view the source code from the designer. In order to view the source code, we'll have to send ourselves a test version of this newsletter.

Click **Send a Test** and enter your email address.

Once you see the newsletter appear in your inbox, open it and view the source code.

For example, to accomplish this using Gmail, click **View Original** and select and copy all of the text beginning and ending with the `<HTML>` tag. Paste this code into Marketing Campaigns according to the steps described in the first half of this article.

Once delivered to your inbox, the content of your email will be encoded as Quoted-Printable text, and must be decoded before you paste it into Marketing Campaigns in order to maintain the original formatting.

Decoding your campaign is simple. Simply paste all of the text beginning and ending with the <HTML> tag that you copied from your inbox into an [online decoder](http://www.motobit.com/util/quoted-printable-decoder.asp) and click **Decode the source data**. Then you can paste the outputted text into Marketing Campaigns.

![]({{root_url}}/images/decode_quoted_printable.gif)

Again, please make sure that you re-host your images in the Marketing Campaigns image library and update any of your old Legacy Newsletter tags to match the tags used by Marketing Campaigns.

{% anchor h3 %}
Technical
{% endanchor %}

A third and slightly more technical option for you to consider is using an application called [Postman](https://www.getpostman.com/) to leverage SendGrid's [Legacy Newsletter API]({{root_url}}/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/index.html) and [Marketing Campaigns API]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/index.html) to pull content from Legacy Newsletter to be "posted" to Marketing Campaigns.

{% anchor h2 %}
Additional Resources
{% endanchor %}

- [Migrating Images]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_images.html)
- [Downloading Historical Statistics]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/downloading_historical_statistics.html)
- [SendGrid Support]({{site.support_url}})
