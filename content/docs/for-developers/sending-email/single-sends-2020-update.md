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

The Single Sends API has changed. Please check this page for updates and instructions.

</call-out>

To improve your experience when working with the Single Sends API, Twilio SendGrid has streamlined the API’s request and response formats. You will be able to pass all the required information to create a Single Send in one request, eliminating the need to first create a template.

However, these improvements will require modifications to your current code. We’re aware that unplanned work for our customers may be less than ideal. To ease this transition we are released the updated API while continuing to provide the existing API at a new root path for a limited time.

This strategy provides you with two options.

1. **[First Option](#option-1)**: Make necessary integration changes now.
2. **[Second Option](#option-2)**: Direct API calls to a new temporary path detailed below, allowing time for integration changes.

## Option 1

### Beginning May 6, 2020

#### Customer action:

Make the necessary API integration changes immediately.

#### Updated API available at:

`https://api.sendgrid.com/v3/marketing/singlesends`

All requests to the `/marketing/singlesends` root path must use the updated request format beginning May 6, 2020. Any requests to `/marketing/singlesends` using the existing Single Sends format will result in a 400-level error.

This first option may not be possible for your development schedule. If you require more time to make this migration, the existing Single Sends API functionality will continue to be available at the `marketing/campaigns` root path until June, 6 2020. To take advantage of this temporary new path, see the details in Option 2 below.

## Option 2

### Before May 6, 2020

#### Customer action:

Move all Single Sends API requests from the `/marketing/singlesends` root path to the `/marketing/campaigns` root path.

#### Existing API available at:

`https://api.sendgrid.com/v3/marketing/campaigns`

The existing Single Sends API is currently available at the root path `marketing/campaigns`. You can optionally direct all requests using the existing API format to this new root path on or before May 6, 2020.

### May 6, 2020 – June 6, 2020

#### Customer action:

Update code to use the new Single Sends request and response body format. Requests in the new format should be made to the `/marketing/singlesends` root path.

#### Updated API available at:

`https://api.sendgrid.com/v3/marketing/singlesends`

Beginning May 6, 2020 the updated API will be available at the root path `/marketing/singlesends`. At that time, you can begin work to migrate to the new API. If you have not done so already, you can point existing API integrations to the `/marketing/campaigns` root path through June 6, 2020 while you complete the work.

The existing Single Sends API functionality will be fully removed on June 6, 2020. This means you must fully migrate your API integrations to the updated API before this date. Availability of the existing API at `/marketing/campaigns` is meant to provide you with a month to fully migrate your code to the New Single Sends API only and should not be relied on after.

## API request and response bodies

The new Single Sends API request and response bodies have been refined to contain only five top level fields: `name`, `categories`, `send_at`, `send_to`, and `email_config`. Both `send_to` and `email_config` are object types containing additional fields.

The `email_config` field provides the ability to send data that would currently be associated with a template. Rather than first creating a template and then passing a template ID to the Single Sends create endpoint, all template data can be passed in the initial request using the fields in the `email_config` object.

The table below provides a list of all available fields for both the existing API and updated API. Notes are made where fields have been reorganized in the schema. A full API reference will be made available on May 6, 2020.

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
