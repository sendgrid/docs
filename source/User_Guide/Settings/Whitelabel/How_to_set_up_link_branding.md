---
layout: page
weight: 0
title: How to set up link branding
seo:
  title: How to set up link branding
  description: Email link branding allows all of the click-tracked links and opens tracked images in your emails to be from your domain instead of from sendgrid.net.
  keywords: whitelabeling, domain whitelabeling, link branding
navigation:
  show: false
---

- [What is domain authentication?](#-What-is-domain-authentication)
- [Key terminology](#-Key terminology)
    - [DNS](#-DNS)
    - [DKIM](#-DKIM)
    - [SPF](#-SPF)
    - [Content Delivery Network (CDN)](#-Content Delivery Network)
- [Setting up domain authentication](#-Setting-up-domain-authentication)
    - [Before you begin](#-Before-you-begin)
    - [Setting up DNS](#-Setting-up-DNS)
- [Advanced settings](#-Advanced-settings)
    - [Using automated security](#-Using-automated-security)
    - [Using a custom return path](#-Using-a-custom-return-path)
    - [Using a custom DKIM selector](#-Using-a-custom-DKIM-selector)
    - [Assigning a subuser](#-Assigning-a-subuser)
- [Troubleshooting](#-Troubleshooting)
- [Migrating from legacy Whitelabel](#-Migrating-from-legacy-Whitelabel)

{% anchor h2 %}
What is link branding?
{% endanchor %}

Email link branding allows all of the click-tracked links and opens tracked images in your emails to be from your domain instead of from sendgrid.net. Spam filters and recipient servers look at the links within emails to determine whether the email looks trustworthy enough to deliver - they use the reputation of the root domain to determine whether the links can be trusted. Implementing link labeling helps in email deliverability because you are no longer relying on click tracking going through a domain that you do not control.

{% anchor h2 %}
Key terminology
{% endanchor %}

TO DO: ADD DEFINITIONS
LET KAYLYN KNOW IF YOU THINK THIS IS MISSING TERMS

{% anchor h3 %}
DNS
{% endanchor %}

{% anchor h3 %}
DKIM
{% endanchor %}

{% anchor h3 %}
SPF
{% endanchor %}

{% anchor h3 %}
Content Delivery Network
{% endanchor %}

{% anchor h3 %}
Before you begin
{% endanchor %}

To set up link branding, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, you need to figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up link branding.

{% info %}
Note that you can also set up link branding when you set up your domain authentication and you may not need to set it up again.
{% endinfo %}

*To set up and verify link branding:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/whitelabel).
1. In the link branding section, click **Get Started**.
1. Next, add in information about your DNS host. CLick **Next**.
1. Enter the domain that you want to brand the links and images with and add advanced settings. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your from address on the emails you are sending out. For example, if I am branding with the domain `example@sendgrid.com`, I would set my link branding domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
1. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these videos: If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records that the recipient of the email can access for 48 hours [DOUBLE CHECK]. The recipient doesn't need login access to your SendGrid account.

Now links and images in your emails will have be from your custom domain. You only need to update your link branding if you want to update the domain that appears in the links in your email.

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
Using a custom return path
{% endanchor %}

Info coming soon.

{% anchor h3 %}
Assigning a subuser
{% endanchor %}

By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you authenticate a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

{% anchor h2 %}
Troubleshooting
{% endanchor %}

Info coming soon. Let Kaylyn know if you have any recommendations.

{% anchor h2 %}
Migrating from legacy Whitelabel
{% endanchor %}

Info coming soon.

{% anchor h2 %}
Additional resources
{% endanchor %}
- [link text]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML)
- [link text]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML)
- [link text]({{root_url}}/User_Guide/Marketing_Campaigns/design_editor.html#-Using-Custom-HTML)