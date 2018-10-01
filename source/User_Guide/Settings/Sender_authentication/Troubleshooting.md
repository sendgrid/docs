---
layout: page
weight: 0
title: Troubleshooting
navigation:
  show: true
seo:
  title: Troubleshooting
  override: true
  description: Troubleshoot your sender authentication.
---

- [My DNS records aren't validating](#-My-DNS-records-arent-validating)
    - [Allow your DNS records to propagate](#-Allow-your-DNS-records-to-propagate)
    - [Auto appending](#-Auto-appending)
    - [Error validating domain: Expected TXT record at...](#-Error-validating-domain--Expected-TXT-record-at)
    - [DNS record duplication](#-DNS-record-duplication)
    - [Manually validating records](#-Manually-validating-records)
- [Where is my domain hosted?](#-Where-is-my-domain-hosted)
- [Can I authenticate multiple domains?]()
- [Domain authentication application logic](#-Domain-authentication-application-logic)

{% anchor h2 %}
My DNS records aren't validating
{% endanchor %}

After you add your CNAME, TEXT or MX records to your DNS host, you need to validate them in the SendGrid UI. If your DNS records aren't validating, try these steps:

{% anchor h3 %}
Allow your DNS records to propagate
{% endanchor %}

Some DNS providers take longer than others to update your DNS records with the CNAME files or TEXT and MX files that we ask you to add. Give it up to 48 hours to validate.

{% anchor h3 %}
Auto appending
{% endanchor %}

Some DNS hosts will automatically add your top-level domain to the end of DNS records you create, which can turn a CNAME for “email.domain.com” into “email.domain.com.domain.com”.

Be sure to follow the convention on existing records in your DNS panel when adding new ones, as sometimes you will only need to add what is to the left of the top-level domain.

For example, a CNAME for “email.” becomes “email.domain.com”

{% anchor h3 %}
Error validating domain: Expected TXT record at...
{% endanchor %}

{% codeblock %}
Error validating domain: 
Expected TXT record at "m1._domainkey.example.com" to match "k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHLyl8Wk4J06nv56v5+OeEgp9LW3f/""LOlBjWJ9NS4l9X5UlbPJkKeHDXThTig2CxhVuKmIVvRcc9yJ27Tdthj1C1q0rvRtFpNlHbdrJvD8wpxe5rmFeiRPH1KUYbvtbs84aApMwN6Y3A0dgQE7vGkHnPTjwT7q/xv3mu2CvkVntQIDAQAB", but got the following error: lookup m1._domainkey.example.com: no such host
{% endcodeblock %}

If you get an error like this, the problem is that the text record has been split up. The solution is to combine the key back together into one set of quotes, which looks something like this:

{% codeblock %}
"k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHLyl8Wk4J06nv56v5+OeEgp9LW3f/LOlBjWJ9NS4l9X5UlbPJkKeHDXThTig2CxhVuKmIVvRcc9yJ27Tdthj1C1q0rvRtFpNlHbdrJvD8wpxe5rmFeiRPH1KUYbvtbs84aApMwN6Y3A0dgQE7vGkHnPTjwT7q/xv3mu2CvkVntQIDAQAB"
{% endcodeblock %}

{% anchor h3 %}
DNS record duplication
{% endanchor %}

Some DNS providers don't automatically prevent you from duplicating a DNS file. For example, there might be an MX and TEXT record where you are trying to set up a CNAME file. If your DNS files aren't validating, check to make sure there are no other DNS records that could be a duplication.

{% anchor h3 %}
My DNS doesn't accept underscores
{% endanchor %}

SendGrid requires underscores for sender authentication, but some DNS providers do not support underscores in zone file entries.

If your provider does not allow you to use underscores in zone files, consider changing your DNS hosting provider.

You can also disable automated security - this allows you to set up TXT and CX records that don't have underscores. For more information about setting up automated security, see [Using automated security]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html#-Using-automated-security).

{% anchor h3 %}
Manually validating records
{% endanchor %}

Sometimes there is no other option but to manually validate your DNS records. This can be caused by certain DNS providers or by customizations you add to your records.

*To manually validate you DNS files:*

{% anchor h3 %}
Verify Your DNS Records Manually
{% endanchor %}

To validate a DNS record manually, use the  Unix command `DIG`. These examples use **Terminal** on a Mac platform.

These tables show specific validations. If the **ANSWER** section of the dig return is empty, that usually means that either the record does not exist or has yet to propagate.

Examples:

{% anchor h3 %}
Domains
{% endanchor %}

{% anchor h4 %}
Automated Security ON
{% endanchor %}

<table class="table">
  <tr>
    <th>Command</th>
    <th>Type</th>
    <th>ANSWER</th>
  </tr>
  <tr>
    <td>dig cname sub.domain.com</td>
    <td>CNAME</td>
    <td>u123456.wl.sendgrid.net</td>
  </tr>
  <tr>
    <td>dig cname s1._domainkey.sub.domain.com</td>
    <td>CNAME</td>
    <td>s1.domainkey.u123456.wl.sendgrid.net</td>
  </tr>
  <tr>
    <td>dig cname s2._domainkey.domain.com</td>
    <td>CNAME</td>
    <td>s2.domainkey.u123456.wl.sendgrid.net</td>
  </tr>
</table>

{% anchor h4 %}
Automated Security OFF
{% endanchor %}

<table class="table">
  <tr>
    <th>Command</th>
    <th>Type</th>
    <th>ANSWER</th>
  </tr>
  <tr>
    <td>dig mx sub.domain.com</td>
    <td>MX</td>
    <td>mx.sendgrid.net</td>
  </tr>
  <tr>
    <td>dig txt m1._domainkey.sub.domain.com</td>
    <td>TXT</td>
    <td>k=rsa; t=s; p=MIGfMA0GC...</td>
  </tr>
  <tr>
    <td>dig txt sub.domainkey.domain.com</td>
    <td>TXT</td>
    <td>v=spf1 include:sendgrid.net ~all</td>
  </tr>
</table>

{% anchor h3 %}
Email Links
{% endanchor %}

<table class="table">
  <tr>
    <th>Command</th>
    <th>Type</th>
    <th>ANSWER</th>
  </tr>
  <tr>
    <td>dig cname links.domain.com</td>
    <td>CNAME</td>
    <td>sendgrid.net</td>
  </tr>
  <tr>
    <td>dig cname 123456.domain.com</td>
    <td>CNAME</td>
    <td>sendgrid.net</td>
  </tr>
</table>

{% anchor h3 %}
IPs
{% endanchor %}

 <table class="table">
  <tr>
    <th>Command</th>
    <th>Type</th>
    <th>ANSWER</th>
  </tr>
  <tr>
    <td>dig a o1.default.domain.com</td>
    <td>A</td>
    <td>12.34.56.78 (your SendGrid IP address)</td>
  </tr>
</table>

You can also use the [DNSLookup](http://mxtoolbox.com/DNSLookup.aspx) tool provided by MxToolbox: enter the record you would like to check, and hit enter.

If you can successfully verify your DNS changes manually, but it won't validate in the tool, contact [Support](https://support.sendgrid.com/hc/en-us), and we can help you investigate.

{% anchor h2 %}
Where is my domain hosted?
{% endanchor %}

If you aren't sure what DNS provider hosts your domain use this command to find out:

{% codeblock %}
dig <<your_domain.com>> ns
{% endcodeblock %}

{% anchor h2 %}
Can I authenticate multiple domains?
{% endanchor %}

Yes, it’s possible to authenticate multiple domains. When multiple authenticated domains exist on your account, SendGrid will use the from address for each email you send through SendGrid and match it to a domain and branded link. If the from address does not match an existing authenticated domain, SendGrid will fall back to the domain you have chosen as the default.

{% anchor h2 %}
Domain authentication application logic
{% endanchor %}

Run through the application logic to understand why your sent emails may not be using `SendGrid.net` instead of the domain you authenticated.

{% info %}
If SendGrid cannot match your email to a valid authenticated domain, `SendGrid.net` is used.
{% endinfo %}

For any account, SendGrid attaches authenticated domain information in the following order, starting at the top of the list and applying the domain when the criteria are matched:

1. Valid authenticated domain that matches the domain in the FROM address.
1. Valid default authenticated domain.

*If no valid authenticated domains can be found, your mail domain defaults to sendgrid.net.*

For subusers, SendGrid attaches authenticated domain information in the following order, starting at the top of the list and applying the domain when the criteria are matched:

1. Authenticated domain **for this subuser** that matches the domain in the FROM address.
1. Default authenticated domain **for this subuser**.
1. Authenticated domain assigned by the parent account to this subuser.

*If no valid authenticated domains can be found, the sending domain defaults to sendgrid.net.*

{% anchor h2 %}
Additional resources
{% endanchor %}

- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)
- [How to set up link branding]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_link_branding.html)
- [How to set up reverse DNS]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html)
