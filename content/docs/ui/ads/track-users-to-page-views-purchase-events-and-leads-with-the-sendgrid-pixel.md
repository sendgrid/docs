---
layout: page
weight: 0
title: Tracking users to page views, purchase events and leads with the SendGrid Pixel
group: tracking
seo:
  title: Tracking users to page views, purchase events, and leads with the Twilio SendGrid Pixel
  description: Learn how to track users to page views, purchase events, and leads with the Twilio SendGrid Pixel
  keywords: 
navigation:
  show: true
---
<call-out>

Ads is currently in closed beta. During beta, only approved participants have access to the feature. Functionality and performance might not be working quite like we want it to and we reserve the right to change the functionality at any time without warning. For more information on the Ads beta, or to join the beta waitlist, see our [Ads Solution Page](https://sendgrid.com/solutions/ads/).

</call-out>

To optimize your view into your campaign analytics, we highly recommend that you take the time to install the Twilio SendGrid Pixel. This will give you the ability to associate users with website activity, purchase events, and lead activities. You can also use this data to send targeted campaigns to your known users based on specific events. 

## Track users to Page Views 
 
Page views are automatically recorded by the pixel. You’ll need to associate page views to the identified user by implementing the Identity Call (see steps above).  This association will allow you to send targeted campaigns to users based on page view activity. For example, when a user visits your pricing page you can automatically retarget this user with an advertisement.
 
The sendgrid.page() call is already included in the Twilio SendGrid pixel. We will automatically record the following with zero configuration needed from you.

```
sendgrid.page('Pricing and Plans | SendGrid', {
  title: 'Pricing and Plans | SendGrid',
  url: 'https://sendgrid.com/pricing',
  path: '/pricing',
  referrer: 'https://sendgrid.com/labs'
});
```

## Track users to website activity with an Identity Call

With this association in place, you can create campaigns that target users visiting a specific web page or performing a specific event such as a purchase.
On all pages where your Twilio SendGrid pixel is installed and you know your users’ identity, you will include an Identity Call and pass a unique id and the email address of the user. 

Here is what the code for an Identity Call looks like:  
```
sendgrid.identify([userId], [traits]);
Here is an example of an Identity Call:
sendgrid.identify('123456', {
  email: 'mike@example.com'
});
```

## Track users to Purchase Events on your website

Purchase event can be tracked when a customer completes the purchase of a product or service from your business. 

<table>
 <tr>
    <th><span style="font-weight:bold">Property</span></th>
    <th><span style="font-weight:bold">Type</span></th>
    <th><span style="font-weight:bold">Description</span></th>
  </tr>
  <tr>
    <td>total</td>
    <td>Number</td>
    <td>The total value of the order</td>
  </tr>
  <tr>
    <td>currency</td>
    <td>String</td>
    <td>Three letter currency code for the order</td>
  </tr>
  <tr>
    <td>products</td>
    <td>Array</td>
    <td>List of products in order</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>String</td>
    <td>A unique ID for the product</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Name of the product</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>Stock Keeping Unit (SKU) for the product</td>
  </tr>
  <tr>
    <td>price</td>
    <td>Number</td>
    <td>Price of the individual product</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>Number</td>
    <td>Quantity purchased of the product</td>
  </tr>
  <tr>
    <td>category</td>
    <td>String</td>
    <td>Category of the product</td>
  </tr>
</table>

It is recommended you supply the order and product-specific properties with the Purchase event. Here is an example that contains all available purchase event properties supported:
```
sendgrid.track('Purchase Completed', {
  total: 119.85,
  currency: 'USD',
  products: [
    {
      product_id: '1',
      name: 'Essentials Plan',
      sku: 'SKU-1',
      price: 19.95,
      quantity: 2,
      category: 'Transactional Email'
    },
    {
      product_id: '2',
      name: 'Pro Plan',
      sku: 'SKU-2',
      price: 79.95,
      quantity: 1,
      category: 'Marketing Email'
    }
  ]
});
```
This is an example of that contains the minimum required for the purchase event:
```
sendgrid.track('Purchase');
```
##  Track users to specific Lead events

A Lead event should be tracked when you first capture a new email address on your website. This is considered as a new lead.

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>email</td>
    <td>String</td>
    <td>Email address of lead captured</td>
  </tr>
  <tr>
    <td>source</td>
    <td>String</td>
    <td>The source from which lead was captured</td>
  </tr>
</table>

Below is an example that contains all the available lead events properties support. We recommend including the source so that you know where your leads are getting generated.
```
sendgrid.track('Lead Captured', {
  email: 'mike@example.com',
  source: 'Landing Page 1'
});
```
Here is an example that contains the minimum required for the lead event:
```
sendgrid.track('Lead Captured', {
  email: 'mike@example.com'
});
```

### Additional Resources

- [Getting Started with Ads]({{root_url}}/ui/ads/getting-started-with-ads/)
- [Targeting the right audience for your Ads Campaign]({{root_url}}/ui/ads/target-right-audience-for-your-ads-campaign/)
- [Designing and publishing an ad]({{root_url}}/ui/ads/design-and-publish-an-ad/)
- [Analyzing the performance of your Ads campaign]({{root_url}}/ui/ads/analyze-the-performance-of-your-ads-campaign/)
