---
st:
  published_at: 2016-06-10
  type: Classroom
seo:
  title: Click tracking links have stopped working.
  description: Click tracking links have stopped working.
  keywords: provider, cname, tracking, http, https, click, dns, URL, domain, new, redirect, links, stopped, working, syntax, website, hosting, broken, change
title: Click tracking links have stopped working.
weight: 0
layout: page
zendesk_id: 204074166
navigation:
  show: true
---

If you are experiencing an issue where you or your recipients are seeing SendGrid click tracked links not redirecting properly, or simply timing out, it could be due to one of several conditions.

 

**Target URL is invalid **

Be sure to go back and check your original email to ensure the URL you are passing (that is, before it gets to us) is indeed a valid link. Our click tracking mechanism does not validate URLs beyond looking for a http(s) protocol, a www., and an <a href html tag.

If you are unsure what the original link was, feel free to contact Support using the options below. If you can provide us an example link from a sent email that is failing, we can decode the link to determine the original URL. 

 

**Your whitelabel CNAME record is not valid.**

If your account is Pro 100K or higher, and you have completed the [Whitelabel](https://sendgrid.com/whitelabel/wizard/page/2), you were prompted to add a CNAME record to allow us to write your own domain into your click tracked links.

This record not only allows for your click tracked links to appear to be directly from your domain, but also allows users to properly redirect back to SendGrid before going on to their final destination. This redirect allows us to track clicks and increment them in your account statistics. If this record is entered incorrectly or deleted in your DNS host, it can potentially break links within your emails.

To check if your CNAME record is up to date, simply use the Unix command **dig** to check your whitelabel subdomain. The easiest way to go about this is to use Terminal on a Mac platform. 

The command should look like: **dig cname sub.domain.tld,** where "sub.domain.tld" will be the subdomain and top level domain you used in the validation step of the Whitelabel Wizard, usually _email.yourdomain.com_, or _em.yourdomain.com_.

![]({{root_url}}/images/terminaldigcname.png)

If this is set up correctly, you should see **sendgrid.net** in the _answer_ section. If you do not see that, please contact your IT staff, hosting provider, or whomever controls your domain's DNS settings to see if the record has been published correctly. 


If you are not on a Mac, you can also use the [CNAMELookup](http://mxtoolbox.com/CNAMELookup.aspx) tool provided by MxToolbox, simply enter your whitelabel subdomain, and hit enter. As above, your subdomain should be pointed to the canonical name _sendgrid.net._

 

For more tips on Click Tracking best practices, as well as proper HTML syntax for links, [check here]({{root_url}}/Classroom/Track/Clicks/click_tracking_html_best_practices.html) for more information. 
