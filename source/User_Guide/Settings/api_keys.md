

{% anchor h2 %}
Table of Contents
{% endanchor %}

* [What are API keys?](#-What-are-API-keys)
* [Creating an API key](#-Creating-an-API-key)
* [API key permissions](#-API-key-permissions)
* [Replacing an old API key with a new one](#-Replacing-an-old-API-key-with-a-new-one)
* [Edit an API key](#-Edit-an-API-key)
* [Testing an API key](#-Testing-an-API-key)
* [Inactivate an API Key](#-Inactivate-an-API-key)

{% anchor h2 %}
What are API keys?
{% endanchor %}

API keys are used by your application, mail client, or website to authenticate access to SendGrid services. They are the preferred alternative to using a username and password because you can revoke an API key at any time without having to change your username and password. We recommend using API keys for connecting to all of SendGrid’s services.

There are two different types of API keys:

<<<<<<< HEAD
1. **Billing API Keys** are used only to authenticate billing related API calls.
1. **General API Keys** are used to authenticate all other API calls.
=======
1. **Full Access** gives all of the API methods.
1. **Restricted Access** lets you customize the level of access.
1. **Billing Access** gives you access to the billing endpoints.
>>>>>>> Whatthefoxsays/ease-ui

SendGrid requires a separate API key for making billing related API calls. This segmentation adds an extra level of security by giving you more control over who has access to the various areas of your account.

For more detailed information about API key permissions, see our [API Keys permissions page]({{root_url}}/Classroom/Basics/API/api_key_permissions.html).

When viewing the API keys page, you will see a list of your current API keys along with the following information:

**Name** - The name you defined for your API key.

**API Key ID** - The way you would reference your API key for management through the API. (e.g., editing or deleting a key)

**Action** - Actions you can perform on your API keys, such as editing or deleting the key.

{% info %} There is a limit of 100 API Keys per account. {% endinfo %}

{% anchor h2 %}
Creating an API key
{% endanchor %}

<<<<<<< HEAD
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
=======
1. Go to the API Keys page in the SendGrid UI, and click `Create API Key`.
1. Give your API key a name.
1. Select **Full Access**, **Restricted Access**, or **Billing Access**.
1. If you're selecting **Restricted Access**, or **Billing Access**, select the specific permissions to give each category. For more information, see [API key permissions](#-API-key-permissions).
1. Click `Create a Key`.
1. Copy your API Key somewhere safe. For security reasons, do not put it directly in your code, or commit it somewhere like Github.

{% warning %}
You will only be shown your API key one time. Please store it somewhere safe as we will not be able to retrieve or restore it.
>>>>>>> Whatthefoxsays/ease-ui
{% endwarning %}

{% info %} There is a limit of 100 API Keys per account. {% endinfo %}

{% anchor h3 %}
API key permissions
{% endanchor %}

During the API key creation process, you can select specific permissions, or scopes, that you would like to assign to your new API key. These permissions restrict which areas of your account your API key can access.

When assigning permissions to your API key, select one of the following levels of access:

* **No Access** prevents the API key from accessing any endpoint within the selected permission.
* **Read Access** allows the API key to access GET endpoints within the selected permission.
* **Full Access** allows the API key to access GET, PATCH, PUT, DELETE, and POST endpoints within the selected permission.

{% info %}
You may not give an API key greater permissions than you currently have.
{% endinfo %}

<<<<<<< HEAD
After you click the “Save” button, your API key is displayed. This key will only be shown here, so copy it down! Once you leave this page, you will not be able to see this key again.
=======
{% anchor h2 %}
Replacing an old API key with a new one
{% endanchor %}

1. Locate the API key you would like to replace in your list of keys and select the action menu drop down at the right on the same row, then select **Delete API Key**. 
1. Next, [create an API key](#-Creating-an-API-key).
1. Replace the old API key with the new one in your code.

{% anchor h2 %}
Testing an API key
{% endanchor %}

You can easily test your newly created API key using cURL:

{%codeblock%}
 curl -i --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'Authorization: Bearer YOUR_API_KEY_HERE' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "sendeexampexample@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Howdy!"}]}'
{%endcodeblock%}

Look for a **202 Accepted** in the HTTP response headers.
>>>>>>> Whatthefoxsays/ease-ui

{% anchor h2 %}
Edit an API Key
{% endanchor %}

<<<<<<< HEAD
Click the action menu the same row as the key you would like to edit. From here you can delete a key, making it completely inactive, or you can edit your key’s name and permissions.
=======
Click the action menu in the same row as the key you would like to edit. From here you can delete a key, making it completely inactive, or you can edit your key’s name and permissions.
>>>>>>> Whatthefoxsays/ease-ui

{% anchor h2 %}
Inactivate an API Key
{% endanchor %}

{% warning %}
Once you delete a key, it can no longer be used to access SendGrid’s services.
{% endwarning %}

Click the action menu in the same row as the key you want to inactivate. Choose “Delete.” This will delete the key permanently, making it inactive. Any subsequent API calls using this deleted API key will be rejected by SendGrid.
