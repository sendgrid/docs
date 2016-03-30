---
seo:
  title: Creating Multiple User Credentials for Sub-Users
  description: Creating Multiple User Credentials for Sub-Users
  keywords: subuser, permission, multiple_user_credentials
title: Creating Multiple User Credentials for Sub-Users
weight: 0
layout: page
zendesk_id: 205360047
navigation:
  show: true
---

There are a few ways to create multiple user credentials for your sub-users. 

1. Login directly as the sub-user. Click on account settings, then Manage Multiple User Credentials and add your new MUC. **You will not be able to add a going through Subuser Management. You need to login directly as a sub-user.**

Here is a helpful video  [http://screencast.com/t/5wOlumK0kUdx](http://screencast.com/t/5wOlumK0kUdx) and link to the docs page. [Click here](https://sendgrid.com/docs/User_Guide/multiple_credentials.html)

 

2. You can use Web-API calls. [Click here](https://sendgrid.com/docs/API_Reference/Web_API/multiple_credentials.html)

 

2. Use this cURL command;

curl -X "POST" "https://api.sendgrid.com/api/credentials/add.json" \

    -F "api_user=parent_username" \
        -F "api_key=parent_password" \
        -F "user=subuser_username"
        -F "username=new_subuser_credential_username" \
        -F "password=new_subuser_credential_password" \
        -F "permissions={\"email\": 1, \"web\": 1, \"api\": 1}"

** **
