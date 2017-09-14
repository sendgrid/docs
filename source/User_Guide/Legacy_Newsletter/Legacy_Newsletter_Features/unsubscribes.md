---
seo:
  title: Marketing Email Unsubscribes
title: Marketing Email Unsubscribes
weight: 0
layout: page
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/2v1J4QVgYVo?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

Emails sent through [Marketing Campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/index.html) will contain an unsubscribe link regardless of whether or not the [Subscription Tracking Setting]({{root_url}}/User_Guide/Settings/tracking.html) is turned on. When creating a new campaign using your own HTML code, make sure that you do not delete `"To unsubscribe please click <a href="[unsubscribe]">here</a>"` from the email body, otherwise SendGrid will NOT automatically add the unsubscribe link.

When users unsubscribe from a marketing email they do not end up on a global unsubscribe list. Each Marketing Email recipient list has it’s own unsubscribes. Recipients that unsubscribe from these emails are unsubscribing from future emails sent to that specific list. You can use separate lists to allow your recipients to unsubscribe from certain types of messages while still receiving others.

You can export your unsubscribes from each list by hovering over the recipient list in question, selecting “Export,” and then selecting the “Unsubscribes” checkbox.

To add the exported unsubscribe list to a different recipient list, select “Manage Unsubscribes” and then “Upload.” You can also [add emails to your global unsubscribe list using an API call]({{root_url}}/API_Reference/Web_API/unsubscribes.html#-add).

To export the unsubscribes from all of your different lists by selecting the “Download as CSV from all lists” option under “Manage Unsubscribes.”

See Also: [Suppression Manager]({{root_url}}/User_Guide/Suppressions/index.html)
