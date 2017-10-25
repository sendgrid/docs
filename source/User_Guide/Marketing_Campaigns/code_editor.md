---
layout: page
weight: 75
title: Code Editor
navigation:
  show: true
seo:
  title: Code Editor
  override: true
  description:
---

Use the Code Editor to create a template, edit a SendGrid template, or build a campaign with your own custom HTML. With helpful features like preview, tag completion, and error flagging, you can confidently edit your HTML.

* [Getting Started with the Code Editor](#-Getting-Started-with-the-Code-Editor)
* [Uploading Images](#-Uploading-Images)
* [Using Substitution Tags](#-Using-Substitution-Tags)
* [Adding Categories](#-Adding-Categories)
* [Previewing Your Campaign](#-Previewing-Your-Campaign)
* [Settings](#-Settings)


{% anchor h2 %}
Getting Started with the Code Editor
{% endanchor h2 %}

1. From the left-hand navigation, select **Marketing**, and then click **Campaigns**. 

1. Click **Create Campaign**.
   <br>To create a campaign from an existing one, find the version you want to use and click the **action menu** next to the campaign and then select **Edit** or **Duplicate**.

   ![]({{root_url}}/images/campaigns_dashboard_categories_search.png)

1. Select the template that you want to use for your campaign.
   <br>You can select a Blank Template, a custom template that you have already created, or one of SendGrid's pre-built templates. For more information, see [Working With Templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html).

1. Select **Code Editor**, and then click **Continue**.
   <br>If you have already built the HTML that you want to use in another application, copy and paste that code directly into the content area of the code editor. You can also write the HTML for your campaign or template directly in the code editor. The code editor has predictive text completion, color-coded syntax highlighting, and detailed error messages.

1. Preview your campaign or template by clicking **Preview**.
   <br>You can toggle between a preview of how your campaign or template will appear on a recipient's desktop and mobile phone by clicking either the desktop or mobile phone icons above the content area. You can also view a plain-text version of your campaign or template by clicking the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.

{% warning %}
Once you create a new campaign or template in the Code Editor, you cannot switch to the Design Editor.
{% endwarning %}

{% anchor h2 %}
Uploading Images
{% endanchor h2 %}

1. Select the **Images** tab, and click **Manage Image Library**. A window opens where you can upload images to your image library. 

1. Select the image you want from your image library. The Image Details tab appears. 

1. Copy the URL in the **Image Source URL** tab by clicking **Copy URL**. 

1. Paste this URL in the image source tag in your campaign or template's HTML. For example: `<img src="your image URL here">`

{% anchor h2 %}
Using Substitution Tags
{% endanchor h2 %}

Substitution tags allow you to easily generate dynamic content for each recipient on your contact list. When you send to a list of recipients you can specify substitution tags specific to each recipient.

**To add a substitution tag to your campaign:**

1. Navigate to the **Tags** tab. 

1. Locate the tag you want to add to your campaign and click the **copy** icon.

1. Paste the tag into the module.

You can add the following substitution tags to your marketing campaign:

 <table class="table" style="table-layout:fixed">
  <tr>
    <th>Substitution Tag</th>
    <th>Description</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>`[%email%]`</td>
    <td>The email address of the recipient</td>
    <td>Personalization</td>
  </tr>
  <tr>
    <td>`[%first_name%]`</td>
    <td>The first name of the recipient</td>
    <td>Personalization</td>
  </tr>
  <tr>
    <td>`[%last_name%]`</td>
    <td>The last name of the recipient</td>
    <td>Personalization</td>
  </tr>
  <tr>
    <td>`[Sender_Name]`</td>
    <td>The name of the sender selected when sending your campaign</td>
    <td>Sender Identity</td>
  </tr>
  <tr>
    <td>`[Sender_City]`</td>
    <td>The city on record for the sender selected when sending your campaign</td>
    <td>Sender Identity</td>
  </tr>
  <tr>
    <td>`[Sender_State]`</td>
    <td>The state on record for the sender selected when sending your campaign</td>
    <td>Sender Identity</td>
  </tr>
  <tr>
    <td>`[Sender_Zip]`</td>
    <td>The zip code on record for the sender selected when sending your campaign</td>
    <td>Sender Identity</td>
  </tr>
  <tr>
    <td>`[Unsubscribe]`</td>
    <td>This tag will be replaced with a link allowing your recipient to be added to the unsubscribe group selected when sending your campaign.</td>
    <td>Unsubscribe</td>
  </tr>
  <tr>
    <td>`[Unsubscribe_Preferences]`</td>
    <td>This tag will be replaced with a link allowing your recipients to opt into or out of the various email unsubscribe groups you offer.</td>
    <td>Unsubscribe</td>
  </tr>
  <tr>
    <td>`[Weblink]`</td>
    <td>This tag will be replaced with a link allowing your recipients to view your campaign content directly within their web browser.</td>
    <td>Weblink</td>
  </tr>
</table>

For contacts with no entry in a custom field, the substitution tag appears blank. To set a default value, use the following pattern:

`[%first_name | Valued Customer%]`

{% anchor h2 %}
Adding Categories
{% endanchor h2 %}

Assigning categories to a campaign allows you to track emails based on your own categorization system. By assigning your campaign to a category, you can track statistics across multiple similar campaigns. Example categories: "Weekly Digest," "Product Announcements."

1. Click the *Settings* panel located on the left-hand side of the window to expand it.

1. Navigate to the *Settings* tab, and click **Campaign Settings** to expand the menu. 

1. Locate the *Categories* field under *Campaign Settings*.

1. Select the *Add Categories* field and then type in the tag to add and hit enter. 

{% info %}
Currently, only 10 categories can be added to each campaign.
{% endinfo %}

{% anchor h2 %}
Previewing Your Campaign
{% endanchor h2 %}

To preview your campaign or template, click the **Preview** button in the upper-left corner.

You can toggle between a mobile and desktop preview mode by clicking either the desktop or mobile phone icons above the content area.

To view a plain text version of your campaign or template, click the **T** icon. When in this preview mode, you can edit the plain text content of your campaign or template by clicking the **Edit Plain Text** button.


When previewing a campaign, you will also see a preview of the From name, the Subject, and the preheader text that you have selected.

{% anchor h2 %}
Settings
{% endanchor h2 %}

**Two Factor Authentication**

Two-Factor Authentication is an extra layer of security that is known as “multi factor authentication” that requires not only a password and username but also something that only that user has on them, i.e. a piece of information only they should know or have immediately at hand such as a physical token, a phone application, or a device.

**Account Details**

Your profile provides SendGrid with the information we need to contact you with alerts and notifications as well as send and track your emails. Each section of your profile can be edited by clicking the “Edit” button to the right of each section. Once you have made your changes, click the “Save” button. This will only save the settings for that section. .”When you change your account password, your SMTP and API access will change as well. Make sure you update your account information on all systems and software!

**Alerts**

You can set up alerts to be sent to a specific email address on a recurring basis, whether for informational purposes or when specific account actions occur.
For most alerts, you can choose to have the alert sent to you as needed, hourly, daily, weekly, or monthly. The information contained in your alert will be for the last period of the alert. For example, if you choose weekly for the stats alert, you will receive the stats for the last week.

**API Keys**

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. They are the preferred alternative to using a username and password because you can revoke an API key at any time without having to change your username and password.There is a limit of 100 API Keys per account.
1. Full Access gives all of the API methods.
2. Restricted Access lets you customize the level of access.
3. Billing Access gives you access to the billing endpoints.

**Billing Settings**

When you create or upgrade to a paid account, you will put a credit card in for automatic payments. This will allow SendGrid to make the recurring package charges for your account without having to notify you each month of the bill.Canceled accounts are not deleted. Accounts are changed to our free plan.

**IP Access Management**

IP Access Management is a security feature that allows you to control who can access your SendGrid account based on their IP address. After you whitelist an IP address, you can only access the SendGrid UI, API, and SMTP relay if you are connecting from a whitelisted IP address. Any other access attempts will be blocked.If you remove every IP address from your whitelist, you will again be able to log in to your account from any IP address.

**Purchase IP Addresses**

You can purchase a dedicated IP address from the IP Addresses Settings page or from your Plan & Billing Details page.
To purchase a dedicated IP:
* Navigate to Settings in the left hand navigation menu, select IP Addresses
* Click ‘Add an IP Address’
* Select the number of IP addresses you would like to purchase.

**Mail**

Mail Settings allow you to tell SendGrid specific things to do to every email that you send to your recipients over SendGrid’s Web API or SMTP Relay.An email SMTP relay service is used every time you send an email to someone outside of your address’ domain. SMTP, or Simple Mail Transfer Protocol, does the heavy lifting of sending the message.

**Inbound Parse**

SendGrid’s Inbound Parse Webhook allows you to receive emails that get automatically broken apart by SendGrid and then sent to a URL of your choosing. SendGrid will grab the content, attachments, and the headers from any email it receives for your specified hostname.The Inbound Parse Webhook requires a hostname, where the emails will be sent, and the URL where SendGrid will POST the data it builds from every incoming email.

**Partners**

Partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality.
Access your email statistics via the New Relic Dashboard. In less than five minutes your stats should be sent to your New Relic Dashboard. We send stats to New Relic every 5 minutes for users with the setting enabled.

**Teammates**

Teammates is an account administration and security tool designed to help manage multiple users on a single SendGrid account. Teammates is built for groups of shared users, where each user has a different role and thus requires access to different SendGrid features.
A marketer, developer, and accountant would each have their own teammate account under one SendGrid parent account. The parent SendGrid account will always have administrator level teammate permissions, and may grant any or all of these permissions to other teammates.

**Tracking**

Enabling Click Tracking causes all the links and URLs in your emails to be overwritten and pointed to either SendGrid’s servers or your whitelabeled link domain so that any time a customer clicks a link, SendGrid can track those clicks. SendGrid can track up to 1000 links per email.If you are using email link whitelabeling, then your open tracking image will be served from your whitelabel domain instead of from SendGrid.net.

**Subusers**

Subusers are SendGrid accounts that belong to a parent account. They have their own permissions and credit limits, which you assign as you create the subusers. Subusers are provided in order to help you segment your email sending and API activity. We suggest our customers create subusers for each of the different types of emails they send. This often means one subuser for transactional emails and one for marketing emails; however some of our customers will break up their sending across multiple subusers in order to segment the statistics for each type or function of email they send.

**Whitelabel**

Whitelabeling is the functionality that shows ISPs that SendGrid has your permission to send emails on your behalf. This permission is given by the act of pointing very specific DNS entries from your domain registrar to SendGrid. Once these DNS entries are entered and propagated, recipient email servers and services will read the headers on the emails you send and check the DNS records to verify the email was initiated at a trusted source.


{% anchor h3 %}
Additional Resources
{% endanchor h3 %}

- [A/B Testing](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/a_b_testing.html)
- [Campaign Statistics](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/campaign_stats.html)
- [Design Editor](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/design_editor.html)
