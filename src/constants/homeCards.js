import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';

const HOME_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/ui/sending-email/how-to-send-email-with-marketing-campaigns/', TEXTNODE: 'Sending Email with Marketing Campaigns' },
      { URL: '/ui/sending-email/editor/', TEXTNODE: 'The Design & Code Editor' },
      { URL: '/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/', TEXTNODE: 'Sending email with Dynamic Transactional Templates' },
    ],
    BUTTON_LINK: '/ui/sending-email/',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts with Marketing Campaigns',
    LINKS: [
      { URL: '/ui/managing-contacts/adding-contacts/', TEXTNODE: 'Adding Contacts' },
      { URL: '/ui/managing-contacts/building-your-contact-list/', TEXTNODE: 'Contacts Best Practices' },
      { URL: '/ui/managing-contacts/segmenting-your-contacts/', TEXTNODE: 'Segmenting Contacts' },
    ],
    BUTTON_LINK: '/ui/managing-contacts/',
  },
  {
    ICON: analytics,
    TITLE: 'Analytics & Reporting',
    LINKS: [
      { URL: '/ui/analytics-and-reporting/email-activity-feed/', TEXTNODE: 'The Email Activity Feed' },
      { URL: '/ui/analytics-and-reporting/marketing-campaigns-stats/', TEXTNODE: 'Marketing Campaigns Statistics' },
      { URL: '/ui/analytics-and-reporting/stats-overview/', TEXTNODE: 'Statistics Overview' },
    ],
    BUTTON_LINK: '/ui/analytics-and-reporting/',
  },
  {
    ICON: account,
    TITLE: 'Account & Settings',
    LINKS: [
      { URL: '/ui/account-and-settings/create-and-manage-api-keys/', TEXTNODE: 'API Keys' },
      { URL: '/ui/account-and-settings/resetting-your-username-and-password/', TEXTNODE: 'Resetting Your Username and Password' },
      { URL: '/ui/account-and-settings/how-to-set-up-domain-authentication/', TEXTNODE: 'How to set up Domain Authentication' },
    ],
    BUTTON_LINK: '/ui/account-and-settings/',
  },
];

export default HOME_CARDS;
