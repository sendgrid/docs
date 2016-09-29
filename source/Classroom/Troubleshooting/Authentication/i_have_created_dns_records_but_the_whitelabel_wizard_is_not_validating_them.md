---
seo:
  title: I have created DNS records, but the Whitelabel Wizard is not validating them.
  description: I have created DNS records, but the Whitelabel Wizard is not validating them.
  keywords: double, cname, spf, dkim, white, whitelabel, dns, validation, validate, wizard, txt, and, confirm, red, x, validated, records, proceed, em, hat, check, email., em., A record, _domainkey, v=spf, out of, twice
title: I have created DNS records, but the Whitelabel Wizard is not validating them.
weight: 0
layout: page
zendesk_id: 204075436
navigation:
  show: true
---

Whitelabeling your account is one of the best things you can do to maintain good deliverability. However, the complexity of setting it up, and the variability of hosting provider settings can sometimes make the experience frustrating.

A common hurdle that many users encounter is that Step 2 of the Whitelabel Wizard fails to validate DNS records they have just created!

{% warning %}
If you created a whitelabel before February 15, 2016, with Automated Security enabled but have not validated the whitelabel, you will need to generate new CNAMEs. We have made a slight formatting change to the CNAMEs we generate, and any any unvalidated CNAMEs generated before February 15, 2016, must be replaced. Whitelabeling functionality has not been altered in any way, and whitelabels that have already been validated are unaffected by this update.
{% endwarning %}

 

![]({{root_url}}/images/iwl.gif)

 

**Allow your DNS records to propagate**

9 times out of 10, this issue can be solved with a judicious application of time.  DNS records must take time to propagate throughout the internet before we can check to see if they 1.) Exist, and 2.) Are correct.

Propagation can take anywhere from a few hours to several days, depending on your DNS host. We've found that popular hosts such as Godaddy, and DNSMadeEasy will typically take around an hour or so to propagate new records out to where we can find them. 

We recommend giving DNS changes at least an hour to propagate, and then trying the "Validate and Confirm" button again. If validation still fails, you can move on to verifying your records manually, or contact your DNS host to see if they can speed up the process.

 

**Verify your records manually**

To check if a DNS record is up to date, simply use the Unix command DIG to check your whitelabel subdomain. The easiest way to go about this is to use Terminal on a Mac platform. 

Use the commands from the table below to check the accuracy of records. The ANSWER section of the output should contain what is displayed in the answer column of the table.

If the ANSWER section of the dig return is empty, that usually means that either the record does not exist or has yet to propagate.

Examples:

<table class="table">
  <tr>
    <th>Command</th>
    <th>Type</th>
    <th>ANSWER</th>
  </tr>
  <tr>
    <td>dig cname sub.domain.com</td>
    <td>CNAME</td>
    <td>sendgrid.net</td>
  </tr>
  <tr>
    <td>dig txt smtpapi.\_domainkey.sub.domain.com</td>
    <td>TXT</td>
    <td>k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB</td>
  </tr>
  <tr>
    <td>dig txt smtpapi.\_domainkey.domain.com</td>
    <td>TXT</td>
    <td>k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB</td>
  </tr>
  <tr>
    <td>dig txt domain.com</td>
    <td>TXT</td>
    <td>[v=spf1 include:sendgrid.net ~all]({{root_url}}/Classroom/Deliver/Sender_Authentication/spf_records_explained.html)</td>
  </tr>
  <tr>
    <td>dig a o\*.sub.domain.com</td>
    <td>A</td>
    <td>Your Sendgrid IP address</td>
  </tr>
</table>

 

![]({{root_url}}/images/terminaldigcname.png)

If you are not using a Mac, you can also use the [DNSLookup](http://mxtoolbox.com/DNSLookup.aspx) tool provided by MxToolbox, simply input the record you would like to check, and hit enter.

If you are able to successfully verify your DNS changes manually, and the Whitelabel Wizard still will not accept them, feel free to contact Support using the options below, and we can help you investigate. 

 

**Check for TLD auto-appending**

Some DNS hosts will automatically add your top-level domain to the end of DNS records you create, which can turn a CNAME for "email.domain.com" into "email.domain.com.domain.com". 

Be sure to follow the convention on existing records in your DNS panel when adding new ones, as sometimes you will only need to add what is to the left of the top-level domain. 

i.e. A CNAME for "email." becomes "email.domain.com"

 

**Use GoDaddy? Watch our handy video guide for whitelabel!**

<iframe src="https://player.vimeo.com/video/149805633" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


 

 

**Tools:**

Check global propagation: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

Check DNS records online: [http://mxtoolbox.com/DNSLookup.aspx](http://mxtoolbox.com/DNSLookup.aspx)

If you continue to have problems validating your whitelabel or you have further questions that have not been addressed here, please contact our [Customer Support](https://support.sendgrid.com/hc/en-us).
