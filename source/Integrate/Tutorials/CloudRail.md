---
layout: page
weight: 0
title: Using CloudRail to integrate SendGrid into your application
navigation:
  show: true
---

CloudRail is a universal SDK that makes adding multiple APIs, including SendGrid, simple. You configure your own personal CloudRail SDK on the CloudRail website, selecting which services you want to integrate. From there, it's just a simple download of your SDK, and you can start using the APIs straight away in your application.

We made the CloudRail tool in response to developers telling us how many problems they had with integration. It took them too long to read documentation for each service they wanted to use. We also wanted to solve the other problem of API updates. When a service provider updates their API, the definition in CloudRail is updated and adding the new version is as simple as dragging and dropping an updated file into your development environment of choice. All of the data translation also happens directly in your app. That is, there is no routing of your calls through any CloudRail server, meaning that you are not reliant on the CloudRail servers being up for your application to work.

How fast is CloudRail to use? If you follow this tutorial to integrate two SendGrid APIs and MusicBrainz into your application, it will take (after sign up) only nine clicks (including paging though the list of API definitions in CloudRail) to download your custom SDK. In this tutorial, the integration of the SDK into an application is demonstrated with Java code. Consult the [CloudRail Documentation](https://cloudrail.com/documentation/) for details with other platforms.

{% anchor h2 %}
Configure and download the CloudRail SDK (Platform independent)
{% endanchor %}

<ol>
  <li>
    Go to the [CloudRail Workbench](https://workbench.cloudrail.com/?utm_source=SendGrid&utm_medium=Tutorial&utm_campaign=SendGrid%20Website/) and sign up to get an account.
  </li>
  <li>
    Create a new custom API with the name "Example" (you can normally choose any name, but the example code here expects this name exactly).
  </li>
  <li>
    Select the SendGrid v3 API, the SendGrid Mail v2 API and the Musicbrainz API from the list and click "Continue". If you cannot find them, select the "Email"/"Music" category first to limit search results.
    SendGrid v3 API is the latest version of the API, which at the time this article was written did not support sending email yet. Therefore Sendgrid Mail v2 API will be used for that purpose.
    It is easy to integrate multiple APIs with CloudRail, even from different providers.
  </li>  
  <li>
    (Optional) Edit the API integrations (By clicking on the edit button) to get access to more functions than the ones included by default or delete preconfigured ones.
  </li>
  <li>
    Press "Continue & Create SDK" to finish configuration.
  </li>  
  <li>
    Choose the platform you need to start downloading the file. For the next section of this tutorial we are going to use Java.
  </li>
</ol>

{% anchor h2 %}
Integrate the SDK into your app (Java example)
{% endanchor %}

<ol>
  <li>
    Extract the zip file you downloaded from the CloudRail Workbench and open the "java" folder.
  </li>  
  <li>
    Add the JAR file to the build path of your Java project (create a new one if you don't have one).
  </li>  
  <li>
    Copy the included "com" folder into your project source.
  </li>  
  <li>
    (Optional) There is a file called "[your project name]Test.java" which might show errors if you have not added JUnit to your build path. Do so to fix this if you want or ignore it for now.
  </li> 
  <li>
    Create a new class named "Demo" and paste the following code (You can change the class name after, if you want):
    {% codeblock lang:java %}
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import com.cloudrail.exception.CloudRailException;
import com.cloudrail.userInterface.Example;
import com.cloudrail.userInterface.Example.GetRecordingByIdResponseListener;
import com.cloudrail.userInterface.Example.GetUserProfileResponseListener;
import com.cloudrail.userInterface.Example.SendMailResponseListener;

public class Demo {
  public static void main(String[] args) {

    final String apikey = ""; // Put SendGrid API key here
    final String album = "fe2178fc-b463-4a12-af22-00cb99ea0e91"; // An ID for a Beatles album on MusicBrainz

    Example sg = new Example(); // Global variables get passed to the constructor, but we don't have any

    // Function from SendGrid v3 API
    sg.getUserProfile(apikey, new GetUserProfileResponseListener() {
      public void onSuccess(String firstname, String zip, String phonenumber, String address, String lastname,
          String country, String city, String company) {
        StringBuilder sb = new StringBuilder();
        sb.append("SendGrid account info: \n");
        sb.append("First name: " + firstname + "\n");
        sb.append("Last name: " + lastname + "\n");
        // ...
        System.out.println(sb.toString());
      }
      public void onError(CloudRailException error) { throw error; }
      public void onProgress(double percentFinished) {}
    });
    
    // Function from Musicbrainz API
    sg.getRecordingById(album, new GetRecordingByIdResponseListener() {
      public void onSuccess(String id, List<Object> artistcredits_list, List<Object> releases_list, String title, Long length) {
        try {
          final String recipient = "example@cloudrail.com"; // Change to recipient address
          final String sender = "senderexample@cloudrail.com";
          final String subject = URLEncoder.encode("Hello from CloudRail", "UTF-8");
          final String message = URLEncoder.encode("Email sent with SendGrid using the CloudRail API. Beatles album title is: " + title, "UTF-8");
          
          // Function from SendGrid Mail v2 API
          sg.sendMail(apikey, recipient, sender, subject, message, new SendMailResponseListener() {
            public void onSuccess(String successindicator) {
              System.out.println("Email request sent, answer was: " + successindicator);
            }
            public void onError(CloudRailException error) { throw error; }
            public void onProgress(double percentFinished) {}
          });
        } catch (UnsupportedEncodingException e) { e.printStackTrace(); }
      }
      public void onError(CloudRailException error) { throw error; }
      public void onProgress(double percentFinished) {}
    });
  }

}
    {% endcodeblock %}
  </li> 
</ol>  

Don't forget to put your SendGrid API key and a valid recipient address for the email being sent.

You've now successfully integrated both SendGrid APIs and Musicbrainz. Your favourite IDE will also show what other methods of these APIs you can access, just start typing "sg." for a list of auto complete suggestions. And those are just the ones selected by default in the workbench.

As CloudRail is still being constantly updated (we've just recently updated the Workbench to make it easier to use, for example), it is also a good idea to check out the [CloudRail Documentation](https://cloudrail.com/documentation/) often to see if we have updated any aspect of the implementation. Also, currently CloudRail is available for Java and Android, and we are working hard to also bring the CloudRail Universal SDK for iOS and Node.js developers. You can check out the progress of this as well. See a list of all of the current definitions in CloudRail at the [CloudRail Features](http://cloudrail.com/product/) page.

