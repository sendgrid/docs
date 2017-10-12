---
layout: page
weight: 100
title: Release Notes
seo:
  title: SendGrid Release Notes
  description: The new features and changes to SendGrid
  keywords: release notes
navigation:
  show: true
---
The following new features and changes to the service are available.

{% anchor h2 %} 
11 October 2017
{% endanchor %}

{% anchor h3 %}
Custom field update
{% endanchor %}

The limit of custom fields you can create has been increased to 120. This limit can be applied to any type of data contained in a contacts list including numbers, text, or dates. 


{% anchor h2 %}
2 October 2017
{% endanchor %}

{% anchor h3 %}
Marketing Campaigns Contacts
{% endanchor %}

The Contacts page in Marketing Campaigns has been updated to improve the user experience! The UI has been simplified to make adding contacts more streamlined and easy-to-use. For more information, see the [documentation] (https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html).

{% anchor h3 %}
Substitution tag update
{% endanchor %}

Substitution tags are no longer case sensitive in the email content. Previously, your substitution tag in your email content had to exactly match the substitution tag. For example, if you have the substitution tag `[%panda%]`, and your email content says `"hello [%PANda%], buy my eucalyptus"`, then the substitution tag for [%panda%] is now applied.

{% anchor h2 %}
30 September 2017
{% endanchor %}

{% anchor h3 %}
Legacy Newsletter
{% endanchor %}

Legacy Newsletter has been sunset and can no longer be used to build or send campaigns. In order to continue sending marketing emails, SendGrid recommends switching to [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html). See the [documentation](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/index.html) for more information on why we made the switch.

{% anchor h2 %}
5 September 2017
{% endanchor %}

{% anchor h3 %}
Amazon Marketplace
{% endanchor %}

SendGrid is now available on the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B074CQY6KB)! AWS customers are now able to integrate SendGrids email infrastructure and email marketing tools with their other AWS tools. For more information, see the [blog](https://aws.amazon.com/blogs/apn/inside-sendgrids-expanded-relationship-with-aws/) and the [documentation](https://sendgrid.com/docs/Integrate/Partners/Amazon_Marketplace.html).

