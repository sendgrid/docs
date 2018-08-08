---
layout: page
weight: 99
title: How to Send Email
group: getting-started
navigation:
  show: true
seo:
  title: How to Send Email
  override: true
  description: Send your first email using the Marketing Campaigns tool.
---
<iframe src="https://player.vimeo.com/video/221496578" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If you want to send email programatically, see the [API reference]({{root_url}}/api-reference/), or the [SMTP Reference]({{root_url}}/for-developers/sending-email/getting-started-smtp/).

Before sending your first campaign, you need to do the following:

- [Create an Account](https://sendgrid.com/pricing/?mc=SendGrid%20Documentation)
- [Add a Sender]({{root_url}}/user-interface/sending-email/senders/)
- [Upload Contacts]({{root_url}}/user-interface/managing-contacts/adding-contacts/)
- [Add an Unsubscribe Group]({{root_url}}/user-interface/sending-email/create-and-manage-unsubscribe-groups/)
- [Segment Your Contact List]({{root_url}}/user-interface/managing-contacts/segmenting-your-contacts/) (Optional)

*To send your first campaign:*

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.

2. Click **Create Campaign**.
<br> To create a campaign from an existing one, find the version you want to use and click the **action menu** to the far right of the campaign and then select **Edit** or **Duplicate**.
![]({{root_url}}/images/campaigns_dashboard_categories_search.png)

1. Select the template that you want to use for your campaign.
<br> You can select a **Blank Template**, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Marketing Templates]({{root_url}}/user-interface/sending-email/working-with-marketing-templates/).

1. Select an editor.
<br> You can choose between the **Design Editor** and the **Code Editor**.
![]({{root_url}}/images/choose_editor.png)

The Code Editor provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from the HTML generating WYSIWYG tools.

The Design Editor offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

 ### 	Designing Your Campaign

Depending on your editor selection, you use different methods to design your campaign. Both the Design Editor and the Code Editor have the same three tabs: **Settings**, **Tags**, and **A/B Testing**.

1. Edit your campaign by filling in the fields in the **Settings** Tab.

1. Add your custom content.
<br> For more information about customizing your campaign, see [Using the Design Editor]({{root_url}}/user-interface/sending-email/editor/#the-design-editor) or [Using the Code Editor]({{root_url}}/user-interface/sending-email/editor/#the-code-editor).

1. Once you’ve finished editing your campaign, you can see what it looks like by clicking **Preview**.

1. To send a test email, enter the email addresses you want to send your campaign to and then click **Send Test**.

1. If you would like to test the effectiveness of your email subject or content, you can set up an A/B test. For more information, see [A/B Testing]({{root_url}}/user-interface/sending-email/a-b-testing/).

1. Add a list or segment of recipients to receive your campaign.

1. To send your campaign, click **Send Campaign**.

<call-out>

Message size limit:  The total message size should not exceed 20MB. This includes the message itself, headers, and the combined size of any attachments.

</call-out>

 ### 	Scheduling Your Campaign

*To schedule your campaign:*

1. To send your campaign at a later time or date, toggle the **Send Immediately** button to **Off**.
1. Enter the date and time you want the campaign to be sent.
1. Click **Schedule Campaign**.

<call-out>

If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.

</call-out>

<call-out type="warning">

Be sure your account is set to the correct time zone in order to ensure that your emails get sent at the time you intend.

</call-out>

*To change your time zone:*

1. From the left-hand navigation select **Settings**.
1. Click **Account Details** or go to https://app.sendgrid.com/settings/account.
1. Scroll to the bottom of the page, find **TIME ZONE**, and ensure your desired timezone is correct.

 ### 	Additional Resources

- [Campaign Statistics]({{root_url}}/user-interface/analytics-and-reporting/campaign-stats/)
- [Billing]({{root_url}}/user-interface/account-and-settings/billing/)
- [Sending with the API]({{root_url}}/for-developers/sending-email/api-getting-started/)
- [Sending with SMTP]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
