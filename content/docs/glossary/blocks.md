---
seo:
  title: Blocks
  description: Blocked emails happen when your IP address has been added to a blacklist or has been blocked by an ISP or messaging organization.
  keywords: blocks, undelivered email
title: Blocks
weight: 0
layout: page
navigation:
  show: false
---

Blocked messages will appear under Email Reports under Blocks. When your IP address has been added to a blacklist, or has been blocked by an ISP or messaging organization, the affected email shows up on this list. Typically it is possible to have your IP address removed from a block list, and some lists automatically do this after a period of time.

Blocks are less permanent than Bounces. This is a list of refused messages that were either blocked by an ISP or deferred longer than 72 hours. In addition, SendGrid does not treat the blocks list as a suppression list - subsequent sends to emails on this list will be sent like normal.


Having an entry on the SendGrid block list does not automatically drop email as it does for the bounce and unsubscribe list.

See the block reason column for more detail specific to the blocked email.

![Blocks]({{root_url}}/images/blocks_1.png)

## Additional Resources:

* [Web API & Blocks]({{root_url}}/API_Reference/Web_API/blocks.html)

