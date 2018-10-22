---
layout: page
weight: 90
group: transactional-email
title: Migrating from Legacy Transactional Templates
navigation:
  show: true
seo:
  title: Migrating from Legacy Transactional Templates
  override: true
  description: Migrating from legacy transactional templates to dynamic transactional templates utilizing handlebars syntax.
  keywords: transactional email templates, email template, dynamic content, personalization, handlebars
---

If you have transactional templates you want to use with handlebars syntax, you need to migrate your legacy templates to the new dynamic templates page.

<call-out>

The original template you copy won't be modified and remains active in any API or SMTP calls. To use the new template, update the template ID parameter in your code.

</call-out>

*To convert a legacy transactional template:*

1. Navigate to the [legacy templates](https://sendgrid.com/templates) page.
1. Create a version of the template you wish to migrate or select the actions menu on the template version and select **Edit**. The template opens in the editor and a green banner appears at the top of the page specifying that the template you are editing is a legacy template.
1. Select **Copy as New Template**.
1. Give the template a new name and click **Copy as New Template**.
1. Once the template is successfully copied over, click **Continue**. The template opens in the editor and you are prompted to replace any existing substitution tags with handlebars syntax.
1. To replace any existing substitution tags, click **Replace your substitution tags**.
1. Enter the opening and closing characters of your substitution tags and click **Replace**.
1. The module replaces all of the substitution tags in your template with handlebars.
   For example,{{your_tag_here}}.

## Additional resources

- [How to send an email with dynamic transactional templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Using handlebars]({{root_url}}/ui/sending-email/using-handlebars/)
- [Mail send with dynamic transactional templates](https://dynamic-templates.api-docs.io/3.0)