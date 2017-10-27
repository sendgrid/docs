---
layout: page
weight: 0
title: Profile
seo:
  title: Subusers Profile
  description: The subuser profile allows you to see your subuser settings at a glance.
  keywords: subuser settings, subuser edit, subuser profile settings
navigation:
  show: true
---

{% anchor h2 %}
Contact Information
{% endanchor %}

This section will show you the contact information you put in when you created your subuser. To modify this subuser, click the “Change Contact” button, add your new information, and then click “Save.”

**Avatar** - A [gravatar](http://gravatar.com) will load when an email address is entered, making it easier to identify your subusers in the subuser list.

**First Name** - The first name of the person responsible for this subuser.

**Last Name** - The last name of the person responsible for this subuser.

**Email Address** - The contact email address for this subuser. This must be an active email account as SendGrid may contact a subuser to provide support, resolve sending and deliverability issues, or to enforce [SendGrid's Terms of Service]({{site.site_url}}/tos). Whenever we contact a subuser, it is our policy to contact the parent account email address at the same time.

{% anchor h2 %}
Username & Password
{% endanchor %}

We do not require this information for your subusers, but we suggest that you fill out as much as possible to improve the deliverability for this subuser, especially if the information does not match your parent account’s information. This will also allow SendGrid to contact your subuser directly if we notice anything on their account.

**Username** - The username your subuser will use to send email and access the API.

**Password** - The password your subuser will use to access SendGrid.com.

**Confirm Password** - This field only shows when you’re changing your password. It is used to confirm the password above was typed correctly.

{% anchor h2 %}
Company Information
{% endanchor %}

**Company** - The name of your subuser’s company.

**Address 1** - The first line of your subuser’s address.

**Address 2** - The second line of your subuser's address, if your subuser has one.

**City** - The city in which your subuser operates.

**State** - The state or province in which your subuser operates.

**Country** - The country in which your subuser operates.

**Zip** - The zip code in which your subuser operates.

**Company Phone Number** - The phone number for your subuser’s business.

**Company Website** - The website for your subuser’s business.

{% anchor h2 %}
Additional Resources
{% endanchor h2 %}

- [Subusers Overview]({{root_url}}/User_Guide/Settings/Subusers/index.html)
- [Subuser Settings]({{root_url}}/User_Guide/Settings/Subusers/settings.html)
- [Subuser Impersonation]({{root_url}}/User_Guide/Settings/Subusers/impersonation.html)