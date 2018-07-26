import plane from '../img/icon-sending-email.svg';
import analytics from '../img/icon-analytics.svg';
import partners from '../img/icon-partners.svg';
import parse from '../img/icon-parse.svg';

const FOR_DEVS_CARDS = [
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
    ICON: partners,
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
