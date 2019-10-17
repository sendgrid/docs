---
layout: page
weight: 70
title: Senders
group: marketing-campaigns
navigation:
  show: true
seo:
  title: Senders
  override: true
  description: Manage your sender contact information
---

<iframe src="https://player.vimeo.com/video/366851411" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

##     Adding a Sender

You are required to include your contact information, including a physical mailing address, inside every promotional email you send in order to comply with the U.S. CAN-SPAM Act, CASL, and other anti-spam laws of the countries your recipients live in.

*To add a Sender:*

1. Navigate to **Marketing** and then click **Senders**.
1. In the top right corner of the Sender Management page, click **Create New Sender**.
1. Fill in all of the fields on the page and then click **Save**.

    * **From Name** - This is a user-friendly name that is displayed to your recipient when they receive their email.
    * **From Email Address** - This will display to the user as the email address who sent this email. We will send the verification email to the address you enter in this field. If you have not received your verification email after some time, please refer back to the Sender settings and confirm that the "From" email is a valid address. 
    * **Reply To** - If your user hits reply in their email, the reply will go to this address.
    * **Company Address, City, State, Zip Code, Country** - The address of your business. CAN-SPAM regulations require this information in every email you send.
    * **Nickname** - A label for your sender identity to help you identify it more quickly. This is not visible to your recipients.
<br></br>
1. Check the inbox of the email address that you entered and click the link in the email to verify the Sender email.

If, for any reason, you need to resend the verification email, click the action menu on the Sender Management page and select **Resend Verification**.

![]({{root_url}}/img/email-validation-clicking.gif "Clicking on the action menu and then selecting Resend Verification")

<call-out type="warning">

You must verify the email address associated with your sender identity before you can edit it or use it to schedule a Single Send or set an Automation.

</call-out>

<call-out>

You may create up to 100 unique senders.

</call-out>

<call-out>

If you have an [authenticated domain]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/) and your sender email address matches that domain exactly, your sender identity will be automatically verified.

</call-out>

<call-out type="warning">

Once you schedule a Single Send or set an Automation, you cannot delete the sender identity associated with the Single Send or Automation.

</call-out>

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">

### Do you want expert help to get your email program started on the right foot?


Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.

</call-out-link>

##     Adding Sender Information to a Single Send or Automation Email

Twilio SendGrid’s pre-built email templates come with an Unsubscribe module containing your Sender information by default. For templates or emails that you build yourself, you can insert your sender identity information into your campaigns using the following tags within your campaign or template content:

1. **{{sender_name}}** - The sender's name.

1. **{{sender_address}}** - The sender's street address.

1. **{{sender_city}}** - The sender's city.

1. **{{sender_state}}** - The sender's state.

1. **{{sender_zip}}** - The sender's zip.

1. **{{sender_country}}** - The sender's country.

*To add tags to your email:*

1. In the Design editor, navigate to the **Build** tab and drag a Text module into your campaign body. If you’re using the Code Editor, click the gear icon on the left to open the **Settings** bar.
1. Navigate to the **Tags** tab.
1. Select the copy icon next to the tag you want to add to your campaign.
1. Paste the tag into your text module.

To show your sender's full address and information in the footer of the email, Twilio SendGrid recommends adding the tags as shown:

```
{{Sender_Name}}

{{Sender_Address}}

{{Sender_City}}

{{Sender_State}

{{Sender_Zip}}
```

When successfully completed, your tags should change as shown below when your email enters your recipient’s mailbox.


![]({{root_url}}/img/sender-tag-comparison.png "Alt text")

## Additional Resources

- [How to set up domain authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Troubleshooting Sender Authentication]({{root_url}}/ui/account-and-settings/troubleshooting-sender-authentication/)
- [Custom Fields]({{root_url}}/ui/managing-contacts/custom-fields/)
