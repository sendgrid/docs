---
layout: page
weight: 0
title: Migrating from The SendGrid for New Relic Plugin
group: partners
navigation:
  show: true
seo:
  title:  Migrating from the SendGrid for New Relic Plugin
---

<call-out type="warning">

Starting Wednesday June 16, 2021, New Relic will [no longer support or maintain plugins](https://discuss.newrelic.com/t/new-relic-plugin-eol-wednesday-june-16th-2021/127267).

After June 16, 2021, you will no longer be able to access visualizations of your email statistics without changes to your New Relic dashboard. To make these changes, follow the guide on this page.

**If you do not utilize New Relic to see email statistics, then there is no action needed from you.**

</call-out>

<call-out type="warning">

The following guide will not work for customer's using New Relic’s [High Security Mode](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode/). If you are, or believe you may be, using New Relic's High Security Mode, please contact the [New Relic support team](https://support.newrelic.com/) for assistance.

</call-out>

The legacy SendGrid for New Relic plugin provided the following four charts.
* **Deliveries**: This shows Average aggregations for Requests, Drops, Deferrals, Delivered
* **Engagement**: This shows Average aggregations for Unsubscribes, Clicks, Unique Opens and Opens
* **Compliance**: This shows Average aggregations for Bounces, Spamreports and Blocked
* **Percentage**: Shows percentages for various stats

You can follow the instructions in this document to build each chart without relying on the plugin. The quickest way to construct your dashboards is by importing them using our prebuilt queries, which you'll find in the ["Import prebuilt dashboards"](#import-prebuilt-dashboards) section. You can also build your dashboards manually by following the steps in the ["Build your dashboards manually"](#build-your-dashboards-manually) section.

Because we make it possible to view stats for Subusers, there are separate prebuilt dashboards and instructions to create dashboards with or without Subuser support.

**Legacy plugin view**

![A legacy New Relic dashboard built with the SendGrid for New Relic Plugin]({{root_url}}/img/NR_OldPluginView.jpg 'Legacy New Relic plugin dashboard')

## Import prebuilt dashboards

You can import one of the Twilio SendGrid prebuilt dashboards after specifying your New Relic AccountID in the template. For more information about working with dashboards, please see the [New Relic Dashboards documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

*To retrieve your New Relic Account ID*

1. Navigate to **Manage your plan** in your New Relic account settings as shown below.

![The New Relic account settings page]({{root_url}}/img/NR_FindAccountNumber.jpg 'Manage your plan')

<call-out>

Depending on your organization structure in New Relic, you may find your AccountID in different ways. See the [New Relic documentation](https://docs.newrelic.com/docs/accounts/accounts-billing/account-setup/account-id/) if you are unable to locate your ID.

</call-out>

## Importing dashboards

The two prebuilt JSON files below allow you to import a dashboard with or without support for Subuser statistics. The process for importing a dashboard is the same when using either file.

* [TwilioSendGrid\_Sample\_Dashboard\_NoSubusers.json]({{root_url}}/assets/TwilioSendGrid_Sample_Dashboard_NoSubusers.json)
* [TwilioSendGrid\_Sample\_Dashboard\_WithSubusers.json]({{root_url}}/assets/TwilioSendGrid_Sample_Dashboard_WithSubusers.json)

*To import the prebuilt dashboard*

1. Locate the `"accountId"` field in the JSON file you selected and replace its value with your AccountID.
2. From your New Relic dashboards page, select **Import a dashboard**.
3. Paste the dashboard JSON from the linked file above, and the dashboard will be created.

![Import a dashboard]({{root_url}}/img/NR_ImportDashboard.jpg 'Import a dashboard')

Once imported, a dashboard without Subusers will look like the following screenshot. Make sure you select a date range for which  you know statistics will be available.

![Example imported dashboard]({{root_url}}/img/NR_StandardDashboardViewWithoutSubusers.jpg 'Example imported dashboard')

A dashboard with support for Subusers will provide multiple views. The main, or parent, account for a dashboard with Subusers will look like the following screenshot.

*To view the main dashboard*

1. Click on **TwilioSendgrid**.
2. Select a date range for which you know statistics will be available.

![Example imported dashboard with Subusers on the main user]({{root_url}}/img/NR_SubuserDashboard_SelectMainUser.jpg 'Example imported dashboard with Subusers')

To view a specific Subuser's stats

1. Click on the Subuser.
2. Select a date range for which you know statistics will be available.

![Example imported dashboard for a specific Subusers]({{root_url}}/img/NR_SubuserDashboard_SelectSubuser.jpg 'Example imported dashboard for a specific Subusers')

## Build your dashboards manually

If the prebuilt templates don't work as you expect, you can build your dashboards from scratch.

### Add data to a dashboard

The following sections of this guide assumes you have already created a New Relic dashboard. For help creating a dashboard, see the [New Relic dashboard documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/#:~:text=You%20can%20easily%20create%20a,corner%20of%20the%20dashboards%20index.).

*To add data to your dashboard*

1. Click the **Add to your Dashboard** (**+**) button.

![Add to your dashboard]({{root_url}}/img/NR_AddToDashboard.jpg 'Add to your dashboard')

2. A page menu will load with options to add to your dashboard. Select **Add a chart**. This option will allow you to add a query.

![Add to your dashboard menu]({{root_url}}/img/NR_AddAChart.jpg 'Add to your dashboard menu')

3. Select [NRQL](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/#what-is-nrql).

![Add NRQL query]({{root_url}}/img/NR_SelectNRQL.jpg 'Add NRQL query')

4. You will now be able to add an NRQL query to visualize your SendGrid statistics. The following query displays all stats for Deliveries using an average aggregate function.

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/TwilioSendGrid/Deliveries/{Stat}'
  TIMESERIES FACET Stat
```

<call-out>

You can use any of the [NRQL aggregate functions](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#aggregator-functions) you like.  The legacy SendGrid for New Relic plugin showed Average.

</call-out>

5. Click **Run**. This will run the query and retrieve the specified statistics.
6. Name the chart "Deliveries."
7. Click **Save**.

![Save added query]({{root_url}}/img/NR_CreateChartWithNRQLAndSave.jpg 'Save added query')

You can now select a timeline to view your stats.

![Select a timeline]({{root_url}}/img/NR_SelectTimeline.jpg 'Select a timeline')

Now that we know how to add a chart with a query, most of the charts are similar except a few that are covered in the next section.

### Add charts without Subusers

The following queries will allow you to visualize your Deliveries, Engagement, Compliance, and Percentage data. For more information about working with the Twilio SendGrid Stats API, see our [API reference](https://sendgrid.api-docs.io/v3.0/stats/retrieve-global-email-statistics).

To add these queries to your dashboard, follow the process outlined in the previous ["Add data to a dashboard"](#add-data-to-a-dashboard) section.

#### Deliveries

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/TwilioSendGrid/Deliveries/{Stat}'
  TIMESERIES FACET Stat
```

#### Engagement

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/TwilioSendGrid/Engagement/{Stat}'
  TIMESERIES FACET Stat
```

#### Compliance

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/TwilioSendGrid/Compliance/{Stat}'
  TIMESERIES FACET Stat
```

#### Percentage

A percentage is not a TIMESERIES and must be viewed as a table or bar. Be sure to set up your percentage appropriately when selecting a **Chart type**.

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND StatPercent LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/TwilioSendGrid/{Categories}/{StatPercent}'
   FACET Categories, StatPercent
```

![Select a Chart type for your percentage query]({{root_url}}/img/NR_PercentageChartForNonSubuser.jpg 'Select a Chart type')

### Add charts with Subuser support

The following queries allow you to build charts with Subuser support. Before using these queries, you must first add a User Widget. This Users Widget is needed to view statistics for either the main account (under **TwilioSendgrid**) or one of the Subusers. The widget queries and pulls all Users.

**To add the Users Widget**

1. Add the following NRQL query to your dashboard.

```SQL
FROM Metric SELECT MIN(newrelic.timeslice.value) as MIN
  WHERE appName = 'Twilio SendGrid'
  WITH METRIC_FORMAT 'Custom/{AllUsers}/{Categories}'
  FACET AllUsers
```

2. Set the **Chart type** to **Table**.

![Set up the Users Widget]({{root_url}}/img/NR_AllUsersWidgetAsTable.jpg 'Set up the Users Widget')

With the Users Widget in place, you can add the following queries to visualize your Deliveries, Engagement, Compliance, and Percentage data for your main account and any Subuser. For more information about working with the Twilio SendGrid Stats API, see our [API reference](https://sendgrid.api-docs.io/v3.0/stats/retrieve-global-email-statistics).

To add these queries to your dashboard, follow the process outlined in the previous ["Add data to a dashboard"](#add-data-to-a-dashboard) section.

#### Deliveries with Subusers

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/{AllUsers}/Deliveries/{Stat}'
  TIMESERIES FACET AllUsers, Stat
```

#### Engagement with Subusers

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/{AllUsers}/Engagement/{Stat}'
  TIMESERIES FACET AllUsers, Stat
```

#### Compliance with Subusers

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND metricTimesliceName NOT LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/{AllUsers}/Compliance/{Stat}'
  TIMESERIES FACET AllUsers, Stat
```

#### Percentage with Subusers

A percentage is not a TIMESERIES and must be viewed as a table or bar. Be sure to set up your percentage appropriately when selecting a **Chart type**.

```SQL
FROM Metric SELECT average(newrelic.timeslice.value)
  WHERE appName = 'Twilio SendGrid' AND StatPercent LIKE '%Percent'
  WITH METRIC_FORMAT 'Custom/{AllUsers}/{Categories}/{StatPercent}'
   FACET AllUsers, StatPercent
```

![Select a Chart type for your percentage query with Subusers]({{root_url}}/img/NR_PercentageChartWithSubuser.jpg 'Select a Chart type')

### View all custom metrics

It is also possible to view all custom metrics using New Relic.

*To view all custom metrics available*

1. Click **New Relic One** at the top left corner and navigate to **APM**.
2. Click **Twilio SendGrid** to load the "Explorer view."

![Load the Explorer view]({{root_url}}/img/NR_ViewCustomMetrics_Step1.jpg 'Load the explorer view')

3. From the left navigation, scroll down all the way and expand **More views**.
4. Click on **Metrics Explorer** and select the appropriate timeline to view the custom metrics. You can now search and browse specific custom metrics.

![A list of all custom metrics]({{root_url}}/img/NR_ViewCustomMetrics_Step2.jpg 'A list of all custom metrics')

## Troubleshooting

* Make sure you select a time range containing some expected stats, or else nothing will populate.
* Sometimes New Relic dashboards error. Refreshing the dashboard usually fixes the problem.
* Stats captured from the legacy SendGrid for New Relic plugin will not be visible when using the new integration.

## Additional resources

* [How to query APM metric timeslice data](https://docs.newrelic.com/docs/telemetry-data-platform/understand-data/metric-data/query-apm-metric-timeslice-data-nrql/).
* [Introduction to NRQL](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/#what-is-nrql).
* [Introdution to New Relic Dashboards](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/#:~:text=You%20can%20easily%20create%20a,corner%20of%20the%20dashboards%20index).
* [NRQL aggregate functions](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#aggregator-functions).

## FAQ

**What is the purpose of the Min column in the Users widget?**

You can ignore the Min column. When creating a query to retrieve all Subusers along with the main parent user, we used an aggregate function, which is required to build the dashboard. However, the value of this function is not needed, and it is not possible to delete the aggregate function. For this reason, you can safely ignore the Min column.

**Can I view my Twilio Sendgrid stats without using the New Relic integration?**

You can use Twilio Sendgrid APIs to retrieve the raw stats numbers. For more information about working with the Twilio SendGrid Stats API, see our [API reference](https://sendgrid.api-docs.io/v3.0/stats/retrieve-global-email-statistics).

**Why don't I see any Stats on my dashboard?**

Make sure you have selected an appropriate time range in which you expect some Stats.

**Who do I contact for help related to NRQL or building a dashboard?**

Though we have provided guidelines here, for any questions or issues related to NRQL or building Dashboards, please refer to the linked [New Relic documentation]() or [contact their support team](https://support.newrelic.com/).