---
layout: page
weight: 0
group: plugins
title: Sync your SendGrid contacts using PieSync
navigation:
  show: true
seo:
  title: Sync your SendGrid contacts using PieSync
  description: Learn how to keep your SendGrid contacts in sync with 100+ other apps using PieSync
  keywords: integrate, tutorial, contact sync, PieSync, Mailchimp, Zendesk, Salesforce, HubSpot, Quickbooks
---

Follow these steps to set up a sync:

1. [Create a PieSync account](#-Create-a-PieSync-account)
2. [Select your apps](#Select-your-apps)
3. [Authorize your apps](#Authorize-your-apps)
4. [Set up your sync configuration](#Set-up-your-sync-configuration)


## Create a PieSync account

Sign up for a PieSync account [here](https://app.piesync.com/).


## Select your apps

Select Sendgrid and the app you would like to sync with from within the PieSync application.


## Authorize your apps

To authorize, follow the steps as described and make sure you have your [API Key]({{root_url}}/ui/account-and-settings/api-keys/) before getting started.

![]({{root_url}}/img/piesync-api-key.png "Access your SendGrid API Key")

If you have already authorized SendGrid account(s) in the past or have another PieSync integration, you can skip the first part of the authorization and choose from your **Conncted Accounts**.

![]({{root_url}}/img/piesync-verify-api-key.png "Verify your SendGrid API Key")

## Set up your sync configuration

From within the connection setup screen, you'll be able to manage the following:

### Filters and actions

```
[IF] Supported Conditions/Filters
   ALREADY EXISTING IN APP YOU SYNC WITH
   FIELD VALUES (INCLUDING CUSTOM FIELDS)
```

![]({{root_url}}/img/piesync-if-filters.png "Add if filters")

```
[THEN] Supported Actions
   UPDATING FIELD VALUES (INCLUDING CUSTOM FIELDS)
```

![]({{root_url}}/img/piesync-then-filters.png "Add then filters")

### Default Mapping

Depending on the other app you're syncing with, you'll see a number of standard SendGrid fields being mapped by default. For instance, in a connection with Google Contacts, the default field mapping looks like this:

![]({{root_url}}/img/piesync-default-fields.png "Standard fields")


### Customizable Field Mapping

You can custom map your SendGrid Custom Fields and any additional standard fields that aren't included in the default mapping yet. Remember, a mapping between two fields can only exist if the types of fields are compatible, and the particular compatibility will determine the direction of the mapping. See our documentation [Customizable Field Mapping](https://help.piesync.com/features/new-customizable-field-mapping) for more information.

![]({{root_url}}/img/piesync-field-mapping.png "Field mapping")

## Additional Resources

- [Learn More](https://www.piesync.com/sendgrid/)
- [PieSync Help Desk](https://help.piesync.com/connector-apps/send-grid)
- [Free PieSync 14-day trial!](https://app.piesync.com/)
