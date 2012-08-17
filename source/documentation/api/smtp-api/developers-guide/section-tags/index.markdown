---
comments: false
date: 2011-06-29 13:25:43
layout: page
slug: section-tags
title: Section Tags
wordpress_id: 1685
---

Sections are an extension of [substitution values](/documentation/api/smtp-api/developers-guide/substitution-tags/) that allow a user to specify large text blocks that will be mostly the same that can then be selected and customized on a per user basis. This is useful for sending dynamic content where a large section of the body will be similar across several users, as opposed to duplicating that text each time. 

The format of the smtpapi section key has the form:

{ "section" : { "-sectionName1-" : "section 1 text", "sectionName2" : "section 2 text" } }

Typical usage is to have a tag in the body of your email that references a per user substitution tag. This user tag will contain a reference to a section tag. Section text may contain references to per recipient substitution variables.



### Example:



Message body:
`

 
   Hi -name-,  

      We thought you might be interested in this special offer. 
      -body-
 

`

An accompanying SMTP API JSON header might look something like this:
`
{"to" : [ "alice@example.com", "joe@example.com" ], "sub" :{ "-body-" : [ "-bodyFemale-", "-bodyMale-" ], "-name-" : [ "Alice", "Joe" ]}, "section" : { "-bodyFemale-" : "Check out this dress -name-!", "-bodyMale-" : "Check out this tie -name-!" } }
`

The final email for Alice would look like this:
`

 
   Hi Alice,  

      We thought you might be interested in this special offer. 
      Check out this dress Alice!
 

`
