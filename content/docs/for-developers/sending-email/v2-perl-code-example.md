---
layout: page
weight: 0
title: v2 API Perl Code Example
group: api-v2
seo:
  title: Send Email with Perl and SendGrid
  description: View code examples showing how to easily send email with Perl using SMTP and SendGrid. Further explore SendGrid's email sending Perl library.
navigation:
  show: true
---

<call-out>

We recommend using SendGrid Perl, our client library, <a href="https://github.com/sendgrid/sendgrid-perl">available on GitHub</a>, with full documentation.

</call-out>

## Using SendGrid's Perl Library

```perl
# Using SendGrid's Perl Library
# https://github.com/sendgrid/sendgrid-perl
use Mail::SendGrid;
use Mail::SendGrid::Transport::REST;

my $sendgrid = Mail::SendGrid->new(
  from => "test@sendgrid.com",
  to => "example@example.com",
  subject => "Sending with SendGrid is Fun",
  html => "and easy to do anywhere, even with Perl"
);

Mail::SendGrid::Transport::REST->new( username => $api_user, password => $api_key );
```

## Without sendgrid-perl

If you choose not to use SendGrid's client library you may use Perl's generic SMTP library.

The following code builds a MIME mail message demonstrating all the portions of the SMTP API protocol. To use this example, you will need to have the following perl modules installed:

* [MIME::Entity](http://search.cpan.org/perldoc?MIME::Entity)
* [Authen::SASL](http://search.cpan.org/perldoc?Authen::SASL)

```perl
#!/usr/bin/perl

use strict;
use MIME::Entity;
use Net::SMTP;

# from is your email address
# to is who you are sending your email to
# subject will be the subject line of your email
my $from = 'you@yourdomain.com';
my $to = 'example@example.com';
my $subject = 'Example Perl Email';

# Create the MIME message that will be sent. Check out MIME::Entity on CPAN for more details
my $mime = MIME::Entity->build(Type  => 'multipart/alternative',
                            Encoding => '-SUGGEST',
                            From => $from,
                            To => $to,
                            Subject => $subject
                            );
# Create the body of the message (a plain-text and an HTML version).
# text is your plain-text email
# html is your html version of the email
# if the receiver is able to view html emails then only the html
# email will be displayed
my $text = "Hi!\nHow are you?\n";
my $html = <<EOM;
<html>
  <head></head>
  <body>
    <p>Hi!<br>
       How are you?<br>
    </p>
  </body>
</html>
EOM

# attach the body of the email
$mime->attach(Type => 'text/plain',
            Encoding =>'-SUGGEST',
            Data => $text);

$mime->attach(Type => 'text/html',
            Encoding =>'-SUGGEST',
            Data => $html);

# attach a file
my $my_file_txt = 'example.txt';

$mime->attach ( Path      => $my_file_txt,
                   Type      => 'text/txt',
                   Encoding  => 'base64'
) or die "Error adding !\n";

# Login credentials
my $username = 'example@example.com';
my $password = "yourpassword";

# Open a connection to the SendGrid mail server
my $smtp = Net::SMTP->new('smtp.sendgrid.net',
                        Port=> 587,
                        Timeout => 20,
                        Hello => "yourdomain.com");

# Authenticate
$smtp->auth($username, $password);

# Send the rest of the SMTP stuff to the server
$smtp->mail($from);
$smtp->to($to);
$smtp->data($mime->stringify);
$smtp->quit();
```
