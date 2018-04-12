---
seo:
  title: Adding Unsubscribe Links in Marketing Campaigns
  description: Learn how to add group unsubscribe and email preferences links to your marketing campaigns.
  keywords: unsubscribe, group, group unsubscribe, unsubscribe group, manage email preferences, email preferences
title: Adding Unsubscribe Links in Marketing Campaigns
weight: 0
layout: page
navigation:
  show: true
---
{% info %}
Any email you send through Marketing Campaigns must include an unsubscribe link for your recipients to let you know if they no longer wish to receive this type of mail from you.
{% endinfo %}

<iframe src="https://player.vimeo.com/video/187705765" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [Create an Unsubscribe Group](#-Create-an-Unsubscribe-Group)
* [Adding Your Unsubscribe Group to Your Campaign](#-Adding-Your-Unsubscribe-Group-to-Your-Campaign)
* [Using a Custom Unsubscribe Link](#-Using-a-Custom-Unsubscribe-Link)
* [Manage Email Preferences Links](#-Manage-Email-Preferences-Links)
* [Troubleshooting](#-Troubleshooting)

The first step to include an unsubscribe link is to create an unsubscribe group. Unsubscribe groups allow your readers to opt out of certain types, or groups, of emails instead of globally unsubscribing from all of your emails. Unsubscribe groups are especially useful if you send several very different types of email to the same recipients.

For example, you might send transactional email, such as password reset confirmations or receipts, in addition to your marketing campaigns. Some of your recipients might want to stop receiving your marketing content while continuing to receive your transactional email. Or, they may wish to receive a weekly marketing email, but not a daily email.

After you set up your unsubscribe groups, you’ll assign the appropriate unsubscribe group to each campaign you send. Finally, you’ll add the unsubscribe link to your campaign. When a recipient clicks that link we log a "group unsubscribe" event, and that recipient will no longer receive any emails that are assigned that unsubscribe group. Additionally, we will suppress delivery of that campaign to any recipients who have previously opted out of this group.

<page-anchor el="h2">
Create an Unsubscribe Group
</page-anchor>

Navigate to **Suppressions** and click **Unsubscribe Groups**.

Click **Create New Group**.

This is where you will enter the **group name** and **group description**. The group name should represent the category of emails to which your campaign will belong. For example: "Weekly Newsletter" or "Monday Deals". The group description allows you to give your readers more detailed information about the types of emails in that group. In other words, the group description allows you to tell them exactly which emails they are unsubscribing from when they click the unsubscribe link.

Please note: both the group name and group description will be displayed to your recipients if/when they click the unsubscribe link in your email, so please make sure that they are useful and relevant to your readers.

![]({{root_url}}/images/mc_group_unsubscribes_1.png)

<page-anchor el="h2">
Adding Your Unsubscribe Group to Your Campaign
</page-anchor>

Once you've created your unsubscribe group, navigate to **Marketing** in the left hand nav and click **Campaigns**.

Select the campaign you want to add the group unsubscribe link to. Click **Edit** in the preview modal that appears or click the action menu and select **Edit** from the dropdown menu.

Look for **Settings** in the left hand sidebar. Under the **Recipients** dropdown menu in this sidebar, select your unsubscribe group.

Once you add a group unsubscribe link to your campaign, any user who clicks that link will be added to this unsubscribe group! If you send another campaign with the same unsubscribe group, SendGrid will not deliver that campaign to recipients to have been added to that unsubscribe group.

{% info %}
You can only add one unsubscribe group per campaign.
{% endinfo %}

![]({{root_url}}/images/mc_group_unsubscribes_2.png)

In the body of your campaign, insert the text you would like to use for your group unsubscribe link (e.g. "Click here to unsubscribe from these emails!")

Highlight the text you want to turn into a link and click the **small link icon** in the toolbar to open the Link Preferences window.

![]({{root_url}}/images/mc_group_unsubscribes_3.png)

Make sure that **Link Type** is set to "URL".

In the **URL** field enter the tag "[Unsubscribe]" and click **Confirm**. By linking the text with the [Unsubscribe] tag, any user who clicks that link will be added to the unsubscribe group you specified in your campaign settings, in this example Fall Newsletter.

![]({{root_url}}/images/mc_group_unsubscribes_4.png)

Finally, click **Save** to save your campaign.

Congratulations! You've now successfully added a group unsubscribe link to your campaign! If one of your recipients clicks this link in your campaign, they will be taken to a page SendGrid generates confirming that they have unsubscribed from this type, or group, of emails.

Of course, if they change their mind, they can always click “View Email Preferences” to see and manage which email groups they are opted out of.

![]({{root_url}}/images/mc_group_unsubscribes_5.png)

<page-anchor el="h2">
Using a Custom Unsubscribe Link
</page-anchor>

While unsubscribe groups are a powerful way to manage unsubscribes and email preferences, we realize some senders may have their own robust subscription management tools. For these senders, Marketing Campaigns supports custom unsubscribe links as well.

If you would like to use a custom URL for your unsubscribe link, navigate to **Settings** in the left hand sidebar and select the **Recipients** dropdown menu. Under **Unsubscribe Group**, select "Use Custom Link…"

This will add an extra field where you can insert a URL to one of your own pages where your recipients can set their subscription preferences. This is useful if you do not want to use the default SendGrid page.

![]({{root_url}}/images/mc_group_unsubscribes_8.png)

Then, insert the text you would like to link to your custom unsubscribe page in the body of your campaign. Highlight the text you want to link and click the **small link icon**. In the URL field, enter "[Unsubscribe]". Because you’ve specified your custom URL in the settings panel, SendGrid will replace the [Unsubscribe] tag with your custom URL.

<page-anchor el="h2">
Manage Email Preferences Links
</page-anchor>

While not required like an unsubscribe link, you can also add a “manage email preferences” link that will take your readers to a page where they can view all of the different types of email you send (your unsubscribe groups) and opt out of the various options.

To add the manage preferences link, simply follow the steps described for the unsubscribe link.

Then, in the body of your campaign, insert the text you would like to use for your manage preferences link (e.g. "Click here to manage your email preferences."). Highlight the text you want to turn into a link and click the **small link icon** in the toolbar to open the Link Preferences window, select link type “URL” and enter “[Unsubscribe_Preferences]" in the URL field.

![]({{root_url}}/images/mc_group_unsubscribes_6.png)

When your recipients click this link, they will be taken to an email preferences page SendGrid generates where they can opt out of the email groups you offer.

{% info %}
The Email Preferences page will only display the unsubscribe groups that you have marked as "default" in your unsubscribe group settings.
{% endinfo %}

![]({{root_url}}/images/mc_group_unsubscribes_7.png)

<page-anchor el="h2">
Troubleshooting
</page-anchor>

**An [unsubscribe] tag is always required in both your html and plain text content!**

SendGrid will replace this tag with a link to an unsubscribe confirmation page for your recipients.

* For HTML content using the code editor, add this tag to the href attribute of your unsubscribe link:

{% codeblock lang:html %}
<a href='[unsubscribe]'>Click Here to Unsubscribe</a>
{% endcodeblock %}

* For HTML content using the design editor, add a hyperlink to your unsubscribe text and designate the URL as "[Unsubscribe]".

* For plain text content, add the tag after your unsubscribe text. For example, "To unsubscribe, visit [unsubscribe]."
