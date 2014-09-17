---
layout: page
weight: 0
title: Pending Account Changes
navigation:
   show: true
---

Retrieve pending update information for users that have scheduled upgrades to their account.

* * * * *

{% anchor h2 %}
List Pending Changes 
{% endanchor %}

Returns all of the users who have pending changes within your account.


{% parameters users %}
 {% parameter 'task' 'Yes' 'Must be set to <em>list</em> .'%}
 {% parameter 'username' 'No' 'Optional search parameter.' 'The customers new username.' %}
 {% parameter 'type' 'No' 'Must be either upgrade, downgrade, close. Optional search parameter.' %}
{% endparameters %}


{% apiexample users POST https://api.sendgrid.com/apiv2/reseller.pending api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=list %}
  {% response json %}
[
  {
    "username": "user4",
    "type": "Account Upgrade",
    "current": "Main Reseller - Silver Package",
    "update": "Main Reseller - Gold Package",
    "ip_groups": [

    ],
    "ips": [
      "255.255.255.0",
      "255.255.254.0"
    ],
    "date": "2010-09-30"
  },
  {
    "username": "user5",
    "type": "Account Downgrade",
    "current": "Main Reseller - Gold Package",
    "update": "Main Reseller - Basic Package",
    "ip_groups": [
      "Reseller Group"
    ],
    "ips": [

    ],
    "date": "2010-10-07"
  }
]
  {% endresponse %}
  {% response xml %}
<result>
   <pending>
      <user>
         <username>user4</username>
         <type>Account Upgrade</type>
         <current>Main Reseller - Silver Package</current>
         <update>Main Reseller - Gold Package</update>
         <date>2010-09-30</date>
         <ips>
            <ip>255.255.255.0</ip>
            <ip>255.255.254.0</ip>
         </ips>
         <ip_groups/>
      </user>
      <user>
         <username>user5</username>
         <type>Account Downgrade</type>
         <current>Main Reseller - Gold Package</current>
         <update>Main Reseller - Basic Package</update>
         <date>2010-10-07</date>
         <ips/>
         <ip_groups>
            <ip_group>Reseller Group</ip_group>
         </ip_groups>
      </user>
   </pending>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Delete Pending Changes 
{% endanchor %}

Cancel/Revert a pending change.


{% parameters delete %}
 {% parameter 'task' 'Yes' 'Must be set to <em>delete</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an User under your account.'  'The customers username you wish to delete.' %}
{% endparameters %}


{% apiexample delete POST https://api.sendgrid.com/apiv2/reseller.pending api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=delete&user=customer@example.com %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Immediate Upgrade 
{% endanchor %}

Once an upgrade happens, an invoice is generated for that user. If it's a free user to a paid account, the full price for that upgrade will be created. If it's in between billing periods, a prorated discount will be applied to the invoice.


{% parameters upgrade %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_upgrade</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an User under your account.' 'The customers username.' %}
 {% parameter 'package' 'Yes' 'The name of the package you will be upgrading the User to.' %}
 {% parameter 'ip[]' 'No' 'If the package you are upgrading your user requires a whitelabel and/or an unique IP, you must assign a free IP to this user.' %}
 {% parameter 'ip_group[]' 'No' 'If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.' %}
{% endparameters %}


{% apiexample upgrade POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_upgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "error",
  "errors": [
    "...error messages..."
  ]
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Immediate Downgrade 
{% endanchor %}

Once a downgrade happens, an invoice is generated for that user. Free customers are not allowed to downgrade.


{% parameters downgrade %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_downgrade</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an User under your account.' 'The customers username.' %}
 {% parameter 'package' 'Yes' 'The name of the package you will be downgrading the User to.' %}
 {% parameter 'ip[]' 'No' 'If the package you are downgrading your user requires a whitelabel and/or an unique IP, you may assign a free IP to this customer using your assigned IPs in suppliment from SendGrid.' %}
 {% parameter 'ip_group[]' 'No' 'If the package you are downgrading your user to does not require an IP or whitelabel, you may place them in an IP group.' %}
{% endparameters %}


{% apiexample downgrade POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Immediate Close 
{% endanchor %}

Close or revert an account to a free user immediately. An invoice is generated for that user with the new package price (if no overages are incurred, a invoice with zero amount due is generated.


{% parameters close %}
 {% parameter 'task' 'Yes' 'Must be set to <em>immediate_close</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an customer under your account.' %}
 {% parameter 'ip_group[]' 'No' 'Define an ip group you will place the user into once the customers account is closed.' %}
{% endparameters %}


{% apiexample close POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=immediate_close&user=customer@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Scheduled Downgrade 
{% endanchor %}

Apply a downgrade at the end of the user's billing cycle. Once a downgrade happens, an invoice is generated for that user with the new package price. Prorated charges do not apply here.


{% parameters scheddown %}
 {% parameter 'task' 'Yes' 'Must be set to <em>scheduled_downgrade</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an User under your account.' %}
 {% parameter 'package' 'Yes' 'The name of the package you will be downgrading the User to.' %}
 {% parameter 'ip[]' 'Maybe Yes' 'If the package you are upgrading your user requires a whitelabel and/or an unique IP, you must assign a free IP to this user.' %}
 {% parameter 'ip_group[]' 'Maybe Yes' 'If the package you are upgrading your user to does not require an IP or whitelabel, you must place them in an IP group.' %}
{% endparameters %}


{% apiexample scheddown POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_downgrade&package=Basic Package&user=customer@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
Scheduled Close 
{% endanchor %}

Close or revert an account to a free user at the end of the user's billing cycle. Once a closure happens, an invoice is generated for that user with the new package price (if no overages are incurred, a invoice with zero amount due is generated.


{% parameters schedclose %}
 {% parameter 'task' 'Yes' 'Must be set to <em>scheduled_close</em> .' %}
 {% parameter 'user' 'Yes' 'Must be an User under your account.' %}
 {% parameter 'ip_group[]' 'No' 'Define an ip group you will place the user into once the customers account is closed.' %}
{% endparameters %}


{% apiexample schedclose POST https://api.sendgrid.com/apiv2/reseller.account api_user=your_sendgrid_username&api_key=your_sendgrid_password&task=scheduled_close&user=customer@example.com&ip_group[]=Reseller Group %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
   <message>success</message>
</result>

  {% endresponse %}
{% endapiexample %}
