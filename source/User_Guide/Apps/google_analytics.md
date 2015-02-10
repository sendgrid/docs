---
layout: page
weight: 0
title: Google Analytics
navigation:
  show: true
---

This app appends links to integrate with Google Analytics.

![Google Analytics App Image]({{root_url}}/images/google_analytics.png "Google Analytics")

For more information about using this app, please refer to [Google's URL Builder](https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCampaigns) and their [Blog post on Campaign Tracking](https://sendgrid.com/blog/how-to-track-your-emails-using-google-analytics/).

We default the settings to Google's recommendations. Anything you enter into those fields in the App Settings or via API will take precedence.

{% anchor h2 %}
Settings 
{% endanchor %}

<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Description</th>
         <th>Default Value</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Campaign Source</td>
         <td>No</td>
         <td>Name of the referrer source. (e.g. Google, SomeDomain.com, Marketing EmailA)</td>
         <td>sendgrid.com</td>
      </tr>
      <tr>
         <td>Campaign Medium</td>
         <td>No</td>
         <td>Name of the marketing medium. (e.g. Email)</td>
         <td>email</td>
      </tr>
      <tr>
         <td>Campaign Term</td>
         <td>No</td>
         <td>Identify paid keywords..</td>
         <td/>
      </tr>
      <tr>
         <td>Campaign Content</td>
         <td>No</td>
         <td>Use to differentiate ads.</td>
         <td/>
      </tr>
      <tr>
         <td>Campaign Name</td>
         <td>No</td>
         <td>Name of the campaign.</td>
         <td>website</td>
      </tr>
   </tbody>
</table>

{% anchor h2 %}
Example 
{% endanchor %}
{% codeblock %} https://sendgrid.com/?utm_source=sendgrid&utm_medium=email&utm_term=variationC&utm_content=newsletter4&utm_campaign=flagshipproduct {% endcodeblock %}

Settings may be changed through:

-   [SMTP API]({{root_url}}/API_Reference/SMTP_API/apps.html#ganalytics) (on a per message basis)
-   [Web API]({{root_url}}/API_Reference/Web_API/filter_settings.html#-Google-Analytics) (on an account wide basis)
-   [Web Interface](https://sendgrid.com/app) (on an account wide basis)
