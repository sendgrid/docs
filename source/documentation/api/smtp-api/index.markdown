---
comments: false
date: 2011-04-12 13:15:48
layout: page
slug: smtp-api
title: SMTP API
wordpress_id: 451
---

> **NOTE >> **If you're enabling an App, also called a filter, via SMTP-API, [you are required to define all the parameters for the App](http://docs.sendgrid.com/documentation/api/smtp-api/filter-settings/). If you have the App disabled on the web interface, our system will not pull the settings for the disabled app when you dynamically enable it. For instance, if you have a template designed but disabled, you can't just enable it via the API; you need to define the template in the API call itself.



SendGrid's **SMTP API** allows developers to deliver custom handling instructions for e-mail. This is accomplished through a header, X-SMTPAPI, that is inserted into the message. The header is a JSON encoded list of instructions and options for that email. An example header looks like this:  
  


`X-SMTPAPI: {"category" : "newuser"}`

In this case, the header is telling the processing routine to assign this email the [category](/documentation/delivery-metrics/categories/) of "newuser".

For a complete description of the X-SMTPAPI JSON header and what each value does, please see the [Developer's Guide](/documentation/api/smtp-api/developers-guide/).

SendGrid provides libraries to build this header in the following languages:



	
  * [Perl](/documentation/api/smtp-api/perl-example/)

	
  * [PHP](/documentation/api/smtp-api/php-example/)

	
  * [Python](/documentation/api/smtp-api/python-example/)

	
  * [Ruby](/documentation/api/smtp-api/ruby-example/)




> **TIP >> **If your language is not listed, try the [Developer's Guide](/documentation/api/smtp-api/developers-guide/).



Each of the classes provided support the following functions:




	
  * **addTo(to)** - Provide either a single recipient or a list of recipients. Using this function, it is possible to send one e-mail from your system that will be delivered to many addresses.

	
  * **AddSubVal(var,val)** - Specify substitution variables for multi recipient e-mails. This would allow you to, for example, substitute the string with a recipient's name. 'val' can be either a scalar or an array. It is the user's responsibility to ensure that there are an equal number of substitution values as there are recipients

	
  * **setUniqueArgs(val)** - Specify any unique argument values

	
  * **setCategory(cat)** - Sets a category for an e-mail to be logged as. You may use any category name you like. You are allowed to set up to 10 categories under this field as a standard array.

	
  * **addFilterSetting(filter,setting,val)** - Adds/changes a setting for a filter. Settings specified in the header will override configured settings.

	
  * **asJSON()** - Returns the JSON version of the requested data.

	
  * **as_string** - Returns the full header which can be inserted into an e-mail.




> **NOTE >> **The reference to 'filter' in the addFilterSetting class is an internal name for our Apps.





> **WARNING >> **If you use the multiple recipient functionality of the API, you must not send to multiple recipients with the SMTP protocol as well. Doing so can cause duplicates of the message to be sent.






> **WARNING >> **Ensure that the header is limited to a maximum total line length of 1,000 characters. Failure to do this can cause intermediate MTA's to split the header for you on non-space boundaries, which will cause spaces to be inserted in the final resulting e-mail. In addition, if your e-mail is going through another MTA before reaching SendGrid, it is likely to have an even lower setting for maximum header length and may truncate the header.




When using the API, if our system encounters a parsing error, the message will be bounced to the address specified in the MAIL FROM portion of the SMTP session. The MAIL FROM address is re-written when we send e-mail out for final delivery, so it is safe to set this to an address that can receive the bounces so that you will be alerted on errors.

While there is no hard limit to the number of addresses that can be sent to in a multiple recipient e-mail, it is best to split up large jobs at around 1,000 recipients, as this will better allow for the processing load to be distributed.

For substitution tags, it is best to avoid characters that have special meaning in html, such as <,>, and &. These might end up encoded and will not be properly substituted.


### Related Articles:





	
  * [Categories](/documentation/delivery-metrics/categories/)

	
  * [Perl Example](/documentation/api/smtp-api/perl-example/)

	
  * [PHP Example](/documentation/api/smtp-api/php-example/)

	
  * [Python Example](/documentation/api/smtp-api/python-example/)

	
  * [Ruby Example](/documentation/api/smtp-api/ruby-example/)

	
  * [Developers Guide](/documentation/api/smtp-api/developers-guide/)


