---
layout: page
weight: 99
title: How to Send Email with new Marketing Campaigns
group: marketing-campaigns
order: 1
navigation:
  show: true
seo:
  title: How to Send Email with Marketing Campaigns
  override: true
  description: Send your first email using the new Marketing Campaigns tool.
---
<call-out>

This page refers to the new Marketing Campaigns product. If you’re using legacy Marketing Campaigns, your workflow will be a little different and your screen won’t look the same as the screenshots.

</call-out>

<iframe src="https://player.vimeo.com/video/305551346" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<call-out>

If you want to send email programmatically using Twilio SendGrid's Email API, see the [API reference]({{root_url}}/api-reference/) or the [SMTP Reference]({{root_url}}/for-developers/sending-email/getting-started-smtp/).

</call-out>

##     Before you send your first email with Marketing Campaigns

<call-out type="warning">

Before you begin, go to your SendGrid [account settings](https://app.sendgrid.com/settings/account) to verify that your timezone and account email address are correct. Verifying your account information ensures that when you upload contacts, you receive notifications and that we deliver scheduled email at the right time. You can also add additional email addresses to receive account notifications by going to the Marketing page and selecting **Notifications**. From Notifications, you can add a different email address to which we will send important account notifications, like contact export activity.

</call-out>

###  Change your time zone

Your time zone is set at the account level, you’ll need to navigate to your account settings to change it.


1. Near the bottom of the left-hand navigation, select **Settings**.
1. Click **Account Details**, or go [here](https://app.sendgrid.com/settings/account).
1. Locate the *Timezone* field under **Your Account**, and correct it if necessary.

### Add a sender

Specifying a [sender]({{root_url}}/ui/sending-email/senders/) in Marketing Campaigns is required by CAN-SPAM regulations, and provides identity information about where the emails are coming from in each email you send.

When you add a sender, you need to specify the following information:

- **From name** - the name of the person or company you wish to send email from.
- **From email** - the email of the person or company you wish to send email from.
- **Reply to email** - the email address of the person or company you want recipients to reply to. (Can also be a role address.)
- **Company address** - the physical location of the business you’re sending email on behalf of.
- **City** - the city of the business you're sending email on behalf of.
- **Nickname** - the nickname is for your reference only; this field will not be displayed to recipients.

<call-out>

If your email domain doesn't match one of your [authenticated]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) domains, you'll need to verify this email address before using this sender. We'll send this email address a verification email after you save this sender.

</call-out>

### Create Notifications

By default, notifications about your account's Marketing Campaigns activity, CSV upload summaries, sender verifications, and list or segment exports will send to the email you signed up with on your parent account. You can also opt in to receive email notifications from SendGrid to up to 10 email addresses by following the instructions [here]({{root_url}}/ui/account-and-settings/notifications/).

## Add Contacts

Marketing Campaigns offers a number of ways to add contacts to lists, including:

- [**CSV Upload**]({{root_url}}/ui/managing-contacts/create-and-manage-contacts/#upload-a-csv/)

- [**Signup Forms**]({{root_url}}/ui/managing-contacts/create-and-manage-contacts/#create-a-signup-form/)

![]({{root_url}}/img/sign-up-form.png "Sign Up Form")

- [**Manually Adding a Contact**]({{root_url}/https://sendgrid.com/docs/ui/managing-contacts/create-and-manage-contacts/#add-manually)

- [**Contact Management APIs**](https://sendgrid.api-docs.io/v3.0/contacts/)

## Add an Unsubscribe Group

[Unsubscribe Groups]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/) provide your recipients with an alternative to opting out of all email that you send, by giving them the opportunity to specify the kinds of email that they would no longer like to receive.

1. Navigate to **Marketing** and click **Unsubscribe Groups**.
1. Click **Add Unsubscribe Groups** if you do not already have any unsubscribe groups, or click **Create New Group** to add a new group.
1. Enter the Group Name and Group Description for your Unsubscribe Group.

<call-out type="warning">

The Group Name as well as the Group Description are public-facing and will be visible to your recipients.

</call-out>

![]({{root_url}}/img/unsubscribe-group-example.png "Alt text")

4. Select the checkbox if you want the Unsubscribe Group to display on the unsubscribe preferences page.
5. Click **Save Unsubscribe Group**.
6. Find your newly created Unsubscribe Group, click the action menu, and then click **Preview**.

## Create a Single Send

1. From the left-hand navigation, select **Marketing**.
1. Select **Single Sends**.
1. To create a new one-to-many email, click **Create Single Send**.
1. Select the template that you want to use for your email.
<br> You can select a blank template, a custom template that you have already created, or one of SendGrid's responsive pre-built templates. For more information, see [Marketing Templates]({{root_url}}/ui/sending-email/working-with-marketing-templates/).

<call-out>

You can also create a template from an existing Single Send by selecting the action menu next to the email you'd like to reuse and selecting **Create Template**.

</call-out>

5. Select an editor.
<br> You can choose between the **Design Editor** and the **Code Editor**.

![]({{root_url}}/img/choose-editor.png)

<call-out>

The [**Design Editor**]({{root_url}}/ui/sending-email/editor/#the-design-editor) offers users powerful drag & drop editing tools, making it possible to build beautiful emails using a library of content modules like text boxes,images, buttons and more. For those familiar with HTML, there are options to edit the HTML of individual modules, drag in a custom code module, or to import an entire HTML email with drag & drop markup.

The [**Code Editor**]({{root_url}}/ui/sending-email/editor/#the-code-editor) provides users who are importing, editing, or crafting custom HTML a robust, IDE-like environment, featuring side-by-side code and preview panes, syntax highlighting, error flagging and image management.

</call-out>

Inside the Design Editor, you use the **Settings**, **Tags** and **Build** tabs to design and configure your email.
Inside the Code Editor, you can click the left **Settings** tab to expand the settings window, and then you can configure your email using the **Settings** and **Tags** tabs.

![]({{root_url}}/img/design-editor-preview.png "Design Editor Preview")

6. Define key settings like *From Sender*, *Email Subject*, *Preheader*, *Recipients*, and *Scheduling* by filling in the fields in the **Settings** tab.

<call-out type="warning">

When selecting segments, make sure you are limiting your selection to 10 segments.

</call-out>

<call-out>

If you have dedicated IPs, you can set up [IP Pools]({{root_url}}/ui/account-and-settings/ip-pools/) that allow you separate your traffic and potentially enhance your deliverability by protecting your sender reputation. To utilize IP pools for Single Sends, navigate to **Settings** and from the IP Pool drop-down, select the IP pool you wish to use.

</call-out>

7. Add your custom content by clicking the **Build** tab in the Design Editor, or by editing the HTML code in the Code Editor.

![]({{root_url}}/img/build-tab.png "Build tab")

<call-out>

Make sure to include the [{{{unsubscribe}}}]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/) tag to test and send your campaign.

For more information about customizing your campaign, see [Using the Design Editor]({{root_url}}/ui/sending-email/editor/#the-design-editor) or [Using the Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor).

</call-out>

## Sending your First Email

<iframe src="https://player.vimeo.com/video/385339044" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

1. Once you’ve finished editing your email, you can see what it looks like by saving your draft, hovering over the action menu, and then clicking **Preview**.
2. If you haven't already, return to **Settings** to select which contacts will receive your email by clicking the **Send To** field under **Recipients**.
3. You can test your email settings in your Single Send and see it before sending it to a large audience by entering up to ten email addresses and clicking **Send Test**. Additionally, we offer [Email Testing]({{root_url}}/ui/sending-email/email-testing/) as an add-on for both Automation and Single Sends so you can see what your email looks like across different operating systems, browsers, and inboxes.
4. Once your email is ready to go, click **Send**.

 ##	Additional Resources

- [Sending with Email API]({{root_url}}/for-developers/sending-email/api-getting-started/)
- [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
- [Getting Started with Automation]({{root_url}}/ui/sending-email/getting-started-with-automation/)
- [Reading your invoice]({{root_url}}/ui/account-and-settings/reading-your-invoice/)

