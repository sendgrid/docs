---
seo:
  title: Link Shorteners
  canonical: https://sendgrid.com/blog/link-shorteners-not-for-email/
  description: Link Shorteners
  keywords: bitly, bit.ly, link, shortener, URL
title: Link Shorteners
weight: 0
layout: page
zendesk_id: 200345416
navigation:
  show: true
---

_The following is a post from Brian T from SendGrid’s Compliance team. Read it on the [blog](http://blog.sendgrid.com/link-shorteners-not-for-email/)._

{% anchor h2 %}
Link shorteners are Great… But Not For Email
{% endanchor h2 %}

If you're using social media, you've seen links such as t.co and bit.ly that end up redirecting to some website. These are called URL shorteners. They provide useful click data, limit the character count a link takes up, and "beautify" what may otherwise be a long, clunky-looking url. While these link shorteners are great when character count is important, they don't have a place in email. Why? It's simple:

Spammers Use Them Too

Spammers abuse link shorteners because they mask the true URL that they redirect to. This has caused even reputable link shorteners to become blacklisted, since link shorteners are so often associated with spamming. If the links you provide in your emails are blacklisted, ISPs will probably block your mail, and you're not going to get the delivery rates you expect.

{% anchor h2 %}
But I like how they look, and what they do. What do I do?
{% endanchor h2 %}

For click tracking analytics, SendGrid already provides aggregate open and click data with every plan, as well as granular, individual email data, at our Pro 100K plan and higher. You don’t need to duplicate what your SendGrid plan already provides.

Here are some alternative ways to maintain the aesthetic that link shorteners provide:

> Get your own link shortener
>
> Rather than using a general purpose public link shortener, use your own private one!  Assuming you operate an honest business, your own private link shortener is unlikely to be blacklisted, and you can name it whatever you want. This also means your brand doesn't get hidden behind the link you actually want your customers to click on.
>
> Use HTML
>
> Even easier, just use HTML to transform any text or picture into a link. HTML is the code in the background of emails that handles structure and layout. It gets rendered by your inbox provider into attractive, well laid out messages. Just tag that picture or bit of text in your message that you want directing to your website, and voila! Pretty links!

Summary

In email, don't use general purpose public link shorteners. They are abused by spammers, hurt your email delivery, and hide your brand. Use a private link shortener, or even better, use HTML. Finally, don’t feel like you have to give up the useful click tracking that link shorteners provide; your SendGrid plan already does open and click tracking for you.
