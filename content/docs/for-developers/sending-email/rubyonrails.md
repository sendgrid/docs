---
layout: page
weight: 0
group: frameworks
title: Ruby on Rails
seo:
  title: Send Email with Ruby on Rails
  description: View instructions on how to easily send email with Ruby on Rails using SendGrid, by setting up setting up ActionMailer or using a gem.
navigation:
  show: true
---
  
This example shows how to send an email for user signups. You can also checkout <a href='https://github.com/sendgrid/sendgrid-ruby'>this gem</a> for more advanced features.

## Setup ActionMailer

Let's generate a Mailer class. Mailer classes function as our
controllers for email views.

``` bash
$ rails generate mailer UserNotifier
```

Now we open up the mailer we've just generated, `app/mailers/user_notifier.rb` and add a mailer action that sends users a signup email.

``` ruby
class UserNotifier < ActionMailer::Base
  default :from => 'any_from_address@example.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Thanks for signing up for our amazing app' )
  end
end
``` 

Now we need a view that corresponds to our action and outputs HTML for our email. Create a file `app/views/User_notifier/send_signup_email.html.erb` as follows:

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type' />
  </head>
  <body>
    <h1>Thanks for signing up, <%= @user.name %>!</h1>
    <p>Thanks for joining and have a great day! Now sign in and do
awesome things!</p>
  </body>
</html>
```

If you don't have a user model quite yet, generate one quickly.

``` bash
$ rails generate scaffold user name email login
$ rake db:migrate
```
Now in the controller for the user model `app/controllers/users_controller.rb`, add a call to UserNotifier.send_signup_email when a user is saved.

``` ruby
class UsersController < ApplicationController
  def create
    # Create the user from params
    @user = User.new(params[:user])
    if @user.save
      # Deliver the signup email
      UserNotifier.send_signup_email(@user).deliver
      redirect_to(@user, :notice => 'User created')
    else
      render :action => 'new'
    end
  end
end
```

Alright, now we're cooking! Let's get it all going through SendGrid.

## Configure ActionMailer to Use SendGrid

In `config/environment.rb` specify your ActionMailer settings to point to SendGrid's servers.

``` ruby
ActionMailer::Base.smtp_settings = {
  :user_name => 'your_sendgrid_username',
  :password => 'your_sendgrid_password',
  :domain => 'yourdomain.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
``` 
That's it! When a new user object is saved, an email will be sent to
the user via SendGrid.

<call-out type="warning">

As a best practice, you should not store your credentials directly in
the source but should instead store them in configuration files or
environment variables. See this tutorial on <a
  href='http://railsapps.github.io/rails-environment-variables.html'>environment
  variables in Rails</a>.

</call-out>
