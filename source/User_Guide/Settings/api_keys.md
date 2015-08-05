---
seo:
  title: Manage SendGrid API Keys
  description: Manage your SendGrid API Keys
  keywords: sendgrid API keys, email API Keys, mail API Keys, email credentials, send credentials
title: API Keys
weight: 0
layout: page
navigation:
  show: true
---

API Keys are used by your application, mail client, or website to authenticate to SendGrid. They are ideal over a username and password, because you can revoke an API key at any time without changing your username and password. We suggest that you use API keys for connecting to all of SendGrid’s services.

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API. (e.g. editing or deleting a key)

**Action** - Actions you can perform on your API keys.

{% anchor h2 %}
Create an API Key
{% endanchor %}

When you click the “Create API Key” button, a window will pop out of the side of the page which will allow you to name your API key. This name will follow your API key around through the SendGrid customer portal, so it is important that you name it in such a way that’s useful to you.

{% warning %}
You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore this generated token.
{% endwarning %}

When you click the “Save” button, you will be shown your API key. This key will only be shown here, so copy it down! Once you leave this page, you will not be able to see this key again.

{% anchor h2 %}
Edit an API Key
{% endanchor %}

Click the gear icon in the same row as the key you want to edit. From here you can delete a key, making it completely inactive or you can edit your key’s name.

{% anchor h2 %}
Inactivate an API Key
{% endanchor %}

{% warning %}
Once you delete a key, it can no longer be used to access SendGrid’s services.
{% endwarning %}

Click the gear icon in the same row as the key you want to inactivate. Choose “Delete.” This will delete the key permanently, making it inactive. Any subsequent API calls using this deleted API key will be rejected by SendGrid.

{% anchor h2 %}
Sending Email With an API Key
{% endanchor %}

You will need an API key to send email with SendGrid, we have provided [basic instructions for how to send emails with our API Keys]({{root_url}}/Classroom/Send/api_keys.html) in case you need them.
