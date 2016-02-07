---
layout: page
weight: 0
title: API Libraries
seo:
  title: API Libraries & Clients - SendGrid Documentation | SendGrid
  override: true
  description: Send email and interact with SendGrid using your favorite language including Python, Go, Node.js, Ruby, PHP, Java, C#, Perl, Objective-C, and more.
navigation:
  show: true
---

These libraries allow quick integration between SendGrid and your project, and are available for a variety of languages and frameworks.

{% anchor h2 %}
Official libraries 
{% endanchor %}

SendGrid maintains the following official libraries for mail sending.

-   [sendgrid-csharp](http://github.com/sendgrid/sendgrid-csharp) - Official C\# Library
-   [sendgrid-go](http://github.com/sendgrid/sendgrid-go) - Official Go library
-   [sendgrid-java](http://github.com/sendgrid/sendgrid-java) - Official Java library
-   [sendgrid-nodejs](http://github.com/sendgrid/sendgrid-nodejs) - Official NodeJS library
-   [sendgrid-perl](http://github.com/sendgrid/sendgrid-perl) - Official Perl library
-   [sendgrid-php](http://github.com/sendgrid/sendgrid-php) - Official PHP library
-   [sendgrid-python](http://github.com/sendgrid/sendgrid-python) - Official Python library
-   [sendgrid-ruby](http://github.com/sendgrid/sendgrid-ruby) - Official Ruby library
-   [ti.sendgrid](http://github.com/sendgrid/ti.sendgrid) - Official Titanium wrapper

The following official libraries are maintained by SendGrid to create [SMTP API Headers]({{root_url}}/API_Reference/SMTP_API/index.html), they are included in the above official libraries.

-   [smtpapi-csharp](http://github.com/sendgrid/smtpapi-csharp) - Official C\# SMTP API library
-   [smtpapi-go](http://github.com/sendgrid/smtpapi-go) - Official Go SMTP API library
-   [smtpapi-java](http://github.com/sendgrid/smtpapi-java) - Official Java SMTP API library
-   [smtpapi-nodejs](http://github.com/sendgrid/smtpapi-nodejs) - Official NodeJS SMTP API library
-   [smtpapi-php](http://github.com/sendgrid/smtpapi-php) - Official PHP SMTP API library
-   [smtpapi-python](http://github.com/sendgrid/smtpapi-python) - Official Python SMTP API library
-   [smtpapi-ruby](http://github.com/sendgrid/smtpapi-ruby) - Official Ruby SMTP API library

The following official libraries are maintained by SendGrid to use the [Event Webhook]({{root_url}}/API_Reference/Webhooks/event.html):
-   [EventKit](https://github.com/sendgrid/eventkit-rails) *by SendGrid* - An app to consume and store SendGrid Events.

{% info %}
If you find a problem with any of the official libraries please submit issues on their respective GitHub projects and we'll address them ASAP 
{% endinfo %}

{% anchor h2 %}
Community libraries 
{% endanchor %}

Open source library contributions from the awesome SendGrid community.

{% info %}
If you create a library, please let us know, by editing this page [in our github repo](https://github.com/sendgrid/docs/blob/develop/source/{{page.path}}). 
{% endinfo %}

{% anchor h2 %}
Web API Libraries 
{% endanchor %}

{% anchor h3 %}
.NET 
{% endanchor %}

-   [sendgrid-csharp](http://github.com/sendgrid/sendgrid-csharp) *by SendGrid* - Official C\# library to send emails
-   [smtpapi-csharp](http://github.com/sendgrid/smtpapi-csharp) *by SendGrid* - Official C\# library to create SMTPAPI headers

{% anchor h3 %}
Android
{% endanchor %}

-   [sendgrid-android](https://github.com/danysantiago/sendgrid-android) - The Android library for SendGrid by [DannySantiago](https://github.com/danysantiago)

{% anchor h3 %}
Command Line 
{% endanchor %}

-   [cmdgrid](http://github.com/martyndavies/cmdgrid) *by Martyn Davies* - CLI for working with SendGrid's Parse API
-   [sgsend](http://github.com/vvaidy/sgsend) *by Vijay Vaidyanathan* - Sending email from the shell command line (for Macs and Unix)

{% anchor h3 %}
Go 
{% endanchor %}

-   [sendgrid-go](http://github.com/sendgrid/sendgrid-go) - Official Go library to send emails
-   [smtpapi-go](http://github.com/sendgrid/smtpapi-go) *by SendGrid*- Official Go library to create SMTP API headers

{% anchor h3 %}
Groovy 
{% endanchor %}

-   [grails-sendgrid](http://github.com/aiten/grails-sendgrid) *by Antony Jones* - Grails framework plugin

{% anchor h3 %}
Java 
{% endanchor %}

-   [sendgrid-java](https://github.com/sendgrid/sendgrid-java) *by SendGrid* - Official Java library to send emails
-   [smtpapi-java](http://github.com/sendgrid/smtpapi-java) *by SendGrid*- Official Java library to create SMTP API headers
-   [sendgrid-google-java](https://github.com/sendgrid/sendgrid-google-java) *by SendGrid* - Java library for use with Google App Engine
-   [sendgrid4j](https://github.com/shunjikonishi/sendgrid4j) *by Shunji Konishi* - Simple SendGrid client for Java
-   [sendgrid-asm-java](https://github.com/krenfro/sendgrid-asm-java) *by Kyle Renfro* - Unsubscribe Groups Java Client

{% anchor h3 %}
JavaScript 
{% endanchor %}

-   [sendgrid-nodejs](http://github.com/sendgrid/sendgrid-nodejs) *by SendGrid* - node.js for quickly and easily sending emails through SendGrid.
-   [smtpapi-nodejs](http://github.com/sendgrid/smtpapi-nodejs) *by SendGrid*- Official NodeJS library to create SMTP API headers
-   [node-sendgrid-web](http://github.com/jesusabdullah/node-sendgrid-web) *by Joshua Holbrook* - Send emails via SendGrid using the JSON web API and the request module.
-   [node-sendgrid](https://github.com/HerdHound/node-sendgrid) *by Branko Vukelick* - Generate X-SMTPAPI headers in node.js.

{% anchor h3 %}
Meteor 
{% endanchor %}

-   [meteor-sendgrid](https://github.com/DavidBrear/meteor-sendgrid) *by David Brear* - Meteorite package for SendGrid API

{% anchor h3 %}
Perl 
{% endanchor %}

-   [sendgrid-perl](http://github.com/sendgrid/sendgrid-perl) *by SendGrid* - Official Perl library for the SendGrid API
-   [WebService--SendGrid](http://github.com/majrmovies/WebService--SendGrid) *by Jonathan Lloyd* - Perl interface for SendGrid API

{% anchor h3 %}
PHP 
{% endanchor %}

-   [sendgrid-php](http://github.com/sendgrid/sendgrid-php) *by SendGrid* - Official PHP wrapper to send emails through the SendGrid API
-   [smtpapi-php](http://github.com/sendgrid/smtpapi-php) *by SendGrid*- Official PHP library to create SMTP API headers
-   [sendgrid-openshift-php](https://github.com/sendgrid/openshift-sendgrid-php) *by SendGrid* - Official PHP wrapper for use with Red Hat OpenShift
-   [sendgrid-report-php](https://github.com/fcosrno/sendgrid-report-php) *by Francisco Serrano* - PHP wrapper to view and manage SendGrid reports through the SendGrid API
-   [SendGrid-PHP-Library](https://github.com/alonbendavid/SendGrid-PHP-Library) *by Alon Ben David* - PHP wrapper for the SendGrid API including Marketing Email API
-   [messaging_sendgrid](http://github.com/josereyero/messaging_sendgrid) *by Jose Reyero* - Drupal 7 plugin that adds bulk messaging capabilities via SendGrid
-   [codeigniter-sendgrid-newsletter](http://github.com/bold/codeigniter-sendgrid-newsletter) *by Garrett St John* - CodeIgniter wrapper for the SendGrid Marketing Email API
-   [codeigniter-sendgrid-mail](http://github.com/bold/codeigniter-sendgrid-mail) *by Garrett St John* - CodeIgniter wrapper for the SendGrid Mail API
-   [sendgrid-component](http://github.com/damusnet/sendgrid-component) *by Damien Varron* - CakePHP component that extends the base email component with SendGrid functionality
-   [sendgrid-subuser-api](https://github.com/eliksir/sendgrid-subuser-api) *by Eliksir* - Library that makes it easy to work with the SendGrid Subuser API
-   [sendgrid-webapi-v3-php](https://github.com/idimensionz/sendgrid-webapi-v3-php) *by iDimensionz* - A complete implementation of the V3 WebAPI in PHP.  Very structured, OO implementation with excellent test coverage.  A repo containing examples showing how simple it is to utilize our implementation is available at [example](https://github.com/idimensionz/sendgrid-webapi-v3-examples).

{% anchor h3 %}
Python 
{% endanchor %}

-   [sendgrid-python](http://github.com/sendgrid/sendgrid-python) *by SendGrid* - Official SendGrid Python wrapper to send emails
-   [smtpapi-python](http://github.com/sendgrid/smtpapi-python) *by SendGrid*- Official Python library to create SMTP API headers
-   [greplin-tornado-sendgrid](https://github.com/Cue/greplin-tornado-sendgrid) *by Daniel Gross* - SendGrid client for Tornado Web Server
-   [django-sendgrid](https://github.com/RyanBalfanz/django-sendgrid) *by Ryan Balfanz* - SendGrid SMTP API interface for Django
-   [sendgrid-django](https://github.com/elbuo8/sendgrid-django) *by Yamil Asusta* - SendGrid Web API interface for Django

{% anchor h3 %}
Ruby 
{% endanchor %}

-   [sendgrid](http://github.com/stephenb/sendgrid) *by Stephen Blankenship* - SendGrid rubygem (ActionMailer)
-   [heroku-sendgrid-stats](https://github.com/hone/heroku-sendgrid-stats) *by Terence Lee* - Heroku CLI plugin to pull SendGrid stats
-   [sendgrid_toolkit](http://github.com/freerobby/sendgrid_toolkit) *by Robby Grossman* - Ruby wrapper for the SendGrid Web API
-   [sendgrid-rails](http://github.com/PavelTyk/sendgrid-rails) *by Pavel Tsiukhtsiayeu* - Extends ActionMailer with SendGrid methods
-   [gatling_gun](http://github.com/okrb/gatling_gun) *by James Edward Gray II* - Simple wrapper over SendGrid's Marketing Email API.
-   [sendgrid_api](http://github.com/markedmondson/sendgrid_api) *by Mark Edmondson* - Implements an ActionMailer that delivers through the SendGrid Web API.
-   [sendgrid4r](https://github.com/awwa/sendgrid4r) *by Wataru Sato* - Ruby wrapper for the SendGrid Web API v3.

{% anchor h3 %}
Rust
{% endanchor %}

-   [sendgrid-rs](https://github.com/gsquire/sendgrid-rs) by [gsquire](https://github.com/gsquire)


{% anchor h3 %}
Titanium 
{% endanchor %}

-   [ti.sendgrid](http://github.com/sendgrid/ti.sendgrid) *by SendGrid* - Official SendGrid Titanium wrapper

{% anchor h2 %}
Webhook Libraries 
{% endanchor %}

{% anchor h3 -C-sharp-webhooks %}
C#
{% endanchor %}

-   [C# Webhooks](https://github.com/mirajavora/sendgrid-webhooks) - *Community contributed library*

{% anchor h3 -Python-Webhooks %}
Python
{% endanchor %}

-   [Django eventhooks](https://github.com/agiliq/sendgrid-eventhooks) *by agiliq* - An app to consume and store SendGrid Events with Django
-   [Pyramid Webhooks](https://github.com/GoodRx/pyramid-sendgrid-webhooks) *by GoodRx* - Parses incoming Sendgrid Webhook events in Pyramid apps

{% anchor h3 -Ruby-Webhooks %}
Ruby 
{% endanchor %}
-   [EventKit](https://github.com/sendgrid/eventkit-rails) *by SendGrid* - An app to consume and store SendGrid Events.
-   [gridhook](https://github.com/injekt/gridhook) *by Lee Jarvis* - Ruby Gem for handling inbound batches from our Event API
-   [griddler](https://github.com/thoughtbot/griddler) *by Thoughtbot* - Rails engine that provides an endpoint for SendGrid's Parse API
-   [Pokey](https://github.com/ccallebs/pokey-sendgrid) *by Chuck Callebs* - Ruby Gem for simulating events to your code for QA or development environments
