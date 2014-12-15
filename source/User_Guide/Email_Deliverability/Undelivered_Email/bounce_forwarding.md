{% anchor h2%}
Bounce Forwarding
{% endanchor %}

SendGrid understands how important it is for you to know whether your messages have been delivered or not. With this in mind we created the <b>bounce forwarding</b> feature that notifies you via email whenever a message fails to reach its destination. 

{% anchor h4%}
How do I enable Bounce Forwarding?
{% endanchor %}

To access this feature navigate to Email Reports > Bounces > Settings, here: http://sendgrid.com/bounces/bounceManagement. 

You will then want to scroll down the page and click the "Enable Bounces Forwarding" box. 

****** [INSERT IMAGE HERE: fwd_bounces.png] ******

If you have dedicated mailbox to manage the rejected messages you will want to enter its address in the "email address" field. However, if you want the notifications to be sent to the sender, you will want to leave this field blank. Without an address present in this field, the Bounces are forwarded to the original sending FROM address.

Alternatively, you can enable the real-time <a href="https://sendgrid.com/docs/API_Reference/Webhooks/event.html">Event Notification Webhook</a> that will post an event to an endpoint you specify, or use our <a href="https://sendgrid.com/docs/API_Reference/Web_API/bounces.html">Web API</a> to retrieve the list of bounced emails.
