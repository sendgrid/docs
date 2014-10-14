---
layout: page
weight: 0
title: Section Tags
navigation:
  show: true
---

Sections are an extension of [substitution values]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html) that allow a user to specify large text blocks that will be mostly the same that can then be selected and customized on a per user basis. This is useful for sending dynamic content where a large section of the body will be similar across several users, as opposed to duplicating that text each time.

{% info %}
How you format your section tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through. In some cases -subVal- may be the best choice while in other %subVal% or #subVal# may make more sense.
{% endinfo %}

The format of the SMTP section key has the form:

{% codeblock lang:json %}
{
  "section": {
    "-sectionName1-": "section 1 text",
    "sectionName2": "section 2 text"
  }
}
{% endcodeblock %}

Typical usage is to have a tag in the body of your email that references a per user substitution tag. This user tag will contain a reference to a section tag. Section text may contain references to per recipient substitution variables.

### Section Tag Example

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
