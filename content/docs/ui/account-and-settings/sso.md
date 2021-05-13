---
layout: page
weight: 0
group: account-management
title: SendGrid Single Sign-On
seo:
  title: SendGrid Single Sign-On
  description: Configure Single Sign-On with SendGrid
  keywords: SSO, Authentication, Password, SAML
navigation:
  show: true
---

<call-out type="beta">

Twilio SendGrid Single Sign-On is currently in beta. The following documentation and product interface may change as the product is developed.

**Known limitations during beta**  
Twilio SendGrid SSO does not currently support granting an SSO user access to more than one subuser without granting them administrator access at the top level of your Twilio SendGrid account.

</call-out>

<call-out>

Single Sign-On is available for Pro level accounts and higher. See our [pricing page](https://sendgrid.com/pricing/) to see a list of all Pro account features.

</call-out>

## Introduction to SendGrid SSO

Twilio SendGrid Single Sign-On (SSO) uses the widely supported [Security Assertion Markup Language (SAML) 2.0](https://en.wikipedia.org/wiki/SAML_2.0) standard to integrate your Twilio SendGrid user authentication with an identity and access management platform such as [Okta](https://www.okta.com/), [Duo](https://duo.com/), or [Microsoft Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/).

### Terminology

SSO and SAML terminology is defined throughout this document. Twilio SendGrid will commonly be referred to as the **Service Provider (SP)**. An Identity management provider such as Okta or Active Directory will be referred to generally as an **Identity Provider (IdP)**. IdPs often use different terms to label the same required fields in their SAML configurations; where known, this document attempts to call attention to the alternative terminology used by different IdPs.

The following documentation covers how to:

- [Access and manage your SSO settings](#access-and-manage-your-sso-settings)
- [Manage SSO users](#manage-users)
- [User authentication flow](#user-authentication-flow)

## Access and manage your SSO settings

The Twilio SendGrid [SSO Settings menu](https://app.sendgrid.com/settings/sso) allows you to configure your SendGrid SSO settings. You can add Teammates with administrator privileges to manage SSO settings for the account using the [Teammates](https://app.sendgrid.com/settings/teammates) menu. Managing users and permissions is covered in the [user management section](#manage-users) of this document.

### Add a SendGrid SSO Configuration

The process of adding an SSO configuration requires some back-and-forth between the Service Provider (Twilio SendGrid) and your IdP. The SendGrid App will provide values required by your IdP. Likewise, your IdP will provide values required by Twilio SendGrid. This document will cover the exchange in sections, beginning from the Twilio SendGrid App.

You can find documentation for some of the most popular IdPs below:

**Twilio SendGrid IdP guides**

- [Twilio SendGrid Single Sign-On with Okta]({{root_url}}/ui/account-and-settings/sso-okta/)

**IdP documentation sites**

- [Okta's documentation](https://developer.okta.com/docs/guides/build-sso-integration/saml2/create-your-app/)
- [Microsoft Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso)
- [Duo](https://duo.com/docs/sso-generic)

#### Twilio SendGrid Service Provider settings

To add, delete, or modify an SSO integration, login to the top level of your Twilio SendGrid account using your admin credentials.

1. Once logged in, navigate to **Settings** and select **SSO Settings**.
2. The SendGrid App will now display a page with an **Add Configuration** button.

![The Twilio SendGrid SSO Settings page]({{root_url}}/img/sso-sso-settings-nav-link.png 'SSO Settings')

3. Click **Add Configuration**. A screen will load and display the configuration values needed by your IdP.

   - **Name**: Your configuration will be given the name “My IdP configuration” by default. You can change this to something meaningful that will help you differentiate it from additional IdP configurations you add in the future. A common use case for multiple IdP integrations is a migration from one IdP to another.
   - **Single Sign-On URL**: The Twilio SendGrid URL where your IdP should POST its SAML response. This URL is responsible for receiving and parsing a SAML assertion. The Single Sign-On URL and the Audience URL are the same when using Twilio SendGrid.
   - **Audience URL (SP Entity ID)**: The Twilio SendGrid URL where your IdP should POST its SAML response. This URL is responsible for receiving and parsing a SAML assertion. The Audience URL and the Single Sign-On URL are the same when using Twilio SendGrid.
   - **SP Public Key**: The SP Public Key may not be required by your IdP. It is used to verify that requests are coming from the correct Service Provider.
   - **Additional Fields**: The following fields may or may not be required by your IdP. If they are required, you can provide the following values.
      - **Default RelayState**: The field is not applicable; leave it blank.
      - **Name ID format**: unspecified
      - **Application username**: Email

![The Twilio SendGrid SSO IdP Configuration page]({{root_url}}/img/sso-add-configuration-values.png 'Add IdP Configuration')

4. You can now add the values for each field to your IdP.
5. Your IdP will also provide values necessary to complete the SSO setup in the Twilio SendGrid App.

#### IdP settings

Once you have added the previous settings where appropriate in your IdP, your IdP will provide the values necessary to complete setup in the Twilio SendGrid App.

1. From the page displaying your SendGrid SSO configuration, click **Next**. This will load a page where you can put the SAML values provided by your IdP.

- **SAML Issuer ID**: An identifier provided by your IdP to identify the Service Provider in the SAML interaction. Your IdP may call this an Entity ID, Identity Provider Issuer, Azure AD Identifier, or other identifier.
- **Embed Link**: The IdP’s SAML POST endpoint. This endpoint should receive requests and initiate an SSO Login flow. Your IdP may call this the Identity Provider Single Sign-On URL, Login URL, or some other authentication URL.

2. Copy the appropriate values from your IdP to the fields in the Twilio SendGrid App.

![The "Add IdP Configuration" menu in the Twilio SendGrid App.]({{root_url}}/img/sso-IdP-configuration-value2.png 'Add IdP Configuration')

3. Next, click **Add Certificates**, and a sidebar will appear. The sidebar will have one field labeled **X509 Certificate**. This certificate is used by Twilio SendGrid to verify that SAML requests are coming from an IdP it knows and trusts.
4. Paste the certificate provided by your IdP into the **X509 Certificate** field, and click **Add Certificate**.

![The "Add X509 Certificate" modal in the Twilio SendGrid App.]({{root_url}}/img/sso-x509-cert-sidebar.png 'Add X509 Certificate')

5. The sidebar will close after you click **Add Certificate**. You can now select **Enable SSO** to complete the configuration. You can also **Save without enabling**.

Your SSO configuration should now be complete. You can use the next steps to edit or delete a configuration. You can also skip to the [user management](#manage-users) section to begin onboarding SSO users.

### Disable or enable an SSO IdP Configuration

You can toggle the state of a configuration by selecting **Settings** > **SSO Settings** from the left sidebar navigation.

1. A page will load displaying all your existing IdP configurations.
2. Each configuration will have an action menu to the far right. Select this menu to display a dropdown where you can choose **Edit** or **Disable**.

![The SSO settings page with an SSO configuration and its action menu expanded.]({{root_url}}/img/sso-configuration-action-menu-expanded.png 'Edit or Disable SSO configuration')

3. Selecting **Disable** will load a modal asking you to confirm your decision. Disabling a configuration will inactivate the configuration but will not delete it. Once disabled, any SSO users whose access is tied to the configuration will no longer be able to authenticate with Twilio SendGrid.

![The SSO settings modal asking to confirm that you want to disable the configuration.]({{root_url}}/img/sso-configuration-disable-confirmation-modal.png 'Disable SSO configuration')

4. To reenable a configuration, select the action menu. For any disabled configuration, you will see the options to **Edit** or **Enable**.
5. Selecting **Enable** will reactivate the configuration for any Teammates assigned to it.

### Edit or delete an SSO IdP configuration

You can edit or delete a configuration by selecting **Settings** > **SSO Settings** from the left sidebar navigation.

1. A page will load displaying all your existing IdP configurations.
2. Each configuration will have an action menu to the far right. Select this menu to display a dropdown where you can choose **Edit** or **Disable**.

![The SSO settings page with an SSO configuration and its action menu expanded.]({{root_url}}/img/sso-configuration-action-menu-expanded.png 'Edit or Disable SSO configuration')

3. Select **Edit** from the action menu. A page will load that allows you to modify or complete an unfinished SSO integration.
4. After modifying any of the fields in your configuration, select **Save** at the bottom of the page.
5. To delete the configuration, select **Delete <name of your configuration>** from the bottom of this page.

![The "Edit My IdP Impletmentation" page.]({{root_url}}/img/sso-edit-IdP-configuration-page.png 'Edit my IdP implementation')

6. When you select **Delete <name of your configuration>**, you will be presented with a modal asking you to confirm the deletion.

![A modal asking you to confirm the deletion of your IdP configuration.]({{root_url}}/img/sso-delete-configuration-confirmation-modal.png 'Delete this IdP configuration')

## Manage users

Once you have successfully enabled an SSO IdP configuration, you will need to add SSO users to the account. Twilio SendGrid calls these users Teammates. An account administrator can add two types of Teammates to an account: SSO Teammates and Password Teammates. Password Teammates will log in with a username, password, and Twilio SendGrid 2FA. This documentation covers the SSO Teammate setup only. For more information about our Teammates feature, see the dedicated [Teammates documentation]({{root_url}}/ui/account-and-settings/teammates/).

<call-out>

Twilio SendGrid does not currently offer a migration tool that will convert existing Teammates to SSO Teammates. You must manually add existing users as SSO Teammates to your account.

</call-out>

<call-out>

Twilio SendGrid requires Two-factor Authentication (2FA) to access its services. This means that any account administrators who access Twilio SendGrid outside of an SSO configuration must enable 2FA. See more in our [2FA documentation]({{root_url}}/ui/account-and-settings/two-factor-authentication/).

Configuring 2FA for SSO Teammates should not done in the Twilio SendGrid App. You should manage any 2FA requirements for your SSO users in your IdP. For example, the Okta or Duo apps may be configured to send Push or SMS notifications.

</call-out>

### Add a Teammate

1. To add a teammate, navigate to **Settings**, and select **Teammates** in the left sidebar navigation of the Twilio SendGrid App.
2. A page will load displaying any existing Teammates already on the account. If there are no existing Teammates, you will see **Get started creating teammates**.
3. Click the **Add Teammate** button at the top of the page to display a dropdown menu with options to **Add password teammate** or **Add SSO teammate**.

![The Twilio SendGrid Teammates App page.]({{root_url}}/img/sso-teammates-add-teammate.png 'Add a Teammate')

4. Select **Add SSO teammate** to load a sidebar with the fields required to create the Teammate.

   - **Teammate’s Email Address**: Twilio SendGrid will use this email address as the primary identifier when authenticating the SSO user. For this reason, a Teammate’s email address must match the address you assigned them in your IdP, and it cannot be changed after you create the Teammate. If a single user must access multiple accounts, you will need to configure your IdP to pass through a unique email address for each account+user pair; these unique email addresses must be added as SSO Teammates in the Twilio SendGrid App.
   - **Teammate’s First Name**: The Teammate’s first name.
   - **Teammate’s Last Name**: The Teammate’s last name.
   - **Teammate’s Permissions**:

       - **Add as Admin**: Administrators will have permissions to fully manage the account, including the ability to add, remove, and edit other Teammates.
       - **Add with Read-Only Access**: Read-only permissions allow a Teammate to work within the SendGrid App to send email, manage templates, and perform other email-related tasks; however, a read-only Teammate cannot manage other Teammates.
       - **Add with Restricted Access**: You can finely control a user's permissions by creating a Teammate with restricted access. For example, a software developer may need to create API keys but never require billing access. The Twilio SendGrid App also provides permission presets that will toggle on the access most often needed by common types of users.

![The "Add SSO Teammate" modal with a restricted access user selected.]({{root_url}}/img/sso_teammate_restricted_access.png 'Add SSO Teammate')

5. With all the fields complete, click **Add** to finish creating the Teammate.

### Edit a Teammate

Existing Teammates can be edited from the **Settings** > **Teammates** page of the Twilio SendGrid App.

1. On the Teammates management page, each Teammate will have an action menu on the far right. Click the action menu to reveal **Edit** and **Delete** options.

![An SSO Teammate with the action menu open to edit or delete the Teammate.]({{root_url}}/img/sso-teammate-action-menu.png 'Edit or Delete an SSO Teammate')

2. Selecting **Edit** from the action menu will load a sidebar modal with the same fields that were present when adding the Teammate. You can edit any of the fields except the **Teammate’s Email Address**, which cannot be changed after the Teammate is created.

### Remove a Teammate

Existing Teammates can be deleted from the **Settings** > **Teammates** page of the Twilio SendGrid App.

1. On the Teammates management page, each Teammate will have an action menu on the far right. Click the action menu to reveal **Edit** and **Delete** options.

![An SSO Teammate with the action menu open to edit or delete the Teammate.]({{root_url}}/img/sso-teammate-action-menu.png 'Edit or Delete an SSO Teammate')

2. Selecting **Delete** from the action menu will load a modal asking you to confirm the deletion.

![A modal asking you to confirm the deletion of a Teammate]({{root_url}}/img/sso-teammate-delete-modal.png)

## User authentication flow

User authentication can be initiated in two ways: from the Service Provider or from the IdP. We call these SP-initiated and IdP-initiated authentication flows respectively.

### SP-initiated authentication flow

The SP-initiated flow occurs when a user authenticates directly with the Twilio SendGrid App at https://app.sendgrid.com/ssologin.

When a user enters their email address, SendGrid performs a check and redirects any email address associated with an SSO account to the SSO login page. Users will then authenticate by entering their IdP credentials.

### IdP-initiated authentication flow

The IdP-initiated flow occurs when a user authenticates with their IdP. For example, a user may click on the SendGrid app tile from Okta. This flow will authenticate the user and redirect them to the Twilio SendGrid App.

## More Resources

- [Twilio SendGrid Single Sign-On with Okta]({{root_url}}/ui/account-and-settings/sso-okta/)
- [The Twilio SendGrid SSO REST API]({{root_url}}/api-reference)
