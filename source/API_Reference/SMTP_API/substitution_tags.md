---
layout: page
weight: 0
title: Substitution Tags
navigation:
  show: true
---

<p>Substitution tags allow you to easily generate dynamic content for each recipient on your list. When you send to a list of recipients over SMTP API you can specify substitution tags specific to each recipient. For example, a first name that will then be inserted into an opening greeting like the following, where each recipient sees -firstName- replaced with their first name.</p>

{% codeblock lang:html %}
"Dear -firstName-" 
{% endcodeblock %}

<p>These tags can also be used in more complex scenarios. For example, you could use a -customerID- to build a custom URL that is specific to that user.</p>

<h4>A customer specific ID can replace -customerID- in the URL within your email</h4>
{% codeblock lang:html %}
<a href="http://example.com/customerOffer?id=-customerID-">Claim your offer!</a>
{% endcodeblock %}

{% info %}
Substitution tags will work in the Subject line, body of the email and in [Unique Arguments]({{root_url}}/API_Reference/SMTP_API/unique_arguments.html). 
{% endinfo %}

{% info %}
Substitutions are limited to 10000 bytes per personalization block.
{% endinfo %}

{% info %}
How you format your substitution tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through. In some cases -subVal- may be the best choice while in other %subVal% or #subVal# may make more sense. It is best to avoid characters that have special meaning in html, such as <,>, and &. These might end up encoded and will not be properly substituted.
{% endinfo %}

{% warning %}
Do not use spaces inside your substitution tags, e.g. %first name%
{% endwarning %}

{% warning %}
Do not nest substitution tags in substitions as they will fail and your substitution will not take place.
{% endwarning %}

{% anchor h2%}
Substitution Tag Example
{% endanchor %}

Email HTML content:
{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
       Thank you for your interest in our products. I have set up an appointment
             to call you at -time- EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             <a href="http://example.com/reschedule?id=-customerID-">reschedule</a>
 
                Regards,
 
                -salesContact-
                -contactPhoneNumber-<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<p>An accompanying SMTP API JSON header might look something like this:</p>

{% codeblock lang:json %}{
  "to": [
    "john.doe@gmail.com",
    "jane.doe@hotmail.com"
  ],
  "sub": {
    "-name-": [
      "John",
      "Jane"
    ],
    "-customerID-": [
      "1234",
      "5678"
    ],
    "-salesContact-": [
      "Jared",
      "Ben"
    ],
    "-contactPhoneNumber-": [
      "555.555.5555",
      "777.777.7777"
    ],
    "-time-": [
      "3:00pm",
      "5:15pm"
    ]
  }
}
{% endcodeblock %}

<p>The resulting email for John would look like this:</p>
{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello John,<br>
       Thank you for your interest in our products. I have set up an appointment
             to call you at 3:00pm EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             <a href="http://example.com/reschedule?id=1234">reschedule</a>
 
                Regards,
 
                Jared
                555.555.5555<br>
    </p>
  </body>
</html>
{% endcodeblock %}

<p>In contrast, the resulting email for Jane will look like the following, with her specific values replaced in for each tag:</p>
{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello Jane,<br>
       Thank you for your interest in our products. I have set up an appointment
             to call you at 5:15pm EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             <a href="http://example.com/reschedule?id=5678">reschedule</a>
 
                Regards,
 
                Ben
                777.777.7777<br>
    </p>
  </body>
</html>
{% endcodeblock %}

{% anchor h2 %}
SendGrid Defined Substitution Tags
{% endanchor %}
While the tags above are tags that you define at the time of your send in the SMTPAPI headers, SendGrid also offers [Unsubscribe Groups tags]({{root_url}}/User_Guide/Transactional_Templates/create_edit.html#-Unsubscribe-Substitution-Tags) that have been pre-defined for you. You can use these tags within the content of your email and you do not have to, and should not, define them.





