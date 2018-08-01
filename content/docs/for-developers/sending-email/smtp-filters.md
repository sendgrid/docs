---
layout: page
weight: 0
title: SMTP Filters
group: smtp
navigation:
  show: true
---

Following are the settings that can be specified in the filters section of the X-SMTPAPI header. All filters and setting names must be lowercase.

<call-out>


* If you're enabling a Setting, also called a filter, via SMTPAPI, you are required to define all of the parameters for that Setting.
* Setting enabled status will always default to your settings on the website, unless otherwise defined in your X-SMTPAPI header.
* If you enable a disabled setting, our system will not pull your settings for the disabled setting. You will need to define the settings in your X-SMTPAPI header <em>Example:</em> If you have a footer designed but disabled, you can't just enable it via the API; you need to define the footer in the API call itself.
* All filter names and setting names must be lowercase.

</call-out>

For more information on the utility of these settings, please check out the [Settings]({{root_url}}/help-support/account-and-settings/account/) section.

<call-out>

Some Settings are not listed here, because they cannot be defined on a per-message basis. To update these other Settings, please refer to the
[Web API Filter Settings](https://sendgrid.com/docs/Web_API/filter_settings.html) commands.

</call-out>

## Filter: bcc

<p>Sends a BCC copy of the email created in this transaction to the address specified.</p>

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>email</td>
<td><code>email</code></td>
<td>email address destination for the bcc message</td>
</tr>
</tbody>
</table>

```json
{
  "filters" : {
    "bcc" : {
      "settings" : {
        "enable" : 1,
        "email" : "example@example.com"
      }
    }
  }
}
```

## Filter: bypass_list_management

<call-out type="warning">

This setting is very powerful, and can only be used on a per-message basis. Use with extreme caution.

</call-out>

Some emails are too important to do normal list management checks, such as password resets or critical alerts. Enabling this filter will bypass the normal unsubscribe / bounce / spam report checks and queue the email for delivery.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
</tbody>
</table>

```json
{
  "filters" : {
    "bypass_list_management" : {
      "settings" : {
        "enable" : 1
      }
    }
  }
}
```

## Filter: clicktrack

Rewrites links in email text and html bodies to go through our webservers, allowing for tracking when a link is clicked on.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "clicktrack" : {
      "settings" : {
        "enable" : 1
      }
    }
  }
}
```

## Filter: dkim

Allows you to specify the domain to use to sign messages with DKIM
certification. This domain should match the domain in the From address
of your email.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>domain</td>
<td><code>domain</code></td>
<td>The domain you would like your DKIM certification signed with</td>
</tr>
<tr>
<td>use_from</td>
<td><code>0</code> | <code>1</code></td>
<td>If enabled, the domain in the From: header of the email will be used to sign your DKIM</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "dkim" : {
      "settings" : {
        "domain" : "example.com",
        "use_from" : false
      }
    }
  }
}
```

## Filter: footer

Inserts a footer at the bottom of the text and HTML bodies.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>text/html</td>
<td><code>string</code></td>
<td>String containing html body</td>
</tr>
<tr>
<td>text/plain</td>
<td><code>string</code></td>
<td>String containing text body</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "footer" : {
      "settings" : {
        "enable" : 1,
        "text/html" : "<p>Thanks,<br />The SendGrid Team<p>",
        "text/plain" : "Thanks,\n The SendGrid Team"
      }
    }
  }
}
```

## Filter: ganalytics

Re-writes links to integrate with Google Analytics.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>utm_source</td>
<td><code>string</code></td>
<td>Value for the utm_source field</td>
</tr>
<tr>
<td>utm_medium</td>
<td><code>string</code></td>
<td>Value for the utm_medium field</td>
</tr>
<tr>
<td>utm_term</td>
<td><code>string</code></td>
<td>Value for the utm_term field</td>
</tr>
<tr>
<td>utm_content</td>
<td><code>string</code></td>
<td>Value for the utm_content field</td>
</tr>
<tr>
<td>utm_campaign</td>
<td><code>string</code></td>
<td>Value for the utm_campaign field</td>
</tr>
</tbody>
</table>

#### Example X-SMTPAPI Header Value

```json
{
  "filters" : {
    "ganalytics" : {
      "settings" : {
        "enable" : 1,
        "utm_source" : "Transactional Email",
        "utm_medium" : "email",
        "utm_content" : "Reset Your Password",
        "utm_campaign" : "Redesigned Transactional Messaging"
      }
    }
  }
}
```


### Filter: opentrack

If you don't use 'replace' this will insert an <code>&lt;img&gt;</code> tag at the bottom of the html section of an email which will be used to track if an email is opened. If you choose to use 'replace', you can put the tracking pixel wherever you would like in the email and SendGrid will replace it at send time.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>replace</td>
<td>string</td>
<td>A string to be replaced by SendGrid with the tracking image at send time.</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "opentrack" : {
      "settings" : {
        "enable" : 1,
        "replace" : "%opentrack%"
      }
    }
  }
}
```

## Filter: spamcheck

<p>Tests message with <a href="http://spamassassin.apache.org/">SpamAssassin</a> to determine if it is spam, and drop it if it is.</p>

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>maxscore</td>
<td><code>1</code> to <code>10.0</code></td>
<td>Score after which the message will be dropped (default is 5.0, higher scores indicate higher likelihood of spam)</td>
</tr>
<tr>
<td>url</td>
<td><code>url</code></td>
<td>an optional url to POST the email and a copy of the report to. Refer to the <a href="{{root_url}}/help-support/account-and-settings/mail/#-Spam-Checker">Spam Checker documentation</a> for POST details.</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "spamcheck" : {
      "settings" : {
        "enable" : 1,
        "maxscore" : 3.5,
        "url" : "http://example.com/compliance"
      }
    }
  }
}
```

## Filter: subscriptiontrack
Inserts a subscription management link at the bottom of the text and html bodies or insert the link anywhere in the email.

If you wish to append an unsubscription link, use the <code>text/html</code> and <code>text/plain</code> parameters. However, if you wish to have the link replace a tag (such as <code>[unsubscribe]</code>), use the <code>replace</code> parameter.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this App</td>
</tr>
<tr>
<td>text/html</td>
<td><code>string</code></td>
<td>HTML to be appended to the email, with the subscription tracking link. You may control where the link is by using a tag like so: <code><% link text %></code></td>
</tr>
<tr>
<td>text/plain</td>
<td><code>string</code></td>
<td>Text to be appended to the email, with the subscription tracking link. You may control where the link is by using a tag like so: <code><% %></code></td>
</tr>
<tr>
<td>replace</td>
<td><code>string</code></td>
<td>A tag that will be replaced with the unsubscribe URL (e.g. <code>[unsubscribe_url]</code>). If this parameter is included, it will override <code>text/html</code> and <code>text/plain</code> The URL of the link will be placed at the replace tag's location, with no html or other formatting.</td>
</tr>
</tbody>
</table>

<call-out type="warning">

The `landing` argument cannot be used in SMTPAPI. It can only be setup via the UI or WebAPI, as an account-level setting.

</call-out>

### Example X-SMTPAPI Header Value
```json
{
    "filters": {
        "subscriptiontrack": {
            "settings": {
                "text/html": "If you would like to unsubscribe and stop receiving these emails <% click here %>.",
                "text/plain": "If you would like to unsubscribe and stop receiving these emails click here: <% %>.",
                "enable": 1
            }
        }
    }
}
```

## Filter: templates

<call-out>

This setting refers to SendGrid's <a href="https://sendgrid.com/docs/Web_API_v3/Transactional_Templates/index.html">transactional templates</a>. SendGrid supports versioning, and the ability to create multiple transactional templates. Previously, we had a Template App, which is now referred to as the <a href="#template">Legacy Template App</a>.

</call-out>


Uses a [transactional template](https://sendgrid.com/docs/Web_API_v3/Transactional_Templates/index.html) when sending an email.

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>template_id</td>
<td><code>string</code></td>
<td>The ID of the template to use when sending a message, represented by a string.</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters": {
    "templates": {
      "settings": {
        "enable": 1,
        "template_id": "5997fcf6-2b9f-484d-acd5-7e9a99f0dc1f"
      }
    }
  }
}
```

## Filter: template

<call-out type="warning">

This setting refers to our original Email Template app. We now support more fully featured [transactional templates](#templates). You may create multiple transactional templates that allow for versioning, in addition to several other features.

</call-out>


<p>Wraps a template around your email content. Useful for sending out marketing email and other nicely formatted messages.</p>

<table class="table table-striped table-bordered">
<tbody>
<tr>
<th>Parameter Name</th>
<th>Parameter Value</th>
<th>Parameter Description</th>
</tr>
<tr>
<td>enable</td>
<td><code>0</code> | <code>1</code></td>
<td>Disable or enable this Setting</td>
</tr>
<tr>
<td>text/html</td>
<td><code>string</code></td>
<td>String containing html content for the template (must contain a <code>&lt;% body %&gt;</code> tag)</td>
</tr>
</tbody>
</table>

### Example X-SMTPAPI Header Value
```json
{
  "filters" : {
    "template" : {
      "settings" : {
        "enable" : 1,
        "text/html" : "<html><head></head><body bgcolor='pink'><div style='width:200px' bgcolor='#FFF'><% body %></div></body></html>"
      }
    }
  }
}
```
