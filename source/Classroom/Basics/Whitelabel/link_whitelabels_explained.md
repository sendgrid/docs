---
st:
  published_at: 2017-03-02
  type: Classroom
seo:
  title: Email Link Whitelabels Explained
  description: Why should I whitelabel my email links?
  keywords: whitelabel, DNS, links
title: Email Link Whitelabels Explained
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
What are link whitelabels?
{% endanchor %}

When you have click or open tracking turned on or put a link or an image that has been hyperlinked into an email, the click tracking links will be overwritten with SendGrid click tracking links. To prevent SendGrid from being displayed in your message headers or the HTML for your links, we recommend you whitelabel your email links.

{% anchor h2 %}
Why should I whitelabel my links?
{% endanchor %}

Some bad actors will use third party link shortening services to populate the domains they list in their email content and they do not include their own domain in those links and do this in an attempt to mask the true destination of the links. This practice is a red flag to spam filters and can negatively impact deliverability.

By whitelabeling your links, you can improve the deliverability and legitimacy of your content by showing that you control it entirely. To learn more about link whitelabeling, please see our [links whitelabel documentation]({{root_url}}/User_Guide/Settings/Whitelabel/links.html).
