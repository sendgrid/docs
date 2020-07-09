---
layout: page
title: Single Sender Verification
group: sending-email
navigation:
  show: false
seo:
  title: Single Sender Verification
  override: true
  description: Understanding the difference between Domain Authentication and verifying a Single Sender.
---

<call-out>

The information on this page applies to new Free Trial, Essentials 40K, and Essentials 100K customers. If you received account access before April 6, 2020, you can disregard the information below.

</call-out>

To protect your sending reputation and to uphold legitimate sending behavior, we require customers to verify their Sender Identities. This article will walk you through all the necessary steps to verify a Single Sender, one of two methods of verifying a [Sender Identity]({{root_url}}/for-developers/sending-email/sender-identity/).

### Adding a Sender

1. Under Settings in the navigation bar, click **Sender Authentication**.
2. Proceed with **Single Sender Verification** by selecting **Get Started** under **Verify an Address**.

![Sender Auth Page]({{root_url}}/img/sender-verification-sender-auth-page.png 'Sender Auth Page')

3. You will be taken to the **Single Sender Verification** page. Under **Create your First Sender**, click **Create New Sender** to load a form modal.

![Sender Management]({{root_url}}/img/sender-verification-sender-management-page.png 'Sender Management')

![Create New Sender]({{root_url}}/img/sender-verification-form-modal.png 'Create New Sender')

4. Fill in all of the fields in the form modal and then click **Create**.

#### Form Fields

- **From Name** - This is a user-friendly name that is displayed to your recipient when they receive their email.
- **From Email Address** - This will display to the user as the email address that sent this email. We will send the verification email to the address you enter in this field. If you have not received your verification email after some time, please refer back to the Sender settings and confirm that the "From" email is a valid address.
- **Reply To** - If your user hits reply in their email, the reply will go to this address.
- **Company Address**, **City**, **State**, **Zip Code**, **Country** - Your business address.
- **Nickname** - A label for your sender identity to help you identify it more quickly. This label is not visible to your recipients.

<call-out>

When filling the "From Email Address" field, you may notice a warning when entering an address at `yahoo.com`, `aol.com`, `gmail.com`, and some other domains. This warning indicates you should not use the address as your verified Single Sender because your messages will likely fail a DMARC check. For more details, see our comprehensive [DMARC page]({{root_url}}/ui/sending-email/dmarc/).

</call-out>

5. Check the inbox of the email address that you entered and click the link in the email to verify the Sender address.

If, for any reason, you need to resend the verification email, click the action menu on the **Single Sender Verification** page and select **Resend Verification**. We will deliver a new confirmation email to the address you are attempting to verify.

![Resend Verification]({{root_url}}/img/sender-verification-resend-verification.png 'Resend Verification')

<call-out>

If you have an [authenticated domain]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) and your sender email address matches that domain exactly, your sender identity will be verified automatically.

</call-out>

You will now see a page confirming the verification of your address. Click **Return to Single Sender Verification** to add more addresses or make any changes to the address you just verified. Congratulations, you are now ready to send email with SendGrid.

![Sender Verified]({{root_url}}/img/sender-verification-sender-verified-page.png 'Sender Verified')
