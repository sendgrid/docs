---
layout: page
weight: 0
title: v2 Mail Send
seo:
  title: v2 Mail Send - Send Email Using HTTP - SendGrid Documentation | SendGrid
  override: true
  description: The v2 mail send endpoint allows you to send email through SendGrid using a POST request. Find documentation and examples on how to use the endpoint.
navigation:
  show: true
---

This endpoint allows you to send email over SendGrid's Web API v2.

{% warning %}
For information about the latest mail send endpoint, please visit our [Web API v3 Mail Send documentation]({{root_url}}/API_Reference/Web_API_v3/Mail/index.html). To current v2 users: We encourage [migrating]({{root_url}}/Classroom/Send/v3_Mail_Send/how_to_migrate_from_v2_to_v3_mail_send.html) to the new endpoint to take advantage of upcoming features.
{% endwarning %}

{% info %}
There are a number of [official SendGrid libraries]({{root_url}}/Integrate/libraries.html) to allow for email sending through the Web API v2. We recommend using these if possible.

[View List »]({{root_url}}/Integrate/libraries.html)
{% endinfo %}

{% info %}
When you make a request to the Web API v2 to send a message, we will accept the request and then process the email, meaning that a successful API request does not mean an email was successfully sent. Please see our [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html) if you want to be notified of email send status.
{% endinfo %}

{% anchor h2 %}
send
{% endanchor %}

SendGrid's [API Keys]({{root_url}}/User_Guide/Account/api_keys.html) should be used when sending email over the API.

{% info %}
You can have up to 10,000 recipients per Web API v2 request. While we do not enforce rate limits on sending mail via the v2 mail send endpoint, we do recommend that users avoid making more than 3,000 API requests per second.
{% endinfo %}

{% parameters mail %}
 {% parameter 'to' 'Yes' 'Must be a valid email address' 'Specify a recipient email as a single email with this parameter. To send to multiple emails, use an array to specify each email, for example: `to[]=a@mail.com&to[]=b@mail.com`. You can also use the `To` parameter in the x-smtpapi header to add additional recipients.  If you use the API `to` parameter to specify a single recipient, that recipient is visible in the `For` field of the received header - so if you specify a single address, it should be an address that you are comfortable with your customer seeing. For example, use a generic email address in the `to` field that your customer is already going to see, like your `from` address. To completely omit the email showing up in the `from` header: either specify multiple addresses in the `to` field as an array, for example, `to[]=a@mail.com&to[]=b@mail.com`, or use the V3 mail send endpoint.' %}
 {% parameter 'toname' 'No' 'Must be a string. If *to* parameter is an array, *toname* must be an array with the exact number of array elements as the *to* field' 'Give a name to the recipient. This can also be passed as an array if the to above is an array. Example: toname[]=Alpha[]=Beta.' %}
 {% parameter 'x-smtpapi' 'No' 'Must be in valid JSON format' 'Please review the [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html) to view documentation on what you can do with the JSON headers' %}
 {% parameter 'subject' 'Yes' 'Must be a valid string' 'The subject of your email' %}
 {% parameter 'text' 'No' 'API call must include at least one of the text or html parameters.' 'The plain text content of your email message.' %}
 {% parameter 'html' 'No' 'API call must include at least one of the text or html parameters.' 'The HTML content of your email message.' %}
 {% parameter 'from' 'Yes' 'Must be a valid email address from your domain' 'This is where the email will appear to originate from for your recipient' %}
 {% parameter 'cc' 'No' 'Must be a valid email address' 'This can also be passed in as an array of email addresses for multiple recipients. Example: cc[]=a@mail.com&cc[]=b@mail.com.' %}
 {% parameter 'ccname' 'No' 'Must be a valid email address' 'This is the name be appended to the cc field.' %}
 {% parameter 'bcc' 'No' 'Must be a valid email address' 'This can also be passed in as an array of email addresses for multiple recipients. Example: bcc[]=a@mail.com&bcc[]=b@mail.com.' %}
 {% parameter 'bccname' 'No' 'Must be a valid email address' 'This is the name appended to the bcc field.' %}
 {% parameter 'fromname' 'No' 'Must a valid string' 'This is the name appended to the from email field. IE - Your name or company name' %}
 {% parameter 'replyto' 'No' 'Must be a valid email address' 'Append a reply-to field to your email message' %}
 {% parameter 'date' 'No' 'Must be a valid date' 'Specify the date header of your email. One example: "Thu, 21 Dec 2000 16:01:07 +0200". PHP developers can use: *date('r');*' %}
 {% parameter 'files' 'No' 'Must be less than 7MB' 'Files to be attached. The file contents must be part of the multipart HTTP POST. Ex: files[file1.jpg]=file1.jpg&files[file2.pdf]=file2.pdf' %}
 {% parameter 'content' 'No' 'Required for sending inline images' 'Content IDs of the files to be used as inline images. Content IDs should match the cids used in the HTML markup. Ex: content[file1.jpg]=ii_139db99fdb5c3704 would correspond with the HTML `<img src="cid:ii_139db99fdb5c3704"></img>`' and files[file1.jpg] would contain the contents. %}
 {% parameter 'headers' 'No' 'Must be in valid JSON format without integers' 'A collection of key/value pairs in JSON format. This is specifically for non-SendGrid custom [extension headers](http://tools.ietf.org/html/rfc5322#section-2.2). Each key represents a header name and the value the header value. Ex: `{"X-Accept-Language": "en", "X-Mailer": "MyApp"}`' %}
{% endparameters %}


{% apiexample mail POST https://api.sendgrid.com/api/mail.send api_user=your_sendgrid_username&api_key=your_sendgrid_password&to=destination@example.com&toname=Destination&subject=Example_Subject&text=testingtextbody&from=info@domain.com %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

{% anchor h3 %}
Call: Send to Multiple Recipients
{% endanchor %}

{% apiexample multiple POST https://api.sendgrid.com/api/mail.send api_user=your_sendgrid_username&api_key=your_sendgrid_password&to[]=destination@example.com&toname[]=Destination&to[]=example@example.com&toname[]=Destination2&subject=Example_Subject&text=testingtextbody&from=info@domain.com false %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

{% anchor h3 %}
Call: Sending with a CC and CCname
{% endanchor %}

{% apiexample cc POST https://api.sendgrid.com/api/mail.send api_user=your_sendgrid_username&api_key=your_sendgrid_password&to[]=destination@example.com&toname[]=Destination&cc=ccdestination@mail.com&ccname=CCDestination&subject=Example_Subject&text=testingtextbody&from=info@domain.com false %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

{% anchor h3 %}
Call: Sending with a BCC and BCCname
{% endanchor %}

{% apiexample bcc POST https://api.sendgrid.com/api/mail.send api_user=your_sendgrid_username&api_key=your_sendgrid_password&to[]=destination@example.com&toname[]=Destination&bcc=bccdestination@mail.com&bccname=BCCDestination&subject=Example_Subject&text=testingtextbody&from=info@domain.com false %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h3 %}
cURL Examples
{% endanchor %}

{% anchor h4 %}
Send to one email recipient
{% endanchor %}

{% codeblock lang:bash %}
curl -d 'to=destination@example.com&amp;toname=Destination&amp;subject=Example Subject&amp;text=testingtextbody&amp;from=info@domain.com&amp;api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password' https://api.sendgrid.com/api/mail.send.json
{% endcodeblock %}

{% anchor h4 %}
Send to multiple email recipients
{% endanchor %}

{% codeblock lang:bash %}
curl -d 'to[]=destination@example.com&amp;toname[]=Destination&amp;to[]=example@example.com&amp;toname[]=Destination2&amp;subject=Example Subject&amp;text=testingtextbody&amp;from=info@domain.com&amp;api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password' https://api.sendgrid.com/api/mail.send.json
{% endcodeblock %}

{% anchor h4 %}
Send a test with attachment
{% endanchor %}

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/mail.send.json \
-F to=recipient@domain.com -F toname=test -F subject="Example Subject" \
-F text="testing text body" --form-string html="<strong>testing html body</strong>" \
-F from=test@yourdomain.com -F api_user=your_sendgrid_username -F api_key=your_sendgrid_password \
-F files\[attachment.gz\]=@f.php.gz
{% endcodeblock %}

<span class="label label-info">Note</span> To ensure that it uploads from a local file, use \<@filename\>.

{% anchor h4 %}
Send a test specifying the file content type by appending ';type=<mime type>' to the file name
{% endanchor %}

{% codeblock lang:bash %}
curl https://api.sendgrid.com/api/mail.send.json \
-F to=recipient@domain.com -F toname=test -F subject="Example Subject" \
-F text="testing text body" --form-string html="<strong>testing html body</strong>" \
-F from=test@yourdomain.com -F api_user=your_sendgrid_username -F api_key=your_sendgrid_password \
-F files\[attachment.pdf\]=@attachment.pdf;type=application/pdf
{% endcodeblock %}

{% anchor h3 %}
Raw HTTP Dump
{% endanchor %}

The following is a dump of the HTTP data sent to our server to generate an email via our Web API v2.

{% codeblock %}
POST /api/mail.send.json HTTP/1.1
{% endcodeblock %}

{% codeblock %}
Host: sendgrid.com

Accept: */*

Content-Length: 999

Expect: 100-continue

Content-Type: multipart/form-data; boundary=----------------------------400f182a9360

HTTP/1.1 100 Continue

------------------------------400f182a9360

Content-Disposition: form-data; name="api_user"

YOURUSERNAME

------------------------------400f182a9360

Content-Disposition: form-data; name="api_key"

YOURKEY

------------------------------400f182a9360

Content-Disposition: form-data; name="to"

someone@somewhere.com

------------------------------400f182a9360

Content-Disposition: form-data; name="subject"

test of file sends

------------------------------400f182a9360

Content-Disposition: form-data; name="html"

the HTML

------------------------------400f182a9360

Content-Disposition: form-data; name="text"

the plain text

------------------------------400f182a9360

Content-Disposition: form-data; name="from"

example@sendgrid.com

------------------------------400f182a9360

Content-Disposition: form-data; name="files[myfile]"; filename="myfile"

Content-Type: application/octet-stream

file with stuff in it

------------------------------400f182a9360--

HTTP/1.1 200 OK

Server: nginx/0.7.65

Date: Fri, 03 Jun 2011 22:30:58 GMT

Content-Type: application/json

Transfer-Encoding: chunked

Connection: keep-alive

{% endcodeblock %}

 {% codeblock %} {"message":"success"} {% endcodeblock %}
