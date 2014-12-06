---
layout: page
weight: 0
title: Spam Checker
navigation:
  show: true
---

{% info %}
This App is only available to <a href="https://sendgrid.com/pricing">Silver accounts and higher</a>
{% endinfo %}

<p>The Spam Checker app, is useful when your web application allows your end users to create content that is then emailed through your SendGrid account. Since emailing user generated content is hard to monitor and can often be abused by spammers, the Spam Checker filter notifies you when emails are detected that exceed a predefined spam threshold.</p>

![Spam Checker App Image]({{root_url}}/images/spam_checker.png "Spam Checker")

We use SpamAssassin to process the spam checks for this filter. The default threshold is 5.0, but you can set this to any value between 1 and 10. If you provide a URL, we will post the message to that URL, but this field is optional. If a message is flagged as spam using this filter, it will automatically be dropped by our system and will not be delivered to the recipient. 
{% warning %}
The Default Value for this App is 5.0, and can be ranged between 1 and 10. The lower the number, the more strict the filtering. For example, a value of 2 will drop all but the most flawless emails, where as 9 will only drop the spammiest of spam emails. 
{% endwarning %}

{% anchor h2 %}
Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>URL to Post Spam Messages</td>
         <td>No</td>
         <td>SendGrid will send an HTTP POST request when it detects emails that are above the threshold to the URL specified.</td>
      </tr>
      <tr>
         <td>Spam Threshhold</td>
         <td>No (default:5)</td>
         <td>Emails with a spam score over this value will be considered spam and will not be delivered to the recipient. We use SpamAssassin to process the spam checks for this App, so you can base your Spam Threshold setting on values typically used with SpamAssassin. A lower score suggests that your email is the less likely it is to be spam, while higher numbers suggest a message is spam.</td>
      </tr>
   </tbody>
</table>

The HTTP POST request that you receive at the designated URL will contain parameters with details about the spam checker event. If the URL is not specified, this HTTP POST request will simply not occur.

{% anchor h2 %}
Parameters: 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Name</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>email</td>
         <td>The contents of the email that was flagged as spam.</td>
      </tr>
      <tr>
         <td>report</td>
         <td>The detailed SpamAssassin report describing why the email was designated as spam.</td>
      </tr>
   </tbody>
</table>

{% anchor h2 %}
Example POST: 
{% endanchor %}

{% anchor h3 %}
Headers 
{% endanchor %}

{% codeblock %}
Content-Type: multipart/form-data; boundary=xYzZY 
User-Agent: SendGrid 1.0 
Version: HTTP/1.1 
{% endcodeblock %}

{% anchor h3 %}
Parameters

{% endanchor %}
{% codeblock %}
email: Date: Tue, 12 June 2012 11:59:34 PST From: Hip Recall Claim Center <hiprecallclaimcenter> Subject: Thousands of Hip Implants Recalled Due to Failure! To: Undisclosed Recipient <mail> X-BID: 11117965 22049 MIME-Version: 1.0 Content-Type: text/html Content-Transfer-Encoding: 7bit Message-ID:  <center> <p>Please click "Not Spam" above if delivered to spam folder</p> <br><br><div align="center"> <a href="http://xgwi112oswing_._com/?dWlkPTEwMDAxJmNpZD0yMjA0OSZsaWQ9MSZybj1jdXBp"> Hip Implants Recalled Due to Failure, Info and Compensation Here!...Click Here<br><img border="0" src="http://xgwi112oswing_._com/?dWlkPTEwMDAxJmNpZD0yMjA0OSZsaWQ9YSZybj1taXh1d2V6YQ"></a> <br><a href="http://xgwi112oswing_._com/?dWlkPTEwMDAxJmNpZD0yMjA0OSZsaWQ9MiZybj13YWo"> <img border="0" src="http://xgwi112oswing.com/?dWlkPTEwMDAxJmNpZD0yMjA0OSZsaWQ9YiZybj13dWs"></a> <br>
</div> </center> 
report: Spam detection software, running on the system "msa1.sendgrid.net", has identified this incoming email as possible spam. The original message has been attached to this so you can view it (if it isn't spam) or label similar future email. If you have any questions, see the administrator of that system for details. Content preview: Please click "Not Spam" above if delivered to spam folder Hip Implants Recalled Due to Failure, Info and Compensation Here!...Click Here [...] Content analysis details: (8.5 points, 5.0 required) pts rule name description ---- ---------------------- -------------------------------------------------- 1.1 INVALID_DATE Invalid Date: header (not RFC 2822) -0.0 NO_RELAYS Informational: message was not relayed via SMTP 1.6 URIBL_WS_SURBL Contains an URL listed in the WS SURBL blocklist [URIs: xgwi112oswing.com] 1.7 URIBL_DBL_SPAM Contains an URL listed in the DBL blocklist [URIs: xgwi112oswing.com] 0.6 HS_INDEX_PARAM URI: Link contains a common tracker pattern. 0.0 HTML_MESSAGE BODY: HTML included in message 1.7 HTML_IMAGE_ONLY_08 BODY: HTML: images with 400-800 bytes of words 0.8 BAYES_50 BODY: Bayes spam probability is 40 to 60% [score: 0.4993] 0.7 MIME_HTML_ONLY BODY: Message only has text/html MIME parts 0.4 HTML_MIME_NO_HTML_TAG HTML-only message, but there is no HTML tag 0.0 HTML_SHORT_LINK_IMG_1 HTML is very short with a linked image -0.0 NO_RECEIVED Informational: message has no Received headers 0.0 T_REMOTE_IMAGE Message contains an external image 0.0 TO_EQ_FM_DOM_HTML_IMG To domain == From domain and HTML image link 
{% endcodeblock %}

</mail></hiprecallclaimcenter>

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#spamcheck) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-SPAM-Filter-Checker) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
