---
st:
  published_at: 2016-06-20
  type: Classroom
seo:
  title: Unsubscribe, Sender ID, and Weblink default Tags
  description: Learn more about the default tags that you can use in Marketing Campaigns...
  keywords: tag, merge, replace, custom, feilds, unsubscribe, weblink
title: Unsubscribe, Sender ID, and Weblink default Tags
weight: 0
layout: page
navigation:
  show: true
---

This article aims to list and briefly explain the default Tags you may find yourself wanting to use in any given Campaign or Template. This covers the Tags for Unsubscribe, Sender Identity info, and the "view in browser" Weblink.

##Unsubscribe Tags

**[Unsubscribe]** - Used to place the clickable link that allows recipients to opt out of emails.

{% codeblock lang:html %}
<a href="[Unsubscribe]">Click here to Unsubscribe</a>
{% endcodeblock %}

**[Unsubscribe_Preferences]** - Takes the recipient to a landing page where they can view all of your default Unsubscribe Groups, as well as unsubscribe from those and any other groups they are part of.

{% codeblock lang:html %}
<a href="[Unsubscribe_Preferences]">Click here to update your email preferences.</a>
{% endcodeblock %}

##Sender Identity Information

**[Sender_Name]** - Inserts the the Sender Name from the Sender ID chosen for the Campaign.

**[Sender_Address]** - Inserts the the physical address from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_City]** - Inserts the the City from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_State]** - Inserts the the State from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_Zip]** - Inserts the the Zip code from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

##Miscellaneous Tags

**[Weblink]** - Places the link to allow the recipient to view the email in their browser.

{% codeblock lang:html %}
<a href="[Weblink]">Click here to view this email in your web browser.</a>
{% endcodeblock %}

###Migrating from Legacy Newsletter? Use this handy chart to update your tags!

<table class="table">
  <tr><th>Legacy Newsletter Tag</th><th>Marketing Campaigns Tag</th></tr>
  <tr><td><code>[%from_name%]</code></td><td><code>[Sender_Name]</code></td></tr>
  <tr><td><code>[%address%]</code></td><td><code>[Sender_Address]</code></td></tr>
  <tr><td><code>[%city%]</code></td><td><code>[Sender_City]</code></td></tr>
  <tr><td><code>[%state%]</code></td><td><code>[Sender_State]</code></td></tr>
  <tr><td><code>[%zip%]</code></td><td><code>[Sender_Zip]</code></td></tr>
  <tr><td><code>[weblink]</code></td><td><code>[Weblink]</code></td></tr>
  <tr><td><code>[unsubscribe]</code></td><td><code>[Unsubscribe]</code></td></tr>
</table>

{% info %}
`[Unsubscribe_Preferences]` is a new tag introduced in Marketing Campaigns!
{% endinfo %}

###Need to add tags to the Design editor? Use the link button!

Be sure that you don't link the text [unsubscribe] to the tag using the **link button**. This will cause our system to replace the plain text tag first instead of the one inside of the HTML A tag. Incorrectly linking your unsubscribe tag will cause us to place the plain/text version of the unsubscribe link, which is significantly larger looking link.  

Always link your unsubscribe tag to a word or string of text instead.

_Incorrect:_

{% codeblock lang:html %}
<a href="[unsubscribe]">[unsubscribe]</a>
{% endcodeblock %}

_Correct:_

{% codeblock lang:html %}
<a href="[unsubscribe]">Click here to unsubscribe</a></code>
{% endcodeblock %}
