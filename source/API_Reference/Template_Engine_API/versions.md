---
layout: page
title: Versions
weight: 90
navigation:
  show: true
---

Each template can have multiple versions, with different subjects and 
content for each version.

To retrieve all versions of a template, call the [template
GET]({{root_url}}/API_Reference/Template_Engine_API/templates.html#-GET)
method. Versions are returned as nested resources of the template
resource.

To set which version is active, use the [version PATCH]({{root_url}}/API_Reference/Template_Engine_API/versions.html#-PATCH) method to set the
active field to 1.

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
    "updated_at": "2014-03-19 18:56:33"
}
{% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
POST
{% endanchor %}
Create a new version.

{% parameters post %}
  {% parameter name true 'String with fewer than 100 characters' 'The name of the new version' %}
  {% parameter subject true 'Requires a <%subject%> tag to be present' 'The subject for the new version' %}
  {% parameter html_content true 'Requires a <%body%> tag inside the content. There is a maximum of 1048576 bytes allowed for html content.' 'The HTML content of the new version.' %}
  {% parameter plain_content true 'Requires a <%body%> tag inside the content. There is a maximum of 1048576 bytes allowed for plain content.' 'The text/plain content of the new version.' %}
  {% parameter active false '0=Inactive, 1=Active' 'Sets the active version associated with a template. Only one version of template can be active. The first version created for a template will automatically be set to Active.' %}
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
    "updated_at": "2014-03-19 18:56:33"
}
  {% endv3response %}
{% endapiv3example %}

{% anchor h2 %}
PATCH
{% endanchor %}
Edit a version.

{% parameters patch %}
  {% parameter name false 'String with fewer than 100 characters' 'The updated name of the version' %}
  {% parameter subject false 'Requires a <%subject%> tag to be present' 'The updated subject for the new version' %}
  {% parameter html_content false 'Requires a <%body%> tag inside the content. There is a maximum of 1048576 bytes allowed for html content.' 'The HTML content of the new version.' %}
  {% parameter plain_content false 'Requires a <%body%> tag inside the content. There is a maximum of 1048576 bytes allowed for plain content.' 'The text/plain content of the new version.' %}
  {% parameter active false '0=Inactive, 1=Active' 'Sets the active version associated with a template. Only one version of template can be active.' %}
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
