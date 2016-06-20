---
st:
  published_at: 2016-06-20
  type: Classroom
seo:
  title: Unsubscribe, Sender ID, and Weblink default Tags
  description: Learn more about the default tags that you can use in Marketing Campaigns...
  keywords: tag, merge, replace, custom, feilds, unsubscribe, weblink
title: Unsubscribe, Sender ID, and Weblink default Tags
weight: 0
layout: page
navigation:
  show: true
---

This article aims to list and briefly explain the default Tags you may find yourself wanting to use in any given Campaign or Template. This covers the Tags for Unsubscribe, Sender Identity info, and the "view in browser" Weblink.

 

##Unsubscribe Tags

**[Unsubscribe]** - Used to place the clickable link that allows recipients to opt out of emails. 

><a href="[Unsubscribe]">Click here to Unsubscribe</a>

**[Unsubscribe_Preferences]** - Takes the recipient to a landing page where they can view all of your default Unsubscribe Groups, as well as unsubscribe from those and any other groups they are part of.

><a href="[Unsubscribe_Preferences]">Click here to update your email preferences.</a>
<br></br>

 

##Sender Identity Information 

**[Sender_Name]** - Inserts the the Sender Name from the Sender ID chosen for the Campaign. 

**[Sender_Address]** - Inserts the the physical address from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_City]** - Inserts the the City from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_State]** - Inserts the the State from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.

**[Sender_Zip]** - Inserts the the Zip code from the Sender ID chosen for the Campaign. Required for CAN SPAM compliancy.
<br></br>

 

##Miscellaneous Tags

**[Weblink]** - Places the link to allow the recipient to view the email in their browser.

><a href="[Weblink]">Click here to view this email in your web browser.</a>
<br></br>

 

###Migrating from Legacy Newsletter? Use this handy chart to update your tags!

[%from_name%] => [Sender_Name]

[%address%] => [Sender_Address]

[%city%] => [Sender_City]

[%state%] => [Sender_State]

[%zip%] => [Sender_Zip]

[weblink] => [Weblink]

[unsubscribe] => [Unsubscribe]

New Tag! => [Unsubscribe_Preferences]
<br></br>

 

 

###Need to add tags to the Design editor? Use the link button! 


Be sure that you don't link the text [unsubscribe] to the tag using the **link button**. This will cause our system to replace the plain text tag first instead of the one inside of the HTML A tag. Incorrectly linking your unsubscribe tag will cause us to place the plain/text version of the unsubscribe link, which is significantly larger looking link.  

Always link your unsubscribe tag to a word or string of text instead. 

_Incorrect:_

><a href="[unsubscribe]">[unsubscribe]</a>

_Correct:_

><a href="[unsubscribe]">Click here to unsubscribe</a>
