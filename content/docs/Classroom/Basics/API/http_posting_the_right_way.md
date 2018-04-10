---
seo:
  title: HTTP POSTing The Right Way
  description: HTTP POSTing The Right Way
  keywords: event, webhook, http, https, post, parse, header, body
title: HTTP POSTing The Right Way
weight: 0
layout: page
zendesk_id: 200181828
navigation:
  show: false
---

 **Issue** : You're getting an error when using WebAPI and a very long URI string consisting of all of the parameter data in the URI string. Error returned may be “414 request-URI Too Large.”

**Cause** : Instead of putting the appropriate parameters (i.e. to, from, body, html (etc)) in the body of the HTTP POST request, the user is putting them in the URI string as such:

    http://sendgrid.net/api/mail.send?to=email@address&from=from@address.com

If the content is too long (in the case of many TO/CC/BCC addresses and lengthy TEXT and HTML content), the error will be generated.

An example using Curl which is not correct (when used on the command line):

    $ curl https://sendgrid.com/api/mail.send.json?api_user=MyName&api_key=MyPassword&to=to@email.com&from=from@email.com&text=some+really+long+text+also+notice+how+this+is+all+part+of+the+mail.send.json+URI

The above Curl request is putting all of the parameters as part of the URL (https://sendgrid.com/api/mail.send.json) instead as separate fields.

Resolution/Best Practices:   
When performing the HTTP POST, ensure that the parameters are being posted as part of the body instead of with the URI.

Example using Curl which is correct (when used on the command line):

    $ curl -F to=to@email.com -F from=from@email.com -F text=some+really+long+text+that+is+now+going+to+work+correctly -F api_user=MyUserName -F api_key=MyPassword https://sendgrid.com/api/mail.send.json

The above Curl request is now submitting the parameters as fields (“-F”) which will put the parameters in the HTTP POST body instead of as part of the URI string. This will allow the customer to not run into the above error under normal circumstances.

For more information, please see the following links:

- Doing HTTP POST the right way: [http://www.jmarshall.com/easy/http/#postmethod](http://www.jmarshall.com/easy/http/#postmethod)
- SendGrid WebAPI (see Examples): [http://docs.sendgrid.com/documentation/api/web-api/mail/](http://docs.sendgrid.com/documentation/api/web-api/mail/)
- Curl POST via PHP: [http://davidwalsh.name/execute-http-post-php-curl](http://davidwalsh.name/execute-http-post-php-curl)   
(notice how the data is put into the CURL\_POSTFIELDS variable instead of the CURL\_URL variable)

 

_last updated: Jayson Sperling - 09 Apr 2013_
