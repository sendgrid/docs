---
layout: page
weight: 0
title: Ruby
navigation:
  show: true
---

This example shows how to send email plain text and HTML email using Ruby. To get started, install the official [SendGrid Ruby](https://github.com/sendgrid/sendgrid-ruby) gem.

{% codeblock lang:bash %}
gem install sendgrid-ruby
{% endcodeblock %}

Create a new client with your SendGrid Username and Password:
{% codeblock lang:ruby %}
require 'sendgrid-ruby'

# As a hash
client = SendGrid::Client.new(api_user: 'SENDGRID_USERNAME', api_key: 'SENDGRID_PASSWORD')

# Or as a block
client = SendGrid::Client.new do |c|
  c.api_user = 'SENDGRID_USERNAME'
  c.api_key = 'SENDGRID_PASSWORD'
end
{% endcodeblock %}

Then; Create a new Mail object and send:
{% codeblock lang:ruby %}
mail = SendGrid::Mail.new do |m|
  m.to = 'rbin@sendgrid.com'
  m.from = 'taco@cat.limo'
  m.subject = 'Hello world!'
  m.text = 'I heard you like Pineapple.'
    # OR
  m.html = '<p>I heard you like Pineapple!</p>'  
end

puts client.send(mail) 
# {"message":"success"}
{% endcodeblock %}

You can also create a Mail object with a hash:
{% codeblock lang:ruby %}
client.send(SendGrid::Mail.new(to: 'example@example.com', from: 'taco@cat.limo', subject: 'Hello world!', text: 'Hi there!', html: '<b>Hi there!</b>'))

# {"message":"success"}
{% endcodeblock %}
