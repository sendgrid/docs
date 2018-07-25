import plane from '../img/icon-sending-email.svg';
import contacts from '../img/icon-contacts.svg';
import analytics from '../img/icon-analytics.svg';
import account from '../img/icon-account.svg';
import api from '../img/icon-api.svg';
import parse from '../img/icon-parse.svg';

const FOR_DEVS_CARDS = [
  {
    ICON: api,
    TITLE: 'Getting Started',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/getting-started/',
  },
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns :)' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/sending-email/',
  },
  {
    ICON: parse,
    TITLE: 'Parsing Email',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/parsing-email/',
  },
  {
    ICON: contacts,
    TITLE: 'Managing Contacts',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/managing-contacts/',
  },
  {
    ICON: analytics,
    TITLE: 'Tracking Events',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/tracking-events/',
  },
  {
    ICON: account,
    TITLE: 'Partners',
    LINKS: [
      { URL: '/foo-bar', TEXTNODE: 'Sending Email with Markting Campaigns' },
      { URL: '/foo-bar', TEXTNODE: 'Using the Template Editor' },
      { URL: '/foo-bar', TEXTNODE: 'A/B Testing Your Content' },
    ],
    BUTTON_LINK: '/for-developers/partners/',
  },
];

export default FOR_DEVS_CARDS;
