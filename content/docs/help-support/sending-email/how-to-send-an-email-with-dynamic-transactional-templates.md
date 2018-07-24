---
layout: page
weight: 100
title: How to send an email with Dynamic Transactional Templates
navigation:
  show: false
seo:
  title: How to send an email with Dynamic Transactional Templates
  override: true
  description:
---

- [Before you begin](#-Before-you-begin)
- [Design a dynamic transactional template](#-Design-a-dynamic-template)
- [Send a transactional email](#-Send-a-transactional-email)

## 	Before you begin
 	
Before you create and send an email using a dynamic transactional template you need to do the following:

* Create a SendGrid account
* Create an [API Key]({{root_url}}/help-support/account-and-settings/api-keys.html)
* Add an [unsubscribe group]({{root_url}}/help-support/sending-email/group-unsubscribes.html) (optional)

## 	Design a dynamic transactional template
 	
1. Open the [transactional templates](https://sendgrid.com/dynamic_templates) page and click **Create Template**.
1. Add a unique template name and then click **Save**.
1. To begin editing your new template, click **Add Version**.
1. Select an editor and click **Continue**.
1. Design your template. For more information on using Handlebars, see [Using handlebars]({{root_url}}/help-support/sending-email/using-handlebars.html).

For sample templates that that include examples of receipts, password resets, account activations, newsletters, and sale notifications, check out the [dynamic-template section of our email templates github repo](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates).

The cURL calls on this page use the [receipt example template](https://github.com/sendgrid/email-templates/tree/master/dynamic-templates/receipt).

<call-out>

For the full API documentation, see [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0).

</call-out>

## 	Send a transactional email
 	
*To send a dynamic transactional email:*

In order to send a dynamic transactional email using cURL, set your call up to look something like this:

```
curl -X "POST" "https://api.sendgrid.com/v3/mail/send" \
     -H 'Authorization: Bearer <<YOUR_API_KEY>>' \
     -H 'Content-Type: application/json' \
     -d '{
   "from":{
      "email":"example@.sendgrid.net"
   },
   "personalizations":[
      {
         "to":[
            {
               "email":"example@sendgrid.net"
            }
         ],
         "dynamic_template_data":{
            "total":"$ 239.85",
            "items":[
               {
                  "text":"New Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/8dda1131320a6d978b515cc04ed479df259a458d5d45d58b6b381cae0bf9588113e80ef912f69e8c4cc1ef1a0297e8eefdb7b270064cc046b79a44e21b811802.png",
                  "price":"$ 79.95"
               },
               {
                  "text":"Old Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/3629f54390ead663d4eb7c53702e492de63299d7c5f7239efdc693b09b9b28c82c924225dcd8dcb65732d5ca7b7b753c5f17e056405bbd4596e4e63a96ae5018.png",
                  "price":"$ 79.95"
               },
               {
                  "text":"Blue Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/00731ed18eff0ad5da890d876c456c3124a4e44cb48196533e9b95fb2b959b7194c2dc7637b788341d1ff4f88d1dc88e23f7e3704726d313c57f350911dd2bd0.png",
                  "price":"$ 79.95"
               }
            ],
            "receipt":true,
            "name":"Sample Name",
            "address01":"1234 Fake St.",
            "address02":"Apt. 123",
            "city":"Place",
            "state":"CO",
            "zip":"80202"
         },
         "template_id":"[template_id]"
      }
   ]
}'
```

It is important to note two sections of this call when using dynamic templates.

In order to send dynamic content, you need to specify a JSON blob containing the dynamic data your template will use in the `dynamic_template_data` object. The handlebars script you write will refer to the values in your JSON blob by referencing the JSON key, check out [these examples]({{root_url}}/help-support/sending-email/using-handlebars.html#-Handlebarjs-reference). This handlebars templating can be used in the text, html, and subject lines of your template. The total collective size of your dynamic data may not exceed 10,000 bytes per personalization object.

```
         "dynamic_template_data":{
            "total":"$ 239.85",
            "items":[
               {
                  "text":"New Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/8dda1131320a6d978b515cc04ed479df259a458d5d45d58b6b381cae0bf9588113e80ef912f69e8c4cc1ef1a0297e8eefdb7b270064cc046b79a44e21b811802.png",
                  "price":"$ 79.95"
               },
               {
                  "text":"Old Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/3629f54390ead663d4eb7c53702e492de63299d7c5f7239efdc693b09b9b28c82c924225dcd8dcb65732d5ca7b7b753c5f17e056405bbd4596e4e63a96ae5018.png",
                  "price":"$ 79.95"
               },
               {
                  "text":"Blue Line Sneakers",
                  "image":"https://marketing-image-production.s3.amazonaws.com/uploads/00731ed18eff0ad5da890d876c456c3124a4e44cb48196533e9b95fb2b959b7194c2dc7637b788341d1ff4f88d1dc88e23f7e3704726d313c57f350911dd2bd0.png",
                  "price":"$ 79.95"
               }
            ],
            "receipt":true,
            "name":"Sample Name",
            "address01":"1234 Fake St.",
            "address02":"Apt. 123",
            "city":"Place",
            "state":"CO",
            "zip":"80202"
         }
```

In addition to specifying the dynamic template data, you need to specify the template ID. The template ID is 64 characters with one dash (d-uuid). If you forget your template ID and want to access it from the API, use the following curl call to retrieve all of your transactional templates:

```
curl --request GET \
  --url 'https://api.sendgrid.com/v3/templates?generations\%5C=legacy&generations\%5C=dynamic' \
  --header 'Authorization: <<YOUR_API_KEY>>' \
  --header 'Content-Type: application/json'
```

You can also copy your template ID from the app and paste it into your call.

![]({{root_url}}/img/dynamic_template_id.png "Dynamic Template ID")

## 	Additional Resources
 	
- [Mail Send with Dynamic Transactional Templates](https://dynamic-templates.api-docs.io/3.0)
- [Unsubscribe Groups]({{root_url}}/help-support/sending-email/group-unsubscribes.html)
- [Using Handlebars]({{root_url}}/help-support/sending-email/using-handlebars.html)
