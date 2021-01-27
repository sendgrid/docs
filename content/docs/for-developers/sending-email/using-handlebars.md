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

Twilio SendGrid [Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/) and [Marketing Campaigns designs]({{root_url}}/ui/sending-email/working-with-marketing-campaigns-email-designs/) support the [Handlebars](https://handlebarsjs.com/) templating language to render the [Personalizations]({{root_url}}/for-developers/sending-email/personalizations/) you send via the API and the [Substitution Tags]({{root_url}}/for-developers/sending-email/substitution-tags/) stored on your Marketing Campaigns contacts.

Handlebars syntax allows you to personalize the messages in your templates by inserting customers' names and other data to make an email relevant to each individual recipient. For example, if you have a customer's name stored in a JSON property called `"name"`, you can insert the property's value into a template by adding `{{ name }}` wherever you want the customer's name to appear.

Handlebars syntax allows all of this dynamic templating to occur outside of your code base, meaning changes are done quickly in the template with no update to a code base required.

<call-out>

If you prefer to use your own templating system, you can still insert dynamic data using [Substitution Tags](/ui/sending-email/substitution-and-section-tags/).

</call-out>

## Personalizing email with Handlebars

<call-out>

You can manage your templates programmatically with our [Mail Send with Dynamic Transactional Templates API](https://sendgrid.api-docs.io/v3.0/transactional-templates).

</call-out>

The Handlebars language provides many features in addition to basic variable replacement, including iterations (loops) and conditional statements. Our templates and designs support most but not all of this Handlebars functionality. Currently, dynamic templates support the following helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements)
- [Iterations](#iterations)

For a full helper reference, see the [Handlebars reference](#handlebars-reference) on this page.

## Use cases

The following use case examples come from the [dynamic-template section of our email templates GitHub repo](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates). Each example links to files you can explore on GitHub. You can also work with these templates by uploading them using the [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor) available in [Dynamic Transactional Templates](https://mc.sendgrid.com/dynamic-templates) and the [Marketing Campaigns Design Library](https://mc.sendgrid.com/design-library/your-designs).

The following use cases are listed with the Handlebars helpers used to build them.

### Receipt

This [example receipt template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/receipt) uses the following helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements)
- [Iterations](#iterations)

### Password reset

This [example transactional template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/transactional-actions) uses the following helpers:

- [Substitution](#substitution)

### Multiple languages

This is an [example template that lets you have content in multiple languages](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/different-languages), and it uses the following helpers:

- [Conditional statements](#conditional-statements) - `if/else`

### Newsletter

This [example newsletter template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/newsletter) uses the following helpers:

- [Substitution](#substitution)
- [Iterations](#iterations)

### Advertisement

This is an [example template that is advertising items on sale](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/special-sale), and it uses the following helpers:

- [Substitution](#substitution)
- [Conditional statements](#conditional-statements) - `if/else`
- [Iterations](#iterations)

## Handlebars reference

The following reference provides sample code blocks for each helper, including HTML email snippets and JSON test data. The code examples are shown in three tabs. The first tab, Handlebars, shows the Handlebars tag. The second tab, JSON, shows example data that would be used to populate the Handlebars tag. The third tab, HTML, shows the final output that the Handlebars tag will be rendered to in your email. You can click each tab to switch between the code samples.

### Substitution

Twilio SendGrid templates support the following substitutions:

- [Basic replacement](#basic-replacement)
- [Deep object replacement](#deep-object-replacement)
- [Object failure](#object-failure)
- [Replacement with HTML](#replacement-with-html)
- [formatDate](#formatdate)
- [Insert](#insert)

#### Basic replacement

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>Hello {{ firstName }}</p>
```

```json
// Test data
{ "firstName": "Ben" }
```

```html
<!-- Resulting HTML !-->
<p>Hello Ben</p>
```

</code-group>

#### Deep object replacement

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>Hello {{user.profile.firstName}}</p>
```

```json
// Test data
{
  "user": {
    "profile": {
      "firstName": "Ben"
    }
  }
}
```

```html
<!-- Resulting HTML -->
<p>Hello Ben</p>
```

</code-group>

#### Object failure

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>Hello {{user.profile.firstName}}</p>
```

```json
// Test data
{
  "user": {
    "orderHistory": [
      {
        "date": "2/1/2018",
        "item": "shoes"
      },
      {
        "date": "1/4/2017",
        "item": "hat"
      }
    ]
  }
}
```

```html
<!-- Resulting HTML -->
<p>Hello</p>
```

</code-group>

#### Replacement with HTML

<call-out type="warning">

If you include the characters `'`, `"` or `&` in a subject line replacement be sure to use three brackets like below.

</call-out>

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<!-- Per Handlebars' documentation: If you don't want Handlebars to escape a value, use the "triple-stash", {{{ -->
<p>Hello {{{firstName}}}</p>
```

```json
// Test data
{ "firstName": "<strong>Ben</strong>" }
```

```html
<!-- Resulting HTML -->
<p>Hello <strong>Ben</strong></p>
```

</code-group>

#### formatDate

The formatDate helper takes a time in either epoch or ISO8601 format and converts it to a format you specify using the tokens in the following table. If you send a date field without converting it, it will be displayed in ISO8601 format with the full timestamp (e.g., `2020-01-01T23:00:00.000Z`). The following example display results are for Tuesday, January 1st, 2020 3:00:00PM Pacific Standard Time.

<table>
    <tr>
      <th>
        Token
      </th>
      <th>
        Displayed Result
      </th>
    </tr>
    <tr>
      <td>YYYY</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>YY</td>
      <td>20</td>
    </tr>
    <tr>
      <td>MMMM</td>
      <td>January</td>
    </tr>
    <tr>
      <td>MMM</td>
      <td>Jan</td>
    </tr>
    <tr>
      <td>MM</td>
      <td>01</td>
    </tr>
    <tr>
      <td>M</td>
      <td>1</td>
    </tr>
    <tr>
      <td>DD</td>
      <td>01</td>
    </tr>
    <tr>
      <td>D</td>
      <td>1</td>
    </tr>
    <tr>
      <td>dddd</td>
      <td>Tuesday</td>
    </tr>
    <tr>
      <td>ddd</td>
      <td>Tue</td>
    </tr>
    <tr>
      <td>hh</td>
      <td>03</td>
    </tr>
    <tr>
      <td>h</td>
      <td>3</td>
    </tr>
    <tr>
      <td>HH</td>
      <td>00</td>
    </tr>
    <tr>
      <td>H</td>
      <td>00</td>
    </tr>
    <tr>
      <td>mm</td>
      <td>00</td>
    </tr>
    <tr>
      <td>m</td>
      <td>0</td>
    </tr>
    <tr>
      <td>ss</td>
      <td>00</td>
    </tr>
    <tr>
      <td>s</td>
      <td>0</td>
    </tr>
    <tr>
      <td>A</td>
      <td>PM</td>
    </tr>
    <tr>
      <td>ZZ</td>
      <td>-0800</td>
    </tr>
    <tr>
      <td>Z</td>
      <td>-08:00</td>
    </tr>
</table>

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template without timezone offset -->
<p>Join us {{formatDate timeStamp dateFormat}}</p>

<!-- Template with timezone offset -->
<p>Join us {{formatDate timeStamp dateFormat timezoneOffset}}</p>
```

```json
// Test data
{
  "timeStamp": "2020-01-01T23:00:00.000Z",
  "dateFormat": "MMMM:DD:HH:mm:ss",
  "timezoneOffset": "-0800"
}
```

```html
<!-- Resulting HTML without timezone-->
<p>Join us January 01, 2020 11:00:00PM</p>

<!-- Resulting HTML with timezone-->
<p>Join us January 01, 2020 3:00:00PM</p>
```

</code-group>

#### Insert

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Insert with a default value -->
<p>Hello {{insert name "default=Customer"}}! Thank you for contacting us about {{insert businessName "your business"}}.</p>
```

```json
// Test data with all values
{
   "name": "Ben",
   "businessName": "Twilio SendGrid"
}

// Test data with missing value
{
  "name": "Ben"
}
```

```html
<!-- Resulting HTML with all values -->
<p>Hello Ben! Thank you for contacting us about Twilio SendGrid.</p>

<!-- Resulting HTML with missing value and a default-->
<p>Hello Ben! Thank you for contacting us about your business.</p>
```

</code-group>

### Conditional statements

Twilio SendGrid templates support the following conditionals:

- [Basic If, Else, Else If](#basic-if-else-else-if)
- [If with a root](#if-with-a-root)
- [Unless](#unless)
- [greaterThan](#greaterthan)
- [lessThan](#lessthan)
- [Equals](#equals)
- [notEquals](#notequals)
- [And](#and)
- [Or](#or)
- [Length](#length)

#### Basic If, Else, Else If

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
{{#if user.profile.male}}
   <p>Dear Sir</p>
{{else if user.profile.female}}
   <p>Dear Madame</p>
{{else}}
   <p>Dear Customer</p>
{{/if}}
```

```json
// Test data one
{
   "user":{
      "profile":{
         "male":true
      }
   }
}

// Test data two
{
   "user":{
      "profile":{
         "female":true
      }
   }
}

// Test data three
{
   "user":{
      "profile":{

      }
   }
}
```

```html
<!-- Resulting HTML from test data one -->
<p>Dear Sir</p>

<!-- Resulting HTML from test data two -->
<p>Dear Madame</p>

<!-- Resulting HTML from test data three -->
<p>Dear Customer</p>
```

</code-group>

#### If with a root

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
{{#if user.suspended}}
   <p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/if}}
```

```json
// Test data
{
  "user": {
    "suspended": true
  },
  "supportPhone": "1-800-555-5555"
}
```

```html
<!-- Resulting HTML -->
<p>Warning! Your account is suspended, please call: 1-800-555-5555</p>
```

</code-group>

#### Unless

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
{{#unless user.active}}
   <p>Warning! Your account is suspended, please call: {{@root.supportPhone}}</p>
{{/unless}}
```

```json
// Test data
{
  "user": {
    "active": false
  },
  "supportPhone": "1-800-555-5555"
}
```

```html
<!-- Resulting HTML -->
<p>Warning! Your account is suspended, please call: 1800-555-5555</p>
```

</code-group>

#### greaterThan

##### Basic greaterThan

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#greaterThan scoreOne scoreTwo}}
    Congratulations, you have the high score today!
{{/greaterThan}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "scoreOne": 100,
  "scoreTwo": 78
}

// Test data two
{
  "scoreOne": 55,
  "scoreTwo": 78
}
```

```html
<!-- Resulting HTML from test data one-->
<p>
  Hello Ben! Congratulations, you have the high score today! Thanks for playing.
</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! Thanks for playing.</p>
```

</code-group>

##### greaterThan with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#greaterThan scoreOne scoreTwo}}
    Congratulations, you have the high score today!
{{else}}
    You were close, but you didn't get the high score today.
{{/greaterThan}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "scoreOne": 100,
  "scoreTwo": 78
}

// Test data two
{
  "scoreOne": 55,
  "scoreTwo": 78
}
```

```html
<!-- Resulting HTML from test data one-->
<p>
  Hello Ben! Congratulations, you have the high score today! Thanks for playing.
</p>

<!-- Resulting HTML from test data two-->
<p>
  Hello Ben! You were close, but you didn't get the high score today. Thanks for
  playing.
</p>
```

</code-group>

#### lessThan

##### Basic lessThan

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#lessThan scoreOne scoreTwo}}
    You were close, but you didn't get the high score today.
{{/lessThan}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "scoreOne": 55,
  "scoreTwo": 78
}

// Test data two
{
  "scoreOne": 100,
  "scoreTwo": 78
}
```

```html
<!-- Resulting HTML from test data one-->
<p>
  Hello Ben! You were close, but you didn't get the high score today. Thanks for
  playing.
</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! Thanks for playing.</p>
```

</code-group>

##### lessThan with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#lessThan scoreOne scoreTwo}}
    You were close, but you didn't get the high score today.
{{else}}
    Congratulations, you have the high score today!
{{/lessThan}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "scoreOne": 55,
  "scoreTwo": 78
}

// Test data two
{
  "scoreOne": 100,
  "scoreTwo": 78
}
```

```html
<!-- Resulting HTML from test data one-->
<p>
  Hello Ben! You were close, but you didn't get the high score today. Thanks for
  playing.
</p>

<!-- Resulting HTML from test data two-->
<p>
  Hello Ben! Congratulations, you have the high score today! Thanks for playing.
</p>
```

</code-group>

#### Equals

The `equals` comparison can check for equality between two values of the same data type. The `equals` helper will also attempt to coerce data types to make a comparison of values independent of their data type. For example, `{{#equals 3 "3"}}` will evaluate to `true`.

<call-out type="warning">

Please be aware that the editor's Preview page will not properly render the results of a comparison between coerced values. You will see proper comparisons between coerced values only in a delivered message.

</call-out>

When checking for truthiness, be aware that empty strings, zero integers, and zero floating point numbers evaluate to `false`. Non-empty strings, non-zero integers, and non-zero floating point numbers, including negative numbers, evaluate to `true`.

##### Basic equals

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#equals customerCode winningCode}}
    You have a winning code.
{{/equals}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "customerCode": 289199,
  "winningCode": 289199
}

// Test data two
{
  "customerCode": 167320,
  "winningCode": 289199
}
```

```html
<!-- Resulting HTML from test data one-->
<p>Hello Ben! You have a winning code. Thanks for playing.</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! Thanks for playing.</p>
```

</code-group>

##### Equals with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#equals customerCode winningCode}}
    You have a winning code.
{{else}}
    You do not have a winning code.
{{/equals}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "customerCode": 289199,
  "winningCode": 289199
}

// Test data two
{
  "customerCode": 167320,
  "winningCode": 289199
}
```

```html
<!-- Resulting HTML from test data one-->
<p>Hello Ben! You have a winning code. Thanks for playing.</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! You do not have a winning code. Thanks for playing.</p>
```

</code-group>

#### notEquals

The `notEquals` comparison can check for equality between two values of the same data type. The `notEquals` helper will also attempt to coerce data types to make a comparison of values independent of their data type. For example, {{#equals 3 "3"}} will return `false`.

When checking for truthiness, be aware that empty strings, zero integers, and zero floating point numbers evaluate to `false`. Non-empty strings, non-zero integers, and non-zero floating point numbers, including negative numbers, evaluate to `true`.

##### Basic notEquals

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#notEquals customerCode winningCode}}
    You have a winning code.
{{/notEquals}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "customerCode": 289199,
  "winningCode": 289199
}

// Test data two
{
  "customerCode": 167320,
  "winningCode": 289199
}
```

```html
<!-- Resulting HTML from test data one-->
<p>Hello Ben! You have a winning code. Thanks for playing.</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! Thanks for playing.</p>
```

</code-group>

##### notEquals with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#notEquals customerCode winningCode}}
    You have a winning code.
{{else}}
    You do not have a winning code.
{{/notEquals}}
 Thanks for playing.
</p>
```

```json
// Test data one
{
  "customerCode": 289199,
  "winningCode": 289199
}

// Test data two
{
  "customerCode": 167320,
  "winningCode": 289199
}
```

```html
<!-- Resulting HTML from test data one-->
<p>Hello Ben! You have a winning code. Thanks for playing.</p>

<!-- Resulting HTML from test data two-->
<p>Hello Ben! You do not have a winning code. Thanks for playing.</p>
```

</code-group>

#### And

When checking for truthiness, be aware that empty strings, zero integers, and zero floating point numbers evaluate to `false`. Non-empty strings, non-zero integers, and non-zero floating point numbers, including negative numbers, evaluate to `true`.

##### And without else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#and favoriteFood favoriteDrink}}
   Thank you for letting us know your dining preferences.
{{/and}}.
 We look forward to sending you more delicious recipes.</p>
```

```json
// Test data one
{
  "favoriteFood": "Pasta",
  "favoriteDrink": ""
}

// Test data two
{
  "favoriteFood": "Pasta",
  "favoriteDrink": "Coffee"
}
```

```html
<!-- Resulting HTML from test data one -->
<p>Hi Ben! We look forward to sending you more delicious recipes.</p>

<!-- Resulting HTML from test data two -->
<p>
  Hi Ben! Thank you for letting us know your dining preferences. We look forward
  to sending you more delicious recipes.
</p>
```

</code-group>

##### And with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#and favoriteFood favoriteDrink}}
   Thank you for letting us know your dining preferences.
{{else}}
   If you finish filling out your dining preferences survey, we can deliver you recipes we think you'll be most interested in.
{{/and}}.
 We look forward to sending you more delicious recipes.</p>
```

```json
// Test data one
{
  "favoriteFood": "Pasta",
  "favoriteDrink": ""
}

// Test data two
{
  "favoriteFood": "Pasta",
  "favoriteDrink": "Coffee"
}
```

```html
<!-- Resulting HTML from test data one -->
<p>
  Hi Ben! If you finish filling out your dining preferences survey, we can
  deliver you recipes we think you'll be most interested in. We look forward to
  sending you more delicious recipes.
</p>

<!-- Resulting HTML from test data two -->
<p>
  Hi Ben! Thank you for letting us know your dining preferences. We look forward
  to sending you more delicious recipes.
</p>
```

</code-group>

#### Or

When checking for truthiness, be aware that empty strings, zero integers, and zero floating point numbers evaluate to `false`. Non-empty strings, non-zero integers, and non-zero floating point numbers, including negative numbers, evaluate to `true`.

##### Basic or

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#or isRunner isCyclist}}
   We think you might enjoy a map of trails in your area.
{{/or}}.
 Have a great day.
</p>
```

```json
// Test data one
{
  "isRunner": true,
  "isCyclist": false
}

// Test data two
{
  "isRunner": false,
  "isCyclist": false
}
// Test data three
{
  "isRunner": false,
  "isCyclist": true
}
```

```html
<!-- Resulting HTML from test data one -->
<p>
  Hi Ben! We think you might enjoy a map of trails in your area. You can find
  the map attached to this email. Have a great day.
</p>

<!-- Resulting HTML from test data two -->
<p>Hi Ben! Have a great day.</p>

<!-- Resulting HTML from test data three -->
<p>
  Hi Ben! We think you might enjoy a map of trails in your area. You can find
  the map attached to this email. Have a great day.
</p>
```

</code-group>

##### Or with else

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<p>
Hello Ben!
{{#or isRunner isCyclist}}
   We think you might enjoy a map of trails in your area. You can find the map attached to this email.
{{else}}
   We'd love to know more about the outdoor activities you enjoy. The survey linked below will take only a minute to fill out.
{{/or}}.
 Have a great day.
</p>
```

```json
// Test data one
{
  "isRunner": true,
  "isCyclist": false
}

// Test data two
{
  "isRunner": false,
  "isCyclist": false
}
// Test data three
{
  "isRunner": false,
  "isCyclist": true
}
```

```html
<!-- Resulting HTML from test data one -->
<p>
  Hi Ben! We think you might enjoy a map of trails in your area. You can find
  the map attached to this email. Have a great day.
</p>

<!-- Resulting HTML from test data two -->
<p>
  Hi Ben! We'd love to know more about the outdoor activities you enjoy. The
  survey linked below will take only a minute to fill out. Have a great day.
</p>

<!-- Resulting HTML from test data three -->
<p>
  Hi Ben! We think you might enjoy a map of trails in your area. You can find
  the map attached to this email. Have a great day.
</p>
```

</code-group>

#### Length

The length helper will return the number of characters in a given string or array. For non-string and non-array values, length will return 0. Length can be useful in combination with other helpers as shown with greaterThan in the following example.

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Templates -->
<p>
Hello Ben!
{{#greaterThan (length cartItems) 0}}
 It looks like you still have some items in your shopping cart. Sign back in to continue checking out at any time.
{{else}}
 Thanks for browsing our site. We hope you'll come back soon.
{{/greaterThan}}
</p>
```

```json
// Test data one
{
  "cartItems": ["raft", "water bottle", "sleeping bag"]
}

// Test data two
{
  "cartItems": []
}
```

```html
<!-- Resulting HTML with test data one-->
<p>
  Hello Ben! It looks like you still have some items in your shopping cart. Sign
  back in to continue checking out at any time.
</p>

<!-- Resulting HTML with test data two-->
<p>Hello Ben! Thanks for browsing our site. We hope you'll come back soon.</p>
```

</code-group>

### Iterations

You can loop or iterate over data using the `{{#each }}` helper function to build lists and perform other useful templating actions.

#### Basic Iterator with each

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
<ol>
  {{#each user.orderHistory}}
   <li>You ordered: {{this.item}} on: {{this.date}}</li>
  {{/each}}
</ol>
```

```json
// Test data
{
  "user": {
    "orderHistory": [
      {
        "date": "2/1/2018",
        "item": "shoes"
      },
      {
        "date": "1/4/2017",
        "item": "hat"
      }
    ]
  }
}
```

```html
<!-- Resulting HTML -->
<ol>
  <li>You ordered: shoes on: 2/1/2018</li>
  <li>You ordered: hat on: 1/42017</li>
</ol>
```

</code-group>

### Combined examples

The following examples show you how to combine multiple Handlebars functions to create a truly dynamic template.

- [Dynamic content creation](#dynamic-content-creation)
- [Dynamic content creation with dynamic parts 1](#dynamic-content-creation-with-dynamic-parts-1)
- [Dynamic content creation with dynamic parts 2](#dynamic-content-creation-with-dynamic-parts-2)

#### Dynamic content creation

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
{{#each user.story}}
   {{#if this.male}}
      <p>{{this.date}}</p>
   {{else if this.female}}
      <p>{{this.item}}</p>
   {{/if}}
{{/each}}
```

```json
// Test data
{
  "user": {
    "story": [
      {
        "male": true,
        "date": "2/1/2018",
        "item": "shoes"
      },
      {
        "male": true,
        "date": "1/4/2017",
        "item": "hat"
      },
      {
        "female": true,
        "date": "1/1/2016",
        "item": "shirt"
      }
    ]
  }
}
```

```html
<!-- Resulting HTML -->
<p>2/1/2018</p>
<p>1/4/2017</p>
<p>shirt</p>
```

</code-group>

#### Dynamic content creation with dynamic parts 1

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
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

```json
// Test data
{
  "user": {
    "story": [
      {
        "male": true,
        "date": "2/1/2018",
        "item": "shoes"
      },
      {
        "male": true,
        "date": "1/4/2017"
      },
      {
        "female": true,
        "item": "shirt"
      }
    ]
  }
}
```

```html
<!-- Resulting HTML -->
<p>2/1/2018</p>
<p>shoes</p>
<p>1/4/2017</p>
<p>shirt</p>
```

</code-group>

#### Dynamic content creation with dynamic parts 2

<code-group langs="Handlebars, JSON, HTML">

```handlebars
<!-- Template -->
{{#if people}}
   <p>People:</p>
   {{#each people}}
      <p>{{this.name}}</p>
   {{/each}}
{{/if}}
```

```json
// Test data
{
  "people": [{ "name": "Bob" }, { "name": "Sally" }]
}
```

```html
<!-- Resulting HTML -->
<p>People:</p>
<p>Bob</p>
<p>Sally</p>
```

</code-group>

## Additional Resources

- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Create and edit Dynamic Transactional Templates]({{root_url}}/ui/sending-email/create-and-edit-transactional-templates/)
- [Dynamic Templates API](https://sendgrid.api-docs.io/v3.0/transactional-templates)
- [How to send an email with dynamic templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
