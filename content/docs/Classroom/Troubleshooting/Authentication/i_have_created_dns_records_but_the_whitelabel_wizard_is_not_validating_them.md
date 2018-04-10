---
seo:
  title: I have created DNS records, but the Whitelabel process is not validating them.
  description: I have created DNS records, but the Whitelabel Wizard is not validating them.
  keywords: double, cname, spf, dkim, white, whitelabel, dns, validation, validate, wizard, txt, and, confirm, red, x, validated, records, proceed, em, hat, check, email., em., A record, _domainkey, v=spf, out of, twice
title: I have created DNS records, but the Whitelabel process is not validating them.
weight: 0
layout: page
zendesk_id: 204075436
navigation:
  show: true
---

Whitelabeling your account is one of the best things you can do to maintain good deliverability. However, the complexity of setting it up, and the variability of hosting provider settings can sometimes make the experience frustrating.

A common hurdle that many users encounter during the whitelabel process is that DNS records fail to validate, even though the records were just created! Below are some steps you can take to troubleshoot potential issues with recently created DNS records.

{% anchor h3 %}
Allow Your DNS Records to Propagate
{% endanchor %}

9 times out of 10, this validation issue can be solved with a judicious application of time. DNS records must take time to propagate throughout the internet before we can detect if they exist, and are indeed correct.

Propagation can take anywhere from a few hours to a few days, depending on your DNS host. We've found that popular hosts such as Godaddy and DNSMadeEasy will typically take around an hour or so to propagate new records out to where we can detect them.

We recommend giving DNS changes at least an hour to propagate, and then trying to validate the records again. If validation still fails, you can move on to verifying your records manually, or contact your DNS host to see if they can speed up the process or manually push the changes through for you.

{% anchor h3 %}
Verify Your DNS Records Manually
{% endanchor %}

To check if a DNS record has been propagated, use the simple Unix command **DIG** to check your whitelabel records. The easiest way to do this is to use **Terminal** on a Mac platform.

Use the commands from the table below to check the accuracy of records. The **ANSWER** section of the output should contain what is displayed in the answer column of the table. If the **ANSWER** section of the dig return is empty, that usually means that either the record does not exist or has yet to propagate.

Please note that the example records below will differ from those presented to you in the whitelabel process, be sure to use the records that are displayed in the SendGrid.com website.

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

![]({{root_url}}/images/terminaldigcname.png)

You can also use the [DNSLookup](http://mxtoolbox.com/DNSLookup.aspx) tool provided by MxToolbox: simply enter the record you would like to check, and hit enter.

If you are able to successfully verify your DNS changes manually, and the whitelabel still will not accept them, feel free to contact Support, and we can help you investigate.

{% anchor h3 %}
Check for TLD Auto-Appending
{% endanchor %}

Some DNS hosts will automatically add your top-level domain to the end of DNS records you create, which can turn a CNAME for "email.domain.com" into "email.domain.com.domain.com".

Be sure to follow the convention on existing records in your DNS panel when adding new ones, as sometimes you will only need to add what is to the left of the top-level domain.

i.e. A CNAME for "email." becomes "email.domain.com"


**Use GoDaddy? Watch our handy video guide for whitelabeling!**


<iframe src="https://player.vimeo.com/video/149805633" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h3 %}
Tools
{% endanchor %}

- Check global propagation: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
- Check DNS records online: [http://mxtoolbox.com/DNSLookup.aspx](http://mxtoolbox.com/DNSLookup.aspx)

If you continue to have problems validating your whitelabel or you have further questions that have not been addressed here, please contact our [Customer Support](https://support.sendgrid.com/hc/en-us).
