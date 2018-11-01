---
layout: page
weight: 10
title: Send Mime Messages With SendGrid
group: api-v3
navigation:
  show: true
---

## Sending MIME Mail
Some mailers, such as Apple Mail, place Multipurpose Internet Mail Extensions (MIME) into emails automatically which can cause our system to not parse the boundaries correctly. If you do notice a problem with the content from your email not rendering correctly, please do the following:

1)Log in to your SendGrid account, click Settings, then select Mail Settings. Select the arrow next Plain Content to expand the settings, and then place a check mark in the Don't Convert Plaintext to HTML option. Save this setting. To test the settings, send another email using your application and see if the content still cannot be rendered.

2) Some mail clients, such as Outlook and Thunderbird, appear to insert double spacing line breaks at every line. The reason is that the 'content-transfer-encoding' in MIME is set to 'quoted-printable' which adds Carriage Return Line Feed (CRLF) line breaks to the source content of the email which are characters interpreted by these mail clients. To alleviate this problem, please do the following:

a) If you can customize the MIME settings for your email, set the 'Content-Transfer-Encoding' to '7bit' instead of 'Quoted-Printable.'

b) Ensure that your content follows the line length limits.

3) Hard line breaks appear as CRLF characters in the source of an email with the character combination of " =0D" in the source of an email. This only happens with 'quoted-printable' (Content-Transfer-Encoding set in MIME) emails. Email clients such as Outlook and Thunderbird render these characters which results in additional breaks in the content of your emails.

4) The best possible MIME layout in your email when sending through SendGrid is as follows. It is best to reference files using separate links to download since it lowers the percentage of spam threshold for most domains you are sending to.

## Sending email with multiple content types (text+html)

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
