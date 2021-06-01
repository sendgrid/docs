---
layout: page
weight: 85
title: Single Sends
group: managing-contacts
navigation:
  show: true
seo:
  title: Single Sends
  override: true
  description: Exclude contacts from a Single Send based on list or segment membership.
---

A Single Send is a one-time non-automated email message delivered to a list or segment of your audience. You can schedule a Single Send or send it immediately. Unlike an [Automation]({{root_url}}/glossary/automated-email/), a Single Send is not part of a series of related messages that are designed to work in sequence.

Single Sends can be used to deliver promotional offers, engagement campaigns, newsletters, announcements, legal notices, policy updates, and more.

## Single Send features

### Design and Code Editors

Twilio SendGrid Single Sends leverage our Design and Code Editors, allowing you to create templates quickly and easily without sacrificing the ability to customize your designs. Twilio SendGrid also provides a library of pre-built designs that you can duplicate and modify.

See our dedicated [Design and Code Editor page]({{root_url}}/ui/sending-email/editor/) for more on working with email designs.

### Search and filter your Single Sends

After creating multiple Single Sends, you can modify and delete them as needed. To make managing multiple Single Sends easier, Twilio SendGrid offers search functionality, enabling you to find a Single Send quickly by name.

You can also filter your search results by status — "Draft," "Scheduled," or "Triggered" — and any categories you have added to your Single Sends.

When filtering by multiple categories, Marketing Campaigns will return results matching any of the categories specified. For example, if you filter by the categories "Newsletter," "Promotion," and "BOGO," Marketing Campaigns will return Single Sends matching one _or_ more of those categories.

### A/B Testing

A/B testing, also known as split testing, is a powerful way to optimize engagement with your email. A/B tests allow you to create multiple versions of a Single Send and deliver each to a subset of your audience. Based on the performance of each variant, a _winner_ is selected that can be sent to the rest of your contacts.

When working with A/B tests, you can

* Clone variations of A/B tests
* Delete variations of A/B tests
* Manually select the winner of an A/B test

See our dedicated [A/B Testing page]({{root_url}}/ui/sending-email/a-b-testing/) to learn how to create and manage your A/B tests.

### Exclude Lists and Segments

You can exclude up to 5 segments and 50 lists from a Single Send. Twilio SendGrid will omit any contacts who are on one of your excluded segments or lists from the send.

### Send tests

Single Sends are integrated with Twilio SendGrid's Email Testing feature. Email Testing allows you to check not only whether or not your messages will be rendered properly across mail clients but also how likely a message is to perform well across spam filters.

For more about testing, see our dedicated [Email Testing page]({{root_url}}/ui/sending-email/email-testing/).

### The Single Sends API

For those who want to manage their Single Sends programmatically, Twilio SendGrid provides the [Single Sends API]({{root_url}}/api-reference/).

## Work with Single Sends 

### Create a Single Send

_To create a new Single Send_

1. From the left-hand navigation, select **Marketing**.
2. Select **Single Sends** and click **Create Single Send**.
3. Select a template from **Your Email Designs** or one of the pre-built **SendGrid Email Designs**.
   <br> For more information about our designs, see [Working with Marketing Campaigns Email Designs]({{root_url}}/ui/sending-email/working-with-marketing-campaigns-email-designs/).

<call-out>

You can also create a template from an existing Single Send by selecting the action menu next to the email you'd like to reuse and selecting **Create Template**.

</call-out>

4. Select an editor. You can choose between the **Design Editor** and the **Code Editor**.
   - Inside the Design Editor, the **Settings**, **Tags** and **Build** tabs allow you to design and configure your email.
   - Inside the Code Editor, you can click the left **Settings** tab to expand the settings window, and then you can configure your email using the **Settings** and **Tags** tabs.

![]({{root_url}}/img/design-editor-preview.png 'Design Editor Preview')

5. Click **Save**. Your Single Send is now created. Next, you will need to edit the Single Send's settings.

### Single Send required settings

The **Settings** tab allows you to configure all the essential information about your Single Send, including the sender and recipients. To completely prepare a Single Send's settings, you must define the following fields.

- **From Sender**: The publicly visible sender of your Single Send. This email address should be one of your verified senders. See our [sender verification documenation]({{root_url}}/ui/sending-email/sender-verification/) for more information about setting up a verified sender.
- **Email Subject**: The email's subject line. This field can be A/B tested.
- **Recipients**: The segments or lists you want to send the email to.

<call-out type="warning">

When selecting segments, make sure you are limiting your selection to 10 segments.

See our [Segmentation documenation]({{root_url}}/ui/managing-contacts/segmenting-your-contacts/) for more information about managing your contacts and building Single Sends based on engagement data.

</call-out>

- **Scheduling**: A Single Send can be sent immediately or scheduled in advance. If you select **Specify a Date and Time**, **Date** and **Time** fields will be displayed where you can set a future send time.

### Single Send optional settings

In addition to the settings necessary to send your messages, Single Sends provide optional settings that allow you to more precisely manage how you target your audience with each message.

#### Exclude contacts from a Single Send

_To exclude a segment or list from your Single Send_

1. Navigate to **Marketing** > **Single Sends**.
2. Create a new Single Send or open existing Single Send.
3. Once the Single Send is open, in the **Settings** tab scroll to the **Recipients** header.
4. Toggle **Exclude specific recipients** to **ON**.
5. This will display an **Exclude** drop-down menu.
6. The drop-down menu will load all of your **Lists** and **Segments**. Select any Lists or Segments you wish to exclude from the Single Send.
  <br /> You can include as many as 5 segments or 50 lists.

![Exclude recipients from a Single Send]({{root_url}}/img/single-sends-exclude-recipients.png 'Exclude recipients')

The contacts associated with your selected Lists or Segments will be excluded from the Single Send.

#### Send from a specific IP Pool

If you have dedicated IPs, you can set up [IP Pools]({{root_url}}/ui/account-and-settings/ip-pools/) that allow you to separate your traffic and potentially enhance your deliverability by protecting your sender reputation.

_To utilize IP pools for Single Sends_

1. navigate to **Settings** and from the IP Pool drop-down and select the IP pool you wish to use.

### Single Sends additional tabs

For more thorough information about working with the other tabs used to configure a Single Send, please visit the dedicated documentation for each tab listed below.

* [Design and Code Editor documentation]({{root_url}}/ui/sending-email/editor/).
* [Tags]({{root_url}}/ui/sending-email/editor/#substitution-tags).
* [A/B Testing](/{{root_url}}/ui/sending-email/a-b-testing/)
