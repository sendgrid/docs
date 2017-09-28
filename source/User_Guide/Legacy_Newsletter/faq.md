---
layout: page
weight: 0
seo:
  title: Frequently Asked Questions
  description: Answers to common questions about migrating to Marketing Campaigns
title: Frequently Asked Questions
navigation:
  show: true
---
{% warning %}
Legacy Newsletter is now retired.
As a safety net, you may **retrieve** data for a short grace period. Please act now to download your data or migrate any assets to Marketing Campaigns.
{% endwarning %}

For assistance please [contact our support team](https://support.sendgrid.com/). Login to see your contact options.

## Legacy Newsletter Sunset

* [Why did you retire Legacy Newsletter?](#-Why-did-you-retire-Legacy-Newsletter)
* [How long will Legacy Newsletter be available?](#-How-long-will-Legacy-Newsletter-be-available)
* [What will happen to my account when the product is retired?](#-What-will-happen-to-my-account-when-the-product-is-retired)
* [What if I choose not to migrate?](#-What-if-I-choose-not-to-migrate)

## [Pricing](#-Pricing)

* [Is the pricing for Marketing Campaigns the same as it is for Legacy Newsletter](#-Is-the-pricing-for-Marketing-Campaigns-the-same-as-it-is-for-Legacy-Newsletter)
* [Where do I choose how to pay for Marketing Campaigns?](#-Where-do-I-choose-how-to-pay-for-Marketing-Campaigns)
* [How can I estimate what it will cost to use Marketing Campaigns?](#-How-can-I-estimate-what-it-will-cost-to-use-Marketing-Campaigns)
* [Why does Marketing Campaigns charge me for storing contacts?](#-Why-does-Marketing-Campigns-charge-me-for-storing-contacts)
* [What is the additional value of Marketing Campaigns vs. Legacy Newsletter?](#-What-is-the-additional-value-of-Marketing-Campaigns-vs-Legacy-Newsletter)
* [I’m using Marketing Campaigns, why am I still being billed for Legacy Newsletter?](#-Im-using-Marketing-Campaigns-why-am-I-still-being-billed-for-Legacy-Newsletter)

## [Migrating](#-Migrating)

* [Will SendGrid automatically migrate my account to Marketing Campaigns?](#-Will-SendGrid-automatically-migrate-my-account-to-Marketing-Campaigns)
* [What files or data can I download from Legacy Newsletter?](#-What-files-or-data-can-I-download-from-Legacy-Newsletter)
* [What do I need to prepare before to migrating to Marketing Campaigns?](#-What-do-I-need-to-prepare-before-migrating-to-Marketing-Campaigns)
* [How do I move my contacts from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-move-my-contacts-from-Legacy-Newsletter-to-Marketing-Campaigns)
* [How do I move my templates from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-move-my-templates-from-Legacy-Newsletter-to-Marketing-Campaigns)
* [How do I transfer my unsubscribes from Legacy Newsletter to Marketing Campaigns?](#-How-do-I-transfer-my-unsubscribes-from-Legacy-Newsletter-to-Marketing-Campaigns)
* [How do I download and save my historical stats?](#-How-do-I-download-and-save-my-historical-stats)
* [How do I migrate my API integration with Legacy Newsletter to Marketing Campaigns?](#-How-do-I-migrate-my-API-integration-with-Legacy-Newsletter-to-Marketing-Campaigns)

## [Contact Management](#-Contact-Management)

* [What information will Marketing Campaigns store about my contacts?](#-What-information-will-Marketing-Campaigns-store-about-my-contacts)
* [Will the Subscription Widget also be retired?](#-Will-the-Subscription-Widget-also-be-retired?)

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
Legacy Newsletter Sunset
{% endanchor %}

{% anchor h3 %}
Why did you retire Legacy Newsletter?
{% endanchor %}

We created Legacy Newsletter to deliver on customer demand for a simple, straightforward e-newsletter tool to support user engagement and retention.

Over time, the needs and expectations of our customers—and the market at large—have continued to grow. In response, we built Marketing Campaigns: an easy-to-use solution designed to help customers confidently achieve their email marketing goals.

In order to best meet your email marketing needs, our focus will be dedicated to optimizing Marketing Campaigns moving forward. Without continued investment, Legacy Newsletter would have become obsolete and impractical for us to continue to support to the degree our customers deserve.

{% anchor h3 %}
How long will Legacy Newsletter be available?
{% endanchor %}

As of **September 30, 2017**, Legacy Newsletter has been deprecated. You can no longer create or send campaigns, though you can download data for a **brief** grace period. SendGrid recommends you [migrate to Marketing Campaigns]({{root_url}}/User_Guide/Legacy_Newsletter/migration_checklist.html).  

Whether or not you choose not to migrate, you need to download any data from Legacy Newsletter you wish to maintain **ASAP**.

{% anchor h3 %}
What will happen to my account when the product is retired?
{% endanchor %}

Now that Legacy Newsletter has been sunset, you cannot create or send campaigns.  This deprecation includes both the web interface at sendgrid.com/newsletter and [APIs]({{root_url}}/API_Reference/Web_API/Legacy_Features/Marketing_Emails_API/index.html) at `api.sendgrid.com/api/newsletter`.

Statistics related to email sent through Legacy Newsletter before deprecation will be included in your overall SendGrid stats, and are identifiable by the default category of Newsletter, along with any additional categories you’ve assigned your Legacy Newsletter campaigns.

{% warning %}
There is currently a **brief** grace period to access and download any data you have stored in the application such as contact lists, templates, statistics, or prior campaigns.
{% endwarning %} 

{% anchor h3 %}
What if I choose not to migrate?
{% endanchor %}

If you choose not to migrate, you’ll need to download any data and assets from Legacy Newsletter you wish to retain **ASAP**. SendGrid is offering a **short** grace period for those that have not migrated yet, but be aware that anything not downloaded asap will soon be permanently deleted.

{% anchor h2 %}
Pricing
{% endanchor %}

{% anchor h3 %}
Is the pricing for Marketing Campaigns the same as it is for Legacy Newsletter?
{% endanchor %}

Both Legacy Newsletter and Marketing Campaigns start with your base SendGrid plan (which can be shared with any mail you send using the API or SMTP relay). For instance, if you have the Pro 300K plan and send 100,000 emails through Legacy or Marketing Campaigns, you’ll have 200,000 emails remaining to send through the API or SMTP relay.

From there, each email marketing solution charges a premium for sending through the user interface. With Legacy Newsletter it’s a **$0.25 fee per 1,000 emails you send**. For Marketing Campaigns, it’s a **$10 fee per 10,000 contacts you store**. Your first 2,000 contacts in Marketing Campaigns are free.

If you used Legacy Newsletter between 1 August 2016 and 30 March 2017, when you switch to Marketing Campaigns, you can [choose how you’d like to pay]( https://app.sendgrid.com/settings/choose_how_you_pay). You can continue to pay per email sent or you can choose to pay per contact you store in Marketing Campaigns: 

<table class="table" style="table-layout:fixed">
  <tr>
    <td><p>Pay <b>per email</b> you send</p>
    <p><i>Special offer for Legacy Newsletter </br>migrators</i></p>
 </br>
        <p>$0.25/1,000 emails</p>
        <p>(plus base plan)</p>
    </td>
    <td><p>Pay <b>per contact</b> you store</p>
        <p><i>Standard Marketing Campaigns pricing</i></p>
 </br>
        <p>$10/10,000 contacts</p>
        <p>(plus base plan)</p>
    </td>
  </tr>
</table>

{% anchor h3 %}
Where do I choose how to pay for Marketing Campaigns?
{% endanchor %}

Visit the [Choose How You Pay page](https://app.sendgrid.com/settings/choose_how_you_pay) in your account. If that link does not work for you, Navigate to **Settings** then **Plan and Billing Details**, then scroll to Marketing Campaigns and click **Learn More**. 

{% info %}
To be eligible for this pricing offer you need to have sent email via Legacy Newsletter between August 1, 2016 and March 30, 2017. 
{% endinfo %}

{% anchor h3 %}
How can I estimate what it will cost to use Marketing Campaigns?
{% endanchor %}

Leverage our [Pricing Calculator](https://app.sendgrid.com/settings/choose_how_you_pay) to enter the volume of email you’ll be sending as well as the number of contacts you’ll store in Marketing Campaigns.

{% anchor h3 %}
Why does Marketing Campigns charge me for storing contacts?
{% endanchor %}

The default pricing for Marketing Campaigns is to charge for contacts stored in Marketing Campaigns as opposed to an additional fee for each email sent through Legacy Newsletter. This is aligned with sending best practices by encouraging you to monitor how engaged your recipients are and modify your marketing strategy accordingly. Here’s how:

**Send less frequently to unengaged recipients:** If you have recipients who are not opening your email, remove them from your list! Continually sending to these recipients not only leads to a poor recipient experience, but is also a poor use of your time and money. By removing unengaged recipients, you save money, improve deliverability, and maintain a positive reputation with your recipients and your recipients’ inbox providers.

**Send more frequently to engaged recipients:** If you have recipients who are highly engaged, test sending to them more often. With the Marketing Campaigns pricing model, you’re only paying for storing that individual contact, regardless of how often you send to them.

{% info %}
Emails sent through either Legacy Newsletter or Marketing Campaigns count towards your base plan.
{% endinfo %}

The ability to segment your contacts into meaningful recipient groups is a core benefit of Marketing Campaigns (and a key enhancement over Legacy Newsletter). Segmentation requires Marketing Campaigns to store your contacts, and that data storage is the expense that drives our pricing.

{% anchor h3 %}
What is the additional value of Marketing Campaigns vs. Legacy Newsletter?
{% endanchor %}

**[Segmentation:]({{root_url}}/User_Guide/Marketing_Campaigns/lists.html)** Send more targeted, relevant email to your recipients by leveraging data about your customers as well as how they’ve [engaged with your emails]({{root_url}}/User_Guide/Marketing_Campaigns/campaigns.html#-Create-a-Segment-Based-On-Your-Engagement-Metrics).

**[Contact management:]({{root_url}}/User_Guide/Marketing_Campaigns/contacts.html)** Gain visibility into contact details such as custom data (name, city, etc.), associated lists, last campaign engagement dates, and more with individual contact profiles that are dynamically updated.

**[Visibility into user engagement:]({{root_url}}/User_Guide/Marketing_Campaigns/campaigns.html#-Engagement-Statistics)** Marketing campaigns will show you which customers opened and/or clicked your email campaigns. You can also see which individual links in your campaigns were clicked most frequently.

**Improved user experience:** Ease of use is central to Marketing Campaigns. You’ll love the improved design and our UI/UX team has thoughtfully considered every workflow and is continuously working with customers to find opportunities to optimize.

**[Flexible campaign building flow:]({{root_url}}/User_Guide/Marketing_Campaigns/getting_started.html)** Marketing Campaigns accommodates your preferred workflow; there’s no forced step-by-step process. The end result is increased efficiency and a more pleasant experience.

**[Recipient preferences:]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html)** Allow your users to easily opt out of different types of content you send using Unsubscribe Groups, and rely on Marketing Campaigns to track that data so you can reliably honor recipient preferences.

**Better integration:** Marketing Campaigns is fully integrated into SendGrid, allowing you to easily navigate to important tools such as Stats where you can see more complete data such as geography or device type.

**Ongoing enhancements:** SendGrid is investing heavily in Marketing Campaigns. Not only will existing functionality be optimized, we’ll continue to add new, valuable capabilities to the solution.

**[Improved security and compliance]({{root_url}}/User_Guide/Legacy_Newsletter/Side_by_Side_Comparisons/security_compliance.html):** Marketing Campaigns includes several security and compliance improvements. For example, you'll find the [unsubscribe and suppression management tools]({{root_url}}/Classroom/Basics/Marketing_Campaigns/unsubscribe_groups.html) have been improved to make it easier for your recipients to unsubscribe from unwanted email, and [Marketing Campaign's sender identities]({{root_url}}/User_Guide/Marketing_Campaigns/senders.html) have greatly improved our anti-spoofing protection.

{% anchor h3 %}
I’m using Marketing Campaigns, why am I still being billed for Legacy Newsletter?
{% endanchor %}

Your final Legacy Newsletter bill will be generated on the first calendar day of the month following the last month you send via Legacy Newsletter. If you use both Legacy Newsletter and Marketing Campaigns, you’ll see two distinct line items on your invoices.

For example, if you sent your final Legacy Newsletter campaign on June 15, and began using Marketing Campaigns at any point within June, you’ll see both items on your July invoice.

{% anchor h2 %}
Migrating
{% endanchor %}

{% anchor h3 %}
Will SendGrid automatically migrate my account to Marketing Campaigns?
{% endanchor %}

No. We do not have any automated tools for migrating your Legacy Newsletter account to Marketing Campaigns. However, we’ve built a robust [toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/index.html) of resources to help make the manual steps to migrate your account fast and simple. And as always, if you run into any issues with the process, SendGrid’s world class support team is here to help!

You can also use the API to migrate your content, recipients, unsubscribes, and statistics from the Legacy Newsletter to Marketing Campaigns. For more information, see our [Legacy Newsletter to Marketing Campaigns API Migration Guide](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/api_migration.html).

{%anchor h3 %}
What files or data can I download from Legacy Newsletter?
{% endanchor %}

For a limited time following the sunset of Legacy Newsletter, you will be able to download:

  * [Recipient Lists](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_recipient_lists.html)
  * [Templates](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_content.html)
  * [Statistics](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/downloading_historical_statistics.html)
  * [Unsubscribes](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_unsubscribes.html)
  * [Images](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_images.html)
  * Sender Addresses
  * Email Reports

  *To save Sender Addresses:*

   1. From the application, navigate to **Sender Addresses**.
   2. Select **Manage**.
   3. Copy and paste the information you wish to save into a new file. 

  *To download Email Reports:*

   1. Navigate to **Marketing Email** and then select **Manage**. 
   2.  Find the campaign you wish to save the data for and click the title. 

{% anchor h3 %}
What do I need to prepare before migrating to Marketing Campaigns?
{% endanchor %}

First, review this [Migration Checklist]({{root_url}}/User_Guide/Legacy_Newsletter/migration_checklist.html).

While your migration plan will depend on your unique scenario, the migration checklist will encourage you to consider the following:

1. Do you wish to migrate existing contact lists?
2. Do you have invalid or unsubscribed emails you need to consider?
3. Are there key templates you wish to use in Marketing Campaigns, or are you starting fresh?
4. Are there images you have stored in Legacy Newsletter that you wish to use with Marketing Campaigns?
5. Are there campaign statistics you want to download for future reference or analysis?
6. Do you want to spend time testing campaign sends in Marketing Campaigns before you fully migrate?
7. Do you have API integrations you need to migrate?

{% anchor h3 %}
How do I move my contacts from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our contact migration [how-to video or documentation page]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_recipient_lists.html) for step-by-step instructions.

{% anchor h3 %}
How do I move my templates from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our template migration [how-to video or documentation page]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_content.html) for step-by-step instructions.

{% anchor h3 %}
How do I transfer my unsubscribes from Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

View our [unsubscribe migration how-to video or documentation page]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/migrating_unsubscribes.html) for step-by-step instructions.

{% anchor h3 %}
How do I download and save my historical stats?
{% endanchor %}

View our [how-to video and documentation page]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/downloading_historical_statistics.html) for step-by-step instructions to download your historical stats/data.

{% anchor h3 %}
How do I migrate my API integration with Legacy Newsletter to Marketing Campaigns?
{% endanchor %}

Please refer to our [API comparison]({{root_url}}/User_Guide/Legacy_Newsletter/Side_by_Side_Comparisons/api_comparison.html) to see how the Legacy Newsletter API maps to the Marketing Campaigns API. For help with migrating your content, recipients, unsubscribes, and statistics from the Legacy Newsletter to Marketing Campaigns using the API, please refer to our [Legacy Newsletter to Marketing Campaigns API Migration Guide]({{root_url}}/User_Guide/Legacy_Newsletter/Migration_Tutorials/api_migration.html).

{% anchor h2 %}
Contact Management
{% endanchor %}

{% anchor h3 %}
What information will Marketing Campaigns store about my contacts?
{% endanchor %}

Marketing Campaigns will store two types of data about your contacts:

**Custom Fields:** Any information you share with us about your contacts such as age, geography, last purchase, etc. This data can be added using a CSV upload or using our [Contacts API]({{root_url}}/API_Reference/Web_API_v3/Marketing_Campaigns/contactdb.html). Currently, Marketing Campaigns can store up to 60 different [custom fields]({{root_url}}/User_Guide/Marketing_Campaigns/custom_fields.html).

**Email Engagement:** Data about [how your customers engage]({{root_url}}/User_Guide/Marketing_Campaigns/campaigns.html#-Engagement-Statistics) with emails you send using Marketing Campaigns. This includes whether they’ve opened or clicked specific campaigns as well as when they last opened or clicked any campaign you’ve sent.

{% anchor h3 %}
Will the Subscription Widget also be retired?
{% endanchor %}

The [Legacy Newsletter subscription widget](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Features/recipients.html#-Subscription-Widget) will no longer function once Legacy Newsletter is retired on 9/30/17. 

As you migrate to Marketing Campaigns, you can leverage any of the following best-in-class email list growth integrations to manage your recipient signups: [Privy](https://privy.com/sendgrid/), [WisePops](https://support.wisepops.com/integrations/connect-wisepops-with-sendgrid), [JustUno](https://www.justuno.com/sendgrid-integrations.html), or [SendGrid’s Wordpress subscription widget](https://sendgrid.com/docs/Integrate/Tutorials/WordPress/subscription_widget.html?mc=email&mcd=Legacymigration&utm_medium=email&utm_source=nurture&cvosrc=email.nurture.Legacymigration&utm_campaign=Legacymigration).

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

After **September 30, 2017** you will be given a short grace period to download your data. After this grace period this data will be permanently deleted.

For this reason, we recommend you export any data you wish to retain for the long term **asap**. [View our migration guide for details on how to export this data.](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/Migration_Tutorials/downloading_historical_statistics.html)

{% anchor h3 %}
Why are some stats that I'm used to in Legacy Newsletter missing in Marketing Campaigns?
{% endanchor %}

Marketing Campaigns takes a slightly different approach to presenting statistics than Legacy Newsletter. To help you navigate these changes, we’ve created a [side-by-side comparison]({{root_url}}/User_Guide/Legacy_Newsletter/Side_by_Side_Comparisons/statistics_reporting.html) for you to review. If there are specific statistics you would like available in Marketing Campaigns, please let us know by emailing us at <a href="mailto:LegacyMigration@SendGrid.com">LegacyMigration@SendGrid.com</a>.

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

And there’s much more! Explore our side-by-side [comparison of Legacy Newsletter and Marketing Campaigns]({{root_url}}/User_Guide/Legacy_Newsletter/Side_by_Side_Comparisons/index.html).
