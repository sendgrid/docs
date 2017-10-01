---
layout: page
weight: 0
title: v2 Node.js
navigation:
  show: true
---
{% github sendgrid/sendgrid-nodejs#usage Node.js %} We recommend using <a href="https://sendgrid.com/docs/Integrate/Code_Examples/v3_Mail/nodejs.html">v3</a> SendGrid Node.js, our client library, <a href="https://github.com/sendgrid/sendgrid-nodejs">available on Github</a>, with full documentation. {% endgithub %}

{% anchor h2 %} Using SendGrid's Node.js Library {% endanchor %}
{% codeblock lang:js %}
// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var sendgrid = require("sendgrid")("SENDGRID_APIKEY");
var email = new sendgrid.Email();
 
email.addTo("test@sendgrid.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");
 
sendgrid.send(email);
{% endcodeblock %}
