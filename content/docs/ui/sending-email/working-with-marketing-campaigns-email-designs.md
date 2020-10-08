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

Twilio SendGrid Marketing Campaigns provides a full set of design tools you can use to deliver professional looking templates that render beautifully across email clients.

We provide a collection of pre-built, responsive designs that you may begin using and customizing immediately, or you can create your own templates from scratch. Each Design is stored in the Marketing Campaigns Design Library and can be used to deliver [Single Sends]({{root_url}}/glossary/single-send) or [Automations]({{root_url}}/glossary/automated-email).

## The Design Library

You can manage all of your Marketing Campaigns designs in the [Design Library](https://mc.sendgrid.com/design-library/your-designs). In addition to storing your current designs, you can browse and duplicate the pre-built [**SendGrid Email Designs**](https://mc.sendgrid.com/design-library/sendgrid-designs) and manage [**Your Images**](https://mc.sendgrid.com/design-library/your-images) from the Design Library as well.

![The Design Library with each navigation tab highlighted and the "Your Designs" tab displayed]({{root_url}}/img/design_library_tabs.png 'The Design Library with "Your Designs" tab displayed.')

For more information about managing images with Marketing Campaigns, see the [Image Editor documentation]({{root_url}}/ui/sending-email/image-editor/).

<call-out>

You can manage your designs programmatically with the [Design Library API](https://sendgrid.api-docs.io/v3.0/designs-api).

</call-out>

## Creating a new design

To create a new design, you can either build one from a blank template or duplicate an existing templates.

### Building from a blank template

<iframe src="https://player.vimeo.com/video/380559291" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

1. Navigate to the **Design Library** in the SendGrid App.
2. When the Design Library loads, you will be taken to the **Your Email Designs** tab.
3. You will see a large **Create Email Design** button on the page. Click this button.

![]({{root_url}}/img/design_library_create_email_design_button.png)

4. After clicking **Create Email Design**, a new window will open where you can select which editor you wish to use—the **Design Editor** or the **Code Editor**.

![A window with two large boxes displaying your choice of editor, the Design Editor or Code Editor]({{root_url}}/img/create_design_editor_options.png 'Choose an editor')

The Design Editor makes it possible to build and edit an email template with drag and drop modules that require no coding. The Code Editor is appropriate for customers who wish to build and edit templates by manipulating the HTML code directly. Once a design is created, it is not possible to change the editor used for that design. However, if you choose the design editor you'll still have HTML editing options, and with the code editor you'll enjoy convenient visual tools like side-by-side code and preview panes.

For full documentation on working with the editors, see our [Design and Code Editor documentation]({{root_url}}/ui/sending-email/editor/). For best practices regarding HTML email design, see our [Cross-Platform Email Design documentation]({{root_url}}/ui/sending-email/cross-platform-html-design/).

5. Once you have selected an editor, the template will load in that editor and you can begin working with your template.

<call-out>

Developers can use the [POST /designs API endpoint](https://sendgrid.api-docs.io/v3.0/designs-api/create-design) to programmatically upload a design.

</call-out>

### Duplicating an existing design

You can create a new template by duplicating one of your existing templates or duplicating one of the Twilio SendGrid pre-built designs.

<iframe src="https://player.vimeo.com/video/380558358" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

1. From the **Design Library** select the **Your Email Designs** tab to duplicate one of your existing designs. Select **SendGrid Email Designs** to duplicate a Twilio SendGrid pre-built design.

![The Design Library tabs to select between your designs and the pre-built designs]({{root_url}}/img/design_library_duplicate_tabs.png 'Select which templates you want to duplicate')

2. Click the **action menu** at the bottom of the design you want to copy and select **Duplicate**

![The design duplication menus highlighted in the Design Library]({{root_url}}/img/design_library_duplicate_your_designs.png 'Duplicate one of your designs')

3. After clicking **Duplicate**, a new window will open where you can select which editor you wish to use—the **Design Editor** or the **Code Editor**.
4. Once you have selected an editor, the template will load in that editor and you can begin working with your copy of the template.

<call-out>

Duplicated designs will have "Duplicate:" prepended to the **Email Design Name** by default. This text is meant to help you differentiate a duplicate from the original design until you change the name yourself.

</call-out>

<call-out>

Developers can use the [POST /designs/{id} API endpoint](https://sendgrid.api-docs.io/v3.0/designs-api/duplicate-design) to programmatically duplicate one of their own designs and the [POST /designs/pre-builts/{id} API endpoint](https://sendgrid.api-docs.io/v3.0/designs-api/duplicate-sendgrid-pre-built-design) to duplicate one of the Twilio SendGrid designs.

</call-out>

## Editing a design

You can edit any of the designs in the **Your Email Designs** tab. You cannot edit one of the pre-built designs directly; you must duplicate the template first and make changes to your copy.

1. Navigate to the design you want to edit.
2. Click the **action menu** at the bottom of the design you want to modify and select **Edit**.

![The Edit menu item button below a design]({{root_url}}/img/design_library_edit_your_designs.png 'Edit a design')

3. The template will open in the editor originally used to create the campaign—the **Design Editor** or the **Code Editor**.

After you create a design, you cannot switch between the design and code editor to modify that particular template. If you wish to switch editors, you can duplicate the design and select the alternate editor during the duplication process.

## Designs and Single Sends

You can use any of your designs to deliver a [Single Send]({{root_url}}/glossary/single-send/). Single Sends are one-time nonautomated email messages commonly used to deliver newsletters, promotions, policy updates, and more. You can either create a Single Send from a design or add a design to your Design Library from a Single Send.

## Create a Single Send from an existing design

1. In the **Design Library**, you can select either the **Your Email Designs** or **SendGrid Email Designs** tab.
2. Click the **action menu** at the bottom of the design you want to use for your Single Send and select **Create Single Send**.

![The Create a Single Send menu item button below a design]({{root_url}}/img/design_library_create_single_send.png 'Create a Single Send from a design')

3. After clicking **Create Single Send**, a new window will open where you can select which editor you wish to use—the **Design Editor** or the **Code Editor**.

![A window displaying two large boxes as editor options, the Design Editor or the Code Editor]({{root_url}}/img/create_single_send_editor_choice.png 'Choose an editor for your Single Send')

4. Once you select an editor, your Single Send will open, allowing you to finish the Single Send setup process.

For more information about delivering a Single Send, see [How to Send Email with new Marketing Campaigns]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)

<call-out>

You can manage Single Sends programmatically with the [Single Sends API](https://sendgrid.api-docs.io/v3.0/single-sends).

</call-out>

## Create a new design from an existing Single Send

If you have a Single Send that uses a design you would like to manage in your Design Library, you can add the design from the Single Send.

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends**.

![The SendGrid App with the Marketing Campaigns and Single Sends navigation items highlighted]({{root_url}}/img/marketing_single_sends_nav_item.png 'Single Sends navigation menu item')

2. Find the Single Send you would like to create a design from, click the **action menu** and select **Create Design**.

![The action menu expanded below a Single Send with the Create Design menu item selected]({{root_url}}/img/single_send_create_design.png 'Create a design from a Single Send')

3. After clicking **Create Design**, a new window will open where you can select which editor you wish to use—the **Design Editor** or the **Code Editor**.
4. The Design used by the Single Send will now be added to your Design Library where you can edit, duplicate, and use it to deliver more Single Sends or Automations.

## Designs and Automations

[Automations]({{root_url}}/ui/sending-email/getting-started-with-automation/) allow you to send recurring emails or drip series automatically at a cadence you define. You can use any of the designs in the **Your Email Designs** or **SendGrid Email Designs** tabs to deliver one of the messages in your Automation series. You can also save a design from an Automation email to your Design Library.

### Create a new template from an existing Automation email

1. From the left-hand navigation, select **Marketing**, and then click **Automations**.
2. Click the action menu next to the automation you want to duplicate an email from and then select **Edit**.

![The Edit option selected from the action menu on an Automation]({{root_url}}/img/automation_action_menu_edit.png 'Edit an Automation')

3. After selecting **Edit**, the Automation will load. Scroll to the email in the Automation that you would like to create a design from.
4. Click the **action menu**, and then select **Create Design**.

![The Create Design option selected in an Automation email's action menu]({{root_url}}/img/create_design_from_automation_email.png 'Create a design from an Automation email')

4. After clicking **Create Design**, a new window will open where you can select which editor you wish to use—the **Design Editor** or the **Code Editor**.
5. The Design used by the Automation email will now be added to your Design Library where you can edit, duplicate, and use it to deliver more Automations or Single Sends.

For more information about creating an Automation and assigning designs to the emails in a series, see [Getting Started with Automations]({{root_url}}/ui/sending-email/getting-started-with-automation/).

## Working with the Design and Code editors

The Design and Code editors are both feature rich applications that include live previews, the ability to add test data, and more. For more detailed documentation about working with each editor, see our [Design and Code Editor documentation]({{root_url}}/ui/sending-email/editor/).

## Additional Resources

- [Sending an Email]({{root_url}}/ui/sending-email/how-to-send-email-with-marketing-campaigns/)
- [The Design and Code Editors]({{root_url}}/ui/sending-email/editor/)
- [Cross-Platform Email Design]({{root_url}}/ui/sending-email/cross-platform-html-design/)
- [Handlebars]({{root_url}}/for-developers/sending-email/using-handlebars/)
- [Designs API reference](https://sendgrid.api-docs.io/v3.0/designs-api)
