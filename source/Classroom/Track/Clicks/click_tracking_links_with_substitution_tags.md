---
seo:
  title: Click Tracking and Substitution Tags in Marketing Campaigns
  description: How to use click tracking for links that have substitution tags in your campaigns.
  keywords: Marketing Campaigns, substitution tags, clicks, click tracking, links, custom fields
title: Click Tracking and Substitution Tags in Marketing Campaigns
weight: 0
layout: page
navigation:
  show: true
---
It is possible to track the number of times each link in one of your [campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/index.html) was clicked. All you need to do is enable [click tracking]({{root_url}}/User_Guide/Settings/tracking.html) in your tracking settings. When you navigate to your [campaigns]({{site.url}}/marketing_campaigns/campaigns), click the Action Cog next to the campaign, and select Stats you will then be able to see the detailed statistics for the campaign, including a table displaying a list of your links with the number of unique clicks, and total clicks for each link.

![]({{root_url}}/images/marketing_campaigns_link_tracking.jpg)

{% info %}
It is important to make sure that you are formatting your HTML links correctly in order for them to successfully be tracked. If you are having problems with click tracking, please [click here]({{root_url}}/Classroom/Track/Clicks/click_tracking_html_best_practices.html).
{% endinfo %}

{% anchor h2 %}
Tracking Links With Custom Fields and Substitution Tags
{% endanchor %}

There are some special considerations to take into account when using substitution tags and [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html) in the links that you want to track in Marketing Campaigns.

If you have included a substitution tag for a custom field in the beginning of an HTML link's `href` attribute, but the custom field does not include  `http://` or `https://`, we will automatically prepend the custom field with `http://`. This ensures that the link is [formatted correctly]({{root_url}}/Classroom/Track/Clicks/click_tracking_html_best_practices.html) for click tracking.

For example, let's create a link with the custom field `first_name` and a substitution tag `[%my_link%]` where `first_name` is the first name of each recipient and `[%my_link%]` is a substitution tag for a specific URL that you would like to send to a specific recipient.

If we format our link as

`<a href=[% my_link | default.com %]>click here [%first_name%]</a>`

and we do not include a URL for my_link, but send the email to a recipient with the first name Sarah, the link will be substituted as

`<a href=http://default.com>click here Sarah</a>`

If we send the email to a recipient with the first name Steve and include the URL `gohere.com`, the link will be substituted as

`<a href=http://gohere.com>click here Steve</a>`

If we send the email to a recipient with the first name Jerry and include the URL `https://mysite.com`, the link will be substituted as

`<a href=http://mysite.com>click here Jerry</a>`
