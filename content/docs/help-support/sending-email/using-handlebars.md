---
layout: page
weight: 50
title: Using Handlebars
group: building-email
navigation:
  show: false
seo:
  title: Using Handlebars
  override: true
  description:
---

## 	Handlebars overview
 	
[Handlebars.js syntax](https://handlebarsjs.com/) provides a simple, powerful way to include dynamic content, directly within email templates.  Handlebars.js syntax allows all of this dynamic templating to occur outside of code, meaning changes are done quickly in the template, with no update to a code base required.

This page uses examples from the [dynamic-template section of our email templates github repo](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates).

<call-out>

For the full API documentation, see [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0).

</call-out>

## 	Personalizing email with Handlebars
 	
We do not support full Handlebars.js functionality. Currently, dynamic templates supports the following helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements) (including `if/else` and `unless`)
  - [Iterations](#-Iterations)

For a full helper reference, with examples, see the [Handlebar.js reference](#-Handlebar.js-reference). This page has use cases with examples that include the supported helpers.

## 	Use cases
 	
Here are example use cases listed with the Handlebars.js helpers used to build the example templates.

 ### 	Receipts
 	
This is an [example receipt template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/receipt).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements)
  - [Iterations](#-Iterations)

 ### 	Password reset
 	
This is an [example transactional template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/transactional-actions).

This transactional template is using this helper:

- [Substitution](#-Substitution)

 ### 	Muliple languages
 	
This is an [example template that lets you have content in multiple languages](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/different-languages).

This reciept template is using this helper:

- [Conditional statements](#-Conditional-statements) - `if/else`

 ### 	Newsletter
 	
This is an [example newsletter template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/newsletter).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Iterations](#-Iterations)

 ### 	Advertisement
 	
This is an [example template that is advertising items on sale](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/special-sale).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements) - `if/else`
  - [Iterations](#-Iterations)

## 	Handlebar.js reference
 	
This reference goes through examples of each helper - including HTML email snippits, and JSON test data.

 ### 	Substitution
 	
There are four main types of substitutions:

- [Basic replacement](#-Basic-replacement)
- [Deep object replacement](#-Deep-object-replacement)
- [Object failure](#-Object-failure)
- [Replacement with HTML](#-Replacement-with-HTML)

 ### 	Basic replacement
 	
HTML should contain:
```
<p>Hello {{firstName}}</p>	```

Test Data should contain:
```
{"firstName":"Ben"}
```

Resulting replacement:
```
<p>Hello Ben</p>	```

 ### 	Deep object replacement
 	
HTML should contain:
```
<p>Hello {{user.profile.firstName}}</p>	```

Test Data should contain:
```
{
   "user":{
      "profile":{
         "firstName":"Ben"
      }
   }
}
```

Resulting replacement:
```
<p>Hello Ben</p>	```

 ### 	Object failure
 	
HTML should contain:
```
<p>Hello {{user.profile.firstName}}</p>	```

Test Data should contain:
```
{
   "user":{
      "orderHistory":[
         {
            "date":"2/1/2018",
            "item":"shoes"
         },
         {
            "date":"1/4/2017",
            "item":"hat"
         }
      ]
   }
}
```

Resulting replacement:
```
<p>Hello</p>	```

 ### 	Replacement with HTML
 	
HTML should contain:
```
<p>Hello {{{firstName}}}</p>	```

Test Data should contain:
```
{"firstName":"<strong>Ben</strong>"}	```

Resulting replacement:
```
<p>Hello <strong>Ben</strong></p>	```
Resulting replacement:
```
<p>Warning! Your account is suspended, please call: 1-800-1234567</p>	```


 ### 	Conditional statements
 	
Here are three types of conditonal statements:

- [Basic If, Else, Else If](#-Basic-If--Else-Else-If)
- [If with a root](#-If-with-a-root)
- [Unless](#-Unless)

 ### 	Basic If, Else, Else If
 	
HTML should contain:
```
{{#if user.profile.male}}
  <p>Dear Sir</p>
{{else if user.profile.female}}
  <p>Dear Madame</p>
{{else}}
  <p> Dear Customer</p>
{{/if}}	```

Test Data should contain:
###1
```
{
   "user":{
      "profile":{
         "male":"true"
      }
   }
}
```

###2
```
{
   "user":{
      "profile":{
         "female":true
      }
   }
}
```

###3
```
{
   "user":{
      "profile":{

      }
   }
}
```

Resulting replacement:
###1
```
<p>Dear Sir</p>	```

###2
```
<p>Dear Madame</p>	```

###3
```
<p>Dear Customer</p>	```

 ### 	If with a root
 	
HTML should contain:
```
{{#if user.suspended}}
	<p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/if}}	```

Test Data should contain:
```
{
   "user":{
      "suspended":true
   },
   "supportPhone":"1-800-1234567"
}
```

Resulting replacement:
```
<p>Warning! Your account is suspended, please call: 1-800-1234567</p>	```

 ### 	Unless
 	
HTML should contain:
```
{{#unless user.active}}
	<p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/unless}}
```

Test Data should contain:
```
{
   "user":{
      "active":false
   },
   "supportPhone":"1-800-1234567"
}
```


 ### 	Iterations
 	
 ### 	Basic Iterator
 	
HTML should contain:
```
<ol>
{{#each user.orderHistory}}
	<li>You ordered: {{this.item}} on: {{this.date}}</li>
{{/each}}
</ol>	```

Test Data should contain:
```
{
   "user":{
      "orderHistory":[
         {
            "date":"2/1/2018",
            "item":"shoes"
         },
         {
            "date":"1/4/2017",
            "item":"hat"
         }
      ]
   }
}
```

Resulting replacement:
```
<ol>
	<li>You ordered: shoes on: 2/1/2018</li>
	<li>You ordered: hat on: 1/42017</li>
</ol>	```

 ### 	Combined examples
 	
Here are two combined examples:

- [Dynamic content creation](#-Dynamic-content-creation)
- [Dynamic content creation with dynamic parts](#-Dynamic-content-creation-with-dynamic-parts)

 ### 	Dynamic content creation
 	
HTML should contain:
```	{{#each user.story}}
  {{#if this.male}}
    <p>{{this.date}}</p>
  {{else if this.female}}
    <p>{{this.item}}</p>
  {{/if}}
{{/each}}	```


Test Data should contain:
```
{
   "user":{
      "story":[
         {
            "male":true,
            "date":"2/1/2018",
            "item":"shoes"
         },
         {
            "male":true,
            "date":"1/4/2017",
            "item":"hat"
         },
         {
            "female":true,
            "date":"1/1/2016",
            "item":"shirt"
         }
      ]
   }
}
```

Resulting replacement:
```	<p>2/1/2018</p>
<p>1/4/2017</p>
<p>shirt</p>	```

 ### 	Dynamic content creation with dynamic parts
 	
HTML should contain:
```	{{#each user.story}}
  {{#if this.male}}
    {{#if this.date}}
      <p>{{this.date}}</p>
    {{/if}}
    {{#if this.item}}
      <p>{{this.item}}</p>
    {{/if}}
  {{else if this.female}}
    {{#if this.date}}
      <p>{{this.date}}</p>
    {{/if}}
    {{#if this.item}}
      <p>{{this.item}}</p>
    {{/if}}
  {{/if}}
{{/each}}	```

Test Data should contain:
```
16
May 11th 2018, 2:18:20 pm
{
   "user":{
      "story":[
         {
            "male":true,
            "date":"2/1/2018",
            "item":"shoes"
         },
         {
            "male":true,
            "date":"1/4/2017"
         },
         {
            "female":true,
            "item":"shirt"
         }
      ]
   }
}
```

Resulting replacement:
```	<p>2/1/2018</p>
<p>shoes</p>
<p>1/4/2017</p>
<p>shirt</p>	```

## 	Additional Resources
 	
- [Transactional Templates Overview]({{root_url}}/help-support/sending-email/transactional-email.html)
- [Create and edit Dynamic Transactional Templates]({{root_url}}/help-support/sending-email/create-and-edit-transactional-templates.html)
- [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0)
- [How to send an email with dynamic templates]({{root_url}}/help-support/sending-email/how-to-send-an-email-with-dynamic-transactional-templates.html)
