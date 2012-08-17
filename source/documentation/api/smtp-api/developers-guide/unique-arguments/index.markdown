---
comments: false
date: 2011-06-29 13:51:58
layout: page
slug: unique-arguments
title: Unique Arguments
wordpress_id: 1697
---

The SMTP API JSON string includes a feature that allows you to attach an unlimited number of unique arguments to your email. The arguments are used only for tracking. They can be retrieved through the [Event API](/documentation/api/event-api/) or the [Email Activity](/documentation/delivery-metrics/email-activity/) page. 

These arguments can be add using a JSON string like this:

`
{"unique_args": {"customerAccountNumber": "55555", "activationAttempt": "1"}}
`

These arguments can then be seen in posts from the SendGrid Event API. The contents of one of these posts would look something like this:
`
    [email] => ben@sendgrid.com
    [test_param] => test_value
    [2nd_param] => 2nd_value
    [event] => processed
`

Additionally Unique Arguments can be seen in the Email Activity tab of your account. You can see an example of this below.
[![](http://docs.sendgrid.com/wp-content/uploads/2011/06/event.png)](http://docs.sendgrid.com/wp-content/uploads/2011/06/event.png)

