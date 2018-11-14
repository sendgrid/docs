---
layout: page
weight: 0
title: Getting Started with Parse
group: 
navigation:
  show: true
---

The SendGrid Parse Webhook is a powerful tool with many use cases. Once set up, all incoming email for a domain or sub-domain is directed to your application. What you can do is endless, but it can be a bit tricky to get going if it is your first time.

## Getting Started
Begin by cloning the repository and navigating into its directory.

``` language
$ git clone https://github.com/scottmotte/sendgrid-parse-api-example.git
$ cd sendgrid-parse-api-example
```
Next, set up your credentials.

```$ mv .env.example .env```

Change the contents of .env to your username and password.


```SENDGRID_USERNAME=your_sendgrid_username
SENDGRID_PASSWORD=your_sendgrid_password
```

Run the app.


```$ npm install
$ node app.js
```

## Prepare a local tunnel (Mac)

Using a local tunnel will save you a lot of time because you can test locally. My favorite choice is ngrok. Ngrok is a tool to tunnel our local server to the web. It’s necessary because the email is coming from the web–our personal email outbox on gmail, yahoo mail, or wherever. The alternative of deploying code to a live server is more time consuming.

```
$ wget https://dl.ngrok.com/darwin_amd64/ngrok.zip
$ unzip ngrok.zip -d /usr/local/bin
$ ngrok 3000
```

Click [here](https://ngrok.com/docs) for information on how to install Ngrok on Windows or Linux machines. 
