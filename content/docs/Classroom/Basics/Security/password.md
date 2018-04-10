---
seo:
  title: Passwords
  description: Setting up secure passwords is essential to protect your account and your business.
  keywords: global settings, SendGrid account settings, passwords, password requirements
title: Passwords
weight: 0
layout: page
navigation:
  show: true
---

Passwords are the keys that get you entry into so many things, including SendGrid. As an attack vector, bad actors may try to take advantage of your passwords in order to get vital information about you or your customers. We’ve created a couple of tips on how to create and manage your passwords to protect yourself both on and off the 'Grid.

{% anchor h2 %}
SendGrid Password Minimum Requirements
{% endanchor %}

The minimum password criterium that your SendGrid password must meet include:

* 8 to 128 characters
* At least one number and one letter

Remember, these are *minimum requirements*. We also encourage users to create longer  passwords with both uppercase and lowercase characters, numbers, and special characters. Please keep reading for information on how to make your password more secure.

{% anchor h2 %}
Create a Secure Password
{% endanchor %}

**Do:**

* Passwords should have a minimum of 8 characters: with the full set of allowed printable characters and an 8 character password, there are 645 trillion combinations possible. *[Source Boston University, "Creating a Strong Password"](http://www.bu.edu/infosec/howtos/how-to-choose-a-password/)*
* Use a different password for every site, system, or application.
* Use a randomly generated password rather than one with a naming convention or algorithm.

**Do NOT:**

* Do not include personally identifiable information in your password (i.e. no usernames, phone number, birthdays, addresses, birth places, kid's/pet's names, etc).
* Do not include general words commonly found in the dictionary in your password. For SendGrid, you still need at least one number in your password.
* Do not use an "algorithm," like "sitename123".
* Do not write your password down, instead, use a [password manager](#-Remembering-all-your-passwords-is-hard).
* Do not email, text, tweet, commit, or otherwise share your password.

{% anchor h2 %}
Don't put your passwords in your code
{% endanchor %}

* Use [API Keys]({{root_url}}/User_Guide/Account/api_keys.html)
* Create an environment or credentials file that includes your password(s), but that is in your [.gitignore file](https://help.github.com/articles/ignoring-files/).
* Put your environment file out of the discoverable file structure - your code can get it, but your web server won't serve it.

{% anchor h2 %}
Never share your password
{% endanchor %}

Never share your password. Not ever.

{% info %}
No SendGrid representative will ever ask for your password.
{% endinfo %}

* Your password is YOUR password, not your assistant's, developer's, or anyone else's.
* With SendGrid you can allow other users to access your account with their own password.
* For your applications that send through SendGrid, give **each of them** their own [API Key]({{root_url}}/User_Guide/Account/api_keys.html).

{% anchor h2 %}
Remembering all your passwords is hard
{% endanchor %}

Especially, if you're following the rules above. So, don't remember them! Luckily, technology has come to the rescue with [password managers](http://en.wikipedia.org/wiki/Password_manager).
Password managers are applications that run locally, integrate with your browser, and store your passwords so you don't have to. Wikipedia provides a [list of password managers](http://en.wikipedia.org/wiki/List_of_password_managers).
