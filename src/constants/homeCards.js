import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';

const HOME_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/help-support/sending-email/how-to-send-email/', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/help-support/sending-email/editor/', TEXTNODE: 'The Design & Code Editor' },
      { URL: '/help-support/sending-email/a-b-testing/', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/help-support/sending-email/',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts',
    LINKS: [
      { URL: '/help-support/managing-contacts/adding-contacts/', TEXTNODE: 'Adding Contacts' },
      { URL: '/help-support/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
      { URL: '/help-support/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    ],
    BUTTON_LINK: '/help-support/managing-contacts/',
  },
  {
    ICON: analytics,
    TITLE: 'Analytics & Reporting',
    LINKS: [
      { URL: '/help-support/analytics-and-reporting/email-activity-feed/', TEXTNODE: 'The Email Activity Feed' },
      { URL: '/help-support/analytics-and-reporting/campaign-stats/', TEXTNODE: 'Campaign Statistics' },
      { URL: '/help-support/analytics-and-reporting/spam-reports/', TEXTNODE: 'Spam Reports' },
    ],
    BUTTON_LINK: '/help-support/analytics-and-reporting/',
  },
  {
    ICON: account,
    TITLE: 'Account & Settings',
    LINKS: [
      { URL: '/help-support/account-and-settings/resetting-your-username-and-password/', TEXTNODE: 'Resetting Your Username and Password' },
      { URL: '/help-support/account-and-settings/subusers/', TEXTNODE: 'Subusers' },
      { URL: '/help-support/account-and-settings/reading-your-invoice/', TEXTNODE: 'Reading your invoice' },
    ],
    BUTTON_LINK: '/help-support/account-and-settings/',
  },
];

export default HOME_CARDS;
