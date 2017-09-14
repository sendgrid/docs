---
layout: page
weight: 0
title: Create and Manage Recipients
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

{% anchor h2 %}
Create Recipients
{% endanchor %}

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/YAgfiz4NMms?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

{% anchor h3 %}
Step 1 — Create New List
{% endanchor %}

You will need to decide on a name for the list in order to identify it later. To create the list, click on "Continue".

{% anchor h3 %}
Step 2 — Add Recipients
{% endanchor %}

Here you will add recipients to your list. You can choose one of three following methods:

#### Upload List

Only CSV files are accepted at this time. A standard file chooser will allow you to select a file on your local machine. After you upload your file, the system will parse it, auto-detect column headers, and display a sample (5 rows) of your list. You can position the "Email" and "Name" columns (required) by dragging and dropping over the suitable column(s). You can also add other columns to the list if needed. You can keep extra columns by simply defining a new column as desired. Any columns with undefined_tag in the column head, will be discarded. An example CSV file might look as follows:

{% codeblock %} name,email
"SG Support","support@sendgrid.com"
"Sales Team","sales@sendgrid.com" {% endcodeblock %}

SendGrid supports Unicode (UTF-8), ASCII, and extended ASCII characters. When importing your list into SendGrid, make sure that the characters are all encoded as UTF-8 in order to prevent syntax errors from occurring.

#### Add Recipients Manually

Manual additions can be done following the same guidelines as the "Upload List" above. You need to fill the "Name" and "Email" columns and define extra columns manually if necessary. You can also click "Add Rows" and "Add Columns" in order to expand your manually generated list as needed. Click "Save" to save the recipients.

#### External URL

You can also retrieve your list from an external URL where a CSV file is hosted. You must specify the URL, and then import the list into the marketing email wizard following the same column-based rules described above.
{% info %}
You must include a connection protocol in the URL i.e. http:// or ftp://
{% endinfo %}

{% info %}
Note: you need to click the "Check" link to see the preview of the list and re-arrange columns
{% endinfo %}

{% anchor h3 %}
Step 3 — Verify New List
{% endanchor %}

Here you can see email addresses uploaded from the previous step and you can batch-delete the ones you don't need. Verify - will just save the list and redirect to My Recipient Lists.

{% anchor h2 %}
Manage Recipients
{% endanchor %}

{% anchor h3 %}
Overview
{% endanchor %}

Here you can see your previously created recipient lists with the following information:

-   List name
-   Contacts (total \# of Recipients in list)
-   Open rate
-   Click rate

You can filter the recipient lists by name, using the search form at the top of the page.

{% anchor h3 %}
Update List
{% endanchor %}
This lets you update your list by adding bulk contacts (using the same steps as creating a new list).

{% anchor h3 %}
Batch Actions
{% endanchor %}

The available batch actions for a list are:

-   Copy emails from the current list to a selected list
-   Move emails from the current list to a selected list
-   Delete emails from the current list

In order to facilitate these operations, you may search certain emails by using the Search field.

The exact steps to follow in order to take the Copy / Move actions are:

-   Select the emails by checking them.
-   Select the action (Copy / Move).
-   Click "Save".
-   Confirm the action (OK or Cancel).

The exact steps to follow in order to take the Delete actions are:

-   Select the emails by checking them.
-   Click "Delete".
-   Confirm the action (OK or Cancel).

{% info %}
If you try to copy or move emails that already exist at the target destination, this operation will fail for those emails.
{% endinfo %}

{% anchor h3 %}
Stats
{% endanchor %}

This page shows you delivery stats for this list, by default, this displays stats for all marketing email sent to this list. You can view, print, or download this information to excel. You can also select subsets of stats for this list, i.e. stats for just one marketing emailsent to this list.

{% anchor h3 %}
Download to Excel
{% endanchor %}

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/zrovEyBKDv4?list=UUY6NAKPOZkBaMO4-KJ6dWRA" frameborder="0" allowfullscreen></iframe>
</div>

Allows you to export the stats into an XLS file which you can save locally.

{% anchor h3 %}
Print View
{% endanchor %}

Displays the marketing email graph and tabular analytics in a convenient printable format.

Export

Allows you to export email addresses from the list based on type. This can be the entire list or a subset of the list. Types include:

-   Usable Emails
-   Bounced Emails
-   Blocked Emails
-   Invalid Emails
-   Unsubscribed Emails
-   Spam Reports

{% anchor h3 %}
Manage Unsubscribes
{% endanchor %}

In this page you may see various types of recipients:

-   Bounced Emails
-   Blocked Emails
-   Invalid Emails
-   Unsubscribed Emails
-   Spam Reports

The default category is "Unsubscribe". In order to view other unsubscribe categories you can use the drop down menu to select other categories.

You can take the following actions depending on which category you want to make changes to:

-   Resubscribe (you can select which addresses to resubscribe to your list).
-   Resubscribe All (you can resubscribe all the emails to a list by a category).
-   Upload (you can upload a new list of resubscribes or unsubscribes to a your list).

{% anchor h3 %}
Subscription Widget
{% endanchor %}

<li>
This form enables your visitors to subscribe to your marketing email directly from your website.

</li>
#### Generate Subscription Widget embedded code

<div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
<meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/fkRnX3kuMMU?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

On the "Manage Recipients Lists" page, you can click on the "Subscription Widget" link under a certain list. This will open a pop-up where you will have to input the domain where the widget will be used. The domain is mandatory because it will be used to validate the request for adding the recipient into the SendGrid database. Once the domain is filled in, you can click on Generate Widget Code button.

{% anchor h3 %}
Use the embedded code
{% endanchor %}

Once the embed code is generated, you may use it on your website. By default the widget displays all fields used by the newsletter at the time of generation, you may modify that, by changing the HTML provided. The widget has a robust API that allows for advanced configuration and styling. The most current documentation for this widget may be found [in its repository on Github](https://github.com/sendgrid/sendgrid-subscription-widget#readme).
