---
layout: page
weight: 55
title: Email Address Validation
group: managing-contacts
navigation:
  show: true
seo:
  title: Email Address Validation
  keywords: email, validation, signup
  override: true
  description: Twilio SendGrid's real-time Email Address Validation provides you detailed information on the validity of your users' email addresses, as well as allows you to integrate this validation process into your signup process. 

---
Email Address Validation provides real-time detailed information on the validity of email addresses. You can integrate this validation process into your platform's signup form and customize the best use of email address validation for your use case: - Identify a validation threshold from which you feel comfortable sending a follow up email
- Display to your form visitors that their email addresses are likely invalid within your form
- Decide if you want to drop invalid email addresses from your database.

Validating email addresses allows you to to suppress invalid email addresses from your sending, decreasing your bounce rate, cleaning your subscriber list, ultimately improving your sender reputation.

## Generating your Email Validation API Key

Before you can call the Email Address Validation Real Time API endpoint, you’ll need an API key with Email Address Validation permissions.
 
<call-out>

You are required to create a brand new API key that will only be used for Email Address Validation. The Email Validation dashboard will appear in the SendGrid UI for the user that creates the Email Validation API Key. 

</call-out>

1. Navigate to **Settings**, and then select **API Keys**. Click **Create API Key** in the upper right-hand corner.
1. Name your new key and select the **Email Address Validation Access** permission.
1. Select **Full Access** to the left of **Validation**.

![]({{root_url}}/img/create-api-key.png "API Key Access Permissions List")

<call-out>

“Email Address Validation Access” will be visible to Email API Pro and Premier plans only.

</call-out>

4. Click **Create & View**.
5. Copy your new API key somewhere safe. **This will be the only time you will be able to see it in its entirety due to security reasons.**

You’re now ready to start using the [Real Time API endpoint!](https://sendgrid.api-docs.io/v3.0/email-address-validation/validate-an-email)  

## Recommendations Before Integrating

The Email Address Validation Real Time API Endpoint takes a single email address in a POST request, and returns a verdict with detailed data in a JSON response. Complete documentation of the endpoint, including details of the response, are available [here](https://sendgrid.api-docs.io/v3.0/email-address-validation/validate-an-email).

When integrating with the Email Validation API endpoint, please keep the following things in mind:

- Do not call the API endpoint from client side code such as Javascript. Doing so would allow anyone to find your API key and use it to validate their own email addresses on your account. You should instead call the API from backend code, for instance, after the user submits a form.
- The API currently accepts one email address at a time. If for some reason you have multiple addresses you need to validate, please call the API once per email address. We do not currently have a batch API.
- If you choose to integrate into a signup form we recommend ensuring the Email Validation API is not a blocker for your form submissions. 
- The API endpoint is rate limited to 600 requests per minute.

The "Source" gets passed through the API call as an optional field to identify the source if you choose to integrate with multiple email address captures and want to be able to compare their results. You pass it as a string, only using alphanumeric characters and spaces. For example:

```
{
  "email": "email@example.com",
  "source": "Newsletter Signup"
}
```

The API response should look something like this, using the example email "cedric.fogowl@gmail.com":


```
{"result":{"email":"cedric.fogowl@gmail.com",
"verdict":"Valid","score":0.98015,
"local":"cedric.fogowl","host":"gmail.com",
"checks":{"domain":{"has_valid_address_syntax":true,
"has_mx_or_a_record":true,"is_suspected_disposable_address":false},
"local_part":{"is_suspected_role_address":false},
"additional":{"has_known_bounces":false,
"has_suspected_bounces":false}},"ip_address":"65.101.243.157"}}
```

### Options for Integration

The Email Validation API allows flexibility for integrating in multiple ways, but for simplicity we'll focus on validating emails in a signup form. A signup form is anywhere you are capturing email addresses. This could be a lead capture signup form like requesting a content piece or an account signup. 

Once you identify the signup form you want to integrate with the Email Validation API, next you need to decide if you want to use validation results to surface possible typos to form visitors while they're still in the form or capture the results after the form submission to inform sending decisions. 

The first option is to provide user feedback by returning to the sign up form and showing an inline error, letting the user know that they need to check the email address. For instance, you might realize the user made a typo as described in the previous section and decide to show an error like, “Did you mean john.doe@gmail.com?”

<call-out type="warning">

Be careful not to create a block in your sign up form if you provide user feedback. It’s possible that a user’s actual email address doesn’t meet your criteria for a good address, and will never be able to successfully submit your form. You should consider alerting the user only once, and then allowing the same address if they submit it again a second time.

</call-out>

The second option is to validate the email address after submission and not provide any user feedback. You can then use the Email Validation results to decide what email addresses you feel comfortable sending email to.

Depending on your business needs and how you prefer to integrate, both of these approaches are great options. The upside of providing user feedback in the signup form is that you’ll catch visitor typos before they leave the form, however the downside is that you’ll still have some friction points in the signup form in the event that the address they provide doesn’t meet your criteria. The upside of dropping bad addresses in the backend is that you have a frictionless signup form, while the downside is you lose the opportunity to save contact with visitors who may have accidentally mistyped their email address.

### Email Validation Results

The API response you receive after calling the API contains a lot of useful information that you can use to determine whether or not you want to accept or send to an email address. Below is a summary of the three most important fields you’ll want to look at:

- **Verdict**: This field will contain one of three categories: `“Valid”`, `“Risky”`, or `“Invalid”`. These are generic classifications based off of the detailed results. You could filter off of this field if you want to go off of our suggestion, but you could also look at more detailed information like the next 2 listed.

- **Score**: This number from 0 to 1 represents the likelihood the email address is valid, expressed as a percentage. So for instance, a score of 0.96 could be interpreted as a 96% likelihood the email is valid. If you want finer grained control than the generic categories of the `“result”` field, you could set a threshold based off this score.

- **Checks**: This field will contain a list of all the checks that ran on the email address. You could use these results to determine if you want to take a calculated risk in sending to an address. For instance, an email address that is a role address (e.g. admin@examplecompany.com) will come back with a `“Risky”` result and a score of 50%. A disposable email address from mailinator.com would also come back with a `“Risky”` result and a score of 50%. You might decide that you only want to send to email addresses with a score of 80% or higher, but are also OK with sending to addresses that are disposable (and therefore have a score of 50%). You could use this field to gain the info you need to filter at that level. Here are a list of all the checks and what they mean:

    - ``has_valid_address_syntax`` - If true, then the address is a properly formatted email address (e.g. it has an @ sign and a top level domain). If false, then it’s a malformed address.
    - ``has_mx_or_a_record`` - If true, the domain on the address has all the necessary DNS records to deliver a message somewhere. If false, the domain is missing the required DNS records and will result in a bounce if delivered to.
    - ``is_suspected_disposable_address`` - If true, the domain part of the email address appears to be from a disposable email address service, in which the addresses are only good for a short period of time.
    - ``is_suspected_role_address`` - If true, the local part of the email address (before the @ sign) appears to be a group email address such as “hr” or “admin”.
    - ``has_known_bounces`` - If true, the email address has previously been sent to through your SendGrid account and has resulted in a bounce.
    - ``has_suspected_bounces`` - If true, our machine learning model suspects that the email address might bounce.

You can use any combination of these fields to filter down to what you consider a good address.

## Suggestions for domain typos

The Email Validation Real Time API will check for typos in an email address in addition to evaluating its validity. If we detect a possible typo, you will find a `“suggestion”` field in the API response containing what we believe to be the correct domain. For instance, if you call the API with “john.doe@gmial.com”, the API response might look something like this:

``` 
{
  "result": {
    "email": "john.doe@gmial.com",
    "verdict": "Invalid",
    "score": 0.00089,
    "local": "john.doe",
    "host": "gmial.com",
    "suggestion": "gmail.com",
    "checks": {
      "domain": {
        "has_valid_address_syntax": true,
        "has_mx_or_a_record": true,
        "is_suspected_disposable_address": false
      },
      "local_part": {
        "is_suspected_role_address": false
      },
      "additional": {
        "has_known_bounces": false,
        "has_suspected_bounces": true
      } 
    },
    "ip_address": "123.45.67.89"
  }
}
```

In this response, the `“suggestion”` field is recommending “gmail.com” instead of “gmial.com.” With this info, you can combine the value in the “local” field with the value in the `“suggestion”` field to create the intended email address of “john.doe@gmail.com.”

## Email Validation API Dashboard

<call-out>

The Email Validation dashboard will only appear in the SendGrid UI for the user that creates the Email Validation API Key. 

</call-out>

The last way you can evaluate your validation results is in the [Email Validation API dashboard](https://app.sendgrid.com/email_validation) within the SendGrid UI. This Validation dashboard gives you access to all the validation results you’ve done in the past 30 days, and allows you to filter down to what you consider a good address. You can filter by the verdict result, the source the validation was performed at, as well as the score. 

![]({{root_url}}/img/email-address-validation-stats.png "Email Address Validation Statistics")

### Detailed validation results

You can select a specific email address within the Email Validation API dashboard in order to view the detailed validation results for that email address. 

![]({{root_url}}/img/validation-details.png "Validation Details")

### Exporting your results

Once you’ve filtered down to your desired list of results, you can click the **Export CSV** button to get a CSV list of your results. This can then be used to upload your good contacts and validation results to Marketing Campaigns, or your database or CRM of choice.

