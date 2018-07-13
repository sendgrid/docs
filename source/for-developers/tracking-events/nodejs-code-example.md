---
layout: page
weight: 10
title: Node.js
navigation:
  show: true
---

{% anchor h2 %}
Parse Webhook
{% endanchor %}

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to http://sendgrid.biz/parse . We will be using Node and the Express framework.

Given this scenario, the following are the parameters you would set at the [Parse API settings page]({{site.site_url}}/developer/reply):

{% codeblock %}
Hostname: email.sendgrid.biz
{% endcodeblock %}

{% codeblock %}
URL: http://sendgrid.biz/parse
{% endcodeblock %}

 To test this scenario, we sent an email to example@example.com and created the following code:

{% codeblock lang:javascript %}

var express = require('express');
var multer  = require('multer');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(multer());
});

app.post('/parse', function (req, res) {
  var from = req.body.from;
  var text = req.body.text;
  var subject = req.body.subject;
  var num_attachments = req.body.attachments;
  for (i = 1; i <= num_attachments; i++){
    var attachment = req.files['attachment' + i];
    // attachment will be a File object
  }
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
{% endcodeblock %}


{% anchor h2 %}
Event Webhook
{% endanchor %}

To use the Event Webhook, you must first [setup Event Notification]({{%20root_url%20}}/API_Reference/Webhooks/event.html#-Setup).

In this scenario, we assume you've set the Event Notification URL to go the endpoint `/event` on your server. Given this scenario the following code will allow you to process events:

{% codeblock lang:javascript %}

var express = require('express');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
});

app.post('/event', function (req, res) {
  var events = req.body;
  events.forEach(function (event) {
    // Here, you now have each event and can process them how you like
	  processEvent(event);
  });
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
{% endcodeblock %}
