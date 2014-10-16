---
layout: page
weight: 0
title: Section Tags
navigation:
  show: true
---

Section tags are an extension of [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html), meaning that a section tag is added to your email content within the value parameter of a substitution tag. Section tags allow a user to specify text blocks that will be customized on a per user basis. This is useful for sending dynamic content where large portions of the body will be similar across several users, as opposed to duplicating that text each time.

The format of the SMTP API section tag has the form:

{% codeblock lang:json %}
{
  "section": {
    "-sectionName1-": "section 1 text",
    "sectionName2": "section 2 text"
  }
}
{% endcodeblock %}

Typical usage is to have a substitution tag in the body of your email that contains a reference to a section tag in it's value parameter.  Section tag values may also contain references to per recipient substitution variables. See [Section Tag Example Explained](#-Section-Tag-Example-Explained) below.

{% anchor h2 %}
Section Tag Example
{% endanchor %}

Message body: 

{% codeblock lang:html %}
<html>
 <body>
   Hi -intro-,<br>
   Thanks so much for joining us at our event!
   Thanks,
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

An accompanying X-SMTPAPI JSON header body might look something like this:

{% codeblock lang:json %}
{
  "to": [
    "john@bar.com",
    "jane@baz.com",
    "bill@baz.com"
  ],
  "sub": {
    "-intro-": [
      "-greetGuy-",
      "-greetGirl-",
      "-greetBoy-"
    ],
    "-name-": [
      "John",
      "Jane",
      "Bill"
    ]
  },
  "section": {
    "-greetGuy-": "Mr. -name-",
    "-greetGirl-": "Ms. -name-",
    "-greetBoy-": "-name-"
  }
}
{% endcodeblock %}

The final email for Jane would look like this: 

{% codeblock lang:html %}
<html>
 <body>
   Hi Ms. Jane,<br>
   Thanks so much for joining us at our event!
   Thanks,
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

The final email for John would look like this: 

{% codeblock lang:html %}
<html>
 <body>
   Hi Mr. John,<br>
   Thanks so much for joining us at our event!
   Thanks,
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

{% anchor h3 %}
Section Tag Example Explained
{% endanchor %}

Our example uses nested substitution and section tags in order to demonstrate the possible complexity that can be used to create extremely customizable emails for your users.

For John the substitution process looks like this: 

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Tag</th>
<th>Tag Type</th>
<th>Replaced By</th>
</tr>
<tr>
<td>-intro-</td>
<td>Substitution Tag</td>
<td>-greetGuy-</td>
</tr>
<tr>
<td>-greetGuy-</td>
<td>Section Tag</td>
<td>Mr. -name-</td>
</tr>
<tr>
<td>-name-</td>
<td>Substitution Tag</td>
<td>John</td>
</tr>
</tbody>
</table>

For Jane the substitution process looks like this:

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Tag</th>
<th>Tag Type</th>
<th>Replaced By</th>
</tr>
<tr>
<td>-intro-</td>
<td>Substitution Tag</td>
<td>-greetGirl-</td>
</tr>
<tr>
<td>-greetGirl-</td>
<td>Section Tag</td>
<td>Ms. -name-</td>
</tr>
<tr>
<td>-name-</td>
<td>Substitution Tag</td>
<td>Jane | the second name</td>
</tr>
</tbody>
</table>


