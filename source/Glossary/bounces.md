---
seo:
  title: Bounces
  description: Bounced emails are emails that are returned to the server that sent them.
  keywords: blocks, undelivered email
title: Bounces
weight: 0
layout: page
navigation:
  show: true
---

A message that is returned to the server that sent it. Bounced emails are either a permanent failure to deliver the email or a temporary failure to deliver the email, based on conditions with the recipient mail server.

Hard Bounces - A hard bounce is an e-mail message that has been returned to the sender because the recipient's address is invalid. A hard bounce might occur because the domain name doesn't exist or because the recipient is unknown. If a email is on the bounce list, we will auto drop any future requests to this email address. 
Soft Bounces - A soft bounce is an e-mail message that gets as far as the recipient's mail server but is bounced back undelivered before it gets to the intended recipient. A soft bounce might occur because the recipient's inbox is full.

Bounce Error Codes:
<table class="table table-striped table-bordered">
<thead><tr><th>Code</th><th>Explanation</th></tr></thead>
<tbody>
<tr><td>421</td><td>	<domain> Service not available, closing transmission channel.</td></tr>
<tr><td>450</td><td>	Requested mail action not taken: mailbox unavailable. (e.g., mailbox busy)</td></tr>
<tr><td>451</td><td>	Requested action aborted: error in processing.</td></tr>
<tr><td>452</td><td>	Requested action not taken: insufficient system storage.</td></tr>
<tr><td>500</td><td>	The server could not recognize the command due to a syntax error.</td></tr>
<tr><td>501</td><td>	A syntax error was encountered in command arguments.</td></tr>
<tr><td>502</td><td>	This command is not implemented.</td></tr>
<tr><td>503</td><td>	The server has encountered a bad sequence of commands.</td></tr>
<tr><td>504</td><td>	A command parameter is not implemented.</td></tr>
<tr><td>550</td><td>	User’s mailbox was unavailable (such as not found)</td></tr>
<tr><td>551</td><td>	The recipient is not local to the server.</td></tr>
<tr><td>552</td><td>	The action was aborted due to exceeded storage allocation.</td></tr>
<tr><td>553</td><td>	The command was aborted because the mailbox name is invalid.</td></tr>
<tr><td>554</td><td>	The transaction failed for some unstated reason.</td></tr>
</tbody>
</table>

If you want to receive notification of bounces in your application, you can enable the Real-time Event Notification API and SendGrid will alert your application of any bounces, clicks, opens, or otherwise that happen to the emails you send. Alternatively, you can enable Bounce Forwarding within your account to receive an email each time a bounce occurs.

You can also [retrieve and edit your list of bounces]({{root_url}}/API_Reference/Web_API/bounces.html) through our Web API.

{% anchor h3 %}
Helpful Knowledge Base articles:
{% endanchor %}

* [Drop Reason: Bounced Address](https://sendgrid.zendesk.com/hc/en-us/articles/203790456)
* [Bounce Forwarding APP](https://sendgrid.zendesk.com/hc/en-us/articles/200181478)
* [Implementing Bounce Notification For Multiple From Addresses](https://sendgrid.zendesk.com/hc/en-us/articles/200185178)
* [Email Activity & Bounces](https://sendgrid.zendesk.com/hc/en-us/articles/200181728)
