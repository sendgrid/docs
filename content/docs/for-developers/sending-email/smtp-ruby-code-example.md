---
layout: page
weight: 0
title: SMTP Ruby Code Example
group: smtp
navigation:
  show: true
---

These examples require the [JSON Ruby Library](http://www.ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html).

## 	SmtpApiHeader.rb
 	
This header is required for each example.

```ruby
#!/usr/bin/ruby
# Version 1.0
# Last Updated 6/22/2009
require 'json'

class SmtpApiHeader

  def initialize()
    @data = {}
  end

  def addTo(to)
    @data['to'] ||= []
    @data['to'] += to.kind_of?(Array) ? to : [to]
  end

  def addSubVal(var, val)
    if not @data['sub']
      @data['sub'] = {}
    end
    if val.instance_of?(Array)
      @data['sub'][var] = val
    else
      @data['sub'][var] = [val]
    end
  end

  def setUniqueArgs(val)
    if val.instance_of?(Hash)
      @data['unique_args'] = val
    end
  end

  def setCategory(cat)

    @data['category'] = cat
  end

  def addFilterSetting(fltr, setting, val)
    if not @data['filters']
      @data['filters'] = {}
    end
    if not @data['filters'][fltr]
      @data['filters'][fltr] = {}
    end
    if not @data['filters'][fltr]['settings']
      @data['filters'][fltr]['settings'] = {}
    end
    @data['filters'][fltr]['settings'][setting] = val
  end

  def asJSON()
    json = JSON.generate @data
    return json.gsub(/(["\]}])([,:])(["\[{])/, '\\1\\2 \\3')
  end

  def as_string()
    json  = asJSON()
    str = 'X-SMTPAPI: %s' % json.gsub(/(.{1,72})( +|$\n?)|(.{1,72})/,"\\1\\3\n")
    return str
  end

end
```


## 	Example Ruby Usage
 	
```ruby
require './SmtpApiHeader.rb'
require 'mail'

Mail.defaults do
  delivery_method :smtp, { :address   => 'smtp.sendgrid.net',
                           :port      => 587,
                           :domain    => 'sendgrid.com',
                           :user_name => 'yourSendGridUsername',
                           :password  => 'yourSendGridPassword',
                           :authentication => 'plain',
                           :enable_starttls_auto => true }
end

hdr = SmtpApiHeader.new

receiver = ['recipienteexampexample@example.com', 'recipient2@domain.com']

hdr.addTo(receiver)
hdr.setUniqueArgs({'test' => 1, 'foo' =>2})
hdr.setCategory('yourCategory')

mail = Mail.deliver do
  header['X-SMTPAPI'] =  hdr.asJSON()
  to 'willnotdeliver@domain.com' # When using SMTPAPI's 'to' parameter, this address will not get delivered to
  from 'yourEmailAddress@domain.com'
  subject 'Ruby Example using X-SMTPAPI header'
  text_part do
    body 'You would put your content here, but I am going to say: Hello world!'
  end
  html_part do
    content_type 'text/html; charset=UTF-8'
    body '<b>Hello world!</b><br>Glad to have you here!'
  end
end

```
