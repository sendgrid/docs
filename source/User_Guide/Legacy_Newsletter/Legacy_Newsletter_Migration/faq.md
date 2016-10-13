---
layout: page
weight: 0
seo:
  title: Frequently Asked Questions
  description:
title: Frequently Asked Questions
navigation:
  show: true
---

## [Pricing](#-Pricing)

* [How can I estimate what it will cost to use Marketing Campaigns?](#-How-can-I-estimate-what-it-will-cost-to-use-Marketing-Campaigns)
* [Why does Marketing Campaigns charge me for storing contacts?](#-Why-does-Marketing-Campaigns-charge-me-for-storing-contacts)
* [What is the additional value of Marketing Campaigns vs. Legacy Newsletter?](#-What-is-the-additional-value-of-Marketing-Campaigns-vs-Legacy-Newsletter)

## [Migrating](#-Migrating)

* [Can I try Marketing Campaigns with test sends before deciding whether to migrate?](#-Can-I-try-Marketing-Campaigns-with-test-sends-before-deciding-whether-to-migrate)
* [Will SendGrid automatically migrate my account to Marketing Campaigns?](#-Will-SendGrid-automatically-migrate-my-account-to-Marketing-Campaigns)
* [What do I need to do in order to migrate to Marketing Campaigns?](#-What-do-I-need-to-do-in-order-to-migrate-to-Marketing-Campaigns)
* [How do I move my contacts from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-move-my-contacts-from-Legacy-Newsletter-to-Marketing-Campaigns)
* [How do I move my templates from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-move-my-templates-from-Legacy-Newsletter-to-Marketing-Campaigns)
* [How do I transfer my unsubscribes from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-transfer-my-unsubscribes-from-Legacy-Newsletter-to-Marketing-Campaigns)

## [Contact Management](#-Contact-Management)

* [What information will Marketing Campaigns store about my contacts?](#-What-information-will-Marketing-Campaigns-store-about-my-contacts)

## [Segmentation](#-Segmentation)

* [What is segmentation?](#-What-is-segmentation)
* [How is a list different from a segment?](#-How-is-a-list-different-from-a-segment)
* [How do I create a segment?](#-How-do-I-create-a-segment)

## [Statistics](#-Statistics)

* [What will happen to all of my historical stats in Legacy Newsletter?](#-What-will-happen-to-all-of-my-historical-stats-in-Legacy-Newsletter)
* [Why are some stats that I'm used to in Legacy Newsletter missing in Marketing Campaigns?](#-Why-are-some-stats-that-Im-used-to-in-Legacy-Newsletter-missing-in-Marketing-Campaigns)

## [Campaign Creation](#-Campaign-Creation)

* [How is creating a campaign different in Marketing Campaigns than Legacy Newsletter?](#-How-is-creating-a-campaign-different-in-Marketing-Campaigns-than-Legacy-Newsletter)

***********

{% anchor h2 %}
Pricing
{% endanchor %}

{% anchor h3 %}
Is the pricing for Marketing Campaigns the same as it is for Legacy Newsletter?
{% endanchor %}

Both Legacy Newsletter and Marketing Campaigns start with your base SendGrid plan (which can be shared with any mail you send using the API or SMTP relay). For instance, if you have the Pro 300K plan and send 100,000 emails through Legacy or Marketing Campaigns, you’ll have 200,000 emails remaining to send through the API or SMTP relay..

From there, each email marketing solution charges a premium for sending through the user interface. With Legacy newsletter it’s a **$0.25 fee per 1,000 emails you send**. For Marketing campaigns, it’s a **$10 fee per 10,000 contacts you store**. Your first 2,000 contacts in Marketing Campaigns are free.

<table class="table">

  <tr>
    <th>Legacy Newsletter</th>
    <th>Marketing Campaigns</th>
  </tr>
  <tr>
    <td>
      <p>Base package</p>
      <p> + $0.25 / 1,000 emails sent</p>
    </td>
    <td>
      <p>Base package</p>
      <p> + $10 / 10,000 contacts stored</p>
    </td>
  </tr>

</table>

{% anchor h3 %}
How can I estimate what it will cost to use Marketing Campaigns?
{% endanchor %}

Leverage our [Pricing Calculator]({{root_url}}{{site.pricing_url}}) to enter the volume of email you’ll be sending as well as the number of contacts you’ll store in Marketing Campaigns.

{% anchor h3 %}
Why does Marketing Campaigns charge me for storing contacts?
{% endanchor %}

Charging by contacts stored in Marketing Campaigns as opposed to an additional fee for each email sent through Legacy Newsletter is aligned with sending best practices. This model encourages you to monitor how engaged your recipients are, and to modify your marketing strategy accordingly. Here’s how:

**Send less frequently to unengaged recipients:** If you have recipients who are not opening your email, remove them from your list! Continually sending to these recipients not only leads to a poor recipient experience, but is also a poor use of your time and money. By removing unengaged recipients, you save money, improve deliverability, and maintain a positive reputation with your recipients and your recipients’ inbox providers.

**Send more frequently to engaged recipients:** If you have recipients who are highly engaged, test sending to them more often. With the Marketing Campaigns pricing model, you’re only paying for storing that individual contact, regardless of how often you send to them.

_(Note: Emails sent through either Legacy Newsletter or Marketing Campaigns count towards your base plan. Here we’re focusing on the added cost of sending through our email marketing solutions.)_

A final note: The ability to segment your contacts into meaningful recipient groups is a core benefit of Marketing Campaigns (and a key enhancement over Legacy Newsletter). Segmentation requires Marketing Campaigns to store your contacts, and that data storage is the expense that drives our pricing.

{% anchor h3 %}
What is the additional value of Marketing Campaigns vs. Legacy Newsletter?
{% endanchor %}

**Segmentation:** Send more targeted, relevant email to your recipients by leveraging data about your customers as well as how they’ve engaged with your emails.

**Contact management:** Gain visibility into contact details such as custom data (name, city, etc.), associated lists, last campaign engagement dates, and more with individual contact profiles that are dynamically updated.

**Visibility into user engagement:** Marketing campaigns will show you which customers opened and/or clicked your email campaigns. You can also see which individual links in your campaigns were clicked most frequently.

**Improved user experience:** Ease of use is central to Marketing Campaigns. You’ll love the improved design and our UI/UX team has thoughtfully considered every workflow and is continuously working with customers to find opportunities to optimize.

**Flexible campaign building flow:** Marketing Campaigns accommodates your preferred workflow; there’s no forced step-by-step process. The end result is increased efficiency and a more pleasant experience.

**Recipient preferences:** Allow your users to easily opt into (or out of) different types of content you send using Unsubscribe Groups, and rely on Marketing Campaigns to track that data so you can reliably honor recipient preferences.

**Better integration:** Marketing Campaigns is fully integrated into SendGrid, allowing you to easily navigate to important tools such as Stats where you can see more complete data such as geography or device type.

**Ongoing enhancements:** SendGrid is investing heavily in Marketing Campaigns. Not only will existing functionality be optimized, we’ll continue to add new, valuable capabilities to the solution.

{% anchor h2 %}
Migrating
{% endanchor %}

{% anchor h3 %}
Can I try Marketing Campaigns with test sends before deciding whether to migrate?
{% endanchor %}

Yes. We encourage you to give Marketing Campaigns a try at any time. To make this even more approachable, you can store up to 2,000 contacts for free.

You can also choose to send using both Legacy Newsletter and Marketing Campaigns at the same time.

{% anchor h3 %}
Will SendGrid automatically migrate my account to Marketing Campaigns?
{% endanchor %}

No. We do not have any automated tools for migrating your Legacy Newsletter account to Marketing Campaigns. However, we’ve built a robust [toolkit]({{root_url}}User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html) of resources to help make the manual steps to migrate your account fast and simply. And as always, if you run into any issues with the process, SendGrid’s world class support team is here to help!

{% anchor h3 %}
What do I need to do in order to migrate to Marketing Campaigns?
{% endanchor %}

First, review this Migration Checklist.

While your migration plan will depend on your unique scenario, the migration checklist will encourage you to consider the following:

1. Do you wish to migrate existing contact lists?
2. Do you have invalid or unsubscribed emails you need to consider?
3. Are there key templates you wish to use in Marketing Campaigns, or are you starting fresh?
4. Are there images you have stored in Legacy Newsletter that you wish to use with Marketing Campaigns?
5. Are there campaign statistics you want to download for future reference or analysis?
6. Do you want to spend time testing campaign sends in Marketing Campaigns before you fully migrate?


{% anchor h3 %}
How do I move my contacts from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our contact migration how-to video or documentation page for step-by-step instructions.

{% anchor h3 %}
How do I move my templates from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our template migration how-to video or documentation page for step-by-step instructions.

{% anchor h3 %}
How do I transfer my unsubscribes from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our unsubscribe migration how-to video or documentation page for step-by -step instructions.

{% anchor h2 %}
Contact Management
{% endanchor %}

{% anchor h3 %}
What information will Marketing Campaigns store about my contacts?
{% endanchor %}

Marketing Campaigns will store two types of data about your contacts:

**Custom Fields:** Any information you share with us about your contacts such as age, geography, last purchase, etc. This data can be added using a CSV upload or using our Contacts API. Currently, Marketing Campaigns can store up to 60 different [custom field types]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html).

**Email Engagement:** Data about [how your customers engage]({{root_url}}/User_Guide/Marketing_Campaigns/Campaigns/index.html#-Engagement-Statistics) with emails you send using Marketing Campaigns. This includes whether they’ve opened or clicked specific campaigns as well as when they last opened or clicked any campaign you’ve sent.

{% anchor h2 %}
Segmentation
{% endanchor %}

{% anchor h3 %}
What is segmentation?
{% endanchor %}

Segmentation is Marketing Campaigns’ powerful tool to help you send more relevant, personalized email marketing campaigns. With segmentation you can target specific portions of your audience who share common characteristics and craft content that’s highly relevant to them.

You can segment based on customer data (like city or gender) as well as engagement with your email (such as opening within a certain timeframe, or clicking a link within a specific campaign).

As an example, you could send a different email to “Chicago customers who opened campaign X” than “San Francisco customers who opened Campaign X.” Doing so helps you add more value to your recipients’ inboxes, helping you achieve your engagement and revenue goals along the way.

Learn more about Segmentation with Marketing Campaigns within our [Documentation]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

{% anchor h3 %}
How is a list different from a segment?
{% endanchor %}

Lists are simply static collections of Marketing Campaigns contacts. You can upload contacts either [via CSV]({{root_url}}/User_Guide/Marketing_Campaigns/contacts.html), manually, or via [API integration]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html) and Marketing Campaigns will store them as-is. You can also always choose to manually add or remove recipients from a particular list.

Segments are dynamic collections of Marketing Campaigns contacts grouped together, or segmented, based on criteria you define. This can include data you track about them, such as gender, location, or package type, or how they’ve engaged with your emails previously. You can create a segment that pulls from all of your Marketing Campaigns contacts or from a specific existing list you’ve created.

Learn more about Lists and Segments within our [documentation]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html).

{% anchor h3 %}
How do I create a segment?
{% endanchor %}

To create a segment, you’ll first need to upload your recipients (and associated recipient data) as contacts within Marketing Campaigns. You can upload contacts to your account either [via CSV]({{root_url}}/User_Guide/Marketing_Campaigns/contacts.html), manually, or via [API integration]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html).

Once your contacts are stored in Marketing Campaigns, you’ll leverage the user interface to define the conditions of your segment. These can be either data about your recipients that you’ve included in your upload (such as name, gender, package type, etc.) or how they’ve engaged with your emails previously (such as last clicked date, opening a particular campaign, or both!).

For step-by-step instructions on creating a segment, see our [documentation]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html#-Create-a-Segment).

{% anchor h2 %}
Statistics
{% endanchor %}

{% anchor h3 %}
What will happen to all of my historical stats in Legacy Newsletter?
{% endanchor %}

Your historical stats will still be available within the Legacy Newsletter as long as Legacy Newsletter is live. However, eventually Legacy Newsletter will go away so that SendGrid can focus on innovation and support for Marketing Campaigns.

**Note: we will provide 12 months of advance warning before depreciation.**

For this reason, we recommend you export any data you wish to retain for the long term. View our migration guide for details on how to export.

{% anchor h3 %}
Why are some stats that I'm used to in Legacy Newsletter missing in Marketing Campaigns?
{% endanchor %}

Marketing Campaigns takes a slightly different approach to presenting statistics than Legacy Newsletter. To help you navigate these changes, we’ve created a side-by-side comparison for you to review. If there are specific statistics you would like available in Marketing Campaigns, please let us know by emailing us at <LegacyMigration@SendGrid.com>.

In many instances you’ll find that Marketing Campaigns provides more in-depth statistics than Legacy Newsletter. For instance, you can view which links within a campaign were clicked most often, or which individuals opened or clicked within particular campaigns. Insights like these help you learn about and optimize recipient engagement.

Learn more about Engagement Statistics with Marketing Campaigns [here]({{root_url}}/Classroom/Basics/Marketing_Campaigns/engagement_stats.html).

{% anchor h2 %}
Campaign Creation
{% endanchor %}

{% anchor h3 %}
How is creating a campaign different in Marketing Campaigns than Legacy Newsletter?
{% endanchor %}

Both Legacy Newsletter and Marketing Campaigns help you manage contacts, build campaigns, run multivariate tests, schedule sends, and review analytics. However, these tasks either more robust or easier to execute (or both!) in Marketing Campaigns. For example, Marketing Campaigns offers:

* Clean visuals and a more intuitive user interface
* More options for managing contact profiles
* Ability to create dynamic segments to send targeted campaigns
* A flexible campaign builder that lets you work according to your preferred workflow
* Improved unsubscribe management
* Increased granularity into campaign performance, for instance, individual link click tracking

And there’s much more! Explore our [side-by-side comparison of Legacy Newsletter and Marketing Campaigns]({{root_url}}User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/Side_by_Side_Comparisons/index.html).
