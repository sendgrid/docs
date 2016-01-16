---
seo:
  title: Responsive Templates and Design
  description: Responsive Templates and Design
  keywords: responsive, template, design, html, css, width, pixel
title: Responsive Templates and Design
weight: 0
layout: page
zendesk_id: 201088528
navigation:
  show: true
---

A Growing Need for Responsive Design  

As many email ninjas are aware, mobile engagement in the email world has been on a steady rise for several years now, and it shows no signs of slowing down. &nbsp;This last month SendGrid reported that roughly 45% of all messages relayed through our system were engaged by a mobile or tablet device. &nbsp;This growing trend has brought to light some issues in HTML/CSS rendering caused by the different ways that all of these devices and operating systems display a message. &nbsp;There are many factors involved that can cause such as the rendering engines of these devices, the pixel allotment on each device's screen, and the different coding that each program and device is able to support.  

For more information on what variables can affect the rendering of your messages please check out&nbsp; [Litmus' Documentation](https://litmus.com/help/email-clients/rendering-engines)&nbsp;on this subject. &nbsp;We also encourage you to take a look at [SendGrid's]({{root_url}}/Classroom/Build/Format_Content/html_rendering__the_dos_and_donts_of_cross_platform_email_design.html) article regarding HTML/CSS coding and rendering.

In reaction to these trends, and in order to resolve some of our users' reported issues with HTML/CSS rendering, we have decided to release a few responsive email templates. &nbsp;These templates are ready for use, however they were designed with the intention of being more of an interactive guide so that you can learn from them and eventually create your own custom email templates.  

The More You Know  

The first step in making these templates responsive was to research the most common screen resolutions and pixel sizes. &nbsp;We narrowed this down to around 600 pixels, which guided our media queries and overall template size. &nbsp;In essence, these media queries were designed to recreate the pixel sizes of the elements in this template so that they fit into the pixel allotment of these different sized screens.  

The next task was to ensure that when this pixel change occurred the elements mentioned would stack over the top of each other. &nbsp;For this we decided to use <align> in the table elements. &nbsp;This also provided a workaround for the usual <float> tag, which is not widely supported by email clients.  

To combat the different issues associated with image size, we used the max-height and max-width tags in addition to the normal height and width tags&nbsp;to make sure that image height was uniform within the template. &nbsp;This eliminates many of the issues that come about from mobile rendering of images of different pixel sizes.  

Best Practices and the Result  

These templates have been tested to render as expected in Android, iOS, tablets, and across most mail clients. &nbsp;There are still some minor display discrepancies, such as padding issues in Outlook 2003, 2007, 2010, (suprisingly fine in 2011) and 2013, which seems to only be affecting the text inside our table parameters. &nbsp;These templates are not very responsive on Android's Outlook and Gmail applications due to complications with these apps' inability to accept these media queries. &nbsp;These apps strips all CSS in the header, which invalidates the media queries. &nbsp;However, since we used the different align calls and have tried to control padding and float, we were able to account for most of these issues. &nbsp;&nbsp;  

Those of you who are familiar with the issues associated with HTML rendering will know how many interlocking pieces are required to fit together in order for these templates to properly function across multiple platforms and devices. &nbsp;As such, we do not advise changing any of the parameters you see inside of the calls except for the basics: &nbsp;background colors, text styles, images, links, titles, heading, etc. &nbsp;If you do personalize these templates for your own use, know that you do this at your own risk and it is advised you test the possible rendering afterwards. &nbsp;It is also recommended that when you change these templates or build your own that you use meshing background colors, or all white. &nbsp;This will eliminate the chance of borders and padding appearing to overlap certain cells. &nbsp;  

You can also change the actual format of the template itself to suit your needs. &nbsp;However, if you do so then it is at your own risk and you should test it before sending to your recipients. You should make sure that when designing these emails that you are using images with a pixel width that is equal to or less than 580. &nbsp;It is also recommended that your images be uniform in their pixel dimensions where warranted in order to achieve the best rendering on different devices.  

We suggest using&nbsp; [Litmus](http://litmus.com/)&nbsp;to test the rendering of these templates after you have personalized them, as they offer some of the best HTML template services on the market. &nbsp;Litmus will allow you to test your message content rendering across almost all mail clients and mobile devices before you send. &nbsp;A test of this sort is HIGHLY recommended before utilizing these templates to ensure that changing this content will not affect the way your message rendered. &nbsp;We also advise that while editing your HTML/CSS you should also use a real-time HTML editor, such as&nbsp; [HTMLinstant](http://www.htmlinstant.com/),&nbsp;to view your changes.  

The Templates  

In my experience I have found that it is best to keep mobile templates as simple as possible. **&nbsp;** The more bells and whistles that you include in a mobile template, the higher the probability that something will go wrong when it is rendered. &nbsp;Even when adding colored backgrounds or more elements, you will see overlapping borders and cells that can cause the message itself to render improperly. &nbsp;Because of this, these templates have been left quite plain.&nbsp;  

We are releasing three basic responsive templates as of right now. &nbsp;These templates have been left plain in order to promote more reliable rendering on different devices and screens. &nbsp;You will see that all three respond nicely to differently sized screens and devices, with only a few minor rendering issues. &nbsp;RT 3.0 is the simplest, and it seems to render the best due to its plain background colors, uniform image parameters, and simplified table design.  

SendGrid users are more than welcome to change these templates to suit their needs, however we encourage you to use these templates as a learning tool in order to design your own responsive templates. &nbsp;Truly responsive design should be geared towards one's own personalized content. &nbsp;As stated earlier, there ARE some rendering issues to be expected with different devices and applications. These templates will guide you towards understanding these rendering issues and should provide you with the knowledge needed to resolve them.

<center>
<table>
<tbody>
<tr>
<th><strong>RT 1.0</strong></th>
<th><strong>RT 2.0</strong></th>
<th><strong>RT 3.0</strong></th>
</tr>
<tr>
<td><a href="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/738803e5-54d1-49af-85cc-228377815199/00000084.png"><img class="embeddedObject" src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/738803e5-54d1-49af-85cc-228377815199/00000084.png" alt="" width="300" height="500" border="0"></a></td>
<td><a href="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/27308d46-c100-4775-8c12-b85a13207a6a/00000085.png"><img class="embeddedObject" src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/27308d46-c100-4775-8c12-b85a13207a6a/00000085.png" alt="" width="300" height="500" border="0"></a></td>
<td><a href="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/4e499bf0-c02c-4945-a8c1-d6214f00e5e8/00000086.png"><img class="embeddedObject" src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/4e499bf0-c02c-4945-a8c1-d6214f00e5e8/00000086.png" alt="" width="300" height="500" border="0"></a></td>
</tr>
</tbody>
</table>
</center>

We're Here to Help  

Please understand that these templates are not perfect, and that we will continue to edit them as trends and policies change. &nbsp;As stated earlier, please refrain from changing any of the elements restricting pixel size, padding, and alignment unless it is truly necessary. &nbsp;We hope that these basic templates meet your responsive design needs, and that they will eventually help you create your own customized, responsive templates in the future.  

If you happen to notice any issues with these templates then please do not hesitate to contact our&nbsp; [Support Team](http://support.sendgrid.com/hc/en-us/")&nbsp;at your earliest convenience.
