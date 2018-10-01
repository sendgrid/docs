---
seo:
  title: How to Create a Subuser with the API
  description: How to Create a Subuser with the API
  keywords: subuser, api, IP, account, new, create, /customer.
title: How to Create a Subuser with the API
weight: 0
layout: page
zendesk_id: 201750787
navigation:
  show: true
---

<center>Creating a new subuser through SendGrid's API is a multi-step process. This guide will walk you through the necessary steps in order to create a new subuser account using only API calls.</center>

**1. Establish the New Subuser ** (required)

With the [subuser creation API call](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/subusers.html) you will be able to establish the new subuser's account and profile settings. This call will create the new subuser account, however it does not apply the sending IP for the account, nor does it establish a domain authentication entry or enable website/SMTP access for the subuser.  

**Call Example:** https://api.sendgrid.com/apiv2/customer.add.json?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&username=newsubuser\_username&website=yourdomain.com&password=newsubuser\_password&confirm\_password=newsubuser\_password&first\_name=Ryan&last\_name=Burrer&address=555\_anystreet&city=any\_city&state=CO&zip=80203&email=example@example.com&country=US&phone=555-5555

<center>
<strong>Success Message<br></strong><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/5e355c42-487e-442a-bd2b-89c9d80dd7d0/00000094.png" alt=""><center><strong> <br>Failure Message<br></strong></center>
<img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/d8482205-976f-4f82-ad3a-77503e867c2f/00000095.png" alt=""> <strong><span class="wysiwyg-font-size-medium"><br><br></span></strong>
</center>

**2. Assign an IP to be Used by the New Subuser**  (required)   

Now that you have created the new subuser account, you will need to [add an IP](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/ip_management.html#-Subuser-IP-Assignment) so that it can send emails. We advise that you first find an available IP for this subuser. You can do so by using the following call:

**Call Example:** https://api.sendgrid.com/apiv2/customer.ip.xml?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&list=all

When defining the parameter 'list' there are a few options you can choose:

- **All ** = Will list all of the IPs on your account, taken or available.
- **Free ** = Will list all the free IPs on your account. For instance, if an IP is in use by a subuser or parent account then that IP will not be listed.
- **Taken ** = Will list all of the IP addresses that are assigned to your parent and/or subuser accounts.
- **Available ** = Will list all of the unassigned IP addresses for the account. If a subuser is deactivated _and it _is assigned an IP, that IP will show up on this list since that IP address is not technically in use.
<center>
<strong>Response Example<br></strong><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/0dc1923b-fff9-4446-aff1-5dcab41929a4/00000096.png" alt="" align="middle">
</center>

After you have selected the IP that you wish to assign to your subuser account, simply make the API call to [append the IP address](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/ip_management.html#-Subuser-IP-Assignment).

**Call Example:** https://api.sendgrid.com/apiv2/customer.sendip.json?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&task=append&set=specify&user=newsubuser\_username&ip[]=255.255.255.250&ip[]=255.255.255.255

When defining this call's 'set' parameter, you have a few options for appending the subuser's IP:

- **None ** = removes all of the IPs on the associated account.
- **All ** = applies all of the possible IPs to the account.
- **Specify** = Specify the IPs to the subuser
<center>
<strong>Success Message</strong>
<p class="wysiwyg-text-align-left"><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/5e355c42-487e-442a-bd2b-89c9d80dd7d0/00000094.png" alt="" align="middle"></p>
<strong>Failure Message</strong>
<p class="wysiwyg-text-align-left"><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/d8482205-976f-4f82-ad3a-77503e867c2f/00000095.png" alt="" align="middle"></p>
</center>

 

**3. Assign a domain authentication for the Subuser Account ** (optional)

After you have created the subuser account and have appended an IP address, you are now ready to assign an _existing_  [authenticated domain](https://sendgrid.com/docs/User_Guide/Settings/Sender_authentication/How_to_set_up_domain_authentication.html) to the account. If you have not yet created the required records for authenticating your chosen domain then this step should be skipped.

First, you should find out what authenticated domains you have associated with your account. This call will [list your available authenticated domains](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/whitelabel.html#-List):

**Call Example: ** https://api.sendgrid.com/apiv2/customer.whitelabel.json?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&task=list

<center>
<strong>Response Example</strong>
<p class="wysiwyg-text-align-left"><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/9d491f57-d3c8-4376-a31d-a04b49590747/00000097.png" alt=""></p>
</center>

The API response above shows that email.sendgrid.com and email.example.com are both already established domain entries, and can be used by this subuser. If none are displayed then the next step in this process should be skipped.

If you have a authenticated domain entry that you wish to apply to your subuser then you will need to [append the whitelabel entry](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/whitelabel.html#-Append) to your subuser:

**Call Example:**  https://api.sendgrid.com/apiv2/customer.whitelabel.json?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&task=append&user=newsubuser\_username&mail\_domain=YOUR.ALREADY.EXISTING.WHITELABEL

<center>
<strong>Success Message</strong>
<p class="wysiwyg-text-align-left"><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/5e355c42-487e-442a-bd2b-89c9d80dd7d0/00000094.png" alt="" align="middle"></p>
<strong>Failure Message</strong>
<p><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/d8482205-976f-4f82-ad3a-77503e867c2f/00000095.png" alt=""></p>
</center>

**4. Authenticating the Subuser to Have Website/SMTP Access ** (required)

The final step in creating your new subuser requires you to simply [activate the subuser](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/authenticate_a_subuser.html) account so that they have website and SMTP access.

**Call Example:**  https://api.sendgrid.com/apiv2/customer.auth.json?api\_user=ryan.burrer@sendgrid.com&api\_key=xxxxxx&user=newsubuser\_username&password=newsubuser\_password

<center>
<strong>Success Message</strong>
<p><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/5e355c42-487e-442a-bd2b-89c9d80dd7d0/00000094.png" alt="" align="middle"></p>
<strong>Failure Message</strong>
<p><img src="http://content.screencast.com/users/Ryan.Burrer/folders/Jing/media/d8482205-976f-4f82-ad3a-77503e867c2f/00000095.png" alt=""></p>
</center>
<center>
<br><strong>That's All, Folks!</strong>
</center>

If you have followed all of these steps then you have just created a new subuser using the Subuser API. Give yourself a high five!  

But wait, there's more... 

Now that you have created a new subuser you can change the [Event Notification URL](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/event_notification_url.html), the subuser's enabled [apps](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/apps.html), and even set [account limits](http://sendgrid.com/docs/API_Reference/Customer_Subuser_API/account_limits.html) for the subuser.  

<center>
<p> </p>
</center>

 
