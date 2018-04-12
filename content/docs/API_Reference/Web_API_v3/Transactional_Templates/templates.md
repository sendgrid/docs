---
layout: page
title: Templates
weight: 100
alias: /API_Reference/Web_API_v3/Transactional_Templates/templates.html
navigation:
  show: true
---

The transactional templates API lets you programmatically create and manage templates for your transactional email.

{% info %}
Each user can have up to 300 templates.
{% endinfo %}

{% info %}
Transactional templates are account and subuser specific. Templates created on a parent account will not be accessible from the subuser accounts.
{% endinfo %}

* * * * *

<page-anchor el="h2">
POST
</page-anchor>
Create a template.

{% parameters post %}
  {% parameter name Yes 'String. max 100 characters' 'Name of the new template' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/templates name=example_name %}
  {% v3response %}
HTTP/1.1 201 OK

{
  "id": "733ba07f-ead1-41fc-933a-3976baa23716",
  "name": "example_name",
  "versions": []
}
  {% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>
Retrieve all templates.

{% apiv3example get GET https://api.sendgrid.com/v3/templates %}
{% v3response %}
{
  "templates": [
    {
      "id": "e8ac01d5-a07a-4a71-b14c-4721136fe6aa",
      "name": "example template name",
      "versions": [
        {
          "id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f",
          "template_id": "9c59c1fb-931a-40fc-a658-50f871f3e41c",
          "active": 1,
          "name": "example version name",
          "updated_at": "2014-03-19 18:56:33",
          "editor": "design"
        }
      ]
    }
  ]
}
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
GET
</page-anchor>
Retrieve a single template.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/templates/:template_id %}
{% v3response %}
{
  "id": "e8ac01d5-a07a-4a71-b14c-4721136fe6aa",
  "name": "example template name",
  "versions": [
    {
      "id": "de37d11b-082a-42c0-9884-c0c143015a47",
      "user_id": 1234,
      "template_id": "d51480ba-ca3f-465c-bc3e-ceb71d73c38d",
      "active": 1,
      "name": "example version",
      "html_content": "<%body%><strong>Click to Reset</strong>",
      "plain_content": "Click to Reset<%body%>",
      "editor": "code",
      "subject": "<%subject%>",
      "updated_at": "2014-05-22 20:05:21"
    }
  ]
}
{% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
PATCH
</page-anchor>
Edit a template.

{% parameters patch %}
  {% parameter name Yes 'String. Max 100 characters' 'Name of the new template' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/templates/:template_id name=new_example_name %}
  {% v3response %}
HTTP/1.1 200 OK

{
  "id": "733ba07f-ead1-41fc-933a-3976baa23716",
  "name": "new_example_name",
  "versions": []
}
  {% endv3response %}
{% endapiv3example %}

* * * * *

<page-anchor el="h2">
DELETE
</page-anchor>
Delete a template.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/templates/:template_id %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
  {% endv3response %}
{% endapiv3example %}
