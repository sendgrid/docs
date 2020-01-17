---
layout: page
weight: 50
title: A/B Testing Your Single Send
group: marketing-campaigns
navigation:
  show: true
seo:
  title: A/B Testing Your Single Send
  override: true
  description: Optimize engagement of your campaigns with A/B testing, by sending different versions of your emails to a small subset of your contacts and measuring the engagement results.
---

<call-out>
A/B Testing is available for Single Sends only. It is not currently available for emails included as part of an Automation.
</call-out>

<iframe src="https://player.vimeo.com/video/385360745" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Optimize the engagement of your Marketing Campaigns with A/B testing. A/B testing (sometimes also referred to by marketers as 'split testing') allows you to send different versions of your Single Sends to an initial subset of your contacts.

When recipients interact with the emails sent during an A/B test, we will compare the engagement metrics and automatically choose the winning version of your campaign according to the A/B test criteria you set (opens or clicks).

<iframe src="https://player.vimeo.com/video/225916632" width="700" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

##  Set up an A/B test
 *To set up an A/B test on an existing Single Send:*

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends**.
2. Locate the Single Send you want to A/B test and click on the Single Send to open it in the editor it was created in.
3. Depending on the editor used to create the Single Send, A/B testing is located on either the *Settings* tab or the *A/B Testing* tab.
4. Once you have located the A/B Testing settings, toggle the *Activate A/B Testing* switch to **ON**.

##  Choose the Type of A/B Test To Run
When you are A/B testing your emails, you want to optimize for a specific metric. Determine whether you want to optimize your *Open Rates*, by testing the *Subject Line*; or your *Click Rates*, by testing the *Email Content*.

<call-out>

You can test up to 6 different variations for each A/B test.  

</call-out>

- **Subject Line - Optimize Open Rates**

Select the Subject Line A/B test to optimize the [Open Rate]({{root_url}}/glossary/open-rate/) of your Single Send, since the subject usually is all the recipient sees until they open your email.


High open rates show the strength of a subject line. Once you find a subject line that works well, you will potentially see other engagement metrics improve as well.

- **Email Content - Optimize Click Rates**

Select the Email Content A/B test to optimize the Click Rate of your Single Send, since the recipient will not see this content unless they open your email.

High click rates mean that you have compelling content and calls to action (CTAs).

<call-out-link linktext="EXPERT INSIGHTS" img="/img/expert-insights-promo2.png" link="https://sendgrid.com/solutions/expert-insights/">

### Looking for more visibility into your email performance?

Send better email with Expert Insights. Our detailed monthly reports will enable you to understand your email reputation and recipient engagement and repair issues with expert how-to steps.

</call-out-link>


##  Adding Your Email Versions
Enter the different versions of your email where you would normally edit that piece of content in your Single Send.

- **Subject Line Testing**

  For subject line testing, you will find multiple input boxes in the sidebar where you would normally find your subject line, one for each subject line variation.

- **Email Content Testing**

  For email content testing, you will see additional tabs at the top of the content area, one for each email content variation. The number of tabs you see will depend on how many versions you have decided to test.

  Make edits to each of your email content variations by selecting one of the tabs.

<call-out>

**A/B Testing Tip - Adding Variations**

To know the direct cause for the best performing variation, we recommend only making one change per variation rather than many changes. This way, you can point to a direct cause for the differences in your stats.

</call-out>


##  Select the A/B Test Single Send Sample Size

Choose a percentage of your contact list that will participate in the A/B test. Each variation of the email will be sent to the same number of contacts within the participating portion of your list.

<call-out>
The size of your sample can be up to 100% of your contact list. This may be helpful in the event that you would like to run two tests, send each test to a portion of your list, and manually select a winner. 
</call-out>

##  Determine the Winning Criteria for the A/B Test

- **Open Rate**

  Twilio SendGrid automatically selects the winning variation based on how many recipients [open]({{root_url}}/glossary/opens/) your email.

- **Click Rate**

  Twilio SendGrid automatically selects the winning version based on how many recipients [click]({{root_url}}/glossary/clicks/) links and engage with the content in your email.


##  Set the A/B Test Duration

You can set your A/B test duration between 30 minutes and 24 hours.

While you can test your email variations for up to 24 hours, emails will only be sent to the subset of contacts you've chosen to participate in the A/B test during the test duration you set. The remainder of your contacts will only be sent the winning variation of your A/B test email after the test duration has completed.

<call-out>

**A/B Testing Tip - Setting the Test Duration**

You should be mindful of your test duration, with respect to the timeliness of your Single Send content.

For example, if you have a one-day sale that happens the day of your Single Send, you should set the A/B test duration to less than 24 hours so that your remaining contacts still have time to get the final email and participate in your one-day sale.


</call-out>


##  Sending the Winning A/B Test Variation
When a variation wins, based on your criteria and duration, you will be notified that a winner was chosen and which variation won. SendGrid will automatically send the winning email variation to the rest of your list.

  ![]({{root_url}}/images/ab_testing_4.png "A/B test winner")


 ## 	Additional Resources

- [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
- [Design Editor]({{root_url}}/ui/sending-email/editor/#the-design-editor)
- [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor)
