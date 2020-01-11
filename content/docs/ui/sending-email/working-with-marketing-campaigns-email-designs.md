---
layout: page
weight: 85
title: Working with Marketing Campaigns Email Designs
group: marketing-campaigns
navigation:
  show: true
seo:
  title: Working with Marketing Campaigns Email Designs
  override: true
  description:
---

<call-out>

This page refers to the new Marketing Campaigns product. If you’re using legacy Marketing Campaigns, your workflow will be a little different and your screen won’t look the same as the screenshots.

</call-out>

<iframe src="https://player.vimeo.com/video/380558358" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/380559291" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Marketing Campaigns email designs determine how the content of your Single Send or Automation emails will be built and displayed to your recipients. Email designs also serve as a quick starting point for future emails by saving you time from having to rebuild your email's layout. Consequently, designs allow you to reuse content and maintain brand consistency across all of your email marketing efforts.

We provide a collection of pre-built, responsive designs that you may begin using and customizing immediately, or you can create your own template from scratch. These are found in your Design Library.


 ## 	Creating a New Design

*To create a new design:*

1. From the left-hand navigation, select **Design Library**, and then select **Create an Email Design**.
2. Select the editor you want to use, and then click **Continue**.

<call-out>

Developers can use the [POST /campaigns API](https://sendgrid.api-docs.io/v3.0/campaigns-api/create-a-campaign) to programmatically upload a design that you can then go in and edit using the Marketing Campaigns application.

</call-out>

 ## 	Editing an Existing Design

You can only edit custom designs (ones that you have created yourself or duplicated from a Twilio SendGrid pre-built designs).

*To edit a design:*

1. From the left-hand navigation, select **Design Library**, and then click **My Email Designs**.

   If you wish to create a custom design using either drag and drop or entering your HTML, select **BLANK DESIGN**.

1. Navigate to the design you want to edit. 
1. Click the **action menu** and select **Edit**.

   This navigates you to the editor originally used to create the campaign. After you create a design, you cannot switch between the design and code editor. However, if you choose the design editor you'll still have HTML editing options, and with the code editor you'll enjoy convenient visual tools like side-by-side code and preview panes.


 ## 	Duplicating a Twilio SendGrid Email Design

You can easily duplicate a pre-built design provided by Twilio SendGrid.

*To duplicate a Twilio SendGrid design:*

1. From the left-hand navigation, select **Design Library**
1. Click **SendGrid Email Designs**.
1. Locate the template you want to duplicate and then click the action menu.
1. Select **Duplicate**. The duplicate opens in the design editor.

 ## 	Duplicating a Custom Design

*To duplicate one of your custom designs:*

1. From the left-hand navigation, select **Design Library**,
1. Click **My Email Designs**.
1. Click the **action menu** and select **Duplicate**.

 ## 	Creating a Design from a Single Send

*To create a new design from an existing Single Send:*

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends**.
1. Find the campaign you would like to use, click the **action menu**, and then select **Create Design**.

## Creating a Design from an Automation email.

*To create a new template from an existing Automation email:*

1. From the left-hand navigation, select **Marketing**, and then click **Automations**.
1. Click the action menu next to the automation you want to duplicate an email from and then select **Edit**. 
1. Navigate to the email you'd like to reuse, click the **action menu**, and then select **Create Design**.

 ## 	Additional Resources

- [Sending an Email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
- [Design Editor]({{root_url}}/ui/sending-email/editor/#-The-Design-Editor)
- [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor)
