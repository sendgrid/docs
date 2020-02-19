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

Integer: [1-9][0-9]*
Float: [0-9]+.[0-9]+

### String
A set of characters delimited by double or single quotes. 

**Escaping**
Escaping must be done for the character used as the delimiter if it is found within the string. The escape character is \, which must also be escaped with a preceding `\`.

**Wildcards**
When using the LIKE or NOT LIKE operators, `% `will be interpreted as a wildcard character. To escape this character and not treat it as a wildcard, a second % should be used.

### DateTime
A timestamp whose literal value is formatted as a stringsting in the format of ISO 8601: YYYY-MM-DDTHH:mm:SSZ(-)HH:mm  
### Interval
A time interval with an integral scalar value and some unit of time which can be one of the following: second, minute, hour, day, month, or year.
### Boolean
Boolean values are true or false.
