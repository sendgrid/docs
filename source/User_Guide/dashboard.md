---
seo:
  title: SendGrid Customer Dashboard
  description: Manage your SendGrid account from the dashboard
  keywords: SendGrid dashboard, SendGrid customer portal, customer portal, dashboard
title: Dashboard
weight: 90
layout: page
navigation:
  show: true
---

The SendGrid dashboard is designed to give you an at-a-glance view of your current email activity. You should be able to see stats for the last 7 days about all of the emails you have sent through your SendGrid account.

{% anchor h2 %}
The Header Bar
{% endanchor %}

**Reputation Monitor** - Your [sender reputation]({{root_url}}/Glossary/sender_reputation.html) is an indicator of how we view your email sending practices based on how well your email is delivered, bounced, and how many spam reports you get.
sender_reputation.png

**Credits Used** - Unlimited means that you can send as many emails as you want, up to the parent’s account cap. Sometimes this is 3-6 times the parent account (TODO: check with compliance about the rules)

**Emails sent today** - This header statistic indicates how many emails you have sent in the last 24 hours.

{% anchor h2 %}
Stats
{% endanchor %}

On your dashboard we provide the last 30 days of email statistics in a graph, so that you can keep an eye on your sending. From this graph, you can see Requests, Deliveries, Opens, Clicks, Bounces, and Spam Reports.

If you want to see all of your email statistics, go to your [Statistics Page]({{site.app_url}}/statistics) via the graph icon on the left side menu.
 
{% anchor h2 %}
Activity Feed
{% endanchor %}

Your activity feed will show you the last 7 days of email activity for your account. This includes all actions that you will see in your full Email Activity Feed. You can filter on any of the activity filters and you can even search your activity by email address.

If you would like to see all of your email activity, please go to the [Email Activity]({{site.app_url}}/email_activity) page. For more information, please see our email activity documentation.

{% anchor h2 %}
Transactional Emails
{% endanchor %}

This box shows you the information for sending transactional emails via SendGrid’s [SMTP Relay]({{root_url}}/Glossary/smtp_relay.html). Your API Key is only shown once, when you create it, so it will not be shown on your dashboard.

{% anchor h2 %}
Advanced Suppression Manager
{% endanchor %}

The advanced suppression manager box will show you the current status of suppression groups in your account. From here you can click links to [manage]({{site.app_url}}/suppressions/advanced_suppression_manager) and Integrate your Suppression Groups. 

{% anchor h2 %}
Help Links
{% endanchor %}

We have provided quick links to [Support](http://support.sendgrid.com/hc/en-us), our [Documentation]({{root_url}}/), and our [Community page](http://community.sendgrid.com/sendgrid).