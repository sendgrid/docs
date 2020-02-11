---
layout: page
weight: 0
title: Enforced TLS
group: sending-email
navigation:
  show: true
---

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate. The Enforced TLS endpoint supports retrieving and updating TLS settings.

<call-out type="warning">

If either `require_tls` or `require_valid_cert` is set to `true`, the recipient must support TLS 1.1 or higher or have a valid certificate. If these conditions are not met, we drop the message and send a block event with “TLS required but not supported” as the description.

</call-out>

## GET

Get the current Enforced TLS settings.

#### Request URL

`GET https://api.sendgrid.com/v3/user/settings/enforced_tls HTTP/1.1`

#### Response

```javascript
HTTP/1.1 200
{
    "require_tls": true,
    "require_valid_cert": false
}
```

## PATCH 

Change the Enforced TLS settings

<table class="table" style="table-layout:fixed">
  <thead>
    <tr>
      <th>
        URI Parameter
      </th>
      <th>
        Required
      </th>
      <th>
        Requirements
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        require_tls
      </td>
      <td>
        False
      </td>
      <td>
        true or false
      </td>
      <td>
        Require recipient TLS support
      </td>
    </tr>
    <tr>
      <td>
        require_valid_cert
      </td>
      <td>
        False
      </td>
      <td>
        true or false
      </td>
      <td>
        Require certificates to be valid
      </td>
    </tr>
  </thead>
</table>

#### Request URL

`PATCH https://api.sendgrid.com/v3/user/settings/enforced_tls HTTP/1.1`

#### Request Body

```javascript
{
  "require_tls": true
}
```

#### Response

```javascript
HTTP/1.1 200
{
    "require_tls": true,
    "require_valid_cert": false
}
```
