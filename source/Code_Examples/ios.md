---
layout: page
weight: 0
title: iOS (Objective-C)
navigation:
  show: true
---

{% github sendgrid/sendgrid-objc#usage Objective-C %}
We recommend using SendGrid Objective-C, our client library, <a href="https://github.com/sendgrid/sendgrid-objc">available on Github</a>, with full documentation.
{% endgithub %}

{% anchor h2 %}Using SendGrid's Objective-C Library{% endanchor %}
{% codeblock lang:objc %}
// using SendGrid's Objective-C Library - https://github.com/sendgrid/sendgrid-objc
#import <SendGrid/SendGrid.h>
#import <SendGrid/SendGridEmail.h>
 
SendGrid *sendgrid = [SendGrid apiUser:api_user apiKey:api_key];
 
SendGridEmail *email = [[SendGridEmail alloc] init];
email.to = @"you@youreamil.com";
email.from = @"test@sendgrid.com";
email.subject = @"Sending with SendGrid is Fun";
email.html = @"and easy to do anywhere, even with Objective-C";
 
[sendgrid sendWithWeb:email];
{% endcodeblock %}
