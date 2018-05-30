---
seo:
  title: Creating & Whitelabeling A Subuser To A New Sending Domain
  description: Creating & Whitelabeling A Subuser To A New Sending Domain
  keywords: subuser, subaccount, whitelabel, dns, IP, account, domain
title: Creating & Whitelabeling A Subuser To A New Sending Domain
weight: 0
layout: page
zendesk_id: 200181928
navigation:
  show: true
---

This article outlines how to create a new Subuser and how to Whitelabel that Subuser to a new sending domain. In order to Whitelabel a new Subuser to a new sending domain, you must have already purchased a new sending IP from SendGrid. **An IP can be Whitelabeled to only one sending domain**. If you need to send mail on behalf of several domains, you need to purchase an IP for each of these domains. Additional IPs will cost $30.00 USD per month/per IP charge, but can be added as needed. Please [contact support](https://support.sendgrid.com) to purchase a new sending IP. 

 

Once you have your new IP you are ready to create the Subuser and Whitelabel the Subuser to the new sending domain. First you need to navigate to the [Subuser Management Page](https://app.sendgrid.com/settings/subusers) where you can view current Subusers and create new Subusers. Towards the top of the page, select to create a New Subuser.

**Note:** The Subuser creation process must be completed in a single go, including the validation of all DNS records. If you exit the Subuser creation process or log out of your account, you need to go through all steps in order to get back to where you were. Accounts are not created until Step 6 so you can use the same username and information when going back through the Wizard.

 

**Step 1 - Subuser Information:**  Enter all account information for the new Subuser. Ensure the Email Address you enter is a valid address that is checked periodically. This is the address used if there is ever a need for us to get in touch with you.

 

**Step 2 - IP Selection:** Select the new, Unwhitelabeled IP you just purchased on this page. The 'In Use' column reads 'No' for the new IP you just purchased. If you select the parent account IP or any other previously Whitelabeled IP, you will overwrite the existing rDNS on that other IP. If you are unsure which IP to use, feel free to contact our Support team. 

 

**Step 3 - Quick Setup:** You are given the option to create a new whitelabel entry or to keep the parent account Whitelabel. Select the option to 'create a new whitelabel entry'.

** **

**Step 4 - Quick Setup:** Enter the new domain you need to send mail out from and then enter the Privacy Policy URL for that domain. Just enter the root domain, i.e. sendgrid.com, rather than a full URL such as [http://www.sendgrid.com](http://www.sendgrid.com)

 

**Step 5 - DNS Validation:**  You are now provided with all the DNS changes necessary to Whitelabel the new sending domain. You do need to create a subdomain and add all DNS records to the new domain. Our system defaults with 'email' as the subdomain but you can change this to anything you need. Do not overwrite or delete any existing records in order to add these new records. Once all the records are up, use the Validate and Confirm button to see if the records have propagated yet. You are not allowed past this page until all records can be found by our system. If you feel the records are up and our system cannot locate them, please contact the SendGrid Support Team and be ready to provide us with a screenshot.

For more info, check out our [Whitelabel Wizard](http://sendgrid.com/docs/VidGrid/Whitelabel/whitelabel.html) documentation. 

 

**Step 6 - Confirm Settings:**  Congratulations! Once you reach this page all information is correct and you need only click the final Confirm button to create your Subuser which is Whitelabeled to a new sending domain.

 

Please follow [SendGrid's IP Warmup Guide](http://sendgrid.com/docs/User_Guide/warming_up.html) in order to help this new IP establish its sending reputation which determines your deliverability.

