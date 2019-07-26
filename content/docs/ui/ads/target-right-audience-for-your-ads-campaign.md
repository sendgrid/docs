---
layout: page
weight: 0
title: Targeting the right audience for your Ads Campaign
group: target-segment
seo:
  title: Targeting the right audience for your Ads Campaign
  description: How to target the right audience for your Ads Campaign
  keywords: 
navigation:
  show: true
---

<call-out>

Ads is currently in closed beta. During beta, only approved participants have access to the feature. Functionality and performance might not be working quite like we want it to and we reserve the right to change the functionality at any time without warning. For more information on the Ads beta, or to join the beta waitlist, see our [Ads Solution Page](https://sendgrid.com/solutions/ads/).

</call-out>

Before you can set up an Ads Campaign, make sure you have these requirements below in place.

## Requirements for setting up an ad

* You must be a Twilio SendGrid customer.
* You must have a URL of the site you want to promote.
* You must have a Facebook and/or a Google account. You must connect it to your Twilio SendGrid account. 

<call-out>

We recommend that you install a Twilio SendGrid pixel to your site. This will help you have better visibility into your statistics and will enable you to retarget visitors to your website.

</call-out>

## Choose a targeting strategy based on your marketing objective

Before you can create a campaign, you need to choose a targeting strategy based on your marketing objective. You can choose to:

1. Drive people to your site to acquire new visitors or reach existing ones.
1. Grow and message your email list to acquire new leads or reaching existing ones.

### Drive people to your site 

Here are the targeting options to drive people to your site:

**Acquire new visitors**

<table>
  <tr>
    <th><span style="font-weight:bold">Targeting Option</span></th>
    <th><span style="font-weight:bold">Who you’ll target?</span></th>
  </tr>
  <tr>
    <td>Contact List Lookalikes</td>
    <td>Target people who are similar to your contacts</td>
  </tr>
  <tr>
    <td>Facebook Followers Lookalikes</td>
    <td>Target people who are similar to your Facebook followers</td>
  </tr>
  <tr>
    <td>Website Visitors Lookalikes</td>
    <td>Target people who are similar to your website visitors</td>
  </tr>
</table>

**Reach existing visitors**

<table>
  <tr>
    <th><span style="font-weight:bold">Targeting Option</span></th>
    <th><span style="font-weight:bold">Who you’ll target?</span></th>
  </tr>
  <tr>
    <td>Website Visitors</td>
    <td>Target people who have visited your website</td>
  </tr>
  <tr>
    <td>Facebook Followers</td>
    <td>Target people who follow your Facebook page</td>
  </tr>
</table>

### Grow and message your email list

Here are the targeting options to drive people to your site:

**Acquire new leads**

<table>
  <tr>
    <th><span style="font-weight:bold">Targeting Option</span></th>
    <th><span style="font-weight:bold">Who you’ll target?</span></th>
  </tr>
  <tr>
    <td>Contact List Lookalikes</td>
    <td>Target people who are similar to your contacts</td>
  </tr>
  <tr>
    <td>Facebook Followers Lookalikes</td>
    <td>Target people who are similar to your Facebook followers</td>
  </tr>
  <tr>
    <td>Website Visitors Lookalikes</td>
    <td>Target people who are similar to your website visitors</td>
  </tr>
  <tr>
    <td>By Demographic / Interest</td>
    <td>Target people by interest, gender, age, location, and device</td>
  </tr>
</table>
** Reach existing leads **

<table>
  <tr>
    <th><span style="font-weight:bold">Targeting Option</span></th>
    <th><span style="font-weight:bold">Who you’ll target?</span></th>
  </tr>
  <tr>
    <td>Contacts</td>
    <td>Target people in your Twilio SendGrid contact list</td>
  </tr>
  <tr>
</table>

### To target your ad Campaigns

1. After you select your targeting strategy you’ll need to create a name for your campaign.
1. Select which channels to advertise. You can select Facebook, Instagram, Google Display Ads, or any combination.
1. Select how long you would like to run your campaign. We recommend that you run your campaign for at least two weeks. 
1. Determine the criteria of audiences you would like to target. Depending on which targeting option you choose you’ll have a different set of criteria to select from. 

![]({{root_url}}/img/targetingoverview.png)

### Use Categories to define your audience

You can use [Twilio SendGrid Categories]({{root_url}}/for-developers/sending-email/categories/) to define your audience in SendGrid Ads. This will help you combine your Email API list with Twilio SendGrid Ads so you can track and analyze statistics for your emails as well.
 
For example, you might use Twilio SendGrid Categories to track and analyze your email for the following emails:
* Welcome series
* Product announcements
* Sales or promotions
* Receipts
* Newsletters

<call-out>
   
Once you have categories set up, you can use them to define your audience for a campaign. 

</call-out>
    
In this example, we will show you how would set up a campaign that targets recipients of your newsletter who didn’t open it.

When you select **Create a Campaign**, you will get prompted to select your targeting strategy. In this example, you would select **Grow and message your email list.** and filter by **Reach existing leads**. You would select **Didn’t Open** targeting strategy.


![]({{root_url}}/img/targeting-didnotopen.gif)

You will then select channels you want to advertise on and the dates of your campaign. Under the **Criteria,** you will click **Marketing campaigns named** and then select which category you want to use to target this campaign. After you’ve selected your targeting criteria, you can build and publish your ad.

### Additional Resources

- [Getting Started with Ads]({{root_url}}/ui/ads/getting-started-with-ads/)
- [Designing and publishing an ad]({{root_url}}/ui/ads/design-and-publish-an-ad/)
- [Analyzing the performance of your Ads campaign]({{root_url}}/ui/ads/analyze-the-performance-of-your-ads-campaign/)
- [Tracking users to page views, purchase events and leads with the Twilio SendGrid Pixel]({{root_url}}/ui/ads/track-users-to-page-views-purchase-events-and-leads-with-the-sendgrid-pixel/)