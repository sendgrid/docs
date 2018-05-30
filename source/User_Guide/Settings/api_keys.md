

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [What are API Keys?](#-What-are-API-Keys)
* [Create an API Key](#-Create-an-API-Key)
* [API Key Permissions](#-API-Key-Permissions)
* [Edit an API Key](#-Edit-an-API-Key)
* [Inactivate an API Key](#-Inactivate-an-API-Key)
* [Sending Email With an API Key](#-Sending-Email-With-an-API-Key)

{% anchor h2 %}
What are API Keys?
{% endanchor %}

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. They are the preferred alternative to using a username and password because you can revoke an API key at any time without having to change your username and password. We recommend using API keys for connecting to all of SendGrid’s services.

There are two different types of API keys:

1. **Billing API Keys** are used only to authenticate billing related API calls.
1. **General API Keys** are used to authenticate all other API calls.

SendGrid requires a separate API key for making billing related API calls. This segmentation adds an extra level of security by giving you more control over who has access to the various areas of your account.

You may also assign an API key specific permissions that further restrict which API calls it is capable of authenticating. For more detailed information about API key permissions, please visit our [Classroom]({{root_url}}/Classroom/Basics/API/api_key_permissions.html).

When viewing the API keys page, you will see a list of your current API keys along with the following information:

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API. (e.g., editing or deleting a key)

**Action** - Actions you can perform on your API keys, such as editing or deleting the key.

{% anchor h2 %}
Create an API Key
{% endanchor %}

*To create an API Key:*
1. Navigate to the settings page, and click **API Keys**. 
1. Click **Create API Key**. 
1. Give your API Key a name and select the level of permissions (link to API key permissions table) you want to assign to the new key. 
1. When finished, click **Create & View**. 

{% info %}
The API key name will follow your API key around through the SendGrid customer portal, so it is important that you choose a name that is meaningful to you.
{% endinfo %}

{% warning %}
You will only be shown your API key one time. SendGrid cannot retrieve or restore the key for you if lost, so please store it somewhere safe and secure.
{% endwarning %}

{% anchor h3 %}
API Key Permissions
{% endanchor %}

During the API key creation process, you can select specific permissions, or scopes, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key can access.

When assigning permissions to your API key, select one of the following levels of access:

* **No Access** prevents the API key from accessing any endpoint within the selected permission.
* **Read Access** allows the API key to access GET endpoints within the selected permission.
* **Full Access** allows the API key to access GET, PATCH, PUT, DELETE, and POST endpoints within the selected permission.

{% info %}
You may not give an API key greater permissions than you currently have.
{% endinfo %}

After you click the “Save” button, your API key is displayed. This key will only be shown here, so copy it down! Once you leave this page, you will not be able to see this key again.

{% anchor h2 %}
Edit an API Key
{% endanchor %}

Click the action menu the same row as the key you would like to edit. From here you can delete a key, making it completely inactive, or you can edit your key’s name and permissions.

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

You will need an API key to send email with SendGrid, we have provided [basic instructions for how to send emails with our API Keys]({{root_url}}/Classroom/Send/How_Emails_Are_Sent/api_keys.html) in case you need them.
