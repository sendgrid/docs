---
layout: page
weight: 0
title: BCC
navigation:
  show: true
---

{% info %} This app is available to customers with [Silver accounts and higher](https://sendgrid.com/transactional-email/pricing). {% endinfo %}

Automatically sends a blind carbon copy to an address for every e-mail sent without adding that address to the header. Please note that only one email address may be entered in this field, if you wish to distribute BCCs to multiple addresses you will need to create a distribution group or use forwarding rules.

![BCC App Image]({{root_url}}/images/bcc.png "BCC")
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
         <td>Sets the entered address to be the BCC recipient.</td>
      </tr>
   </tbody>
</table>

{% warning %}
Please note, enabling this App will also increase the amount of credits you use, as each email you send will also trigger an accompanying BCC email. 
{% endwarning %}

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#bcc) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-BCC-Blind-Carbon-Copy) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
