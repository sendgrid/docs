---
seo:
  title: Migration Guide Part 2 Importing your Unsubscribes
  description: Migration Guide Part 2 Importing your Unsubscribes
  keywords: drop, unsubscribe, unsub, export, import, migrate, asm, suppression
title: Migration Guide Part 2 Importing your Unsubscribes
weight: 0
layout: page
zendesk_id: 207009597
navigation:
  show: true
---

<iframe src="https://player.vimeo.com/video/136013004" width="500" height="375" frameborder="0" allowfullscreen=""></iframe>

 

Preserving your existing users' subscription preferences is super important to maintaining good deliverability. 

This guide aims to show you how you bring your list-specific Unsubscribes from our Legacy Newsletter service over to our Advanced Supression manager, and use them with our new Marketing Campaigns. 

**1. Export your list Unsubscribes**

First, head over you the [old Recipient List dashboard](https://sendgrid.com/newsletter/lists) in the Legacy Newsletter service, and **Export** the Recipient List you want to migrate over. 

Be sure to only select " **Unsubscribes Emails**" in the Export modal.  

![]({{root_url}}/images/unsubexport.gif)

 

**2. Create an ASM Suppression Group**

Head over to " **Suppression Manager**" under the Suppressions section. 

![]({{root_url}}/images/supressionmenu.gif)

 

From here, click " **Create New Group**" and give your group a name and description that will make sense to your customers. 

![]({{root_url}}/images/addASMgroup.gif)

 

**3. Upload your Unsubscribe CSV. to your ASM Group **

![]({{root_url}}/images/uploadunsubecsv.gif)

 And now you're done! You will now be able to select this ASM groups when building a campaign, so that when you send your campaign, any users who had previously unsubscribed will remain undisturbed.
