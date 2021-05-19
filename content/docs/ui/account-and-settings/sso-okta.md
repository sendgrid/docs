---
layout: page
weight: 0
group: account-management
title: Twilio SendGrid Single Sign-On with Okta
seo:
  title: Twilio SendGrid Single Sign-On with Okta
  description: Configure Single Sign-On with SendGrid and the Okta IdP
  keywords: SSO, Authentication, Password, SAML, Okta
navigation:
  show: true
---

<call-out type="beta">

Twilio SendGrid Single Sign-On is currently in beta. The following documentation and product interface may change as the product is improved.

</call-out>

The following guide will help you add Twilio SendGrid Single Sign-On (SSO) as an integration to your Okta Admin Console. This guide covers the steps necessary to work with Okta only. The following prerequisites should be completed before proceeding with this guide.

## Prerequisites

Adding an SSO configuration requires some back-and-forth between the Service Provider (Twilio SendGrid) and your IdP (Okta). The Twilio SendGrid App will provide values required by Okta. Likewise, Okta will provide values required by Twilio SendGrid. You should retrieve values from the Twilio SendGrid App for the fields listed in the following table before proceeding. To understand how to retrieve these values, please follow the instructions in our [main SSO documentation]({{root_url}}/ui/account-and-settings/sso/).

Twilio SendGrid, Okta, and other identity providers often refer to the same values by different names. The table below provides the name used by both Okta and Twilio SendGrid, a short description for each required field, and which application provides the information during setup.

<table>
  <tr>
    <th>Twilio SendGrid label</th>
    <th>Okta label</th>
    <th>Provided by</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>Name</td>
    <td>Twilio SendGrid</td>
    <td>The name of your integration. This name can be anything that makes sense for your organization (e.g., "Twilio SendGrid" or "Email")</td>
  </tr>
  <tr>
    <td>Single Sign-On URL</td>
    <td>Single sign on URL</td>
    <td>Twilio SendGrid</td>
    <td>The URL where Okta should POST its SAML response. This URL is responsible for receiving and parsing a SAML assertion. This is the same URL as the Audience URL when using Twilio SendGrid.</td>
  </tr>
  <tr>
    <td>Audience URL (SP Entity ID)</td>
    <td>Audience URL (SP Entity ID)</td>
    <td>Twilio SendGrid</td>
    <td>The URL where Okta should POST its SAML response. This URL is responsible for receiving and parsing a SAML assertion. This is the same URL as the Single Sign-On URL when using Twilio SendGrid.</td>
  </tr>
  <tr>
    <td>N/A</td>
    <td>Application username</td>
    <td>N/A</td>
    <td>This should be set to "Email" when using Twilio SendGrid.</td>
  </tr>
  <tr>
    <td>Embed Link</td>
    <td>Identity Provider Single Sign-On URL</td>
    <td>Okta</td>
    <td>Okta's SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow.</td>
  </tr>
  <tr>
    <td>SAML Issuer ID</td>
    <td>Identity Provider Issuer</td>
    <td>Okta</td>
    <td>An identifier provided by Okta to identify Twilio SendGrid in the SAML interaction.</td>
  </tr>
  <tr>
    <td>X509 Certificate</td>
    <td>X.509 Certificate</td>
    <td>Okta</td>
    <td>This certificate is used by Twilio SendGrid to verify that SAML requests are coming from Okta.</td>
  </tr>
</table>

## Add the Twilio SendGrid application to Okta

With the prerequisite values prepared, you can begin adding your Application in the Okta Developer Console. The URL for this console will likely follow the pattern: `<your subdomain>.okta.com/admin/dashboard`.

1. Once in the Developer Console, navigate to **Applications** > **Applications**. You will see a list of active applications and an **Add Application** button.

![The Okta Applications Page]({{root_url}}/img/okta-applications-applications.png "Okta Applications")

2. Click **Add Application** to load a view of **Featured Integrations**. You can ignore these integrations and click **Create New App** to start the "Application Integration Wizard."

![The Okta Create New Application Page]({{root_url}}/img/okta-create-application.png "Okta Create New Application")

3. In the modal that loads, select **Web** from the **Platform** drop-down menu, select **SAML 2.0** as the **Sign on method**, and click **Create**.

![Create a New Application Integration modal]({{root_url}}/img/okta-sign-on-method-modal.png "Create a New Application Integration")

4. A screen will load where you should add the **App name**. We recommend "Twilio SendGrid," but you can choose anything that makes sense for your organization (e.g., Email). You can optionally upload a logo and choose whether or not to display it to users.  Click **Next** to continue.

<call-out>

You can download the Twilio SendGrid logo from our brand assets page at https://sendgrid.com/resource/brand/.

</call-out>

![Okta Create Integration page]({{root_url}}/img/okta-new-integration-general-settings.png "Create Integration")

5. You will now begin adding the values listed in the prerequisites of this guide to the fields in the Okta **Configure SAML** form.

### Okta SAML settings

**SAML Settings**
- **Single Sign on URL**: The Single Sign-on URL provided by the Twilio SendGrid App.
   - **Use this for Recipient URL and Destination URL**: Leave this box checked.
   - **Allow this app to request other SSO URLs**: Leave this box unchecked.
- **Audience URI (SP Entity ID)**: The Audience URI (SP Entity ID) provided by the Twilio SendGrid App.
- **Default RelayState**: Leave this field blank.
- **Name ID format**: Leave this field set to, **Unspecified**. If you are using an IdP other than Okta, you may need to set this to "emailAddress."
- **Application username**: Select, **Email**.

**Attribute Statements(optional)**
- **Name**, **Name format**, **Value**: Leave these fields blank.

**Group Attribute Statements (optional)**
- Leave this section blank.

6. Select **Next** at the end of the **Configure SAML form**.

![Okta Create SAML Integration settings page]({{root_url}}/img/okta-saml-settings.png "Create SAML Integration settings")

7. You will now be able to select whether you are a customer or partner on the next page. You should select **I'm an Okta customer adding an internal app**. Then select **Finish**.
8. A new page will load displaying the **Sign On** tab for your application. In this tab, you should see a message stating that "SAML 2.0 is not configured until you complete the setup instructions." Click on **View Setup Instructions**.

![Okta View Setup Instructions]({{root_url}}/img/okta-view-setup-instructions.png "View Setup Instructions")

9. A new tab will open with the information required by the Twilio SendGrid App to complete SAML setup. See "IdP settings" in the [Twilio SendGrid SAML SSO documentation]({{root_url}}/ui/account-and-settings/sso/#idp-settings) for instructions on adding this information to the Twilio SendGrid App.

## Edit your existing Twilio SendGrid application in Okta

Once you have added Twilio SendGrid to Okta, you may need to modify the integration.

1. To edit an existing integration, navigate to **Applications** > **Applications**. Select the Twilio SendGrid application from the list of active applications.
2. The Twilio SendGrid integration will load. You can modify your **App Settings** or retrieve the values required to integrate with Twilio SendGrid from the **General** tab.
3. You can add or remove users from the application using the **Assignments** tab.

![Okta Applications menu with the "General" tab open]({{root_url}}/img/sso_okta_edit_integration.png "Okta Applications Genral tab")

## Adding users to your Okta Application

Once you complete your Okta configuration in the Twilio SendGrid App, you will be able to manage your users.

1. To assign a user to the Twilio SendGrid Application in Okta, navigate to **Applications** > **Applications** in the Okta Admin interface.
2. You will see a list of your active applications. From the action menu beside your Twilio SendGrid application, select **Assign to Users**.

![Okta action menu, assing to users]({{root_url}}/img/okta-assing-to-users-modal.png "Assign to Users")

3. A modal will load where you can search for and assign users to the application. These users' email addresses should match the email addresses assigned to them as SSO Teammates in the Twilio SendGrid App.

## Completing setup with Twilio SendGrid

To further manage users, remove an IdP integration, or make other changes to your integration, please return to the [main Twilio SendGrid SAML SSO documentation]({{root_url}}/ui/account-and-settings/sso/) for next steps.

## Additional Resources

Okta provides its own developer documentation, which may be helpful depending on your integration needs.

- [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/create-your-app/)
