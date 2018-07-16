import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';

const HOME_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/help-support/sending-email',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/help-support/managing-contacts',
  },
  {
    ICON: analytics,
    TITLE: 'Analytics & Reporting',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/help-support/analytics-reporting',
  },
  {
    ICON: account,
    TITLE: 'Account & Settings',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/help-support/account-settings',
  },
];

export default HOME_CARDS;
