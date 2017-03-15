---
seo:
  title: Teammates Troubleshooting Guide
  description: Quick explanations and solutions for common Teammates issues.
  keywords: Teammates, issue, fix, troubleshooting, troubleshoot, help
title: Teammates Troubleshooting Guide
weight: 0
layout: page
navigation:
  show: true
---

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [I created a teammate in the UI with FULL ACCESS to a feature, but that teammate still has fewer permissions than a teammate created with the API.](#-I-created-a-teammate-in-the-UI-with-FULL-ACCESS-to-a-feature-but-that-teammate-still-has-fewer-permissions-than-a-teammate-created-with-the-API)
* [Why can't my teammate impersonate a subuser?](#-Why-cant-my-teammate-impersonate-a-subuser)
* [My old multiple user credential could access all new features released by SendGrid. Now that my credential has been migrated to Teammates, I can no longer access new features as they are released.](#-My-old-multiple-user-credential-could-access-all-new-features-released-by-SendGrid-Now-that-my-credential-has-been-migrated-to-Teammates-I-can-no-longer-access-new-features-as-they-are-released)
* [I approved a request for access submitted by one of my teammates. Why was my teammate given full access to the feature?](#-I-approved-a-request-for-access-submitted-by-one-of-my-teammates-Why-was-my-teammate-given-full-access-to-the-feature)
* [Help! One of my administrator teammates has deleted my teammate account!](#-Help-One-of-my-administrator-teammates-has-deleted-my-teammate-account)
* [Can I recover a deleted teammate?](#-Can-I-recover-a-deleted-teammate)
* [Help! My teammate invitation has expired!](#-Help-My-teammate-invitation-has-expired)

{% anchor h2 %}
I created a teammate in the UI with FULL ACCESS to a feature, but that teammate still has fewer permissions than a teammate created with the API.
{% endanchor %}

SendGrid has a list of "scopes" (or permissions) for all actions that can be performed with a SendGrid account. Whenever you create a teammate and give that teammate specific permissions to a feature, you are assigning "scopes" of access to that teammate. When setting teammate permissions in the user interface, you are presented with a high level overview of all of SendGrid's scopes.

When you create a teammate with the Web API v3, you also must specify which permissions to give the new teammate. However, the method used to specify teammate permissions in the API allows for more granular control over exactly which permissions are assigned. In other words, the list of permissions available via the API is more detailed than the list available in the UI.

If you create a teammate in the UI, but find that it lacks sufficient permissions, then you will have to modify those permissions by making an API call. For more information on how to do this, click here.

{% anchor h2 %}
Why can't my teammate impersonate a subuser?
{% endanchor %}

Only **parent SendGrid accounts** and **administrator teammates** may impersonate subusers. A teammate with restricted permissions can not impersonate a subuser, and subusers cannot impersonate other subusers.

{% anchor h2 %}
My old multiple user credential could access all new features released by SendGrid. Now that my credential has been migrated to Teammates, I can no longer access new features as they are released.
{% endanchor %}

All non-administrator teammates are restricted from accessing new features released by SendGrid. However, these teammates should still be able to see new features added to the nav bar in the UI. So, all teammates may request access to new SendGrid features.

Administrator teammates will continue to automatically receive full access to all new SendGrid features.

{% anchor h2 %}
I approved a request for access submitted by one of my teammates. Why was my teammate given full access to the feature?
{% endanchor %}

If you are a teammate administrator and you grant an access request to one of your teammates, that teammate will be given full access to the feature. If you want to restrict that teammate's access, you will have to navigate to that teammate's settings and manually change them after you have approved the initial access request.

{% anchor h2 %}
Help! One of my administrator teammates has deleted my teammate account!
{% endanchor %}

Any administrator teammate can delete or change the settings of any other administrator teammate. Be careful of who you grant administrator access to!

{% anchor h2 %}
Can I recover a deleted teammate?
{% endanchor %}

No, unfortunately deleted teammates can not be recovered.

{% anchor h2 %}
Help! My teammate invitation has expired!
{% endanchor %}

Teammate invites are valid for only 7 days. If you requested access, simply request again. If you are an administrator, simply resend the teammate invitation.
