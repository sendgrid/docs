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
* [Before you Begin](#-Before-you-Begin)
* [Adding a Sender](#-Adding a Sender)
* [Adding Sender Information to a Campaign](#-Adding-Sender-Information-to-a-Campaign)
* [Additional Resources](#-Additional-Resources)

<iframe src="https://player.vimeo.com/video/120703745" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<page-anchor el="h2">
Before you Begin
{% endanchor h2 %}

Before you begin, go to your SendGrid [account settings]({{site.app_url}}/user/account) to verify that your timezone and account email address are correct. Verifying your account information ensures that when you upload contacts, you receive notifications and that we deliver scheduled emails at the correct time.

<page-anchor el="h2">
Adding a Sender
{% endanchor h2 %}

The footer of your emails automatically contains your sender information, because CAN-SPAM regulations require this information in every email you send.

*To add a sender:*

1. Navigate to **Marketing Campaigns** and then click **Senders**.
1. In the top right corner of the Sender Management page, click **Create New Sender**.
1. Fill in all of the fields on the page and then click **Save**.

    * **From Name** - This is a user-friendly name that is displayed to the user when they receive their email.
    * **From Email Address** - This will display to the user as the email address who sent this email.
    * **Reply To** - If your user hits reply in their email, the reply will go to this address.
    * **Company Address, City, State, Zip Code, Country** - The address of your business, because CAN-SPAM regulations require this information in every email you send.
    * **Nickname** - A label for your sender identity to help you identify it more quickly - it is not visible to your recipients.
<br></br>
1. Check the email account associated with your SendGrid account and click the link in the email to verify the Sender email.

{% info %} You may create up to 100 unique senders.{% endinfo %}

{% warning %}
You must verify your sender identity before you can edit it or use it to send a campaign.
{% endwarning %}
   To resend your verification email, hover over the Action Menu on the Sender Management page and select **Resend Verification**.
{% info %}
If you have a [verified whitelabel domain]({{root_url}}/User_Guide/Settings/Whitelabel/index.html) and your sender email address matches that domain exactly, your sender identity will automatically verify.
{% endinfo %}

{% warning %}
Once you schedule a campaign, you cannot delete the sender identity associated with that campaign.
{% endwarning %}

<page-anchor el="h2">
Adding Sender Information to a Campaign
</page-anchor>

You can insert your sender identity information into your campaigns using the following tags within your campaign or template content:

1. **[Sender_Name]** - The sender's name.

1. **[Sender_Address]** - The sender's street address.

1. **[Sender_City]** - The sender's city.

1. **[Sender_State]** - The sender's state.

1. **[Sender_Zip]** - The sender's zip.

1. **[Sender_Country]** - The sender's country.

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

<page-anchor el="h3">
Additional Resources
</page-anchor>

- [Whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)
