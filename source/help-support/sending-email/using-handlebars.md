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
- [Use cases](#-Use-cases)
  - [Receipts](#-Receipts)
  - [Password reset](#-Password-reset)
  - [Muliple languages](#-Muliple-languages)
  - [Newsletter](#-Newsletter)
  - [Advertisement](#-Advertisement)
- [Handlebar.js reference](#-Handlebar.js-reference)
  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements)
  - [Iterations](#-Iterations)
  - [Unless](#-Unless)
  - [Combined examples](#-Combined-examples)

{% anchor h2 %}
Handlebars overview
{% endanchor %}

[Handlebars.js syntax](https://handlebarsjs.com/) provides a simple, powerful way to include dynamic content, directly within email templates.  Handlebars.js syntax allows all of this dynamic templating to occur outside of code, meaning changes are done quickly in the template, with no update to a code base required.

This page uses examples from the [dynamic-template section of our email templates github repo](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates).

{% info %}
For the full API documentation, see [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0).
{% endinfo %}

{% anchor h2 %}
Personalizing email with Handlebars
{% endanchor %}

We do not support full Handlebars.js functionality. Currently, dynamic templates supports the following helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements) (including `if/else` and `unless`)
  - [Iterations](#-Iterations)

For a full helper reference, with examples, see the [Handlebar.js reference](#-Handlebar.js-reference). This page has use cases with examples that include the supported helpers.

{% anchor h2 %}
Use cases
{% endanchor %}

Here are example use cases listed with the Handlebars.js helpers used to build the example templates.

{% anchor h3 %}
Receipts
{% endanchor %}

This is an [example receipt template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/receipt).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements)
  - [Iterations](#-Iterations)

{% anchor h3 %}
Password reset
{% endanchor %}

This is an [example transactional template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/transactional-actions).

This transactional template is using this helper:

- [Substitution](#-Substitution)

{% anchor h3 %}
Muliple languages
{% endanchor %}

This is an [example template that lets you have content in multiple languages](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/different-languages).

This reciept template is using this helper:

- [Conditional statements](#-Conditional-statements) - `if/else`

{% anchor h3 %}
Newsletter
{% endanchor %}

This is an [example newsletter template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/newsletter).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Iterations](#-Iterations)

{% anchor h3 %}
Advertisement
{% endanchor %}

This is an [example template that is advertising items on sale](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/special-sale).

This reciept template is using these helpers:

  - [Substitution](#-Substitution)
  - [Conditional statements](#-Conditional-statements) - `if/else`
  - [Iterations](#-Iterations)

{% anchor h2 %}
Handlebar.js reference
{% endanchor %}

This reference goes through examples of each helper - including HTML email snippits, and JSON test data.

{% anchor h3 %}
Substitution
{% endanchor %}

There are four main types of substitutions:

- [Basic replacement](#-Basic-replacement)
- [Deep object replacement](#-Deep-object-replacement)
- [Object failure](#-Object-failure)
- [Replacement with HTML](#-Replacement-with-HTML)

{% anchor h4 %}
Basic replacement
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}<p>Hello {{firstName}}</p>{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
{"firstName":"Ben"}
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<p>Hello Ben</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
Deep object replacement
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}<p>Hello {{user.profile.firstName}}</p>{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
{  
   "user":{  
      "profile":{  
         "firstName":"Ben"
      }
   }
}
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<p>Hello Ben</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
Object failure
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}<p>Hello {{user.profile.firstName}}</p>{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
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
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<p>Hello</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
Replacement with HTML
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}<p>Hello {{{firstName}}}</p>{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
{% raw %}{"firstName":"<strong>Ben</strong>"}{% endraw %}
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<p>Hello <strong>Ben</strong></p>{% endraw %}
{% endcodeblock %}
Resulting replacement:
{% codeblock %}
{% raw %}<p>Warning! Your account is suspended, please call: 1-800-1234567</p>{% endraw %}
{% endcodeblock %}


{% anchor h3 %}
Conditional statements
{% endanchor %}

Here are three types of conditonal statements:

- [Basic If, Else, Else If](#-Basic-If--Else-Else-If)
- [If with a root](#-If-with-a-root)
- [Unless](#-Unless)

{% anchor h4 %}
Basic If, Else, Else If
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}{{#if user.profile.male}}
  <p>Dear Sir</p>
{{else if user.profile.female}}
  <p>Dear Madame</p>
{{else}}
  <p> Dear Customer</p>
{{/if}}{% endraw %}
{% endcodeblock %}

Test Data should contain:
###1
{% codeblock %}
{  
   "user":{  
      "profile":{  
         "male":"true"
      }
   }
}
{% endcodeblock %}

###2
{% codeblock %}
{  
   "user":{  
      "profile":{  
         "female":true
      }
   }
}
{% endcodeblock %}

###3
{% codeblock %}
{  
   "user":{  
      "profile":{  

      }
   }
}
{% endcodeblock %}

Resulting replacement:
###1
{% codeblock %}
{% raw %}<p>Dear Sir</p>{% endraw %}
{% endcodeblock %}

###2
{% codeblock %}
{% raw %}<p>Dear Madame</p>{% endraw %}
{% endcodeblock %}

###3
{% codeblock %}
{% raw %}<p>Dear Customer</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
If with a root
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}{{#if user.suspended}}
	<p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/if}}{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
{  
   "user":{  
      "suspended":true
   },
   "supportPhone":"1-800-1234567"
}
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<p>Warning! Your account is suspended, please call: 1-800-1234567</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
Unless
{% endanchor %}

HTML should contain:
{% codeblock %}
{{#unless user.active}}
	<p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/unless}}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
{  
   "user":{  
      "active":false
   },
   "supportPhone":"1-800-1234567"
}
{% endcodeblock %}


{% anchor h3 %}
Iterations
{% endanchor %}

{% anchor h4 %}
Basic Iterator
{% endanchor %}

HTML should contain:
{% codeblock %}
{% raw %}<ol>
{{#each user.orderHistory}}
	<li>You ordered: {{this.item}} on: {{this.date}}</li>
{{/each}}
</ol>{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
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
{% endcodeblock %}

Resulting replacement:
{% codeblock %}
{% raw %}<ol>
	<li>You ordered: shoes on: 2/1/2018</li>
	<li>You ordered: hat on: 1/42017</li>
</ol>{% endraw %}
{% endcodeblock %}

{% anchor h3 %}
Combined examples
{% endanchor %}

Here are two combined examples:

- [Dynamic content creation](#-Dynamic-content-creation)
- [Dynamic content creation with dynamic parts](#-Dynamic-content-creation-with-dynamic-parts)

{% anchor h4 %}
Dynamic content creation
{% endanchor %}

HTML should contain:
{% codeblock %}{% raw %}
{{#each user.story}}
  {{#if this.male}}
    <p>{{this.date}}</p>
  {{else if this.female}}
    <p>{{this.item}}</p>
  {{/if}}
{{/each}}{% endraw %}
{% endcodeblock %}


Test Data should contain:
{% codeblock %}
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
{% endcodeblock %}

Resulting replacement:
{% codeblock %}{% raw %}
<p>2/1/2018</p>
<p>1/4/2017</p>
<p>shirt</p>{% endraw %}
{% endcodeblock %}

{% anchor h4 %}
Dynamic content creation with dynamic parts
{% endanchor %}

HTML should contain:
{% codeblock %}{% raw %}
{{#each user.story}}
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
{{/each}}{% endraw %}
{% endcodeblock %}

Test Data should contain:
{% codeblock %}
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
{% endcodeblock %}

Resulting replacement:
{% codeblock %}{% raw %}
<p>2/1/2018</p>
<p>shoes</p>
<p>1/4/2017</p>
<p>shirt</p>{% endraw %}
{% endcodeblock %}

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Transactional Templates Overview]({{root_url}}/help-support/sending-email/transactional-email.html)
- [Create and edit Dynamic Transactional Templates]({{root_url}}/help-support/sending-email/create-and-edit-transactional-templates.html)
- [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0)
- [How to send an email with dynamic templates]({{root_url}}/help-support/sending-email/how-to-send-an-email-with-dyamic-transactional-templates.html)
