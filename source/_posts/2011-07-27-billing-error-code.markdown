---
comments: false
date: 2011-07-27 10:51:59
layout: post
slug: billing-error-code
title: Billing Error Code
wordpress_id: 2402
categories:
- Billing
---

## General Errors:









Error Code
Short Message
Long Message
Correcting This Error







10002


Authentication/Authorization Failed


Username/Password is incorrect


This error can be caused by an incorrect API username, an incorrect  API password, or an invalid API signature. Make sure that all three of  these values are correct. For your security, we do not report  exactly which of these three values might be in error.






10002


Authentication/Authorization Failed


You do not have permission to make this API call








10002


Authentication/Authorization Failed


Account is locked or inactive








10002


Internal Error


Internal Error








10002


Authentication/Authorization Failed


Internal Error








10002


Authentication/Authorization Failed


Account is not verified








10002


Authentication/Authorization Failed


This call is not defined in the database!








10002


Authentication/Authorization Failed


Token is not valid








10002


Restricted account


Account is restricted


Your merchant account has been restricted. Contact your account manager for resolution.






10002


Authentication/Authorization Failed


API access is disabled for this account








10002


Authentication/Authorization Failed


Client certificate is disabled








10006


Version error


Version is not supported








10008


Security error


Security header is not valid








10101


This API Temporarily Unavailable


This API is temporarily unavailable. Please try later.








## Payment Errors









Error Code
Short Message
Long Message
Corrective Action







10102


PaymentAction of Order Temporarily Unavailable


PaymentAction of Order is temporarily unavailable. Please try later or use other PaymentAction.








10401


Transaction refused because of an invalid argument. See additional error messages for details.


Order total is missing.








10418


Transaction refused because of an invalid argument. See additional error messages for details.


The currencies of the shopping cart amounts must be the same.








10426


Transaction refused because of an invalid argument. See additional error messages for details.


Item total is invalid.








10427


Transaction refused because of an invalid argument. See additional error messages for details.


Shipping total is invalid.








10428


Transaction refused because of an invalid argument. See additional error messages for details.


Handling total is invalid.








10429


Transaction refused because of an invalid argument. See additional error messages for details.


Tax total is invalid.








10432


Invalid argument


Invoice ID value exceeds maximum allowable length.








10500


Invalid Configuration


This transaction cannot be processed due to an invalid merchant configuration.


Occurs when you have not agreed to the billing agreement.






10501


Invalid Configuration


This transaction cannot be processed due to an invalid merchant configuration.


Occurs when the billing agreement is disabled or inactive.






10502


Invalid Data


This transaction cannot be processed. Please use a valid credit card.


The credit card used is expired.






10504


Invalid Data


This transaction cannot be processed. Please enter a valid Credit Card Verification Number.


The CVV provided is invalid. The CVV is between 3-4 digits long.






10505


Gateway Decline


This transaction cannot be processed.


The transaction was refused because the AVS response returned the  value of N, and the merchant account is not able to accept such  transactions.






10507


Invalid Configuration


This transaction cannot be processed. Please contact Customer Service.


Your account is restricted - contact for more information.






10508


Invalid Data


This transaction cannot be processed. Please enter a valid credit card expiration date.


The expiration date must be a two-digit month and four-digit year.






10509


Invalid Data


This transaction cannot be processed.


You must submit an IP address of the buyer with each API call.






10510


Invalid Data


The credit card type is not supported. Try another card type.


The credit card type entered is not currently supported by us.






10511


Invalid Data


This transaction cannot be processed.


The merchant selected a value for the PaymentAction field that is not supported.






10512


Invalid Data


This transaction cannot be processed. Please enter a first name.


The first name of the buyer is required for this merchant.






10513


Invalid Data


This transaction cannot be processed. Please enter a last name.


The last name of the buyer is required for this merchant.






10519


Invalid Data


Please enter a credit card.


The credit card field was blank.






10520


Invalid Data


This transaction cannot be processed.


The total amount and item amounts do not match.






10521


Invalid Data


This transaction cannot be processed. Please enter a valid credit card.


The credit card entered is invalid.






10523


Internal Error


This transaction cannot be processed.


None - this is a internal error.






10525


Invalid Data


This transaction cannot be processed. The amount to be charged is zero.


The merchant entered a amount of zero.






10526


Invalid Data


This transaction cannot be processed. The currency is not supported at this time.


The currency code entered is not supported.






10527


Invalid Data


This transaction cannot be processed. Please enter a valid credit card number and type.


The credit card entered is invalid.






10534


Gateway Decline


This transaction cannot be processed. Please enter a valid credit card number and type.


The credit card entered is currently restricted by us. Contact us for more information.






10535


Gateway Decline


This transaction cannot be processed. Please enter a valid credit card number and type.


The credit card entered is invalid.






10536


Invalid Data


This transaction cannot be processed.


The merchant entered an invoice ID that is already associated with a  transaction by the same merchant. By default, the invoice ID must be  unique for all transactions. To change this setting, contact customer service.






10537


Filter Decline


This transaction cannot be processed.


The transaction was declined by the country filter managed by the  merchant. To accept this transaction, change your risk settings.






10538


Filter Decline


This transaction cannot be processed.


The transaction was declined by the maximum amount filter managed by  the merchant. To accept this transaction, change your risk settings.






10539


Filter Decline


This transaction cannot be processed.


The transaction was declined by us. Contact us for more information.






10540


Invalid Data


The transaction cannot be processed due to an invalid address.


The transaction was declined by us because of an invalid address.






10541


Gateway Decline


This transaction cannot be processed. Please enter a valid credit card number and type.


The credit card entered is currently restricted by us. Contact us for more information.






10542


Invalid Data


This transaction cannot be processed. Please enter a valid email address.


The email address provided by the buyer is in an invalid format.






10544


Gateway Decline


This transaction cannot be processed.


The transaction was declined by us. Contact us for more information.






10545


Gateway Decline


This transaction cannot be processed.


The transaction was declined by us because of possible fraudulent activity. Contact us for more information.






10546


Gateway Decline


This transaction cannot be processed.


The transaction was declined by us because of possible fraudulent  activity on the IP address. Contact us for more information.






10547


Internal Error


This transaction cannot be processed.


None - this is a internal error.






10548


Invalid Configuration


This transaction cannot be processed. The merchant’s account is not able to process transactions.


The merchant account attempting the transaction is not a business account. Check your account settings.






10549


Invalid Configuration


This transaction cannot be processed. The merchan’s account is not able to process transactions.


The merchant account attempting the transaction is not able to  process Direct Payment transactions. Contact us for more  information.






10550


Invalid Configuration


This transaction cannot be processed.


Access to Direct Payment was disabled for your account. Contact us for more information.






10552


Invalid Configuration


This transaction cannot be processed.


The merchant account attempting the transaction does not have a  confirmed email address with us. Check your account settings.






10553


Gateway Decline


This transaction cannot be processed.


The merchant attempted a transaction where the amount exceeded the upper limit for that merchant.






10554


Filter Decline


This transaction cannot be processed.


The transaction was declined because of a merchant risk filter for  AVS. Specifically, the merchant has set to decline transaction when the  AVS returned a no match (AVS = N).






10555


Filter Decline


This transaction cannot be processed.


The transaction was declined because of a merchant risk filter for  AVS. Specifically, the merchant has set to decline transaction when the  AVS returned a partial match.






10556


Filter Decline


This transaction cannot be processed.


The transaction was declined because of a merchant risk filter for  AVS. Specifically, the merchant has set to decline transaction when the  AVS was unsupported.






10561


Invalid Data


There’s an error with this transaction. Please enter complete billing address.








10562


Invalid Data


This transaction cannot be processed. Please enter a valid credit card expiration year.








10563


Invalid Data


This transaction cannot be processed. Please enter a valid credit card expiration month.








10564


Gateway Decline


This transaction cannot be processed.


There was a problem processing this transaction.






10565


Merchant country unsupported


The merchant country is not supported.








10566


Credit card type unsupported


The credit card type is not supported.








10567


Invalid Data


This transaction cannot be processed. Please enter a valid credit card number and type.








10571


Transaction approved, but with invalid Card Security Code (CSC) format.


This transaction was approved, although the Card Security Code (CSC)  had too few, too many, or invalid characters. Based on your account  profile settings, the invalid CSC was not given to the card issuer for  its approval process.


If you want to require valid CVV values, change the risk control settings in your account profile.






10701


Invalid Data


There’s an error with this transaction. Please enter a valid billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10702


Invalid Data


There’s an error with this transaction. Please enter a valid address1 in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10703


Invalid Data


There’s an error with this transaction. Please enter a valid address2 in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10704


Invalid Data


There’s an error with this transaction. Please enter a valid city in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10705


Invalid Data


There’s an error with this transaction. Please enter a valid state in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10706


Invalid Data


There’s an error with this transaction. Please enter a valid postal code in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10707


Invalid Data


There’s an error with this transaction. Please enter a valid country in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10708


Invalid Data


There’s an error with this transaction. Please enter a complete billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10709


Invalid Data


There’s an error with this transaction. Please enter an address1 in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10709


Invalid Data


There’s an error with this transaction. Please enter an address1 in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10710


Invalid Data


There’s an error with this transaction. Please enter a city in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10710


Invalid Data


There’s an error with this transaction. Please enter a city in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10711


Invalid Data


There’s an error with this transaction. Please enter your state in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10712


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10713


Invalid Data


There’s an error with this transaction. Please enter a country in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10713


Invalid Data


There’s an error with this transaction. Please enter a country in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10714


Invalid Data


There’s an error with this transaction. Please enter a valid billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10715


Invalid Data


There’s an error with this transaction. Please enter a valid state in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10716


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10717


Invalid Data


There’s an error with this transaction. Please enter a valid postal code in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10718


Invalid Data


There’s an error with this transaction. Please enter a valid city and state in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10719


Invalid Data


There’s an error with this transaction. Please enter a valid shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10720


Invalid Data


There’s an error with this transaction. Please enter a valid address1 in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10721


Invalid Data


There’s an error with this transaction. Please enter a valid address2 in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10722


Invalid Data


There’s an error with this transaction. Please enter a valid city in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10723


Invalid Data


There’s an error with this transaction. Please enter a valid state in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10724


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10725


Invalid Data


There’s an error with this transaction. Please enter a valid country in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10726


Invalid Data


There’s an error with this transaction. Please enter a complete shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10726


Invalid Data


There’s an error with this transaction. Please enter a complete shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10727


Invalid Data


There’s an error with this transaction. Please enter an address1 in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10727


Invalid Data


There’s an error with this transaction. Please enter an address1 in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10728


Invalid Data


There’s an error with this transaction. Please enter a city in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10728


Invalid Data


There’s an error with this transaction. Please enter a city in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10729


Invalid Data


There’s an error with this transaction. Please enter your state in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10730


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10731


Invalid Data


There’s an error with this transaction. Please enter a country in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10731


Invalid Data


There’s an error with this transaction. Please enter a country in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10732


Invalid Data


There’s an error with this transaction. Please enter a valid shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10733


Invalid Data


There’s an error with this transaction. Please enter a valid state in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10734


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10735


Invalid Data


There’s an error with this transaction. Please enter your five digit postal code in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10736


Invalid Data


There’s an error with this transaction. Please enter a valid city and state in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10744


Invalid Data


This transaction cannot be processed. Please enter a valid country code in the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10745


Invalid Data


This transaction cannot be processed. Please enter a valid country code in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10746


Invalid Data


This transaction cannot be processed. Please use a valid country on the billing address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10747


Invalid Data


This transaction cannot be processed.


The merchant entered an IP address that was in an invalid format. The IP address must be in a format such as 123.456.123.456.






10748


Invalid Data


This transaction cannot be processed without a Credit Card Verification Number.


The merchant’s configuration requires a CVV to be entered, but no CVV  was provided with this transaction. Contact us if you wish to  change this setting.






10750


Invalid Data


There’s an error with this transaction. Please enter a valid state in the shipping address.


There was a problem with a particular field in the address. The long error message will tell you what field is invalid.






10751


Invalid Data


There’s an error with this transaction. Please enter a valid state in the billing address.


The merchant provided an address either in the United States or  Canada, but the state provided is not a valid state in either country.






10752


Gateway Decline


This transaction cannot be processed.


The transaction was declined by the issuing bank, not us. The merchant should attempt another card.






10754


Gateway Decline


This transaction cannot be processed.


The transaction was declined by us. Contact us for more information.






10755


Invalid Data


This transaction cannot be processed due to an unsupported currency.


The currency code entered by the merchant is not supported.






10756


Gateway Decline


The transaction cannot be processed. The country and billing address associated with this credit card do not match.


None - this is an internal error.






10758


Invalid Configuration


There’s been an error due to invalid API username and/or password.


The API username or password is incorrect for this merchant.






10759


Gateway Decline


This transaction cannot be processed. Please enter a valid credit card number and type.


The transaction was declined by us. Contact us for more information.






10760


Invalid Configuration


This transaction cannot be processed. The country listed for your business address is not currently supported.


The merchant’s country of residence listed in their account is  not currently supported to allow Direct Payment transactions.






10761


Gateway Decline


This transaction cannot be processed. Please check the status of your first transaction before placing another order.


The transaction was declined because we are currently processing a  transaction by the same buyer for the same amount. Can occur when a  buyer submits multiple, identical transactions in quick succession.






10762


Gateway Decline


This transaction cannot be processed.


The CVV provide is invalid. The CVV is between 3-4 digits long.






10763


Invalid Data


This transaction cannot be processed.


None - this is an internal error.






10764


This transaction cannot be processed at this time. Please try again later.


This transaction cannot be processed at this time. Please try again later.


The transaction was declined by us. Please try again later. If the problem persists, please contact us.






11068


Seller restriction.


All sellers restricted.








11610


Payment Pending your review in Fraud Management Filters


Payment Pending your review in Fraud Management Filters








11611


Transaction blocked by your settings in FMF


Transaction blocked by your settings in FMF








11612


Could not process your request to accept/deny the transaction


Could not process your request to accept/deny the transaction








11821


This transaction cannot be processed


This transaction cannot be processed because it has already been denied by a Fraud Management Filter


You cannot capture a payment after it has been denied by a Fraud  Management Filter. You can control whether a Fraud Management Filter  will deny a transaction by changing the filter's settings in the  profile.






12000


Transaction is not compliant due to missing or invalid 3-D Secure authentication values.


Transaction is not compliant due to missing or invalid 3-D Secure authentication values.


Check ECI, ECI3DS, CAVV, XID fields.






12001


Transaction is not compliant due to missing or invalid 3-D Secure authentication values.


Transaction is not compliant due to missing or invalid 3-D Secure authentication values.


Check ECI, ECI3DS, CAVV, XID fields.






15001


Gateway Decline


This transaction cannot be processed.


The transaction was rejected by us because of excessive failures  over a short period of time for this credit card. Contact us for  more information.






15002


Gateway Decline


This transaction cannot be processed.


The transaction was declined by us. Contact us for more information.






15003


Invalid Configuration


This transaction cannot be processed.


The transaction was declined because the merchant does not have a  valid commercial entity agreement on file with us. Contact us  for more information.






15004


Gateway Decline


This transaction cannot be processed. Please enter a valid Credit Card Verification Number.


The transaction was declined because the CVV entered does not match the credit card.






15005


Processor Decline


This transaction cannot be processed.


The transaction was declined by the issuing bank, not us. The merchant should attempt another card.






15006


Processor Decline


This transaction cannot be processed. Please enter a valid credit card number and type.


The transaction was declined by the issuing bank, not us. The merchant should attempt another card.






15007


Processor Decline


This transaction cannot be processed. Please use a valid credit card.


The transaction was declined by the issuing bank because of an expired credit card. The merchant should attempt another card.






15008


Invalid Data


This transaction has been completed, but the total of items in the cart did not match the total of all items.








## Authorization and Capture Errors










Error Code
Short Message
Long Message

Correcting This Error...







10001


Internal Error


Internal Error










10001


Internal Error


Transaction failed due to internal error










10004


Internal Error


Invalid argument










10007


Permission denied


You do not have permissions to make this API call










10009


Transaction refused


Account is locked or inactive




Retry the request at a later time or close order.






10010


Transaction refused because of an invalid argument. See additional error messages for details.


Invalid argument










10202


Exceed max


Transaction would exceed user’s monthly maximum










10600


Authorization voided.


Authorization is voided.




Close the order or authorization.






10601


Authorization expired.


Authorization has expired.




Close the order or authorization.






10602


Authorization completed.


Authorization has already been completed.




Close the order or authorization.






10603


The buyer is restricted.


The buyer account is restricted.




Contact the buyer.






10604


Authorization must include both buyer and seller.


Authorization transaction cannot be unilateral. It must include both buyer and seller to make an auth.




Review the order to ensure customer and seller are both members.






10605


Unsupported currency.


Currency is not supported.




Retry the request with a supported currency.






10606


Buyer cannot pay.


Transaction rejected, please contact the buyer.




Contact the buyer.






10607


Auth&Capture; unavailable.


Authorization & Capture feature unavailable.




Contact our Customer Service.






10608


Funding source missing.


The funding source is missing.




Contact the buyer.






10609


Invalid transactionID.


Transaction id is invalid.




Check the validity of the authorization ID and reattempt the request.






10610


Amount limit exceeded.


Amount specified exceeds allowable limit.




Reattempt the request with a lower amount.






10611


Not enabled.


Authorization & Capture feature is not enabled for the merchant. Contact customer service.




Contact our Customer Service.






10612


No more settlement.


Maxmimum number of allowable settlements has been reached. No more settlement for the authorization.




Close the order.






10613


Currency mismatch.


Currency of capture must be the same as currency of authorization.




Ensure that the currencies are the same, and retry the request.






10614


Cannot void reauth.


You can void only the original authorization, not a reauthorization.




Void the authorization.






10615


Cannot reauth reauth.


You can reauthorize only the original authorization, not a reauthorization.




Capture the reauthorization.






10616


Maximum number of reauthorization allowed for the auth is reached.


Maximum number of reauthorization allowed for the auth is reached.




Capture or close the authorization






10617


Reauthorization not allowed.


Reauthorization is not allowed inside honor period.




Capture the authorization or reauthorize outside of honor period.






10618


Transaction already voided or expired.


Transaction has already been voided or expired.




Close the order or authorization.






10619


Invoice ID value exceeds maximum allowable length.


Invoice ID value exceeds maximum allowable length.




Check the length of the invoice ID and reattempt the request.






10620


Order has already been voided, expired, or completed.


Order has already been voided, expired, or completed.




Close this order.






10621


Order has expired.


Order has expired.




Close this order.






10622


Order is voided.


Order is voided.




Close this order.






10623


Maximum number of authorization allowed for the order is reached.


Maximum number of authorization allowed for the order is reached.




Capture this order.






10624


Duplicate invoice


Payment has already been made for this Invoice ID.




Review the invoice ID and reattempt the request.






10625


Transaction refused because of an invalid argument. See additional error messages for details.


The amount exceeds the maximum amount for a single transaction.




Reattempt the request with a lower amount.






10626


Risk


Transaction refused due to risk model.




Contact the buyer.






10627


Transaction refused because of an invalid argument. See additional error messages for details.


The invoice ID field is not supported for basic authorizations.




The Invoice ID field can only be used with DoCapture.






10628


This transaction cannot be processed at this time. Please try again later.


This transaction cannot be processed at this time. Please try again later.




Retry the request at a later time.






10629


Reauthorization not allowed.


Reauthorization is not allowed for this type of authorization.




Use DoAuthorization to authorize the an order.






10630


Item amount is invalid.


Item amount is invalid.




Check the item amount to ensure that it is not zero or negative.






10631


Processor Warning.


The authorization is being processed.










11094


This authorization cannot be voided, reauthorized, or captured against.


This authorization can only be handled through the marketplace which  created it. It cannot directly be voided, reauthorized, or captured  against.








