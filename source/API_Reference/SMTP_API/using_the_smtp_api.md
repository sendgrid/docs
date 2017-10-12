---
layout: page
weight: 950
title: Using the SMTP API
navigation:
  show: true
---

You can add as many of the SMTP API methods as you want to a single large JSON string, and pass that JSON string to SendGrid with your messages. To do this, add the JSON string to your message under a header named "X-SMTPAPI" like this:

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

<p>The above example is formatted for readability. Headers must be wrapped to keep the line length under 72. By <a href="https://tools.ietf.org/html/rfc821">RFC 821</a> no line can be longer than 1,000, so if you are going to generate this string yourself it is a good idea to make sure that you wrap it.</p>

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
While there is a hard limit of 10,000 addresses that can be sent to in a multiple recipient e-mail, it is best to split up large jobs to around 1,000 recipients, to better allow for the processing load to be distributed. Furthermore, if you have a large number of additional substitutions or sections in the headers, it is best to split the send into even smaller groups.
{% endwarning %}

<p>When using the X-SMTPAPI to send to multiple recipients, you cannot use the standard SMTP protocols "TO" field to send to multiple recipients because doing so can generate duplicate messages to the addresses listed in both. 

For more information on this, read <a href="http://tools.ietf.org/html/rfc821"> RFC 821</a>.
</p>

<p>Ensure that the header is limited to a maximum total line length of 1,000 characters. Failure to do this can cause intermediate MTA's to split the header on non-space boundaries, which will cause spaces to be inserted in the final resulting e-mail. Additionally, if your e-mail is going through another MTA before reaching SendGrid, it is likely to have an even lower setting for maximum header length and may truncate the header.</p>

<p>When using the API, if our system encounters a parsing error the message will be bounced to the address specified in the MAIL FROM portion of the SMTP session. The MAIL FROM address is re-written when we send e-mail out for final delivery, so it is safe to set this to an address that can receive the bounces so that you will be alerted to any errors. More info: <a href="{{site.support_url}}/hc/en-us/articles/200181478-How-to-set-up-bounce-forwarding-to-go-to-the-email-s-FROM-address"></a>Bounce Forwarding</a> </p>

{% anchor h2 %}
Sending Unicode in the SMTP API
{% endanchor %}

When sending unicode characters via the SMTP API, you should escape these characters using the ```\u``` escape character. When you do this, unicode characters like ``` á``` becomes ```\u00E1```. To see a list of unicode characters in the Wikipedia's [Unicode Article](http://en.wikipedia.org/wiki/List_of_Unicode_characters).
