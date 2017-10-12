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

{% anchor h2 %} 
11 October 2017
{% endanchor %}

{% anchor h3 %}
Custom field update
{% endanchor %}

The limit of custom fields you can create has been increased to 120. This limit can be applied to any type of data contained in a contacts list including numbers, text, or dates. 


{% anchor h2 %}
2 October 2017
{% endanchor %}

{% anchor h3 %}
Marketing Campaigns Contacts
{% endanchor %}

The Contacts page in Marketing Campaigns has been updated to improve the user experience! The UI has been simplified to make adding contacts more streamlined and easy-to-use. For more information, see the [documentation] (https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/contacts.html).

{% anchor h3 %}
Substitution tag update
{% endanchor %}

Substitution tags are no longer case sensitive in the email content. Previously, your substitution tag in your email content had to exactly match the substitution tag. For example, if you have the substitution tag `[%panda%]`, and your email content says `"hello [%PANda%], buy my eucalyptus"`, then the substitution tag for [%panda%] is now applied.

{% anchor h2 %}
30 September 2017
{% endanchor %}

{% anchor h3 %}
Legacy Newsletter
{% endanchor %}

Legacy Newsletter has been sunset and can no longer be used to build or send campaigns. In order to continue sending marketing emails, SendGrid recommends switching to [Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html). See the [documentation](https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/index.html) for more information on why we made the switch.

{% anchor h2 %}
14 September 2017
{% endanchor %}

{% anchor h3 %}
Save your favorite colors
{% endanchor %}

UI ICON - Added the ability to save swatches of commonly used colors when designing email templates or campaigns.

{% anchor h2 %}
5 September 2017
{% endanchor %}

![]({{root_url}}/images/partner_icon.png "partners icon") **Amazon Marketplace**

SendGrid is now available on the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B074CQY6KB)! AWS customers are now able to integrate SendGrids email infrastructure and email marketing tools with their other AWS tools. For more information, see the [blog](https://aws.amazon.com/blogs/apn/inside-sendgrids-expanded-relationship-with-aws/) and the [documentation](https://sendgrid.com/docs/Integrate/Partners/Amazon_Marketplace.html).

{% anchor h2 %}
1 August 2017
{% endanchor %}

{% anchor h3 %}
New editing experience
{% endanchor %}

UI ICON - Delivered [even more flexibility and control](https://sendgrid.com/blog/taking-the-pain-out-of-email-design-and-editing/) when creating email campaigns or templates. Whether using marketing or transactional templates, you can choose between:

A powerful, marketer-friendly code editor with:
- Split-screen editing so you can see your HTML changes in a live preview
- Scroll syncing so you can easily pinpoint the HTML element you wish to edit
- Syntax highlighting, code completion, and error flagging for efficient coding
- 100% protection from unwanted HTML changes to keep your design pixel perfect

Or a flexible design editor that still offers HTML options:
- Smooth drag & drop editing with handy WYSIWYG formatting so you can work quickly
- Access to edit the HTML of individual modules with confidence, or drag in a custom code module
- Advanced options to edit the HTML head to add global styles or tracking
- Option to export the HTML of your entire email, or import custom code

{% anchor h3 %}
Dedicated IP price increase
{% endanchor %}

PRICING ICON - We increased the monthly price for purchasing additional dedicated IPs from $20 to $30. If you already own dedicated IPs, this price change does not affect what you pay each month for the dedicated IPs you already own — that price remains at $20. We’re making the change to the price for newly-purchased dedicated IPs to better reflect our cost to source and maintain those IPs, and the value of those IPs for our customers.

{% anchor h3 %}
Code library release notifications
{% endanchor %}

CODE ICON - We now allow followers of our libraries to subscribe to release notifications. [Subscribe](https://dx.sendgrid.com/newsletter/all) from each of our GitHub Library READMEs. Signing up is as simple as checking a box and entering your info.

{% anchor h3 %}
Increased character limit for text custom fields
{% endanchor %}

UI ICON - You can now include up to 32,000 characters in text custom fields. This is useful particularly for senders who may be passing URLs or custom content via custom fields.

{% anchor h2 %}
7 July 2017
{% endanchor %}

{% anchor h3 %}
Responsive image enhancements
{% endanchor %}

UI ICON - Images are now responsive to the container they’re held within, as opposed to being a percent of their original size.).

{% anchor h3 %}
Additional fonts available for campaigns and templates
{% endanchor %}

UI ICON - Additional standard web fonts are now available, including Arial Black, Bookman Old Style, Courier, Garamond, Impact, Palatino, and Times.

{% anchor h2 %}
2 June 2017
{% endanchor %}

{% anchor h3 %}
Added data to recipient exports
{% endanchor %}

UI ICON - CSV exports of lists and segments now include data on when customers last opened or clicked.

{% anchor h2 %}
5 May 2017
{% endanchor %}

{% anchor h3 %}
Experiments tab and Experiments overview
{% endanchor %}

UI ICON - The Experiments tab in the UI leads to an Experiments overview page where you can opt into active research experiments or suggest additional experiments you would like SendGrid to run. The introduction of these experiments gives you the opportunity to shape the future of SendGrid’s platform with your valuable feedback.

{% anchor h2 %}
12 May 2017
{% endanchor %}

{% anchor h3 %}
Visual reference of A/B test creative
{% endanchor %}

UI ICON - Campaigns that ran with an A/B test now show a preview of both versions from the Campaign detail page.

{% anchor h2 %}
19 April 2017
{% endanchor %}

{% anchor h3 %}
IP self service purchase
{% endanchor %}

UI ICON - If you’re using SendGrid’s Pro and Premier pricing plan, you can now purchase up to 3 dedicated IP addresses per month through the user interface, and assign your purchased IPs to subusers. You also now have an IP Addresses page in the Settings section of your UI, so you can view all of your dedicated IPs, their warmup status, and when they were added.

{% anchor h2 %}
15 March 2017
{% endanchor %}

{% anchor h3 %}
Increased photo limits
{% endanchor %}

UI ICON - You can now store up to 1,500 images for use in templates, up from 1,000 previously.

{% anchor h2 %}
23 February 2017
{% endanchor %}

{% anchor h3 %}
Teammates
{% endanchor %}

UI ICON - Teammates expands our existing permissions for multiple credentialed users, and adds a layer of well-tested UX and UI to make it easy for you to add your colleagues to your account. Teammate-level credentials allow account owners to limit teammates to read-only views, limit their access to only those areas they need to see, or give them access to secure areas to manage specific features, such as API keys.

{% anchor h2 %}
22 February 2017
{% endanchor %}

{% anchor h3 %}
Magento 2 extension
{% endanchor %}

PARTNERS ICON - The SendGrid extension for Magento 2.0 makes it easy to ensure delivery of your most important transactional emails. [SendGrid for Magento 2.0](https://sendgrid.com/docs/Integrate/Partners/magento.html) allows you to choose between the SMTP relay or the Email API to send outgoing emails from your Magento installation.

{% anchor h2 %}
16 February 2017{% endanchor %}

{% anchor h3 %}
Signup security enhancements
{% endanchor %}

UI ICON - We’ve added several new protections that further enhance security at the account sign-up stage, including those that better detect and block would-be spammers.

{% anchor h2 %}
14 February 2017
{% endanchor %}

{% anchor h3 %}
Interactive v3 API documentation{% endanchor %}

CODE ICON - For developers creating and monitoring an integration with the SendGrid API, the new interactive [v3 API documentation](https://sendgrid.com/docs/API_Reference/api_v3.html) is easier to use and expedites end-to-end integration time. You can now call every endpoint in the API directly from the browser, so you can see your data in the requests and responses before you write a single line of code. Then, when you’re ready to start testing code, you can copy/paste the code from the call you just made from the “Try It” page. All of these great features, along with contextual search and clear, as well as color-coordinated formatting allow for easy scanning and quick solution identification.

{% anchor h3 %}
New C# library supporting .NET Core
{% endanchor %}

CODE ICON - Microsoft is making big moves towards .NET Core and we have decided to make sure our C# library is ready when and if you decide to start rewriting your code. Our new library is .NET Standard 1.3 compliant, so that our library works with C# 4.5.2 and up.

{% anchor h2 %}
26 January 2017
{% endanchor %}

{% anchor h3 %}
Improved contact search
{% endanchor %}

UI ICON - You can now use “fuzzy” search to find contacts, rather than having to have an exact name or email address.

{% anchor h3 %}
Billing and invoice usability improvements
{% endanchor %}

UI ICON - To ease the customer process for paying invoices, we’re introducing an unpaid billing invoice alert banner and a retry credit card button in the billing page of the UI.

{% anchor h2 %}
24 January 2017
{% endanchor %}

{% anchor h3 %}
Universal links and partnership with Branch
{% endanchor %}

PARTNERS ICON - You can now maximize customer engagement by streamlining your SendGrid email to your mobile app experience, using Branch’s implementation of SendGrid’s universal links. Universal links (also known as deep links) allow senders to link directly into their mobile apps from email, while maintaining click tracking functionality. We partnered with Branch to ease setup and ongoing support requirements for universal links.

{% anchor h2 %}
5 January 2017
{% endanchor %}

{% anchor h3 %}
Segment on relative dates
{% endanchor %}

UI ICON - You can now create dynamic segments based on relative dates using "is before," is after," or "Is within." For example, to create a segment of all recipients who have opened an email within 30 days, define a segment as Condition: “Last Opened” Criteria: “is within” Number of days: 30”