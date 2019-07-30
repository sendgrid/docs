---
layout: page
weight: 0
title: Designing and publishing an ad
group: getting-started
seo:
  title: Designing and publishing an ad
  description: Learn how to design and publish an ad
  keywords: 
navigation:
  show: true
---
<call-out>

Ads is currently in closed beta. During beta, only approved participants have access to the feature. Functionality and performance might not be working quite like we want it to and we reserve the right to change the functionality at any time without warning. For more information on the Ads beta, or to join the beta waitlist, see our [Ads Solution Page](https://sendgrid.com/solutions/ads/).

</call-out>

Once you’ve defined your target audience for your ad, you can design your ad. Twilio SendGrid Ads dynamically updates the preview of your ad to help save you time, and you can see your changes in real time. 

![]({{root_url}}/img/ad-preview.png)

## Get familiar with advertising guidelines

When creating your ad, here are some helpful tips to increase engagement and ensure your ads are in compliance with advertising channels:
* **Use relevant content.** Make sure your ad is relevant to your audience and the website you’re directing them to.
* **Avoid numbers and punctuation.** Avoid gratuitous use of numbers and punctuation. This helps keep your ad scannable and easy to read.
* **Avoid controversial content.** All advertising channels like Facebook or Instagram have Advertising Policies that provide guidance on what is acceptable and what is not. 

<call-out>

You can learn more about Facebook’s Advertising Policies [here](https://business.facebook.com/policies/ads) and Google’s Advertising Policies [here.] (https://support.google.com/adspolicy/answer/6008942?hl=en)

</call-out>

## Set the budget

You get to determine the maximum amount you would like to spend per day on this channel for your ad. Twilio SendGrid requires that you spend a minimum of $10 a day per channel. Here are some additional tips to help you with your budget:

* **Set a budget.** Identify how much money you can comfortably spend on advertising. Setting a budget before you start will allay any fears about starting an ads campaign.
* **Test and learn.** There are many variables that will affect your affecting results from targeting to creative you use in your ad. Run an A/B test to determine which campaigns achieve the results you’re looking for.
* **Modify your budget.** If you are getting good results from your campaign, allocate more budget to your high performing campaigns. If you are not seeing good results, pause your campaign and make adjustments to your targeting, creative, and copy to determine which campaigns give you the best results.

## Enter the Link URL

Enter the website you want the ad to drive people to. If you have UTM parameters, you can include them in the Link URL.

![]({{root_url}}/img/linkurl-adpreview.png)


##  Enter the text or primary ad copy

The primary ad copy or text should be a brief statement that prompts your target audience to click on your ad. We recommend a limit of 125 characters to avoid truncated sentences since there is a limit of 125 character limit for Facebook and Instagram.

![]({{root_url}}/img/primarytext-adpreview.png)

##  Enter the headline 

The headline is displayed in a larger font, below your image. Enter an eye-catching headline to grab your audience’s attention. There is a limit of 25 characters in the Headline field. If your headline exceeds this character limit your text will get truncated.

![]({{root_url}}/img/adheadline-preview.png)

##  Enter the description

The description appears below the headline in a smaller font. Use this section to expand on your headline. We recommend a limit of 30 characters in the Text field to avoid having truncated sentences.

![]({{root_url}}/img/description-adpreview.png)

##  Upload your image

Your image is one of the most important elements of your ad, as it is what your target audience will notice first. Use the image to begin to tell the story in your ad. Twilio SendGrid Ads will dynamically resize your image to fit the ad space, but the recommended size is an image ratio of 1.91:1 and a recommended resolution of 1200x628 pixels for Facebook ads. 

![]({{root_url}}/img/image-adpreview.png)


<call-out>

Avoid using text on your image as this reduces ad effectiveness. Images with text occupying over 20% of the image will be flagged by Facebook for review and potentially rejected. You can use this [tool](https://www.facebook.com/ads/tools/text_overlay) by Facebook to assess if your image has too much text. 

</call-out>
    

##  Publish your campaign

Once you’ve created your ad, review it in the preview pane. You can preview what your ad will look like in desktop and mobile. Click  **Confirm Campaign** to publish your ad campaign. If you have not set up billing, you will get prompted to enter a credit card or select a Twilio SendGrid plan.


##  Edit your campaign

You can make a change to a running campaign. Go to your campaign in the **Campaigns** tab. Click on the right-hand corner of your campaign and select **Edit**. You will be able to edit your campaign just like you created it originally. When you submit your changes, your current campaign will run once the changes are approved.

![]({{root_url}}/img/ad-editcampaign.png)

##  Duplicate your campaign

If you want to reuse the content of a campaign you’ve already created, you can duplicate that campaign. Go to your campaign in the Campaigns tab. Click on the right-hand corner of your campaign and select **Duplicate**. 

##  Delete your campaign

To delete a campaign, find the campaign you want to remove in the Campaigns tab. Click on the right-hand corner of your campaign and select **Delete**.

##  How to design a Leads Ad

A lead ad is a specific ad format available on Facebook and Instagram that enables you to capture new email leads directly within the ad itself. This increases the chance a potential customer will sign up since they don’t have to leave Facebook or Instagram to do so. Lead ads are a great tool to grow an email list.
 
To create a Leads Ad, click **Create Campaign**, then select **Grow & message your email list** and filter by **Acquire new leads.** Select your desired targeting strategy to define your target audience for your lead ad. 
 
![]({{root_url}}/img/leads-ad.png "Leads ad")
 
After you’ve selected your targeting criteria, you will design your leads ad. There is an additional option to change the Call To Action (CTA) in your lead ad. There are several options to choose from.

### Additional Resources

- [Getting Started with Ads]({{root_url}}/ui/ads/getting-started-with-ads/)
- [Targeting the right audience for your Ads Campaign]({{root_url}}/ui/ads/target-right-audience-for-your-ads-campaign/)
- [Analyzing the performance of your Ads campaign]({{root_url}}/ui/ads/analyze-the-performance-of-your-ads-campaign/)
- [Tracking users to page views, purchase events and leads with the Twilio SendGrid Pixel]({{root_url}}/ui/ads/track-users-to-page-views-purchase-events-and-leads-with-the-sendgrid-pixel/)