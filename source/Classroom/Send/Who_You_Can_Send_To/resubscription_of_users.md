---
seo:
  title: Resubscription of Users
title: Resubscription of Users
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
How Do I Resubscribe My Recipients?
{% endanchor %}

If a recipient has opted out of your mailings in the past but wishes to re-open communications then you will need to remove their email address from the appropriate unsubscribe list.

For recipients who have opted out of your transactional messages, all you need to do is locate the address in question on your global unsubscribe list, select the corresponding check box, and click the "delete" button. You can also check your [drops list](https://sendgrid.zendesk.com/hc/en-us/articles/203295137) for users to reconfirm.

For marketing list resubscribes, you will need to locate the recipient list from which the recipient unsubscribed within your [suppressions settings]({{site.app_url}}/suppressions). Click on the "manage unsubscribes" link for the list in question, locate and select the recipient's email address, and then click the "resubscribe" button.

{% anchor h3 %}
Removing Unsubscribes is Risky Business...
{% endanchor %}

Be careful when removing recipients from your suppression lists in order to send to them again. In order to be [CAN-SPAM](http://www.business.ftc.gov/documents/bus61-can-spam-act-compliance-guide-business) compliant recipients must be able to opt out of any emails that they desire. Deleting unsubscribed addresses so that you can send to them again without the recipient's knowledge could result in you, the sender, being penalized for violating the CAN-SPAM Act. This is also in direct violation of SendGrid's email sending policies.

{% anchor h3 %}
Would You Like to Know More?
{% endanchor %}

Still a little unsure on the particulars? If so, please don't hesitate to [contact support](https://support.sendgrid.com) at your convenience and we will be happy to help!
