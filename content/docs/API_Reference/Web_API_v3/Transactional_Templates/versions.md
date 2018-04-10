---
layout: page
title: Versions
weight: 90
alias: /API_Reference/Web_API_v3/Transactional_Templates/versions.html
navigation:
  show: true
---

Each template can have multiple versions, with different subjects and
content for each version.

To retrieve all versions of a template, call the [template
GET]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/templates.html#-GET)
method. Versions are returned as nested resources of the template
resource.

To set which version is active, use the [version PATCH]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/versions.html#-PATCH) method to set the
active field to 1.

{% info %}
Each user can have up to 300 versions across all templates.
{% endinfo %}

* * * * *

{% anchor h2 %}
POST
{% endanchor %}
Create a new version for a template.

{% parameters post %}
  {% parameter name Yes 'String. Max 100 characters' 'Name of the new version' %}
  {% parameter subject Yes '`<%subject%>` tag must be present' 'Subject of the new version' %}
  {% parameter html_content Yes '`<%body%>` tag must be inside the content. Maximum of 1048576 bytes allowed for html content.' 'HTML content of the new version.' %}
  {% parameter plain_content Yes '`<%body%>` tag must be inside the content. Maximum of 1048576 bytes allowed for plain content.' 'Text/plain content of the new version.' %}
  {% parameter editor No 'String. Must be either "design" or "code".' 'Editor type used in the UI.' %}
  {% parameter active No '`0` Inactive, `1` Active' 'Set the new version as the active version associated with the template. Only one version of a template can be active. The first version created for a template will automatically be set to Active.' %}
{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/templates/:template_id/versions name=example_version_name&html_content=%3C%25body%25%3E&plain_content=%3C%25body%25%3E&subject=%3C%25subject%25%3E&active=1%}
  {% v3response %}
HTTP/1.1 201 OK

{
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "subject": "<%subject%>",
  "editor": "code",
  "updated_at": "2014-03-19 18:56:33"
}
  {% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
POST
{% endanchor %}
Activate a version.

{% apiv3example post POST https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id/activate %}
  {% v3response %}
HTTP/1.1 200 OK

{
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "e3a61852-1acb-4b32-a1bc-b44b3814ab78",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "subject": "<%subject%>",
  "updated_at": "2014-06-12 11:33:00"
}
  {% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
GET
{% endanchor %}
Retrieve a specific version of a template.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id %}
{% v3response %}
HTTP/1.1 200 OK

{
  "id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f",
  "template_id": "d51480ca-ca3f-465c-bc3e-ceb71d73c38d"
  "active": 1
  "name": "version 1 name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "subject": "<%subject%>",
  "editor": "code",
  "updated_at": "2014-03-19 18:56:33"
}
{% endv3response %}
{% endapiv3example %}

* * * * *

{% anchor h2 %}
PATCH
{% endanchor %}
Edit a version.

{% parameters patch %}
  {% parameter name No 'String. Max 100 characters' 'Updated name of the version' %}
  {% parameter subject No '`<%subject%>` tag must be present' 'Updated subject for the new version' %}
  {% parameter html_content No '`<%body%>` tag must be inside the content. Maximum of 1048576 bytes allowed for html content.' 'HTML content of the new version.' %}
  {% parameter plain_content No '`<%body%>` tag must be inside the content. Maximum of 1048576 bytes allowed for plain content.' 'Text/plain content of the new version.' %}
  {% parameter active No '`0` Inactive, `1` Active' 'Sets the version as the active version on the template. Only one version of a template can be active.' %}
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id name=updated_example_name%}
  {% v3response %}
HTTP/1.1 200 OK

{
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "updated_example_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "subject": "<%subject%>",
  "editor": "design",
  "updated_at": "2014-03-19 18:56:33"
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
DELETE
{% endanchor %}
Delete a version.

{% apiv3example delete DELETE https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id %}
  {% v3response %}
HTTP/1.1 204 NO CONTENT (OK)
{% endv3response %}
{% endapiv3example %}
