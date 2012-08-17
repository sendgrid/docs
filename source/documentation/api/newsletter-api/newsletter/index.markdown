---
comments: false
date: 2011-05-01 16:02:56
layout: page
slug: newsletter
title: Newsletter
wordpress_id: 611
---

This module allows you to add, view, or remove newsletters.




## add


Create a new Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
identity

      
Yes

      
Must be an existing Identity

      
The Identity that will be used for the Newsletter being created.

    
    


      
name

      
Yes

      
None

      
The name that will be used for the Newsletter being created.

    



      
subject

      
Yes

      
None

      
The subject that will be used for the Newsletter being created.

    



      
text

      
Yes

      
None

      
The text portion of the Newsletter being created.

    



      
html

      
Yes

      
None

      
The html portion of the Newsletter being created.

    
  




## edit


Edit an existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
      
name

      
Yes

      
Must be an existing Identity

      
The name of the Newsletter being updated.

    



    


      
newname

      
Yes

      
None

      
The new name for the Newsletter being edited.

    
    


    


      
identity

      
Yes

      
Must be an existing Identity

      
The new Identity for the Newsletter being edited.

    
    


      
subject

      
Yes

      
None

      
The new subject that will be used for the Newsletter being edited.

    



      
text

      
Yes

      
None

      
The new text portion of the Newsletter being edited.

    



      
html

      
Yes

      
None

      
The new html portion of the Newsletter being edited.

    
  




## get


Retrieve the contents of an existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
Yes

      
Must be an existing Newsletter

      
Retrieve the content of an existing Newsletter.

    
  




## list


Retrieve a list of all existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
No

      
Must be an existing Newsletter

      
Search to see if a specific Newsletter exists rather than a list of all Newsletters.

    
  




## delete


Remove an existing Newsletter.



### Parameters





    


      Parameter
      Required
      Requirements
      Description
    
    


      
name

      
Yes

      
Must be an existing Newsletter

      
Remove the Newsletter with this name.

    
  
