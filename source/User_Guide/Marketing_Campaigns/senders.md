---
layout: page
weight: 90
title: Sender Identities
navigation:
  show: true
seo:
  title: Sender Identities
  override: true
  description:
---

<iframe src="https://player.vimeo.com/video/120703745" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Verify Your Account Settings
{% endanchor h2 %}

Go to your SendGrid [account settings]({{site.app_url}}/user/account) to modify or verify that your timezone and account email address are correct. This will ensure that you receive notifications when contacts have been uploaded and that your scheduled sends are delivered at the correct time.

{% anchor h2 %}
Create Your Sender Identity
{% endanchor h2 %}

{% warning %}
Your sender identity must be verified before you may edit it or use it to send a campaign.
{% endwarning %}

{% warning %}
When you schedule a campaign, the sender identity used will not be able to be deleted.
{% endwarning %}

Whenever you send an email, in order to be CAN-SPAM compliant, you need to provide some basic sender information in your
emails. We have set up a [sender management feature]({{site.marketing_campaigns_url}}/senders) for you,
so that you can input the right information and add this to your emails.

When you click “Create New Sender,” you will be shown a form where you can set up a sender identity.

{% info %}
You can create up to 100 unique sender identities.
{% endinfo %}

![]({{root_url}}/images/sender_identity_1.png "Sender Identities")

* **From Name** - This is the display or “user friendly” name that is displayed to the user when they receive their email.
* **From Email Address** - This will display to the user as the email address who sent this email.
* **Reply-To Email Address** - If your user hits reply in their email, the reply will go to this address.
* **Company Address, City, State, Zip Code, Country** - The address of your business, for CAN-SPAM compliance.
* **Nickname** - This is the name of this sender identity, which can be useful for identifying this identity in your list of senders. It will not be visible to your recipients.

Once you fill out this information and hit “save,” you will then be able to verify your sender.

{% anchor h2 %}
Verifying Your Sender Identity
{% endanchor %}

We will not allow you to send with a sender identity that is not verified. This is a security feature that helps you be in compliance with [CAN-SPAM](http://www.business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business) when you send through SendGrid.

To verify your identity, create the identity following the instructions above. Once you click “save,” we will send an email to the address you specified.

{% info %}
Your verification link is only valid for 48 hours. After that time you will need to start the verification process over.
{% endinfo %}

1. Check your email for the verification email we sent.
2. Click the link provided in the verification email.
3. Your sender identity is now verified!

To resend your verfication email, click the gear icon for this sender and select 'view' from the menu.

{% anchor h2 %}
Automatically Verify Your Sender Identity
{% endanchor %}

If you have a [verified whitelabel domain]({{root_url}}/User_Guide/Settings/Whitelabel/index.html) and your sender email address matches that domain exactly, your sender identity will automatically verify.

{% anchor h2 %}
Use Sender Identity Information In Your Campaigns
{% endanchor %}

You can insert your sender identity information into your campaigns using the following tags within your campaign or template content.

**[Sender_Name]** - The sender's name.

**[Sender_Address]** - The sender's street address.

**[Sender_City]** - The sender's city.

**[Sender_State]** - The sender's state.

**[Sender_Zip]** - The sender's zip.

{% anchor h3 %}
Display Sender Info
{% endanchor %}
If you'd like to show your full sender's address and information you can use the tags like so:

{% codeblock %}
[Sender_Name]
[Sender_Address]
[Sender_City], [Sender_State] [Sender_Zip]
{% endcodeblock %}

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/index.html">Marketing Campaigns Overview</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html">Custom Fields</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
