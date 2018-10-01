---
layout: page
weight: 850
title: Using the Web API
navigation:
  show: true
---

{% anchor h2 %}
URL Format 
{% endanchor %}
<p>The following is the syntax for making Web API requests:</p>

<h4>Example WEB API URL</h4>
<code>https://api.sendgrid.com/api/[module].[action].[format]</code>


<ul>
  <li><strong>[module]</strong> - The API endpoint to call, e.g. blocks.</li>
  <li><strong>[action]</strong> - Each module supports multiple actions such as add, get, and delete.</li>
	<li><strong>[format]</strong> - This determines the response format. It can be either json for a JSON response or xml for an XML response.</li>
</ul>

{% codeblock lang:html %}
https://api.sendgrid.com/api/blocks.get.json
{% endcodeblock %}

<hr/>


{% anchor h2 %}
Responses 
{% endanchor %}

{% anchor h3 %}
HTTP Return codes 
{% endanchor %}
<ul>
	<li><strong>2XX</strong> - The API call was successful.</li>
	<li><strong>4XX</strong> - The API call had an error in the parameters. The error will be encoded in the body of the response.</li>
	<li><strong>5XX</strong> - The API call was unsuccessful. You should retry later.</li>
</ul>


<p>The formats supported are XML and JSON. Errors and success responses are described below while calls that provide information have their own return structure.</p>

{% anchor h3 %}
Errors 
{% endanchor %}
<ul>
	<li>XML
{% codeblock lang:xml %}<result>
   <message>error</message>
   <errors>
      ...
      <error>... error messages ...</error>
      ...
   </errors>
</result>

{% endcodeblock %}
</li>
	<li>JSON
{% codeblock lang:json %}{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
{% endcodeblock %}
</li>
</ul>

{% anchor h3 %}
Success
{% endanchor %}
<ul>
	<li>XML
{% codeblock lang:xml %}<result>
success
</result>

{% endcodeblock %}
</li>
	<li>JSON
{% codeblock lang:json %}{
  "message": "success"
}
{% endcodeblock %}
</li>
</ul>
<hr/>

{% anchor h2 %}
Authentication 
{% endanchor %}
<p>Each API call requires authentication. You must send the following HTTP parameters on your API calls. Your credentials will be the same as what you used for your SMTP authentication and/or website.</p>
<ul>
	<li><strong>api_user</strong> - This is the same credential used for your SMTP settings, and for logging into the website.</li>
	<li><strong>api_key</strong> - This is the same password to authenticate over SMTP, and for logging into the website.</li>
</ul>

<h4>Example API URL with user & pass parameters</h4>
{% codeblock lang:html %}
https://api.sendgrid.com/api/blocks.get.json?api_user=your_sendgrid_username&api_key=your_sendgrid_password
{% endcodeblock %}

<hr/>

<p>For detailed information on the available Web API methods, select one from the tree on the left.</p>


{% anchor h2 %}
The Data
{% endanchor %}

When you send data a GET request, it usually means that you're sending data in the URL's query string, the part after the '?' in the url, as a key/value pair. The key is defined by the place where you are sending the data and is assumed to be URL-safe, however the data you provide may not be. So, you should urlencode the value (or the data part) of any URL-passed information. 

For example, when you query google.com for "sendgrid.com/docs/" you get the following URL: 

{% codeblock %}
https://www.google.com/?gws_rd=ssl#q=sendgrid.com%2Fdocs%2F
{% endcodeblock %}

Where "sendgrid.com/docs/" was encoded to "sendgrid.com%2Fdocs%2F" in the URL. 

Most programming languages have support for urlencoding, but should you need a character lookup to reference, please see the [Wikipedia doc about urlencoding](http://en.wikipedia.org/wiki/Percent-encoding).
