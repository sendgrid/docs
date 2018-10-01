---
seo:
  title: Suspended, Warned, Deactivated, or Banned
  description: Was your account suspended or is otherwise under review? Learn more here...
  keywords: suspend, suspended, account, deactivated, banned, ban, deactivate, warn, warning, access, compromise, reactivate, stopped, stop, reactivated, turn, frozen, under, review, deactivated, compliance
title: Suspended, Warned, Deactivated, or Banned
weight: 0
layout: page

navigation:
  show: true
---
- [Warned](#-Warned)
- [Suspended](#-Suspended)
- [Deactivated](#-Deactivated)
- [Banned](#-Banned)
- [Reactivation](#-Reactivation) 

To preserve your reputation as a sender, SendGrid reviews accounts with apparent abnormal activity. Have you received a warning, suspension, deactivation, or ban notice from SendGrid? Please respond to any questions asked in the email notice. The fastest way to get your account reactivated is to respond directly to the ticket sent to your email address. In most cases, SendGrid Support cannot reactivate a warned, suspended, deactivated or banned account, so contacting them directly may delay reactivation.

{% anchor h2 %}
Stages of review
{% endanchor %}

Once your account is under review, SendGrid sends a notification to the address associated with your account indicating that it is one of the following states: 

{% anchor h3 %}
Warned
{% endanchor %}

The account maintains full sending functionality during a warning period. However, if we do not receive a response, your account may be suspended to prevent further risk to your sending reputation. Accounts with a warned status can still upgrade their usage plan, or create new sub-users until the review has concluded to our satisfaction.

{% anchor h3 %}
Suspended
{% endanchor %}

SendGrid accepts and queues mail while the account is under review. The account holds mail until issues are resolved or up to 72 hours from the time of send. Any message queued for over 72 hours from sending expires and is not delivered. Delivered mail sent before the suspension is still functional, including open and click tracking, as well as link redirects. 

{% info %}
An account in a suspended state continues to incur auto-renewal billing for your monthly subscription and any Marketing Campaigns contact storage.
{% endinfo %}

{% anchor h3 %}
Deactivated
{% endanchor %}

A deactivated SendGrid account cannot accept mail. Upon deactivation, SendGrid deletes any undelivered mail queued on the system. Click and Open tracking links are disabled in the deactivated account.  Deactivated sub-users are not accessible via the ‘log in as’ method available to parent accounts. However, deactivated sub-users can still log in directly. 

{% info %}
An account in a deactivated state continues to incur auto-renewal billing for your monthly subscription and any contacts storage.
{% endinfo %}

{% anchor h3 %}
Banned
{% endanchor %}

Banned accounts cannot access our system either through SendGrid.com or the API. Our system does not accept email requests from banned accounts. Dedicated IPs assigned to the account are removed.  Related sub-users are unable to send email or access their account. 

{% info %}
An account in a banned state will stop any auto-renewal billing, though you will still be charged for any overages or Marketing Campaigns contact storage during the current month.
{% endinfo %}

{% anchor h3 %}
Reactivation
{% endanchor %}

Once you resolve all potential issues to our satisfaction, SendGrid will reactivate your service. Once activated, any queued messages will begin to process for delivery.
