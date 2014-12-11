---
layout: page
weight: 0
title: Address Whitelisting
navigation:
  show: true
---

{% info %}
This App is only available to <a href="https://sendgrid.com/pricing">Silver accounts and higher</a>
{% endinfo %}

The Address Whitelist App whitelists a specified e-mail address or domain for which mail should never be suppressed. For example, you own the domain example.com, and one or more of your recipients use email@example.com addresses, by placing example.com in the Address Whitelist App, all bounces, blocks and unsubscribes logged for that domain will be ignored and sent to as if under normal sending conditions.

![Address Whitelist App Image]({{root_url}}/images/address_whitelist.png "Address Whitelist")

{% anchor h2 %}
Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Email</td>
         <td>Yes</td>
         <td>Adds the entered domain or address to the list of those that should never be suppressed.</td>
      </tr>
   </tbody>
</table>

There is no practical limit to the number of domains you add in this way.

Settings may be changed through:

-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Address-Whitelist) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
