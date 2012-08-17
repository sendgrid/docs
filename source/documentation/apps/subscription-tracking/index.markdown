---
comments: false
date: 2011-05-25 08:50:11
layout: page
slug: subscription-tracking
title: Subscription Tracking
wordpress_id: 842
following_users:
- brandon
---

[![](http://docs.sendgrid.com/wp-content/uploads/2011/05/docs_apps_subtrack_0212_tcr.jpg)](http://docs.sendgrid.com/wp-content/uploads/2011/05/docs_apps_subtrack_0212_tcr.jpg)Add automatic subscription management links to the bottom of emails. SendGrid will keep track of these unsubscribes and ensure these users don't get future emails from the sender. You can customize the text attached to emails and customize the landing page. The links will look something like the following, though can be configured in whatever fashion suits your needs:  
  


`sendgrid.net/submgmt/[encryptedString]`

If you would like to customize your links, create a CNAME that points to sendgrid.net and fill out the Whitelabel setting (available for Silver accounts and higher) in your account.  
  




## API Settings









App Name
Setting Field
Required
Description





subscriptiontrack


enable


YES


0 to disable, 1 to enable








text/html


YES


String for the HTML e-mail body








text/plain


YES


String for the plain text e-mail body








url


YES


the URL that the user will be redirected to if they click on the subscription management link in the email








landing


YES










replace


No


a tag that can be added to the content that will be replaced by SendGrid with the subscription management link, e.g. [unsubscribe_tag]




