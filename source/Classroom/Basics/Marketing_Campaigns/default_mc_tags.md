---
st:
  published_at: 2016-06-20
  type: Classroom
seo:
  title: Unsubscribe, Sender ID, and Weblink System Tags
  description: Learn more about the system substitution tags that you can use in Marketing Campaigns...
  keywords: tag, merge, replace, custom, fields, unsubscribe, weblink
title: Unsubscribe, Sender ID, and Weblink System Tags
weight: 0
layout: page
navigation:
  show: true
---

SendGrid has a number of system substitution tags available for you to use to dynamically insert specific content into your campaigns. These include substitution tags for unsubscribe links, subscription management links, sender identity info, and the “view in browser” weblink.

Please note: these system substitution tags are not the same as [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html) in Marketing Campaigns or tags in Legacy Newsletter.

{% anchor h2 %}
Unsubscribe Tags
{% endanchor %}

**[Unsubscribe] -** Used to place the clickable link that allows recipients to opt out of emails with the associated unsubscribe group. Simply use this tag in place of a URL and unsubscribers will be sent to an unsubscribe page SendGrid creates on your behalf. Alternatively, if you designate a custom unsubscribe URL, SendGrid will populate the [Unsubscribe] tag with the link you provide.

For detailed instructions on how to use this tag, click [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html)!

{% codeblock lang:html %}
<a href="[Unsubscribe]">Click here to Unsubscribe</a>
{% endcodeblock %}

**[Unsubscribe_Preferences] -** Takes the recipient to a landing page where they can view all of your system [Unsubscribe Groups]({{root_url}}/User_Guide/Suppressions/advanced_suppression_manager.html), as well as unsubscribe from those and any other groups they are part of.

{% codeblock lang:html %}
<a href="[Unsubscribe_Preferences]">Click here to update your email preferences.</a>
{% endcodeblock %}

{% warning %}
[CAN-SPAM]({{root_url}}/Glossary/can_spam.html) requires that you include either an unsubscribe link or a subscription preferences link in every commercial email you send. You can include these links by inserting the **[Unsubscribe]** or **[Unsubscribe_Preferences]** tag in your content.
{% endwarning %}

{% anchor h2 %}
Sender Identity information
{% endanchor %}

**[Sender_Name] -** Inserts the From name associated with the Sender Identity chosen for the campaign. (Sender Identities are chosen from the Settings tab within the Campaign Editor.)

{% info %}
To create a new Sender Identity, navigate to **Marketing Campaigns** in the left hand sidebar, and select **Senders**. Click **Create New Sender** and enter the details of your new sender.
{% endinfo %}

**[Sender_Address] -** Inserts the the physical address associated with the Sender Identity chosen for the campaign. This is required in order to be compliant with [CAN-SPAM]({{root_url}}/Glossary/can_spam.html).

**[Sender_City] -** Inserts the the city associated with the sender identity chosen for the Campaign. This is required in order to be compliant with [CAN-SPAM]({{root_url}}/Glossary/can_spam.html).

**[Sender_State] -** Inserts the the state associated with the sender identity chosen for the Campaign. This is required in order to be compliant with [CAN-SPAM]({{root_url}}/Glossary/can_spam.html).

**[Sender_Zip] -** Inserts the the zip code associated with the sender identity chosen for the Campaign. This is required in order to be compliant with [CAN-SPAM]({{root_url}}/Glossary/can_spam.html).

{% info %}
**[Sender_State]** and **[Sender_Zip]** are not required for international senders. If you reside outside of the USA, you may leave these fields blank.
{% endinfo %}

{% anchor h2 %}
Miscellaneous Substitution Tags
{% endanchor %}

**[Weblink] -** Inserts a URL to allow recipients to view your email content directly in their web browser. The URL for this link is dynamically created by SendGrid.

Here’s an example of how you can leverage this url in a link tag:

{% codeblock lang:html %}
<a href="[Weblink]">Click here to view this email in your web browser.</a>
{% endcodeblock %}

You can use the link button if you are using the design editor to add the [Weblink] tag.

{% anchor h3 %}
Migrating Your Substitution Tags from Legacy Newsletter to Marketing Campaigns
{% endanchor %}

When migrating from Legacy Newsletter to Marketing Campaigns, it is important to make sure that you are using the new syntax for system substitution tags.

For a quick reference and comparison between the Legacy Newsletter and Marketing Campaigns system substitution tags, see the chart below.

{% info %}
Please note that system substitution tags are not the same as Legacy Newsletter [tags]({{root_url}}/User_Guide/Legacy_Features/Marketing_Emails/tags.html) or Marketing Campaigns [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html)!

All Legacy Newsletter custom tags are migrated to Marketing Campaigns when you migrate your recipients.
{% endinfo %}

{% info %}
Marketing Campaigns system substitution tags use only brackets: **[Sender_Name]**
Marketing Campaigns custom substitution tags use brackets and percents: **[%birth_date%]**

Legacy Newsletter system substitution tags use both brackets and percents: **[%from_name%]** Legacy Newsletter custom substitution tags use only brackets: **[birth_date]**
{% endinfo %}

<table class="table">
  <tr><th>Legacy Newsletter Tag</th><th>Marketing Campaigns Tag</th></tr>
  <tr><td>[%from_name%]</td><td>[Sender_Name]</td></tr>
  <tr><td>[%address%]</td><td>[Sender_Address]</td></tr>
  <tr><td>[%city%]</td><td>[Sender_City]</td></tr>
  <tr><td>[%state%]</td><td>[Sender_State]</td></tr>
  <tr><td>[%zip%]</td><td>[Sender_Zip]</td></tr>
  <tr><td>[%weblink%]</td><td>[Weblink]</td></tr>
  <tr><td>[%unsubscribe%]</td><td>[Unsubscribe]</td></tr>
</table>

{% info %}
Note: if you're migrating contacts from SendGrid's Legacy Newsletter to Marketing Campaigns, you'll need to reformat your Legacy Newsletter tags to Marketing Campaigns [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html) as shown below.
{% endinfo %}

<table class="table">
  <tr><th>Legacy Newsletter Tag</th><th>Marketing Campaigns Tag</th></tr>
  <tr><td>[first_name]</td><td>[%first_name%]</td></tr>
  <tr><td>[gender]</td><td>[%gender%]</td></tr>
</table>

{% info %}
**[Unsubscribe_Preferences]** is a new tag introduced in Marketing Campaigns! The link inserted from this tag will take your recipients to a page where they can unsubscribe and resubscribe to your email groups. For more information on how to use this tag, please [click here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).
{% endinfo %}

{% anchor h2 %}
To add tags using the Design Editor, use the link button!
{% endanchor %}

![]({{root_url}}/images/mc_tag_weblink.gif)

Note: Marketing Campaigns reads “[Unsubscribe]” as “replace with the unsubscribe URL”. Therefore, using [Unsubscribe] as text in your email (vs. within the link preferences URL box as shown above, or within the `<a>` tag of a link) will result in the actual unsubscribe URL being displayed as text in the body of your email.

**Always use the [Unsubscribe] tag as the link itself, not the hyperlinked text.**

_Incorrect: [unsubscribe] from this email._

{% codeblock lang:html %}
<a href="[unsubscribe]">[unsubscribe]</a> from this email.
{% endcodeblock %}

_Correct: Click here to unsubscribe._

{% codeblock lang:html %}
<a href="[unsubscribe]">Click here to unsubscribe</a>
{% endcodeblock %}
