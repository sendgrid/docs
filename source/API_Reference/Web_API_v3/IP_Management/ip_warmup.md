---
layout: page
title: IP Warmup
weight: 80
navigation:
  show: true
---

If a customer has warm IPs and new IPs that need warming, KAMTA will look to use exisitng warm IPs in case of an overflow, then overflow as needed. 

If all IPs are in warmup and a pool it is OK to use the overflow IPs 

If user has dedicated IPs NOT in the pool, it's still OK to use the overflow IPs

If a user has no warm IPs and they make a request to warm a new IP, any requests made above the hourly maximum will overflow to our IP Warm Up Clusters for sending. These are similar to the shared IP pools used for Bronze and Marketing email users. 

Users can't use the warm up cluster for their overflow traffic if their reputation score is below 85. We won't throttle their mail, and only will send the daily limit based on the warm up schedule. 

An IP in warm up will follow SendGrid's warm up policy schedule. 

{% info %}
IP Pools are available if you have dedicated IPs for your account.
To add IPs to your account, please contact support.
{% endinfo %}

Get all IPs in Warm Up 
Purpose: Get warm up status for all your IPs

Verb: GET

https://api.sendgrid.com/v3/ips/warmup
Response: 200

{
ip: "000.000.000.000"
start_date: 1407715200
}
Get Warm Up status for an IP
Purpose: Get warm up status for a particular IP

Verb: GET

https://api.sendgrid.com/v3/ips/warmup/000.000.000.000
Response: 200

{
 ip: "000.000.000.000"
 start_date: 1406678400
}
Add IP to Warm Up 
Purpose: Put IP into warm up 

Verb: POST

https://api.sendgrid.com/v3/ips/warmup
Parameter:

{
 ip: "000.000.000.000"
}
 

Response: 200

{
true
}
Remove IP from Warm Up 
Purpose: Remove an IP from warm up

Verb: DELETE

https://api.sendgrid.com/v3/ips/warmup/000.000.000.000
Response: 200

{
true
}
Get Warm Up State and Pools for all IPs
Purpose: Get the warm up states and pools for all your IPs

Verb: GET

https://api.sendgrid.com/v3/ips
Response: 200

{
.....
}

