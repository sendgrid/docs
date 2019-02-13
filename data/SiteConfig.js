const config = {
  env: process.env.NODE_ENV,
  docsDir: 'docs',
  siteTitle: 'SendGrid Documentation',
  siteTitleAlt: 'SendGrid Knowledge Center',
  siteLogo: 'https://sendgrid.com/brand/sg-twilio/sg-twilio-lockup.svg',
  ogImage: 'https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_Social.png',
  siteUrl: 'https://sendgrid.com',
  gitHubMarkdownPath: 'https://github.com/sendgrid/docs/tree/develop/content/docs',
  pathPrefix: '/docs',
  siteDescription: 'Learn how to get started using SendGrid. Integrate in minutes, test for free, and get access to documents to help solve your email deliverability problems.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-12399264-1',
  userTwitter: 'sendgrid',
};

config.envPrefix = process.env.NODE_ENV === 'development' ? '' : config.pathPrefix;

module.exports = config;
