---
comments: false
date: 2011-03-25 15:45:56
layout: page
slug: rails-example-using-smtp
title: Rails Example Using SMTP
wordpress_id: 234
following_users:
- brandon
- support_docs
---

This Rails example shows how to send an email for user signups. You can also checkout [this Ruby Rails gem](https://github.com/stephenb/sendgrid) we developed in-house for more advanced features.

**_TECHNICAL NOTE: This example is specific to ActionMailer. Of course, you can use any SMTP package that is compatible with Rails, but the configuration may be slightly different._**  

In **config/environment.rb** specify ActionMailer defaults
`
ActionMailer::Base.smtp_settings = {
  :user_name => "sendgridusername",
  :password => "sendgridpassword",
  :domain => "yourdomain.com",
  :address => "smtp.sendgrid.net",
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
`

Create your notification model in **app/models/notifier.rb**
`
class Notifier < ActionMailer::Base
  default :from => "any_from_address@example.com"
  
  # send a signup email to the user, pass in the user object that contains the user's email address
  def signup_email(user)
    mail( :to => user.email,
    :subject => "Thanks for signing up" )
  end
end
`

In the controller in **app/controllers/users_controller.rb** add
`
class UsersController < ApplicationController
  def create
    # Create the user from params
    @user = User.new(params[:user])
    if @user.save
      # Deliver the signup_email
      Notifier.signup_email(@user).deliver
      redirect_to(@user, :notice => "User created")
    else
      render :action => "new"
    end
  end
end
`
