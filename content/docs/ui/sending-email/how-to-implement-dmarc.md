---
seo:
  title: How to Implement DMARC
  description: How to Implement DMARC
  keywords: security, secure, dmarc, spf, dkim, sender verification, wizard, rua, reject, quarantine
title: How to Implement DMARC
group: delivery-optimization
weight: 0
layout: page
navigation:
  show: true
---

Domain-based Message Authentication, Reporting and Conformance (DMARC) was created to tell a participating receiving email server what to do with a message that fails both [SPF]({{root_url}}/glossary/spf/) and [DKIM]({{root_url}}/glossary/dkim/) validation. In other words, what to do if a message claims to be from you, but isn't. If SPF, DKIM, and email validation are new concepts to you, see [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/) for a full explanation.

## Why you should deploy DMARC

Deploying DMARC for your email systems is a powerful way to help prevent malicious entities from potentially spoofing or otherwise tarnishing your reputation as a trustworthy email sender. DMARC isn't for everyone. If you own a small domain, you're probably OK without it. If you have ever had problems with phishing, or if you operate a finance-related business, implementing DMARC may be a good decision.

DMARC, in conjunction with a dedicated IP (included in Pro or higher accounts), is a great start to getting industry-supported peace of mind

## Reading DMARC reports

The DMARC aggregate and forensic reports are designed to be machine readable and can be difficult for humans to make sense of. You will also need to utilize a DMARC report monitoring service to collect the reports and present the information in a meaningful way that leads to actionable insights. [Return Path's Email Brand Monitor](https://www.validity.com/products/returnpath/) is one, and [Agari](https://www.agari.com/dmarc/) is another.

<call-out-link linktext="IMPLEMENTATION SERVICES" img="/img/expert-insights-promo1.png" link="https://sendgrid.com/solutions/email-implementation/">

### Do you want expert help to get your email program started on the right foot?

Save time and feel confident you are set up for long-term success with Email Implementation. Our experts will work as an extension of your team to ensure your email program is correctly set up and delivering value for your business.

</call-out-link>

## The 5 phases of implementation:

1. Deploy DKIM & SPF by setting up reverse DNS for your SendGrid IP.
2. Ensure proper DKIM and SPF signing for your authenticated domain.
3. Publish a DMARC record with your DNS registrar, then monitor the results.
4. Analyze the feedback you receive, and adjust your mail streams as needed.
5. Escalate your DMARC policy tags from `p=none` to `p=quarantine` to `p=reject` as you gain experience.

### 1. Deploy DKIM and SPF by setting up reverse DNS for your SendGrid IP

Start by setting up reverse DNS for your account. This ensures that emails sent through your SendGrid account will be properly signed using DKIM and SPF for your unique domain. For more information on completing this process, see [How to set up reverse DNS]({{root_url}}/ui/account-and-settings/how-to-set-up-reverse-dns/).

### 2. Ensure proper DKIM and SPF signing for your authenticated domain

Send yourself some test emails if you're unsure of this step. You're looking to verify that the DKIM and SPF signatures in your email headers align to the domain you've authenticated your SendGrid account with.

#### Examples of a passing DKIM and SPF check

![A passing SPF and DKIM check summary from the Twilio domain]({{root_url}}/img/dkim_spf_pass_1.png)
![A passing SPF and DKIM check in the headers of an email from the Twilio domain]({{root_url}}/img/dkim_spf_pass_2.png)

As long as both DKIM and SPF are passing, you’re in business!

### 3. Publish a DMARC record with your DNS registrar, then monitor the results

Within your DNS registrar, you'll need to create a TXT resource record that receivers can use to determine your DMARC preferences. This is done within the DNS registrar of the domain host—likely the same place you created the DNS records for the authenticated domain. This record is made at the root level for the domain, not the subdomain.

#### A simple DMARC record

    "v=DMARC1; p=none; pct=100; rua=mailto:dmarc.rua@customdomain.com"

For details about DMARC records, see the [DMARC Records]({{root_url}}/ui/sending-email/dmarc/#dmarc-records) section of [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/) where you'll find detailed explanations of every tag in a DMARC record.

<call-out>

Always start out using the `p=none` policy. You can move to `p=quarantine` or `p=reject` when you better understand your sending reputation.

</call-out>

### 4. Analyze the feedback you receive and adjust your mail streams as needed

If unqualified mail gets sent to, and received by, recipients participating in DMARC, the recipient will generate reports for these messages and send them back to the `mailto:` address specified in your DMARC record. These reports will give you the information required to evaluate and tune your mail streams, helping you determine exactly what services are sending mail on behalf of your domain.

Below is a sample report with only one record, showing the results for 2 pieces of mail.
Please note that the listed SPF and DKIM `auth_results` are raw results, regardless of the `s=` alignment. For help understanding all the tags in a DMARC record, see the [DMARC Records]({{root_url}}/ui/sending-email/dmarc/#dmarc-records) section of [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/).

<call-out>

The filename is formatted as:  
filename = receiver "!" policy-domain "!" begin-timestamp "!" end-timestamp "." extension

Example: receiver.org!sender.com!1335571200!1335657599.zip

</call-out>

#### Sample DMARC report

    <?xml version="1.0" encoding="UTF-8" ?>
    <feedback>
        <report_metadata>
            <org_name>receiver.com</org_name>
            <email>noreply-dmarc-support@receiver.com</email>
            <extra_contact_info>http://receiver.com/dmarc/support</extra_contact_info>
            <report_id>9391651994964116463</report_id>
            <date_range>
                <begin>1335571200</begin>
                <end>1335657599</end>
            </date_range>
        </report_metadata>
        <policy_published>
            <domain>sender.com</domain>
            <adkim>r</adkim>
            <aspf>r</aspf>
            <p>none</p>
            <sp>none</sp>
            <pct>100</pct>
        </policy_published>
        <record>
            <row>
                <source_ip>72.150.241.94</source_ip>
                <count>2</count>
                <policy_evaluated>
                    <disposition>none</disposition>
                    <dkim>fail</dkim>
                    <spf>pass</spf>
                </policy_evaluated>
            </row>
            <identifiers>
                <header_from>sender.com</header_from>
            </identifiers>
            <auth_results>
                <dkim>
                    <domain>sender.com</domain>
                    <result>fail</result>
                    <human_result></human_result>
                </dkim>
                <dkim>
                    <domain>sender.net</domain>
                    <result>pass</result>
                    <human_result></human_result>
                </dkim>
                <spf>
                    <domain>sender.com</domain>
                    <result>pass</result>
                </spf>
            </auth_results>
        </record>
    </feedback>

<call-out>

Aggregate reports are sent as a ZIP attachment, so be sure the address you’re defining is able to accept attachments in this file type.

</call-out>

### 5. Escalate your DMARC policy tags from `p=none` to `p=quarantine` to `p=reject` as you gain experience

Now that you’ve tested and tweaked your mail streams to determine exactly who and what is sending mail for your domain, you can adjust your policy setting.

Until now you should have been using the `p=none` policy to get reports of any errant behavior, and you should have a good idea of where email is coming from. The next step is to adjust the policy on your DMARC record to start controlling how receivers handle email claiming to be from your domain.

**p=none** - Get reports of infractions, but no action is taken by recipients as far as processing the messages themselves.

**p=quarantine** - Unqualified mail goes directly to spam, but can be recovered. This is useful when you’re fairly certain you know all the locations where mail is coming from but want to "softfail" any messages that are unqualified until you’re 100% sure.

**p=reject** - Unqualified mail is completely deleted by the recipient mail server, never to be seen again. Use this setting when you’re absolutely sure you know every server and service that is sending email for your domain, signing is in place for each of these services, and you want any service claiming otherwise to be completely denied

<call-out>

Get started on the right foot. Be confident that your account is optimized and set up for success now and as your email program continues to grow with [SendGrid Onboarding Services](https://sendgrid.com/marketing/onboarding-services-request/?utm_source=docs).

</call-out>

## Additional Resources

- [Everything about DMARC]({{root_url}}/ui/sending-email/dmarc/)
- [DMARC.org](https://dmarc.org/)
- [DMARC.org Frequently Asked Questions](https://dmarc.org/wiki/FAQ)
- [DMARC specification](https://dmarc.org/resources/specification/)
- [Returnpath quickstart download](https://returnpath.com/downloads/authenticating-email-dmarc-spf-dkim-quick-start-guide/)
- [Agari](https://www.agari.com/dmarc/)
- [SPF record validator](https://www.kitterman.com/spf/validate.html)
- [DMARC record validator](https://kitterman.com/dmarc/assistant.html)
