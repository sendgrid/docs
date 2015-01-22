---
layout: page
weight: 0
title: Timezone
navigation:
  show: true
---

A user's timezone affects the displayed dates on all Suppression Lists and Statistics.

{% anchor h2 %}
get 
{% endanchor %}

Get current timezone assigned to the user.

{% apiexample get GET https://api.sendgrid.com/api/timezone/get api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
{
  "name": "Eastern Time, US & Canada",
  "offset": 18000,
  "timezone": "America/New_York",
  "display": "GMT-05:00"
}
  {% endresponse %}
  {% response xml %}
<timezone>
  <name>Eastern Time, US & Canada</name>
  <offset>18000</offset>
  <timezone>America/New_York</timezone>
  <display>GMT-05:00</display>
</timezone>
  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
edit 
{% endanchor %}

Update the timezone assigned to the user.

{% parameters edit %}
 {% parameter timezone Yes '[IANA timezone *Area/Location* format](http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones)' 'Timezone to set on user' %}
{% endparameters %}

{% apiexample edit POST https://api.sendgrid.com/api/timezone/edit api_user=your_sendgrid_username&api_key=your_sendgrid_password&timezone=America/New_York %}
  {% response json %}
{
  "message": "success"
}
  {% endresponse %}
  {% response xml %}
<result>
  <message>success</message>
</result>
  {% endresponse %}
{% endapiexample %}

* * * * *

{% anchor h2 %}
list 
{% endanchor %}

This example provides the full list of IANA timezones in the SendGrid system, for reference. It's best practice to use the `timezone` parameter.

{% parameters list %}
 {% parameter timezone No '[IANA timezone *Area/Location* format](http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones)' 'Restrict query to confirm existence of named timezone' %}
{% endparameters %}

{% apiexample list GET https://api.sendgrid.com/api/timezone/list api_user=your_sendgrid_username&api_key=your_sendgrid_password %}
  {% response json %}
[
  {
    "timezone": "Pacific/Tongatapu",
    "offset": -46800,
    "display": "GMT+13:00",
    "name": "Nuku'alofa"
  },
  {
    "timezone": "Pacific/Auckland",
    "offset": -46800,
    "display": "GMT+12:00",
    "name": "Auckland, Wellington"
  },
  {
    "timezone": "Etc/GMT-12",
    "offset": -43200,
    "display": "GMT+12:00",
    "name": "Fiji, Kamchatka, Marshall Is."
  },
  {
    "timezone": "Asia/Magadan",
    "offset": -43200,
    "display": "GMT+12:00",
    "name": "Magadan"
  },
  {
    "timezone": "Etc/GMT-11",
    "offset": -39600,
    "display": "GMT+11:00",
    "name": "Solomon Is., New Caledonia"
  },
  {
    "timezone": "Asia/Vladivostok",
    "offset": -39600,
    "display": "GMT+11:00",
    "name": "Vladivostok"
  },
  {
    "timezone": "Asia/Yakutsk",
    "offset": -36000,
    "display": "GMT+10:00",
    "name": "Yakutsk"
  },
  {
    "timezone": "Australia/Brisbane",
    "offset": -36000,
    "display": "GMT+10:00",
    "name": "Brisbane"
  },
  {
    "timezone": "Australia/Sydney",
    "offset": -39600,
    "display": "GMT+10:00",
    "name": "Canberra, Melbourne, Sydney"
  },
  {
    "timezone": "Australia/Hobart",
    "offset": -39600,
    "display": "GMT+10:00",
    "name": "Hobart"
  },
  {
    "timezone": "Australia/Adelaide",
    "offset": -37800,
    "display": "GMT+09:30",
    "name": "Adelaide"
  },
  {
    "timezone": "Australia/Darwin",
    "offset": -34200,
    "display": "GMT+09:30",
    "name": "Darwin"
  },
  {
    "timezone": "Asia/Irkutsk",
    "offset": -32400,
    "display": "GMT+09:00",
    "name": "Irkutsk, Ulaan Bataar"
  },
  {
    "timezone": "Asia/Tokyo",
    "offset": -32400,
    "display": "GMT+09:00",
    "name": "Osaka, Sapporo, Tokyo"
  },
  {
    "timezone": "Asia/Seoul",
    "offset": -32400,
    "display": "GMT+09:00",
    "name": "Seoul"
  },
  {
    "timezone": "Asia/Hong_Kong",
    "offset": -28800,
    "display": "GMT+08:00",
    "name": "Beijing, Chongqing, Hong Kong, Urumqi"
  },
  {
    "timezone": "Asia/Krasnoyarsk",
    "offset": -28800,
    "display": "GMT+08:00",
    "name": "Krasnoyarsk"
  },
  {
    "timezone": "Australia/Perth",
    "offset": -28800,
    "display": "GMT+08:00",
    "name": "Perth"
  },
  {
    "timezone": "Asia/Taipei",
    "offset": -28800,
    "display": "GMT+08:00",
    "name": "Taipei"
  },
  {
    "timezone": "Asia/Bangkok",
    "offset": -25200,
    "display": "GMT+07:00",
    "name": "Bangkok, Hanoi, Jakarta"
  },
  {
    "timezone": "Asia/Novosibirsk",
    "offset": -25200,
    "display": "GMT+07:00",
    "name": "Novosibirsk"
  },
  {
    "timezone": "Asia/Rangoon",
    "offset": -23400,
    "display": "GMT+06:30",
    "name": "Yangon Rangoon"
  },
  {
    "timezone": "Asia/Dhaka",
    "offset": -21600,
    "display": "GMT+06:00",
    "name": "Astana, Dhaka"
  },
  {
    "timezone": "Asia/Yekaterinburg",
    "offset": -21600,
    "display": "GMT+06:00",
    "name": "Ekaterinburg"
  },
  {
    "timezone": "Asia/Katmandu",
    "offset": -20700,
    "display": "GMT+05:45",
    "name": "Kathmandu"
  },
  {
    "timezone": "Asia/Kolkata",
    "offset": -19800,
    "display": "GMT+05:30",
    "name": "Chennai, Kolkata, Mumbai, New Delhi"
  },
  {
    "timezone": "Asia/Tashkent",
    "offset": -18000,
    "display": "GMT+05:00",
    "name": "Asia/Tashkent"
  },
  {
    "timezone": "Asia/Kabul",
    "offset": -16200,
    "display": "GMT+04:30",
    "name": "Kabul"
  },
  {
    "timezone": "Asia/Dubai",
    "offset": -14400,
    "display": "GMT+04:00",
    "name": "Abu Dhabi, Muscat"
  },
  {
    "timezone": "Asia/Baku",
    "offset": -14400,
    "display": "GMT+04:00",
    "name": "Baku"
  },
  {
    "timezone": "Europe/Moscow",
    "offset": -14400,
    "display": "GMT+04:00",
    "name": "Moscow, St. Petersburg, Volgograd"
  },
  {
    "timezone": "Asia/Tbilisi",
    "offset": -14400,
    "display": "GMT+04:00",
    "name": "Tbilisi"
  },
  {
    "timezone": "Asia/Yerevan",
    "offset": -14400,
    "display": "GMT+04:00",
    "name": "Yerevan"
  },
  {
    "timezone": "Asia/Tehran",
    "offset": -12600,
    "display": "GMT+03:30",
    "name": "Tehran"
  },
  {
    "timezone": "Asia/Baghdad",
    "offset": -10800,
    "display": "GMT+03:00",
    "name": "Baghdad"
  },
  {
    "timezone": "Europe/Minsk",
    "offset": -10800,
    "display": "GMT+03:00",
    "name": "Kaliningrad, Minsk"
  },
  {
    "timezone": "Asia/Kuwait",
    "offset": -10800,
    "display": "GMT+03:00",
    "name": "Kuwait, Riyadh"
  },
  {
    "timezone": "Africa/Addis_Ababa",
    "offset": -10800,
    "display": "GMT+03:00",
    "name": "Nairobi"
  },
  {
    "timezone": "Asia/Amman",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Amman"
  },
  {
    "timezone": "Europe/Bucharest",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Athens, Bucharest"
  },
  {
    "timezone": "Asia/Beirut",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Beirut"
  },
  {
    "timezone": "Africa/Cairo",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Cairo"
  },
  {
    "timezone": "Asia/Damascus",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Damascus"
  },
  {
    "timezone": "Africa/Blantyre",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Harare, Pretoria"
  },
  {
    "timezone": "Europe/Helsinki",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
  },
  {
    "timezone": "Europe/Istanbul",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Istanbul"
  },
  {
    "timezone": "Asia/Jerusalem",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Jerusalem"
  },
  {
    "timezone": "Europe/Nicosia",
    "offset": -7200,
    "display": "GMT+02:00",
    "name": "Nicosia"
  },
  {
    "timezone": "Europe/Amsterdam",
    "offset": -3600,
    "display": "GMT+01:00",
    "name": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
  },
  {
    "timezone": "Europe/Belgrade",
    "offset": -3600,
    "display": "GMT+01:00",
    "name": "Belgrade, Bratislava, Budapest, Prague, Ljubljana"
  },
  {
    "timezone": "Europe/Brussels",
    "offset": -3600,
    "display": "GMT+01:00",
    "name": "Brussels, Copenhagen, Madrid, Paris"
  },
  {
    "timezone": "Europe/Warsaw",
    "offset": -3600,
    "display": "GMT+01:00",
    "name": "Sarajevo, Skopje, Warsaw, Zagreb"
  },
  {
    "timezone": "Africa/Algiers",
    "offset": -3600,
    "display": "GMT+01:00",
    "name": "West Central Africa"
  },
  {
    "timezone": "Africa/Windhoek",
    "offset": -7200,
    "display": "GMT+01:00",
    "name": "Windhoek"
  },
  {
    "timezone": "Africa/Casablanca",
    "offset": 0,
    "display": "GMT-00:00",
    "name": "Casablanca"
  },
  {
    "timezone": "Etc/UTC",
    "offset": 0,
    "display": "GMT-00:00",
    "name": "Coordinated Universal Time"
  },
  {
    "timezone": "Africa/Abidjan",
    "offset": 0,
    "display": "GMT-00:00",
    "name": "Monrovia, Reykjavik"
  },
  {
    "timezone": "Europe/London",
    "offset": 0,
    "display": "GMT-00:00",
    "name": "Dublin, Lisabon, London, Edinburgh"
  },
  {
    "timezone": "Atlantic/Cape_Verde",
    "offset": 3600,
    "display": "GMT-01:00",
    "name": "Cape Verde Is."
  },
  {
    "timezone": "Atlantic/Azores",
    "offset": 3600,
    "display": "GMT-01:00",
    "name": "Azores"
  },
  {
    "timezone": "America/Noronha",
    "offset": 7200,
    "display": "GMT-02:00",
    "name": "Mid-Atlantic"
  },
  {
    "timezone": "Etc/GMT+2",
    "offset": 7200,
    "display": "GMT-02:00",
    "name": "Coordinated Universal Time - 02"
  },
  {
    "timezone": "America/Sao_Paulo",
    "offset": 7200,
    "display": "GMT-03:00",
    "name": "Brasilia"
  },
  {
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": 10800,
    "display": "GMT-03:00",
    "name": "Buenos Aires"
  },
  {
    "timezone": "America/Cayenne",
    "offset": 10800,
    "display": "GMT-03:00",
    "name": "Cayenne, Fortalenza"
  },
  {
    "timezone": "America/Godthab",
    "offset": 10800,
    "display": "GMT-03:00",
    "name": "Greenland"
  },
  {
    "timezone": "America/Montevideo",
    "offset": 7200,
    "display": "GMT-03:00",
    "name": "Montevideo"
  },
  {
    "timezone": "America/St_Johns",
    "offset": 12600,
    "display": "GMT-03:30",
    "name": "Newfoundland"
  },
  {
    "timezone": "America/Asuncion",
    "offset": 10800,
    "display": "GMT-04:00",
    "name": "Asuncion"
  },
  {
    "timezone": "America/Goose_Bay",
    "offset": 14400,
    "display": "GMT-04:00",
    "name": "Atlantic Time, Goose Bay"
  },
  {
    "timezone": "America/Glace_Bay",
    "offset": 14400,
    "display": "GMT-04:00",
    "name": "Atlantic Time, Canada"
  },
  {
    "timezone": "America/Cuiaba",
    "offset": 10800,
    "display": "GMT-04:00",
    "name": "Cuiaba"
  },
  {
    "timezone": "America/La_Paz",
    "offset": 14400,
    "display": "GMT-04:00",
    "name": "Georgetown, La Paz, Manaus, San Juan"
  },
  {
    "timezone": "America/Santiago",
    "offset": 10800,
    "display": "GMT-04:00",
    "name": "Santiago"
  },
  {
    "timezone": "America/Caracas",
    "offset": 16200,
    "display": "GMT-04:30",
    "name": "Caracas"
  },
  {
    "timezone": "America/Bogota",
    "offset": 18000,
    "display": "GMT-05:00",
    "name": "Bogota, Lima, Quito, Rio Branco"
  },
  {
    "timezone": "America/New_York",
    "offset": 18000,
    "display": "GMT-05:00",
    "name": "Eastern Time, US & Canada"
  },
  {
    "timezone": "America/Havana",
    "offset": 18000,
    "display": "GMT-05:00",
    "name": "Cuba"
  },
  {
    "timezone": "America/Indiana/Indianapolis",
    "offset": 18000,
    "display": "GMT-05:00",
    "name": "Indiana (East)"
  },
  {
    "timezone": "America/Belize",
    "offset": 21600,
    "display": "GMT-06:00",
    "name": "Central America"
  },
  {
    "timezone": "America/Chicago",
    "offset": 21600,
    "display": "GMT-06:00",
    "name": "Central Time, US & Canada"
  },
  {
    "timezone": "America/Cancun",
    "offset": 21600,
    "display": "GMT-06:00",
    "name": "Guadalajara, Mexico City, Monterrey"
  },
  {
    "timezone": "Canada/Saskatchewan",
    "offset": 21600,
    "display": "GMT-06:00",
    "name": "Saskatchewan"
  },
  {
    "timezone": "America/Dawson_Creek",
    "offset": 25200,
    "display": "GMT-07:00",
    "name": "Arizona"
  },
  {
    "timezone": "America/Chihuahua",
    "offset": 25200,
    "display": "GMT-07:00",
    "name": "Chihuahua, La Paz, Mazatlan"
  },
  {
    "timezone": "America/Denver",
    "offset": 25200,
    "display": "GMT-07:00",
    "name": "Mountain Time, US & Canada"
  },
  {
    "timezone": "America/Ensenada",
    "offset": 28800,
    "display": "GMT-08:00",
    "name": "Tijuana, Baja California"
  },
  {
    "timezone": "America/Los_Angeles",
    "offset": 28800,
    "display": "GMT-08:00",
    "name": "Pacific Time, US & Canada"
  },
  {
    "timezone": "America/Anchorage",
    "offset": 32400,
    "display": "GMT-09:00",
    "name": "Alaska"
  },
  {
    "timezone": "Etc/GMT+10",
    "offset": 36000,
    "display": "GMT-10:00",
    "name": "Hawaii"
  },
  {
    "timezone": "Pacific/Midway",
    "offset": 39600,
    "display": "GMT-11:00",
    "name": "Midway Island, Samoa"
  },
  {
    "timezone": "Etc/GMT+12",
    "offset": 43200,
    "display": "GMT-12:00",
    "name": "International Date Line West"
  }
]
  {% endresponse %}
  {% response xml %}
<timezones>
<timezone>
  <timezone>Pacific/Tongatapu</timezone>
  <offset>-46800</offset>
  <display>GMT+13:00</display>
  <name>Nuku'alofa</name>
</timezone>
<timezone>
  <timezone>Pacific/Auckland</timezone>
  <offset>-46800</offset>
  <display>GMT+12:00</display>
  <name>Auckland, Wellington</name>
</timezone>
<timezone>
  <timezone>Etc/GMT-12</timezone>
  <offset>-43200</offset>
  <display>GMT+12:00</display>
  <name>Fiji, Kamchatka, Marshall Is.</name>
</timezone>
<timezone>
  <timezone>Asia/Magadan</timezone>
  <offset>-43200</offset>
  <display>GMT+12:00</display>
  <name>Magadan</name>
</timezone>
<timezone>
  <timezone>Etc/GMT-11</timezone>
  <offset>-39600</offset>
  <display>GMT+11:00</display>
  <name>Solomon Is., New Caledonia</name>
</timezone>
<timezone>
  <timezone>Asia/Vladivostok</timezone>
  <offset>-39600</offset>
  <display>GMT+11:00</display>
  <name>Vladivostok</name>
</timezone>
<timezone>
  <timezone>Asia/Yakutsk</timezone>
  <offset>-36000</offset>
  <display>GMT+10:00</display>
  <name>Yakutsk</name>
</timezone>
<timezone>
  <timezone>Australia/Brisbane</timezone>
  <offset>-36000</offset>
  <display>GMT+10:00</display>
  <name>Brisbane</name>
</timezone>
<timezone>
  <timezone>Australia/Sydney</timezone>
  <offset>-39600</offset>
  <display>GMT+10:00</display>
  <name>Canberra, Melbourne, Sydney</name>
</timezone>
<timezone>
  <timezone>Australia/Hobart</timezone>
  <offset>-39600</offset>
  <display>GMT+10:00</display>
  <name>Hobart</name>
</timezone>
<timezone>
  <timezone>Australia/Adelaide</timezone>
  <offset>-37800</offset>
  <display>GMT+09:30</display>
  <name>Adelaide</name>
</timezone>
<timezone>
  <timezone>Australia/Darwin</timezone>
  <offset>-34200</offset>
  <display>GMT+09:30</display>
  <name>Darwin</name>
</timezone>
<timezone>
  <timezone>Asia/Irkutsk</timezone>
  <offset>-32400</offset>
  <display>GMT+09:00</display>
  <name>Irkutsk, Ulaan Bataar</name>
</timezone>
<timezone>
  <timezone>Asia/Tokyo</timezone>
  <offset>-32400</offset>
  <display>GMT+09:00</display>
  <name>Osaka, Sapporo, Tokyo</name>
</timezone>
<timezone>
  <timezone>Asia/Seoul</timezone>
  <offset>-32400</offset>
  <display>GMT+09:00</display>
  <name>Seoul</name>
</timezone>
<timezone>
  <timezone>Asia/Hong_Kong</timezone>
  <offset>-28800</offset>
  <display>GMT+08:00</display>
  <name>Beijing, Chongqing, Hong Kong, Urumqi</name>
</timezone>
<timezone>
  <timezone>Asia/Krasnoyarsk</timezone>
  <offset>-28800</offset>
  <display>GMT+08:00</display>
  <name>Krasnoyarsk</name>
</timezone>
<timezone>
  <timezone>Australia/Perth</timezone>
  <offset>-28800</offset>
  <display>GMT+08:00</display>
  <name>Perth</name>
</timezone>
<timezone>
  <timezone>Asia/Taipei</timezone>
  <offset>-28800</offset>
  <display>GMT+08:00</display>
  <name>Taipei</name>
</timezone>
<timezone>
  <timezone>Asia/Bangkok</timezone>
  <offset>-25200</offset>
  <display>GMT+07:00</display>
  <name>Bangkok, Hanoi, Jakarta</name>
</timezone>
<timezone>
  <timezone>Asia/Novosibirsk</timezone>
  <offset>-25200</offset>
  <display>GMT+07:00</display>
  <name>Novosibirsk</name>
</timezone>
<timezone>
  <timezone>Asia/Rangoon</timezone>
  <offset>-23400</offset>
  <display>GMT+06:30</display>
  <name>Yangon Rangoon</name>
</timezone>
<timezone>
  <timezone>Asia/Dhaka</timezone>
  <offset>-21600</offset>
  <display>GMT+06:00</display>
  <name>Astana, Dhaka</name>
</timezone>
<timezone>
  <timezone>Asia/Yekaterinburg</timezone>
  <offset>-21600</offset>
  <display>GMT+06:00</display>
  <name>Ekaterinburg</name>
</timezone>
<timezone>
  <timezone>Asia/Katmandu</timezone>
  <offset>-20700</offset>
  <display>GMT+05:45</display>
  <name>Kathmandu</name>
</timezone>
<timezone>
  <timezone>Asia/Kolkata</timezone>
  <offset>-19800</offset>
  <display>GMT+05:30</display>
  <name>Chennai, Kolkata, Mumbai, New Delhi</name>
</timezone>
<timezone>
  <timezone>Asia/Tashkent</timezone>
  <offset>-18000</offset>
  <display>GMT+05:00</display>
  <name>Asia/Tashkent</name>
</timezone>
<timezone>
  <timezone>Asia/Kabul</timezone>
  <offset>-16200</offset>
  <display>GMT+04:30</display>
  <name>Kabul</name>
</timezone>
<timezone>
  <timezone>Asia/Dubai</timezone>
  <offset>-14400</offset>
  <display>GMT+04:00</display>
  <name>Abu Dhabi, Muscat</name>
</timezone>
<timezone>
  <timezone>Asia/Baku</timezone>
  <offset>-14400</offset>
  <display>GMT+04:00</display>
  <name>Baku</name>
</timezone>
<timezone>
  <timezone>Europe/Moscow</timezone>
  <offset>-14400</offset>
  <display>GMT+04:00</display>
  <name>Moscow, St. Petersburg, Volgograd</name>
</timezone>
<timezone>
  <timezone>Asia/Tbilisi</timezone>
  <offset>-14400</offset>
  <display>GMT+04:00</display>
  <name>Tbilisi</name>
</timezone>
<timezone>
  <timezone>Asia/Yerevan</timezone>
  <offset>-14400</offset>
  <display>GMT+04:00</display>
  <name>Yerevan</name>
</timezone>
<timezone>
  <timezone>Asia/Tehran</timezone>
  <offset>-12600</offset>
  <display>GMT+03:30</display>
  <name>Tehran</name>
</timezone>
<timezone>
  <timezone>Asia/Baghdad</timezone>
  <offset>-10800</offset>
  <display>GMT+03:00</display>
  <name>Baghdad</name>
</timezone>
<timezone>
  <timezone>Europe/Minsk</timezone>
  <offset>-10800</offset>
  <display>GMT+03:00</display>
  <name>Kaliningrad, Minsk</name>
</timezone>
<timezone>
  <timezone>Asia/Kuwait</timezone>
  <offset>-10800</offset>
  <display>GMT+03:00</display>
  <name>Kuwait, Riyadh</name>
</timezone>
<timezone>
  <timezone>Africa/Addis_Ababa</timezone>
  <offset>-10800</offset>
  <display>GMT+03:00</display>
  <name>Nairobi</name>
</timezone>
<timezone>
  <timezone>Asia/Amman</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Amman</name>
</timezone>
<timezone>
  <timezone>Europe/Bucharest</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Athens, Bucharest</name>
</timezone>
<timezone>
  <timezone>Asia/Beirut</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Beirut</name>
</timezone>
<timezone>
  <timezone>Africa/Cairo</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Cairo</name>
</timezone>
<timezone>
  <timezone>Asia/Damascus</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Damascus</name>
</timezone>
<timezone>
  <timezone>Africa/Blantyre</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Harare, Pretoria</name>
</timezone>
<timezone>
  <timezone>Europe/Helsinki</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</name>
</timezone>
<timezone>
  <timezone>Europe/Istanbul</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Istanbul</name>
</timezone>
<timezone>
  <timezone>Asia/Jerusalem</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Jerusalem</name>
</timezone>
<timezone>
  <timezone>Europe/Nicosia</timezone>
  <offset>-7200</offset>
  <display>GMT+02:00</display>
  <name>Nicosia</name>
</timezone>
<timezone>
  <timezone>Europe/Amsterdam</timezone>
  <offset>-3600</offset>
  <display>GMT+01:00</display>
  <name>Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</name>
</timezone>
<timezone>
  <timezone>Europe/Belgrade</timezone>
  <offset>-3600</offset>
  <display>GMT+01:00</display>
  <name>Belgrade, Bratislava, Budapest, Prague, Ljubljana</name>
</timezone>
<timezone>
  <timezone>Europe/Brussels</timezone>
  <offset>-3600</offset>
  <display>GMT+01:00</display>
  <name>Brussels, Copenhagen, Madrid, Paris</name>
</timezone>
<timezone>
  <timezone>Europe/Warsaw</timezone>
  <offset>-3600</offset>
  <display>GMT+01:00</display>
  <name>Sarajevo, Skopje, Warsaw, Zagreb</name>
</timezone>
<timezone>
  <timezone>Africa/Algiers</timezone>
  <offset>-3600</offset>
  <display>GMT+01:00</display>
  <name>West Central Africa</name>
</timezone>
<timezone>
  <timezone>Africa/Windhoek</timezone>
  <offset>-7200</offset>
  <display>GMT+01:00</display>
  <name>Windhoek</name>
</timezone>
<timezone>
  <timezone>Africa/Casablanca</timezone>
  <offset>0</offset>
  <display>GMT-00:00</display>
  <name>Casablanca</name>
</timezone>
<timezone>
  <timezone>Etc/UTC</timezone>
  <offset>0</offset>
  <display>GMT-00:00</display>
  <name>Coordinated Universal Time</name>
</timezone>
<timezone>
  <timezone>Africa/Abidjan</timezone>
  <offset>0</offset>
  <display>GMT-00:00</display>
  <name>Monrovia, Reykjavik</name>
</timezone>
<timezone>
  <timezone>Europe/London</timezone>
  <offset>0</offset>
  <display>GMT-00:00</display>
  <name>Dublin, Lisabon, London, Edinburgh</name>
</timezone>
<timezone>
  <timezone>Atlantic/Cape_Verde</timezone>
  <offset>3600</offset>
  <display>GMT-01:00</display>
  <name>Cape Verde Is.</name>
</timezone>
<timezone>
  <timezone>Atlantic/Azores</timezone>
  <offset>3600</offset>
  <display>GMT-01:00</display>
  <name>Azores</name>
</timezone>
<timezone>
  <timezone>America/Noronha</timezone>
  <offset>7200</offset>
  <display>GMT-02:00</display>
  <name>Mid-Atlantic</name>
</timezone>
<timezone>
  <timezone>Etc/GMT+2</timezone>
  <offset>7200</offset>
  <display>GMT-02:00</display>
  <name>Coordinated Universal Time - 02</name>
</timezone>
<timezone>
  <timezone>America/Sao_Paulo</timezone>
  <offset>7200</offset>
  <display>GMT-03:00</display>
  <name>Brasilia</name>
</timezone>
<timezone>
  <timezone>America/Argentina/Buenos_Aires</timezone>
  <offset>10800</offset>
  <display>GMT-03:00</display>
  <name>Buenos Aires</name>
</timezone>
<timezone>
  <timezone>America/Cayenne</timezone>
  <offset>10800</offset>
  <display>GMT-03:00</display>
  <name>Cayenne, Fortalenza</name>
</timezone>
<timezone>
  <timezone>America/Godthab</timezone>
  <offset>10800</offset>
  <display>GMT-03:00</display>
  <name>Greenland</name>
</timezone>
<timezone>
  <timezone>America/Montevideo</timezone>
  <offset>7200</offset>
  <display>GMT-03:00</display>
  <name>Montevideo</name>
</timezone>
<timezone>
  <timezone>America/St_Johns</timezone>
  <offset>12600</offset>
  <display>GMT-03:30</display>
  <name>Newfoundland</name>
</timezone>
<timezone>
  <timezone>America/Asuncion</timezone>
  <offset>10800</offset>
  <display>GMT-04:00</display>
  <name>Asuncion</name>
</timezone>
<timezone>
  <timezone>America/Goose_Bay</timezone>
  <offset>14400</offset>
  <display>GMT-04:00</display>
  <name>Atlantic Time, Goose Bay</name>
</timezone>
<timezone>
  <timezone>America/Glace_Bay</timezone>
  <offset>14400</offset>
  <display>GMT-04:00</display>
  <name>Atlantic Time, Canada</name>
</timezone>
<timezone>
  <timezone>America/Cuiaba</timezone>
  <offset>10800</offset>
  <display>GMT-04:00</display>
  <name>Cuiaba</name>
</timezone>
<timezone>
  <timezone>America/La_Paz</timezone>
  <offset>14400</offset>
  <display>GMT-04:00</display>
  <name>Georgetown, La Paz, Manaus, San Juan</name>
</timezone>
<timezone>
  <timezone>America/Santiago</timezone>
  <offset>10800</offset>
  <display>GMT-04:00</display>
  <name>Santiago</name>
</timezone>
<timezone>
  <timezone>America/Caracas</timezone>
  <offset>16200</offset>
  <display>GMT-04:30</display>
  <name>Caracas</name>
</timezone>
<timezone>
  <timezone>America/Bogota</timezone>
  <offset>18000</offset>
  <display>GMT-05:00</display>
  <name>Bogota, Lima, Quito, Rio Branco</name>
</timezone>
<timezone>
  <timezone>America/New_York</timezone>
  <offset>18000</offset>
  <display>GMT-05:00</display>
  <name>Eastern Time, US &amp; Canada</name>
</timezone>
<timezone>
  <timezone>America/Havana</timezone>
  <offset>18000</offset>
  <display>GMT-05:00</display>
  <name>Cuba</name>
</timezone>
<timezone>
  <timezone>America/Indiana/Indianapolis</timezone>
  <offset>18000</offset>
  <display>GMT-05:00</display>
  <name>Indiana (East)</name>
</timezone>
<timezone>
  <timezone>America/Belize</timezone>
  <offset>21600</offset>
  <display>GMT-06:00</display>
  <name>Central America</name>
</timezone>
<timezone>
  <timezone>America/Chicago</timezone>
  <offset>21600</offset>
  <display>GMT-06:00</display>
  <name>Central Time, US &amp; Canada</name>
</timezone>
<timezone>
  <timezone>America/Cancun</timezone>
  <offset>21600</offset>
  <display>GMT-06:00</display>
  <name>Guadalajara, Mexico City, Monterrey</name>
</timezone>
<timezone>
  <timezone>Canada/Saskatchewan</timezone>
  <offset>21600</offset>
  <display>GMT-06:00</display>
  <name>Saskatchewan</name>
</timezone>
<timezone>
  <timezone>America/Dawson_Creek</timezone>
  <offset>25200</offset>
  <display>GMT-07:00</display>
  <name>Arizona</name>
</timezone>
<timezone>
  <timezone>America/Chihuahua</timezone>
  <offset>25200</offset>
  <display>GMT-07:00</display>
  <name>Chihuahua, La Paz, Mazatlan</name>
</timezone>
<timezone>
  <timezone>America/Denver</timezone>
  <offset>25200</offset>
  <display>GMT-07:00</display>
  <name>Mountain Time, US &amp; Canada</name>
</timezone>
<timezone>
  <timezone>America/Ensenada</timezone>
  <offset>28800</offset>
  <display>GMT-08:00</display>
  <name>Tijuana, Baja California</name>
</timezone>
<timezone>
  <timezone>America/Los_Angeles</timezone>
  <offset>28800</offset>
  <display>GMT-08:00</display>
  <name>Pacific Time, US &amp; Canada</name>
</timezone>
<timezone>
  <timezone>America/Anchorage</timezone>
  <offset>32400</offset>
  <display>GMT-09:00</display>
  <name>Alaska</name>
</timezone>
<timezone>
  <timezone>Etc/GMT+10</timezone>
  <offset>36000</offset>
  <display>GMT-10:00</display>
  <name>Hawaii</name>
</timezone>
<timezone>
  <timezone>Pacific/Midway</timezone>
  <offset>39600</offset>
  <display>GMT-11:00</display>
  <name>Midway Island, Samoa</name>
</timezone>
<timezone>
  <timezone>Etc/GMT+12</timezone>
  <offset>43200</offset>
  <display>GMT-12:00</display>
  <name>International Date Line West</name>
</timezone>
</timezones>
  {% endresponse %}
{% endapiexample %}
