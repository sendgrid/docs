import plane from '../img/icon-sending-email.svg';
import analytics from '../img/icon-analytics.svg';
import partners from '../img/icon-partners.svg';
import parse from '../img/icon-parse.svg';

const FOR_DEVS_CARDS = [
  {
    ICON: plane,
    TITLE: 'Sending Email',
    LINKS: [
      { URL: '/for-developers/sending-email/curl-examples/', TEXTNODE: 'cURL Examples for Common Use Cases' },
      { URL: '/for-developers/sending-email/sandbox-mode/', TEXTNODE: 'Sandbox Mode' },
      { URL: '/for-developers/sending-email/getting-started-smtp/', TEXTNODE: 'How to Send an SMTP Email' },
    ],
    BUTTON_LINK: '/for-developers/sending-email/',
  },
  {
    ICON: parse,
    TITLE: 'Parsing Email',
    LINKS: [
      { URL: '/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/', TEXTNODE: 'Getting Started with Inbound Parse' },
      { URL: '/for-developers/parsing-email/inbound-email/', TEXTNODE: 'Inbound Parse Overview' }
    ],
    BUTTON_LINK: '/for-developers/parsing-email/',
  },
  {
    ICON: analytics,
    TITLE: 'Tracking Events',
    LINKS: [
      { URL: '/for-developers/tracking-events/getting-started-event-webhook/', TEXTNODE: 'Getting Started with the Event Webhook' },
      { URL: '/for-developers/tracking-events/event/', TEXTNODE: 'Event Webhook Reference' },
      { URL: '/for-developers/tracking-events/troubleshooting/', TEXTNODE: 'Troubleshooting the Event Webhook' },
    ],
    BUTTON_LINK: '/for-developers/tracking-events/',
  },
  {
    ICON: partners,
    TITLE: 'Partners',
    LINKS: [
      { URL: 'for-developers/partners/amazon-marketplace/', TEXTNODE: 'Amazon' },
      { URL: '/for-developers/partners/google/', TEXTNODE: 'Google' },
      { URL: '/for-developers/partners/microsoft-azure/', TEXTNODE: 'Microsoft Azure' },
    ],
    BUTTON_LINK: '/for-developers/partners/',
  },
];

export default FOR_DEVS_CARDS;
