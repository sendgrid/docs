---
layout: page
seo:
  title: Errors
title: Errors
description: v3 Mail Send Errors and Troubleshooting Reference
weight: 100
navigation:
  show: true
---

{% warning %}
**This endpoint is currently in beta!**

Since this is not a general release, we do not recommend POSTing production level traffic through this endpoint or integrating your production servers with this endpoint.

*When this endpoint is ready for general release, your code will require an update in order to use the official URI.*

By using this endpoint, you accept that you may encounter bugs and that the endpoint may be taken down for maintenance at any time. We cannot guarantee the continued availability of this beta endpoint. We hope that you like this new endpoint and we appreciate any [feedback](mailto:dx+mail-beta@sendgrid.com) that you can send our way.
{% endwarning %}

Failed requests will always return an error response, including a response code, a message explaining the reason for the error, and a link to any relevant documentation that may help you troubleshoot the problem.

| Response Code | Reason | Description |
|---|---|---|
| 2xx | 2xx responses indicate a successful request | The request that you made is valid and successful. |
| 200 | OK | Your message is valid, but it is not queued to be delivered. |
| 202 | ACCEPTED | Your message is both valid, and queued to be delivered. |
| 4xx | 4xx responses indicate an error with the request | There was a problem with your request. |
| 400 | BAD REQUEST |  |
| 401 | UNAUTHORIZED | You do not have authorization to make the request. |
| 403 | FORBIDDEN |  |
| 404 | NOT FOUND | The resource you tried to locate could not be found or does not exist. |
| 405 | METHOD NOT ALLOWED |  |
| 413 | PAYLOAD TOO LARGE | The JSON payload you have included in your request is too large. |
| 429 | TOO MANY REQUESTS | The number of requests you have made exceeds SendGrid's [rate limitations]({{root_url}}/API_Reference/Web_API_v3/How_To_Use_The_Web_API_v3/rate_limits.html) |
| 5xx | 5xx respones indicate an error made by SendGrid | The request you made was valid, but an error occurred when SendGrid attempted to processes it. |
| 500 | SERVER UNAVAILABLE | An error occurred on a SendGrid server. |
| 503 | SERVICE NOT AVAILABLE | The SendGrid v3 Web API is not available. |

Following is a complete list of the possible parameter level errors that you may receive when making a request to the v3 Mail Send endpoint. Each error will include the field that caused the error (e.g. "personalizations" or "personalizations.to"), a brief message explaining the cause of the error, and a link to the error in the table below. Here you will find links to relevant documentation for each error.
