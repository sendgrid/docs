---
layout: page
weight: 950
title: Using the SMTP API
navigation:
  show: true
---

You can add as many of the SMTP API methods to a single large JSON string that can be passed to SendGrid with your messages. To do this, add the JSON string to your message under a header named "X-SMTPAPI" like this:

{% codeblock lang:json %}{
  "to": [
    "ben@sendgrid.com",
    "joe@sendgrid.com"
  ],
  "sub": {
    "%name%": [
      "Ben",
      "Joe"
    ],
    "%role%": [
      "%sellerSection%",
      "%buyerSection%"
    ]
  },
  "section": {
    "%sellerSection%": "Seller information for: %name%",
    "%buyerSection%": "Buyer information for: %name%"
  },
  "category": [ 
    "Orders"
  ],
  "unique_args": {
    "orderNumber": "12345",
    "eventID": "6789"
  },
  "filters": {
    "footer": {
      "settings": {
        "enable": 1,
        "text/plain": "Thank you for your business"
      }
    }
  },
  "send_at": 1409348513
}
{% endcodeblock %}

<p>The above example is formatted for readability. Headers must be wrapped to keep the line length under 72. By RFC 821 no line can be longer than 1,000, so if you are going to generate this string yourself it is a good idea to make sure that you wrap it.</p>

<p>Here is a full example of generating the above JSON header in a Perl script:</p>

{% codeblock lang:perl %}

#!/usr/local/bin/perl -w

use strict;
use JSON;

my $header = { to => ['ben@sendgrid.com', 'joe@sendgrid.com'],
sub => { '%name%' => [ 'Ben', 'Joe' ], '%role%' =>[ 'sellerSection', 'buyerSection' ] },
section => { '%sellerSection%' => 'Seller information for: %name%', '%buyerSection%' => 'Buyer information for: %name%' },
category => 'Orders',
unique_args => { 'orderNumber' => '12345', 'eventID' => '6789' },
filters => { 'footer' => {'settings' => {'text/plain' => "Thank you for your business"}}}};

my $json = JSON->new;
$json->space_before(1);
$json->space_after(1);
my $js = $json->encode($header);
# This regex breaks the string up at whitespaces to keep the line length short
$js =~ s/(.{1,72})(\s)/$1\n   /g;
my $hdr = "X-SMTPAPI: $js";
print "$hdr\n";
{% endcodeblock %}
{% anchor h2 %}
Requirements and Limitations 
{% endanchor %}

{% warning %}
While there is a hard limit of 10,000 addresses that can be sent to in a multiple recipient e-mail, it is best to split up large jobs at around 1,000 recipients, as this will better allow for the processing load to be distributed. Further, if you have a large number of additional substitions or sections in the headers, it is best to split the send into even smaller groups.
{% endwarning %}

<p>If you use the multiple recipient functionality of the API, you must not send to multiple recipients with the SMTP protocol as well. Doing so can cause duplicates of the message to be sent.
</p>

<p>Ensure that the header is limited to a maximum total line length of 1,000 characters. Failure to do this can cause intermediate MTA's to split the header for you on non-space boundaries, which will cause spaces to be inserted in the final resulting e-mail. In addition, if your e-mail is going through another MTA before reaching SendGrid, it is likely to have an even lower setting for maximum header length and may truncate the header.</p>

<p>When using the API, if our system encounters a parsing error, the message will be bounced to the address specified in the MAIL FROM portion of the SMTP session. The MAIL FROM address is re-written when we send e-mail out for final delivery, so it is safe to set this to an address that can receive the bounces so that you will be alerted on errors. More info: <a href="https://support.sendgrid.com/hc/en-us/articles/200181478-How-to-set-up-bounce-forwarding-to-go-to-the-email-s-FROM-address"></a>Bounce Forwarding</a> </p>