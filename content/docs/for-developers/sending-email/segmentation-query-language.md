---
layout: page
weight: 0
title: Segmentation Query Language Reference
group: sending-email
navigation:
  show: true
seo:
  title: Segmentation Query Language Reference
  description: SendGrid Segmentation Query Language Reference
  keywords: SendGrid, segmentation, segmenting contacts, SGQL
---

## Data Types

### Numeric

Any numeric type that can be an integer or float.

**Integer**: [1-9][0-9]*  
**Float**: [0-9]+.[0-9]+

### String

A set of characters delimited by double or single quotes.

#### Escaping

Escaping must be done for the character used as the delimiter if it is found within the string. The escape character is the backslash, `\`, which must also be escaped with a preceding `\`.

##### Escaping example

```text
'Hello, World! It\'s a beautiful day'
```

#### Wildcards

When using the `LIKE` or `NOT LIKE` operators, The percentage symbol, `%`, will be interpreted as a wildcard character. To escape this character and not treat it as a wildcard, a second `%` should be used.

##### Wildcard example

```text
"email LIKE '%gmail.com'"
```

### DateTime

A timestamp whose literal value is formatted as a string in ISO 8601 format: `YYYY-MM-DDTHH:mm:SSZ(-)HH:mm`

### Interval

A time interval with an integral scalar value and some unit of time, which can be one of the following: second, minute, hour, day, month, or year.

##### Interval example

```text
"10 day"
```

### Boolean

Boolean values are true or false.

### Null

Null is a special type that represents a lack of a value.

## Operators

### Logical

<table>
  <tr>
    <th>Operator</th>
    <th>Associativity</th>
    <th>Operands</th>
  </tr>
  <tr>
    <td>AND</td>
    <td>Left</td>
    <td>2</td>
  </tr>
  <tr>
    <td>OR</td>
    <td>Left </td>
    <td>2</td>
  </tr>
  <tr>
    <td>NOT</td>
    <td>Right</td>
    <td>2 (binary)</td>
  </tr>
  <tr>
    <td>NOT</td>
    <td>Right</td>
    <td>1 (unary)</td>
  </tr>
</table>

### Arithmetic

Precedence from low to high:

   <table>
  <tr>
    <th>Operator</th>
    <th>Associativity</th>
    <th>Operands</th>
    <th>Supported Types</th>
  </tr>
  <tr>
    <td>-</td>
    <td>Left</td>
    <td>2 (binary)</td>
    <td>Numeric - Numeric<br>DateTime - Interval</td>
  </tr>
  <tr>
    <td>+ </td>
    <td>Left</td>
    <td>2</td>
    <td>Numeric + Numeric<br>DateTime + Interval<br>String + String (concatenation)</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Left</td>
    <td>2 </td>
    <td>Numeric / Numeric</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Left</td>
    <td>2</td>
    <td>Numeric * Numeric</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Left</td>
    <td>2</td>
    <td>Numeric % Numeric (modulo)</td>
  </tr>
  <tr>
    <td>- </td>
    <td>Left</td>
    <td>1 (unary)</td>
    <td>- Numeric</td>
  </tr>
</table>

### Comparison

<table>
  <tr>
    <th>Operator</th>
    <th>Supported Types (T represents any type)</th>
  </tr>
  <tr>
    <td>=</td>
    <td>T = T</td>
  </tr>
  <tr>
    <td>!=</td>
    <td>T != T</td>
  </tr>
  <tr>
    <td>&lt;</td>
    <td>Numeric &lt; Numeric<br>DateTime &lt; DateTime<br>String &lt; String</td>
  </tr>
  <tr>
    <td>&gt;</td>
    <td>Numeric &lt; Numeric<br>DateTime &lt; DateTime<br>String &lt; String</td>
  </tr>
  <tr>
    <td>&lt;=</td>
    <td>Numeric &lt; Numeric<br>DateTime &lt; DateTime<br>String &lt; String</td>
  </tr>
  <tr>
    <td>&gt;=</td>
    <td>Numeric &lt; Numeric<br>DateTime &lt; DateTime<br>String &lt; String</td>
  </tr>
  <tr>
    <td>LIKE/ NOT LIKE</td>
    <td>String (NOT) LIKE String</td>
  </tr>
  <tr>
    <td>IS (NOT)</td>
    <td>T is (NOT) NULL</td>
  </tr>
  <tr>
    <td>(NOT) IN</td>
    <td>T IN (T)</td>
  </tr>
  <tr>
    <td>(NOT) BETWEEN</td>
    <td>Numeric (NOT) BETWEEN Numeric AND Numeric<br>DateTime (NOT) BETWEEN DateTime AND DateTime<br>String (NOT) BETWEEN String AND String</td>
  </tr>
</table>

## Identifiers

Identifiers are named things within a given query. These include both function names and field/column names. Identifiers cannot be a keyword and must only allow the characters: `[a-zA-Z_]+.`.

<call-out>

Identifiers that do not meet the previous format may still be used. However, they must be encapsulated within backticks.  I.E. \`000supercoolid\`

</call-out>

## Functions

Functions can be invoked with or without parameters by providing the function name—remember, function names are identifiers—followed by a list of comma separated arguments enclosed in parentheses.

##### Function called with arguments example

```text
MY_FUNCTION(a,b,c)
```

### Well Defined Functions

These are functions that should be used consistently across consumers of the parser. Whether or not your implementation actually supports them is up to you.

#### CONTAINS()

```text
CONTAINS(array_or_map, value_or_key)
```

Contains should return a boolean indicating the presence of a value in an array or map. When used with an array, true should be returned when the array holds the given value. When used with a map, true should be returned when the map has an element with the given key.

#### CONCAT()

```text
CONCAT(string_one,string_two)
```

Concat takes two strings, combines them as a single string in the order they are passed in, and returns the result.

#### LENGTH()

```text
LENGTH(string)
```

Length takes a single string and returns the number of characters in the string.

#### LOWER()

```text
LOWER(string)
```

Lower returns a lowercase version of the given string.

#### NOW()

```text
NOW()
```

Returns the current date and time.

## Fields

A number of fields are available on every contact. These include the strings:

- `email`
- `email_domains`
- `first_name`
- `last_name`
- `address_line_1`
- `address_line_2`
- `city`
- `state_province_region`
- `country`
- `postal_code` 

<call-out>

In the future, the address fields may be used with a third-party service to populate a `location` type field when contacts are added or updated. In addition, contacts have `alternate_emails` and `alternate_email_domains` fields that represent sets of strings.

</call-out>

## Examples and Use Cases

### A query for getting all gmail users:

```javascript
{
  "name": "All Gmail Users",
  "query_dsl": "email LIKE '%gmail.com'"
}
```

### A query for getting contacts in specific zip codes:

```javascript
{
  "name": "My Favorite Zip Codes",
  "query_dsl": "postal_code IN ('90124', '90125', '90126')"
}
```

### A query for getting contacts NOT in specific zip codes:

```javascript
{
  "name": "My Least Favorite Zip Codes",
  "query_dsl": "postal_code NOT IN ('90124', '90125', '90126')"
}
```

### A query showing how to use lowercase text:

```javascript
{
  "name": "Everyone named Bob, BOB or bob",
  "query_dsl": "lower(first_name) = 'bob'"
}
```

### A query for contacts that received any email in the last 10 days:

```javascript
{
  "name": "All Delivered in Last 10 days",
  "query_dsl": "(event_source = 'mail' AND event_type = 'delivered' AND event_timestamp >= (NOW() - interval 10 day))"
}
```

### A query for contacts that received any email between two dates:

```javascript
{
  "name": "All Delivered in Last 10 days",
  "query_dsl": "(event_source = 'mail' AND event_type = 'delivered' AND event_timestamp BETWEEN TIMESTAMP '2019-08-07T18:00:00Z' AND TIMESTAMP '2019-08-08T18:00:00Z')"
}
```
