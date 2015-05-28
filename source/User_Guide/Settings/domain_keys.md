---
layout: page
weight: 0
title: Domain Keys
navigation:
  show: true
---

Some ISPs (most notably Yahoo!) authenticate e-mail using Domain Keys. Domain Keys work by having a company sign an e-mail with their private key, and then publish a public key in their DNS, which is then used to verify the e-mail signature.

The domain that is checked for the public key is based on one of two e-mail headers; Sender and From. If a Sender header is specified, its domain will be the first one checked, otherwise the domain of the From header will be used. Most e-mail clients do not insert a Sender header, so typically the From address would be used.

![Domain Keys App Image]({{root_url}}/images/domain_keys.png "Domain Keys")

DomainKeys is disabled by default, because SendGrid signs all e-mail with DKIM. However, it's still available to be enabled if you need it for a legacy mail receiver.

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
         <td>Domain</td>
         <td>Yes</td>
         <td>Sets the sender domain.</td>
      </tr>
      <tr>
         <td>Enable sender header</td>
         <td>Yes</td>
         <td>Enables the Domain Keys sender header.</td>
      </tr>
   </tbody>
</table>

Some ISPs or e-mail clients (such as Hotmail or Outlook) will display a message with the Sender header reading "on behalf of" followed by the address that is in the Sender header. To remove this, do one of the following:

1. Disable the Domain Keys filter in the filters section of your account
2. Upgrade to a package (Pro 100k or higher) that provides [Whitelabel]({{site.app_url}}/settings/whitelabel) support and set up the Domain Keys record in your DNS

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#domainkeys) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Domain-Keys) (on an account wide basis)
-   [Web Interface]({{site.app_url}}) (on an account wide basis)
