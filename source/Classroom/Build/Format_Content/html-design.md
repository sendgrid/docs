---
seo:
  title: HTML Rendering - The Do's and Dont's of Cross-Platform Email Design
  description: HTML Rendering - The Do's and Dont's of Cross-Platform Email Design
  keywords: render, message, layout, html, css
title: HTML Rendering - The Do's and Dont's of Cross-Platform Email Design
weight: 0
layout: page
zendesk_id: 200184928
navigation:
  show: true
---

All Mail clients render HTML/CSS differently, in their own ways and for their own reasons. The differences in what HTML and CSS they support depends on many factors. When rendering HTML and CSS in emails many things impact what the end user is going to see. The mail exchange server, the preprocessor, the browsers, the rendering engines, and more; all affect the way your message is going to be displayed. These vary from client to client; browser to browser; server to server. However, don't start pulling your hair out just yet, because there are some best practices you can utilize so that your emails' coding will stay intact across different clients and platforms.

**LAYOUT**

- **Avoid Using padding or margins**

  - Outlook cannot support padding, and Hotmail cannot support margins
  - Especially problematic when added inside of a table in either mail client

- **Always use _inline _CSS**

  - Most webmail clients (outlook.com, yahoo.com, gmail, etc) will strip CSS out when stripping the head and body tags.

    - Have to render coding very carefully so it conforms to their already set HTML that you would view the message in.

- **Avoid BR, HR, and height tags in your emails**

  - Every browser/client has their own default line height and will default to this. most of the time.
  - Work around in next bullet point below.

- **Use Tables to create general layout of email**

  - Be sure that you set the width of each cell in the table

    - Try to avoid cellspacing and padding
- **Always set a "doctype" in your code**
- **Set wrapper reset styles in "wrapper div"**

  - This can override a browser or client's default styling of certain elements.
  - For more info - http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/
- **Be aware of text and font changes per device (mobile especially) and browsers**

  - Mobile devices and different browsers may change the font styling to increase readability
  - ie. comic sans not supported on mobile devices

**BACKGROUNDS**

- **Use the older more basic background HTML tags**

  - "background-image" ; "bgcolor" ; "background"
  - Many browsers and clients experience issues when trying to support compound CSS values so be sure to use individual values such as "background-image" and "background-repeat"
- **Always offer reset background colors or fall back background colors to defer to if your specific background isn't supported**

**IMAGES**

- **Always avoid PNG images ->** Try to always use either JPEG or GIF images
- **Always provide image dimensions**

  - some clients will automatically apply their own if none are given which can lead to major issues when rendering these images in relation to spacing and alignment.

    - it is important to note however that some mail clients will do this regardless as a default setting
- **Make sure to give ALL of your images 'alt' attributes**

  - This simple step will keep the overall sizing of your images the same across platforms
  - ie. http://www.w3schools.com/tags/att\_img\_alt.asp
- **Outlook.com adds some pixels at the end of each image which can rearrange spacing, alignment, or padding**

  - Use the "Outlook.com hack"

    - img {display:block;}
    - This removes the padding in outlook.com and gives predictable results across many other email clients in terms of added spacing or padding to images.
- **Avoid 'float' tags**

  - Outlook cannot support these tags
  - Instead use 'align'

    - ie. `<img src="image.jpeg" align="right">`
  - _Seeing issues with Yahoo! as well in this respect?_

    - Try align="top" to the image in question.

**VIDEOS**

- **Don't do it... Just don't do it...**

  - Many clients simply cannot support rendering video (other than GIFs) in their emails
  - JavaScript nor the object tag are supported in many clients or browsers and thus can't support video rendering

STILL HAVING ISSUES?  QUESTIONS? CONCERNS?  Just contact our support team and we will be happy to help. We can provide the tools and the knowledge base to help you understand what your mail will look like across platforms and how to gain insight in making them appear consistent across these platforms.

 
