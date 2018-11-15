---
layout: page
weight: 0
title: Getting Started with Ads
group: delivery-optimization
seo:
  title: Getting Started with Ads
  description: When you first login to SendGrid Ads, use the set up module to get started quickly.
  keywords: 
navigation:
  show: true
---

Use SendGrid Ads to create display advertising campaigns on Google based on your SendGrid email contact list. You can target display ads to reach current customers, or target lookalike audiences to reach new potential customers.

## Connecting your accounts

1. Start by connecting the URL for the site you want to promote.
1. Next, select the publishers for your ads. You have to link Facebook and Instagram business pages, and you have to accept Googles terms of service. If you don't have a Facebook or Instagram page, we can create one for you. 
    <call-out>

    It's important that you grant SendGrid full permissions to your Facebook and Instagram pages when you connect them. SendGrid ads cannot function without full permission because we need to utilize all of the data on your pages to maximize the reach and impact of your ads.

    </call-out>
1. Add the SendGrid Pixel to just before the closing `</body>` tag on all of the individual pages that you want to promote.

## The SendGrid Pixel

The SendGrid pixel is critical because it allows SendGrid ads to optimize conversion rates by creating highly targeted audiences for your ads based on who visits your site. It combines the data of those who visit your site with your SendGrid contacts list to target those customers and customers who look like those customers. Once you've converted these customers, the SendGrid pixel is vital to tracking the success metrics of your ads.

### Adding the script manually

To manually install the SendGrid pixel on your website, you'll need to copy the custom script from within your SendGrid Ads account.

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
1. Copy your custom script and install in all pages of your website before the closing `</body>` tag.

### Adding the script using Google Tag Manager

[Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) is a great tool that can help manage the installation of multiple scripts on your site. To install your SendGrid pixel into Google Tag Manager, you'll need to copy the custom script from within your SendGrid Ads account.

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
1. Visit your Google Tag Manager account and select the appropriate container.
1. In the left navigation, select **Tags** and then click **New**.
1. Replace Untitled Tag with SendGrid pixel as the name.
1. Click **Tag Configuration** and locate Custom HTML.
1. Paste the copied SendGrid Tracking Script into the box.
1. Click **Triggering** and select **All Pages**.
1. Click **Save**.
1. Publish your changes.

### Adding the script on a Wordpress Site

To install the SendGrid pixel on your WordPress site, you will need to be able to paste the script into the HTML of your website. To do this, install a plugin that allows you to install scripts. 

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
1. Copy your custom script and install in all pages of your website before the closing `</body>` tag.
1. Install a plugin that allows you to install scripts on your site. A plugin we recommend is [Header and Footer](https://wordpress.org/plugins/header-footer/).
1. Go to the plugin and paste your SendGrid pixel into the body of your site, before the closing `</body>` tag.

### Verify the SendGrid Pixel installation

Once you have installed the script, verify that it is tracking correctly.

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
1. Enter your site address and click the Verify Tracking button

## Disconnecting from Ads

If you want to disconnect your Facebook and Instagram account from SendGrid Ads, please log in to [contact our support team](https://support.sendgrid.com/).