---
seo:
  title: Security Checklist
  description: Security Checklist
  keywords: password, security, secure, virus, hack, script
title: Security Checklist
weight: 0
layout: page
zendesk_id: 200182938
navigation:
  show: true
---

SendGrid doesn’t compromise when it comes to compromised accounts and neither should you. Every day that you put off security steps, your reputation as a business and a sender is at risk. Take a few minutes, go through this checklist and make sure that your systems are secure.

1)  Is your password robust?  (If your account is compromised, do a virus scan prior to changing your password in order to get rid of any key-logger's.)

- Do you use the same password for multiple sites?

  - vary your passwords from site to site

- Do you use both upper- and lower-case letters?
- Do you use one or more numerical digits?
- Do you use special characters? (e.g. @, #, $ etc.)
- Don’t use easily guessable words or phrases such as:

  - words found in a dictionary or the user's personal information.
  - passwords that match the format of calendar dates, telephone numbers, or other common numbers.
  - your company name or an abbreviation.

2)  Do you avoid having web browsers save your password?  

3)  Do you perform regular virus scans on any computers that are used to send mail through SendGrid or login to your account?  

4)  Are your wireless network connections secure and encrypted?  

5)  Is a firewall enabled on your machine?  

6)  Do you have configuration files or web pages (Facebook, Twitter, Linkdin, etc.) that contain your SendGrid credentials? Make sure they are not indexable via a search engine or visible in any way to outsiders.  

7)  Are any web applications on your web servers vulnerable?  Make sure these are up to date.  (for example old versions of WordPress are vulnerable to exploitation).  Please review: http://codex.wordpress.org/Hardening\_WordPress for hardening your security with WordPress.  

8)  Are there any rogue web scripts/forms on your server?  

9)  If you have a website sending emails through SendGrid, are there checks in place to prevent visitors (or bots) from sending email in large volumes or in any way that is abusive?  If you have an email registration form, [here]({{root_url}}/Classroom/Basics/Security/keeping_your_registration_form_secure.html) are some helpful tips to keep your form secure.

10)  Do you have a mail server which routes outbound mail through SendGrid?  Is it misconfigured as an open relay?

11) You can use services like [stopthehacker.com](http://www.stopthehacker.com/) which can give your website a vulnerability assessment, check for web malware, and offer guidance for better security.
