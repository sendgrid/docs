---
layout: page
weight: 0
title: Node.js
navigation:
  show: true
---
{% github sendgrid/sendgrid-nodejs#usage Node.js %} We recommend using SendGrid Node.js, our client library, <a href="https://github.com/sendgrid/sendgrid-nodejs">available on Github</a>, with full documentation. {% endgithub %}

{% anchor h2 %} using SendGrid's Node.js Library {% endanchor %}
{% codeblock lang:nodejs %}
// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
var sendgrid = require("sendgrid")(api_user, api_key);
var email = new sendgrid.Email();
 
email.addTo("test@sendgrid.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");
 
sendgrid.send(email);
{% endcodeblock %}
