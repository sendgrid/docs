---
layout: page
weight: 0
title: How to set up link branding
group: delivery-optimization
navigation:
  show: true
seo:
  title: How to set up link branding
  override: true
  description: Set up link branding to improve your deliverability and security of your emails.
---

<iframe src="https://player.vimeo.com/video/265136044" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## 	What is link branding?
 	
Email link branding allows all of the click-tracked links and opens tracked images in your emails to be from your domain instead of from sendgrid.net. Spam filters and recipient servers look at the links within emails to determine whether the email looks trustworthy enough to deliver - they use the reputation of the root domain to determine whether the links can be trusted. Implementing link labeling helps in email deliverability because you are no longer relying on click tracking going through a domain that you do not control.

## 	Key terminology
 	
 ### 	DNS
 	
DNS stands for Domain Name System. This is a naming system for domains on the internet. When SendGrid refers to your DNS, we are talking about your domain name that you want to send emails from, or that you want to link images from. When we talk about your DNS provider, we are talking about the service that hosts your domain name. For example, GoDaddy, Rackspace, or Cloudflare. For more information about DNS, see our [DNS glossary page]({{root_url}}/glossary/dns/).

 ### 	CDN
 	
A CDN (content delivery network) is a network that delivers the content of webpages to the end user. The network selects the servers for delivery based on the location of the end user, the originating location of the webpage and the location of the content delivery server. Content Delivery Networks are a great mechanism that you can use to serve up content very quickly and easily across multiple mediums as well as handle security certificates for you.

We suggest [CloudFlare]({{root_url}}/help-support/sending-email/content-delivery-networks/#using-cloudFflare), [Fastly]({{root_url}}/help-support/sending-email/content-delivery-networks/#using-fastly), or [KeyCDN]({{root_url}}/help-support/sending-email/content-delivery-networks/#using-keycdn) when using Content Delivery Networks with SendGrid.

 ### 	CNAME
 	
The CNAME record creates an alias for subdomain.yourdomain.com and points to sendgrid.net. The CNAME is needed for our click and open tracking features in order for those statistics to be routed back to your SendGrid account. This will also be what your messages are signed by, so your recipients will be able see what you have chosen for your CNAME. You set up the CNAME files that SendGrid provides with your DNS host. For more information about CNAME, see our [CNAME glossary page]({{root_url}}/glossary/cname/).

 ### 	Before you begin
 	
To set up link branding, you must submit the DNS records provided by SendGrid to your DNS or hosting provider (for example, GoDaddy, Hover, CloudFlare, etc.). First, figure out who your hosting provider is and if you have access. If you don't have access to your DNS or hosting provider, you should figure out who in your company has this access before you begin setting up link branding.

<call-out>

Note that you can also set up link branding when you set up your domain authentication and you may not need to set it up again.

</call-out>

*To set up and verify link branding:*

1. In the SendGrid UI, select [Settings > Sender Authentication](https://app.sendgrid.com/settings/whitelabel).
2. In the link branding section, click **Get Started**.
3. Next, add in information about your DNS host. CLick **Next**.
4. Enter the domain that you want to brand the links and images with and add advanced settings. Make sure that you only enter the name of your root domain. Do not include `www` or `http://www` in this field! Your domain needs to match the domain of your from address on the emails you are sending out. For example, if I am branding with the domain `example.sendgrid.com`, I would set my link branding domain to be `sendgrid.com`. Click **Next**. For more information about advanced settings, see [Advanced settings](#-Advanced-settings).
5. Next, you need to add all of the CNAME records on this screen to your DNS host. This process varies depending on your DNS host. For videos on how to add your CNAME to some popular DNS service providers, check out these [videos](https://sendgrid.com/docs/help-support/sending-email/dns-providers/). If you don't have access to modify your companies DNS records, you can also email a request to a co-worker. This email includes a direct link to the CNAME records. This link does expire. The recipient doesn't need login access to your SendGrid account.

Now links and images in your emails are from your custom domain. You only need to update your link branding if you want to update the domain that appears in the links in your email.

It can take up to 48 hours for the records to verify after you upload them into your DNS host, so you will likely have to come back later to verify.

 ### 	Verifying your DNS
 	
Once you add the CNAME records to your DNS host, return to the [Sender authentication page](https://app.sendgrid.com/settings/sender_auth) and click **Verify**.

<call-out>

If you click verify, and only half of your CNAME records verify, this usually means that you need to wait a bit longer. It's also possible that you entered one of your records in incorrectly. For other troubleshooting information, see [Sender authentication troubleshooting]({{root_url}}/help-support/sending-email/troubleshooting-sender-authentication/).

</call-out>

Any time that you send an email with image or links that match the branded link, SendGrid applies that link to your email. You only need to update your link branding if you want to update the links used in your emails.

## 	Advanced settings
 	
 ### 	Using a custom subdomain for links
 	
*To customize your subdomain:*

When you are in the process of branding a link, and on the screen where you input domain settings, open the advanced settings, select **Custom subdomain for links** and input letters or numbers to build a custom domain. If you don't select these, SendGrid automatically selects them for you. Make sure the characters you select are different from what SendGrid assigned you initially.

 ### 	Assigning a subuser
 	
By assigning a domain whitelabel to one of your subusers, you can give them the benefit of improved authentication and security, but also separate from the sending reputation of your parent account. If you assign a subusers domain, they can't edit or delete it.

*To assign an authenticated domain to a subuser:*

When you are in the process of authenticating a domain, and on the screen where you input domain settings, open the advanced settings, select **Assign to a subuser**, and select a subuser to assign to that domain.

## 	Migrating from legacy Whitelabel
 	
If you set up a whitelabel before 2015, your whitelabel will still work. However, if you need to change or update it, you need to delete it and recreate it as an authenticated domain in our new system. If you do set up a new branded link, make sure to keep the same subdomain for domain authentication, but then use a different one for link branding.

If you set up a whitelabel after 2015, it has been automatically migrated to our new sender authentication system.

## 	Additional resources
 	
- [How to set up domain authentication]({{root_url}}/help-support/sending-email/how-to-set-up-domain-authentication/)
- [How to set up reverse DNS]({{root_url}}/help-support/sending-email/how-to-set-up-reverse-dns/)
- [Troubleshooting]({{root_url}}/help-support/sending-email/troubleshooting-sender-authentication/)
