---
layout: page
weight: 0
title: Global Unsubscribes
seo:
  title: Global Unsubscribes
  description: Recipients can unsubscribe from everything you send, rather than just a single group.
  keywords: Global suppressions, global unsubscribes, global email unsubscribe, global email suppression
navigation:
  show: true
---

Global unsubscribes happen when a recipient indicates that they would like to opt out from any email that you send by clicking on the [Unsubscribe From All Emails link](#-Global-Unsubscribe-Substitution-Tags) within your emails. The list provided here can be filtered by email address or date.

{% anchor h2 %}
Searching Global Unsubscribes by Date
{% endanchor %}

In the top right corner, you will see a calendar icon. Click this and choose the unsubscribe dates you would like to search between. Your recipient list will refresh, showing the recipients who unsubscribed between these dates.

{% anchor h2 %}
Removing Recipients From The List
{% endanchor %}

When you select the checkboxes next to the recipient names or select all, using the checkbox next to the search box, you will see a new button at the top of the page. From this list, you can choose to remove the selected recipients from the list.

{% anchor h2 %}
Download Global Unsubscribes as CSV
{% endanchor %}

You can download your Global Unsubscribe list as a CSV by clicking the gear icon at the top of the page and selecting “Download CSV”. The file will download in your browser right away.

{% anchor h3 %}
Global Unsubscribe Substitution Tag
{% endanchor %}


When you add the `<%asm_global_unsubscribe_url%>` tag to your email, we will replace that tag with the text "Unsubscribe From All Emails", wherever the tag is found in your email. This will allow your recipient to be globally unsubscribed from all of your emails.

Alternatively, you can use the `<%asm_global_unsubscribe_raw_url%>` tag, which will be replaced with only the global unsubscribe URL without the hyperlinked text "Unsubscribe From All Emails".

For more substitution tags, please see our [transactional templates]({{root_url}}/help-suppport/sending-email/create-and-edit-transactional-templates.html#-Adding-unsubscribe-links-to-a-template).

{% anchor h2 %}
Using the API
{% endanchor %}

You can manage your Global Unsubscribes via the [Global Suppressions API]({{root_url}}/API_Reference/Web_API_v3/Suppression_Management/global_suppressions.html).

{% anchor h2 %}
Additional Resources
{% endanchor %}

- [Global unsubscribes vs. Group Unsubscribes]({{root_url}}/help-support/analytics-and-reporting/subscription-tracking.html)
- [Group Unsubscribes]({{root_url}}/help-support/sending-email/group-unsubscribes.html)
- [Invalid Emails]({{root_url}}/help-support/sending-email/index-suppressions.html)
