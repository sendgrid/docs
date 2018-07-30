---
layout: page
weight: 0
title: v2 Node.js
group: api-v2
navigation:
  show: true
---
<call-out>

We recommend using <a href="https://sendgrid.com/docs/Integrate/Code_Examples/v3_Mail/nodejs.html">v3</a> SendGrid Node.js, our client library, <a href="https://github.com/sendgrid/sendgrid-nodejs">available on Github</a>, with full documentation.

</call-out>

<call-out>

The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Node.js](https://github.com/sendgrid/sendgrid-nodejs/blob/master/TROUBLESHOOTING.md#v2).

</call-out>

##  Using SendGrid's Node.js Library
```javascript
// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var sendgrid = require("sendgrid")("SENDGRID_APIKEY");
var email = new sendgrid.Email();

email.addTo("test@sendgrid.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");

sendgrid.send(email);
```
