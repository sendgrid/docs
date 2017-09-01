---
layout: page
weight: 50
title: A/B Testing
navigation:
  show: true
seo:
  title: A/B Testing Marketing Campaigns
  override: true
  description:
---

You may want to test the email that you are sending to your customers in order to optimize engagement from them. A/B testing in Marketing Campaigns works by sending versions of your emails to small subsets of your contacts. When your contacts interact with the emails according to the criteria you set, SendGrid will send the winning version of your campaign to the remainder of your contacts.

![]({{root_url}}/images/ab_testing_1.png "A/B Testing")

{% anchor h3 %}
Subject Testing vs. Content Testing
{% endanchor %}

When you are A/B testing your email campaigns, you will want to optimize for a specific metric, whether it's opens, clicks, or something else of your choosing.

Subject testing caters more to open rate, because the subject is usually all the recipient sees until they open their email. So if you have high open rates, that’s generally a reflection of the strength of your subject line. Once you find a subject that works well, you will potentially see other engagement metrics improve as well.

Content testing caters more to click rate, because the recipient will not see this content unless they open the email. If you have high click rates, it generally means that you have compelling content and calls to action (CTAs).

{% anchor h3 %}
Selecting A/B Testing Criteria
{% endanchor %}

{% info %}
You can test up to 6 variations of your campaign.
{% endinfo %}

**Activate A/B Testing** - When you view the “Testing” tab, by default A/B testing will be turned off. Click the button that says “Off” to toggle this feature on.

**Test Versions Of** - Select whether you want to test the subject or the content.

**Test Size** - The percentage of your list that should get each variation. Each variation will be sent to the same number of contacts.

**Selecting a Winner**

Open Rate - This is the rate at which your recipients <a href="{{root_url}}/Glossary/opens.html">open</a> your emails.

Click Rate - This is the rate at which your recipients <a href="{{root_url}}/Glossary/clicks.html">click</a> links in your emails.

Manual - You will be notified by email when the test duration time has passed. At that time, you can choose your winner manually. The campaign will not be sent to all recipients until you choose a winning variation.

**Duration** - The time to test your variation, ranging from 30 minutes to 24 hours. While you can test your variations for up to 24 hours, only the subset of emails you've chosen to test will be sent before that duration is up. This means that you should be mindful of your test duration with respect to the timeliness of your campaign content. For example, if you have a one-day sale that happens the day of your campaign, you should set the duration so that your customers get the campaign the same day as the sale.

{% anchor h3 %}
Adding Your Versions
{% endanchor %}

In all cases, your versions will be located in the same place where you would normally edit that piece of your campaign.

For subject testing, you will find multiple input boxes, one for each variation, in the sidebar where you would normally find your single subject line.

{% info %}
To know the direct cause for the best performing variation, it typically makes sense to make one change per variation rather than many changes. That way you can point to a direct cause for the differences in your stats.
{% endinfo %}

For content testing, you will be able to make edits to each of your variations by selecting one of the tabs at the top of the content area. The number of tabs you see will depend on how many versions you have decided to test.

{% anchor h3 %}
Sending The Winner
{% endanchor %}

When a variation wins, based on your criteria and duration, you will be notified that a winner was chosen and which variation won.

![]({{root_url}}/images/ab_testing_4.png "Manually choose a test winner")

You can also manually choose a winner at any time after you start the test.

![]({{root_url}}/images/ab_testing_2.png "Manually choose a test winner")

If you choose to manually pick a winner, (meaning SendGrid is not automatically choosing based on click or open rate), then you will be notified via email at the end of the duration you set, that your test is complete and that you need to choose a winner.

![]({{root_url}}/images/ab_testing_3.png "Choose a winner badge")

{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [Campaign Statistics](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/campaign_stats.html)
