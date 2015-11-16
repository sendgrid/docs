---
seo:
  title: Special Characters using the SMTPAPI
  description: Special Characters using the SMTPAPI
  keywords: 
title: Special Characters using the SMTPAPI
weight: 0
layout: page
zendesk_id: 204914107
navigation:
  show: true
---

https://wiki.sendgrid.net/display/QA/X-SMTPAPI+-+Substitution+notes

&nbsp;

Notes are wrong!!!

&nbsp;

Unicode number: U+00FC

U+ = \u

Only works for Subject Line and Email Addresses

&nbsp;

HTML-code: &#252;

Only works for HTML

&nbsp;

Nothing works for Plain-Text

&nbsp;

\u00FC

&#252;

Sometimes, when using SendGrid&nbsp;you may need to use special characters such as&nbsp;ȧ, ü,&nbsp;ň, etc. When you need to use these special characters it will be best to get their unicode number or HTML code depending on your use. A good place to get that information is [here](http://unicode-table.com/en/#0148).

&nbsp;

**Email Address Special Characters via X-SMTPAPI**

I cannot find any place that actually uses special characters in their email.

> {"to":["\"S\u00FCchit\"<Suchit@domain.com>"]}

This will get you an email address that looks like:

> Süchit&nbsp;<Suchit@domain.com>
- Special characters are allowed with restrictions. They are:
  - Space and `"(),:;<>@[\]` (ASCII: 32, 34, 40, 41, 44, 58, 59, 60, 62, 64, 91–93)
<dl>
<dd>The restrictions for special characters are that they must only be used when contained between quotation marks, and that 2 of them (the <em>backslash</em> <code>\</code> and <em>quotation mark</em> <code>"</code>(ASCII: 92, 34)) must also be preceded by a backslash <code>\</code> (e.g. <code>"\\\""</code>)</dd>
</dl>
- International characters above U+007F, encoded as [UTF-8](http://en.wikipedia.org/wiki/UTF-8 "UTF-8"), are permitted by [RFC 6531](http://tools.ietf.org/html/rfc6531), though mail systems may restrict which characters to use when assigning local parts.

**Subject Line Special Characters**

In this case you will want to get the unicode number of the special character.

Example:

Template:

X-SMTPAPI: {"sub":{"-name-":["S\u00FCchit"]}}

Subject: Welcome -name-

After Substitution:

Subject: Welcome Süchit

The unicode for "ü" is "U+00FC". To make this useable we just need to change the "U+" to "\u". Now our code reads "\u00FC".

This now reads as:

&nbsp;

&nbsp;

**Special Characters in the body of the email (HTML)**

In this case you will want to get the HTML code of the special character.

&nbsp;We will use&nbsp;Süchit again in this example. Instead of using the unicode we need to use HTML.

&nbsp;

"S&#252;chit"

If the special character will be in the subject line or email address then you will want the unicode number. If the special character will be used in the HTML of the email then you will want the HTML code. Lastly, there is no way to use special characters in the X-SMTPAPI header and plain-text emails.

