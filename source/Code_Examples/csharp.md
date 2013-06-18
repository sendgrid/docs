---
layout: page
weight: 0
title: C#
navigation:
    show: true
---

We'll start with a simple example using the built-in .NET SMTP libraries to send a message. After that example, you can find more complete instructions that use the SendGrid C# library.

{% anchor h2 %}
Using .NET's Built-in SMTP Library 
{% endanchor %}

If you are using ASP.NET, you can specify SMTP settings in web.config.

{% codeblock lang:xml %}
<system.net>
  <mailSettings>
    <smtp from="test@domain.com">
      <network host="smtp.sendgrid.net" password="password" userName="username" port="587" />
    </smtp>
  </mailSettings>
</system.net>
{% endcodeblock %}

This C# program will build a MIME email and send it through SendGrid.  .NET already has built in libraries to send and receive emails. 
This example uses:
[.NET Mail](http://msdn.microsoft.com/en-us/library/system.net.mail.aspx)


{% codeblock lang:csharp %}
using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Mail;
using System.Net.Mime;

namespace SmtpMail
{
  class Program
  {		
    static void Main()
    {
      try
      { 
        MailMessage mailMsg = new MailMessage();

        // To
        mailMsg.To.Add(new MailAddress("to@example.com", "To Name"));

        // From
        mailMsg.From = new MailAddress("from@example.com", "From Name");

        // Subject and multipart/alternative Body
        mailMsg.Subject = "subject";
        string text = "text body";
        string html = @"<p>html body</p>";
        mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
        mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

        // Init SmtpClient and send
        SmtpClient smtpClient = new SmtpClient("smtp.sendgrid.net", Convert.ToInt32(587));
        System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("username@domain.com", "yourpassword");
        smtpClient.Credentials = credentials;

        smtpClient.Send(mailMsg);
      }
        catch (Exception ex)
      {
        Console.WriteLine(ex.Message);
      }

    }
  }
}
{% endcodeblock %}

{% anchor h2 %}
Using the SendGrid C# Library 
{% endanchor %}

To use SendGrid in your C# project, you can either <a href="https://github.com/sendgrid/sendgrid-csharp.git">download the SendGrid C# .NET libraries directly from our Github repository</a> or, if you have the NuGet package manager installed, you can grab them automatically.

{% codeblock %}
PM> Install-Package SendGrid 
{% endcodeblock %}

The SendGrid library depends on [RestSharp](https://github.com/restsharp/RestSharp). NuGet will handle this dependency automatically, otherwise you will need to add it manually. 

Once you have the SendGrid libraries properly referenced in your project, you can include calls to them in your code. 
For a sample implementation, check the [Example](https://github.com/sendgrid/sendgrid-csharp/tree/master/SendGrid/Example) folder.

Add the following namespaces to use the library:
{% codeblock lang:csharp %}
using System.Net;
using System.Net.Mail;
using SendGridMail;
using SendGridMail.Transport;
{% endcodeblock %}

##How to: Create an email

Use the static **SendGrid.GetInstance** method to create an email message that is of type **SendGrid**. Once the message is created, you can use **SendGrid** properties and methods to set values including the email sender, the email recipient, and the subject and body of the email.

The following example demonstrates how to create an email object and populate it:

{% codeblock lang:csharp %}
// Create the email object first, then add the properties.
var myMessage = SendGrid.GetInstance();

// Add the message properties.
myMessage.From = new MailAddress("john@example.com");

// Add multiple addresses to the To field.
List<String> recipients = new List<String>
{
    @"Jeff Smith <jeff@example.com>",
    @"Anna Lidman <anna@example.com>",
    @"Peter Saddow <peter@example.com>"
};

myMessage.AddTo(recipients);

myMessage.Subject = "Testing the SendGrid Library";

//Add the HTML and Text bodies
myMessage.Html = "<p>Hello World!</p>";
myMessage.Text = "Hello World plain text!";
{% endcodeblock %}

{% anchor h2 %}
How to: Send an Email 
{% endanchor %}

After creating an email message, you can send it using either SMTP or the Web API provided by SendGrid. For details about the benefits and drawbacks of each API, see [SMTP vs. Web API](http://sendgrid.com/docs/Integrate/) in the SendGrid documentation.

Sending email with either protocol requires that you supply your SendGrid account credentials (username and password). The following code demonstrates how to wrap your credentials in a **NetworkCredential** object:

{% codeblock lang:csharp %}
// Create network credentials to access your SendGrid account.
var username = "your_sendgrid_username";
var pswd = "your_sendgrid_password";

var credentials = new NetworkCredential(username, pswd);
{% endcodeblock %}
To send an email message, use the **Deliver** method on either the **SMTP** class, which uses the SMTP protocol, or the **Web** transport class, which calls the SendGrid Web API. The following examples show how to send a message using both SMTP and the Web API.


###SMTP
{% codeblock lang:csharp %}
// Create the email object first, then add the properties.
SendGrid myMessage = SendGrid.GetInstance();
myMessage.AddTo("anna@example.com");
myMessage.From = new MailAddress("john@example.com", "John Smith");
myMessage.Subject = "Testing the SendGrid Library";
myMessage.Text = "Hello World!";

// Create credentials, specifying your user name and password.
var credentials = new NetworkCredential("username", "password");

// Create an SMTP transport for sending email.
var transportSMTP = SMTP.GetInstance(credentials);

// Send the email.
transportSMTP.Deliver(myMessage);
{% endcodeblock %}

###Web API
{% codeblock lang:csharp %}
// Create the email object first, then add the properties.
SendGrid myMessage = SendGrid.GenerateInstance();
myMessage.AddTo("anna@example.com");
myMessage.From = new MailAddress("john@example.com", "John Smith");
myMessage.Subject = "Testing the SendGrid Library";
myMessage.Text = "Hello World!";

// Create credentials, specifying your user name and password.
var credentials = new NetworkCredential("username", "password");

// Create a Web transport for sending email.
var transportWeb = Web.GetInstance(credentials);

// Send the email.
transportWeb.Deliver(myMessage);
{% endcodeblock %}

###Adding Recipients to the X-SMTPAPI Header

If you want to use the X-SMTPAPI header to specify recipients so that
each recipient gets an individually message without the other recipients
being shown, use the message.Header.AddTo() method as shown below:

{% codeblock lang:csharp %}
var recipients = new List<string>();

//You could loop through your dataset here and add each recipient, up to 1000 recipients per message
recipients.Add("Brandon <brandon@example.com>");
recipients.Add("Steve <steve@example.com>");

//We want to add the recipients to the X-SMTPAPI header
myMessage.Header.AddTo(recipients);

//Even though we added recipients to the Header, the envelope must also have a valid recipient
myMessage.AddTo("brandon@example.com");
{% endcodeblock %}

{% anchor h2 %}
How to: Add an Attachment 
{% endanchor %}

Attachments can be added to a message by calling the **AddAttachment** method and specifying the name and path of the file you want to attach, or by passing a stream. You can include multiple attachments by calling this method once for each file you wish to attach. The following example demonstrates adding an attachment to a message:

{% codeblock lang:csharp %}
SendGrid myMessage = SendGrid.GenerateInstance();
myMessage.AddTo("anna@example.com");
myMessage.From = new MailAddress("john@example.com", "John Smith");
myMessage.Subject = "Testing the SendGrid Library";
myMessage.Text = "Hello World!";

myMessage.AddAttachment(@"C:\file1.txt");
{% endcodeblock %}

##How to: Use filters to enable footers, tracking, and analytics

SendGrid provides additional email functionality through the use of filters. These are settings that can be added to an email message to enable specific functionality such as click tracking, Google analytics, subscription tracking, and so on. For a full list of filters, see [Filter Settings](http://docs.sendgrid.com/documentation/api/smtp-api/filter-settings/).

Filters can be applied to **SendGrid** email messages using methods implemented as part of the **SendGrid** class. Before you can enable filters on an email message, you must first initialize the list of available filters by calling the **InitializeFilters** method.

The following examples demonstrate the footer and click tracking filters:

###Footer
{% codeblock lang:csharp %}
// Create the email object first, then add the properties.
SendGrid myMessage = SendGrid.GetInstance();
myMessage.AddTo("anna@example.com");
myMessage.From = new MailAddress("john@example.com", "John Smith");
myMessage.Subject = "Testing the SendGrid Library";
myMessage.Text = "Hello World!";

myMessage.InitializeFilters();
// Add a footer to the message.
myMessage.EnableFooter("PLAIN TEXT FOOTER", "<p><em>HTML FOOTER</em></p>");
{% endcodeblock %}

###Click tracking
{% codeblock lang:csharp %}
// Create the email object first, then add the properties.
SendGrid myMessage = SendGrid.GetInstance();
myMessage.AddTo("anna@example.com");
myMessage.From = new MailAddress("john@example.com", "John Smith");
myMessage.Subject = "Testing the SendGrid Library";
myMessage.Html = "<p><a href=\"http://www.example.com\">Hello World Link!</a></p>";
myMessage.Text = "Hello World!";

myMessage.InitializeFilters();
// true indicates that links in plain text portions of the email 
// should also be overwritten for link tracking purposes. 
myMessage.EnableClickTracking(true);
{% endcodeblock %}
