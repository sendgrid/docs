---
st:
  published_at: 2016-06-09
  type: Classroom
seo:
  title: DNS records and underscores
  description: DNS records and underscores
  keywords: 
title: DNS records and underscores
weight: 0
layout: page
zendesk_id: 200185218
navigation:
  show: true
---

Some DNS providers do not support underscores in zone file entries, however an underscore is required in some DNS entries outlined in the [Whitelabel]({{root_url}}/User_Guide/Settings/Whitelabel/index.html) process.

If your provider does not allow you to use underscores, you may need to consider changing DNS hosting provider if you want to take advantage of the Whitelabel feature. 

Alternatively, disabling [Automated Security]({{root_url}}/Classroom/Deliver/Sender_Authentication/what_is_automated_security_in_the_whitelabel_settings.html) when Whitelabeling will remove the need to set up the CNAME records with underscores in them that can cause this issue initially. 

