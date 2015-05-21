---
layout: page
weight: 0
title: Account Settings
seo:
  title: Account Settings
  description: Manage your SendGrid account settings
  keywords: account settings, profile settings
navigation:
  show: true
---

{% info %}
This page refers to our beta UI functionality. To find these features, please click the “Beta” button at the top of the SendGrid Customer Portal.
{% endinfo %}

Your Profile will provide SendGrid with the information we need to contact you with alerts and notifications as well as send and track your emails.  Each section of your Profile page is editable by clicking the “Edit” button to the right of each section. Once you have made your changes, click the “Save” button. This will only save the settings for that section. If you decide to abandon your changes, click “Cancel”. 

To edit your name and email address, click the “Change Contact Info” button to the right. A form will appear which will allow you to change these settings.

**First Name** - This is be the first name of the representative from your company who should receive contacts from SendGrid.
**Last Name** - This is be the last name of the representative from your company who should receive contacts from SendGrid.
**Email address** - this is the address where you will be contacted by SendGrid for any account level alerts and notifications. This must be a valid and active email address that you routinely check.
**Username** - Your SendGrid Username is used to access our API and our SMTP Relay. Changing this will immediately cause all of your calls to SendGrid to stop working.
**Password** -  Please see our Password requirements page.
**Company** - The name of your company.
**Address 1** - The first line of your address.
**Address 2** - The second line of your address, if your business has one.
**City** - The city in which your company operates.
**State** - The state or province in which your company operates.
**Country** - The country in which your company operates.
**Zip** - The Zip code in which your company operates.

{% info %}
If you find that your scheduled sends or stats seem like they are not quite correct, please double check your timezone. 
{% endinfo %}

**Timezone** - The [timezone]({{root_url}}/Glossary/timezone.html) in which your company operates. This setting will be used by other SendGrid functionality such at Statistics and scheduling sends in our Marketing Emails Functionality.  Please make sure that your timezone is set to the same as your business.
**Website** - Your company’s website
**Phone** - Your company’s phone number, where SendGrid can reach the representative that should be contacted.
**Billing Email** - if this email is added, SendGrid will send all your billing notifications to this address. If you do not specify this address, SendGrid will send your billing notifications to your account Email.

{% anchor h2 %}
Changing Your Password
{% endanchor %}

There are two ways to change your password. Through the portal and through the Forgot Password page.

{% warning %}
When you change your account password, your SMTP and API access will change as well. Make sure you update your account information on all systems and software!
{% endwarning %}

{% anchor h3 %}
Changing your Password through the portal
{% endanchor %}

**Current Password** - this is the current password on your account. Without this, you will not be able to change your password.
**New Password** - enter a new password into this field. Passwords should be secure and not guessable so as to protect your account information from nefarious people and scripts.
**Confirm New Password** - enter the same password that you put into “New Password”. If the password entered here is not the same as what you put into “New Password”, the form will not accept your new password.

{% anchor h3 %}
Changing your Password via Forgot Password
{% endanchor %}

If for some reason you cannot remember your password, go to the SendGrid login page and click ”Forgot Password”. From here, you will need to enter your SendGrid username. We will send you an email with account reactivation steps, please follow these steps to access your account again.

