---
layout: page
weight: 90
seo:
  title: Migrating Recipient Lists
  description:
title: Migrating Recipient Lists
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is now retired.
As a safety net, you may **retrieve** data for a short grace period. Please act now to download your data or migrate any assets to Marketing Campaigns.
{% endwarning %}

For assistance please [contact our support team](https://support.sendgrid.com/). Login to see your contact options.

<iframe src="https://player.vimeo.com/video/136621131" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h2 %}
Exporting Your Lists from Legacy Newsletter
{% endanchor %}

{% info %}
Please note that Legacy Newsletter refers to the individuals you send your marketing emails to as **recipients** whereas Marketing Campaigns refers to them as **contacts**.
{% endinfo %}

While you cannot automatically migrate your Legacy Newsletter recipient lists into Marketing Campaigns, the manual migration process is quite simple.

Navigate to the Legacy Newsletter by clicking **Marketing** on the SendGrid dashboard, then clicking **Legacy Newsletter**.

Click **Recipients** and select **Manage** to see a list of your current Legacy Newsletter lists.

Locate the recipient list that you want to migrate, hover over this list with your cursor to view possible actions, and click **Export** from the list that appears.

Uncheck all options except for **Usable Emails**, since we only want to export valid email addresses.

Tip: You can uncheck **Email Address Type** to deselect all options, then simply recheck **Usable Emails**.

{% info %}
Your Legacy Newsletter unsubscribes are not automatically migrated when you move your recipient lists. You will need to [migrate your unsubscribes]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_unsubscribes.html) from Legacy Newsletter to Marketing Campaigns as a separate step.
{% endinfo %}

Finally, click **Export** to begin downloading your list. Remember that if your list is quite large, this process may take several minutes.

![]({{root_url}}/images/export_recipient_lists.gif)

{% anchor h2 %}
Preparing Your List for Marketing Campaigns
{% endanchor %}

In order for your Legacy Newsletter recipient list to successfully upload to Marketing Campaigns, you need to properly format the column headers in the first row of your .csv file.

Column headers will become the custom fields you can leverage to power segmentation or to personalize your emails. Custom fields can be formatted as text, number, or date fields as described below.

{% info %}
Custom Fields can be added, edited, or deleted with the Marketing Campaigns interface after they've been uploaded.
{% endinfo %}

First, there are three reserved custom fields that require specific formatting for the column header:

**Email** (required column)

* The column containing all of your recipient email addresses must have the column header "email".

**First name** (optional column)

* The column header containing your recipients’ first names must be formatted as either First_Name, FName, First-Name, First Name, or FirstName

**Last name** (optional column)

* The column header containing your recipients’ last names must have be formatted as either Last_Name, LName, Last-Name, Last Name, or LastName

{% info %}
Please note that these fields are not capitalization-sensitive.
{% endinfo %}

All other fields must be formatted either as text, number, or date fields.

Text fields must only contain letters A-Z, numbers 0-9, spaces, and underscores. Any special characters such as accent marks or pound signs will need to be removed or updated.

Number fields  can **ONLY** contain numbers, either as integers or decimals. No dashes, slashes, spaces, letters, or any other punctuation marks. This requirement makes it possible to employ powerful conditional logic (ie, “is greater than”) to create dynamic segments of your recipients.

Date fields must match one of the following formats:

* MM/DD/YYYY
* MM/D/YYYY
* M/D/YYYY
* M/DD/YYYY

{% warning %}
Date fields **must** include all four digits of the year.
{% endwarning %}

Once you have ensured that each of the above conditions is met, save your list as a .csv file.

**You must save your list as a .csv file, not a .xls file!**

{% anchor h2 %}
Uploading Your List to Marketing Campaigns
{% endanchor %}

To upload your properly formatted .csv file to Marketing Campaigns, navigate to your SendGrid dashboard by clicking on your **Account Name** in the upper right hand corner of the Legacy Newsletter interface and select **Account Overview**.

From your SendGrid Dashboard, click **Marketing** and select **Contacts** under **Marketing Campaigns**.

In the upper right-hand corner, click **Add List or Segment** and select **Upload CSV**.

You may either create a new list for your migrated recipients, choose an existing list to add these recipients to, or simply add these contacts to “All Contacts”.

Either drag and drop your .csv file into the gray box, or click the link "or select it from your computer".

![]({{root_url}}/images/upload_csv.gif)

In the modal window that appears, verify your header field names and types. Make sure to select **New Text Field** for any names or strings of characters and numbers, **New Number Field** for all integer or decimal fields, and **New Date Field** for all dates.

Once you have configured your new fields, click **Save** to complete the migration process.

You will receive an email confirmation once SendGrid has finished processing your new contacts and they are ready for use.

If you have development resources and would like to use our API to migrate your Legacy Newsletter lists into Marketing Campaigns, please visit our API Reference:

* [Legacy Newsletter Lists API]({{root_url}}/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/lists.html)
* [Marketing Campaigns Contacts API]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html)


{% anchor h2 %}
Replacing the Legacy Newsletter Subscription Widget
{% endanchor %}

The [Legacy Newsletter subscription widget](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/recipients.html#-Subscription-Widget) will no longer function once Legacy Newsletter is retired on 9/30/17. 

As you migrate to Marketing Campaigns, you can leverage any of the following best-in-class email list growth integrations to manage your recipient signups: [Privy](https://privy.com/sendgrid/), [WisePops](https://support.wisepops.com/integrations/connect-wisepops-with-sendgrid), [JustUno](https://www.justuno.com/sendgrid-integrations.html), or [SendGrid’s Wordpress subscription widget](https://sendgrid.com/docs/Integrate/Tutorials/WordPress/subscription_widget.html?mc=email&mcd=Legacymigration&utm_medium=email&utm_source=nurture&cvosrc=email.nurture.Legacymigration&utm_campaign=Legacymigration).
