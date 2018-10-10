---
seo:
  title: HTML Formatting Issues
  description: HTML Formatting Issues
  keywords: message, format, html
title: HTML Formatting Issues
group: building-email
weight: 0
layout: page
navigation:
  show: true
---

To be successful sending email through SendGrid and to ensure that your content gets preserved as needed, please follow these guidelines. These guidelines are also useful if you are encountering issues with the HTML formatting or styling of your messages.

**Duplicate Versions**

Ensure your email contains both Plaintext and HTML versions so recipients can view the information within the mail client of their choice. If you only send HTML emails and a recipient's server or mail client blocks HTML content, they will not see anything in your emails.

**Character Limits**

Make sure that each line of content does not exceed 78 characters in length, nor that you exceed 998 continuous characters.

For more information on how email should be formatted, see these [Formatting Guidelines](http://tools.ietf.org/html/rfc5322). (Refer to 2.1.1. Line Length Limits.)


**Troubleshooting**

Some mailers, such as Apple Mail, place Multipurpose Internet Mail Extensions (MIME) into emails automatically which can cause our system to not parse the boundaries correctly. If you do notice a problem with the content from your email not rendering correctly, please do the following:

1. Log in to your SendGrid account, click  **Settings**, then select **Mail Settings**. Select the arrow next **Plain Content** to expand the settings, and then place a check mark in the _Don't Convert Plaintext to HTML_ option. Save this setting. To test the settings, send another email using your application and see if the content still cannot be rendered.

1. Some mail clients, such as Outlook and Thunderbird, appear to insert double spacing line breaks at every line. The reason is that the 'content-transfer-encoding' in MIME is set to 'quoted-printable' which adds Carriage Return Line Feed (CRLF) line breaks to the source content of the email which are characters interpreted by these mail clients. To alleviate this problem, please do the following:

    a) If you can customize the MIME settings for your email, set the 'Content-Transfer-Encoding' to '7bit' instead of 'Quoted-Printable.'

    b) Ensure that your content follows the [line length limits](http://tools.ietf.org/html/rfc5322). 

1. Hard line breaks appear as CRLF characters in the source of an email with the character combination of " **=0D**" in the source of an email. This only happens with 'quoted-printable' (Content-Transfer-Encoding set in MIME) emails. Email clients such as Outlook and Thunderbird render these characters which results in additional breaks in the content of your emails. 

1. The best possible MIME layout in your email when sending through SendGrid is as follows. It is best to reference files using separate links to download since it lowers the percentage of spam threshold for most domains you are sending to.

 

