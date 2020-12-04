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

## Set up an A/B test

_To set up an A/B test on an existing Single Send:_

1. From the left-hand navigation, select **Marketing**, and then click **Single Sends**.
2. Locate the Single Send you want to A/B test and click on the Single Send to open it in the editor it was created in.
3. Depending on the editor used to create the Single Send, A/B testing is located on either the _Settings_ tab or the _A/B Testing_ tab.
4. Once you have located the A/B Testing settings, toggle the _Activate A/B Testing_ switch to **ON**.

## Choose the Type of A/B Test To Run

When you are A/B testing your emails, you want to optimize for a specific metric. Determine whether you want to optimize your _Open Rates_, by testing the _Subject Line_; or your _Click Rates_, by testing the _Email Content_.

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

## Adding Your Email Versions

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

## Select the A/B Test Single Send Sample Size

Choose a percentage of your contact list that will participate in the A/B test. Each variation of the email will be sent to the same number of contacts within the participating portion of your list.

<call-out>
The size of your sample can be up to 100% of your contact list. This may be helpful in the event that you would like to run two tests, send each test to a portion of your list, and manually select a winner.
</call-out>

## Determine the Winning Criteria for the A/B Test

Twilio SendGrid can automatically select the winner of a test based on either the open rate or click rate. You can also manually select a winner when neither of the automatic selections suite your needs.

- **Unique Open Rate**

  Twilio SendGrid automatically selects the winning variation based on how many recipients [open]({{root_url}}/glossary/opens/) your email.

- **Unique Click Rate**

  Twilio SendGrid automatically selects the winning version based on how many recipients [click]({{root_url}}/glossary/clicks/) links and engage with the content in your email.

- **Manual**

  You can evaluate the performance of all variants following the A/B test duration and manually choose a winner based on each variant's performance across multiple metrics.

## Set the A/B Test Duration

You can set your A/B test duration between 30 minutes and 24 hours.

While you can test your email variations for up to 24 hours, emails will only be sent to the subset of contacts you've chosen to participate in the A/B test during the test duration you set. The remainder of your contacts will only be sent the winning variation of your A/B test email after the test duration has completed.

<call-out>

**A/B Testing Tip - Setting the Test Duration**

You should be mindful of your test duration, with respect to the timeliness of your Single Send content.

For example, if you have a one-day sale that happens the day of your Single Send, you should set the A/B test duration to less than 24 hours so that your remaining contacts still have time to get the final email and participate in your one-day sale.

</call-out>

## Sending the winning A/B test variation

### Automatically selected winners

When a variation wins based on unique click rate or unique open rate, you will be notified that a winner was chosen and which variation won. SendGrid will automatically send the winning email variation to the rest of your list.

![]({{root_url}}/images/ab_testing_4.png 'A/B test winner')

### Manually selecting a winner

There are likely times when neither the open rate nor the click rate alone best measures the success of a message. If, for example, version A had an open rate of 48% while version B had an open rate of 49%, version B would win an automatic selection based on open rate. However, if those two versions also had click rates of 45% for version A and 10% for version B, your winner based on a narrow margin in open rate would be significantly underperforming the alternative version in click rate. This is one scenario in which you could select a manual winner or re-evaluate your criteria for success.

Manually selecting a winner also allows you to prioritize other metrics such as unsubscribes and spam reports.

At the end of the A/B test duration, you will receive an email asking you select the winner of your campaign.

_To manually select the winner_

1. Navigate to the [**Marketing Campaigns** > **Single Sends**](https://mc.sendgrid.com/single-sends) page.
2. Select the Single Send associated with the completed A/B test.
3. You will see the performance of each test variant across the following metrics
   - **Delivered**
   - **Opens**
   - **Clicks**
   - **Unique Opens**
   - **Click Through Rate**
   - **Total Click Through Rate**
   - **Unsubscribes**
   - **Spam Reports**

![The stats or performance overview page for a Single Send A/B test]({{root_url}}/img/single_send_stats_overview_manualAB.png 'Single Send A/B test stats')

4. Click the radio button beside a test variant to select it as the winner.
5. Click **Pick Winner**.
6. You will be presented with a modal asking you to confirm your selection. Click **Confirm** to proceed or **Cancel** to close the modal without selecting a winner.
7. After clicking **Confirm**, the winner will be sent to the remaining contacts in your list. The winner will also be labeled on the Single Sends Dashboard and the Single Sends statistics overview page.

#### Test expiration

You must select the winner of a manual A/B test within 7 days of the test duration's end. For example, if your test is scheduled to end on January 1st, you must select a winner on or before January 8th. You cannot select a winner of a test that has expired.

You will receive an email letting you know when your test is about to expire. You will also receive an email when a test expires. The last date to select a test winner is also displayed on both the Single Sends overview page and a Single Send's statistics overview page.

![The Single Sends overview page with expired and soon to expire dates highlighted]({{root_url}}/img/select_winnerAB_single_send_index.png 'Single Sends Overiew Page')

![A Single Send's stats overview page with the expiration date highlighted]({{root_url}}/img/select_winner_byAB_stats_page.png 'Single Send A/B test stats page')

## Additional Resources

- [Campaign Statistics]({{root_url}}/ui/analytics-and-reporting/marketing-campaigns-stats/)
- [Design Editor]({{root_url}}/ui/sending-email/editor/#the-design-editor)
- [Code Editor]({{root_url}}/ui/sending-email/editor/#the-code-editor)
