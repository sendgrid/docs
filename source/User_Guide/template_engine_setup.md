---
title: Template Engine Setup Guide
seo:
  title: Template Engine Setup Guide
weight: 0
layout: page
navigation:
  show: true
---

<img src="{{root_url}}/images/template_engine_1.png" class="img-responsive center-block"/>

Template Engine gives you unmatched simplicity, flexibility and control 
in the management of your email content and design. Get your Templates 
out of your app and instead let your app leverage our Template Engine!

<div class="row">
<div class="col-md-6">
{% anchor h2 %}
First Step: Create a Template
{% endanchor %}

Templates and Versions work harmoniously together to allow you to easily and quickly iterate. Each version can have its own unique name, content and subject. Template Engine allows you to insert and edit HTML and Inline CSS visually or with a code editor, and supports plain-text content as well!
</div>
<div class="col-md-6">
  <img src="{{root_url}}/images/template_engine_2.png" class="img-responsive pull-left"/>
</div>
</div>
<div class="row">
<div class="clearfix col-md-6">
  <img src="{{root_url}}/images/template_engine_3.png" class="img-responsive"/>
</div>
<div class="col-md-6">
{% anchor h3 %}
Second Step: Integrate With Your App
{% endanchor %}

Talk to your development team about integrating your new Template(s) with your application. 
They can read more about how to integrate templates by checking out our <a href="{{root_url}}/API_Reference/Web_API_v3/Template_Engine/index.html">Template Engine API Reference docs</a>.
</div>
</div>
<div class="row">
<div class="clearfix col-md-6">
{% anchor h3 %}
Third Step: Replacement Tags
{% endanchor %}

You'll notice two replacement tags in the Template Engine Editor, <code><%subject%></code> and <code><%body%></code>. These both allow us to pass variable information through the template to your recipient. The tags hold the dynamic content that is being passed through our API.
</div>
<div class="col-md-6">
  <img src="{{root_url}}/images/template_engine_4.png" class="img-responsive pull-left"/>
</div>
</div>
<div class="row">
<div class="clearfix col-md-6">
  <img src="{{root_url}}/images/template_engine_5.png" class="img-responsive"/>
</div>

<div class="col-md-6">
{% anchor h3 %}
Final Step: Active/Inactive States
{% endanchor %}

A Template can only have one active Version at a time. If you've created a new Version with different HTML that you want your customers to start receiving, you'll need to make that Version "Active".
</div>
</div>
<br/>
<div class="clearfix text-center">
{% anchor h1 %}
Start Now!
{% endanchor %}

Start using our Template Engine now by creating your first Template!
<a href="https://sendgrid.com/templates/new"><img src="{{root_url}}/images/template_engine_6.png" class="img-responsive center-block"/></a>
</div>
