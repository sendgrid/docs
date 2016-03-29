---
seo:
  title: Substitution and Section Tags
  description: Substitution and Section Tags
  keywords: 
title: Substitution and Section Tags
weight: 0
layout: page
zendesk_id: 204382358
navigation:
  show: true
---

 

Example Name substitution:

 

Simple Substitution:

> {"sub": {
> 
> "-name-": ["John", "Jane"]}

 

Double Substitution:

> {"sub": {
> 
> "-first\_name-": ["John", "Jane"],
> 
> "-last\_name-": ["Smith", "Williams"]}

 

Simple Section and Substitution:

 

> {"sub": {
> 
> "-name-": [ "John", "Jane" ],
> 
> "-warm\_welcome-": ["-greeting-"] },
> 
> "section": {
> 
> "-greeting-": "Hello -name-," }

 

Double Substitution with Section:

 

> {"sub": {
> 
> "-first\_name-": ["John", "Jane"],
> 
> "-last\_name-": ["Smith", "Williams"],
> 
> "-warm\_welcome-": ["-greeting-"] },
> 
> "section": {
> 
> "-greeting-": "Hello -first\_name- -last\_name-," }

 

Complex Section and Substitution (01):

 

> {"sub": {
> 
> "-first\_name-": ["John", "Jane"],
> 
> "-last\_name-": ["Smith", "Williams"],
> 
> "-warm\_welcome-": ["-greeting01- or -greeting02- or -greeting03-"] },
> 
> "section": {
> 
> "-greeting01-": "Welcome -first\_name- -last\_name-,",
> 
> "-greeting02-": "Hello -first\_name- -last\_name-,",
> 
> "-greeting03-": "Dear -first\_name- -last\_name-," }

 

> {"to":
> 
> [ "sample01@domain.com", "sample02@domain.com", "sample03@domain.com" ],
> 
> "sub":{
> 
> "-name-": [ "sample01", "sample02", "sample03" ],
> 
> "-confirmations-": [ "-confirmation\_001-", "-confirmation\_002-", "-confirmation\_003-" ],
> 
> "-order\_id-": [ "12345", "23456", "34567" ] },
> 
> "section":{
> 
> "-confirmation\_001-":"Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order\_id-.",
> 
> "-confirmation\_002-":"Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order\_id-. This invoice is to be paid by bank transfer within 7 days from the date of your monthly statement.",
> 
> "-confirmation\_003-":"Thanks for choosing SendGrid. This email is to confirm that we have processed your order -order\_id-. You can download your invoice as a PDF for your records."
> 
> },
> 
> }

 

> {"to":
> 
> ["sample01@domain.com","sample02@domain.com","sample03@domain.com"],
> 
> "sub":{
> 
> "\*|BLANK|\*": [""],
> 
> "\*|SUBJECTS|\*": ["\*|SUBJECT01|\*","\*|SUBJECT02|\*","\*|SUBJECT03|\*"],
> 
> "\*|SMALLBANNERS|\*": ["","",""],
> 
> "\*|OFFERS|\*": ["\*|OFFER01|\*","\*|OFFER02|\*","\*|OFFER03|\*"],
> 
> "\*|B\_AMOUNT|\*": ["19.95","55.95",""],
> 
> "\*|BALANCES|\*": ["\*|BALANCE|\*","\*|BALANCE|\*","\*|BLANK|\*"],
> 
> "\*|ANALYTICS|\*": ["\*|ANALYTIC|\*","\*|ANALYTIC|\*","\*|ANALYTIC|\*"]},
> 
> "section": {
> 
> "\*|SUBJECT01|\*": "Subject 01",
> 
> "\*|SUBJECT02|\*": "Subject 02",
> 
> "\*|SUBJECT03|\*": "Subject 03",
> 
> "\*|SMALLBANNER01|\*": "Banner 01",
> 
> "\*|SMALLBANNER02|\*": "Banner 02",
> 
> "\*|SMALLBANNER03|\*": "Banner 03",
> 
> "\*|BALANCE|\*": "You have a balance of $\*|B\_AMOUNT|\*",
> 
> "\*|OFFER01|\*": "Offer 01",
> 
> "\*|OFFER02|\*": "Offer 02",
> 
> "\*|OFFER03|\*": "Offer 03",
> 
> "\*|ANALYTIC|\*": "analytic code from Google"
> 
> }
> 
> }

 

 

{"to": [  
 "kyle.a.roberts@outlook.com",  
 "kyle.a.roberts@outlook.com",  
 "kyle.a.roberts@outlook.com",  
 "kyle.a.roberts@outlook.com",  
 "kyle.a.roberts@outlook.com",  
 "kyle.a.roberts@outlook.com"  
 ],  
"sub": {  
"-first\_name-": ["John", "Jane", "", "Jason", "Mike", "Sam"],  
"-last\_name-": ["Smith", "", "", "", "Johnson", ""],

"Welcome ,": ["-1-","-1-","-1-","-1-","-1-","-1-"],

" ,": [",",",",",",",",",",","],

 

"-warm\_welcome-": ["-greeting-", "-greeting-", "-greeting-", "-greeting-", "-greeting-", "-greeting-"]},  
"section": {  
"-greeting-": "Welcome -first\_name- -last\_name-,",  
"-1-": "Welcome," }}

 

 

 

"sub": { "%name%": ["Ben", "Joe"], "%role%": ["%sellerSection%", "%buyerSection%"] }, "section": { "%sellerSection%": "Seller information for: %name%", "%buyerSection%": "Buyer information for: %name%" }

