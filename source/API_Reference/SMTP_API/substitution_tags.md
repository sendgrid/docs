Hello -name-,  
 Thank you for your interest in our products. I have set up an appointment to call you at -time- EST to discuss your needs in more detail. If you would like to reschedule this call please visit the following link: [reschedule](http://sendgrid.com/reschedule?id=-customerID-) Regards, -salesContact- -contactPhoneNumber-  

{% endcodeblock %}

An accompanying SMTP API JSON header might look something like this:


{% codeblock lang:html %}
<a href="http://sendgrid.com/customerOffer?id=-customerID-">Claim your offer!</a>
{% endcodeblock %}


The final email for John would look like this:


{% codeblock lang:html %}
<html>
  <head></head>
  <body>
    <p>Hello -name-,<br>
       Thank you for your interest in our products. I have set up an appointment
             to call you at -time- EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             <a href="http://sendgrid.com/reschedule?id=-customerID-">reschedule</a>
 
                Regards,
 
                -salesContact-
                -contactPhoneNumber-<br>
    </p>
  </body>
</html>
{% endcodeblock %}

