---
layout: page
weight: 10
title: C#
navigation:
  show: true
---

{% anchor h2 %}
Parse Webhook 
{% endanchor %}

In this example, we want to parse all emails at *address*@email.sendgrid.biz and post the parsed email to http://sendgrid.biz/upload

Given this scenario, the following are the parameters you would set at the [Parse API settings page](http://sendgrid.com/developer/reply):



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
  /// Spam Assassin’s spam report.
  /// </summary>
  public string SpamReport { get; set; }

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
  /// Spam Assassin’s rating for whether or not this is spam.
  /// </summary>
  public double SpamScore { get; set; }

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

 Then create this Filter Attribute: 

{% codeblock lang:csharp %}
public class ParseEmailObjectFilter : ActionFilterAttribute
{
  /// <summary>
  /// Parses the raw form-data of the POST into a snazzy email
  /// model, and then sets it in the arguments for the POST function
  /// to read.
  /// </summary>
  /// <param name="actionContext">The HTTP action context of the POST.</param>
  public override void OnActionExecuting(HttpActionContext actionContext)
  {
    var data = HttpContext.Current.Request.Form;
    var email = new Email
    {
      Dkim = data["dkim"],
      To = data["to"],
      Html = data["html"],
      From = data["from"],
      Text = data["text"],
      SenderIp = data["sender_ip"],
      SpamReport = data["spam_report"],
      Envelope = data["envelope"],
      Attachments = int.Parse(data["attachments"]),
      Subject = data["subject"],
      SpamScore = double.Parse(data["spam_score"]),
      Charsets = data["charsets"],
      Spf = data["SPF"]
    };


    actionContext.ActionArguments["email"] = email;


    base.OnActionExecuting(actionContext);
  }
}
{% endcodeblock %}

 Then, set the following in web.config: 

{% codeblock lang:xml %}
<?xml version="1.0" encoding="ISO-8859-1"?>

<system.web>
   <compilation debug="true" targetFramework="4.5"/>
   <httpRuntime targetFramework="4.5" requestValidationMode="2.0"/>
   <pages validateRequest="false"/>
</system.web>

{% endcodeblock %}


 Add the following attributes to your method in the ApiController: 

{% codeblock lang:csharp %}
[ValidateInput(false)]
[ParseEmailObjectFilter]
{% endcodeblock %}

 Finally to access the Email model, your ApiController Post method should look like this. 

{% codeblock lang:csharp %}
// POST api/inbound
[ValidateInput(false)]
[ParseEmailObjectFilter]
public ActionResult Post()
{
  if (ActionContext == null || ActionContext.ActionArguments == null || ActionContext.ActionArguments["email"] == null || !ActionContext.ActionArguments.ContainsKey("email"))
    return new HttpStatusCodeResult(HttpStatusCode.OK);

  var email = ActionContext.ActionArguments["email"] as Email;
  if (email == null)
    return new HttpStatusCodeResult(HttpStatusCode.OK);

  // We have email! Now lets do something cool!

  // Return a success
  return new HttpStatusCodeResult(HttpStatusCode.OK);
}
{% endcodeblock %}


