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

Unsubscribe groups make it possible for your readers to opt out of certain types, or groups, of emails instead of globally unsubscribing from all of your emails. Unsubscribe groups are especially useful if you send very several different types of email to the same recipients.

For example, you might send transactional email, such as password reset confirmations or receipts, in addition to your marketing campaigns. Some of your recipients might want to stop receiving your marketing content while continuing to receive your transactional email.

This is accomplished by creating an unsubscribe group, and assigning that group to a campaign. An unsubscribe link is then added to your campaign. When a recipient clicks that link we log a "group unsubscribe" event, and that recipient will no longer receive any emails that are assigned that unsubscribe group.

{% anchor h2 %}
Create an Unsubscribe Group
{% endanchor %}

Navigate to **Suppressions** and click **Unsubscribe Groups**.

Click **Create New Group**.

This is where you will enter the **Group Name** and **Group Description**. The Group Name should represent the category of emails to which your campaign will belong. For example: "Weekly Newsletter" or "Monday Deals". The Group Description allows you to give your readers more detailed information about the types of emails in that group. In other words, the group description allows you to tell them exactly which emails they are unsubscribing from when they click the Unsubscribe link.

Both the Group Name and Group Description will be displayed to your recipients if/when they click the Unsubscribe link in your email, so please make sure that they are useful and relevant to your readers.

![]({{root_url}}/images/mc_group_unsubscribes_1.png)

{% anchor h2 %}
Adding Your Unsubscribe Group to Your Campaign
{% endanchor %}

Once you've created your Unsubscribe Group, navigate to **Marketing** in the left hand nav and click **Campaigns**.

Select the Campaign you want to add the Group Unsubscribe link to. Click **Edit** in the Preview Modal that appears or click the Action Cog and select **Edit** from the dropdown menu.

Look for **Campaign Settings** in the left hand sidebar. Under the **Recipients** dropdown menu in this sidebar, select your Unsubscribe Group.

Once you add a Group Unsubscribe Link to your campaign, any user who clicks that link will be added to this Unsubscribe Group!

![]({{root_url}}/images/mc_group_unsubscribes_2.png)

In the body of your campaign, insert the text you would like to use for your group unsubscribe link (e.g. "Click here to unsubscribe from these emails!")

Highlight the text you want to turn into a link and click the **small link icon** in the toolbar to open the Link Preferences window.

![]({{root_url}}/images/mc_group_unsubscribes_3.png)

Make sure that **Link Type** is set to "URL".

Under **URL** enter the tag "[Unsubscribe]" and click **Confirm**. By linking the text with the _[Unsubscribe]_ tag, any user who clicks that link will be added to the unsubscribe group you specified in your campaign settings. In this example, that would be "Fall Newsletter".

![]({{root_url}}/images/mc_group_unsubscribes_4.png)

Finally, click **Save** to save your campaign.

Congratulations! You've now successfully added a group unsubscribe link to your campaign! If one of your recipients clicks this link in your campaign, they will be added to the Unsubscribe Group shown a confirmation page.

![]({{root_url}}/images/mc_group_unsubscribes_5.png)

{% anchor h2 %}
Manage Email Preferences Links
{% endanchor %}

It is possible to add a link that will take your readers to a page where they can manage their subscription preferences. This page lists the various Unsubscribe Groups you have created and allows your recipients to either subscribe or unsubscribe from multiple groups at once.

To add the Manage Preferences link, simply follow the steps described for the Unsubscribe Link, except when inserting the tag in the Link Preferences window, use the tag "[Unsubscribe_Preferences]".

![]({{root_url}}/images/mc_group_unsubscribes_6.png)

When your recipients click this link, they will be taken to the Email Preferences page where they can unsubscribe from specific groups.

{% info %}
The Email Preferences page will only display the unsubscribe groups that you have marked as "default" in your Unsubscribe Group settings.
{% endinfo %}

![]({{root_url}}/images/mc_group_unsubscribes_7.png)

{% anchor h2 %}
Troubleshooting
{% endanchor %}

**An [unsubscribe] tag is always required in both your html and plain text content!**

SendGrid will replace this tag with a link to an unsubscribe confirmation page for your recipients.

* For HTML content using the code editor, add this tag to the href attribute of your unsubscribe link:

{% codeblock lang:html %}
<a href='[unsubscribe]'>Click Here to Unsubscribe</a>
{% endcodeblock %}

* For HTML content using the design editor, add a hyperlink to your unsubscribe text and designate the URL as "[Unsubscribe]".

* For plain text content, add the tag after your unsubscribe text. For example, "To unsubscribe, visit [unsubscribe]."
