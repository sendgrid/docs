---
layout: page
weight: 70
title: Email Testing
group: marketing-campaigns
navigation:
  show: true
seo:
  title: Email testing
  keywords: email testing, send test email, email rendering test
  override: true
  Description: How to use SendGrid's new email testing feature to preview how your email renders, performs against spam filters, and validate the links within your email.
  
---

<iframe src="https://player.vimeo.com/video/389535005" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Email testing offers robust, pre-send testing of your emails, including in-app spam testing, inbox rendering previews, and link validation without leaving your workflow. It allows you to preview how an email is likely to perform across a wide range of inbox providers, devices, and spam filters, before sending.

- **Inbox Rendering Test:** Displays how an email message is rendered and appears across a select group of inbox providers and devices.
- **Spam Test:** Shows how an email performs against the world’s most powerful consumer (B2C) and enterprise (B2B) spam filters.
- **Link Validation Test:** Tests all links within a message to ensure they are valid. The test checks for redirects, domain reputation, and critical metadata, like title text. Your inbox rendering tests will automatically include this link validation test. Link validation tests **do not** deduct from your Email Testing credits.

<iframe src="https://player.vimeo.com/video/359828434" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Email Testing credits and pricing

The number of Email Testing credits available to you depends on your Marketing Campaigns or Email API plan. For more information on email plans, see our [pricing page](https://sendgrid.com/pricing/). Email Testing credits can be used for both Inbox Rendering Tests and Spam Tests, and all Email Testing credits (whether part of your plan or purchased as part of an add-on package) expire at the end of each month.

## Purchasing additional credits

If you find yourself in need of more credits than your email plan offers, we offer additional Email Testing credit packages as add-ons to your monthly plan.

<callout>

Packages for additional Email Testing credits are billed on a monthly, recurring basis and will continue to renew each month unless removed from your account.

</callout>

  Available Email Testing credit add-on packages are:
  
  <ul>
  <li><strong>30 Email Testing Credits</strong> per month, available for $18.00 USD</li>
  <li><strong>60 Email Testing Credits</strong> per month, available for $30.00 USD</li>
  <li><strong>100 Email Testing Credits</strong> per month, available for $40.00 USD</li>
  </ul>

## Running an Email Test

Email testing is available for both Marketing Campaigns and emails within API plans ultilizing Dynamic Templates. 

*To test an email:*

1. From inside either the Design or Code editor, navigate to the Settings tab.
1. Scroll down and click on the **Test Your Email** dropdown to expand testing options.
1. Below the option to send a test email, you will see an **Email Testing** option. To create a test, click **Create Test**.

<call-out>

Before you can create a test, you need to specify a Sender and include a Subject for your email.

</call-out>

![]({{root_url}}/img/auto-email-testing-launch.png "Launch Automated Email Testing")

4. When Email Testing opens a new test, choose which kind of tests you'd like to run by selecting the checkboxes next to **Spam Test**, **Inbox Rendering Test**, or by selecting both.

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
- [Dynamic Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
