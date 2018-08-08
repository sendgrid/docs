import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';

const HOME_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/user-interface/sending-email/how-to-send-email/', TEXTNODE: 'Sending Email with Marketing Campaigns' },
      { URL: '/user-interface/sending-email/editor/', TEXTNODE: 'The Design & Code Editor' },
      { URL: '/user-interface/sending-email/a-b-testing/', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/user-interface/sending-email/',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts',
    LINKS: [
      { URL: '/user-interface/managing-contacts/adding-contacts/', TEXTNODE: 'Adding Contacts' },
      { URL: '/user-interface/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
      { URL: '/user-interface/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    ],
    BUTTON_LINK: '/user-interface/managing-contacts/',
  },
  {
    ICON: analytics,
    TITLE: 'Analytics & Reporting',
    LINKS: [
      { URL: '/user-interface/analytics-and-reporting/email-activity-feed/', TEXTNODE: 'The Email Activity Feed' },
      { URL: '/user-interface/analytics-and-reporting/campaign-stats/', TEXTNODE: 'Campaign Statistics' },
      { URL: '/user-interface/analytics-and-reporting/spam-reports/', TEXTNODE: 'Spam Reports' },
    ],
    BUTTON_LINK: '/user-interface/analytics-and-reporting/',
  },
  {
    ICON: account,
    TITLE: 'Account & Settings',
    LINKS: [
      { URL: '/user-interface/account-and-settings/resetting-your-username-and-password/', TEXTNODE: 'Resetting Your Username and Password' },
      { URL: '/user-interface/account-and-settings/subusers/', TEXTNODE: 'Subusers' },
      { URL: '/user-interface/analytics-and-reporting/stats-overview/', TEXTNODE: 'Statistics Overview' },
    ],
    BUTTON_LINK: '/user-interface/account-and-settings/',
  },
];

export default HOME_CARDS;
