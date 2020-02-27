---
seo:
  title: HTML Rendering - Cross-Platform Email Design
  description: HTML Rendering - The Do's and Dont's of Cross-Platform Email Design
  keywords: render, message, layout, html, css, cross-platform
title: Cross-Platform Email Design
group: building-email
weight: 0
layout: page
zendesk_id: 200184928
navigation:
  show: true
---

All Mail clients render HTML/CSS differently, in their own ways and for their own reasons. The differences in what HTML and CSS they support depends on many factors. When rendering HTML and CSS in emails many things impact what the end user is going to see. The mail exchange server, the preprocessor, the browsers, the rendering engines, and more; all affect the way your message is going to be displayed. These vary from client to client; browser to browser; server to server. However, don't start pulling your hair out just yet, because there are some best practices you can utilize so that your emails' coding will stay intact across different clients and platforms.

## Layout

- **Avoid using padding or margins**
  - Certain email clients don't support these formatting settings. For example, Outlook cannot support padding, and Hotmail cannot support margins.
  - These can be especially problematic when added inside of a table in either mail client.

* **Always use inline CSS**

  - Most webmail clients (Outlook.com, Yahoo.com, Gmail, etc) will strip CSS out when stripping the head and body tags.

    - Make sure you render coding very carefully so it conforms to the email client's pre-set HTML.

* **Avoid BR, HR, and height tags in your emails**

  - Every browser/client has their own default line height and will default to it most of the time.
  - Workaround in next bullet point below.

- **Use Tables to create general layout of email**

  - Set the width of each cell in the table.

  - Avoid cell spacing and padding.

- **Always set a "doctype" in your code**
- **Set wrapper reset styles in "wrapper div"**

  - This can override a browser or client's default styling of certain elements.
  - Click [here](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/) for more information on reset styles.

* **Be aware of text and font changes per device (mobile especially) and browsers**

  - Mobile devices and different browsers may change the font styling to increase readability.
  - For example, _Comic Sans_ is not supported on mobile devices.

## Backgrounds

- **Use the older more basic background HTML tags**

  - "background-image" ; "bgcolor" ; "background"
  - Many browsers and clients experience issues when trying to support compound CSS values, so be sure to use individual values such as "background-image" and "background-repeat"

* **Always offer reset background colors or fall back background colors to defer to if your specific background isn't supported**

## Images

- **Always avoid PNG images** - Try to always use either JPEG or GIF images
- **Always provide image dimensions**

  - Some mail clients will automatically apply their own if none are given which can lead to major issues when rendering these images in relation to spacing and alignment.

    - It is important to note however that some mail clients will do this regardless as a default setting.

- **Make sure to give ALL of your images 'alt' attributes** - This simple step will keep the overall sizing of your images the same across platforms.

- **Outlook.com adds some pixels at the end of each image which can rearrange spacing, alignment, or padding**

  - Use the "Outlook.com hack" - `img {display:block;}`. This removes the padding in outlook.com and gives predictable results across many other email clients in terms of added spacing or padding to images.

- **Avoid 'float' tags**

  - Outlook cannot support these tags, so SendGrid recommends using align tags. For example, `<img src="image.jpeg" align="right">`.

  - Yahoo! has similar issues, so SendGrid recommends using align="top" for the image in question.

## Videos

- Many clients simply cannot support rendering video (other than GIFs) in their emails
- JavaScript nor the object tag are supported in many clients or browsers and thus can't support video rendering

If you're still having issues, please contact our support team for help. We can provide the tools and the knowledge base to help you understand what your mail will look like across platforms and how to gain insight in making them appear consistent across these platforms.
