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

*To add a sender*

1. Click **Create New Sender**
1. Fill out the entire **Add Sender Identity** form.

   This form is to ensure that you are CAN-SPAM compliant. The footer of your emails includes the information you provide here.

   * **From Name** - This is user-friendly name that is displayed to the user when they receive their email.
   * **From Email Address** - This will display to the user as the email address who sent this email.
   * **Reply-To Email Address** - If your user hits reply in their email, the reply will go to this address.
   * **Company Address, City, State, Zip Code, Country** - The address of your business, for CAN-SPAM compliance.
   * **Nickname** - This is the name of this sender identity, which can be useful for identifying this identity in your list of senders. It will not be visible to your recipients.
   </br>
   ![]({{root_url}}/images/sender_identity_1.png "Sender Identities")

1. After you fill out the form, click **Save**.
1. Check the email account and click the link in the email to verify the Sender email.
   * To resend your verification email, click the action menu on the Sender Management page and select Resend Verification.
   * If you have a [verified whitelabel domain]({{root_url}}/User_Guide/Settings/Whitelabel/index.html) and your sender email address matches that domain exactly, your sender identity will automatically verify.


{% info %}
Your verification link is only valid for 48 hours. After that time you will need to restart the verification process.
{% endinfo %}

{% warning %}
You must verify your sender identity before you can edit it or use it to send a campaign.
{% endwarning %}

{% warning %}
Once you schedule a campaign, you won't be able to delete the sender identity used.
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

To show your sender's full address and information in the footer of the email, add the tags as shown:

{% codeblock %}
[Sender_Name]
[Sender_Address]
[Sender_City], [Sender_State] [Sender_Zip]
{% endcodeblock %}
