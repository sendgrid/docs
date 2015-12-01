---
seo:
  title: Upgrading your Whitelabel 
  description: Upgrading your Whitelabel 
  keywords: whitelabel, dns, link, upgrade, domain, links, whitelabeled, already, exists, duplicate, same
title: Upgrading your Whitelabel 
weight: 0
layout: page
zendesk_id: 206855907
navigation:
  show: true
---

On July 6th, 2015 we updated the&nbsp;process with which users&nbsp; [Whitelabel](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html) their accounts. Users who have&nbsp;set up a legacy Whitelabel will be prompted to **upgrade** their settings. This article will help&nbsp;to walk you through this upgrade process.&nbsp;

![]({{root_url}}/images/WLupgrade.gif)

&nbsp;

&nbsp;

When attempting to Upgrade, you may have seen the following error message:

> **{"errors":[{"message":"Link Whitelabel with domain \"yourdomain.com\" and subdomain \"email\" already exists."}]}**

![]({{root_url}}/images/duplicatpeWLdomainerror.gif)

&nbsp;

&nbsp;

Due to how our new system works, having a **duplicate** _ **subdomain** _ across any of your Whitelabeled Domains and Email Links is **no longer valid.** &nbsp;New records need to be created for one of these entries to proceed.&nbsp;

For example; your legacy Whitelabel settings may reference **email.yourdomain.com** in both the Whitelabeled Domains and Email Links domain. When attempting to validate one or the other it will fail, because they use the same subdomains.

&nbsp;

**The simple solution is to delete one of these whitelabel entries, and recreate it using a new subdomain.** New settings won't take effect until they are validated, so don't worry about your email Whitelabeling while you are in the process of upgrading.&nbsp;

&nbsp;

1. First,&nbsp;we're going to head over to the [Whitelabel Overview](https://app.sendgrid.com/settings/whitelabel) page, and **delete** the entry with a duplicate subdomain under **Whitelabeled** &nbsp; **Email Links.** &nbsp;

![]({{root_url}}/images/WLdelete.gif)

&nbsp;

If this is your **default** whitelabel you may need to create or assign a different whitelabel to be your default before deleting your old whitelabel.

&nbsp;

2. Next, we'll click the " **+ Add Email Link**" button to get started on replacing the entry we just deleted.&nbsp;

Once we've created it, you'll be taken to a page that displays the **new&nbsp;DNS records** you will need to add to your DNS registrar. After you add the displayed records to your DNS, click the " **Validate**" button to complete this step of the upgrade.

![]({{root_url}}/images/newWLlink.gif)

&nbsp;

&nbsp;

3. Once your new&nbsp;Email Links entry has been validated, go back to your legacy entry under Whitelabeled Domains, and click on **Upgrade**. Follow the instructions provided to update and validate this entry.&nbsp;

&nbsp;

4. You're done! You have successfully upgraded your Whitelabel to&nbsp;our new system.&nbsp;

&nbsp;

**In summary:**

&nbsp;

**Whitelabeled Domains&nbsp;**

| Legacy Whitelabel | &nbsp; | New Whitelabel |
| email.yourdomain.com | >>> | email.yourdomain.com |

**Whitelabeled Email Links**

| Legacy Whitelabel | &nbsp; | New Whitelabel |
| email.yourdomain.com | >>> | **links**.yourdomain.com |

&nbsp;

If you hit any snags, or have any questions, be sure to get in touch using the options below. We're here to help! &nbsp;

