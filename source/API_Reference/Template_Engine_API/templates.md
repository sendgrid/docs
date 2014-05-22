---
layout: page
title: Templates
navigation:
  show: true
---

The Template Engine API lets you programmatically create and manage 
templates for your transactional email.

{% anchor h2 %}
GET
{% endanchor %}
Retrieve all templates.

{% apiv3example get GET https://api.sendgrid.com/v3/templates %}
{%  v3response %}
{
    "templates": [
        {
            "id": "e8ac01d5-a07a-4a71-b14c-4721136fe6aa",
            "default_version_id": "",
            "name": "example template name",
            "versions": [
                {
                    "id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f",
                    "name": "example version name",
                    "updated_at": "2014-03-19 18:56:33"
                }
            ]
        }
    ]
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
GET
{% endanchor %}
Retrieve a single template.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/templates/:template_id %}
{% v3response %}
{
    "templates": [
        {
            "id": "e8ac01d5-a07a-4a71-b14c-4721136fe6aa",
            "default_version_id": "",
            "name": "example template name",
            "versions": [
                {
                    "id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f",
                    "name": "example version name",
                    "updated_at": "2014-03-19 18:56:33"
                }
            ]
        }
    ]
}
{% endv3response %}
{% endapiv3example %}


{% anchor h2 %}
POST
{% endanchor %}
Create a template.

{% parameters post %}
  {% parameter name true 'String with fewer than 100 characters' 'The name of the new template' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/templates name=example_name%}
  {% v3response %}
HTTP/1.1 201 OK

{
    "id": "733ba07f-ead1-41fc-933a-3976baa23716",
    "default_version_id": "",
    "name": "example_name",
    "versions": []
}
  {% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
PATCH
{% endanchor %}
Edit a template.

{% parameters patch %}
  {% parameter name true 'String with fewer than 100 characters' 'The name of the new template' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/templates/:template_id name=new_example_name%}
  {% v3response %}
HTTP/1.1 201 OK

{
    "id": "733ba07f-ead1-41fc-933a-3976baa23716",
    "default_version_id": "",
    "name": "new_example_name",
    "versions": []
}
  {% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}
Delete a template.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/templates/:template_id %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
  {% endv3response %}
{% endapiv3example %}

