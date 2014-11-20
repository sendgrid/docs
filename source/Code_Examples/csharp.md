---
layout: page
weight: 0
title: C#
navigation:
    show: true
---

{% github sendgrid/sendgrid-csharp#how-to-create-an-email C# %}
We recommend using SendGrid C#, our client library, <a href="https://github.com/sendgrid/sendgrid-csharp">available on Github</a>, with full documentation.
{% endgithub %}

{% anchor h2 %}
Using .NET's Built-in SMTP Library 
{% endanchor %}

If you choose not to use SendGrid's client library you may use .NET's built in library.

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