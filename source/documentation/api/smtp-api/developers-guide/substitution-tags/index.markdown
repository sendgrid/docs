---
comments: false
date: 2011-06-29 12:08:57
layout: page
slug: substitution-tags
title: Substitution Tags
wordpress_id: 1649
---

Substitution tags are a feature available via the SMTP API that allow you to easily generate dynamic content for each recipient on your list. When you send to a list of recipients over SMTP API you can specify substitution values for each recipient like a first name, that will then be inserted into an opening greeting like: "Dear -fistName-" where each recipient sees -firstName- replaced with their first name. 

Alternatively, these values can be used in more complex and interesting fashions. Instead of a first name you could also use a customerID and replace that value in a custom URL to take that customer to a page specific to them. i.e. one might imbed a link into an email like this: 
`[click here](sendgrid.com/customerOffer?id=-customerID-)` 
where an ID specific to the customer is appended into the link in place of -customerID-. 
You may also use substitution tags in the subject lines of your emails.



***Note: how you format your replacement tags can become relevant depending on; the library you use to create your smtp connection, the language you are writing your code in, or any intermediate MTA's that your local servers will use. In some cases -subVal- may be the best choice while in other %subVal% or #subVal# may make more sense.**



***Note: Avoid using spaces inside your substitution values, 
i.e. %first_name% = GOOD vs. %first name% = BAD**



### Example:



Email HTML content:
`

  
  
    

Hello -name-,  

       Thank you for your interest in our products. I have set up an appointment
             to call you at -time- EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             [reschedule](sendgrid.com/reschedule?id=-customerID-)
 
                Regards,
 
                -salesContact-
                -contactPhoneNumber-  

    


  

`

An accompanying SMTP API JSON header might look something like this:
`
{"to": ["john.doe@gmail.com", "jane.doe@hotmail.com"], "sub":{"-name-": ["John", "Jane"], "-customerID-": ["1234", "5678"], "-salesContact-": ["Jared", "Ben"], "-contactPhoneNumber-": ["555.555.5555", "777.777.7777"], "-time-": ["3:00pm", "5:15pm"]}}
`

The final email for John would look like this:
`

  
  
    

Hello John,  

       Thank you for your interest in our products. I have set up an appointment
             to call you at 3:00pm EST to discuss your needs in more detail. If you would 
             like to reschedule this call please visit the following link: 
             [reschedule](sendgrid.com/reschedule?id=1234)
 
                Regards,
 
                Jared
                555.555.5555  

    


  

`
