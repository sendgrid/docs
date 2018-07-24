---
seo:
  title: cURL Examples for Common Use Cases
  description:
  keywords: migration, v2 mail send, v3 mail send, upgrade
title: cURL Examples for Common Use Cases
weight: 0
layout: page
navigation:
  show: true
---

Below are some cURL examples for several basic use cases to get you sending email through SendGrid's v3 Mail Send endpoint right away!

## 	Hello, World!
 	
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}'
```

## 	Sending a Basic Email to Multiple Recipients
 	
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}],"cc": [{"email":"recipient2@example.com"}, {"email": "recipient3@example.com"}, {"email":"recipient4@example.com"}]}], "from": {"email": "sendeexampexample@example.com"},"subject":"Hello, World!", "content": [{"type": "text/plain", "value": "Heya!"}]}'
```

## 	Sending a Basic Email to Multiple Recipients
 	
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}],"cc": [{"email":"recipient2@example.com"}, {"email": "recipient3@example.com"}, {"email":"recipient4@example.com"}]}], "from": {"email": "sendeexampexample@example.com"},"subject":"Hello, World!", "content": [{"type": "text/plain", "value": "Heya!"}]}'
```

## 	Sending a Basic Email Using a Template
 	
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject":"Hello, World!","content": [{"type": "text/plain","value": "Heya!"}], "template_id" : "YOUR_TEMPLATE_ID"}'
```

## 	Sending a Basic Email at a Scheduled Time
 	
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject":"Hello, World!","content": [{"type": "text/plain","value": "Heya!"}], "send_at" : "UNIX_TIMESTAMP_HERE"}'
```

## 	Scheduling and Cancelling an Email
 	
You may schedule an email to be sent up to 72 hours in the future by using the "send_at" parameter. You may cancel this same scheduled email by using the [Cancel Scheduled Sends endpoint]({{root_url}}/API_Reference/Web_API_v3/cancel_schedule_send.html).

**Step 1: Generate a batch ID**
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/batch \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
```

**Step 2: Schedule the email to be sent, using your new batch ID**
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject":"Hello, World!","content": [{"type": "text/plain","value": "Heya!"}], "send_at" : "UNIX_TIMESTAMP_HERE", "batch_id" : "YOUR_BATCH_ID"}'
```

**Step 3: Cancel the scheduled email**
```bash
curl --request POST \
  --url https://api.sendgrid.com/v3/user/scheduled_sends \
  --header 'authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"batch_id":"YOUR_BATCH_ID","status":"cancel"}'
```
