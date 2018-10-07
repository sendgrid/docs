---
layout: page
weight: 10
title: Event Webhook PHP Code Example
group: code-examples
navigation:
  show: true
---

## 	Parse Webhook

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to https://sendgrid.com/email.php.

Given this scenario, the following are the parameters you would set at the [Parse API settings page](https://sendgrid.com/developer/reply):

```
Hostname: email.sendgrid.biz
```

```
URL: https://sendgrid.com/email.php
```

 To test this scenario, we sent an email to example@example.com and created the following form at https://sendgrid.com/email.php:

```php
<?php
$to = $_POST["to"];
$from = $_POST["from"];
$body = $_POST["text"];
$subject = $_POST["subject"];
$num_attachments = $_POST["attachments"];

if($num_attachments){
  for($i = 1; $i <= $num_attachments; $i++) {
    $attachment = $_FILES['attachment' + $i];
	  // $attachment will have all the parameters expected in a the PHP $_FILES object
	  // http://www.php.net/manual/en/features.file-upload.post-method.php#example-369
  }
}
?>
```


## 	Event Webhook

To use the Event Webhook, you must first [setup Event Notification]({{root_url}}/for-developers/tracking-events/event/#setup).

In this scenario, we assume you've set the Event Notification URL to go the endpoint `/parse.php` on your server. Given this scenario the following code will allow you to process events:

```php
<?php
$data = file_get_contents("php://input");
$events = json_decode($data, true);

foreach ($events as $event) {
  // Here, you now have each event and can process them how you like
  process_event($event);
}

```

