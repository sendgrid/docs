---
layout: page
weight: 0
title: Links
seo:
  title: Link Whitelabeling
  description: Whitelabel click tracking links within SendGrid emails.
  keywords: whitelabel, links, whitelabel link domains
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/149664450" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Email link whitelabels allow all of the click-tracked links to be from your domain instead of sendgrid.net. It also will serve open tracking images from your domain. This helps in email deliverability because you are no longer relying on clicktracking being routed through a domain that you do not control. Spam filters and recipient servers will look at the links within emails to determine whether the email should be delivered and will use the reputation of the root domain to determine whether the links can be trusted.

{% anchor h2 %}
Email Link Whitelabel Settings
{% endanchor %}

{% anchor h3 %}
On Behalf Of User
{% endanchor %}

This setting lets you assign a whitelabel to a subuser account or the account you are currently using. A subuser can set up their own whitelabel, however, if the parent account assigns a whitelabel to a subuser, that subuser will not be able to edit or modify the settings of the assigned whitelabel.

{% anchor h3 %}
Subdomain
{% endanchor %}

This is the “prefix” of the root domain that you are actually whitelabeling. Historically, we have suggested prefixes like “link,” “click,” etc. However, you can use whatever subdomain you would like to use.

{% warning %}
The email link whitelabel subdomain MUST be different from your domain whitelabel subdomain.
{% endwarning %}

Even though your link whitelabel and domain whitelabel are different subdomains, the reputation of your root domain and your IP are what recipient servers and spam filters look at to determine whether your email is delivered.

{% anchor h3 %}
Domain
{% endanchor %}

{% warning %}
If you add a new default email link whitelabel for a email link domain that is already whitelabeled on your account, you risk invalidating and removing the default status of the previously set up email link whitelabel.
{% endwarning %}

{% info %}
Your email link whitelabel will not affect your domain whitelabel and vice versa.
{% endinfo %}

The root domain for your subdomain. This is the domain that will receive the reputation from the whitelabel. Your root domain should match your FROM email address. If you are sending from newsletteexampexample@example.com, then you should whitelabel example.com so the domains match.

{% anchor h3 %}
Use new Domain
{% endanchor %}

Allows you to add a new domain to your whitelabel options.

{% anchor h3 %}
Default Whitelabel
{% endanchor %}

{% info %}
There can be only one!
{% endinfo %}

Your default whitelabel is your fallback for click and open tracking when you send emails. It will be used for all sending on your account, unless you have multiple valid whitelabels and one of them matches your FROM email domain. If there is no valid whitelabel match to your FROM email domain, then your whitelabel will fall back to your default domain whitelabel. For more information see the [Whitelabel Application Logic]({{root_url}}/User_Guide/Settings/Whitelabel/index.html#-Whitelabel-Application-Logic).

{% anchor h2 %}
Creating An Email Link Whitelabel
{% endanchor %}

When you enter the information for your whitelabel and click “Save,” we will show you the DNS entries that you need to make to match the settings you provided.

{% info %}
You may create up to a maximum of 1500 link whitelabels.
{% endinfo %}

{% anchor h2 %}
Validate Your Email Link Whitelabel
{% endanchor %}

{% warning %}
SendGrid will not start using your  whitelabels until they are validated! Until they are validated, you will see that all your links point to click track urls on sendgrid.net.
{% endwarning %}

Once you have made the DNS changes, you need to validate your whitelabel:

1. Return to the Email Link Whitelabels page
2. Click the whitelabel you just added (or the gear icon to the right of the whitelabel)
3. Click “Validate”

If everything is setup properly and the DNS records have propagated, then SendGrid will verify your whitelabel and email sending will use this whitelabel following the [Whitelabel Application Logic]({{root_url}}/User_Guide/Settings/Whitelabel/index.html#-Whitelabel-Application-Logic).

{% anchor h2 %}
Managing and Viewing Your Email Link Whitelabel
{% endanchor %}

If you need to check the status of a whitelabel, you can see the “at a glance” information from the Email Link Whitelabel page. However, if you’re looking for more in-depth information or you need to find the DNS settings for your whitelabel then just click the gear icon next to the whitelabel and select "View."

From this page you will be able to see all of the settings you entered when setting up your whitelabel, whether the whitelabel is valid, and all of the DNS settings you need for this whitelabel.

{% anchor h2 %}
Deleting an Email Link Whitelabel
{% endanchor %}

{% warning %}
Deleting an Email Link Whitelabel is permanent and can not be rolled back.
{% endwarning %}

When you view your detailed whitelabel information, you will notice at the bottom of the page that you can delete this whitelabel. If you click the button and then confirm that you are sure you want to delete this whitelabel, then SendGrid will delete it.

Once deleted, you will need to update your DNS as your links will no longer be white labeled to this subdomain by SendGrid.

{% anchor h2 %}
Using the API
{% endanchor %}

[Manage your link whitelabel via our v3 API]({{root_url}}/API_Reference/Web_API_v3/Whitelabel/links.html)
