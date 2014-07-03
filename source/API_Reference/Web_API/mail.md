---
layout: page
weight: 0
title: Mail
seo:
  title: Mail - Send Email Using HTTP - SendGrid Documentation | SendGrid
  override: true
  description: The mail send endpoint allows you to send email through SendGrid using a POST request. Find documentation and examples on how to use the endpoint.
navigation:
  show: true
---

This endpoint allows you to send email.

{% info %}
There are a number of [official SendGrid libraries]({{root_url}}/Integrate/libraries.html) to allow for email sending through the Web API. We recommend using these if possible.

[View List »]({{root_url}}/Integrate/libraries.html)

{% endinfo %}

{% anchor h2 %}
send 
{% endanchor %}

Send email.

<table id="parameters-mail" class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Requirements</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>to</td>
         <td>Yes</td>
         <td>Must be a valid email address</td>
         <td>This can also be passed in as an array, to send to multiple locations. Example: to[]=a@mail.com[]=b@mail.com. Note that recipients passed in this parameter will be visible as part of the message. If you wish to hide the recipients, use the TO parameter in the [x-smtpapi]({{root_url}}/API_Reference/SMTP_API/index.html) header.</td>
      </tr>
      <tr>
         <td>toname</td>
         <td>No</td>
         <td>Must be a string. If *to* parameter is an array, *toname* must be an array with the exact number of array elements as the *to* field</td>
         <td>Give a name to the recipient. This can also be passed as an array if the to above is an array. Example: toname[]=Alpha[]=Beta.</td>
      </tr>
      <tr>
         <td>x-smtpapi</td>
         <td>No</td>
         <td>Must be in valid JSON format</td>
         <td>Please review the [SMTP API]({{root_url}}/API_Reference/SMTP_API/index.html) to view documentation on what you can do with the JSON headers</td>
      </tr>
      <tr>
         <td>subject</td>
         <td>Yes</td>
         <td>Must be a valid string</td>
         <td>The subject of your email</td>
      </tr>
      <tr>
         <td>text</td>
         <td>No</td>
         <td>API call must include at least one of the text or html parameters.</td>
         <td>The plain text content of your email message.</td>
      </tr>
      <tr>
         <td>html</td>
         <td>No</td>
         <td>API call must include at least one of the text or html parameters.</td>
         <td>The HTML content of your email message.</td>
      </tr>
      <tr>
         <td>from</td>
         <td>Yes</td>
         <td>Must be a valid email address from your domain</td>
         <td>This is where the email will appear to originate from for your recipient</td>
      </tr>
      <tr>
         <td>bcc</td>
         <td>No</td>
         <td>Must be a valid email address</td>
         <td>This can also be passed in as an array of email addresses for multiple recipients. Example: bcc[]=a@mail.com[]=b@mail.com.</td>
      </tr>
      <tr>
         <td>fromname</td>
         <td>No</td>
         <td>Must a valid string</td>
         <td>This is name appended to the from email field. IE - Your name or company name</td>
      </tr>
      <tr>
         <td>replyto</td>
         <td>No</td>
         <td>Must be a valid email address</td>
         <td>Append a reply-to field to your email message</td>
      </tr>
      <tr>
         <td>date</td>
         <td>No</td>
         <td>Must be a valid [RFC 2822 formatted date](http://www.faqs.org/rfcs/rfc2822)</td>
         <td>Specify the date header of your email. One example: "Thu, 21 Dec 2000 16:01:07 +0200". PHP developers can use: *date('r');*</td>
      </tr>
      <tr>
         <td>files</td>
         <td>No</td>
         <td>Must be less than 7MB</td>
         <td>
            Files to be attached. The file contents must be part of the multipart HTTP POST. Ex: files[file1.jpg]=
            <file>
               [file2.pdf]=
               <file/>
            </file>
            <tr>
               <td>content</td>
               <td>No</td>
               <td>Required for sending inline images</td>
               <td>
                  Content IDs of the files to be used as inline images. Content IDs should match the cid's used in the HTML markup. Ex: content[file1.jpg]=ii_139db99fdb5c3704 would correspond with the HTML `
                  <img src="cid:ii_139db99fdb5c3704">`</img>
                  <tr>
                     <td>headers</td>
                     <td>No</td>
                     <td>Must be in valid JSON format without integers</td>
                     <td>A collection of key/value pairs in JSON format. Each key represents a header name and the value the header value. Ex: {"X-Accept-Language": "en", "X-Mailer": "MyApp"}</td>
                  </tr>
               </td>
            </tr>
         </td>
      </tr>
   </tbody>
</table>


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

### Call: Send to Multiple Recipients

{% apiexample multiple POST https://api.sendgrid.com/api/mail.send api_user=your_sendgrid_username&api_key=your_sendgrid_password&to[]=destination@example.com&toname[]=Destination&to[]=destination2@example.com&toname[]=Destination2&subject=Example_Subject&text=testingtextbody&from=info@domain.com false %}
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

### cURL Examples

Send to one email recipient

{% codeblock lang:bash %}
$ curl -d 'to=destination@example.com&amp;toname=Destination&amp;subject=Example Subject&amp;text=testingtextbody&amp;from=info@domain.com&amp;api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password' https://api.sendgrid.com/api/mail.send.json
{% endcodeblock %}

Send to multiple email recipients

{% codeblock lang:bash %}
$ curl -d 'to[]=destination@example.com&amp;toname[]=Destination&amp;to[]=destination2@example.com&amp;toname[]=Destination2&amp;subject=Example Subject&amp;text=testingtextbody&amp;from=info@domain.com&amp;api_user=your_sendgrid_username&amp;api_key=your_sendgrid_password' https://api.sendgrid.com/api/mail.send.json
{% endcodeblock %}

Send a test with attachment

{% codeblock lang:bash %}
$ curl https://api.sendgrid.com/api/mail.send.json \
-F to=recipient@domain.com -F toname=test -F subject="Example Subject" \
-F text="testing text body" --form-string html="<strong>testing html body</strong>" \
-F from=test@yourdomain.com -F api_user=your_sendgrid_username -F api_key=your_sendgrid_password \
-F files[attachment.gz]=@f.php.gz https://api.sendgrid.com/api/mail.send.json
{% endcodeblock %}

<span class="label label-info">Note</span> To ensure that it uploads from a local file, use \<@filename\>.

Send a test specifying the file content type by appending ';type=<mime type>' to the file name

{% codeblock lang:bash %}
$ curl https://api.sendgrid.com/api/mail.send.json \
-F to=recipient@domain.com -F toname=test -F subject="Example Subject" \
-F text="testing text body" --form-string html="<strong>testing html body</strong>" \
-F from=test@yourdomain.com -F api_user=your_sendgrid_username -F api_key=your_sendgrid_password \
-F files[attachment.pdf]=@attachment.pdf;type=application/pdf
{% endcodeblock %}

### Raw HTTP Dump

The following is a dump of the HTTP data sent to our server to generate an email via our web API.

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
