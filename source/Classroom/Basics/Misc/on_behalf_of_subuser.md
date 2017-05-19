---
st:
  published_at: 2017-05-19
  type: Classroom
seo:
  title: On Behalf Of Subuser
  description: Need to make API calls as though you were a subuser? Learn more here...
  keywords: on behalf, subuser, api, assume, send as
title: On Behalf Of Subuser
weight: 0
layout: page
navigation:
  show: true
---
The on-behalf-of header allows you to make calls for a particular subuser through the parent account, this can be useful for automating bulk updates, or administering a subuser without changing authentication in your code. In the header you are passing, you will simply need to add: `On-Behalf-Of: subuser_username`

This will generate the api call as if it was the subuser account itself making the call. Just make sure you are using the correct subuser username.

When authenticating using the on-behalf-of header, you will need to use the API key or basic auth credentials of the parent account.

**Using Basic Auth:**

```
curl -X GET \
  'https://api.sendgrid.com/v3/stats?start_date=2016-01-01&end_date=2017-01-01&aggregated_by=month' \
  
  -H 'authorization: Basic username:password' \
  
  -H 'on-behalf-of: subuser_username' \
  ```
  
**Using API Key:**

```
curl -X GET \
  'https://api.sendgrid.com/v3/stats?start_date=2016-01-01&end_date=2017-01-01&aggregated_by=month' \
  
  -H 'authorization: Bearer API Key' \
  
  -H 'on-behalf-of: subuser_username' \
  ```
  
{% warning %}  
Please note: The on-behalf-of header will not work with the `mail.send` API.
{% endwarning %}  
