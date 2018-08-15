---
seo:
  title: SendGrid account migration
  description: Sometimes if a SendGrid partner no longer supports SendGrid core functionality, you may want to migrate your account to a regular SendGrid account.
  keywords: migrate, partner sunset
title: SendGrid account migration
weight: 0
layout: page
navigation:
  show: true
---

If you are migrating from one SendGrid account to another, there are several things to keep in mind - make sure to stop sending mail until you migrate to a new, warmed up account, and make sure export data from your old account, and clean up the data described here so that you can import it into your new account.

Before you begin

- Pause sending email on your old account.
- Login to app.sendgrid.com with your current SendGrid username and password.

1. **Sender authentication** You cannot export and import sender authentication data - you need to set this up manually in your new account after you delete the current authentication records from your DNS. 

If you have domain, link, and IP authentication set up, remove 5 CNAME or MX/TXT records and 1 A record from your domain’s DNS. To verify the records, you need to delete from your DNS, go to Settings > Sender Authentication:

https://content.screencast.com/users/et1992/folders/Jing/media/8b5b8445-8d74-4d2f-8657-62236a56e94c/00000671.png

https://content.screencast.com/users/et1992/folders/Jing/media/c0b9dda7-bf0f-492e-9308-888cd1317b83/00000672.png

To set up sender authentication in your new account, check out [Setting up a domain whitelabel](), [Setting up reverse DNS](), and [Setting up link branding]().

2. **Migrate Unsubscribes** - To download your unsubscribes, on the Global unsubscribes page, select the action cog, and then click *Export CSV*.

To set up your unsubscribes in your new account, copy them into the UI by going to Global or Group Unsubscribes page, selecting the action cog and then adding them to the list. You can add them with the API by using the [Suppressions methods](https://sendgrid.api-docs.io/v3.0/suppressions-global-suppressions/add-recipient-addresses-to-the-global-suppression-group)

3. **Migrate templates** - From the Marketing Campaigns and the Transactional template's pages in the UI, export the HTML of any templates you want to migrate.

To add your templates in the new account, navigate to either the Marketing Campaigns or the Transactional templates page in the UI, create a new template, select to use the code editor, and paste the HTML of the exported template into the editor.

4. **Migrate Marketing Campaigns Contacts** - From the Marketing Campaigns contacts page, click into your [Global All Contacts](https://sendgrid.com/marketing_campaigns/ui/all_contacts) list. Then export a CSV of your contacts.

To upload your contacts into your new account, from the [Contacts page](https://sendgrid.com/marketing_campaigns/ui/contacts).

5. **Review existing API keys** - If you are using the SendGrid API, double check your accounts [list of API keys](https://app.sendgrid.com/settings/api_keys). API keys are not exportable, but it's good to make sure that you're aware of all of the existing API keys in your account so that you can create new ones to match in your new account and update your integrations with the new API keys.

6. **Delete teammates** - Teammate names have to be unique across SendGrid, so if you want to continue to use your teammate name, delete it from your original account to add it to your new account.

7. **Create new subusers** - If you are using subusers, navigate to the [subusers page](https://app.sendgrid.com/settings/subusers) in the UI and click *Export data* to download all of the information on your current subsuers.

To add subusers to your new account, go to the [subusers page](https://app.sendgrid.com/settings/subusers) in the UI, and click *Create a new subuser*. Use the data from the exported CSV to create a new subuser.

8. **Migrate dedicated IPs** - If you are using a dedicated IP, our support team can migrate your dedicated IP for you. Access support contact options by logging into https://support.sendgrid.com. Provide us with: your current and new usernames, the IPs addresses, and your preferred time for the IP transfer - we can migrate IPs between 7 am and 5 pm MST on Monday through Friday.

Be sure to set up reverse DNS and rewarm up your transferred IP before you start sending on it in your new account. You also need to reassign it to subusers.

9. **Download stats and email activity** - On all of the stats pages and on the email activity page, click *Export CSV* to download your stats for your records. Your new account cannot import this data.


