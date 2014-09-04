---
layout: page
title: Supressions
weight: 98
navigation:
  show: true
---

Suppressions are email addresses that can be added to [groups]({{ root_url }}/API_Reference/Web_API_v3/Advanced_Suppression_Manager/groups.html) to prevent certain types of emails from being delivered to that address.

{% anchor h2 %}
POST
{% endanchor %}

POST /groups/:group_id/suppressions

Use to add to the recipient emails to the suppressions list for a given group.

{% info %}
If the group has been deleted, this request will add the address to the global suppression.
{% endinfo %}

Expected JSON body

recipient_emails - array of email addresses
$ curl -X POST stasmapi-001.sjc1.sendgrid.net:50060/users/180/groups/100/suppressions -d '{"recipient_emails":["test1@example.com", "test2@example.com"]}'
Sample response

{"recipient_emails":["test1@example.com","test2@example.com"]}
POST /groups/:group_id/suppressions/search

Retrieve subset of provided suppressed emails for a group

Expected JSON body

recipient_emails - list of possible recipient emails
$ curl -X POST stasmapi-001.sjc1.sendgrid.net:50060/users/180/groups/100/suppressions/search -d '{"recipient_emails": ["test1@example.com", "test2@example.com", "test3@example.com"] }'
Sample response

["test2@example.com", "test3@example.com"]
GET /suppressions/:recipient_email

Use to get the suppressions associated to a recipient email of a given SG user. Mainly used by the landingpage to generate the email preference view.

$ curl "stasmapi-001.sjc1.sendgrid.net:50060/users/180/suppressions/me@example.com"
Sample response

{"suppressions":[{"id":1,"name":"Tachikoma","description":"Robots","suppressed":false},{"id":4,"name":"Pokemons","description":"Gotta catch 'em all","suppressed":false}]}
GET /groups/:group_id/suppressions

Retrieve suppressed emails for a group

$ curl stasmapi-001.sjc1.sendgrid.net:50060/users/180/groups/100/suppressions
Sample response

["test1@example.com","test2@example.com"]
DELETE /suppressions/:recipient_email

Use to delete a recipient email from the suppressions list for a given group.

$ curl -X DELETE stasmapi-001.sjc1.sendgrid.net:50060/users/180/groups/111/suppressions/me@example.com
Response: 204 - No content
