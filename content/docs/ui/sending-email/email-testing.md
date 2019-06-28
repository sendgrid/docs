---
layout: page
weight: 70
title: Email Testing
group: building-email
navigation:
  show: true
seo:
  title: Email testing
  keywords: email testing, send test email, email rendering test
  override: true
  Description: How to use SendGrid's new email testing feature to see how your email shows up in different inboxes and across different devices and operating systems.
---
<call-out>

Email Testing is available as part of the Advanced Marketing Campaigns package. To access this feature, please upgrade to Advanced Marketing Campaigns from [Your Products](https://app.sendgrid.com/account/billing).

</call-out>

Email testing offers robust, pre-send testing of your emails, including in-app spam testing, inbox rendering previews, and link validation right within your Marketing Campaigns workflow. It allows you to preview how an email is likely to perform across a wide range of inbox providers, devices and spam filters, before sending.

- **Inbox Rendering Test:** Displays how an email message is rendered and appears across a select group of inbox providers and devices.
- **Spam Test:** Shows how an email performs against the world’s most powerful consumer (B2C) and enterprise (B2B) spam filters.
- **Link Validation Test:** Tests all links within a message to ensure they are valid. The test checks for redirects, domain reputation, and critical metadata, like title text. Your inbox rendering tests will automatically include this link validation test. Link validation tests **do not** deduct from your Email Testing credits.

## Email Testing credits and pricing

Email Testing credits can be used for both Inbox Rendering Tests and Spam Tests. A Spam Test costs 3 Email Testing credits, while an Inbox Rendering Test will cost 1 credit for every client, browser or device that you select. Check your plan to see how many email testing credits are available to you for free per month. 

## Heading

*To test an email:*

1. From inside either the Design or Code editor, navigate to the Settings tab.
1. Scroll down and click on the **Test Your Email** dropdown to expand testing options.
1. Below the option to send a test email, you will see an **Email Testing** option. To create a test, click **Create Test**.

<call-out>

Before you can create a test, you need to specify a Sender and include a Subject for your email.

</call-out>

![]({{root_url}}/img/auto-email-testing-launch.png "Launch Automated Email Testing")

4. When Email Testing opens a new test, choose which kind of tests you'd like to run, by selecting the checkboxes next to **Spam Test**, **Inbox Rendering Test**, or by selecting both.

<call-out>

Every inbox rendering test that you run automatically includes a link validation test, checking that all URLs within your message are valid. Link validation tests **do not** deduct from your Email Testing credits.

</call-out>

5. If you choose to run an Inbox Rendering test, select the clients and browsers you'd like to include as part of your test by clicking the associated checkbox for each. 
6. Click **Run Test**. 
7. Your test will begin. Please note: It may take a moment for the test to begin returning your results. Test results will appear on the **View Test Results** tab. Click any thumbnail of a rendering to open the image and view in greater detail.  
8. From the View Test Results tab, you can select the **Inbox**, **Spam**, or **Links** tabs to view all of the details for your test.

## Additional Resources

- [A/B Testing]({{root_url}}/ui/sending-email/a-b-testing/)
- [Design Editor]({{root_url}}/ui/sending-email/editor/#-The-Design-Editor)
- [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor)


