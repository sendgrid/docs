---
comments: false
date: 2012-05-07 15:52:11
layout: page
slug: node-js-email-example-for-smtp
title: Node.js Email Example For SMTP
wordpress_id: 3899
---

If you are using Node.js and would like to send email through SendGrid, we've put together a nice module to handle this for you. It is available with the MIT license, and you can install it like this:

`npm install sendgrid-nodejs`

Once you have the module installed, it can be as simple as the following code snippet, modified to your specifics, of course:

`
var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid(user, key);
sendgrid.send({
  to: 'example@example.com',
  from: 'other@example.com',
  subject: 'Hello World',
  text: 'My first email through SendGrid'
}, function(success, message) {
  if (!success) {
    console.log(message);
  }
});
`



### Digging In Deeper


Email is the object that will help you easily prepare your message to be sent.

NOTE: anything that is available in the Email constructor is available for use in both the sendgrid.send and sendgrid.smtp functions.

To get started create an Email object:

`
var Email = require('sendgrid').Email;
var email = new Email(optionalParams);
`

You can pass in as much or as little to optionalParams as you want, as the email object has methods for manipulating all of the data.

Here is how the parameters are structured:

`
var optionalParams = {
  to: [],
  from: '',
  smtpapi: new SmtpapiHeaders(),
  subject: '',
  text: '',
  html: '',
  bcc: [],
  replyto: '',
  date: new Date(),
  files: [
    {
      filename: '',          // required only if file.content is used.
      contentType: '',       // optional
      path: '',              //
      url: '',               // == One of these three options is required
      content: ('' | Buffer) //
    }
  ],
  file_data: {},
  headers: {}
};
`

And here is a sample for using it:

`
var email = new Email({
  to: 'walks.it.in@sample.com',
  from: 'arsenal@sample.com',
  subject: 'What was Wenger thinking sending Walcott on that early?',
  text: 'Did you see that ludicrous display last night?'
});
`



### Setting data


Here is an example of all of the functions available on the email object. The comments to the right show the current state of the variables as the functions are called.

`
var email = new Email({
  to: 'denim@sample.com',
  from: 'roy@sample.com',
  subject: 'Listen',
  text: 'Have you tried turning it off and on again'
});
`

The following examples update the 'x-smtpapi' headers:

`
/* To Addresses */
email.addTo('moo@cow.com');       // to = ['moo@cow.com']
email.addTo(['solid@snake.com',
            'liquid@snake.com']); // to = ['moo@cow.com', 'solid@snake.com', 'liquid@snake.com']

/* Custom Email Headers */
email.setHeaders({full: 'hearts'});   // headers = {full: 'hearts'}
email.addHeaders({spin: 'attack'});   // headers = {full: 'hearts', spin: 'attack'}
email.setHeaders({mask: 'salesman'}); // headers = {mask: 'salesman'}

/* Substitution */
email.addSubVal('keep', 'secret'); // sub = {keep: ['secret']}
email.addSubVal('keep', 'safe');   // sub = {keep: ['secret', 'safe']}

/* Section */
email.setSection({'-charge-': 'This ship is useless.'}); // section = {'-charge-': 'This ship is useless.'}
email.addSection({'-bomber-': 'Only for sad vikings.'}); // section = {'-charge-': 'This ship is useless.','-bomber-': 'Only for sad vikings.'}
email.setSection({'-beam-': 'The best is for first'});   // section = {'-beam-': 'The best is for first'}
`

Setting unique arguments allows you to get more mojo out of your statistics:

`
email.setUniqueArgs({cow: 'chicken'}); // unique_args = {cow: 'chicken'}
email.addUniqueArgs({cat: 'dog'});     // unique_args = {cow: 'chicken', cat: 'dog'}
email.setUniqueArgs({dad: 'proud'});   // unique_args = {dad: 'proud'}
`

You can set categories with the following:

`
email.setCategory('tactics');        // category = ['tactics']
email.addCategory('advanced');       // category = ['tactics', 'advanced']
email.setCategory('snowball-fight'); // category = ['snowball-fight']
`

You can set a filter using an object literal:

`
email.setFilterSetting({
  'footer': {
    'setting': {
      'enable': 1,
      'text/plain': 'You can haz footers!'
    }
  }
});
`

Alternatively, you can add filter settings one at a time.

`
email.addFilterSetting('footer', 'enable', 1);
email.addFilterSetting('footer', 'text/html', '**boo**');
`

You can add files as attachments directly from content stored in memory, like so:

`
email.addFile({
  filename: 'secret.txt',
  content:  new Buffer('You will never know....')
});
`

Alternately, you can include files from a remote URL and will attempt to determine the file type based on the filename:

`
email.addFile({
  filename: 'icon.jpg',
  url: 'http://i.imgur.com/2fDh8.jpg'
});
`

Finally, you can add file from a path on the server's local filesystem, also attempting to determine the filetype via the filename:

`
email.addFile({
  path: '../files/resume.txt'
});
`



### Testing Your Code


Tests located in the _test/lib_ folder can be ran as-is and should all pass if your code is valid. Tests that are located in the _test/intergration_ folder require valid SendGrid account credentials inserted into _test/test.setup_ in order to run.

**_Note: Testing your code requires a valid SendGrid account and will consume credits_**

When you're ready, you can run your tests with this command:

`make test`

_**TIP: You can run individual tests with mocha /path/to/test.test.js**_
