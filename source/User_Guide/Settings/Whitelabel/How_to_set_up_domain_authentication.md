---
layout: page
weight: 0
title: How to set up domain authentication
seo:
  title: How to set up domain authentication
  description: Domain authentication shows email providers that SendGrid has your permission to send emails on your behalf. To give SendGrid permission, you point DNS entries from your domain registrar to SendGrid.
  keywords: whitelabeling, domain whitelabeling, domain authentication
navigation:
  show: false
---

- [What is domain authentication?]()
- [Key terminology]()
    - [DNS]()
    - [DKIM]()
    - [SPF]()
    - [Content Delivery Network (CDN)]()
- [Setting up domain authentication]()
    - [Before you begin]()
    - [Setting up DNS]()
    - [Verifying your DNS]()
    - [Advanced settings]()
- [Troubleshooting]()
- [Migrating from legacy Whitelabel]()

{% anchor h2 %}
What is domain authentication?
{% endanchor %}

Domain authentication shows email providers that SendGrid has your permission to send emails on your behalf. To give SendGrid permission, you point DNS entries from your domain registrar to SendGrid. Your recipients will no longer see the “via sendgrid.net” message on your emails.

Even though this is a small change from your recipients perspective, this change has a huge positive impact on your reputation as a sender and your email deliverability. Email service providers distrust messages that don't have domain authentication set up because they can not be sure that the message comes from you. Explicitly stating that it comes from you increases your reputation with email service providers which makes it much less likely that they will filter your mail and not allow it get to your recipient's inbox, which increases your deliverability. You are also explicitly showing your recipients that this email comes from you, so they are less likely mark your mail as spam.

{% anchor h2 %}
Key terminology
{% endanchor %}

{% anchor h3 %}
DNS
{% endanchor %}

[Content]

{% anchor h3 %}
DKIM
{% endanchor %}

{% anchor h3 %}
SPF
{% endanchor %}

{% anchor h3 %}
Content Delivery Network
{% endanchor %}

{% anchor h2 %}
Setting up domain authentication
{% endanchor %}

{% anchor h3 %}
Before you begin
{% endanchor %}

To set up domain authentication, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, you need to figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up domain authentication.

*To set up domain authentication:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/whitelabel).
1. In the domain authentication section, click **Get Started**.
1. Next, add in information about your DNS host, and indicate whether you also want to set up link branding. CLick **Next**. For more information about link branding, check out [What is link branding?]({{root_url}}/User_Guide/Settings/Sender_Authentication/How_to_set_up_link_branding.html#-What-is-link-branding).
1. Fill in the domain that you want to send from and add advanced settings. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your FROM address on the emails you are sending out. For example, if I am sending an email from `example@sendgrid.com`, I would set my domain authentication domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
1. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these videos: If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records that the recipient of the email can access for 48 hours [DOUBLE CHECK]. The recipient doesn't need login access to your SendGrid account.

It can take up to 48 hours for the records to verify after you upload them into your DNS host, so you will likely have to come back later to verify.

{% anchor h3 %}
Verifying your DNS
{% endanchor %}

Once you add the CNAME records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/whitelabel) and click **Verify**. If you click verify, and only half of your CNAME records verify, this usually means that you need to wait a bit longer.

Any time that you send an email with a FROM address whose domain matches the domain set in the domain authentication, SendGrid applies that domain to your email. You only need to update your domain authentication if you want to update the domain you are emailing from.

{% anchor h2 %}
Advanced settings
{% endanchor %}

{% anchor h3 %}
Using automated security
{% endanchor %}

Automated security allows SendGrid to handle all of the DKIM and SPF signing of your outbound email with CNAME records. This allows you to add dedicated IP addresses or upgrade your account without having to make any DNS changes.

Automated security defaults to **On**. If your DNS provider does not accept underscores in CNAME records, you will have to turn off Automated Security to use MX and TXT records.

When Automated Security is **On**, SendGrid generates three different CNAME records. In a later step of setting up domain authentication, you give these records to your DNS provider, and then you verify that they upload correctly.

If you select **Off**, we generate 1 MX record and 2 TXT records. In a later step of setting up domain authentication, you give these records to your DNS provider, and then you verify that they upload correctly.

{% anchor h3 %}
Using a custom return path
{% endanchor %}

Info coming soon.

{% anchor h3 %}
Using a custom DKIM selector
{% endanchor %}

Use a custom DKIM selector if you want to authenticate a single domain multiple times. This works by adding the custom selector to the domain as a custom subdomain.

*To use a custom DKIM selector:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Use a custom DKIM selctor** and input three letters or numbers to build a custom subdomain. If you don't select these, SendGrid automatically selects them for you. Make sure the three characters you select are different from your original selection.

{% anchor h3 %}
Assigning a subuser
{% endanchor %}

By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you authenticate a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

{% anchor h2 %}
Troubleshooting
{% endanchor %}

{% anchor h2 %}
Migrating from legacy Whitelabel
{% endanchor %}

{% anchor h2 %}
Additional resources
{% endanchor %}