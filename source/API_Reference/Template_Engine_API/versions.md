---
layout: page
title: Versions
navigation:
  show: true
---

Each template can have multiple versions, with different subjects and 
content for each version.

To retrieve all versions of a template, call the [template
get]({{root_url}}/API_Reference/Template_Engine_API/templates.html#-get)
method. Versions are returned as nested resources of the template
resource.

To set which version is active, use the [template PATCH]({{root_url}}/API_Reference/Template_Engine_API/templates.html#-get) method to set the
default_version_id of a template.

{% anchor h2 %}
GET
{% endanchor %}
Retrieve a specific version of a template.

{% apiv3example get-specific GET https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id %}
{% v3response %}
HTTP/1.1 200 OK

{
    "id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f",
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

{% endparameters %}

{% apiv3example post POST https://api.sendgrid.com/v3/templates/:template_id/versions name=example_version_name&html_content=%3C%25body%25%3E&plain_content=%3C%25body%25%3E&subject=%3C%25subject%25%3E %}
  {% v3response %}
HTTP/1.1 201 OK

{
    "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
    "name": "example_version_name",
    "html_content": "<%body%>",
    "plain_content": "<%body%>",
    "subject": "<%subject%>"
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
{% endparameters %}

{% apiv3example patch PATCH https://api.sendgrid.com/v3/templates/:template_id/versions/:version_id name=updated_example_name%}
  {% v3response %}
HTTP/1.1 200 OK

{
    "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
    "name": "updated_example_name",
    "html_content": "<%body%>",
    "plain_content": "<%body%>",
    "subject": "<%subject%>"
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
