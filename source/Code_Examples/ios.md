---
layout: page
weight: 0
title: IOS / Objective-C
navigation:
  show: true
---

This library allows you to quickly and easily send emails through SendGrid using Objective-C.

**Important:** This library requires [AFNetworking](https://github.com/AFNetworking/AFNetworking/wiki/Getting-Started-with-AFNetworking) 2.0 or higher.


```objective-c
sendgrid *msg = [sendgrid user:@"username" andPass:@"password"];   

msg.to = @"foo@bar.com";
msg.subject = @"subject goes here";
msg.from = @"me@bar.com";
msg.text = @"hello world";   
msg.html = @"<h1>hello world!</h1>";
    
[msg sendWithWeb];    
```

## Installation via CocoaPods (Recommended Method)
[CocoaPods](http://cocoapods.org) is a dependency manager for Objective-C, which automates and simplifies the process of using 3rd-party libraries like Sendgrid and its dependencies in your projects. Simply add the lines below to your existing Podfile or make a new 'Podfile' that contain the lines below. 

#### Podfile

```ruby
platform :ios, '7.0'
pod 'sendgrid', '~>  0.1.0'
```

Run the following in the command line
```
pod install
```

Be sure to open up the xcworkspace file now instead of the xcodeproj file. 

## Alternative installation
Install via Source

    1. Clone the github repo (https://github.com/sendgrid/sendgrid-objc).
    2. Copy sendgrid.m and .h files to your project.
    3. Import both sendgrid and AFNetworking in your project

## Usage

To begin using this library, create a new email object with your SendGrid credentials.
```objective-c
sendgrid *msg = [sendgrid user:@"username" andPass:@"password"];
```

Customize the parameters of your email message.
```objective-c
msg.tolist = @[@"foo1@bar.com", @"foo2@bar.com"];
msg.subject = @"subject goes here";
msg.from = @"me@bar.com";
msg.text = @"hello world";   
msg.html = @"<h1>hello world!</h1>";
```
For the full list of available parameters, check out the [Docs](http://sendgrid.com/docs/API_Reference/Web_API/mail.html)

### Adding To addresses

You can add a single address using the to property of the mail object

```objective-c
msg.to = @"foo@bar.com";
```

Or

You can add multiple To addresses by setting the toList property

```objective-c
msg.tolist = @[@"foo1@bar.com", @"foo2@bar.com"];
```
**Note** One or the other must be set.

### Adding an image attachment
You can add an image attachment to your email message. The method accepts a UIImage. 

```objective-c
[msg attachImage:self.photo];
```

**Displaying attached image inline**
```objective-c
msg.inlinePhoto = true;
msg.html = @"<img src =\"cid:image.png\"><h1>hello world</h1>";
```

### Adding custom headers

You can set custom headers in your email by using the addCustomHeader:withKey method. 

**Adding Categories**
```objective-c
NSString *cat = @"billing_notifications";
[msg addCustomHeader:cat withKey:@"category"];
```

**Adding Unique Arguments**
```objective-c
NSDictionary *uarg = @{@"customerAccountNumber":@"55555",
                           @"activationAttempt": @"1"};

[msg addCustomHeader:uarg withKey:@"unique_args"];
```









