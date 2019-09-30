---
seo:
  title: IP Pools
  description: Using IP Pools to manage your sender reputation
  keywords: IP, IP address, deliverability
title: IP Pools
weight: 0
group: ip-management
layout: page
navigation:
  show: true
---

IP Pools allow you to group your dedicated Twilio SendGrid IP addresses together in order to have more control over your deliverability, and as a result, your sender reptuation. For example, you might have separate pools for both transactional and marketing email. 

<call-out>

Dedicated IP addresses are available with Pro and Premier Email API accounts as well as Advanced Marketing Campaigns accounts. Click [here](https://sendgrid.com/pricing/)for more information.

</call-out>

## Create an IP Pool

**Before you get started**

In order to create an IP pool, your dedicated IPs must have [reverse DNS]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/) set up.

*To create an IP Pool:*

1. Navigate to **Settings** and then click **IP Addresses**. 
1. Select **IP Pools**. 
1. Click **Create an IP Pool**. 
1. Enter an *IP Pool Name* and select the IP addresses you want to add to the pool.
1. Click **Create**. 


<call-out>

For information on creating and managing IP pools using the API, see our [documentation](https://sendgrid.api-docs.io/v3.0/ip-pools).

</call-out>

## Edit an IP Pool

*To edit an IP Pool:*

1. Navigate to **Settings** and then click **IP Addresses**. 
1. Select **IP Pools**. 
1. Find the IP Pool you wish to delete and select the action menu.
1. Click **Edit**. 
1. From here, you can edit the name of the IP pool as well as select or deselect IP addresses associated with the pool.
1. When you have finished making all changes to the IP pool, click **Save**.

## Delete an IP Pool

*To delete an IP Pool:*

1. Navigate to **Settings** and then click **IP Addresses**. 
1. Select **IP Pools**. 
1. Find the IP Pool you wish to delete and select the action menu.
1. Click **Delete**. 
1. A modal appears asking if you are sure you want to delete the selected IP Pool. Confirm, and then click **Delete**. 

<call-out>

If you would like to create and manage IP Pools using the API, see our [API Reference](https://sendgrid.api-docs.io/v3.0/ip-pools/create-an-ip-pool).

</call-out>

## Additional Resources

- [Dedicated IP addresses]({{root_url}}/ui/account-and-settings/dedicated-ip-addresses/)
- [Warming up a dedicated IP]({{root_url}}/ui/sending-email/warming-up-an-ip-address/)
- [IP Access Management]({{root_url}}/ui/account-and-settings/ip-access-management/)
