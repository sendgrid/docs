---
st:
  published_at: 2016-10-14
  type: Classroom
seo:
  title: How to Setup a Domain Whitelabel
  description: Learn how to setup a domain whitelabel
  keywords: whitelabel, DKIM, SPF, CNAME, MX, TXT, domain whitelabel, domain, how to, tutorial
title: How to Setup a Domain Whitelabel
weight: 0
layout: page
navigation:
  show: true
---

Creating a domain whitelabel allows you to better authenticate the email that you send by removing the "sent via sendgrid.net" message that your recipients see on un-whitelabeled emails. This has the added benefit of giving you complete control over your sending reputation.

Inbox providers distrust messages that are not properly whitelabeled, and you will not be able to begin building a positive reputation until you complete the whitelabeling process.

{% anchor h2 %}
Creating a Domain Whitelabel
{% endanchor %}

**(1)** Navigate to your SendGrid Dashboard, click **Settings** in the left hand sidebar, and select **Whitelabels**.

**(2)** Under **Whitelabeled Domains**, Click **+Add Domain**.

![]({{root_url}}/images/domain_whitelabel_setup_1.png)

**(3)** If you have a subuser you would like create this whitelabel for, select that subuser now. Alternatively, you can create a whitelabel for your parent account and later assign that whitelabel to one of your subusers via subuser management.

By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, whilst maintaining the reputation of your parent account. Furthermore, subusers may not edit or delete domain whitelabels assigned to them, making this a good option for OEM and reseller accounts.

**(4)** Next, you need to specify the subdomain that you will use for your new domain whitelabel. Make sure that this subdomain is not used by any of your other sites or services. We recommend checking your current DNS settings with your DNS provider to confirm that the subdomain you would like to use is available. Try to pick a name for this subdomain that represents the type of email you will send using this new domain whitelabel. For example, "marketing" or "billing".

![]({{root_url}}/images/domain_whitelabel_setup_2.png)

{% warning %}
Your sending reputation will always be attributed to the reputation of your root, or top-level, domain. This is true even if you have several different subdomains with their domain whitelabels. For example, both **billing.example.com** and **marketing.example.com** will share the reputation of **example.com**.
{% endwarning %}

We recommend that you avoid the use of underscores in your subdomain, since the DNS records that SendGrid creates are based off of your subdomain and many DNS providers will not accept DNS records that include underscores. We will cover this limitation in more detail in step 7.

**(5)** Next, if you are creating a domain whitelabel on a new root domain, click **+Use New Domain** and enter the name of your new root domain.

Make sure that you only enter the name of your root domain. **Do not** include `www.` or `http://www.` in this field!

**Good:**

![]({{root_url}}/images/domain_whitelabel_setup_3.png)

**Bad:**

![]({{root_url}}/images/domain_whitelabel_setup_4.png)

**(6)** If you would like to set this new domain whitelabel as your default whitelabel, check the box next to **Default Whitelabel**. SendGrid will use your default whitelabel when no other valid whitelabels can be found. For more information on how SendGrid determines which whitelabel to use when delivering your email, click [here]({{root_url}}/User_Guide/Settings/Whitelabel/index.html#-Whitelabel-Application-Logic).

**(7)** Finally, you can select whether or not you would like to enable **Automated Security** for your new domain whitelabel. SendGrid recommends using automated security since it will allow SendGrid to handle all of the [DKIM]({{root_url}}/Glossary/dkim.html) and [SPF]({{root_url}}/Glossary/spf.html) signing of your outbound email with CNAME records. This allows you to add dedicated IP addresses or upgrade your account without having to make any DNS changes.

![]({{root_url}}/images/domain_whitelabel_setup_5.png)

If you set **Automated Security** to **ON**, SendGrid will generate 3 different CNAME records that you will have to give to your DNS provider.

If you set **Automated Security** to **OFF**, you will be provided with 1 MX record and 2 TXT records that you will have to give to your DNS provider. If your DNS provider does not accept underscores in CNAME records, you will have to turn off Automated Security to use MX and TXT records.

**(8)** Finally, click **Save**.

{% anchor h2 %}
Validating a Domain Whitelabel
{% endanchor %}

Before you can begin to use your new domain whitelabel, you must submit the DNS records provided by SendGrid to your DNS or hosting provider. For more detailed instructions on how to add these records to some popular DNS providers, click [here]({{root_url}}/Classroom/Troubleshooting/Authentication/whitelabel_video_tutorials.html#Whitelabeling-with-GoDaddy).

It can take up to 48 hours for these records to validate after creating them.

![]({{root_url}}/images/domain_whitelabel_setup_6.png)

Once you have entered your DNS records on your DNS provider's site, navigate back to your SendGrid Dashboard and go to your whitelabel settings.

Under your new domain whitelabel, click **Validate Record**.

**Remember:** if one or more of your DNS records fails to validate, you may need to wait longer for them to propagate.

![]({{root_url}}/images/domain_whitelabel_setup_7.png)

{% anchor h2 %}
Managing Your Domain Whitelabels
{% endanchor %}

Once you have created and validated your domain whitelabel, there is little work you need to do to maintain it.

Any time that you send email with a FROM address whose domain matches the domain of your new whitelabel, SendGrid will apply that whitelabel to your email.

You can change a whitelabel's default status at any time by navigating to your whitelabel settings page, clicking the action cog next to your default whitelabel and clicking **Remove Default Status**.

![]({{root_url}}/images/domain_whitelabel_setup_8.png)

To delete one of your domain whitelabels, navigate to your whitelabel settings page, click to view the whitelabel you want to delete and click **Delete**. Alternatively, you can click the action cog next to your domain whitelabel and click **Delete**.

{% anchor h2 %}
Related Resources
{% endanchor %}

* [How to Setup an IP Whitelabel]({{root_url}}/Classroom/Basics/Whitelabel/setup_ip_whitelabel.html)
* [Whitelabel User Guide]({{root_url}}/User_Guide/Settings/Whitelabel/index.html)
* [Domain Whitelabel API Reference]({{root_url}}/API_Reference/Web_API_v3/Whitelabel/domains.html)
* [Whitelabel Video Tutorials]({{root_url}}/Classroom/Troubleshooting/Authentication/whitelabel_video_tutorials.html)
