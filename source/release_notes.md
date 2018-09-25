---
layout: page
weight: 100
title: Release Notes
showTitle: false
seo:
  title: SendGrid Release Notes
  description: The new features and changes to SendGrid
  keywords: release notes
navigation:
  show: false
---
![]({{root_url}}/images/release_notes.png "release notes")

If you are looking for SendGrids opererational status, see our [Status Page](http://status.sendgrid.com/).

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
8 August 2018
{% endanchor %}

{% anchor h3 %}
Unsubscribe Group Workflow
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We’ve made managing your Unsubscribe Groups more intuitive and beautiful than ever. Create and edit Unsubscribe Groups with confidence, knowing exactly what your recipients will see, thanks to a side-by-side preview of both your Unsubscribe Preferences and confirmation pages. To learn more, take a look at our <a target="_blank" href="{{root_url}}/User_Guide/Marketing_Campaigns/create-and-manage-unsubscribe-groups.html">documentation</a>.</td>
  </tr>
</table>

{% anchor h2 %}
23 July 2018
{% endanchor %}

{% anchor h3 %}
Dynamic content for transactional templates
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
    <td>We’ve added native support for a subset of Handlebars syntax in transactional templates sent using V3 of our Mail Send API. This new functionality allows you to iterate over lists, take advantage of conditionals, and use JSON test data to verify substitutions in the UI. For more information, check out our <a href="{{root_url}}/User_Guide/Transactional_Templates/how_to_send_an_email_with_transactional_templates.html" target="_blank">Getting started with Handlebars documentation</a>, and our in-depth look at the <a href="https://sendgrid.com/docs/User_Guide/Transactional_Templates/Using_handlebars.html" target="_blank">Handlebars functionality</a> that we support.</td>
  </tr>
</table>

{% anchor h3 %}
Known issue in the V2 API `to` parameter
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
  <td>If you use the API <code>to</code> parameter to specify a single recipient, that recipient is visible in the <code>For</code> field of the received header - so if you specify a single address, it should be an address that you are comfortable with your customer seeing. For example, use a generic email address in the <code>to</code> field that your customer is already going to see, like your from address. To completely omit the email showing up in the <code>from</code> header:.</td>
  </tr>
</table>
- specify multiple addresses in the `to` field as an array, for example, `to[]=a@mail.com&to[]=b@mail.com`
- Use the V3 mail send endpoint

{% anchor h2 %}
6 June 2018
{% endanchor %}

{% anchor h3 %}
TLS security 
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" ></td>
    <td>SendGrid now uses Transport Layer Security (TLS) protocol v1.1 to send encrypted mail. If you have the Enforce TLS feature activated on one of your SendGrid accounts, messages sent to inbox providers that can only accept TLS v1.0 trigger a “TLS required but not supported” drop event. Based on our testing, most inbox providers support TLS versions v1.1 and above.</td>
  </tr>
</table>

If you have the Enforce TLS feature activated, but you do not need to send all of your email encrypted, you can deactivate enforced TLS with the API. By default, SendGrid sends all email with opportunistic TLS, which encrypts email whenever possible, but switches to unencrypted transmission if necessary.

{% anchor h2 %}
15 May 2018
{% endanchor %}

{% anchor h3 %}
Send To and Export All Contacts
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We've updated Marketing Campaigns to allow you to send to and export all contacts within your database. Your 'All Contacts' database now operates like other lists that you create. To send to all contacts, select "All Contacts" from the recipients dropdown when editing a campaign. To export all contacts, select "Export" from the action menu on the href="https://sendgrid.com/marketing_campaigns/ui/contacts" target="_blank">Contacts page</a> or by clicking the "Export CSV" button, now located in the top-right when viewing <a href="https://sendgrid.com/marketing_campaigns/ui/all_contacts" target="_blank">All Contacts</a>.</td>
  </tr>
</table>

{% anchor h2 %}
1 May 2018
{% endanchor %}

{% anchor h3 %}
Sales tax for customers in certain US jurisdictions
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/pricing_icon.png" alt="An update to a price"></td>
    <td>We’re beginning to charge sales tax for use of certain SendGrid products by non-tax exempt customers based in WA, NY, TX, Denver, Boulder or Chicago. This change is required to comply with applicable tax laws. For more information about our new sales tax and how to delcare your organization tax exempt, see <a href="https://sendgrid.com/docs/User_Guide/Settings/taxes_and_tax_exempt.html" target="_blank">Sales Taxes and Tax-Exempt Status</a>.</td>
  </tr>
</table>

{% anchor h2 %}
17 April 2018
{% endanchor %}

{% anchor h3 %}
Whitelabel is becoming Sender Authentication!
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>To clarify authentication at SendGrid, we are updating the names of Whitelabel! A whitelabel is now generally called sender authentication. A domain whitelabel is now called domain authentication. A link whitelabel is now called link branding. An IP Whitelabel is now called reverse DNS.</td>
  </tr>
</table>

{% anchor h3 %}
Improved Sender Authentication Process (formerly "Whitelabel")
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>SendGrid’s whitelabel has become sender authentication, which simplifies the process for senders to demonstrate domain ownership through multiple authentication methods to recipient mailbox providers in order to improve their email delivery. This launch includes improvements to the set up flow and a more accurate name for the functionality. All pending and verified whitelabels can be found under sender authentication.</td>
  </tr>
</table>

For more information on the new process for sender authentication: 
- Access [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)
- Read the [blog post](https://sendgrid.com/blog/new-sender-authentication/) about Sender Authentication.
- Check out our how to docs on [How to set up domain authentication]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html) and [How to set up link branding]({{root_url}}/User_Guide/Settings/Sender_authentication/How_to_set_up_link_branding.html)


{% anchor h2 %}
11 April 2018
{% endanchor %}

{% anchor h3 %}
Magento M1 and M2 Extension Update
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/partners_icon.png" alt="An update to Partners" ></td>
    <td>We have upgraded our Magento Extension for M1 and M2 Marketplaces to V1.0.3. SendGrid’s extension in M1 and M2 is compatible with Magento Community 2.0, 2.1, 2.2. </td>
  </tr>
</table>

{% anchor h2 %}
10 April 2018
{% endanchor %}

{% anchor h3 %}
Updated Alert Behavior
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>In order to provide a better user experience, we've updated the green alert banners you see at the top of the app. Green banners that notify users of successful actions now automatically dismiss after a few seconds, no longer stacking up within the field of view.</td>
  </tr>
</table>

{% anchor h2 %}
9 April 2018
{% endanchor %}

{% anchor h3 %}
Truncating fields that go over max field character limits
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
  <td>This change applies to contacts added by uploading a CSV in the UI or when using the <code>POST /contactdb/lists/{list_id}/recipients/{recipient_id}</code> Add a Single Recipient to a List method. When adding or updating the <code>first_name</code> and <code>last_name</code> fields, SendGrid automatically truncates any field that exceeds the maximum character limit to ensure that the field is valid. Non-unicode characters are still not valid.</td>
  </tr>
</table>

{% anchor h2 %}
29 March 2018
{% endanchor %}

{% anchor h3 %}
Email Activity Feed
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
    <td>The Email Activity Feed has been updated to include enhancements to email activity feed details, filtering, search options, and CSV export capability to ease the process of troubleshooting email delivery issues. In addition to the new enhancements, customers have the option to purchase 30 days of additional email activity history which includes API endpoint access.</td> 
  </tr>
</table>

{% info %}
High-volume (100M+) customers do not have the option to access this feature at this time.
{% endinfo %}

 * Access the Email Activity Feed [here](https://app.sendgrid.com/email_activity)
 * For more information about the UI updates, see the [documentation](https://sendgrid.com/docs/User_Guide/email_activity_feed.html)
 * For more information about the API updates, see the [documentation](https://sendgrid.api-docs.io/v3.0/email-activity/filter-all-messages)
 
{% anchor h2 %}
16 March 2018
{% endanchor %}

{% anchor h3 %}
New Design Templates for Marketing Campaigns
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We've added two new templates to the SendGrid Marketing template library! These templates, named "Modern" and "Coffee", offer fully-responsive and clean designs, giving you the framework you need to build beautifully engaging marketing campaigns. The new templates can be accessed by clicking **Templates** in the navigation, and selecting the **Marketing** option.</td>
  </tr>
</table>

{% anchor h2 %}
14 March 2018
{% endanchor %}

{% anchor h3 %}
Fixed a segmentation date issue
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>There was a bug in the UI that affected the way that dates displayed for events when creating a segment. Specifically, the UI would show "01/01/70" as dates for events, when there was no data present. This has been resolved and now aligns with the rest of the UI, displaying "-" when applicable.</td>
  </tr>
</table>

{% anchor h2 %}
08 March 2018
{% endanchor %}

{% anchor h3 %}
Unsubscribe Tag Support for Transactional Templates
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>The Unsubscribe module now uses asm tags in order to work with both Marketing Campaigns and Transactional email. To add unsubscribe links to your template, use the `<%asm_group_unsubscribe_raw_url%>`,  `<%asm_global_unsubscribe_raw_url%>`, or `<%asm_preferences_raw_url%>` tags.</td>
  </tr>
</table>

{% anchor h2 %}
06 March 2018
{% endanchor %}

{% anchor h3 %}
Code Editor Color Scheme
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>The color scheme (theme) of the code editor within Marketing Campaigns has been updated to be more visually clean and consistent. The new look helps code appear less cluttered, while aligning more closely with the SendGrid brand.</td>
  </tr>
</table>

{% anchor h2 %}
01 March 2018
{% endanchor %}

{% anchor h3 %}
Email Activity Feed - Beta
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ><img src="{{root_url}}/images/code_icon.png" alt="An update to the API" width="100" height="100"></td>
    <td>As of 01 March 2018, we are beginning to roll out early beta access to our new Email Activity feature. This release includes enhancements to email activity feed details, filtering, search options, and CSV export capability to ease the process of troubleshooting email delivery issues.</td> 
  </tr>
</table>

{% info %}
This open beta will not be available for all customers right away. High-volume (100M+) customers will not have the option to use this new feature.
{% endinfo %}

 * Access the Email Activity Feed [here](https://app.sendgrid.com/email_activity)
 * For more information about the UI updates, see the [documentation](https://sendgrid.com/docs/User_Guide/email_activity_beta.html)
 * For more information about the API updates, see the [documentation](https://sendgrid.api-docs.io/v3.0/email-activity/filter-all-messages)
 
 {% anchor h3 %}
Font Update
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We've updated the font used throughout our user interface (UI) to align with the SendGrid brand.</td> 
  </tr>
</table>

{% anchor h2 %}
27 February 2018
{% endanchor %}

{% anchor h3 %}
Dates & Times Displayed on Campaigns Index
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>The Campaigns index page in Marketing Campaigns has been updated so that dates and times for important campaign events (like last edited or sent) are shown natively, below the name of each campaign.</td>
  </tr>
</table>

{% anchor h2 %}
16 February 2018
{% endanchor %}

{% anchor h3 %}
CSV Upload Notification Email Address
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We've made it easier for you to receive CSV upload notifications by adding an additional link to the CSV processing step. This link allows you to add an email address to your notifications directly from the contacts page and save it for future use. </td>
  </tr>
</table>

{% anchor h2 %}
13 February 2018
{% endanchor %}

{% anchor h3 %}
Transactional Templates Search & Filtering
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI" ></td>
    <td>We've updated the Transactional Templates index page, allowing for dynamic search and filtering functionality by name, template ID, and template version ID. In addition to this improvement, we've updated what is seen when no templates are present –– more clearly conveying the need for a template version and offering a button to create one.</td>
  </tr>
</table>

{% anchor h2 %}
04 January 2018
{% endanchor %}

{% anchor h3 %}
Table & Column Rendering in Outlook
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>We've resolved a bug affecting the way that tables/columns were rendering in some versions of Outlook.</td>
  </tr>
</table>

{% anchor h3 %}
Easier Segmentation Through Search
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>We've added the ability to search for custom fields within the drop-down, when creating a segment. Formerly, you were only able to scroll and select.</td>
  </tr>
</table>

{% anchor h2 %}
20 December 2017
{% endanchor %}

{% anchor h3 %}
Mailbox Provider Statistics
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>The mailbox provider statistics page has been updated to show more intutitive delivery percentages by each mailbox provider -for example clicks of delivered (by day by provider), instead of clicks of all clicks (by day by all providers).</td>
  </tr>
</table>

{% anchor h2 %}
15 December 2017
{% endanchor %}

{% anchor h3 %}
Drag & Drop Unsubscribe Module
{% endanchor %}

<table class="table" style="width: 100%;">
  <tr>
    <td style="width:75px; height:75px"><img src="{{root_url}}/images/ui_icon.png" alt="An update to the UI"></td>
    <td>An unsubscribe drag & drop module has been added to the Marketing Campaigns Design Editor to make adding unsubscribe links to your campaigns easier. For more information, see the <a href="https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/design_editor.html">documentation</a>.</td>
  </tr>
</table>

{% anchor h2 %}
1 November 2017
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
    <td>Legacy Newsletter has been sunset and can no longer be used to build or send campaigns. To continue sending marketing emails, SendGrid recommends switching to <a href="https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html">Marketing Campaigns</a>. See the <a href="https://sendgrid.com/docs/User_Guide/Legacy_Newsletter/index.html">documentation</a> for more information on why we made the switch.</td>
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
    <td>You now can save swatches of commonly used colors when designing email templates or campaigns.</td>
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
    <td>The editing experience has been updated to offer <a href="https://sendgrid.com/blog/taking-the-pain-out-of-email-design-and-editing/">a better user experience</a> when creating email campaigns or templates. Whether using marketing or transactional templates, you can choose between a marketer-friendly code editor and a flexible design editor that still offers HTML options.</td>
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
    <td>The Experiments tab in the UI leads to an Experiments overview page where you can opt into active research experiments or suggest additional experiments you would like SendGrid to run. The introduction of these experiments gives you the opportunity to shape the future of SendGrid’s platform with your valuable feedback.</td>
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
IP self-service purchase
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
    <td>Teammates expands our existing permissions for multiple credentialed users and adds a layer of UI to make it easy for you to add your colleagues to your account. Teammate-level credentials allow account owners to limit teammates to read-only views, limit their access to only those areas they need to see or give them access to secure areas to manage specific features, such as API keys.</td>
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
    <td>Microsoft is moving towards .NET Core, and we have decided to make sure our C# library is ready when and if you decide to start rewriting your code. Our new library is .NET Standard 1.3 compliant so that our library works with C# 4.5.2 and up.</td>
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
    <td>You can now maximize customer engagement by streamlining your SendGrid email with your mobile app experience using Branch’s implementation of SendGrid’s universal links. Universal links (also known as deep links) allow senders to link directly into their mobile apps from email while maintaining click tracking functionality. We partnered with Branch to offer easy setup and ongoing support requirements for universal links.</td>
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
    <td>You can now create dynamic segments based on relative dates using <code>is before</code>, <code>is after</code>, or <code>is within</code>. For example, to create a segment of all recipients who have opened an email within 30 days, define a segment as <code>Condition: Last Opened</code> <code>Criteria: is within</code> <code>Number of days: 30</code>.</td>
  </tr>
</table>
