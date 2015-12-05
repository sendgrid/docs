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

&nbsp;

Example Name substitution:

&nbsp;

Simple Substitution:

> {"sub": {
> 
> "-name-": ["John", "Jane"]}

&nbsp;

Double Substitution:

> {"sub": {
> 
> "-first\_name-": ["John", "Jane"],
> 
> "-last\_name-": ["Smith", "Williams"]}

&nbsp;

Simple Section and Substitution:

&nbsp;

> {"sub": {
> 
> "-name-": [&nbsp;"John", "Jane"&nbsp;],
> 
> "-warm\_welcome-": ["-greeting-"] },
> 
> "section": {
> 
> "-greeting-": "Hello&nbsp;-name-,"&nbsp;}

&nbsp;

Double Substitution with Section:

&nbsp;

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
> "-greeting-": "Hello -first\_name- -last\_name-,"&nbsp;}

&nbsp;

Complex Section and Substitution (01):

&nbsp;

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
> "-greeting03-": "Dear -first\_name- -last\_name-,"&nbsp;}

&nbsp;

> {"to":
> 
> [&nbsp;"sample01@domain.com",&nbsp;"sample02@domain.com",&nbsp;"sample03@domain.com"&nbsp;],
> 
> "sub":{
> 
> "-name-":&nbsp;[&nbsp;"sample01",&nbsp;"sample02",&nbsp;"sample03"&nbsp;],
> 
> "-confirmations-":&nbsp;[&nbsp;"-confirmation\_001-",&nbsp;"-confirmation\_002-",&nbsp;"-confirmation\_003-"&nbsp;],
> 
> "-order\_id-":&nbsp;[&nbsp;"12345",&nbsp;"23456",&nbsp;"34567"&nbsp;] },
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

&nbsp;

> {"to":
> 
> ["sample01@domain.com","sample02@domain.com","sample03@domain.com"],
> 
> "sub":{
> 
> "\*|BLANK|\*":&nbsp;[""],
> 
> "\*|SUBJECTS|\*":&nbsp;["\*|SUBJECT01|\*","\*|SUBJECT02|\*","\*|SUBJECT03|\*"],
> 
> "\*|SMALLBANNERS|\*":&nbsp;["","",""],
> 
> "\*|OFFERS|\*":&nbsp;["\*|OFFER01|\*","\*|OFFER02|\*","\*|OFFER03|\*"],
> 
> "\*|B\_AMOUNT|\*":&nbsp;["19.95","55.95",""],
> 
> "\*|BALANCES|\*":&nbsp;["\*|BALANCE|\*","\*|BALANCE|\*","\*|BLANK|\*"],
> 
> "\*|ANALYTICS|\*":&nbsp;["\*|ANALYTIC|\*","\*|ANALYTIC|\*","\*|ANALYTIC|\*"]},
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
> "\*|BALANCE|\*": "You have a balance of&nbsp;$\*|B\_AMOUNT|\*",
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

&nbsp;

&nbsp;

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

&nbsp;

"-warm\_welcome-": ["-greeting-", "-greeting-", "-greeting-", "-greeting-", "-greeting-", "-greeting-"]},  
"section": {  
"-greeting-": "Welcome -first\_name- -last\_name-,",  
"-1-": "Welcome," }}

&nbsp;

&nbsp;

&nbsp;

"sub": { "%name%": ["Ben", "Joe"], "%role%": ["%sellerSection%", "%buyerSection%"] }, "section": { "%sellerSection%": "Seller information for: %name%", "%buyerSection%": "Buyer information for: %name%" }

