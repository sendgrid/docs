---
layout: page
weight: 11
title: Old Editor Sunset
navigation:
  show: true
seo:
  title: Marketing Campaigns - Old Editor Sunset
  override: true
  description: On 16 April 2018, the old Marketing Campaigns editor is going away.
group: statistics
---
{% warning %}
On 16 April 2018, SendGrid will be discontinuing the old Marketing Campaigns editor. At that time, all campaigns will be opened and edited in the powerful new Marketing Campaigns experience.

Some maintenance may be required when moving an old campaign in the new editor for the first time. We strongly encourage you to move any remaining campaigns into the new editor by 16 April, 2018 to ensure your sending is not interrupted when the deprecation occurs.
{% endwarning %}

{% anchor h2 %}
Additional Details
{% endanchor %}

{% anchor h3 %}
Why is the old editor going away?
{% endanchor %}

Marketing Campaigns was built to empower Marketers to send beautiful messages that recipients love. In August 2017, SendGrid announced a [new, updated editing experience for Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html). The new experience was built on the success of the old editor and is focused on supporting your unique worflow. Since August, thousands of users have discovered the power, flexibility, and speed of the new editors.

The new Marketing Campaigns editors offer a markedly better experience for crafting email campaigns. They feature increased stability, more powerful features, and a streamlined, flexible workflow that saves time. With the vast majority of users already taking advantage of the new experience, our team is dedicated to investing fully in the new Marketing Campaigns editors going forward.

{% anchor h3 %}
How do I know if I'm using the old or new editor?
{% endanchor %}

It’s likely that you’re already using the new Marketing Campaigns editing experience. Since August 2017, the only way to still access the old editor has been to duplicate a campaign that was originally created in that editor. If you’re using the old editor, you will notice a bar at the top of the screen that tells you that you’re in the old experience.

{% anchor h3 %}
I am still using the old editor. What do I need to do?
{% endanchor %}

Until 16 April 2018, if you duplicate a campaign that was originally created within the old editor, you will notice an alert banner at the top of the app. You can click the button within the alert to begin moving your campaign into the new editing experience.

On 16 April 2018, if you duplicate a campaign that was originally created within the old editor, it will require you to open the campaign in one of the [new editors]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html). While many campaigns will move over seamlessly, it’s possible that – depending how you’ve edited your campaign in the past – you’ll need to make a few tweaks or take a few moments to rebuild a template in the new editor.  Rest assured, creating templates in the new editor is quick and easy – in most cases, taking only a few minutes. That said, if you have any issues at all, our [support team is available](https://sendgrid.com/support)!

{% anchor h3 %}
I use both Design and Code. Why do I need to choose one?
{% endanchor %}

Good news! If you like to build your campaigns visually, but like to roll up your sleeves to edit some code to make it perfect, the Design Editor will a great option for you. While it's called the "Design Editor," this experience still features a number ways to access and edit HTML. Each visual drag and drop module in the new builder features one-click access to your HTML content. To access, click the action menu at the top of the blue bar in each drag-and-drop module and then select the `< >` icon to get to your code. Learn more about the [new editing experience]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html).

{% info %}
If you’ve edited code in your current template but want to use it with the new visual, drag and drop editor, you will need to add our [Drag-&-Drop Markup]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html#-Importing-Custom-HTML-With-Drag--Drop-Markup).
{% endinfo %}

{% anchor h3 %}
I moved my campaign to the new editor, but something looks weird.
{% endanchor %}

Depending on how you created and edited your campaign in the old experience, some maintenance may be required when moving an old campaign in a new editor for the first time. This is due to some improvements that we made with the new experience – particularly around how HTML is handled and protected.

While these improvements offer far greater stability and speed for the long term, we know that these initial changes can be a bit frustrating. To help, we've identified two possible scenarios when migrating a campaign into the new editor, with some details on how to resolve these issues, below:

**I have a custom coded template, but want to use the Design Editor:**
<br>If you get custom code from your designer or developer and want to use it with our powerful new drag-and-drop Design editor, you can! First, our Design editor needs to be able to understand what kind of content blocks are in your email, and how it should group your content. To do this, you (or your developer) will need to add some of our [Drag and Drop Markup]({{root_url}}/User_Guide/Marketing_Campaigns/editor.html#-Importing-Custom-HTML-With-Drag--Drop-Markup) to the code.

**When I opened the new editor, my entire email got dropped into one big code module:**
<br>If you created a campaign using drag-and-drop modules in the old editor, but then edited some of the code yourself, this can cause the Design editor to view your email as a single block of code. If this is the case, we recommend that you take a few minutes to rebuild the campaign in the new drag-and-drop editor. This will ensure that your campaigns are stable, clean and any bugs from the old editor aren't copied over into the new experience.

{% anchor h2 %}
We're here to help
{% endanchor %}
We're excited for all of the new value that you're going to experience with the new editor. As always, if you have any questions or concern, our [Support team](https://support.sendgrid.com) is standing by to help.
