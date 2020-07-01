---
layout: page
weight: 0
title: Single Sends 2020 Update
group: sending-mail
navigation:
  show: false
seo:
  title: Single Sends 2020 Update
  description: Instructions for migrating to the updated Single Sends API
  keywords: 
---

<call-out type="warning">

**Action required to ensure successful create, read, and update operations using the Single Sends API**.

The Single Sends API has changed. Please check this page for instructions.

</call-out>

To improve your experience when working with the Single Sends API, Twilio SendGrid has streamlined the API’s request and response formats. You can now pass all the required information to create a Single Send in one request, eliminating the need to first create a template.

These improvements require modifications to your code. To ease this transition, we initially released the updated API while continuing to provide the previous API at a new root path until June 6, 2020. The previous API should not be relied on after June 6, 2020 and will be removed. The information below outlines the changes between the two APIs to help you migrate your code if have not done so already.

## Migrating to the new API

**New API available at**: `https://api.sendgrid.com/v3/marketing/singlesends`

All requests to the `/marketing/singlesends` root path must use the updated request format. Any requests to `/marketing/singlesends` using the previous Single Sends format will result in a 400-level error.

## API request and response bodies

The new Single Sends API request and response bodies have been refined to contain only five top level fields: `name`, `categories`, `send_at`, `send_to`, and `email_config`. Both `send_to` and `email_config` are object types containing additional fields.

The `email_config` field provides the ability to send data that would currently be associated with a template. Rather than first creating a template and then passing a template ID to the Single Sends create endpoint, all template data can be passed in the initial request using the fields in the `email_config` object.

The table below provides a list of all available fields for both the existing API and updated API. Notes are made where fields have been reorganized in the schema. Please see our [API reference](https://sendgrid.api-docs.io/v3.0/single-sends) for full documentation and code samples.

### Single Sends API fields

 <table>
      <tbody>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span style="font-weight: bold">Field: Existing Single Sends API</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span style="font-weight: bold">Field: Updated Single Sends API</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span style="font-weight: bold">Notes</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span style="font-weight: bold">Response or Request Field</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span style="font-weight: bold">Data Type</span></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>name</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>name</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>Both</p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>categories</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>categories</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>array[string]</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>sender_id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>sender_id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>Moved to <code>email_config</code>: <code>sender_id</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>Both</p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>integer</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>status</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>status</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Response</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>custom_unsubscribe_url</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <code>email_config</code>: <code>custom_unsubscribe_url</code>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span
                >Moved to <code>email_config</code>: <code>custom_unsubscribe_url</code></span
              >
            </p>
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Response</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>suppression_group_id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span
                >Moved to <code>email_config</code>: <code>suppression_group_id</code></span
              >
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p ><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>integer</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>filter</code>: <code>list_ids</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>send_to</code>: <code>list_ids</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>Moved to <code>send_to</code>: <code>list_ids</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p class="c0"><code>array[string]</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>filter</code>: <code>send_to_all</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>send_to</code>: <code>all</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Moved to <code>send_to</code>: <code>all</code></span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>boolean</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>send_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>send_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>template_id</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>updated_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>updated_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Response</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>created_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>created_at</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Response</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><code>ip_pool</code></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span><code>email_config</code>: <code>ip_pool</code></span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span>Moved to <code>email_config</code>: <code>ip_pool</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span><code>send_to</code>: <code>segment_ids</code></span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>array[string]</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span><code>email_config</code>: <code>subject</code></span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span><code>email_config</code>: <code>html_content</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span><code>email_config</code>: <code>plain_content</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>string</span></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span><code>email_config</code>: <code>generate_plain_content</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>boolean</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p>
              <span><code>email_config</code>: <code>design_id</code></span>
            </p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Request</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
        <tr>
          <td colspan="1" rowspan="1">
            <p><span>NA</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span><code>email_config</code>: <code>editor</code></span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><span>Both</span></p>
          </td>
          <td colspan="1" rowspan="1">
            <p><code>string</code></p>
          </td>
        </tr>
      </tbody>
    </table>
