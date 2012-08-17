---
comments: false
date: 2011-03-25 15:47:03
layout: page
slug: ssmtp
title: ssmtp
wordpress_id: 240
---

To get ssmtp to relay email through SendGrid you first need to install it.  On Ubuntu you can do the following
`
$ apt-get install ssmtp
`

Then edit **/etc/ssmtp/ssmtp.conf** and add the following
`
mailhub=smtp.sendgrid.net:587
AuthUser=sendgridusername
AuthPass=sendgridpassword
UseSTARTTLS=YES
`
