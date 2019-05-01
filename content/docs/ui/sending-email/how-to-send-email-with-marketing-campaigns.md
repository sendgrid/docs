---
layout: page
weight: 99
title: How to Send Email with Marketing Campaigns
group: marketing-campaigns
navigation:
  show: true
seo:
  title: How to Send Email with Marketing Campaigns
  override: true
  description: Send your first email using the Marketing Campaigns tool.
---
<iframe src="https://player.vimeo.com/video/305551346" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If you want to send email programmatically using Twilio SendGrid's Email API, see the [API reference]({{root_url}}/api-reference/) or the [SMTP Reference]({{root_url}}/for-developers/sending-email/getting-started-smtp/).

Before sending your first campaign, you need to do the following:

- [Create an Account](https://sendgrid.com/pricing/?mc=SendGrid%20Documentation)
- [Add a Sender]({{root_url}}/ui/sending-email/senders/)
- [Upload Contacts]({{root_url}}/ui/managing-contacts/adding-contacts/)
- [Add an Unsubscribe Group]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/)
- [Segment Your Contact List]({{root_url}}/ui/managing-contacts/segmenting-your-contacts/) (Optional)


<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">


### Do you want expert help to get your email program started on the right foot?


Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.


</call-out-link>


*To send your first campaign:*

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.

1. To create a new campaign, click **Create Campaign**.
<br>To create a campaign from an existing one, find the version you want to use and hover over the **action menu** to the far right of the campaign. Select **Duplicate**.<br>
<br> If you have an existing draft, find the version you would like to continue working on, hover over the **action menu** to the far right of the campaign, and then select **Edit**.
![]({{root_url}}/images/campaigns_dashboard_categories_search.png)

1. Select the template that you want to use for your campaign.
<br> You can select a blank template, a custom template that you have already created, or one of SendGrid's responsive pre-built templates. For more information, see [Marketing Templates]({{root_url}}/ui/sending-email/working-with-marketing-templates/).

1. Select an editor.
<br> You can choose between the **Design Editor** and the **Code Editor**.
![]({{root_url}}/images/choose_editor.png)

The Design Editor offers users powerful drag & drop, WYSIWYG editing tools, making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML, there are options to edit the HTML of individual modules, drag in a custom code module, or to import an entire HTML email with drag & drop markup.

The Code Editor provides users who are importing, editing, or crafting custom HTML a robust environment with side-by-side code and preview panes, syntax highlighting, code completing, and image management.

 ## 	Building Your Campaign

Regardless of your editor selection, you use the same 4 tabs to design and configure your campaign: **Settings**, **Tags**, and **A/B Testing**. 

<call-out>
You can work on building your campaign in any order you like, no need to start with settings before jumping into Build or A/B testing. 
</call-out>

1. Define key settings like From Sender, Email Subject, Preheader, Recipients, and Scheduling by filling in the fields in the **Settings** Tab.

1. Add your custom content by clicking the Build tab. Make sure to include the [[unsubscribe]]({{root_url}}/ui/sending-email/create-and-manage-unsubscribe-groups/) tag to test and send your campaign.

For more information about customizing your campaign, see [Using the Design Editor]({{root_url}}/ui/sending-email/editor/#the-design-editor) or [Using the Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor).

3. Once you’ve finished editing your campaign, you can see what it looks like by clicking **Preview**.

4. To send a test email, return to the Settings tab and open Recipients. Under Test Email Addresses you can enter the email address(es) you want to send your test campaign to, and then click **Send Test**. Please note, in order to send your test email and any subsequent live campaigns, you must have, at a minimum, a verified sender, subject line, and unsubscribe group or link included.

5. If you would like to test the effectiveness of variations of your email subject line or content, you can set up an A/B test. For more information, see [A/B Testing]({{root_url}}/ui/sending-email/a-b-testing/).

6. If you haven't already, return to Settings to select which contacts will receive your email by clicking the **Send To** field under **Recipients**.

<call-out>

Campaigns can be sent to either a list or a segment. You can manage your lists and segments within [Contacts]({{root_url}}/ui/managing-contacts/adding-contacts/).

</call-out>

7. When you're done building your campaign, click either **Schedule Campaign** or **Send Campaign** depending on whether you've toggled Send Immediately on or off in the Scheduling section of the Settings tab.

<call-out>

Message size limit:  The total message size should not exceed 20MB. This includes the message itself, headers, and the combined size of any attachments.

</call-out>

 ##	Scheduling Your Campaign

*To schedule your campaign:*

1. To send your campaign at a later time or date, toggle the **Send Immediately** button to **Off**.
1. Enter the date and time you want the campaign to be sent.
1. Click **Schedule Campaign**.

<call-out type="warning">

Please note: Any contacts that are added to a list or segment after a campaign is scheduled but prior to send **will receive** the campaign. Contacts for a campaign are retrieved at the time of send.

</call-out>

<call-out>

If possible, avoid scheduling for the top of the hour or half hour to avoid the busiest times for your recipients' inboxes. Sending at 10:53, for example, can help increase engagement.

</call-out>


<call-out type="warning">

Please note allowed special characters in email adresses that will not result as invalid. Without quotes, local-parts may consist of any combination of alphabetic characters, digits, or any of the special characters

 `! # $ % & ' * + - / = ?  ^ _ ` . { | } ~`

period (".") may also appear, but may not be used to start or end the local part, nor may two or more consecutive periods appear.

</call-out>

*To change your time zone:*
Your time zone is set at the account level. You'll need to save your draft and leave the editor to access these settings.
1. Click "Save Draft" from the top bar of your account
1. Click the back arrow found in the top left corner.
1. Near the bottom of the left-hand navigation, select **Settings**.
1. Click **Account Details**, or go to https://app.sendgrid.com/settings/account.
1. Scroll to the bottom of the page, find **TIME ZONE**, and correct it if necessary.

 ##	Additional Resources

- [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
- [Billing]({{root_url}}/ui/account-and-settings/billing/)
- [Sending with Email API]({{root_url}}/for-developers/sending-email/api-getting-started/)
- [Sending with SMTP]({{root_url}}/for-developers/sending-email/getting-started-smtp/)
