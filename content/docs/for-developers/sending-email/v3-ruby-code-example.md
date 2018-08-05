---
layout: page
weight: 0
title: v3 API Ruby Code Example
group: api-v3
navigation:
  show: true
---

<call-out>

We recommend using SendGrid Ruby, our client library, [availableon Github](https://github.com/sendgrid/sendgrid-ruby), with full documentation.

</call-out>

<call-out>

Do you have an [API Key](https://app.sendgrid.com/settings/api_keys) yet? If not, go get one. You're going to need it to integrate!

</call-out>

##  Using SendGrid's Ruby Library
```ruby
# using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'
include SendGrid

from = Email.new(email: 'test@example.com')
to = Email.new(email: 'test@example.com')
subject = 'Sending with SendGrid is Fun'
content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
```