---
seo:
  title: Device Statistics
  description: View and filter your device specific email statistics.
  keywords: Device statistics, SendGrid device statistics
title: Device
weight: 0
layout: page
navigation:
  show: true
---


{% info %}
Parent accounts will see aggregated stats for their account and all subuser accounts. Subuser accounts will only see their own stats.
{% endinfo %}

The clients report breaks down which devices and clients are most frequently used to open the mail you send. The devices and types that SendGrid tracks are:

<table class="table table-striped">
  <tr>
    <th>Device</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Desktop</td>
    <td>Email software on desktop computer I.E. Outlook, Sparrow, or
      Apple Mail.</td>
  </tr>
  <tr>
    <td>Webmail</td>
    <td>A web-based email client (Yahoo, Google, AOL, Outlook.com, etc.).</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>A smart phone (iPhone, Android, Blackberry, etc.).</td>
  </tr>
  <tr>
    <td>Tablet</td>
    <td>A tablet computer (iPad, android based tablet, etc.).</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>An unrecognized device.</td>
  </tr>
</table>



{% anchor h2 %}
Top 5
{% endanchor %}

The top 5 section will show you the most engaged email clients and devices based on the selected metric. By default, clicks are select, but you can change that by choosing a metric from the button at the top of this section. You can change which metrics, date, or grouping by adjusting the [statistics filters]({{root_url}}/User_Guide/Statistics/index.html#-Statistics-Filters).

{% anchor h2 %}
Individual Metrics Activity
{% endanchor %}

Based on the selected devices and metric at the top of this page, this graph will refresh. You can see how your recipients engage with your emails by device type over time.

You can remove individual device types from the list at the top of the page. This will affect all the data on this page.

To change this graph to see another metric for your recipient’s devices, choose the metric from the button at the top of this page.

{% anchor h2 %}
Individual Metrics Figures
{% endanchor %}

When you initially choose the devices to compare, this graph will show you the actual open numbers over time for each of the compared devices.

You can remove individual devices from the list of devices at the top of this page. The graph will refresh, showing only the selected subusers.

You can also choose to show actual counts or percentages, by clicking the corresponding button above and to the right of the table.

{% anchor h2 %}
Additional Resources
{% endanchor %}

- [Statistics Filters]({{root_url}}/User_Guide/Statistics/index.html#-Statistics-Filters)
- [Subusers]({{root_url}}/User_Guide/Settings/Subusers/index.html)
- [SendGrid for Mobile]({{root_url}}/User_Guide/SendGrid_for_Mobile/index.html)
