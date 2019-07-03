---
layout: page
weight: 70
title: IP Warmup with Marketing Campaigns
group: delivery-optimization
navigation:
  show: true
seo: 
  title: IP Warmup with Marketing Campaigns
  keywords: IP, warmup, deliverability, new Marketing Campaigns
  override: true
  Description: Directions for warming up a dedicated IP address using the new Marketing Campaigns experience.
---

## What is IP warming? 

IP warming is the practice of gradually increasing the volume of mail sent with a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with inbox providers (Gmail, Yahoo, etc.) as a legitimate email sender. If you immediately begin sending large amounts of mail, you will risk having your messages blocked by inbox providers.

If you’re using an Advanced Marketing Campaigns plan, or if you have a dedicated IP as part of your Email API plan, this article will help you identify the right warmup strategy for your email program. 

## How to know if you have a dedicated IP 

The Marketing Campaigns Advanced package, as well as Email API Pro and Premier packages, all include a dedicated IP. With any of these packages, you’re also able to purchase additional IPs. To view your IPs, navigate to **Settings** and click **IP Addresses**.

<call-out>

If you have existing dedicated IPs from your Email API package that are already warmed up, you still need to warm up your new Advanced Marketing Campaigns dedicated IP. 

</call-out>

If you’ve been sending through the Basic Marketing Campaigns package and you’re on an Essentials Email API plan, you’ve been sending on a shared IP. This means when you upgrade to a package that includes a dedicated IP, you’ll still need to go through the warmup process. Inbox providers expect your traffic to come from shared IPs, so when you begin sending over your new IP inbox providers will see this as a new, “cold” mailstream. 

## How to schedule IP warmup with Marketing Campaigns

Depending on the maximum daily volume you plan to send, a warmup can take anywhere from a few days to a few weeks. Our general recommendation is to send no more than 50 emails on your new IP address on your first day of sending. From there, you’ll want to double your volume every concurrent day you send until you’ve reached the maximum daily volume you plan on sending. At that point, inbox providers will be more familiar with your sender reputation, and you will fully warmup your IP. 

You can use the Marketing Campaign’s scheduling and contact management tools to create a warmup schedule. First, you’ll want to split up your contacts into lists, where the number of contacts in each list is associated with a day of warmup. For example, if 800 messages per day was your maximum daily send volume, you’d want to create contact lists of 50, 100, 200, 400, and 800. You’d send to the list of 50 on day one, the list of 100 on day two, and so on. 

*To upload these lists:*

1. Navigate to the **Marketing** tab. 
1. Select **Contacts**. 
1. Create a new list titled “Day 1” and [upload]({{root_url}}/ui/managing-contacts/create-and-manage-contacts/#add-contacts) your first group of 50 contacts to this list.

<call-out>

Ensure that you [format your contact lists correctly]({{root_url}}/ui/managing-contacts/formatting-a-csv/) before continuing.

</call-out>

Continue creating new lists for each day of your warmup and upload the associated number of contacts for each day. When you finish, you should have a list for every day in your warmup with the number of contacts in each day doubling. 

Next, you’ll want to create a template for your warmup campaign. 

 *To create a template:*

1. Navigate to **Marketing** and then select **Templates**. 
1. Click **Create Template** and select the [editor]({{root_url}}/ui/sending-email/editor/) you want to use to create your template. 
1. Once you’ve finished creating your template, exit out of the editor and hover over the action menu next to the template and select **Create Single Send**.
1. Add the “Day 1” list to your Single Send recipients by navigating to **Recipients**, and then selecting **Schedule**.  
1. Click **Send Immediately** to change it to a day you'd like to begin the warmup. 

After you schedule your first send, you can navigate back to your template and repeat steps 3 and 4 above, making sure you update the list used for Day 2 and choose the next day in the scheduling menu. Repeat this process until you have a campaign for every single day in your warmup. 

Congrats! You’re all set to successfully warm up your new IP address with marketing mail!

## Sending with multiple dedicated IPs 

If you have multiple dedicated IPs, whether from your previous Email API package or from purchasing additional IPs, your Marketing Campaigns sends will be sent “round-robin” across all IPs on your account on a per-email basis. This means if you send a Single Send to 100 recipients, the 100 emails well send equally across each IP you have. 

<call-out type="warning">

To optimize your IP reputation, we recommend you do not send your marketing and transactional (Email API) emails from the same IP. To avoid this, [create a subuser account]({{root_url}}/ui/account-and-settings/subusers/#create-a-subuser). 

</call-out>
