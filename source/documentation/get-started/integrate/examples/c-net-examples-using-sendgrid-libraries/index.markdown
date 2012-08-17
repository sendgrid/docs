---
comments: false
date: 2012-05-07 18:35:57
layout: page
slug: c-net-examples-using-sendgrid-libraries
title: C# .NET Examples using SendGrid Libraries
wordpress_id: 3955
---

So, you are developing in C# using .NET frameworks and would like to integrate SendGrid. We've got you covered. First, though, you need to grab out libraries in order for these samples to work. You can either [download the SendGrid C# .NET libraries directly from our Github repository](https://github.com/sendgrid/sendgrid-csharp.git) or, if you have the NuGet package manager installed, you can grab them automatically.  
  


Of course, if we have our say, then using NuGet is far preferred over the manual method, since it handles a lot of the legwork for you. To install using the NuGet PM, open the package manager console and enter the following:  
  


`PM> Install-Package Sendgrid`

Once you have the SendGrid libraries properly referenced in your project, you can include calls to them in your code. This first example shows the basic structure of the code required to call the SendGrid libraries and send email, as can be found in the programs.cs file in the examples directory:  
  


`
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using SendGridMail;
using SendGridMail.Transport;

namespace Example
{
    class Program
    {
        // this code is used for the SMTPAPI examples
        static void Main(string[] args)
        {
            var username = "sgrid_username";
            var password = "sgrid_password";
            var from = "bar@domain.com";
            var to = new List
                         {
                             "foo@domain.com",
                             "raz@domain.com"
                         };

            //initialize the SMTPAPI example class
            var smtpapi = new SMTPAPI(username, password, from, to);
            var restapi = new WEBAPI(username, password, from, to);

            //use this section to test out our Web and SMTP examples!
            smtpapi.SimpleHTMLEmail();

            Console.WriteLine("Done!");
            Console.ReadLine();
        }
    }
}
`

In order to send a simple HTML email using the SendGrid SMTP API, use this code sample:  
  


`
public void SimpleHTMLEmail()
        {
            //create a new message object
            var message = SendGrid.GetInstance();

            //set the message recipients
            foreach(string recipient in _to)
            {
                message.AddTo(recipient);
            }

            //set the sender
            message.From = new MailAddress(_from);

            //set the message body
            message.Html = "

Hello

World

";

            //set the message subject
            message.Subject = "Hello World HTML Test";

            //create an instance of the SMTP transport mechanism
            var transportInstance = SMTP.GetInstance(new NetworkCredential(_username, _password));

            //send the mail
            transportInstance.Deliver(message);
        }
`



> **NOTE >> **
There are two calls you can make to the AddTo function. One injects addresses into the standard MIME TO: field, and that's done (as in the above code sample) like so:  
  


`message.AddTo(sampleListName(){"foo@bar.com"});`

Using the X-SMTPAPI header makes this process a little cleaner and causes the message to appear as if it were sent directly to the recipient, as opposed to lots and lots of recipients. In order to inject addresses into into the X-SMTPAPI header, make the call like so:  
  


`message.Header.AddTo(sampleListName(){"foo@bar.com"});`




If you would prefer to send a simple HTML message using the SendGrid Web API, use this code:  
  


`
public void SimpleHTMLEmail()
        {
            //create a new message object
            var message = SendGrid.GetInstance();

            //set the message recipients
            foreach (string recipient in _to)
            {
                message.AddTo(recipient);
            }

            //set the sender
            message.From = new MailAddress(_from);

            //set the message body
            message.Html = "

Hello

World

";

            //set the message subject
            message.Subject = "Hello World HTML Test";

            //create an instance of the Web transport mechanism
            var transportInstance = Web.GetInstance(new NetworkCredential(_username, _password));

            //send the mail
            transportInstance.Deliver(message);
        }
`

The following is a code sample that allows you to add substitution values to your messages. This is a powerful feature that makes it significantly easier to generate personalized email messages:  
  


`
public void AddSubstitutionValues()
        {
            //create a new message object
            var message = SendGrid.GetInstance();

            //set the message recipients
            foreach (string recipient in _to)
            {
                message.AddTo(recipient);
            }

            //set the sender
            message.From = new MailAddress(_from);

            //set the message body
            message.Text = "Hi %name%! Pleased to meet you!";

            //set the message subject
            message.Subject = "Testing Substitution Values";

            //This replacement key must exist in the message body
            var replacementKey = "%name%";

            //There should be one value for each recipient in the To list
            var substitutionValues = new List {"Mr Foo", "Mrs Raz"};

            message.AddSubVal(replacementKey, substitutionValues);

            //create an instance of the SMTP transport mechanism
            var transportInstance = SMTP.GetInstance(new NetworkCredential(_username, _password));

            //enable bypass list management
            message.EnableBypassListManagement();

            //send the mail
            transportInstance.Deliver(message);
        }
`
