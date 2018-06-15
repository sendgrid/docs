---
layout: page
weight: 99
title: How to Send Email
navigation:
  show: true
seo:
  title: How to Send Email
  override: true
  description: Send your first email using the Marketing Campaigns tool.
---
<iframe src="https://player.vimeo.com/video/221496578" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If you want to send email programatically, see the [API reference]({{root_url}}/API_Reference/api_v3.html), or the [SMTP Reference]({{root_url}}/API_Reference/SMTP_API/using_the_smtp_api.html).

Before sending your first campaign, you need to do the following:

- [Create an Account](https://sendgrid.com/pricing/?mc=SendGrid%20Documentation) 
- [Add a Sender](https://sendgrid.com/docs/help-support/sending-email/senders.html) 
- [Upload Contacts](https://sendgrid.com/docs/help-support/managing-contacts/adding-contacts.html) 
- [Add an Unsubscribe Group](https://sendgrid.com/docs/help-support/sending-email/index-suppressions.html) 
- [Segment Your Contact List](https://sendgrid.com/docs/help-support/managing-contacts/managing-contact-list.html) (Optional) 

*To send your first campaign:*

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**. 

1. Click **Create Campaign**. 
<br> To create a campaign from an existing one, find the version you want to use and click the **action menu** to the far right of the campaign and then select **Edit** or **Duplicate**.
![]({{root_url}}/images/campaigns_dashboard_categories_search.png)

1. Select the template that you want to use for your campaign. 
<br> You can select a **Blank Template**, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Marketing Templates](https://sendgrid.com/docs/help-support/sending-email/create-and-edit-transactional-templates.html).

1. Select an editor. 
<br> You can choose between the **Design Editor** and the **Code Editor**.
![]({{root_url}}/images/choose_editor.png)

The Code Editor provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from the HTML generating WYSIWYG tools. 

The Design Editor offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

{% anchor h3 %}
Designing Your Campaign
{% endanchor h3 %}

Depending on your editor selection, you use different methods to design your campaign. Both the Design Editor and the Code Editor have the same three tabs: **Settings**, **Tags**, and **A/B Testing**.

1. Edit your campaign by filling in the fields in the **Settings** Tab. 

1. Add your custom content. 
<br> For more information about customizing your campaign, see [Using the Design Editor]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html) or [Using the Code Editor]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html). 

1. Once you’ve finished editing your campaign, you can see what it looks like by clicking **Preview**.

1. To send a test email, enter the email addresses you want to send your campaign to and then click **Send Test**. 

1. If you would like to test the effectiveness of your email subject or content, you can set up an A/B test. For more information, see [A/B Testing](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/a_b_testing.html).

1. Add a list or segment of recipients to receive your campaign.

1. To send your campaign, click **Send Campaign**. 

{% anchor h3 %}
Scheduling Your Campaign
{% endanchor h3 %}

*To schedule your campaign:*

1. To send your campaign at a later time or date, toggle the **Send Immediately** button to **Off**. 
1. Enter the date and time you want the campaign to be sent.
1. Click **Schedule Campaign**.

{% info %}
If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.
{% endinfo %}

{% warning %}
Be sure your account is set to the correct time zone in order to ensure that your emails get sent at the time you intend.
{% endwarning %}

*To change your time zone:* 

1. From the left-hand navigation select **Settings**. 
1. Click **Account Details** or go to https://app.sendgrid.com/settings/account.  
1. Scroll to the bottom of the page, find **TIME ZONE**, and ensure your desired timezone is correct. 

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Campaign Statistics](https://sendgrid.com/docs/Help/Analytics_and_Reporting/campaign_stats.html) 
- [Billing](https://sendgrid.com/docs/Help/Account_and_Settings/billing.html)
- [Sending with the API]({{root_url}}/API_Reference/api_v3.html)
- [Sending with SMTP]({{root_url}}/API_Reference/SMTP_API/using_the_smtp_api.html)
