---
layout: page
weight: 0
group: partners
title: SendGrid and Google AMP for Email
seo:
  title: SendGrid and Google AMP for Email
  description: Use Google AMP to speed up mobile apps and websites. AMP for email enables  interactivity in emails sent to gmail inboxes. 
navigation:
  show: true
---
Google AMP (Accelerated Mobile Pages) is a proprietary Google technology built to speed up mobile apps and websites. AMP for Email is an extension and adaptation of the AMP technology that enables interactivity for Gmail recipients' email messages including carousels, expanding accordions, dynamically updating content, and more. For more information on Google’s [AMP specification for email](https://amp.dev/documentation/guides-and-tutorials/learn/email-spec/amp-email-format/?format=email), [best practices](https://developers.google.com/gmail/ampemail/testing-dynamic-email), and how to [register to use AMP](https://developers.google.com/gmail/ampemail/register) see Google’s AMP documentation. 

<call-out>

SendGrid v3 API supports Google AMP for Email. You cannot send AMP content in SendGrid v2 API. Users can send AMP via SMTP however we strongly suggest sending it through V3. 

</call-out>

## Sending AMP with SendGrid

SendGrid v3 API supports the AMP MIME part as well as the ordering recommended by Google to ensure compatibility across different mail clients. We recommend following [Google’s documentation](https://amp.dev/documentation/guides-and-tutorials/learn/amp-email-format#the-amphtml-email-format) to send AMP messages through SendGrid.

## Tracking AMP with SendGrid
Open and click metrics for AMP will be aggregated with html open and click metrics in the SendGrid UI, but the AMP events are uniquely identified when collected via the [Event Webhook]({{root_url}}/for-developers/tracking-events/event/#engagement-events).

## AMP Open Identifier
Open event tracking for AMP is identified by a JSON field called `sg_content_type`and will be `amp` instead of `html`.

```
{
    "email": "john.smith@sendgrid.com",
    "event": "open",
    "ip": "66.249.84.159",
    "sg_event_id": "zgAjGPn1TGmO62eSqw9VBQ",
    "sg_message_id": "zT-FDCibS4uwaz08cIX8_Q.filter0794p1las1-20361-5CCC528C-16.0",
    "sg_content_type": "amp",
    "timestamp": 1556901948,
    "useragent": "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)"
}
```

## AMP Click Identifier
Click event tracking for AMP is identified by`url_offset.type` is `amp`.

```
{
    "email": "john.smith@sendgrid.com",
    "event": "click",
    "ip": "12.34.56.789",
    "sg_event_id": "fmip8TM8RWqJjT44cL5z-w",
    "sg_message_id": "zT-FDCibS4uwaz08cIX8_Q.filter0794p1las1-20361-5CCC528C-16
    "timestamp": 1556901957,
    "url": "http://google.com/",
    "url_offset": {
        "index": 0,
        "type": "amp"
    },
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
}
```

<call-out>

Google requires all images to use HTTPS, which will require you to enable [SSL tracking]({{root_url}}ui/analytics-and-reporting/click-tracking-ssl/) on your SendGrid account in order to track opens.

</call-out>





