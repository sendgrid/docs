---
layout: page
weight: 0
title: v2 Node.js
group: api-v2
navigation:
  show: true
---
<call-out>

We recommend using [v3]({{root_url}}/for-developers/sending-email/v3-nodejs-code-example/) SendGrid Node.js, our client library, [available on Github](https://github.com/sendgrid/sendgrid-nodejs), with full documentation.

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
