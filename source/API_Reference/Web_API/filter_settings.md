---
layout: page
weight: 0
title: Filter Settings
navigation:
  show: true
---

For a more detailed description of each of the Apps below, please visit the [Apps]({{root_url}}/Apps/) page.

All calls to change filter settings are made to the [filter.setup endpoint.]({{root_url}}/API_Reference/Web_API/filter_commands.html#-Setup-App)


{% anchor h2 %}
Address Whitelist 
{% endanchor %}

*API App Name - `addresswhitelist`*


{% info %}
When using this call, you must define all emails & domains here. Using this call will overwrite any current settings for this filter. This would also be how you remove an entry, by excluding if from the call. 
{% endinfo %}
{% parameters addresswhitelist %} 
  
  {% parameter name yes 'addresswhitelist' 'The name of the app for which to apply settings.' %}  
  {% parameter list no 'A list of email addresses or domains.' 'list[]=support@example.com&list[]=sales@example.com' %}{% endparameters %} 
{% apiexample addresswhitelist POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=addresswhitelist&list[]=support@example.com&list[]=sales@example.com %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
BCC "Blind Carbon Copy" 
{% endanchor %}

*API App Name - `bcc`*

{% parameters bcc %} 
  
  {% parameter name yes 'bcc' 'The name of the app for which to apply settings.' %}  
  {% parameter bcc yes 'An email address to be the BCC recipient.' 'email@example.com' %}{% endparameters %} 
{% apiexample bcc POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc&bcc=email@example.com %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Click Tracking 
{% endanchor %}

*API App Name - `clicktrack`*

{% parameters clicktrack %} 
  
  {% parameter name yes 'clicktrack' 'The name of the app for which to apply settings.' %}  
  {% parameter enable_text yes 'Enable click tracking in plain text emails.' '0 or 1' %}{% endparameters %} 
{% apiexample clicktrack POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=clicktrack&enable_text=1 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
DKIM 
{% endanchor %}

*API App Name - `dkim`*

{% parameters dkim %} 
  
  {% parameter name yes 'dkim' 'The name of the app for which to apply settings.' %}  
  {% parameter domain yes 'The domain to sign messages as.' 'example.com' %}  
  {% parameter use_from no 'If enabled, the domain in the From: header of the email will be used to sign your DKIM.' '0 or 1' %}{% endparameters %} 
{% apiexample dkim POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=dkim&domain=example.com&use_from=1 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Domain Keys 
{% endanchor %}

*API App Name - `domainkeys`*

{% parameters domainkeys %} 
  
  {% parameter name yes 'domainkeys' 'The name of the app for which to apply settings.' %}  
  {% parameter domain yes 'The domain to sign messages as.' 'example.com' %}  
  {% parameter sender no '1 to insert a sender header if the domain specified does not match the from address; 0 to never insert a Sender header.' '0 or 1' %}{% endparameters %} 
{% apiexample domainkeys POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=domainkeys&sender=1 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 -Email-Templates %}
Legacy Email Templates 
{% endanchor %}

*API App Name - `template`*


{% warning %}
This app is our original Email Template app, today we have a more full featured [Template Engine]({{root_url}}/API_Reference/Template_Engine_API/index.html), which supports multiple templates, versioning and more. Its settings, however, are controlled using a [separate API]({{root_url}}/API_Reference/Template_Engine_API/index.html). 
{% endwarning %}
{% parameters template %} 
  
  {% parameter name yes 'template' 'The name of the app for which to apply settings.' %}  
  {% parameter text_html yes 'A string that holds the template html body.' '\<html\>\<head\>\</head\>\<body bgcolor='pink'\>\<div style='width:200px' bgcolor='\#FFF'\>\<% body %\>\</div\>\</body\>\</html\>' %}{% endparameters %} 
{% apiexample template POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=template&text_html=%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%20bgcolor%3D%27pink%27%3E%3Cdiv%20style%3D%27width%3A200px%27%20bgcolor%3D%27%23FFF%27%3E%3C%25%20body%20%25%3E%3C%2Fdiv%3E%3C%2Fbody%3E%3C%2Fhtml%3E %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Event Notification 
{% endanchor %}

*API App Name - `eventnotify`*


{% info %}
All fields except version are required for each call. 
{% endinfo %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required?</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>eventnotify</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>processed</td>
         <td>Yes</td>
         <td>Notify when email is processed</td>
         <td>0</td>
      </tr>
      <tr>
         <td>dropped</td>
         <td>Yes</td>
         <td>Notify when email is dropped</td>
         <td>1</td>
      </tr>
      <tr>
         <td>deferred</td>
         <td>Yes</td>
         <td>Notify when email is deferred</td>
         <td>1</td>
      </tr>
      <tr>
         <td>delivered</td>
         <td>Yes</td>
         <td>Notify when email is delivered</td>
         <td>1</td>
      </tr>
      <tr>
         <td>bounce</td>
         <td>Yes</td>
         <td>Notify when email is bounced</td>
         <td>1</td>
      </tr>
      <tr>
         <td>click</td>
         <td>Yes</td>
         <td>Notify when email is clicked</td>
         <td>1</td>
      </tr>
      <tr>
         <td>open</td>
         <td>Yes</td>
         <td>Notify when email is opened</td>
         <td>1</td>
      </tr>
      <tr>
         <td>unsubscribe</td>
         <td>Yes</td>
         <td>Notify when email is unsubscribed</td>
         <td>1</td>
      </tr>
      <tr>
         <td>spamreport</td>
         <td>Yes</td>
         <td>Notify when email is marked as spam</td>
         <td>1</td>
      </tr>
      <tr>
         <td>url</td>
         <td>Yes</td>
         <td>The post notification url to post these event messages to</td>
         <td>https://notificationurl.example.com/event</td>
      </tr>
      <tr>
         <td>version</td>
         <td>No</td>
         <td>The version of the Event API you wish to use. (1-3)</td>
         <td>3</td>
      </tr>
   </tbody>
</table>



{% apiexample eventnotify POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=eventnotify&processed=0&dropped=1&deferred=1&delivered=1&bounce=1&click=1&unsubscribe=1&spamreport=1&url=https://notificationurl.example.com/event&version=3 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Footer 
{% endanchor %}

*API App Name - `footer`*

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required?</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>footer</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>text/html</td>
         <td>No</td>
         <td>String that holds the html body</td>
         <td>&lt;html&gt;Content&lt;/html&gt;</td>
      </tr>
      <tr>
         <td>text/plain</td>
         <td>No</td>
         <td>String that holds the text body</td>
         <td>Content</td>
      </tr>
   </tbody>
</table>



{% apiexample footer POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=footer&text/html=%3Cp%3EThanks!%3Cbr%2F%3ESendGrid%3C%2Fp%3E&text/plain=Thanks!%0ASendGrid %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Google Analytics 
{% endanchor %}

*API App Name - `ganalytics`*

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required?</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>ganalytics</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>utm_source</td>
         <td>No</td>
         <td>Name of the referrer source</td>
         <td>Transactional Email</td>
      </tr>
      <tr>
         <td>utm_medium</td>
         <td>No</td>
         <td>Name of the marketing medium</td>
         <td>email</td>
      </tr>
      <tr>
         <td>utm_campaign</td>
         <td>No</td>
         <td>Name of the campaign</td>
         <td>Redesigned Transaction</td>
      </tr>
      <tr>
         <td>utm_term</td>
         <td>No</td>
         <td>Identify paid keywords</td>
         <td>Health</td>
      </tr>
      <tr>
         <td>utm_content</td>
         <td>No</td>
         <td>Use to differentiate ads</td>
         <td>PageB</td>
      </tr>
   </tbody>
</table>



{% apiexample googleanalytics POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=ganalytics&utm_source=Transactional Email&utm_medium=email&utm_content=Reset Your Password&utm_campaign=Redesigned Transactional Messaging %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Gravatar 
{% endanchor %}

*API App Name - `gravatar`*

* * * * *


{% anchor h2 %}
Open Tracking 
{% endanchor %}

*API App Name - `opentrack`*

* * * * *


{% anchor h2 %}
SPAM Filter Checker 
{% endanchor %}

*API App Name - `spamcheck`*

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required?</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>spamcheck</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>maxscore</td>
         <td>Yes</td>
         <td>Emails with a spam score over this value will be considered spam and will not be delivered to the recipient. The default spam threshold is 5.0, but you can set this to any value you wish. We use SpamAssassin to process the spam checks for this filter, so you can base your maxscore setting on values typically used with SpamAssassin</td>
         <td>1.2</td>
      </tr>
      <tr>
         <td>url</td>
         <td>Yes</td>
         <td>URL to post the email and a copy of the detailed SpamAssassin report describing why the email was designated as spam</td>
         <td>https://www.example.com/spamcheck.php</td>
      </tr>
   </tbody>
</table>



{% apiexample spamcheck POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=eventnotify&maxscore=1.2&url=https://www.example.com/spamcheck.php %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Subscription Tracking 
{% endanchor %}

*API App Name - `subscriptiontrack`*

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Required?</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>subscriptiontrack</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>text/html</td>
         <td>No</td>
         <td>String for the HTML e-mail body</td>
         <td>If you would like to unsubscribe and stop receiving these emails &lt;% click here %&gt;</td>
      </tr>
      <tr>
         <td>text/plain</td>
         <td>No</td>
         <td>String for the plain text e-mail body</td>
         <td>If you would like to unsubscribe and stop receiving these emails click here: &lt;% %&gt;.</td>
      </tr>
      <tr>
         <td>url</td>
         <td>No</td>
         <td>a URL the customer will be redirected to on clicking the subscription management link</td>
         <td>http://www.example.com/UnsubscribeLandingPage</td>
      </tr>
      <tr>
         <td>landing</td>
         <td>No</td>
         <td>HTML content for a landing page that will be displayed by SendGrid</td>
         <td>&lt;html&gt;Content&lt;/html&gt;</td>
      </tr>
      <tr>
         <td>replace</td>
         <td>No</td>
         <td>a tag that can be added to the content that will be replaced by SendGrid with the subscription management link</td>
         <td>[unsubscribe_tag]</td>
      </tr>
   </tbody>
</table>



{% apiexample subscriptiontrack POST https://sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=subscriptiontrack&text/html=%3Cp%3EIf%20you%20would%20like%20to%20unsubscribe%20and%20stop%20receiving%20these%20emails%20%3C%25%20click%20here%20%25%3E%3C%2Fp%3E&text/plain=If%20you%20would%20like%20to%20unsubscribe%20and%20stop%20receiving%20these%20emails%20click%20here%3A%20%3C%25%20%25%3E.&url=http://www.example.com/UnsubscribeLandingPage&replace=%5Bunsubscribe_tag%5D %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
SendGrid for New Relic 
{% endanchor %}

*API App Name - `newrelic`*

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>newrelic</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>license_key</td>
         <td>YES</td>
         <td>Can be found in New Relic Settings page</td>
      </tr>
      <tr>
         <td>enable_subusers</td>
         <td>YES</td>
         <td>false to disable, true to enable</td>
      </tr>
   </tbody>
</table>


{% apiexample get POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&license_key=1234567&enable_subusers=true %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<message>success</message>

  {% endresponse %}
{% endapiexample %}

* * * * *


{% anchor h2 %}
Sendwithus 
{% endanchor %}

*API App Name - `sendwithus`*

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Required</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
      <tr>
         <td>name</td>
         <td>Yes</td>
         <td>sendwithus</td>
         <td>The app for which to set or retrieve settings.</td>
      </tr>
      <tr>
         <td>license_key</td>
         <td>YES</td>
         <td>Can be found in Sendwithus Settings page</td>
      </tr>
   </tbody>
</table>


{% apiexample get POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=sendwithus&license_key=1234567 %}
  {% response json %}
{
  "message": "success"
}
{% endresponse %}
  {% response xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<message>success</message>

  {% endresponse %}
{% endapiexample %}
