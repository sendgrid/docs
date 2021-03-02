---
layout: page
weight: 0
title: Email API Quickstart for Go
group: api-v3
navigation:
  show: true
seo:
  title: Email API Quickstart for Go
  description: Sending your first email using the SendGrid REST API and Go.
  keywords: Getting Started, API, v3, REST, SendGrid REST API, Go, Golang.
---

In this quickstart, you'll learn how to send your first email using the [Twilio SendGrid Mail Send API](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) and [Go](https://golang.org/).

## Prerequisites

Be sure to perform the following prerequisites to complete this tutorial. You can skip ahead if you've already completed these tasks.

1. Sign up for a SendGrid account.
2. Enable Two-factor authentication.
3. Create and store a SendGrid API Key with **Mail Send** > **Full Access** permissions.
4. Complete Domain Authentication.
5. Install Go.

<a href="#starting-the-project" class="btn btn-primary">Skip the prerequisites</a>

### Sign up for a SendGrid account

When you sign up for a free [SendGrid account](https://signup.sendgrid.com/), you'll be able to send 100 emails per day forever. For more account options, see our [pricing page](https://sendgrid.com/pricing/).

### Enable Two-factor authentication

Twilio SendGrid requires customers to enable Two-factor authentication (2FA). You can enable 2FA with SMS or by using the [Authy](https://authy.com/) app. See the [2FA section of our authentication documentation]({{root_url}}/for-developers/sending-email/authentication/#two-factor-authentication) for instructions.

### Create and store a SendGrid API key

Unlike a username and password — credentials that allow access to your full account — an API key is authorized to perform a limited scope of actions. If your API key is compromised, you can also cycle it (delete and create another) without changing your other account credentials.

Visit our [API Key documentation]({{root_url}}/ui/account-and-settings/api-keys/) for instructions on creating an API key and [storing an API key in an environment variable]({{root_url}}/ui/account-and-settings/api-keys/#storing-an-api-key-in-an-environment-variable). To complete this tutorial, you can create a Restricted Access API key with **Mail Send** > **Full Access** permissions only, which will allow you to send email and schedule emails to be sent later. You can edit the permissions assigned to an API key later to work with additional services.

Once your API key is assigned to an environment variable — this quickstart uses `SENDGRID_API_KEY` — you can proceed to the next step.

```shell
export SENDGRID_API_KEY=<Your API Key>
```

### Verify your Sender Identity

To ensure our customers maintain the best possible sender reputations and to uphold legitimate sending behavior, we require customers to verify their [Sender Identities]({{root_url}}/for-developers/sending-email/sender-identity/) by completing [Domain Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/). A Sender Identity represents your 'From' email address—the address your recipients see as the sender of your emails.

<call-out>

To get started quickly, you may be able to skip Domain Authentication and begin by completing [Single Sender Verification]({{root_url}}/ui/sending-email/sender-verification). Single Sender Verification is recommended for testing only. Some email providers have [DMARC]({{root_url}}/glossary/dmarc) policies that restrict email from being delivered using their domains. For the best experience, please complete Domain Authentication. Domain Authentication is also required to upgrade from a free account. To better understand why Domain Authentication is necessary, see our ["Spoofing"]({{root_url}}/glossary/spoofing/) and ["Everything about DMARC"]({{root_url}}/ui/sending-email/dmarc/) articles.

</call-out>

### Go

Before installing Go, you can see if you already have a version on your machine.

<call-out>

The Twilio SendGrid Go helper library requires Go version 1.7 or later.

</call-out>

#### Go version check

Check your Go version by opening your terminal (also known as a command line, or console) and typing the following command.

```shell
go version
```

If you have Go installed, the terminal will print something like the following output.

```shell
go version go1.15.7 darwin/amd64
```

#### Install Go

If you do not already have a version of Go installed, visit the [Go website](https://golang.org/dl/) to download and install a version appropriate for your operating system.

## Starting the project

Using a [Twilio SendGrid helper library](https://github.com/sendgrid/sendgrid-go) is the fastest way to deliver your first email.

Start by creating a project folder for this app. The following examples will use a folder called `sendmail`.

```shell
mkdir sendmail
```

Next, navigate into the sendmail directory where you will complete the rest of the tutorial.

```shell
cd sendmail
```

This quickstart assumes you are using [Go Modules](https://blog.golang.org/using-go-modules) to manage your Go project and dependencies. If you prefer to use the `$GOPATH` workspace, the Twilio SendGrid helper library will still work, but the project creation steps that follow will differ slightly from your setup.

<call-out>

There are multiple ways to handle projects and their dependencies when writing Go. Beginning with version 1.11, Go introduced Go Modules as an official dependency management tool. For more information about Go dependencies, see ["Migrating to Go Modules"](https://blog.golang.org/migrating-to-go-modules).

</call-out>

### Initialize your project

The Go [mod](https://golang.org/ref/mod) package manager is included as part of the Go standard library beginning with version 1.11. You can use the `mod` command to initialize your project. You must pass `mod` a path for your module. The following examples will use `example.com/sendgrid/sendmail`, but you will use the path appropriate for your project. For example, if you intend to store your project on GitHub under the username `sg_gopher`, your path will be `github.com/sg_gopher/sendmail`.

```shell
go mod init example.com/sendgrid/sendmail
```

You will now have a `go.mod` file that lists the path for your module and the version of Go used to create it. You will also have a `go.sum` file that stores a cryptographic hash for the content of each dependency in your project.

Next, use the `go get` command to install the Twilio SendGrid helper library and save it as a project dependency.

### Install the helper library

```shell
go get github.com/sendgrid/sendgrid-go
```

The terminal will print something like the following output.

```shell
go: github.com/sendgrid/sendgrid-go upgrade => v3.7.2+incompatible
go: finding module for package github.com/sendgrid/rest
go: found github.com/sendgrid/rest in github.com/sendgrid/rest v2.6.2+incompatible
```

Your `go.mod` file will now include the Twilio SendGrid `sendgrid-go` and `rest` libraries as project dependencies.

## Send an email

You're now ready to write some code. First, create a `main.go` file in your project directory.

### Complete code block

The following Go block contains all the code needed in your `main.go` file to successfully deliver a message with the SendGrid Mail Send API. You can copy this code, modify the `to` and `from` variables, and run the code if you like. We'll break down each piece of this code in the following sections.

```go
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

func main() {
	from := mail.NewEmail("Tira", "tiramisu@example.com") // Change to your verified sender
	subject := "Sending with Twilio SendGrid is Fun"
	to := mail.NewEmail("Sou", "souffle@example.com") // Change to your recipient
	plainTextContent := "and easy to do anywhere, even with Go"
	htmlContent := "<strong>and easy to do anywhere, even with Go</strong>"
	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}
}
```

### Build your API call

Your API call must have the following components.

- A Host (the host for Web API v3 requests is always `https://api.sendgrid.com/v3/`)
- An Authorization Header
- An API Key passed in the Authorization Header
- A Request (when submitting data to a resource via `POST` or `PUT`, you must submit your request body in JSON format)

In your `main.go` file, set the package to `main`, import the SendGrid helper library, and import the SendGrid mail helper from the library. The library will handle setting the Host, `https://api.sendgrid.com/v3/`, for you.

```go
package main

import(
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)
```

Next, declare a function named `main`. This function is where you will build your email message and make a request to the Twilio SendGrid Mail Send API.

```go
func main() {

}
```

Now you're ready to set up the `from`, `to`, `subject`, and message body `htmlContent`. These values are passed to the API in a [Personalizations]({{root_url}}/for-developers/sending-email/personalizations/) object when using the v3 Mail Send API. You can assign each of these values to variables, and the SendGrid library will handle creating a `personalizations` object for you.

The `subject` and `htmlContent` variables are just strings. However, you will set the `from` and `to` variables using the helper library's `NewEmail` constructor. The `NewEmail` function takes two arguments, a `name` and an `address`.

<call-out>

Notice that there is a `plainTextContent` and an `htmlContent` variable in the full code block. Only one of these values is needed. If you include both variables, only the `htmlContent` value will be used as the body text of your email.

</call-out>

```go
from := mail.NewEmail("Tira", "tiramisu@example.com") // Change to your verified sender
subject = "Sending with SendGrid is Fun"
to := mail.NewEmail("Sou", "souffle@example.com") // Change to your recipient
htmlContent := "<strong>and easy to do anywhere, even with Go</strong>"
```

To properly construct the message, pass each of the previous variables into the SendGrid library's `NewSingleEmail` function. You can assign this to a variable named `message`.

```go
message := mail.NewSingleEmail(from, subject, to, htmlContent)
```

Next, use the API key you set up earlier. Remember, the API key is stored in an environment variable, so you can use the `os.Getenv()` method to access it. This means you also need to import Go's os library.

```go
import (
	"os"
)
```

Assign the key to a variable named `client` using the helper library's `NewSendClient` method. The helper library will pass your key to the v3 API in an Authorization header using Bearer token authentication.

```go
client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
```

Lastly, you need to make a `POST` request to the SendGrid Mail Send API to deliver your message. The SendGrid helper library provides a `Send` function from [SendGrid's REST library](https://github.com/sendgrid/rest) to make this request. Call the `Send` method on the `client` and pass in your `message` as an argument.

```go
# Send an HTTP POST request to /mail/send
client.Send(message)
```

With all this code in place, you can run your `main.go` file in your terminal to send the email.

```go
go run main.go
```

You can also print the status code, body, and headers of the response if you wish. Import the fmt and log libraries to do this. You can then assign your `client.Send` to `response` and `err` variables for logging.

```go
import (
	"fmt"
	"log"
)

response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
}
```

If you receive a `202` status code printed to the console, your message was sent successfully. Check the inbox of the to address, and you will see your demo message.

If you don’t see the email, you may need to check your spam folder.

### Troubleshooting

If you receive an error message, you can reference our [response message documentation](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes) for clues about what may have gone wrong.

#### API Response messages

All responses are returned in JSON format. We specify this by sending the Content-Type header. The Web API v3 provides a selection of [response codes](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#status-codes), [content-type headers](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#content-type-header), and [pagination](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-responses#pagination) options to help you interpret the responses to your API requests.

<call-out>

Get additional onboarding support. Save time, increase the quality of your sending, and feel confident you are set up for long-term success with SendGrid Onboarding Services.

</call-out>

## Next Steps

This is just the beginning of what you can do with our APIs. To learn more, check the resources below.

- [API Reference]({{root_url}}/api-reference/)
- [Sending Email with Dynamic Transactional Templates]({{root_url}}/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
- [Getting Started with the Event Webhook]({{root_url}}/for-developers/tracking-events/getting-started-event-webhook/)
- [The Email Activity Feed]({{root_url}}/ui/analytics-and-reporting/email-activity-feed/)
- [Sender Authentication]({{root_url}}/ui/account-and-settings/how-to-set-up-domain-authentication/)
- [Twilio SendGrid helper library for Go](https://github.com/sendgrid/sendgrid-go)
