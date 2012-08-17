---
comments: false
date: 2011-03-25 15:48:42
layout: page
slug: c-email-example-using-smtp
title: C# Email Example Using SMTP
wordpress_id: 250
---

This C# program will build a MIME email and send it through SendGrid.  .NET already has built in libraries to send and receive emails. This example uses:



	
  * [.NET mail](http://msdn.microsoft.com/en-us/library/system.net.mail.aspx)


`
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
                string html = @"

html body

";
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
`
