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
  keywords: SendGrid, segmenttion, segmenting contacts, SGQL
---

## Data Types

### Numeric
Any numeric type that can be an integer or float.

Integer: `[1-9][0-9]*`
Float: `[0-9]+.[0-9]+`

### String
A set of characters delimited by double or single quotes. 

**Escaping**
Escaping must be done for the character used as the delimiter if it is found within the string. The escape character is \, which must also be escaped with a preceding `\`.

**Wildcards**
When using the `LIKE` or `NOT LIKE` operators, `% ` will be interpreted as a wildcard character. To escape this character and not treat it as a wildcard, a second `%` should be used.

### DateTime
A timestamp whose literal value is formatted as a stringsting in the format of ISO 8601: `YYYY-MM-DDTHH:mm:SSZ(-)HH:mm`  

### Interval
A time interval with an integral scalar value and some unit of time which can be one of the following: second, minute, hour, day, month, or year.

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
    <td>And</td>
    <td>Left</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Or</td>
    <td>Left </td>
    <td>2</td>
  </tr>
  <tr>
    <td>Not</td>
    <td>Right</td>
    <td>2 (binary)</td>
  </tr>
  <tr>
    <td>Not</td>
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
Identifiers are named things within a given query. These include both function names and field/column names. Identifiers cannot be a keyword and must only allow the characters: [a-zA-Z_]+. 

<call-out>

Identifiers that do not meet the previous format may still be used.  However, they must be encapsulated within backticks.  I.E `000supercoolid`

</call-out>

## Functions
Functions can be invoked with or without parameters by providing the function name (identifier) followed by a list of arguments separated by commas enclosed in a set of parentheses.

`MY_FUNCTION(a,b,c)`

### Well Defined Functions

These are functions that should be used consistently across consumers of the parser. Whether or not your implementation actually supports them is up to you.

**CONTAINS(array_or_map, value_or_key)**

Contains should return a boolean indicating the presence of a value in an array or map. When used with an array, true should be returned when the array holds the given value. When used with a map, true should be returned when the map has an element with the given key.

**CONCAT(s1,s2)**
Concat takes two strings and combines them as a single string in that order and returns the result.

**LENGTH(s)**
Length takes a single string and returns the number of characters in the string.

**LOWER(s)**
Lower returns a lowercase version of the given string.

**NOW()**
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

In the future, the address fields may be used with a third-party service to populate a `location` type field when contacts are added or updated.) In addition, contacts have `alternate_emails` and `alternate_email_domains` fields that represent sets of strings.

</call-out>

Note that the `list_id` attribute is no longer present in the top-level object. It is instead replaced by a `list_ids` field that is a set of IDs. Making `list_ids` a regular contact field allows, for example, specifying multiple lists from which to draw contacts, or that each contact must be a member of multiple lists. Similarly, there is a `segment_ids` field that allows creating conditions specifying membership in other segments. (Conditions on `segment_ids` will need to be checked to ensure they don’t create circular dependencies or extreme levels of nesting.)

We just saw how variables are used to indicate that any element of a collection may satisfy a condition. To indicate that every element in a collection must satisfy a condition, negate both its comparison operator and the condition itself. Consider the following segment:

```
{
	"name": "Lovers",
	"query_dsl": "NOT CONTAINS(list_ids, <Fighters ID>)"
}
```

This segment represents lovers as anyone not on the "Fighters" list.

## Examples and Use Cases

A query for getting all gmail users:

  ``` 
  {
      "name": "All Gmail Users",
      "query_dsl": "email LIKE '%gmail.com'"
   }
   ```

A query for getting contacts in specific zip codes:

   ```
   {
      "name": "My Favorite Zip Codes",
      "query_dsl": "postal_code IN ('90124', '90125', '90126')"
   }
   ```

A query for getting contacts NOT in specific zip codes:

   ```
   {
      "name": "My Least Favorite Zip Codes",
      "query_dsl": "postal_code NOT IN ('90124', '90125', '90126')"
   }
   ```

A query showing how to use lowercase text:

```
   {
      "name": "Everyone named Bob, BOB or bob",
      "query_dsl": "lower(first_name) = 'bob'"
   }
```

A query for contacts that received any email in the last 10 days:

```
   {
      "name": "All Delivered in Last 10 days",
      "query_dsl": "(event_source = 'mail' AND event_type = 'delivered' AND event_timestamp >= (NOW() - interval 10 day))"
   }
```

A query for contacts that received any email between two dates:

```
   {
      "name": "All Delivered in Last 10 days",
      "query_dsl": "(event_source = 'mail' AND event_type = 'delivered' AND event_timestamp BETWEEN TIMESTAMP '2019-08-07T18:00:00Z' AND TIMESTAMP '2019-08-08T18:00:00Z')"
   }
```



