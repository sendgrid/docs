---
comments: false
date: 2011-05-31 15:24:24
layout: page
slug: frequently-asked-questions-faq
title: Frequently Asked Questions (FAQ)
wordpress_id: 881
---

_This page contains questions (and their answers) new users typically have about SendGrid._


## What is SendGrid?


SendGrid is the ultimate email solution for companies large and small alike.


## What is your pricing? How does your pricing work?


We offer a number of different pricing schemes related to how much email you send and how you need to send it. Plans are broken down according to email volume, deliverability features, integration options, and reporting capabilities. A full breakdown of our pricing, along with each plans features and functionality, can be found on the [SendGrid Pricing Page](http://sendgrid.com/pricing.html).


## How can I test your service?


The best way to test out SendGrid is to register for a Free Account and start sending emails! A Free Account allows you to send up to 200 emails per day. To signup for a Free Account, visit the [SendGrid Free Account Signup Page](http://sendgrid.com/user/signup).


## How scalable is your infrastructure (receiving and delivering)? Can you provide some statistics?


Our infrastructure is as scalable as you need it to be. We have customers sending everywhere from 5 emails per day to 5,000,000 emails per day.


## How do I get started?


The best way to get started with SendGrid is to visit the [SendGrid Pricing Page](http://sendgrid.com/pricing.html) to find out what plan you need. Once you've signed up, you'll want to refer to the [SendGrid Getting Started Guide](http://docs.sendgrid.com/documentation/get-started/) to get everything setup and properly configured.


## Can I send from multiple FROM addresses or different domains?


Yes, you can send email from different FROM addresses.

Be aware that you will want to turn off Domain Keys if you are sending from domains different from the domain provisioned with SendGrid as the foreign domains will cause Domain Keys to fail. To fix this, you can add a Sender header, however this will cause an 'on behalf of' message to be shown in some mail readers. More information about Domain Keys and SendGrid can be found here. Alternatively you can use the SMTP API to override the domain in the Domain Keys filter. The SMTP API Filter Settings page describes the filters that can be specified in the 'filters' section of the X-SMTPAPI header.


## Help! I can't find my SMTP username and password


Your SMTP username and password is the same username and password you provided when you signed up for SendGrid. We use the same set of credentials for website access and SMTP authentication.


## Help! "On Behalf Of" is being added to my email address


When spoofing a From: address, you often encounter "On Behalf Of" added to the message envelope in Hotmail and Outlook. This is due to the signing domain of Domainkeys not matching the domain in the From: header.

[Read This Forum Post For More Information About Eliminating "On Behalf Of"](http://support.sendgrid.com/entries/98008-how-to-eliminate-the-on-behalf-of-message)


## What is the Whitelabel Wizard and why should I configure it?


Silver plans and higher accounts come with a dedicated IP and whitelabel capability. The dedicated IP helps you maintain your sending reputation independent of any other users on our system and whitelabeling gives you the ability to use a subdomain you choose for click/open tracking. Both of these features together improve your chances of staying off blacklists as you no longer are sharing IPs or domains with other users.

Please visit the [Whitelabel Wizard](http://sendgrid.com/whitelabel/wizard) to complete the setup of your account and dedicated IP addresses.


## How do I cancel my account?


You may cancel your account at any time by navigating to the Account Settings section of your Dashboard, and clicking on "Cancel your account" or by navigating directly to the [SendGrid Account Cancellation Page](https://sendgrid.com/account/cancel).


## About Internet Standards


For standards like SPF and DKIM / DomainKeys, whether they improve deliverability or bypass filters is entirely at the discretion of the validating receivers. It is expected that messages from a sender with a good reputation would be subject to less scrutiny by the receiver's filters. [1] In other words, omitting these standards usually doesn't hurt, but providing them can only help deliverability.

Some other things to consider:



	
  * DKIM is an internet standards track standard and obsoletes DomainKeys

	
  * If you turn off DomainKeys we'll still sign the email with DKIM which is not affected by the on behalf of issue, and is designed for the type of third-party signing we do

	
  * An SPF record is invalid if it requires more than 10 DNS lookups

	
  * An SPF record is invalid if you have more than one SPF record for a given domain. In this case you will want to merge the additional SPF records into one SPF record


[1] [DKIM Frequently Asked Questions](http://www.dkim.org/info/dkim-faq.html#related)


## How can I use SMTPAPI Unique Args to Track Individual Emails?


You can use our SMTPAPI to insert one or more unique identifiers into your emails. This unique identifier is echoed back on the Event API and in our Email Activity feature and can be used to track individual emails going through our system.

The following X-SMTPAPI header is an example of adding a unique argument with a key of "id" and a value of 42:

**X-SMTPAPI: {"unique_args" : {"id" : 42}}**


## Getting Started: Configuring Sendmail


To set up Sendmail for use with SendGrid you need to add or modify the following settings in the Sendmail configuration (replacing <> and <> with your SendGrid username and password):

1. Set the authorization credentials in _/etc/mail/access_:



	
  * **AuthInfo:smtp.sendgrid.net "U:<>" "P:<>" "M:PLAIN"**


2. Define the Smart Host in _/etc/mail/sendmail.mc_:



	
  * **define(`SMART_HOST', `smtp.sendgrid.net')**

	
  * **FEATURE(`access_db')**


3. Update _sendmail.cf_ and _access.db_ files:



	
  * **$ cd /etc/mail**

	
  * **$ m4 sendmail.mc >sendmail.cf**

	
  * **$ makemap hash access **


4. Restart sendmail

	
  * ****$ /etc/init.d/sendmail restart****




## How long does it take to provision a new account?


The account provisioning process can take a varying amount of time, as SendGrid’s provisioning team must review your account information before approving your request. The process can commonly take anywhere from 2-4 hours. To help expedite the process please be sure to provide as detailed and accurate information as you can, and when possible sign up with a contact email under the domain you are registering.


## How do I configure my SMTP servers to use SendGrid?


Just change you’re SMTP server settings to point to SendGrid:



	
  * **server: smtp.sendgrid.net**

	
  * **port: 25, 465, or 587**

	
  * **username: yourSendGrid@username.com**

	
  * **yourSendGridPassword**


_*Note that some servers or hosting providers may block port 25, if so, use 587._


## Does SendGrid manage my email lists?


When sending via SMTP relay, SMTP API, or Web API, Sendgrid does not maintain or manage a recipient list. What SendGrid can manage are Unsubscription lists, Bounce lists, and other similar lists. These lists are email addresses to which you do not wish to send email because it has been established through unsubcriptions or bounce messages that emails to this address cannot or should not be delivered.

It should also be noted that when using the SendGrid Newsletter App you can upload and maintain email lists through the Newsletter interface. Recipient lists can be imported via csv format either from direct upload, or by specifying a remote URL. Once uploaded these lists can be maintained, and used to deliver recipient specific customized emails to addresses on the list.


## Help! My emails are going into spam folders


This issue can be caused by  a number of different reasons. Please read the respective information below depending on what kind of account you have.

**Silver & Higher Users**: First and foremost, make sure your Whitelabeling is setup correctly. You have your own IP and, thus, your own reputation, so it is very important to have Whitelabeling setup correctly. Some Email Service Providers (ESPs) will place emails from senders they've never encountered before in Spam automatically and wait for their users to confirm they are not spam. Ask all your recipients to check their spam folders for messages and, if they find emails in spam folders, to mark them as not spam. You may also want to check the content of your emails using a spam checker. One of our favorite tools is SpamAssassin.

**Bronze & Lower Users**: Some Email Service Providers (ESPs) will place emails from senders they've never encountered before in Spam automatically and wait for their users to confirm they are not spam. Ask all your recipients to check their spam folders for messages and, if they find emails in spam folders, to mark them as not spam. You may also want to check the content of your emails using a spam checker. One of our favorite tools is SpamAssassin.


## Can I send as many emails as I want on my new IP?


SendGrid does not limit the amount of email we will accept for a new customer. However, recipient servers often “throttle” new IP addresses. That means that a recipient mail server may only accept a certain number of emails from a new IP per day or even hour. The amount of email accepted can vary greatly based on recipient domain and other factors.

It is always a good idea to “warm up” a new IP address. This means sending a smaller volume than your original target volume at first and slowly increasing your sending rates to the destination volume. Again “throttling” limits can vary, but a good rule of thumb is to start with 10% of your target volume and increasing to 100% over 20-30 days.
