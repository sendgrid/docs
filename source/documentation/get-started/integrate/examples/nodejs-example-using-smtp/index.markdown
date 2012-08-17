---
comments: false
date: 2011-03-26 11:47:26
layout: page
slug: nodejs-example-using-smtp
title: Node.js Example Using SMTP
wordpress_id: 268
---

Node.js is an asynchronous Javascript framework that is gaining popularity.  To learn how to install it [go here](https://github.com/joyent/node/wiki/Installation).  To send email over SMTP using Node.js the [node_mailer](https://github.com/Marak/node_mailer) library is a good option.  To install node_mailer you need [npm](http://npmjs.org/).  To install npm please execute the following:

`
$ curl http://npmjs.org/install.sh | sh
`

Then install node_mailer
`
$ npm install mailer
`

Then create a file called **mail.js** with the following contents
`
var email = require("mailer");
var sgusername = 'sendgrid_username';
var sgpassword = 'sendgrid_password';
email.send({
    host : "smtp.sendgrid.net",
    port : "587",
    domain : "yourdomain.com",
    to : "recipient@domain.com",
    from : "yourname@yourdomain.com",
    subject : "This is a subject",
    body: "Hello, this is a test body",
    authentication : "login",
    username : sgusername,
    password : sgpassword
  },
  function(err, result){
    if(err){
      console.log(err);
    }
});
`

To execute mail.js run the following
`
$ node mail.js
`
