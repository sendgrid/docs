---
layout: page
weight: 0
title: Sync your SendGrid contacts with other apps
navigation:
  show: true
seo:
  title: Sync your SendGrid contacts with other apps
  description: Learn how to keep your SendGrid contacts in sync with 100+ other apps
  keywords: integrate, tutorial, contact sync, PieSync, Mailchimp, Zendesk, Salesforce, HubSpot, Quickbooks
---

Setting up a sync is as easy as following these steps:
1. [Create a PieSync account](#-Create-a-PieSync-account)
2. [Select your apps](#Select-your-apps)
3. [Authorise your apps](#Authorise-your-apps)
4. [Set up your sync configuration](#Set-up-your-sync-configuration)

{% anchor h2 %}
Create a PieSync account
{% endanchor %}

Sign up for a PieSync account [here](https://app.piesync.com/).

{% anchor h2 %}
Select your apps
{% endanchor %}

Select Sendgrid and the app you would like to sync it with from within the PieSync application.

{% anchor h2 %}
Authorise your apps
{% endanchor %}

To authorise, simply follow the steps as described below and make sure you meet the requirements to be able to sync. We need your API key.

** SENDGRID IMAGE 1 **

If you already authorized SendGrid account(s) in the past or in any other PieSync integration, you'll be able to skip the first part of the authorization and choose from your CONNECTED ACCOUNTS.

** SENDGRID IMAGE 2 **

{% anchor h2 %}
Set up your sync configuration
{% endanchor %}

From within the connection setup screen, you'll be able to manage the following:
1. Filters and actions.

[IF] Supported Conditions/Filters
   ALREADY EXISTING IN APP YOU SYNC WITH
   FIELD VALUES (INCLUDING CUSTOM FIELDS)

** SENDGRID IMAGE 3 **

[THEN] Supported Actions
   UPDATING FIELD VALUES (INCLUDING CUSTOM FIELDS)

** SENDGRID IMAGE 4 **

2. Default Mapping

Depending on the other app you're syncing with, you'll see a number of standard SendGrid fields being mapped by default. For instance, in a connection with Google Contacts, the default field mapping looks like this:

** SENDGRID IMAGE 5 **

3. Customizable Field Mapping

You can custom map your SendGrid Custom Fields and any additional standard fields that aren't included in the default mapping yet. Bear in mind a mapping between two fields can only exist if the types of fields are compatible, and the particular compatibility will determine the direction of the mapping as well. More information on Customizable Field Mapping [here](https://help.piesync.com/features/new-customizable-field-mapping).

** SENDGRID IMAGE 6 **


{% anchor h2 %}
Related links
{% endanchor %}


- [Learn More](https://www.piesync.com/sendgrid/)
- [PieSync Help Desk](https://help.piesync.com/connector-apps/send-grid)
- [Free PieSync 14-day trial!](https://app.piesync.com/)
