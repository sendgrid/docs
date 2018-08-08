import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';

const HOME_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/knowledge-center/sending-email/how-to-send-email/', TEXTNODE: 'Sending Email with Marketing Campaigns' },
      { URL: '/knowledge-center/sending-email/editor/', TEXTNODE: 'The Design & Code Editor' },
      { URL: '/knowledge-center/sending-email/a-b-testing/', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/knowledge-center/sending-email/',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts',
    LINKS: [
      { URL: '/knowledge-center/managing-contacts/adding-contacts/', TEXTNODE: 'Adding Contacts' },
      { URL: '/knowledge-center/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
      { URL: '/knowledge-center/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    ],
    BUTTON_LINK: '/knowledge-center/managing-contacts/',
  },
  {
    ICON: analytics,
    TITLE: 'Analytics & Reporting',
    LINKS: [
      { URL: '/knowledge-center/analytics-and-reporting/email-activity-feed/', TEXTNODE: 'The Email Activity Feed' },
      { URL: '/knowledge-center/analytics-and-reporting/campaign-stats/', TEXTNODE: 'Campaign Statistics' },
      { URL: '/knowledge-center/analytics-and-reporting/spam-reports/', TEXTNODE: 'Spam Reports' },
    ],
    BUTTON_LINK: '/knowledge-center/analytics-and-reporting/',
  },
  {
    ICON: account,
    TITLE: 'Account & Settings',
    LINKS: [
      { URL: '/knowledge-center/account-and-settings/resetting-your-username-and-password/', TEXTNODE: 'Resetting Your Username and Password' },
      { URL: '/knowledge-center/account-and-settings/subusers/', TEXTNODE: 'Subusers' },
      { URL: '/knowledge-center/analytics-and-reporting/stats-overview/', TEXTNODE: 'Statistics Overview' },
    ],
    BUTTON_LINK: '/knowledge-center/account-and-settings/',
  },
];

export default HOME_CARDS;
