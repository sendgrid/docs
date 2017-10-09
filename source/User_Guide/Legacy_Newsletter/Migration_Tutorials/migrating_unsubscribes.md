---
layout: page
weight: 80
seo:
  title: Migrating Unsubscribes
  description:
title: Migrating Unsubscribes
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is now retired.
As a safety net, you may **retrieve** data for a short grace period. Please act now to download your data or migrate any assets to Marketing Campaigns.
{% endwarning %}

For assistance please [contact our support team](https://support.sendgrid.com/). Login to see your contact options.

<iframe src="https://player.vimeo.com/video/136013004" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

To honor the subscription preferences of your recipients as you migrate from Legacy Newsletter to Marketing Campaigns, you’ll need to manually migrate your Legacy Newsletter unsubscribes. Doing so will ensure that campaigns you send will not go to recipients who have previously opted out of your email.

Marketing Campaigns allows you to manage your unsubscribes more efficiently, making it easier to comply with the standards set by [CAN-SPAM]({{root_url}}/Glossary/can_spam.html)

* Unsubscribe groups allow your recipients to opt out of specific types of mail you send
* Once a user unsubscribes from a type of email you send (an unsubscribe group), they will not receive any email of that group, regardless of which list or segment they’re included on
* Recipient preferences will be honored whether you send mail via API or through Marketing Campaigns (point in blue box below)

Click [here]({{root_url}}/User_Guide/Suppressions/advanced_suppression_manager.html) for more general information about unsubscribe groups. To learn more about how to create unsubscribe groups specifically for Marketing Campaigns, click [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).

Manually migrating your unsubscribes from Legacy Newsletter to Marketing Campaigns will ensure that all of the recipients you have migrated maintain their subscription preferences.

{% info %}
It is important to note that unlike unsubscribes in Legacy Newsletter, unsubscribe groups apply to both email sent via Marketing Campaigns and any email sent over the API. This makes it much easier for you to respect your recipients' subscription preferences regardless of how you choose to send your email.
{% endinfo %}

{% anchor h2 %}
Exporting Your Unsubscribes from Legacy Newsletter
{% endanchor %}

To begin the migration process, navigate to your Legacy Newsletter Dashboard, click on **Recipients** and select **Manage**.

Decide which list you want to export the unsubscribes for, hover your cursor over that list, and click **Manage Unsubscribes**. If you would like, you may add additional unsubscribes to this list before you begin your export.

Once you have your list of unsubscribes, click **Export**. Make sure that **Unsubscribed Emails** is the only option checked and click **Export** to begin downloading a list of your unsubscribed recipients.

{% info %}
If you have a very large list of unsubscribed recipients, this may take several minutes.
{% endinfo %}

{% anchor h2 %}
Importing Your Unsubscribes into Marketing Campaigns
{% endanchor %}

You now have a .csv file of recipients who unsubscribed from a particular list you maintained in Legacy Newsletter. You’ll need to decide what type of mail, or unsubscribe group, would best align with the list they opted out of in Legacy Newsletter. For instance, if your list was called “Weekly Newsletter Recipients” your new unsubscribe group might be called “Weekly Newsletter.”

To create this new unsubscribe group, click your account name in the upper right hand corner and select **Account Overview**.

Under **Suppressions** in the left hand nav bar, click **Unsubscribe Groups**.

This is where you’ll enter the new unsubscribe group name and description of the type of mail a user would be opting into or out of. The name and description of your new unsubscribe group will be displayed to recipients who manage their email preferences in the future so make sure they clearly explain the types of email that pertain to this group.   

In our example, the name would be "Weekly Newsletter" and the description might be "Weekly summary of the week's top posts."

Click **Save** to add the new group.

Now that you have created a new unsubscribe group, it's time to import your exported Legacy Newsletter unsubscribes.

Click the **gear icon** next to your new unsubscribe group and select **Upload CSV**.

Drag and drop your exported .csv file into the grey box, or navigate to your file via the file browser, select it, and click **Save**.

{% anchor h2 %}
Using Your New Unsubscribe Group
{% endanchor %}

Now that you have successfully migrated a list of unsubscribed recipients from Legacy Newsletter into a new unsubscribe group, simply ensure that you specify this unsubscribe group when sending a campaign of this type, for instance, a weekly newsletter.

To do this while building a campaign, simply designate this unsubscribe group under **Recipients** in the **Settings** tab of the campaign builder.

![]({{root_url}}/images/select_unsubscribe_group.gif)

This will prevent the campaign from being delivered to recipients in that unsubscribe group.

For more general information on unsubscribe groups, please click [here]({{root_url}}/User_Guide/Suppressions/advanced_suppression_manager.html).

For a more indepth tutorial on how to use unsubscribe groups and unsubscribe links in Marketing Campaigns, click [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html).
