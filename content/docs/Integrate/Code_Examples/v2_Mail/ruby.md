---
layout: page
weight: 0
title: Ruby
navigation:
  show: true
---

{% github sendgrid/sendgrid-ruby#usage PHP %} We recommend using SendGrid Ruby, our client library, <a href="https://github.com/sendgrid/sendgrid-ruby">available on Github</a>, with full documentation. {% endgithub %}

{% info %}
The library does not officially support the V2 API, but you can use V2 with an older version of the library. For more information, see [Continue Using V2 in Ruby](https://github.com/sendgrid/sendgrid-ruby/blob/master/TROUBLESHOOTING.md#v2).
{% endinfo %}

<page-anchor el="h2"> Using SendGrid's Ruby Library </page-anchor>
{% codeblock lang:ruby %}
# using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'

sendgrid = SendGrid::Client.new do |c|
  c.api_key = 'SENDGRID_APIKEY'
end

email = SendGrid::Mail.new do |m|
  m.to      = 'test@sendgrid.com'
  m.from    = 'you@youremail.com'
  m.subject = 'Sending with SendGrid is Fun'
  m.html    = 'and easy to do anywhere, even with Ruby'
end

sendgrid.send(email)
{% endcodeblock %}

This example shows how to send email plain text and HTML email using Ruby. The gem [Mail](https://github.com/mikel/mail) is required.

{% codeblock lang:ruby %}
require 'mail'
Mail.defaults do
  delivery_method :smtp, { :address   => "smtp.sendgrid.net",
                           :port      => 587,
                           :domain    => "yourdomain.com",
                           :user_name => "yourusername@domain.com",
                           :password  => "yourPassword",
                           :authentication => 'plain',
                           :enable_starttls_auto => true }
end

mail = Mail.deliver do
  to 'yourRecipient@domain.com'
  from 'Your Name <name@domain.com>'
  subject 'This is the subject of your email'
  text_part do
    body 'Hello world in text'
  end
  html_part do
    content_type 'text/html; charset=UTF-8'
    body '<b>Hello world in HTML</b>'
  end
end
{% endcodeblock %}

 To install the [Mail](https://github.com/mikel/mail) gem please note that you need the OpenSSL library installed, then run the following:

{% codeblock lang:bash %}
gem install mail
{% endcodeblock %}
