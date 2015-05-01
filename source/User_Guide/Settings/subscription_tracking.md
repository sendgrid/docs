---
layout: page
weight: 0
title: Subscription Tracking
navigation:
  show: true
---

Add automatic subscription management links to the bottom of emails. SendGrid will keep track of these unsubscribes and ensure these users don't get future emails from the sender.

![]({{root_url}}/images/subscription_tracking.png "docs_apps_subtrack_0212_tcr")

You can customize the text attached to emails and customize the landing page. The links will look something like the following, though can be configured in whatever fashion suits your needs:

{% codeblock %} sendgrid.net/submgmt/[encryptedString] {% endcodeblock %}

If you would like to customize your links, create a CNAME that points to sendgrid.net and fill out the Whitelabel setting (available for Bronze accounts and higher) in your account.

{% anchor h2 %}
API Settings 
{% endanchor %}

Subscription tracking requires either `text/html` and `text/plain` OR `replace`. If `replace` is included, `text/html` and `text/plain` will not be honored.

<table class="table table-bordered table-striped">
   <tbody>
      <tr>
         <th>App Name</th>
         <th>Setting Field</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>subscriptiontrack</td>
         <td>enable</td>
         <td>YES</td>
         <td>0 to disable, 1 to enable</td>
      </tr>
      <tr>
         <td/>
         <td>text/html</td>
         <td>YES\*</td>
         <td>String for the HTML e-mail body</td>
      </tr>
      <tr>
         <td/>
         <td>text/plain</td>
         <td>YES\*</td>
         <td>String for the plain text e-mail body</td>
      </tr>
      <tr>
         <td/>
         <td>replace</td>
         <td>YES\*</td>
         <td>a tag that can be added to the content that will be replaced by SendGrid with the subscription management link, e.g. [unsubscribe_tag]</td>
      </tr>
   </tbody>
</table>

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#subscriptiontrack) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Subscription-Tracking) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
