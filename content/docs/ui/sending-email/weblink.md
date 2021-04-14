---
layout: page
weight: 0
group: marketing-campaigns
title: The Weblink Substitution Tag
seo:
  title: The Weblink Substitution Tag
  description: The Webklink tag is replaced with a link that will open the email in a Twilio SendGrid-hosted webpage. This feature makes it possible to view an email when an email client fails to open or properly render the message.
  keywords: design, templates, browser, webpage, open in browser
navigation:
  show: true
---

Your emails will likely be opened on a variety of email clients that all support different HTML and CSS features. Email clients may display messages incorrectly, and, in some cases, they may not open a message at all.

Inconsistent behavior across email clients is inconvenient at best, and it presents real barriers for recipients who rely on accessibility tools such as screen readers.

The Marketing Campaigns Weblink feature makes it possible for recipients to view your email in a Web browser where modern HTML and CSS, as well as accessibility features, are better supported.

## Add Weblink to your design

Weblink is a [Substitution Tag]({{root_url}}/ui/sending-email/editor/#using-substitution-tags); however, `{{Weblink}}` is not meant to be included in your design alone. The `{{Weblink}}` tag will be replaced by a URL. This means that you must add the `{{Weblink}}` tag as the URL to a link element — usually some text. For those familiar with HTML, `{{Weblink}}` is assigned to the `href` attribute of an anchor tag.

```html
<a href="{{Weblink}}">Open this email in a Web browser</a>
```

### Design Editor

When using the Design Editor, you can add a Weblink as the URL for any link in your design.

#### Add the Weblink tag to text using a module's UI

1. In a Text module, add an appropriate call to action such as, "Open this email in a Web browser."
2. Highlight this text and format it as a link using the **Text Module Styles** options.

![Text Module Styles menu with the link icon highlighted]({{root_url}}/img/weblink_text_module_link_tool.png 'Text Module Styles')

3. A modal will appear where you can add the `{{Weblink}}` tag. Select **CustomURL** as the **Link Type**, and type `{{Weblink}}` in the `Link URL` field.

![A modal with two fields, a link type and the link URL]({{root_url}}/img/weblink_add_link_modal.png 'Add Link modal')

4. Select **OK**, and your link will be included in any Single Send or Automation that uses the design.

#### Add the Weblink tag using a module's code interface

You can also add a link by modifying the underlying HTML code for a drag-and-drop module.

1. Select **Edit Module HTML** from above the module itself. The icon is an opening and closing bracket.

![An opening and closing angle bracket that will open a code editor window for the module.]({{root_url}}/img/weblink_module_edit_html.png 'Edit Module HTML')

2. A code editor will open where you can place an anchor tag. To achieve the same result as when using the UI, your code will look like the following example. Notice that the `{{Weblink}}` tag is placed inside the `href` attribute rather than a regular URL.

```html
<div style="font-family: inherit">
  <a href="{{Weblink}}">Open this email in a Web browser</a>.
</div>
```

![A module's code editor interface with {{Weblink}} assigned to an href attribute]({{root_url}}/img/weblink_module_code_window.png 'Edit Module HTML')

### Code Editor

When using the Code Editor to build your design, you can add `{{Weblink}}` as the `href` attribute for any anchor tag where the link should appear.

![The Code Editor interface with {{Weblink}} assigned to an href attribute]({{root_url}}/img/weblink_code_editor.png 'Add {{Weblink}} to an anchor tag')

## Test Weblink in your design

Weblink URLs are generated after your email is scheduled to send. For this reason, you will not be able to test the Weblink directly from the Editors' **Preview** windows when building your Single Send or Automation. Instead, you can send a test email.

1. Using either the Design or Code Editor, select your design's **Settings** tab. Then twirl open the **Test Your Email** menu.
2. Add one of your [verified senders]({{root_url}}/ui/sending-email/sender-verification/) in the **From Address** field and at least one address with an inbox you can check in the **Email Addresses** field.
3. Click the **Send Test Message** button.

![The Editor's Settings tab with example email addresses in the Test Your Email fields]({{root_url}}/img/weblink_test_email.png 'Test Your Email')

4. You should now be able to open the email from the inbox where you sent the message. The test message will contain a working Weblink wherever you placed it in your design.
