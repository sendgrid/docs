---
layout: page
weight: 100
title: Release Notes
seo:
  title: SendGrid Release Notes
  description: The new features and changes to SendGrid
  keywords: release notes
navigation:
  show: true
---
![]({{root_url}}/images/release_notes.png "release notes")

The following new features and changes to the service are available.

<table class="table" style="table-layout:fixed">
  <tr>
    <td align="center"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" width="100" height="100"></td>
    <td align="center"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
    <td align="center"><img src="{{root_url}}/images/partners_icon.png" alt="An update to one of our Partners" width="100" height="100"></td>
    <td align="center"><img src="{{root_url}}/images/pricing_icon.png" alt="An update to a price" width="100" height="100"></td>
  </tr>
    <tr>
    <td align="center">UI Update</td>
    <td align="center">API Update</td>
    <td align="center">Partner Update</td>
    <td align="center">Price Update</td>
  </tr>
</table>

{% anchor h2 %}
11 October 2017
{% endanchor %}

{% anchor h3 %}
Custom field update
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>The limit of custom fields you can create has been increased to 120. This limit can be applied to any type of data contained in a contacts list including numbers, text, or dates.</td>
  </tr>
</table>


{% anchor h2 %}
2 October 2017
{% endanchor %}

{% anchor h3 %}
Marketing Campaigns Contacts
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>The Contacts page in Marketing Campaigns has been updated to improve the user experience! The UI has been simplified to make adding contacts more streamlined and easy-to-use. For more information, see the <a href="https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html">documentation</a>.</td>
  </tr>
</table>

{% anchor h3 %}
Substitution tag update
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Substitution tags are no longer case sensitive in the email content. Previously, the substitution tag in your email content had to exactly match the substitution tag. For example, if you have the substitution tag <code>[%panda%]</code>, and your email content says <code>"hello [%PANda%], buy my bamboo"</code>, the substitution tag for <code>[%panda%]</code> is now applied.</td>
  </tr>
</table>

{% anchor h2 %}
30 September 2017
{% endanchor %}

{% anchor h3 %}
Legacy Newsletter
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Legacy Newsletter has been sunset and can no longer be used to build or send campaigns. In order to continue sending marketing emails, SendGrid recommends switching to <a href="https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html">Marketing Campaigns</a>. See the <a href="https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/index.html">documentation</a> for more information on why we made the switch.</td>
  </tr>
</table>

{% anchor h2 %}
14 September 2017
{% endanchor %}

{% anchor h3 %}
Save your favorite colors
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>You now have the ability to save swatches of commonly used colors when designing email templates or campaigns.</td>
  </tr>
</table>

{% anchor h2 %}
5 September 2017
{% endanchor %}

{% anchor h3 %}
Amazon Marketplace
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/partners_icon.png" alt="An update to one of our Partners"></td>
    <td>SendGrid is now available on the <a href="https://aws.amazon.com/marketplace/pp/B074CQY6KB">AWS Marketplace</a>! AWS customers are now able to integrate SendGrids email infrastructure and email marketing tools with their other AWS tools. For more information, see the <a href="https://aws.amazon.com/blogs/apn/inside-sendgrids-expanded-relationship-with-aws/">blog</a> and the <a href="https://sendgrid.com/docs/Integrate/Partners/Amazon_Marketplace.html">documentation</a>.</td>
  </tr>
</table>

{% anchor h2 %}
1 August 2017
{% endanchor %}

{% anchor h3 %}
New editing experience
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>The editing experience has been updated to offer <a href="https://sendgrid.com/blog/taking-the-pain-out-of-email-design-and-editing/">a better user experience</a> when creating email campaigns or templates. Whether using marketing or transactional templates, you can choose between a marketer-friendly code editor and a flexible design editor that still offers HTML options./td>
  </tr>
</table>

{% anchor h3 %}
Dedicated IP price increase
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/pricing_icon.png" alt="An update to the price"></td>
    <td>We increased the monthly price for purchasing additional dedicated IPs from $20 to $30. If you already own dedicated IPs, this price change does not affect what you pay each month for the dedicated IPs you already own — that price remains at $20. We’re making the change to the price for newly-purchased dedicated IPs to better reflect our cost to source and maintain those IPs, and the value of those IPs for our customers.</td>
  </tr>
</table>

{% anchor h3 %}
Code library release notifications
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API"></td>
    <td>We now allow followers of our libraries to subscribe to release notifications. <a href="https://dx.sendgrid.com/newsletter/all">Subscribe</a> from each of our GitHub Library READMEs. Signing up is as simple as checking a box and entering your info.</td>
  </tr>
</table>

{% anchor h3 %}
Increased character limit for text custom fields
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>You can now include up to 32,000 characters in text custom fields. This is useful particularly for senders who may be passing URLs or custom content via custom fields.</td>
  </tr>
</table>

{% anchor h2 %}
7 July 2017
{% endanchor %}

{% anchor h3 %}
Responsive image enhancements
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Images are now responsive to the container they’re held within, as opposed to being a percent of their original size.</td>
  </tr>
</table>

{% anchor h3 %}
Additional fonts available for campaigns and templates
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Additional standard web fonts are now available, including Arial Black, Bookman Old Style, Courier, Garamond, Impact, Palatino, and Times.</td>
  </tr>
</table>

{% anchor h2 %}
2 June 2017
{% endanchor %}

{% anchor h3 %}
Added data to recipient exports
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>CSV exports of lists and segments now include data on recipient opens and clicks.</td>
  </tr>
</table>

{% anchor h2 %}
5 May 2017
{% endanchor %}

{% anchor h3 %}
Experiments tab and Experiments overview
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>The Experiments tab in the UI leads to an Experiments overview page where you can opt in to active research experiments or suggest additional experiments you would like SendGrid to run. The introduction of these experiments gives you the opportunity to shape the future of SendGrid’s platform with your valuable feedback.</td>
  </tr>
</table>

{% anchor h2 %}
12 May 2017
{% endanchor %}

{% anchor h3 %}
Visual reference of A/B test creative
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Campaigns run with an A/B test now show a preview of both versions from the Campaign detail page.</td>
  </tr>
</table>

{% anchor h2 %}
19 April 2017
{% endanchor %}

{% anchor h3 %}
IP self service purchase
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>If you’re using SendGrid’s Pro and Premier pricing plan, you can now purchase up to 3 dedicated IP addresses per month through the user interface, and assign your purchased IPs to subusers. You also now have an IP Addresses page in the Settings section of your UI, so you can view all of your dedicated IPs, their warmup status, and when they were added.</td>
  </tr>
</table>

{% anchor h2 %}
15 March 2017
{% endanchor %}

{% anchor h3 %}
Increased photo limits
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>You can now store up to 1,500 images for use in templates, up from 1,000 previously.</td>
  </tr>
</table>

{% anchor h2 %}
23 February 2017
{% endanchor %}

{% anchor h3 %}
Teammates
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>Teammates expands our existing permissions for multiple credentialed users, and adds a layer of UI to make it easy for you to add your colleagues to your account. Teammate-level credentials allow account owners to limit teammates to read-only views, limit their access to only those areas they need to see, or give them access to secure areas to manage specific features, such as API keys.</td>
  </tr>
</table>

{% anchor h2 %}
22 February 2017
{% endanchor %}

{% anchor h3 %}
Magento 2 extension
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/partners_icon.png" alt="An update to one of our Partners"></td>
    <td>The SendGrid extension for Magento 2.0 makes it easy to ensure delivery of your most important transactional emails. <a href="https://sendgrid.com/docs/Integrate/Partners/magento.html">SendGrid for Magento 2.0</a> allows you to choose between the SMTP relay or the Email API to send outgoing emails from your Magento installation.</td>
  </tr>
</table>

{% anchor h2 %}
16 February 2017{% endanchor %}

{% anchor h3 %}
Signup security enhancements
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>We’ve added several new protections that further enhance security at the account sign-up stage, including those that better detect and block would-be spammers.</td>
  </tr>
</table>

{% anchor h2 %}
14 February 2017
{% endanchor %}

{% anchor h3 %}
Interactive v3 API documentation
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API"></td>
    <td>For developers creating and monitoring an integration with the SendGrid API, the new interactive <a href="https://sendgrid.com/docs/API_Reference/api_v3.html">v3 API documentation</a> is easier to use and expedites end-to-end integration time. You can now call every endpoint in the API directly from the browser, so you can see your data in the requests and responses before you write a single line of code. Then, when you’re ready to start testing code, you can copy/paste the code from the call you just made from the “Try It” page. All of these features, including contextual search and clear as well as color-coordinated formatting, allow for easy scanning and quick solution identification.</td>
  </tr>
</table>

{% anchor h3 %}
New C# library supporting .NET Core
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API"></td>
    <td>Microsoft is moving towards .NET Core and we have decided to make sure our C# library is ready when and if you decide to start rewriting your code. Our new library is .NET Standard 1.3 compliant, so that our library works with C# 4.5.2 and up.</td>
  </tr>
</table>

{% anchor h2 %}
26 January 2017
{% endanchor %}

{% anchor h3 %}
Improved contact search
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>You can now use approximate search terms to find contacts, rather than having to have an exact name or email address.</td>
  </tr>
</table>

{% anchor h3 %}
Billing and invoice usability improvements
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/pricing_icon.png" alt="An update to the price"></td>
    <td>To ease the customer process for paying invoices, we’re introducing an unpaid billing invoice alert banner and a retry credit card button in the billing page of the UI.</td>
  </tr>
</table>

{% anchor h2 %}
24 January 2017
{% endanchor %}

{% anchor h3 %}
Universal links and partnership with Branch
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/partners_icon.png" alt="An update to one of our Partners"></td>
    <td>You can now maximize customer engagement by streamlining your SendGrid email with your mobile app experience using Branch’s implementation of SendGrid’s universal links. Universal links (also known as deep links) allow senders to link directly into their mobile apps from email, while maintaining click tracking functionality. We partnered with Branch to offer easy setup and ongoing support requirements for universal links.</td>
  </tr>
</table>

{% anchor h2 %}
5 January 2017
{% endanchor %}

{% anchor h3 %}
Segment on relative dates
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>You can now create dynamic segments based on relative dates using `is before`, `is after`, or `is within`. For example, to create a segment of all recipients who have opened an email within 30 days, define a segment as `Condition: Last Opened` `Criteria: is within` `Number of days: 30`</td>
  </tr>
</table>
