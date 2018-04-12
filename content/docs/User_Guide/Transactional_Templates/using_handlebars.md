---
layout: page
weight: 50
title: Using Handlebars
navigation:
  show: false
seo:
  title: Using Handlebars
  override: true
  description:
---

- [Handlebars overview](#-Handlebars-overview)
- [Personalizing email with Handlebars](#-Personalizing-email-with-Handlebars)

<page-anchor el="h2">
Handlebars overview
</page-anchor>

Handlebars syntax provides a simple, powerful way to include dynamic content, directly within email templates.  Handlebars syntax allows all of this dynamic templating to occur outside of code, meaning changes are done quickly in the template, with no update to a code base required.

<page-anchor el="h2">
Personalizing email with Handlebars
</page-anchor>

Currently, dynamic templates only supports the following helpers:

* equals(a, b) - evaluates decimals, strings, and dates
* not_equals(a, b) - evaluates decimals, strings, and dates
* greater_than(a, b) - evaluates decimals, strings
* less_than(a, b) - evaluates decimals, strings
* and(a, b) - evaluates booleans
* or(a, b) - evaluates booleans
* length(a)  - evaluates arrays and strings
* isBefore(a, b) - evaluates epoch form dates
* isAfter(a, b) - evaluates epoch form dates
* format_date(date, format, timezone) - epoch form dates, format follows [these guidelines](http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm), timezone is +/-n

Here are some example scenarios you can use to substitute data with Handlebars.

<page-anchor el="h3">
Substitution
</page-anchor>

**Basic Replacement**

*HTML should contain:*
{% codeblock %}
<p>Hello {{firstName}}</p>
{% endcodeblock %}

*Test Data should contain:*
{% codeblock %}
{"firstName":"Ben"}
{% endcodeblock %}

Resulting replacement:

<p>Hello Ben</p>

**Deep object replacement**

*HTML should contain:*

{% codeblock %}
<p>Hello {{user.profile.firstName}}</p>
{% endcodeblock %}

*Test Data should contain:*

{% codeblock %}
{
“user”:
{“profile”:
{“firstName”:”Ben”}
}
}
{% endcodeblock %}

*Resulting replacement:*

<p>Hello Ben</p>


**Object failure**

*HTML should contain:*

{% codeblock %}
<p>Hello {{user.profile.firstName}}</p>
{% endcodeblock %}

*Test Data should contain:*

{% codeblock %}
{
“user”:
{“orderHistory”:
[
{“date”:”2/1/2018”,”item”:”shoes”},
{“date”:”1/4/2017”,”item”:”hat”}
}
}
{% endcodeblock %}

*Resulting replacement:*

<p>Hello </p>

<page-anchor el="h3">
Conditionals
</page-anchor>

**Basic If, Else, Else If**

*HTML should contain:*

{% codeblock %}
{{#if user.profile.male}}
<p>Dear Sir</p>
{{#else if user.profile.female}}
<p>Dear Madame</p>
{[#else}}
<p> Dear Customer</p>
{{/if}}
{% endcodeblock %}


Test Data should contain:

{% codeblock %}
{
“user”:
{“profile”:
{“male”:”true”}
}
}
{% endcodeblock %}

{% codeblock %}
{
“user”:
{“profile”:
{“female”:true}
}
}
{% endcodeblock %}

{% codeblock %}
{
“user”:
{“profile”:
{}
}
}
{% endcodeblock %}

*Resulting replacement:*

<p>Dear Sir</p>

<p>Dear Madame</p>

<p>Dear Customer</p>

**If w/ root**

*HTML should contain*:

{% codeblock %}
{{#if user.suspended}}
	<p>Warning Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/if}}
{% endcodeblock %}

*Test Data should contain:*

{% codeblock %}
{
“user”:
{“suspended”:true}
“supportPhone”:”1-800-7363474”
}
{% endcodeblock %}

*Resulting replacement:*

<p>Warning Your account is suspended, please call: 1-800-7363474</p>

**Basic Unless**

*HTML should contain:*

{% codeblock %}
{{#unless user.active}}
	<p>Warning Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/unless}}
{% endcodeblock %}

*Test Data should contain:*

{% codeblock %}
{
“user”:
{“active”:true}
}
{% endcodeblock %}

*Resulting replacement:*

[Missing replacement]

<page-anchor el="h3">
Iterators
</page-anchor>

**Basic Iterator**

*HTML should contain:*

{% codeblock %}
<ol>
{{#each user.orderHistory}}
	<li>You ordered: {{this.item}} on: {{this.date}}</li>
{{/each}}
</ol>
{% endcodeblock %}

*Test Data should contain:*

{% codeblock %}
{
“user”:
{“orderHistory”:
[
{“date”:”2/1/2018”,”item”:”shoes”},
{“date”:”1/4/2017”,”item”:”hat”}
}
}
{% endcodeblock %}


*Resulting replacement:*

<ol>
	<li>You ordered: shoes on: 2/1/2018</li>
	<li>You ordered: hat on: 1/42017</li>
</ol>


