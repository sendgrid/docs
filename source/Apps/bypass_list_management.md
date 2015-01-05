---
layout: page
weight: 0
title: Bypass List Management
navigation:
  show: true
---

{% warning %}
This app is very powerful, and can only be used on a per-message basis. Use with extreme caution.
{% endwarning %}

Some emails are too important to do normal list management checks, such as password resets or critical alerts. Enabling this filter will bypass the normal unsubscribe / bounce / spam report checks and queue the e-mail for delivery.

{% anchor h2 %}
API Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>App Name</th>
         <th>Setting Field</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>bypass_list_management</td>
         <td>enable</td>
         <td>
            0 to disable
            <br/>
            1 to enable
         </td>
      </tr>
   </tbody>
</table>

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#bypass_list_management) (on a per message basis)
