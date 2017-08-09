---
layout: page
weight: 99
title: Sending an Email
navigation:
  show: true
seo:
  title: Sending an Email
  override: true
  description: Send your first email using the Marketing Campaigns tool.
---

Before sending your first campaign, you need to do the following:

- [Create an Account](https://sendgrid.com/pricing/?mc=SendGrid%20Documentation)
- [Add a Sender](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/senders.html)
- [Upload Contacts](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html)
- [Add an Unsubscribe Group](https://sendgrid.com/docs/User_Guide/Suppressions/advanced_suppression_manager.html)
- [Segment Your Contact List](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/lists.html) (Optional)

*To send your first email:*

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.  

1. Click **Create Campaign**.To create a campaign from an existing one, find the version you want to use and click the **action menu** next to the campaign and then select **Edit** or **Duplicate**.
![]({{root_url}}/images/duplicate_campaign.png)

1. Select the template that you want to use for your campaign. You can select a **Blank Template**, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Marketing Templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html).

1. Select an editor. You can choose between the **Design Editor** and the **Code Editor**.
![]({{root_url}}/images/choose_editor.png)

The Code Editor provides users who are importing, editing, or crafting custom HTML a robust environment to upload images, write HTML, and configure their campaign without interference from the HTML generating WYSIWYG tools.  

The Design Editor offers users powerful drag & drop WYSIWYG editing tools making it possible for anyone to build beautiful emails, regardless of HTML knowledge. For those familiar with HTML looking to leverage the design editor you can modify the HTML of individual content modules.

{% anchor h3 %}
Designing Your Campaign
{% endanchor h3 %}

Depending on your editor selection, you use different methods to design your campaign. Both the Design Editor and the Code Editor have the same three tabs: **Settings**, **Tags**, and **A/B Testing**.

1. Edit your campaign by filling in the fields in the **Settings** Tab.  

1. Add your custom content. For more information about customizing your campaign, see [Using the Design Editor]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html) or [Using the Code Editor]({{root_url}}/User_Guide/Marketing_Campaigns/code_editor.html).  

1. Once you’ve finished editing your campaign, you can see what it looks like by clicking **Preview**.

1. To send a test email, enter the email addresses you want to send your campaign to and then click **Send Test**.  

1. If you would like to test the effectiveness of your email subject or content, you can set up an A/B test. For more information on A/B testing, see [[A/B Testing](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/a_b_testing.html)].

1. To send your campaign, click **Send Campaign**.

{% info %}
To schedule your campaign to send at a later time or date, toggle the **Send Immediately** button to **Off**, and enter the date and time you want the campaign to be sent.
{% endinfo %}

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Campaign Statistics](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/campaign_stats.html) 
- [Billing](https://sendgrid.com/docs/Classroom/Basics/index.html#Billing)
