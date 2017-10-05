---
layout: page
weight: 0
title: Section Tags
navigation:
  show: true
---

Section tags are similar to [substitution tags]({{root_url}}/API_Reference/SMTP_API/substitution_tags.html) in how they're built, but are specific to the message, not the recipient. You have to have a substitution tag value for **each** recipient, but you can have any number of section tags. Section tags can then contain Substitution tags for the recipient if needed. Section tags have to be contained within a Substitution tag, since SendGrid needs to know which data to populate for the recipient.
See the [Section Tag Example Walkthrough](#-Section-Tag-Example-Walkthrough) below.

It's possible & acceptable to use only Substition tags. However, that method is not [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and you may come against [message size limitations]({{root_url}}/Classroom/Build/Add_Content/whats_the_recommended_message_size_limit.html).

* * * * *

The format of the SMTP API section tag has the form:
{% codeblock lang:json %}
{
  "section": {
    ":sectionName1": "section 1 text",
    ":sectionName2": "section 2 text"
  }
}
{% endcodeblock %}

{% info %}
How you flag your section tags may depend on the library you use to create your SMTP connection, the language you are writing your code in, or any intermediate mail servers that your servers will send mail through. In some cases `-subVal-` may be the best choice while in other cases, `%subVal%`, `#subVal#`, or `:subVal` may make more sense. The flag doesn't matter, as long as it's a unique string.
{% endinfo %}

{% warning %}
Do not use spaces inside your section or substitution tags! e.g. `%first name%`
The space breaks the string.
{% endwarning %}

{% warning %}
Do not nest section tags in sections as they will fail and your section will not be replaced.
{% endwarning %}

* * * * *

{% anchor h2 %}
Section Tag Walkthrough
{% endanchor %}

Message body sent to SendGrid: 

{% codeblock lang:html %}
<html>
 <body>
   Hi :salutation,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    :event_details.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

The accompanying X-SMTPAPI JSON header would look like:

{% codeblock lang:json %}
{
  "to": [
    "alice@foo.com",
    "bob@bar.com",
    "casey@baz.com"
  ],
  "sub": {
    ":salutation": [
      ":female",
      ":male",
      ":neutral"
    ],
    ":name": [
      "Alice",
      "Bob",
      "Casey"
    ],
    ":event_details": [
      ":event1",
      ":event2",
      ":event1"
    ],
    ":event_date": [
      "Jan 1",
      "Feb 14",
      "Aug 11"
    ]
  },
  "section": {
    ":male": "Mr. :name",
    ":female": "Ms. :name",
    ":neutral": ":name",
    ":event1": "New User Event on :event_date",
    ":event2": "Veteran User Appreciation on :event_date"
  }
}
{% endcodeblock %}

Alice receives:
{% codeblock lang:html %}
<html>
 <body>
   Hi Ms. Alice,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    New User Event on Jan 1.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

Bob receives:
{% codeblock lang:html %}
<html>
 <body>
   Hi Mr. Bob,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    Veteran User Appreciation on Feb 14.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}

Casey receives:
{% codeblock lang:html %}
<html>
 <body>
   Hi Casey,<br />
   Thanks so much for joining us at our event!

   <p>You have registered for the following event:<br />
    New User Event on Aug 11.</p>

   Thanks,<br />
   The SendGrid Team
 </body>
</html>
{% endcodeblock %}
