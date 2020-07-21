---
seo:
  title: Click Tracking & HTML Best Practices
  description: Click Tracking & HTML Best Practices
  keywords: a href, /wf/, cname, <a>, http, https, click, html, click_tracking
title: Click Tracking & HTML Best Practices
group: click-tracking
weight: 0
layout: page
zendesk_id: 200181448
navigation:
  show: true
---

If you are experiencing issues with the click tracking setting not replacing your original links, please take a look at your link formatting. Links must be in the proper format in order for our click tracking setting to find and replace them: 
Links must be within an HTML `<a>` tag with the `href` argument within the tag. There must not be spaces around the `=` in the `href` attribute, the URI must be quoted, and must be proceeded by **`"http://`** or **`"https://`**. 
Here are some example links that will be properly replaced by our click tracking app:

`<a href="http://www.sendgrid.com">SendGrid</a>`

`<a href="https://sendgrid.com">SendGrid</a>`

`<a target="_blank" href="https://sendgrid.com">SendGrid</a>`

Note that a link shouldn’t be a custom field or buried within a custom field. For example: 

`<a href="{{ birthday_url }}"></a>` will not work. Instead you should format your link like this: `<a href="http://yoursite.com/{{ birthday_url }}"></a>`
{{ user_profile_blurb }} resolves to The quick brown <a href="http://google.com">fox</a> jumps over the lazy dog will also not work.


The following links, even though they may still resolve, will not be captured or replaced by our click tracking system:

`<a href="sendgrid.com">SendGrid</a>`

`<a href="www.sendgrid.com">SendGrid</a>`

`<a href= http://www.sendgrid.com>SendGrid</a>`

`<a href = "https://sendgrid.com">SendGrid</a>`

<call-out>

If you are in the habit of BASE64 encoding your email content, we will be unable to detect the encoded `<a>` tags and overwrite them, so clicks will not be tracked in this case.

</call-out>

Click tracking can be turned off for individual links by including the `clicktracking=off` attribute inside the anchor of an HTML link *before* the `href`. For example, `<a clicktracking=off href="http://example.com">link text</a>` would not be tracked.


If you have a Pro 100K package or higher and you have [authenticated]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/) your sending IP address, the replaced click tracking links lie under the authenticated subdomain. Pro 100K and higher packages that have not authenticated, Essentials packages, and Free packages have click tracking links that resolve through one of SendGrid's domains (sendgrid.net, sendgrid.info, sendgrid.me, etc.).

