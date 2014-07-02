Hello -name-,  
 Thank you for your interest in our products. We have set up an appointment  
 to call you at -time- EST to discuss your needs in more detail.  
 Regards,  
 Fred  

EOM \# Create the MIME message that will be sent. Check out MIME::Entity on CPAN for more details my \$mime = MIME::Entity-\>build(Type =\> 'multipart/alternative' , Encoding =\> '-SUGGEST', From =\> \$from, To =\> \$to, Subject =\> 'Contact Response for <name> at <time>'); \# Add the header \$mime-\>head-\>add("X-SMTPAPI", \$hdr-\>asJSON); \# Add body \$mime-\>attach(Type =\> 'text/plain', Encoding =\>'-SUGGEST', Data =\> \$plain); \$mime-\>attach(Type =\> 'text/html', Encoding =\>'-SUGGEST', Data =\> \$html); \# Login credentials my \$username = 'yourlogin@sendgrid.net'; my \$password = "yourpassword"; \# Open a connection to the SendGrid mail server my \$smtp = Net::SMTP-\>new('smtp.sendgrid.net', Port=\> 25, Timeout =\> 20, Hello =\> "yourdomain.com"); \# Authenticate \$smtp-\>auth(\$username, \$password); \# Send the rest of the SMTP stuff to the server \$smtp-\>mail(\$from); \$smtp-\>to(\$to); \$smtp-\>data(\$mime-\>stringify); \$smtp-\>quit(); {% endcodeblock %}
