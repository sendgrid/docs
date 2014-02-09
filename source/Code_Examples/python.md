---
layout: page
weight: 0
title: Python
navigation:
  show: true
---

This library allows you to quickly and easily send emails through SendGrid using Python. Full documentation for this library can be found on <a href='http://github.com/sendgrid/sendgrid-python'>GitHub</a>.


**Warning!** This library was recently updated to bring it up to date with all of our other libraries. It behaves completely different from the previous release. Also, SMTP has been deprecated in support for the Web API.


## Example

{% codeblock lang:python %}
import sendgrid

sg = sendgrid.SendGridClient('YOUR_SENDGRID_USERNAME', 'YOUR_SENDGRID_PASSWORD')

message = sendgrid.Mail()
message.add_to('John Doe <john@email.com>')
message.set_subject('Example')
message.set_html('Body?')
message.set_text('Body?')
message.set_from('Doe John <doe@email.com>')
sg.send(message)

#or

message = sendgrid.Mail(to='John Doe <john@email.com', subject='Example', html='Body?', text='Body?', from_email='doe@email.com')
sg.send(message)

{% endcodeblock %}

### Adding Recipients

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_to('example@sendgrid.com')
# or
message.add_to('Example Dude <example@sendgrid.com>')
{% endcodeblock %}

### Adding BCC Recipients

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_bcc('example@sendgri.com')
{% endcodeblock %}

### Setting the Subject

{% codeblock lang:python %}
message = sendgrid.Mail()
message.set_subject('New email')
{% endcodeblock %}

### Set Text or HTML

{% codeblock lang:python %}
message = sendgrid.Mail()
message.set_text('Body')
# or
message.set_html('<html><body>Stuff, you know?</body></html>')
{% endcodeblock %}

### Set From

{% codeblock lang:python %}
message = sendgrid.Mail()
message.set_from('example@lol.com')
{% endcodeblock %}

### Set File Attachments

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_attachment('./stuff.txt')
# or
message.add_attachment_stream('filename', 'somerandomcontentyouwant')
{% endcodeblock %}

## SendGrid's  [X-SMTPAPI](http://sendgrid.com/docs/API_Reference/SMTP_API/)

If you wish to use the X-SMTPAPI on your own app, you can use the [SMTPAPI Python library](https://github.com/sendgrid/smtpapi-python).

There are implementations for setter methods too.

### [Substitution](http://sendgrid.com/docs/API_Reference/SMTP_API/substitution_tags.html)

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_substitution("key", "value")
{% endcodeblock %}

### [Section](http://sendgrid.com/docs/API_Reference/SMTP_API/section_tags.html)

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_section("section", "value")
{% endcodeblock %}

### [Category](http://sendgrid.com/docs/Delivery_Metrics/categories.html)

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_category("category")
{% endcodeblock %}

### [Unique Arguments](http://sendgrid.com/docs/API_Reference/SMTP_API/unique_arguments.html)

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_unique_arg("key", "value")
{% endcodeblock %}

### [Filter](http://sendgrid.com/docs/API_Reference/SMTP_API/apps.html)

{% codeblock lang:python %}
message = sendgrid.Mail()
message.add_filter("filter", "setting", "value")
{% endcodeblock %}