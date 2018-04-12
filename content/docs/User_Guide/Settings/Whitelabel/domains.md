---
layout: page
weight: 0
title: Domains
seo:
  title: Whitelabel Domains
  description: Whitelabeling domains allows you to use your domain's reputation when sending.
  keywords: whitelabeling, domain Whitelabeling
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/149585179" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% info %}
When in doubt, contact your DNS registrar or web hosting service's technical support department. All information in this document complies with the DNS standards, but some registrars and web hosting providers handle things differently.
{% endinfo %}

SendGrid’s domain whitelabel allows you to whitelabel your domain and get rid of the “via sendgrid.net” message on your emails, even if you don’t have a dedicated IP address with SendGrid. You can start to build your domain’s email reputation and explicitly show all your recipients that you actually sent these emails. This should help increase your deliverability rates and reduce your potential for spam reports.

Whitelabeling is critical to your reputation as a sender. Inbox providers distrust messages that are not properly whitelabeled, and you will not be able to begin building your reputation until you complete the whitelabeling process.

There are a few quick points worth highlighting before you dive into the whitelabeling process.

* You can only create one whitelabel per domain.
* The domain whitelabeling process requires you to create a subdomain of your root domain to whitelabel and send email from.
* Your reputation is always attributed to your root domain, regardless of the subdomain you whitelabel, or even if you switch subdomains.

If you have three different subdomains that you have whitelabeled and send email from, they will all share the same reputation.

For example: **marketing.yourdomain.com**, **billing.yourdomain.com**, and **support.yourdomain.com** will all contribute to, and share the reputation of, **yourdomain.com**.

* You can only have one default whitelabel at a time. By setting a new whitelabel as default, it will replace any other whitelabel you previously set as the default.
* Regardless of whether you choose to use automated or manual security, you will still have to manually add new DNS entries to your DNS or hosting provider.
* Subusers can only access their own whitelabels. They cannot access the parent whitelabels or whitelabels created by other subusers.
* All whitelabels must be verified before they can be used.

We provide all the information about every step of the process below, so that you can set up your whitelabel quickly and easily.

{% info %}
Marketing Campaigns [Sender Identities]({{root_url}}/User_Guide/Marketing_Campaigns/senders.html) that use the same domain as your domain whitelabel will automatically verify.
{% endinfo %}

<page-anchor el="h2">
Domain Whitelabel Settings
</page-anchor>

<page-anchor el="h3">
On Behalf of User
</page-anchor>

This setting lets you assign a whitelabel to a subuser account or your parent account. A subuser can set up their own whitelabel, but if the parent account assigns a whitelabel to a subuser, that subuser will not be able to edit or modify the settings of the assigned whitelabel.

<page-anchor el="h3">
Subdomain
</page-anchor>

This is the “prefix” of the domain that you are actually whitelabeling. Historically, we have suggested prefixes like “em,” “em1,” etc. However, you can use whatever subdomain you would like to use.

We do not suggest that you use “mail” as the name of your subdomain, because this is a subdomain that many registrars or hosting companies will automatically set up for your personal email usage. This can cause conflicts that may impact your email reputation.

{% warning %}
The subdomain that you use for your domain whitelabel must be different from the subdomain for your link whitelabel because each whitelabel must have their own unique CNAME records!
{% endwarning %}

Even though your domain whitelabel and email link whitelabel use different subdomains, the reputation of your root domain and your IP address are what recipient servers and spam filters use to determine whether or not your email is delivered.

<page-anchor el="h3">
Domain
</page-anchor>

{% warning %}
If you add a new default domain whitelabel for a domain that is already whitelabeled on your account, you risk invalidating and removing the default status of the previously set up whitelabel.
{% endwarning %}

{% info %}
Your domain whitelabel will not affect your email link whitelabel and vice versa.
{% endinfo %}

The domain is the root domain for your subdomain. This is the domain that will receive the email reputation from the whitelabel. Your root domain should match your FROM email address. If you are sending from newsletteexampexample@example.com, then you should whitelabel subdomain.example.com, so the root domains match.

<page-anchor el="h3">
Use New Domain
</page-anchor>

Allows you to add a new domain to your whitelabel options.

<page-anchor el="h3">
Default Whitelabel
</page-anchor>

{% info %}
You can only have one default whitelabel.
{% endinfo %}

Your default whitelabel is your fallback when you send emails. It will be used for all sending on your account, unless you have multiple valid whitelabels and one of them matches your FROM email domain. If there is no valid whitelabel that matches the domain in your  FROM email address, then your whitelabel will fall back to your default domain whitelabel. For more information, see the [Whitelabel Application Logic]({{root_url}}/User_Guide/Settings/Whitelabel/index.html#-Whitelabel-Application-Logic).

<page-anchor el="h3">
Automated Security
</page-anchor>

{% warning %}
We recommend avoiding the use of underscores in your subdomains because many DNS providers do not accept CNAME records that include underscores.

If your DNS provider doesn't support underscores in CNAME records, you will have to disable automated security to use a different set of DNS records.
{% endwarning %}

Instead of managing your DNS records for every single change you make, SendGrid can manage your SPF and DKIM record updates for you. This option will change the DNS records that you point at SendGrid for your domain, allowing the responsibility of updating the records to pass through to SendGrid. This means that DKIM and SPF records will all be handled by SendGrid once this whitelabel is verified.

If you choose not to have SendGrid manage your DNS records, then you’ll be shown all of the manual DNS records that you need to enter at your registrar or host. You will be responsible for making any updates to your DNS settings for any changes on your account. The records you are given will be MX, DKIM, and SPF records to enter at your registrar, hosting company, or DNS manager. This will also mean that your SPF record will include all of SendGrid’s IP addresses.

**It is important to remember that you will always be provided with a custom DKIM signature, regardless of whether or not you use automated security.** However, with automated security turned off, SendGrid will not automatically update your DKIM signature whenever you make a change to your account that could affect your DNS records (like adding a dedicated IP).

If you turn off automated security, you will be responsible for updating your DNS records whenever you upgrade your account or add additional dedicated IPs. For example, with automated security turned off, you will have to manually add your new IP addresses to your SPF record from your whitelabel settings. Once you have updated these DNS records, your outbound mail will continue to be signed using your custom DKIM signature.

<page-anchor el="h3">
Creating a Domain Whitelabel
</page-anchor>

When you enter the information for your whitelabel and click “Save,” SendGrid will update its own internal DNS to prepare for your whitelabel settings. This process may take up to 20 seconds.

We will then give you the DNS records that you need to give your DNS provider.

{% info %}
You may create up to a maximum of 1500 domain whitelabels.
{% endinfo %}

<page-anchor el="h3">
Validate Your Domain Whitelabel
</page-anchor>

{% warning %}
SendGrid will not start using your whitelabels until they are validated! Until they are validated, you will still see "via sendgrid.net" on your emails.
{% endwarning %}

Once you have made the DNS changes, you need to validate your whitelabel:

1. Click **Settings** in the left hand sidebar. Under **Whitelabels**, click **Domains**.
2. Click the gear icon next to your new whitelabel and click **Validate**.
3. Alternatively, if you are viewing your new domain whitelabel, simply click the **Validate** button

If everything is set up properly and the DNS records have propagated, then SendGrid will verify your whitelabel and begin to apply this whitelabel to your emails according to SendGrid's [Whitelabel Application Logic]({{root_url}}/User_Guide/Settings/Whitelabel/index.html#-Whitelabel-Application-Logic).

If you are having trouble validating your DNS records, please see this [helpful Classroom article]({{root_url}}/Classroom/Troubleshooting/Authentication/i_have_created_dns_records_but_the_whitelabel_wizard_is_not_validating_them.html).

<page-anchor el="h2">
Changing or Replacing a Domain Whitelabel
</page-anchor>

<page-anchor el="h3">
Examples of Why You Might Change or Replace a Domain Whitelabel
</page-anchor>

1. If you were a SendGrid customer before May 27th, 2015 and you want to update to the new whitelabel system.
2. You want to change your domain whitelabel
3. [You add IP address to your SendGrid account]({{root_url}}/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)

The steps for changing or replacing a whitelabel are easy!

1. Follow the steps to create a new whitelabel
2. Verify your whitelabel

That's it! Easy!

<page-anchor el="h2">
Managing and Viewing Your Domain Whitelabel
</page-anchor>

If you need to check the status of a whitelabel, you can see the “at a glance” information from the Domains Whitelabel page. However, if you’re looking for more in-depth information or you need to find the DNS settings for your whitelabel then just click the gear icon next to the whitelabel and select **View**.

From this page, you’ll be able to see all of the settings you entered when setting up your whitelabel, whether or not the whitelabel is valid, and all of the DNS settings you need for this whitelabel.

<page-anchor el="h3">
Adding an IP Whitelabel to Your Account
</page-anchor>

When you add an IP address to your SendGrid account and you have automated security turned on, SendGrid will add your IPs to your SPF record automatically. When you get to 10 IPs, we will use SendGrid.net ~all due to the character limitation of SPF records.

If you have more than 10 dedicated IP addresses, we recommend that you manually control your DNS records and chain your SPF records as well.

If you have automatic DNS security turned off, you will need to manually add your IPs to your SPF records each time you purchase a new IP address.

<page-anchor el="h2">
Deleting a Domain Whitelabel
</page-anchor>

{% info %}
You cannot recover deleted domain whitelabels.
{% endinfo %}

To delete one of your domain whitelabels, navigate to your domain whitelabel settings and click the action menu next to the whitelabel you want to delete and click **Delete**. Alternatively, if you are already viewing the details for your domain whitelabel, click the **Delete** button in the bottom right hand corner.

{% info %}
You can NOT delete the default domain whitelabel. You must replace it if you want to change it.
{% endinfo %}

Once deleted, the internal SendGrid DNS entries will be deleted and any email you send will revert to the appropriate whitelabel settings according the Whitelabel Application Logic.

<page-anchor el="h2">
Using the API
</page-anchor>

[Manage your domain whitelabel via our v3 Web API!]({{root_url}}/API_Reference/Web_API_v3/Whitelabel/domains.html)
