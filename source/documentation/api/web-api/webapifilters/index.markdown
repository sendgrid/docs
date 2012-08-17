---
comments: false
date: 2011-08-04 16:43:42
layout: page
slug: webapifilters
title: Filter Commands
wordpress_id: 2460
---




## Get Available


List all of the available apps.
_Note: The name entry is used in all the other API calls to identify a app._
For a list of all the apps and parameters accesible with the Web API you can check the [Filter Settings](/documentation/api/web-api/filtersettings/) page.





### XML


Command
`https://sendgrid.com/api/filter.getavailable.xml?api_user=youremail@domain.com&api;_key=secureSecret`
**Return - Success**
`

  
    twitter
    Twitter
    This plugin allows you to send an email message to twitter
    0
  
  ...

`


### JSON


Command
`https://sendgrid.com/api/filter.getavailable.json?api_user=youremail@domain.com&api;_key=secureSecret`
**Return - Success**
`[{"name":"twitter","title":"Twitter","description":"This plugin allows you to send an email message to twitter","activated":false}, ... ]`






## Activate App




### XML


Command
`https://sendgrid.com/api/filter.activate.xml?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return - Success**
`

  success

`


### JSON


Command
`https://sendgrid.com/api/filter.activate.json?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return**
`{"message":"success"}`






## Deactivate App




### XML


Command
`https://sendgrid.com/api/filter.deactivate.xml?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return - Success**
`

  success

`


### JSON


Command
`https://sendgrid.com/api/filter.deactivate.json?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return**
`{"message":"success"}`






## Setup App


These API calls require that settings are passed using POST.


### PHP curl


Code Example
` $user,
  'api_key' => $pass,
  'name' => 'twitter',
  'username' => 'twitterusername',
  'password' => 'twitterpassword',
);

$request = $url.'/api/filter.setup.xml';

// Generate curl request
$session = curl_init($request);
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
 
// obtain response
$response = curl_exec($session);
curl_close($session);
 
// print everything out
print_r($response);

`






## Get Settings




### XML


Command
`https://sendgrid.com/api/filter.getsettings.xml?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return - Success**
`

    field_value
    ...

`
**Return - Error**
`

  error
  ... error messages ...

`


### Return - Empty


_*This is returned if that filter has no settings or is not enabled._
``


### JSON


Command
`https://sendgrid.com/api/filter.getsettings.json?api_user=youremail@domain.com&api;_key=secureSecret&name;=twitter`
**Return - Success**
`{"message":"success","settings":{"field_name":"field_value”}}`
**Return - Error**
`{"message":"error","errors":[..."error messages"...]}`
**Return - Empty**
_*This is returned if that filter has no settings or is not enabled._
`{"settings":null}`
