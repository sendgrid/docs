---
seo:
  title: ASCII Encoding
  description: 7 bit encoding is the same as ASCII encoding, which is used for storing letters in binary.
  keywords:
title: 7 Bit Encoding
weight: 0
layout: page
navigation:
  show: false
---

7 bit encoding is a reference to the ASCII character set, which is a set of 128 English alphabet characters and is used to store letters in binary. The set includes
all the English lowercase letters, uppercase letters, and numbers from 0 to 9.

The reason for the characters to be encoded to 7-bits, is because early computers handled data in bytes, or 8 bits. The extra bit was originally reserved for error checking.

In this encoding we get 7 digit representations in 0s and 1s for each of the English letters we are trying to transmit.

SendGrid requires 7 bit encoding in our [SMTPAPI categories header]({{root_url}}/for-developers/sending-email/categories/).

For more information, visit Wikipedia for the entire [history of ASCII](http://en.wikipedia.org/wiki/ASCII).
