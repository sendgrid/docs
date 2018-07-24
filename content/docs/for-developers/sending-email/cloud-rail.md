---
layout: page
weight: 0
title: Using CloudRail to integrate SendGrid into your application
navigation:
  show: true
---

CloudRail is an API integration platform that has a set of free software libraries which abstract multiple external APIs from different providers, SendGrid among them, into a single and universal interface.
This makes it easy to integrate many of them in your application.
Abstract means that, for example, upload() works in exactly the same way for Dropbox as it does for Google Drive, OneDrive, and other Cloud Storage Services, and getEmail() works similarly the same way across all social networks.

In this tutorial, the integration of the Android SDK into an application is demonstrated with Android Java code.
Gradle is used as the build tool (Android Studio standard).
Head to the [Website](https://cloudrail.com/) for all the details about CloudRail and instructions for other platforms.

{% anchor h2 %}	Setup
{% endanchor %}	
The easiest way to integrate CloudRail for Android is via Maven.
It suffices to add the following to your build.gradle:

```java
dependencies {
    compile 'com.cloudrail:cloudrail-si-android:2.6.5'
}
```

{% anchor h2 %}	Send a simple email
{% endanchor %}	
After setup, sending an email with SendGrid is a breeze.
Just add code like the one below:

```java
final Email email = new SendGrid(this, "[API key]");

new Thread() {
    public void run() {
        email.sendEmail(
                "[senderEmail]",
                "[senderName]",
                Arrays.asList("[toEmail]"),
                "I'm the subject",
                "I'm a text body",
                "<p>I'm an HTML body</p>",
                Arrays.asList("[ccAddress0]", "[ccAddress1]"),
                Arrays.asList("[bccAddress]")
        );
    }
}.start();
```

{% anchor h2 %}	Send a personalized email
{% endanchor %}	
Since you've already integrated CloudRail SI, why not make use of some of the other APIs that come with it?
Let's use Facebook to get a user's info to personalize the email:

```java
final Email email = new SendGrid(this, "[API key]");
final Profile profile = new Facebook(this, "[Client ID]", "[Client Secret]");

new Thread() {
    public void run() {
        String userFullName = profile.getFullName(); // Implicitly triggers login
        String userEmail = profile.getEmail();
        email.sendEmail(
                "[senderEmail]",
                "[senderName]",
                Arrays.asList(userEmail),
                "Hello " + userFullName + ", I'm the subject",
                "I'm a text body",
                "<p>I'm an HTML body</p>",
                Arrays.asList("[ccAddress0]", "[ccAddress1]"),
                Arrays.asList("[bccAddress]")
        );
    }
}.start();
```

The code above assumes that "this" points to a Context (an Activity, for example, is a Context) and that you are registered as a developer with the services used (and thus possess the needed credentials).
You can find more information about the functionalities and the services in the [Documentation](https://github.com/CloudRail/cloudrail-si-android-sdk/wiki).
