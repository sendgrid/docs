---
layout: page
weight: 50
title: Using Handlebars
group: api-v3
navigation:
  show: true
seo:
  title: Using Handlebars
  override: true
  description:
---

## Handlebars overview

[Handlebars.js syntax](https://handlebarsjs.com/) provides a simple, powerful way to include dynamic content, directly within email templates. Handlebars.js syntax allows all of this dynamic templating to occur outside of code, meaning changes are done quickly in the template, with no update to a code base required.

This page uses examples from the [dynamic-template section of our email templates GitHub repo](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates).

<call-out>

For our API reference, see [Mail Send with Dynamic Transactional Templates](https://sendgrid.api-docs.io/v3.0/transactional-templates).

</call-out>

## Personalizing email with Handlebars

We do not support full Handlebars.js functionality. Currently, dynamic templates support the following helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements)
- [Iterations](#iterations)

For a full helper reference, with example use cases, see the [Handlebar.js reference](#handlebarjs-reference) on this page.

## Use cases

Here are example use cases listed with the Handlebars.js helpers used to build the example templates.

### Receipts

This is an [example receipt template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/receipt).

This receipt template is using these helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements)
- [Iterations](#iterations)

### Password reset

This is an [example transactional template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/transactional-actions).

This transactional template is using this helper:

- [Substitution](#substitution)

### Multiple languages

This is an [example template that lets you have content in multiple languages](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/different-languages).

This template is using this helper:

- [Conditional statements](#conditional-statements) - `if/else`

### Newsletter

This is an [example newsletter template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/newsletter).

This template is using these helpers:

- [Substitution](#substitution)
- [Iterations](#iterations)

### Advertisement

This is an [example template that is advertising items on sale](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/special-sale).

This template is using these helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements) - `if/else`
- [Iterations](#iterations)

## Handlebar.js reference

This reference goes through examples of each helper - including HTML email snippets, and JSON test data.

### Substitution

There are four main types of substitutions:

- [Basic replacement](#basic-replacement)
- [Deep object replacement](#deep-object-replacement)
- [Object failure](#object-failure)
- [Replacement with HTML](#replacement-with-html)
- [Uppercase](#uppercase)
- [Lowercase](#lowercase)
- [Date](#date)
- [Insert](#insert)

#### Basic replacement

HTML should contain:

```handlebars
<p>Hello {{ firstName }}</p>
```

Test Data should contain:

```javascript
{"firstName":"Ben"}
```

Resulting replacement:

```html
<p>Hello Ben</p>
```

#### Deep object replacement

HTML should contain:

```handlebars
<p>Hello {{user.profile.firstName}}</p>
```

Test Data should contain:

```javascript
{
   "user":{
      "profile":{
         "firstName":"Ben"
      }
   }
}
```

Resulting replacement:

```html
<p>Hello Ben</p>
```

#### Object failure

HTML should contain:

```handlebars
<p>Hello {{user.profile.firstName}}</p>
```

Test Data should contain:

```javascript
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

```html
<p>Hello</p>
```

#### Replacement with HTML

<call-out type="warning">

If you include the characters `'`, `"` or `&` in a subject line replacement be sure to use three brackets like below.

</call-out>

HTML should contain:

```handlebars
<p>Hello {{{firstName}}}</p>
```

> Per Handlebars' documentation: If you don't want Handlebars to escape a value, use the "triple-stash", {{{

Test Data should contain:

```javascript
{"firstName":"<strong>Ben</strong>"}
```

Resulting replacement:

```html
<p>Hello <strong>Ben</strong></p>
```

#### Uppercase

#### Lowercase

#### Date

#### Insert

### Conditional statements

Here are three types of conditonal statements:

- [Basic If, Else, Else If](#basic-if--else-else-if)
- [If with a root](#if-with-a-root)
- [Unless](#unless)
- [Greater Than](#greater-than)
- [Less Than](#less-than)
- [Equal](#equal)
- [Not Equal](#not-equal)
- [And](#and)
- [Or](#or)
- [Length](#length)
- [Is Before](#is-before)
- [Is After](#is-after)

#### Basic If, Else, Else If

HTML should contain:

```handlebars
{{#if user.profile.male}}
   <p>Dear Sir</p>
{{else if user.profile.female}}
   <p>Dear Madame</p>
{{else}}
   <p>Dear Customer</p>
{{/if}}
```

Test Data should contain:
**1**

```javascript
{
   "user":{
      "profile":{
         "male":true
      }
   }
}
```

**2**

```javascript
{
   "user":{
      "profile":{
         "female":true
      }
   }
}
```

**3**

```javascript
{
   "user":{
      "profile":{

      }
   }
}
```

Resulting replacement:
**1**

```html
<p>Dear Sir</p>
```

**2**

```html
<p>Dear Madame</p>
```

**3**

```html
<p>Dear Customer</p>
```

#### If with a root

HTML should contain:

```handlebars
{{#if user.suspended}}
   <p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/if}}
```

Test Data should contain:

```javascript
{
   "user":{
      "suspended":true
   },
   "supportPhone":"1-800-1234567"
}
```

Resulting replacement:

```html
<p>Warning! Your account is suspended, please call: 1-800-1234567</p>
```

#### Unless

HTML should contain:

```handlebars
{{#unless user.active}}
   <p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/unless}}
```

Test Data should contain:

```javascript
{
   "user":{
      "active":false
   },
   "supportPhone":"1-800-1234567"
}
```

#### Greater Than

#### Less Than

#### Equal

#### Not Equal

#### And

#### Or

#### Length

#### Is Before

#### Is After

### Iterations

#### Basic Iterator

HTML should contain:

```handlebars
<ol>
  {{#each user.orderHistory}}
   <li>You ordered: {{this.item}} on: {{this.date}}</li>
  {{/each}}
</ol>
```

Test Data should contain:

```javascript
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

```html
<ol>
  <li>You ordered: shoes on: 2/1/2018</li>
  <li>You ordered: hat on: 1/42017</li>
</ol>
```

### Combined examples

Here are two combined examples:

- [Dynamic content creation](#dynamic-content-creation)
- [Dynamic content creation with dynamic parts 1](#dynamic-content-creation-with-dynamic-parts-1)
- [Dynamic content creation with dynamic parts 2](#dynamic-content-creation-with-dynamic-parts-2)

#### Dynamic content creation

HTML should contain:

```handlebars
{{#each user.story}}
   {{#if this.male}}
      <p>{{this.date}}</p>
   {{else if this.female}}
      <p>{{this.item}}</p>
   {{/if}}
{{/each}}
```

Test Data should contain:

```javascript
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

```html
<p>2/1/2018</p>
<p>1/4/2017</p>
<p>shirt</p>
```

#### Dynamic content creation with dynamic parts 1

HTML should contain:

```handlebars
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
{{/each}}
```

Test Data should contain:

```javascript
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

```html
<p>2/1/2018</p>
<p>shoes</p>
<p>1/4/2017</p>
<p>shirt</p>
```

#### Dynamic content creation with dynamic parts 2

HTML should contain:

```handlebars
{{#if people}}
   <p>People:</p>
   {{#each people}}
      <p>{{this.name}}</p>
   {{/each}}
{{/if}}
```

Test Data should contain:

```javascript
{
  "people":[{"name":"Bob"},{"name":"Sally"}]
}
```

Resulting replacement:

```html
<p>People:</p>
<p>Bob</p>
<p>Sally</p>
```

## Additional Resources

- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Create and edit Dynamic Transactional Templates]({{root_url}}/ui/sending-email/create-and-edit-transactional-templates/)
- [Dynamic Templates API](https://sendgrid.api-docs.io/v3.0/transactional-templates)
- [How to send an email with dynamic templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
