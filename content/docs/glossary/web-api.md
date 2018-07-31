---
seo:
  title: Web API
  description: Web API allows web servers and web browsers to easily interface with each other to enable account and data collection for services such as email.
  keywords: web api, web api integration
title: Web API
weight: 0
layout: page
navigation:
  show: false
---

An API is an application programming interface (API) that serves as an interface between a web server and a web browser. A web API allows for the sharing of data and functionality between web apps. For example, [SendGrid’s Web API]({{root_url}}/API_Reference/Web_API/index.html) enables users to retrieve data about their email program like spam reports or blocked email addresses.

Using a web API is extremely efficient because it eliminates the need for code-sharing – a process that can be complex and messy while making some developers uncomfortable. Web APIs allow you to easily share a certain set of features and data with a large group of people while maintaining privacy and to create consistency in the delivery of that data and functionality while saving valuable development time and money. Channel the notoriously private Google and you’ll quickly understand why using web APIs has become the preferred method in the development community.

Consumers are looking for super easy ways to sync the plethora of services they employ in their everyday lives, whether it be for personal or business use. Using a Facebook or Google+ ID to login to a third-party app is a super simple example of how a web API can create efficiency for both user and developer. However, apps that power their services using third party web APIs are limited to the features made available from the originating application and/or its longevity in the marketplace. What is available today may not be available tomorrow so having a contingency plan should be a developer’s priority.

SendGrid’s web API is specific to email delivery using our platform. Integration using our web API allows you to collect account and email data including response rates, spam reports, and statistics. This option serves an alternative to our [SMTP configuration]({{root_url}}/for-developers/sending-email/building-an-smtp-email/) in that it supports situations when HTTP is your only option, or in situations where you do not control your application environment. Additionally, if there is high latency between our two apps or if you’ve built a library to send email, our web API makes integration with SendGrid super easy.

SendGrid’s web API allows our customers to pull information about their email program without having to actually log on to SendGrid.com. Customers can pull lists, statistics, and even email reports. In addition to this, Customers can send email via the web API without using [traditional SMTP]({{root_url}}/glossary/smtp.html).

We also provide an [SMTP API]({{root_url}}/glossary/smtp-api.html) that functions a bit differently than our web API. Our SMTP API allows customers to use message templates, provide custom delivery and handling options, and include advanced tracking and analytics.

[SendGrid is a mail server]({{root_url}}/glossary/smtp-server.html) built for developers by developers. We provide the most comprehensive solutions for simplified email delivery. With over 150,000 companies using SendGrid, we have become the largest email infrastructure as a service provider in the world.
