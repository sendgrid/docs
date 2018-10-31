---
layout: page
weight: 0
title: DMARC
navigation:
  show: false
seo:
  title: DMARC 
  override: true
---

## 	What is DMARC?
 	
Ever received an email message that claimed to be from a company or a brand, and clearly wasn’t? This “phishy” behavior is often the result of domain spoofing, and is likely the work of someone trying to phish personal details of the messages’ recipients. Current email infrastructure standards aren’t perfect, and can sometimes be exploited. So how do you protect your own domain or brand from being spoofed in this way?  

Enter DMARC, "Domain-based Message Authentication, Reporting & Conformance". Which was created to tell a participating receiving server what to do with a message that fails both SPF and DKIM validation. In other words, what to do if a message claims to be from you, but isn't.

## 	How do I implement DMARC?
 	
Deploying DMARC for your email systems is a powerful way to help prevent malicious entities from potentially spoofing or otherwise tarnishing your good name. DMARC isn't for everyone, if you own a small domain, you're probably ok without it. If you have ever had problems with phishing in the past, or have a business that is financial oriented in nature, It might be right for you. 

DMARC, in conjunction with a dedicated IP (included in Pro or higher accounts) is a great start to getting industry-supported piece of mind. The DMARC aggregate and forensic reports are designed to be machine readable, and can be difficult for humans to make sense of. You will also need to utilize a DMARC report monitoring service to collect the reports and present the information in a meaningful way that leads to actionable insights. 
Return Path's Brand Monitor is one, and Agari is another.

*To set up DMARC:*

1. Deploy DKIM & SPF by setting up reverse DNS on your SendGrid IP.
2. Ensure proper DKIM and SPF signing for your authenticated domain.
3. Publish a DMARC record with your DNS registrar, then monitor the results.
4. Analyze the feedback you receive, and adjust your mail streams as needed.
5. Escalate your DMARC policy tags from 'p=none' to 'p=quarantine' to 'p=reject' as you gain experience. 


## 1. Deploy DKIM & SPF by setting up reverse DNS for your SendGrid IP

Start by completing reverse DNS for your SendGrid IP. This ensures that emails sent through your SendGrid account will be properly signed using DKIM and SPF for your unique domain. 
For more information on reverse DNS, 

## 2. Ensure proper DKIM and SPF signing for your authenticated domain

Send yourself some test emails if you're unsure of this step. You're looking to verify that the DKIM and SPF signatures in your email headers align to your authenticated domain.

 ![](https://lh4.googleusercontent.com/kjZ6aO15x8UB3TcHG6X6N3G78rm601i7L6knyLCxw2Ujg4lFNpbG_5DrNK1wHYB6cZ27sIFb87q3rF8wx3xitTJxWQAdtOHqkAlS8CdyoIydj3gKY9w)  

As long as both are passing, you’re in business!

## 3. Publish a DMARC record with your DNS registrar, then monitor the results

Within your DNS registrar, you'll need to create a TXT resource record that receivers can use to determine your DMARC preferences. This is done within the DNS registrar of the domain host, likely the same place you created the DNS records while authenticating it. This record is made at the root level for the domain, not the subdomain.

![](https://lh6.googleusercontent.com/d9Cpjrw0_rW_s9KuXTYdfQNISzwOTFTunaDbkHU5frW7se-a3nsEkR2MkTIBGdUF8i6IhOCF88jLF0zGrjajwy2iIxcTdJ6ptxX4avQLsXYeThW_MhI)

 
 ### 	A simple DMARC record
 	
    “v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc.rua@customddomain.com”

The record explained:  
**v** =DMARC1;  - Version - It is set to use DMARC version 1, there are no other versions at present. So always set 1.

**pct** =100;  - Percent - Assess 100% of messages claiming to be from the domain, this can be any number between 1 and 100.

**p** =quarantine **;**   - Policy - Tell receiver to QUARANTINE unqualified mail, which generally means “send this directly to the spam folder”.

**rua** = [mailto:example@example.com](mailto:postmaster@whitelabeldomain.com) Reporting URI of aggregate reports - Send aggregate reports to dmarc.rua [@customdomain.com](mailto:postmaster@whitelabeldomain.com), set this to an email address you control that is closely monitored.

<call-out>

This example uses the p=quarantine policy, but always start out using the p=none policy at first.

</call-out>

### Policies

This is where the magic happens. The policy you select in your DMARC record will tell the participating recipient mail server what to do with mail that doesn’t pass SPF and DKIM, but claims to be from your domain that contains the DMARC record. There are 3 records you can set: p=none, p=quarantine, and p=reject. 

**p=none** - Tell the receiver to perform no actions against unqualified mail, but still send email reports to the mailto: in the DMARC record for any infractions. 

**p=quarantine** - Tell receiver to quarantine unqualified mail, which generally means “send this directly to the spam folder”. 

**p=reject** - Tell the receiver to completely deny any unqualified mail for the domain. With this enabled, only mail that is verified as 100% being signed by your domain will even have a chance at the inbox. Any mail that does not pass is blackholed, not bounced, so there’s no way to catch false positives.

## 4. Analyze the feedback you receive and adjust your mail streams as needed

If unqualified mail gets sent to, and received by, recipients participating in DMARC, the recipient will generate reports for these messages and send them back to the mailto: address specified in your DMARC record. These reports will give you the information required to help you evaluate and tune your mail streams with the end goal of determining exactly what services might be sending mail on behalf of your domain. 

Here is a sample report with only one record, showing the results for 2 pieces of mail. 
Please note that the listed SPF and DKIM auth\_results are raw results, regardless of the s= alignment. 
The filename is formatted as: filename = receiver "!" policy-domain "!" begin-timestamp "!" end-timestamp "." extension

Example: receiver.org!sender.com!1335571200!1335657599.zip

    <?xml version="1.0" encoding="UTF-8" ?><feedback>  <report_metadata>    <org_name>receiver.com</org_name>    <email>noreply-dmarc-support@receiver.com</email>    <extra_contact_info>http://receiver.com/dmarc/support</extra_contact_info>    <report_id>9391651994964116463</report_id>    <date_range>      <begin>1335571200</begin>      <end>1335657599</end>    </date_range>  </report_metadata>  <policy_published>    <domain>sender.com</domain>    <adkim>r</adkim>    <aspf>r</aspf>    <p>none</p>    <sp>none</sp>    <pct>100</pct>  </policy_published>  <record>    <row>      <source_ip>72.150.241.94</source_ip>      <count>2</count>      <policy_evaluated>        <disposition>none</disposition>        <dkim>fail</dkim>        <spf>pass</spf>      </policy_evaluated>    </row>    <identifiers>      <header_from>sender.com</header_from>    </identifiers>    <auth_results>      <dkim>        <domain>sender.com</domain>        <result>fail</result>        <human_result></human_result>      </dkim>      <dkim>        <domain>sender.net</domain>        <result>pass</result>        <human_result></human_result>      </dkim>      <spf>        <domain>sender.com</domain>        <result>pass</result>      </spf>    </auth_results>  </record></feedback>

<call-out>

 Aggregate reports are sent as a ZIP attachment, so be sure the address you’re defining is able to accept attachments in this file type.

 </call-out>

## 5. Escalate your DMARC policy tags from p=none to p=quarantine to p=reject as you gain experience

Now that you’ve tested and tweaked your mail streams to determine exactly who and what is sending mail for your domain, it’s time to turn it up a notch. 

Up until now you should have only been using the p=none policy to get reports of any errant behavior, and you should have a good idea of where email is coming from. The next step is to adjust the policy on your DMARC record to start controlling how receivers handle mail claiming to be from your domain.

**p=none** - Get reports of infractions, but no action is taken by recipients as far as processing the messages themselves. 

**p=quarantine** - Unqualified mail goes directly to spam, but can be recovered. This is useful when you’re fairly certain you know all the locations where mail is coming from, but want to ‘softfail’ any messages that are unqualified until you’re 100% sure. 

**p=reject** - When you’re absolutely sure you know every server and service that is sending email for your domain, signing is in place for each of these services and you want anything with the audacity to claim otherwise completely denied. Unqualified mail is completely deleted by the recipient mail server, never to be seen again. 

## 	Additional resources
 	
- [Frequently Asked Questions](http://dmarc.org/faq.html)  
- [DMARC Specification](http://dmarc.org/specification.html) 
- [What is DMARC?](http://sendgrid.com/blog/what-is-dmarc-and-why-should-you-care/) 
- [SPF Syntax](http://www.openspf.org/SPF_Record_Syntax)
- [Returnpath](http://www.returnpath.com/solution-content/dmarc-support/)
- [Agari](http://www.openspf.org/SPF_Record_Syntax)  
- [SPF record validator](http://www.kitterman.com/spf/validate.html)  
- [DMARC record validator](http://kitterman.com/dmarc/assistant.html)
