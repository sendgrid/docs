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
It is possible to track the number of times each link in one of your [campaigns]({{root_url}}/User_Guide/Marketing_Campaigns/index.html) was clicked. When you navigate to your [campaigns]({{site.app_url}}/marketing_campaigns/campaigns), click the action menu next to the campaign, and select Stats. You will then be able to see the detailed statistics for the campaign, including a table displaying a list of your links along with the number of unique clicks, and total clicks, for each link.

![]({{root_url}}/images/link_tracking.png)

{% info %}
It is important to make sure that you are formatting your HTML links correctly in order for them to successfully be tracked. If you are having problems with click tracking, please [click here]({{root_url}}/Classroom/Track/Clicks/click_tracking_html_best_practices.html).
{% endinfo %}

<page-anchor el="h2">
Tracking Links With Custom Fields and Substitution Tags
</page-anchor>

There are some special considerations to take into account when using substitution tags and [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html) in the links that you want to track in Marketing Campaigns.

If you have included a substitution tag for a custom field in the beginning of an HTML link's `href` attribute, but the custom field does not include  `http://` or `https://`, we will automatically prepend the custom field with `http://`. This ensures that the link is [formatted correctly]({{root_url}}/Classroom/Track/Clicks/click_tracking_html_best_practices.html) for click tracking.

For example, let's create a link that we can track using the custom field `first_name` and a substitution tag `[%my_link%]`.

`first_name` is the first name of each recipient and `[%my_link%]` will be a substitution tag for a specific URL that you would like to send to a specific recipient.

If we use the syntax for [substitution tag default values]({{root_url}}/User_Guide/Marketing_Campaigns/templates.html#-Substitution-Tag-Default-Values), we can format the HTML for this link as `<a href=[% my_link | default.com %]>click here [%first_name%]</a>`

* If we do not include a URL for `my_link`, and send the email to a recipient with the first name Sarah, the link will look like the following after the substitutions have been made: `<a href=http://default.com>click here Sarah</a>`
* If we send the same link in an email to a recipient with the first name Steve but include the URL `gohere.com`, the link will be: `<a href=http://gohere.com>click here Steve</a>`
* If we send the email to a recipient with the first name Jerry and include the URL `https://mysite.com`, the link will be: `<a href=http://mysite.com>click here Jerry</a>`

It is important to make sure that you format your HTML links properly so that the substitutions can be made, and so that click tracking can be applied to each link.

Click tracking can be turned off for individual links by including the `clicktracking=off` attribute inside the anchor of an HTML link *before* the `href`. For example, `<a clicktracking=off href=http://example.com>link text</a>` would not be tracked.
