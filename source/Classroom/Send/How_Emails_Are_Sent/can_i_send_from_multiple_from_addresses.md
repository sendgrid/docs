---
seo:
  title: Can I send from multiple FROM addresses?
  description: Can I send from multiple FROM addresses?
  keywords: from, dkim, whitelabel, getting_started
title: Can I send from multiple FROM addresses?
weight: 0
layout: page
zendesk_id: 200181878
navigation:
  show: true
---

Yes, it is perfectly OK to send email from different FROM addresses, we don't impose any restrictions on what is set in the FROM&nbsp;field&nbsp;in your emails.

If you are using an account that includes&nbsp; [Whitelabeling](http://support.sendgrid.com/hc/en-us/articles/200548228-All-You-Need-to-Know-About-Whitelabeling),&nbsp;be aware that you will want your DKIM signature to be the _same_ as the FROM address whenever possible, or you may see a 'via' or 'on behalf of' message in some mail clients.&nbsp;
