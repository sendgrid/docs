---
layout: page
weight: 0
title: Variations A/B Testing
navigation:
  show: true
---

{% warning %}
Legacy Newsletter is being retired 9/30/17.<br />
Ready to migrate? Have Questions?<br />
Please see our [Migration Toolkit]({{root_url}}/User_Guide/Legacy_Newsletter/Legacy_Newsletter_Migration/index.html).
{% endwarning %}

This module allows you to add new Variations to your drafted Marketing Emails. These Variations can be used in A/B testing (also sometimes called split testing).

---

<page-anchor el="h2">
add
</page-anchor>

Create a new Variation.

{% parameters add %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email in draft mode.' 'The name of the Marketing Email you are adding Variations to.' %}
{% parameter 'variation' 'Yes' 'None' 'The name of the Variation you will be adding.' %}
{% parameter 'subject' 'Yes' 'None' 'The subject that will be used for the Variation being created.' %}
{% parameter 'text' 'Yes' 'None' 'The text portion of the Marketing Email Variation being added.' %}
{% parameter 'html' 'Yes' 'None' 'The html portion of the Marketing Email Variation being added.' %}
{% parameter 'type' 'Yes' 'Value must be either "text" or "html".' 'The Variation type, either plain text, or multipart-alternative text and html.' %}
{% parameter 'identity_name' 'No' 'Must be an existing Marketing Email Identity' 'Identity name that is needed if the Marketing Email name does not already exist. Will be used to create a parent Marketing Email.' %}
{% endparameters %}

{% apiexample add POST https://api.sendgrid.com/api/newsletter/variations/add api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&type=html&variation=variation_name&subject=variation_subject&html=variation_body %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
edit
</page-anchor>
Edit an existing Variation.

{% parameters edit %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email with Variations added to it.' 'The name of the Marketing Email you are editing Variations on.' %}
{% parameter 'variation' 'Yes' 'Must be an existing Variation' 'The name of the Variation you will be editing.' %}
{% parameter 'newvariation' 'No' 'None' 'The new name of the Variation.' %}
{% parameter 'subject' 'No' 'None' 'The new subject of the Variation.' %}
{% parameter 'text' 'No' 'None' 'The new text portion of the Marketing Email Variation.' %}
{% parameter 'html' 'No' 'None' 'The new html portion of the Marketing Email Variation.' %}
{% parameter 'type' 'No' 'text/html' 'The Variation type.' %}
{% endparameters %}

{% apiexample edit POST https://api.sendgrid.com/api/newsletter/variations/edit api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&type=html&variation=existing_variation_name&newvariation=new_variation_name&subject=variation_subject&html=variation_body %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
get
</page-anchor>
Retrieve the contents of an existing Variation.

{% parameters get %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The name of the Marketing Email with existing Variations added to it.' %}
{% parameter 'variation' 'Yes' 'Must be an existing Variation' 'The name of the Variation you would like the contents of.' %}
{% endparameters %}

{% apiexample get POST https://api.sendgrid.com/api/newsletter/variations/get api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&variation=existing_variation_name %}
{% response json %}
{
"name": "existing_variation_name",
"timezone_id": null,
"text": null,
"is_winner": 0,
"nl_type": 2,
"html": null,
"schedule_status": 3,
"type": "html",
"id": 2256144,
"subject": "variation_subject"
}
{% endresponse %}
{% response xml %}
<variation>
<name>existing_variation_name</name>
<timezone_id/>
<text/>
<is_winner>0</is_winner>
<nl_type>2</nl_type>
<schedule_status>3</schedule_status>
<type>html</type>
<id>2256144</id>
<subject>variation_subject</subject>
</variation>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
cancel
</page-anchor>
Cancels a current Variation send that is in progress.

{% parameters cancel %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The name of the Marketing Email you wish to cancel, this cancels added Variations.' %}
{% endparameters %}

{% apiexample cancel POST https://api.sendgrid.com/api/newsletter/variations/cancel api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
delete
</page-anchor>
Delete the contents of an existing Variation.

{% parameters delete %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The name of the Marketing Email with existing Variations added to it.' %}
{% parameter 'variation' 'No' 'Must be an existing Variation' 'The name of the Variation you would like to delete.' %}
{% endparameters %}

{% apiexample delete POST https://api.sendgrid.com/api/newsletter/variations/delete api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&variation=variation_to_delete %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
list
</page-anchor>
Retrieve a list of all Variations attached to a Marketing Email.

{% parameters list %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'The marketing email for which to list variations.' %}
{% parameter 'variation' 'No' 'Must be an existing Variation' 'An optional list of names to check for.' %}
{% endparameters %}

{% apiexample list POST https://api.sendgrid.com/api/newsletter/variations/list api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&variation=variation_to_find %}
{% response json %}
[{"name": "copy of SUZ5PT"},{"name": "5XZyGo"}]
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
pickwinner
</page-anchor>
Select the Variation you would like to send.

{% parameters pickwinner %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'Select the Marketing Email you are picking the winner of.' %}
{% parameter 'variation' 'Yes' 'Must be an existing Variation' 'The winning Variation.' %}
{% endparameters %}

{% apiexample pickwinner POST https://api.sendgrid.com/api/newsletter/variations/pickwinner api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&variation=variation_that_wins %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}

---

<page-anchor el="h2">
schedule
</page-anchor>
Schedule a send time and percentage for your variations.

{% parameters schedule %}
{% parameter 'name' 'Yes' 'Must be an existing Marketing Email' 'Select the Marketing Email you would like to schedule Variation testing on.' %}
{% parameter 'percent' 'Yes' 'Must be a number 0-100' 'Percentage of the total recipients that will be emailed in the test.' %}
{% parameter 'delay' 'No' 'Must be numeric.' 'The number of units specified by <code>delay_type</code> by which to delay the send.' %}
{% parameter 'delay_type' 'No' '"minutes", "hours", or "days"' 'The units used to specify the <code>delay</code>' %}
{% parameter 'date' 'No' 'Date / Time must be provided in ISO 8601 format (YYYY-MM-DDTHH:MM:SS+-HH:MM)' 'Date / Time to schedule marketing email Delivery.' %}
{% parameter 'timezone' 'No' 'Must be an existing Variation' 'An optional timezone of specific date (timezones are in the Olson Database name format).' %}
{% endparameters %}

{% apiexample schedule POST https://api.sendgrid.com/api/newsletter/variations/schedule api_user=your_sendgrid_username&api_key=your_sendgrid_password&name=existing_draft&percent=50 %}
{% response json %}
{
"message": "success"
}
{% endresponse %}
{% response xml %}
<result>
<message>success</message>
</result>

{% endresponse %}
{% endapiexample %}
