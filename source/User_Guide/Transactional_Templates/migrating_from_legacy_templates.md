---
layout: page
weight: 50
title: Migrating from Legacy Templates
navigation:
  show: false
seo:
  title: Migrating from Legacy Templates
  override: true
  description: 
---

If you have transactional templates you want to use with handlebars syntax, you need to migrate your legacy templates to the new dynamic templates page. 

{% info %}
The original template you copy won't be modified and remains active in any API or SMTP calls. To use the new template, update the template ID parameter in your code.
{% endinfo %}


*To convert a legacy transactional template:*

1. Navigate to the [legacy templates](https://sendgrid.com/templates) page. 
1. 