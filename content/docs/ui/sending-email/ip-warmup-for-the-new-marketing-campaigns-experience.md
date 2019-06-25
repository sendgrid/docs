---
layout: page
weight: 70
title: IP Warmup for the new Marketing Campaigns Experience
group: sending-email
navigation:
  show: true
seo: 
  title: IP Warmup for the new Marketing Campaigns Experience
  keywords: IP, warmup, deliverability, new Marketing Campaigns
  override: true
  Description: Directions for warming up a dedicated IP address using the new Marketing Campaigns experience.
---

IP warming is the practice of gradually increasing the volume of mail you send with a dedicated IP address according to a predetermined schedule. This gradual process helps to establish a reputation with inbox providers (Gmail, Yahoo, etc.) as a legitimate email sender. If you’re using an Advanced Marketing Campaigns plan, this article will help you identify the right warmup strategy for your email program. 

**Scenario 1:** You’re a brand new SendGrid customer
If you’ve never sent mail through SendGrid before, we’ll give you a brand new dedicated IP. This brand new IP address needs to be warmed to ensure your email program is successful. If you immediately begin sending large amounts of mail, you will risk having your messages blocked by inbox providers.

**Scenario 2:** You’re moving from shared IPs to dedicated IPs
Even If you’ve been using shared IPs to send mail previously, you will still need to warm up your new IP address. Inbox providers recognize that your traffic comes from shared IPs, so when you begin sending over your new IP inbox providers will see this as a new mailstream. 

**Scenario 3:** You’re already sending through dedicated IPs
If you are already sending mail through a dedicated IP with your API plan, you will still need to warm up the additional IP address included with the Advanced Marketing Campaigns plan. To avoid having your marketing mail and transactional mail sent from the same IP, [create a subuser account]({{root_url}}/ui/account-and-settings/subusers/#create-a-subuser).

## How to schedule a warmup with Marketing Campaigns

Depending on the maximum daily volume you plan to send, a warmup can take anywhere from a few days to a few weeks. Our general recommendation is to send no more than 50 messages on your new IP address on your first day of sending. You’ll want to double your volume every concurrent day you send until you’ve reached the maximum daily volume you plan on sending. At that point, inbox providers should be familiar with your reputation, and your IP will be fully warmed. 

You can use Marketing Campaign’s scheduling and contact management tools to create a warmup schedule. First, you’ll want to split up your list into groups of contacts, where the number of contacts in each group is associated with a day of warmup. For example, if 800 messages per day was your maximum daily send volume, you’d want to create a contact list of 50, 100, 200, 400, then 800. You’d send to the list of 50 on day one, the list of 100 on day two, and so on. 

*To upload these lists:*

1. Navigate to the **Marketing** tab. 
1. Select **Contacts**. 
1. Create a new list titled “Day 1” and upload your first group of 50 contacts to this list.

Continue creating new lists for each day of your warmup and upload the associated number of contacts for each day. When you finish, you should have a list for every day in your warmup with the number of contacts in each day doubling. Next, you’ll want to create a template for your warmup campaign. 

*To create a warmup campaign template:*

1. Navigate to **Marketing** and then select **Templates**. 
1. Click **Create Template** and select the **[editor]({{root_url}}/ui/sending-email/editor/)** you want to use to create your template. 
1. Once you’ve finished creating your template, hover over the action menu next to the template and select **Create Single Send**.
1. Add the “Day 1” list to your campaign and change the campaign from **Send Immediately** to **Schedule** and choose the day you’d like to begin the warmup. 

After you schedule your first send, you can navigate back to your template and repeat steps 3 and 4 above, making sure you update the list used for Day 2, and choose the next day in the scheduling menu. Repeat this process until you have a campaign for every single day in your warmup. 

Congratulations, you’re all set to successfully warm up your new IP address with marketing mail!
