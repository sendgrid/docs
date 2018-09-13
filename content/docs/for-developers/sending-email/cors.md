---
layout: page
weight: 0
title: Cross Origin Resource Sharing (CORS)
group: api-v3
navigation:
  show: true
seo:
  title: Cross Origin Resource Sharing (CORS)
  description: CORS is a security feature of modern browsers to keep browser users secure.
  keywords: API, API Key, CORS, cross origin resource sharing
---
 	
Cross Origin Resource Sharing is a security feature of modern browsers that keeps browser users secure. It prevents malicious  activity like cross site scripting.
CORS implements headers in the response of any request to the server to say what domains are allowed to make specific types of calls to that server. In SendGrid's case, we do not allow our customers to make a browser based call to our v3/mail/send endpoint.

## 	Browser-Only Applications
 	
When you have a browser-only application that reaches out to APIs, the API key has to be embedded in the application. Anyone with access to a browser-only application can access all of the Javascript source code, including your API keys.

Making your API key publicly accessible could result in anyone authenticating API calls with your API key — this is a significant security concern both for you and SendGrid. 

## 	Workarounds
 	
You can create a server based application, which will protect your API keys from being released to the world. Languages like [NodeJS](https://github.com/sendgrid/sendgrid-nodejs), [PHP](https://github.com/sendgrid/sendgrid-php), [Ruby](https://github.com/sendgrid/sendgrid-ruby), [Python](https://github.com/sendgrid/sendgrid-python), [C#](https://github.com/sendgrid/sendgrid-csharp), [Go](https://github.com/sendgrid/sendgrid-go), and [Java](https://github.com/sendgrid/sendgrid-java), and others can be implemented to make calls to the API from the security of a locked down server environment.
