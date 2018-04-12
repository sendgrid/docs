---
st:
  published_at: 2017-02-13
  type: Classroom
seo:
  title: Creating Whitelabels for Subusers
  description: All you need to know about creating a whitelabel for a subuser, assigning a whitelabel to a subuser, and managing subusers' whitelabels!
  keywords: subuser, whitelabel, domain whitelabel, ip whitelabel, domain, ip, assign, associate, update
title: Creating Whitelabels for Subusers
weight: 0
layout: page
navigation:
  show: true
---

<page-anchor el="h2">
Table of Contents
</page-anchor>

* [What is whitelabeling?](#-What-is-whitelabeling)
* [What are the benefits of whitelabeling subusers?](#-What-are-the-benefits-of-whitelabeling-subusers)
* [Creating subuser whitelabels](#-Creating-Subuser-Whitelabels)
* [Creating a subuser whitelabel from the parent account](#-Creating-a-Subuser-Whitelabel-from-the-Parent-Account)
    * [Assigning a whitelabel to a subuser](#-Assigning-a-whitelabel-to-a-subuser)
    * [Whitelabeling on behalf of a subuser](#-Whitelabeling-on-behalf-of-a-subuser)
* [Creating a subuser whitelabel from the subuser account](#-Creating-a-Whitelabel-from-the-Subuser-Account)

<page-anchor el="h2">
What is whitelabeling?
</page-anchor>

![]({{root_url}}/images/subuser_whitelabel_1.png)

Whitelabeling allows you to better authenticate the email you send from your SendGrid parent or subuser account.

Before whitelabeling, all of your outbound emails will be marked as "mailed-by" and "sent-by" sendgrid.com. Any links in your emails with click tracking enabled will include sendgrid.net in the URL and the rDNS information for your sending IP address will point to SendGrid instead of your own domain.

While users sending through SendGrid without a whitelabel can still expect a very high delivery rate, whitelabeling is the best thing you can do to begin building trust with your recipients' inbox providers.

The benefits of whitelabeling extend beyond pleasing inbox providers: creating IP, link and domain whitelabels will help you develop brand consistency and domain alignment— the domain in your FROM address will match the domain in the Return-Path, the domain in the DKIM signature, and the domain that your sending IP addresses point to.

<page-anchor el="h3">
Where can I find more information about whitelabeling?
</page-anchor>

* [Step-by-step instructions for creating a domain whitelabel]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html)
* [Step-by-step instructions for creating an IP whitelabel]({{root_url}}/Classroom/Basics/Whitelabel/setup_ip_whitelabel.html)
* [Detailed information and step-by-step video tutorial for creating a link whitelabel]({{root_url}}/User_Guide/Settings/Whitelabel/links.html)

You can find all of our whitelabel video tutorials [here]({{root_url}}/Classroom/Troubleshooting/Authentication/whitelabel_video_tutorials.html#Whitelabeled-Domains).

<page-anchor el="h2">
What are the benefits of whitelabeling subusers?
</page-anchor>

You should always strive to build and maintain a positive sender reputation. The sending reputation of your subuser accounts is just as important as the reputation of your parent account.

{% info %}
Whitelabeling your parent account will not benefit the reputations of your subusers. To improve your subusers' reputations, you must create for them, or encourage them to create, their own whitelabels.
{% endinfo %}

If you have multiple unrelated subusers who send different types of email, providing each subuser with their own whitelabel is an easy way to separate their sending reputations.

<page-anchor el="h2">
Creating Subuser Whitelabels
</page-anchor>

There are three ways to create a subuser whitelabel:

1. You can create a whitelabel from your parent account, and then **[assign that whitelabel to a subuser](#-Assigning-a-whitelabel-to-a-subuser)** via [subuser management](https://app.sendgrid.com/settings/subusers).
2. You can [create a whitelabel on behalf of a subuser](#-Whitelabeling-on-behalf-of-a-subuser) from your parent account— connecting that whitelabel with the subuser.
3. If you are a subuser, you may [create and manage your own whitelabel](#-Creating-a-Whitelabel-from-the-Subuser-Account) if the parent account has not already assigned you a whitelabel.

Below you will find step-by-step instructions explaining each of these two options, along with a discussion of the pros and cons of each option.

{% info %}
The steps described below illustrate the processes of creating a subuser whitelabel for your **sending domain**. However, the same steps may be followed for link whitelabels.
{% endinfo %}

<page-anchor el="h2">
Creating a Subuser Whitelabel from the Parent Account
</page-anchor>

<page-anchor el="h3">
Benefits of whitelabeling a subuser from the parent account
</page-anchor>

Whitelabels created by the parent account and assigned to a subuser can not be edited by the subuser. This is a secure and safe method that provides the parent account with more control over subusers' whitelabels.

{% warning %}
While subusers cannot modify whitelabels assigned or connected to them, they can still create their own whitelabel which would overwrite the whitelabel assigned or connected to them by the parent account.
{% endwarning %}

<page-anchor el="h3">
Assigning a whitelabel to a subuser
</page-anchor>

Before you can assign a whitelabel to a subuser, you must first create the whitelabel on your parent account. **Creating a domain whitelabel from your parent account is explained in detail [here]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html).**

After you have created your new whitelabel, navigate to your [Subuser Management page](https://app.sendgrid.com/settings/subusers) from the left hand side bar. Click on the subuser you would like to assign a whitelabel to.

Next to the **Whitelabel Domain** and **Whitelabel Link** options, click **Change Sending**.

![]({{root_url}}/images/subuser_whitelabel_2.png)

Next, select the whitelabel you would like to assign to the subuser from either the **Select a whitelabel domain** or the **Select a whitelabel link** dropdown menu depending on the type of whitelabel you want to assign.

![]({{root_url}}/images/subuser_whitelabel_3.png)

Finally, click **Save**. You should see the new whitelabel listed under either **Whitelabel Domain** or **Whitelabel Link**, depending on which whitelabel you chose.

![]({{root_url}}/images/subuser_whitelabel_4.png)

<page-anchor el="h3">
Whitelabeling on behalf of a subuser
</page-anchor>

When creating your new whitelabel you are presented with a window where you specify the subdomain and domain of your new whitelabel. Above these fields, you will see a dropdown menu titled **ON BEHALF OF USER**.

To create a whitelabel for a specific subuser, select that subuser from this dropdown menu. You are connecting this whitelabel with this subuser and **only this subuser** will be able to use this whitelabel.

![]({{root_url}}/images/subuser_whitelabel_5.png)

**The remainder of the steps to create a domain whitelabel are explained [here]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html).**

<page-anchor el="h2">
Creating a Whitelabel from the Subuser Account
</page-anchor>

The steps for creating a whitelabel as a subuser are no different from those for a parent account.

**Step-by-step instructions explaining how to create a domain whitelabel can be found [here]({{root_url}}/Classroom/Basics/Whitelabel/setup_domain_whitelabel.html).**

{% warning %}
If a parent account has already assigned or connected a whitelabel with your account, any new whitelabel that you create will overwrite the previous whitelabel if it is set as default.
{% endwarning %}

<page-anchor el="h3">
Benefits of whitelabeling from a subuser account or on behalf of a subuser
</page-anchor>

<page-anchor el="h4">
SPF record benefits
</page-anchor>

Currently, SendGrid only will include up to 11 different IP addresses in an SPF record before we resort to using *sendgrid.net ~all*.

However, it is easy to ensure that the SPF record for a subuser includes only IP addresses assigned to that subuser. Simply create a whitelabel from the subuser account, or create a whitelabel *on behalf* of a subuser from the parent account.

<page-anchor el="h4">
DKIM key benefits
</page-anchor>

DKIM keys are specific to each SendGrid user. So, multiple whitelabels created by a parent SendGrid account will all share the same DKIM Key.

To ensure that your subuser has their own unique DKIM Key, create a whitelabel from the subuser account or create the whitelabel *on behalf* of that subuser from the parent account.

{% info %}
We recommend that OEM SendGrid users create whitelabels for their subusers **on** their subusers account or create the whitelabel *on behalf of* that subuser from the parent account. This will ensure that each subuser has their own DKIM Key and will prevent subusers from impersonating each other.
{% endinfo %}
