---
layout: page
weight: 0
title: Legacy Newsletter Tags
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZM-htj1XdcA?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

There are a few special tags you can add to the body of your Legacy email. These tags are case insensitive so if you make a mistake SendGrid knows what tags you want to use.

You can also add custom tags to your emails. Custom Tags can be created by going to [Legacy Newsletter \> My Recipients \> Manage]({{site.marketing_email_url}}/lists). From here you can choose the list you wish to create tags for by clicking on the custom tags menu item in the list table. Simply click on Add a Custom Tag and enter in your tag name. We will automatically generate the tag name based on what you've entered.

Be sure to use a tag name the corresponds with an actual column of data in your recipient list file. If not, the tag will not insert any data into the content of the email and the end user will see the custom tag. If you have created a new custom tag for a recipient list (one that has no column of data) then we will create a new column for you on your recipient list that you can backfill with the correct data so when using the custom tag actual data will be passed into the content of your email.

{% anchor h2 %}
[weblink]
{% endanchor %}

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ye_I15JPt4Q?rel=0" frameborder="0" allowfullscreen></iframe></div>

Place the `[weblink]` tag in the body to provide a link to a hosted copy of the email content. The tag is replaced with the URL, so to create a link, use the following HTML:

{% codeblock lang:html %}
<a href="[weblink]">View this email in your browser</a>
{% endcodeblock %}

* * * * *

{% anchor h2 %}
[unsubscribe]
{% endanchor %}

Place the `[unsubscribe]` tag in the body to provide an unsubscribe link. The tag is replaced with the URL, so to create a link, use the following HTML:

{% codeblock lang:html %}
<a href="[unsubscribe]">Unsubscribe from these emails</a>
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Sender Address Tags
{% endanchor %}

There are several tags you can use to embed sender address information in your email body. Available tags are `[%from_name%]`, `[%address%]`, `[%city%]`, `[%state%]`, and `[%zip%]`.

{% codeblock lang:html %}
[%from_name%]
[%address%], [%city%], [%state%], [%zip%]
{% endcodeblock %}

* * * * *

{% anchor h2 %}
Custom Tag Sending Best Practices
{% endanchor %}

At SendGrid we are always trying to help our customers send marketing email more efficiently. We recently did some research and attempted to provide some best practices when creating email custom tags. Below are some tests we ran to provide our customers custom tag benchmarks to consider when sending large volumes of Legacy Newsletters.

### The Test

The total number of custom tags was computed based on:

<li>
The MAX size of the POST Request allowed by the WEBAPID (20480000 b = almost 20Mb)

</li>
<li>
The MAX size of the content (characters) of each custom tag.

</li>
<li>
Batch sending (of 1000 recipients per batch)

</li>
### Tests Results

<li>
256 characters per content - total allowed custom tags: 75

</li>
<li>
128 chars per content - total allowed custom tags: 140

</li>
<li>
64 chars per content - total allowed custom tags: 250

</li>
### Recommendations

You should try to keep your custom tag total character count relatively small especially if you want to use more custom tags in your emails. If you choose to have custom tags with a lot of characters then try to limit the total amount of custom tags in your recipient lists. Referencing the tests above you can determine a safe amount of tags to use depending on the size of those tags that can result in efficient email batching when sending Legacy Newsletters with SendGrid.
