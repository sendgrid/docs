---
layout: page
weight: 50
title: A/B Testing Your Campaign
group: marketing-campaigns
navigation:
  show: true
seo:
  title: A/B Testing Your Campaign
  override: true
  description: Optimize engagement of your campaigns with A/B testing, by sending different versions of your emails to a small subset of your contacts and measuring the engagement results.
---
Optimize the engagement of your Marketing Campaigns with A/B testing. A/B testing allows you to send different versions of your emails to small subsets of your contacts.

When recipients interact with the A/B test emails, you can compare the engagement metrics and choose the version to send to the remainder of your contacts, or allow SendGrid to automatically choose the winning version of your campaign according to the A/B test criteria you set.

<iframe src="https://player.vimeo.com/video/225916632" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

##  Set up an A/B test
 *To set up an A/B test on an existing campaign:*

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**.
2. Locate the campaign you want to A/B test and click on the campaign to open it in the editor it was created in.
3. Depending on the editor used to create the campaign, A/B testing is located on either the *Settings* tab or the *A/B Testing* tab.
4. Once you have located the A/B Testing settings, toggle the *Activate A/B Testing* switch to **ON**.

##  Choose the Type of A/B Test To Run
When you are A/B testing your email campaigns, you want to optimize for a specific metric. Determine whether you want to optimize your Open Rates, by testing the Subject Line; or your Click Rates, by testing the Email Content.

<call-out>

You can test up to 6 different variations for each A/B test campaign.

</call-out>

- **Subject Line - Optimize Open Rates**

	Select the Subject Line A/B test to optimize the [Open Rate]({{root_url}}/glossary/open-rate/) of your email campaign, since the subject usually is all the recipient sees until they open your email.

	High open rates shows the strength of a subject line. Once you find a subject line that works well, you will potentially see other engagement metrics improve as well.

- **Email Content - Optimize Click Rates**

	Select the Email Content A/B test to optimize the Click Rate of your email campaign, since the recipient will not see this content unless they open your email.

    High click rates means that you have compelling content and calls to action (CTAs).

##  Adding Your Email Versions
Enter the different versions of your email where you would normally edit that piece of content in you email campaign.

- **Subject Line Testing**

  For subject line testing, you will find multiple input boxes in the sidebar where you would normally find your subject line, one for each subject line variation.

- **Email Content Testing**

  For email content testing, you will see additional tabs at the top of the content area, one for each email content variation. The number of tabs you see will depend on how many versions you have decided to test.

  Make edits to each of your email content variations by selecting one of the tabs.

<call-out>

**A/B Testing Tip - Adding Variations**

To know the direct cause for the best performing variation, only make one change per variation rather than many changes. That way you can point to a direct cause for the differences in your stats.

</call-out>

##  Select the A/B Test Campaign Sample Size
Choose percentage of your contact list that will participate in the A/B test.

Each variation of the email will be sent to the same number of contacts, within the participating subset of your list.



##  Determine the Winning Criteria for the A/B Test
- **Open Rate**

  SendGrid automatically selects the winning variation based on how many recipients [open]({{root_url}}/glossary/opens/) your email.

- **Click Rate**

  SendGrid automatically selects the winning version based on how many recipients [click]({{root_url}}/glossary/clicks/) links and engage with the content in your email.

- **Manual**

	Allows you to select the version you think best engages with your customers after reviewing the results of the A/B Test.


##  Set the A/B Test Duration
You can set your A/B test duration between 30 minutes and 24 hours.

While you can test your email variations for up to 24 hours, emails will only be sent to the subset of contacts you've chosen to participate in the A/B test, during the test duration you set. The remainder of your contacts will only be sent the winning variation of your A/B test email after the test duration has completed.

<call-out>

**A/B Testing Tip - Setting the Test Duration**

You should be mindful of your test duration, with respect to the timeliness of your campaign content.

For example, if you have a one-day sale that happens the day of your campaign, you should set the A/B test duration to less than 24 hours so that your remaining contacts still have time to get the final email campaign, and participate in your oney-day sale.

</call-out>

##  Pick and Send the Winning A/B Test Variation
When a variation wins, based on your criteria and duration, you will be notified that a winner was chosen and which variation won.

- **Automatically Send the Winning Version**

	If you chose to determine the A/B test winning crietria based on Open Rate or Click Rate, SendGrid will automatically send the winning email variation to the rest of your list.

  You can also manually choose a winner at any time after you start the test.

  ![]({{root_url}}/images/ab_testing_4.png "A/B test winner")

- **Manually Picking the Winning Version**

	If you chose to Manually determine the A/B test winning criteria (meaning SendGrid is not automatically choosing based on Open Rate or Click Rate), you will be notified by email when the test duration time has passed. At that time, you need to choose your winner manually.

  ![]({{root_url}}/images/ab_testing_3.png "Choose a winner badge")

  ![]({{root_url}}/images/ab_testing_2.png "Manually choose a test winner")

<call-out>

**A/B Testing Tip - Manually Picking the Winning Variation**

If you chose to Manually determine the A/B test winning criteria, you need to remember to manually choose the winning email variation. The remainder of your contacts will not be sent the email campaign until you choose a winning variation.

</call-out>

 ## 	Additional Resources

- [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
- [Design Editor]({{root_url}}/ui/sending-email/editor/#the-design-editor)
- [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor)
