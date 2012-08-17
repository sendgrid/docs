---
comments: false
date: 2011-06-27 12:15:41
layout: page
slug: ruby-example
title: Ruby Example
wordpress_id: 1474
---

These examples require the [JSON Ruby Gem](http://json.rubyforge.org/).



## SmtpApiHeader.rb


  This header is required for each example.

`
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
`

  

## Example Ruby Usage



`
#!/usr/bin/ruby
require 'SmtpApiHeader.rb'
 
hdr = SmtpApiHeader.new
 
receiver = ['kyle','bob','someguy']
time = '1pm'
name = 'kyle'
 
hdr.addTo(receiver)
hdr.addTo('kyle2')
hdr.addSubVal('-time-', time)
hdr.addSubVal('-name-', name)
hdr.addFilterSetting('subscriptiontrack', 'enable', 1)
hdr.addFilterSetting('twitter', 'enable', 1)
hdr.setUniqueArgs({'test' => 1, 'foo' =>2})
a = hdr.asJSON()
a = hdr.as_string()
print a
print "\n"
`

  

## Full Ruby Email Usage (Ruby on Rails)


  These Ruby programs will build a multi-part MIME message demonstrating all of the portions of the SMTP API protocol and send it through SendGrid.

  

### Rails


  Add the following to the end of your config/environment.rb file in your rails project. Note that your ISP may block port 25, if so, please see [this solution](http://support.sendgrid.com/entries/131119-help-smtp-port-25-is-being-blocked).

`
ActionMailer::Base.smtp_settings = {
  :address => "smtp.sendgrid.net",
  :port => '25',
  :domain => "mydomain.com",
  :authentication => :plain,
  :user_name => "my_sendgrid_username",
  :password => "my_sendgrid_password"
}
`

  Run the following command inside your Rails project directory:
`./script/generate mailer Emailer`

  This will create emailer.rb in app/models. Edit that file to look like this:

  `
class Emailer < ActionMailer::Base
   def contact(recipient, subject, message, sent_at = Time.now, header)
      @subject = subject
      @recipients = recipient
      @from = 'no-reply@yourdomain.com'
      @sent_on = sent_at
      @body["title"] = 'This is title'
        @body["email"] = 'sender@yourdomain.com'
         @body["message"] = message
      @headers["X-SMTPAPI"] = header
   end
end
`

  Then add the following to any controller file to deliver an email and add the SMTPAPI header:

`
require 'SmtpApiHeader.rb'
 
# fromEmail is your email
# toEmail is recipient's email address
# For multiple recipient e-mails, the 'toEmail' address is irrelivant
fromEmail =  'you@yourdomain.com'
toEmail = 'doesntmatter@nowhere.com'
subject = "Contact Response for  at "
text = "Hi -name-!\nHow are you?\n"
 
hdr = SmtpApiHeader.new()
# The list of addresses this message will be sent to
receiver = ['isaac@example', 'tim@example', 'jose@example']
 
# The names of the recipients
times = ['1pm', '2pm', '3pm']
 
# Another subsitution variable
names = ['Isaac', 'Tim', 'Jose']
 
# Set all of the above variables
hdr.addTo(receiver)
hdr.addSubVal('-time-', times)
hdr.addSubVal('-name-', names)
 
# Specify that this is an initial contact message
hdr.setCategory("initial")
 
# Enable a text footer and set it
hdr.addFilterSetting('footer', 'enable', 1)
hdr.addFilterSetting('footer', "text/plain", "Thank you for your business")
 
#send the email
Emailer::deliver_contact(toEmail, fromEmail, text, hdr.asJSON())
`

  

### Ruby (experimental)


  Ruby has a built in SMTP library to send emails. This example uses:
  


    
  * [net/smtp.rb](http://www.ruby-doc.org/stdlib/libdoc/net/smtp/rdoc/map.html)

  

`
#!/usr/bin/ruby
 
require 'net/smtp'
require 'SmtpApiHeader.rb'
 
# simple function to create a multipart MIME email
# specify from to subject plaintext htmltext and an smtpapi header
def createMIME(from, to, subject, text, html, header)
    boundary = "----------=_" + rand(99999999999999999).to_s.center(20, rand(9).to_s)
    content = "Content-Type: multipart/alternative; boundary=\"" + boundary + "\"\n"
    encoding = "Content-Transfer-Encoding: binary\nMIME-Version: 1.0\n"
    f = "From: %s\n" %from
    t = "To: %s\n" %to
    s = "Subject: %s\n" %subject
    x = header + "\n"
    mimetype = "This is a multi-part message in MIME format...\n\n--" + boundary + "\n"
    textDefine = "Content-Type: text/plain\nContent-Disposition: inline\nContent-Transfer-Encoding: 7bit\n\n"
    htmlDefine = "Content-Type: text/html\nContent-Disposition: inline\nContent-Transfer-Encoding: 7bit\n\n"
 
    message = content + encoding + f + t + s + x + mimetype + textDefine + text + "\n--" + boundary + "\n" + htmlDefine + html + "\n--" + boundary + "--\n\n"
    return message
end    
 
hdr = SmtpApiHeader.new()
 
# The list of addresses this message will be sent to
receiver = ['isaac@example', 'tim@example', 'jose@example']
 
# The names of the recipients
times = ['1pm', '2pm', '3pm']
 
# Another subsitution variable
names = ['Isaac', 'Tim', 'Jose']
 
# Set all of the above variables
hdr.addTo(receiver)
hdr.addSubVal('-time-', times)
hdr.addSubVal('-name-', names)
 
# Specify that this is an initial contact message
hdr.setCategory("initial")
 
# Enable a text footer and set it
hdr.addFilterSetting('footer', 'enable', 1)
hdr.addFilterSetting('footer', "text/plain", "Thank you for your business")
 
 
# fromEmail is your email
# toEmail is recipient's email address
# For multiple recipient e-mails, the 'toEmail' address is irrelivant
fromEmail =  'you@yourdomain.com'
toEmail = 'doesntmatter@nowhere.com'
subject = "Contact Response for  at "
 
text = "Hi -name-!\nHow are you?\n"
html = "

  
  
    

Hi! -name-  

       How are you?  

    


  

"
 
header = "X-SMTPAPI: %s\n" %hdr.asJSON()
mime =  createMIME(fromEmail, toEmail, subject, text, html, header)
 
# Login credentials
username = 'yourlogin@sendgrid.net'
password = 'yourpassword'
 
# send the message
smtp = Net::SMTP.start('smtp.sendgrid.net', 25, fromEmail, username, password, :plain)
smtp.send_message mime, fromEmail, toEmail
smtp.finish
`

  

## Related Content


  


    
  * [SMTP API](/documentation/api/smtp-api/)

    
  * [Integration: Ruby Email Example using SMTP](/documentation/get-started/integrate/examples/ruby-email-example-using-smtp/)
  

