---
layout: page
weight: 0
title: Filter Settings
navigation:
  show: true
---

{% info %}
  These API requests are Account Wide settings, unlike the SMTP API which will change the status at the individual email message level.
{% endinfo %}

For a more detailed description of each of the Filters below, please visit the [Settings]({{root_url}}/User_Guide/Settings/) page.

All calls to change filter settings are made to the [filter.setup endpoint.]({{root_url}}/API_Reference/Web_API/filter_commands.html#-Setup-App)

<page-anchor el="h2">
Address Whitelist
</page-anchor>

*Name - `addresswhitelist`*

{% info %}
When using this call, you must define all emails & domains here. Using this call will overwrite any current settings for this filter. This would also be how you remove an entry, by excluding if from the call.
{% endinfo %}
{% parameters addresswhitelist %}

  {% parameter name yes 'addresswhitelist' 'The name of the setting.' %}
  {% parameter list yes 'A list of email addresses or domains.' 'list[]=support@example.com&list[]=sales@example.com' %}
{% endparameters %}

{% apiexample addresswhitelist POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=addresswhitelist&list[]=support@example.com&list[]=sales@example.com %}
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

<page-anchor el="h2">
BCC "Blind Carbon Copy"
</page-anchor>

*Name - `bcc`*

{% parameters bcc %}

  {% parameter name yes 'bcc' 'The name of the setting.' %}
  {% parameter email yes 'An email address to be the BCC recipient.' 'email@example.com' %}
{% endparameters %}

{% apiexample bcc POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=bcc&email=email@example.com %}
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

<page-anchor el="h2">
Click Tracking
</page-anchor>

*Name - `clicktrack`*

{% parameters clicktrack %}

  {% parameter name yes 'clicktrack' 'The name of the setting.' %}
  {% parameter enable_text yes 'Enable click tracking in plain text emails.' '0 or 1' %}
{% endparameters %}

{% apiexample clicktrack POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=clicktrack&enable_text=1 %}
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

<page-anchor el="h2">
DKIM
</page-anchor>

*Name - `dkim`*

{% parameters dkim %}

  {% parameter name yes 'dkim' 'The name of the setting.' %}
  {% parameter domain yes 'The domain to sign messages as.' 'example.com' %}
  {% parameter use_from no 'If enabled, the domain in the From: header of the email will be used to sign your DKIM.' '0 or 1' %}
{% endparameters %}

{% apiexample dkim POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=dkim&domain=example.com&use_from=1 %}
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

{% anchor h2 -Email-Templates %}
Legacy Email Templates
</page-anchor>

*Name - `template`*

{% warning %}
This setting is our original Email Template app, today we have more full featured [transactional templates]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/index.html), with support for multiple templates, and versioning, and many other helpful features. Its settings, however, are controlled using a [separate API]({{root_url}}/API_Reference/Web_API_v3/Transactional_Templates/index.html).
{% endwarning %}
{% parameters template %}

  {% parameter name yes 'template' 'The name of the setting.' %}
  {% parameter text/html yes 'A string that holds the template html body.' '\<html\>\<head\>\</head\>\<body bgcolor='pink'\>\<div style='width:200px' bgcolor='\#FFF'\>\<% body %\>\</div\>\</body\>\</html\>' %}
{% endparameters %}

{% apiexample template POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=template&text/html=%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%20bgcolor%3D%27pink%27%3E%3Cdiv%20style%3D%27width%3A200px%27%20bgcolor%3D%27%23FFF%27%3E%3C%25%20body%20%25%3E%3C%2Fdiv%3E%3C%2Fbody%3E%3C%2Fhtml%3E %}
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

<page-anchor el="h2">
Event Notification
</page-anchor>

*Name - `eventnotify`*

{% info %}
All fields except version are required for each call.
{% endinfo %}


{% parameters eventnotify %}
 {% parameter 'name' 'Yes' 'eventnotify' 'The setting.' %}
 {% parameter 'processed' 'Yes' 'Notify when email is processed' '0' %}
 {% parameter 'dropped' 'Yes' 'Notify when email is dropped' '1' %}
 {% parameter 'deferred' 'Yes' 'Notify when email is deferred' '1' %}
 {% parameter 'delivered' 'Yes' 'Notify when email is delivered' '1' %}
 {% parameter 'bounce' 'Yes' 'Notify when email is bounced' '1' %}
 {% parameter 'click' 'Yes' 'Notify when email is clicked' '1' %}
 {% parameter 'open' 'Yes' 'Notify when email is opened' '1' %}
 {% parameter 'unsubscribe' 'Yes' 'Notify when email is unsubscribed' '1' %}
 {% parameter 'group_unsubscribe' 'Yes' 'Notify when recipient unsubscribes from group' '1' %}
 {% parameter 'group_resubscribe' 'Yes' 'Notify when recipient resubscribes to group' '1' %}
 {% parameter 'spamreport' 'Yes' 'Notify when email is marked as spam' '1' %}
 {% parameter 'group_unsubscribe' 'Yes' 'Notify when email unsubscribes from an [Unsubscribe Group]({{root_url}}//API_Reference/Web_API_v3/Suppression_Management/groups.html)' '1' %}
 {% parameter 'group_resubscribe' 'Yes' 'Notify when email resubscribes to an [Unsubscribe Group]({{root_url}}//API_Reference/Web_API_v3/Suppression_Management/groups.html)' '1' %}
 {% parameter 'url' 'Yes' 'The post notification url to post these event messages to' 'https://notificationurl.example.com/event' %}
 {% parameter 'version' 'No' 'The version of the Event API you wish to use. (1-3)' '3' %}
{% endparameters %}


{% apiexample eventnotify POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=eventnotify&processed=0&dropped=1&deferred=1&delivered=1&bounce=1&click=1&unsubscribe=1&spamreport=1&url=https://notificationurl.example.com/event&version=3 %}
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

<page-anchor el="h2">
Footer
</page-anchor>

*Name - `footer`*

You must provide either text/html or text/plain, or both, to avoid receiving a "missing parameters" error.

{% parameters footer %}
 {% parameter 'name' 'Yes' 'footer' 'The setting.' %}
 {% parameter 'text/html' 'No' 'String that holds the html body' '&lt;html&gt;Content&lt;/html&gt;' %}
 {% parameter 'text/plain' 'No' 'String that holds the text body' 'Content' %}
{% endparameters %}


{% apiexample footer POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=footer&text/html=%3Cp%3EThanks!%3Cbr%2F%3ESendGrid%3C%2Fp%3E&text/plain=Thanks!%0ASendGrid %}
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

<page-anchor el="h2">
Google Analytics
</page-anchor>

*Name - `ganalytics`*

At least one of the optional parameters needs to be passed to avoid a "missing parameters" error.

{% parameters ganalytics %}
 {% parameter 'name' 'Yes' 'ganalytics' 'The setting.' %}
 {% parameter 'utm_source' 'No' 'Name of the referrer source' 'Transactional Email' %}
 {% parameter 'utm_medium' 'No' 'Name of the marketing medium' 'email' %}
 {% parameter 'utm_campaign' 'No' 'Name of the campaign' 'Redesigned Transaction' %}
 {% parameter 'utm_term' 'No' 'Identify paid keywords' 'Health' %}
 {% parameter 'utm_content' 'No' 'Use to differentiate ads' 'PageB' %}
{% endparameters %}


{% apiexample ganalytics POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=ganalytics&utm_source=Transactional Email&utm_medium=email&utm_content=Reset Your Password&utm_campaign=Redesigned Transactional Messaging %}
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

<page-anchor el="h2">
SPAM Filter Checker
</page-anchor>

*Name - `spamcheck`*


{% parameters spamcheck %}
 {% parameter 'name' 'Yes' 'spamcheck' 'The setting.' %}
 {% parameter 'max_score' 'Yes' 'Emails with a spam score over this value will be considered spam and will not be delivered to the recipient. The default spam threshold is 5.0, but you can set this to any value you wish. We use SpamAssassin to process the spam checks for this filter, so you can base your maxscore setting on values typically used with SpamAssassin' '1.2' %}
 {% parameter 'url' 'Yes' 'URL to post the email and a copy of the detailed SpamAssassin report describing why the email was designated as spam' 'https://www.example.com/spamcheck.php' %}
{% endparameters %}


{% apiexample spamcheck POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=spamcheck&max_score=1.2&url=https://www.example.com/spamcheck.php %}
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

<page-anchor el="h2">
Subscription Tracking
</page-anchor>

*Name - `subscriptiontrack`*

You must pass at least one of the optional params in order to avoid the "missing parameter" error.

{% parameters subscriptiontrack %}
 {% parameter 'name' 'Yes' 'subscriptiontrack' 'The setting.' %}
 {% parameter 'text/html' 'No' 'String for the HTML e-mail body' 'If you would like to unsubscribe and stop receiving these emails &lt;% click here %&gt;' %}
 {% parameter 'text/plain' 'No' 'String for the plain text e-mail body' 'If you would like to unsubscribe and stop receiving these emails click here: &lt;% %&gt;.' %}
 {% parameter 'url' 'No' 'a URL the customer will be redirected to upon clicking the subscription management link' 'http://www.example.com/UnsubscribeLandingPage' %}
 {% parameter 'landing' 'No' 'HTML content for a landing page that will be displayed by SendGrid' '&lt;html&gt;Content&lt;/html&gt;' %}
 {% parameter 'replace' 'No' 'a tag that can be added to the content that will be replaced by SendGrid with the subscription management link' '[unsubscribe_tag]' %}
{% endparameters %}


{% apiexample subscriptiontrack POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=subscriptiontrack&text/html=%3Cp%3EIf%20you%20would%20like%20to%20unsubscribe%20and%20stop%20receiving%20these%20emails%20%3C%25%20click%20here%20%25%3E%3C%2Fp%3E&text/plain=If%20you%20would%20like%20to%20unsubscribe%20and%20stop%20receiving%20these%20emails%20click%20here%3A%20%3C%25%20%25%3E.&url=http://www.example.com/UnsubscribeLandingPage&replace=%5Bunsubscribe_tag%5D %}
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

<page-anchor el="h2">
SendGrid for New Relic
</page-anchor>

*Name - `newrelic`*


{% parameters newrelic %}
 {% parameter 'name' 'Yes' 'newrelic' 'The setting.' %}
 {% parameter 'license_key' 'Yes' 'Can be found in New Relic Settings page' %}
 {% parameter 'enable_subusers' 'Yes' 'false to disable, true to enable' %}
{% endparameters %}


{% apiexample newrelic POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=newrelic&license_key=1234567&enable_subusers=true %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<message>success</message>

  {% endresponse %}
{% endapiexample %}

* * * * *

<page-anchor el="h2">
Sendwithus
</page-anchor>

*Name - `sendwithus`*


{% parameters sendwithus %}
 {% parameter 'name' 'Yes' 'sendwithus' 'The setting for which to set or retrieve settings.' %}
 {% parameter 'license_key' 'Yes' 'Can be found in Sendwithus Settings page' %}
{% endparameters %}


{% apiexample sendwithus POST https://api.sendgrid.com/api/filter.setup api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=sendwithus&license_key=1234567 %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<message>success</message>

  {% endresponse %}
{% endapiexample %}
