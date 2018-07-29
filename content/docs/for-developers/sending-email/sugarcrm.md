---
seo:
  title: SugarCRM Integration
  description: SugarCRM Integration
  keywords: CRM, sugarCRM, integration, smtp
title: SugarCRM Integration
group: plugins
weight: 0
layout: page
zendesk_id: 200182078
navigation:
  show: false
---

## What _is_ SugarCRM?

One of the primary competitors to the Salesforce CRM, [SugarCRM](http://www.sugarcrm.com/) is a widely used customer relationship management software and as they explain on their website, "[SugarCRM is] designed to help your business communicate with prospects, share sales information, close deals and keep customers happy. Thousands of successful companies use Sugar everyday to manage sales, marketing and support." Since SendGrid's become synonymous with optimized deliverability of transactional email to the inbox, some of our customers have asked us how they can send mail from their CRM software through our service so those emails can also be optimized for deliverability to the inbox. If you're a SendGrid as well as SugarCRM customer, let's get into how you'll go about doing this!

## How do I _integrate_ SugarCRM with SendGrid

SendGrid customers utilizing our service for their transactional email and wanting to use SugarCRM for their email marketing campaigns can easily make a few settings changes within their SugarCRM account in order to point their outgoing mail to us, so we can deliver it to the end recipient. In order to send mail from SugarCRM to SendGrid, navigate the following on the SugarCRM site: Admin > Email Settings > Choose "SMTP" as the mail transfer agent > Enter required server info as follows:

- **SMTP Hostname** : smtp.sendgrid.net
- **SMTP Username** : [your SendGrid account's username]
- **SMTP Password** : [your SendGrid account's password]
- **SMTP Port** : [the port of your choosing, the options for which can be found  [here](http://docs.sendgrid.com/documentation/get-started/smtp-ports/)]

Once these changes have been made within the Email Settings page within your SugarCRM account, all outgoing mail from the application will be routed to SendGrid so we can send it to the end recipient.

SugarCRM outlines this process in more detail in their own support documentation [here](http://support.sugarcrm.com/04_Find_Answers/02KB/02Administration/100Email/Configuring_Your_Outbound_Email_Server_(SMTP)_to_Work_With_Sugar).

 
