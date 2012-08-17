---
comments: false
date: 2011-05-15 19:44:05
layout: page
slug: schedule
title: Schedule
wordpress_id: 660
following_users:
- support_docs
---

This module allows you to add, view, or remove scheduled delivery events for Newsletters.  




> **TIP >> **You may notice that you can only schedule newsletters to be sent, but there appears to be no function to just send right when you make the call. The trick is to leave out the **at** and **after** parameters and your newsletter will be processed immediately.






## add


Schedule a delivery time for an existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
Yes

      
Must be an existing Newsletter.

      
Newsletter to schedule delivery for. (If Newsletter should be sent now, include no additional parameters.)

    
    


      
at

      
No

      
Date / Time must be provided in ISO 8601 format (YYYY-MM-DD HH:MM:SS+-HH:MM)

      
Date / Time to schedule newsletter Delivery.

    
    


      
after

      
No

      
Must be a positive integer.

      
Number of minutes until delivery should occur.

    
  




## get


Retrieve the scheduled delivery time for an existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
Yes

      
Must be an existing Newsletter.

      
Retrieve the delivery time scheduled for this Newsletter.

    
  




## delete


Cancel a scheduled send for a Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
Yes

      
Must be an existing Newsletter

      
Remove the scheduled delivery time from an existing Newsletter.

    
  
