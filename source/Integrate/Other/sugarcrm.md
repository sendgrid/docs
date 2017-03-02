---
seo:
  title: SugarCRM Integration
  description: How to integrate SugarCRM with SendGrid.
  keywords: SugarCRM, integrate
title: SugarCRM
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
What is SugarCRM?
{% endanchor %}

One of the primary competitors to the Salesforce CRM, [SugarCRM](http://www.sugarcrm.com) is a widely used customer relationship management software and as they explain on their website, "SugarCRM is designed to help your business communicate with prospects, share sales information, close deals and keep customers happy. Thousands of successful companies use Sugar everyday to manage sales, marketing and support." Since SendGrid's become synonymous with optimized deliverability of transactional email to the inbox, some of our customers have asked us how they can send mail from their CRM software through our service so those emails can also be optimized for deliverability to the inbox. If you're a SendGrid as well as SugarCRM customer, let's get into how you'll go about doing this!

{% anchor h2 %}
How to integrate SugarCRM with SendGrid
{% endanchor %}

SendGrid customers utilizing our service for their transactional email and wanting to use SugarCRM for their email marketing campaigns can easily make a few settings changes within their SugarCRM account in order to point their outgoing mail to us, so we can deliver it to the end recipient. In order to send mail from SugarCRM to SendGrid, navigate the following on the SugarCRM site: Admin > Email Settings > Choose "Other" as the Email provider > Enter required server info as follows:

-   **SMTP Server**: smtp.sendgrid.net
-   **SMTP Port**: [the port of your choosing, the options for which can be found [here]({{root_url}}/Classroom/Basics/Email_Infrastructure/smtp_ports.html)]
-   **Use SMTP Authentication?**: Check this box
-   **Enable SMTP over SSL or TLS?**: [the encryption of your choosing, the options for which can be found [here]({{root_url}}/Classroom/Basics/Email_Infrastructure/smtp_ports.html)]
-   **SMTP Username**: [your SendGrid account's username]
-   **SMTP Password**: [your SendGrid account's password]


Once these changes have been made within the Email Settings page within your SugarCRM account, all outgoing mail from the application will be routed to SendGrid so we can send it to your end recipient.

SugarCRM outlines this process in more detail in the [SugarCRM support documentation](<http://support.sugarcrm.com/04_Find_Answers/02KB/02Administration/100Email/Configuring_Your_Outbound_Email_Server_(SMTP)_to_Work_With_Sugar>).
