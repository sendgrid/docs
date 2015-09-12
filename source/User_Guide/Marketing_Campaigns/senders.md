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

<iframe src="//player.vimeo.com/video/120703745" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Verify Your Account Settings
{% endanchor h2 %}

Go to your SendGrid [account settings]({app_url}/user/account) to modify or verify that your timezone and account email address are correct. This
will ensure that you receive notifications when contacts have been uploaded and that your scheduled sends are delivered at the correct time.

{% anchor h2 %}
Create Your Sender Identity
{% endanchor h2 %}

Whenever you send an email, in order to be CAN-SPAM compliant, you need to provide some basic sender information in your
emails. We have set up a [sender management feature]({marketing_campaigns_url}/senders) for you,
so that you can input the right information and add this to your emails.

When you click “Create New Sender,” you will be shown a form where you can set up a sender identity.

![]({{root_url}}/images/sender_identity_1.png "Sender Identities")

* **From Name** - This is the display or “user friendly” name that is displayed to the user when they receive their email.
* **From Email Address** - This will display to the user as the email address who sent this email.
* **Reply-To Email Address** - If your user hits reply in their email, the reply will go to this address.
* **Company Address, City, State, Zip Code, Country** - The address of your business, for CAN-SPAM compliance.
* **Nickname** - This is the name of this sender identity, which can be useful for identifying this identity in your list of senders. It will not be visible to your recipients.

Once you fill out this information and hit “save,” you will then be able to select and attach this sender identity from your campaign management page.

<div class="row">
    <div class="col-md-6 text-left">
        <strong>&lsaquo;&nbsp;</strong><a href="{{root_url}}/User_Guide/Marketing_Campaigns/index.html">Marketing Campaigns Overview</a>
    </div>

    <div class="col-md-6 text-right">
         <a href="{{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html">Custom Fields</a><strong>&nbsp;&rsaquo;</strong>
    </div>
</div>
