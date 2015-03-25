---
layout: page
weight: 0
title: Subusers
seo:
  title: Subusers
  description:
navigation:
  show: true
---

Subusers allow you the flexibility of seperating your statistics, logins, and settings. You can even whitelabel a subuser to
its own IP address and sending domain in order to segment your email sending and statistics.

In the most basic use case for subusers, you can have different settings and statistics for different types of email sending.
In the more advanced use case, you can whitelabel a sending domain (and IP) to a subuser so that the different types of emails
you send do not interfere or effect each other's deliverability rate. For example, you never want your marketing email spam reports
to effect whether a user gets a Forgot Password (Transactional) email.

To create and/or manage subusers, visit the <a href="http://sendgrid.com/subuser">SendGrid Subuser Management</a> page.

## Send With a Subuser

Simply use the subuser's credentials when sending, rather than the parent account's credentials.


## Create a Subuser

<div class="well">
    <div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
        <meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/a_L1jSEUmXg" frameborder="0" allowfullscreen></iframe>
    </div>
    The video will show you how to create a subuser. It is important to note, that subusers created following this video will
    share the whitelabel of the parent account.
</div>



## Create a Subuser With it's Own Whitelabel

{% info %}
You must purchase your IP from SendGrid before whitelabeling the subuser.
{% endinfo %}

<div class="well">
    <div class="video-container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
        <meta itemprop="name" content="{{ page.title }}"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/j15iatYD3Zg" frameborder="0" allowfullscreen></iframe>
    </div>

    Creation of a subuser that has its own Whitelabel.
</div>

For in-depth, step-by-step information on how to create and whitelabel a subuser please check out our knowledgebase article, [Creating & Whitelabeling a Subuser](https://support.sendgrid.com/hc/en-us/articles/200181928-Creating-Whitelabeling-A-Subuser-To-A-New-Sending-Domain).

Related Information:

* [How do I add more than 5 subusers to my account?](https://support.sendgrid.com/hc/en-us/articles/204914077)
* [How do I send with a Subuser?](https://support.sendgrid.com/hc/en-us/articles/200181908-How-do-I-send-mail-through-Subuser-accounts-)
* [What are Subusers?](https://support.sendgrid.com/hc/en-us/articles/200181918-What-are-Subusers-)