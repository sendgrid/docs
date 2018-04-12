---
layout: page
weight: 10
title: C#
navigation:
  show: true
---

<page-anchor el="h2">
Parse Webhook
</page-anchor>

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to http://sendgrid.biz/upload

Given this scenario, the following are the parameters you would set at the [Parse API settings page]({{site.site_url}}/developer/reply):

{% codeblock %}
Hostname: email.sendgrid.biz
{% endcodeblock %}

{% codeblock %}
URL: http://sendgrid.biz/upload
{% endcodeblock %}

 Put this C\# model in your models folder:

{% codeblock lang:csharp %}
/// <summary>
/// A model with the data format of the Inbound Parse API's POST
/// </summary>
public class Email
{
  /// <summary>
  /// The Domain Keys Identified Email code for the email
  /// </summary>
  public string Dkim { get; set; }

  /// <summary>
  /// The email address that the email was sent to
  /// </summary>
  public string To { get; set; }

  /// <summary>
  /// The HTML body of the email
  /// </summary>
  public string Html { get; set; }

  /// <summary>
  /// The email address the email was sent from
  /// </summary>
  public string From { get; set; }

  /// <summary>
  /// The Text body of the email
  /// </summary>
  public string Text { get; set; }

  /// <summary>
  /// The Ip address of the sender of the email
  /// </summary>
  public string SenderIp { get; set; }

  /// <summary>
  /// A JSON string containing the SMTP envelope. This will have two variables: to, which is an array of recipients, and from, which is the return path for the message.
  /// </summary>
  public string Envelope { get; set; }

  /// <summary>
  /// Number of attachments included in email
  /// </summary>
  public int Attachments { get; set; }

  /// <summary>
  /// The subject of the email
  /// </summary>
  public string Subject { get; set; }

  /// <summary>
  /// A JSON string containing the character sets of the fields extracted from the message.
  /// </summary>
  public string Charsets { get; set; }

  /// <summary>
  /// The results of the Sender Policy Framework verification of the message sender and receiving IP address.
  /// </summary>
  public string Spf { get; set; }
}
{% endcodeblock %}

 To test this, we send an email to example@example.com, and put the following method in our ApiController. Note: Don't forget the attribute.

{% codeblock lang:csharp %}
// POST api/inbound
[HttpPost]
public async Task<HttpResponseMessage> Post()
{
	var root = HttpContext.Current.Server.MapPath("~/App_Data");
	var provider = new MultipartFormDataStreamProvider(root);
	await Request.Content.ReadAsMultipartAsync(provider);

	var email = new Email
	{
		Dkim = provider.FormData.GetValues("dkim").FirstOrDefault(),
		To = provider.FormData.GetValues("to").FirstOrDefault(),
		Html = provider.FormData.GetValues("html").FirstOrDefault(),
		From = provider.FormData.GetValues("from").FirstOrDefault(),
		Text = provider.FormData.GetValues("text").FirstOrDefault(),
		SenderIp = provider.FormData.GetValues("sender_ip").FirstOrDefault(),
		Envelope = provider.FormData.GetValues("envelope").FirstOrDefault(),
		Attachments = int.Parse(provider.FormData.GetValues("attachments").FirstOrDefault()),
		Subject = provider.FormData.GetValues("subject").FirstOrDefault(),
		Charsets = provider.FormData.GetValues("charsets").FirstOrDefault(),
		Spf = provider.FormData.GetValues("spf").FirstOrDefault()
	};

	// The email is now stored in the email variable

	return new HttpResponseMessage(HttpStatusCode.OK);
}
{% endcodeblock %}

The above code used the following `using`'s

{% codeblock lang:csharp %}
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
{% endcodeblock %}
