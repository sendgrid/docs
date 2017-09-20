---
layout: page
weight: 70
title: Senders
navigation:
  show: true
seo:
  title: Senders
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/120703745" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Before you begin
{% endanchor h2 %}

Before you begin, go to your SendGrid [account settings]({{site.app_url}}/user/account) to verify that your timezone and account email address are correct. Verifying your account information ensures that when you upload contacts, you receive notifications and that we deliver scheduled emails at the correct time.

{% anchor h2 %}
Adding a Sender
{% endanchor h2 %}

This is to ensure that you are CAN-SPAM compliant. The footer of your emails includes the information you provide here.

*To add a sender:*

1. Navigate to **Marketing Campaigns** and then click **Senders**.
1. In the top right corner of the Sender Management page, click **Create New Sender**.
1. Fill in all of the fields on the page and then click **Save**.
    * **From Name** - This is user-friendly name that is displayed to the user when they receive their email.
    * **From Email Address** - This will display to the user as the email address who sent this email.
    * **Reply To** - If your user hits reply in their email, the reply will go to this address.
    * **Company Address, City, State, Zip Code, Country** - The address of your business which is required for CAN-SPAM compliance.
    * **Nickname** - This is the name of this sender identity, which can be useful for identifying this identity in your list of senders. It will not be visible to your recipients.
1. Check the email account associated with your SendGrid account and click the link in the email to verify the Sender email.

{% warning %}
You must verify your sender identity before you can edit it or use it to send a campaign.
{% endwarning %}

   To resend your verification email, hover over the Action Menu on the Sender Management page and select Resend Verification.

{% info %}
If you have a [verified whitelabel domain]({{root_url}}/User_Guide/Settings/Whitelabel/index.html) and your sender email address matches that domain exactly, your sender identity will automatically verify.
{% endinfo %}

{% warning %}
Once you schedule a campaign, you cannot delete the sender identity associated with that campaign.
{% endwarning %}

{% anchor h2 %}
Using Your Preset Sender Information In Your Campaigns
{% endanchor %}

You can insert your sender identity information into your campaigns using the following tags within your campaign or template content:

**[Sender_Name]** - The sender's name.

**[Sender_Address]** - The sender's street address.

**[Sender_City]** - The sender's city.

**[Sender_State]** - The sender's state.

**[Sender_Zip]** - The sender's zip.

**[Sender_Country]** - The sender's country.

*To add tags to your campaign:*

1. Navigate to the **Build** tab.
1. Click and drag a Text module into your campaign body.
1. Navigate to the **Tags** tab.
1. Select the copy icon next to the tag you want to add to your campaign.
1. Click in the text module you added previously and paste the tag into the module.

To show your sender's full address and information in the footer of the email, SendGrid recommends adding the tags as shown:
{% codeblock %}
[Sender_Name]
[Sender_Address]
[Sender_City], [Sender_State] [Sender_Zip]
{% endcodeblock %}

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
