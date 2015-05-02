---
layout: page
title: Command Line Utility
weight: 60
navigation:
  show: true
---

Send emails from the command line. This utility is good for testing and gives you an easy way to send emails in Bash or other command line scripts (windows supported as well).

{% anchor h3 %}
Here is a simple example:
{% endanchor %}

{% codeblock lang:bash %}
SENDGRID_USERNAME=username SENDGRID_PASSWORD=password sendgrid -s 'Some subject' -f fromemail@gmail.com toemail@gmail.com < filenamewithemailbody.txt
{% endcodeblock %}

You can check out the documentation here:

https://github.com/lancecarlson/sendgrid

Download the latest version for your operating system (rename your binary to sendgrid):

https://github.com/lancecarlson/sendgrid/releases
