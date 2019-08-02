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
<call-out type="warning">

Email Validation is currently in beta. During beta, any participants with pro or premiere accounts will have access to this feature. Functionality is subject to change, and performance will change as we continue working to better improve it.

</call-out>

Email Address Validation provides you real-time detailed information on the validity of your users' email addresses, as well as allows you to integrate this validation process into your platform's signup form. You can customize how strict your validation threshold is, as well as whether or not you want to inform your users that their email addresses are invalid, or if you want to drop their email address from your database. 

Validating your users' email addresses so that you are sending to more valid email addresses will allow you to maintain a cleaner subscriber list and improve your sender reputation.

## Generating your Email Address Validation API Key

Before you can call the Email Address Validation Real Time API endpoint, you’ll need an API key with Email Address Validation permissions.
 
<call-out>

You are required to create a brand new API key that will only be used for Email Address Validation. Please do not re-use an existing API key with Email Validation.

</call-out>

1. Navigate to **Settings**, and then select **API Keys**. Click **Create API Key** in the upper right-hand corner.
1. Name your new key and select the **Email Address Validation Access** permission.
1. Select **Full Access** to the left of **Validation**.

![]({{root_url}}/img/create-api-key.png "API Key Access Permissions List")

<call-out>

If you do not see “Email Address Validation Access” listed in your list, please reach back out to us so that we can ensure your account is in the beta.

</call-out>

4. Click **Create & View**.
5. Copy your new API key somewhere safe. **This will be the only time you will be able to see it in its entirety due to security reasons.**

You’re now ready to start using the Real Time API endpoint!  

## Using the Real Time API Endpoint

The Email Address Validation Real Time API Endpoint takes a single email address in a POST request, and returns a verdict with detailed data in a JSON response. Complete documentation of the endpoint, including details of the response, are available [here](https://sendgrid-email-validation.api-docs.io/v3/getting-started/authentication).

*When integrating with the Real Time API endpoint, please keep the following things in mind*:

- Do not call the API endpoint from client side code such as Javascript. Doing so would allow anyone to find your API key and use it to validate their own email addresses on your account. You should instead call the API from backend code, for instance, after the user submits a form.
- The API currently accepts one email address at a time. If for some reason you have multiple addresses you need to validate, please call the API once per email address.
- The API endpoint is rate limited to 600 requests per minute. Please let us know if this rate limit is too restrictive for your needs as we evaluate it during the beta period.

The "Source" gets passed through the API call as an optional field. You pass it as a string, only using alphanumeric characters and spaces. For example:

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

## Integration suggestions

While the API allows flexibility for integrating in multiple ways, this section describes a recommended approach for validating emails in a sign up form. This could be a sign up form for subscribing to a newsletter, or for signing up for an account with your service. Some websites require visitors to enter their email address in twice, but with Twilio SendGrid’s Email Validation API, you can require that they only enter it in *once*, reducing friction points while also validating user input.

### When to call the API

Call the API in your backend code, most commonly after the user submits the form. You could also call your backend to validate an email address right after a user types in their email, but the most important thing is that the API call is made in your backend code, thereby protecting your API key from prying eyes.

### Evaluating an email address verdict

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

### Checking for domain typos

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

### Providing user feedback vs. dropping bad email addresses

After you call the API and evaluate the results as described in the previous section, you’ll eventually come to a point where you have an email address that you consider “bad” and now have to decide how to handle it.

The first option is to provide user feedback by returning to the sign up form and showing an error screen, letting the user know that they need to check the email address. For instance, you might realize the user made a typo as described in the previous section and decide to show an error like, “Did you mean john.doe@gmail.com?”

<call-out type="warning">

Be careful not to create a block in your sign up form if you provide user feedback. It’s possible that a user’s actual email address doesn’t meet your criteria for a good address, and will never be able to successfully submit your form. You should consider alerting the user only once, and then allowing the same address if they submit it again a second time.

</call-out>

The second option is to validate the email address after submission and not provide any user feedback. In the event that an email address meets your “bad” criteria, you would instead just drop the email address and accept that you will not be sending future emails to that user.

Depending on your business needs and how much integration work you are able to do, both of these approaches are valid. The upside of providing user feedback is that you’ll probably have more users with “good” email addresses, however the downside is you’ll still have some friction points in the sign up form in the event that the address they provide doesn’t meet your criteria. The upside of dropping bad addresses in the backend is that you have a frictionless sign up form, while the downside is you could end up with fewer users with “good” email addresses.

## Deferring result judgment to UI for faster integration

The last way you can evaluate your validation results is to defer any decisions to later, allowing for a faster integration. In the next section, you’ll learn about the reporting UI available in the Twilio SendGrid UI. This UI gives you access to all the validation results you’ve done in the past 30 days, and allows you to filter down to what you consider a good address. With that in mind, you can integrate fast by simply calling the real time API with an email address and ignore the response. Sometime later, you can go into the UI and find what you consider a good email address, and export your results to your CRM. 

### The reporting UI

Twilio SendGrid will store the results of every email address you validate for 30 days, and can be viewed [in your SendGrid account](https://app.sendgrid.com/email_validation).

![]({{root_url}}/img/email-address-validation-stats.png "Email Address Validation Statistics")

### Filtering your results

The reporting UI provides a set of filters that can help you drill down to what you consider a good or a bad address. You can filter by the verdict result, the source the validation was performed at, as well as the score.

![]({{root_url}}/img/validation-details.png "Validation Details")

### Exporting your results

Once you’ve filtered down to your desired list of results, you can click the **Export CSV** button to get a CSV list of your results. This can then be used to upload your good contacts to Marketing Campaigns, or your CRM of choice.

