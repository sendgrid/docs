---
layout: page
weight: 0
title: How to set up domain authentication
navigation:
  show: true
seo:
  title: How to set up domain authentication
  override: true
  description: Set up sender authentication to improve your deliverability and security of your emails.
---

<iframe src="https://player.vimeo.com/video/265066856" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

- [What is domain authentication?](#-What-is-domain-authentication)
- [Key terminology](#-Key terminology)
    - [DNS](#-DNS)
    - [DKIM](#-DKIM)
    - [SPF](#-SPF)
    - [CNAME](#-CNAME)
- [Setting up domain authentication](#-Setting-up-domain-authentication)
    - [Before you begin](#-Before-you-begin)
    - [Setting up DNS](#-Setting-up-DNS)
- [Advanced settings](#-Advanced-settings)
    - [Using automated security](#-Using-automated-security)
    - [Using a custom return path](#-Using-a-custom-return-path)
    - [Using a custom DKIM selector](#-Using-a-custom-DKIM-selector)
    - [Assigning a subuser](#-Assigning-a-subuser)
- [Migrating from legacy Whitelabel](#-Migrating-from-legacy-Whitelabel)

{% anchor h2 %}	What is domain authentication?
{% endanchor %}	
Domain authentication shows email providers that SendGrid has your permission to send emails on your behalf. To give SendGrid permission, you point DNS entries from your DNS provider (like GoDaddy, Rackspace, or Cloudflare) to SendGrid. Your recipients will no longer see the “via sendgrid.net” message on your emails.

Even though this is a small change from your recipients perspective, this change has a huge positive impact on your reputation as a sender and your email deliverability. Email service providers distrust messages that don't have domain authentication set up because they can not be sure that the message comes from you. Explicitly stating that it comes from you increases your reputation with email service providers which makes it much less likely that they will filter your mail and not allow it get to your recipient's inbox, which increases your deliverability. You are also explicitly showing your recipients that this email comes from you, so they are less likely to mark your mail as spam.

{% anchor h2 %}	Key terminology
{% endanchor %}	
{% anchor h3 %}	DNS
{% endanchor %}	
DNS stands for Domain Name System. This is a naming system for domains on the internet. When SendGrid refers to your DNS, we are talking about your domain name that you want to send emails from, or that you want to link images from. When we talk about your DNS provider, we are talking about the service that hosts your domain name. For example, GoDaddy, Rackspace, or Cloudflare. For more information about DNS, see our [DNS glossary page]({{root_url}}/glossary/dns.html).

{% anchor h3 %}	DKIM
{% endanchor %}	
DKIM stands for DomainKeys Identified Mail which was designed to help email providers prevent malicious email senders by validating email from specific domains.

As one of the most popular email authentication methodologies, it works by using cryptographic technology that adds a digital signature to your message header. This DKIM signature validates and authorizes your domain name in the eyes of the receiver. The DKIM signature is created using a unique string of characters stored as a public key.

When your email is received, the public key is retrieved through the DNS and decrypted by the receiver to allow them to confidently verify the identity of your domain. For more information about DKIM, see our [DKIM glossary page]({{root_url}}/glossary/dkim.html).

{% anchor h3 %}	SPF
{% endanchor %}	
Sender Policy Framework (SPF) is an email authentication standard developed by AOL that compares the email sender’s actual IP address to a list of IP addresses authorized to send mail from that domain. The IP list is published in the domain’s DNS record. For more information about SPF, check out our [SPF glossary page]({{root_url}}/glossary/spf.html).

{% anchor h3 %}	CNAME
{% endanchor %}	
The CNAME record creates an alias for subdomain.yourdomain.com and points to sendgrid.net. The CNAME is needed for our click and open tracking features in order for those statistics to be routed back to your SendGrid account. This will also be what your messages are signed by, so your recipients will be able see what you have chosen for your CNAME. You set up the CNAME files that SendGrid provides with your DNS host. For more information about CNAME, see our [CNAME glossary page]({{root_url}}/glossary/cname.html).

{% anchor h2 %}	Setting up domain authentication
{% endanchor %}	
{% anchor h3 %}	Before you begin
{% endanchor %}	
To set up domain authentication, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up domain authentication.

*To set up domain authentication:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/sender_auth).
1. In the domain authentication section, click **Get Started**.
1. Next, add in information about your DNS host, and indicate whether you also want to set up link branding. Click **Next**. For more information about link branding, check out [What is link branding?]({{root_url}}/help-support/getting-started/how-to-set-up-link-branding.html#-What-is-link-branding).
1. Fill in the domain that you want to send from and add advanced settings as needed. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your FROM address on the emails you are sending out. For example, if I am sending an email from `example@sendgrid.com`, I would set my domain authentication domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
1. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these [videos]({{root_url}}/help-support/getting-started/dns-providers.html). If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records. This link does expire. The recipient doesn't need login access to your SendGrid account.

<call-out>

If you [turn off automated security](#-Using-automated-security), you add TXT and MX records in this step instead of CNAME records.

</call-out>

It can take up to 48 hours for the records to verify after you upload them into your DNS host, so you will likely have to come back later to verify.

{% anchor h3 %}	Verifying your DNS
{% endanchor %}	
Once you add the CNAME records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/sender_auth) and click **Verify**.

<call-out>

If you click verify, and only half of your CNAME records verify, this usually means that you need to wait a bit longer. It's also possible that you entered one of your records in incorrectly. For other troubleshooting information, see [Sender authentication troubleshooting]({{root_url}}/help-support/getting-started/troubleshooting-sender-authentication.html).

</call-out>

Any time that you send an email with a FROM address whose domain matches the domain set in the domain authentication, SendGrid applies that domain to your email. You only need to update your domain authentication if you want to update the domain you are emailing from.

{% anchor h2 %}	Advanced settings
{% endanchor %}	
<iframe src="https://player.vimeo.com/video/267486083" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% anchor h3 %}	Using automated security
{% endanchor %}	
 Automated security allows SendGrid to handle the signing of your DKIM and authentication of your SPF for your outbound email with CNAME records. This allows you to add a dedicated IP address or update your account without having to update your SPF record.

Automated security defaults to **On**. If your DNS provider does not accept underscores in CNAME records, you will have to turn off Automated Security to use MX and TXT records.

When Automated Security is **On**, SendGrid generates three different CNAME records. In a later step of setting up domain authentication, you give these records to your DNS provider, and then you verify that they upload correctly.

If you select **Off**, we generate 1 MX record and 2 TXT records. In a later step of setting up domain authentication, you give these records to your DNS provider, and then you verify that they upload correctly.

<call-out>

If you turn off automated security, you are responsible for managing and updating the MX and TXT records yourself.

</call-out>

{% anchor h3 %}	Using a custom return path
{% endanchor %}	
Use a custom return path to customize your subdomain.

*To use a custom return path:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Use a custom return path** and input letters or numbers to build a custom return path. If you don't select these, SendGrid automatically selects them for you. Make sure the characters you select are different from what SendGrid assigned you initially.

{% anchor h3 %}	Using a custom DKIM selector
{% endanchor %}	
Use a custom DKIM selector if you want to authenticate a single domain multiple times. This works by adding the custom selector to the domain as a custom subdomain.

*To use a custom DKIM selector:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Use a custom DKIM selector** and input three letters or numbers to build a custom subdomain. If you don't select these, SendGrid automatically selects them for you. Make sure the three characters you select are different from your original selection. For example, you could use `org` or `001`.

{% anchor h3 %}	Assigning a subuser
{% endanchor %}	
By assigning an authenticated domain to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you assign a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

{% anchor h2 %}	Migrating from legacy Whitelabel
{% endanchor %}	
If you set up a whitelabel before 2015, your whitelabel will still work. However, if you need to change or update it, you need to delete it and recreate it as an authenticated domain in our new system.

If you set up a whitelabel after 2015, it has been automatically migrated to our new domain authentication system.

{% anchor h2 %}	Additional resources
{% endanchor %}	
- [How to set up link branding]({{root_url}}/help-support/getting-started/how-to-set-up-link-branding.html)
- [How to set up reverse DNS]({{root_url}}/help-support/getting-started/how-to-set-up-reverse-dns.html)
- [Troubleshooting]({{root_url}}/help-support/getting-started/troubleshooting-sender-authentication.html)
