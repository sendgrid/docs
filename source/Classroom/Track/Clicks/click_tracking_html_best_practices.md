---
seo:
  title: Click Tracking & HTML Best Practices
  description: Click Tracking & HTML Best Practices
  keywords: a href, /wf/, cname, <a>, http, https, click, html, click_tracking
title: Click Tracking & HTML Best Practices
weight: 0
layout: page
zendesk_id: 200181448
navigation:
  show: true
---

If you are experiencing issues with the Click Tracking application not replacing your original links, please take a look at your link formatting. Links must be in the proper format in order for our Click Tracking app to find and replace them. Links must be within an HTML `<a>` tag and be proceeded by **`"http://`** &nbsp;or&nbsp; **`"https://`**  
Here are some example links that will be properly replaced by our Click Tracking app:

`<a href="http://www.sendgrid.com">SendGrid</a>`

`<a href="http://sendgrid.com">SendGrid</a>`

&nbsp;The following links, even though they may still resolve, will not be captured or replaced by our Click Tracking system:&nbsp;

`<a href="sendgrid.com">SendGrid</a>`

`<a href="www.sendgrid.com">SendGrid</a>`

`<a href=http://www.sendgrid.com>SendGrid</a>`

&nbsp;

{% info %}
_Please note: If you are in the habit of BASE64 encoding your email content we will be unable to detect the encoded `<a>` tags and overwrite them, so Clicks will not be tracked in this case._
{% endinfo %}

&nbsp;

If you have a Silver package or higher and you have Whitelabeled your sending IP address, the replaced Click Tracking links lie under the Whitelabeled subdomain. Silver and higher accounts that have not Whitelabeled, Bronze accounts, and Free accounts have Click Tracking links that resolve through one of SendGrid's domains (sendgrid.net, sendgrid.info, sendgrid.me, etc.).

&nbsp;

If you are having issues where click tracking links are being placed properly, but the resultant links simply not working, [check here]({{root_url}}/Classroom/Track/Clicks/click_tracking_links_have_stopped_working.html) for more troubleshooting tips.
