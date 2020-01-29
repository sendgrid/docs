---
layout: page
weight: 10
title: Send Mime Messages With SendGrid
group: api-v3
navigation:
  show: true
---

## Sending MIME Mail

Some mail clients, such as Outlook and Thunderbird, appear to insert double spacing line breaks at every line. The reason is that those mail clients set the 'content-transfer-encoding' in MIME to 'quoted-printable' which adds Carriage Return Line Feed (CRLF) line breaks to the source content of the email which are characters interpreted by these mail clients. To alleviate this problem, please do the following:

1. If you can customize the MIME settings for your email, set the 'Content-Transfer-Encoding' to '7bit' instead of 'Quoted-Printable.'
1. Ensure that your content follows the line length limits.
1. Line breaks appear as CRLF characters in the source of an email with the character combination of " =0D" in the source of an email. These characters appear only with 'quoted-printable' (Content-Transfer-Encoding set in MIME) emails. Email clients such as Outlook and Thunderbird render these characters which resulting in additional breaks in the content of your emails.

Use the MIME layout in your email below when sending through SendGrid. It is best to reference files using separate links to download since it lowers the percentage of spam threshold for most domains you are sending to.

## Sending email with multiple content types (text+html)

``` language
email = SendGrid::Mail.new

email.from = SendGrid::Email.new(email: 'team@email.com')

email.subject = "App - Reset Password"

per = SendGrid::Personalization.new

per.to = SendGrid::Email.new(email: user.email, name: user.name)

per.substitutions = SendGrid::Substitution.new(key: "user_name", value: user.name.split(" ")[0].capitalize)

per.substitutions = SendGrid::Substitution.new(key: "reset_link", value: some_func(token, email: user.email))

email.personalizations = per

email.contents = Content.new(type: 'text/html', value: 'test')

email.contents = SendGrid::Content.new(type: 'text/plain', value: "Hi #{user.name}.. Click the following link to reset your password.. #{function_reset(token, email: user.email)}... This link will expire in two hours.. If you did not request your password to be reset, please ignore this email and your password will stay as it is.")

email.template_id = "6ede18bb-2eba-4958-8a57-43a58a559a0a"

response = @@sg.client.mail._('send').post(request_body: email.to_json)

puts response.status_code

puts response.body

puts response.headers
```
