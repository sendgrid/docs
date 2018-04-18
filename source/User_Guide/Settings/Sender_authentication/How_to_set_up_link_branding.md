---
layout: page
weight: 0
title: How to set up link branding
navigation:
  show: true
seo:
  title: How to set up link branding
  override: true
  description: Set up link branding to improve your deliverability and security of your emails.
---

<iframe src="https://player.vimeo.com/video/265136044" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


- [What is link branding?](#-What-is-link-branding)
- [Key terminology](#-Key terminology)
    - [DNS](#-DNS)
    - [CDN](#-CDN)
    - [CNAME](#-CNAME)
- [Setting up link branding](#-Setting-up-link-branding)
    - [Before you begin](#-Before-you-begin)
    - [Setting up DNS](#-Setting-up-DNS)
- [Advanced settings](#-Advanced-settings)
    - [Using a custom return path](#-Using-a-custom-return-path)
    - [Assigning a subuser](#-Assigning-a-subuser)
- [Migrating from legacy Whitelabel](#-Migrating-from-legacy-Whitelabel)

{% anchor h2 %}
What is link branding?
{% endanchor %}

Email link branding allows all of the click-tracked links and opens tracked images in your emails to be from your domain instead of from sendgrid.net. Spam filters and recipient servers look at the links within emails to determine whether the email looks trustworthy enough to deliver - they use the reputation of the root domain to determine whether the links can be trusted. Implementing link labeling helps in email deliverability because you are no longer relying on click tracking going through a domain that you do not control.

{% anchor h2 %}
Key terminology
{% endanchor %}

{% anchor h3 %}
DNS
{% endanchor %}

DNS stands for Domain Name System. This is a naming system for domains on the internet. When SendGrid refers to your DNS, we are talking about your domain name that you want to send emails from, or that you want to link images from. When we talk about your DNS provider, we are talking about the service that hosts your domain name. For example, GoDaddy, Rackspace, or Cloudflare. For more information about DNS, see our [DNS glossary page]({{root_url}}/Glossary/dns.html).

{% anchor h3 %}
CDN
{% endanchor %}

A CDN (content delivery network) is a network that delivers the content of webpages to the end user. The network selects the servers for delivery based on the location of the end user, the originating location of the webpage and the location of the content delivery server. Content Delivery Networks are a great mechanism that you can use to serve up content very quickly and easily across multiple mediums as well as handle security certificates for you.

We suggest [CloudFlare]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-CloudFlare), [Fastly]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-Fastly), or [KeyCDN]({{root_url}}/User_Guide/Setting_Up_Your_Server/content_delivery_networks.html#-Using-KeyCDN) when using Content Delivery Networks with SendGrid.

{% anchor h3 %}
CNAME
{% endanchor %}

The CNAME record creates an alias for subdomain.yourdomain.com and points to sendgrid.net. The CNAME is needed for our click and open tracking features in order for those statistics to be routed back to your SendGrid account. This will also be what your messages are signed by, so your recipients will be able see what you have chosen for your CNAME. You set up the CNAME files that SendGrid provides with your DNS host. For more information about CNAME, see our [CNAME glossary page]({{root_url}}/Glossary/cname.html).

{% anchor h3 %}
Before you begin
{% endanchor %}

To set up link branding, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up link branding.

{% info %}
Note that you can also set up link branding when you set up your domain authentication and you may not need to set it up again.
{% endinfo %}

*To set up and verify link branding:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/whitelabel).
1. In the link branding section, click **Get Started**.
1. Next, add in information about your DNS host. CLick **Next**.
1. Enter the domain that you want to brand the links and images with and add advanced settings. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your from address on the emails you are sending out. For example, if I am branding with the domain `example.sendgrid.com`, I would set my link branding domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
1. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these [videos](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/providers.html). If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records. This link does expire. The recipient doesn't need login access to your SendGrid account.

Now links and images in your emails will have be from your custom domain. You only need to update your link branding if you want to update the domain that appears in the links in your email.

It can take up to 48 hours for the records to verify after you upload them into your DNS host, so you will likely have to come back later to verify.

{% anchor h3 %}
Verifying your DNS
{% endanchor %}

Once you add the CNAME records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/whitelabel) and click **Verify**.

{% info %}
If you click verify, and only half of your CNAME records verify, this usually means that you need to wait a bit longer. It's also possible that you entered one of your records in incorrectly. For other troubleshooting information, see [Sender authentication troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html).
{% endinfo %}

Any time that you send an email with image or links that match the branded link, SendGrid applies that link to your email. You only need to update your link branding if you want to update the links used in your emails.

{% anchor h2 %}
Advanced settings
{% endanchor %}

{% anchor h3 %}
Using a custom subdomain for links
{% endanchor %}

*To customize your subdomain:*

When you are in the process of branding a link, and on the screen where you input domain settings, open the advanced settings, select **Custom subdomain for links** and input letters or numbers to build a custom domain. If you don't select these, SendGrid automatically selects them for you. Make sure the characters you select are different from what SendGrid assigned you initially.

{% anchor h3 %}
Assigning a subuser
{% endanchor %}

By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you assign a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

{% anchor h2 %}
Migrating from legacy Whitelabel
{% endanchor %}

If you set up a whitelabel before 2015, your whitelabel will still work. However, if you need to change or update it, you need to delete it and recreate it as an authenticated domain in our new system. If you do set up a new branded link, make sure to keep the same subdomain for domain authentication, but then use a different one for link branding.

If you set up a whitelabel after 2015, it has been automatically migrated to our new sender authentication system.

{% anchor h2 %}
Additional resources
{% endanchor %}

- [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html)
- [How to set up reverse DNS]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_reverse_dns.html)
- [Troubleshooting]({{root_url}}/User_Guide/Settings/Sender_authentication/Troubleshooting.html)
