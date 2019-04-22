---
layout: page
weight: 0
title: Getting Started with Ads
group: getting-started
seo:
  title: Getting Started with Ads
  description: When you first log into SendGrid Ads, use these instructions to get started quickly.
  keywords: 
navigation:
  show: true
---

Use SendGrid Ads to create social and display advertising campaigns on Facebook, Instagram, and Google Display Ads based on your email and website data. You can target social and display ads to reach current customers, or target lookalike audiences to reach new potential customers.

<iframe src="https://vimeo.com/321855599" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Connecting your accounts

1. Start by connecting the URL for the site you want to promote.
1. Next, select the ad channels for your ads. You have to link Facebook and Instagram business pages, and you have to accept Google’s terms of service. If you don't have a Facebook page, we can create one for you. 

<call-out>

It's important that you grant SendGrid full permissions to your Facebook account when you connect. SendGrid Ads cannot function without full permission because we need to utilize all of the data on your pages to maximize the reach and impact of your ads.

</call-out>

1. Add the SendGrid Pixel to just before the closing `</body>` tag on all of the individual pages that you want to promote.

## The SendGrid Pixel

The SendGrid Pixel is critical because it allows SendGrid Ads to create highly targeted audiences for your ads based on who visits your site, as well as track who visits your site based. Once you've converted these customers, the SendGrid Pixel is vital to tracking the success metrics of your ads.

<call-out>

You can upload contacts directly to SendGrid Ads and/or target contacts dynamically from Marketing Campaigns. For example, when you add more contacts to Marketing Campaigns any Ads Campaigns that use that list will update automatically.

</call-out>

### Adding the script manually

To manually install the SendGrid pixel on your website, you'll need to copy the custom script from within your SendGrid Ads account.

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
1. Copy your custom script and install in all pages of your website before the closing `</body>` tag.

### Adding the script using Google Tag Manager

[Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) is a great tool that can help manage the installation of multiple scripts on your site. To install your SendGrid pixel into Google Tag Manager, you'll need to copy the custom script from within your SendGrid Ads account.

1. Go to [Settings > SendGrid Pixel](https://labs.sendgrid.com/grow/account/tracking), or start from the setup module.
