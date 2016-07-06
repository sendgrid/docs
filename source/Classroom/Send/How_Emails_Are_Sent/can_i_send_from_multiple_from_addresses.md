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

Yes, it is perfectly OK to send email from different FROM addresses, we don't impose any restrictions on what is set in the FROM field in your emails.

If you are using an account that includes  [Whitelabeling]({{root_url}}/Classroom/Deliver/Delivery_Introduction/all_you_need_to_know_about_whitelabeling.html), be aware that you will want your DKIM signature to be the _same_ as the FROM address whenever possible, or you may see a 'via' or 'on behalf of' message in some mail clients. 
