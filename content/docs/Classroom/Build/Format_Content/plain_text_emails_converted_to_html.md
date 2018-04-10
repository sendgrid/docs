---
seo:
  title: Plain text emails converted to HTML
  description: Plain text emails converted to HTML
  keywords: plain, text, convert, tracking, don't, click, html
title: Plain text emails converted to HTML
weight: 0
layout: page
zendesk_id: 200181418
navigation:
  show: true
---

{% info %}
Please note: Large plain text files are sometimes unable to be converted to HTML. Instead, SendGrid will send only the plain text version. If HTML versions are essential, it is best practice to include the HTML portion of the email within your email requests. When SendGrid is unable to convert from plaintext to HTML, an alert is sent to the From address.
{% endinfo %}

If you are sending plain text emails, you may have noticed that, in some cases, your email is converted to HTML. This typically happens when you have one or more filters enabled that require a HTML version of the message you are sending.

**Why does this happen?**

The following filters convert plain text emails to HTML so the proper HTML tags can be inserted into the email:

- Click tracking
- Open tracking
- Email template
- Gravatar

**How can I control the resulting conversion (see update below)**

1. You can turn off the filters causing the conversion from plain text to HTML.
2. If you start each line with a space, this will add a "preformatted" `<pre>` tag around the line.
3. You can separate new sentences with double newlines, which will add a "paragraph" <p> tag around the sentence.
4. You can convert your message to HTML, bypassing our need to convert it altogether

- To disable conversion globally, visit Mail Settings --> Plain Content  and enabled the suppression.

**Why can't you just automatically add <br /> tags to newlines upon conversion?**

Due to the way plain text emails are sent ( [RFC 5822](http://www.rfc-editor.org/rfc/rfc5322.txt "Link: http://www.rfc-editor.org/rfc/rfc5322.txt"), Revised 2008) mailers are required to wrap lines at 998 characters, and recommends wrapping at 78 characters (excluding CR/LF). As a result, long sentences can often be broken up into multiple lines. Adding <br /> tags to each newline, would therefore create formatting problems.

**For more information**

We use the open-source library [MKDoc-Text-Structured](http://search.cpan.org/~bpostle/MKDoc-Text-Structured-0.83/lib/MKDoc/Text/Structured.pm) to perform the plain-text to HTML conversion. More information about this library and how it works can be found on the [MKDoc-Text-Structured documentation page](http://search.cpan.org/~bpostle/MKDoc-Text-Structured-0.83/lib/MKDoc/Text/Structured.pm).
